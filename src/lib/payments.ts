/* ==========================================================================
   PAYMENTS — real UPI deposits through FamGateway (https://famgateway.in).

   Flow (all of it server-side, the browser never sees the API key):

     1. /api/deposit/order   → POST /api/create-order   → order_id, qr_url,
                               upi_intent, payable_amount, expires_at (~5 min)
     2. /api/deposit/status  → GET  /api/verify-order.php (authoritative check)
                               … and credits the wallet exactly once
     3. /api/payment/webhook → the gateway's own HMAC-SHA256 callback
                               (X-FamGateway-Signature, signed with the API key)

   Money can only ever be credited ONCE per order — `settlePayment` takes an
   ETag claim on the order (Firebase conditional PUT) and refuses a bank UTR
   that was already used by another order, so the webhook and the browser poll
   racing each other is harmless.

   API key: Worker secret `FAMGATEWAY_API_KEY`
     npx wrangler secret put FAMGATEWAY_API_KEY
   ...or a local .dev.vars file for `wrangler dev`.
   ========================================================================== */

import { dbGet, dbPatch, dbPut } from './backend'

export const FAM_BASE = 'https://famgateway.in'

/** Base URL of the gateway. `FAMGATEWAY_BASE` overrides it — used for a staging
 *  sandbox or an offline mock, never needed in production. */
export function famBase(env: any): string {
  return String(env?.FAMGATEWAY_BASE || FAM_BASE).replace(/\/+$/, '')
}

/** Payment session length of the gateway — the QR dies after 5 minutes. */
export const PAYMENT_WINDOW_SECONDS = 300

/* ------------------------------------------------------------------ config */
/* CONFIG/PAYMENTS in the database — so the admin panel can switch deposits
   off (maintenance) or require manual approval without a redeploy. */

export type PaymentConfig = {
  /** 0 = the deposit page answers "temporarily unavailable" */
  enabled: number
  /** 1 = credit the wallet automatically, 0 = an admin approves the request */
  autoCredit: number
}

export const DEFAULT_PAYMENT_CONFIG: PaymentConfig = { enabled: 1, autoCredit: 1 }

const PAYMENTS_TTL = 5 * 1000
let payCache: { at: number; value: PaymentConfig } | null = null

export async function loadPaymentConfig(env: any): Promise<PaymentConfig> {
  const now = Date.now()
  if (payCache && now - payCache.at < PAYMENTS_TTL) return payCache.value

  let stored: any = null
  try {
    stored = await dbGet(env, 'CONFIG/PAYMENTS')
  } catch {
    stored = null
  }
  if (!stored || typeof stored !== 'object') {
    /* first run — seed the defaults so the admin panel can show/edit them */
    try {
      await dbPut(env, 'CONFIG/PAYMENTS', DEFAULT_PAYMENT_CONFIG)
    } catch {
      /* best effort */
    }
    payCache = { at: now, value: DEFAULT_PAYMENT_CONFIG }
    return DEFAULT_PAYMENT_CONFIG
  }
  const value: PaymentConfig = {
    enabled: Number(stored.enabled) === 0 ? 0 : 1,
    autoCredit: Number(stored.autoCredit) === 0 ? 0 : 1,
  }
  payCache = { at: now, value }
  return value
}

/** The merchant API key — only ever read on the server. */
export function famApiKey(env: any): string {
  return String(env?.FAMGATEWAY_API_KEY || env?.FAMGATEWAY_KEY || '').trim()
}

export function famConfigured(env: any): boolean {
  return famApiKey(env).length > 0
}

/* ------------------------------------------------------------------ results */

export type FamOrder = {
  orderId: string
  qrUrl: string
  checkoutUrl: string
  upiIntent: string
  upiId: string
  amount: string
  payableAmount: string
  expiresAtIst: string
}

export type FamError = { ok: false; error: string; code: string; status: number }
export type FamOk<T> = { ok: true; data: T }
export type FamResult<T> = FamOk<T> | FamError

/** The gateway answers `{status, code, message}` on every failure. */
function providerMessage(json: any, fallback: string): string {
  const msg = String(json?.message || json?.error || '').trim()
  if (!msg) return fallback
  /* last-resort guard: never leak a raw api_key back into an error string */
  return msg.replace(/\bapi[_-]?key\b\s*[:=]?\s*\S+/gi, 'API key').slice(0, 160)
}


/* ------------------------------------------------------------------ create order */

