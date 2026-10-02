/* ==========================================================================
   app.js — client interactions for the 99infinity H5 UI
   Zero dependencies. Every behaviour is opt-in via a data-* attribute, so a
   section can be removed from the markup without leaving dead JS behind.

   Modules
     1.  helpers
     2.  lazy images
     3.  banner swiper        [data-swiper]
     4.  paged nav swipers    [data-nav]  + [data-nav-prev/next]
     5.  tabs                 [data-tabs]
     6.  dialogs / sheets     [data-dialog-open] [data-dialog-close]
     7.  toast                [data-toast]
     8.  accordions           .faq-item
     9.  game search/filter   [data-game-search] [data-tabs]
     10. password toggle      [data-toggle-password]
     11. auth forms           [data-auth-form]
     12. quick amounts        [data-quick-amount]
     12. entry points         [data-open-messages] [data-open-dialog] .tabbar__center
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ 1. helpers */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

  /** Rem value in px, resolved against the current root font-size. */
  function rem(v) {
    const fs = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return v * fs;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ 2. lazy images */
  function initLazyImages() {
    const imgs = $$('img:not([data-lazy])');
    if (!imgs.length) return;

    imgs.forEach((img) => {
      img.dataset.lazy = '';
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      } else {
        on(img, 'load', () => img.classList.add('is-loaded'));
        on(img, 'error', () => img.classList.add('is-loaded'));
      }
    });

    if (!('IntersectionObserver' in window)) {
      imgs.forEach((i) => i.classList.add('is-loaded'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-loaded');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '200px' }
    );
    imgs.forEach((i) => io.observe(i));
  }

  /* ------------------------------------------------------------------ 3. banner swiper */
  function initBannerSwipers() {
    $$('[data-swiper]').forEach((root) => {
      const key = root.dataset.swiper;
      const wrapper = $('.swiper-wrapper', root);
      if (!wrapper) return;

      const originals = $$('.swiper-slide', wrapper);
      if (originals.length < 2) return;

      const loop = root.dataset.loop === 'true';
      const delay = parseInt(root.dataset.autoplay || '0', 10);
      const dots = $$(`[data-swiper-dots="${key}"] span`);

      /* build clones so the loop is seamless */
      if (loop) {
        const first = originals[0].cloneNode(true);
        const last = originals[originals.length - 1].cloneNode(true);
        first.setAttribute('aria-hidden', 'true');
        last.setAttribute('aria-hidden', 'true');
        wrapper.appendChild(first);
        wrapper.insertBefore(last, originals[0]);
      }

      const total = originals.length;
      let index = loop ? 1 : 0;
      let animating = false;
      let timer = null;

      const offset = () => (loop ? index - 1 : index);

      function apply(animate) {
        wrapper.style.transition = animate && !prefersReduced ? 'transform .45s ease' : 'none';
        wrapper.style.transform = `translate3d(${-index * 100}%,0,0)`;
        syncDots();
      }

      function syncDots() {
        const real = ((offset() % total) + total) % total;
        dots.forEach((d, i) => d.classList.toggle('active', i === real));
      }

      function goTo(next) {
        if (animating || next === index) return;
        index = next;
        animating = true;
        apply(true);
      }

      const next = () => goTo(index + 1);
      const prev = () => goTo(index - 1);

      on(wrapper, 'transitionend', () => {
        animating = false;
        if (!loop) return;
        if (index === total + 1) {
          index = 1;
          apply(false);
        } else if (index === 0) {
          index = total;
          apply(false);
        }
      });

      dots.forEach((dot, i) =>
        on(dot, 'click', () => {
          const cur = ((offset() % total) + total) % total;
          const delta = i - cur;
          goTo(index + delta);
          restart();
        })
      );

      /* autoplay */
      function start() {
        if (!delay || prefersReduced) return;
        timer = setInterval(next, delay);
      }
      function stop() {
        if (timer) clearInterval(timer);
        timer = null;
      }
      function restart() {
        stop();
        start();
      }

      on(root, 'mouseenter', stop);
      on(root, 'mouseleave', start);
      on(document, 'visibilitychange', () => (document.hidden ? stop() : start()));

      /* touch / drag */
      let startX = 0;
      let dragging = false;
      on(
        root,
        'touchstart',
        (e) => {
          dragging = true;
          startX = e.touches[0].clientX;
          stop();
        },
        { passive: true }
      );
      on(
        root,
        'touchend',
        (e) => {
          if (!dragging) return;
          dragging = false;
          const dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > rem(0.6)) (dx < 0 ? next : prev)();
          restart();
        },
        { passive: true }
      );

      apply(false);
      start();
    });
  }

  /* ------------------------------------------------------------------ 4. paged nav swipers */
  function initNavSwipers() {
    $$('[data-nav]').forEach((root) => {
      const key = root.dataset.nav;
      const track = $('.swiper-track', root);
      if (!track) return;

      const pages = $$('.swiper-page', track);
      const prevBtn = $(`[data-nav-prev="${key}"]`);
      const nextBtn = $(`[data-nav-next="${key}"]`);

      let index = 0;

      function render(animate = true) {
        track.style.transition = animate && !prefersReduced ? 'transform .35s ease' : 'none';
        track.style.transform = `translate3d(${-index * 100}%,0,0)`;
        updateBtns();
      }

      function updateBtns() {
        const atStart = index <= 0;
        const atEnd = index >= pages.length - 1;
        if (prevBtn) prevBtn.classList.toggle('disabled', atStart);
        if (nextBtn) nextBtn.classList.toggle('disabled', atEnd);
      }

      on(prevBtn, 'click', () => {
        if (index > 0) {
          index--;
          render();
        }
      });
      on(nextBtn, 'click', () => {
        if (index < pages.length - 1) {
          index++;
          render();
        }
      });

      /* drag */
      let startX = 0;
      let startY = 0;
      let decided = null;
      on(
        root,
        'touchstart',
        (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          decided = null;
        },
        { passive: true }
      );
      on(
        root,
        'touchmove',
        (e) => {
          if (decided !== null) return;
          const dx = Math.abs(e.touches[0].clientX - startX);
          const dy = Math.abs(e.touches[0].clientY - startY);
          decided = dx > dy;
        },
        { passive: true }
      );
      on(
        root,
        'touchend',
        (e) => {
          if (!decided) return;
          const dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) < rem(0.5)) return;
          if (dx < 0 && index < pages.length - 1) index++;
          else if (dx > 0 && index > 0) index--;
          render();
        },
        { passive: true }
      );

      render(false);
    });
  }

  /* ------------------------------------------------------------------ 5. tabs */
  function initTabs() {
    $$('[data-tabs]').forEach((group) => {
      const key = group.dataset.tabs;
      const items = $$('[data-tab]', group);
      const panel = $(`[data-tab-panel="${key}"]`);
      const rows = panel ? $$('[data-tab-item]', panel) : [];

      items.forEach((tab) => {
        on(tab, 'click', () => {
          items.forEach((t) => t.classList.toggle('active', t === tab));
          const value = tab.dataset.tab;

          if (key === 'games') {
            document.dispatchEvent(new CustomEvent('games:filter', { detail: value }));
            return;
          }
          if (rows.length) {
            rows.forEach((r) => {
              const match = value === 'all' || r.dataset.tabItem === value;
              r.classList.toggle('hidden', !match);
            });
          }
          const empty = $(`[data-tab-empty="${key}"]`);
          if (empty) {
            const visible = rows.filter((r) => !r.classList.contains('hidden')).length;
            empty.classList.toggle('active', visible === 0);
          }
          document.dispatchEvent(new CustomEvent('tab:change', { detail: { key, value } }));
        });
      });

      /* apply the initial active tab's filter once on load — lets pages open
         pre-filtered (e.g. /account/deposit-history opens with Deposit active) */
      const activeTab = items.find((t) => t.classList.contains('active'));
      if (activeTab) activeTab.click();
    });
  }

  /* ------------------------------------------------------------------ 6. dialogs */
  const Dialog = {
    open(id) {
      const el = typeof id === 'string' ? document.getElementById(id) : id;
      if (!el) return;
      el.classList.add('is-open');
      document.documentElement.style.overflow = 'hidden';
    },
    close(el) {
      const target = typeof el === 'string' ? document.getElementById(el) : el;
      if (!target) return;
      target.classList.remove('is-open');
      if (!$('.dialog-host.is-open')) document.documentElement.style.overflow = '';
    },
    closeAll() {
      $$('.dialog-host.is-open').forEach((d) => d.classList.remove('is-open'));
      document.documentElement.style.overflow = '';
    },
  };
  window.VG_DIALOG = Dialog;

  function initDialogs() {
    on(document, 'click', (e) => {
      const opener = e.target.closest('[data-dialog-open]');
      if (opener) {
        e.preventDefault();
        Dialog.open(opener.dataset.dialogOpen);
        return;
      }
      const legacy = e.target.closest('[data-open-dialog]');
      if (legacy) {
        e.preventDefault();
        Dialog.open(legacy.dataset.openDialog);
        return;
      }
      const closer = e.target.closest('[data-dialog-close]');
      if (closer) {
        Dialog.close(closer.closest('.dialog-host'));
      }
    });

    on(document, 'keydown', (e) => {
      if (e.key === 'Escape') Dialog.closeAll();
    });
  }

  /* ------------------------------------------------------------------ 7. toast */
  let toastTimer = null;
  function toast(msg, ms = 2000) {
    const el = $('#toast');
    if (!el) return;
    /* every toast speaks the language the user picked */
    el.textContent = window.VGI18N ? window.VGI18N.t(msg) : msg;
    el.classList.add('is-open');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-open'), ms);
  }
  window.VG_TOAST = toast;

  /* ------------------------------------------------------------------ 7b. i18n helpers */
  /* Text written by JS (a wheel result, a countdown, a device count) must speak the
     user's language too. setText/setHtml always write the ENGLISH source first and
     then let VGI18N translate it in place — and again after a language switch.
     Values that must never be translated (nicknames, UIDs) sit under
     [data-i18n-skip] and are left alone by the translator. */
  function tr(str) {
    return window.VGI18N ? window.VGI18N.t(str) : str;
  }

  function setText(el, str) {
    if (!el) return;
    el.textContent = str == null ? '' : String(str);
    if (window.VGI18N) window.VGI18N.apply(el);
  }

  function setHtml(el, html) {
    if (!el) return;
    el.innerHTML = html;
    if (window.VGI18N) window.VGI18N.apply(el);
  }

  /* ------------------------------------------------------------------ 8. accordions */
  function initAccordions() {
    const answerOf = (item) => item.querySelector('.faq-item__a, .cs-faq__a');

    /* height set from scrollHeight so open AND close both animate smoothly
       (fixed max-height values feel janky — most of the duration shows nothing) */
    const expand = (item) => {
      item.classList.add('is-open');
      const a = answerOf(item);
      if (a) a.style.maxHeight = a.scrollHeight + 'px';
    };

    const collapse = (item) => {
      item.classList.remove('is-open');
      const a = answerOf(item);
      if (a) a.style.maxHeight = '0px';
    };

    /* prime initially-open items so they render expanded */
    $$('.faq-item.is-open, .cs-faq__item.is-open').forEach(expand);

    $$('.faq-item__q, .cs-faq__q').forEach((q) => {
      on(q, 'click', () => {
        const item = q.closest('.faq-item, .cs-faq__item');
        if (!item) return;
        const isOpen = item.classList.contains('is-open');

        /* close the others in the same list */
        $$('.faq-item.is-open, .cs-faq__item.is-open', item.parentElement || document).forEach(
          (s) => {
            if (s !== item) collapse(s);
          }
        );

        if (isOpen) collapse(item);
        else expand(item);
      });
    });
  }

  /* ------------------------------------------------------------------ 9. game search + filter */
  function initGameFilters() {
    const grid = $('[data-games-grid]');
    if (!grid) return;

    const input = $('[data-game-search]');
    const cards = $$('[data-game]', grid);
    const empty = $('[data-games-empty]');
    let cat = 'all';

    function apply() {
      const q = (input ? input.value : '').trim().toLowerCase();
      let shown = 0;

      cards.forEach((card) => {
        const name = (card.dataset.name || '').toLowerCase();
        const catOk = cat === 'all' || card.dataset.cat === cat;
        const qOk = !q || name.includes(q);
        const visible = catOk && qOk;
        card.classList.toggle('hidden', !visible);
        if (visible) shown++;
      });

      if (empty) empty.classList.toggle('hidden', shown > 0);
    }

    on(input, 'input', apply);
    on(document, 'games:filter', (e) => {
      cat = e.detail;
      apply();
    });
    apply();
  }

  /* ------------------------------------------------------------------ 10. password toggle */
  function initPasswordToggles() {
    $$('[data-toggle-password]').forEach((btn) => {
      on(btn, 'click', () => {
        const field = btn.closest('.field, .au-group, .sec-input');
        const input = field && $('input', field);
        if (!input) return;
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        const use = $('use', btn);
        if (use) use.setAttribute('href', show ? '#i-eye-off' : '#i-eye');
      });
    });
  }

  /* currently logged-in user (from /api/me) — null means guest */
  let currentUser = null;

  /* remember-me — login token kept in localStorage as well as the cookie, so a
     browser that wipes cookies on restart can be logged back in silently */
  const REMEMBER_KEY = 'vg_remember';

  /* The first /api/me round-trip decides guest vs logged-in. Until it lands the
     login gates must NOT treat a logged-in user as a guest — a fast tap right
     after the site opens (fresh browser start) used to bounce real users to the
     login page. Gates `await whenUserKnown()` first; that settles in the time
     one API call takes, and resolves instantly on every tap after it. */
  let userKnown = false;
  let userKnownWaiters = [];

  function whenUserKnown() {
    if (userKnown) return Promise.resolve();
    return new Promise((res) => userKnownWaiters.push(res));
  }

  function markUserKnown() {
    if (userKnown) return;
    userKnown = true;
    userKnownWaiters.forEach((res) => res());
    userKnownWaiters = [];
  }

  /* full-screen block overlay for suspended / under-investigation accounts */
  /** Only a REAL account block may show the blocking dialog. Other API codes
   *  (gateway missing, deposits paused, wrong amount …) are normal answers and
   *  must never lock the user out of the app. */
  function isAccountBlock(code) {
    return code === 'suspended' || code === 'investigation';
  }

  function showAccountBlock(message) {
    if (document.getElementById('accountBlock')) return;
    const overlay = document.createElement('div');
    overlay.id = 'accountBlock';
    overlay.style.cssText =
      'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:0.6rem;';
    const box = document.createElement('div');
    box.style.cssText =
      'background:#111620;border:1px solid #1e2532;border-radius:0.5rem;padding:0.64rem 0.55rem;max-width:7rem;width:90%;text-align:center;';
    const title = document.createElement('div');
    title.style.cssText = 'font-size:0.4rem;font-weight:700;color:#ff4d4d;margin-bottom:0.2rem;';
    title.textContent = message;
    const sub = document.createElement('div');
    sub.style.cssText = 'font-size:0.3rem;color:#8b949e;margin-bottom:0.5rem;line-height:1.5;';
    sub.textContent = 'Contact customer support for more information.';
    const btn = document.createElement('button');
    btn.style.cssText =
      'width:100%;padding:0.32rem;border:none;border-radius:0.32rem;background:#00c853;color:#fff;font-size:0.33rem;font-weight:600;';
    btn.textContent = 'Log out';
    btn.addEventListener('click', async () => {
      try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (e) {}
      window.location.href = '/';
    });
    box.appendChild(title);
    box.appendChild(sub);
    box.appendChild(btn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }

  /* ------------------------------------------------------------------ 11. auth forms (real backend) */

  /* full-screen loader used by EVERY backend call — "Please Wait!" first, then
     "Checking Your Information!" if the call takes longer. It is ref-counted,
     so parallel calls can never leave a stuck spinner behind. */
  let loaderRefs = 0;
  let loaderShownAt = 0;
  let loaderEscalate = null;

  function isLoaderVisible() {
    return !!document.getElementById('authLoader');
  }

  function setLoaderText(text) {
    const el = document.getElementById('authLoader');
    if (!el) return;
    const t = el.querySelector('.auth-loader__text');
    if (t && text) t.textContent = window.VGI18N ? window.VGI18N.t(text) : text;
  }

  function showAuthLoader(text) {
    loaderRefs++;
    const el = document.getElementById('authLoader');
    if (!el) {
      const box = document.createElement('div');
      box.id = 'authLoader';
      box.innerHTML =
        '<div class="auth-loader__box"><div class="auth-loader__ring"></div>' +
        '<div class="auth-loader__text"></div></div>';
      document.body.appendChild(box);
      setLoaderText(text || 'Please Wait!');
      loaderShownAt = performance.now();
      if (loaderEscalate) clearTimeout(loaderEscalate);
      loaderEscalate = setTimeout(() => {
        setLoaderText('Checking Your Information!');
        const cur = document.getElementById('authLoader');
        if (cur) cur.dataset.escalated = '1';
      }, 900);
      return;
    }
    /* already visible — only upgrade the text, never overwrite the escalation */
    if (text && !el.dataset.escalated) setLoaderText(text);
  }

  function hideAuthLoader() {
    loaderRefs = Math.max(0, loaderRefs - 1);
    if (loaderRefs > 0) return;
    if (loaderEscalate) {
      clearTimeout(loaderEscalate);
      loaderEscalate = null;
    }
    /* keep it on screen for a beat so fast calls don't flicker */
    const wait = Math.max(0, 260 - (performance.now() - loaderShownAt));
    setTimeout(() => {
      if (loaderRefs > 0) return;
      const el = document.getElementById('authLoader');
      if (el) el.remove();
    }, wait);
  }

  /* Every backend call goes through here: the browser shows the spinner
     whenever the server is doing something in the background.
     `silent: true` is only used for the warm-up fetches (boot, game map). */
  const nativeFetch = window.fetch.bind(window);
  window.fetch = async function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    const isApi = url.indexOf('/api/') !== -1;
    const silent = !!(init && init.silent);
    if (!isApi || silent) return nativeFetch(input, init);

    let shown = false;
    let timer = null;
    if (!isLoaderVisible()) {
      timer = setTimeout(() => {
        shown = true;
        showAuthLoader('Please Wait!');
      }, 160);
    }
    try {
      return await nativeFetch(input, init);
    } finally {
      if (timer) clearTimeout(timer);
      if (shown) hideAuthLoader();
    }
  };

  function initAuthForms() {
    $$('[data-auth-form]').forEach((form) => {
      on(form, 'submit', async (e) => {
        e.preventDefault();
        const kind = form.dataset.authForm;

        const phone = form.querySelector('[name="phone"]');
        const password = form.querySelector('[name="password"]');
        const confirm = form.querySelector('[name="confirm"]');
        const terms = form.querySelector('[name="terms"]');

        const digits = phone ? phone.value.replace(/\D/g, '') : '';
        if (kind !== 'reset' && digits.length !== 10)
          return toast('Enter a valid 10-digit phone number', 3000);
        if (kind !== 'reset' && password && password.value.length < 6)
          return toast('Password must be at least 6 characters', 3000);
        if (confirm && confirm.value !== password.value) return toast('Passwords do not match');
        if (terms && !terms.checked) return toast('Please accept the terms to continue');
        if (kind === 'reset') return toast('Password reset is handled by customer support', 3000);

        const btn = form.querySelector('[type="submit"], button:not([type="button"])');
        const invite = form.querySelector('[name="invite"]');
        if (btn) btn.disabled = true;
        showAuthLoader();
        try {
          const res = await fetch('/api/auth/' + (kind === 'login' ? 'login' : 'register'), {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              phone: digits,
              password: password ? password.value : '',
              invite: invite ? invite.value.trim() : '',
            }),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            if (data.code === 'suspended' || data.code === 'investigation')
              return showAccountBlock(data.error || 'Your account is restricted');
            return toast(data.error || 'Something went wrong, try again', 3000);
          }
          /* the token comes back in the body too — remember it for the
             auto-restore below (browsers that clear cookies on restart) */
          if (data.token) {
            try {
              localStorage.setItem(REMEMBER_KEY, data.token);
            } catch (err) { /* private mode — the cookie alone still works */ }
          }
          toast(data.message || (kind === 'login' ? 'Logged in successfully!' : 'Account created!'), 2500);
          setTimeout(() => spaNavigate('/', true), 500);
        } catch (err) {
          toast('Network error, please try again', 3000);
        } finally {
          hideAuthLoader();
          if (btn) btn.disabled = false;
        }
      });
    });

    $$('[data-send-code]').forEach((btn) => {
      on(btn, 'click', () => toast('Verification code sent'));
    });
  }

  /* the wallet overview writes its two balances + the lifetime totals from the
     same payload /api/me returns (server-side split lives in src/lib/wallet.ts) */
  function syncWallet(me) {
    const inr = (v) =>
      '₹' +
      Number(v || 0).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    const w = me.wallet || null;
    const t = me.walletTotals || null;
    const set = (sel, value) => {
      const el = $(sel);
      if (el) setText(el, value);
    };

    set('[data-wallet-total]', inr(w ? w.total : Number(me.balance?.total || 0)));
    if (w) {
      set('[data-wallet-main]', inr(w.main));
      set('[data-wallet-promo]', inr(w.promo));
      set('[data-wallet-main-pct]', w.mainPct + '%');
      set('[data-wallet-promo-pct]', w.promoPct + '%');
      /* the ring fills with the wallet's share of the total */
      const mainRing = $('.wl-ring');
      if (mainRing) mainRing.style.setProperty('--wl-pct', w.mainPct);
      const promoRing = $('.wl-ring--promo');
      if (promoRing) promoRing.style.setProperty('--wl-pct', w.promoPct);
    }
    if (t) {
      set('[data-wallet-deposited]', inr(t.depositTotal));
      set('[data-wallet-withdrawn]', inr(t.withdrawTotal));
    }
  }

  /** Same username rule as the server (src/lib/backend.ts): user + last 4 UID
   *  digits — only used as a fallback while the DB rename is in flight. */
  function autoName(uid) {
    const digits = String(uid || '').replace(/\D/g, '');
    const tail = digits.length >= 4 ? digits.slice(-4) : digits.padStart(4, '0');
    return 'user' + tail;
  }

  /* live user data — fills the navbar chip + account page, blocks restricted accounts */
  /* mirrored user state — wallet chip, name, uid, avatar, last login.
     Called on boot and again after every action that moves the balance
     (spin win, daily claim) so the UI never shows a stale number. */
  function applyUserData(me) {
    if (!me) return;
    /* one formatter, shared with the wallet hint (see moneyText below) */
    paintBalance(me.balance?.total || 0);

    /* wallet page — two buckets (main / 3rd-party) + lifetime deposit and
       withdrawal totals. Values come from the server so they can never drift
       away from the API (see src/lib/wallet.ts for the same maths). */
    if ($('[data-wallet-total]')) syncWallet(me);
    $$('[data-user-name]').forEach((el) => {
      /* a nickname can look like a dictionary word (e.g. "Home") — never translate it */
      el.textContent = me.profile?.name || autoName(me.uid);
      el.setAttribute('data-i18n-skip', '');
    });
    $$('[data-user-uid]').forEach((el) => {
      el.textContent = me.uid;
      const copyBtn = el.closest('.userInfo__container-content-uid')?.querySelector('[data-copy]');
      if (copyBtn) copyBtn.dataset.copy = me.uid;
    });
    if (me.profile?.avatar)
      $$('[data-user-avatar]').forEach((el) => (el.src = me.profile.avatar));

    /* last login time on the account hero */
    if (me.profile?.lastLogin) {
      const d = new Date(me.profile.lastLogin);
      const p = (x) => String(x).padStart(2, '0');
      const stamp = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
      $$('[data-user-logintime]').forEach((el) => (el.textContent = stamp));
    }

    /* the saved language follows the account (server value wins) */
    const saved = String(me.profile?.language || '');
    if (window.VGI18N && saved && window.VGI18N.codes.indexOf(saved) >= 0 && saved !== window.VGI18N.getLang()) {
      window.VGI18N.setLang(saved);
    }
    $$('[data-lang-item]').forEach((item) => {
      const on = item.dataset.langCode === (window.VGI18N ? window.VGI18N.getLang() : 'en');
      item.classList.toggle('selected', on);
    });
    $$('[data-lang-value]').forEach((el) => {
      el.textContent = window.VGI18N ? window.VGI18N.name('') : 'English';
      el.setAttribute('data-i18n-skip', '');
    });
  }

  /** silent /api/me refresh — used after a spin or a daily claim */
  async function refreshUser(loud) {
    try {
      const res = await fetch('/api/me', { cache: 'no-store', silent: !loud });
      if (!res.ok) return null;
      const me = await res.json().catch(() => null);
      if (!me || !me.ok) return null;
      currentUser = me;
      applyUserData(me);
      /* this answer is newer than anything the Ludo game left behind */
      clearWalletMarker();
      return me;
    } catch (err) {
      return null;
    }
  }

  /* ------------------------------------------------------------------ balance refresh
     The account page's ↻ icon does what it looks like it does: it reads the wallet
     from the server and paints the answer, so the number on screen is the latest
     one and not the copy this page was rendered with. Everything that shows money
     ([data-user-balance] in the card, [data-nav-balance] in the navbar) is repainted
     by applyUserData, and a toast quotes the new total. */
  function initBalanceRefresh() {
    $$('[data-balance-refresh]').forEach((el) => {
      const run = async () => {
        if (el.classList.contains('is-spinning')) return;
        el.classList.add('is-spinning');
        const me = await refreshUser(true);
        el.classList.remove('is-spinning');
        if (!me) {
          toast('Could not read your balance — please try again', 3000);
          return;
        }
        toast('Balance updated — ' + moneyText(me.balance && me.balance.total));
      };
      on(el, 'click', run);
      on(el, 'keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); }
      });
    });
  }

  /* ── a match played in another document ───────────────────────────────────
     The Ludo game is a page of its own (see public/js/ludo.js): its entry fee,
     prize and forfeit all land while THIS document is asleep — so the balance this
     page is showing is as old as the match. The game leaves two things behind:
     WHEN the money moved and WHAT the balance became. Both are used here:

       • applyWalletHint() paints that settled number the moment the page is shown,
         so the navbar is right in the first frame — not one round-trip later.
         A page restored from the browser's back/forward cache keeps its old DOM,
         and that is exactly the "balance updates a second later" flash;
       • walletMarker() then confirms it with the server (one /api/me), which is
         what keeps the number honest if something else moved money meanwhile.

     The hint only overrides what this document shows when the money really moved
     AFTER the document was first shown (its own boot stamp in phone time), so a
     freshly rendered page — whose server-rendered number is already newer — is
     never pushed back to an older value. */
  const LUDO_WALLET_KEY = 'vg_ludo_wallet_at';
  const LUDO_TOTAL_KEY = 'vg_ludo_wallet_total';

  function walletMarker() {
    try { return Number(localStorage.getItem(LUDO_WALLET_KEY)) || 0; } catch (err) { return 0; }
  }

  function clearWalletMarker() {
    try {
      localStorage.removeItem(LUDO_WALLET_KEY);
      localStorage.removeItem(LUDO_TOTAL_KEY);
    } catch (err) {}
  }

  /** "₹1,234.00" — the one formatting the navbar, the account page and the hint share */
  function moneyText(v) {
    return '₹' + Number(v || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  /** Paint a balance we already know the truth about — the navbar chip, the
   *  account/deposit/withdraw balance lines. No round-trip, no guessing: callers
   *  either pass the server's own /api/me total or the number an API answer (a
   *  withdrawal hold, a settled match) returned. */
  function paintBalance(total) {
    const bal = moneyText(total);
    $$('[data-nav-balance]').forEach((el) => (el.textContent = bal));
    $$('[data-user-balance]').forEach((el) => (el.textContent = bal));
  }

  /** the settled balance the Ludo game left behind, or null. A marker without a
   *  total (an older game page that only stamped the time) must never be painted:
   *  reading it as 0 would put ₹0.00 in the navbar until /api/me answers. */
  function walletHint() {
    try {
      const at = Number(localStorage.getItem(LUDO_WALLET_KEY)) || 0;
      const raw = localStorage.getItem(LUDO_TOTAL_KEY);
      const total = Number(raw);
      if (!at || raw === null || !Number.isFinite(total)) return null;
      return { at, total };
    } catch (err) { return null; }
  }

  /** when THIS document was first shown (phone time — survives a bfcache restore
   *  in the DOM itself, so two clocks are never compared with each other).
   *  It is stamped at boot, BEFORE any money can arrive, so a match that settles
   *  later is always "newer than this page". */
  function shownAt() {
    if (!document.body) return 0;
    if (!document.body.dataset.shownAt) document.body.dataset.shownAt = String(Date.now());
    return Number(document.body.dataset.shownAt) || 0;
  }

  /** paint the settled balance now; returns true when the hint was applied */
  function applyWalletHint() {
    if (STANDALONE_DOC) return false;
    const hint = walletHint();
    if (!hint) return false;
    /* a page rendered after the match already carries the newer number */
    if (!(hint.at > shownAt())) return false;
    paintBalance(hint.total);
    return true;
  }

  /* A page can also be rendered WHILE the match settles (the request is still in
     flight when it is served): the hint only appears a moment later. These few
     bounded re-checks catch exactly that, and stop after a couple of seconds. */
  function watchWalletHint(round) {
    const step = Number(round) || 0;
    if (step > 3) return;
    setTimeout(() => {
      if (!applyWalletHint()) { watchWalletHint(step + 1); return; }
      lastMoneySync = 0;
      syncWalletOnShow();
    }, 600);
  }

  /** the browser wiped its cookies (restart, privacy cleaner, "clear on exit")
   *  but the account is still valid — trade the remembered token (localStorage)
   *  for a fresh cookie. Attempted at most once per page load, so a browser
   *  that refuses cookies can never put us into a restore loop. */
  let restoreAttempted = false;

  async function restoreRememberedSession() {
    if (restoreAttempted) return false;
    restoreAttempted = true;
    let saved = null;
    try {
      saved = localStorage.getItem(REMEMBER_KEY);
    } catch (err) {
      return false;
    }
    if (!saved) return false;
    try {
      const res = await fetch('/api/auth/restore', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ token: saved }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || !data.ok) {
        /* expired, or that device was logged out — the memory is stale */
        try { localStorage.removeItem(REMEMBER_KEY); } catch (err) {}
        return false;
      }
      /* the server rolled the session forward — keep the fresh copy */
      if (data.token) {
        try { localStorage.setItem(REMEMBER_KEY, data.token); } catch (err) {}
      }
      currentUser = data.user || null;
      return true;
    } catch (err) {
      return false;
    }
  }

  async function initUserSync() {
    let me;
    try {
      const res = await fetch('/api/me', { cache: 'no-store', silent: true });
      if (!res.ok) {
        currentUser = null;
        /* cookie gone (browser restart) but the login is remembered —
           restore it silently and re-render the page logged in */
        if (await restoreRememberedSession()) {
          markUserKnown();
          return spaNavigate(location.pathname + location.search, false);
        }
        markUserKnown();
        /* guest somehow sitting on an account page (direct URL / edge case)
           — the server gate normally handles this, this is the safety net */
        if (/^\/account(\/|$)/.test(location.pathname))
          return spaNavigate('/login', true);
        return;
      }
      me = await res.json();
    } catch (err) {
      markUserKnown(); /* offline — the gates fall back to guest behaviour */
      return;
    }
    if (!me || !me.ok) {
      currentUser = null;
      /* same story for a 200 "not logged in" answer */
      if (await restoreRememberedSession()) {
        markUserKnown();
        return spaNavigate(location.pathname + location.search, false);
      }
      markUserKnown();
      return;
    }
    currentUser = me;
    applyUserData(me);
    markUserKnown();

    /* profile page — prefill the editable fields with the server values */
    const pfNick = $('[data-pf-nickname]');
    if (pfNick && !pfNick.value) pfNick.value = me.profile?.name || '';
    const pfEmail = $('[data-pf-email]');
    if (pfEmail && !pfEmail.value) pfEmail.value = me.profile?.email || '';
    const pfPhone = $('[data-pf-phone]');
    if (pfPhone && !pfPhone.value && me.phone) pfPhone.value = '+91 ' + me.phone;
    const pfAvatar = document.getElementById('profileAvatar');
    if (pfAvatar && me.profile?.avatar) pfAvatar.src = me.profile.avatar;
    const pfName = document.getElementById('profileName');
    if (pfName && me.profile?.name) pfName.textContent = me.profile.name;
    const pfId = $('[data-pf-uid]');
    if (pfId) pfId.textContent = 'ID: ' + me.uid;

    /* settings toggles → server values */
    $$('.ac-toggle[data-setting]').forEach((t) => {
      const key = t.dataset.setting;
      if (me.settings && key in me.settings) t.checked = !!me.settings[key];
    });

    /* suspended / under investigation — block the whole UI */
    if (me.status && me.status.code && me.status.code !== 'active')
      showAccountBlock(me.status.message || 'Your account is restricted');
  }

  /* settings toggles → saved into the user's own node */
  function initSettingsSync() {
    $$('.ac-toggle[data-setting]').forEach((t) =>
      on(t, 'change', async () => {
        const key = t.dataset.setting;
        try {
          const res = await fetch('/api/settings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ [key]: t.checked }),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            t.checked = !t.checked;
            if (res.status === 401) {
              toast('Please log in first', 2000);
              return setTimeout(() => spaNavigate('/login', true), 400);
            }
            if (data.code) showAccountBlock(data.error || 'Your account is restricted');
            return toast(data.error || 'Could not save setting', 3000);
          }
          toast('Setting saved');
        } catch (err) {
          toast('Network error', 3000);
        }
      })
    );
  }

  /* account tab — guests are sent to the login page instead of the account.
     Bound ONCE: initAll() runs again after every SPA swap, so a listener added
     on each swap would fire one navigation per earlier page visit — that is the
     "tap Account → reload reload reload" glitch. */
  let guestGateBound = false;

  function initGuestGate() {
    if (guestGateBound) return;
    guestGateBound = true;
    /* CAPTURE phase + stopImmediatePropagation: this listener must win the race
       against the generic link interceptor registered at module scope. Without
       it the same tap navigated twice (once to /account, which the server
       redirects to /login, and once straight to /login) — two history entries,
       two body swaps and the loader flashing like a page reload. */
    document.addEventListener(
      'click',
      (e) => {
        const a = e.target && e.target.closest ? e.target.closest('a[href="/account"]') : null;
        if (!a || !a.closest('.tabbar')) return;
        if (currentUser) return;
        /* decide only after the first user sync (see whenUserKnown) — blocking
           the tap for a moment is what stops the guest bounce on fast opens */
        e.preventDefault();
        e.stopImmediatePropagation(); /* keep the generic interceptor out of it */
        if (!userKnown) {
          whenUserKnown().then(() => {
            if (currentUser) return spaNavigate('/account', true); /* logged in after all */
            toast('Please log in to continue', 2000);
            spaNavigate('/login', true); /* first tap itself → login, no delay */
          });
          return;
        }
        toast('Please log in to continue', 2000);
        spaNavigate('/login', true); /* first tap itself → login, no delay */
      },
      true /* capture: must run before the generic link interceptor */
    );
  }

  /* ------------------------------------------------------------------ game gating */
  /* Every game tile (and the three home "Top Games") asks Firebase on the tap:
       GAMES/<key> = 0 → the "Comming Soon!" toast
       GAMES/<key> = 1 → the game section opens
       GAMES/<key> = 2 → the "Deposit to Play" popup (the word POPUP works too)
     The value is read live, so a game can move between the three states any
     moment without a deploy. */
  const GAME_OFF = 0;
  const GAME_ON = 1;
  const GAME_DEPOSIT = 2;

  /** Raw Firebase value → 0 / 1 / 2 (missing, '', false and null all mean off). */
  function gameStateValue(v) {
    if (typeof v === 'string') {
      /* the Firebase console often keeps the quotes typed around a string */
      const word = v.trim().replace(/^["']+|["']+$/g, '').trim();
      if (/^popup$/i.test(word)) return GAME_DEPOSIT;
    }
    const n = Number(v);
    if (!n) return GAME_OFF;
    return n >= GAME_DEPOSIT ? GAME_DEPOSIT : GAME_ON;
  }

  let gameStates = null; /* key → 0|1|2, warm cache used while offline */
  let gamesGateBound = false;

  function gameKeyFromName(src) {
    return String(src || '')
      .replace(/^.*?\/assets\/img\/game\//, '')
      .replace(/\.(png|jpe?g|webp|gif)$/i, '')
      .replace(/[.$#\[\]/]/g, '_');
  }

  function gameKeyOf(card) {
    if (card.dataset.gameKey) return card.dataset.gameKey;
    return gameKeyFromName(card.dataset.name);
  }

  /** live check against the DB — an admin can switch a game on any moment.
   *  Always answers 0 / 1 / 2 so the caller can tell "coming soon" from
   *  "needs a deposit". */
  async function gameStateOf(key) {
    if (!key) return GAME_ON;
    try {
      const res = await fetch('/api/games/status?keys=' + encodeURIComponent(key), {
        cache: 'no-store',
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.status && key in data.status) {
        return gameStateValue(data.status[key]);
      }
    } catch (err) {
      /* fall through to the last known map */
    }
    if (gameStates && key in gameStates) return gameStates[key];
    return GAME_ON;
  }

  /** "Deposit to Play" — global markup lives in src/components/dialogs.tsx */
  function openDepositPopup() {
    Dialog.open('depositAlert');
  }

  function initGamesGate() {
    /* background warm-up of the full map (used while offline) */
    fetch('/api/games', { silent: true })
      .then((r) => r.json())
      .then((d) => {
        const map = {};
        for (const k of Object.keys(d.games || {})) map[k] = gameStateValue(d.games[k]);
        gameStates = map;
      })
      .catch(() => {});

    /* capture phase: the answer decides whether the link is followed at all.
       bound once — initAll runs again after every SPA swap */
    if (gamesGateBound) return;
    gamesGateBound = true;
    document.addEventListener(
      'click',
      async (e) => {
        const card = e.target && e.target.closest ? e.target.closest('[data-game]') : null;
        if (!card) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const key = gameKeyOf(card);
        e.preventDefault();
        e.stopImmediatePropagation();

        await whenUserKnown();
        if (!currentUser) {
          toast('Please log in to play', 2000);
          return setTimeout(() => spaNavigate('/login', true), 350);
        }

        const state = await gameStateOf(key);
        if (state === GAME_OFF) return toast('Comming Soon!', 2500);
        /* the game is live — the player just needs a balance first */
        if (state === GAME_DEPOSIT) return openDepositPopup();

        const href = card.getAttribute('href') || '/games';
        /* a really playable game (Ludo) is a document of its own: its css and js
           live in that page's <head>, which an SPA swap cannot bring along */
        if (card.hasAttribute('data-full-nav')) return location.assign(href);
        spaNavigate(href, true);
      },
      true
    );
  }

  /* ------------------------------------------------------------------ deposit popup */
  /* "Deposit to Play" — the popup shown when a game carries GAMES/<key> = 2.
     Its markup is global (src/components/dialogs.tsx); this only wires it up. */
  let depositPopupBound = false;

  function initDepositPopup() {
    const box = $('#depositAlert');
    if (!box) return;

    if (!depositPopupBound) {
      depositPopupBound = true;
      /* delegated on document — the popup node is re-created on every SPA swap,
         so a listener bound to the element itself would go stale */
      on(document, 'click', (e) => {
        const cta = e.target && e.target.closest ? e.target.closest('[data-deposit-cta]') : null;
        if (!cta) return;
        e.preventDefault();
        Dialog.close($('#depositAlert'));
        spaNavigate('/account/deposit', true);
      });
    }

    /* the info line quotes the SAME minimum the deposit page enforces
       (CONFIG/LIMITS in Firebase) — ₹500 is just the server-rendered default */
    fetch('/api/config/rewards', { silent: true })
      .then((r) => r.json())
      .then((d) => {
        const min = Number(d && d.deposit && d.deposit.min);
        if (!(min > 0)) return;
        const slot = $('[data-dep-min]', box);
        if (slot) setText(slot, '₹' + min.toLocaleString('en-IN'));
      })
      .catch(() => {});
  }

  /* ------------------------------------------------------------------ 12. quick amounts */
  function initQuickAmounts() {
    $$('[data-quick-amount]').forEach((btn) => {
      on(btn, 'click', () => {
        const input = $('input[name="amount"]');
        if (!input) return;
        input.value = btn.dataset.quickAmount;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });

    $$('[data-pay-method]').forEach((card) => {
      on(card, 'click', () => {
        $$('[data-pay-method]').forEach((c) =>
          c.classList.toggle('is-selected', c === card)
        );
        toast(`${card.querySelector('.support-card__title').textContent} selected`);
      });
    });
  }

  /* ------------------------------------------------------------------ 13. withdraw page */
  function initWithdraw() {
    const page = document.getElementById('wdPage');
    if (!page) return;

    const amountInput = document.getElementById('wdAmount');
    const quickBtns = $$('.wd-quick__btn', page);
    const wrappers = $$('.wd-method', page);

    /* withdrawal limits come from the server (with safe fallbacks), so the page
       can never disagree with the API — the numbers themselves are editable in
       the admin panel (CONFIG/LIMITS) */
    const money = (n) => '₹' + Number(n || 0).toLocaleString('en-IN');
    const WD = { min: 1000, max: 10000, depMin: 100 };
    fetch('/api/config/rewards', { silent: true })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.withdraw) {
          if (Number(d.withdraw.min) > 0) WD.min = Number(d.withdraw.min);
          if (Number(d.withdraw.max) > 0) WD.max = Number(d.withdraw.max);
          /* chips follow the admin's list as well */
          const quick = Array.isArray(d.withdraw.quick) ? d.withdraw.quick : null;
          if (quick && quick.length && quickBtns.length) {
            const label = (v) => (v >= 1000 && v % 1000 === 0 ? v / 1000 + 'K' : String(v));
            quickBtns.forEach((btn, i) => {
              if (quick[i] == null) return;
              btn.dataset.wdQuick = quick[i];
              btn.textContent = '₹' + label(quick[i]);
            });
          }
        }
        if (d && d.deposit && Number(d.deposit.min) > 0) WD.depMin = Number(d.deposit.min);
      })
      .catch(() => {});

    /* quick amount chips */
    quickBtns.forEach((btn) =>
      on(btn, 'click', () => {
        amountInput.value = btn.dataset.wdQuick;
        quickBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      })
    );

    /* manual typing — digits only, capped at the maximum per request */
    on(amountInput, 'input', () => {
      let v = amountInput.value.replace(/[^\d]/g, '');
      if (v.length > 1) v = v.replace(/^0+/, '');
      if (v !== '' && parseInt(v, 10) > WD.max) {
        v = String(WD.max);
        toast('Maximum withdrawal is ' + money(WD.max) + ' at a time', 3000);
      }
      amountInput.value = v;
      quickBtns.forEach((b) => b.classList.remove('active'));
    });

    /* select / toggle payment methods — tap the open one to close it */
    wrappers.forEach((wrapper) => {
      on($('.wd-method__item', wrapper), 'click', () => {
        const isOpen = wrapper.classList.contains('selected');
        wrappers.forEach((w) => w.classList.remove('selected'));
        if (isOpen) return;
        wrapper.classList.add('selected');
      });
    });

    const val = (id) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    /* request → validate → confirm modal */
    on(document.getElementById('wdRequest'), 'click', () => {
      const amount = parseFloat(amountInput.value);
      if (!amount || amount <= 0) return toast('Please enter a valid amount', 3000);
      if (amount < WD.min) return toast('Minimum withdrawal is ' + money(WD.min), 3000);
      if (amount > WD.max)
        return toast('Maximum withdrawal is ' + money(WD.max) + ' at a time', 3000);

      const open = wrappers.find((w) => w.classList.contains('selected'));
      if (!open) return toast('Please select a payment method', 3000);
      const key = open.dataset.wdMethod;

      if (key === 'upi') {
        const upi = val('wdUpi');
        if (!upi || upi.indexOf('@') < 0) return toast('Please enter a valid UPI ID', 3000);
      } else if (key === 'bank') {
        if (!val('wdBankName')) return toast('Enter account holder name', 3000);
        const acc = val('wdBankAcc');
        if (!acc || acc.length < 8) return toast('Enter valid account number', 3000);
        if (acc !== val('wdBankAccConfirm')) return toast('Account numbers do not match', 3000);
        if (val('wdBankIfsc').length !== 11) return toast('Enter valid 11-digit IFSC', 3000);
      } else if (key === 'usdt') {
        const addr = val('wdUsdt');
        if (!addr || addr.length < 20) return toast('Enter valid USDT wallet address', 3000);
        if (addr !== val('wdUsdtConfirm')) return toast('Wallet addresses do not match', 3000);
      } else if (key === 'card') {
        if (val('wdCardNum').replace(/\s/g, '').length < 16) return toast('Enter valid 16-digit card number', 3000);
        if (!val('wdCardName')) return toast('Enter name on card', 3000);
        if (val('wdCardExp').length < 5) return toast('Enter valid expiry (MM/YY)', 3000);
        if (val('wdCardCvv').length < 3) return toast('Enter valid CVV', 3000);
      }

      const label = $('.wd-method__info h4', open).textContent;
      document.getElementById('wdConfirmText').textContent =
        'Are you sure you want to withdraw ' +
        money(parseFloat(amountInput.value)) +
        ' via ' +
        label +
        '?';
      Dialog.open('withdrawConfirm');
    });

    /* confirm → real withdrawal request to the backend */
    on(document.getElementById('wdConfirm'), 'click', async () => {
      const amount = parseFloat(amountInput.value);
      const open = wrappers.find((w) => w.classList.contains('selected'));
      const method = open ? open.dataset.wdMethod : 'upi';

      /* collect the payment details filled for the selected method */
      const details = {};
      $$('.wd-field', page).forEach((f) => {
        if (f.value) details[f.id] = f.value;
      });

      const btn = document.getElementById('wdConfirm');
      if (btn) btn.disabled = true;
      try {
        const res = await fetch('/api/withdraw', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ amount, method, details }),
        });
        const data = await res.json().catch(() => ({}));
        Dialog.close('withdrawConfirm');
        if (!res.ok) {
          if (res.status === 401) {
            toast('Please log in first', 2000);
            return setTimeout(() => spaNavigate('/login', true), 400);
          }
          if (data.code === 'insufficient')
            return toast('Insufficient balance — deposit first', 3000);
          if (data.code === 'duplicate')
            return toast('That withdrawal is already pending', 3000);
          return toast(data.error || 'Withdrawal failed', 3000);
        }
        toast(data.message || 'Withdrawal requested!', 3000);
        /* the money is held the instant the request lands — paint the balance the
           API answered with (no round-trip), then let /api/me confirm it and
           clear any marker a match left behind */
        const held = data.balance && typeof data.balance.total === 'number' ? data.balance.total : null;
        if (held !== null) paintBalance(held);
        lastMoneySync = 0;
        refreshUser();
        amountInput.value = '';
        quickBtns.forEach((b) => b.classList.remove('active'));
      } catch (err) {
        Dialog.close('withdrawConfirm');
        toast('Network error, try again', 3000);
      } finally {
        if (btn) btn.disabled = false;
      }
    });

    /* auto-format card number → 1234 5678 9012 3456 */
    const cardNum = document.getElementById('wdCardNum');
    on(cardNum, 'input', () => {
      const digits = cardNum.value.replace(/\D/g, '').substring(0, 16);
      cardNum.value = (digits.match(/.{1,4}/g) || []).join(' ');
    });

    /* auto-format expiry → MM/YY */
    const cardExp = document.getElementById('wdCardExp');
    on(cardExp, 'input', () => {
      let v = cardExp.value.replace(/\D/g, '').substring(0, 4);
      if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
      cardExp.value = v;
    });
  }

  /* ------------------------------------------------------------------ 14. entry points */
  function initEntryPoints() {
    /* "Detail" button on the notice bar → notifications page */
    $$('[data-open-messages]').forEach((btn) =>
      on(btn, 'click', () => {
        window.location.href = '/messages';
      })
    );

    /* tapping a notification opens a detail sheet */
    $$('[data-open-message]').forEach((card) =>
      on(card, 'click', () => toast('Notification opened'))
    );

    /* guest-gated actions — guests are sent straight to the login page */
    $$('[data-requires-auth]').forEach((el) =>
      on(el, 'click', (e) => {
        if (currentUser) return; /* logged in — the real handler takes over */
        e.preventDefault();
        e.stopImmediatePropagation();
        if (!userKnown) {
          /* decide after the first user sync — for a logged-in user hand the
             tap back with a fresh click so the real handler runs */
          whenUserKnown().then(() => {
            if (!currentUser) {
              toast('Please log in to continue', 2000);
              return setTimeout(() => spaNavigate('/login', true), 350);
            }
            el.dispatchEvent(
              new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
            );
          });
          return;
        }
        toast('Please log in to continue', 2000);
        setTimeout(() => spaNavigate('/login', true), 350);
      })
    );

    /* declarative toasts — any element with [data-toast] shows its message */
    $$('[data-toast]').forEach((el) => on(el, 'click', () => toast(el.dataset.toast)));

    /* security tools: strength meter, pin keypad, copy, devices, forms */
    initSecurityTools();

    /* real active devices — DB-backed logout per device */
    initDevices();

    /* lucky wheel spin page */
    initLuckyWheel();

    /* daily reward streak page */
    initDailyReward();

    /* notifications + deposit pages */
    initNotifications();
    initDeposit();

    /* the account page's balance ↻ reads the wallet from the server */
    initBalanceRefresh();

    /* honour prefers-reduced-motion for the marquees */
    if (prefersReduced) {
      $$('.noticeBar__container-body-text, .winners__track').forEach((el) => {
        el.style.animation = 'none';
      });
    }
  }

  /* ------------------------------------------------------------------ security tools */
  function initSecurityTools() {
    /* password strength meter — Change Password page */
    const pass = $('[data-pass-strength]');
    if (pass) {
      const bars = $$('[data-strength-bars] span');
      const text = $('[data-strength-text]');
      on(pass, 'input', () => {
        const v = pass.value;
        let strength = 0;
        if (v.length >= 8) strength++;
        if (/[A-Z]/.test(v)) strength++;
        if (/[0-9]/.test(v)) strength++;
        if (/[^A-Za-z0-9]/.test(v)) strength++;

        bars.forEach((b) => (b.className = ''));
        if (!v.length) {
          text.textContent = 'Enter a password';
          text.style.color = '#8b949e';
          return;
        }
        if (strength <= 1) {
          bars[0].classList.add('weak');
          text.textContent = 'Weak password';
          text.style.color = '#ff4d4d';
        } else if (strength === 2) {
          bars[0].classList.add('medium');
          bars[1].classList.add('medium');
          text.textContent = 'Medium strength';
          text.style.color = '#d4af37';
        } else if (strength === 3) {
          bars.slice(0, 3).forEach((b) => b.classList.add('active'));
          text.textContent = 'Strong password';
          text.style.color = '#00c853';
        } else {
          bars.forEach((b) => b.classList.add('active'));
          text.textContent = 'Very strong password';
          text.style.color = '#00c853';
        }
      });
    }

    /* copy-to-clipboard */
    $$('[data-copy]').forEach((btn) =>
      on(btn, 'click', () => {
        const value = btn.dataset.copy || '';
        if (navigator.clipboard) {
          navigator.clipboard.writeText(value).then(
            () => toast(btn.dataset.copyToast || 'Secret code copied!'),
            () => toast('Failed to copy')
          );
        } else {
          toast('Copy not supported');
        }
      })
    );

    /* SPA navigation + page-transition spinner live at the boot section
       (they need initAll) — see the end of this file. */

    /* PIN keypad — create + confirm stages */
    const pad = $('[data-pin-keypad]');
    if (pad) {
      const dots = $$('[data-pin-dots] span');
      const title = $('[data-pin-title]');
      const subtitle = $('[data-pin-subtitle]');
      let pin = '';
      let stage = 1;
      let firstPin = '';

      const reset = (msg) => {
        if (msg) toast(msg, 2500);
        pin = '';
        firstPin = '';
        stage = 1;
        title.textContent = 'Enter your PIN';
        subtitle.textContent = "Choose a 4-digit code you'll remember";
        dots.forEach((d) => d.classList.remove('filled'));
      };

      $$('[data-key]', pad).forEach((k) =>
        on(k, 'click', () => {
          if (pin.length >= 4) return;
          pin += k.dataset.key;
          dots.forEach((d, i) => d.classList.toggle('filled', i < pin.length));
          if (pin.length === 4) {
            setTimeout(() => {
              if (stage === 1) {
                firstPin = pin;
                pin = '';
                stage = 2;
                title.textContent = 'Confirm your PIN';
                subtitle.textContent = 'Re-enter the same 4-digit code';
                dots.forEach((d) => d.classList.remove('filled'));
              } else if (pin === firstPin) {
                reset('PIN set successfully!');
              } else {
                reset('PINs do not match. Try again.');
              }
            }, 250);
          }
        })
      );
      const back = $('[data-pin-back]');
      if (back)
        on(back, 'click', () => {
          pin = pin.slice(0, -1);
          dots.forEach((d, i) => d.classList.toggle('filled', i < pin.length));
        });
    }

    /* character counter */
    $$('[data-charcount]').forEach((input) => {
      const out = $('[data-charcount-out]');
      if (!out) return;
      on(input, 'input', () => (out.textContent = String(input.value.length)));
    });

    /* 6-digit code inputs — digits only */
    $$('form[data-sec-form="2fa"] input[name="code"]').forEach((input) =>
      on(input, 'input', () => {
        input.value = input.value.replace(/[^0-9]/g, '').slice(0, 6);
      })
    );

    /* security form validations */
    $$('[data-sec-form]').forEach((form) => {
      on(form, 'submit', async (e) => {
        e.preventDefault();
        const kind = form.dataset.secForm;
        if (kind === 'password') {
          const cur = form.querySelector('[name="current"]').value.trim();
          const nw = form.querySelector('[name="new"]').value.trim();
          const cf = form.querySelector('[name="confirm"]').value.trim();
          if (!cur) return toast('Please enter your current password');
          if (!nw || nw.length < 8) return toast('Password must be at least 8 characters');
          if (nw !== cf) return toast('Passwords do not match');
          await whenUserKnown();
          if (!currentUser) {
            toast('Please log in first', 2000);
            return setTimeout(() => spaNavigate('/login', true), 400);
          }
          const btn = form.querySelector('[type="submit"]');
          if (btn) btn.disabled = true;
          try {
            const res = await fetch('/api/password', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ current: cur, password: nw }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
              if (res.status === 401) {
                toast('Please log in first', 2000);
                return setTimeout(() => spaNavigate('/login', true), 400);
              }
              if (data.code) showAccountBlock(data.error || 'Your account is restricted');
              return toast(data.error || 'Could not change password', 3000);
            }
            toast(data.message || 'Password changed successfully!', 2500);
            form.reset();
            $$('[data-strength-bars] span').forEach((b) => (b.className = ''));
            const st = $('[data-strength-text]');
            if (st) {
              st.textContent = 'Enter a password';
              st.style.color = '#8b949e';
            }
          } catch (err) {
            toast('Network error, please try again', 3000);
          } finally {
            if (btn) btn.disabled = false;
          }
        } else if (kind === '2fa') {
          const code = form.querySelector('[name="code"]').value.trim();
          if (code.length !== 6) return toast('Please enter a valid 6-digit code');
          toast('2FA enabled successfully!', 2500);
          form.reset();
        } else if (kind === 'phishing') {
          const code = form.querySelector('[name="code"]').value.trim();
          if (code.length < 4) return toast('Code must be at least 4 characters');
          toast('Anti-Phishing Code saved!', 2500);
          form.reset();
          const out = $('[data-charcount-out]');
          if (out) out.textContent = '0';
        }
      });
    });
  }

  /* ------------------------------------------------------------------ active devices */
  /* The list is rendered server-side from USERS/<uid>/devices — real sessions with
     device, browser, city and last activity. Here we only act on it: logging a
     device out really deletes its session in the DB, so that device is signed out
     on its very next request (anywhere in the world). */
  function initDevices() {
    const list = $('[data-devices-list]');
    if (!list) return;

    const fmtTime = (ms) => {
      if (!ms) return '';
      try {
        return new Date(Number(ms)).toLocaleString('en-IN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        });
      } catch (err) {
        return '';
      }
    };

    const setCount = () => {
      const cards = $$('[data-device]', list).length;
      const out = $('[data-device-count]');
      if (out) setText(out, cards + (cards === 1 ? ' device' : ' devices'));
      const empty = $('[data-devices-empty]');
      if (empty) empty.classList.toggle('hidden', cards > 0);
    };

    const fadeOut = (card) => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateX(-0.48rem)';
      setTimeout(() => {
        card.remove();
        setCount();
      }, 400);
    };

    /* refresh the "last active" stamps of the open list (silent, no spinner) */
    fetch('/api/devices', { cache: 'no-store', silent: true })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d || !d.ok) return;
        (d.devices || []).forEach((dev) => {
          const el = list.querySelector('[data-device-sid="' + dev.sid + '"] [data-device-time]');
          if (el && dev.lastSeen) el.textContent = fmtTime(dev.lastSeen);
        });
      })
      .catch(() => {});

    /* log out ONE device — deletes that session for real */
    $$('[data-device-logout]', list).forEach((btn) =>
      on(btn, 'click', async () => {
        const card = btn.closest('[data-device]');
        const sid = (card && card.dataset.deviceSid) || btn.dataset.deviceSid || '';
        if (!sid) return;
        btn.disabled = true;
        try {
          const res = await fetch('/api/devices/logout', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ sid }),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            btn.disabled = false;
            return toast(data.error || 'Could not log out that device', 3000);
          }
          if (data.self) {
            currentUser = null;
            try { localStorage.removeItem(REMEMBER_KEY); } catch (err) {}
            toast(data.message || 'Logged out from this device', 2500);
            return setTimeout(() => spaNavigate('/login', true), 400);
          }
          if (card) fadeOut(card);
          else setCount();
          toast(data.message || 'Device logged out successfully!', 2500);
        } catch (err) {
          btn.disabled = false;
          toast('Network error, please try again', 3000);
        }
      })
    );

    /* "log out from all other devices" → one call removes every other session */
    const allBtn = $('[data-logout-all]');
    on(allBtn, 'click', async () => {
      const others = $$('[data-device]', list).filter(
        (c) => !c.classList.contains('sec-device--current')
      );
      if (!others.length) return toast('No other devices to log out', 2500);
      allBtn.disabled = true;
      try {
        const res = await fetch('/api/devices/logout-others', { method: 'POST' });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          allBtn.disabled = false;
          return toast(data.error || 'Could not log out the other devices', 3000);
        }
        others.forEach(fadeOut);
        toast(data.message || 'Logged out from all other devices', 2500);
      } catch (err) {
        toast('Network error, please try again', 3000);
      } finally {
        allBtn.disabled = false;
      }
    });
  }

  /* ------------------------------------------------------------------ lucky wheel */
  /* world time helper — the wheel and the daily reward both reset at 4:00 AM IST */
  function fmtReset(ts) {
    if (!ts) return '';
    try {
      return new Date(ts).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
      });
    } catch (err) {
      return '';
    }
  }

  function initLuckyWheel() {
    const wheel = $('[data-wheel]');
    if (!wheel) return;

    /* MUST match the segment order in src/pages/spin.tsx + CONFIG/SPIN in Firebase */
    const SEGMENTS = 8;

    let rotation = 0;
    let spinning = false;

    const modal = $('[data-wheel-modal]');
    const icon = $('[data-result-icon]');
    const title = $('[data-result-title]');
    const msg = $('[data-result-msg]');
    const btn = $('[data-result-btn]');
    const info = $('[data-wheel-info]');
    const spinBtn = $('[data-spin-btn]');
    const spinLabel = $('[data-spin-label]');

    const money = (n) => '₹' + Number(n || 0).toLocaleString('en-IN');

    if (btn && modal) on(btn, 'click', () => modal.classList.remove('active'));

    /* paint the state the server reported (on load and after every spin) */
    function applyState(state) {
      if (!spinBtn) return;
      if (!state || !state.loggedIn) {
        spinBtn.disabled = false;
        if (spinLabel) setText(spinLabel, 'SPIN NOW');
        if (info) setText(info, 'Please log in to play');
        return;
      }
      if (state.enabled === false) {
        spinBtn.disabled = true;
        if (spinLabel) setText(spinLabel, 'Comming Soon!');
        if (info) setText(info, 'Lucky Wheel is temporarily unavailable.');
        return;
      }
      if (!state.canSpin) {
        spinBtn.disabled = true;
        if (spinLabel) setText(spinLabel, 'Already Claimed!');
        if (info)
          setText(
            info,
            (Number(state.lastAmount) > 0 ? 'You won ' + money(state.lastAmount) + '. ' : '') +
              'Next spin unlocks at 4:00 AM (' +
              fmtReset(state.nextResetAt) +
              ')'
          );
        return;
      }
      spinBtn.disabled = false;
      if (spinLabel) setText(spinLabel, 'SPIN NOW');
      if (info) setText(info, 'Tap the button to spin the wheel!');
    }

    /* live state from the DB — one spin per user per day */
    async function loadState() {
      try {
        const res = await fetch('/api/spin', { cache: 'no-store', silent: true });
        const data = await res.json().catch(() => null);
        if (data && data.ok) applyState(data);
      } catch (err) {
        /* offline — keep the server-rendered state */
      }
    }
    loadState();

    function showResult(data) {
      if (!modal || !icon || !title || !msg) return;
      if (Number(data.amount) > 0) {
        icon.textContent = '🎉';
        icon.className = 'lw-box__icon lw-box__icon--win';
        setText(title, 'Congratulations!');
        title.className = 'lw-box__title lw-box__title--win';
        setHtml(
          msg,
          'You won <strong>' + money(data.amount) + '</strong>. Your balance is updated instantly!'
        );
      } else if (data.freeGame) {
        icon.textContent = '🎁';
        icon.className = 'lw-box__icon lw-box__icon--win';
        setText(title, 'Congratulations!');
        title.className = 'lw-box__title lw-box__title--win';
        setHtml(msg, 'You won <strong>1 Free Game</strong>!');
      } else {
        icon.textContent = '😢';
        icon.className = 'lw-box__icon lw-box__icon--lose';
        setText(title, 'Better Luck Next Time');
        title.className = 'lw-box__title lw-box__title--lose';
        setText(msg, 'No luck this time. Come back tomorrow!');
      }
      setTimeout(() => modal.classList.add('active'), 100);
    }

    /* SPIN — the server decides the prize, we animate to that segment */
    on(spinBtn, 'click', async () => {
      if (spinning) return;
      await whenUserKnown();
      if (!currentUser) {
        toast('Please log in to play', 2000);
        return setTimeout(() => spaNavigate('/login', true), 350);
      }
      spinning = true;
      if (spinBtn) spinBtn.disabled = true;
      if (info) setText(info, 'Please Wait!');

      let data = null;
      let error = '';
      try {
        const res = await fetch('/api/spin', { method: 'POST' });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) error = body.error || 'Could not spin right now';
        else data = body;
      } catch (err) {
        error = 'Network error, please try again';
      }

      if (!data) {
        spinning = false;
        if (spinBtn) spinBtn.disabled = false;
        toast(error, 3000);
        loadState();
        return;
      }

      const index = Math.max(0, Math.min(SEGMENTS - 1, Number(data.segment) || 0));
      const midpoint = index * 45 + 22.5;
      const targetMod = (360 - midpoint) % 360;
      const currentMod = ((rotation % 360) + 360) % 360;
      const diff = (targetMod - currentMod + 360) % 360;
      const extraSpins = (5 + Math.floor(Math.random() * 3)) * 360;
      rotation += extraSpins + diff;

      /* force reflow so the new transition always runs */
      wheel.style.transition = 'none';
      wheel.style.transform = `rotate(${rotation - extraSpins - diff}deg)`;
      void wheel.offsetWidth;
      wheel.style.transition = 'transform 5.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
      wheel.style.transform = `rotate(${rotation}deg)`;

      if (info) info.textContent = 'Spinning — good luck!';

      setTimeout(() => {
        showResult(data);
        spinning = false;
        /* the balance + the "Lucky Spin" history entry are already saved */
        refreshUser();
        loadState();
      }, 5600);
    });
  }

  /* ------------------------------------------------------------------ daily reward */
  function initDailyReward() {
    const grid = $('[data-dr-grid]');
    if (!grid) return;

    const UNLOCK_DAY = 7;
    let today = Number(grid.dataset.drToday) || 4;
    let marked = false;

    /* calendar expand/collapse — only Week 1 visible initially */
    const wrap = $('[data-dr-wrap]');
    const toggle = $('[data-dr-toggle]');
    const toggleText = $('[data-dr-toggle-text]');
    on(toggle, 'click', () => {
      if (!wrap) return;
      const expanded = wrap.classList.toggle('expanded');
      if (toggle) toggle.classList.toggle('expanded', expanded);
      if (toggleText)
        setText(toggleText, expanded ? 'Hide Full Calendar' : 'View Full 30-Day Calendar');
    });

    const modal = $('[data-dr-modal]');
    const box = $('[data-dr-box]');
    const iconEl = $('[data-dr-box-icon]');
    const titleEl = $('[data-dr-box-title]');
    const subEl = $('[data-dr-box-sub]');
    const rewardEl = $('[data-dr-box-reward]');
    const closeBtn = $('[data-dr-close]');
    if (closeBtn && modal) on(closeBtn, 'click', () => modal.classList.remove('active'));

    const showModal = (type) => {
      if (!modal || !iconEl || !titleEl || !subEl || !rewardEl) return;
      const EMOJIS = { unlocked: '🏆', progress: '✅', daily: '🎮' };
      iconEl.textContent = EMOJIS[type] || '✅';

      if (type === 'unlocked') {
        setText(titleEl, 'Streak Complete!');
        setText(subEl, 'You have unlocked 1 Free Game per day.');
        rewardEl.classList.remove('is-hidden');
      } else if (type === 'progress') {
        setText(titleEl, 'Login Marked!');
        const doneNow = lastState ? Number(lastState.streak) || 0 : Math.max(0, today - 1);
        const remaining = Math.max(0, UNLOCK_DAY - doneNow);
        setText(
          subEl,
          `Keep going! ${remaining} more ${remaining === 1 ? 'day' : 'days'} to unlock daily free games.`
        );
        rewardEl.classList.add('is-hidden');
      } else {
        setText(titleEl, 'Free Game Claimed!');
        setText(subEl, 'Enjoy your daily free game. Come back tomorrow!');
        rewardEl.classList.remove('is-hidden');
      }

      modal.classList.add('active');
      if (box && (type === 'unlocked' || type === 'daily')) {
        const colors = ['#F9D976', '#D4AF37', '#00C853', '#FFFFFF', '#B8860B'];
        for (let i = 0; i < 20; i++) {
          const c = document.createElement('div');
          c.className = 'dr-confetti';
          c.style.left = Math.random() * 100 + '%';
          c.style.background = colors[Math.floor(Math.random() * colors.length)];
          c.style.animationDuration = 2 + Math.random() * 1.5 + 's';
          c.style.animationDelay = Math.random() * 0.5 + 's';
          const s = (5 + Math.random() * 6) * 0.024 + 'rem';
          c.style.width = s;
          c.style.height = s;
          box.appendChild(c);
          setTimeout(() => c.remove(), 4000);
        }
      }
    };

    /* reflect the server state on the calendar, the status card and the button */
    let lastState = null;
    function applyDailyState(state) {
      if (!state) return;
      lastState = state;
      const completed = Number(state.streak) || 0;
      const claimedToday = !!state.claimedToday;
      const day = Number(state.day) || 1;
      const unlock = Number(state.unlockDay) || UNLOCK_DAY;
      const unlocked = !!state.unlocked || completed >= unlock;

      grid.dataset.drToday = String(day);
      for (let d = 1; d <= 30; d++) {
        const cell = grid.querySelector(`[data-dr-day="${d}"]`);
        if (!cell) continue;
        cell.classList.remove('dr-day--completed', 'dr-day--today');
        if (d < day) cell.classList.add('dr-day--completed');
        else if (d === day && !claimedToday) cell.classList.add('dr-day--today');
      }

      const statusIcon = $('[data-dr-status-icon]');
      const statusTitle = $('[data-dr-status-title]');
      const statusText = $('[data-dr-status-text]');
      if (statusIcon) statusIcon.classList.toggle('is-locked', !unlocked);
      if (statusTitle)
        setText(statusTitle, unlocked ? 'Unlocked!' : `${completed} / ${unlock} Days Completed`);
      if (statusText)
        setText(
          statusText,
          unlocked
            ? 'You get 1 Free Game every day — keep logging in!'
            : `Complete ${Math.max(0, unlock - completed)} more ${
                unlock - completed === 1 ? 'day' : 'days'
              } to unlock daily free games.`
        );

      if (claim && claimText) {
        claim.classList.remove('is-loading');
        if (claimedToday) {
          claim.disabled = true;
          claim.classList.add('is-done');
          setText(claimText, 'Already Claimed!');
        } else {
          claim.disabled = false;
          claim.classList.remove('is-done');
          setText(claimText, "Mark Today's Login");
        }
      }
      today = day;
      marked = claimedToday;
    }

    async function loadDaily() {
      try {
        const res = await fetch('/api/daily', { cache: 'no-store', silent: true });
        const data = await res.json().catch(() => null);
        if (data && data.ok) applyDailyState(data);
      } catch (err) {
        /* offline — keep the server-rendered state */
      }
    }
    loadDaily();

    /* claim — the streak lives in Firebase, resets at 4:00 AM IST */
    const claim = $('[data-dr-claim]');
    const claimText = $('[data-dr-claim-text]');
    on(claim, 'click', async () => {
      await whenUserKnown();
      if (!currentUser) {
        toast('Please log in to play', 2000);
        return setTimeout(() => spaNavigate('/login', true), 350);
      }
      if (marked) return;
      if (claim) {
        claim.disabled = true;
        claim.classList.add('is-loading');
      }
      if (claimText) setText(claimText, 'Please Wait!');

      let data = null;
      let error = '';
      try {
        const res = await fetch('/api/daily', { method: 'POST' });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) error = body.error || 'Could not claim right now';
        else data = body;
      } catch (err) {
        error = 'Network error, please try again';
      }
      if (claim) claim.classList.remove('is-loading');

      if (!data) {
        if (claim) claim.disabled = false;
        if (claimText) setText(claimText, "Mark Today's Login");
        toast(error, 3000);
        loadDaily();
        return;
      }

      marked = true;
      applyDailyState({
        streak: data.streak,
        day: data.day,
        claimedToday: true,
        unlocked: data.unlocked,
        unlockDay: UNLOCK_DAY,
      });
      refreshUser();
      if (data.streakBroken) toast('Your streak broke — Day 1 starts again', 3000);
      if (data.unlocked) showModal('unlocked');
      else showModal('progress');
      loadDaily();
    });
  }

  /* ------------------------------------------------------------------ notifications */
  function initNotifications() {
    const refresh = $('[data-nt-refresh]');
    if (!refresh) return;

    on(refresh, 'click', () => {
      refresh.classList.add('is-spinning');
      setTimeout(() => refresh.classList.remove('is-spinning'), 800);
    });

    /* mark as read + stagger fade-in */
    $$('[data-nt-card]').forEach((card, i) => {
      card.style.animationDelay = i * 0.08 + 's';
      on(card, 'click', () => {
        if (!card.classList.contains('unread')) return;
        card.classList.remove('unread');
        const dot = card.querySelector('.nt-card__dot');
        if (dot) dot.remove();
      });
    });

    const empty = $('[data-nt-empty]');
    if (empty && !$$('[data-nt-card]').length) empty.classList.add('active');
  }

  /* ------------------------------------------------------------------ deposit */
  /* REAL UPI deposits (FamGateway). The flow:
       1. Proceed  → POST /api/deposit/order — the SERVER opens the order and
          answers with a QR image, a UPI intent link and a 5-minute window.
       2. This page polls GET /api/deposit/status every 3s. The server (never the
          browser) talks to the gateway with the merchant key and credits the
          wallet exactly once. The gateway's own webhook can land first — both
          paths share one settlement function (src/lib/payments.ts).
       3. The pending order is also kept on the device, so a refresh or a trip
          into the UPI app and back resumes the same QR. */
  const DP_STORE = 'vg_deposit_order';
  const DP_POLL_MS = 3000;

  function initDeposit() {
    const amount = $('[data-dp-amount]');
    if (!amount) return;

    /* the minimum deposit is editable in the admin panel (CONFIG/LIMITS). The page
       is server-rendered with it, so the very first tap is already judged by the
       right number — the live read below only refreshes it. */
    const dep = { min: 500, enabled: true, configured: true, window: 300 };
    const minSlot = $('[data-deposit-min]');
    if (minSlot && Number(minSlot.dataset.depositMin) > 0) {
      dep.min = Number(minSlot.dataset.depositMin);
      amount.min = String(dep.min);
    }
    /* re-renders the preset chips from the live minimum (defined below, applied
       once the config has landed) */
    let applyQuick = null;
    /* the presets follow the live minimum: the first chip IS the minimum and the
       rungs below it drop away (min 200 → 200 / 1,000 / 5,000 / 10,000). The same
       ladder is server-rendered in src/pages/deposit.tsx. */
    const QUICK_STEPS = [1000, 5000, 10000];
    const quickAmounts = (min) => {
      const floor = Math.max(1, Math.floor(Number(min) || 0));
      return [floor].concat(QUICK_STEPS.filter((v) => v > floor));
    };
    fetch('/api/config/rewards', { silent: true })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.deposit && Number(d.deposit.min) > 0) dep.min = Number(d.deposit.min);
        if (d && d.payments) {
          dep.enabled = d.payments.enabled !== 0;
          dep.configured = d.payments.configured !== false;
          if (Number(d.payments.windowSeconds) > 0) dep.window = Number(d.payments.windowSeconds);
        }
        /* applyQuick is defined below; a config that lands before it does nothing
           here — the server-rendered chips are already correct */
        if (applyQuick) applyQuick(dep.min);
      })
      .catch(() => {});
    const belowMin = (v) => toast('Minimum deposit is ₹' + dep.min);

    const step1 = $('[data-dp-step="1"]');
    const step2 = $('[data-dp-step="2"]');
    const title = $('[data-dp-title]');
    const payAmount = $('[data-dp-pay-amount]');
    const instrAmount = $('[data-dp-instr-amount]');
    const timerEl = $('[data-dp-timer]');
    const qrImg = $('[data-dp-qr-img]');
    const qrBox = $('[data-dp-qr-placeholder]');
    const statusEl = $('[data-dp-status]');
    const statusText = $('[data-dp-status-text]');
    const checkBtn = $('[data-dp-check]');
    const retryBtn = $('[data-dp-retry]');

    let order = null; /* the live order (mirrored to localStorage) */
    let timerInterval = null; /* 1s countdown */
    let pollInterval = null; /* 3s server check */
    let timeLeft = dep.window;
    let settled = false; /* paid or expired — polling has stopped */

    const fmt = (v) => Number(v || 0).toLocaleString('en-IN');

    /* pending orders survive a reload or a trip into the bank app */
    const store = {
      read() {
        try {
          return JSON.parse(localStorage.getItem(DP_STORE) || 'null');
        } catch (e) {
          return null;
        }
      },
      write(v) {
        try {
          if (v) localStorage.setItem(DP_STORE, JSON.stringify(v));
          else localStorage.removeItem(DP_STORE);
        } catch (e) {
          /* private mode — the payment still works, it just cannot be resumed */
        }
      },
    };

    const stopAll = () => {
      if (timerInterval) clearInterval(timerInterval);
      if (pollInterval) clearInterval(pollInterval);
      timerInterval = null;
      pollInterval = null;
    };

    const updateTimer = () => {
      if (!timerEl) return;
      const t = Math.max(0, Math.floor(timeLeft));
      setText(
        timerEl,
        String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0')
      );
    };

    const setStatus = (kind, text) => {
      if (statusEl) statusEl.dataset.dpStatus = kind;
      setText(statusText, text);
    };

    const CHECK_LABEL = 'Verify Payment';

    const setCheck = (text, disabled) => {
      if (!checkBtn) return;
      checkBtn.disabled = !!disabled;
      checkBtn.classList.toggle('is-loading', text === 'Checking…');
      setText(checkBtn.querySelector('span'), text);
    };

    const goStep1 = () => {
      stopAll();
      settled = false;
      order = null;
      store.write(null);
      if (step2) step2.classList.remove('active');
      if (step1) step1.classList.add('active');
      if (title) setText(title, 'Deposit');
      if (retryBtn) retryBtn.hidden = true;
      if (checkBtn) checkBtn.hidden = false;
      setCheck(CHECK_LABEL, false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    /* the countdown is only a hint — the server has the last word on a paid order */
    const startTimer = () => {
      if (timerInterval) clearInterval(timerInterval);
      updateTimer();
      timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 60 && timeLeft > 0 && statusEl && statusEl.dataset.dpStatus === 'pending')
          setStatus('pending', 'Almost out of time — please finish the payment now');
        if (timeLeft <= 0) handleExpired();
      }, 1000);
    };

    const handleExpired = () => {
      stopAll();
      settled = true;
      store.write(null);
      setStatus('expired', 'This payment window has closed. Generate a new QR to try again.');
      if (checkBtn) checkBtn.hidden = true;
      if (retryBtn) retryBtn.hidden = false;
      if (qrImg) qrImg.classList.add('is-dead');
    };

    /* the bank reference was already used by another order — it can never be
       matched to this one, so the session is over */
    const handleRejected = () => {
      stopAll();
      settled = true;
      store.write(null);
      setStatus('expired', 'This payment could not be matched to your order. Generate a new QR.');
      if (checkBtn) checkBtn.hidden = true;
      if (retryBtn) retryBtn.hidden = false;
      if (qrImg) qrImg.classList.add('is-dead');
      toast('Payment not accepted — please create a new QR', 3500);
    };

    const handlePaid = (data) => {
      stopAll();
      settled = true;
      store.write(null);
      if (checkBtn) checkBtn.hidden = true;
      if (retryBtn) retryBtn.hidden = true;

      const money = Number(data.amount || (order && order.amount) || 0);
      if (data.credited) setStatus('success', 'Payment received — ₹' + fmt(money) + ' added to your wallet');
      else setStatus('success', 'Payment received — your balance will be updated after verification');

      /* the success dialog tells the user exactly what happened */
      const modal = $('[data-dp-modal]');
      const mText = $('[data-dp-modal-text]');
      const mRef = $('[data-dp-modal-ref]');
      setText($('[data-dp-modal-title]'), 'Payment Received!');
      setText(
        mText,
        data.credited
          ? '₹' + fmt(money) + ' has been added to your wallet.'
          : 'We are verifying your payment — your balance will update shortly.'
      );
      if (mRef) {
        mRef.hidden = !data.utr;
        if (data.utr) setText(mRef, 'UTR ' + data.utr);
      }
      if (modal) modal.classList.add('active');

      /* navbar + wallet are refreshed from the server, so the new balance is real */
      refreshUser(true);
    };

    /* fills the whole payment step from one order object (server or localStorage) */
    const showOrder = (ord) => {
      order = ord;
      settled = false;
      store.write(ord);

      if (qrBox) qrBox.hidden = false;
      if (qrImg) {
        qrImg.classList.remove('is-dead');
        qrImg.hidden = true;
        qrImg.onload = () => {
          qrImg.hidden = false;
          if (qrBox) qrBox.hidden = true;
        };
        qrImg.onerror = () => {
          if (qrBox) {
            qrBox.hidden = false;
            setText(qrBox.querySelector('span'), 'QR unavailable — try again');
          }
        };
        qrImg.src = ord.qrUrl || '';
      }

      const payable = Number(ord.payableAmount || ord.amount || 0);
      setText(payAmount, fmt(payable));
      setText(instrAmount, '₹' + fmt(payable));
      if (retryBtn) retryBtn.hidden = true;
      if (checkBtn) checkBtn.hidden = false;
      setCheck(CHECK_LABEL, false);
      setStatus('pending', 'Waiting for payment confirmation…');

      if (step1) step1.classList.remove('active');
      if (step2) step2.classList.add('active');
      if (title) setText(title, 'Complete Payment');

      timeLeft = Math.max(
        5,
        Math.round(((Number(ord.expiresAt) || Date.now() + dep.window * 1000) - Date.now()) / 1000)
      );
      startTimer();
      startPolling();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    let checking = false;

    /* the server check — and the thing that actually credits the wallet */
    const check = async (manual) => {
      /* one request at a time: the interval, a manual tap and a slow answer
         must never stack up into parallel settles */
      if (!order || settled || checking) return;
      checking = true;
      if (manual) setCheck('Checking…', true);
      try {
        const res = await fetch('/api/deposit/status?order_id=' + encodeURIComponent(order.orderId), {
          cache: 'no-store',
          silent: true,
        });
        const data = await res.json().catch(() => ({}));
        if (manual) setCheck(CHECK_LABEL, false);
        if (!res.ok) {
          if (res.status === 409) return handleRejected();
          if (manual) toast(data.error || 'Could not check the payment', 3000);
          return;
        }
        if (data.status === 'success') return handlePaid(data);
        if (data.status === 'expired') return handleExpired();
        if (data.status === 'duplicate') return handleRejected();
        if (typeof data.secondsLeft === 'number' && data.secondsLeft > 0) {
          timeLeft = data.secondsLeft;
          updateTimer();
        }
        if (manual)
          toast(
            data.checked === false
              ? 'Gateway unreachable — please keep waiting'
              : 'No payment received yet',
            3000
          );
      } catch (err) {
        if (manual) {
          setCheck(CHECK_LABEL, false);
          toast('Network error, please try again', 3000);
        }
      } finally {
        checking = false;
      }
    };

    const startPolling = () => {
      if (pollInterval) clearInterval(pollInterval);
      /* every 3 seconds, one at a time — the server tells the gateway the truth
         (the API key never reaches the browser) */
      pollInterval = setInterval(() => check(false), DP_POLL_MS);
    };

    /* closes an abandoned order server-side so its transaction does not stay pending */
    const abandon = () => {
      const id = order && order.orderId;
      if (!id || settled) return;
      fetch('/api/deposit/cancel', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ order_id: id }),
        silent: true,
      }).catch(() => {});
    };

    /* step 1 → the gateway. The API key lives on the server; we only send an amount. */
    const createOrder = async (value) => {
      const btn = $('[data-dp-proceed]');
      const label = $('[data-dp-proceed-label]');
      if (btn) btn.disabled = true;
      if (label) setText(label, 'Creating order…');
      const restore = () => {
        if (btn) btn.disabled = false;
        if (label) setText(label, 'Proceed to Pay');
      };

      let data = {};
      try {
        const res = await fetch('/api/deposit/order', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ amount: value }),
        });
        data = await res.json().catch(() => ({}));
        if (!res.ok) {
          restore();
          if (res.status === 401) {
            toast('Please log in first', 2000);
            return setTimeout(() => spaNavigate('/login', true), 400);
          }
          /* gateway key missing / deposits paused: tell the user plainly.
             Nothing is created, nothing needs an admin — the QR flow starts
             the moment the key is configured on the server. */
          if (isAccountBlock(data.code))
            return showAccountBlock(data.error || 'Your account is restricted');
          return toast(data.error || 'Could not start the payment', 3500);
        }
      } catch (err) {
        restore();
        return toast('Network error, please try again', 3000);
      }

      restore();
      showOrder({
        orderId: data.orderId,
        qrUrl: data.qrUrl,
        checkoutUrl: data.checkoutUrl,
        upiIntent: data.upiIntent,
        amount: Number(data.amount) || value,
        payableAmount: Number(data.payableAmount) || value,
        expiresAt:
          Number(data.expiresAt) || Date.now() + (Number(data.secondsLeft) || dep.window) * 1000,
      });
    };

    /* an unfinished order from a previous visit resumes here (refresh / bank app) */
    const saved = store.read();
    if (saved && saved.orderId && Number(saved.expiresAt) > Date.now() + 15000) showOrder(saved);
    else if (saved) store.write(null);

    /* quick amounts — a tap fills the input, and the chips are rebuilt from the
       live minimum (see the config read above) */
    const fillQuick = (btn) => {
      if (!amount) return;
      amount.value = btn.dataset.dpQuick;
      $$('[data-dp-quick]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    };
    const bindQuick = () => {
      $$('[data-dp-quick]').forEach((btn) => on(btn, 'click', () => fillQuick(btn)));
    };
    bindQuick();
    applyQuick = (min) => {
      const box = $('.dp-quick');
      if (amount) amount.min = String(min);
      if (!box) return;
      box.innerHTML = quickAmounts(min)
        .map(
          (v) =>
            `<button class="dp-quick__btn" type="button" data-dp-quick="${v}">₹${v.toLocaleString('en-IN')}</button>`
        )
        .join('');
      bindQuick();
    };
    /* deliberately not applied here: the chips the server rendered already follow
       the same config, and only the live read (above) may move them */

    /* header back + cancel link return to step 1 and release the pending order */
    on($('[data-dp-back]'), 'click', (e) => {
      if (step2 && step2.classList.contains('active')) {
        e.preventDefault();
        abandon();
        goStep1();
      }
    });
    on($('[data-dp-cancel]'), 'click', (e) => {
      e.preventDefault();
      abandon();
      goStep1();
    });

    /* proceed — validate, then ask the server for a real UPI order */
    on($('[data-dp-proceed]'), 'click', () => {
      const value = Math.floor(parseFloat(amount.value) || 0);
      if (!value || value <= 0) return toast('Please enter a valid amount');
      if (value < dep.min) return belowMin();
      if (!dep.enabled)
        return toast('Deposits are temporarily unavailable. Please try again later.', 3000);
      /* the QR can only be created by the gateway, so without the server-side
         key there is nothing to do — no manual request, no admin step */
      if (!dep.configured)
        return toast('The payment gateway is not configured yet. Please try again later.', 3500);
      if (order && !settled) abandon();
      createOrder(value);
    });

    /* manual status check — the automatic poll does exactly the same thing */
    on($('[data-dp-check]'), 'click', () => check(true));

    /* expired window — back to step 1 to create a fresh QR */
    on($('[data-dp-retry]'), 'click', () => {
      goStep1();
      if (amount) amount.focus();
    });

    on($('[data-dp-modal-close]'), 'click', () => {
      const modal = $('[data-dp-modal]');
      if (modal) modal.classList.remove('active');
      goStep1();
    });
  }

  /* ------------------------------------------------ language + profile extras */
  function initProfileExtras() {
    /* language picker — switches the WHOLE site instantly and is saved to the
       user's own Firebase node (guests: kept on the device) */
    $$('[data-lang-item]').forEach((item) => {
      on(item, 'click', async () => {
        const code = item.dataset.langCode || 'en';
        const name = item.dataset.langItem || 'English';
        if (item.classList.contains('selected')) return;
        $$('[data-lang-item]').forEach((i) => i.classList.remove('selected'));
        item.classList.add('selected');
        if (window.VGI18N) window.VGI18N.setLang(code);
        $$('[data-lang-value]').forEach((el) => {
          el.textContent = name;
          el.setAttribute('data-i18n-skip', '');
        });

        try {
          const res = await fetch('/api/language', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ language: code }),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) return toast(data.error || 'Could not save language', 3000);
          toast(data.saved ? 'Language saved' : 'Language saved on this device', 2000);
        } catch (err) {
          toast('Network error, please try again', 3000);
        }
      });
    });

    /* avatar picker — tap an option to preview it on the profile instantly */
    $$('[data-avatar-option]').forEach((opt) => {
      on(opt, 'click', () => {
        if (opt.classList.contains('selected')) return;
        $$('[data-avatar-option]').forEach((o) => o.classList.remove('selected'));
        opt.classList.add('selected');
        const target = document.getElementById('profileAvatar');
        if (target) target.src = opt.dataset.avatarOption;
        toast('Avatar selected — tap Save Changes', 2000);
      });
    });

    /* live nickname preview on the profile page */
    const nick = $('[data-pf-nickname]');
    if (nick) {
      on(nick, 'input', () => {
        const name = document.getElementById('profileName');
        /* empty input just previews the account's default username */
        if (name) name.innerText = nick.value.trim() || autoName(currentUser?.uid);
      });
    }

    /* Save Changes — persists nickname, email and the picked avatar to the DB.
       Everything here survives re-login: it is stored on the user's own node. */
    const save = $('[data-pf-save]');
    if (save) {
      on(save, 'click', async () => {
        await whenUserKnown();
        if (!currentUser) {
          toast('Please log in first', 2000);
          return setTimeout(() => spaNavigate('/login', true), 400);
        }
        const name = (nick ? nick.value : '').trim();
        if (name.length < 2) return toast('Nickname must be at least 2 characters', 2500);
        const emailEl = $('[data-pf-email]');
        const email = emailEl ? emailEl.value.trim() : '';
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
          return toast('Enter a valid email address', 2500);
        const avEl = document.getElementById('profileAvatar');
        let avatar = '';
        if (avEl && avEl.src) {
          try {
            avatar = new URL(avEl.src).pathname;
          } catch {
            avatar = '';
          }
        }

        save.disabled = true;
        try {
          const res = await fetch('/api/profile', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name, email, avatar }),
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            if (res.status === 401) {
              toast('Please log in first', 2000);
              return setTimeout(() => spaNavigate('/login', true), 400);
            }
            if (data.code) showAccountBlock(data.error || 'Your account is restricted');
            return toast(data.error || 'Could not save profile', 3000);
          }
          currentUser = data.user;
          const savedName = data.user?.profile?.name || name;
          const savedAvatar = data.user?.profile?.avatar || '';
          $$('[data-user-name]').forEach((el) => (el.textContent = savedName));
          $$('[data-pf-nickname]').forEach((el) => (el.value = savedName));
          $$('[data-pf-email]').forEach((el) => (el.value = data.user?.profile?.email || ''));
          if (savedAvatar) {
            $$('[data-user-avatar]').forEach((el) => (el.src = savedAvatar));
            const pa = document.getElementById('profileAvatar');
            if (pa) pa.src = savedAvatar;
          }
          toast(data.message || 'Profile updated successfully!', 2500);
        } catch (err) {
          toast('Network error, please try again', 3000);
        } finally {
          save.disabled = false;
        }
      });
    }
  }

  /* ------------------------------------------------------------------ boot */
  function initAll() {
    /* stamp this document's birthday before anything else: the wallet hint is only
       allowed to overwrite a balance when money moved AFTER this stamp */
    shownAt();
    /* the page may have been swapped in from the server while a Ludo match was
       settling, or restored from the bfcache with an old wallet — paint the
       number the game left behind before anything else touches the DOM */
    applyWalletHint();
    /* the page just changed (SPA swap) — translate the fresh DOM first */
    if (window.VGI18N) window.VGI18N.apply(document.body);
    initLazyImages();
    initBannerSwipers();
    initNavSwipers();
    initTabs();
    initDialogs();
    initAccordions();
    initGameFilters();
    initPasswordToggles();
    initAuthForms();
    initQuickAmounts();
    initWithdraw();
    initEntryPoints();
    initProfileExtras();
    initUserSync();
    initSettingsSync();
    initGamesGate();
    initDepositPopup();
    initGuestGate();
  }

  /* ------------------------------------------------ SPA navigation + loader */
  function showLoader() {
    if (document.getElementById('pageLoader')) return;
    const loader = document.createElement('div');
    loader.id = 'pageLoader';
    loader.className = 'page-loader';
    loader.innerHTML = '<i></i>';
    document.body.appendChild(loader);
  }

  function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.remove();
  }

  /* fetch the target page and swap <body> content in place — no full reload.
     the fetched body already contains the right tabbar (active state) and
     dialogs, so a plain innerHTML swap keeps everything consistent. */
  let navPending = null;

  async function spaNavigate(url, push) {
    /* same-page guard only for link clicks (push) — popstate must ALWAYS
       swap, because by then location already points at the target page.
       navPending also swallows a second identical request while the first one
       is still in flight (double tap / duplicate listener): without it every
       duplicate would run its own swap and re-run initAll() on top. */
    if (push && (url === location.pathname + location.search || url === navPending)) return;
    navPending = url;
    showLoader();
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('bad status ' + res.status);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      if (!doc || !doc.body) throw new Error('bad html');

      Dialog.closeAll();
      document.documentElement.style.overflow = '';

      /* neutralise stray page timers (e.g. the deposit countdown) that belong
         to the outgoing DOM — otherwise they fire after navigation */
      const highest = setTimeout(() => {}, 0);
      for (let i = 0; i <= highest; i++) {
        clearTimeout(i);
        clearInterval(i);
      }

      document.title = doc.title;
      document.body.innerHTML = doc.body.innerHTML;
      /* server-side redirects (e.g. guest → /login): show the real target
         URL in the address bar, not the one that was originally fetched */
      const finalUrl = res.redirected
        ? new URL(res.url).pathname + new URL(res.url).search
        : url;
      if (push) history.pushState({}, '', finalUrl);
      else history.replaceState({}, '', finalUrl);
      window.scrollTo(0, 0);
      initAll();
    } catch (err) {
      navPending = null;
      hideLoader();
      window.location.href = url; /* full-load fallback */
      return;
    }
    navPending = null;
    hideLoader();
  }

  /* logout confirm — the Yes button on the logout dialog really logs out:
     clears the session cookie server-side, then sends the user to /login */
  document.addEventListener('click', async (e) => {
    const b = e.target && e.target.closest ? e.target.closest('[data-logout-confirm]') : null;
    if (!b) return;
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (err) {
      /* even if the call fails, drop the local session */
    }
    currentUser = null;
    /* the remembered login must die with the logout, or the next browser
       restart would silently put the session back */
    try { localStorage.removeItem(REMEMBER_KEY); } catch (err) {}
    Dialog.closeAll();
    toast('You have been logged out successfully!', 2000);
    setTimeout(() => spaNavigate('/login', true), 400);
  });

  /* ── the Ludo game is a document of its own ────────────────────────────────
     It is loaded with a real navigation and carries its own css + script
     (public/js/ludo.js). The site router must keep its hands off it: a back
     gesture there means "leave the match" and the game itself answers it (it
     parks the history entry and opens the quit dialog). A wallet refresh would
     also fight the game's own coin pill, which is already live. */
  /* ── the support chat is a document of its own ─────────────────────────────
     Like the Ludo board, /support/live-chat ships its own css + script
     (public/css/live-chat.css, public/js/live-chat.js) and is opened with a
     real navigation, so the site router must keep its hands off it: an SPA body
     swap cannot bring the chat's stylesheet along, and a scripted repaint would
     rebuild the DOM under the chat's own listeners. Its back arrow is a real
     /support link, so it walks back with a normal browser traversal. */
  const STANDALONE_DOC = !!(
    document.body &&
    (document.body.classList.contains('ludo-body') ||
      document.body.classList.contains('live-chat-body'))
  );

  /* routes that are documents of their own — each one ships its own css + js and
     puts its own class on <body> (see src/renderer.tsx → bodyClass / ludo /
     liveChat). An SPA swap only replaces body.innerHTML, so it can neither bring
     the stylesheet along nor set that class: these must be loaded for real. */
  const STANDALONE_ROUTES = ['/games/ludo', '/support/live-chat'];

  function isStandaloneRoute(href) {
    const path = String(href || '').split('#')[0].split('?')[0];
    return STANDALONE_ROUTES.indexOf(path) !== -1;
  }

  /* intercept internal links (tabs, cards, back buttons...) */
  document.addEventListener('click', (e) => {
    if (STANDALONE_DOC) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const t = e.target;
    if (!t || !t.closest) return;
    const a = t.closest('a[href]');
    if (!a || a.hasAttribute('data-dialog-open') || a.hasAttribute('data-open-dialog')) return;
    const href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) !== '/' || a.target === '_blank') return;
    /* the board game and the support chat: hand them to the browser */
    if (isStandaloneRoute(href)) return;
    e.preventDefault();
    spaNavigate(href, true);
  });

  /* browser back / forward — instant swap, no reload, no bfcache spinner */
  window.addEventListener('popstate', () => {
    if (STANDALONE_DOC) return;
    spaNavigate(location.pathname + location.search + location.hash, false);
  });

  /* A page can come back long after it was rendered: from the browser's
     back/forward cache (the whole Ludo game is a document of its own — see
     public/js/ludo.js — so the page behind it simply slept through the match) or
     just by returning to the app. Its numbers are then as old as that document,
     and the wallet is the one number that really changes on another screen. So
     every time a page is shown again the wallet is re-read from the server: the
     navbar/account never sits on a stale balance until the next reload. */
  let lastMoneySync = 0;

  function syncWalletOnShow() {
    /* the Ludo document keeps its own live wallet (see ludo.js) */
    if (STANDALONE_DOC) return;
    /* first: the settled number the game left behind, painted without a round-trip */
    applyWalletHint();
    const now = Date.now();
    /* a match settled in the Ludo document while this page slept: that answer is
       newer than the throttle, so the wallet is re-read right away */
    const dirty = walletMarker();
    if (!(dirty > lastMoneySync)) {
      /* a quick tab flip must not fire a request every time */
      if (now - lastMoneySync < 3000) return;
    }
    lastMoneySync = now;
    refreshUser();
  }

  /* a page that was rendered BEFORE the match settled (a fresh load, not a bfcache
     restore) would show the balance from before the prize/forfeit — the marker the
     game left behind catches exactly that */
  function syncWalletIfDirty() {
    if (STANDALONE_DOC) return;
    if (walletMarker() <= 0) return;
    lastMoneySync = 0;
    syncWalletOnShow();
  }

  /* safety net: pages restored from bfcache never keep a stuck spinner — and
     they re-read the wallet they may have slept through a game on */
  window.addEventListener('pageshow', (e) => {
    /* a restored DOM is as old as this document: paint the settled number at once */
    applyWalletHint();
    if (!e.persisted) return;
    hideLoader();
    syncWalletOnShow();
  });

  /* brought back from the background (app switcher, another tab) */
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) syncWalletOnShow();
  });

  window.VG_INIT = initAll;

  function boot() {
    initAll();
    /* a document served right after a Ludo match may have been rendered before the
       prize/forfeit landed — the marker the game left behind triggers one more
       wallet read, so the navbar never shows the balance from before the match */
    syncWalletIfDirty();
    /* ...and if the match settles a moment from now, these few checks catch it */
    watchWalletHint(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