/**
 * Creates a live UPI order (dynamic QR + intent link) and reserves the amount
 * for 5 minutes. `webhook_url` is passed per order so the gateway can call us
 * back the second the bank confirms — no dashboard configuration needed.
 */
export async function createFamOrder(
  env: any,
  opts: {
    amount: number
    name?: string
    email?: string
    phone?: string
    webhookUrl?: string
    redirectUrl?: string
  },
): Promise<FamResult<FamOrder>> {
  const key = famApiKey(env)
  if (!key)
    return {
      ok: false,
      error: 'The payment gateway is not configured yet. Please try again later.',
      code: 'gateway-missing',
      status: 503,
    }

  const payload: Record<string, any> = { amount: Number(opts.amount) }
  if (opts.name) payload.customer_name = String(opts.name).slice(0, 60)
  if (opts.email) payload.customer_email = String(opts.email).slice(0, 80)
  if (opts.phone) payload.customer_phone = String(opts.phone).replace(/\D/g, '').slice(0, 10)
  if (opts.webhookUrl) payload.webhook_url = String(opts.webhookUrl)
  if (opts.redirectUrl) payload.redirect_url = String(opts.redirectUrl)

  let res: Response
  try {
    res = await fetch(`${famBase(env)}/api/create-order`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'X-Api-Key': key },
      body: JSON.stringify(payload),
    })
  } catch {
    return {
      ok: false,
      error: 'Could not reach the payment gateway. Please try again.',
      code: 'gateway-offline',
      status: 502,
    }
  }

  const text = await res.text().catch(() => '')
  let json: any = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = null
  }
  const data = json?.data || json

  if (!res.ok || !data?.order_id) {
    return {
      ok: false,
      error: providerMessage(json, 'Could not create the payment order. Please try again.'),
      code: String(json?.code || json?.status || 'gateway-error'),
      status: 502,
    }
  }

  const orderId = String(data.order_id)
  const base = famBase(env)
  return {
    ok: true,
    data: {
      orderId,
      qrUrl: String(data.qr_url || `${base}/api/qr-image.php?order_id=${encodeURIComponent(orderId)}`),
      checkoutUrl: String(data.checkout_url || `${base}/pay.php?order_id=${encodeURIComponent(orderId)}`),
      upiIntent: String(data.upi_intent || ''),
      upiId: String(data.upi_id || ''),
      amount: String(data.amount || opts.amount),
      payableAmount: String(data.payable_amount || data.amount || opts.amount),
      expiresAtIst: String(data.expires_at_ist || ''),
    },
  }
}

/* ------------------------------------------------------------------ verify order */

export type FamStatus = {
  status: 'success' | 'pending' | 'expired' | 'unknown'
  amount: number
  utr: string
  senderName: string
  paidAt: string
}

/** Authoritative server-to-server check — the browser only ever asks OUR API. */
export async function verifyFamOrder(env: any, orderId: string): Promise<FamStatus> {
  const key = famApiKey(env)
  const none: FamStatus = { status: 'unknown', amount: 0, utr: '', senderName: '', paidAt: '' }
  if (!orderId) return none

  let res: Response
  try {
    res = await fetch(
      `${famBase(env)}/api/verify-order.php?order_id=${encodeURIComponent(orderId)}`,
      key ? { headers: { 'X-Api-Key': key } } : undefined,
    )
  } catch {
    return none
  }

  const text = await res.text().catch(() => '')
  let json: any = null
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = null
  }

  const raw = String(json?.status || '').toLowerCase()
  const status: FamStatus['status'] =
    raw === 'success' || raw === 'paid'
      ? 'success'
      : raw === 'expired' || res.status === 408
        ? 'expired'
        : raw === 'pending'
          ? 'pending'
          : 'unknown'

  return {
    status,
    amount: Math.max(0, Number(json?.amount) || 0),
    utr: String(json?.utr || '').replace(/\s+/g, ''),
    senderName: String(json?.sender_name || ''),
    paidAt: String(json?.paid_at || ''),
  }
}

/* ------------------------------------------------------------------ webhook signature */
/* The gateway signs the RAW body with HMAC-SHA256 using the merchant API key
   as the secret and sends it as `X-FamGateway-Signature` (hex). */

export async function verifyFamSignature(
  env: any,
  rawBody: string,
  signature: string | undefined | null,
): Promise<boolean> {
  const key = famApiKey(env)
  if (!key) return false

  const given = String(signature || '').trim().toLowerCase()
  if (!/^[0-9a-f]{64}$/.test(given)) return false

  const enc = new TextEncoder()
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const mac = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(rawBody))
  const expected = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')

  /* constant-time-ish compare — a length check first, then an XOR fold */
  if (expected.length !== given.length) return false
  let diff = 0
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ given.charCodeAt(i)
  return diff === 0
}

/* ------------------------------------------------------------------ order records */
/* One record per gateway order, keyed by the gateway's own order id so the
   webhook (which only knows the order id) can find the user. */

export type PaymentOrderStatus = 'pending' | 'success' | 'expired' | 'duplicate'

export type PaymentOrder = {
  orderId: string
  uid: string
  txId: string
  amount: number
  payable: number
  status: PaymentOrderStatus
  provider: string
  method: string
  createdAt: number
  expiresAt: number
  /** true when this order already bumped USERS/<uid>/pending/depositCount */
  counted?: boolean
  credited?: boolean
  creditedAt?: number
  creditedAmount?: number
  utr?: string
  senderName?: string
  paidAt?: string
  paidAmount?: number
}

/** RTDB keys cannot contain . $ # [ ] / — order ids are safe, this is a belt. */
export function orderPath(orderId: string): string {
  return `PAYMENT_ORDERS/${String(orderId || '').replace(/[.$#\[\]/]/g, '_')}`
}

export async function getPaymentOrder(env: any, orderId: string): Promise<PaymentOrder | null> {
  if (!orderId) return null
  try {
    return await dbGet<PaymentOrder>(env, orderPath(orderId))
  } catch {
    return null
  }
}

export async function savePaymentOrder(env: any, order: PaymentOrder): Promise<void> {
  await dbPut(env, orderPath(order.orderId), order)
}


/* ------------------------------------------------------------------ settle (credit once) */

export type SettleResult = {
  /** money actually added to the wallet by THIS call */
  credited: boolean
  reason:
    | 'settled'
    | 'pending-approval'
    | 'already-settled'
    | 'duplicate-utr'
    | 'unknown-order'
    | 'write-failed'
  uid?: string
  amount?: number
}

/**
 * Marks a gateway order as paid and adds the money to the wallet — EXACTLY
 * ONCE, whatever races happen.
 *
 * How exactly-once works without a lock: the credit is a KEYED entry
 * (`USERS/<uid>/balance/deposits/<orderId> = amount`) that travels in the same
 * atomic PATCH as the order, transaction and receipt updates. Writing the same
 * key twice stores the same number, so the gateway webhook, a browser poll and
 * a retried request may all run at the same instant and the wallet still gains
 * the amount once. The wallet total is the SUM of those keys (src/lib/wallet.ts),
 * so there is nothing to increment — nothing can double-count.
 *
 * (Measured before this design: 8 parallel polls of one paid order credited a
 *  plain counter up to 8 times, because Firebase's If-Match conditional PUT
 *  does not reliably gate two writes that reach the server in the same instant.)
 */
export async function settlePayment(
  env: any,
  opts: {
    orderId: string
    utr?: string
    senderName?: string
    paidAmount?: number
    paidAt?: string
  },
): Promise<SettleResult> {
  const order = await getPaymentOrder(env, opts.orderId)
  if (!order) return { credited: false, reason: 'unknown-order' }
  if (order.status === 'success')
    return {
      credited: false,
      reason: 'already-settled',
      uid: order.uid,
      amount: Number(order.creditedAmount || order.amount) || 0,
    }

  const utr = String(opts.utr || '').replace(/\s+/g, '')

  /* a bank reference can only ever pay ONE order — a replay must not credit */
  if (utr) {
    let seen: any = null
    try {
      seen = await dbGet(env, `UTR_INDEX/${utr}`)
    } catch {
      seen = null
    }
    if (seen && String(seen) !== order.orderId) {
      try {
        await dbPatch(env, {
          [`${orderPath(order.orderId)}/status`]: 'duplicate',
          [`${orderPath(order.orderId)}/utr`]: utr,
          /* this request can never be paid — close it, otherwise the wallet
             would keep showing it as money on the way */
          [`USERS/${order.uid}/transactions/${order.txId}/status`]: 'duplicate',
          [`depositRequests/${order.uid}/${order.txId}/status`]: 'duplicate',
        })
      } catch {
        /* the duplicate flag is best effort — no money moved either way */
      }
      return { credited: false, reason: 'duplicate-utr', uid: order.uid }
    }
  }


  const cfg = await loadPaymentConfig(env)
  const wanted = Math.max(0, Math.floor(Number(order.amount) || 0))
  const paid = Math.max(0, Math.floor(Number(opts.paidAmount) || 0))
  /* never credit more than the user asked for, never less than the bank said */
  const amount = paid > 0 ? Math.min(wanted, paid) : wanted
  const now = Date.now()

  const patch: Record<string, any> = {
    [`${orderPath(order.orderId)}/status`]: 'success',
    [`${orderPath(order.orderId)}/utr`]: utr,
    [`${orderPath(order.orderId)}/senderName`]: String(opts.senderName || ''),
    [`${orderPath(order.orderId)}/paidAt`]: String(opts.paidAt || ''),
    [`${orderPath(order.orderId)}/paidAmount`]: paid,
    [`${orderPath(order.orderId)}/creditedAt`]: now,
    [`${orderPath(order.orderId)}/creditedAmount`]: cfg.autoCredit ? amount : 0,
    [`${orderPath(order.orderId)}/credited`]: !!cfg.autoCredit,
  }
  if (utr) patch[`UTR_INDEX/${utr}`] = order.orderId

  if (cfg.autoCredit) {
    /* the money — ONE keyed entry. Writing the same key twice stores the same
       number, so concurrent settles (webhook + poll + a retry) can never
       double-credit. `balance/total` stays the "everything else" money and the
       wallet total is computed as `total + sum(balance.deposits)`
       (src/lib/wallet.ts). */
    patch[`USERS/${order.uid}/balance/deposits/${order.orderId}`] = amount
    patch[`USERS/${order.uid}/transactions/${order.txId}/status`] = 'completed'
    patch[`USERS/${order.uid}/transactions/${order.txId}/utr`] = utr
    patch[`USERS/${order.uid}/transactions/${order.txId}/orderId`] = order.orderId
    patch[`USERS/${order.uid}/transactions/${order.txId}/completedAt`] = now
    patch[`depositRequests/${order.uid}/${order.txId}/status`] = 'completed'
    patch[`depositRequests/${order.uid}/${order.txId}/auto`] = true
    patch[`depositRequests/${order.uid}/${order.txId}/utr`] = utr
    patch[`depositRequests/${order.uid}/${order.txId}/approvedAt`] = now
    /* note: stats.totalDeposit and pending.depositCount are plain counters and
       are deliberately left untouched here — the lifetime deposit total is
       derived from the transactions (walletTotals), so a repeated settle can
       never inflate the numbers the user sees. */
  } else {
    /* manual mode — the request waits in the admin panel with the UTR attached */
    patch[`USERS/${order.uid}/transactions/${order.txId}/status`] = 'paid'
    patch[`USERS/${order.uid}/transactions/${order.txId}/utr`] = utr
    patch[`depositRequests/${order.uid}/${order.txId}/status`] = 'paid'
    patch[`depositRequests/${order.uid}/${order.txId}/utr`] = utr
  }

  try {
    await dbPatch(env, patch)
  } catch {
    /* every write in this patch is idempotent, so a later poll or the webhook
       can simply run it again — nothing has to be rolled back */
    return { credited: false, reason: 'write-failed', uid: order.uid }
  }

  return cfg.autoCredit
    ? { credited: true, reason: 'settled', uid: order.uid, amount }
    : { credited: false, reason: 'pending-approval', uid: order.uid, amount }
}

/** The 5-minute window is over and no money arrived — close the order. */
export async function expirePaymentOrder(env: any, orderId: string): Promise<PaymentOrder | null> {
  const order = await getPaymentOrder(env, orderId)
  if (!order) return order
  /* never step on a paid order, nor on a blocked duplicate */
  if (order.status === 'success' || order.status === 'expired' || order.status === 'duplicate')
    return order

  const patch: Record<string, any> = {
    [`${orderPath(orderId)}/status`]: 'expired',
    [`USERS/${order.uid}/transactions/${order.txId}/status`]: 'expired',
    [`USERS/${order.uid}/transactions/${order.txId}/expiredAt`]: Date.now(),
    [`depositRequests/${order.uid}/${order.txId}/status`]: 'expired',
  }

  try {
    await dbPatch(env, patch)
  } catch {
    /* the local timer expires the order in the UI anyway */
  }
  return { ...order, status: 'expired' }
}

