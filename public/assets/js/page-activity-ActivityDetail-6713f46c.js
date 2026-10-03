var Sn = Object.defineProperty;
var jn = (e, s, t) =>
  s in e
    ? Sn(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[s] = t);
var dt = (e, s, t) => (jn(e, typeof s != "symbol" ? s + "" : s, t), t);
import {
  r as j,
  m as $n,
  n as r,
  o as Dt,
  p as Bn,
  q as ds,
  t as Ne,
  u as Fe,
  S as Gn,
  v as Ln,
  w as pe,
  x as kn,
  y as He,
  z as Re,
  A as ue,
  B as $,
  C as Qs,
  D as Tn,
  E as In,
  F as je,
  G as Et,
  H as xt,
  I as Ge,
  J as Ke,
  K as qs,
  M as Ot,
  N as Le,
  O as zs,
  P as Mt,
  Q as Wt,
  R as Ce,
  T as Zs,
  U as Rn,
  V as Cn,
  W as Pn,
  X as et,
  Y as Ut,
  Z as Dn,
  $ as En,
  a0 as Ve,
  a1 as ut,
  a2 as xn,
  a3 as st,
  a4 as On,
  a5 as es,
  a6 as Mn,
  a7 as Wn,
  a8 as Un,
  a9 as mt,
  aa as tt,
  ab as Nn,
  ac as ve,
  ad as ks,
  ae as os,
  af as ps,
  ag as wt,
  ah as gs,
  ai as as,
  aj as Vn,
  ak as Fn,
  al as Hn,
  am as qn,
  an as zn,
  ao as Kn,
} from "./common.modules-cecf9b0d.js";
import {
  M as Xn,
  _ as Jn,
  a as Yn,
  b as Qn,
  c as Zn,
  d as ea,
  e as sa,
  f as ta,
  g as na,
  h as aa,
  i as oa,
  j as pa,
} from "./page-turntable-assets-d6267459.js";
import { s as ca } from "./native/index-9bac92b2.js";
import ia from "./en-5d34117c.js";
const ga = "/assets/png/withdrawHistory-572eb30b.png",
  ra = "/assets/png/widthdrawBlue-8b2a5474.png",
  la = "/assets/png/wallets-dad944e7.png",
  da = "/assets/png/usdt1-a168b052.png",
  ua = "/assets/png/usdt-40311708.png",
  ma = "/assets/png/upi-3f9883de.png",
  wa = "/assets/png/trx-8c63cfbf.png",
  ba = "/assets/png/transf_amount-e9c0217c.png",
  va = "/assets/png/tip-2298bb83.png",
  ya = "/assets/png/thirdPartyLogo-5dc96e22.png",
  fa = "/assets/png/succeed-c23d1eb0.png",
  Aa = "/assets/png/slot_wallet-514b5bf1.png",
  ha = "/assets/png/selectupi-ae7cc80c.png",
  _a = "/assets/png/saveWallet-857e280e.png",
  Sa = "/assets/png/safety-302e2796.png",
  ja = "/assets/png/recharge_usdt-d87aea5b.png",
  $a = "/assets/png/rechargeIcon-f0c488bf.png",
  Ba = "/assets/png/rechargeHistory-65bfbdc9.png",
  Ga = "/assets/png/quickpay2-9d015455.png",
  La = "/assets/png/phone-3b5e1d8c.png",
  ka = "/assets/png/onlinepay-1a42a572.png",
  Ta = "/assets/png/network-1c91511e.png",
  Ia = "/assets/png/name-24a66729.png",
  Ra = "/assets/png/moneyicon-cf7109c0.png",
  Ca = "/assets/png/ifscCode-e14729cb.png",
  Pa = "/assets/png/historyHead-493eb1a5.png",
  Da = "/assets/png/hint-f8a7f7d4.png",
  Ea = "/assets/png/gift-55dc786a.png",
  xa = "/assets/png/email-31d111c7.png",
  Oa = "/assets/png/bankCard-542b00c1.png",
  Ma = "/assets/png/bank-aa86b92b.png",
  Wa = "/assets/png/balance-e39ce400.png",
  Ua = "/assets/png/ar2-03dcca5a.png",
  Na = "/assets/png/ar1-2ff567c9.png",
  Va = "/assets/png/ar-TotalAssetsBg-3e718d2b.png",
  Fa = "/assets/png/anotherNamer-b81902c5.png",
  Ha = "/assets/png/all-001809c5.png",
  qa = "/assets/png/address-33aa121a.png",
  za = "/assets/png/YGG-0f53c40e.png",
  Ka = "/assets/png/Wickets9-cc9cd4da.png",
  Xa = "/assets/png/WM_Video-c75a61fe.png",
  Ja = "/assets/png/V8Card-b6500046.png",
  Ya = "/assets/png/TotalAssetsBg-2d289a9b.png",
  Qa = "/assets/png/TB-19cc956c.png",
  Za = "/assets/png/TB-19cc956c.png",
  eo = "/assets/png/SaBa-b2e3a2fc.png",
  so = "/assets/png/SEXY_Video-7ece66ce.png",
  to = "/assets/png/QRCode-1d54cefc.png",
  no = "/assets/png/PP-8d74f05a.png",
  ao = "/assets/png/PG-f3845f92.png",
  oo = "/assets/png/MG-66224ba4.png",
  po = "/assets/png/Lottery-3e32dad3.png",
  co = "/assets/png/JILI-422b8f51.png",
  io = "/assets/png/JDB-493f2b1c.png",
  go = "/assets/png/IM-3d11e37f.png",
  ro = "/assets/png/HB-b3d2aa37.png",
  lo = "/assets/png/EVOPlay-480d9e47.png",
  uo = "/assets/png/EVOPlay-4b83bbe2.png",
  mo = "/assets/png/EVOPlay-480d9e47.png",
  wo = "/assets/png/DG-6a625a45.png",
  bo = "/assets/png/Card365-6722babf.png",
  vo = "/assets/png/CQ9-ef6f87ee.png",
  yo = "/assets/png/CMD-a0627c4b.png",
  fo = "/assets/png/BetSoft-2f8ab7fc.png",
  Ao = "/assets/svg/Ar_Gift-f96ba611.svg",
  ho = "/assets/svg/ArPayBackground-8c36eecc.svg",
  _o = "/assets/png/AG_Video-23e72014.png",
  So = "/assets/png/AG-4e3ef3a2.png",
  jo = "/assets/png/Wickets9-cc9cd4da.png",
  $o = "/assets/svg/wallet-6c0560d9.svg",
  Bo = "/assets/svg/promotion-f9fa0f41.svg",
  Go = "/assets/svg/main-0567792b.svg",
  Lo = "/assets/svg/home-268a30ae.svg",
  ko = "/assets/svg/chat-9dcf7b71.svg",
  To = "/assets/svg/activity-e0dfcb96.svg",
  Io = "/assets/svg/redhomeN-36a3ba15.svg",
  Ro = "/assets/png/xosoCity-f87f4b4e.png",
  Co = "/assets/svg/weeklyType9-dfbfa5f5.svg",
  Po = "/assets/svg/weeklyType8-d9a36e8a.svg",
  Do = "/assets/svg/weeklyType7-9b8179b3.svg",
  Eo = "/assets/svg/weeklyType6-17da4c31.svg",
  xo = "/assets/svg/weeklyType5-fc8ad507.svg",
  Oo = "/assets/svg/weeklyType4-8bb332fd.svg",
  Mo = "/assets/svg/weeklyType3-bdfbd490.svg",
  Wo = "/assets/svg/weeklyType2-29588ce0.svg",
  Uo = "/assets/svg/weeklyType12-803ca3e3.svg",
  No = "/assets/svg/weeklyType11-25f842c6.svg",
  Vo = "/assets/svg/weeklyType10-07c4e868.svg",
  Fo = "/assets/svg/weeklyType1-34ca5273.svg",
  Ho = "/assets/png/warning2-aec7aab2.png",
  qo = "/assets/png/wallet-7486f342.png",
  zo = "/assets/png/ticketstar-d8019820.png",
  Ko = "/assets/png/tabBarBg-cb733401.png",
  Xo = "/assets/png/superjackpotHome-72bbeb43.png",
  Jo = "/assets/png/succeed-e6221c47.png",
  Yo = "/assets/png/searchIcon-358fe531.png",
  Qo = "/assets/png/rule-69499b0e.png",
  Zo = "/assets/png/right_arrow-4a6dbe5c.png",
  ep = "/assets/svg/playactive-e3764c09.svg",
  sp = "/assets/svg/play-54b6528e.svg",
  tp = "/assets/png/palybg-03c9c575.png",
  np = "/assets/svg/notify-942a4f3a.svg",
  ap = "/assets/png/icon-question-5d51280d.png",
  op = "/assets/svg/hot-6b4f650f.svg",
  pp = "/assets/png/headerBg-9f9d6875.png",
  cp = "/assets/svg/greenNotify-1f848b14.svg",
  ip = "/assets/png/empty-9dc62332.png",
  gp = "/assets/png/daman-lottery_background-dddb4357.png",
  rp = "/assets/png/copy-4106709f.png",
  lp = "/assets/png/bookicon-12cde4d4.png",
  dp = "/assets/png/before_cire-c0feda12.png",
  up = "/assets/svg/anbg-dde5866e.svg",
  mp = "/assets/png/activityIcon1-198a74e6.png",
  wp = "/assets/png/Triangle-abe1ffa4.png",
  bp = "/assets/png/wingoissue-50228a79.png",
  vp = "/assets/png/wingoPreSaleBg-1a69469d.png",
  yp = "/assets/png/walletbg-5eabb579.png",
  fp = "/assets/png/trxbg-c5f4f0f4.png",
  Ap = "/assets/png/time_a-d4670671.png",
  hp = "/assets/png/time-d2b95809.png",
  _p = "/assets/svg/public3Wallet-cf2b1924.svg",
  Sp = "/assets/svg/noticeBarSpeaker-1fb24b6f.svg",
  jp = "/assets/svg/messageIcon-3ab56488.svg",
  $p = "/assets/png/logout-f89a3ead.png",
  Bp = "/assets/png/icon_sevice-8a1f5628.png",
  Gp = "/assets/png/bj-530fd113.png",
  Lp = "/assets/png/bgActive-cd4006c9.png",
  kp = "/assets/png/bg-83fd8b52.png",
  Tp = "/assets/svg/arrow-right-3e43e1b9.svg",
  Ip = "/assets/png/all-41bf718b.png",
  Rp = "/assets/png/DailyProfitRankStage-9098b197.png",
  Cp = "/assets/png/wallet-1215d27d.png",
  Pp = "/assets/png/u2-0e7d4fdb.png",
  Dp = "/assets/png/u1-3749ca09.png",
  Ep = "/assets/png/trucktick-f4135f84.png",
  xp = "/assets/png/team_port-c614521c.png",
  Op = "/assets/png/team_partner-b2c9d0ce.png",
  Mp = "/assets/png/subordinate-1238e819.png",
  Wp = "/assets/png/bookicon-12cde4d4.png",
  Up = "/assets/png/serverbg-8ad9c978.png",
  Np = "/assets/png/server-fd8b12a6.png",
  Vp = "/assets/png/searchIcon1-495d4f3e.png",
  Fp = "/assets/png/roundIcon-55f7c1f0.png",
  Hp = "/assets/png/Circle-1-fca284fc.png",
  qp = "/assets/png/rebateRatio-14b7f1d0.png",
  zp = "/assets/png/promotionbg-7415067f.png",
  Kp = "/assets/png/poster-9c6f6cda.png",
  Xp = "/assets/png/money-176507e9.png",
  Jp = "/assets/png/lv-a50fb325.png",
  Yp = "/assets/png/invite_reg-1a988179.png",
  Qp = "/assets/png/groupSubordinate-0c376eee.png",
  Zp = "/assets/png/extraBonus-ab106fcb.png",
  e1 = "/assets/png/directSubordinate-b2d764c2.png",
  s1 = "/assets/png/copy_code-b2a280a1.png",
  t1 = "/assets/png/commission-d8cfc9f2.png",
  n1 = "/assets/png/bg1-d6d02e9f.png",
  a1 = "/assets/png/bank-0d9eee86.png",
  o1 = "/assets/png/zs-2d0a9e69.png",
  p1 = "/assets/png/withdrawHistory-5e90c4f8.png",
  c1 = "/assets/png/wallet-62c8d9bd.png",
  i1 = "/assets/png/wallet2-5c4bdf5c.png",
  g1 = "/assets/png/wallet1-8be3e605.png",
  r1 = "/assets/png/wallet-62c8d9bd.png",
  l1 = "/assets/png/versionUpdate-294a8d13.png",
  d1 = "/assets/png/verify-c60f1941.png",
  u1 = "/assets/png/vault-a933a89f.png",
  m1 = "/assets/png/trianglered-169bff51.png",
  w1 = "/assets/png/tradeHistory-8addaca2.png",
  b1 = "/assets/png/super_1-1a41da89.png",
  v1 = "/assets/png/superJackpot-53463ffb.png",
  y1 = "/assets/png/statsIcon-aa64a4e2.png",
  f1 = "/assets/png/settingCenter-cafa16a5.png",
  A1 = "/assets/png/serviceCenter-5baa39e4.png",
  h1 = "/assets/png/ruleicon-81461832.png",
  _1 = "/assets/png/riskProtocal-14e0ae64.png",
  S1 = "/assets/png/refresh-83caf4c6.png",
  j1 = "/assets/png/privacyIcon-d3b6ac91.png",
  $1 = "/assets/png/pointsSmallIncon-01ccfa9c.png",
  B1 = "/assets/png/points-2d199192.png",
  G1 = "/assets/png/phoneactive-945fdef4.png",
  L1 = "/assets/png/phone-a9e1896d.png",
  k1 = "/assets/png/password-12e0a3fc.png",
  T1 = "/assets/png/otheractive-9c6e5b36.png",
  I1 = "/assets/png/other-4ad36dcf.png",
  R1 = "/assets/png/orderIcon-114f7b87.png",
  C1 = "/assets/png/notifyIcon-2d005e7b.png",
  P1 = "/assets/png/notificationIcon-3090d6c2.png",
  D1 = "/assets/png/notificationCenter-e98bf833.png",
  E1 = "/assets/png/mylottery-fec445ed.png",
  x1 = "/assets/png/myWithdrawHistory-c42fdc6c.png",
  O1 = "/assets/png/moonBar-d49bcc72.png",
  M1 = "/assets/svg/messageReadAll-ae0995f4.svg",
  W1 = "/assets/svg/messageIconRed-fc152a52.svg",
  U1 = "/assets/svg/messageIconIsRead-e0b425b5.svg",
  N1 = "/assets/svg/messageGarbage-2260f6bb.svg",
  V1 = "/assets/png/love2-83aaa90e.png",
  F1 = "/assets/png/love-05bcc96d.png",
  H1 = "/assets/png/languageIcon-83dff373.png",
  q1 = "/assets/svg/inviterule-91aa42fc.svg",
  z1 = "/assets/svg/inviterecord-632cc2e0.svg",
  K1 = "/assets/png/invitation-5285cf0f.png",
  X1 = "/assets/png/iconservr-6e6ee69a.png",
  J1 = "/assets/png/iconservr-r-d9f284ff.png",
  Y1 = "/assets/png/iconSlots-fc9b3a8c.png",
  Q1 = "/assets/png/iconRealPerson-42e0bb49.png",
  Z1 = "/assets/png/iconPhysics-0d2cbc73.png",
  ec = "/assets/png/iconMiniGame-402b07ea.png",
  sc = "/assets/png/iconLottery-f64ffe0a.png",
  tc = "/assets/png/iconFishing-553c7cb9.png",
  nc = "/assets/png/iconElectric-a45eb544.png",
  ac = "/assets/png/iconChess-d0bc9989.png",
  oc = "/assets/png/down-dc0610e5.png",
  pc = "/assets/png/gverifyDownload-eade24fd.png",
  cc = "/assets/png/guide-7ac3fd27.png",
  ic = "/assets/png/googleVerifyBg-c131459b.png",
  gc = "/assets/png/EmailIcon-2dd1cf35.png",
  rc = "/assets/png/googleKey-aedc4650.png",
  lc = "/assets/png/gold-4a60a059.png",
  dc = "/assets/png/giftIcon-2d1288b8.png",
  uc = "/assets/png/gift-0e49be1a.png",
  mc = "/assets/png/gameStatsSteps-e268e335.png",
  wc = "/assets/png/gRecord-bf96da8b.png",
  bc = "/assets/png/forgetpassword-107119ba.png",
  vc = "/assets/png/feedbackImg-b7a3bd03.png",
  yc = "/assets/png/eyeVisible-09720f5f.png",
  fc = "/assets/png/eyeInvisible-821d9d16.png",
  Ac = "/assets/png/emailactive-aab8d5a1.png",
  hc = "/assets/png/email-d0012b12.png",
  _c = "/assets/png/editPswIcon-181067ea.png",
  Sc = "/assets/png/editPhoneIcon-e177d300.png",
  jc = "/assets/png/down-dc0610e5.png",
  $c = "/assets/png/down-dc0610e5.png",
  Bc = "/assets/png/diamond-bfced149.png",
  Gc = "/assets/png/dialogNickname-5d2a0b17.png",
  Lc = "/assets/png/serverbg-8ad9c978.png",
  kc = "/assets/png/customer-a6c3bbe4.png",
  Tc = "/assets/png/crown-39ad223a.png",
  Ic = "/assets/png/cps-713fef4c.png",
  Rc = "/assets/png/copyIcon-ffb4b631.png",
  Cc = "/assets/png/chessStepIcon-6ca76235.png",
  Pc = "/assets/png/cellphone-35529171.png",
  Dc = "/assets/png/zs-2d0a9e69.png",
  Ec = "/assets/png/betInfoStep-4b1e6b2f.png",
  xc = "/assets/png/betHistory-c3b2acb8.png",
  Oc = "/assets/png/avatar-2f23f3bd.png",
  Mc = "/assets/png/aboutBg-4bc986ee.png",
  Wc = "/assets/png/about-353133d2.png",
  Uc = "/assets/png/VipIcon-06f4c2e9.png",
  Nc = "/assets/png/TotalAssetsBg-881f34c3.png",
  Vc = "/assets/png/StrongBoxRecordBg-39b952cf.png",
  Fc = "/assets/png/EmailIcon-2dd1cf35.png",
  Hc = "/assets/png/CStype7-dea3a1e2.png",
  qc = "/assets/png/CStype6-3823ff6e.png",
  zc = "/assets/png/CStype5-6b3a66e3.png",
  Kc = "/assets/png/CStype2-d7b94bf8.png",
  Xc = "/assets/png/CStype3-7588d980.png",
  Jc = "/assets/png/CStype2-d7b94bf8.png",
  Yc = "/assets/png/CStype1-44df01f2.png",
  Qc = "/assets/png/notify-9d47d091.png",
  Zc = "/assets/svg/right-3e380d6e.svg",
  ei = "/assets/svg/left-a8f5656f.svg",
  si = "/assets/svg/backButton-c405367e.svg",
  ti = "/assets/png/Side_Close-0584241b.png",
  ni = "/assets/png/upload_icon-3a0e49ba.png",
  ai = "/assets/svg/rulehead-f9e64e77.svg",
  oi = "/assets/png/agree-a-6a68f3ca.png",
  pi = "/assets/svg/redhomeN-e53a526c.svg",
  ci = "/assets/svg/messageActive-a6757d78.svg",
  ii = "/assets/svg/changlong-9eee1dec.svg",
  gi = "/assets/png/headerBg-c5504bca.png",
  ri = "/assets/png/avatar-66996ae3.png",
  li = "/assets/svg/active_b-5aabecd4.svg",
  di = "/assets/png/videoActive-67d99b5e.png",
  ui = "/assets/png/video-b54edeaa.png",
  mi = "/assets/png/tabActive-796a5254.png",
  wi = "/assets/png/tab-97a30bc0.png",
  bi = "/assets/png/sportActive-0b279689.png",
  vi = "/assets/png/sport-47088d84.png",
  yi = "/assets/png/slotActive-aeb13ec9.png",
  fi = "/assets/png/slot-0ae7daf0.png",
  Ai = "/assets/png/popularActive-c4010b84.png",
  hi = "/assets/png/popular-05b5a660.png",
  _i = "/assets/png/num6-9f5038bf.png",
  Si = "/assets/png/num5-3b350eff.png",
  ji = "/assets/png/num4-d260bb2b.png",
  $i = "/assets/png/num3-41be7d5b.png",
  Bi = "/assets/png/num2-468984fc.png",
  Gi = "/assets/png/num1-b63b7d81.png",
  Li = "/assets/png/n6-4fb0d7da.png",
  ki = "/assets/png/n5-562557ff.png",
  Ti = "/assets/png/n4-ae5fe4f6.png",
  Ii = "/assets/png/n3-162f6063.png",
  Ri = "/assets/png/n2-a7189ae3.png",
  Ci = "/assets/png/n1-4d914772.png",
  Pi = "/assets/png/missningBg-78e01c86.png",
  Di = "/assets/png/lotteryActive-83a36513.png",
  Ei = "/assets/png/lottery-af7c0f05.png",
  xi = "/assets/png/flashActive-447f35a6.png",
  Oi = "/assets/png/flash-a975ad53.png",
  Mi = "/assets/png/fishActive-9c4a1743.png",
  Wi = "/assets/png/fish-407305dc.png",
  Ui = "/assets/png/chessActive-288ea82a.png",
  Ni = "/assets/png/chess-cfba644a.png",
  Vi = "/assets/png/bgActive-a1b5932b.png",
  Fi = "/assets/png/bg-f5ff3553.png",
  Hi = "/assets/png/allActive-f17fb22d.png",
  qi = "/assets/png/all-27493840.png",
  zi = "/assets/png/bg2-14651b15.png",
  Ki = "/assets/png/8-99f019b4.png",
  Xi = "/assets/png/6-d6ee4bdd.png",
  Ji = "/assets/png/5-f026eff3.png",
  Yi = "/assets/png/4-d37103ef.png",
  Qi = "/assets/png/3-6bb1e3bd.png",
  Zi = "/assets/png/21-b48d886d.png",
  e2 = "/assets/png/10-e1104eb3.png",
  s2 = "/assets/png/1-1c23fcb3.png",
  t2 = "/assets/png/wave_icon-41753b97.png",
  n2 = "/assets/png/wave-9300da3f.png",
  a2 = "/assets/png/slot_wallet-0f74ba62.png",
  o2 = "/assets/png/kbz_icon-1ab461b7.png",
  p2 = "/assets/png/kbz-b7b75d71.png",
  c2 = "/assets/png/bank-8282ad9e.png",
  i2 = "/assets/png/appeal-645c7205.png",
  g2 = "/assets/png/weal5-cffbd2b2.png",
  r2 = "/assets/png/weal4-89e037ae.png",
  l2 = "/assets/png/weal3-6a6aba6a.png",
  d2 = "/assets/png/5-16611279.png",
  u2 = "/assets/png/4-74010295.png",
  m2 = "/assets/png/3-66473185.png",
  w2 = "/assets/png/2-ad941462.png",
  b2 = "/assets/png/1-836ced4c.png",
  v2 = "/assets/png/super_4-2f7b15fc.png",
  y2 = "/assets/png/super_3-0dc4b80d.png",
  f2 = "/assets/png/super_2-4311e0d6.png",
  A2 = "/assets/png/welfare5-8b250748.png",
  h2 = "/assets/png/welfare4-5642a4c8.png",
  _2 = "/assets/png/welfare3-bfb05d5e.png",
  S2 = "/assets/png/welfare2-cf757d28.png",
  j2 = "/assets/png/welfare1-eee87ee1.png",
  $2 = "/assets/png/Circle-2-c49fa958.png",
  B2 = "/assets/png/Circle-1-fca284fc.png",
  G2 = "/assets/png/9-b2e01899.png",
  L2 = "/assets/png/8-b0ebfa02.png",
  k2 = "/assets/png/7-1deed869.png",
  T2 = "/assets/png/6-57560368.png",
  I2 = "/assets/png/5-309a53a6.png",
  R2 = "/assets/png/4-addcca26.png",
  C2 = "/assets/png/3-772507f8.png",
  P2 = "/assets/png/2-5381bc14.png",
  D2 = "/assets/png/10-ad370b50.png",
  E2 = "/assets/png/1-793a027d.png",
  x2 = "/assets/png/0-9eed23ad.png",
  O2 = "/assets/png/vector-1daf1a2a.png",
  M2 = "/assets/svg/activityIntro-8360ab45.svg",
  W2 = "/assets/svg/frame-344ba725.svg",
  U2 = "/assets/svg/activityRule-ab42a0f0.svg",
  N2 = "/assets/svg/activityIntro-8360ab45.svg",
  V2 = "/assets/svg/activityDetail-5f68f9c2.svg",
  F2 = "/assets/png/verified-50a8e5cf.png",
  H2 = "/assets/png/redeemdBg-a4b336f4.png",
  q2 = "/assets/png/point_2-179a306c.png",
  z2 = "/assets/png/pointsIcon-064f5e37.png",
  K2 = "/assets/png/point_2-179a306c.png",
  X2 = "/assets/png/point_1-a6c7d6a6.png",
  J2 = "/assets/png/plus-ffc8c0d0.png",
  Y2 = "/assets/png/orderItemDetail-874686b3.png",
  Q2 = "/assets/png/minus-ff657594.png",
  Z2 = "/assets/png/name-24a66729.png",
  eg = "/assets/png/phone-3b5e1d8c.png",
  sg = "/assets/png/headerBodyBg-d5c30a13.png",
  tg = "/assets/png/edit-62d76270.png",
  ng = "/assets/png/ticketstar-d8019820.png",
  ag = "/assets/png/warning2-aec7aab2.png",
  og = "/assets/png/wallets-3e2d0ead.png",
  pg = "/assets/png/serverIcon-fc4bf5f3.png",
  cg = "/assets/png/hint-c6828dc5.png",
  ig = "/assets/svg/copy-41d23b56.svg",
  gg = "/assets/png/ar_success-c7e602bd.png",
  rg = "/assets/png/ar_appeal-e1838ecf.png",
  lg = "/assets/png/ar2-3da2c295.png",
  dg = "/assets/png/ar1-f6f111ad.png",
  ug = "/assets/png/YGG-dbeb9403.png",
  mg = "/assets/png/Wickets9-3ce2811c.png",
  wg = "/assets/png/WM_Video-6de833fe.png",
  bg = "/assets/png/V8Card-e97485c2.png",
  vg = "/assets/png/TB-b6321468.png",
  yg = "/assets/png/TB-b6321468.png",
  fg = "/assets/png/SaBa-bc2e31c6.png",
  Ag = "/assets/png/SEXY_Video-52b1e739.png",
  hg = "/assets/png/PP-797b732c.png",
  _g = "/assets/png/PG-b671cf40.png",
  Sg = "/assets/png/MG-ac952b9a.png",
  jg = "/assets/png/Lottery-3e32dad3.png",
  $g = "/assets/png/JILI-c52436c6.png",
  Bg = "/assets/png/JDB-8735518a.png",
  Gg = "/assets/png/IM-51c9ea33.png",
  Lg = "/assets/png/HB-d5e5192c.png",
  kg = "/assets/png/EVOPlay-4b83bbe2.png",
  Tg = "/assets/png/EVOPlay-4b83bbe2.png",
  Ig = "/assets/png/EVOPlay-4b83bbe2.png",
  Rg = "/assets/png/DG-43b70b54.png",
  Cg = "/assets/png/Card365-14ee9d36.png",
  Pg = "/assets/png/CQ9-a679c82e.png",
  Dg = "/assets/png/CMD-df6e06ac.png",
  Eg = "/assets/png/BetSoft-1ada89f3.png",
  xg = "/assets/svg/Ar_Gift-f96ba611.svg",
  Og = "/assets/svg/ArPayBackground-8c36eecc.svg",
  Mg = "/assets/png/AG-4e3ef3a2.png",
  Wg = "/assets/png/AG-4e3ef3a2.png",
  Ug = "/assets/svg/wallet-f122fa1c.svg",
  Ng = "/assets/png/tabBarBg-f310cbcd.png",
  Vg = "/assets/svg/promotion-f9fa0f41.svg",
  Fg = "/assets/svg/main-97914712.svg",
  Hg = "/assets/svg/home-7c1d2a9a.svg",
  qg = "/assets/svg/chat-9dcf7b71.svg",
  zg = "/assets/svg/activity-f339e668.svg",
  Kg = "/assets/png/welfareBG-af1a5ac0.png",
  Xg = "/assets/png/wallet1-8be3e605.png",
  Jg = "/assets/png/weal3-35c69f13.png",
  Yg = "/assets/png/succeed-c582cb6c.png",
  Qg = "/assets/png/4-e53b4da2.png",
  Zg = "/assets/png/love2-83aaa90e.png",
  er = "/assets/png/love-96f89b45.png",
  sr = "/assets/png/insurance1-44b507bb.png",
  tr = "/assets/png/insurance-43faf0ad.png",
  nr = "/assets/png/gold-4a60a059.png",
  ar = "/assets/png/1-fd9896f4.png",
  or = "/assets/png/diamond-4c4156d6.png",
  pr = "/assets/png/crown-23f0278c.png",
  cr = "/assets/png/bottomBg-861932c6.png",
  ir = "/assets/png/2-0a41a908.png",
  gr = "/assets/png/MonthlyReward-fd9dde00.png",
  rr = "/assets/png/searchIcon1-c3f810ad.png",
  lr = "/assets/png/searchIcon-6e1f8e9b.png",
  dr = "/assets/png/wallet-18e38105.png",
  ur = "/assets/png/u2-c803ae0d.png",
  mr = "/assets/png/u1-261d82ac.png",
  wr = "/assets/png/team_port-ffd653b5.png",
  br = "/assets/png/team_partner-f023435e.png",
  vr = "/assets/png/teamPartnerBg-bf3ba57d.png",
  yr = "/assets/png/subordinate-5ce6775d.png",
  fr = "/assets/png/serverbg-79bf9bd1.png",
  Ar = "/assets/png/server-6757d18e.png",
  hr = "/assets/png/searchIcon-61d6fcda.png",
  _r = "/assets/png/receive-e2f14e8e.png",
  Sr = "/assets/png/rebateRatio-b326349c.png",
  jr = "/assets/png/rank-3-78762525.png",
  $r = "/assets/png/rank-2-65f89b5b.png",
  Br = "/assets/png/rank-1-9932f847.png",
  Gr = "/assets/png/promotionbg-1203267e.png",
  Lr = "/assets/png/money-4426537a.png",
  kr = "/assets/png/invite_reg-ad4ab463.png",
  Tr = "/assets/png/invite-34c1cf8c.png",
  Ir = "/assets/png/invitation-7d30dab1.png",
  Rr = "/assets/png/group-3c65c582.png",
  Cr = "/assets/png/direct-1fc4b88b.png",
  Pr = "/assets/png/crown-9fdb1c80.png",
  Dr = "/assets/png/copy_code-5db2cfe6.png",
  Er = "/assets/png/commission-4d02b206.png",
  xr = "/assets/png/verify-81c529c8.png",
  Or = "/assets/png/password-c2d8d12b.png",
  Mr = "/assets/png/leftArrow-e7e5cbbb.png",
  Wr = "/assets/png/invitation-2f57cad4.png",
  Ur = "/assets/png/iconservr-dafbd4f0.png",
  Nr = "/assets/png/iconservr-r-73b0dd64.png",
  Vr = "/assets/png/googleIcon-666ff85e.png",
  Fr = "/assets/png/eyeVisible-09720f5f.png",
  Hr = "/assets/png/eyeInvisible-821d9d16.png",
  qr = "/assets/png/dl_bg-b06086b6.png",
  zr = "/assets/png/cellphone-834e6951.png",
  Kr = "/assets/svg/wg_wallet_select-1fe1b01b.svg",
  Xr = "/assets/svg/wg_wallet-7cfff496.svg",
  Jr = "/assets/svg/wg_promotion_select-1fc6bd30.svg",
  Yr = "/assets/svg/wg_promotion-fedb34aa.svg",
  Qr = "/assets/svg/wg_main_select-53a4a373.svg",
  Zr = "/assets/svg/wg_main-ad710ef8.svg",
  e6 = "/assets/svg/wg_home_select-825bffc6.svg",
  s6 = "/assets/svg/wg_home-125c34b8.svg",
  t6 = "/assets/svg/wg_activity_select-b71e7cda.svg",
  n6 = "/assets/svg/wg_activity-64171805.svg",
  a6 = "/assets/svg/weeklyType9-b1df920a.svg",
  o6 = "/assets/svg/weeklyType8-398941ee.svg",
  p6 = "/assets/svg/weeklyType7-0e05c641.svg",
  c6 = "/assets/svg/weeklyType6-13276020.svg",
  i6 = "/assets/svg/weeklyType5-9f9da223.svg",
  g6 = "/assets/svg/weeklyType4-b7a2150d.svg",
  r6 = "/assets/svg/weeklyType3-a67b564e.svg",
  l6 = "/assets/svg/weeklyType2-29588ce0.svg",
  d6 = "/assets/svg/weeklyType12-1a4edd96.svg",
  u6 = "/assets/svg/weeklyType11-c78c8c14.svg",
  m6 = "/assets/svg/weeklyType10-ffc2610d.svg",
  w6 = "/assets/svg/weeklyType1-5e9f2d00.svg",
  b6 = "/assets/svg/watchCollection-3c13bdd4.svg",
  v6 = "/assets/svg/warningTriangle-e6bc881f.svg",
  y6 = "/assets/svg/wallet_game-bf4b19cc.svg",
  f6 = "/assets/svg/wallet2-2f604c27.svg",
  A6 = "/assets/svg/wallet1-4e34a48a.svg",
  h6 = "/assets/svg/wallet-7a07b8d9.svg",
  _6 = "/assets/svg/voice-4afb7225.svg",
  S6 = "/assets/svg/vipRebateDark-d8d5b947.svg",
  j6 = "/assets/svg/vipRebateDark-d8d5b947.svg",
  $6 = "/assets/svg/video-9680cab0.svg",
  B6 = "/assets/svg/versionUpdate-4d58e50c.svg",
  G6 = "/assets/svg/verify-861d392f.svg",
  L6 = "/assets/svg/user-8d7be8a2.svg",
  k6 = "/assets/svg/usdtLogo3-79cbb70e.svg",
  T6 = "/assets/svg/usdt4-5de80bc0.svg",
  I6 = "/assets/svg/usdt3-b83c7e2f.svg",
  R6 = "/assets/svg/usdt2-25ac6784.svg",
  C6 = "/assets/svg/usdt1-1fb4d52f.svg",
  P6 = "/assets/svg/uploadIcon-0c1ff6df.svg",
  D6 = "/assets/svg/upi-515b0fe7.svg",
  E6 = "/assets/svg/trxquestion-1261884c.svg",
  x6 = "/assets/svg/trxGame-5628ebd5.svg",
  O6 = "/assets/svg/transf_amount-3b64035f.svg",
  M6 = "/assets/svg/ticket-83ce51ef.svg",
  W6 = "/assets/svg/super_no-a1171d96.svg",
  U6 = "/assets/svg/super_1-a1ca5f41.svg",
  N6 = "/assets/svg/superJackpotRule-628c5489.svg",
  V6 = "/assets/svg/success-5afd18c5.svg",
  F6 = "/assets/svg/subtract-ca63ef68.svg",
  H6 = "/assets/svg/sport-c184ce12.svg",
  q6 = "/assets/svg/slot-e068d026.svg",
  z6 = "/assets/svg/shuoming-28a767ea.svg",
  K6 = "/assets/svg/share-7fec718f.svg",
  X6 = "/assets/svg/serverTicket1-fc70c589.svg",
  J6 = "/assets/svg/serverTicket-aeec50ef.svg",
  Y6 = "/assets/svg/serverIcon-be57d168.svg",
  Q6 = "/assets/svg/searchBtn-e27be358.svg",
  Z6 = "/assets/svg/saveWallet-8aaed3ac.svg",
  e5 = "/assets/svg/safeIcon-da400b44.svg",
  s5 = "/assets/svg/ruleHead-e09fed55.svg",
  t5 = "/assets/svg/round-0ce5c8ef.svg",
  n5 = "/assets/svg/rightTriangle-e9af3603.svg",
  a5 = "/assets/svg/rightCircle-c9275550.svg",
  o5 = "/assets/svg/resultanbg-bfa48a61.svg",
  p5 = "/assets/svg/refreshBalance-32999105.svg",
  c5 = "/assets/svg/recordFilter-93552a82.svg",
  i5 = "/assets/svg/receivedSuccessfuly-92023998.svg",
  g5 = "/assets/svg/rebateRealTime-983876f5.svg",
  r5 = "/assets/svg/rebate-d0917c09.svg",
  l5 = "/assets/svg/raja_wallet_a-9e5ed0bd.svg",
  d5 = "/assets/svg/raja_wallet-5fca7944.svg",
  u5 = "/assets/svg/raja_profile_a-f68d105b.svg",
  m5 = "/assets/svg/raja_profile-b98383be.svg",
  w5 = "/assets/svg/raja_games_a-f455f666.svg",
  b5 = "/assets/svg/raja_games-bff71f50.svg",
  v5 = "/assets/svg/raja_affiliate_a-0c4418e2.svg",
  y5 = "/assets/svg/raja_affiliate-a659cad9.svg",
  f5 = "/assets/svg/raja_activity_a-2dd02c6f.svg",
  A5 = "/assets/svg/raja_activity-7f6b398a.svg",
  h5 = "/assets/svg/quickpay2-f7c5319b.svg",
  _5 = "/assets/svg/promotionData-cb994829.svg",
  S5 = "/assets/svg/promotion2-a7e16b78.svg",
  j5 = "/assets/svg/promotion-f9fa0f41.svg",
  $5 = "/assets/svg/pointRule-b4400e39.svg",
  B5 = "/assets/svg/pointRecord-348a4230.svg",
  G5 = "/assets/svg/pointPlus-d38d6889.svg",
  L5 = "/assets/svg/pointMinus-70a54fd7.svg",
  k5 = "/assets/svg/pointFrame-0eeaff3a.svg",
  T5 = "/assets/svg/pointDetail-196961c6.svg",
  I5 = "/assets/svg/pointCopy-e98cedff.svg",
  R5 = "/assets/svg/pointCancel-a29a1b5d.svg",
  C5 = "/assets/svg/point-7e4c60af.svg",
  P5 = "/assets/svg/pix-af4f458a.svg",
  D5 = "/assets/svg/pink_wallet-8378b60c.svg",
  E5 = "/assets/svg/pink_promotion-02232563.svg",
  x5 = "/assets/svg/pink_main-009590de.svg",
  O5 = "/assets/svg/pink_home-74b13766.svg",
  M5 = "/assets/svg/pink_activity-469d00bb.svg",
  W5 = "/assets/svg/phone-b2be2236.svg",
  U5 = "/assets/svg/p5_wallet-c87002a8.svg",
  N5 = "/assets/svg/p5_sel_wallet-ae6b04e8.svg",
  V5 = "/assets/svg/p5_sel_promotion-d128cb74.svg",
  F5 = "/assets/svg/p5_sel_main-1639abdb.svg",
  H5 = "/assets/svg/p5_sel_home-5a2fd3bc.svg",
  q5 = "/assets/svg/p5_sel_activity-cf81ee7b.svg",
  z5 = "/assets/svg/p5_promotion-58912dc0.svg",
  K5 = "/assets/svg/p5_main-2c5f8270.svg",
  X5 = "/assets/svg/p5_home-0ed49f01.svg",
  J5 = "/assets/svg/p5_activity-1b801a87.svg",
  Y5 = "/assets/svg/p4_wallet-cc6cd93b.svg",
  Q5 = "/assets/svg/p4_promotion-395e5b4d.svg",
  Z5 = "/assets/svg/p4_main-a7644f1f.svg",
  el = "/assets/svg/p4_home-a0faddc8.svg",
  sl = "/assets/svg/p4_activity-1f4912d2.svg",
  tl = "/assets/svg/p3more-ec5338ea.svg",
  nl = "/assets/svg/p3a_r-866bd1db.svg",
  al = "/assets/svg/p3a_l-adbaa408.svg",
  ol = "/assets/svg/p3_wallet_a-f88457f0.svg",
  pl = "/assets/svg/p3_wallet-b8483d21.svg",
  cl = "/assets/svg/p3_promotion_a-fdca5a3b.svg",
  il = "/assets/svg/p3_promotion-1805747a.svg",
  gl = "/assets/svg/p3_main_a-3c6f39ce.svg",
  rl = "/assets/svg/p3_main-960fd86b.svg",
  ll = "/assets/svg/p3_home_a-9f25e8df.svg",
  dl = "/assets/svg/p3_home-28a3017c.svg",
  ul = "/assets/svg/p3_activity_a-9263c724.svg",
  ml = "/assets/svg/p3_activity-ae17491d.svg",
  wl = "/assets/svg/p3Service-ddcc2a87.svg",
  bl = "/assets/svg/p3Notification-ff68e8d9.svg",
  vl = "/assets/svg/p3Language-29d11a60.svg",
  yl = "/assets/svg/p3Guide-cd25d087.svg",
  fl = "/assets/svg/p3Down-34c5d076.svg",
  Al = "/assets/svg/p3About-074d0e19.svg",
  hl = "/assets/svg/output-1085a817.svg",
  _l = "/assets/svg/odds-1389d45f.svg",
  Sl = "/assets/svg/oddBg-872dd8d0.svg",
  jl = "/assets/svg/notificationIcon-b1767775.svg",
  $l = "/assets/svg/noticeBarSpeaker-67d04c84.svg",
  Bl = "/assets/svg/nbg-dba06970.svg",
  Gl = "/assets/svg/navInfomation-8fd65a81.svg",
  Ll = "/assets/svg/name-103dae21.svg",
  kl = "/assets/svg/more-1a36a308.svg",
  Tl = "/assets/svg/messageIconRed-c0a41c97.svg",
  Il = "/assets/svg/messageGarbage-4526389c.svg",
  Rl = "/assets/svg/message-357bf84e.svg",
  Cl = "/assets/svg/menuSlots-2d07516d.svg",
  Pl = "/assets/svg/menuOriginals-592962de.svg",
  Dl = "/assets/svg/menuMore-f365922e.svg",
  El = "/assets/svg/menuLottery-2184805a.svg",
  xl = "/assets/svg/menuHome-7fda8a2d.svg",
  Ol = "/assets/svg/maintenace-f00bbd49.svg",
  Ml = "/assets/svg/main-d91db78d.svg",
  Wl = "/assets/svg/lottyWallet-72bc8cd5.svg",
  Ul = "/assets/svg/lottery-78c78fe7.svg",
  Nl = "/assets/svg/invitation-af07c32d.svg",
  Vl = "/assets/svg/income-34ad403e.svg",
  Fl = "/assets/svg/ifscCode-9d6c6171.svg",
  Hl = "/assets/svg/iconservr-r-cdafc128.svg",
  ql = "/assets/svg/icon_customer3-ac6f07f9.svg",
  zl = "/assets/svg/icon_addwallet-b32e50be.svg",
  Kl = "/assets/svg/howpay-c8432281.svg",
  Xl = "/assets/svg/hotIcon-2a2eff6d.svg",
  Jl = "/assets/svg/hot-07666551.svg",
  Yl = "/assets/svg/home-b6b5be37.svg",
  Ql = "/assets/svg/historyHead-0c425c92.svg",
  Zl = "/assets/svg/hint-8d786626.svg",
  e0 = "/assets/svg/googleValidation-21d063eb.svg",
  s0 = "/assets/svg/giftHistory-29667ab5.svg",
  t0 = "/assets/svg/game_moneyb-e3ecf708.svg",
  n0 = "/assets/svg/game_money-02732a4a.svg",
  a0 = "/assets/svg/flash-5013d62b.svg",
  o0 = "/assets/svg/fish-b78ebd1b.svg",
  p0 = "/assets/svg/eye-af3b59e2.svg",
  c0 = "/assets/svg/errorTip-b80a8dd6.svg",
  i0 = "/assets/svg/empty-c95cc29f.svg",
  g0 = "/assets/svg/email-d7e38c1a.svg",
  r0 = "/assets/svg/editPswIcon-cf9c20ab.svg",
  l0 = "/assets/svg/editMain-9fe11da9.svg",
  d0 = "/assets/svg/edit-eb779d07.svg",
  u0 = "/assets/svg/dropDown-09a28d14.svg",
  m0 = "/assets/svg/downArrow-d426e3e5.svg",
  w0 = "/assets/svg/down1-90e985fa.svg",
  b0 = "/assets/svg/down-72538d4a.svg",
  v0 = "/assets/svg/diamond-be343d70.svg",
  y0 = "/assets/svg/dialogNickname-a8c17e3d.svg",
  f0 = "/assets/svg/detail-9be86e43.svg",
  A0 = "/assets/svg/deleteMain-1351fccf.svg",
  h0 = "/assets/svg/customer_b-564c3361.svg",
  _0 = "/assets/svg/customer_2-79c0e09d.svg",
  S0 = "/assets/svg/customerPublic-b00601a2.svg",
  j0 = "/assets/svg/customer1-f8fb310c.svg",
  $0 = "/assets/svg/copy4d-d61fec20.svg",
  B0 = "/assets/svg/copy-80b11fc8.svg",
  G0 = "/assets/svg/close-d5633c35.svg",
  L0 = "/assets/svg/clock_b-736bec10.svg",
  k0 = "/assets/svg/chess-ae13cf1a.svg",
  T0 = "/assets/svg/chat-fd5f6e5e.svg",
  I0 = "/assets/svg/changlong-c2fc4344.svg",
  R0 = "/assets/svg/cart-b4720cfe.svg",
  C0 = "/assets/svg/bookicon-fbe6f9df.svg",
  P0 = "/assets/svg/bankWave-5f5eea7a.svg",
  D0 = "/assets/svg/bankTitle-e810765f.svg",
  E0 = "/assets/svg/bankName-666e40a1.svg",
  x0 = "/assets/svg/bankKbz-4a61f0ed.svg",
  O0 = "/assets/svg/bankHeader-faf02b34.svg",
  M0 = "/assets/svg/bankCard-01518866.svg",
  W0 = "/assets/svg/bank-65d0bafd.svg",
  U0 = "/assets/svg/arrLeft-b63410c6.svg",
  N0 = "/assets/svg/arpay2-67283522.svg",
  V0 = "/assets/svg/arpay1-a882c077.svg",
  F0 = "/assets/svg/anbg-2e633fe1.svg",
  H0 = "/assets/svg/all-80f1cb08.svg",
  q0 = "/assets/svg/address-cbc0d6ed.svg",
  z0 = "/assets/svg/add_icon-0bf8e0a2.svg",
  K0 = "/assets/svg/activityWallet-80acb83e.svg",
  X0 = "/assets/svg/activityNote-08aa936d.svg",
  J0 = "/assets/svg/activity-7ad3454c.svg",
  Y0 = "/assets/svg/act_notic-39eebfbe.svg",
  Q0 = "/assets/svg/actNewGift-89651888.svg",
  Z0 = "/assets/svg/ac_private-b572dccd.svg",
  e7 = "/assets/svg/ac_fast-16333417.svg",
  s7 = "/assets/svg/ac_download-22ed1fe6.svg",
  t7 = "/assets/svg/ac_down-7a07e6b4.svg",
  n7 = "/assets/svg/SearchTrx-4d7b8c73.svg",
  a7 = "/assets/svg/Rectan-7483e473.svg",
  o7 = "/assets/svg/Line-5603a544.svg",
  p7 = "/assets/svg/Language-0ddf2df5.svg",
  c7 = "/assets/svg/Circle2-4a7036bc.svg",
  i7 = "/assets/svg/Circle1-f250e52a.svg",
  g7 = "/assets/svg/ArPayBackground-8c36eecc.svg",
  r7 = "/assets/png/zh-441403d8.png",
  l7 = "/assets/png/vi-7e276113.png",
  d7 = "/assets/png/th-dab4368e.png",
  u7 = "/assets/png/rus-3e998552.png",
  m7 = "/assets/png/pk-076f0344.png",
  w7 = "/assets/png/ph-f374fde7.png",
  b7 = "/assets/png/my-2cbaca53.png",
  v7 = "/assets/png/md-8f32f4c5.png",
  y7 = "/assets/png/korea-9ace4c53.png",
  f7 = "/assets/png/japan-09a3697b.png",
  A7 = "/assets/png/id-028d0842.png",
  h7 = "/assets/png/hd-796a1d34.png",
  _7 = "/assets/png/en-4c6eba8e.png",
  S7 = "/assets/png/bra-42104755.png",
  j7 = "/assets/png/bd-de258be1.png",
  $7 = "/assets/png/ar-c17e831d.png",
  B7 = "/assets/png/tabBarBg-0d05851f.png",
  G7 = "/assets/png/promotionBg-8f7ec356.png",
  L7 = "/assets/png/logo-e3b68b06.png",
  k7 = "/assets/png/gameDefault-91e9c0e8.png",
  T7 = "/assets/png/empty-4ac9a431.png",
  I7 = "/assets/png/avatar-2f23f3bd.png",
  R7 = "/assets/png/avatar-2f23f3bd.png",
  C7 = "/assets/png/All-8c681a92.png",
  P7 = "/assets/png/zs-1fe6152b.png",
  D7 = "/assets/png/withdrawHistory-12d183a9.png",
  E7 = "/assets/png/widthdrawBlue-dac03272.png",
  x7 = "/assets/png/wallets-7cd3c0b8.png",
  O7 = "/assets/png/wallet-34507dfa.png",
  M7 = "/assets/png/vip9-a30a9d27.png",
  W7 = "/assets/png/vip8-23c72cf0.png",
  U7 = "/assets/png/vip7-48005ca9.png",
  N7 = "/assets/png/vip6-0a2158b6.png",
  V7 = "/assets/png/vip5-28139224.png",
  F7 = "/assets/png/vip4-9dc1e9f4.png",
  H7 = "/assets/png/vip3-30c8484b.png",
  q7 = "/assets/png/vip2-6839e741.png",
  z7 = "/assets/png/vip10-61bb0cf3.png",
  K7 = "/assets/png/vip1-cde9e3a4.png",
  X7 = "/assets/png/versionUpdate-8bb131c1.png",
  J7 = "/assets/png/vaultSmallIcon-e6fe7f42.png",
  Y7 = "/assets/png/vault-a933a89f.png",
  Q7 = "/assets/png/uploadCamera-3c808634.png",
  Z7 = "/assets/svg/unfinish-43bc1495.svg",
  e4 = "/assets/png/trianglered-7f8dfe98.png",
  s4 = "/assets/png/transferOutIcon-7cd86afa.png",
  t4 = "/assets/png/transferInIcon-617ec06e.png",
  n4 = "/assets/png/tradeHistoryShadow-3f93353a.png",
  a4 = "/assets/png/tradeHistory-76a3492f.png",
  o4 = "/assets/png/tipIcon-99ead69b.png",
  p4 = "/assets/png/support-b4aad3ad.png",
  c4 = "/assets/png/super_no-2a5dd75e.png",
  i4 = "/assets/png/superJackpotRulebg-36ed2436.png",
  g4 = "/assets/png/superJackpot-989b63c6.png",
  r4 = "/assets/png/superIcon-d7856c8e.png",
  l4 = "/assets/png/sugguesions-5dc75ee8.png",
  d4 = "/assets/png/suggestionCenter-2e6f0b8e.png",
  u4 = "/assets/png/statsIcon-bd106515.png",
  m4 = "/assets/png/sliderNum-d6954c48.png",
  w4 = "/assets/png/settings-47d1ea95.png",
  b4 = "/assets/png/settingCenter-779783db.png",
  v4 = "/assets/png/serviceCenter-ed250156.png",
  y4 = "/assets/png/safetyIcon-baadff1a.png",
  f4 = "/assets/png/riskProtocal-ed984a2b.png",
  A4 = "/assets/svg/righticon-84e23970.svg",
  h4 = "/assets/png/redPacketShadow-d70c1569.png",
  _4 = "/assets/png/redPacket-54dec964.png",
  S4 = "/assets/png/recordIcon-76fb149e.png",
  j4 = "/assets/png/rechargeIcon-378e1d8b.png",
  $4 = "/assets/png/rechargeHistory-1bf08347.png",
  B4 = "/assets/png/pswLock-addf8de4.png",
  G4 = "/assets/png/productOrders-00f3fe5e.png",
  L4 = "/assets/png/privacyIcon-3e14c648.png",
  k4 = "/assets/png/pointsSmallIncon-01ccfa9c.png",
  T4 = "/assets/png/points-2f9295d8.png",
  I4 = "/assets/png/orderIcon-db434836.png",
  R4 = "/assets/png/numberBG-5096ec20.png",
  C4 = "/assets/png/notifyIcon-6c47f5ee.png",
  P4 = "/assets/png/notificationIcon-cf50c38b.png",
  D4 = "/assets/png/notificationCenter-7c9bf6f3.png",
  E4 = "/assets/png/notification-64e0c068.png",
  x4 = "/assets/png/nextIcon-4b99d075.png",
  O4 = "/assets/png/mylottery-59fde5b3.png",
  M4 = "/assets/png/mycoins_bg-122d7eeb.png",
  W4 = "/assets/png/myWithdrawHistory-7d6690a5.png",
  U4 = "/assets/png/myCoin-b5faa55b.png",
  N4 = "/assets/png/moonBar-f80ac733.png",
  V4 = "/assets/svg/messageIconIsRead-51ac6097.svg",
  F4 = "/assets/png/lotteryIcon-8d282d74.png",
  H4 = "/assets/png/lotteryHistory-21ada1bc.png",
  q4 = "/assets/png/loterry-13b4d059.png",
  z4 = "/assets/png/logout-f985cd3f.png",
  K4 = "/assets/png/laundryIcon-9cc9dbdc.png",
  X4 = "/assets/png/languageSwitch-8cd33ff0.png",
  J4 = "/assets/png/languageIcon-4c117d4d.png",
  Y4 = "/assets/png/kBg-80f2d8f2.png",
  Q4 = "/assets/png/inviteIcon-4f339df5.png",
  Z4 = "/assets/png/invitation_icon-3daf26e8.png",
  e3 = "/assets/png/invitation_bg-611f71ab.png",
  s3 = "/assets/png/invitationBonus-9a3437fe.png",
  t3 = "/assets/png/incomeIcon-9f284d02.png",
  n3 = "/assets/png/iconSlots-dc0d52e9.png",
  a3 = "/assets/png/iconRealPerson-d6a539c2.png",
  o3 = "/assets/png/iconPhysics-57f83ec6.png",
  p3 = "/assets/png/iconMiniGame-edfd2dbe.png",
  c3 = "/assets/png/loterry-13b4d059.png",
  i3 = "/assets/png/iconFishing-467fb1f6.png",
  g3 = "/assets/png/iconElectric-76d8f78d.png",
  r3 = "/assets/png/iconChess-13aafe08.png",
  l3 = "/assets/png/gverifyDownload-271370b1.png",
  d3 = "/assets/png/guide-4c5e16b0.png",
  u3 = "/assets/png/googleVerifyBg-09a89098.png",
  m3 = "/assets/png/googleValidation-90c05cd9.png",
  w3 = "/assets/png/googleKey-4c7f16a7.png",
  b3 = "/assets/png/giftIcon-17a26471.png",
  v3 = "/assets/png/giftFolder-cbeb2e6d.png",
  y3 = "/assets/png/gift-a8f321e1.png",
  f3 = "/assets/png/gameStatsSteps-fde7a66f.png",
  A3 = "/assets/png/feedbackImg-e53f6c28.png",
  h3 = "/assets/png/exchangeIcon-5e23ad00.png",
  _3 = "/assets/png/editPswIcon-91edaf22.png",
  S3 = "/assets/png/editPhoneIcon-db913345.png",
  j3 = "/assets/png/editPencil-c89ee923.png",
  $3 = "/assets/png/dropDown-4a665e37.png",
  B3 = "/assets/png/down-0f316969.png",
  G3 = "/assets/png/dialogNickname-29ce49ed.png",
  L3 = "/assets/png/customerBg-1b796fd9.png",
  k3 = "/assets/png/cps-2a059ec1.png",
  T3 = "/assets/png/copyIcon-2aed1c84.png",
  I3 = "/assets/png/copy-3a78d902.png",
  R3 = "/assets/png/close_B-9c82ae89.png",
  C3 = "/assets/png/close-00101b6c.png",
  P3 = "/assets/png/clearIcon-f9b53fa8.png",
  D3 = "/assets/png/clear-736506a4.png",
  E3 = "/assets/png/chessStepIcon-6ca76235.png",
  x3 = "/assets/png/bindemailsuccess-d485300b.png",
  O3 = "/assets/png/betSportStep-93571708.png",
  M3 = "/assets/png/betSixInfoStep-397d1357.png",
  W3 = "/assets/png/betResultStep-e17a42d5.png",
  U3 = "/assets/png/betInfoStep-7b7e5e57.png",
  N3 = "/assets/png/betHistoryShadow-5178f41c.png",
  V3 = "/assets/png/betHistory-41216dfa.png",
  F3 = "/assets/png/balanceIcon-e9285cc0.png",
  H3 = "/assets/png/ar_invitation_bg-477970e1.png",
  q3 = "/assets/png/aboutCenter-51580ee5.png",
  z3 = "/assets/png/aboutBg-2e4b25ca.png",
  K3 = "/assets/png/about-f4c85138.png",
  X3 = "/assets/png/VipIcon-3c72b1cc.png",
  J3 = "/assets/png/TotalAssetsBg-62cc4d81.png",
  Y3 = "/assets/png/Subtract-306729d4.png",
  Q3 = "/assets/png/StrongBoxRecordBg-2e6f73e2.png",
  Z3 = "/assets/png/MyCoinsBanner2-208f6260.png",
  e8 = "/assets/png/MyCoinsBanner-41979ddc.png",
  s8 = "/assets/png/GoogleTip-e9f496ce.png",
  t8 = "/assets/png/GoogleSubtract-9efeb309.png",
  n8 = "/assets/png/GooglePolygon-3adc99cc.png",
  a8 = "/assets/png/EmailIcon-4cb8279d.png",
  o8 = "/assets/png/CStype7-dea3a1e2.png",
  p8 = "/assets/png/CStype6-3823ff6e.png",
  c8 = "/assets/png/CStype5-6b3a66e3.png",
  i8 = "/assets/png/CStype2-d7b94bf8.png",
  g8 = "/assets/png/CStype3-7588d980.png",
  r8 = "/assets/png/CStype2-d7b94bf8.png",
  l8 = "/assets/png/CStype1-44df01f2.png",
  d8 = "/assets/png/10-1523b3a4.png",
  u8 = "/assets/png/winning-6264c04c.png",
  m8 = "/assets/png/video-0216ce19.png",
  w8 = "/assets/png/sport-f0fdc902.png",
  b8 = "/assets/png/slot-f8b85cfb.png",
  v8 = "/assets/png/profit-56d94e8f.png",
  y8 = "/assets/png/platformList-5db5d715.png",
  f8 = "/assets/png/no3-95e1b4d0.png",
  A8 = "/assets/png/no2-1683c744.png",
  h8 = "/assets/png/no1-5c6f8e80.png",
  _8 = "/assets/png/loteria-0ccd41c5.png",
  S8 = "/assets/png/flash-be6ad48f.png",
  j8 = "/assets/png/fish-57b49990.png",
  $8 = "/assets/png/clicksTopList-dfac71d9.png",
  B8 = "/assets/png/chess-11735038.png",
  G8 = "/assets/png/bigaward-de883c64.png",
  L8 = "/assets/png/All-8c681a92.png",
  k8 = "/assets/png/ios3-034b2b78.png",
  T8 = "/assets/png/ios2-1d128e50.png",
  I8 = "/assets/png/ios1-1b6326e4.png",
  R8 = "/assets/png/empty-5b08f2be.png",
  C8 = "/assets/png/banner-40720f78.png",
  P8 = "/assets/png/wheel-548c81f2.png",
  D8 = "/assets/png/vector-dc489162.png",
  E8 = "/assets/png/upload_icon-774d5de1.png",
  x8 = "/assets/png/upload_add-36760b1b.png",
  O8 = "/assets/png/switch-a7abebe0.png",
  M8 = "/assets/png/newmissingviebg-0d3c6b98.png",
  W8 = "/assets/png/newmissingbg-b08ac203.png",
  U8 = "/assets/png/missningLBg-ca049a47.png",
  N8 = "/assets/png/missningBg-c1f02bcd.png",
  V8 = "/assets/png/missingviebg-f283c7c1.png",
  F8 = "/assets/png/close-84ce5e6a.png",
  H8 = "/assets/png/ar_wallet-62a42389.png",
  q8 = "/assets/png/win-d581733a.png",
  z8 = "/assets/png/u18-7146ab6f.png",
  K8 = "/assets/png/turntable_icon-9b14cf81.png",
  X8 = "/assets/png/tg_bg-8a7ff21e.png",
  J8 = "/assets/svg/search-e8c2aae9.svg",
  Y8 = "/assets/png/reward_bg-e5a247a8.png",
  Q8 = "/assets/png/rewardCenter-f8f2277a.png",
  Z8 = "/assets/png/public3MsgIcon-d1b8dfd9.png",
  e9 = "/assets/png/promp_right-94f38012.png",
  s9 = "/assets/png/promp_left-1734be37.png",
  t9 = "/assets/png/promp_bg-0019cb3c.png",
  n9 = "/assets/png/profit-56d94e8f.png",
  a9 = "/assets/png/p3morewg-ec659679.png",
  o9 = "/assets/png/p3morebg-63bb449f.png",
  p9 = "/assets/png/p3ar037morebg-dc9e39c6.png",
  c9 = "/assets/png/notice-ddf69f91.png",
  i9 = "/assets/png/minGame-037ea1c2.png",
  g9 = "/assets/png/luck_bg-2a1100a6.png",
  r9 = "/assets/png/loteria-0ccd41c5.png",
  l9 = "/assets/png/fullscreen-36cb1d31.png",
  d9 = "/assets/png/exitfullscreen-d4d55411.png",
  u9 = "/assets/png/changlong_icon-e1589540.png",
  m9 = "/assets/png/changlong_bg-22ec113c.png",
  w9 = "/assets/jpg/changlong51_bg-04233e9c.jpg",
  b9 = "/assets/png/banner-8c41464a.png",
  v9 = "/assets/svg/backButton-eadf8686.svg",
  y9 = "/assets/png/award-8b8981e3.png",
  f9 = "/assets/png/avatar-fb4c2506.png",
  A9 = "/assets/png/ar-notice-fa2dbf0f.png",
  h9 = "/assets/svg/Group20225-a3b6092b.svg",
  _9 = "/assets/svg/Go-ebc6176d.svg",
  S9 = "/assets/png/DailyProfitRankStage-aa468a0a.png",
  j9 = "/assets/jpg/vsImg-3c03c603.jpg",
  $9 = "/assets/png/video1-b0611412.png",
  B9 = "/assets/png/updateImg-53f2ece8.png",
  G9 = "/assets/png/step-c410dfd3.png",
  L9 = "/assets/png/load-f0b3a6b2.png",
  k9 = "/assets/png/supportService-d43dcf95.png",
  T9 = "/assets/png/invite_wheel-bb332472.png",
  I9 = "/assets/svg/active_b-4a60eef5.svg",
  R9 = "/assets/svg/active-0d7a3379.svg",
  C9 = "/assets/png/₫-396b89cd.png",
  P9 = "/assets/png/฿-035fd09c.png",
  D9 = "/assets/png/unchecked-b7a5ea77.png",
  E9 = "/assets/png/succeed-83674414.png",
  x9 = "/assets/png/safety-ba393abc.png",
  O9 = "/assets/png/refresh-fd17e6f1.png",
  M9 = "/assets/png/pwd-5bc62bd2.png",
  W9 = "/assets/png/momo-d6d50cc9.png",
  U9 = "/assets/png/line-0198e433.png",
  N9 = "/assets/png/recordIcon-76fb149e.png",
  V9 = "/assets/png/fail-c3ca10bd.png",
  F9 = "/assets/png/delete-a072841b.png",
  H9 = "/assets/png/clear-85410d7e.png",
  q9 = "/assets/png/checked-017891c4.png",
  z9 = "/assets/png/bg2-78c2b28b.png",
  K9 = "/assets/png/bg1-3474c7fd.png",
  X9 = "/assets/png/bankLogo1-e5dc8d25.png",
  J9 = "/assets/png/balance-e39ce400.png",
  Y9 = "/assets/png/add-1ad7f3f5.png",
  Q9 = "/assets/png/E-wallet-472b7b97.png",
  Z9 = "/assets/png/1-bcd21d34.png",
  ed = "/assets/png/thirdPartyLogo-5dc96e22.png",
  sd = "/assets/png/fast-bea6c34e.png",
  td = "/assets/png/explain-61635961.png",
  nd = "/assets/png/QRCode-1d54cefc.png",
  ad = "/assets/png/wallettobank-8f644b04.png",
  od = "/assets/png/wait-106199bd.png",
  pd = "/assets/png/usdt-40311708.png",
  cd = "/assets/png/upt_tip-60751f49.png",
  id = "/assets/png/upi_recharge-a5d50b78.png",
  gd = "/assets/png/unit_icon-702f654a.png",
  rd = "/assets/png/unit_active-e9ec8145.png",
  ld = "/assets/png/trx-8c63cfbf.png",
  dd = "/assets/png/transf_amount-e9c0217c.png",
  ud = "/assets/png/tip-0498e3f9.png",
  md = "/assets/png/timeout-fef473aa.png",
  wd = "/assets/png/hicon2-147f9796.png",
  bd = "/assets/png/shuoming-3285244e.png",
  vd = "/assets/png/3_a-c660a4ba.png",
  yd = "/assets/png/3-5d3eefed.png",
  fd = "/assets/png/2_a-290b2514.png",
  Ad = "/assets/png/2-bd839975.png",
  hd = "/assets/png/setup2_active-bd15058f.png",
  _d = "/assets/png/setup2-666d3e9e.png",
  Sd = "/assets/png/setup1-53816735.png",
  jd = "/assets/png/saveWallet-ce287b90.png",
  $d = "/assets/png/sanjiao-9752d7ef.png",
  Bd = "/assets/png/refresh-8e0efe26.png",
  Gd = "/assets/png/quickpay2-ceb1387d.png",
  Ld = "/assets/png/quickpay-a4794d89.png",
  kd = "/assets/png/qrcode_active-ddfcec2b.png",
  Td = "/assets/png/qrcode-15987603.png",
  Id = "/assets/png/point-83b0da08.png",
  Rd = "/assets/png/phone_pe-0d512159.png",
  Cd = "/assets/png/paytm-312bb62a.png",
  Pd = "/assets/png/other_bank-17a0345c.png",
  Dd = "/assets/png/onlinepay_active-fec6a8d1.png",
  Ed = "/assets/png/onlinepay2-c62a95ae.png",
  xd = "/assets/png/onlinepay-64a4dce3.png",
  Od = "/assets/png/online_active-e5c995a2.png",
  Md = "/assets/png/moneyicon-cf7109c0.png",
  Wd = "/assets/png/mainChain-f736e2b7.png",
  Ud = "/assets/png/left_arrow-6c6e3cc6.png",
  Nd = "/assets/png/google_pay-c9a23353.png",
  Vd = "/assets/png/gift-55dc786a.png",
  Fd = "/assets/png/fail-5e44a4cc.png",
  Hd = "/assets/png/ewallet-59af22d2.png",
  qd = "/assets/png/eth-f22e240a.png",
  zd = "/assets/png/detail_upi_icon-813ff1e1.png",
  Kd = "/assets/png/copy1-88343644.png",
  Xd = "/assets/png/copy-08e6ee0a.png",
  Jd = "/assets/png/coin-8fd63dfb.png",
  Yd = "/assets/png/close-32ada670.png",
  Qd = "/assets/png/clean-82487515.png",
  Zd = "/assets/png/cip-7ed1a634.png",
  eu = "/assets/png/chongzhi-08739a3a.png",
  su = "/assets/png/cancel-0e9b3ff4.png",
  tu = "/assets/png/banktobank-401dbdc7.png",
  nu = "/assets/png/bank_card_active-d8f133c8.png",
  au = "/assets/png/bank_card-b0e23f81.png",
  ou = "/assets/png/1_a-c3c7a041.png",
  pu = "/assets/png/appeal-6e70b57c.png",
  cu = "/assets/png/hicon14-c2c6ca62.png",
  iu = "/assets/png/C2Chelp-f5be328c.png",
  gu = "/assets/png/t7_wallet_a-cef528ab.png",
  ru = "/assets/png/t7_wallet-d97dffcc.png",
  lu = "/assets/png/t7_main_a-0e96c746.png",
  du = "/assets/png/t7_main-3aa44dbd.png",
  uu = "/assets/png/t7_index_a-0d829fc5.png",
  mu = "/assets/png/t7_index-bbfe6c9d.png",
  wu = "/assets/png/t7_home_a-3279f3a0.png",
  bu = "/assets/png/t7_home-f769f73b.png",
  vu = "/assets/png/t7_activity_a-2620d96d.png",
  yu = "/assets/png/t7_activity-180585b5.png",
  fu = "/assets/png/home-2f6314ef.png",
  Au = "/assets/png/wallet_active-2f3966f0.png",
  hu = "/assets/png/wallet-476a2be3.png",
  _u = "/assets/png/promotion-9815b01f.png",
  Su = "/assets/png/promotion-9815b01f.png",
  ju = "/assets/png/main_active-7dd05d14.png",
  $u = "/assets/png/main-2381edd7.png",
  Bu = "/assets/png/home_active-b99ae49a.png",
  Gu = "/assets/png/home-3dbf9889.png",
  Lu = "/assets/png/activity_active-82e1a493.png",
  ku = "/assets/png/activity-b59cf520.png",
  Tu = "/assets/png/weal5-50bb1128.png",
  Iu = "/assets/png/weal4-e90ef388.png",
  Ru = "/assets/png/weal3-35c69f13.png",
  Cu = "/assets/png/5-5e6a64b1.png",
  Pu = "/assets/png/4-e53b4da2.png",
  Du = "/assets/png/3-99bbc2d4.png",
  Eu = "/assets/png/2-0a41a908.png",
  xu = "/assets/png/1-fd9896f4.png",
  Ou = "/assets/png/ununlocked-b5a4c7d0.png",
  Mu = "/assets/png/HaveReached-bd0aadbf.png",
  Wu = "/assets/png/welfare5-8b250748.png",
  Uu = "/assets/png/welfare4-5642a4c8.png",
  Nu = "/assets/png/welfare3-bfb05d5e.png",
  Vu = "/assets/png/welfare2-cf757d28.png",
  Fu = "/assets/png/welfare1-eee87ee1.png",
  Hu = "/assets/png/9-5a25583e.png",
  qu = "/assets/png/8-fc7f2447.png",
  zu = "/assets/png/7-907655eb.png",
  Ku = "/assets/png/6-4ee4b170.png",
  Xu = "/assets/png/5-5e49bae2.png",
  Ju = "/assets/png/4-3c5b4bba.png",
  Yu = "/assets/png/3-fb0c8c43.png",
  Qu = "/assets/png/2-c9b115fb.png",
  Zu = "/assets/png/10-b06f6562.png",
  em = "/assets/png/1-953c5909.png",
  sm = "/assets/png/0-78e1ab02.png",
  tm = "/assets/png/9-b2e01899.png",
  nm = "/assets/png/8-b0ebfa02.png",
  am = "/assets/png/7-1deed869.png",
  om = "/assets/png/6-57560368.png",
  pm = "/assets/png/5-309a53a6.png",
  cm = "/assets/png/4-addcca26.png",
  im = "/assets/png/3-772507f8.png",
  gm = "/assets/png/2-5381bc14.png",
  rm = "/assets/png/10-ad370b50.png",
  lm = "/assets/png/1-793a027d.png",
  dm = "/assets/png/0-9eed23ad.png",
  um = "/assets/png/lv-450d4246.png",
  mm = "/assets/png/Lv7-fa9f063a.png",
  wm = "/assets/png/Lv6-3fc5204d.png",
  bm = "/assets/png/Lv5-98a2cbb8.png",
  vm = "/assets/png/Lv4-c0e4f354.png",
  ym = "/assets/png/Lv3-d91fd9c0.png",
  fm = "/assets/png/Lv2-fabf9d77.png",
  Am = "/assets/png/Lv1-cb6d787f.png",
  hm = "/assets/png/Lv0-c3baf0ba.png",
  _m = "/assets/png/wallet-1215d27d.png",
  Sm = "/assets/png/groupSubordinate-0c376eee.png",
  jm = "/assets/png/extraBonus-ab106fcb.png",
  $m = "/assets/png/directSubordinate-b2d764c2.png",
  Bm = "/assets/png/trucktick-4f43261f.png",
  Gm = "/assets/png/poster-ce19704f.png",
  Lm = "/assets/png/logo-3c92e42a.png",
  km = "/assets/png/bg1-d6d02e9f.png",
  Tm = "/assets/png/bank-1227ae77.png",
  Im = "/assets/png/line-f156af68.png",
  Rm = "/assets/png/bg-79ecb3d8.png",
  Cm = "/assets/png/betInfoStep-2e2a875e.png",
  Pm = "/assets/png/roundIcon-d4d5ea8b.png",
  Dm = "/assets/png/box-83de4bc1.png",
  Em = "/assets/png/banner-bf01ff6f.png",
  xm = "/assets/png/tip-789290d9.png",
  Om = "/assets/png/phoneactive-d3ea66d4.png",
  Mm = "/assets/png/phone-8279bf85.png",
  Wm = "/assets/png/otheractive-cddf4a7d.png",
  Um = "/assets/png/other-53f673ed.png",
  Nm = "/assets/png/forgetpassword-3dde2500.png",
  Vm = "/assets/png/emailnumber-ad15a7cf.png",
  Fm = "/assets/png/emailactive-12a419a4.png",
  Hm = "/assets/png/email-d1eb3456.png",
  qm = "/assets/png/customer-4afe1e50.png",
  zm = "/assets/svg/refresh-3190250f.svg",
  Km = "/assets/svg/eventDescriptionArrow-066bda60.svg",
  Xm = "/assets/svg/activityRulesBackground-56922e78.svg",
  Jm = "/assets/svg/activityRule-f8647ffa.svg",
  Ym = "/assets/svg/activityIntro-c5605f68.svg",
  Qm = "/assets/svg/activityDetail-2f380353.svg",
  Zm = "/assets/svg/winningStar-0bc4df15.svg",
  ew = "/assets/svg/rule-a0733c44.svg",
  sw = "/assets/svg/YGG-3f392b65.svg",
  tw = "/assets/svg/Wickets9-c50ab38e.svg",
  nw = "/assets/svg/WM-e5af54e9.svg",
  aw = "/assets/svg/WM-e5af54e9.svg",
  ow = "/assets/svg/V8Card-e8353e10.svg",
  pw = "/assets/svg/TURBO-b170661a.svg",
  cw = "/assets/svg/TB-93b9e905.svg",
  iw = "/assets/svg/TB-93b9e905.svg",
  gw = "/assets/svg/Spribe2-1611e073.svg",
  rw = "/assets/svg/SaBa-c44e31c5.svg",
  lw = "/assets/svg/SPRIBE-91dc1aa2.svg",
  dw = "/assets/svg/SEXY-2e7ccc1f.svg",
  uw = "/assets/svg/SEXY-2e7ccc1f.svg",
  mw = "/assets/svg/PP-a8ca2442.svg",
  ww = "/assets/svg/PG-d146cfd9.svg",
  bw = "/assets/svg/Marbles-26a1b145.svg",
  vw = "/assets/svg/MG-c47f35b2.svg",
  yw = "/assets/svg/MG-c47f35b2.svg",
  fw = "/assets/svg/MG-c47f35b2.svg",
  Aw = "/assets/svg/Lottery-5c867ee2.svg",
  hw = "/assets/svg/KoolBet-2f4756ba.svg",
  _w = "/assets/svg/JOKER-c3c5b85c.svg",
  Sw = "/assets/svg/JILI-c3c73ec3.svg",
  jw = "/assets/svg/JDB-f559aaf1.svg",
  $w = "/assets/svg/INOUT-4d0f70e4.svg",
  Bw = "/assets/svg/IM-1b9edcb5.svg",
  Gw = "/assets/svg/Hacksaw-1998152d.svg",
  Lw = "/assets/svg/HackMD-87635545.svg",
  kw = "/assets/svg/HB-eda7191c.svg",
  Tw = "/assets/svg/G9-74334569.svg",
  Iw = "/assets/svg/EVO-8660b402.svg",
  Rw = "/assets/svg/EVOPlay-2e42b068.svg",
  Cw = "/assets/svg/EVOPlay-2e42b068.svg",
  Pw = "/assets/svg/EVO-8660b402.svg",
  Dw = "/assets/svg/DG-e8c970a3.svg",
  Ew = "/assets/svg/Card365-e9d8b120.svg",
  xw = "/assets/svg/CQ9-a1f1cb32.svg",
  Ow = "/assets/svg/CMD-bd4a302b.svg",
  Mw = "/assets/svg/BetSoft-45faea5a.svg",
  Ww = "/assets/svg/BGAMING-2b333128.svg",
  Uw = "/assets/svg/BB-a5502b5c.svg",
  Nw = "/assets/svg/AG-c6b60f18.svg",
  Vw = "/assets/svg/AG-c6b60f18.svg",
  Fw = "/assets/svg/AG-c6b60f18.svg",
  Hw = "/assets/svg/AG-c6b60f18.svg",
  qw = "/assets/svg/AG-c6b60f18.svg",
  zw = "/assets/svg/team_port-aaa6f267.svg",
  Kw = "/assets/svg/team_partner-3967e6ea.svg",
  Xw = "/assets/svg/teamSubordinates-72f4f360.svg",
  Jw = "/assets/svg/subordinate-cd303caa.svg",
  Yw = "/assets/svg/server-dcdbd327.svg",
  Qw = "/assets/svg/rebateRatio-626dfee2.svg",
  Zw = "/assets/svg/invite_reg-0d5bf08a.svg",
  eb = "/assets/svg/directSubordinates-bc3b87d9.svg",
  sb = "/assets/svg/copy_Code-f822e0c9.svg",
  tb = "/assets/svg/commission-35156794.svg",
  nb = "/assets/svg/widthdrawBlue-0fb27f01.svg",
  ab = "/assets/svg/weal5-713bc934.svg",
  ob = "/assets/svg/weal4-6191b04f.svg",
  pb = "/assets/svg/weal3-d0a80d47.svg",
  cb = "/assets/svg/wallets-fce84a97.svg",
  ib = "/assets/svg/versionUpdateIcon-ae496f55.svg",
  gb = "/assets/svg/vault-f4db1df7.svg",
  rb = "/assets/svg/tradeHistory-76ac5f74.svg",
  lb = "/assets/svg/tournament-9aa75b4c.svg",
  db = "/assets/svg/statsIcon-40666e36.svg",
  ub = "/assets/svg/rechargeIcon-8b8d4941.svg",
  mb = "/assets/svg/rechargeHistory-0358f4f6.svg",
  wb = "/assets/svg/productCode-31b20fde.svg",
  bb = "/assets/svg/pointsSmallIncon-1a0c72cd.svg",
  vb = "/assets/svg/points-991658be.svg",
  yb = "/assets/svg/notification-ff3fc155.svg",
  fb = "/assets/svg/myWithdrawHistory-efe8c62b.svg",
  Ab = "/assets/svg/myDraw-91b58c40.svg",
  hb = "/assets/svg/messageIcon-01f5dfe1.svg",
  _b = "/assets/svg/love-71889dd9.svg",
  Sb = "/assets/svg/logout-677a32e0.svg",
  jb = "/assets/svg/language-e3fac31a.svg",
  $b = "/assets/svg/googleIcon-3d4e0215.svg",
  Bb = "/assets/svg/gifts-2783922e.svg",
  Gb = "/assets/svg/editIcon-e800b134.svg",
  Lb = "/assets/svg/diamond-8d804cb6.svg",
  kb = "/assets/svg/crown-73887708.svg",
  Tb = "/assets/svg/betHistory-f5bf1043.svg",
  Ib = "/assets/svg/VipIcon-51586113.svg",
  Rb = "/assets/svg/ar14-winner-2f20069c.svg",
  Cb = "/assets/svg/91-withdraw_btn-c8a3085c.svg",
  Pb = "/assets/svg/91-winner-6f08206a.svg",
  Db = "/assets/svg/91-vip-89f5c0cb.svg",
  Eb = "/assets/svg/91-up-408e58dd.svg",
  xb = "/assets/svg/91-turntable-1ce82349.svg",
  Ob = "/assets/svg/91-top1-7ad9614c.svg",
  Mb = "/assets/svg/91-refresh-40139477.svg",
  Wb = "/assets/svg/91-recharge_btn-ff2482b8.svg",
  Ub = "/assets/svg/91-rank_bg-f3e6dccd.svg",
  Nb = "/assets/svg/91-rank-5ffc5506.svg",
  Vb = "/assets/svg/91-point-263142f0.svg",
  Fb = "/assets/svg/91-notice-32c01c22.svg",
  Hb = "/assets/svg/91-message_notice-5721dd52.svg",
  qb = "/assets/svg/91-homeDown-5219b41b.svg",
  zb = "/assets/svg/91-gold-856a95a9.svg",
  Kb = "/assets/svg/91-down-06370c5e.svg",
  Xb = "/assets/png/totalIncomeBg-e5f99b03.png",
  Jb = "/assets/png/heroImg-00649ceb.png",
  Yb = "/assets/png/headerBg-6185d182.png",
  Qb = "/assets/png/stage-f0b7a560.png",
  Zb = "/assets/png/place3-d9b0be38.png",
  ev = "/assets/png/place2-8189be28.png",
  sv = "/assets/png/place1-fe39c3f3.png",
  tv = "/assets/png/crown3-2ca02146.png",
  nv = "/assets/png/crown2-c8aced52.png",
  av = "/assets/png/crown1-3912fd85.png",
  ov = "/assets/png/border3-cfec4a7d.png",
  pv = "/assets/png/border2-7a806be7.png",
  cv = "/assets/png/border1-3b6518ec.png",
  iv = "/assets/png/trans-84086e2c.png",
  gv = "/assets/png/ar-trans-d6480440.png",
  rv = "/assets/png/icon-9f3018f6.png",
  lv = "/assets/svg/close-f63083a1.svg",
  dv = "/assets/png/Grouptip-2ccf91bd.png",
  uv = "/assets/png/Group-74b890b6.png",
  mv = "/assets/png/zs-829e90cb.png",
  wv = "/assets/png/wallet-21113a47.png",
  bv = "/assets/png/superjackpotHome-72bbeb43.png",
  vv = "/assets/png/ruleicon-81461832.png",
  yv = "/assets/png/right-d32ab2b2.png",
  fv = "/assets/png/promptImg-c78d672b.png",
  Av = "/assets/png/Vector-fb350715.png",
  hv = "/assets/png/7-0fc3263c.png",
  _v = "/assets/png/6-d33a01cc.png",
  Sv = "/assets/png/5-f2ccf58e.png",
  jv = "/assets/png/47-e0443e1b.png",
  $v = "/assets/png/46-fe864510.png",
  Bv = "/assets/png/45-87bd29b0.png",
  Gv = "/assets/png/44-149b0454.png",
  Lv = "/assets/png/42-6d6e29b4.png",
  kv = "/assets/png/41-d065665b.png",
  Tv = "/assets/png/4-334172a0.png",
  Iv = "/assets/png/38-12492e70.png",
  Rv = "/assets/png/37-57f766cb.png",
  Cv = "/assets/png/35-e05f12c6.png",
  Pv = "/assets/png/30-d5d51a19.png",
  Dv = "/assets/png/3-6318b052.png",
  Ev = "/assets/png/29-1825e402.png",
  xv = "/assets/png/27-9188478b.png",
  Ov = "/assets/png/26-5206d38e.png",
  Mv = "/assets/png/24-83cbd6ce.png",
  Wv = "/assets/png/23-83a407d7.png",
  Uv = "/assets/png/22-24343d89.png",
  Nv = "/assets/png/21-d4ee3b73.png",
  Vv = "/assets/png/20-1f5d984e.png",
  Fv = "/assets/png/2-79d63988.png",
  Hv = "/assets/png/19-2b8a5fc5.png",
  qv = "/assets/png/18-bf50e74e.png",
  zv = "/assets/png/16-2bd4085f.png",
  Kv = "/assets/png/16-2bd4085f.png",
  Xv = "/assets/png/10-8f61ca77.png",
  Jv = "/assets/png/10-8f61ca77.png",
  Yv = "/assets/png/10-8f61ca77.png",
  Qv = "/assets/png/1-40ae7baf.png",
  Zv = "/assets/png/-1-9e458c2f.png",
  ey = "/assets/png/9-6d772f2c.png",
  sy = "/assets/png/8-ea087ede.png",
  ty = "/assets/png/7-00479cfa.png",
  ny = "/assets/png/6-7c7f5203.png",
  ay = "/assets/png/5-ab77b716.png",
  oy = "/assets/png/4-12a0d0c5.png",
  py = "/assets/png/3-abfcc056.png",
  cy = "/assets/png/20-a58f23bf.png",
  iy = "/assets/png/2-58c8a9bc.png",
  gy = "/assets/png/19-2ac9fd83.png",
  ry = "/assets/png/18-52955242.png",
  ly = "/assets/png/17-bedde42f.png",
  dy = "/assets/png/16-cf8e1441.png",
  uy = "/assets/png/15-80f41fc6.png",
  my = "/assets/png/14-a397ff6b.png",
  wy = "/assets/png/13-5676d43f.png",
  by = "/assets/png/12-ae12c679.png",
  vy = "/assets/png/11-925c456e.png",
  yy = "/assets/png/10-29a6603e.png",
  fy = "/assets/png/1-a6662edb.png",
  Ay = "/assets/png/yellow_wallet_a-302b691b.png",
  hy = "/assets/png/yellow_wallet-af4b65a8.png",
  _y = "/assets/png/yellow_promotion_a-0f612093.png",
  Sy = "/assets/png/yellow_promotion-992842e5.png",
  jy = "/assets/png/yellow_main_a-66656fc5.png",
  $y = "/assets/png/yellow_main-6b8ccc07.png",
  By = "/assets/png/yellow_home-5ffdd667.png",
  Gy = "/assets/png/yellow_activity_a-c2ae8f1e.png",
  Ly = "/assets/png/yellow_activity-19e1e2fa.png",
  ky = "/assets/png/t6_wallet_a-60eb81d6.png",
  Ty = "/assets/png/t6_wallet-3ae41933.png",
  Iy = "/assets/png/t6_promotion_a-923d9ced.png",
  Ry = "/assets/png/t6_promotion-a029ef45.png",
  Cy = "/assets/png/t6_main_a-a7e8e1b6.png",
  Py = "/assets/png/t6_main-bad84e0d.png",
  Dy = "/assets/png/t6_home-0a6ae2d5.png",
  Ey = "/assets/png/t6_activity_a-9c24c442.png",
  xy = "/assets/png/t6_activity-5e528f8c.png",
  Oy = "/assets/png/ar064_home_a-096fef13.png",
  My = "/assets/png/ar064_home-6b4a1a6e.png",
  Wy = "/assets/svg/home2-44a54115.svg",
  Uy = "/assets/svg/home1-14aaac97.svg",
  Ny = "/assets/png/winning-95b658e2.png",
  Vy = "/assets/png/video_icon-cc36dc64.png",
  Fy = "/assets/png/video-df6e9105.png",
  Hy = "/assets/png/sport_icon-5fa3a056.png",
  qy = "/assets/png/sport-a002c6a7.png",
  zy = "/assets/png/slot_icon-f4f0d9cb.png",
  Ky = "/assets/png/slot-73bd6272.png",
  Xy = "/assets/png/rank_icon-3b73da86.png",
  Jy = "/assets/png/popular_icon-11c3835a.png",
  Yy = "/assets/png/popular-e09a3eaa.png",
  Qy = "/assets/png/notice-8d53455c.png",
  Zy = "/assets/png/message-e4ac94dd.png",
  ef = "/assets/png/lottery_icon-cff3f9b5.png",
  sf = "/assets/png/lottery-7fc02cc0.png",
  tf = "/assets/png/flash_icon-5e612315.png",
  nf = "/assets/png/flash-2500d79a.png",
  af = "/assets/png/fish_icon-72048363.png",
  of = "/assets/png/fish-ec1b1df0.png",
  pf = "/assets/png/download-14b53559.png",
  cf = "/assets/png/crown3-28a5889c.png",
  gf = "/assets/png/crown2-f9ce3eee.png",
  rf = "/assets/png/crown1-6889b8e0.png",
  lf = "/assets/png/chess_icon-703b3232.png",
  df = "/assets/png/chess-f4b12afc.png",
  uf = "/assets/png/SMG_wildfireWins-a93edd26.png",
  mf = "/assets/png/SMG_777Surge-78d7229c.png",
  wf = "/assets/png/SMG_10000Wishes-407d0b9b.png",
  bf = "/assets/png/Lottery_WinGo-d07ef527.png",
  vf = "/assets/png/DailyProfitRankStage-a33ced55.png",
  yf = "/assets/png/98-d5fe7f97.png",
  ff = "/assets/png/9014-4d56c8d3.png",
  Af = "/assets/png/9013-577bb997.png",
  hf = "/assets/png/800-faa50496.png",
  _f = "/assets/png/51-d4515e78.png",
  Sf = "/assets/png/42-f285c15c.png",
  jf = "/assets/png/223-b5171aac.png",
  $f = "/assets/png/14025-01483774.png",
  Bf = "/assets/png/109-41a5c231.png",
  Gf = "/assets/png/103-a93816e3.png",
  Lf = "/assets/png/100-49ef7186.png",
  kf = "/assets/png/wingo-7fed1973.png",
  Tf = "/assets/png/trx-6b43aee9.png",
  If = "/assets/png/top3-31e06806.png",
  Rf = "/assets/png/top2-40f62dc7.png",
  Cf = "/assets/png/top1-573e2e29.png",
  Pf = "/assets/svg/search_icon-4452570e.svg",
  Df = "/assets/svg/message-8d1fb933.svg",
  Ef = "/assets/png/k3-a4a42715.png",
  xf = "/assets/png/5d-f8ff113e.png",
  Of = "/assets/png/wingo4-c325a189.png",
  Mf = "/assets/png/wingo30-05de796d.png",
  Wf = "/assets/png/wingo3-af2ecabf.png",
  Uf = "/assets/png/wingo2-7620426f.png",
  Nf = "/assets/png/wingo1-26adecc4.png",
  Vf = "/assets/png/trx16-27318f43.png",
  Ff = "/assets/png/trx15-5500af52.png",
  Hf = "/assets/png/trx14-af832a85.png",
  qf = "/assets/png/trx13-30f132be.png",
  zf = "/assets/png/rule-r-ee114f98.png",
  Kf = "/assets/png/k39-707408c6.png",
  Xf = "/assets/png/k312-126dcbfe.png",
  Jf = "/assets/png/k311-2acf4e28.png",
  Yf = "/assets/png/k310-1fc41fc4.png",
  Qf = "/assets/png/d58-b02f0617.png",
  Zf = "/assets/png/d57-59e91e51.png",
  eA = "/assets/png/d56-381350f2.png",
  sA = "/assets/png/d55-92bf4299.png",
  tA = "/assets/png/XOSO_bg-57f7c4c7.png",
  nA = "/assets/png/XOSO_bg-57f7c4c7.png",
  aA = "/assets/png/4D_bg-721dba75.png",
  oA = "/assets/png/VideoWinGo23-18cf27a4.png",
  pA = "/assets/png/Bingo18_bg-11bddcb5.png",
  cA = "/assets/png/Motorace17-57066db3.png",
  iA = "/assets/png/MotoRace_bg-6e64cdd9.png",
  gA = "/assets/png/4D_bg-721dba75.png",
  rA = "/assets/png/XOSO_bg-57f7c4c7.png",
  lA = "/assets/png/Bingo18_bg-11bddcb5.png",
  dA = "/assets/png/5D_bg-23f2c875.png",
  uA = "/assets/png/4D_bg-721dba75.png",
  mA = "/assets/png/videoActive-eb4fe331.png",
  wA = "/assets/png/video-727f5ef5.png",
  bA = "/assets/png/sportActive-0235eeda.png",
  vA = "/assets/png/sport-3c47e41a.png",
  yA = "/assets/png/slotActive-b5921bd5.png",
  fA = "/assets/png/slot-a9a2f416.png",
  AA = "/assets/png/popularActive-168afcaa.png",
  hA = "/assets/png/popular-40beb97d.png",
  _A = "/assets/png/lotteryActive-c43af489.png",
  SA = "/assets/png/lottery-49847eb7.png",
  jA = "/assets/png/flashActive-ef7a14b3.png",
  $A = "/assets/png/flash-77bbc5d6.png",
  BA = "/assets/png/fishActive-aca8b68b.png",
  GA = "/assets/png/fish-2be0a575.png",
  LA = "/assets/png/chessActive-53643ac1.png",
  kA = "/assets/png/chess-9a2d9c33.png",
  TA = "/assets/png/bgOld-d9a87831.png",
  IA = "/assets/png/bgActiveOld-0e6f6732.png",
  RA = "/assets/png/bgActive-805fae0e.png",
  CA = "/assets/png/bg-edc23a85.png",
  PA = "/assets/png/wingo4-28f9f7a1.png",
  DA = "/assets/png/wingo30-9c517bee.png",
  EA = "/assets/png/wingo3-05d3e6ea.png",
  xA = "/assets/png/wingo2-dd243989.png",
  OA = "/assets/png/wingo1-95a2bed1.png",
  MA = "/assets/png/trx16.-7edf79f0.png",
  WA = "/assets/png/trx15-9d9b9826.png",
  UA = "/assets/png/trx14-805c6f39.png",
  NA = "/assets/png/trx13-4af16a04.png",
  VA = "/assets/png/motorace17-e17a943e.png",
  FA = "/assets/png/k39-1772e3d7.png",
  HA = "/assets/png/k312-3c769658.png",
  qA = "/assets/png/k311-48ce8940.png",
  zA = "/assets/png/k310-b950a44d.png",
  KA = "/assets/png/d58-9eb03eba.png",
  XA = "/assets/png/d57-63123506.png",
  JA = "/assets/png/d56-c1f819a4.png",
  YA = "/assets/png/d55-dccd8584.png",
  QA = "/assets/png/VideoWinGo23-18cf27a4.png",
  ZA = "/assets/png/videoActive-67d99b5e.png",
  eh = "/assets/png/video-b54edeaa.png",
  sh = "/assets/png/tabActive-796a5254.png",
  th = "/assets/png/tab-97a30bc0.png",
  nh = "/assets/png/sportActive-0b279689.png",
  ah = "/assets/png/sport-47088d84.png",
  oh = "/assets/png/slotActive-aeb13ec9.png",
  ph = "/assets/png/slot-0ae7daf0.png",
  ch = "/assets/png/popularActive-c4010b84.png",
  ih = "/assets/png/popular-05b5a660.png",
  gh = "/assets/png/lotteryActive-eda604f1.png",
  rh = "/assets/png/lottery-af7c0f05.png",
  lh = "/assets/png/flashActive-447f35a6.png",
  dh = "/assets/png/flash-a975ad53.png",
  uh = "/assets/png/fishActive-b00d1575.png",
  mh = "/assets/png/fish-407305dc.png",
  wh = "/assets/png/chessActive-0cdeb29e.png",
  bh = "/assets/png/chess-cfba644a.png",
  vh = "/assets/png/bgActive-a1b5932b.png",
  yh = "/assets/png/bg-f5ff3553.png",
  fh = "/assets/png/allActive-f17fb22d.png",
  Ah = "/assets/png/all-27493840.png",
  hh = "/assets/png/PhonePe-f7836c64.png",
  _h = "/assets/png/Paytm-0c047809.png",
  Sh = "/assets/svg/fail-6b2f4d89.svg",
  jh = "/assets/svg/fail-6b2f4d89.svg",
  $h = "/assets/png/PhonePe_bg_active-5779a9e3.png",
  Bh = "/assets/png/PhonePe_bg-2f145b10.png",
  Gh = "/assets/svg/PhonePe-6781c2ba.svg",
  Lh = "/assets/png/PhonePe-97d4116a.png",
  kh = "/assets/png/Paytm_bg_active-e698feef.png",
  Th = "/assets/png/Paytm_bg-8911757e.png",
  Ih = "/assets/svg/Paytm-73b1277a.svg",
  Rh = "/assets/png/Paytm-3c297cfb.png",
  Ch = "/assets/svg/Other_Bank-e4ec4bfe.svg",
  Ph = "/assets/png/Other Bank-a9d5b66b.png",
  Dh = "/assets/png/Mobikwik-e1dbd222.png",
  Eh = "/assets/svg/GooglePay-281f2143.svg",
  xh = "/assets/png/GooglePay-a55fa0b8.png",
  Oh = "/assets/png/s4-58596644.png",
  Mh = "/assets/png/s3-488e17f4.png",
  Wh = "/assets/png/s2-19d8a96d.png",
  Uh = "/assets/png/s1-873d5cc5.png",
  Nh = "/assets/png/zp-e42d4a86.png",
  Vh = "/assets/png/turntable-4464ae2e.png",
  Fh = "/assets/png/money-37bf3bca.png",
  Hh = "/assets/png/btn-25f23fd7.png",
  qh = "/assets/png/bg-9bfd9862.png",
  zh = "/assets/png/head-41715561.png",
  Kh = "/assets/png/box-72df0f73.png",
  Xh = "/assets/png/bg-03736905.png",
  Jh = "/assets/png/verified-07adefdd.png",
  Yh = "/assets/png/treasure-393407c9.png",
  Qh = "/assets/png/ticket-50e7f4ff.png",
  Zh = "/assets/png/successfullyReceived-ba114e61.png",
  e_ = "/assets/png/successfullyParticipatedBottom-9b3834ed.png",
  s_ = "/assets/png/successfullyParticipatedBg-6f009b48.png",
  t_ = "/assets/png/statusBg-219ad07d.png",
  n_ = "/assets/png/rule-175064b1.png",
  a_ = "/assets/png/redeemdBg-11a66dae.png",
  o_ = "/assets/png/redDiamondSm-e70ad689.png",
  p_ = "/assets/png/redDiamond-7d6eb86a.png",
  c_ = "/assets/png/recycleBin-33f39c36.png",
  i_ = "/assets/png/recordHeaderBg-935ceaef.png",
  g_ = "/assets/png/record-d4db04fc.png",
  r_ = "/assets/png/pointsIcon-0920a82f.png",
  l_ = "/assets/png/plus-c6759b9a.png",
  d_ = "/assets/png/output-5e44ebb9.png",
  u_ = "/assets/png/orderSentImg-b8e3ec85.png",
  m_ = "/assets/png/orderSent-1bf577ad.png",
  w_ = "/assets/png/orderPendingImg-55a169f3.png",
  b_ = "/assets/png/orderPending-800494a8.png",
  v_ = "/assets/png/orderItemDetail-75e9d064.png",
  y_ = "/assets/png/orderCompletedImg-33bbe180.png",
  f_ = "/assets/png/orderCompleted-9097de24.png",
  A_ = "/assets/png/orderCanceledImg-60b942d7.png",
  h_ = "/assets/png/orderCanceled-24ddf61e.png",
  __ = "/assets/png/orderCancelWarn-ac58c333.png",
  S_ = "/assets/png/orderCancelSuccess-88db2a4b.png",
  j_ = "/assets/png/notice-79006469.png",
  $_ = "/assets/png/minus-5a9596f2.png",
  B_ = "/assets/png/luckyNumber-161bd253.png",
  G_ = "/assets/png/lotteryReceiver-a6053ba3.png",
  L_ = "/assets/png/lotteryContact-1841aa7f.png",
  k_ = "/assets/png/loading-adf3b1e5.png",
  T_ = "/assets/png/iphone14-a3ffcac4.png",
  I_ = "/assets/png/income-ac0d3d36.png",
  R_ = "/assets/png/headerBodyBg-d4a7290f.png",
  C_ = "/assets/png/headerBg-e508f7ee.png",
  P_ = "/assets/png/forbhidden-37936b1e.png",
  D_ = "/assets/png/empty-4ac9a431.png",
  E_ = "/assets/png/editDefault-64fbf1a8.png",
  x_ = "/assets/png/edit-46999709.png",
  O_ = "/assets/png/dropdownWhite-578a632a.png",
  M_ = "/assets/png/dropdownRed-3af49045.png",
  W_ = "/assets/png/dropdown-322823a1.png",
  U_ = "/assets/png/diamond-2cbec887.png",
  N_ = "/assets/png/copy-d55c13ec.png",
  V_ = "/assets/png/confirm-a33ad5f4.png",
  F_ = "/assets/png/coin-cb038c55.png",
  H_ = "/assets/png/close-862c6a4d.png",
  q_ = "/assets/png/claimRuleBg-24465825.png",
  z_ = "/assets/png/cart-cbe8676b.png",
  K_ = "/assets/png/addAddress-ed8b5c2b.png",
  X_ = "/assets/png/superJackpot-ecb648b4.png",
  J_ = "/assets/png/memberGift-a0182789.png",
  Y_ = "/assets/png/invitationBonus-aa7acbd3.png",
  Q_ = "/assets/png/activityReward-66772619.png",
  Z_ = "/assets/png/BettingRebate-17d35455.png",
  eS = "/assets/png/day7BgActive-0b574f89.png",
  sS = "/assets/png/day7Bg-c8619dfc.png",
  tS = "/assets/png/coin-294b6998.png",
  nS = "/assets/png/ar-headerBg-9e0606dd.png",
  aS = "/assets/png/Unsigned-6fd1c78f.png",
  oS = "/assets/png/Signed-dd8900d1.png",
  pS = "/assets/png/SignInTop-2fa51663.png",
  cS = "/assets/png/taskIcon5-de1c9e45.png",
  iS = "/assets/png/taskIcon4-61254c95.png",
  gS = "/assets/png/taskIcon3-dd14a0b4.png",
  rS = "/assets/png/taskIcon2-12ec2ce1.png",
  lS = "/assets/png/taskIcon1-4d9fdca3.png",
  dS = "/assets/png/stepperIcon-2e9ee5c5.png",
  uS = "/assets/png/signInBanner-ff4a210f.png",
  mS = "/assets/png/amountIcon-b2c8faab.png",
  wS = "/assets/png/present-f428559f.png",
  bS = "/assets/png/new-10c0e083.png",
  vS = "/assets/png/giftRedeem-bb2f7a92.png",
  yS = "/assets/png/friends-4ef5392a.png",
  fS = "/assets/png/dualArrow-64025a0e.png",
  AS = "/assets/png/confirmationReceived-bb857841.png",
  hS = "/assets/png/close-32ada670.png",
  _S = "/assets/png/award_bg-8e278a3d.png",
  SS = "/assets/png/awardRecord-5114e1d9.png",
  jS = "/assets/png/awardImg-8d1a549e.png",
  $S = "/assets/png/ar_award_bg-39b9ad3c.png",
  BS = "/assets/png/amountIcon-b2c8faab.png",
  GS = "/assets/png/activityIcon5-bed22bcc.png",
  LS = "/assets/png/activityIcon4-4b3e3dac.png",
  kS = "/assets/png/activityIcon3-2aeac4f4.png",
  TS = "/assets/png/activityIcon2-65587a73.png",
  IS = "/assets/png/activityIcon1-67076a48.png",
  RS = "/assets/png/PointsMallBanner-29c85912.png",
  CS = "/assets/png/claimRuleBg-24465825.png",
  PS = "/assets/png/DailyTaskBanner-4d2c6dee.png",
  DS = "/assets/png/DailyCheckInBanner-4da72087.png",
  ES = "/assets/png/3-f5a58c12.png",
  xS = "/assets/png/2-0c408958.png",
  OS = "/assets/png/1-dcdd0031.png",
  MS = "/assets/png/activityAttendance-e4704306.png",
  WS = "/assets/png/6-d6ee4bdd.png",
  US = "/assets/png/8-99f019b4.png",
  NS = "/assets/png/8-99f019b4.png",
  VS = "/assets/png/6-d6ee4bdd.png",
  FS = "/assets/png/5-f026eff3.png",
  HS = "/assets/png/4_ns-6c3ac287.png",
  qS = "/assets/png/4-d37103ef.png",
  zS = "/assets/png/3-6bb1e3bd.png",
  KS = "/assets/png/10-e1104eb3.png",
  XS = "/assets/png/1-bcd21d34.png",
  JS = "/assets/png/moonBar-f80ac733.png",
  YS = "/assets/png/bc-b4a87488.png",
  QS = "/assets/png/all_NS-596a51c1.png",
  ZS = "/assets/png/all-27648518.png",
  ej = "/assets/png/8-99f019b4.png",
  sj = "/assets/png/8-99f019b4.png",
  tj = "/assets/png/6-d6ee4bdd.png",
  nj = "/assets/png/6-d6ee4bdd.png",
  aj = "/assets/png/5-f026eff3.png",
  oj = "/assets/png/5-f026eff3.png",
  pj = "/assets/png/4-d37103ef.png",
  cj = "/assets/png/4-d37103ef.png",
  ij = "/assets/png/3-7b95b50c.png",
  gj = "/assets/png/3_1-797ff1cd.png",
  rj = "/assets/png/3-7b95b50c.png",
  lj = "/assets/png/20-be90e252.png",
  dj = "/assets/png/20-be90e252.png",
  uj = "/assets/png/1_NS-4e2a71d4.png",
  mj = "/assets/png/10-e1104eb3.png",
  wj = "/assets/png/10-e1104eb3.png",
  bj = "/assets/png/1-126f6627.png",
  vj = "/assets/png/searchIcon2-5a357de6.png",
  yj = "/assets/png/phone-4120fa0b.png",
  fj = "/assets/png/name-9e22293f.png",
  Aj = "/assets/png/ifscCode-c4c5dd87.png",
  hj = "/assets/png/email-f5b70317.png",
  _j = "/assets/png/bankLogo-a5a69eb5.png",
  Sj = "/assets/png/bankHeader2-8f70dbe2.png",
  jj = "/assets/png/bankHeader1-3318d52b.png",
  $j = "/assets/png/bankCard-72696d64.png",
  Bj = "/assets/png/bank-c41d01a9.png",
  Gj = "/assets/png/address-e900da4b.png",
  Lj = "/assets/png/5-f026eff3.png",
  kj = "/assets/png/3-6bb1e3bd.png",
  Tj = "/assets/png/21-b48d886d.png",
  Ij = "/assets/png/1-4618686f.png",
  Rj = "/assets/png/wrong_1-b1d69653.png",
  Cj = "/assets/png/wrong-b3102a79.png",
  Pj = "/assets/png/video1-b0611412.png",
  Dj = "/assets/png/uploadVideo-c98adde0.png",
  Ej = "/assets/png/updateImg-53f2ece8.png",
  xj = "/assets/png/upiline-0a62bd1b.png",
  Oj = "/assets/png/upi-3f9883de.png",
  Mj = "/assets/png/uAmount-41b6d3de.png",
  Wj = "/assets/png/successicon-14b4ca02.png",
  Uj = "/assets/png/seleteBank-495c5570.png",
  Nj = "/assets/png/selectupi-a393f4a3.png",
  Vj = "/assets/png/safety-9f888a05.png",
  Fj = "/assets/png/hicon8-a0b773c0.png",
  Hj = "/assets/png/hicon7-17c43b53.png",
  qj = "/assets/png/hicon6-9e8572bd.png",
  zj = "/assets/png/hicon5-5edd50a0.png",
  Kj = "/assets/png/cancel-0e9b3ff4.png",
  Xj = "/assets/png/hicon3-88832321.png",
  Jj = "/assets/png/hicon2-147f9796.png",
  Yj = "/assets/png/hicon14-c2c6ca62.png",
  Qj = "/assets/png/appeal-6e70b57c.png",
  Zj = "/assets/png/hicon0-f77ed8cd.png",
  e$ = "/assets/png/delBtn-a22f4a2e.png",
  s$ = "/assets/png/copy-icon-fead2b7d.png",
  t$ = "/assets/png/confirmA-1de2c8e9.png",
  n$ = "/assets/png/c2clogo_a-38a8cfbe.png",
  a$ = "/assets/png/c2clogo-e9e3330b.png",
  o$ = "/assets/png/bg11-8d5da6a8.png",
  p$ = "/assets/png/bank-11ec3a19.png",
  c$ = "/assets/png/appeal-645c7205.png",
  i$ = "/assets/png/add-1ad7f3f5.png",
  g$ = "/assets/png/CancelW-5d1e136e.png",
  r$ = "/assets/png/4-f425c40c.png",
  l$ = "/assets/png/3-21c2fbaa.png",
  d$ = "/assets/png/2-79ed5c4e.png",
  u$ = "/assets/png/1-bfa3f309.png",
  m$ = "/assets/png/usdtLogo3-44838497.png",
  w$ = "/assets/png/usdt-6c465007.png",
  b$ = "/assets/png/scan-2448efda.png",
  v$ = "/assets/png/network-5814d749.png",
  y$ = "/assets/png/bankHeader-8061c85e.png",
  f$ = "/assets/png/anotherNamer-abd9d35b.png",
  A$ = "/assets/png/address-827477cf.png",
  h$ = "/assets/png/wallet-94251531.png",
  _$ = "/assets/png/momo-5cf8e802.png",
  S$ = "/assets/png/cards-b2779342.png",
  j$ = "/assets/png/bankHeader-56d506ba.png",
  $$ = "/assets/png/wave_icon-41753b97.png",
  B$ = "/assets/png/wave-9300da3f.png",
  G$ = "/assets/png/slot_wallet-0f74ba62.png",
  L$ = "/assets/png/kbz_icon-1ab461b7.png",
  k$ = "/assets/png/kbz-b7b75d71.png",
  T$ = "/assets/png/bank-bf085d1b.png",
  I$ = "/assets/png/appeal-645c7205.png",
  R$ = "/assets/png/9-63365227.png",
  C$ = "/assets/png/8-8cbed392.png",
  P$ = "/assets/png/7-a50aebe0.png",
  D$ = "/assets/png/6-05959c7c.png",
  E$ = "/assets/png/5-89e9b349.png",
  x$ = "/assets/png/4-a4cfd018.png",
  O$ = "/assets/png/3-9cf04b7e.png",
  M$ = "/assets/png/2-fcf77958.png",
  W$ = "/assets/png/10-0eaf39a0.png",
  U$ = "/assets/png/1-1fca7935.png",
  N$ = "/assets/png/2-5df32e87.png",
  V$ = "/assets/png/1-d951dc6d.png",
  F$ = "/assets/png/bg9-74d6723d.png",
  H$ = "/assets/png/bg8-8bdc102c.png",
  q$ = "/assets/png/bg7-535312da.png",
  z$ = "/assets/png/bg6-8b5d1b4f.png",
  K$ = "/assets/png/bg5-e2132369.png",
  X$ = "/assets/png/bg4-c3caf0f8.png",
  J$ = "/assets/png/bg3-96f1cdae.png",
  Y$ = "/assets/png/bg2-ee7fbf5e.png",
  Q$ = "/assets/png/bg10-76abb4b7.png",
  Z$ = "/assets/png/bg1-7ff97a99.png",
  eB = "/assets/svg/usdtLogo3-fbb03d0f.svg",
  sB = "/assets/svg/5-6a5dff94.svg",
  tB = "/assets/svg/1-4bc64f9f.svg",
  nB = "/assets/svg/settingCenter-53b41281.svg",
  aB = "/assets/svg/serviceCenter-5bf2bdc4.svg",
  oB = "/assets/svg/notificationCenter-c0c5489b.svg",
  pB = "/assets/svg/guide-427cd2dc.svg",
  cB = "/assets/svg/feedback-26930985.svg",
  iB = "/assets/svg/about-c0360497.svg",
  gB = "/assets/svg/riskProtocal-8b37dc30.svg",
  rB = "/assets/svg/privacyIcon-c8c614d1.svg",
  lB = "/assets/png/7-50491f4f.png",
  dB = "/assets/png/6-b1fffa2b.png",
  uB = "/assets/png/5-ef576d76.png",
  mB = "/assets/png/47-d9f572e1.png",
  wB = "/assets/png/46-ee02ed2b.png",
  bB = "/assets/png/45-9eed2c7e.png",
  vB = "/assets/png/44-620d40cf.png",
  yB = "/assets/png/42-27e3aa92.png",
  fB = "/assets/png/41-008fda31.png",
  AB = "/assets/png/4-d8ce028d.png",
  hB = "/assets/png/38-c4435bda.png",
  _B = "/assets/png/37-625a5b41.png",
  SB = "/assets/png/35-eb86dc8e.png",
  jB = "/assets/png/30-dc94dbb3.png",
  $B = "/assets/png/3-b264c177.png",
  BB = "/assets/png/29-8910dd13.png",
  GB = "/assets/png/27-4ed9e7d3.png",
  LB = "/assets/png/26-443407d9.png",
  kB = "/assets/png/24-2c3f7f15.png",
  TB = "/assets/png/23-74b469e3.png",
  IB = "/assets/png/22-c8d16d9d.png",
  RB = "/assets/png/21-445197ac.png",
  CB = "/assets/png/20-3b709e93.png",
  PB = "/assets/png/2-acd018d8.png",
  DB = "/assets/png/19-b7ea3a3f.png",
  EB = "/assets/png/18-133c9219.png",
  xB = "/assets/png/16-77372c1e.png",
  OB = "/assets/png/16-77372c1e.png",
  MB = "/assets/png/10-a32c3070.png",
  WB = "/assets/png/10-a32c3070.png",
  UB = "/assets/png/10-a32c3070.png",
  NB = "/assets/png/1-f340a485.png",
  VB = "/assets/png/-1-eebe8111.png",
  FB = "/assets/png/icon-wg-b65da4c5.png",
  HB = "/assets/png/icon-k3-dabf0a83.png",
  qB = "/assets/png/icon-5d-dadd282e.png",
  zB = "/assets/png/trxbg-83ff5c79.png",
  KB = "/assets/png/timeb-be86798b.png",
  XB = "/assets/png/timea-bf684535.png",
  JB = "/assets/png/prizeF-46aeece0.png",
  YB = "/assets/png/prizeE-90087f02.png",
  QB = "/assets/png/prizeD-46a95e2f.png",
  ZB = "/assets/png/prizeC-bbf8b83c.png",
  eG = "/assets/png/prizeB-6c3c2497.png",
  sG = "/assets/png/prizeA-7217212f.png",
  tG = "/assets/png/prize9-63d3f3f8.png",
  nG = "/assets/png/prize8-3ffac79f.png",
  aG = "/assets/png/prize7-ca1d24be.png",
  oG = "/assets/png/prize6-57181440.png",
  pG = "/assets/png/prize5-82f7fa61.png",
  cG = "/assets/png/prize4-5a5999aa.png",
  iG = "/assets/png/prize3-6700769f.png",
  gG = "/assets/png/prize2-28af3286.png",
  rG = "/assets/png/prize1-fe15d69b.png",
  lG = "/assets/png/prize0-96a81e16.png",
  dG = "/assets/png/numF-956f8923.png",
  uG = "/assets/png/numE-f70da99f.png",
  mG = "/assets/png/numD-06e782e9.png",
  wG = "/assets/png/numC-8d88d857.png",
  bG = "/assets/png/numB-cad56304.png",
  vG = "/assets/png/numA-594afa89.png",
  yG = "/assets/png/num9-310d63e2.png",
  fG = "/assets/png/num8-41b2260f.png",
  AG = "/assets/png/num7-05973970.png",
  hG = "/assets/png/num6-0cbd3b10.png",
  _G = "/assets/png/num5-fd2837e8.png",
  SG = "/assets/png/num4-5f2d81c5.png",
  jG = "/assets/png/num3-8254ed13.png",
  $G = "/assets/png/num2-b18f079a.png",
  BG = "/assets/png/num1-fdab1e12.png",
  GG = "/assets/png/num0-d3a30585.png",
  LG = "/assets/png/icon-tip-e132c927.png",
  kG = "/assets/png/trend_go-7405456e.png",
  TG = "/assets/png/trend3-2a1b1d6f.png",
  IG = "/assets/png/trend2-db817e06.png",
  RG = "/assets/png/trend1-e90c2f20.png",
  CG = "/assets/png/top_3-d324faac.png",
  PG = "/assets/png/top_2-7d8a7364.png",
  DG = "/assets/png/top_1-4e868024.png",
  EG = "/assets/png/rule_tip-5d3f81b0.png",
  xG = "/assets/png/rule_dice_6-fc323f22.png",
  OG = "/assets/png/rule_dice_5-58830c67.png",
  MG = "/assets/png/rule_dice_4-34353cc2.png",
  WG = "/assets/png/rule_dice_3-5d32ae31.png",
  UG = "/assets/png/rule_dice_2-aeca7e3d.png",
  NG = "/assets/png/rule_dice_1-0f7cd7df.png",
  VG = "/assets/png/rule_bg-50b5b9c0.png",
  FG = "/assets/png/record_icon-fca8b0d0.png",
  HG = "/assets/png/record-5001454f.png",
  qG = "/assets/png/lock_money-47931447.png",
  zG = "/assets/png/icon-0d01ace2.png",
  KG = "/assets/png/hot_top-db35cb37.png",
  XG = "/assets/png/hot_bg-52030c8d.png",
  JG = "/assets/png/hidden_money-4d2f0151.png",
  YG = "/assets/png/dice_6-3734f323.png",
  QG = "/assets/png/dice_5-a11110ab.png",
  ZG = "/assets/png/dice_4-3537b074.png",
  eL = "/assets/png/dice_3-c91e0c1c.png",
  sL = "/assets/png/dice_2-38383685.png",
  tL = "/assets/png/dice_1-3eb8e22b.png",
  nL = "/assets/png/count_icon-841b89c6.png",
  aL = "/assets/png/binguo_tip-5bf2ec89.png",
  oL = "/assets/png/binguo_time-92498640.png",
  pL = "/assets/png/bet_tip-6d4dd4c6.png",
  cL = "/assets/png/add-af733118.png",
  iL = "/assets/png/wingoissue-0c200440.png",
  gL = "/assets/png/voice-62dbf38c.png",
  rL = "/assets/png/voice-off-633f5ccc.png",
  lL = "/assets/png/time_a-f83ed4c7.png",
  dL = "/assets/png/time-5d4e96a3.png",
  uL = "/assets/png/rule-r-ee114f98.png",
  mL = "/assets/png/refireshIcon-2bc1b49f.png",
  wL = "/assets/png/n9-a20f6f42.png",
  bL = "/assets/png/n8-d4d951a4.png",
  vL = "/assets/png/n7-5961a17f.png",
  yL = "/assets/png/n6-a56e0b9a.png",
  fL = "/assets/png/n5-49d0e9c5.png",
  AL = "/assets/png/n4-cb84933b.png",
  hL = "/assets/png/n3-f92c313f.png",
  _L = "/assets/png/n2-c2913607.png",
  SL = "/assets/png/n1-dfccbff5.png",
  jL = "/assets/png/n0-30bd92d1.png",
  $L = "/assets/png/kefu-b361c42f.png",
  BL = "/assets/png/headlogo-56515a97.png",
  GL = "/assets/png/copy-b4cb4c54.png",
  LL = "/assets/png/bcakIcon-b7c1d288.png",
  kL = "/assets/png/agree-b-47b8f86d.png",
  TL = "/assets/png/agree-a-95c84913.png",
  IL = "/assets/png/PreSaleBg-3af872d3.png",
  RL = "/assets/png/wallet-34507dfa.png",
  CL = "/assets/png/tip-c41c0609.png",
  PL = "/assets/png/ticketstar-1284c928.png",
  DL = "/assets/png/success-6974caeb.png",
  EL = "/assets/png/right-21052d0b.png",
  xL = "/assets/png/right-border-2bf0f766.png",
  OL = "/assets/png/notwinning-7e54c381.png",
  ML = "/assets/png/middle-79bf238e.png",
  WL = "/assets/png/left-a0d125ca.png",
  UL = "/assets/png/left-border-2a4f160e.png",
  NL = "/assets/png/fail-2d46961d.png",
  VL = "/assets/png/detail-fadc6b56.png",
  FL = "/assets/png/close-862c6a4d.png",
  HL = "/assets/png/bg5-71cd6b43.png",
  qL = "/assets/png/bg4-200f47b7.png",
  zL = "/assets/png/bg3-90fd24c7.png",
  KL = "/assets/png/bg2-6bb5d543.png",
  XL = "/assets/png/bg1-c7e3c3ac.png",
  JL = "/assets/png/arrowbottom-4eb91cbc.png",
  YL = "/assets/png/WalletBg-eedd378a.png",
  QL = "/assets/png/Star-0eff667a.png",
  ZL = "/assets/png/redBall-fd34b99e.png",
  ek = "/assets/png/n7-039e2d7d.png",
  sk = "/assets/png/n6-b68c6bb6.png",
  tk = "/assets/png/n5-09b70e91.png",
  nk = "/assets/png/n4-9d453819.png",
  ak = "/assets/png/n3-1432a6bd.png",
  ok = "/assets/png/n2-447499dc.png",
  pk = "/assets/png/n1-584b8878.png",
  ck = "/assets/png/greenBall-b7685130.png",
  ik = "/assets/png/bitactive-b01fa131.png",
  gk = "/assets/png/success-6974caeb.png",
  rk = "/assets/png/fail-2d46961d.png",
  lk = "/assets/svg/arr-right-2572fbc2.svg",
  dk = "/assets/svg/arr-left-bfe1fd7a.svg",
  uk = "/assets/png/3-324d5d80.png",
  mk = "/assets/png/2-ced006d4.png",
  wk = "/assets/png/1-4ba1bded.png",
  bk = "/assets/png/3-403de67f.png",
  vk = "/assets/png/2-8d541aa8.png",
  yk = "/assets/png/1-32494215.png",
  fk = "/assets/png/3-8f116542.png",
  Ak = "/assets/png/2-d2d7df31.png",
  hk = "/assets/png/1-46f75933.png",
  _k = "/assets/png/3-538e7785.png",
  Sk = "/assets/png/2-5b749f7c.png",
  jk = "/assets/png/1-cbbab055.png",
  $k = "/assets/png/3-135d1209.png",
  Bk = "/assets/png/2-56c65cac.png",
  Gk = "/assets/png/1-1d1a5d31.png",
  Lk = "/assets/png/0-6ae0fe8d.png",
  kk = "/assets/png/2-4468ebef.png",
  Tk = "/assets/png/1-c4fc5e42.png",
  Ik = "/assets/png/0-6ae0fe8d.png",
  Rk = "/assets/png/4-d7dc1f2c.png",
  Ck = "/assets/png/0-6ae0fe8d.png",
  Pk = "/assets/png/2-4468ebef.png",
  Dk = "/assets/png/1-c4fc5e42.png",
  Ek = "/assets/png/0-6ae0fe8d.png",
  xk = "/assets/png/3_a-c660a4ba.png",
  Ok = "/assets/png/3-5d3eefed.png",
  Mk = "/assets/png/3_a-9cfda764.png",
  Wk = "/assets/png/3-53264d1a.png",
  Uk = "/assets/png/2_a-30530371.png",
  Nk = "/assets/png/2-e4cd29e8.png",
  Vk = "/assets/png/1-7f0714b7.png",
  Fk = "/assets/png/1-e146eac4.png",
  Hk = "/assets/png/4-80aab9b6.png",
  qk = "/assets/png/3-b1060d1a.png",
  zk = "/assets/png/2-9316f0a9.png",
  Kk = "/assets/png/1-7f0714b7.png",
  Xk = "/assets/png/4-ad3ed5fc.png",
  Jk = "/assets/png/4-ad3ed5fc.png",
  Yk = "/assets/png/3_a-c660a4ba.png",
  Qk = "/assets/png/3-5d3eefed.png",
  Zk = "/assets/png/2_a-290b2514.png",
  eT = "/assets/png/2-bd839975.png",
  sT = "/assets/png/1_a-c3c7a041.png",
  tT = "/assets/png/1-a2189950.png",
  _s = {
    MAINCOLOR: "damanBlueStyle",
    "../assets/damanBlueStyle/icons/wallet/withdrawHistory.png": ga.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/widthdrawBlue.png": ra.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/wallets.png": la.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/usdt1.png": da.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/usdt.png": ua.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/upi.png": ma.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/trx.png": wa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/transf_amount.png": ba.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/tip.png": va.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/thirdPartyLogo.png": ya.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/succeed.png": fa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/slot_wallet.png": Aa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/selectupi.png": ha.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/saveWallet.png": _a.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/safety.png": Sa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/recharge_usdt.png": ja.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/rechargeIcon.png": $a.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/rechargeHistory.png": Ba.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/quickpay2.png": Ga.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/phone.png": La.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/onlinepay.png": ka.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/network.png": Ta.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/name.png": Ia.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/moneyicon.png": Ra.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/ifscCode.png": Ca.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/historyHead.png": Pa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/hint.png": Da.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/gift.png": Ea.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/email.png": xa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/bankCard.png": Oa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/bank.png": Ma.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/balance.png": Wa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/ar2.png": Ua.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/ar1.png": Na.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/ar-TotalAssetsBg.png": Va.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/anotherNamer.png": Fa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/all.png": Ha.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/address.png": qa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/YGG.png": za.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/Wickets9.png": Ka.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/WM_Video.png": Xa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/V8Card.png": Ja.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/TotalAssetsBg.png": Ya.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/TB_Chess.png": Qa.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/TB.png": Za.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/SaBa.png": eo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/SEXY_Video.png": so.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/QRCode.png": to.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/PP.png": no.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/PG.png": ao.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/MG.png": oo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/Lottery.png": po.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/JILI.png": co.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/JDB.png": io.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/IM.png": go.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/HB.png": ro.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/EVO_Video.png": lo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/EVO_Electronic.png": uo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/EVOPlay.png": mo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/DG.png": wo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/Card365.png": bo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/CQ9.png": vo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/CMD.png": yo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/BetSoft.png": fo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/Ar_Gift.svg": Ao.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/ArPayBackground.svg": ho.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/AG_Video.png": _o.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/AG.png": So.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/888888902.png": jo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/tabBarIcons/wallet.svg": $o.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/tabBarIcons/promotion.svg": Bo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/tabBarIcons/main.svg": Go.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/tabBarIcons/home.svg": Lo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/tabBarIcons/chat.svg": ko.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/tabBarIcons/activity.svg": To.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/redHome/redhomeN.svg": Io.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/xosoCity.png": Ro.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType9.svg": Co.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType8.svg": Po.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType7.svg": Do.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType6.svg": Eo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType5.svg": xo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType4.svg": Oo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType3.svg": Mo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType2.svg": Wo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType12.svg": Uo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType11.svg": No.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType10.svg": Vo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/weeklyType1.svg": Fo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/warning2.png": Ho.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/wallet.png": qo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/ticketstar.png": zo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/tabBarBg.png": Ko.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/superjackpotHome.png": Xo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/succeed.png": Jo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/searchIcon.png": Yo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/rule.png": Qo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/right_arrow.png": Zo.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/playactive.svg": ep.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/play.svg": sp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/palybg.png": tp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/notify.svg": np.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/icon-question.png": ap.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/hot.svg": op.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/headerBg.png": pp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/greenNotify.svg": cp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/empty.png": ip.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/daman-lottery_background.png":
      gp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/public/copy.png": rp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/bookicon.png": lp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/before_cire.png": dp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/anbg.svg": up.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/activityIcon1.png": mp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/Triangle.png": wp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/wingoissue.png": bp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/wingoPreSaleBg.png": vp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/walletbg.png": yp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/trxbg.png": fp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/time_a.png": Ap.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/time.png": hp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/public3Wallet.svg": _p.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/noticeBarSpeaker.svg": Sp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/messageIcon.svg": jp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/logout.png": $p.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/icon_sevice.png": Bp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/bj.png": Gp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/bgActive.png": Lp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/bg.png": kp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/arrow-right.svg": Tp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/all.png": Ip.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/home/DailyProfitRankStage.png": Rp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/wallet.png": Cp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/u2.png": Pp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/u1.png": Dp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/trucktick.png": Ep.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/team_port.png": xp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/team_partner.png": Op.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/subordinate.png": Mp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/shuoming.png": Wp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/serverbg.png": Up.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/server.png": Np.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/searchIcon1.png": Vp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/roundIcon.png": Fp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/roundIcon copy.png": Hp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/rebateRatio.png": qp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/promotionbg.png": zp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/poster.png": Kp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/money.png": Xp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/lv.png": Jp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/invite_reg.png": Yp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/groupSubordinate.png": Qp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/extraBonus.png": Zp.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/directSubordinate.png":
      e1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/promotion/copy_code.png": s1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/commission.png": t1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/bg1.png": n1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/promotion/bank.png": a1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/zs.png": o1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/withdrawHistory.png": p1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/wallets.png": c1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/wallet2.png": i1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/wallet1.png": g1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/wallet.png": r1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/versionUpdate.png": l1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/verify.png": d1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/vault.png": u1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/trianglered.png": m1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/tradeHistory.png": w1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/super_1.png": b1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/superJackpot.png": v1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/statsIcon.png": y1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/settingCenter.png": f1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/serviceCenter.png": A1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/ruleicon.png": h1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/riskProtocal.png": _1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/refresh.png": S1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/privacyIcon.png": j1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/pointsSmallIncon.png": $1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/points.png": B1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/phoneactive.png": G1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/phone.png": L1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/password.png": k1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/otheractive.png": T1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/other.png": I1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/orderIcon.png": R1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/notifyIcon.png": C1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/notificationIcon.png": P1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/notificationCenter.png": D1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/mylottery.png": E1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/myWithdrawHistory.png": x1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/moonBar.png": O1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/messageReadAll.svg": M1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/messageIconRed.svg": W1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/messageIconIsRead.svg": U1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/messageGarbage.svg": N1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/love2.png": V1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/love.png": F1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/languageIcon.png": H1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/inviterule.svg": q1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/inviterecord.svg": z1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/invitation.png": K1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconservr.png": X1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconservr-r.png": J1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconSlots.png": Y1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconRealPerson.png": Q1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconPhysics.png": Z1.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconMiniGame.png": ec.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconLottery.png": sc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconFishing.png": tc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconElectric.png": nc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/iconChess.png": ac.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/icon.png": oc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/gverifyDownload.png": pc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/guide.png": cc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/googleVerifyBg.png": ic.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/googleValidation.png": gc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/googleKey.png": rc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/gold.png": lc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/giftIcon.png": dc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/gift.png": uc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/gameStatsSteps.png": mc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/gRecord.png": wc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/forgetpassword.png": bc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/feedbackImg.png": vc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/eyeVisible.png": yc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/eyeInvisible.png": fc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/emailactive.png": Ac.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/email.png": hc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/editPswIcon.png": _c.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/editPhoneIcon.png": Sc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/downApp.png": jc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/down.png": $c.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/diamond.png": Bc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/dialogNickname.png": Gc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/customerBg.png": Lc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/customer.png": kc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/crown.png": Tc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/cps.png": Ic.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/copyIcon.png": Rc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/chessStepIcon.png": Cc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/cellphone.png": Pc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/betResultStep.png": Dc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/betInfoStep.png": Ec.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/betHistory.png": xc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/avatar1.png": Oc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/aboutBg.png": Mc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/about.png": Wc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/VipIcon.png": Uc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/TotalAssetsBg.png": Nc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/StrongBoxRecordBg.png": Vc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/EmailIcon.png": Fc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype7.png": Hc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype6.png": qc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype5.png": zc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype4.png": Kc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype3.png": Xc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype2.png": Jc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/CStype1.png": Yc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/goldWHome/notify.png": Qc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/goGame/right.svg": Zc.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/goGame/left.svg": ei.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/goGame/backButton.svg": si.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/goGame/Side_Close.png": ti.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/common/upload_icon.png": ni.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/common/rulehead.svg": ai.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/common/agree-a.png": oi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/blueHome/redhomeN.svg": pi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/blueHome/messageActive.svg": ci.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/blueHome/changlong.svg": ii.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/headerBg.png": gi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/avatar.png": ri.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/active_b.svg": li.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/videoActive.png": di.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/video.png": ui.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/tabActive.png": mi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/tab.png": wi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/sportActive.png": bi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/sport.png": vi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/slotActive.png": yi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/slot.png": fi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/popularActive.png": Ai.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/popular.png": hi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/num6.png": _i.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/num5.png": Si.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/num4.png": ji.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/num3.png": $i.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/num2.png": Bi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/num1.png": Gi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/n6.png": Li.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/n5.png": ki.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/n4.png": Ti.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/n3.png": Ii.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/n2.png": Ri.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/n1.png": Ci.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/missningBg.png": Pi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/lotteryActive.png": Di.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/lottery.png": Ei.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/flashActive.png": xi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/flash.png": Oi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/fishActive.png": Mi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/fish.png": Wi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/chessActive.png": Ui.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/chess.png": Ni.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/bgActive.png": Vi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/bg.png": Fi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/allActive.png": Hi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/AllGames/all.png": qi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/bg2.png": zi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/8.png": Ki.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/6.png": Xi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/5.png": Ji.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/4.png": Yi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/3.png": Qi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/21.png": Zi.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/10.png": e2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/withdrawType/1.png": s2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/wave_icon.png": t2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/wave.png": n2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/slot_wallet.png": a2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/kbz_icon.png": o2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/kbz.png": p2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/bank.png": c2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/wallet/detail/appeal.png": i2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/weal5.png": g2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/weal4.png": r2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/weal3.png": l2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/5.png": d2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/4.png": u2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/3.png": m2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/2.png": w2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/weal/1.png": b2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/superJackpot/super_4.png": v2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/superJackpot/super_3.png": y2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/superJackpot/super_2.png": f2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/myWelfare/welfare5.png": A2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/myWelfare/welfare4.png": h2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/myWelfare/welfare3.png": _2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/myWelfare/welfare2.png": S2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/myWelfare/welfare1.png": j2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/Circle-2.png":
      $2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/main/RebateDetails/Circle-1.png":
      B2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/main/RebateDetails/9.png": G2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/8.png": L2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/7.png": k2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/6.png": T2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/5.png": I2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/4.png": R2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/3.png": C2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/2.png": P2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/10.png": D2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/1.png": E2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/RebateDetails/0.png": x2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/main/Laundry/vector.png": O2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/Turntable/turntableTitle.svg":
      M2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/Turntable/frame.svg": W2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/Turntable/activityRule.svg":
      U2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/Turntable/activityIntro.svg":
      N2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/Turntable/activityDetail.svg":
      V2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/verified.png":
      F2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/redeemdBg.png":
      H2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/redDiamondSm.png":
      q2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/pointsIcon.png":
      z2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/point_2.png": K2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/PointMall/point_1.png": X2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/PointMall/plus.png": J2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/PointMall/orderItemDetail.png":
      Y2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/minus.png": Q2.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/activity/PointMall/lotteryReceiver.png":
      Z2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/lotteryContact.png":
      eg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/headerBodyBg.png":
      sg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/damanBlueStyle/icons/activity/PointMall/edit.png": tg.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/Iconsax/Bulk/ticketstar.png": ng.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/damanBlueStyle/icons/public/Iconsax/Bulk/warning2.png":
      ag.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/wallets.png": og.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/serverIcon.png": pg.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/hint.png": cg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/copy.svg": ig.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar_success.png": gg.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/ar_appeal.png": rg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar2.png": lg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar1.png": dg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/YGG.png": ug.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Wickets9.png": mg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/WM_Video.png": wg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/V8Card.png": bg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/TB_Chess.png": vg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/TB.png": yg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/SaBa.png": fg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/SEXY_Video.png": Ag.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/PP.png": hg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/PG.png": _g.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/MG.png": Sg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Lottery.png": jg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/JILI.png": $g.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/JDB.png": Bg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/IM.png": Gg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/HB.png": Lg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/EVO_Video.png": kg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/EVO_Electronic.png": Tg.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/EVOPlay.png": Ig.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/DG.png": Rg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Card365.png": Cg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/CQ9.png": Pg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/CMD.png": Dg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/BetSoft.png": Eg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Ar_Gift.svg": xg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ArPayBackground.svg": Og.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/AG_Video.png": Mg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/AG.png": Wg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/wallet.svg": Ug.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/tabBarBg.png": Ng.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/promotion.svg": Vg.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/main.svg": Fg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/home.svg": Hg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/chat.svg": qg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/activity.svg": zg.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/welfareBG.png": Kg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/wallet1.png": Xg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/wallet.png": Jg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/succeed.png": Yg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/safeBox.png": Qg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/love2.png": Zg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/love.png": er.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/insurance1.png": sr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/insurance.png": tr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/gold.png": nr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/giftBag.png": ar.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/diamond.png": or.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/crown.png": pr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/bottomBg.png": cr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/award.png": ir.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/MonthlyReward.png": gr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/searchBarIcons/searchIcon1.png": rr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/searchBarIcons/searchIcon.png": lr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/wallet.png": dr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/u2.png": ur.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/u1.png": mr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/team_port.png": wr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/team_partner.png": br.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/teamPartnerBg.png": vr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/subordinate.png": yr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/serverbg.png": fr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/server.png": Ar.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/searchIcon.png": hr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/receive.png": _r.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rebateRatio.png": Sr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rank-3.png": jr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rank-2.png": $r.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rank-1.png": Br.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionbg.png": Gr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/money.png": Lr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/invite_reg.png": kr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/invite.png": Tr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/invitation.png": Ir.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/group.png": Rr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/direct.png": Cr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/crown.png": Pr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/copy_code.png": Dr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/commission.png": Er.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/verify.png": xr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/password.png": Or.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/leftArrow.png": Mr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/invitation.png": Wr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/iconservr.png": Ur.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/iconservr-r.png": Nr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/googleIcon.png": Vr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/eyeVisible.png": Fr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/eyeInvisible.png": Hr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/dl_bg.png": qr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/cellphone.png": zr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_wallet_select.svg": Kr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wg_wallet.svg": Xr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_promotion_select.svg": Jr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wg_promotion.svg": Yr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_main_select.svg": Qr.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wg_main.svg": Zr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_home_select.svg": e6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wg_home.svg": s6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_activity_select.svg": t6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wg_activity.svg": n6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType9.svg": a6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType8.svg": o6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType7.svg": p6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType6.svg": c6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType5.svg": i6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType4.svg": g6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType3.svg": r6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType2.svg": l6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType12.svg": d6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType11.svg": u6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType10.svg": m6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType1.svg": w6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/watchCollection.svg": b6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/warningTriangle.svg": v6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wallet_game.svg": y6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet2.svg": f6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet1.svg": A6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet.svg": h6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/voice.svg": _6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/vipRebateLight.svg": S6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/vipRebateDark.svg": j6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/video.svg": $6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/versionUpdate.svg": B6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/verify.svg": G6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/user.svg": L6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdtLogo3.svg": k6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt4.svg": T6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt3.svg": I6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt2.svg": R6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt1.svg": C6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/uploadIcon.svg": P6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/upi.svg": D6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/trxquestion.svg": E6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/trxGame.svg": x6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/transf_amount.svg": O6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/ticket.svg": M6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/super_no.svg": W6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/super_1.svg": U6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/superJackpotRule.svg": N6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/success.svg": V6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/subtract.svg": F6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/sport.svg": H6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/slot.svg": q6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/shuoming.svg": z6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/share.svg": K6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/serverTicket1.svg": X6.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/serverTicket.svg": J6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/serverIcon.svg": Y6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/searchBtn.svg": Q6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/saveWallet.svg": Z6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/safeIcon.svg": e5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ruleHead.svg": s5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/round.svg": t5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/rightTriangle.svg": n5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/rightCircle.svg": a5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/resultanbg.svg": o5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/refreshBalance.svg": p5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/recordFilter.svg": c5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/receivedSuccessfuly.svg": i5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/rebateRealTime.svg": g5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/rebate.svg": r5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_wallet_a.svg": l5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/raja_wallet.svg": d5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_profile_a.svg": u5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/raja_profile.svg": m5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_games_a.svg": w5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_games.svg": b5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_affiliate_a.svg": v5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/raja_affiliate.svg": y5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/raja_activity_a.svg": f5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/raja_activity.svg": A5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/quickpay2.svg": h5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/promotionData.svg": _5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/promotion2.svg": S5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/promotion.svg": j5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointRule.svg": $5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointRecord.svg": B5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointPlus.svg": G5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointMinus.svg": L5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointFrame.svg": k5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointDetail.svg": T5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointCopy.svg": I5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointCancel.svg": R5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/point.svg": C5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pix.svg": P5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_wallet.svg": D5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_promotion.svg": E5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/pink_main.svg": x5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_home.svg": O5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_activity.svg": M5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/phone.svg": W5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_wallet.svg": U5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_wallet.svg": N5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/p5_sel_promotion.svg": V5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/p5_sel_main.svg": F5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_home.svg": H5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_activity.svg": q5.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/p5_promotion.svg": z5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_main.svg": K5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_home.svg": X5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_activity.svg": J5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_wallet.svg": Y5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_promotion.svg": Q5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_main.svg": Z5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_home.svg": el.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_activity.svg": sl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3more.svg": tl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3a_r.svg": nl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3a_l.svg": al.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_wallet_a.svg": ol.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_wallet.svg": pl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_promotion_a.svg": cl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/p3_promotion.svg": il.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_main_a.svg": gl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_main.svg": rl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_home_a.svg": ll.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_home.svg": dl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_activity_a.svg": ul.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/p3_activity.svg": ml.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Service.svg": wl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Notification.svg": bl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/p3Language.svg": vl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Guide.svg": yl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Down.svg": fl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3About.svg": Al.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/output.svg": hl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/odds.svg": _l.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/oddBg.svg": Sl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/notificationIcon.svg": jl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/noticeBarSpeaker.svg": $l.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/nbg.svg": Bl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/navInfomation.svg": Gl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/name.svg": Ll.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/more.svg": kl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/messageIconRed.svg": Tl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/messageGarbage.svg": Il.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/message.svg": Rl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuSlots.svg": Cl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuOriginals.svg": Pl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/menuMore.svg": Dl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuLottery.svg": El.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuHome.svg": xl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/maintenace.svg": Ol.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/main.svg": Ml.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/lottyWallet.svg": Wl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/lottery.svg": Ul.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/invitation.svg": Nl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/income.svg": Vl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ifscCode.svg": Fl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/iconservr-r.svg": Hl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/icon_customer3.svg": ql.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/icon_addwallet.svg": zl.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/howpay.svg": Kl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/hotIcon.svg": Xl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/hot.svg": Jl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/home.svg": Yl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/historyHead.svg": Ql.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/hint.svg": Zl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/googleValidation.svg": e0.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/giftHistory.svg": s0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_moneyb.svg": t0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_money.svg": n0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/flash.svg": a0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/fish.svg": o0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/eye.svg": p0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/errorTip.svg": c0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/empty.svg": i0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/email.svg": g0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/editPswIcon.svg": r0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/editMain.svg": l0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/edit.svg": d0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/dropDown.svg": u0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/downArrow.svg": m0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/down1.svg": w0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/down.svg": b0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/diamond.svg": v0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/dialogNickname.svg": y0.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/detail.svg": f0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/deleteMain.svg": A0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customer_b.svg": h0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customer_2.svg": _0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customerPublic.svg": S0.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/customer1.svg": j0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/copy4d.svg": $0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/copy.svg": B0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/close.svg": G0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/clock_b.svg": L0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/chess.svg": k0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/chat.svg": T0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/changlong.svg": I0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/cart.svg": R0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bookicon.svg": C0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankWave.svg": P0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankTitle.svg": D0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankName.svg": E0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankKbz.svg": x0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankHeader.svg": O0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankCard.svg": M0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bank.svg": W0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/arrLeft.svg": U0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/arpay2.svg": N0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/arpay1.svg": V0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/anbg.svg": F0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/all.svg": H0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/address.svg": q0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/add_icon.svg": z0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/activityWallet.svg": K0.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/activityNote.svg": X0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/activity.svg": J0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/act_notic.svg": Y0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/actNewGift.svg": Q0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_private.svg": Z0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_fast.svg": e7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_download.svg": s7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_down.svg": t7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/SearchTrx.svg": n7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Rectan.svg": a7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Line.svg": o7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Language.svg": p7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Circle2.svg": c7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Circle1.svg": i7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ArPayBackground.svg": g7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/languages/zh.png": r7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/vi.png": l7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/th.png": d7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/rus.png": u7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/pk.png": m7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/ph.png": w7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/my.png": b7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/md.png": v7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/korea.png": y7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/japan.png": f7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/id.png": A7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/hd.png": h7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/en.png": _7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/bra.png": S7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/bd.png": j7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/ar.png": $7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/tabBarBg.png": B7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/promotionBg.png": G7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/logo.png": L7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/gameDefault.png": k7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/empty.png": T7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/avatar1.png": I7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/avatar.png": R7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/All.png": C7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/zs.png": P7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/withdrawHistory.png": D7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/widthdrawBlue.png": E7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/wallets.png": x7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/wallet.png": O7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip9.png": M7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip8.png": W7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip7.png": U7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip6.png": N7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip5.png": V7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip4.png": F7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip3.png": H7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip2.png": q7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip10.png": z7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip1.png": K7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/versionUpdate.png": X7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/vaultSmallIcon.png": J7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/vault.png": Y7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/uploadCamera.png": Q7.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/unfinish.svg": Z7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/trianglered.png": e4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/transferOutIcon.png": s4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/transferInIcon.png": t4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/tradeHistoryShadow.png": n4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/tradeHistory.png": a4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/tipIcon.png": o4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/support.png": p4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/super_no.png": c4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/superJackpotRulebg.png": i4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/superJackpot.png": g4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/superIcon.png": r4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/sugguesions.png": l4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/suggestionCenter.png": d4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/statsIcon.png": u4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/sliderNum.png": m4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/settings.png": w4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/settingCenter.png": b4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/serviceCenter.png": v4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/safetyIcon.png": y4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/riskProtocal.png": f4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/righticon.svg": A4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/redPacketShadow.png": h4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/redPacket.png": _4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/recordIcon.png": S4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/rechargeIcon.png": j4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/rechargeHistory.png": $4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/pswLock.png": B4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/productOrders.png": G4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/privacyIcon.png": L4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/pointsSmallIncon.png": k4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/points.png": T4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/orderIcon.png": I4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/numberBG.png": R4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/notifyIcon.png": C4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/notificationIcon.png": P4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/notificationCenter.png": D4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/notification.png": E4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/nextIcon.png": x4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/mylottery.png": O4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/mycoins_bg.png": M4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/myWithdrawHistory.png": W4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/myCoin.png": U4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/moonBar.png": N4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/messageIconIsRead.svg": V4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/lotteryIcon.png": F4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/lotteryHistory.png": H4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/loterry.png": q4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/logout.png": z4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/laundryIcon.png": K4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/languageSwitch.png": X4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/languageIcon.png": J4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/kBg.png": Y4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/inviteIcon.png": Q4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/invitation_icon.png": Z4.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/invitation_bg.png": e3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/invitationBonus.png": s3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/incomeIcon.png": t3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconSlots.png": n3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconRealPerson.png": a3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/iconPhysics.png": o3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconMiniGame.png": p3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/iconLottery.png": c3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconFishing.png": i3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconElectric.png": g3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/iconChess.png": r3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/gverifyDownload.png": l3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/guide.png": d3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/googleVerifyBg.png": u3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/googleValidation.png": m3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/googleKey.png": w3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/giftIcon.png": b3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/giftFolder.png": v3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/gift.png": y3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/gameStatsSteps.png": f3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/feedbackImg.png": A3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/exchangeIcon.png": h3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/editPswIcon.png": _3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/editPhoneIcon.png": S3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/editPencil.png": j3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/dropDown.png": $3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/down.png": B3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/dialogNickname.png": G3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/customerBg.png": L3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/cps.png": k3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/copyIcon.png": T3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/copy.png": I3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/close_B.png": R3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/close.png": C3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/clearIcon.png": P3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/clear.png": D3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/chessStepIcon.png": E3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/bindemailsuccess.png": x3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/betSportStep.png": O3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/betSixInfoStep.png": M3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/betResultStep.png": W3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/betInfoStep.png": U3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betHistoryShadow.png": N3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/betHistory.png": V3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/balanceIcon.png": F3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/ar_invitation_bg.png": H3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/aboutCenter.png": q3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/aboutBg.png": z3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/about.png": K3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/VipIcon.png": X3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/TotalAssetsBg.png": J3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Subtract.png": Y3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/StrongBoxRecordBg.png": Q3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/MyCoinsBanner2.png": Z3.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/MyCoinsBanner.png": e8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/GoogleTip.png": s8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/GoogleSubtract.png": t8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/GooglePolygon.png": n8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/EmailIcon.png": a8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype7.png": o8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype6.png": p8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype5.png": c8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype4.png": i8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype3.png": g8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype2.png": r8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype1.png": l8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/10.png": d8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/winning.png": u8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/electronic/video.png": m8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/sport.png": w8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/slot.png": b8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/profit.png": v8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/electronic/platformList.png": y8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/electronic/no3.png": f8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/no2.png": A8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/no1.png": h8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/lottery.png": _8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/electronic/flash.png": S8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/fish.png": j8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/clicksTopList.png": $8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/electronic/chess.png": B8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/bigaward.png": G8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/electronic/all.png": L8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/ios3.png": k8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/ios2.png": T8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/ios1.png": I8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/empty.png": R8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/banner.png": C8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/wheel.png": P8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/vector.png": D8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/upload_icon.png": E8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/upload_add.png": x8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/switch.png": O8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/newmissingviebg.png": M8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/newmissingbg.png": W8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/missningLBg.png": U8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/missningBg.png": N8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/missingviebg.png": V8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/close.png": F8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/ar_wallet.png": H8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/win.png": q8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/u18.png": z8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/turntable_icon.png": K8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/tg_bg.png": X8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/search.svg": J8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/reward_bg.png": Y8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/rewardCenter.png": Q8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/public3MsgIcon.png": Z8.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/promp_right.png": e9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/promp_left.png": s9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/promp_bg.png": t9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/profit.png": n9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/p3morewg.png": a9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/p3morebg.png": o9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/p3ar037morebg.png": p9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/notice.png": c9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/minGame.png": i9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/luck_bg.png": g9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/loteria.png": r9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/fullscreen.png": l9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/exitfullscreen.png": d9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/changlong_icon.png": u9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/changlong_bg.png": m9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/changlong51_bg.jpg": w9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/banner.png": b9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/backButton.svg": v9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/award.png": y9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/avatar.png": f9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/ar-notice.png": A9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/Group20225.svg": h9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/Go.svg": _9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/DailyProfitRankStage.png": S9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/vsImg.jpg": j9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/video1.png": $9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/updateImg.png": B9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/step.png": G9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/load.png": L9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/supportService.png": k9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/invite_wheel.png": T9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/active_b.svg": I9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/active.svg": R9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/₫.png": C9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/฿.png": P9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/unchecked.png": D9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/succeed.png": E9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/safety.png": x9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/refresh.png": O9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/pwd.png": M9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/momo.png": W9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/line.png": U9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/historyHead.png": N9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/fail.png": V9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/delete.png": F9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/clear.png": H9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/checked.png": q9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bg2.png": z9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bg1.png": K9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankLogo1.png": X9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/balance.png": J9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/add.png": Y9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/E-wallet.png": Q9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/BankCard.png": Z9.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/tobePay/thirdPartyLogo.png": ed.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/tobePay/fast.png": sd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/tobePay/explain.png": td.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/tobePay/QRCode.png": nd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/wallettobank.png": ad.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/wait.png": od.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/usdt.png": pd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/upt_tip.png": cd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/upi_recharge.png": id.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/unit_icon.png": gd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/unit_active.png": rd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/trx.png": ld.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/transf_amount.png": dd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/tip.png": ud.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/timeout.png": md.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/success.png": wd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/shuoming.png": bd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup4_active.png": vd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup4.png": yd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup3_active.png": fd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup3.png": Ad.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup2_active.png": hd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup2.png": _d.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/setup1.png": Sd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/saveWallet.png": jd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/sanjiao.png": $d.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/refresh.png": Bd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/quickpay2.png": Gd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/quickpay.png": Ld.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/qrcode_active.png": kd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/qrcode.png": Td.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/point.png": Id.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/phone_pe.png": Rd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/paytm.png": Cd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/other_bank.png": Pd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/onlinepay_active.png": Dd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/onlinepay2.png": Ed.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/onlinepay.png": xd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/online_active.png": Od.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/moneyicon.png": Md.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/mainChain.png": Wd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/left_arrow.png": Ud.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/google_pay.png": Nd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/gift.png": Vd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/fail.png": Fd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/ewallet.png": Hd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/eth.png": qd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail_upi_icon.png": zd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/copy1.png": Kd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/copy.png": Xd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/coin.png": Jd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/close.png": Yd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/clean.png": Qd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/cip.png": Zd.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/chongzhi.png": eu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/cancel.png": su.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/banktobank.png": tu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/bank_card_active.png": nu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/bank_card.png": au.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/appeal_state.png": ou.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/appeal.png": pu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/amount_error.png": cu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/C2Chelp.png": iu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_wallet_a.png": gu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_wallet.png": ru.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_main_a.png": lu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_main.png": du.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_index_a.png": uu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_index.png": mu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_home_a.png": wu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_home.png": bu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_activity_a.png": vu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_activity.png": yu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/p5bgTabBar/home.png": fu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/wallet_active.png": Au.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/wallet.png": hu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/promotion_active.png": _u.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/promotion.png": Su.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/main_active.png": ju.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/main.png": $u.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/home_active.png": Bu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/home.png": Gu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/activity_active.png": Lu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/tabBarIcons/okwin/activity.png": ku.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/weal/weal5.png": Tu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/weal4.png": Iu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/weal3.png": Ru.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/5.png": Cu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/4.png": Pu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/3.png": Du.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/2.png": Eu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/1.png": xu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/ununlocked.png": Ou.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/HaveReached.png": Mu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/myWelfare/welfare5.png": Wu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/myWelfare/welfare4.png": Uu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/myWelfare/welfare3.png": Nu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/myWelfare/welfare2.png": Vu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/myWelfare/welfare1.png": Fu.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/grade/9.png": Hu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/8.png": qu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/7.png": zu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/6.png": Ku.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/5.png": Xu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/4.png": Ju.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/3.png": Yu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/2.png": Qu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/10.png": Zu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/1.png": em.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/0.png": sm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/9.png": tm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/8.png": nm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/7.png": am.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/6.png": om.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/5.png": pm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/4.png": cm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/3.png": im.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/2.png": gm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/10.png": rm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/1.png": lm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/RebateDetails/0.png": dm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/lv.png": um.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv7.png": mm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv6.png": wm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv5.png": bm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv4.png": vm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv3.png": ym.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv2.png": fm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv1.png": Am.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rule/Lv0.png": hm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rankList/wallet.png": _m.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rankList/groupSubordinate.png": Sm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rankList/extraBonus.png": jm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/rankList/directSubordinate.png": $m.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/promotionShare/trucktick.png": Bm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/promotionShare/poster.png": Gm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/promotionShare/logo.png": Lm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/promotionShare/bg1.png": km.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/promotionShare/bank.png": Tm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/commission/line.png": Im.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/commission/bg.png": Rm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/commission/betInfoStep.png": Cm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/TeamReport/roundIcon.png": Pm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/TeamPartner/box.png": Dm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/promotion/TeamPartner/banner.png": Em.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/tip.png": xm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/phoneactive.png": Om.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/phone.png": Mm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/otheractive.png": Wm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/other.png": Um.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/forgetpassword.png": Nm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/emailnumber.png": Vm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/emailactive.png": Fm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/email.png": Hm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/login/newlogin/customer.png": qm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/TurnTable/refresh.svg": zm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/TurnTable/eventDescriptionArrow.svg": Km.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/TurnTable/activityRulesBackground.svg": Xm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/TurnTable/activityRule.svg": Jm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/TurnTable/activityIntro.svg": Ym.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/TurnTable/activityDetail.svg": Qm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/SuperJackpot/winningStar.svg": Zm.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/SuperJackpot/rule.svg": ew.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/YGG.svg": sw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/Wickets9.svg": tw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/WM_Video.svg": nw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/WM.svg": aw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/V8Card.svg": ow.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/TURBO.svg": pw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/TB_Chess.svg": cw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/TB.svg": iw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Spribe2.svg": gw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/SaBa.svg": rw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/SPRIBE.svg": lw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/SEXY_Video.svg": dw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/SEXY.svg": uw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/PP.svg": mw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/PG.svg": ww.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Marbles.svg": bw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/MG_Video.svg": vw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/MG_Fish.svg": yw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/MG.svg": fw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Lottery.svg": Aw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/KoolBet.svg": hw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/JOKER.svg": _w.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/JILI.svg": Sw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/JDB.svg": jw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/INOUT.svg": $w.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/IM.svg": Bw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Hacksaw.svg": Gw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/HackMD.svg": Lw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/HB.svg": kw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/G9.svg": Tw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/EVO_Video.svg": Iw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/EVO_Electronic.svg": Rw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/EVOPlay.svg": Cw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/EVO.svg": Pw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/DG.svg": Dw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Card365.svg": Ew.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/CQ9.svg": xw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/CMD.svg": Ow.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/BetSoft.svg": Mw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/BGAMING.svg": Ww.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/BB.svg": Uw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/AG_Video.svg": Nw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/AG_Sport.svg": Vw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/AG_Fish.svg": Fw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/AG_Electronic.svg": Hw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/game_logo/AG.svg": qw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/team_port.svg": zw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/team_partner.svg": Kw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/teamSubordinates.svg": Xw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/subordinate.svg": Jw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/server.svg": Yw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/rebateRatio.svg": Qw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/invite_reg.svg": Zw.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/directSubordinates.svg": eb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/copy_Code.svg": sb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Promotion/commission.svg": tb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/widthdrawBlue.svg": nb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/weal5.svg": ab.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/weal4.svg": ob.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/weal3.svg": pb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/wallets.svg": cb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/versionUpdateIcon.svg": ib.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/vault.svg": gb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/tradeHistory.svg": rb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/tournament.svg": lb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/statsIcon.svg": db.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/rechargeIcon.svg": ub.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/rechargeHistory.svg": mb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/productCode.svg": wb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/pointsSmallIncon.svg": bb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/points.svg": vb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/notification.svg": yb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/myWithdrawHistory.svg": fb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/myDraw.svg": Ab.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/messageIcon.svg": hb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/love.svg": _b.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/logout.svg": Sb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/language.svg": jb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/googleIcon.svg": $b.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/gifts.svg": Bb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/editIcon.svg": Gb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/diamond.svg": Lb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/crown.svg": kb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/betHistory.svg": Tb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/VipIcon.svg": Ib.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/ar14-winner.svg": Rb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-withdraw_btn.svg": Cb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-winner.svg": Pb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-vip.svg": Db.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-up.svg": Eb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-turntable.svg": xb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-top1.svg": Ob.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-refresh.svg": Mb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-recharge_btn.svg": Wb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-rank_bg.svg": Ub.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-rank.svg": Nb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-point.svg": Vb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-notice.svg": Fb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-message_notice.svg": Hb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-homeDown.svg": qb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-gold.svg": zb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/91club/91-down.svg": Kb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/promotion/totalIncomeBg.png": Xb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/promotion/heroImg.png": Jb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/main/headerBg.png": Yb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/stage.png": Qb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/place3.png": Zb.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/place2.png": ev.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/place1.png": sv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/crown3.png": tv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/crown2.png": nv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/crown1.png": av.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/border3.png": ov.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/border2.png": pv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/images/DailyProfitRank/border1.png": cv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/transAction/trans.png": iv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/transAction/ar-trans.png": gv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Super/icon.png": rv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Super/close.svg": lv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Super/Grouptip.png": dv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Super/Group.png": uv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/zs.png": mv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/wallet.png": wv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Laundry/superjackpotHome.png": bv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Laundry/ruleicon.png": vv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Laundry/right.png": yv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Laundry/promptImg.png": fv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Laundry/Vector.png": Av.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/7.png": hv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/6.png": _v.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/5.png": Sv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/47.png": jv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/46.png": $v.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/45.png": Bv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/44.png": Gv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/42.png": Lv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/41.png": kv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/4.png": Tv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/38.png": Iv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/37.png": Rv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/35.png": Cv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/30.png": Pv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/3.png": Dv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/29.png": Ev.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/27.png": xv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/26.png": Ov.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/24.png": Mv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/23.png": Wv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/22.png": Uv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/21.png": Nv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/20.png": Vv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/2.png": Fv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/19.png": Hv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/18.png": qv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/17.png": zv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/16.png": Kv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/12.png": Xv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/11.png": Jv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/10.png": Yv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/1.png": Qv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/-1.png": Zv.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/Avatar/9.png": ey.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/8.png": sy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/7.png": ty.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/6.png": ny.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/5.png": ay.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/4.png": oy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/3.png": py.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/20.png": cy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/2.png": iy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/19.png": gy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/18.png": ry.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/17.png": ly.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/16.png": dy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/15.png": uy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/14.png": my.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/13.png": wy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/12.png": by.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/11.png": vy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/10.png": yy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/1.png": fy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_wallet_a.png": Ay.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_wallet.png": hy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_promotion_a.png": _y.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_promotion.png": Sy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_main_a.png": jy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_main.png": $y.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_home.png": By.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_activity_a.png": Gy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/yellow_activity.png": Ly.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_wallet_a.png": ky.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_wallet.png": Ty.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_promotion_a.png": Iy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_promotion.png": Ry.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_main_a.png": Cy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_main.png": Py.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_home.png": Dy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_activity_a.png": Ey.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/t6_activity.png": xy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/ar064_home_a.png": Oy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/common/tabbar/ar064_home.png": My.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwin2/home2.svg": Wy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwin2/home1.svg": Uy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/winning.png": Ny.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/video_icon.png": Vy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/video.png": Fy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/sport_icon.png": Hy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/sport.png": qy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/slot_icon.png": zy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/slot.png": Ky.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/rank_icon.png": Xy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/popular_icon.png": Jy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/popular.png": Yy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/notice.png": Qy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/message.png": Zy.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/lottery_icon.png": ef.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/lottery.png": sf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/flash_icon.png": tf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/flash.png": nf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/fish_icon.png": af.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/fish.png": of.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/download.png": pf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/crown3.png": cf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/crown2.png": gf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/crown1.png": rf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/chess_icon.png": lf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/chess.png": df.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/SMG_wildfireWins.png": uf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/SMG_777Surge.png": mf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/SMG_10000Wishes.png": wf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/Lottery_WinGo.png": bf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/DailyProfitRankStage.png": vf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/98.png": yf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/9014.png": ff.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/9013.png": Af.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/800.png": hf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/51.png": _f.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/42.png": Sf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/223.png": jf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/14025.png": $f.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/109.png": Bf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/103.png": Gf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/okwinHome/100.png": Lf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/icons/wingo.png": kf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/trx.png": Tf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/top3.png": If.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/top2.png": Rf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/top1.png": Cf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/search_icon.svg": Pf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/icons/message.svg": Df.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/icons/k3.png": Ef.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/5d.png": xf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/wingo4.png": Of.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/wingo30.png": Mf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/wingo3.png": Wf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/wingo2.png": Uf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/wingo1.png": Nf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/trx16.png": Vf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/trx15.png": Ff.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/trx14.png": Hf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/trx13.png": qf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/rule-r.png": zf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/k39.png": Kf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/k312.png": Xf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/k311.png": Jf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/k310.png": Yf.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/d58.png": Qf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d57.png": Zf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d56.png": eA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d55.png": sA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/XOSO_bg.png": tA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/Win Go_bg.png": nA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/VideoWinGo_bg.png": aA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/VideoWinGo23.png": oA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/Trx Win Go_bg.png": pA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/Motorace17.png": cA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/MotoRace_bg.png": iA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/K3_bg.png": gA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/FXOSO_bg.png": rA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/Bingo18_bg.png": lA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/5D_bg.png": dA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/lottery/4D_bg.png": uA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/videoActive.png": mA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/video.png": wA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/sportActive.png": bA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/sport.png": vA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/slotActive.png": yA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/slot.png": fA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/popularActive.png": AA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/popular.png": hA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/lotteryActive.png": _A.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/lottery.png": SA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/flashActive.png": jA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/flash.png": $A.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/fishActive.png": BA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/fish.png": GA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/chessActive.png": LA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/chess.png": kA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/bgOld.png": TA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/bgActiveOld.png": IA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/bgActive.png": RA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/gameListIcons/bg.png": CA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/wingo4.png": PA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/wingo30.png": DA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/wingo3.png": EA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/wingo2.png": xA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/wingo1.png": OA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/trx16..png": MA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/trx15.png": WA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/trx14.png": UA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/trx13.png": NA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/motorace17.png": VA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/k39.png": FA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/k312.png": HA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/k311.png": qA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/k310.png": zA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/d58.png": KA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/d57.png": XA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/d56.png": JA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/d55.png": YA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/bigMumbai/VideoWinGo23.png": QA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/videoActive.png": ZA.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/video.png": eh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/tabActive.png": sh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/tab.png": th.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/sportActive.png": nh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/sport.png": ah.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/slotActive.png": oh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/slot.png": ph.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/popularActive.png": ch.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/popular.png": ih.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/lotteryActive.png": gh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/lottery.png": rh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/flashActive.png": lh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/flash.png": dh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/fishActive.png": uh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/fish.png": mh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/chessActive.png": wh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/chess.png": bh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/bgActive.png": vh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/bg.png": yh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/allActive.png": fh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllGames/all.png": Ah.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/swipe/PhonePe.png": hh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/swipe/Paytm.png": _h.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/success.svg": Sh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/fail.svg": jh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/PhonePe_bg_active.png": $h.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/PhonePe_bg.png": Bh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/PhonePe.svg": Gh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/PhonePe.png": Lh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/Paytm_bg_active.png": kh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/Paytm_bg.png": Th.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/Paytm.svg": Ih.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Paytm.png": Rh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Other_Bank.svg": Ch.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/Other Bank.png": Ph.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/Mobikwik.png": Dh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/GooglePay.svg": Eh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/icon/GooglePay.png": xh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/bank/s4.png": Oh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s3.png": Mh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s2.png": Wh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s1.png": Uh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Turntable/zp.png": Nh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Turntable/turntable.png": Vh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Turntable/money.png": Fh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Turntable/btn.png": Hh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Turntable/bg.png": qh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/MemberPackage/head.png": zh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/MemberPackage/box.png": Kh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/MemberPackage/bg.png": Xh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/verified.png": Jh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/treasure.png": Yh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/ticket.png": Qh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/successfullyReceived.png": Zh.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/successfullyParticipatedBottom.png":
      e_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/successfullyParticipatedBg.png":
      s_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/statusBg.png": t_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/rule.png": n_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/redeemdBg.png": a_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/redDiamondSm.png": o_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/redDiamond.png": p_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/recycleBin.png": c_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/recordHeaderBg.png": i_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/record.png": g_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/pointsIcon.png": r_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/plus.png": l_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/output.png": d_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderSentImg.png": u_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderSent.png": m_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderPendingImg.png": w_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderPending.png": b_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderItemDetail.png": v_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderCompletedImg.png": y_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderCompleted.png": f_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderCanceledImg.png": A_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderCanceled.png": h_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderCancelWarn.png": __.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/orderCancelSuccess.png": S_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/notice.png": j_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/minus.png": $_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/luckyNumber.png": B_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/lotteryReceiver.png": G_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/lotteryContact.png": L_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/loading.png": k_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/iphone14.png": T_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/income.png": I_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/headerBodyBg.png": R_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/headerBg.png": C_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/forbhidden.png": P_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/empty.png": D_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/editDefault.png": E_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/edit.png": x_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/dropdownWhite.png": O_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/dropdownRed.png": M_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/dropdown.png": W_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/diamond.png": U_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/copy.png": N_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/confirm.png": V_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/coin.png": F_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/close.png": H_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/claimRuleBg.png": q_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/cart.png": z_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/PointMall/addAddress.png": K_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Home/superJackpot.png": X_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Home/memberGift.png": J_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Home/invitationBonus.png": Y_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Home/activityReward.png": Q_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Home/BettingRebate.png": Z_.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/day7BgActive.png": eS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/day7Bg.png": sS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/coin.png": tS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/ar-headerBg.png": nS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/Unsigned.png": aS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/Signed.png": oS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailySignIn/SignInTop.png": pS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/taskIcon5.png": cS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/taskIcon4.png": iS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/taskIcon3.png": gS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/taskIcon2.png": rS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/taskIcon1.png": lS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/stepperIcon.png": dS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/signInBanner.png": uS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/recordIcon.png": mS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/present.png": wS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/new.png": bS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/giftRedeem.png": vS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/friends.png": yS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/dualArrow.png": fS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/confirmationReceived.png": AS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/close.png": hS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/award_bg.png": _S.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/awardRecord.png": SS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/awardImg.png": jS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/ar_award_bg.png": $S.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/amountIcon.png": BS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/activityIcon5.png": GS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/activityIcon4.png": LS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/activityIcon3.png": kS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/activityIcon2.png": TS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/activityIcon1.png": IS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/PointsMallBanner.png": RS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/DailyTaskHero.png": CS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/DailyTaskBanner.png": PS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/DailyTask/DailyCheckInBanner.png": DS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Championship/3.png": ES.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Championship/2.png": xS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Championship/1.png": OS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/activity/Attendance/activityAttendance.png": MS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/WavePay.png": WS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/KBZpay.png": US.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/8.png": NS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/6.png": VS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/5.png": FS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/4_ns.png": HS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/4.png": qS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/3.png": zS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/10.png": KS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawType/1.png": XS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/moonBar.png": JS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/bc.png": YS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/all_NS.png": QS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/all.png": ZS.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/8_NS.png": ej.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/8.png": sj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/6_NS.png": tj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/6.png": nj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/5_NS.png": aj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/5.png": oj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/4_NS.png": pj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/4.png": cj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/3_NS.png": ij.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/3_1.png": gj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/3.png": rj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/20_NS.png": lj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/20.png": dj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/1_NS.png": uj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/10_NS.png": mj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/10.png": wj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/1.png": bj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/searchIcon2.png": vj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/phone.png": yj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/name.png": fj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/ifscCode.png": Aj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/email.png": hj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/bankLogo.png": _j.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/bankHeader2.png": Sj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/bankHeader1.png": jj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/bankCard.png": $j.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/bank.png": Bj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/address.png": Gj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/5.png": Lj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/3.png": kj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/21.png": Tj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/bankCard/1.png": Ij.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/wrong_1.png": Rj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/wrong.png": Cj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/uploadVideo1.png": Pj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/uploadVideo.png": Dj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/uploadImg1.png": Ej.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/upiline.png": xj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/upi.png": Oj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/uAmount.png": Mj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/successicon.png": Wj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/seleteBank.png": Uj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/selectupi.png": Nj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/safety.png": Vj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon8.png": Fj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon7.png": Hj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon6.png": qj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon5.png": zj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon4.png": Kj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon3.png": Xj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon2.png": Jj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon14.png": Yj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon1.png": Qj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/hicon0.png": Zj.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/delBtn.png": e$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/copy-icon.png": s$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/confirmA.png": t$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/c2clogo_a.png": n$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/c2clogo.png": a$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/bg11.png": o$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/bank.png": p$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/appeal.png": c$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/add.png": i$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/CancelW.png": g$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/4.png": r$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/3.png": l$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/2.png": d$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/1.png": u$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/usdtLogo3.png": m$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/usdt.png": w$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/scan.png": b$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/network.png": v$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/bankHeader.png": y$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/anotherNamer.png": f$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/USDT/address.png": A$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/EWallet/wallet.png": h$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/EWallet/momo.png": _$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/EWallet/cards.png": S$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/EWallet/bankHeader.png": j$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/wave_icon.png": $$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/wave.png": B$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/slot_wallet.png": G$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/kbz_icon.png": L$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/kbz.png": k$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/bank.png": T$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/detail/appeal.png": I$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/9.png": R$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/8.png": C$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/7.png": P$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/6.png": D$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/5.png": E$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/4.png": x$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/3.png": O$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/2.png": M$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/10.png": W$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/logo/1.png": U$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/crown/2.png": N$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/crown/1.png": V$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg9.png": F$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg8.png": H$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg7.png": q$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg6.png": z$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg5.png": K$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg4.png": X$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg3.png": J$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg2.png": Y$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg10.png": Q$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/vip/swiper/bg/bg1.png": Z$.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wallet/withdrawType/usdtLogo3.svg": eB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wallet/withdrawType/5.svg": sB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/wallet/withdrawType/1.svg": tB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/ServiceCenter/settingCenter.svg": nB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/ServiceCenter/serviceCenter.svg": aB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/ServiceCenter/notificationCenter.svg":
      oB.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/guide.svg": pB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/ServiceCenter/feedback.svg": cB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/ServiceCenter/about.svg": iB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/AboutUs/riskProtocal.svg": gB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/svg/Account/AboutUs/privacyIcon.svg": rB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/7.png": lB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/6.png": dB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/5.png": uB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/47.png": mB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/46.png": wB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/45.png": bB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/44.png": vB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/42.png": yB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/41.png": fB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/4.png": AB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/38.png": hB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/37.png": _B.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/35.png": SB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/30.png": jB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/3.png": $B.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/29.png": BB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/27.png": GB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/26.png": LB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/24.png": kB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/23.png": TB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/22.png": IB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/21.png": RB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/20.png": CB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/2.png": PB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/19.png": DB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/18.png": EB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/17.png": xB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/16.png": OB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/12.png": MB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/11.png": WB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/10.png": UB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/1.png": NB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/main/BetRecord/acitve/-1.png": VB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/changlong/icon-wg.png": FB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/changlong/icon-k3.png": HB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/changlong/icon-5d.png": qB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/trxbg.png": zB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/timeb.png": KB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/timea.png": XB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeF.png": JB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeE.png": YB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeD.png": QB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeC.png": ZB.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeB.png": eG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeA.png": sG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize9.png": tG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize8.png": nG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize7.png": aG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize6.png": oG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize5.png": pG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize4.png": cG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize3.png": iG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize2.png": gG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize1.png": rG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize0.png": lG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/numF.png": dG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/numE.png": uG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/numD.png": mG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/numC.png": wG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/numB.png": bG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/numA.png": vG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num9.png": yG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num8.png": fG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num7.png": AG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num6.png": hG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num5.png": _G.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num4.png": SG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num3.png": jG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num2.png": $G.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num1.png": BG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/num0.png": GG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinTrx/icon-tip.png": LG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/trend_go.png": kG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/trend3.png": TG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/trend2.png": IG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/trend1.png": RG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/top_3.png": CG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/top_2.png": PG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/top_1.png": DG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_tip.png": EG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_6.png": xG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_5.png": OG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_4.png": MG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_3.png": WG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_2.png": UG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_1.png": NG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/rule_bg.png": VG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/record_icon.png": FG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/record.png": HG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/lock_money.png": qG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/icon.png": zG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/hot_top.png": KG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/hot_bg.png": XG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/hidden_money.png": JG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/dice_6.png": YG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/dice_5.png": QG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/dice_4.png": ZG.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/dice_3.png": eL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/dice_2.png": sL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/dice_1.png": tL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/count_icon.png": nL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/binguo_tip.png": aL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/binguo_time.png": oL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/bet_tip.png": pL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/binguo/add.png": cL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/wingoissue.png": iL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/voice.png": gL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/voice-off.png": rL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/time_a.png": lL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/time.png": dL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/rule-r.png": uL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/refireshIcon.png": mL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n9.png": wL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n8.png": bL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n7.png": vL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n6.png": yL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n5.png": fL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n4.png": AL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n3.png": hL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n2.png": _L.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n1.png": SL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/n0.png": jL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/kefu.png": $L.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/headlogo.png": BL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/copy.png": GL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/bcakIcon.png": LL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/agree-b.png": kL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/agree-a.png": TL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/WinGo/PreSaleBg.png": IL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/wallet.png": RL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/tip.png": CL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/ticketstar.png":
      PL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/success.png": DL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/right.png": EL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/right-border.png":
      xL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/notwinning.png":
      OL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/middle.png": ML.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/left.png": WL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/left-border.png":
      UL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/fail.png": NL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/detail.png": VL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/close.png": FL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg5.png": HL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg4.png": qL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg3.png": zL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg2.png": KL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg1.png": XL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/arrowbottom.png":
      JL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/WalletBg.png": YL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/NewVietnam/Star.png": QL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/redBall.png": ZL.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n7.png": ek.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n6.png": sk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n5.png": tk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n4.png": nk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n3.png": ak.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n2.png": ok.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/n1.png": pk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/greenBall.png": ck.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/K3/bitactive.png": ik.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/4D/success.png": gk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/4D/fail.png": rk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/4D/arr-right.svg": lk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/home/AllLotteryGames/4D/arr-left.svg": dk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/phonepe/3.png": uk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/phonepe/2.png": mk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/phonepe/1.png": wk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/paytm/3.png": bk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/paytm/2.png": vk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/paytm/1.png": yk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/mobikwik/3.png": fk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/mobikwik/2.png": Ak.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/mobikwik/1.png": hk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/freeCharge/3.png": _k.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/freeCharge/2.png": Sk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/freeCharge/1.png": jk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/airtel/3.png": $k.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/airtel/2.png": Bk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/arupi/kycbank/airtel/1.png": Gk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/3.png": Lk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/2.png": kk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/1.png": Tk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/0.png": Ik.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/rechargeRecords/state/4.png": Rk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/rechargeRecords/state/3.png": Ck.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/rechargeRecords/state/2.png": Pk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/rechargeRecords/state/1.png": Dk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/recharge/rechargeRecords/state/0.png": Ek.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/4_a.png": xk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/4.png": Ok.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/3_a.png": Mk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/3.png": Wk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/2_a.png": Uk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/2.png": Nk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/1_a.png": Vk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/other/1.png": Fk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/11/4.png": Hk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/11/3.png": qk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/11/2.png": zk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/11/1.png": Kk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/4_a.png": Xk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/4.png": Jk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/3_a.png": Yk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/3.png": Qk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/2_a.png": Zk.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/2.png": eT.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/1_a.png": sT.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
    "../assets/icons/wallet/withdraw/c2c/progress/3/1.png": tT.replace(
      /\.(jpg|png)$/,
      ".webp"
    ),
  };
let Nt = {};
const Vt = (e) => {
    Nt = {
      RechargeState: [
        { key: e("all"), value: -1 },
        { key: e("titleToBePaid"), value: 0 },
        { key: e("completed"), value: 1 },
        { key: e("rechargeState4"), value: 2 },
      ],
      RechargeC2CState: [
        { key: e("payments"), value: 0 },
        { key: e("c2cState1"), value: 1 },
        { key: e("c2cState3"), value: 3 },
        { key: e("timeOut"), value: 7 },
        { key: e("c2cState4"), value: 4 },
        { key: e("rechargeState4"), value: 5 },
        { key: e("cancelled"), value: 6 },
      ],
      WithdrawState: [
        { key: e("withdrawStatem1"), value: -1 },
        { key: e("withdrawState0"), value: 0 },
        { key: e("rechargeState2"), value: 1 },
        { key: e("withdrawState2"), value: 2 },
        { key: e("withdrawing"), value: 3 },
      ],
      C2cState: [
        { key: e("withdrawStatem1"), value: -1 },
        { key: e("c2cState0"), value: 0 },
        { key: e("c2cState1"), value: 1 },
        { key: e("c2cState2"), value: 2 },
        { key: e("c2cState3"), value: 3 },
        { key: e("c2cState4"), value: 4 },
        { key: e("c2cTip9"), value: 5 },
        { key: e("c2cState6"), value: 6 },
        { key: e("c2cState7"), value: 7 },
        { key: e("c2cState8"), value: 8 },
        { key: e("c2cState9"), value: 9 },
      ],
      RecharegeStatus: [
        { key: e("rechargeState0"), value: 0 },
        { key: e("rechargeState1"), value: 1 },
        { key: e("rechargeState2"), value: 2 },
        { key: e("rechargeState3"), value: 3 },
        { key: e("rechargeState4"), value: 4 },
      ],
      RechargeType: [
        { key: e("code9200"), value: 1 },
        { key: e("code9201"), value: 2 },
        { key: e("code9206"), value: 9 },
        { key: "USDT", value: 11 },
        { key: "KBZ", value: 13 },
        { key: "Wave", value: 14 },
        { key: "TRX", value: 16 },
      ],
      transMoneyTypes: [
        { key: e("all"), value: 0 },
        { key: e("withdrawalReduce"), value: 1 },
        { key: e("gameTransOut"), value: 2 },
        { key: e("gameTransIn"), value: 3 },
        { key: e("betReduce"), value: 4 },
        { key: e("jackpotIncre"), value: 5 },
        { key: e("agencyCommis"), value: 6 },
        { key: e("manualAccess"), value: 7 },
      ],
      usdtMainNetwork: [
        { key: "USDT-TRC20111", value: 1 },
        { key: "USDT-TRC20222", value: 2 },
      ],
      EWalletType: [
        { key: "MOMO1", value: 1 },
        { key: "MOMO2", value: 2 },
      ],
      levelTypes: [
        { key: e("all"), value: -1 },
        { key: e("downlevel", [1]), value: 1 },
        { key: e("downlevel", [2]), value: 2 },
        { key: e("downlevel", [3]), value: 3 },
        { key: e("downlevel", [4]), value: 4 },
        { key: e("downlevel", [5]), value: 5 },
        { key: e("downlevel", [6]), value: 6 },
      ],
      bettingResult: [
        { key: e("bettingResultState1"), value: 2 },
        { key: e("bettingResultState2"), value: 1 },
        { key: e("bettingResultState3"), value: 0 },
      ],
      bettingOrderStatus: [
        { key: e("unsettled"), value: 0 },
        { key: e("settled"), value: 1 },
        { key: e("invalidbet"), value: 2 },
      ],
      WStateCorrelationT: [
        { value: 0, key: e("stateTips1") },
        { value: 1, key: e("stateTips2") },
        { value: 2, key: e("stateTips3") },
        { value: 3, key: e("stateTips4") },
      ],
      RStateCorrelationT: [
        { key: e("RStateTips1"), value: 1 },
        { key: e("RStateTips2"), value: 2 },
      ],
      gameSelectType: [
        { key: "0", value: "0" },
        { key: "1", value: "1" },
        { key: "2", value: "2" },
        { key: "3", value: "3" },
        { key: "4", value: "4" },
        { key: "5", value: "5" },
        { key: "6", value: "6" },
        { key: "7", value: "7" },
        { key: "8", value: "8" },
        { key: "9", value: "9" },
        { key: "10", value: "10" },
        { key: "11", value: "11" },
        { key: "12", value: "12" },
        { key: "13", value: "13" },
        { key: "14", value: "14" },
        { key: "15", value: "15" },
        { key: "16", value: "16" },
        { key: "17", value: "17" },
        { key: "18", value: "18" },
        { key: e("numbersUnmatch"), value: "ABC" },
        { key: e("numbersMatch"), value: "AAA" },
        { key: "22", value: "22" },
        { key: "33", value: "33" },
        { key: "44", value: "44" },
        { key: "55", value: "55" },
        { key: "66", value: "66" },
        { key: "111", value: "111" },
        { key: "222", value: "222" },
        { key: "333", value: "333" },
        { key: "444", value: "444" },
        { key: "555", value: "555" },
        { key: "666", value: "666" },
        { key: e("small"), value: "L" },
        { key: e("big"), value: "H" },
        { key: e("odd"), value: "O" },
        { key: e("k3Even"), value: "E" },
        { key: e("GTBig"), value: "big" },
        { key: e("GTSmall"), value: "small" },
        { key: e("GTRed"), value: "red" },
        { key: e("GTGreen"), value: "green" },
        { key: e("GTPurple"), value: "violet" },
        { key: "O", value: e("GTOdd") },
        { key: "E", value: e("GTEven") },
        { key: "L", value: e("GTSmall") },
        { key: "H", value: e("GTBig") },
      ],
      gameAllName: [
        { key: e("sabaSport"), value: 14 },
        { key: e("cmdSport"), value: 8 },
        { key: e("agSport"), value: 13 },
        { key: e("imSport"), value: 15 },
        { key: e("dgLive"), value: 7 },
        { key: e("agLive"), value: 10 },
        { key: e("evoLive"), value: 16 },
        { key: e("chess365"), value: 19 },
        { key: e("chessv8"), value: 21 },
        { key: e("sexyLive"), value: 27 },
        { key: e("wmLive"), value: 26 },
        { key: e("wicketsSport"), value: 25 },
        { key: e("wicketsSport"), value: 25 },
        { key: "WM" + e("code9306"), value: 26 },
        { key: "SEXY" + e("code9306"), value: 27 },
        { key: "BG" + e("code9304"), value: 28 },
        { key: "BetSoft" + e("code9304"), value: 29 },
        { key: "YGG" + e("code9304"), value: 30 },
        { key: "JOKER" + e("code9304"), value: 31 },
        { key: "PlayNgo" + e("code9304"), value: 32 },
        { key: "Hacksaw" + e("code9304"), value: 33 },
        { key: "HackMD" + e("code9304"), value: 34 },
        { key: "Marbles" + e("code9304"), value: 35 },
        { key: "Spribe2" + e("code9304"), value: 36 },
        { key: "MG" + e("code9303"), value: 37 },
        { key: "MG" + e("code9306"), value: 38 },
      ],
      languageCodes: [
        { value: "en", key: 0 },
        { value: "id", key: 1 },
        { value: "vi", key: 2 },
        { value: "bra", key: 3 },
        { value: "tha", key: 4 },
        { value: "th", key: 4 },
        { value: "zh", key: 5 },
        { value: "zh-CN", key: 5 },
        { value: "tw", key: 6 },
        { value: "md", key: 7 },
        { value: "bd", key: 8 },
        { value: "hd", key: 9 },
        { value: "my", key: 10 },
        { value: "pk", key: 11 },
        { value: "ar", key: 12 },
        { value: "ta", key: 13 },
        { value: "te", key: 14 },
      ],
      StatusType: [
        { key: e("enableStatus"), value: 1 },
        { key: e("disabledStatus"), value: 0 },
      ],
      RegionType: [
        { key: e("north"), value: "北部" },
        { key: e("central"), value: "中央" },
        { key: e("south"), value: "南部" },
      ],
      gameType: [
        { key: e("lotteryType1"), value: 1 },
        { key: e("lotteryType2"), value: 2 },
        { key: e("lotteryType3"), value: 3 },
        { key: e("lotteryType4"), value: 4 },
        { key: e("lotteryType5"), value: 5 },
      ],
      gameTabList: [
        { name: e("all"), img: "all", codeType: -1 },
        { name: e("lottery"), img: "lottery", codeType: 3 },
        { name: e("live"), img: "video", codeType: 1 },
        { name: e("chess"), img: "chess", codeType: 4 },
        { name: e("electric"), img: "slot", codeType: 0 },
      ],
      VipType: [
        { key: e("receiveSuccess"), value: 1 },
        { key: e("receiveSuccess"), value: 2 },
        { key: e("vipcondition"), value: 3 },
        { key: e("vipcondition"), value: 4 },
        { key: e("vipTip8"), value: 5 },
        { key: e("vipTip9"), value: 6 },
        { key: e("vipTip16"), value: 7 },
        { key: e("vipTip16"), value: 8 },
      ],
    };
  },
  nT = (e, s) => {
    const t = e[s];
    return t
      ? typeof t == "function"
        ? t()
        : Promise.resolve(t)
      : new Promise((n, a) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            a.bind(null, new Error("Unknown variable dynamic import: " + s))
          );
        });
  };
let aT = localStorage.getItem("language") || "en",
  Ks = j({ en: ia });
const ke = $n({
    legacy: !1,
    locale: aT,
    fallbackLocale: "en",
    globalInjection: !0,
    warnHtmlMessage: !1,
    messages: Ks.value,
    silentTranslationWarn: !0,
    datetimeFormats: {
      zh: {
        short: { year: "numeric", month: "short", day: "numeric" },
        long: {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        },
      },
      en: { short: { year: "numeric", month: "short", day: "numeric" } },
      rus: { short: { year: "numeric", month: "short", day: "numeric" } },
      vi: { short: { year: "numeric", month: "short", day: "numeric" } },
      my: { short: { year: "numeric", month: "short", day: "numeric" } },
      id: { short: { year: "numeric", month: "short", day: "numeric" } },
      hd: { short: { year: "numeric", month: "short", day: "numeric" } },
      th: { short: { year: "numeric", month: "short", day: "numeric" } },
      md: { short: { year: "numeric", month: "short", day: "numeric" } },
      bra: { short: { year: "numeric", month: "short", day: "numeric" } },
      bd: { short: { year: "numeric", month: "short", day: "numeric" } },
      pk: { short: { year: "numeric", month: "short", day: "numeric" } },
      ar: { short: { year: "numeric", month: "short", day: "numeric" } },
      ta: { short: { year: "numeric", month: "short", day: "numeric" } },
      te: { short: { year: "numeric", month: "short", day: "numeric" } },
    },
  }),
  oT = async (e) => {
    let s = e;
    const t = { pk: "pak", bd: "bdt", th: "tha" };
    if ((t[e] && (e = t[e]), !Ks.value[s])) {
      const n = await nT(
        Object.assign({
          "./modules/ar.ts": () => r(() => import("./ar-9f2439b4.js"), []),
          "./modules/bdt.ts": () => r(() => import("./bdt-6e96b074.js"), []),
          "./modules/bra.ts": () => r(() => import("./bra-6827df0e.js"), []),
          "./modules/en.ts": () => r(() => import("./en-5d34117c.js"), []),
          "./modules/hd.ts": () => r(() => import("./hd-6c10bdda.js"), []),
          "./modules/id.ts": () => r(() => import("./id-9b9286c3.js"), []),
          "./modules/md.ts": () => r(() => import("./md-a9b754c8.js"), []),
          "./modules/my.ts": () => r(() => import("./my-36c4ef62.js"), []),
          "./modules/pak.ts": () => r(() => import("./pak-cffc2444.js"), []),
          "./modules/ph.ts": () => r(() => import("./ph-1b8a31f6.js"), []),
          "./modules/rus.ts": () => r(() => import("./rus-9845e029.js"), []),
          "./modules/ta.ts": () => r(() => import("./ta-0066764f.js"), []),
          "./modules/te.ts": () => r(() => import("./te-eb8510ab.js"), []),
          "./modules/tha.ts": () => r(() => import("./tha-d0490e87.js"), []),
          "./modules/vi.ts": () => r(() => import("./vi-980130cc.js"), []),
          "./modules/zh.ts": () => r(() => import("./zh-fa97d5ec.js"), []),
        }),
        `./modules/${e}.ts`
      );
      (Ks.value[s] = n.default), ke.global.setLocaleMessage(s, n.default);
    }
  };
Vt(ke.global.t);
const pT = async (e) => {
    const s = e || zt();
    await oT(s), (ke.global.locale.value = s), ca(s), Vt(ke.global.t);
  },
  bt = (e) => typeof e == "function",
  cT = (e) => e !== null && typeof e == "object",
  KC = (e) => cT(e) && bt(e.then) && bt(e.catch),
  XC = (e) => e != null,
  JC = () => {},
  iT = (e) => e.stopPropagation();
function YC(e, s) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    s && iT(e);
}
function QC(e) {
  const s = {};
  return e !== void 0 && (s.zIndex = +e), s;
}
const gT = typeof window < "u",
  Ft = navigator.userAgent.toLowerCase(),
  Ht = gT && /ios|iphone|ipad|ipod/.test(Ft),
  rT = /mobi|android|iphone/.test(Ft),
  Ye = !rT;
function ZC() {
  !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) &&
    window.webkit.messageHandlers.clearCache.postMessage(null);
}
function Se() {
  var e, s, t;
  return !!(
    ((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null &&
      s.callNativeMethod) ||
    (window.external && (t = window.external) != null && t.callNativeMethod)
  );
}
function lT() {
  var e, s, t;
  return !!(
    ((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null &&
      s.callAnalysisEvents) ||
    (window.external && (t = window.external) != null && t.callAnalysisEvents)
  );
}
function dT(e, s) {
  Ht
    ? window.webkit.messageHandlers.callAnalysisEvents.postMessage({
        type: e,
        data: s,
      })
    : window.external.callAnalysisEvents(JSON.stringify({ type: e, data: s }));
}
function Ss(e, s) {
  Ht
    ? window.webkit.messageHandlers.callNativeMethod.postMessage({
        type: e,
        data: s,
      })
    : window.external.callNativeMethod(JSON.stringify({ type: e, data: s }));
}
function ts(e, s) {
  !e || !s.url || (Se() || (window.location.href = s.url), Ss(e, s));
}
function uT(e) {
  var s;
  try {
    if (window.external && (s = window.external) != null && s.dataFromNative)
      return window.external.dataFromNative(
        JSON.stringify({ data: { type: e } })
      );
  } catch (t) {
    console.error("Error calling dataFromNative:", t);
  }
  return null;
}
function vt(e, s, t) {
  var n;
  try {
    if (window.external && (n = window.external) != null && n.dataFromNative)
      return window.external.dataFromNative(
        JSON.stringify({ data: { type: e, event: s, value: t } })
      );
  } catch (a) {
    console.error("Error calling dataFromNative:", a);
  }
  return null;
}
const mT = async () => {
    var e;
    try {
      const { Capacitor: s } = await r(
        () => import("./common.modules-cecf9b0d.js").then((t) => t.cu),
        [
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
        ]
      );
      return ((e = s.getPlatform) == null ? void 0 : e.call(s)) === "android";
    } catch {
      return !1;
    }
  },
  wT = async () => {
    var e;
    try {
      const { Capacitor: s } = await r(
        () => import("./common.modules-cecf9b0d.js").then((t) => t.cu),
        [
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
        ]
      );
      return ((e = s.getPlatform) == null ? void 0 : e.call(s)) === "ios";
    } catch {
      return !1;
    }
  },
  bT = async () => {
    var e;
    try {
      const { Capacitor: s } = await r(
        () => import("./common.modules-cecf9b0d.js").then((t) => t.cu),
        [
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
        ]
      );
      return ((e = s.isNativePlatform) == null ? void 0 : e.call(s)) || !1;
    } catch {
      return !1;
    }
  },
  vT = async () => {
    try {
      const { Capacitor: e } = await r(
        () => import("./common.modules-cecf9b0d.js").then((s) => s.cu),
        [
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
        ]
      );
      return e;
    } catch {
      return (
        console.error("Capacitor is not available in this environment."), null
      );
    }
  },
  yT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getCapacitor: vT,
        isAndroid: mT,
        isIOS: wT,
        isNativePlatform: bT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fT = Dt("AdjustPlugin"),
  AT = Dt("DeviceInfo"),
  hT = Object.freeze(
    Object.defineProperty(
      { __proto__: null, AdjustPlugin: fT, DeviceInfoPlugin: AT },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
Bn({ duration: 3500 });
function _T() {
  const e = ds;
  return { text: e, success: e, error: e, loading: Ne };
}
const { text: ys } = _T();
let Y = {};
function Pe() {
  var e;
  return (
    (e = window == null ? void 0 : window.NativeBridge) != null &&
      e.getInfoString &&
      (Y = JSON.parse(
        (window == null ? void 0 : window.NativeBridge.getInfoString()) || "{}"
      )),
    Y
  );
}
function ST() {
  var e;
  return (
    JSON.parse(
      (Y == null ? void 0 : Y.eventList) ||
        ((e = Pe()) == null ? void 0 : e.eventList) ||
        "[]"
    ) || []
  );
}
function jT() {
  var e;
  return (
    (Y == null ? void 0 : Y.invitationCode) ||
    ((e = Pe()) == null ? void 0 : e.invitationCode) ||
    ""
  );
}
function $T() {
  var e;
  return (
    (Y == null ? void 0 : Y.appId) ||
    ((e = Pe()) == null ? void 0 : e.appId) ||
    ""
  );
}
function BT() {
  var e;
  return (
    (Y == null ? void 0 : Y.deviceId) ||
    ((e = Pe()) == null ? void 0 : e.deviceId) ||
    ""
  );
}
function GT() {
  var e;
  return !!((Y != null && Y.launcher) || ((e = Pe()) != null && e.launcher));
}
function LT() {
  return (
    ((Y.isValidPwd || Pe().isValidPwd) &&
      JSON.parse(Y.isValidPwd || Pe().isValidPwd || "false")) ||
    !1
  );
}
function kT() {
  var s;
  const e =
    (Y == null ? void 0 : Y.apkType) ||
    ((s = Pe()) == null ? void 0 : s.apkType) ||
    "";
  return e ? e === "full_apk" : !1;
}
function TT() {
  var s;
  const e =
    (Y == null ? void 0 : Y.apkType) ||
    ((s = Pe()) == null ? void 0 : s.apkType) ||
    "";
  return e ? e === "quick_apk" : !1;
}
function IT(e) {
  var s;
  if (
    (s = window == null ? void 0 : window.NativeBridge) != null &&
    s.openExternalPage
  ) {
    if (!e) {
      ys("Please provide valid parameters.");
      return;
    }
    if (!e.url) {
      ys("Please provide a valid URL.");
      return;
    }
    if (!e.returnType) {
      ys("Please provide a valid return type.");
      return;
    }
    window == null ||
      window.NativeBridge.openExternalPage(
        typeof e == "string" ? e : JSON.stringify(e)
      );
  }
}
function RT(e) {
  var s;
  if (
    (s = window == null ? void 0 : window.NativeBridge) != null &&
    s.openExternalUrl
  ) {
    if (!e || !/^[a-zA-Z]+:\/\//.test(e)) {
      ys("Please provide a valid URL.");
      return;
    }
    window == null || window.NativeBridge.openExternalUrl(e);
  }
}
const CT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getDataFromBridge: Pe,
        getDeviceId: BT,
        getEventList: ST,
        getInvitationCode: jT,
        getPackId: $T,
        isEmbeddedApk: TT,
        isFullapk: kT,
        isLauncher: GT,
        isValidPwd: LT,
        openExternalPage: IT,
        openExternalUrl: RT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ue = { ...yT, ...hT, ...CT },
  PT = ke.global.t;
function DT(e) {
  return e.then((s) => [null, s]).catch((s) => [s, null]);
}
const eP = () =>
    (navigator.language ? navigator.language : navigator.browserLanguage)
      .toLowerCase()
      .slice(0, 2),
  sP = (e, s) =>
    e == "zh-CN" || e == "zh"
      ? s != null && s.includes(e)
        ? "zh-CN"
        : "en"
      : e == "bn"
      ? s != null && s.includes("bdt")
        ? "bdt"
        : "en"
      : e == "pt-br"
      ? s != null && s.includes("bra")
        ? "bra"
        : "en"
      : s != null && s.toLowerCase().includes(e.split("-")[0])
      ? e.split("-")[0]
      : "en",
  tP = (e, s, t = !0) => {
    let n = null;
    return function (...a) {
      n ||
        ((n = setTimeout(() => {
          !t && e.apply(this, arguments), (n = null);
        }, s)),
        t && e.apply(this, a));
    };
  },
  nP = (e) => {
    if (!e) return;
    const s = document.createElement("input");
    s.setAttribute("readonly", "readonly"),
      s.setAttribute("value", e.toLocaleString()),
      document.body.appendChild(s),
      s.select(),
      document.execCommand("Copy"),
      document.body.removeChild(s),
      Ln.showSuccessToast(PT("copySuccess"));
  },
  ss = (e, s, t = "png", n = "icons") =>
    _s[`../assets/${_s.MAINCOLOR}/${n}/${e}/${s}.${t}`] || "",
  qt = (e, s, t = "png", n = "icons") => (
    e === "languages" && (s === "ta" || s === "te") && (s = "hd"),
    _s[`../assets/${n}/${e}/${s}.${t}`] || ""
  ),
  ET = (e, s) => {
    var n;
    return (n = e.find((a) => a.value === s)) == null ? void 0 : n.key;
  },
  aP = (e, s) => {
    var t;
    return (t = e.find((n) => n.type === s)) == null ? void 0 : t.typeName;
  },
  oP = () => {
    const e = document.querySelector("meta[name=viewport]");
    if (e !== null) {
      let s = e.getAttribute("content"),
        t = /maximum\-scale=[0-9\.]+/g;
      t.test(s)
        ? (s = s.replace(t, "maximum-scale=1.0"))
        : (s = [s, "maximum-scale=1.0"].join(", ")),
        e.setAttribute("content", s);
    }
  },
  pP = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  cP = () => ({
    today: { start: pe().startOf("day").unix(), end: pe().endOf("day").unix() },
    yesterday: {
      start: pe().subtract(1, "days").startOf("day").unix(),
      end: pe().subtract(1, "days").endOf("day").unix(),
    },
    tomorrow: {
      start: pe().subtract(-1, "days").startOf("day").unix(),
      end: pe().subtract(-1, "days").endOf("day").unix(),
    },
    last7days: {
      start: pe().subtract(1, "weeks").startOf("day").unix(),
      end: pe().subtract(1, "days").endOf("day").unix(),
    },
    thisMonth: {
      start: pe().startOf("months").unix(),
      end: pe().endOf("day").unix(),
    },
    lastMonth: {
      start: pe().subtract(1, "months").startOf("month").unix(),
      end: pe().subtract(1, "months").endOf("month").unix(),
    },
  }),
  iP = (e = "", s = "", t = "", n = "-") =>
    [e.toString(), s.toString(), t.toString()].join(n),
  gP = (e) => {
    let s = (e == null ? void 0 : e.time) || "",
      t = (e == null ? void 0 : e.status) || 1,
      n = (e == null ? void 0 : e.format) || "YYYY-MM-DD HH:mm:ss",
      a = { key: "", value: [] };
    function c() {
      return s ? pe(s) : pe();
    }
    let i, l;
    switch (t) {
      case 1:
        (n = "YYYY-MM-DD"), (i = c().format(n)), (l = i.split("-"));
        break;
      case 2:
        (n = "HH:mm:ss"), (i = c().format(n)), (l = i.split(":"));
        break;
      case 3:
        (n = "YYYY-MM"), (i = c().format(n)), (l = i.split("-"));
        break;
      default:
        i = c().format(n);
        let g = i.split(" "),
          m = g[0].split("-"),
          d = g[1].split(":");
        l = [...m, ...d];
        break;
    }
    return (a = { key: i, value: l }), a;
  },
  rP = (e) => {
    const s = new Date(2022, 0, 1),
      t = new Date();
    return (
      e == -1 && t.setTime(t.getTime() - 24 * 60 * 60 * 1e3),
      { minDate: s, maxDate: t }
    );
  },
  lP = () => ({ minDate: new Date(1970, 0, 1), maxDate: new Date() }),
  zt = () => localStorage.getItem("language") || "en";
function xT(e) {
  let s = e === "ar" ? "ar" : "en",
    t = e === "ar" ? "rtl" : "ltr";
  (document.documentElement.lang = s), (document.documentElement.dir = t);
}
const Kt = () => {
    const e = ET(Nt.languageCodes, localStorage.getItem("language") || "en");
    return e === void 0 ? 0 : e;
  },
  dP = (e, s, t) => {
    if (e) {
      let n = e.toString();
      if (t == 1) {
        let c = parseFloat(n).toFixed(2);
        c.charAt(c.length - 1) == "0" && (s = 1);
      }
      let a = n.indexOf(".");
      return (
        a !== -1 ? (n = n.substring(0, s + a + 1)) : (n = n.substring(0)),
        parseFloat(n).toFixed(s)
      );
    }
  },
  uP = (e) => {
    if (!e) return 0;
    let s = "";
    return (
      e > 1e6 ? ((e /= 1e6), (s = "M")) : e > 1e3 && ((e /= 1e3), (s = "K")),
      e.toString().indexOf(".") > -1 && (e = e.toFixed(2)),
      e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + s
    );
  },
  mP = (e, s) => {
    var t = 0,
      n = e.toString(),
      a = s.toString();
    try {
      t += n.split(".")[1].length;
    } catch {}
    try {
      t += a.split(".")[1].length;
    } catch {}
    return (
      (Number(n.replace(".", "")) * Number(a.replace(".", ""))) /
      Math.pow(10, t)
    );
  },
  us = (e) => {
    const s = ke.global.t;
    let t,
      n = [214, 215, -1],
      a = [""];
    e.msgCode
      ? n.includes(e.msgCode) || a.includes(e.code)
        ? (t = e.msg)
        : (t = s("code" + e.msgCode) || e.msg)
      : (t = e.msg || "");
    let c = e.msgCode;
    t &&
      Fe({
        message:
          `Error: ${c || ""} 
 ` + t,
        wordBreak: "break-word",
        className: "fail_message_toast",
        iconSize: 28,
      });
  },
  OT = [0, 1007],
  L = async (e) =>
    await e
      .then((t) => (t && !OT.includes(t.code) ? (us(t), null) : t))
      .catch((t) => (us(t), null)),
  De = (e = !0) => {
    if (!e) return Ye ? 0 : 3;
    let s = -1,
      t = navigator.userAgent.toLowerCase();
    return (
      Ye
        ? (s = 0)
        : t.indexOf("android") != -1 || t.indexOf("adr") > -1
        ? (s = 1)
        : t.indexOf("iphone") != -1
        ? (s = 2)
        : t.indexOf("ipad") != -1
        ? (s = 3)
        : (s = -1),
      s
    );
  };
async function wP() {
  let e;
  const s = await Ue.isNativePlatform();
  return (
    Ye
      ? (e = 0)
      : Ue.isEmbeddedApk() || Ue.isFullapk()
      ? (e = 5)
      : s
      ? (e = -1)
      : (e = 3),
    e
  );
}
function Ts(e, s = !1) {
  if (s) {
    const t = window.open("", "_blank");
    return t.document.open(), t.document.write(e), t.document.close(), t;
  } else return window.open(e);
}
const ns = (e, s) => {
    const t = typeof e == "string";
    let n = t ? e : e.url;
    const a = t ? 1 : e.returnType,
      c = De();
    if ((s == 1 && [1, 2, 3].includes(c) && Se() && (n += "&home=1"), a === 2))
      return Ts(n, !0);
    if (s === 3 || Ye) return Ts(n, !1);
    window.location.assign(n);
  },
  MT = (e) => Gn.hash(e).toString().toUpperCase().slice(0, 32);
function js(e) {
  if (typeof e != "object" || e === null) return e;
  if (Array.isArray(e)) return e.map(js);
  const s = {};
  for (const t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (s[t] = js(e[t]));
  return s;
}
function WT() {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var s = (Math.random() * 16) | 0,
      t = e === "x" ? s : (s & 3) | 8;
    return t.toString(16);
  });
}
const UT = (e) => {
  const { protocol: s, host: t, hash: n } = window.location,
    a = s + "//" + t + "/" + n;
  let c = e || "/";
  window.location.href = a + c;
};
function bP(e, s) {
  var c;
  const t = sessionStorage.getItem("areaPhoneLenList");
  if (!t) return !0;
  let a =
    (c = JSON.parse(t).find((i) => i.area == "+" + e)) == null ? void 0 : c.len;
  if ((a == null ? void 0 : a.indexOf("-")) != -1) {
    let i = (a == null ? void 0 : a.toString().split("-")) || [];
    return (i == null ? void 0 : i.length) == 2 ? !(s < i[0] || s > i[1]) : !0;
  }
  return a == s;
}
const NT = () => "tiranga",
  vP = (e, s, t, n) => {
    let a = [],
      c = n == 0 ? 2 : 3;
    for (; a.length < e; ) {
      var i = Math.floor(Math.random() * (t - s + 1)) + s;
      a.includes(i.toString().padStart(c, "0")) ||
        a.push(i.toString().padStart(c, "0"));
    }
    return a;
  },
  yP = (e, s, t) => {
    let n = [];
    for (let a = e; a <= s; a++) {
      const c = a.toString().padStart(t, "0"),
        i = c[0];
      c.split("").every((l) => l === i) &&
        n.push(a.toString().padStart(t, "0"));
    }
    return n;
  },
  fP = (e, s, t, n) => {
    let a = [];
    const c = t === "even";
    for (let i = e; i <= s; i++)
      i % 2 === 0
        ? c && a.push(i.toString().padStart(n, "0"))
        : c || a.push(i.toString().padStart(n, "0"));
    return a;
  },
  AP = (e, s) => {
    let t = [];
    for (let n = e; n <= s; n++) t.push(n.toString());
    return t;
  },
  hP = (e, s, t, n) => {
    let a = [];
    const c = t === "big",
      i = Math.floor((s + e) / 2);
    for (let l = e; l <= s; l++)
      c
        ? l > i && a.push(l.toString().padStart(n, "0"))
        : l <= i && a.push(l.toString().padStart(n, "0"));
    return a;
  },
  _P = (e) => {
    const s = new Set();
    for (let t of e) {
      if (s.has(t)) return !0;
      s.add(t);
    }
    return !1;
  },
  SP = () => {
    if (
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    ) {
      for (
        var e = document.querySelectorAll("input, textarea"), s = 0;
        s < e.length;
        s++
      )
        e[s].blur();
      return !0;
    }
    return !1;
  },
  VT = (e) => {
    var s = {
      á: "a",
      à: "a",
      ả: "a",
      ã: "a",
      ạ: "a",
      ắ: "a",
      ằ: "a",
      ẳ: "a",
      ẵ: "a",
      ặ: "a",
      ấ: "a",
      ầ: "a",
      ẩ: "a",
      ẫ: "a",
      ậ: "a",
      é: "e",
      è: "e",
      ẻ: "e",
      ẽ: "e",
      ẹ: "e",
      ế: "e",
      ề: "e",
      ể: "e",
      ễ: "e",
      ệ: "e",
      í: "i",
      ì: "i",
      ỉ: "i",
      ĩ: "i",
      ị: "i",
      ó: "o",
      ò: "o",
      ỏ: "o",
      õ: "o",
      ọ: "o",
      ố: "o",
      ồ: "o",
      ổ: "o",
      ỗ: "o",
      ộ: "o",
      ớ: "o",
      ờ: "o",
      ở: "o",
      ỡ: "o",
      ợ: "o",
      ú: "u",
      ù: "u",
      ủ: "u",
      ũ: "u",
      ụ: "u",
      ứ: "u",
      ừ: "u",
      ử: "u",
      ữ: "u",
      ự: "u",
      ý: "y",
      ỳ: "y",
      ỷ: "y",
      ỹ: "y",
      ỵ: "y",
      đ: "d",
    };
    return e
      .toLowerCase()
      .replace(
        /[áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđ]/g,
        function (t) {
          return s[t] || t;
        }
      );
  },
  jP = (e) => {
    if (e.length >= 7)
      return e.substring(0, 3) + "***" + e.substring(e.length - 3);
    {
      const s = "***",
        t = 7 - e.length,
        n = "*".repeat(t);
      return (
        e.substring(0, Math.ceil((7 - t) / 2)) +
        s +
        n +
        e.substring(Math.ceil((7 - t) / 2))
      );
    }
  };
function $P(e) {
  for (
    var s = e + "=",
      t = decodeURIComponent(document.cookie),
      n = t.split(";"),
      a = 0;
    a < n.length;
    a++
  ) {
    for (var c = n[a]; c.charAt(0) === " "; ) c = c.substring(1);
    if (c.indexOf(s) === 0) return c.substring(s.length, c.length);
  }
  return null;
}
const BP = (e) => Math.round(e * 100) / 100;
function GP(e) {
  return !e || e.startsWith("http") || e.startsWith("/") ? !1 : Number(e) < 21;
}
const ze = ke.global.t,
  LP = (e, s) => {
    let t = new Date(e),
      n = t.getUTCFullYear(),
      a = t.getUTCMonth() + 1,
      c = t.getUTCDay(),
      i = t.getUTCDate(),
      l = t.getUTCHours(),
      g = t.getUTCMinutes(),
      m = t.getUTCSeconds(),
      d = [
        ze("sunday"),
        ze("monday"),
        ze("tuesday"),
        ze("wednesday"),
        ze("thursday"),
        ze("friday"),
        ze("saturday"),
      ];
    return s
      .replace("yyyy", n.toString())
      .replace("MM", a.toString().padStart(2, "0"))
      .replace("M", a.toString())
      .replace("dd", i.toString().padStart(2, "0"))
      .replace("hh", l.toString().padStart(2, "0"))
      .replace("mm", g.toString().padStart(2, "0"))
      .replace("ss", m.toString().padStart(2, "0"))
      .replace("w", d[c]);
  },
  kP = (e, s) => (e.length > s ? e.slice(0, s) + "..." : e.toUpperCase()),
  fs = (e, s = "", t = 2) => {
    var n = /(\d{3})(?=\d)/g;
    if (((e = parseFloat(e)), !isFinite(e) || (!e && e !== 0))) return "";
    (s = s || sessionStorage.getItem("dollarSign") || ""), (t = t ?? 2);
    var a = Math.abs(e).toFixed(t),
      c = t ? a.slice(0, -1 - t) : a,
      i = c.length % 3,
      l = i > 0 ? c.slice(0, i) + (c.length > 3 ? "," : "") : "",
      g = t ? a.slice(-1 - t) : "",
      m = e < 0 ? "-" : "",
      d = Kt();
    return d == "2"
      ? m + l + c.slice(i).replace(n, "$1,") + g + s
      : m + s + l + c.slice(i).replace(n, "$1,") + g;
  },
  TP = (e) => {
    let s = localStorage.getItem("number") || "",
      t = localStorage.getItem("numberType") || "",
      n = e || t + s;
    return n
      ? n.length > 9
        ? "+" + n.replace(/^(\d{5})\d+(\d{4})$/, "$1****$2")
        : "+" + n.replace(/^(\d{4})\d+(\d{2})$/, "$1****$2")
      : "";
  },
  IP = (e) =>
    e.replace(/^([\w]{0,4})[\w\d]*@([\w\d]{0,15}[\w\d\.]*)$/, (s, t, n) => {
      const a = t.length,
        c = n.length,
        i = c > 15 ? n.substring(c - 15) : n;
      return `${a > 4 ? t.substring(0, 4) + "****" : t + "****"}${
        c > 15 ? "" : "@"
      }${i}`;
    }),
  RP = (e) => {
    let s = e || "";
    return (s = s.replace("G9", "9G")), (s = s.replace("AG", "PA")), s;
  };
function nt(e) {
  const t = new TextEncoder().encode(e);
  let n = "";
  return (
    t.forEach((a) => {
      n += String.fromCharCode(a);
    }),
    btoa(n)
  );
}
function FT(e) {
  return atob(e);
}
function $s(e, s) {
  const t = new URL(s),
    a = t.hostname.split(".");
  return (
    a.length > 2 ? (a[0] = e) : a.unshift(e), `${t.protocol}//${a.join(".")}`
  );
}
function CP(e) {
  let s = null;
  return () => (
    s === null &&
      (s = e().catch((t) => {
        throw ((s = null), t);
      })),
    s
  );
}
function HT(e) {
  return new Promise((s) => setTimeout(s, e));
}
kn();
const PP = (e, s = "png", t = "icons") =>
  _s[`../assets/${t}/arupi/${e}.${s}`] || "";
function DP(e, s = "₹", t = 2) {
  let n = "0.00";
  return (
    e &&
      (typeof e == "number"
        ? (n = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: t,
            maximumFractionDigits: t,
            useGrouping: !0,
          }).format(e))
        : (n = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: t,
            maximumFractionDigits: t,
            useGrouping: !0,
          }).format(parseInt(e)))),
    s + n
  );
}
const EP = () => {
    function e() {
      return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
    }
    return `${+new Date()}_${e()}${e()}`;
  },
  xP = (e) => {
    switch (e) {
      case "image/jpeg":
        return "jpg";
      case "image/png":
        return "png";
      case "image/gif":
        return "gif";
      case "image/bmp":
        return "bmp";
      case "image/webp":
        return "webp";
      case "image/svg+xml":
        return "SVG";
      case "image/tiff":
        return "tiff";
      case "image/x-icon":
        return "ico";
      case "video/mp4":
        return "mp4";
      case "video/webm":
        return "webm";
      case "video/ogg":
        return "ogg";
      case "video/mpeg":
        return "mpeg";
      case "video/quicktime":
        return "mov";
      case "video/3gpp":
        return "3gp";
      case "video/x-msvideo":
        return "avi";
      case "video/x-flv":
        return "flv";
      case "video/x-matroska":
        return "mkv";
    }
  };
function OP(e) {
  if (e <= 0) return "00:00";
  const s = Math.floor(e / 60),
    t = e % 60;
  return `${String(s).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}
const MP = He({
    id: "activityStore",
    state: () => ({ lotteryItemDetail: {}, orderItem: {}, redeemItem: {} }),
    getters: {
      getLotteryItemDetail: (e) => e.lotteryItemDetail,
      getOrderItem: (e) => e.orderItem,
      getRedeemItem: (e) => e.redeemItem,
    },
    actions: {
      setLotteryItemDetail(e) {
        this.lotteryItemDetail = e;
      },
      setOrderItem(e) {
        this.orderItem = e;
      },
      setRedeemItem(e) {
        this.redeemItem = e;
      },
    },
    persist: !0,
  }),
  Bs = He({
    id: "commonStore",
    state: () => ({
      isLoading: !1,
      isRefreshToken: !1,
      teleportTarget: null,
      keepAliveList: ["RechargeHistory"],
    }),
    getters: {
      getLoading: (e) => e.isLoading,
      getIsRefreshToken: (e) => e.isRefreshToken,
      getKeepAliveList: (e) => e.keepAliveList,
    },
    actions: {
      setLoading(e) {
        this.isLoading = e;
      },
      setIsRefreshToken(e) {
        this.isRefreshToken = e;
      },
      setKeepAliveList(e) {
        this.keepAliveList.includes(e) || this.keepAliveList.push(e);
      },
      reastKeepAliveList() {
        this.keepAliveList = [];
      },
      removeKeepAliveList(e) {
        let s = js(this.keepAliveList);
        const t = s.indexOf(e);
        t > -1 && (s.splice(t, 1), (this.keepAliveList = s));
      },
    },
  }),
  at = He({
    id: "homeStore",
    state: () => ({
      rankList: [],
      sitemsg: {},
      isRead: !1,
      lotterySoltList: {},
      cacheData: new Map(),
      currentMenu: sessionStorage.getItem("clickedGameType") || "",
      currentTitle: "",
      homeMenu: [],
    }),
    getters: {
      getRankList: (e) => e.rankList,
      getSiteMsg: (e) => e.sitemsg,
      getReadState: (e) => e.isRead,
      getLotterySoltList: (e) => e.lotterySoltList,
      getCacheValue: (e) => (s) => e.cacheData.get(s),
      getCacheData: (e) => e.cacheData,
      getCurrentMenu: (e) => e.currentMenu,
      getCurrentTitle: (e) => e.currentTitle,
    },
    actions: {
      setRankList(e) {
        this.rankList = e;
      },
      setSiteMsg(e) {
        this.sitemsg = e;
      },
      setReadState(e) {
        this.isRead = e;
      },
      setLotterySoltList(e) {
        this.lotterySoltList = e;
      },
      setCacheData(e, s) {
        this.cacheData.set(e, s);
      },
      setCurrentMenu(e) {
        this.currentMenu = e;
      },
      setCurrentTitle(e) {
        this.currentTitle = e;
      },
      setHomeMenu(e) {
        this.homeMenu = e;
      },
    },
  });
function ot() {
  const e = {
    set(t, n, a = -1) {
      a !== -1 && (a = Date.now() + a * 1e3),
        window.localStorage.setItem(
          t,
          JSON.stringify({ value: n, expires: a })
        );
    },
    get(t) {
      const n = window.localStorage.getItem(t);
      if (n) {
        const a = JSON.parse(n);
        return a.expires !== -1 && a.expires < Date.now()
          ? (e.remove(t), null)
          : a.value;
      }
      return null;
    },
    remove(t) {
      window.localStorage.removeItem(t);
    },
  };
  return {
    localStore: e,
    cookie: {
      setCookie: function (
        t,
        n,
        a,
        c = { sameSite: "None", secure: !0, domain: location.hostname }
      ) {
        let i = "";
        if (a) {
          const b = new Date();
          b.setTime(b.getTime() + a * 24 * 60 * 60 * 1e3),
            (i = "; expires=" + b.toUTCString());
        }
        const l = c.path ? `; path=${c.path}` : "; path=/",
          g = c.domain ? `; domain=${c.domain}` : "",
          m = c.secure ? "; Secure" : "",
          d = c.sameSite ? `; SameSite=${c.sameSite}` : "";
        try {
          document.cookie = `${t}=${encodeURIComponent(n)}${i}${l}${g}${m}${d}`;
        } catch (b) {
          console.error("Failed to set cookie:", b);
        }
      },
      getCookie: function (t) {
        const n = t + "=",
          a = document.cookie.split(";");
        for (let c = 0; c < a.length; c++) {
          let i = a[c].trim();
          if (i.indexOf(n) === 0)
            return decodeURIComponent(i.substring(n.length, i.length));
        }
        return null;
      },
      remove: function (t) {
        this.setCookie(t, "", -1);
      },
    },
  };
}
let yt = !1;
function qT(e) {
  Qs(async () => {
    yt || (await e(), (yt = !0));
  });
}
function WP() {
  const e = Ae(),
    s = sn(),
    { t } = Re(),
    n = ue({ active: 0 }),
    a = j(!1),
    c = $(() => e.getUserInfo),
    i = $(
      () => s.isOpenForgetPasswordSMSState || s.isOpenForgetPasswordEmailState
    ),
    l = $(() => {
      var A, D;
      return (
        ((D = (A = c.value) == null ? void 0 : A.verifyMethods) == null
          ? void 0
          : D.google) !== "0"
      );
    }),
    g = $(() => {
      var A, D;
      return (
        ((D = (A = c.value) == null ? void 0 : A.verifyMethods) == null
          ? void 0
          : D.mobile) !== ""
      );
    }),
    m = $(() => {
      var A, D;
      return (
        ((D = (A = c.value) == null ? void 0 : A.verifyMethods) == null
          ? void 0
          : D.email) !== ""
      );
    }),
    d = $(() => s.isOpenAddBankCardOpenEmail),
    b = $(() => m.value && s.isOpenAddWithdrawEmailState),
    v = $(() => s.isOpenAddWithdrawSMSState && g.value),
    u = $(() => [l.value, b.value, v.value].some((A) => A === !0)),
    _ = $(() => {
      const A = [];
      return (
        v.value &&
          A.push({
            text: t("phoneverification"),
            title: t("SMSVerify"),
            value: "mobile",
          }),
        b.value &&
          A.push({
            text: t("emailverification"),
            title: t("EmailVerify"),
            value: "email",
          }),
        l.value &&
          A.push({
            text: t("googleverificate"),
            title: t("googleVerify"),
            value: "google",
          }),
        A
      );
    }),
    T = $(() => _.value[n.active] || {}),
    f = () => {
      a.value = !0;
    },
    w = (A) => {
      (n.active = A.selectedIndexes[0]), (a.value = !1);
    };
  return (
    qT(async () => {
      await s.getRegisterState(), s.getUserInfo({ signature: e.token });
    }),
    {
      verifyList: _,
      verifyActive: T,
      verifyModal: a,
      isOpenWithdraw: u,
      isOpenForgetPasswordSMSState: i,
      isOpenAddBankCardOpenEmail: d,
      userInfo: c,
      openVerify: f,
      onSelectVerify: w,
    }
  );
}
var zT = ((e) => (
  (e[(e.Registr = 1)] = "Registr"),
  (e[(e.resetPassword = 2)] = "resetPassword"),
  (e[(e.bindEmailMmobile = 3)] = "bindEmailMmobile"),
  (e[(e.resetEmailMmobile = 4)] = "resetEmailMmobile"),
  (e[(e.openGoogle = 5)] = "openGoogle"),
  (e[(e.addBankCard = 6)] = "addBankCard"),
  (e[(e.addUSDT = 7)] = "addUSDT"),
  (e[(e.addEWallet = 8)] = "addEWallet"),
  (e[(e.addPIX = 9)] = "addPIX"),
  (e[(e.addWave = 10)] = "addWave"),
  (e[(e.addKBZ = 11)] = "addKBZ"),
  (e[(e.addNewUPI = 13)] = "addNewUPI"),
  (e[(e.addNewUPI_N = 15)] = "addNewUPI_N"),
  (e[(e.c2cRecharge = 16)] = "c2cRecharge"),
  e
))(zT || {});
function UP({ time: e, codeType: s }) {
  const t = j(!1),
    { t: n } = Re(),
    a = j(!1),
    c = Ae(),
    i = $(() => c.getUserInfo),
    {
      start: l,
      pause: g,
      reset: m,
      current: d,
    } = Tn({
      time: e * 1e3,
      onFinish: () => {
        a.value = !1;
      },
    }),
    b = $(() => Math.ceil(d.value.total / 1e3)),
    v = async (_) => {
      var w;
      const T = _ || ((w = i.value.verifyMethods) == null ? void 0 : w.email);
      if (!T) return;
      (await L(NI({ email: T, emailType: s }))) &&
        (m(), l(), (a.value = !0), je(n("sendSuccess")));
    },
    u = async (_) => {
      var w;
      const T = _ || ((w = i.value.verifyMethods) == null ? void 0 : w.mobile);
      if (!T) return;
      (await L(OI({ phone: T, codeType: s }))) &&
        (m(), l(), (a.value = !0), je(n("sendSuccess")));
    };
  return (
    In(() => {
      (a.value = !1), g(), m();
    }),
    { loading: t, isCount: a, seconds: b, getSMSCode: u, getEmailCode: v }
  );
}
const KT = { class: "content" },
  XT = ["onClick"],
  JT = { class: "content-item-title" },
  YT = ["src"],
  QT = ["src"],
  ZT = Et({
    __name: "ServiceLIst",
    props: {
      list: {
        type: null,
        required: !0,
        default: { type: Array, default: () => [] },
      },
    },
    emits: ["onClick"],
    setup(e, { emit: s }) {
      return (t, n) => {
        const a = xt("van-icon");
        return (
          Le(),
          Ge("div", KT, [
            Ke("div", null, [
              (Le(!0),
              Ge(
                qs,
                null,
                Ot(
                  t.list,
                  (c, i) => (
                    Le(),
                    Ge(
                      "div",
                      {
                        class: "content-item",
                        key: i,
                        onClick: () => {
                          s("onClick", c);
                        },
                      },
                      [
                        Ke("div", JT, [
                          c.imageUrl
                            ? (Le(),
                              Ge(
                                "img",
                                { key: 0, src: c.imageUrl, alt: "" },
                                null,
                                8,
                                YT
                              ))
                            : (Le(),
                              Ge(
                                "img",
                                {
                                  key: 1,
                                  src: zs(qt)("main", `CStype${c.typeID}`),
                                  alt: "",
                                },
                                null,
                                8,
                                QT
                              )),
                          Ke("span", null, Mt(c.typeName || c.name), 1),
                        ]),
                        Wt(a, {
                          name: "arrow",
                          size: "18px",
                          color: "#A8A8A8",
                        }),
                      ],
                      8,
                      XT
                    )
                  )
                ),
                128
              )),
            ]),
          ])
        );
      };
    },
  });
const Xt = (e, s) => {
    const t = e.__vccOpts || e;
    for (const [n, a] of s) t[n] = a;
    return t;
  },
  eI = Xt(ZT, [
    ["__scopeId", "data-v-f4c030dd"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/components/common/ServiceLIst.vue",
    ],
  ]);
function sI(e) {
  const s = Ce(),
    { ServerType: t } = e,
    n = $(() => Te().getIsSelfCustomerService),
    a = ue({ ContactList: [], CollectionList: [] }),
    c = j(),
    i = $(() => a.ContactList),
    l = $(() => a.CollectionList);
  let g = !1;
  function m() {
    s.go(-1);
  }
  function d(w) {
    s.push({
      name:
        t == 1
          ? "Server-ServiceCollection"
          : "CustomerService-ServiceCollection",
      state: { itemId: w.typeID },
    });
  }
  function b(w) {
    if (w.url) {
      if (Xe()) ms({ url: w.url, returnType: "1", title: "" });
      else if (Se()) {
        ts("recharge", { url: w.url, returnType: "1", gameName: "" });
        return;
      }
      ns(w.url);
    }
  }
  const v = async () => {
      const w = await L(t == 1 ? UR() : WR());
      w && (a.ContactList = w.data || []);
    },
    u = async (w) => {
      const A = await L(t == 1 ? OR(w) : NR(w));
      A && (a.CollectionList = A.data || []);
    };
  async function _() {
    const w = await L(VR());
    w && (c.value = w.data || {});
  }
  return {
    List: eI,
    getIcons: ss,
    goBack: m,
    onItemClick: d,
    onClickUrl: b,
    getList: v,
    ContactList: i,
    getServiceList: u,
    CollectionList: l,
    serviceGroup: c,
    getCustomerServiceGroup: _,
    isCenterServer: n,
    getSelfCustomerServiceLink: async (w) => {
      if (g) return;
      if (!n.value) {
        s.push({ name: "CustomerService" });
        return;
      }
      g = !0;
      let A = null;
      !Se() &&
        !Xe() &&
        (A = new Promise((V) => {
          V(window.open("about:blank", "_blank"));
        }));
      const D = window.location.origin || "",
        C = await L(kt(encodeURIComponent(D))),
        R = localStorage.getItem("language") || "en";
      if (C != null && C.data) {
        if (((g = !1), Xe())) {
          AC(C.data + `&language=${R}`);
          return;
        } else if (Se()) {
          ts("recharge", {
            url: C.data + `&language=${R}`,
            returnType: "1",
            gameName: "",
          });
          return;
        }
        w === "worktraking" && (window.location.href = C.data),
          A == null ||
            A.then((V) => {
              V && (V.location.href = C.data + `&language=${R}`);
            });
      } else s.push({ name: "CustomerService" });
    },
    goToTictek: async (w, A = !1) => {
      if (g || !n.value || A || ![0, 2].includes(w.state)) return;
      g = !0;
      const D = window.location.origin || "";
      let C = null;
      Se() ||
        (C = new Promise((M) => {
          M(window.open("about:blank", "_blank"));
        }));
      const R = await L(kt(encodeURIComponent(D))),
        V = localStorage.getItem("language") || "en",
        X =
          (R == null ? void 0 : R.data) +
          `&rechargeNumber=${w.rechargeNumber}&amount=${w.price}&language=${V}`;
      if (R != null && R.data) {
        if (Xe()) ms({ url: X, returnType: "1", title: "" });
        else if (Se()) {
          ts("recharge", { url: X, returnType: "1", gameName: "" });
          return;
        }
        C == null ||
          C.then((M) => {
            M && (M.location.href = X);
          });
      }
      g = !1;
    },
  };
}
const { getSelfCustomerServiceLink: tI } = sI({ ServerType: 2 }),
  nI = $(() => Te().getIsSelfCustomerService);
function NP() {
  const e = Ce(),
    { setLoading: s } = Bs(),
    t = j(),
    n = j([]),
    a = j(!1),
    c = j({ orderCount: 0, totalReceiveAmount: 0, type: -1 }),
    i = $(
      () => !n.value.length || !n.value.filter((D) => D.isReceive === 0).length
    ),
    l = ue({ pageSize: 10 }),
    g = ue({ ruleList: [] }),
    m = $(() => g.ruleList);
  return {
    goRule: () => {
      e.push({ name: "SuperJackpot-rule" });
    },
    goStar: () => {
      e.push({ name: "SuperJackpot-star" });
    },
    onLaundy: () => {
      (a.value = !1), (c.value.type = -1), t.value.resetRefresh();
    },
    onRecived: async (A) => {
      s(!0), (await nn({ orderId: A })).msg && (s(!1), (a.value = !0)), s(!1);
    },
    goBack: () => {
      e.go(-1);
    },
    gotoCustom: () => {
      nI.value ? tI() : e.push({ name: "CustomerService" });
    },
    getRuleList: async () => {
      const A = await CR();
      A != null && A.data && (g.ruleList = A.data);
    },
    onRecivedAll: async () => {
      if (i.value) return;
      s(!0);
      const A = await L(gR());
      if (A) {
        if (
          ((c.value.orderCount = A.data.orderCount),
          (c.value.totalReceiveAmount = A.data.totalReceiveAmount),
          (a.value = !0),
          (c.value.type = 1),
          !t.value)
        )
          return;
        t.value.resetRefresh();
      }
      s(!1);
    },
    RewardsRecordPageList: n,
    listRef: t,
    DialogShow: a,
    pageQuery: l,
    ruleList: m,
    recivedAll: c,
    isRecived: i,
  };
}
function VP() {
  const { t: e } = Re(),
    s = Zs(),
    t = j(!1),
    n = [
      { label: e("all"), value: -1 },
      { label: e("about2Start"), value: 2 },
      { label: e("ongoing"), value: 1 },
      { label: e("ended"), value: 0 },
    ],
    a = [
      { label: e("all"), value: -1 },
      { label: e("ongoing"), value: 0 },
      { label: e("hasWon"), value: 2 },
    ],
    c = j(-1),
    i = j([]),
    l = j([]),
    g = $(() => i.value[0] || null),
    m = $(() => {
      var M;
      return (
        ((M = g.value) == null
          ? void 0
          : M.users.find((F) => F.isWin === !0)) || {}
      );
    }),
    d = j(),
    b = j({ pageNo: 1, status: c.value, pageSize: 10 }),
    v = j({ pageNo: 1, orderStatus: c.value, pageSize: 10 }),
    u = j(1),
    _ = j([]),
    T = $(() => {
      const M = s.query.pointsLotteryID;
      return M ? parseInt(M, 10) : null;
    }),
    f = j([]),
    w = () => {
      (i.value = []),
        (b.value.status = c.value),
        (v.value.orderStatus = c.value),
        (v.value.pageNo = b.value.pageNo = 1);
    },
    A = (M) =>
      M.map((F) => {
        F.users || (F.users = []);
        const Z = F.users.map((G) => {
          const te = [];
          return (
            G.orderInfoList.forEach((ce) => {
              te.push(...ce.ticketsInfoList.map((be) => be.ticketNumber));
            }),
            (G.addTime = G.orderInfoList[0].addTime),
            (G.tickets = te),
            (G.showAll = !1),
            (G.isWin = te.includes(M[0].winningNumber)),
            G
          );
        });
        return (F.users = Z), F;
      });
  return {
    pointTabs: n,
    myPointTabs: a,
    pointTabActive: c,
    list: i,
    myPointList: l,
    pointQuery: b,
    myPointQuery: v,
    listRef: d,
    loading: t,
    resultTicket: _,
    ticketCount: u,
    pointInfo: g,
    address: f,
    winPeople: m,
    onJoin: async () => {
      if (t.value || ((t.value = !0), !T.value)) return;
      const M = await L(oR({ pointsLotteryID: T.value, counts: u.value }));
      if (((t.value = !1), !M)) return;
      const F = M.data || [];
      _.value = F.map((Z) => Z.ticketNumber);
    },
    getPointLotteryInfo: async () => {
      if (!T.value) return;
      const M = await aR({ pointLotteryID: T.value });
      i.value = A(M.data.list);
    },
    pointRest: w,
    getAddress: async () => {
      const M = await iR();
      M && (f.value = M.data || []),
        f.value.length &&
          (f.value.find((F) => F.defaultAddress === !0) ||
            (f.value[0].defaultAddress = !0));
    },
    setDefault: async (M, F) => {
      if (F) return;
      (await L(cR({ addressId: M }))) && je(`${e("rpdsucceed")}`);
    },
    delAddress: async (M) => {
      if (await L(pR({ addressId: M }))) {
        const Z = f.value.findIndex((G) => G.addressId == M);
        f.value.splice(Z, 1), je(`${e("deleteSuccess")}`);
      }
    },
  };
}
var Jt = { exports: {} };
(function (e) {
  (function (s) {
    for (
      var t = [null, 0, {}],
        n = 10,
        a = 44032,
        c = 4352,
        i = 4449,
        l = 4519,
        g = 19,
        m = 21,
        d = 28,
        b = m * d,
        v = g * b,
        u = function (B, k) {
          (this.codepoint = B), (this.feature = k);
        },
        _ = {},
        T = [],
        f = 0;
      f <= 255;
      ++f
    )
      T[f] = 0;
    function w(B, k, H) {
      var N = _[k];
      return (
        N ||
          ((N = B(k, H)), N.feature && ++T[(k >> 8) & 255] > n && (_[k] = N)),
        N
      );
    }
    function A(B, k, H) {
      var N = k & 65280,
        S = u.udata[N] || {},
        W = S[k];
      return W ? new u(k, W) : new u(k, t);
    }
    function D(B, k, H) {
      return H ? B(k, H) : new u(k, null);
    }
    function C(B, k, H) {
      var N;
      if (k < c || (c + g <= k && k < a) || a + v < k) return B(k, H);
      if (c <= k && k < c + g) {
        var S = {},
          W = (k - c) * m;
        for (N = 0; N < m; ++N) S[i + N] = a + d * (N + W);
        return new u(k, [, , S]);
      }
      var h = k - a,
        I = h % d,
        q = [];
      if (I !== 0) q[0] = [a + h - I, l + I];
      else
        for (
          q[0] = [c + Math.floor(h / b), i + Math.floor((h % b) / d)],
            q[2] = {},
            N = 1;
          N < d;
          ++N
        )
          q[2][l + N] = k + N;
      return new u(k, q);
    }
    function R(B, k, H) {
      return k < 60 || (13311 < k && k < 42607) ? new u(k, t) : B(k, H);
    }
    var V = [R, w, D, C, A];
    (u.fromCharCode = V.reduceRight(function (B, k) {
      return function (H, N) {
        return k(B, H, N);
      };
    }, null)),
      (u.isHighSurrogate = function (B) {
        return B >= 55296 && B <= 56319;
      }),
      (u.isLowSurrogate = function (B) {
        return B >= 56320 && B <= 57343;
      }),
      (u.prototype.prepFeature = function () {
        this.feature ||
          (this.feature = u.fromCharCode(this.codepoint, !0).feature);
      }),
      (u.prototype.toString = function () {
        if (this.codepoint < 65536) return String.fromCharCode(this.codepoint);
        var B = this.codepoint - 65536;
        return String.fromCharCode(
          Math.floor(B / 1024) + 55296,
          (B % 1024) + 56320
        );
      }),
      (u.prototype.getDecomp = function () {
        return this.prepFeature(), this.feature[0] || null;
      }),
      (u.prototype.isCompatibility = function () {
        return this.prepFeature(), !!this.feature[1] && this.feature[1] & 256;
      }),
      (u.prototype.isExclude = function () {
        return this.prepFeature(), !!this.feature[1] && this.feature[1] & 512;
      }),
      (u.prototype.getCanonicalClass = function () {
        return this.prepFeature(), this.feature[1] ? this.feature[1] & 255 : 0;
      }),
      (u.prototype.getComposite = function (B) {
        if ((this.prepFeature(), !this.feature[2])) return null;
        var k = this.feature[2][B.codepoint];
        return k ? u.fromCharCode(k) : null;
      });
    var X = function (B) {
      (this.str = B), (this.cursor = 0);
    };
    X.prototype.next = function () {
      if (this.str && this.cursor < this.str.length) {
        var B = this.str.charCodeAt(this.cursor++),
          k;
        return (
          u.isHighSurrogate(B) &&
            this.cursor < this.str.length &&
            u.isLowSurrogate((k = this.str.charCodeAt(this.cursor))) &&
            ((B = (B - 55296) * 1024 + (k - 56320) + 65536), ++this.cursor),
          u.fromCharCode(B)
        );
      } else return (this.str = null), null;
    };
    var M = function (B, k) {
      (this.it = B), (this.canonical = k), (this.resBuf = []);
    };
    M.prototype.next = function () {
      function B(H, N) {
        var S = N.getDecomp();
        if (S && !(H && N.isCompatibility())) {
          for (var W = [], h = 0; h < S.length; ++h) {
            var I = B(H, u.fromCharCode(S[h]));
            W = W.concat(I);
          }
          return W;
        } else return [N];
      }
      if (this.resBuf.length === 0) {
        var k = this.it.next();
        if (!k) return null;
        this.resBuf = B(this.canonical, k);
      }
      return this.resBuf.shift();
    };
    var F = function (B) {
      (this.it = B), (this.resBuf = []);
    };
    F.prototype.next = function () {
      var B;
      if (this.resBuf.length === 0)
        do {
          var k = this.it.next();
          if (!k) break;
          B = k.getCanonicalClass();
          var H = this.resBuf.length;
          if (B !== 0)
            for (; H > 0; --H) {
              var N = this.resBuf[H - 1],
                S = N.getCanonicalClass();
              if (S <= B) break;
            }
          this.resBuf.splice(H, 0, k);
        } while (B !== 0);
      return this.resBuf.shift();
    };
    var Z = function (B) {
      (this.it = B),
        (this.procBuf = []),
        (this.resBuf = []),
        (this.lastClass = null);
    };
    Z.prototype.next = function () {
      for (; this.resBuf.length === 0; ) {
        var B = this.it.next();
        if (!B) {
          (this.resBuf = this.procBuf), (this.procBuf = []);
          break;
        }
        if (this.procBuf.length === 0)
          (this.lastClass = B.getCanonicalClass()), this.procBuf.push(B);
        else {
          var k = this.procBuf[0],
            H = k.getComposite(B),
            N = B.getCanonicalClass();
          H && (this.lastClass < N || this.lastClass === 0)
            ? (this.procBuf[0] = H)
            : (N === 0 && ((this.resBuf = this.procBuf), (this.procBuf = [])),
              (this.lastClass = N),
              this.procBuf.push(B));
        }
      }
      return this.resBuf.shift();
    };
    var G = function (B, k) {
        switch (B) {
          case "NFD":
            return new F(new M(new X(k), !0));
          case "NFKD":
            return new F(new M(new X(k), !1));
          case "NFC":
            return new Z(new F(new M(new X(k), !0)));
          case "NFKC":
            return new Z(new F(new M(new X(k), !1)));
        }
        throw B + " is invalid";
      },
      te = function (B, k) {
        for (var H = G(B, k), N = "", S; (S = H.next()); ) N += S.toString();
        return N;
      };
    function ce(B) {
      return te("NFD", B);
    }
    function be(B) {
      return te("NFKD", B);
    }
    function Ie(B) {
      return te("NFC", B);
    }
    function Ee(B) {
      return te("NFKC", B);
    }
    u.udata = {
      0: {
        60: [, , { 824: 8814 }],
        61: [, , { 824: 8800 }],
        62: [, , { 824: 8815 }],
        65: [
          ,
          ,
          {
            768: 192,
            769: 193,
            770: 194,
            771: 195,
            772: 256,
            774: 258,
            775: 550,
            776: 196,
            777: 7842,
            778: 197,
            780: 461,
            783: 512,
            785: 514,
            803: 7840,
            805: 7680,
            808: 260,
          },
        ],
        66: [, , { 775: 7682, 803: 7684, 817: 7686 }],
        67: [, , { 769: 262, 770: 264, 775: 266, 780: 268, 807: 199 }],
        68: [
          ,
          ,
          { 775: 7690, 780: 270, 803: 7692, 807: 7696, 813: 7698, 817: 7694 },
        ],
        69: [
          ,
          ,
          {
            768: 200,
            769: 201,
            770: 202,
            771: 7868,
            772: 274,
            774: 276,
            775: 278,
            776: 203,
            777: 7866,
            780: 282,
            783: 516,
            785: 518,
            803: 7864,
            807: 552,
            808: 280,
            813: 7704,
            816: 7706,
          },
        ],
        70: [, , { 775: 7710 }],
        71: [
          ,
          ,
          {
            769: 500,
            770: 284,
            772: 7712,
            774: 286,
            775: 288,
            780: 486,
            807: 290,
          },
        ],
        72: [
          ,
          ,
          {
            770: 292,
            775: 7714,
            776: 7718,
            780: 542,
            803: 7716,
            807: 7720,
            814: 7722,
          },
        ],
        73: [
          ,
          ,
          {
            768: 204,
            769: 205,
            770: 206,
            771: 296,
            772: 298,
            774: 300,
            775: 304,
            776: 207,
            777: 7880,
            780: 463,
            783: 520,
            785: 522,
            803: 7882,
            808: 302,
            816: 7724,
          },
        ],
        74: [, , { 770: 308 }],
        75: [, , { 769: 7728, 780: 488, 803: 7730, 807: 310, 817: 7732 }],
        76: [
          ,
          ,
          { 769: 313, 780: 317, 803: 7734, 807: 315, 813: 7740, 817: 7738 },
        ],
        77: [, , { 769: 7742, 775: 7744, 803: 7746 }],
        78: [
          ,
          ,
          {
            768: 504,
            769: 323,
            771: 209,
            775: 7748,
            780: 327,
            803: 7750,
            807: 325,
            813: 7754,
            817: 7752,
          },
        ],
        79: [
          ,
          ,
          {
            768: 210,
            769: 211,
            770: 212,
            771: 213,
            772: 332,
            774: 334,
            775: 558,
            776: 214,
            777: 7886,
            779: 336,
            780: 465,
            783: 524,
            785: 526,
            795: 416,
            803: 7884,
            808: 490,
          },
        ],
        80: [, , { 769: 7764, 775: 7766 }],
        82: [
          ,
          ,
          {
            769: 340,
            775: 7768,
            780: 344,
            783: 528,
            785: 530,
            803: 7770,
            807: 342,
            817: 7774,
          },
        ],
        83: [
          ,
          ,
          {
            769: 346,
            770: 348,
            775: 7776,
            780: 352,
            803: 7778,
            806: 536,
            807: 350,
          },
        ],
        84: [
          ,
          ,
          {
            775: 7786,
            780: 356,
            803: 7788,
            806: 538,
            807: 354,
            813: 7792,
            817: 7790,
          },
        ],
        85: [
          ,
          ,
          {
            768: 217,
            769: 218,
            770: 219,
            771: 360,
            772: 362,
            774: 364,
            776: 220,
            777: 7910,
            778: 366,
            779: 368,
            780: 467,
            783: 532,
            785: 534,
            795: 431,
            803: 7908,
            804: 7794,
            808: 370,
            813: 7798,
            816: 7796,
          },
        ],
        86: [, , { 771: 7804, 803: 7806 }],
        87: [
          ,
          ,
          { 768: 7808, 769: 7810, 770: 372, 775: 7814, 776: 7812, 803: 7816 },
        ],
        88: [, , { 775: 7818, 776: 7820 }],
        89: [
          ,
          ,
          {
            768: 7922,
            769: 221,
            770: 374,
            771: 7928,
            772: 562,
            775: 7822,
            776: 376,
            777: 7926,
            803: 7924,
          },
        ],
        90: [
          ,
          ,
          { 769: 377, 770: 7824, 775: 379, 780: 381, 803: 7826, 817: 7828 },
        ],
        97: [
          ,
          ,
          {
            768: 224,
            769: 225,
            770: 226,
            771: 227,
            772: 257,
            774: 259,
            775: 551,
            776: 228,
            777: 7843,
            778: 229,
            780: 462,
            783: 513,
            785: 515,
            803: 7841,
            805: 7681,
            808: 261,
          },
        ],
        98: [, , { 775: 7683, 803: 7685, 817: 7687 }],
        99: [, , { 769: 263, 770: 265, 775: 267, 780: 269, 807: 231 }],
        100: [
          ,
          ,
          { 775: 7691, 780: 271, 803: 7693, 807: 7697, 813: 7699, 817: 7695 },
        ],
        101: [
          ,
          ,
          {
            768: 232,
            769: 233,
            770: 234,
            771: 7869,
            772: 275,
            774: 277,
            775: 279,
            776: 235,
            777: 7867,
            780: 283,
            783: 517,
            785: 519,
            803: 7865,
            807: 553,
            808: 281,
            813: 7705,
            816: 7707,
          },
        ],
        102: [, , { 775: 7711 }],
        103: [
          ,
          ,
          {
            769: 501,
            770: 285,
            772: 7713,
            774: 287,
            775: 289,
            780: 487,
            807: 291,
          },
        ],
        104: [
          ,
          ,
          {
            770: 293,
            775: 7715,
            776: 7719,
            780: 543,
            803: 7717,
            807: 7721,
            814: 7723,
            817: 7830,
          },
        ],
        105: [
          ,
          ,
          {
            768: 236,
            769: 237,
            770: 238,
            771: 297,
            772: 299,
            774: 301,
            776: 239,
            777: 7881,
            780: 464,
            783: 521,
            785: 523,
            803: 7883,
            808: 303,
            816: 7725,
          },
        ],
        106: [, , { 770: 309, 780: 496 }],
        107: [, , { 769: 7729, 780: 489, 803: 7731, 807: 311, 817: 7733 }],
        108: [
          ,
          ,
          { 769: 314, 780: 318, 803: 7735, 807: 316, 813: 7741, 817: 7739 },
        ],
        109: [, , { 769: 7743, 775: 7745, 803: 7747 }],
        110: [
          ,
          ,
          {
            768: 505,
            769: 324,
            771: 241,
            775: 7749,
            780: 328,
            803: 7751,
            807: 326,
            813: 7755,
            817: 7753,
          },
        ],
        111: [
          ,
          ,
          {
            768: 242,
            769: 243,
            770: 244,
            771: 245,
            772: 333,
            774: 335,
            775: 559,
            776: 246,
            777: 7887,
            779: 337,
            780: 466,
            783: 525,
            785: 527,
            795: 417,
            803: 7885,
            808: 491,
          },
        ],
        112: [, , { 769: 7765, 775: 7767 }],
        114: [
          ,
          ,
          {
            769: 341,
            775: 7769,
            780: 345,
            783: 529,
            785: 531,
            803: 7771,
            807: 343,
            817: 7775,
          },
        ],
        115: [
          ,
          ,
          {
            769: 347,
            770: 349,
            775: 7777,
            780: 353,
            803: 7779,
            806: 537,
            807: 351,
          },
        ],
        116: [
          ,
          ,
          {
            775: 7787,
            776: 7831,
            780: 357,
            803: 7789,
            806: 539,
            807: 355,
            813: 7793,
            817: 7791,
          },
        ],
        117: [
          ,
          ,
          {
            768: 249,
            769: 250,
            770: 251,
            771: 361,
            772: 363,
            774: 365,
            776: 252,
            777: 7911,
            778: 367,
            779: 369,
            780: 468,
            783: 533,
            785: 535,
            795: 432,
            803: 7909,
            804: 7795,
            808: 371,
            813: 7799,
            816: 7797,
          },
        ],
        118: [, , { 771: 7805, 803: 7807 }],
        119: [
          ,
          ,
          {
            768: 7809,
            769: 7811,
            770: 373,
            775: 7815,
            776: 7813,
            778: 7832,
            803: 7817,
          },
        ],
        120: [, , { 775: 7819, 776: 7821 }],
        121: [
          ,
          ,
          {
            768: 7923,
            769: 253,
            770: 375,
            771: 7929,
            772: 563,
            775: 7823,
            776: 255,
            777: 7927,
            778: 7833,
            803: 7925,
          },
        ],
        122: [
          ,
          ,
          { 769: 378, 770: 7825, 775: 380, 780: 382, 803: 7827, 817: 7829 },
        ],
        160: [[32], 256],
        168: [[32, 776], 256, { 768: 8173, 769: 901, 834: 8129 }],
        170: [[97], 256],
        175: [[32, 772], 256],
        178: [[50], 256],
        179: [[51], 256],
        180: [[32, 769], 256],
        181: [[956], 256],
        184: [[32, 807], 256],
        185: [[49], 256],
        186: [[111], 256],
        188: [[49, 8260, 52], 256],
        189: [[49, 8260, 50], 256],
        190: [[51, 8260, 52], 256],
        192: [[65, 768]],
        193: [[65, 769]],
        194: [[65, 770], , { 768: 7846, 769: 7844, 771: 7850, 777: 7848 }],
        195: [[65, 771]],
        196: [[65, 776], , { 772: 478 }],
        197: [[65, 778], , { 769: 506 }],
        198: [, , { 769: 508, 772: 482 }],
        199: [[67, 807], , { 769: 7688 }],
        200: [[69, 768]],
        201: [[69, 769]],
        202: [[69, 770], , { 768: 7872, 769: 7870, 771: 7876, 777: 7874 }],
        203: [[69, 776]],
        204: [[73, 768]],
        205: [[73, 769]],
        206: [[73, 770]],
        207: [[73, 776], , { 769: 7726 }],
        209: [[78, 771]],
        210: [[79, 768]],
        211: [[79, 769]],
        212: [[79, 770], , { 768: 7890, 769: 7888, 771: 7894, 777: 7892 }],
        213: [[79, 771], , { 769: 7756, 772: 556, 776: 7758 }],
        214: [[79, 776], , { 772: 554 }],
        216: [, , { 769: 510 }],
        217: [[85, 768]],
        218: [[85, 769]],
        219: [[85, 770]],
        220: [[85, 776], , { 768: 475, 769: 471, 772: 469, 780: 473 }],
        221: [[89, 769]],
        224: [[97, 768]],
        225: [[97, 769]],
        226: [[97, 770], , { 768: 7847, 769: 7845, 771: 7851, 777: 7849 }],
        227: [[97, 771]],
        228: [[97, 776], , { 772: 479 }],
        229: [[97, 778], , { 769: 507 }],
        230: [, , { 769: 509, 772: 483 }],
        231: [[99, 807], , { 769: 7689 }],
        232: [[101, 768]],
        233: [[101, 769]],
        234: [[101, 770], , { 768: 7873, 769: 7871, 771: 7877, 777: 7875 }],
        235: [[101, 776]],
        236: [[105, 768]],
        237: [[105, 769]],
        238: [[105, 770]],
        239: [[105, 776], , { 769: 7727 }],
        241: [[110, 771]],
        242: [[111, 768]],
        243: [[111, 769]],
        244: [[111, 770], , { 768: 7891, 769: 7889, 771: 7895, 777: 7893 }],
        245: [[111, 771], , { 769: 7757, 772: 557, 776: 7759 }],
        246: [[111, 776], , { 772: 555 }],
        248: [, , { 769: 511 }],
        249: [[117, 768]],
        250: [[117, 769]],
        251: [[117, 770]],
        252: [[117, 776], , { 768: 476, 769: 472, 772: 470, 780: 474 }],
        253: [[121, 769]],
        255: [[121, 776]],
      },
      256: {
        256: [[65, 772]],
        257: [[97, 772]],
        258: [[65, 774], , { 768: 7856, 769: 7854, 771: 7860, 777: 7858 }],
        259: [[97, 774], , { 768: 7857, 769: 7855, 771: 7861, 777: 7859 }],
        260: [[65, 808]],
        261: [[97, 808]],
        262: [[67, 769]],
        263: [[99, 769]],
        264: [[67, 770]],
        265: [[99, 770]],
        266: [[67, 775]],
        267: [[99, 775]],
        268: [[67, 780]],
        269: [[99, 780]],
        270: [[68, 780]],
        271: [[100, 780]],
        274: [[69, 772], , { 768: 7700, 769: 7702 }],
        275: [[101, 772], , { 768: 7701, 769: 7703 }],
        276: [[69, 774]],
        277: [[101, 774]],
        278: [[69, 775]],
        279: [[101, 775]],
        280: [[69, 808]],
        281: [[101, 808]],
        282: [[69, 780]],
        283: [[101, 780]],
        284: [[71, 770]],
        285: [[103, 770]],
        286: [[71, 774]],
        287: [[103, 774]],
        288: [[71, 775]],
        289: [[103, 775]],
        290: [[71, 807]],
        291: [[103, 807]],
        292: [[72, 770]],
        293: [[104, 770]],
        296: [[73, 771]],
        297: [[105, 771]],
        298: [[73, 772]],
        299: [[105, 772]],
        300: [[73, 774]],
        301: [[105, 774]],
        302: [[73, 808]],
        303: [[105, 808]],
        304: [[73, 775]],
        306: [[73, 74], 256],
        307: [[105, 106], 256],
        308: [[74, 770]],
        309: [[106, 770]],
        310: [[75, 807]],
        311: [[107, 807]],
        313: [[76, 769]],
        314: [[108, 769]],
        315: [[76, 807]],
        316: [[108, 807]],
        317: [[76, 780]],
        318: [[108, 780]],
        319: [[76, 183], 256],
        320: [[108, 183], 256],
        323: [[78, 769]],
        324: [[110, 769]],
        325: [[78, 807]],
        326: [[110, 807]],
        327: [[78, 780]],
        328: [[110, 780]],
        329: [[700, 110], 256],
        332: [[79, 772], , { 768: 7760, 769: 7762 }],
        333: [[111, 772], , { 768: 7761, 769: 7763 }],
        334: [[79, 774]],
        335: [[111, 774]],
        336: [[79, 779]],
        337: [[111, 779]],
        340: [[82, 769]],
        341: [[114, 769]],
        342: [[82, 807]],
        343: [[114, 807]],
        344: [[82, 780]],
        345: [[114, 780]],
        346: [[83, 769], , { 775: 7780 }],
        347: [[115, 769], , { 775: 7781 }],
        348: [[83, 770]],
        349: [[115, 770]],
        350: [[83, 807]],
        351: [[115, 807]],
        352: [[83, 780], , { 775: 7782 }],
        353: [[115, 780], , { 775: 7783 }],
        354: [[84, 807]],
        355: [[116, 807]],
        356: [[84, 780]],
        357: [[116, 780]],
        360: [[85, 771], , { 769: 7800 }],
        361: [[117, 771], , { 769: 7801 }],
        362: [[85, 772], , { 776: 7802 }],
        363: [[117, 772], , { 776: 7803 }],
        364: [[85, 774]],
        365: [[117, 774]],
        366: [[85, 778]],
        367: [[117, 778]],
        368: [[85, 779]],
        369: [[117, 779]],
        370: [[85, 808]],
        371: [[117, 808]],
        372: [[87, 770]],
        373: [[119, 770]],
        374: [[89, 770]],
        375: [[121, 770]],
        376: [[89, 776]],
        377: [[90, 769]],
        378: [[122, 769]],
        379: [[90, 775]],
        380: [[122, 775]],
        381: [[90, 780]],
        382: [[122, 780]],
        383: [[115], 256, { 775: 7835 }],
        416: [
          [79, 795],
          ,
          { 768: 7900, 769: 7898, 771: 7904, 777: 7902, 803: 7906 },
        ],
        417: [
          [111, 795],
          ,
          { 768: 7901, 769: 7899, 771: 7905, 777: 7903, 803: 7907 },
        ],
        431: [
          [85, 795],
          ,
          { 768: 7914, 769: 7912, 771: 7918, 777: 7916, 803: 7920 },
        ],
        432: [
          [117, 795],
          ,
          { 768: 7915, 769: 7913, 771: 7919, 777: 7917, 803: 7921 },
        ],
        439: [, , { 780: 494 }],
        452: [[68, 381], 256],
        453: [[68, 382], 256],
        454: [[100, 382], 256],
        455: [[76, 74], 256],
        456: [[76, 106], 256],
        457: [[108, 106], 256],
        458: [[78, 74], 256],
        459: [[78, 106], 256],
        460: [[110, 106], 256],
        461: [[65, 780]],
        462: [[97, 780]],
        463: [[73, 780]],
        464: [[105, 780]],
        465: [[79, 780]],
        466: [[111, 780]],
        467: [[85, 780]],
        468: [[117, 780]],
        469: [[220, 772]],
        470: [[252, 772]],
        471: [[220, 769]],
        472: [[252, 769]],
        473: [[220, 780]],
        474: [[252, 780]],
        475: [[220, 768]],
        476: [[252, 768]],
        478: [[196, 772]],
        479: [[228, 772]],
        480: [[550, 772]],
        481: [[551, 772]],
        482: [[198, 772]],
        483: [[230, 772]],
        486: [[71, 780]],
        487: [[103, 780]],
        488: [[75, 780]],
        489: [[107, 780]],
        490: [[79, 808], , { 772: 492 }],
        491: [[111, 808], , { 772: 493 }],
        492: [[490, 772]],
        493: [[491, 772]],
        494: [[439, 780]],
        495: [[658, 780]],
        496: [[106, 780]],
        497: [[68, 90], 256],
        498: [[68, 122], 256],
        499: [[100, 122], 256],
        500: [[71, 769]],
        501: [[103, 769]],
        504: [[78, 768]],
        505: [[110, 768]],
        506: [[197, 769]],
        507: [[229, 769]],
        508: [[198, 769]],
        509: [[230, 769]],
        510: [[216, 769]],
        511: [[248, 769]],
        66045: [, 220],
      },
      512: {
        512: [[65, 783]],
        513: [[97, 783]],
        514: [[65, 785]],
        515: [[97, 785]],
        516: [[69, 783]],
        517: [[101, 783]],
        518: [[69, 785]],
        519: [[101, 785]],
        520: [[73, 783]],
        521: [[105, 783]],
        522: [[73, 785]],
        523: [[105, 785]],
        524: [[79, 783]],
        525: [[111, 783]],
        526: [[79, 785]],
        527: [[111, 785]],
        528: [[82, 783]],
        529: [[114, 783]],
        530: [[82, 785]],
        531: [[114, 785]],
        532: [[85, 783]],
        533: [[117, 783]],
        534: [[85, 785]],
        535: [[117, 785]],
        536: [[83, 806]],
        537: [[115, 806]],
        538: [[84, 806]],
        539: [[116, 806]],
        542: [[72, 780]],
        543: [[104, 780]],
        550: [[65, 775], , { 772: 480 }],
        551: [[97, 775], , { 772: 481 }],
        552: [[69, 807], , { 774: 7708 }],
        553: [[101, 807], , { 774: 7709 }],
        554: [[214, 772]],
        555: [[246, 772]],
        556: [[213, 772]],
        557: [[245, 772]],
        558: [[79, 775], , { 772: 560 }],
        559: [[111, 775], , { 772: 561 }],
        560: [[558, 772]],
        561: [[559, 772]],
        562: [[89, 772]],
        563: [[121, 772]],
        658: [, , { 780: 495 }],
        688: [[104], 256],
        689: [[614], 256],
        690: [[106], 256],
        691: [[114], 256],
        692: [[633], 256],
        693: [[635], 256],
        694: [[641], 256],
        695: [[119], 256],
        696: [[121], 256],
        728: [[32, 774], 256],
        729: [[32, 775], 256],
        730: [[32, 778], 256],
        731: [[32, 808], 256],
        732: [[32, 771], 256],
        733: [[32, 779], 256],
        736: [[611], 256],
        737: [[108], 256],
        738: [[115], 256],
        739: [[120], 256],
        740: [[661], 256],
        66272: [, 220],
      },
      768: {
        768: [, 230],
        769: [, 230],
        770: [, 230],
        771: [, 230],
        772: [, 230],
        773: [, 230],
        774: [, 230],
        775: [, 230],
        776: [, 230, { 769: 836 }],
        777: [, 230],
        778: [, 230],
        779: [, 230],
        780: [, 230],
        781: [, 230],
        782: [, 230],
        783: [, 230],
        784: [, 230],
        785: [, 230],
        786: [, 230],
        787: [, 230],
        788: [, 230],
        789: [, 232],
        790: [, 220],
        791: [, 220],
        792: [, 220],
        793: [, 220],
        794: [, 232],
        795: [, 216],
        796: [, 220],
        797: [, 220],
        798: [, 220],
        799: [, 220],
        800: [, 220],
        801: [, 202],
        802: [, 202],
        803: [, 220],
        804: [, 220],
        805: [, 220],
        806: [, 220],
        807: [, 202],
        808: [, 202],
        809: [, 220],
        810: [, 220],
        811: [, 220],
        812: [, 220],
        813: [, 220],
        814: [, 220],
        815: [, 220],
        816: [, 220],
        817: [, 220],
        818: [, 220],
        819: [, 220],
        820: [, 1],
        821: [, 1],
        822: [, 1],
        823: [, 1],
        824: [, 1],
        825: [, 220],
        826: [, 220],
        827: [, 220],
        828: [, 220],
        829: [, 230],
        830: [, 230],
        831: [, 230],
        832: [[768], 230],
        833: [[769], 230],
        834: [, 230],
        835: [[787], 230],
        836: [[776, 769], 230],
        837: [, 240],
        838: [, 230],
        839: [, 220],
        840: [, 220],
        841: [, 220],
        842: [, 230],
        843: [, 230],
        844: [, 230],
        845: [, 220],
        846: [, 220],
        848: [, 230],
        849: [, 230],
        850: [, 230],
        851: [, 220],
        852: [, 220],
        853: [, 220],
        854: [, 220],
        855: [, 230],
        856: [, 232],
        857: [, 220],
        858: [, 220],
        859: [, 230],
        860: [, 233],
        861: [, 234],
        862: [, 234],
        863: [, 233],
        864: [, 234],
        865: [, 234],
        866: [, 233],
        867: [, 230],
        868: [, 230],
        869: [, 230],
        870: [, 230],
        871: [, 230],
        872: [, 230],
        873: [, 230],
        874: [, 230],
        875: [, 230],
        876: [, 230],
        877: [, 230],
        878: [, 230],
        879: [, 230],
        884: [[697]],
        890: [[32, 837], 256],
        894: [[59]],
        900: [[32, 769], 256],
        901: [[168, 769]],
        902: [[913, 769]],
        903: [[183]],
        904: [[917, 769]],
        905: [[919, 769]],
        906: [[921, 769]],
        908: [[927, 769]],
        910: [[933, 769]],
        911: [[937, 769]],
        912: [[970, 769]],
        913: [
          ,
          ,
          {
            768: 8122,
            769: 902,
            772: 8121,
            774: 8120,
            787: 7944,
            788: 7945,
            837: 8124,
          },
        ],
        917: [, , { 768: 8136, 769: 904, 787: 7960, 788: 7961 }],
        919: [, , { 768: 8138, 769: 905, 787: 7976, 788: 7977, 837: 8140 }],
        921: [
          ,
          ,
          {
            768: 8154,
            769: 906,
            772: 8153,
            774: 8152,
            776: 938,
            787: 7992,
            788: 7993,
          },
        ],
        927: [, , { 768: 8184, 769: 908, 787: 8008, 788: 8009 }],
        929: [, , { 788: 8172 }],
        933: [
          ,
          ,
          { 768: 8170, 769: 910, 772: 8169, 774: 8168, 776: 939, 788: 8025 },
        ],
        937: [, , { 768: 8186, 769: 911, 787: 8040, 788: 8041, 837: 8188 }],
        938: [[921, 776]],
        939: [[933, 776]],
        940: [[945, 769], , { 837: 8116 }],
        941: [[949, 769]],
        942: [[951, 769], , { 837: 8132 }],
        943: [[953, 769]],
        944: [[971, 769]],
        945: [
          ,
          ,
          {
            768: 8048,
            769: 940,
            772: 8113,
            774: 8112,
            787: 7936,
            788: 7937,
            834: 8118,
            837: 8115,
          },
        ],
        949: [, , { 768: 8050, 769: 941, 787: 7952, 788: 7953 }],
        951: [
          ,
          ,
          { 768: 8052, 769: 942, 787: 7968, 788: 7969, 834: 8134, 837: 8131 },
        ],
        953: [
          ,
          ,
          {
            768: 8054,
            769: 943,
            772: 8145,
            774: 8144,
            776: 970,
            787: 7984,
            788: 7985,
            834: 8150,
          },
        ],
        959: [, , { 768: 8056, 769: 972, 787: 8e3, 788: 8001 }],
        961: [, , { 787: 8164, 788: 8165 }],
        965: [
          ,
          ,
          {
            768: 8058,
            769: 973,
            772: 8161,
            774: 8160,
            776: 971,
            787: 8016,
            788: 8017,
            834: 8166,
          },
        ],
        969: [
          ,
          ,
          { 768: 8060, 769: 974, 787: 8032, 788: 8033, 834: 8182, 837: 8179 },
        ],
        970: [[953, 776], , { 768: 8146, 769: 912, 834: 8151 }],
        971: [[965, 776], , { 768: 8162, 769: 944, 834: 8167 }],
        972: [[959, 769]],
        973: [[965, 769]],
        974: [[969, 769], , { 837: 8180 }],
        976: [[946], 256],
        977: [[952], 256],
        978: [[933], 256, { 769: 979, 776: 980 }],
        979: [[978, 769]],
        980: [[978, 776]],
        981: [[966], 256],
        982: [[960], 256],
        1008: [[954], 256],
        1009: [[961], 256],
        1010: [[962], 256],
        1012: [[920], 256],
        1013: [[949], 256],
        1017: [[931], 256],
        66422: [, 230],
        66423: [, 230],
        66424: [, 230],
        66425: [, 230],
        66426: [, 230],
      },
      1024: {
        1024: [[1045, 768]],
        1025: [[1045, 776]],
        1027: [[1043, 769]],
        1030: [, , { 776: 1031 }],
        1031: [[1030, 776]],
        1036: [[1050, 769]],
        1037: [[1048, 768]],
        1038: [[1059, 774]],
        1040: [, , { 774: 1232, 776: 1234 }],
        1043: [, , { 769: 1027 }],
        1045: [, , { 768: 1024, 774: 1238, 776: 1025 }],
        1046: [, , { 774: 1217, 776: 1244 }],
        1047: [, , { 776: 1246 }],
        1048: [, , { 768: 1037, 772: 1250, 774: 1049, 776: 1252 }],
        1049: [[1048, 774]],
        1050: [, , { 769: 1036 }],
        1054: [, , { 776: 1254 }],
        1059: [, , { 772: 1262, 774: 1038, 776: 1264, 779: 1266 }],
        1063: [, , { 776: 1268 }],
        1067: [, , { 776: 1272 }],
        1069: [, , { 776: 1260 }],
        1072: [, , { 774: 1233, 776: 1235 }],
        1075: [, , { 769: 1107 }],
        1077: [, , { 768: 1104, 774: 1239, 776: 1105 }],
        1078: [, , { 774: 1218, 776: 1245 }],
        1079: [, , { 776: 1247 }],
        1080: [, , { 768: 1117, 772: 1251, 774: 1081, 776: 1253 }],
        1081: [[1080, 774]],
        1082: [, , { 769: 1116 }],
        1086: [, , { 776: 1255 }],
        1091: [, , { 772: 1263, 774: 1118, 776: 1265, 779: 1267 }],
        1095: [, , { 776: 1269 }],
        1099: [, , { 776: 1273 }],
        1101: [, , { 776: 1261 }],
        1104: [[1077, 768]],
        1105: [[1077, 776]],
        1107: [[1075, 769]],
        1110: [, , { 776: 1111 }],
        1111: [[1110, 776]],
        1116: [[1082, 769]],
        1117: [[1080, 768]],
        1118: [[1091, 774]],
        1140: [, , { 783: 1142 }],
        1141: [, , { 783: 1143 }],
        1142: [[1140, 783]],
        1143: [[1141, 783]],
        1155: [, 230],
        1156: [, 230],
        1157: [, 230],
        1158: [, 230],
        1159: [, 230],
        1217: [[1046, 774]],
        1218: [[1078, 774]],
        1232: [[1040, 774]],
        1233: [[1072, 774]],
        1234: [[1040, 776]],
        1235: [[1072, 776]],
        1238: [[1045, 774]],
        1239: [[1077, 774]],
        1240: [, , { 776: 1242 }],
        1241: [, , { 776: 1243 }],
        1242: [[1240, 776]],
        1243: [[1241, 776]],
        1244: [[1046, 776]],
        1245: [[1078, 776]],
        1246: [[1047, 776]],
        1247: [[1079, 776]],
        1250: [[1048, 772]],
        1251: [[1080, 772]],
        1252: [[1048, 776]],
        1253: [[1080, 776]],
        1254: [[1054, 776]],
        1255: [[1086, 776]],
        1256: [, , { 776: 1258 }],
        1257: [, , { 776: 1259 }],
        1258: [[1256, 776]],
        1259: [[1257, 776]],
        1260: [[1069, 776]],
        1261: [[1101, 776]],
        1262: [[1059, 772]],
        1263: [[1091, 772]],
        1264: [[1059, 776]],
        1265: [[1091, 776]],
        1266: [[1059, 779]],
        1267: [[1091, 779]],
        1268: [[1063, 776]],
        1269: [[1095, 776]],
        1272: [[1067, 776]],
        1273: [[1099, 776]],
      },
      1280: {
        1415: [[1381, 1410], 256],
        1425: [, 220],
        1426: [, 230],
        1427: [, 230],
        1428: [, 230],
        1429: [, 230],
        1430: [, 220],
        1431: [, 230],
        1432: [, 230],
        1433: [, 230],
        1434: [, 222],
        1435: [, 220],
        1436: [, 230],
        1437: [, 230],
        1438: [, 230],
        1439: [, 230],
        1440: [, 230],
        1441: [, 230],
        1442: [, 220],
        1443: [, 220],
        1444: [, 220],
        1445: [, 220],
        1446: [, 220],
        1447: [, 220],
        1448: [, 230],
        1449: [, 230],
        1450: [, 220],
        1451: [, 230],
        1452: [, 230],
        1453: [, 222],
        1454: [, 228],
        1455: [, 230],
        1456: [, 10],
        1457: [, 11],
        1458: [, 12],
        1459: [, 13],
        1460: [, 14],
        1461: [, 15],
        1462: [, 16],
        1463: [, 17],
        1464: [, 18],
        1465: [, 19],
        1466: [, 19],
        1467: [, 20],
        1468: [, 21],
        1469: [, 22],
        1471: [, 23],
        1473: [, 24],
        1474: [, 25],
        1476: [, 230],
        1477: [, 220],
        1479: [, 18],
      },
      1536: {
        1552: [, 230],
        1553: [, 230],
        1554: [, 230],
        1555: [, 230],
        1556: [, 230],
        1557: [, 230],
        1558: [, 230],
        1559: [, 230],
        1560: [, 30],
        1561: [, 31],
        1562: [, 32],
        1570: [[1575, 1619]],
        1571: [[1575, 1620]],
        1572: [[1608, 1620]],
        1573: [[1575, 1621]],
        1574: [[1610, 1620]],
        1575: [, , { 1619: 1570, 1620: 1571, 1621: 1573 }],
        1608: [, , { 1620: 1572 }],
        1610: [, , { 1620: 1574 }],
        1611: [, 27],
        1612: [, 28],
        1613: [, 29],
        1614: [, 30],
        1615: [, 31],
        1616: [, 32],
        1617: [, 33],
        1618: [, 34],
        1619: [, 230],
        1620: [, 230],
        1621: [, 220],
        1622: [, 220],
        1623: [, 230],
        1624: [, 230],
        1625: [, 230],
        1626: [, 230],
        1627: [, 230],
        1628: [, 220],
        1629: [, 230],
        1630: [, 230],
        1631: [, 220],
        1648: [, 35],
        1653: [[1575, 1652], 256],
        1654: [[1608, 1652], 256],
        1655: [[1735, 1652], 256],
        1656: [[1610, 1652], 256],
        1728: [[1749, 1620]],
        1729: [, , { 1620: 1730 }],
        1730: [[1729, 1620]],
        1746: [, , { 1620: 1747 }],
        1747: [[1746, 1620]],
        1749: [, , { 1620: 1728 }],
        1750: [, 230],
        1751: [, 230],
        1752: [, 230],
        1753: [, 230],
        1754: [, 230],
        1755: [, 230],
        1756: [, 230],
        1759: [, 230],
        1760: [, 230],
        1761: [, 230],
        1762: [, 230],
        1763: [, 220],
        1764: [, 230],
        1767: [, 230],
        1768: [, 230],
        1770: [, 220],
        1771: [, 230],
        1772: [, 230],
        1773: [, 220],
      },
      1792: {
        1809: [, 36],
        1840: [, 230],
        1841: [, 220],
        1842: [, 230],
        1843: [, 230],
        1844: [, 220],
        1845: [, 230],
        1846: [, 230],
        1847: [, 220],
        1848: [, 220],
        1849: [, 220],
        1850: [, 230],
        1851: [, 220],
        1852: [, 220],
        1853: [, 230],
        1854: [, 220],
        1855: [, 230],
        1856: [, 230],
        1857: [, 230],
        1858: [, 220],
        1859: [, 230],
        1860: [, 220],
        1861: [, 230],
        1862: [, 220],
        1863: [, 230],
        1864: [, 220],
        1865: [, 230],
        1866: [, 230],
        2027: [, 230],
        2028: [, 230],
        2029: [, 230],
        2030: [, 230],
        2031: [, 230],
        2032: [, 230],
        2033: [, 230],
        2034: [, 220],
        2035: [, 230],
      },
      2048: {
        2070: [, 230],
        2071: [, 230],
        2072: [, 230],
        2073: [, 230],
        2075: [, 230],
        2076: [, 230],
        2077: [, 230],
        2078: [, 230],
        2079: [, 230],
        2080: [, 230],
        2081: [, 230],
        2082: [, 230],
        2083: [, 230],
        2085: [, 230],
        2086: [, 230],
        2087: [, 230],
        2089: [, 230],
        2090: [, 230],
        2091: [, 230],
        2092: [, 230],
        2093: [, 230],
        2137: [, 220],
        2138: [, 220],
        2139: [, 220],
        2276: [, 230],
        2277: [, 230],
        2278: [, 220],
        2279: [, 230],
        2280: [, 230],
        2281: [, 220],
        2282: [, 230],
        2283: [, 230],
        2284: [, 230],
        2285: [, 220],
        2286: [, 220],
        2287: [, 220],
        2288: [, 27],
        2289: [, 28],
        2290: [, 29],
        2291: [, 230],
        2292: [, 230],
        2293: [, 230],
        2294: [, 220],
        2295: [, 230],
        2296: [, 230],
        2297: [, 220],
        2298: [, 220],
        2299: [, 230],
        2300: [, 230],
        2301: [, 230],
        2302: [, 230],
        2303: [, 230],
      },
      2304: {
        2344: [, , { 2364: 2345 }],
        2345: [[2344, 2364]],
        2352: [, , { 2364: 2353 }],
        2353: [[2352, 2364]],
        2355: [, , { 2364: 2356 }],
        2356: [[2355, 2364]],
        2364: [, 7],
        2381: [, 9],
        2385: [, 230],
        2386: [, 220],
        2387: [, 230],
        2388: [, 230],
        2392: [[2325, 2364], 512],
        2393: [[2326, 2364], 512],
        2394: [[2327, 2364], 512],
        2395: [[2332, 2364], 512],
        2396: [[2337, 2364], 512],
        2397: [[2338, 2364], 512],
        2398: [[2347, 2364], 512],
        2399: [[2351, 2364], 512],
        2492: [, 7],
        2503: [, , { 2494: 2507, 2519: 2508 }],
        2507: [[2503, 2494]],
        2508: [[2503, 2519]],
        2509: [, 9],
        2524: [[2465, 2492], 512],
        2525: [[2466, 2492], 512],
        2527: [[2479, 2492], 512],
      },
      2560: {
        2611: [[2610, 2620], 512],
        2614: [[2616, 2620], 512],
        2620: [, 7],
        2637: [, 9],
        2649: [[2582, 2620], 512],
        2650: [[2583, 2620], 512],
        2651: [[2588, 2620], 512],
        2654: [[2603, 2620], 512],
        2748: [, 7],
        2765: [, 9],
        68109: [, 220],
        68111: [, 230],
        68152: [, 230],
        68153: [, 1],
        68154: [, 220],
        68159: [, 9],
        68325: [, 230],
        68326: [, 220],
      },
      2816: {
        2876: [, 7],
        2887: [, , { 2878: 2891, 2902: 2888, 2903: 2892 }],
        2888: [[2887, 2902]],
        2891: [[2887, 2878]],
        2892: [[2887, 2903]],
        2893: [, 9],
        2908: [[2849, 2876], 512],
        2909: [[2850, 2876], 512],
        2962: [, , { 3031: 2964 }],
        2964: [[2962, 3031]],
        3014: [, , { 3006: 3018, 3031: 3020 }],
        3015: [, , { 3006: 3019 }],
        3018: [[3014, 3006]],
        3019: [[3015, 3006]],
        3020: [[3014, 3031]],
        3021: [, 9],
      },
      3072: {
        3142: [, , { 3158: 3144 }],
        3144: [[3142, 3158]],
        3149: [, 9],
        3157: [, 84],
        3158: [, 91],
        3260: [, 7],
        3263: [, , { 3285: 3264 }],
        3264: [[3263, 3285]],
        3270: [, , { 3266: 3274, 3285: 3271, 3286: 3272 }],
        3271: [[3270, 3285]],
        3272: [[3270, 3286]],
        3274: [[3270, 3266], , { 3285: 3275 }],
        3275: [[3274, 3285]],
        3277: [, 9],
      },
      3328: {
        3398: [, , { 3390: 3402, 3415: 3404 }],
        3399: [, , { 3390: 3403 }],
        3402: [[3398, 3390]],
        3403: [[3399, 3390]],
        3404: [[3398, 3415]],
        3405: [, 9],
        3530: [, 9],
        3545: [, , { 3530: 3546, 3535: 3548, 3551: 3550 }],
        3546: [[3545, 3530]],
        3548: [[3545, 3535], , { 3530: 3549 }],
        3549: [[3548, 3530]],
        3550: [[3545, 3551]],
      },
      3584: {
        3635: [[3661, 3634], 256],
        3640: [, 103],
        3641: [, 103],
        3642: [, 9],
        3656: [, 107],
        3657: [, 107],
        3658: [, 107],
        3659: [, 107],
        3763: [[3789, 3762], 256],
        3768: [, 118],
        3769: [, 118],
        3784: [, 122],
        3785: [, 122],
        3786: [, 122],
        3787: [, 122],
        3804: [[3755, 3737], 256],
        3805: [[3755, 3745], 256],
      },
      3840: {
        3852: [[3851], 256],
        3864: [, 220],
        3865: [, 220],
        3893: [, 220],
        3895: [, 220],
        3897: [, 216],
        3907: [[3906, 4023], 512],
        3917: [[3916, 4023], 512],
        3922: [[3921, 4023], 512],
        3927: [[3926, 4023], 512],
        3932: [[3931, 4023], 512],
        3945: [[3904, 4021], 512],
        3953: [, 129],
        3954: [, 130],
        3955: [[3953, 3954], 512],
        3956: [, 132],
        3957: [[3953, 3956], 512],
        3958: [[4018, 3968], 512],
        3959: [[4018, 3969], 256],
        3960: [[4019, 3968], 512],
        3961: [[4019, 3969], 256],
        3962: [, 130],
        3963: [, 130],
        3964: [, 130],
        3965: [, 130],
        3968: [, 130],
        3969: [[3953, 3968], 512],
        3970: [, 230],
        3971: [, 230],
        3972: [, 9],
        3974: [, 230],
        3975: [, 230],
        3987: [[3986, 4023], 512],
        3997: [[3996, 4023], 512],
        4002: [[4001, 4023], 512],
        4007: [[4006, 4023], 512],
        4012: [[4011, 4023], 512],
        4025: [[3984, 4021], 512],
        4038: [, 220],
      },
      4096: {
        4133: [, , { 4142: 4134 }],
        4134: [[4133, 4142]],
        4151: [, 7],
        4153: [, 9],
        4154: [, 9],
        4237: [, 220],
        4348: [[4316], 256],
        69702: [, 9],
        69759: [, 9],
        69785: [, , { 69818: 69786 }],
        69786: [[69785, 69818]],
        69787: [, , { 69818: 69788 }],
        69788: [[69787, 69818]],
        69797: [, , { 69818: 69803 }],
        69803: [[69797, 69818]],
        69817: [, 9],
        69818: [, 7],
      },
      4352: {
        69888: [, 230],
        69889: [, 230],
        69890: [, 230],
        69934: [[69937, 69927]],
        69935: [[69938, 69927]],
        69937: [, , { 69927: 69934 }],
        69938: [, , { 69927: 69935 }],
        69939: [, 9],
        69940: [, 9],
        70003: [, 7],
        70080: [, 9],
      },
      4608: { 70197: [, 9], 70198: [, 7], 70377: [, 7], 70378: [, 9] },
      4864: {
        4957: [, 230],
        4958: [, 230],
        4959: [, 230],
        70460: [, 7],
        70471: [, , { 70462: 70475, 70487: 70476 }],
        70475: [[70471, 70462]],
        70476: [[70471, 70487]],
        70477: [, 9],
        70502: [, 230],
        70503: [, 230],
        70504: [, 230],
        70505: [, 230],
        70506: [, 230],
        70507: [, 230],
        70508: [, 230],
        70512: [, 230],
        70513: [, 230],
        70514: [, 230],
        70515: [, 230],
        70516: [, 230],
      },
      5120: {
        70841: [, , { 70832: 70844, 70842: 70843, 70845: 70846 }],
        70843: [[70841, 70842]],
        70844: [[70841, 70832]],
        70846: [[70841, 70845]],
        70850: [, 9],
        70851: [, 7],
      },
      5376: {
        71096: [, , { 71087: 71098 }],
        71097: [, , { 71087: 71099 }],
        71098: [[71096, 71087]],
        71099: [[71097, 71087]],
        71103: [, 9],
        71104: [, 7],
      },
      5632: { 71231: [, 9], 71350: [, 9], 71351: [, 7] },
      5888: { 5908: [, 9], 5940: [, 9], 6098: [, 9], 6109: [, 230] },
      6144: { 6313: [, 228] },
      6400: { 6457: [, 222], 6458: [, 230], 6459: [, 220] },
      6656: {
        6679: [, 230],
        6680: [, 220],
        6752: [, 9],
        6773: [, 230],
        6774: [, 230],
        6775: [, 230],
        6776: [, 230],
        6777: [, 230],
        6778: [, 230],
        6779: [, 230],
        6780: [, 230],
        6783: [, 220],
        6832: [, 230],
        6833: [, 230],
        6834: [, 230],
        6835: [, 230],
        6836: [, 230],
        6837: [, 220],
        6838: [, 220],
        6839: [, 220],
        6840: [, 220],
        6841: [, 220],
        6842: [, 220],
        6843: [, 230],
        6844: [, 230],
        6845: [, 220],
      },
      6912: {
        6917: [, , { 6965: 6918 }],
        6918: [[6917, 6965]],
        6919: [, , { 6965: 6920 }],
        6920: [[6919, 6965]],
        6921: [, , { 6965: 6922 }],
        6922: [[6921, 6965]],
        6923: [, , { 6965: 6924 }],
        6924: [[6923, 6965]],
        6925: [, , { 6965: 6926 }],
        6926: [[6925, 6965]],
        6929: [, , { 6965: 6930 }],
        6930: [[6929, 6965]],
        6964: [, 7],
        6970: [, , { 6965: 6971 }],
        6971: [[6970, 6965]],
        6972: [, , { 6965: 6973 }],
        6973: [[6972, 6965]],
        6974: [, , { 6965: 6976 }],
        6975: [, , { 6965: 6977 }],
        6976: [[6974, 6965]],
        6977: [[6975, 6965]],
        6978: [, , { 6965: 6979 }],
        6979: [[6978, 6965]],
        6980: [, 9],
        7019: [, 230],
        7020: [, 220],
        7021: [, 230],
        7022: [, 230],
        7023: [, 230],
        7024: [, 230],
        7025: [, 230],
        7026: [, 230],
        7027: [, 230],
        7082: [, 9],
        7083: [, 9],
        7142: [, 7],
        7154: [, 9],
        7155: [, 9],
      },
      7168: {
        7223: [, 7],
        7376: [, 230],
        7377: [, 230],
        7378: [, 230],
        7380: [, 1],
        7381: [, 220],
        7382: [, 220],
        7383: [, 220],
        7384: [, 220],
        7385: [, 220],
        7386: [, 230],
        7387: [, 230],
        7388: [, 220],
        7389: [, 220],
        7390: [, 220],
        7391: [, 220],
        7392: [, 230],
        7394: [, 1],
        7395: [, 1],
        7396: [, 1],
        7397: [, 1],
        7398: [, 1],
        7399: [, 1],
        7400: [, 1],
        7405: [, 220],
        7412: [, 230],
        7416: [, 230],
        7417: [, 230],
      },
      7424: {
        7468: [[65], 256],
        7469: [[198], 256],
        7470: [[66], 256],
        7472: [[68], 256],
        7473: [[69], 256],
        7474: [[398], 256],
        7475: [[71], 256],
        7476: [[72], 256],
        7477: [[73], 256],
        7478: [[74], 256],
        7479: [[75], 256],
        7480: [[76], 256],
        7481: [[77], 256],
        7482: [[78], 256],
        7484: [[79], 256],
        7485: [[546], 256],
        7486: [[80], 256],
        7487: [[82], 256],
        7488: [[84], 256],
        7489: [[85], 256],
        7490: [[87], 256],
        7491: [[97], 256],
        7492: [[592], 256],
        7493: [[593], 256],
        7494: [[7426], 256],
        7495: [[98], 256],
        7496: [[100], 256],
        7497: [[101], 256],
        7498: [[601], 256],
        7499: [[603], 256],
        7500: [[604], 256],
        7501: [[103], 256],
        7503: [[107], 256],
        7504: [[109], 256],
        7505: [[331], 256],
        7506: [[111], 256],
        7507: [[596], 256],
        7508: [[7446], 256],
        7509: [[7447], 256],
        7510: [[112], 256],
        7511: [[116], 256],
        7512: [[117], 256],
        7513: [[7453], 256],
        7514: [[623], 256],
        7515: [[118], 256],
        7516: [[7461], 256],
        7517: [[946], 256],
        7518: [[947], 256],
        7519: [[948], 256],
        7520: [[966], 256],
        7521: [[967], 256],
        7522: [[105], 256],
        7523: [[114], 256],
        7524: [[117], 256],
        7525: [[118], 256],
        7526: [[946], 256],
        7527: [[947], 256],
        7528: [[961], 256],
        7529: [[966], 256],
        7530: [[967], 256],
        7544: [[1085], 256],
        7579: [[594], 256],
        7580: [[99], 256],
        7581: [[597], 256],
        7582: [[240], 256],
        7583: [[604], 256],
        7584: [[102], 256],
        7585: [[607], 256],
        7586: [[609], 256],
        7587: [[613], 256],
        7588: [[616], 256],
        7589: [[617], 256],
        7590: [[618], 256],
        7591: [[7547], 256],
        7592: [[669], 256],
        7593: [[621], 256],
        7594: [[7557], 256],
        7595: [[671], 256],
        7596: [[625], 256],
        7597: [[624], 256],
        7598: [[626], 256],
        7599: [[627], 256],
        7600: [[628], 256],
        7601: [[629], 256],
        7602: [[632], 256],
        7603: [[642], 256],
        7604: [[643], 256],
        7605: [[427], 256],
        7606: [[649], 256],
        7607: [[650], 256],
        7608: [[7452], 256],
        7609: [[651], 256],
        7610: [[652], 256],
        7611: [[122], 256],
        7612: [[656], 256],
        7613: [[657], 256],
        7614: [[658], 256],
        7615: [[952], 256],
        7616: [, 230],
        7617: [, 230],
        7618: [, 220],
        7619: [, 230],
        7620: [, 230],
        7621: [, 230],
        7622: [, 230],
        7623: [, 230],
        7624: [, 230],
        7625: [, 230],
        7626: [, 220],
        7627: [, 230],
        7628: [, 230],
        7629: [, 234],
        7630: [, 214],
        7631: [, 220],
        7632: [, 202],
        7633: [, 230],
        7634: [, 230],
        7635: [, 230],
        7636: [, 230],
        7637: [, 230],
        7638: [, 230],
        7639: [, 230],
        7640: [, 230],
        7641: [, 230],
        7642: [, 230],
        7643: [, 230],
        7644: [, 230],
        7645: [, 230],
        7646: [, 230],
        7647: [, 230],
        7648: [, 230],
        7649: [, 230],
        7650: [, 230],
        7651: [, 230],
        7652: [, 230],
        7653: [, 230],
        7654: [, 230],
        7655: [, 230],
        7656: [, 230],
        7657: [, 230],
        7658: [, 230],
        7659: [, 230],
        7660: [, 230],
        7661: [, 230],
        7662: [, 230],
        7663: [, 230],
        7664: [, 230],
        7665: [, 230],
        7666: [, 230],
        7667: [, 230],
        7668: [, 230],
        7669: [, 230],
        7676: [, 233],
        7677: [, 220],
        7678: [, 230],
        7679: [, 220],
      },
      7680: {
        7680: [[65, 805]],
        7681: [[97, 805]],
        7682: [[66, 775]],
        7683: [[98, 775]],
        7684: [[66, 803]],
        7685: [[98, 803]],
        7686: [[66, 817]],
        7687: [[98, 817]],
        7688: [[199, 769]],
        7689: [[231, 769]],
        7690: [[68, 775]],
        7691: [[100, 775]],
        7692: [[68, 803]],
        7693: [[100, 803]],
        7694: [[68, 817]],
        7695: [[100, 817]],
        7696: [[68, 807]],
        7697: [[100, 807]],
        7698: [[68, 813]],
        7699: [[100, 813]],
        7700: [[274, 768]],
        7701: [[275, 768]],
        7702: [[274, 769]],
        7703: [[275, 769]],
        7704: [[69, 813]],
        7705: [[101, 813]],
        7706: [[69, 816]],
        7707: [[101, 816]],
        7708: [[552, 774]],
        7709: [[553, 774]],
        7710: [[70, 775]],
        7711: [[102, 775]],
        7712: [[71, 772]],
        7713: [[103, 772]],
        7714: [[72, 775]],
        7715: [[104, 775]],
        7716: [[72, 803]],
        7717: [[104, 803]],
        7718: [[72, 776]],
        7719: [[104, 776]],
        7720: [[72, 807]],
        7721: [[104, 807]],
        7722: [[72, 814]],
        7723: [[104, 814]],
        7724: [[73, 816]],
        7725: [[105, 816]],
        7726: [[207, 769]],
        7727: [[239, 769]],
        7728: [[75, 769]],
        7729: [[107, 769]],
        7730: [[75, 803]],
        7731: [[107, 803]],
        7732: [[75, 817]],
        7733: [[107, 817]],
        7734: [[76, 803], , { 772: 7736 }],
        7735: [[108, 803], , { 772: 7737 }],
        7736: [[7734, 772]],
        7737: [[7735, 772]],
        7738: [[76, 817]],
        7739: [[108, 817]],
        7740: [[76, 813]],
        7741: [[108, 813]],
        7742: [[77, 769]],
        7743: [[109, 769]],
        7744: [[77, 775]],
        7745: [[109, 775]],
        7746: [[77, 803]],
        7747: [[109, 803]],
        7748: [[78, 775]],
        7749: [[110, 775]],
        7750: [[78, 803]],
        7751: [[110, 803]],
        7752: [[78, 817]],
        7753: [[110, 817]],
        7754: [[78, 813]],
        7755: [[110, 813]],
        7756: [[213, 769]],
        7757: [[245, 769]],
        7758: [[213, 776]],
        7759: [[245, 776]],
        7760: [[332, 768]],
        7761: [[333, 768]],
        7762: [[332, 769]],
        7763: [[333, 769]],
        7764: [[80, 769]],
        7765: [[112, 769]],
        7766: [[80, 775]],
        7767: [[112, 775]],
        7768: [[82, 775]],
        7769: [[114, 775]],
        7770: [[82, 803], , { 772: 7772 }],
        7771: [[114, 803], , { 772: 7773 }],
        7772: [[7770, 772]],
        7773: [[7771, 772]],
        7774: [[82, 817]],
        7775: [[114, 817]],
        7776: [[83, 775]],
        7777: [[115, 775]],
        7778: [[83, 803], , { 775: 7784 }],
        7779: [[115, 803], , { 775: 7785 }],
        7780: [[346, 775]],
        7781: [[347, 775]],
        7782: [[352, 775]],
        7783: [[353, 775]],
        7784: [[7778, 775]],
        7785: [[7779, 775]],
        7786: [[84, 775]],
        7787: [[116, 775]],
        7788: [[84, 803]],
        7789: [[116, 803]],
        7790: [[84, 817]],
        7791: [[116, 817]],
        7792: [[84, 813]],
        7793: [[116, 813]],
        7794: [[85, 804]],
        7795: [[117, 804]],
        7796: [[85, 816]],
        7797: [[117, 816]],
        7798: [[85, 813]],
        7799: [[117, 813]],
        7800: [[360, 769]],
        7801: [[361, 769]],
        7802: [[362, 776]],
        7803: [[363, 776]],
        7804: [[86, 771]],
        7805: [[118, 771]],
        7806: [[86, 803]],
        7807: [[118, 803]],
        7808: [[87, 768]],
        7809: [[119, 768]],
        7810: [[87, 769]],
        7811: [[119, 769]],
        7812: [[87, 776]],
        7813: [[119, 776]],
        7814: [[87, 775]],
        7815: [[119, 775]],
        7816: [[87, 803]],
        7817: [[119, 803]],
        7818: [[88, 775]],
        7819: [[120, 775]],
        7820: [[88, 776]],
        7821: [[120, 776]],
        7822: [[89, 775]],
        7823: [[121, 775]],
        7824: [[90, 770]],
        7825: [[122, 770]],
        7826: [[90, 803]],
        7827: [[122, 803]],
        7828: [[90, 817]],
        7829: [[122, 817]],
        7830: [[104, 817]],
        7831: [[116, 776]],
        7832: [[119, 778]],
        7833: [[121, 778]],
        7834: [[97, 702], 256],
        7835: [[383, 775]],
        7840: [[65, 803], , { 770: 7852, 774: 7862 }],
        7841: [[97, 803], , { 770: 7853, 774: 7863 }],
        7842: [[65, 777]],
        7843: [[97, 777]],
        7844: [[194, 769]],
        7845: [[226, 769]],
        7846: [[194, 768]],
        7847: [[226, 768]],
        7848: [[194, 777]],
        7849: [[226, 777]],
        7850: [[194, 771]],
        7851: [[226, 771]],
        7852: [[7840, 770]],
        7853: [[7841, 770]],
        7854: [[258, 769]],
        7855: [[259, 769]],
        7856: [[258, 768]],
        7857: [[259, 768]],
        7858: [[258, 777]],
        7859: [[259, 777]],
        7860: [[258, 771]],
        7861: [[259, 771]],
        7862: [[7840, 774]],
        7863: [[7841, 774]],
        7864: [[69, 803], , { 770: 7878 }],
        7865: [[101, 803], , { 770: 7879 }],
        7866: [[69, 777]],
        7867: [[101, 777]],
        7868: [[69, 771]],
        7869: [[101, 771]],
        7870: [[202, 769]],
        7871: [[234, 769]],
        7872: [[202, 768]],
        7873: [[234, 768]],
        7874: [[202, 777]],
        7875: [[234, 777]],
        7876: [[202, 771]],
        7877: [[234, 771]],
        7878: [[7864, 770]],
        7879: [[7865, 770]],
        7880: [[73, 777]],
        7881: [[105, 777]],
        7882: [[73, 803]],
        7883: [[105, 803]],
        7884: [[79, 803], , { 770: 7896 }],
        7885: [[111, 803], , { 770: 7897 }],
        7886: [[79, 777]],
        7887: [[111, 777]],
        7888: [[212, 769]],
        7889: [[244, 769]],
        7890: [[212, 768]],
        7891: [[244, 768]],
        7892: [[212, 777]],
        7893: [[244, 777]],
        7894: [[212, 771]],
        7895: [[244, 771]],
        7896: [[7884, 770]],
        7897: [[7885, 770]],
        7898: [[416, 769]],
        7899: [[417, 769]],
        7900: [[416, 768]],
        7901: [[417, 768]],
        7902: [[416, 777]],
        7903: [[417, 777]],
        7904: [[416, 771]],
        7905: [[417, 771]],
        7906: [[416, 803]],
        7907: [[417, 803]],
        7908: [[85, 803]],
        7909: [[117, 803]],
        7910: [[85, 777]],
        7911: [[117, 777]],
        7912: [[431, 769]],
        7913: [[432, 769]],
        7914: [[431, 768]],
        7915: [[432, 768]],
        7916: [[431, 777]],
        7917: [[432, 777]],
        7918: [[431, 771]],
        7919: [[432, 771]],
        7920: [[431, 803]],
        7921: [[432, 803]],
        7922: [[89, 768]],
        7923: [[121, 768]],
        7924: [[89, 803]],
        7925: [[121, 803]],
        7926: [[89, 777]],
        7927: [[121, 777]],
        7928: [[89, 771]],
        7929: [[121, 771]],
      },
      7936: {
        7936: [[945, 787], , { 768: 7938, 769: 7940, 834: 7942, 837: 8064 }],
        7937: [[945, 788], , { 768: 7939, 769: 7941, 834: 7943, 837: 8065 }],
        7938: [[7936, 768], , { 837: 8066 }],
        7939: [[7937, 768], , { 837: 8067 }],
        7940: [[7936, 769], , { 837: 8068 }],
        7941: [[7937, 769], , { 837: 8069 }],
        7942: [[7936, 834], , { 837: 8070 }],
        7943: [[7937, 834], , { 837: 8071 }],
        7944: [[913, 787], , { 768: 7946, 769: 7948, 834: 7950, 837: 8072 }],
        7945: [[913, 788], , { 768: 7947, 769: 7949, 834: 7951, 837: 8073 }],
        7946: [[7944, 768], , { 837: 8074 }],
        7947: [[7945, 768], , { 837: 8075 }],
        7948: [[7944, 769], , { 837: 8076 }],
        7949: [[7945, 769], , { 837: 8077 }],
        7950: [[7944, 834], , { 837: 8078 }],
        7951: [[7945, 834], , { 837: 8079 }],
        7952: [[949, 787], , { 768: 7954, 769: 7956 }],
        7953: [[949, 788], , { 768: 7955, 769: 7957 }],
        7954: [[7952, 768]],
        7955: [[7953, 768]],
        7956: [[7952, 769]],
        7957: [[7953, 769]],
        7960: [[917, 787], , { 768: 7962, 769: 7964 }],
        7961: [[917, 788], , { 768: 7963, 769: 7965 }],
        7962: [[7960, 768]],
        7963: [[7961, 768]],
        7964: [[7960, 769]],
        7965: [[7961, 769]],
        7968: [[951, 787], , { 768: 7970, 769: 7972, 834: 7974, 837: 8080 }],
        7969: [[951, 788], , { 768: 7971, 769: 7973, 834: 7975, 837: 8081 }],
        7970: [[7968, 768], , { 837: 8082 }],
        7971: [[7969, 768], , { 837: 8083 }],
        7972: [[7968, 769], , { 837: 8084 }],
        7973: [[7969, 769], , { 837: 8085 }],
        7974: [[7968, 834], , { 837: 8086 }],
        7975: [[7969, 834], , { 837: 8087 }],
        7976: [[919, 787], , { 768: 7978, 769: 7980, 834: 7982, 837: 8088 }],
        7977: [[919, 788], , { 768: 7979, 769: 7981, 834: 7983, 837: 8089 }],
        7978: [[7976, 768], , { 837: 8090 }],
        7979: [[7977, 768], , { 837: 8091 }],
        7980: [[7976, 769], , { 837: 8092 }],
        7981: [[7977, 769], , { 837: 8093 }],
        7982: [[7976, 834], , { 837: 8094 }],
        7983: [[7977, 834], , { 837: 8095 }],
        7984: [[953, 787], , { 768: 7986, 769: 7988, 834: 7990 }],
        7985: [[953, 788], , { 768: 7987, 769: 7989, 834: 7991 }],
        7986: [[7984, 768]],
        7987: [[7985, 768]],
        7988: [[7984, 769]],
        7989: [[7985, 769]],
        7990: [[7984, 834]],
        7991: [[7985, 834]],
        7992: [[921, 787], , { 768: 7994, 769: 7996, 834: 7998 }],
        7993: [[921, 788], , { 768: 7995, 769: 7997, 834: 7999 }],
        7994: [[7992, 768]],
        7995: [[7993, 768]],
        7996: [[7992, 769]],
        7997: [[7993, 769]],
        7998: [[7992, 834]],
        7999: [[7993, 834]],
        8e3: [[959, 787], , { 768: 8002, 769: 8004 }],
        8001: [[959, 788], , { 768: 8003, 769: 8005 }],
        8002: [[8e3, 768]],
        8003: [[8001, 768]],
        8004: [[8e3, 769]],
        8005: [[8001, 769]],
        8008: [[927, 787], , { 768: 8010, 769: 8012 }],
        8009: [[927, 788], , { 768: 8011, 769: 8013 }],
        8010: [[8008, 768]],
        8011: [[8009, 768]],
        8012: [[8008, 769]],
        8013: [[8009, 769]],
        8016: [[965, 787], , { 768: 8018, 769: 8020, 834: 8022 }],
        8017: [[965, 788], , { 768: 8019, 769: 8021, 834: 8023 }],
        8018: [[8016, 768]],
        8019: [[8017, 768]],
        8020: [[8016, 769]],
        8021: [[8017, 769]],
        8022: [[8016, 834]],
        8023: [[8017, 834]],
        8025: [[933, 788], , { 768: 8027, 769: 8029, 834: 8031 }],
        8027: [[8025, 768]],
        8029: [[8025, 769]],
        8031: [[8025, 834]],
        8032: [[969, 787], , { 768: 8034, 769: 8036, 834: 8038, 837: 8096 }],
        8033: [[969, 788], , { 768: 8035, 769: 8037, 834: 8039, 837: 8097 }],
        8034: [[8032, 768], , { 837: 8098 }],
        8035: [[8033, 768], , { 837: 8099 }],
        8036: [[8032, 769], , { 837: 8100 }],
        8037: [[8033, 769], , { 837: 8101 }],
        8038: [[8032, 834], , { 837: 8102 }],
        8039: [[8033, 834], , { 837: 8103 }],
        8040: [[937, 787], , { 768: 8042, 769: 8044, 834: 8046, 837: 8104 }],
        8041: [[937, 788], , { 768: 8043, 769: 8045, 834: 8047, 837: 8105 }],
        8042: [[8040, 768], , { 837: 8106 }],
        8043: [[8041, 768], , { 837: 8107 }],
        8044: [[8040, 769], , { 837: 8108 }],
        8045: [[8041, 769], , { 837: 8109 }],
        8046: [[8040, 834], , { 837: 8110 }],
        8047: [[8041, 834], , { 837: 8111 }],
        8048: [[945, 768], , { 837: 8114 }],
        8049: [[940]],
        8050: [[949, 768]],
        8051: [[941]],
        8052: [[951, 768], , { 837: 8130 }],
        8053: [[942]],
        8054: [[953, 768]],
        8055: [[943]],
        8056: [[959, 768]],
        8057: [[972]],
        8058: [[965, 768]],
        8059: [[973]],
        8060: [[969, 768], , { 837: 8178 }],
        8061: [[974]],
        8064: [[7936, 837]],
        8065: [[7937, 837]],
        8066: [[7938, 837]],
        8067: [[7939, 837]],
        8068: [[7940, 837]],
        8069: [[7941, 837]],
        8070: [[7942, 837]],
        8071: [[7943, 837]],
        8072: [[7944, 837]],
        8073: [[7945, 837]],
        8074: [[7946, 837]],
        8075: [[7947, 837]],
        8076: [[7948, 837]],
        8077: [[7949, 837]],
        8078: [[7950, 837]],
        8079: [[7951, 837]],
        8080: [[7968, 837]],
        8081: [[7969, 837]],
        8082: [[7970, 837]],
        8083: [[7971, 837]],
        8084: [[7972, 837]],
        8085: [[7973, 837]],
        8086: [[7974, 837]],
        8087: [[7975, 837]],
        8088: [[7976, 837]],
        8089: [[7977, 837]],
        8090: [[7978, 837]],
        8091: [[7979, 837]],
        8092: [[7980, 837]],
        8093: [[7981, 837]],
        8094: [[7982, 837]],
        8095: [[7983, 837]],
        8096: [[8032, 837]],
        8097: [[8033, 837]],
        8098: [[8034, 837]],
        8099: [[8035, 837]],
        8100: [[8036, 837]],
        8101: [[8037, 837]],
        8102: [[8038, 837]],
        8103: [[8039, 837]],
        8104: [[8040, 837]],
        8105: [[8041, 837]],
        8106: [[8042, 837]],
        8107: [[8043, 837]],
        8108: [[8044, 837]],
        8109: [[8045, 837]],
        8110: [[8046, 837]],
        8111: [[8047, 837]],
        8112: [[945, 774]],
        8113: [[945, 772]],
        8114: [[8048, 837]],
        8115: [[945, 837]],
        8116: [[940, 837]],
        8118: [[945, 834], , { 837: 8119 }],
        8119: [[8118, 837]],
        8120: [[913, 774]],
        8121: [[913, 772]],
        8122: [[913, 768]],
        8123: [[902]],
        8124: [[913, 837]],
        8125: [[32, 787], 256],
        8126: [[953]],
        8127: [[32, 787], 256, { 768: 8141, 769: 8142, 834: 8143 }],
        8128: [[32, 834], 256],
        8129: [[168, 834]],
        8130: [[8052, 837]],
        8131: [[951, 837]],
        8132: [[942, 837]],
        8134: [[951, 834], , { 837: 8135 }],
        8135: [[8134, 837]],
        8136: [[917, 768]],
        8137: [[904]],
        8138: [[919, 768]],
        8139: [[905]],
        8140: [[919, 837]],
        8141: [[8127, 768]],
        8142: [[8127, 769]],
        8143: [[8127, 834]],
        8144: [[953, 774]],
        8145: [[953, 772]],
        8146: [[970, 768]],
        8147: [[912]],
        8150: [[953, 834]],
        8151: [[970, 834]],
        8152: [[921, 774]],
        8153: [[921, 772]],
        8154: [[921, 768]],
        8155: [[906]],
        8157: [[8190, 768]],
        8158: [[8190, 769]],
        8159: [[8190, 834]],
        8160: [[965, 774]],
        8161: [[965, 772]],
        8162: [[971, 768]],
        8163: [[944]],
        8164: [[961, 787]],
        8165: [[961, 788]],
        8166: [[965, 834]],
        8167: [[971, 834]],
        8168: [[933, 774]],
        8169: [[933, 772]],
        8170: [[933, 768]],
        8171: [[910]],
        8172: [[929, 788]],
        8173: [[168, 768]],
        8174: [[901]],
        8175: [[96]],
        8178: [[8060, 837]],
        8179: [[969, 837]],
        8180: [[974, 837]],
        8182: [[969, 834], , { 837: 8183 }],
        8183: [[8182, 837]],
        8184: [[927, 768]],
        8185: [[908]],
        8186: [[937, 768]],
        8187: [[911]],
        8188: [[937, 837]],
        8189: [[180]],
        8190: [[32, 788], 256, { 768: 8157, 769: 8158, 834: 8159 }],
      },
      8192: {
        8192: [[8194]],
        8193: [[8195]],
        8194: [[32], 256],
        8195: [[32], 256],
        8196: [[32], 256],
        8197: [[32], 256],
        8198: [[32], 256],
        8199: [[32], 256],
        8200: [[32], 256],
        8201: [[32], 256],
        8202: [[32], 256],
        8209: [[8208], 256],
        8215: [[32, 819], 256],
        8228: [[46], 256],
        8229: [[46, 46], 256],
        8230: [[46, 46, 46], 256],
        8239: [[32], 256],
        8243: [[8242, 8242], 256],
        8244: [[8242, 8242, 8242], 256],
        8246: [[8245, 8245], 256],
        8247: [[8245, 8245, 8245], 256],
        8252: [[33, 33], 256],
        8254: [[32, 773], 256],
        8263: [[63, 63], 256],
        8264: [[63, 33], 256],
        8265: [[33, 63], 256],
        8279: [[8242, 8242, 8242, 8242], 256],
        8287: [[32], 256],
        8304: [[48], 256],
        8305: [[105], 256],
        8308: [[52], 256],
        8309: [[53], 256],
        8310: [[54], 256],
        8311: [[55], 256],
        8312: [[56], 256],
        8313: [[57], 256],
        8314: [[43], 256],
        8315: [[8722], 256],
        8316: [[61], 256],
        8317: [[40], 256],
        8318: [[41], 256],
        8319: [[110], 256],
        8320: [[48], 256],
        8321: [[49], 256],
        8322: [[50], 256],
        8323: [[51], 256],
        8324: [[52], 256],
        8325: [[53], 256],
        8326: [[54], 256],
        8327: [[55], 256],
        8328: [[56], 256],
        8329: [[57], 256],
        8330: [[43], 256],
        8331: [[8722], 256],
        8332: [[61], 256],
        8333: [[40], 256],
        8334: [[41], 256],
        8336: [[97], 256],
        8337: [[101], 256],
        8338: [[111], 256],
        8339: [[120], 256],
        8340: [[601], 256],
        8341: [[104], 256],
        8342: [[107], 256],
        8343: [[108], 256],
        8344: [[109], 256],
        8345: [[110], 256],
        8346: [[112], 256],
        8347: [[115], 256],
        8348: [[116], 256],
        8360: [[82, 115], 256],
        8400: [, 230],
        8401: [, 230],
        8402: [, 1],
        8403: [, 1],
        8404: [, 230],
        8405: [, 230],
        8406: [, 230],
        8407: [, 230],
        8408: [, 1],
        8409: [, 1],
        8410: [, 1],
        8411: [, 230],
        8412: [, 230],
        8417: [, 230],
        8421: [, 1],
        8422: [, 1],
        8423: [, 230],
        8424: [, 220],
        8425: [, 230],
        8426: [, 1],
        8427: [, 1],
        8428: [, 220],
        8429: [, 220],
        8430: [, 220],
        8431: [, 220],
        8432: [, 230],
      },
      8448: {
        8448: [[97, 47, 99], 256],
        8449: [[97, 47, 115], 256],
        8450: [[67], 256],
        8451: [[176, 67], 256],
        8453: [[99, 47, 111], 256],
        8454: [[99, 47, 117], 256],
        8455: [[400], 256],
        8457: [[176, 70], 256],
        8458: [[103], 256],
        8459: [[72], 256],
        8460: [[72], 256],
        8461: [[72], 256],
        8462: [[104], 256],
        8463: [[295], 256],
        8464: [[73], 256],
        8465: [[73], 256],
        8466: [[76], 256],
        8467: [[108], 256],
        8469: [[78], 256],
        8470: [[78, 111], 256],
        8473: [[80], 256],
        8474: [[81], 256],
        8475: [[82], 256],
        8476: [[82], 256],
        8477: [[82], 256],
        8480: [[83, 77], 256],
        8481: [[84, 69, 76], 256],
        8482: [[84, 77], 256],
        8484: [[90], 256],
        8486: [[937]],
        8488: [[90], 256],
        8490: [[75]],
        8491: [[197]],
        8492: [[66], 256],
        8493: [[67], 256],
        8495: [[101], 256],
        8496: [[69], 256],
        8497: [[70], 256],
        8499: [[77], 256],
        8500: [[111], 256],
        8501: [[1488], 256],
        8502: [[1489], 256],
        8503: [[1490], 256],
        8504: [[1491], 256],
        8505: [[105], 256],
        8507: [[70, 65, 88], 256],
        8508: [[960], 256],
        8509: [[947], 256],
        8510: [[915], 256],
        8511: [[928], 256],
        8512: [[8721], 256],
        8517: [[68], 256],
        8518: [[100], 256],
        8519: [[101], 256],
        8520: [[105], 256],
        8521: [[106], 256],
        8528: [[49, 8260, 55], 256],
        8529: [[49, 8260, 57], 256],
        8530: [[49, 8260, 49, 48], 256],
        8531: [[49, 8260, 51], 256],
        8532: [[50, 8260, 51], 256],
        8533: [[49, 8260, 53], 256],
        8534: [[50, 8260, 53], 256],
        8535: [[51, 8260, 53], 256],
        8536: [[52, 8260, 53], 256],
        8537: [[49, 8260, 54], 256],
        8538: [[53, 8260, 54], 256],
        8539: [[49, 8260, 56], 256],
        8540: [[51, 8260, 56], 256],
        8541: [[53, 8260, 56], 256],
        8542: [[55, 8260, 56], 256],
        8543: [[49, 8260], 256],
        8544: [[73], 256],
        8545: [[73, 73], 256],
        8546: [[73, 73, 73], 256],
        8547: [[73, 86], 256],
        8548: [[86], 256],
        8549: [[86, 73], 256],
        8550: [[86, 73, 73], 256],
        8551: [[86, 73, 73, 73], 256],
        8552: [[73, 88], 256],
        8553: [[88], 256],
        8554: [[88, 73], 256],
        8555: [[88, 73, 73], 256],
        8556: [[76], 256],
        8557: [[67], 256],
        8558: [[68], 256],
        8559: [[77], 256],
        8560: [[105], 256],
        8561: [[105, 105], 256],
        8562: [[105, 105, 105], 256],
        8563: [[105, 118], 256],
        8564: [[118], 256],
        8565: [[118, 105], 256],
        8566: [[118, 105, 105], 256],
        8567: [[118, 105, 105, 105], 256],
        8568: [[105, 120], 256],
        8569: [[120], 256],
        8570: [[120, 105], 256],
        8571: [[120, 105, 105], 256],
        8572: [[108], 256],
        8573: [[99], 256],
        8574: [[100], 256],
        8575: [[109], 256],
        8585: [[48, 8260, 51], 256],
        8592: [, , { 824: 8602 }],
        8594: [, , { 824: 8603 }],
        8596: [, , { 824: 8622 }],
        8602: [[8592, 824]],
        8603: [[8594, 824]],
        8622: [[8596, 824]],
        8653: [[8656, 824]],
        8654: [[8660, 824]],
        8655: [[8658, 824]],
        8656: [, , { 824: 8653 }],
        8658: [, , { 824: 8655 }],
        8660: [, , { 824: 8654 }],
      },
      8704: {
        8707: [, , { 824: 8708 }],
        8708: [[8707, 824]],
        8712: [, , { 824: 8713 }],
        8713: [[8712, 824]],
        8715: [, , { 824: 8716 }],
        8716: [[8715, 824]],
        8739: [, , { 824: 8740 }],
        8740: [[8739, 824]],
        8741: [, , { 824: 8742 }],
        8742: [[8741, 824]],
        8748: [[8747, 8747], 256],
        8749: [[8747, 8747, 8747], 256],
        8751: [[8750, 8750], 256],
        8752: [[8750, 8750, 8750], 256],
        8764: [, , { 824: 8769 }],
        8769: [[8764, 824]],
        8771: [, , { 824: 8772 }],
        8772: [[8771, 824]],
        8773: [, , { 824: 8775 }],
        8775: [[8773, 824]],
        8776: [, , { 824: 8777 }],
        8777: [[8776, 824]],
        8781: [, , { 824: 8813 }],
        8800: [[61, 824]],
        8801: [, , { 824: 8802 }],
        8802: [[8801, 824]],
        8804: [, , { 824: 8816 }],
        8805: [, , { 824: 8817 }],
        8813: [[8781, 824]],
        8814: [[60, 824]],
        8815: [[62, 824]],
        8816: [[8804, 824]],
        8817: [[8805, 824]],
        8818: [, , { 824: 8820 }],
        8819: [, , { 824: 8821 }],
        8820: [[8818, 824]],
        8821: [[8819, 824]],
        8822: [, , { 824: 8824 }],
        8823: [, , { 824: 8825 }],
        8824: [[8822, 824]],
        8825: [[8823, 824]],
        8826: [, , { 824: 8832 }],
        8827: [, , { 824: 8833 }],
        8828: [, , { 824: 8928 }],
        8829: [, , { 824: 8929 }],
        8832: [[8826, 824]],
        8833: [[8827, 824]],
        8834: [, , { 824: 8836 }],
        8835: [, , { 824: 8837 }],
        8836: [[8834, 824]],
        8837: [[8835, 824]],
        8838: [, , { 824: 8840 }],
        8839: [, , { 824: 8841 }],
        8840: [[8838, 824]],
        8841: [[8839, 824]],
        8849: [, , { 824: 8930 }],
        8850: [, , { 824: 8931 }],
        8866: [, , { 824: 8876 }],
        8872: [, , { 824: 8877 }],
        8873: [, , { 824: 8878 }],
        8875: [, , { 824: 8879 }],
        8876: [[8866, 824]],
        8877: [[8872, 824]],
        8878: [[8873, 824]],
        8879: [[8875, 824]],
        8882: [, , { 824: 8938 }],
        8883: [, , { 824: 8939 }],
        8884: [, , { 824: 8940 }],
        8885: [, , { 824: 8941 }],
        8928: [[8828, 824]],
        8929: [[8829, 824]],
        8930: [[8849, 824]],
        8931: [[8850, 824]],
        8938: [[8882, 824]],
        8939: [[8883, 824]],
        8940: [[8884, 824]],
        8941: [[8885, 824]],
      },
      8960: { 9001: [[12296]], 9002: [[12297]] },
      9216: {
        9312: [[49], 256],
        9313: [[50], 256],
        9314: [[51], 256],
        9315: [[52], 256],
        9316: [[53], 256],
        9317: [[54], 256],
        9318: [[55], 256],
        9319: [[56], 256],
        9320: [[57], 256],
        9321: [[49, 48], 256],
        9322: [[49, 49], 256],
        9323: [[49, 50], 256],
        9324: [[49, 51], 256],
        9325: [[49, 52], 256],
        9326: [[49, 53], 256],
        9327: [[49, 54], 256],
        9328: [[49, 55], 256],
        9329: [[49, 56], 256],
        9330: [[49, 57], 256],
        9331: [[50, 48], 256],
        9332: [[40, 49, 41], 256],
        9333: [[40, 50, 41], 256],
        9334: [[40, 51, 41], 256],
        9335: [[40, 52, 41], 256],
        9336: [[40, 53, 41], 256],
        9337: [[40, 54, 41], 256],
        9338: [[40, 55, 41], 256],
        9339: [[40, 56, 41], 256],
        9340: [[40, 57, 41], 256],
        9341: [[40, 49, 48, 41], 256],
        9342: [[40, 49, 49, 41], 256],
        9343: [[40, 49, 50, 41], 256],
        9344: [[40, 49, 51, 41], 256],
        9345: [[40, 49, 52, 41], 256],
        9346: [[40, 49, 53, 41], 256],
        9347: [[40, 49, 54, 41], 256],
        9348: [[40, 49, 55, 41], 256],
        9349: [[40, 49, 56, 41], 256],
        9350: [[40, 49, 57, 41], 256],
        9351: [[40, 50, 48, 41], 256],
        9352: [[49, 46], 256],
        9353: [[50, 46], 256],
        9354: [[51, 46], 256],
        9355: [[52, 46], 256],
        9356: [[53, 46], 256],
        9357: [[54, 46], 256],
        9358: [[55, 46], 256],
        9359: [[56, 46], 256],
        9360: [[57, 46], 256],
        9361: [[49, 48, 46], 256],
        9362: [[49, 49, 46], 256],
        9363: [[49, 50, 46], 256],
        9364: [[49, 51, 46], 256],
        9365: [[49, 52, 46], 256],
        9366: [[49, 53, 46], 256],
        9367: [[49, 54, 46], 256],
        9368: [[49, 55, 46], 256],
        9369: [[49, 56, 46], 256],
        9370: [[49, 57, 46], 256],
        9371: [[50, 48, 46], 256],
        9372: [[40, 97, 41], 256],
        9373: [[40, 98, 41], 256],
        9374: [[40, 99, 41], 256],
        9375: [[40, 100, 41], 256],
        9376: [[40, 101, 41], 256],
        9377: [[40, 102, 41], 256],
        9378: [[40, 103, 41], 256],
        9379: [[40, 104, 41], 256],
        9380: [[40, 105, 41], 256],
        9381: [[40, 106, 41], 256],
        9382: [[40, 107, 41], 256],
        9383: [[40, 108, 41], 256],
        9384: [[40, 109, 41], 256],
        9385: [[40, 110, 41], 256],
        9386: [[40, 111, 41], 256],
        9387: [[40, 112, 41], 256],
        9388: [[40, 113, 41], 256],
        9389: [[40, 114, 41], 256],
        9390: [[40, 115, 41], 256],
        9391: [[40, 116, 41], 256],
        9392: [[40, 117, 41], 256],
        9393: [[40, 118, 41], 256],
        9394: [[40, 119, 41], 256],
        9395: [[40, 120, 41], 256],
        9396: [[40, 121, 41], 256],
        9397: [[40, 122, 41], 256],
        9398: [[65], 256],
        9399: [[66], 256],
        9400: [[67], 256],
        9401: [[68], 256],
        9402: [[69], 256],
        9403: [[70], 256],
        9404: [[71], 256],
        9405: [[72], 256],
        9406: [[73], 256],
        9407: [[74], 256],
        9408: [[75], 256],
        9409: [[76], 256],
        9410: [[77], 256],
        9411: [[78], 256],
        9412: [[79], 256],
        9413: [[80], 256],
        9414: [[81], 256],
        9415: [[82], 256],
        9416: [[83], 256],
        9417: [[84], 256],
        9418: [[85], 256],
        9419: [[86], 256],
        9420: [[87], 256],
        9421: [[88], 256],
        9422: [[89], 256],
        9423: [[90], 256],
        9424: [[97], 256],
        9425: [[98], 256],
        9426: [[99], 256],
        9427: [[100], 256],
        9428: [[101], 256],
        9429: [[102], 256],
        9430: [[103], 256],
        9431: [[104], 256],
        9432: [[105], 256],
        9433: [[106], 256],
        9434: [[107], 256],
        9435: [[108], 256],
        9436: [[109], 256],
        9437: [[110], 256],
        9438: [[111], 256],
        9439: [[112], 256],
        9440: [[113], 256],
        9441: [[114], 256],
        9442: [[115], 256],
        9443: [[116], 256],
        9444: [[117], 256],
        9445: [[118], 256],
        9446: [[119], 256],
        9447: [[120], 256],
        9448: [[121], 256],
        9449: [[122], 256],
        9450: [[48], 256],
      },
      10752: {
        10764: [[8747, 8747, 8747, 8747], 256],
        10868: [[58, 58, 61], 256],
        10869: [[61, 61], 256],
        10870: [[61, 61, 61], 256],
        10972: [[10973, 824], 512],
      },
      11264: {
        11388: [[106], 256],
        11389: [[86], 256],
        11503: [, 230],
        11504: [, 230],
        11505: [, 230],
      },
      11520: {
        11631: [[11617], 256],
        11647: [, 9],
        11744: [, 230],
        11745: [, 230],
        11746: [, 230],
        11747: [, 230],
        11748: [, 230],
        11749: [, 230],
        11750: [, 230],
        11751: [, 230],
        11752: [, 230],
        11753: [, 230],
        11754: [, 230],
        11755: [, 230],
        11756: [, 230],
        11757: [, 230],
        11758: [, 230],
        11759: [, 230],
        11760: [, 230],
        11761: [, 230],
        11762: [, 230],
        11763: [, 230],
        11764: [, 230],
        11765: [, 230],
        11766: [, 230],
        11767: [, 230],
        11768: [, 230],
        11769: [, 230],
        11770: [, 230],
        11771: [, 230],
        11772: [, 230],
        11773: [, 230],
        11774: [, 230],
        11775: [, 230],
      },
      11776: { 11935: [[27597], 256], 12019: [[40863], 256] },
      12032: {
        12032: [[19968], 256],
        12033: [[20008], 256],
        12034: [[20022], 256],
        12035: [[20031], 256],
        12036: [[20057], 256],
        12037: [[20101], 256],
        12038: [[20108], 256],
        12039: [[20128], 256],
        12040: [[20154], 256],
        12041: [[20799], 256],
        12042: [[20837], 256],
        12043: [[20843], 256],
        12044: [[20866], 256],
        12045: [[20886], 256],
        12046: [[20907], 256],
        12047: [[20960], 256],
        12048: [[20981], 256],
        12049: [[20992], 256],
        12050: [[21147], 256],
        12051: [[21241], 256],
        12052: [[21269], 256],
        12053: [[21274], 256],
        12054: [[21304], 256],
        12055: [[21313], 256],
        12056: [[21340], 256],
        12057: [[21353], 256],
        12058: [[21378], 256],
        12059: [[21430], 256],
        12060: [[21448], 256],
        12061: [[21475], 256],
        12062: [[22231], 256],
        12063: [[22303], 256],
        12064: [[22763], 256],
        12065: [[22786], 256],
        12066: [[22794], 256],
        12067: [[22805], 256],
        12068: [[22823], 256],
        12069: [[22899], 256],
        12070: [[23376], 256],
        12071: [[23424], 256],
        12072: [[23544], 256],
        12073: [[23567], 256],
        12074: [[23586], 256],
        12075: [[23608], 256],
        12076: [[23662], 256],
        12077: [[23665], 256],
        12078: [[24027], 256],
        12079: [[24037], 256],
        12080: [[24049], 256],
        12081: [[24062], 256],
        12082: [[24178], 256],
        12083: [[24186], 256],
        12084: [[24191], 256],
        12085: [[24308], 256],
        12086: [[24318], 256],
        12087: [[24331], 256],
        12088: [[24339], 256],
        12089: [[24400], 256],
        12090: [[24417], 256],
        12091: [[24435], 256],
        12092: [[24515], 256],
        12093: [[25096], 256],
        12094: [[25142], 256],
        12095: [[25163], 256],
        12096: [[25903], 256],
        12097: [[25908], 256],
        12098: [[25991], 256],
        12099: [[26007], 256],
        12100: [[26020], 256],
        12101: [[26041], 256],
        12102: [[26080], 256],
        12103: [[26085], 256],
        12104: [[26352], 256],
        12105: [[26376], 256],
        12106: [[26408], 256],
        12107: [[27424], 256],
        12108: [[27490], 256],
        12109: [[27513], 256],
        12110: [[27571], 256],
        12111: [[27595], 256],
        12112: [[27604], 256],
        12113: [[27611], 256],
        12114: [[27663], 256],
        12115: [[27668], 256],
        12116: [[27700], 256],
        12117: [[28779], 256],
        12118: [[29226], 256],
        12119: [[29238], 256],
        12120: [[29243], 256],
        12121: [[29247], 256],
        12122: [[29255], 256],
        12123: [[29273], 256],
        12124: [[29275], 256],
        12125: [[29356], 256],
        12126: [[29572], 256],
        12127: [[29577], 256],
        12128: [[29916], 256],
        12129: [[29926], 256],
        12130: [[29976], 256],
        12131: [[29983], 256],
        12132: [[29992], 256],
        12133: [[3e4], 256],
        12134: [[30091], 256],
        12135: [[30098], 256],
        12136: [[30326], 256],
        12137: [[30333], 256],
        12138: [[30382], 256],
        12139: [[30399], 256],
        12140: [[30446], 256],
        12141: [[30683], 256],
        12142: [[30690], 256],
        12143: [[30707], 256],
        12144: [[31034], 256],
        12145: [[31160], 256],
        12146: [[31166], 256],
        12147: [[31348], 256],
        12148: [[31435], 256],
        12149: [[31481], 256],
        12150: [[31859], 256],
        12151: [[31992], 256],
        12152: [[32566], 256],
        12153: [[32593], 256],
        12154: [[32650], 256],
        12155: [[32701], 256],
        12156: [[32769], 256],
        12157: [[32780], 256],
        12158: [[32786], 256],
        12159: [[32819], 256],
        12160: [[32895], 256],
        12161: [[32905], 256],
        12162: [[33251], 256],
        12163: [[33258], 256],
        12164: [[33267], 256],
        12165: [[33276], 256],
        12166: [[33292], 256],
        12167: [[33307], 256],
        12168: [[33311], 256],
        12169: [[33390], 256],
        12170: [[33394], 256],
        12171: [[33400], 256],
        12172: [[34381], 256],
        12173: [[34411], 256],
        12174: [[34880], 256],
        12175: [[34892], 256],
        12176: [[34915], 256],
        12177: [[35198], 256],
        12178: [[35211], 256],
        12179: [[35282], 256],
        12180: [[35328], 256],
        12181: [[35895], 256],
        12182: [[35910], 256],
        12183: [[35925], 256],
        12184: [[35960], 256],
        12185: [[35997], 256],
        12186: [[36196], 256],
        12187: [[36208], 256],
        12188: [[36275], 256],
        12189: [[36523], 256],
        12190: [[36554], 256],
        12191: [[36763], 256],
        12192: [[36784], 256],
        12193: [[36789], 256],
        12194: [[37009], 256],
        12195: [[37193], 256],
        12196: [[37318], 256],
        12197: [[37324], 256],
        12198: [[37329], 256],
        12199: [[38263], 256],
        12200: [[38272], 256],
        12201: [[38428], 256],
        12202: [[38582], 256],
        12203: [[38585], 256],
        12204: [[38632], 256],
        12205: [[38737], 256],
        12206: [[38750], 256],
        12207: [[38754], 256],
        12208: [[38761], 256],
        12209: [[38859], 256],
        12210: [[38893], 256],
        12211: [[38899], 256],
        12212: [[38913], 256],
        12213: [[39080], 256],
        12214: [[39131], 256],
        12215: [[39135], 256],
        12216: [[39318], 256],
        12217: [[39321], 256],
        12218: [[39340], 256],
        12219: [[39592], 256],
        12220: [[39640], 256],
        12221: [[39647], 256],
        12222: [[39717], 256],
        12223: [[39727], 256],
        12224: [[39730], 256],
        12225: [[39740], 256],
        12226: [[39770], 256],
        12227: [[40165], 256],
        12228: [[40565], 256],
        12229: [[40575], 256],
        12230: [[40613], 256],
        12231: [[40635], 256],
        12232: [[40643], 256],
        12233: [[40653], 256],
        12234: [[40657], 256],
        12235: [[40697], 256],
        12236: [[40701], 256],
        12237: [[40718], 256],
        12238: [[40723], 256],
        12239: [[40736], 256],
        12240: [[40763], 256],
        12241: [[40778], 256],
        12242: [[40786], 256],
        12243: [[40845], 256],
        12244: [[40860], 256],
        12245: [[40864], 256],
      },
      12288: {
        12288: [[32], 256],
        12330: [, 218],
        12331: [, 228],
        12332: [, 232],
        12333: [, 222],
        12334: [, 224],
        12335: [, 224],
        12342: [[12306], 256],
        12344: [[21313], 256],
        12345: [[21316], 256],
        12346: [[21317], 256],
        12358: [, , { 12441: 12436 }],
        12363: [, , { 12441: 12364 }],
        12364: [[12363, 12441]],
        12365: [, , { 12441: 12366 }],
        12366: [[12365, 12441]],
        12367: [, , { 12441: 12368 }],
        12368: [[12367, 12441]],
        12369: [, , { 12441: 12370 }],
        12370: [[12369, 12441]],
        12371: [, , { 12441: 12372 }],
        12372: [[12371, 12441]],
        12373: [, , { 12441: 12374 }],
        12374: [[12373, 12441]],
        12375: [, , { 12441: 12376 }],
        12376: [[12375, 12441]],
        12377: [, , { 12441: 12378 }],
        12378: [[12377, 12441]],
        12379: [, , { 12441: 12380 }],
        12380: [[12379, 12441]],
        12381: [, , { 12441: 12382 }],
        12382: [[12381, 12441]],
        12383: [, , { 12441: 12384 }],
        12384: [[12383, 12441]],
        12385: [, , { 12441: 12386 }],
        12386: [[12385, 12441]],
        12388: [, , { 12441: 12389 }],
        12389: [[12388, 12441]],
        12390: [, , { 12441: 12391 }],
        12391: [[12390, 12441]],
        12392: [, , { 12441: 12393 }],
        12393: [[12392, 12441]],
        12399: [, , { 12441: 12400, 12442: 12401 }],
        12400: [[12399, 12441]],
        12401: [[12399, 12442]],
        12402: [, , { 12441: 12403, 12442: 12404 }],
        12403: [[12402, 12441]],
        12404: [[12402, 12442]],
        12405: [, , { 12441: 12406, 12442: 12407 }],
        12406: [[12405, 12441]],
        12407: [[12405, 12442]],
        12408: [, , { 12441: 12409, 12442: 12410 }],
        12409: [[12408, 12441]],
        12410: [[12408, 12442]],
        12411: [, , { 12441: 12412, 12442: 12413 }],
        12412: [[12411, 12441]],
        12413: [[12411, 12442]],
        12436: [[12358, 12441]],
        12441: [, 8],
        12442: [, 8],
        12443: [[32, 12441], 256],
        12444: [[32, 12442], 256],
        12445: [, , { 12441: 12446 }],
        12446: [[12445, 12441]],
        12447: [[12424, 12426], 256],
        12454: [, , { 12441: 12532 }],
        12459: [, , { 12441: 12460 }],
        12460: [[12459, 12441]],
        12461: [, , { 12441: 12462 }],
        12462: [[12461, 12441]],
        12463: [, , { 12441: 12464 }],
        12464: [[12463, 12441]],
        12465: [, , { 12441: 12466 }],
        12466: [[12465, 12441]],
        12467: [, , { 12441: 12468 }],
        12468: [[12467, 12441]],
        12469: [, , { 12441: 12470 }],
        12470: [[12469, 12441]],
        12471: [, , { 12441: 12472 }],
        12472: [[12471, 12441]],
        12473: [, , { 12441: 12474 }],
        12474: [[12473, 12441]],
        12475: [, , { 12441: 12476 }],
        12476: [[12475, 12441]],
        12477: [, , { 12441: 12478 }],
        12478: [[12477, 12441]],
        12479: [, , { 12441: 12480 }],
        12480: [[12479, 12441]],
        12481: [, , { 12441: 12482 }],
        12482: [[12481, 12441]],
        12484: [, , { 12441: 12485 }],
        12485: [[12484, 12441]],
        12486: [, , { 12441: 12487 }],
        12487: [[12486, 12441]],
        12488: [, , { 12441: 12489 }],
        12489: [[12488, 12441]],
        12495: [, , { 12441: 12496, 12442: 12497 }],
        12496: [[12495, 12441]],
        12497: [[12495, 12442]],
        12498: [, , { 12441: 12499, 12442: 12500 }],
        12499: [[12498, 12441]],
        12500: [[12498, 12442]],
        12501: [, , { 12441: 12502, 12442: 12503 }],
        12502: [[12501, 12441]],
        12503: [[12501, 12442]],
        12504: [, , { 12441: 12505, 12442: 12506 }],
        12505: [[12504, 12441]],
        12506: [[12504, 12442]],
        12507: [, , { 12441: 12508, 12442: 12509 }],
        12508: [[12507, 12441]],
        12509: [[12507, 12442]],
        12527: [, , { 12441: 12535 }],
        12528: [, , { 12441: 12536 }],
        12529: [, , { 12441: 12537 }],
        12530: [, , { 12441: 12538 }],
        12532: [[12454, 12441]],
        12535: [[12527, 12441]],
        12536: [[12528, 12441]],
        12537: [[12529, 12441]],
        12538: [[12530, 12441]],
        12541: [, , { 12441: 12542 }],
        12542: [[12541, 12441]],
        12543: [[12467, 12488], 256],
      },
      12544: {
        12593: [[4352], 256],
        12594: [[4353], 256],
        12595: [[4522], 256],
        12596: [[4354], 256],
        12597: [[4524], 256],
        12598: [[4525], 256],
        12599: [[4355], 256],
        12600: [[4356], 256],
        12601: [[4357], 256],
        12602: [[4528], 256],
        12603: [[4529], 256],
        12604: [[4530], 256],
        12605: [[4531], 256],
        12606: [[4532], 256],
        12607: [[4533], 256],
        12608: [[4378], 256],
        12609: [[4358], 256],
        12610: [[4359], 256],
        12611: [[4360], 256],
        12612: [[4385], 256],
        12613: [[4361], 256],
        12614: [[4362], 256],
        12615: [[4363], 256],
        12616: [[4364], 256],
        12617: [[4365], 256],
        12618: [[4366], 256],
        12619: [[4367], 256],
        12620: [[4368], 256],
        12621: [[4369], 256],
        12622: [[4370], 256],
        12623: [[4449], 256],
        12624: [[4450], 256],
        12625: [[4451], 256],
        12626: [[4452], 256],
        12627: [[4453], 256],
        12628: [[4454], 256],
        12629: [[4455], 256],
        12630: [[4456], 256],
        12631: [[4457], 256],
        12632: [[4458], 256],
        12633: [[4459], 256],
        12634: [[4460], 256],
        12635: [[4461], 256],
        12636: [[4462], 256],
        12637: [[4463], 256],
        12638: [[4464], 256],
        12639: [[4465], 256],
        12640: [[4466], 256],
        12641: [[4467], 256],
        12642: [[4468], 256],
        12643: [[4469], 256],
        12644: [[4448], 256],
        12645: [[4372], 256],
        12646: [[4373], 256],
        12647: [[4551], 256],
        12648: [[4552], 256],
        12649: [[4556], 256],
        12650: [[4558], 256],
        12651: [[4563], 256],
        12652: [[4567], 256],
        12653: [[4569], 256],
        12654: [[4380], 256],
        12655: [[4573], 256],
        12656: [[4575], 256],
        12657: [[4381], 256],
        12658: [[4382], 256],
        12659: [[4384], 256],
        12660: [[4386], 256],
        12661: [[4387], 256],
        12662: [[4391], 256],
        12663: [[4393], 256],
        12664: [[4395], 256],
        12665: [[4396], 256],
        12666: [[4397], 256],
        12667: [[4398], 256],
        12668: [[4399], 256],
        12669: [[4402], 256],
        12670: [[4406], 256],
        12671: [[4416], 256],
        12672: [[4423], 256],
        12673: [[4428], 256],
        12674: [[4593], 256],
        12675: [[4594], 256],
        12676: [[4439], 256],
        12677: [[4440], 256],
        12678: [[4441], 256],
        12679: [[4484], 256],
        12680: [[4485], 256],
        12681: [[4488], 256],
        12682: [[4497], 256],
        12683: [[4498], 256],
        12684: [[4500], 256],
        12685: [[4510], 256],
        12686: [[4513], 256],
        12690: [[19968], 256],
        12691: [[20108], 256],
        12692: [[19977], 256],
        12693: [[22235], 256],
        12694: [[19978], 256],
        12695: [[20013], 256],
        12696: [[19979], 256],
        12697: [[30002], 256],
        12698: [[20057], 256],
        12699: [[19993], 256],
        12700: [[19969], 256],
        12701: [[22825], 256],
        12702: [[22320], 256],
        12703: [[20154], 256],
      },
      12800: {
        12800: [[40, 4352, 41], 256],
        12801: [[40, 4354, 41], 256],
        12802: [[40, 4355, 41], 256],
        12803: [[40, 4357, 41], 256],
        12804: [[40, 4358, 41], 256],
        12805: [[40, 4359, 41], 256],
        12806: [[40, 4361, 41], 256],
        12807: [[40, 4363, 41], 256],
        12808: [[40, 4364, 41], 256],
        12809: [[40, 4366, 41], 256],
        12810: [[40, 4367, 41], 256],
        12811: [[40, 4368, 41], 256],
        12812: [[40, 4369, 41], 256],
        12813: [[40, 4370, 41], 256],
        12814: [[40, 4352, 4449, 41], 256],
        12815: [[40, 4354, 4449, 41], 256],
        12816: [[40, 4355, 4449, 41], 256],
        12817: [[40, 4357, 4449, 41], 256],
        12818: [[40, 4358, 4449, 41], 256],
        12819: [[40, 4359, 4449, 41], 256],
        12820: [[40, 4361, 4449, 41], 256],
        12821: [[40, 4363, 4449, 41], 256],
        12822: [[40, 4364, 4449, 41], 256],
        12823: [[40, 4366, 4449, 41], 256],
        12824: [[40, 4367, 4449, 41], 256],
        12825: [[40, 4368, 4449, 41], 256],
        12826: [[40, 4369, 4449, 41], 256],
        12827: [[40, 4370, 4449, 41], 256],
        12828: [[40, 4364, 4462, 41], 256],
        12829: [[40, 4363, 4457, 4364, 4453, 4523, 41], 256],
        12830: [[40, 4363, 4457, 4370, 4462, 41], 256],
        12832: [[40, 19968, 41], 256],
        12833: [[40, 20108, 41], 256],
        12834: [[40, 19977, 41], 256],
        12835: [[40, 22235, 41], 256],
        12836: [[40, 20116, 41], 256],
        12837: [[40, 20845, 41], 256],
        12838: [[40, 19971, 41], 256],
        12839: [[40, 20843, 41], 256],
        12840: [[40, 20061, 41], 256],
        12841: [[40, 21313, 41], 256],
        12842: [[40, 26376, 41], 256],
        12843: [[40, 28779, 41], 256],
        12844: [[40, 27700, 41], 256],
        12845: [[40, 26408, 41], 256],
        12846: [[40, 37329, 41], 256],
        12847: [[40, 22303, 41], 256],
        12848: [[40, 26085, 41], 256],
        12849: [[40, 26666, 41], 256],
        12850: [[40, 26377, 41], 256],
        12851: [[40, 31038, 41], 256],
        12852: [[40, 21517, 41], 256],
        12853: [[40, 29305, 41], 256],
        12854: [[40, 36001, 41], 256],
        12855: [[40, 31069, 41], 256],
        12856: [[40, 21172, 41], 256],
        12857: [[40, 20195, 41], 256],
        12858: [[40, 21628, 41], 256],
        12859: [[40, 23398, 41], 256],
        12860: [[40, 30435, 41], 256],
        12861: [[40, 20225, 41], 256],
        12862: [[40, 36039, 41], 256],
        12863: [[40, 21332, 41], 256],
        12864: [[40, 31085, 41], 256],
        12865: [[40, 20241, 41], 256],
        12866: [[40, 33258, 41], 256],
        12867: [[40, 33267, 41], 256],
        12868: [[21839], 256],
        12869: [[24188], 256],
        12870: [[25991], 256],
        12871: [[31631], 256],
        12880: [[80, 84, 69], 256],
        12881: [[50, 49], 256],
        12882: [[50, 50], 256],
        12883: [[50, 51], 256],
        12884: [[50, 52], 256],
        12885: [[50, 53], 256],
        12886: [[50, 54], 256],
        12887: [[50, 55], 256],
        12888: [[50, 56], 256],
        12889: [[50, 57], 256],
        12890: [[51, 48], 256],
        12891: [[51, 49], 256],
        12892: [[51, 50], 256],
        12893: [[51, 51], 256],
        12894: [[51, 52], 256],
        12895: [[51, 53], 256],
        12896: [[4352], 256],
        12897: [[4354], 256],
        12898: [[4355], 256],
        12899: [[4357], 256],
        12900: [[4358], 256],
        12901: [[4359], 256],
        12902: [[4361], 256],
        12903: [[4363], 256],
        12904: [[4364], 256],
        12905: [[4366], 256],
        12906: [[4367], 256],
        12907: [[4368], 256],
        12908: [[4369], 256],
        12909: [[4370], 256],
        12910: [[4352, 4449], 256],
        12911: [[4354, 4449], 256],
        12912: [[4355, 4449], 256],
        12913: [[4357, 4449], 256],
        12914: [[4358, 4449], 256],
        12915: [[4359, 4449], 256],
        12916: [[4361, 4449], 256],
        12917: [[4363, 4449], 256],
        12918: [[4364, 4449], 256],
        12919: [[4366, 4449], 256],
        12920: [[4367, 4449], 256],
        12921: [[4368, 4449], 256],
        12922: [[4369, 4449], 256],
        12923: [[4370, 4449], 256],
        12924: [[4366, 4449, 4535, 4352, 4457], 256],
        12925: [[4364, 4462, 4363, 4468], 256],
        12926: [[4363, 4462], 256],
        12928: [[19968], 256],
        12929: [[20108], 256],
        12930: [[19977], 256],
        12931: [[22235], 256],
        12932: [[20116], 256],
        12933: [[20845], 256],
        12934: [[19971], 256],
        12935: [[20843], 256],
        12936: [[20061], 256],
        12937: [[21313], 256],
        12938: [[26376], 256],
        12939: [[28779], 256],
        12940: [[27700], 256],
        12941: [[26408], 256],
        12942: [[37329], 256],
        12943: [[22303], 256],
        12944: [[26085], 256],
        12945: [[26666], 256],
        12946: [[26377], 256],
        12947: [[31038], 256],
        12948: [[21517], 256],
        12949: [[29305], 256],
        12950: [[36001], 256],
        12951: [[31069], 256],
        12952: [[21172], 256],
        12953: [[31192], 256],
        12954: [[30007], 256],
        12955: [[22899], 256],
        12956: [[36969], 256],
        12957: [[20778], 256],
        12958: [[21360], 256],
        12959: [[27880], 256],
        12960: [[38917], 256],
        12961: [[20241], 256],
        12962: [[20889], 256],
        12963: [[27491], 256],
        12964: [[19978], 256],
        12965: [[20013], 256],
        12966: [[19979], 256],
        12967: [[24038], 256],
        12968: [[21491], 256],
        12969: [[21307], 256],
        12970: [[23447], 256],
        12971: [[23398], 256],
        12972: [[30435], 256],
        12973: [[20225], 256],
        12974: [[36039], 256],
        12975: [[21332], 256],
        12976: [[22812], 256],
        12977: [[51, 54], 256],
        12978: [[51, 55], 256],
        12979: [[51, 56], 256],
        12980: [[51, 57], 256],
        12981: [[52, 48], 256],
        12982: [[52, 49], 256],
        12983: [[52, 50], 256],
        12984: [[52, 51], 256],
        12985: [[52, 52], 256],
        12986: [[52, 53], 256],
        12987: [[52, 54], 256],
        12988: [[52, 55], 256],
        12989: [[52, 56], 256],
        12990: [[52, 57], 256],
        12991: [[53, 48], 256],
        12992: [[49, 26376], 256],
        12993: [[50, 26376], 256],
        12994: [[51, 26376], 256],
        12995: [[52, 26376], 256],
        12996: [[53, 26376], 256],
        12997: [[54, 26376], 256],
        12998: [[55, 26376], 256],
        12999: [[56, 26376], 256],
        13e3: [[57, 26376], 256],
        13001: [[49, 48, 26376], 256],
        13002: [[49, 49, 26376], 256],
        13003: [[49, 50, 26376], 256],
        13004: [[72, 103], 256],
        13005: [[101, 114, 103], 256],
        13006: [[101, 86], 256],
        13007: [[76, 84, 68], 256],
        13008: [[12450], 256],
        13009: [[12452], 256],
        13010: [[12454], 256],
        13011: [[12456], 256],
        13012: [[12458], 256],
        13013: [[12459], 256],
        13014: [[12461], 256],
        13015: [[12463], 256],
        13016: [[12465], 256],
        13017: [[12467], 256],
        13018: [[12469], 256],
        13019: [[12471], 256],
        13020: [[12473], 256],
        13021: [[12475], 256],
        13022: [[12477], 256],
        13023: [[12479], 256],
        13024: [[12481], 256],
        13025: [[12484], 256],
        13026: [[12486], 256],
        13027: [[12488], 256],
        13028: [[12490], 256],
        13029: [[12491], 256],
        13030: [[12492], 256],
        13031: [[12493], 256],
        13032: [[12494], 256],
        13033: [[12495], 256],
        13034: [[12498], 256],
        13035: [[12501], 256],
        13036: [[12504], 256],
        13037: [[12507], 256],
        13038: [[12510], 256],
        13039: [[12511], 256],
        13040: [[12512], 256],
        13041: [[12513], 256],
        13042: [[12514], 256],
        13043: [[12516], 256],
        13044: [[12518], 256],
        13045: [[12520], 256],
        13046: [[12521], 256],
        13047: [[12522], 256],
        13048: [[12523], 256],
        13049: [[12524], 256],
        13050: [[12525], 256],
        13051: [[12527], 256],
        13052: [[12528], 256],
        13053: [[12529], 256],
        13054: [[12530], 256],
      },
      13056: {
        13056: [[12450, 12497, 12540, 12488], 256],
        13057: [[12450, 12523, 12501, 12449], 256],
        13058: [[12450, 12531, 12506, 12450], 256],
        13059: [[12450, 12540, 12523], 256],
        13060: [[12452, 12491, 12531, 12464], 256],
        13061: [[12452, 12531, 12481], 256],
        13062: [[12454, 12457, 12531], 256],
        13063: [[12456, 12473, 12463, 12540, 12489], 256],
        13064: [[12456, 12540, 12459, 12540], 256],
        13065: [[12458, 12531, 12473], 256],
        13066: [[12458, 12540, 12512], 256],
        13067: [[12459, 12452, 12522], 256],
        13068: [[12459, 12521, 12483, 12488], 256],
        13069: [[12459, 12525, 12522, 12540], 256],
        13070: [[12460, 12525, 12531], 256],
        13071: [[12460, 12531, 12510], 256],
        13072: [[12462, 12460], 256],
        13073: [[12462, 12491, 12540], 256],
        13074: [[12461, 12517, 12522, 12540], 256],
        13075: [[12462, 12523, 12480, 12540], 256],
        13076: [[12461, 12525], 256],
        13077: [[12461, 12525, 12464, 12521, 12512], 256],
        13078: [[12461, 12525, 12513, 12540, 12488, 12523], 256],
        13079: [[12461, 12525, 12527, 12483, 12488], 256],
        13080: [[12464, 12521, 12512], 256],
        13081: [[12464, 12521, 12512, 12488, 12531], 256],
        13082: [[12463, 12523, 12476, 12452, 12525], 256],
        13083: [[12463, 12525, 12540, 12493], 256],
        13084: [[12465, 12540, 12473], 256],
        13085: [[12467, 12523, 12490], 256],
        13086: [[12467, 12540, 12509], 256],
        13087: [[12469, 12452, 12463, 12523], 256],
        13088: [[12469, 12531, 12481, 12540, 12512], 256],
        13089: [[12471, 12522, 12531, 12464], 256],
        13090: [[12475, 12531, 12481], 256],
        13091: [[12475, 12531, 12488], 256],
        13092: [[12480, 12540, 12473], 256],
        13093: [[12487, 12471], 256],
        13094: [[12489, 12523], 256],
        13095: [[12488, 12531], 256],
        13096: [[12490, 12494], 256],
        13097: [[12494, 12483, 12488], 256],
        13098: [[12495, 12452, 12484], 256],
        13099: [[12497, 12540, 12475, 12531, 12488], 256],
        13100: [[12497, 12540, 12484], 256],
        13101: [[12496, 12540, 12524, 12523], 256],
        13102: [[12500, 12450, 12473, 12488, 12523], 256],
        13103: [[12500, 12463, 12523], 256],
        13104: [[12500, 12467], 256],
        13105: [[12499, 12523], 256],
        13106: [[12501, 12449, 12521, 12483, 12489], 256],
        13107: [[12501, 12451, 12540, 12488], 256],
        13108: [[12502, 12483, 12471, 12455, 12523], 256],
        13109: [[12501, 12521, 12531], 256],
        13110: [[12504, 12463, 12479, 12540, 12523], 256],
        13111: [[12506, 12477], 256],
        13112: [[12506, 12491, 12498], 256],
        13113: [[12504, 12523, 12484], 256],
        13114: [[12506, 12531, 12473], 256],
        13115: [[12506, 12540, 12472], 256],
        13116: [[12505, 12540, 12479], 256],
        13117: [[12509, 12452, 12531, 12488], 256],
        13118: [[12508, 12523, 12488], 256],
        13119: [[12507, 12531], 256],
        13120: [[12509, 12531, 12489], 256],
        13121: [[12507, 12540, 12523], 256],
        13122: [[12507, 12540, 12531], 256],
        13123: [[12510, 12452, 12463, 12525], 256],
        13124: [[12510, 12452, 12523], 256],
        13125: [[12510, 12483, 12495], 256],
        13126: [[12510, 12523, 12463], 256],
        13127: [[12510, 12531, 12471, 12519, 12531], 256],
        13128: [[12511, 12463, 12525, 12531], 256],
        13129: [[12511, 12522], 256],
        13130: [[12511, 12522, 12496, 12540, 12523], 256],
        13131: [[12513, 12460], 256],
        13132: [[12513, 12460, 12488, 12531], 256],
        13133: [[12513, 12540, 12488, 12523], 256],
        13134: [[12516, 12540, 12489], 256],
        13135: [[12516, 12540, 12523], 256],
        13136: [[12518, 12450, 12531], 256],
        13137: [[12522, 12483, 12488, 12523], 256],
        13138: [[12522, 12521], 256],
        13139: [[12523, 12500, 12540], 256],
        13140: [[12523, 12540, 12502, 12523], 256],
        13141: [[12524, 12512], 256],
        13142: [[12524, 12531, 12488, 12466, 12531], 256],
        13143: [[12527, 12483, 12488], 256],
        13144: [[48, 28857], 256],
        13145: [[49, 28857], 256],
        13146: [[50, 28857], 256],
        13147: [[51, 28857], 256],
        13148: [[52, 28857], 256],
        13149: [[53, 28857], 256],
        13150: [[54, 28857], 256],
        13151: [[55, 28857], 256],
        13152: [[56, 28857], 256],
        13153: [[57, 28857], 256],
        13154: [[49, 48, 28857], 256],
        13155: [[49, 49, 28857], 256],
        13156: [[49, 50, 28857], 256],
        13157: [[49, 51, 28857], 256],
        13158: [[49, 52, 28857], 256],
        13159: [[49, 53, 28857], 256],
        13160: [[49, 54, 28857], 256],
        13161: [[49, 55, 28857], 256],
        13162: [[49, 56, 28857], 256],
        13163: [[49, 57, 28857], 256],
        13164: [[50, 48, 28857], 256],
        13165: [[50, 49, 28857], 256],
        13166: [[50, 50, 28857], 256],
        13167: [[50, 51, 28857], 256],
        13168: [[50, 52, 28857], 256],
        13169: [[104, 80, 97], 256],
        13170: [[100, 97], 256],
        13171: [[65, 85], 256],
        13172: [[98, 97, 114], 256],
        13173: [[111, 86], 256],
        13174: [[112, 99], 256],
        13175: [[100, 109], 256],
        13176: [[100, 109, 178], 256],
        13177: [[100, 109, 179], 256],
        13178: [[73, 85], 256],
        13179: [[24179, 25104], 256],
        13180: [[26157, 21644], 256],
        13181: [[22823, 27491], 256],
        13182: [[26126, 27835], 256],
        13183: [[26666, 24335, 20250, 31038], 256],
        13184: [[112, 65], 256],
        13185: [[110, 65], 256],
        13186: [[956, 65], 256],
        13187: [[109, 65], 256],
        13188: [[107, 65], 256],
        13189: [[75, 66], 256],
        13190: [[77, 66], 256],
        13191: [[71, 66], 256],
        13192: [[99, 97, 108], 256],
        13193: [[107, 99, 97, 108], 256],
        13194: [[112, 70], 256],
        13195: [[110, 70], 256],
        13196: [[956, 70], 256],
        13197: [[956, 103], 256],
        13198: [[109, 103], 256],
        13199: [[107, 103], 256],
        13200: [[72, 122], 256],
        13201: [[107, 72, 122], 256],
        13202: [[77, 72, 122], 256],
        13203: [[71, 72, 122], 256],
        13204: [[84, 72, 122], 256],
        13205: [[956, 8467], 256],
        13206: [[109, 8467], 256],
        13207: [[100, 8467], 256],
        13208: [[107, 8467], 256],
        13209: [[102, 109], 256],
        13210: [[110, 109], 256],
        13211: [[956, 109], 256],
        13212: [[109, 109], 256],
        13213: [[99, 109], 256],
        13214: [[107, 109], 256],
        13215: [[109, 109, 178], 256],
        13216: [[99, 109, 178], 256],
        13217: [[109, 178], 256],
        13218: [[107, 109, 178], 256],
        13219: [[109, 109, 179], 256],
        13220: [[99, 109, 179], 256],
        13221: [[109, 179], 256],
        13222: [[107, 109, 179], 256],
        13223: [[109, 8725, 115], 256],
        13224: [[109, 8725, 115, 178], 256],
        13225: [[80, 97], 256],
        13226: [[107, 80, 97], 256],
        13227: [[77, 80, 97], 256],
        13228: [[71, 80, 97], 256],
        13229: [[114, 97, 100], 256],
        13230: [[114, 97, 100, 8725, 115], 256],
        13231: [[114, 97, 100, 8725, 115, 178], 256],
        13232: [[112, 115], 256],
        13233: [[110, 115], 256],
        13234: [[956, 115], 256],
        13235: [[109, 115], 256],
        13236: [[112, 86], 256],
        13237: [[110, 86], 256],
        13238: [[956, 86], 256],
        13239: [[109, 86], 256],
        13240: [[107, 86], 256],
        13241: [[77, 86], 256],
        13242: [[112, 87], 256],
        13243: [[110, 87], 256],
        13244: [[956, 87], 256],
        13245: [[109, 87], 256],
        13246: [[107, 87], 256],
        13247: [[77, 87], 256],
        13248: [[107, 937], 256],
        13249: [[77, 937], 256],
        13250: [[97, 46, 109, 46], 256],
        13251: [[66, 113], 256],
        13252: [[99, 99], 256],
        13253: [[99, 100], 256],
        13254: [[67, 8725, 107, 103], 256],
        13255: [[67, 111, 46], 256],
        13256: [[100, 66], 256],
        13257: [[71, 121], 256],
        13258: [[104, 97], 256],
        13259: [[72, 80], 256],
        13260: [[105, 110], 256],
        13261: [[75, 75], 256],
        13262: [[75, 77], 256],
        13263: [[107, 116], 256],
        13264: [[108, 109], 256],
        13265: [[108, 110], 256],
        13266: [[108, 111, 103], 256],
        13267: [[108, 120], 256],
        13268: [[109, 98], 256],
        13269: [[109, 105, 108], 256],
        13270: [[109, 111, 108], 256],
        13271: [[80, 72], 256],
        13272: [[112, 46, 109, 46], 256],
        13273: [[80, 80, 77], 256],
        13274: [[80, 82], 256],
        13275: [[115, 114], 256],
        13276: [[83, 118], 256],
        13277: [[87, 98], 256],
        13278: [[86, 8725, 109], 256],
        13279: [[65, 8725, 109], 256],
        13280: [[49, 26085], 256],
        13281: [[50, 26085], 256],
        13282: [[51, 26085], 256],
        13283: [[52, 26085], 256],
        13284: [[53, 26085], 256],
        13285: [[54, 26085], 256],
        13286: [[55, 26085], 256],
        13287: [[56, 26085], 256],
        13288: [[57, 26085], 256],
        13289: [[49, 48, 26085], 256],
        13290: [[49, 49, 26085], 256],
        13291: [[49, 50, 26085], 256],
        13292: [[49, 51, 26085], 256],
        13293: [[49, 52, 26085], 256],
        13294: [[49, 53, 26085], 256],
        13295: [[49, 54, 26085], 256],
        13296: [[49, 55, 26085], 256],
        13297: [[49, 56, 26085], 256],
        13298: [[49, 57, 26085], 256],
        13299: [[50, 48, 26085], 256],
        13300: [[50, 49, 26085], 256],
        13301: [[50, 50, 26085], 256],
        13302: [[50, 51, 26085], 256],
        13303: [[50, 52, 26085], 256],
        13304: [[50, 53, 26085], 256],
        13305: [[50, 54, 26085], 256],
        13306: [[50, 55, 26085], 256],
        13307: [[50, 56, 26085], 256],
        13308: [[50, 57, 26085], 256],
        13309: [[51, 48, 26085], 256],
        13310: [[51, 49, 26085], 256],
        13311: [[103, 97, 108], 256],
      },
      27136: {
        92912: [, 1],
        92913: [, 1],
        92914: [, 1],
        92915: [, 1],
        92916: [, 1],
      },
      27392: {
        92976: [, 230],
        92977: [, 230],
        92978: [, 230],
        92979: [, 230],
        92980: [, 230],
        92981: [, 230],
        92982: [, 230],
      },
      42496: {
        42607: [, 230],
        42612: [, 230],
        42613: [, 230],
        42614: [, 230],
        42615: [, 230],
        42616: [, 230],
        42617: [, 230],
        42618: [, 230],
        42619: [, 230],
        42620: [, 230],
        42621: [, 230],
        42652: [[1098], 256],
        42653: [[1100], 256],
        42655: [, 230],
        42736: [, 230],
        42737: [, 230],
      },
      42752: { 42864: [[42863], 256], 43e3: [[294], 256], 43001: [[339], 256] },
      43008: {
        43014: [, 9],
        43204: [, 9],
        43232: [, 230],
        43233: [, 230],
        43234: [, 230],
        43235: [, 230],
        43236: [, 230],
        43237: [, 230],
        43238: [, 230],
        43239: [, 230],
        43240: [, 230],
        43241: [, 230],
        43242: [, 230],
        43243: [, 230],
        43244: [, 230],
        43245: [, 230],
        43246: [, 230],
        43247: [, 230],
        43248: [, 230],
        43249: [, 230],
      },
      43264: {
        43307: [, 220],
        43308: [, 220],
        43309: [, 220],
        43347: [, 9],
        43443: [, 7],
        43456: [, 9],
      },
      43520: {
        43696: [, 230],
        43698: [, 230],
        43699: [, 230],
        43700: [, 220],
        43703: [, 230],
        43704: [, 230],
        43710: [, 230],
        43711: [, 230],
        43713: [, 230],
        43766: [, 9],
      },
      43776: {
        43868: [[42791], 256],
        43869: [[43831], 256],
        43870: [[619], 256],
        43871: [[43858], 256],
        44013: [, 9],
      },
      48128: { 113822: [, 1] },
      53504: {
        119134: [[119127, 119141], 512],
        119135: [[119128, 119141], 512],
        119136: [[119135, 119150], 512],
        119137: [[119135, 119151], 512],
        119138: [[119135, 119152], 512],
        119139: [[119135, 119153], 512],
        119140: [[119135, 119154], 512],
        119141: [, 216],
        119142: [, 216],
        119143: [, 1],
        119144: [, 1],
        119145: [, 1],
        119149: [, 226],
        119150: [, 216],
        119151: [, 216],
        119152: [, 216],
        119153: [, 216],
        119154: [, 216],
        119163: [, 220],
        119164: [, 220],
        119165: [, 220],
        119166: [, 220],
        119167: [, 220],
        119168: [, 220],
        119169: [, 220],
        119170: [, 220],
        119173: [, 230],
        119174: [, 230],
        119175: [, 230],
        119176: [, 230],
        119177: [, 230],
        119178: [, 220],
        119179: [, 220],
        119210: [, 230],
        119211: [, 230],
        119212: [, 230],
        119213: [, 230],
        119227: [[119225, 119141], 512],
        119228: [[119226, 119141], 512],
        119229: [[119227, 119150], 512],
        119230: [[119228, 119150], 512],
        119231: [[119227, 119151], 512],
        119232: [[119228, 119151], 512],
      },
      53760: { 119362: [, 230], 119363: [, 230], 119364: [, 230] },
      54272: {
        119808: [[65], 256],
        119809: [[66], 256],
        119810: [[67], 256],
        119811: [[68], 256],
        119812: [[69], 256],
        119813: [[70], 256],
        119814: [[71], 256],
        119815: [[72], 256],
        119816: [[73], 256],
        119817: [[74], 256],
        119818: [[75], 256],
        119819: [[76], 256],
        119820: [[77], 256],
        119821: [[78], 256],
        119822: [[79], 256],
        119823: [[80], 256],
        119824: [[81], 256],
        119825: [[82], 256],
        119826: [[83], 256],
        119827: [[84], 256],
        119828: [[85], 256],
        119829: [[86], 256],
        119830: [[87], 256],
        119831: [[88], 256],
        119832: [[89], 256],
        119833: [[90], 256],
        119834: [[97], 256],
        119835: [[98], 256],
        119836: [[99], 256],
        119837: [[100], 256],
        119838: [[101], 256],
        119839: [[102], 256],
        119840: [[103], 256],
        119841: [[104], 256],
        119842: [[105], 256],
        119843: [[106], 256],
        119844: [[107], 256],
        119845: [[108], 256],
        119846: [[109], 256],
        119847: [[110], 256],
        119848: [[111], 256],
        119849: [[112], 256],
        119850: [[113], 256],
        119851: [[114], 256],
        119852: [[115], 256],
        119853: [[116], 256],
        119854: [[117], 256],
        119855: [[118], 256],
        119856: [[119], 256],
        119857: [[120], 256],
        119858: [[121], 256],
        119859: [[122], 256],
        119860: [[65], 256],
        119861: [[66], 256],
        119862: [[67], 256],
        119863: [[68], 256],
        119864: [[69], 256],
        119865: [[70], 256],
        119866: [[71], 256],
        119867: [[72], 256],
        119868: [[73], 256],
        119869: [[74], 256],
        119870: [[75], 256],
        119871: [[76], 256],
        119872: [[77], 256],
        119873: [[78], 256],
        119874: [[79], 256],
        119875: [[80], 256],
        119876: [[81], 256],
        119877: [[82], 256],
        119878: [[83], 256],
        119879: [[84], 256],
        119880: [[85], 256],
        119881: [[86], 256],
        119882: [[87], 256],
        119883: [[88], 256],
        119884: [[89], 256],
        119885: [[90], 256],
        119886: [[97], 256],
        119887: [[98], 256],
        119888: [[99], 256],
        119889: [[100], 256],
        119890: [[101], 256],
        119891: [[102], 256],
        119892: [[103], 256],
        119894: [[105], 256],
        119895: [[106], 256],
        119896: [[107], 256],
        119897: [[108], 256],
        119898: [[109], 256],
        119899: [[110], 256],
        119900: [[111], 256],
        119901: [[112], 256],
        119902: [[113], 256],
        119903: [[114], 256],
        119904: [[115], 256],
        119905: [[116], 256],
        119906: [[117], 256],
        119907: [[118], 256],
        119908: [[119], 256],
        119909: [[120], 256],
        119910: [[121], 256],
        119911: [[122], 256],
        119912: [[65], 256],
        119913: [[66], 256],
        119914: [[67], 256],
        119915: [[68], 256],
        119916: [[69], 256],
        119917: [[70], 256],
        119918: [[71], 256],
        119919: [[72], 256],
        119920: [[73], 256],
        119921: [[74], 256],
        119922: [[75], 256],
        119923: [[76], 256],
        119924: [[77], 256],
        119925: [[78], 256],
        119926: [[79], 256],
        119927: [[80], 256],
        119928: [[81], 256],
        119929: [[82], 256],
        119930: [[83], 256],
        119931: [[84], 256],
        119932: [[85], 256],
        119933: [[86], 256],
        119934: [[87], 256],
        119935: [[88], 256],
        119936: [[89], 256],
        119937: [[90], 256],
        119938: [[97], 256],
        119939: [[98], 256],
        119940: [[99], 256],
        119941: [[100], 256],
        119942: [[101], 256],
        119943: [[102], 256],
        119944: [[103], 256],
        119945: [[104], 256],
        119946: [[105], 256],
        119947: [[106], 256],
        119948: [[107], 256],
        119949: [[108], 256],
        119950: [[109], 256],
        119951: [[110], 256],
        119952: [[111], 256],
        119953: [[112], 256],
        119954: [[113], 256],
        119955: [[114], 256],
        119956: [[115], 256],
        119957: [[116], 256],
        119958: [[117], 256],
        119959: [[118], 256],
        119960: [[119], 256],
        119961: [[120], 256],
        119962: [[121], 256],
        119963: [[122], 256],
        119964: [[65], 256],
        119966: [[67], 256],
        119967: [[68], 256],
        119970: [[71], 256],
        119973: [[74], 256],
        119974: [[75], 256],
        119977: [[78], 256],
        119978: [[79], 256],
        119979: [[80], 256],
        119980: [[81], 256],
        119982: [[83], 256],
        119983: [[84], 256],
        119984: [[85], 256],
        119985: [[86], 256],
        119986: [[87], 256],
        119987: [[88], 256],
        119988: [[89], 256],
        119989: [[90], 256],
        119990: [[97], 256],
        119991: [[98], 256],
        119992: [[99], 256],
        119993: [[100], 256],
        119995: [[102], 256],
        119997: [[104], 256],
        119998: [[105], 256],
        119999: [[106], 256],
        12e4: [[107], 256],
        120001: [[108], 256],
        120002: [[109], 256],
        120003: [[110], 256],
        120005: [[112], 256],
        120006: [[113], 256],
        120007: [[114], 256],
        120008: [[115], 256],
        120009: [[116], 256],
        120010: [[117], 256],
        120011: [[118], 256],
        120012: [[119], 256],
        120013: [[120], 256],
        120014: [[121], 256],
        120015: [[122], 256],
        120016: [[65], 256],
        120017: [[66], 256],
        120018: [[67], 256],
        120019: [[68], 256],
        120020: [[69], 256],
        120021: [[70], 256],
        120022: [[71], 256],
        120023: [[72], 256],
        120024: [[73], 256],
        120025: [[74], 256],
        120026: [[75], 256],
        120027: [[76], 256],
        120028: [[77], 256],
        120029: [[78], 256],
        120030: [[79], 256],
        120031: [[80], 256],
        120032: [[81], 256],
        120033: [[82], 256],
        120034: [[83], 256],
        120035: [[84], 256],
        120036: [[85], 256],
        120037: [[86], 256],
        120038: [[87], 256],
        120039: [[88], 256],
        120040: [[89], 256],
        120041: [[90], 256],
        120042: [[97], 256],
        120043: [[98], 256],
        120044: [[99], 256],
        120045: [[100], 256],
        120046: [[101], 256],
        120047: [[102], 256],
        120048: [[103], 256],
        120049: [[104], 256],
        120050: [[105], 256],
        120051: [[106], 256],
        120052: [[107], 256],
        120053: [[108], 256],
        120054: [[109], 256],
        120055: [[110], 256],
        120056: [[111], 256],
        120057: [[112], 256],
        120058: [[113], 256],
        120059: [[114], 256],
        120060: [[115], 256],
        120061: [[116], 256],
        120062: [[117], 256],
        120063: [[118], 256],
      },
      54528: {
        120064: [[119], 256],
        120065: [[120], 256],
        120066: [[121], 256],
        120067: [[122], 256],
        120068: [[65], 256],
        120069: [[66], 256],
        120071: [[68], 256],
        120072: [[69], 256],
        120073: [[70], 256],
        120074: [[71], 256],
        120077: [[74], 256],
        120078: [[75], 256],
        120079: [[76], 256],
        120080: [[77], 256],
        120081: [[78], 256],
        120082: [[79], 256],
        120083: [[80], 256],
        120084: [[81], 256],
        120086: [[83], 256],
        120087: [[84], 256],
        120088: [[85], 256],
        120089: [[86], 256],
        120090: [[87], 256],
        120091: [[88], 256],
        120092: [[89], 256],
        120094: [[97], 256],
        120095: [[98], 256],
        120096: [[99], 256],
        120097: [[100], 256],
        120098: [[101], 256],
        120099: [[102], 256],
        120100: [[103], 256],
        120101: [[104], 256],
        120102: [[105], 256],
        120103: [[106], 256],
        120104: [[107], 256],
        120105: [[108], 256],
        120106: [[109], 256],
        120107: [[110], 256],
        120108: [[111], 256],
        120109: [[112], 256],
        120110: [[113], 256],
        120111: [[114], 256],
        120112: [[115], 256],
        120113: [[116], 256],
        120114: [[117], 256],
        120115: [[118], 256],
        120116: [[119], 256],
        120117: [[120], 256],
        120118: [[121], 256],
        120119: [[122], 256],
        120120: [[65], 256],
        120121: [[66], 256],
        120123: [[68], 256],
        120124: [[69], 256],
        120125: [[70], 256],
        120126: [[71], 256],
        120128: [[73], 256],
        120129: [[74], 256],
        120130: [[75], 256],
        120131: [[76], 256],
        120132: [[77], 256],
        120134: [[79], 256],
        120138: [[83], 256],
        120139: [[84], 256],
        120140: [[85], 256],
        120141: [[86], 256],
        120142: [[87], 256],
        120143: [[88], 256],
        120144: [[89], 256],
        120146: [[97], 256],
        120147: [[98], 256],
        120148: [[99], 256],
        120149: [[100], 256],
        120150: [[101], 256],
        120151: [[102], 256],
        120152: [[103], 256],
        120153: [[104], 256],
        120154: [[105], 256],
        120155: [[106], 256],
        120156: [[107], 256],
        120157: [[108], 256],
        120158: [[109], 256],
        120159: [[110], 256],
        120160: [[111], 256],
        120161: [[112], 256],
        120162: [[113], 256],
        120163: [[114], 256],
        120164: [[115], 256],
        120165: [[116], 256],
        120166: [[117], 256],
        120167: [[118], 256],
        120168: [[119], 256],
        120169: [[120], 256],
        120170: [[121], 256],
        120171: [[122], 256],
        120172: [[65], 256],
        120173: [[66], 256],
        120174: [[67], 256],
        120175: [[68], 256],
        120176: [[69], 256],
        120177: [[70], 256],
        120178: [[71], 256],
        120179: [[72], 256],
        120180: [[73], 256],
        120181: [[74], 256],
        120182: [[75], 256],
        120183: [[76], 256],
        120184: [[77], 256],
        120185: [[78], 256],
        120186: [[79], 256],
        120187: [[80], 256],
        120188: [[81], 256],
        120189: [[82], 256],
        120190: [[83], 256],
        120191: [[84], 256],
        120192: [[85], 256],
        120193: [[86], 256],
        120194: [[87], 256],
        120195: [[88], 256],
        120196: [[89], 256],
        120197: [[90], 256],
        120198: [[97], 256],
        120199: [[98], 256],
        120200: [[99], 256],
        120201: [[100], 256],
        120202: [[101], 256],
        120203: [[102], 256],
        120204: [[103], 256],
        120205: [[104], 256],
        120206: [[105], 256],
        120207: [[106], 256],
        120208: [[107], 256],
        120209: [[108], 256],
        120210: [[109], 256],
        120211: [[110], 256],
        120212: [[111], 256],
        120213: [[112], 256],
        120214: [[113], 256],
        120215: [[114], 256],
        120216: [[115], 256],
        120217: [[116], 256],
        120218: [[117], 256],
        120219: [[118], 256],
        120220: [[119], 256],
        120221: [[120], 256],
        120222: [[121], 256],
        120223: [[122], 256],
        120224: [[65], 256],
        120225: [[66], 256],
        120226: [[67], 256],
        120227: [[68], 256],
        120228: [[69], 256],
        120229: [[70], 256],
        120230: [[71], 256],
        120231: [[72], 256],
        120232: [[73], 256],
        120233: [[74], 256],
        120234: [[75], 256],
        120235: [[76], 256],
        120236: [[77], 256],
        120237: [[78], 256],
        120238: [[79], 256],
        120239: [[80], 256],
        120240: [[81], 256],
        120241: [[82], 256],
        120242: [[83], 256],
        120243: [[84], 256],
        120244: [[85], 256],
        120245: [[86], 256],
        120246: [[87], 256],
        120247: [[88], 256],
        120248: [[89], 256],
        120249: [[90], 256],
        120250: [[97], 256],
        120251: [[98], 256],
        120252: [[99], 256],
        120253: [[100], 256],
        120254: [[101], 256],
        120255: [[102], 256],
        120256: [[103], 256],
        120257: [[104], 256],
        120258: [[105], 256],
        120259: [[106], 256],
        120260: [[107], 256],
        120261: [[108], 256],
        120262: [[109], 256],
        120263: [[110], 256],
        120264: [[111], 256],
        120265: [[112], 256],
        120266: [[113], 256],
        120267: [[114], 256],
        120268: [[115], 256],
        120269: [[116], 256],
        120270: [[117], 256],
        120271: [[118], 256],
        120272: [[119], 256],
        120273: [[120], 256],
        120274: [[121], 256],
        120275: [[122], 256],
        120276: [[65], 256],
        120277: [[66], 256],
        120278: [[67], 256],
        120279: [[68], 256],
        120280: [[69], 256],
        120281: [[70], 256],
        120282: [[71], 256],
        120283: [[72], 256],
        120284: [[73], 256],
        120285: [[74], 256],
        120286: [[75], 256],
        120287: [[76], 256],
        120288: [[77], 256],
        120289: [[78], 256],
        120290: [[79], 256],
        120291: [[80], 256],
        120292: [[81], 256],
        120293: [[82], 256],
        120294: [[83], 256],
        120295: [[84], 256],
        120296: [[85], 256],
        120297: [[86], 256],
        120298: [[87], 256],
        120299: [[88], 256],
        120300: [[89], 256],
        120301: [[90], 256],
        120302: [[97], 256],
        120303: [[98], 256],
        120304: [[99], 256],
        120305: [[100], 256],
        120306: [[101], 256],
        120307: [[102], 256],
        120308: [[103], 256],
        120309: [[104], 256],
        120310: [[105], 256],
        120311: [[106], 256],
        120312: [[107], 256],
        120313: [[108], 256],
        120314: [[109], 256],
        120315: [[110], 256],
        120316: [[111], 256],
        120317: [[112], 256],
        120318: [[113], 256],
        120319: [[114], 256],
      },
      54784: {
        120320: [[115], 256],
        120321: [[116], 256],
        120322: [[117], 256],
        120323: [[118], 256],
        120324: [[119], 256],
        120325: [[120], 256],
        120326: [[121], 256],
        120327: [[122], 256],
        120328: [[65], 256],
        120329: [[66], 256],
        120330: [[67], 256],
        120331: [[68], 256],
        120332: [[69], 256],
        120333: [[70], 256],
        120334: [[71], 256],
        120335: [[72], 256],
        120336: [[73], 256],
        120337: [[74], 256],
        120338: [[75], 256],
        120339: [[76], 256],
        120340: [[77], 256],
        120341: [[78], 256],
        120342: [[79], 256],
        120343: [[80], 256],
        120344: [[81], 256],
        120345: [[82], 256],
        120346: [[83], 256],
        120347: [[84], 256],
        120348: [[85], 256],
        120349: [[86], 256],
        120350: [[87], 256],
        120351: [[88], 256],
        120352: [[89], 256],
        120353: [[90], 256],
        120354: [[97], 256],
        120355: [[98], 256],
        120356: [[99], 256],
        120357: [[100], 256],
        120358: [[101], 256],
        120359: [[102], 256],
        120360: [[103], 256],
        120361: [[104], 256],
        120362: [[105], 256],
        120363: [[106], 256],
        120364: [[107], 256],
        120365: [[108], 256],
        120366: [[109], 256],
        120367: [[110], 256],
        120368: [[111], 256],
        120369: [[112], 256],
        120370: [[113], 256],
        120371: [[114], 256],
        120372: [[115], 256],
        120373: [[116], 256],
        120374: [[117], 256],
        120375: [[118], 256],
        120376: [[119], 256],
        120377: [[120], 256],
        120378: [[121], 256],
        120379: [[122], 256],
        120380: [[65], 256],
        120381: [[66], 256],
        120382: [[67], 256],
        120383: [[68], 256],
        120384: [[69], 256],
        120385: [[70], 256],
        120386: [[71], 256],
        120387: [[72], 256],
        120388: [[73], 256],
        120389: [[74], 256],
        120390: [[75], 256],
        120391: [[76], 256],
        120392: [[77], 256],
        120393: [[78], 256],
        120394: [[79], 256],
        120395: [[80], 256],
        120396: [[81], 256],
        120397: [[82], 256],
        120398: [[83], 256],
        120399: [[84], 256],
        120400: [[85], 256],
        120401: [[86], 256],
        120402: [[87], 256],
        120403: [[88], 256],
        120404: [[89], 256],
        120405: [[90], 256],
        120406: [[97], 256],
        120407: [[98], 256],
        120408: [[99], 256],
        120409: [[100], 256],
        120410: [[101], 256],
        120411: [[102], 256],
        120412: [[103], 256],
        120413: [[104], 256],
        120414: [[105], 256],
        120415: [[106], 256],
        120416: [[107], 256],
        120417: [[108], 256],
        120418: [[109], 256],
        120419: [[110], 256],
        120420: [[111], 256],
        120421: [[112], 256],
        120422: [[113], 256],
        120423: [[114], 256],
        120424: [[115], 256],
        120425: [[116], 256],
        120426: [[117], 256],
        120427: [[118], 256],
        120428: [[119], 256],
        120429: [[120], 256],
        120430: [[121], 256],
        120431: [[122], 256],
        120432: [[65], 256],
        120433: [[66], 256],
        120434: [[67], 256],
        120435: [[68], 256],
        120436: [[69], 256],
        120437: [[70], 256],
        120438: [[71], 256],
        120439: [[72], 256],
        120440: [[73], 256],
        120441: [[74], 256],
        120442: [[75], 256],
        120443: [[76], 256],
        120444: [[77], 256],
        120445: [[78], 256],
        120446: [[79], 256],
        120447: [[80], 256],
        120448: [[81], 256],
        120449: [[82], 256],
        120450: [[83], 256],
        120451: [[84], 256],
        120452: [[85], 256],
        120453: [[86], 256],
        120454: [[87], 256],
        120455: [[88], 256],
        120456: [[89], 256],
        120457: [[90], 256],
        120458: [[97], 256],
        120459: [[98], 256],
        120460: [[99], 256],
        120461: [[100], 256],
        120462: [[101], 256],
        120463: [[102], 256],
        120464: [[103], 256],
        120465: [[104], 256],
        120466: [[105], 256],
        120467: [[106], 256],
        120468: [[107], 256],
        120469: [[108], 256],
        120470: [[109], 256],
        120471: [[110], 256],
        120472: [[111], 256],
        120473: [[112], 256],
        120474: [[113], 256],
        120475: [[114], 256],
        120476: [[115], 256],
        120477: [[116], 256],
        120478: [[117], 256],
        120479: [[118], 256],
        120480: [[119], 256],
        120481: [[120], 256],
        120482: [[121], 256],
        120483: [[122], 256],
        120484: [[305], 256],
        120485: [[567], 256],
        120488: [[913], 256],
        120489: [[914], 256],
        120490: [[915], 256],
        120491: [[916], 256],
        120492: [[917], 256],
        120493: [[918], 256],
        120494: [[919], 256],
        120495: [[920], 256],
        120496: [[921], 256],
        120497: [[922], 256],
        120498: [[923], 256],
        120499: [[924], 256],
        120500: [[925], 256],
        120501: [[926], 256],
        120502: [[927], 256],
        120503: [[928], 256],
        120504: [[929], 256],
        120505: [[1012], 256],
        120506: [[931], 256],
        120507: [[932], 256],
        120508: [[933], 256],
        120509: [[934], 256],
        120510: [[935], 256],
        120511: [[936], 256],
        120512: [[937], 256],
        120513: [[8711], 256],
        120514: [[945], 256],
        120515: [[946], 256],
        120516: [[947], 256],
        120517: [[948], 256],
        120518: [[949], 256],
        120519: [[950], 256],
        120520: [[951], 256],
        120521: [[952], 256],
        120522: [[953], 256],
        120523: [[954], 256],
        120524: [[955], 256],
        120525: [[956], 256],
        120526: [[957], 256],
        120527: [[958], 256],
        120528: [[959], 256],
        120529: [[960], 256],
        120530: [[961], 256],
        120531: [[962], 256],
        120532: [[963], 256],
        120533: [[964], 256],
        120534: [[965], 256],
        120535: [[966], 256],
        120536: [[967], 256],
        120537: [[968], 256],
        120538: [[969], 256],
        120539: [[8706], 256],
        120540: [[1013], 256],
        120541: [[977], 256],
        120542: [[1008], 256],
        120543: [[981], 256],
        120544: [[1009], 256],
        120545: [[982], 256],
        120546: [[913], 256],
        120547: [[914], 256],
        120548: [[915], 256],
        120549: [[916], 256],
        120550: [[917], 256],
        120551: [[918], 256],
        120552: [[919], 256],
        120553: [[920], 256],
        120554: [[921], 256],
        120555: [[922], 256],
        120556: [[923], 256],
        120557: [[924], 256],
        120558: [[925], 256],
        120559: [[926], 256],
        120560: [[927], 256],
        120561: [[928], 256],
        120562: [[929], 256],
        120563: [[1012], 256],
        120564: [[931], 256],
        120565: [[932], 256],
        120566: [[933], 256],
        120567: [[934], 256],
        120568: [[935], 256],
        120569: [[936], 256],
        120570: [[937], 256],
        120571: [[8711], 256],
        120572: [[945], 256],
        120573: [[946], 256],
        120574: [[947], 256],
        120575: [[948], 256],
      },
      55040: {
        120576: [[949], 256],
        120577: [[950], 256],
        120578: [[951], 256],
        120579: [[952], 256],
        120580: [[953], 256],
        120581: [[954], 256],
        120582: [[955], 256],
        120583: [[956], 256],
        120584: [[957], 256],
        120585: [[958], 256],
        120586: [[959], 256],
        120587: [[960], 256],
        120588: [[961], 256],
        120589: [[962], 256],
        120590: [[963], 256],
        120591: [[964], 256],
        120592: [[965], 256],
        120593: [[966], 256],
        120594: [[967], 256],
        120595: [[968], 256],
        120596: [[969], 256],
        120597: [[8706], 256],
        120598: [[1013], 256],
        120599: [[977], 256],
        120600: [[1008], 256],
        120601: [[981], 256],
        120602: [[1009], 256],
        120603: [[982], 256],
        120604: [[913], 256],
        120605: [[914], 256],
        120606: [[915], 256],
        120607: [[916], 256],
        120608: [[917], 256],
        120609: [[918], 256],
        120610: [[919], 256],
        120611: [[920], 256],
        120612: [[921], 256],
        120613: [[922], 256],
        120614: [[923], 256],
        120615: [[924], 256],
        120616: [[925], 256],
        120617: [[926], 256],
        120618: [[927], 256],
        120619: [[928], 256],
        120620: [[929], 256],
        120621: [[1012], 256],
        120622: [[931], 256],
        120623: [[932], 256],
        120624: [[933], 256],
        120625: [[934], 256],
        120626: [[935], 256],
        120627: [[936], 256],
        120628: [[937], 256],
        120629: [[8711], 256],
        120630: [[945], 256],
        120631: [[946], 256],
        120632: [[947], 256],
        120633: [[948], 256],
        120634: [[949], 256],
        120635: [[950], 256],
        120636: [[951], 256],
        120637: [[952], 256],
        120638: [[953], 256],
        120639: [[954], 256],
        120640: [[955], 256],
        120641: [[956], 256],
        120642: [[957], 256],
        120643: [[958], 256],
        120644: [[959], 256],
        120645: [[960], 256],
        120646: [[961], 256],
        120647: [[962], 256],
        120648: [[963], 256],
        120649: [[964], 256],
        120650: [[965], 256],
        120651: [[966], 256],
        120652: [[967], 256],
        120653: [[968], 256],
        120654: [[969], 256],
        120655: [[8706], 256],
        120656: [[1013], 256],
        120657: [[977], 256],
        120658: [[1008], 256],
        120659: [[981], 256],
        120660: [[1009], 256],
        120661: [[982], 256],
        120662: [[913], 256],
        120663: [[914], 256],
        120664: [[915], 256],
        120665: [[916], 256],
        120666: [[917], 256],
        120667: [[918], 256],
        120668: [[919], 256],
        120669: [[920], 256],
        120670: [[921], 256],
        120671: [[922], 256],
        120672: [[923], 256],
        120673: [[924], 256],
        120674: [[925], 256],
        120675: [[926], 256],
        120676: [[927], 256],
        120677: [[928], 256],
        120678: [[929], 256],
        120679: [[1012], 256],
        120680: [[931], 256],
        120681: [[932], 256],
        120682: [[933], 256],
        120683: [[934], 256],
        120684: [[935], 256],
        120685: [[936], 256],
        120686: [[937], 256],
        120687: [[8711], 256],
        120688: [[945], 256],
        120689: [[946], 256],
        120690: [[947], 256],
        120691: [[948], 256],
        120692: [[949], 256],
        120693: [[950], 256],
        120694: [[951], 256],
        120695: [[952], 256],
        120696: [[953], 256],
        120697: [[954], 256],
        120698: [[955], 256],
        120699: [[956], 256],
        120700: [[957], 256],
        120701: [[958], 256],
        120702: [[959], 256],
        120703: [[960], 256],
        120704: [[961], 256],
        120705: [[962], 256],
        120706: [[963], 256],
        120707: [[964], 256],
        120708: [[965], 256],
        120709: [[966], 256],
        120710: [[967], 256],
        120711: [[968], 256],
        120712: [[969], 256],
        120713: [[8706], 256],
        120714: [[1013], 256],
        120715: [[977], 256],
        120716: [[1008], 256],
        120717: [[981], 256],
        120718: [[1009], 256],
        120719: [[982], 256],
        120720: [[913], 256],
        120721: [[914], 256],
        120722: [[915], 256],
        120723: [[916], 256],
        120724: [[917], 256],
        120725: [[918], 256],
        120726: [[919], 256],
        120727: [[920], 256],
        120728: [[921], 256],
        120729: [[922], 256],
        120730: [[923], 256],
        120731: [[924], 256],
        120732: [[925], 256],
        120733: [[926], 256],
        120734: [[927], 256],
        120735: [[928], 256],
        120736: [[929], 256],
        120737: [[1012], 256],
        120738: [[931], 256],
        120739: [[932], 256],
        120740: [[933], 256],
        120741: [[934], 256],
        120742: [[935], 256],
        120743: [[936], 256],
        120744: [[937], 256],
        120745: [[8711], 256],
        120746: [[945], 256],
        120747: [[946], 256],
        120748: [[947], 256],
        120749: [[948], 256],
        120750: [[949], 256],
        120751: [[950], 256],
        120752: [[951], 256],
        120753: [[952], 256],
        120754: [[953], 256],
        120755: [[954], 256],
        120756: [[955], 256],
        120757: [[956], 256],
        120758: [[957], 256],
        120759: [[958], 256],
        120760: [[959], 256],
        120761: [[960], 256],
        120762: [[961], 256],
        120763: [[962], 256],
        120764: [[963], 256],
        120765: [[964], 256],
        120766: [[965], 256],
        120767: [[966], 256],
        120768: [[967], 256],
        120769: [[968], 256],
        120770: [[969], 256],
        120771: [[8706], 256],
        120772: [[1013], 256],
        120773: [[977], 256],
        120774: [[1008], 256],
        120775: [[981], 256],
        120776: [[1009], 256],
        120777: [[982], 256],
        120778: [[988], 256],
        120779: [[989], 256],
        120782: [[48], 256],
        120783: [[49], 256],
        120784: [[50], 256],
        120785: [[51], 256],
        120786: [[52], 256],
        120787: [[53], 256],
        120788: [[54], 256],
        120789: [[55], 256],
        120790: [[56], 256],
        120791: [[57], 256],
        120792: [[48], 256],
        120793: [[49], 256],
        120794: [[50], 256],
        120795: [[51], 256],
        120796: [[52], 256],
        120797: [[53], 256],
        120798: [[54], 256],
        120799: [[55], 256],
        120800: [[56], 256],
        120801: [[57], 256],
        120802: [[48], 256],
        120803: [[49], 256],
        120804: [[50], 256],
        120805: [[51], 256],
        120806: [[52], 256],
        120807: [[53], 256],
        120808: [[54], 256],
        120809: [[55], 256],
        120810: [[56], 256],
        120811: [[57], 256],
        120812: [[48], 256],
        120813: [[49], 256],
        120814: [[50], 256],
        120815: [[51], 256],
        120816: [[52], 256],
        120817: [[53], 256],
        120818: [[54], 256],
        120819: [[55], 256],
        120820: [[56], 256],
        120821: [[57], 256],
        120822: [[48], 256],
        120823: [[49], 256],
        120824: [[50], 256],
        120825: [[51], 256],
        120826: [[52], 256],
        120827: [[53], 256],
        120828: [[54], 256],
        120829: [[55], 256],
        120830: [[56], 256],
        120831: [[57], 256],
      },
      59392: {
        125136: [, 220],
        125137: [, 220],
        125138: [, 220],
        125139: [, 220],
        125140: [, 220],
        125141: [, 220],
        125142: [, 220],
      },
      60928: {
        126464: [[1575], 256],
        126465: [[1576], 256],
        126466: [[1580], 256],
        126467: [[1583], 256],
        126469: [[1608], 256],
        126470: [[1586], 256],
        126471: [[1581], 256],
        126472: [[1591], 256],
        126473: [[1610], 256],
        126474: [[1603], 256],
        126475: [[1604], 256],
        126476: [[1605], 256],
        126477: [[1606], 256],
        126478: [[1587], 256],
        126479: [[1593], 256],
        126480: [[1601], 256],
        126481: [[1589], 256],
        126482: [[1602], 256],
        126483: [[1585], 256],
        126484: [[1588], 256],
        126485: [[1578], 256],
        126486: [[1579], 256],
        126487: [[1582], 256],
        126488: [[1584], 256],
        126489: [[1590], 256],
        126490: [[1592], 256],
        126491: [[1594], 256],
        126492: [[1646], 256],
        126493: [[1722], 256],
        126494: [[1697], 256],
        126495: [[1647], 256],
        126497: [[1576], 256],
        126498: [[1580], 256],
        126500: [[1607], 256],
        126503: [[1581], 256],
        126505: [[1610], 256],
        126506: [[1603], 256],
        126507: [[1604], 256],
        126508: [[1605], 256],
        126509: [[1606], 256],
        126510: [[1587], 256],
        126511: [[1593], 256],
        126512: [[1601], 256],
        126513: [[1589], 256],
        126514: [[1602], 256],
        126516: [[1588], 256],
        126517: [[1578], 256],
        126518: [[1579], 256],
        126519: [[1582], 256],
        126521: [[1590], 256],
        126523: [[1594], 256],
        126530: [[1580], 256],
        126535: [[1581], 256],
        126537: [[1610], 256],
        126539: [[1604], 256],
        126541: [[1606], 256],
        126542: [[1587], 256],
        126543: [[1593], 256],
        126545: [[1589], 256],
        126546: [[1602], 256],
        126548: [[1588], 256],
        126551: [[1582], 256],
        126553: [[1590], 256],
        126555: [[1594], 256],
        126557: [[1722], 256],
        126559: [[1647], 256],
        126561: [[1576], 256],
        126562: [[1580], 256],
        126564: [[1607], 256],
        126567: [[1581], 256],
        126568: [[1591], 256],
        126569: [[1610], 256],
        126570: [[1603], 256],
        126572: [[1605], 256],
        126573: [[1606], 256],
        126574: [[1587], 256],
        126575: [[1593], 256],
        126576: [[1601], 256],
        126577: [[1589], 256],
        126578: [[1602], 256],
        126580: [[1588], 256],
        126581: [[1578], 256],
        126582: [[1579], 256],
        126583: [[1582], 256],
        126585: [[1590], 256],
        126586: [[1592], 256],
        126587: [[1594], 256],
        126588: [[1646], 256],
        126590: [[1697], 256],
        126592: [[1575], 256],
        126593: [[1576], 256],
        126594: [[1580], 256],
        126595: [[1583], 256],
        126596: [[1607], 256],
        126597: [[1608], 256],
        126598: [[1586], 256],
        126599: [[1581], 256],
        126600: [[1591], 256],
        126601: [[1610], 256],
        126603: [[1604], 256],
        126604: [[1605], 256],
        126605: [[1606], 256],
        126606: [[1587], 256],
        126607: [[1593], 256],
        126608: [[1601], 256],
        126609: [[1589], 256],
        126610: [[1602], 256],
        126611: [[1585], 256],
        126612: [[1588], 256],
        126613: [[1578], 256],
        126614: [[1579], 256],
        126615: [[1582], 256],
        126616: [[1584], 256],
        126617: [[1590], 256],
        126618: [[1592], 256],
        126619: [[1594], 256],
        126625: [[1576], 256],
        126626: [[1580], 256],
        126627: [[1583], 256],
        126629: [[1608], 256],
        126630: [[1586], 256],
        126631: [[1581], 256],
        126632: [[1591], 256],
        126633: [[1610], 256],
        126635: [[1604], 256],
        126636: [[1605], 256],
        126637: [[1606], 256],
        126638: [[1587], 256],
        126639: [[1593], 256],
        126640: [[1601], 256],
        126641: [[1589], 256],
        126642: [[1602], 256],
        126643: [[1585], 256],
        126644: [[1588], 256],
        126645: [[1578], 256],
        126646: [[1579], 256],
        126647: [[1582], 256],
        126648: [[1584], 256],
        126649: [[1590], 256],
        126650: [[1592], 256],
        126651: [[1594], 256],
      },
      61696: {
        127232: [[48, 46], 256],
        127233: [[48, 44], 256],
        127234: [[49, 44], 256],
        127235: [[50, 44], 256],
        127236: [[51, 44], 256],
        127237: [[52, 44], 256],
        127238: [[53, 44], 256],
        127239: [[54, 44], 256],
        127240: [[55, 44], 256],
        127241: [[56, 44], 256],
        127242: [[57, 44], 256],
        127248: [[40, 65, 41], 256],
        127249: [[40, 66, 41], 256],
        127250: [[40, 67, 41], 256],
        127251: [[40, 68, 41], 256],
        127252: [[40, 69, 41], 256],
        127253: [[40, 70, 41], 256],
        127254: [[40, 71, 41], 256],
        127255: [[40, 72, 41], 256],
        127256: [[40, 73, 41], 256],
        127257: [[40, 74, 41], 256],
        127258: [[40, 75, 41], 256],
        127259: [[40, 76, 41], 256],
        127260: [[40, 77, 41], 256],
        127261: [[40, 78, 41], 256],
        127262: [[40, 79, 41], 256],
        127263: [[40, 80, 41], 256],
        127264: [[40, 81, 41], 256],
        127265: [[40, 82, 41], 256],
        127266: [[40, 83, 41], 256],
        127267: [[40, 84, 41], 256],
        127268: [[40, 85, 41], 256],
        127269: [[40, 86, 41], 256],
        127270: [[40, 87, 41], 256],
        127271: [[40, 88, 41], 256],
        127272: [[40, 89, 41], 256],
        127273: [[40, 90, 41], 256],
        127274: [[12308, 83, 12309], 256],
        127275: [[67], 256],
        127276: [[82], 256],
        127277: [[67, 68], 256],
        127278: [[87, 90], 256],
        127280: [[65], 256],
        127281: [[66], 256],
        127282: [[67], 256],
        127283: [[68], 256],
        127284: [[69], 256],
        127285: [[70], 256],
        127286: [[71], 256],
        127287: [[72], 256],
        127288: [[73], 256],
        127289: [[74], 256],
        127290: [[75], 256],
        127291: [[76], 256],
        127292: [[77], 256],
        127293: [[78], 256],
        127294: [[79], 256],
        127295: [[80], 256],
        127296: [[81], 256],
        127297: [[82], 256],
        127298: [[83], 256],
        127299: [[84], 256],
        127300: [[85], 256],
        127301: [[86], 256],
        127302: [[87], 256],
        127303: [[88], 256],
        127304: [[89], 256],
        127305: [[90], 256],
        127306: [[72, 86], 256],
        127307: [[77, 86], 256],
        127308: [[83, 68], 256],
        127309: [[83, 83], 256],
        127310: [[80, 80, 86], 256],
        127311: [[87, 67], 256],
        127338: [[77, 67], 256],
        127339: [[77, 68], 256],
        127376: [[68, 74], 256],
      },
      61952: {
        127488: [[12411, 12363], 256],
        127489: [[12467, 12467], 256],
        127490: [[12469], 256],
        127504: [[25163], 256],
        127505: [[23383], 256],
        127506: [[21452], 256],
        127507: [[12487], 256],
        127508: [[20108], 256],
        127509: [[22810], 256],
        127510: [[35299], 256],
        127511: [[22825], 256],
        127512: [[20132], 256],
        127513: [[26144], 256],
        127514: [[28961], 256],
        127515: [[26009], 256],
        127516: [[21069], 256],
        127517: [[24460], 256],
        127518: [[20877], 256],
        127519: [[26032], 256],
        127520: [[21021], 256],
        127521: [[32066], 256],
        127522: [[29983], 256],
        127523: [[36009], 256],
        127524: [[22768], 256],
        127525: [[21561], 256],
        127526: [[28436], 256],
        127527: [[25237], 256],
        127528: [[25429], 256],
        127529: [[19968], 256],
        127530: [[19977], 256],
        127531: [[36938], 256],
        127532: [[24038], 256],
        127533: [[20013], 256],
        127534: [[21491], 256],
        127535: [[25351], 256],
        127536: [[36208], 256],
        127537: [[25171], 256],
        127538: [[31105], 256],
        127539: [[31354], 256],
        127540: [[21512], 256],
        127541: [[28288], 256],
        127542: [[26377], 256],
        127543: [[26376], 256],
        127544: [[30003], 256],
        127545: [[21106], 256],
        127546: [[21942], 256],
        127552: [[12308, 26412, 12309], 256],
        127553: [[12308, 19977, 12309], 256],
        127554: [[12308, 20108, 12309], 256],
        127555: [[12308, 23433, 12309], 256],
        127556: [[12308, 28857, 12309], 256],
        127557: [[12308, 25171, 12309], 256],
        127558: [[12308, 30423, 12309], 256],
        127559: [[12308, 21213, 12309], 256],
        127560: [[12308, 25943, 12309], 256],
        127568: [[24471], 256],
        127569: [[21487], 256],
      },
      63488: {
        194560: [[20029]],
        194561: [[20024]],
        194562: [[20033]],
        194563: [[131362]],
        194564: [[20320]],
        194565: [[20398]],
        194566: [[20411]],
        194567: [[20482]],
        194568: [[20602]],
        194569: [[20633]],
        194570: [[20711]],
        194571: [[20687]],
        194572: [[13470]],
        194573: [[132666]],
        194574: [[20813]],
        194575: [[20820]],
        194576: [[20836]],
        194577: [[20855]],
        194578: [[132380]],
        194579: [[13497]],
        194580: [[20839]],
        194581: [[20877]],
        194582: [[132427]],
        194583: [[20887]],
        194584: [[20900]],
        194585: [[20172]],
        194586: [[20908]],
        194587: [[20917]],
        194588: [[168415]],
        194589: [[20981]],
        194590: [[20995]],
        194591: [[13535]],
        194592: [[21051]],
        194593: [[21062]],
        194594: [[21106]],
        194595: [[21111]],
        194596: [[13589]],
        194597: [[21191]],
        194598: [[21193]],
        194599: [[21220]],
        194600: [[21242]],
        194601: [[21253]],
        194602: [[21254]],
        194603: [[21271]],
        194604: [[21321]],
        194605: [[21329]],
        194606: [[21338]],
        194607: [[21363]],
        194608: [[21373]],
        194609: [[21375]],
        194610: [[21375]],
        194611: [[21375]],
        194612: [[133676]],
        194613: [[28784]],
        194614: [[21450]],
        194615: [[21471]],
        194616: [[133987]],
        194617: [[21483]],
        194618: [[21489]],
        194619: [[21510]],
        194620: [[21662]],
        194621: [[21560]],
        194622: [[21576]],
        194623: [[21608]],
        194624: [[21666]],
        194625: [[21750]],
        194626: [[21776]],
        194627: [[21843]],
        194628: [[21859]],
        194629: [[21892]],
        194630: [[21892]],
        194631: [[21913]],
        194632: [[21931]],
        194633: [[21939]],
        194634: [[21954]],
        194635: [[22294]],
        194636: [[22022]],
        194637: [[22295]],
        194638: [[22097]],
        194639: [[22132]],
        194640: [[20999]],
        194641: [[22766]],
        194642: [[22478]],
        194643: [[22516]],
        194644: [[22541]],
        194645: [[22411]],
        194646: [[22578]],
        194647: [[22577]],
        194648: [[22700]],
        194649: [[136420]],
        194650: [[22770]],
        194651: [[22775]],
        194652: [[22790]],
        194653: [[22810]],
        194654: [[22818]],
        194655: [[22882]],
        194656: [[136872]],
        194657: [[136938]],
        194658: [[23020]],
        194659: [[23067]],
        194660: [[23079]],
        194661: [[23e3]],
        194662: [[23142]],
        194663: [[14062]],
        194664: [[14076]],
        194665: [[23304]],
        194666: [[23358]],
        194667: [[23358]],
        194668: [[137672]],
        194669: [[23491]],
        194670: [[23512]],
        194671: [[23527]],
        194672: [[23539]],
        194673: [[138008]],
        194674: [[23551]],
        194675: [[23558]],
        194676: [[24403]],
        194677: [[23586]],
        194678: [[14209]],
        194679: [[23648]],
        194680: [[23662]],
        194681: [[23744]],
        194682: [[23693]],
        194683: [[138724]],
        194684: [[23875]],
        194685: [[138726]],
        194686: [[23918]],
        194687: [[23915]],
        194688: [[23932]],
        194689: [[24033]],
        194690: [[24034]],
        194691: [[14383]],
        194692: [[24061]],
        194693: [[24104]],
        194694: [[24125]],
        194695: [[24169]],
        194696: [[14434]],
        194697: [[139651]],
        194698: [[14460]],
        194699: [[24240]],
        194700: [[24243]],
        194701: [[24246]],
        194702: [[24266]],
        194703: [[172946]],
        194704: [[24318]],
        194705: [[140081]],
        194706: [[140081]],
        194707: [[33281]],
        194708: [[24354]],
        194709: [[24354]],
        194710: [[14535]],
        194711: [[144056]],
        194712: [[156122]],
        194713: [[24418]],
        194714: [[24427]],
        194715: [[14563]],
        194716: [[24474]],
        194717: [[24525]],
        194718: [[24535]],
        194719: [[24569]],
        194720: [[24705]],
        194721: [[14650]],
        194722: [[14620]],
        194723: [[24724]],
        194724: [[141012]],
        194725: [[24775]],
        194726: [[24904]],
        194727: [[24908]],
        194728: [[24910]],
        194729: [[24908]],
        194730: [[24954]],
        194731: [[24974]],
        194732: [[25010]],
        194733: [[24996]],
        194734: [[25007]],
        194735: [[25054]],
        194736: [[25074]],
        194737: [[25078]],
        194738: [[25104]],
        194739: [[25115]],
        194740: [[25181]],
        194741: [[25265]],
        194742: [[25300]],
        194743: [[25424]],
        194744: [[142092]],
        194745: [[25405]],
        194746: [[25340]],
        194747: [[25448]],
        194748: [[25475]],
        194749: [[25572]],
        194750: [[142321]],
        194751: [[25634]],
        194752: [[25541]],
        194753: [[25513]],
        194754: [[14894]],
        194755: [[25705]],
        194756: [[25726]],
        194757: [[25757]],
        194758: [[25719]],
        194759: [[14956]],
        194760: [[25935]],
        194761: [[25964]],
        194762: [[143370]],
        194763: [[26083]],
        194764: [[26360]],
        194765: [[26185]],
        194766: [[15129]],
        194767: [[26257]],
        194768: [[15112]],
        194769: [[15076]],
        194770: [[20882]],
        194771: [[20885]],
        194772: [[26368]],
        194773: [[26268]],
        194774: [[32941]],
        194775: [[17369]],
        194776: [[26391]],
        194777: [[26395]],
        194778: [[26401]],
        194779: [[26462]],
        194780: [[26451]],
        194781: [[144323]],
        194782: [[15177]],
        194783: [[26618]],
        194784: [[26501]],
        194785: [[26706]],
        194786: [[26757]],
        194787: [[144493]],
        194788: [[26766]],
        194789: [[26655]],
        194790: [[26900]],
        194791: [[15261]],
        194792: [[26946]],
        194793: [[27043]],
        194794: [[27114]],
        194795: [[27304]],
        194796: [[145059]],
        194797: [[27355]],
        194798: [[15384]],
        194799: [[27425]],
        194800: [[145575]],
        194801: [[27476]],
        194802: [[15438]],
        194803: [[27506]],
        194804: [[27551]],
        194805: [[27578]],
        194806: [[27579]],
        194807: [[146061]],
        194808: [[138507]],
        194809: [[146170]],
        194810: [[27726]],
        194811: [[146620]],
        194812: [[27839]],
        194813: [[27853]],
        194814: [[27751]],
        194815: [[27926]],
      },
      63744: {
        63744: [[35912]],
        63745: [[26356]],
        63746: [[36554]],
        63747: [[36040]],
        63748: [[28369]],
        63749: [[20018]],
        63750: [[21477]],
        63751: [[40860]],
        63752: [[40860]],
        63753: [[22865]],
        63754: [[37329]],
        63755: [[21895]],
        63756: [[22856]],
        63757: [[25078]],
        63758: [[30313]],
        63759: [[32645]],
        63760: [[34367]],
        63761: [[34746]],
        63762: [[35064]],
        63763: [[37007]],
        63764: [[27138]],
        63765: [[27931]],
        63766: [[28889]],
        63767: [[29662]],
        63768: [[33853]],
        63769: [[37226]],
        63770: [[39409]],
        63771: [[20098]],
        63772: [[21365]],
        63773: [[27396]],
        63774: [[29211]],
        63775: [[34349]],
        63776: [[40478]],
        63777: [[23888]],
        63778: [[28651]],
        63779: [[34253]],
        63780: [[35172]],
        63781: [[25289]],
        63782: [[33240]],
        63783: [[34847]],
        63784: [[24266]],
        63785: [[26391]],
        63786: [[28010]],
        63787: [[29436]],
        63788: [[37070]],
        63789: [[20358]],
        63790: [[20919]],
        63791: [[21214]],
        63792: [[25796]],
        63793: [[27347]],
        63794: [[29200]],
        63795: [[30439]],
        63796: [[32769]],
        63797: [[34310]],
        63798: [[34396]],
        63799: [[36335]],
        63800: [[38706]],
        63801: [[39791]],
        63802: [[40442]],
        63803: [[30860]],
        63804: [[31103]],
        63805: [[32160]],
        63806: [[33737]],
        63807: [[37636]],
        63808: [[40575]],
        63809: [[35542]],
        63810: [[22751]],
        63811: [[24324]],
        63812: [[31840]],
        63813: [[32894]],
        63814: [[29282]],
        63815: [[30922]],
        63816: [[36034]],
        63817: [[38647]],
        63818: [[22744]],
        63819: [[23650]],
        63820: [[27155]],
        63821: [[28122]],
        63822: [[28431]],
        63823: [[32047]],
        63824: [[32311]],
        63825: [[38475]],
        63826: [[21202]],
        63827: [[32907]],
        63828: [[20956]],
        63829: [[20940]],
        63830: [[31260]],
        63831: [[32190]],
        63832: [[33777]],
        63833: [[38517]],
        63834: [[35712]],
        63835: [[25295]],
        63836: [[27138]],
        63837: [[35582]],
        63838: [[20025]],
        63839: [[23527]],
        63840: [[24594]],
        63841: [[29575]],
        63842: [[30064]],
        63843: [[21271]],
        63844: [[30971]],
        63845: [[20415]],
        63846: [[24489]],
        63847: [[19981]],
        63848: [[27852]],
        63849: [[25976]],
        63850: [[32034]],
        63851: [[21443]],
        63852: [[22622]],
        63853: [[30465]],
        63854: [[33865]],
        63855: [[35498]],
        63856: [[27578]],
        63857: [[36784]],
        63858: [[27784]],
        63859: [[25342]],
        63860: [[33509]],
        63861: [[25504]],
        63862: [[30053]],
        63863: [[20142]],
        63864: [[20841]],
        63865: [[20937]],
        63866: [[26753]],
        63867: [[31975]],
        63868: [[33391]],
        63869: [[35538]],
        63870: [[37327]],
        63871: [[21237]],
        63872: [[21570]],
        63873: [[22899]],
        63874: [[24300]],
        63875: [[26053]],
        63876: [[28670]],
        63877: [[31018]],
        63878: [[38317]],
        63879: [[39530]],
        63880: [[40599]],
        63881: [[40654]],
        63882: [[21147]],
        63883: [[26310]],
        63884: [[27511]],
        63885: [[36706]],
        63886: [[24180]],
        63887: [[24976]],
        63888: [[25088]],
        63889: [[25754]],
        63890: [[28451]],
        63891: [[29001]],
        63892: [[29833]],
        63893: [[31178]],
        63894: [[32244]],
        63895: [[32879]],
        63896: [[36646]],
        63897: [[34030]],
        63898: [[36899]],
        63899: [[37706]],
        63900: [[21015]],
        63901: [[21155]],
        63902: [[21693]],
        63903: [[28872]],
        63904: [[35010]],
        63905: [[35498]],
        63906: [[24265]],
        63907: [[24565]],
        63908: [[25467]],
        63909: [[27566]],
        63910: [[31806]],
        63911: [[29557]],
        63912: [[20196]],
        63913: [[22265]],
        63914: [[23527]],
        63915: [[23994]],
        63916: [[24604]],
        63917: [[29618]],
        63918: [[29801]],
        63919: [[32666]],
        63920: [[32838]],
        63921: [[37428]],
        63922: [[38646]],
        63923: [[38728]],
        63924: [[38936]],
        63925: [[20363]],
        63926: [[31150]],
        63927: [[37300]],
        63928: [[38584]],
        63929: [[24801]],
        63930: [[20102]],
        63931: [[20698]],
        63932: [[23534]],
        63933: [[23615]],
        63934: [[26009]],
        63935: [[27138]],
        63936: [[29134]],
        63937: [[30274]],
        63938: [[34044]],
        63939: [[36988]],
        63940: [[40845]],
        63941: [[26248]],
        63942: [[38446]],
        63943: [[21129]],
        63944: [[26491]],
        63945: [[26611]],
        63946: [[27969]],
        63947: [[28316]],
        63948: [[29705]],
        63949: [[30041]],
        63950: [[30827]],
        63951: [[32016]],
        63952: [[39006]],
        63953: [[20845]],
        63954: [[25134]],
        63955: [[38520]],
        63956: [[20523]],
        63957: [[23833]],
        63958: [[28138]],
        63959: [[36650]],
        63960: [[24459]],
        63961: [[24900]],
        63962: [[26647]],
        63963: [[29575]],
        63964: [[38534]],
        63965: [[21033]],
        63966: [[21519]],
        63967: [[23653]],
        63968: [[26131]],
        63969: [[26446]],
        63970: [[26792]],
        63971: [[27877]],
        63972: [[29702]],
        63973: [[30178]],
        63974: [[32633]],
        63975: [[35023]],
        63976: [[35041]],
        63977: [[37324]],
        63978: [[38626]],
        63979: [[21311]],
        63980: [[28346]],
        63981: [[21533]],
        63982: [[29136]],
        63983: [[29848]],
        63984: [[34298]],
        63985: [[38563]],
        63986: [[40023]],
        63987: [[40607]],
        63988: [[26519]],
        63989: [[28107]],
        63990: [[33256]],
        63991: [[31435]],
        63992: [[31520]],
        63993: [[31890]],
        63994: [[29376]],
        63995: [[28825]],
        63996: [[35672]],
        63997: [[20160]],
        63998: [[33590]],
        63999: [[21050]],
        194816: [[27966]],
        194817: [[28023]],
        194818: [[27969]],
        194819: [[28009]],
        194820: [[28024]],
        194821: [[28037]],
        194822: [[146718]],
        194823: [[27956]],
        194824: [[28207]],
        194825: [[28270]],
        194826: [[15667]],
        194827: [[28363]],
        194828: [[28359]],
        194829: [[147153]],
        194830: [[28153]],
        194831: [[28526]],
        194832: [[147294]],
        194833: [[147342]],
        194834: [[28614]],
        194835: [[28729]],
        194836: [[28702]],
        194837: [[28699]],
        194838: [[15766]],
        194839: [[28746]],
        194840: [[28797]],
        194841: [[28791]],
        194842: [[28845]],
        194843: [[132389]],
        194844: [[28997]],
        194845: [[148067]],
        194846: [[29084]],
        194847: [[148395]],
        194848: [[29224]],
        194849: [[29237]],
        194850: [[29264]],
        194851: [[149e3]],
        194852: [[29312]],
        194853: [[29333]],
        194854: [[149301]],
        194855: [[149524]],
        194856: [[29562]],
        194857: [[29579]],
        194858: [[16044]],
        194859: [[29605]],
        194860: [[16056]],
        194861: [[16056]],
        194862: [[29767]],
        194863: [[29788]],
        194864: [[29809]],
        194865: [[29829]],
        194866: [[29898]],
        194867: [[16155]],
        194868: [[29988]],
        194869: [[150582]],
        194870: [[30014]],
        194871: [[150674]],
        194872: [[30064]],
        194873: [[139679]],
        194874: [[30224]],
        194875: [[151457]],
        194876: [[151480]],
        194877: [[151620]],
        194878: [[16380]],
        194879: [[16392]],
        194880: [[30452]],
        194881: [[151795]],
        194882: [[151794]],
        194883: [[151833]],
        194884: [[151859]],
        194885: [[30494]],
        194886: [[30495]],
        194887: [[30495]],
        194888: [[30538]],
        194889: [[16441]],
        194890: [[30603]],
        194891: [[16454]],
        194892: [[16534]],
        194893: [[152605]],
        194894: [[30798]],
        194895: [[30860]],
        194896: [[30924]],
        194897: [[16611]],
        194898: [[153126]],
        194899: [[31062]],
        194900: [[153242]],
        194901: [[153285]],
        194902: [[31119]],
        194903: [[31211]],
        194904: [[16687]],
        194905: [[31296]],
        194906: [[31306]],
        194907: [[31311]],
        194908: [[153980]],
        194909: [[154279]],
        194910: [[154279]],
        194911: [[31470]],
        194912: [[16898]],
        194913: [[154539]],
        194914: [[31686]],
        194915: [[31689]],
        194916: [[16935]],
        194917: [[154752]],
        194918: [[31954]],
        194919: [[17056]],
        194920: [[31976]],
        194921: [[31971]],
        194922: [[32e3]],
        194923: [[155526]],
        194924: [[32099]],
        194925: [[17153]],
        194926: [[32199]],
        194927: [[32258]],
        194928: [[32325]],
        194929: [[17204]],
        194930: [[156200]],
        194931: [[156231]],
        194932: [[17241]],
        194933: [[156377]],
        194934: [[32634]],
        194935: [[156478]],
        194936: [[32661]],
        194937: [[32762]],
        194938: [[32773]],
        194939: [[156890]],
        194940: [[156963]],
        194941: [[32864]],
        194942: [[157096]],
        194943: [[32880]],
        194944: [[144223]],
        194945: [[17365]],
        194946: [[32946]],
        194947: [[33027]],
        194948: [[17419]],
        194949: [[33086]],
        194950: [[23221]],
        194951: [[157607]],
        194952: [[157621]],
        194953: [[144275]],
        194954: [[144284]],
        194955: [[33281]],
        194956: [[33284]],
        194957: [[36766]],
        194958: [[17515]],
        194959: [[33425]],
        194960: [[33419]],
        194961: [[33437]],
        194962: [[21171]],
        194963: [[33457]],
        194964: [[33459]],
        194965: [[33469]],
        194966: [[33510]],
        194967: [[158524]],
        194968: [[33509]],
        194969: [[33565]],
        194970: [[33635]],
        194971: [[33709]],
        194972: [[33571]],
        194973: [[33725]],
        194974: [[33767]],
        194975: [[33879]],
        194976: [[33619]],
        194977: [[33738]],
        194978: [[33740]],
        194979: [[33756]],
        194980: [[158774]],
        194981: [[159083]],
        194982: [[158933]],
        194983: [[17707]],
        194984: [[34033]],
        194985: [[34035]],
        194986: [[34070]],
        194987: [[160714]],
        194988: [[34148]],
        194989: [[159532]],
        194990: [[17757]],
        194991: [[17761]],
        194992: [[159665]],
        194993: [[159954]],
        194994: [[17771]],
        194995: [[34384]],
        194996: [[34396]],
        194997: [[34407]],
        194998: [[34409]],
        194999: [[34473]],
        195e3: [[34440]],
        195001: [[34574]],
        195002: [[34530]],
        195003: [[34681]],
        195004: [[34600]],
        195005: [[34667]],
        195006: [[34694]],
        195007: [[17879]],
        195008: [[34785]],
        195009: [[34817]],
        195010: [[17913]],
        195011: [[34912]],
        195012: [[34915]],
        195013: [[161383]],
        195014: [[35031]],
        195015: [[35038]],
        195016: [[17973]],
        195017: [[35066]],
        195018: [[13499]],
        195019: [[161966]],
        195020: [[162150]],
        195021: [[18110]],
        195022: [[18119]],
        195023: [[35488]],
        195024: [[35565]],
        195025: [[35722]],
        195026: [[35925]],
        195027: [[162984]],
        195028: [[36011]],
        195029: [[36033]],
        195030: [[36123]],
        195031: [[36215]],
        195032: [[163631]],
        195033: [[133124]],
        195034: [[36299]],
        195035: [[36284]],
        195036: [[36336]],
        195037: [[133342]],
        195038: [[36564]],
        195039: [[36664]],
        195040: [[165330]],
        195041: [[165357]],
        195042: [[37012]],
        195043: [[37105]],
        195044: [[37137]],
        195045: [[165678]],
        195046: [[37147]],
        195047: [[37432]],
        195048: [[37591]],
        195049: [[37592]],
        195050: [[37500]],
        195051: [[37881]],
        195052: [[37909]],
        195053: [[166906]],
        195054: [[38283]],
        195055: [[18837]],
        195056: [[38327]],
        195057: [[167287]],
        195058: [[18918]],
        195059: [[38595]],
        195060: [[23986]],
        195061: [[38691]],
        195062: [[168261]],
        195063: [[168474]],
        195064: [[19054]],
        195065: [[19062]],
        195066: [[38880]],
        195067: [[168970]],
        195068: [[19122]],
        195069: [[169110]],
        195070: [[38923]],
        195071: [[38923]],
      },
      64e3: {
        64e3: [[20999]],
        64001: [[24230]],
        64002: [[25299]],
        64003: [[31958]],
        64004: [[23429]],
        64005: [[27934]],
        64006: [[26292]],
        64007: [[36667]],
        64008: [[34892]],
        64009: [[38477]],
        64010: [[35211]],
        64011: [[24275]],
        64012: [[20800]],
        64013: [[21952]],
        64016: [[22618]],
        64018: [[26228]],
        64021: [[20958]],
        64022: [[29482]],
        64023: [[30410]],
        64024: [[31036]],
        64025: [[31070]],
        64026: [[31077]],
        64027: [[31119]],
        64028: [[38742]],
        64029: [[31934]],
        64030: [[32701]],
        64032: [[34322]],
        64034: [[35576]],
        64037: [[36920]],
        64038: [[37117]],
        64042: [[39151]],
        64043: [[39164]],
        64044: [[39208]],
        64045: [[40372]],
        64046: [[37086]],
        64047: [[38583]],
        64048: [[20398]],
        64049: [[20711]],
        64050: [[20813]],
        64051: [[21193]],
        64052: [[21220]],
        64053: [[21329]],
        64054: [[21917]],
        64055: [[22022]],
        64056: [[22120]],
        64057: [[22592]],
        64058: [[22696]],
        64059: [[23652]],
        64060: [[23662]],
        64061: [[24724]],
        64062: [[24936]],
        64063: [[24974]],
        64064: [[25074]],
        64065: [[25935]],
        64066: [[26082]],
        64067: [[26257]],
        64068: [[26757]],
        64069: [[28023]],
        64070: [[28186]],
        64071: [[28450]],
        64072: [[29038]],
        64073: [[29227]],
        64074: [[29730]],
        64075: [[30865]],
        64076: [[31038]],
        64077: [[31049]],
        64078: [[31048]],
        64079: [[31056]],
        64080: [[31062]],
        64081: [[31069]],
        64082: [[31117]],
        64083: [[31118]],
        64084: [[31296]],
        64085: [[31361]],
        64086: [[31680]],
        64087: [[32244]],
        64088: [[32265]],
        64089: [[32321]],
        64090: [[32626]],
        64091: [[32773]],
        64092: [[33261]],
        64093: [[33401]],
        64094: [[33401]],
        64095: [[33879]],
        64096: [[35088]],
        64097: [[35222]],
        64098: [[35585]],
        64099: [[35641]],
        64100: [[36051]],
        64101: [[36104]],
        64102: [[36790]],
        64103: [[36920]],
        64104: [[38627]],
        64105: [[38911]],
        64106: [[38971]],
        64107: [[24693]],
        64108: [[148206]],
        64109: [[33304]],
        64112: [[20006]],
        64113: [[20917]],
        64114: [[20840]],
        64115: [[20352]],
        64116: [[20805]],
        64117: [[20864]],
        64118: [[21191]],
        64119: [[21242]],
        64120: [[21917]],
        64121: [[21845]],
        64122: [[21913]],
        64123: [[21986]],
        64124: [[22618]],
        64125: [[22707]],
        64126: [[22852]],
        64127: [[22868]],
        64128: [[23138]],
        64129: [[23336]],
        64130: [[24274]],
        64131: [[24281]],
        64132: [[24425]],
        64133: [[24493]],
        64134: [[24792]],
        64135: [[24910]],
        64136: [[24840]],
        64137: [[24974]],
        64138: [[24928]],
        64139: [[25074]],
        64140: [[25140]],
        64141: [[25540]],
        64142: [[25628]],
        64143: [[25682]],
        64144: [[25942]],
        64145: [[26228]],
        64146: [[26391]],
        64147: [[26395]],
        64148: [[26454]],
        64149: [[27513]],
        64150: [[27578]],
        64151: [[27969]],
        64152: [[28379]],
        64153: [[28363]],
        64154: [[28450]],
        64155: [[28702]],
        64156: [[29038]],
        64157: [[30631]],
        64158: [[29237]],
        64159: [[29359]],
        64160: [[29482]],
        64161: [[29809]],
        64162: [[29958]],
        64163: [[30011]],
        64164: [[30237]],
        64165: [[30239]],
        64166: [[30410]],
        64167: [[30427]],
        64168: [[30452]],
        64169: [[30538]],
        64170: [[30528]],
        64171: [[30924]],
        64172: [[31409]],
        64173: [[31680]],
        64174: [[31867]],
        64175: [[32091]],
        64176: [[32244]],
        64177: [[32574]],
        64178: [[32773]],
        64179: [[33618]],
        64180: [[33775]],
        64181: [[34681]],
        64182: [[35137]],
        64183: [[35206]],
        64184: [[35222]],
        64185: [[35519]],
        64186: [[35576]],
        64187: [[35531]],
        64188: [[35585]],
        64189: [[35582]],
        64190: [[35565]],
        64191: [[35641]],
        64192: [[35722]],
        64193: [[36104]],
        64194: [[36664]],
        64195: [[36978]],
        64196: [[37273]],
        64197: [[37494]],
        64198: [[38524]],
        64199: [[38627]],
        64200: [[38742]],
        64201: [[38875]],
        64202: [[38911]],
        64203: [[38923]],
        64204: [[38971]],
        64205: [[39698]],
        64206: [[40860]],
        64207: [[141386]],
        64208: [[141380]],
        64209: [[144341]],
        64210: [[15261]],
        64211: [[16408]],
        64212: [[16441]],
        64213: [[152137]],
        64214: [[154832]],
        64215: [[163539]],
        64216: [[40771]],
        64217: [[40846]],
        195072: [[38953]],
        195073: [[169398]],
        195074: [[39138]],
        195075: [[19251]],
        195076: [[39209]],
        195077: [[39335]],
        195078: [[39362]],
        195079: [[39422]],
        195080: [[19406]],
        195081: [[170800]],
        195082: [[39698]],
        195083: [[4e4]],
        195084: [[40189]],
        195085: [[19662]],
        195086: [[19693]],
        195087: [[40295]],
        195088: [[172238]],
        195089: [[19704]],
        195090: [[172293]],
        195091: [[172558]],
        195092: [[172689]],
        195093: [[40635]],
        195094: [[19798]],
        195095: [[40697]],
        195096: [[40702]],
        195097: [[40709]],
        195098: [[40719]],
        195099: [[40726]],
        195100: [[40763]],
        195101: [[173568]],
      },
      64256: {
        64256: [[102, 102], 256],
        64257: [[102, 105], 256],
        64258: [[102, 108], 256],
        64259: [[102, 102, 105], 256],
        64260: [[102, 102, 108], 256],
        64261: [[383, 116], 256],
        64262: [[115, 116], 256],
        64275: [[1396, 1398], 256],
        64276: [[1396, 1381], 256],
        64277: [[1396, 1387], 256],
        64278: [[1406, 1398], 256],
        64279: [[1396, 1389], 256],
        64285: [[1497, 1460], 512],
        64286: [, 26],
        64287: [[1522, 1463], 512],
        64288: [[1506], 256],
        64289: [[1488], 256],
        64290: [[1491], 256],
        64291: [[1492], 256],
        64292: [[1499], 256],
        64293: [[1500], 256],
        64294: [[1501], 256],
        64295: [[1512], 256],
        64296: [[1514], 256],
        64297: [[43], 256],
        64298: [[1513, 1473], 512],
        64299: [[1513, 1474], 512],
        64300: [[64329, 1473], 512],
        64301: [[64329, 1474], 512],
        64302: [[1488, 1463], 512],
        64303: [[1488, 1464], 512],
        64304: [[1488, 1468], 512],
        64305: [[1489, 1468], 512],
        64306: [[1490, 1468], 512],
        64307: [[1491, 1468], 512],
        64308: [[1492, 1468], 512],
        64309: [[1493, 1468], 512],
        64310: [[1494, 1468], 512],
        64312: [[1496, 1468], 512],
        64313: [[1497, 1468], 512],
        64314: [[1498, 1468], 512],
        64315: [[1499, 1468], 512],
        64316: [[1500, 1468], 512],
        64318: [[1502, 1468], 512],
        64320: [[1504, 1468], 512],
        64321: [[1505, 1468], 512],
        64323: [[1507, 1468], 512],
        64324: [[1508, 1468], 512],
        64326: [[1510, 1468], 512],
        64327: [[1511, 1468], 512],
        64328: [[1512, 1468], 512],
        64329: [[1513, 1468], 512],
        64330: [[1514, 1468], 512],
        64331: [[1493, 1465], 512],
        64332: [[1489, 1471], 512],
        64333: [[1499, 1471], 512],
        64334: [[1508, 1471], 512],
        64335: [[1488, 1500], 256],
        64336: [[1649], 256],
        64337: [[1649], 256],
        64338: [[1659], 256],
        64339: [[1659], 256],
        64340: [[1659], 256],
        64341: [[1659], 256],
        64342: [[1662], 256],
        64343: [[1662], 256],
        64344: [[1662], 256],
        64345: [[1662], 256],
        64346: [[1664], 256],
        64347: [[1664], 256],
        64348: [[1664], 256],
        64349: [[1664], 256],
        64350: [[1658], 256],
        64351: [[1658], 256],
        64352: [[1658], 256],
        64353: [[1658], 256],
        64354: [[1663], 256],
        64355: [[1663], 256],
        64356: [[1663], 256],
        64357: [[1663], 256],
        64358: [[1657], 256],
        64359: [[1657], 256],
        64360: [[1657], 256],
        64361: [[1657], 256],
        64362: [[1700], 256],
        64363: [[1700], 256],
        64364: [[1700], 256],
        64365: [[1700], 256],
        64366: [[1702], 256],
        64367: [[1702], 256],
        64368: [[1702], 256],
        64369: [[1702], 256],
        64370: [[1668], 256],
        64371: [[1668], 256],
        64372: [[1668], 256],
        64373: [[1668], 256],
        64374: [[1667], 256],
        64375: [[1667], 256],
        64376: [[1667], 256],
        64377: [[1667], 256],
        64378: [[1670], 256],
        64379: [[1670], 256],
        64380: [[1670], 256],
        64381: [[1670], 256],
        64382: [[1671], 256],
        64383: [[1671], 256],
        64384: [[1671], 256],
        64385: [[1671], 256],
        64386: [[1677], 256],
        64387: [[1677], 256],
        64388: [[1676], 256],
        64389: [[1676], 256],
        64390: [[1678], 256],
        64391: [[1678], 256],
        64392: [[1672], 256],
        64393: [[1672], 256],
        64394: [[1688], 256],
        64395: [[1688], 256],
        64396: [[1681], 256],
        64397: [[1681], 256],
        64398: [[1705], 256],
        64399: [[1705], 256],
        64400: [[1705], 256],
        64401: [[1705], 256],
        64402: [[1711], 256],
        64403: [[1711], 256],
        64404: [[1711], 256],
        64405: [[1711], 256],
        64406: [[1715], 256],
        64407: [[1715], 256],
        64408: [[1715], 256],
        64409: [[1715], 256],
        64410: [[1713], 256],
        64411: [[1713], 256],
        64412: [[1713], 256],
        64413: [[1713], 256],
        64414: [[1722], 256],
        64415: [[1722], 256],
        64416: [[1723], 256],
        64417: [[1723], 256],
        64418: [[1723], 256],
        64419: [[1723], 256],
        64420: [[1728], 256],
        64421: [[1728], 256],
        64422: [[1729], 256],
        64423: [[1729], 256],
        64424: [[1729], 256],
        64425: [[1729], 256],
        64426: [[1726], 256],
        64427: [[1726], 256],
        64428: [[1726], 256],
        64429: [[1726], 256],
        64430: [[1746], 256],
        64431: [[1746], 256],
        64432: [[1747], 256],
        64433: [[1747], 256],
        64467: [[1709], 256],
        64468: [[1709], 256],
        64469: [[1709], 256],
        64470: [[1709], 256],
        64471: [[1735], 256],
        64472: [[1735], 256],
        64473: [[1734], 256],
        64474: [[1734], 256],
        64475: [[1736], 256],
        64476: [[1736], 256],
        64477: [[1655], 256],
        64478: [[1739], 256],
        64479: [[1739], 256],
        64480: [[1733], 256],
        64481: [[1733], 256],
        64482: [[1737], 256],
        64483: [[1737], 256],
        64484: [[1744], 256],
        64485: [[1744], 256],
        64486: [[1744], 256],
        64487: [[1744], 256],
        64488: [[1609], 256],
        64489: [[1609], 256],
        64490: [[1574, 1575], 256],
        64491: [[1574, 1575], 256],
        64492: [[1574, 1749], 256],
        64493: [[1574, 1749], 256],
        64494: [[1574, 1608], 256],
        64495: [[1574, 1608], 256],
        64496: [[1574, 1735], 256],
        64497: [[1574, 1735], 256],
        64498: [[1574, 1734], 256],
        64499: [[1574, 1734], 256],
        64500: [[1574, 1736], 256],
        64501: [[1574, 1736], 256],
        64502: [[1574, 1744], 256],
        64503: [[1574, 1744], 256],
        64504: [[1574, 1744], 256],
        64505: [[1574, 1609], 256],
        64506: [[1574, 1609], 256],
        64507: [[1574, 1609], 256],
        64508: [[1740], 256],
        64509: [[1740], 256],
        64510: [[1740], 256],
        64511: [[1740], 256],
      },
      64512: {
        64512: [[1574, 1580], 256],
        64513: [[1574, 1581], 256],
        64514: [[1574, 1605], 256],
        64515: [[1574, 1609], 256],
        64516: [[1574, 1610], 256],
        64517: [[1576, 1580], 256],
        64518: [[1576, 1581], 256],
        64519: [[1576, 1582], 256],
        64520: [[1576, 1605], 256],
        64521: [[1576, 1609], 256],
        64522: [[1576, 1610], 256],
        64523: [[1578, 1580], 256],
        64524: [[1578, 1581], 256],
        64525: [[1578, 1582], 256],
        64526: [[1578, 1605], 256],
        64527: [[1578, 1609], 256],
        64528: [[1578, 1610], 256],
        64529: [[1579, 1580], 256],
        64530: [[1579, 1605], 256],
        64531: [[1579, 1609], 256],
        64532: [[1579, 1610], 256],
        64533: [[1580, 1581], 256],
        64534: [[1580, 1605], 256],
        64535: [[1581, 1580], 256],
        64536: [[1581, 1605], 256],
        64537: [[1582, 1580], 256],
        64538: [[1582, 1581], 256],
        64539: [[1582, 1605], 256],
        64540: [[1587, 1580], 256],
        64541: [[1587, 1581], 256],
        64542: [[1587, 1582], 256],
        64543: [[1587, 1605], 256],
        64544: [[1589, 1581], 256],
        64545: [[1589, 1605], 256],
        64546: [[1590, 1580], 256],
        64547: [[1590, 1581], 256],
        64548: [[1590, 1582], 256],
        64549: [[1590, 1605], 256],
        64550: [[1591, 1581], 256],
        64551: [[1591, 1605], 256],
        64552: [[1592, 1605], 256],
        64553: [[1593, 1580], 256],
        64554: [[1593, 1605], 256],
        64555: [[1594, 1580], 256],
        64556: [[1594, 1605], 256],
        64557: [[1601, 1580], 256],
        64558: [[1601, 1581], 256],
        64559: [[1601, 1582], 256],
        64560: [[1601, 1605], 256],
        64561: [[1601, 1609], 256],
        64562: [[1601, 1610], 256],
        64563: [[1602, 1581], 256],
        64564: [[1602, 1605], 256],
        64565: [[1602, 1609], 256],
        64566: [[1602, 1610], 256],
        64567: [[1603, 1575], 256],
        64568: [[1603, 1580], 256],
        64569: [[1603, 1581], 256],
        64570: [[1603, 1582], 256],
        64571: [[1603, 1604], 256],
        64572: [[1603, 1605], 256],
        64573: [[1603, 1609], 256],
        64574: [[1603, 1610], 256],
        64575: [[1604, 1580], 256],
        64576: [[1604, 1581], 256],
        64577: [[1604, 1582], 256],
        64578: [[1604, 1605], 256],
        64579: [[1604, 1609], 256],
        64580: [[1604, 1610], 256],
        64581: [[1605, 1580], 256],
        64582: [[1605, 1581], 256],
        64583: [[1605, 1582], 256],
        64584: [[1605, 1605], 256],
        64585: [[1605, 1609], 256],
        64586: [[1605, 1610], 256],
        64587: [[1606, 1580], 256],
        64588: [[1606, 1581], 256],
        64589: [[1606, 1582], 256],
        64590: [[1606, 1605], 256],
        64591: [[1606, 1609], 256],
        64592: [[1606, 1610], 256],
        64593: [[1607, 1580], 256],
        64594: [[1607, 1605], 256],
        64595: [[1607, 1609], 256],
        64596: [[1607, 1610], 256],
        64597: [[1610, 1580], 256],
        64598: [[1610, 1581], 256],
        64599: [[1610, 1582], 256],
        64600: [[1610, 1605], 256],
        64601: [[1610, 1609], 256],
        64602: [[1610, 1610], 256],
        64603: [[1584, 1648], 256],
        64604: [[1585, 1648], 256],
        64605: [[1609, 1648], 256],
        64606: [[32, 1612, 1617], 256],
        64607: [[32, 1613, 1617], 256],
        64608: [[32, 1614, 1617], 256],
        64609: [[32, 1615, 1617], 256],
        64610: [[32, 1616, 1617], 256],
        64611: [[32, 1617, 1648], 256],
        64612: [[1574, 1585], 256],
        64613: [[1574, 1586], 256],
        64614: [[1574, 1605], 256],
        64615: [[1574, 1606], 256],
        64616: [[1574, 1609], 256],
        64617: [[1574, 1610], 256],
        64618: [[1576, 1585], 256],
        64619: [[1576, 1586], 256],
        64620: [[1576, 1605], 256],
        64621: [[1576, 1606], 256],
        64622: [[1576, 1609], 256],
        64623: [[1576, 1610], 256],
        64624: [[1578, 1585], 256],
        64625: [[1578, 1586], 256],
        64626: [[1578, 1605], 256],
        64627: [[1578, 1606], 256],
        64628: [[1578, 1609], 256],
        64629: [[1578, 1610], 256],
        64630: [[1579, 1585], 256],
        64631: [[1579, 1586], 256],
        64632: [[1579, 1605], 256],
        64633: [[1579, 1606], 256],
        64634: [[1579, 1609], 256],
        64635: [[1579, 1610], 256],
        64636: [[1601, 1609], 256],
        64637: [[1601, 1610], 256],
        64638: [[1602, 1609], 256],
        64639: [[1602, 1610], 256],
        64640: [[1603, 1575], 256],
        64641: [[1603, 1604], 256],
        64642: [[1603, 1605], 256],
        64643: [[1603, 1609], 256],
        64644: [[1603, 1610], 256],
        64645: [[1604, 1605], 256],
        64646: [[1604, 1609], 256],
        64647: [[1604, 1610], 256],
        64648: [[1605, 1575], 256],
        64649: [[1605, 1605], 256],
        64650: [[1606, 1585], 256],
        64651: [[1606, 1586], 256],
        64652: [[1606, 1605], 256],
        64653: [[1606, 1606], 256],
        64654: [[1606, 1609], 256],
        64655: [[1606, 1610], 256],
        64656: [[1609, 1648], 256],
        64657: [[1610, 1585], 256],
        64658: [[1610, 1586], 256],
        64659: [[1610, 1605], 256],
        64660: [[1610, 1606], 256],
        64661: [[1610, 1609], 256],
        64662: [[1610, 1610], 256],
        64663: [[1574, 1580], 256],
        64664: [[1574, 1581], 256],
        64665: [[1574, 1582], 256],
        64666: [[1574, 1605], 256],
        64667: [[1574, 1607], 256],
        64668: [[1576, 1580], 256],
        64669: [[1576, 1581], 256],
        64670: [[1576, 1582], 256],
        64671: [[1576, 1605], 256],
        64672: [[1576, 1607], 256],
        64673: [[1578, 1580], 256],
        64674: [[1578, 1581], 256],
        64675: [[1578, 1582], 256],
        64676: [[1578, 1605], 256],
        64677: [[1578, 1607], 256],
        64678: [[1579, 1605], 256],
        64679: [[1580, 1581], 256],
        64680: [[1580, 1605], 256],
        64681: [[1581, 1580], 256],
        64682: [[1581, 1605], 256],
        64683: [[1582, 1580], 256],
        64684: [[1582, 1605], 256],
        64685: [[1587, 1580], 256],
        64686: [[1587, 1581], 256],
        64687: [[1587, 1582], 256],
        64688: [[1587, 1605], 256],
        64689: [[1589, 1581], 256],
        64690: [[1589, 1582], 256],
        64691: [[1589, 1605], 256],
        64692: [[1590, 1580], 256],
        64693: [[1590, 1581], 256],
        64694: [[1590, 1582], 256],
        64695: [[1590, 1605], 256],
        64696: [[1591, 1581], 256],
        64697: [[1592, 1605], 256],
        64698: [[1593, 1580], 256],
        64699: [[1593, 1605], 256],
        64700: [[1594, 1580], 256],
        64701: [[1594, 1605], 256],
        64702: [[1601, 1580], 256],
        64703: [[1601, 1581], 256],
        64704: [[1601, 1582], 256],
        64705: [[1601, 1605], 256],
        64706: [[1602, 1581], 256],
        64707: [[1602, 1605], 256],
        64708: [[1603, 1580], 256],
        64709: [[1603, 1581], 256],
        64710: [[1603, 1582], 256],
        64711: [[1603, 1604], 256],
        64712: [[1603, 1605], 256],
        64713: [[1604, 1580], 256],
        64714: [[1604, 1581], 256],
        64715: [[1604, 1582], 256],
        64716: [[1604, 1605], 256],
        64717: [[1604, 1607], 256],
        64718: [[1605, 1580], 256],
        64719: [[1605, 1581], 256],
        64720: [[1605, 1582], 256],
        64721: [[1605, 1605], 256],
        64722: [[1606, 1580], 256],
        64723: [[1606, 1581], 256],
        64724: [[1606, 1582], 256],
        64725: [[1606, 1605], 256],
        64726: [[1606, 1607], 256],
        64727: [[1607, 1580], 256],
        64728: [[1607, 1605], 256],
        64729: [[1607, 1648], 256],
        64730: [[1610, 1580], 256],
        64731: [[1610, 1581], 256],
        64732: [[1610, 1582], 256],
        64733: [[1610, 1605], 256],
        64734: [[1610, 1607], 256],
        64735: [[1574, 1605], 256],
        64736: [[1574, 1607], 256],
        64737: [[1576, 1605], 256],
        64738: [[1576, 1607], 256],
        64739: [[1578, 1605], 256],
        64740: [[1578, 1607], 256],
        64741: [[1579, 1605], 256],
        64742: [[1579, 1607], 256],
        64743: [[1587, 1605], 256],
        64744: [[1587, 1607], 256],
        64745: [[1588, 1605], 256],
        64746: [[1588, 1607], 256],
        64747: [[1603, 1604], 256],
        64748: [[1603, 1605], 256],
        64749: [[1604, 1605], 256],
        64750: [[1606, 1605], 256],
        64751: [[1606, 1607], 256],
        64752: [[1610, 1605], 256],
        64753: [[1610, 1607], 256],
        64754: [[1600, 1614, 1617], 256],
        64755: [[1600, 1615, 1617], 256],
        64756: [[1600, 1616, 1617], 256],
        64757: [[1591, 1609], 256],
        64758: [[1591, 1610], 256],
        64759: [[1593, 1609], 256],
        64760: [[1593, 1610], 256],
        64761: [[1594, 1609], 256],
        64762: [[1594, 1610], 256],
        64763: [[1587, 1609], 256],
        64764: [[1587, 1610], 256],
        64765: [[1588, 1609], 256],
        64766: [[1588, 1610], 256],
        64767: [[1581, 1609], 256],
      },
      64768: {
        64768: [[1581, 1610], 256],
        64769: [[1580, 1609], 256],
        64770: [[1580, 1610], 256],
        64771: [[1582, 1609], 256],
        64772: [[1582, 1610], 256],
        64773: [[1589, 1609], 256],
        64774: [[1589, 1610], 256],
        64775: [[1590, 1609], 256],
        64776: [[1590, 1610], 256],
        64777: [[1588, 1580], 256],
        64778: [[1588, 1581], 256],
        64779: [[1588, 1582], 256],
        64780: [[1588, 1605], 256],
        64781: [[1588, 1585], 256],
        64782: [[1587, 1585], 256],
        64783: [[1589, 1585], 256],
        64784: [[1590, 1585], 256],
        64785: [[1591, 1609], 256],
        64786: [[1591, 1610], 256],
        64787: [[1593, 1609], 256],
        64788: [[1593, 1610], 256],
        64789: [[1594, 1609], 256],
        64790: [[1594, 1610], 256],
        64791: [[1587, 1609], 256],
        64792: [[1587, 1610], 256],
        64793: [[1588, 1609], 256],
        64794: [[1588, 1610], 256],
        64795: [[1581, 1609], 256],
        64796: [[1581, 1610], 256],
        64797: [[1580, 1609], 256],
        64798: [[1580, 1610], 256],
        64799: [[1582, 1609], 256],
        64800: [[1582, 1610], 256],
        64801: [[1589, 1609], 256],
        64802: [[1589, 1610], 256],
        64803: [[1590, 1609], 256],
        64804: [[1590, 1610], 256],
        64805: [[1588, 1580], 256],
        64806: [[1588, 1581], 256],
        64807: [[1588, 1582], 256],
        64808: [[1588, 1605], 256],
        64809: [[1588, 1585], 256],
        64810: [[1587, 1585], 256],
        64811: [[1589, 1585], 256],
        64812: [[1590, 1585], 256],
        64813: [[1588, 1580], 256],
        64814: [[1588, 1581], 256],
        64815: [[1588, 1582], 256],
        64816: [[1588, 1605], 256],
        64817: [[1587, 1607], 256],
        64818: [[1588, 1607], 256],
        64819: [[1591, 1605], 256],
        64820: [[1587, 1580], 256],
        64821: [[1587, 1581], 256],
        64822: [[1587, 1582], 256],
        64823: [[1588, 1580], 256],
        64824: [[1588, 1581], 256],
        64825: [[1588, 1582], 256],
        64826: [[1591, 1605], 256],
        64827: [[1592, 1605], 256],
        64828: [[1575, 1611], 256],
        64829: [[1575, 1611], 256],
        64848: [[1578, 1580, 1605], 256],
        64849: [[1578, 1581, 1580], 256],
        64850: [[1578, 1581, 1580], 256],
        64851: [[1578, 1581, 1605], 256],
        64852: [[1578, 1582, 1605], 256],
        64853: [[1578, 1605, 1580], 256],
        64854: [[1578, 1605, 1581], 256],
        64855: [[1578, 1605, 1582], 256],
        64856: [[1580, 1605, 1581], 256],
        64857: [[1580, 1605, 1581], 256],
        64858: [[1581, 1605, 1610], 256],
        64859: [[1581, 1605, 1609], 256],
        64860: [[1587, 1581, 1580], 256],
        64861: [[1587, 1580, 1581], 256],
        64862: [[1587, 1580, 1609], 256],
        64863: [[1587, 1605, 1581], 256],
        64864: [[1587, 1605, 1581], 256],
        64865: [[1587, 1605, 1580], 256],
        64866: [[1587, 1605, 1605], 256],
        64867: [[1587, 1605, 1605], 256],
        64868: [[1589, 1581, 1581], 256],
        64869: [[1589, 1581, 1581], 256],
        64870: [[1589, 1605, 1605], 256],
        64871: [[1588, 1581, 1605], 256],
        64872: [[1588, 1581, 1605], 256],
        64873: [[1588, 1580, 1610], 256],
        64874: [[1588, 1605, 1582], 256],
        64875: [[1588, 1605, 1582], 256],
        64876: [[1588, 1605, 1605], 256],
        64877: [[1588, 1605, 1605], 256],
        64878: [[1590, 1581, 1609], 256],
        64879: [[1590, 1582, 1605], 256],
        64880: [[1590, 1582, 1605], 256],
        64881: [[1591, 1605, 1581], 256],
        64882: [[1591, 1605, 1581], 256],
        64883: [[1591, 1605, 1605], 256],
        64884: [[1591, 1605, 1610], 256],
        64885: [[1593, 1580, 1605], 256],
        64886: [[1593, 1605, 1605], 256],
        64887: [[1593, 1605, 1605], 256],
        64888: [[1593, 1605, 1609], 256],
        64889: [[1594, 1605, 1605], 256],
        64890: [[1594, 1605, 1610], 256],
        64891: [[1594, 1605, 1609], 256],
        64892: [[1601, 1582, 1605], 256],
        64893: [[1601, 1582, 1605], 256],
        64894: [[1602, 1605, 1581], 256],
        64895: [[1602, 1605, 1605], 256],
        64896: [[1604, 1581, 1605], 256],
        64897: [[1604, 1581, 1610], 256],
        64898: [[1604, 1581, 1609], 256],
        64899: [[1604, 1580, 1580], 256],
        64900: [[1604, 1580, 1580], 256],
        64901: [[1604, 1582, 1605], 256],
        64902: [[1604, 1582, 1605], 256],
        64903: [[1604, 1605, 1581], 256],
        64904: [[1604, 1605, 1581], 256],
        64905: [[1605, 1581, 1580], 256],
        64906: [[1605, 1581, 1605], 256],
        64907: [[1605, 1581, 1610], 256],
        64908: [[1605, 1580, 1581], 256],
        64909: [[1605, 1580, 1605], 256],
        64910: [[1605, 1582, 1580], 256],
        64911: [[1605, 1582, 1605], 256],
        64914: [[1605, 1580, 1582], 256],
        64915: [[1607, 1605, 1580], 256],
        64916: [[1607, 1605, 1605], 256],
        64917: [[1606, 1581, 1605], 256],
        64918: [[1606, 1581, 1609], 256],
        64919: [[1606, 1580, 1605], 256],
        64920: [[1606, 1580, 1605], 256],
        64921: [[1606, 1580, 1609], 256],
        64922: [[1606, 1605, 1610], 256],
        64923: [[1606, 1605, 1609], 256],
        64924: [[1610, 1605, 1605], 256],
        64925: [[1610, 1605, 1605], 256],
        64926: [[1576, 1582, 1610], 256],
        64927: [[1578, 1580, 1610], 256],
        64928: [[1578, 1580, 1609], 256],
        64929: [[1578, 1582, 1610], 256],
        64930: [[1578, 1582, 1609], 256],
        64931: [[1578, 1605, 1610], 256],
        64932: [[1578, 1605, 1609], 256],
        64933: [[1580, 1605, 1610], 256],
        64934: [[1580, 1581, 1609], 256],
        64935: [[1580, 1605, 1609], 256],
        64936: [[1587, 1582, 1609], 256],
        64937: [[1589, 1581, 1610], 256],
        64938: [[1588, 1581, 1610], 256],
        64939: [[1590, 1581, 1610], 256],
        64940: [[1604, 1580, 1610], 256],
        64941: [[1604, 1605, 1610], 256],
        64942: [[1610, 1581, 1610], 256],
        64943: [[1610, 1580, 1610], 256],
        64944: [[1610, 1605, 1610], 256],
        64945: [[1605, 1605, 1610], 256],
        64946: [[1602, 1605, 1610], 256],
        64947: [[1606, 1581, 1610], 256],
        64948: [[1602, 1605, 1581], 256],
        64949: [[1604, 1581, 1605], 256],
        64950: [[1593, 1605, 1610], 256],
        64951: [[1603, 1605, 1610], 256],
        64952: [[1606, 1580, 1581], 256],
        64953: [[1605, 1582, 1610], 256],
        64954: [[1604, 1580, 1605], 256],
        64955: [[1603, 1605, 1605], 256],
        64956: [[1604, 1580, 1605], 256],
        64957: [[1606, 1580, 1581], 256],
        64958: [[1580, 1581, 1610], 256],
        64959: [[1581, 1580, 1610], 256],
        64960: [[1605, 1580, 1610], 256],
        64961: [[1601, 1605, 1610], 256],
        64962: [[1576, 1581, 1610], 256],
        64963: [[1603, 1605, 1605], 256],
        64964: [[1593, 1580, 1605], 256],
        64965: [[1589, 1605, 1605], 256],
        64966: [[1587, 1582, 1610], 256],
        64967: [[1606, 1580, 1610], 256],
        65008: [[1589, 1604, 1746], 256],
        65009: [[1602, 1604, 1746], 256],
        65010: [[1575, 1604, 1604, 1607], 256],
        65011: [[1575, 1603, 1576, 1585], 256],
        65012: [[1605, 1581, 1605, 1583], 256],
        65013: [[1589, 1604, 1593, 1605], 256],
        65014: [[1585, 1587, 1608, 1604], 256],
        65015: [[1593, 1604, 1610, 1607], 256],
        65016: [[1608, 1587, 1604, 1605], 256],
        65017: [[1589, 1604, 1609], 256],
        65018: [
          [
            1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610,
            1607, 32, 1608, 1587, 1604, 1605,
          ],
          256,
        ],
        65019: [[1580, 1604, 32, 1580, 1604, 1575, 1604, 1607], 256],
        65020: [[1585, 1740, 1575, 1604], 256],
      },
      65024: {
        65040: [[44], 256],
        65041: [[12289], 256],
        65042: [[12290], 256],
        65043: [[58], 256],
        65044: [[59], 256],
        65045: [[33], 256],
        65046: [[63], 256],
        65047: [[12310], 256],
        65048: [[12311], 256],
        65049: [[8230], 256],
        65056: [, 230],
        65057: [, 230],
        65058: [, 230],
        65059: [, 230],
        65060: [, 230],
        65061: [, 230],
        65062: [, 230],
        65063: [, 220],
        65064: [, 220],
        65065: [, 220],
        65066: [, 220],
        65067: [, 220],
        65068: [, 220],
        65069: [, 220],
        65072: [[8229], 256],
        65073: [[8212], 256],
        65074: [[8211], 256],
        65075: [[95], 256],
        65076: [[95], 256],
        65077: [[40], 256],
        65078: [[41], 256],
        65079: [[123], 256],
        65080: [[125], 256],
        65081: [[12308], 256],
        65082: [[12309], 256],
        65083: [[12304], 256],
        65084: [[12305], 256],
        65085: [[12298], 256],
        65086: [[12299], 256],
        65087: [[12296], 256],
        65088: [[12297], 256],
        65089: [[12300], 256],
        65090: [[12301], 256],
        65091: [[12302], 256],
        65092: [[12303], 256],
        65095: [[91], 256],
        65096: [[93], 256],
        65097: [[8254], 256],
        65098: [[8254], 256],
        65099: [[8254], 256],
        65100: [[8254], 256],
        65101: [[95], 256],
        65102: [[95], 256],
        65103: [[95], 256],
        65104: [[44], 256],
        65105: [[12289], 256],
        65106: [[46], 256],
        65108: [[59], 256],
        65109: [[58], 256],
        65110: [[63], 256],
        65111: [[33], 256],
        65112: [[8212], 256],
        65113: [[40], 256],
        65114: [[41], 256],
        65115: [[123], 256],
        65116: [[125], 256],
        65117: [[12308], 256],
        65118: [[12309], 256],
        65119: [[35], 256],
        65120: [[38], 256],
        65121: [[42], 256],
        65122: [[43], 256],
        65123: [[45], 256],
        65124: [[60], 256],
        65125: [[62], 256],
        65126: [[61], 256],
        65128: [[92], 256],
        65129: [[36], 256],
        65130: [[37], 256],
        65131: [[64], 256],
        65136: [[32, 1611], 256],
        65137: [[1600, 1611], 256],
        65138: [[32, 1612], 256],
        65140: [[32, 1613], 256],
        65142: [[32, 1614], 256],
        65143: [[1600, 1614], 256],
        65144: [[32, 1615], 256],
        65145: [[1600, 1615], 256],
        65146: [[32, 1616], 256],
        65147: [[1600, 1616], 256],
        65148: [[32, 1617], 256],
        65149: [[1600, 1617], 256],
        65150: [[32, 1618], 256],
        65151: [[1600, 1618], 256],
        65152: [[1569], 256],
        65153: [[1570], 256],
        65154: [[1570], 256],
        65155: [[1571], 256],
        65156: [[1571], 256],
        65157: [[1572], 256],
        65158: [[1572], 256],
        65159: [[1573], 256],
        65160: [[1573], 256],
        65161: [[1574], 256],
        65162: [[1574], 256],
        65163: [[1574], 256],
        65164: [[1574], 256],
        65165: [[1575], 256],
        65166: [[1575], 256],
        65167: [[1576], 256],
        65168: [[1576], 256],
        65169: [[1576], 256],
        65170: [[1576], 256],
        65171: [[1577], 256],
        65172: [[1577], 256],
        65173: [[1578], 256],
        65174: [[1578], 256],
        65175: [[1578], 256],
        65176: [[1578], 256],
        65177: [[1579], 256],
        65178: [[1579], 256],
        65179: [[1579], 256],
        65180: [[1579], 256],
        65181: [[1580], 256],
        65182: [[1580], 256],
        65183: [[1580], 256],
        65184: [[1580], 256],
        65185: [[1581], 256],
        65186: [[1581], 256],
        65187: [[1581], 256],
        65188: [[1581], 256],
        65189: [[1582], 256],
        65190: [[1582], 256],
        65191: [[1582], 256],
        65192: [[1582], 256],
        65193: [[1583], 256],
        65194: [[1583], 256],
        65195: [[1584], 256],
        65196: [[1584], 256],
        65197: [[1585], 256],
        65198: [[1585], 256],
        65199: [[1586], 256],
        65200: [[1586], 256],
        65201: [[1587], 256],
        65202: [[1587], 256],
        65203: [[1587], 256],
        65204: [[1587], 256],
        65205: [[1588], 256],
        65206: [[1588], 256],
        65207: [[1588], 256],
        65208: [[1588], 256],
        65209: [[1589], 256],
        65210: [[1589], 256],
        65211: [[1589], 256],
        65212: [[1589], 256],
        65213: [[1590], 256],
        65214: [[1590], 256],
        65215: [[1590], 256],
        65216: [[1590], 256],
        65217: [[1591], 256],
        65218: [[1591], 256],
        65219: [[1591], 256],
        65220: [[1591], 256],
        65221: [[1592], 256],
        65222: [[1592], 256],
        65223: [[1592], 256],
        65224: [[1592], 256],
        65225: [[1593], 256],
        65226: [[1593], 256],
        65227: [[1593], 256],
        65228: [[1593], 256],
        65229: [[1594], 256],
        65230: [[1594], 256],
        65231: [[1594], 256],
        65232: [[1594], 256],
        65233: [[1601], 256],
        65234: [[1601], 256],
        65235: [[1601], 256],
        65236: [[1601], 256],
        65237: [[1602], 256],
        65238: [[1602], 256],
        65239: [[1602], 256],
        65240: [[1602], 256],
        65241: [[1603], 256],
        65242: [[1603], 256],
        65243: [[1603], 256],
        65244: [[1603], 256],
        65245: [[1604], 256],
        65246: [[1604], 256],
        65247: [[1604], 256],
        65248: [[1604], 256],
        65249: [[1605], 256],
        65250: [[1605], 256],
        65251: [[1605], 256],
        65252: [[1605], 256],
        65253: [[1606], 256],
        65254: [[1606], 256],
        65255: [[1606], 256],
        65256: [[1606], 256],
        65257: [[1607], 256],
        65258: [[1607], 256],
        65259: [[1607], 256],
        65260: [[1607], 256],
        65261: [[1608], 256],
        65262: [[1608], 256],
        65263: [[1609], 256],
        65264: [[1609], 256],
        65265: [[1610], 256],
        65266: [[1610], 256],
        65267: [[1610], 256],
        65268: [[1610], 256],
        65269: [[1604, 1570], 256],
        65270: [[1604, 1570], 256],
        65271: [[1604, 1571], 256],
        65272: [[1604, 1571], 256],
        65273: [[1604, 1573], 256],
        65274: [[1604, 1573], 256],
        65275: [[1604, 1575], 256],
        65276: [[1604, 1575], 256],
      },
      65280: {
        65281: [[33], 256],
        65282: [[34], 256],
        65283: [[35], 256],
        65284: [[36], 256],
        65285: [[37], 256],
        65286: [[38], 256],
        65287: [[39], 256],
        65288: [[40], 256],
        65289: [[41], 256],
        65290: [[42], 256],
        65291: [[43], 256],
        65292: [[44], 256],
        65293: [[45], 256],
        65294: [[46], 256],
        65295: [[47], 256],
        65296: [[48], 256],
        65297: [[49], 256],
        65298: [[50], 256],
        65299: [[51], 256],
        65300: [[52], 256],
        65301: [[53], 256],
        65302: [[54], 256],
        65303: [[55], 256],
        65304: [[56], 256],
        65305: [[57], 256],
        65306: [[58], 256],
        65307: [[59], 256],
        65308: [[60], 256],
        65309: [[61], 256],
        65310: [[62], 256],
        65311: [[63], 256],
        65312: [[64], 256],
        65313: [[65], 256],
        65314: [[66], 256],
        65315: [[67], 256],
        65316: [[68], 256],
        65317: [[69], 256],
        65318: [[70], 256],
        65319: [[71], 256],
        65320: [[72], 256],
        65321: [[73], 256],
        65322: [[74], 256],
        65323: [[75], 256],
        65324: [[76], 256],
        65325: [[77], 256],
        65326: [[78], 256],
        65327: [[79], 256],
        65328: [[80], 256],
        65329: [[81], 256],
        65330: [[82], 256],
        65331: [[83], 256],
        65332: [[84], 256],
        65333: [[85], 256],
        65334: [[86], 256],
        65335: [[87], 256],
        65336: [[88], 256],
        65337: [[89], 256],
        65338: [[90], 256],
        65339: [[91], 256],
        65340: [[92], 256],
        65341: [[93], 256],
        65342: [[94], 256],
        65343: [[95], 256],
        65344: [[96], 256],
        65345: [[97], 256],
        65346: [[98], 256],
        65347: [[99], 256],
        65348: [[100], 256],
        65349: [[101], 256],
        65350: [[102], 256],
        65351: [[103], 256],
        65352: [[104], 256],
        65353: [[105], 256],
        65354: [[106], 256],
        65355: [[107], 256],
        65356: [[108], 256],
        65357: [[109], 256],
        65358: [[110], 256],
        65359: [[111], 256],
        65360: [[112], 256],
        65361: [[113], 256],
        65362: [[114], 256],
        65363: [[115], 256],
        65364: [[116], 256],
        65365: [[117], 256],
        65366: [[118], 256],
        65367: [[119], 256],
        65368: [[120], 256],
        65369: [[121], 256],
        65370: [[122], 256],
        65371: [[123], 256],
        65372: [[124], 256],
        65373: [[125], 256],
        65374: [[126], 256],
        65375: [[10629], 256],
        65376: [[10630], 256],
        65377: [[12290], 256],
        65378: [[12300], 256],
        65379: [[12301], 256],
        65380: [[12289], 256],
        65381: [[12539], 256],
        65382: [[12530], 256],
        65383: [[12449], 256],
        65384: [[12451], 256],
        65385: [[12453], 256],
        65386: [[12455], 256],
        65387: [[12457], 256],
        65388: [[12515], 256],
        65389: [[12517], 256],
        65390: [[12519], 256],
        65391: [[12483], 256],
        65392: [[12540], 256],
        65393: [[12450], 256],
        65394: [[12452], 256],
        65395: [[12454], 256],
        65396: [[12456], 256],
        65397: [[12458], 256],
        65398: [[12459], 256],
        65399: [[12461], 256],
        65400: [[12463], 256],
        65401: [[12465], 256],
        65402: [[12467], 256],
        65403: [[12469], 256],
        65404: [[12471], 256],
        65405: [[12473], 256],
        65406: [[12475], 256],
        65407: [[12477], 256],
        65408: [[12479], 256],
        65409: [[12481], 256],
        65410: [[12484], 256],
        65411: [[12486], 256],
        65412: [[12488], 256],
        65413: [[12490], 256],
        65414: [[12491], 256],
        65415: [[12492], 256],
        65416: [[12493], 256],
        65417: [[12494], 256],
        65418: [[12495], 256],
        65419: [[12498], 256],
        65420: [[12501], 256],
        65421: [[12504], 256],
        65422: [[12507], 256],
        65423: [[12510], 256],
        65424: [[12511], 256],
        65425: [[12512], 256],
        65426: [[12513], 256],
        65427: [[12514], 256],
        65428: [[12516], 256],
        65429: [[12518], 256],
        65430: [[12520], 256],
        65431: [[12521], 256],
        65432: [[12522], 256],
        65433: [[12523], 256],
        65434: [[12524], 256],
        65435: [[12525], 256],
        65436: [[12527], 256],
        65437: [[12531], 256],
        65438: [[12441], 256],
        65439: [[12442], 256],
        65440: [[12644], 256],
        65441: [[12593], 256],
        65442: [[12594], 256],
        65443: [[12595], 256],
        65444: [[12596], 256],
        65445: [[12597], 256],
        65446: [[12598], 256],
        65447: [[12599], 256],
        65448: [[12600], 256],
        65449: [[12601], 256],
        65450: [[12602], 256],
        65451: [[12603], 256],
        65452: [[12604], 256],
        65453: [[12605], 256],
        65454: [[12606], 256],
        65455: [[12607], 256],
        65456: [[12608], 256],
        65457: [[12609], 256],
        65458: [[12610], 256],
        65459: [[12611], 256],
        65460: [[12612], 256],
        65461: [[12613], 256],
        65462: [[12614], 256],
        65463: [[12615], 256],
        65464: [[12616], 256],
        65465: [[12617], 256],
        65466: [[12618], 256],
        65467: [[12619], 256],
        65468: [[12620], 256],
        65469: [[12621], 256],
        65470: [[12622], 256],
        65474: [[12623], 256],
        65475: [[12624], 256],
        65476: [[12625], 256],
        65477: [[12626], 256],
        65478: [[12627], 256],
        65479: [[12628], 256],
        65482: [[12629], 256],
        65483: [[12630], 256],
        65484: [[12631], 256],
        65485: [[12632], 256],
        65486: [[12633], 256],
        65487: [[12634], 256],
        65490: [[12635], 256],
        65491: [[12636], 256],
        65492: [[12637], 256],
        65493: [[12638], 256],
        65494: [[12639], 256],
        65495: [[12640], 256],
        65498: [[12641], 256],
        65499: [[12642], 256],
        65500: [[12643], 256],
        65504: [[162], 256],
        65505: [[163], 256],
        65506: [[172], 256],
        65507: [[175], 256],
        65508: [[166], 256],
        65509: [[165], 256],
        65510: [[8361], 256],
        65512: [[9474], 256],
        65513: [[8592], 256],
        65514: [[8593], 256],
        65515: [[8594], 256],
        65516: [[8595], 256],
        65517: [[9632], 256],
        65518: [[9675], 256],
      },
    };
    var ie = { nfc: Ie, nfd: ce, nfkc: Ee, nfkd: be };
    (e.exports = ie),
      (ie.shimApplied = !1),
      String.prototype.normalize ||
        (Object.defineProperty(String.prototype, "normalize", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var k = "" + this,
              H = arguments[0] === void 0 ? "NFC" : arguments[0];
            if (this === null || this === void 0)
              throw new TypeError(
                "Cannot call method on " + Object.prototype.toString.call(this)
              );
            if (H === "NFC") return ie.nfc(k);
            if (H === "NFD") return ie.nfd(k);
            if (H === "NFKC") return ie.nfkc(k);
            if (H === "NFKD") return ie.nfkd(k);
            throw new RangeError("Invalid normalization form: " + H);
          },
        }),
        (ie.shimApplied = !0));
  })();
})(Jt);
var aI = Jt.exports;
const oI = Rn(aI),
  Is = j({ amount: 0, pwd: "", type: 0, bid: 0, name: "" }),
  ft = j({}),
  At = j([]);
function FP() {
  const e = $(() => Te().getUpperOrLower),
    s = j(!1),
    t = localStorage.getItem("lastBandCarkName") || "",
    n = (_, T) => {
      _[T] = _[T].replace(/[^\d]+/g, "");
    };
  function a(_, T) {
    return /^[0-9]{8,12}$/.test(_)
      ? !0
      : (Fe({ message: T, wordBreak: "break-word" }), !1);
  }
  function c(_) {
    const T = {
      "𝘼": "A",
      "𝘽": "B",
      "𝘾": "C",
      "𝘿": "D",
      "𝙀": "E",
      "𝙁": "F",
      "𝙂": "G",
      "𝙃": "H",
      "𝙄": "I",
      "𝙅": "J",
      "𝙆": "K",
      "𝙇": "L",
      "𝙈": "M",
      "𝙉": "N",
      "𝙊": "O",
      "𝙋": "P",
      "𝙌": "Q",
      "𝙍": "R",
      "𝙎": "S",
      "𝙏": "T",
      "𝙐": "U",
      "𝙑": "V",
      "𝙒": "W",
      "𝙓": "X",
      "𝙔": "Y",
      "𝙕": "Z",
      "𝙖": "a",
      "𝙗": "b",
      "𝙘": "c",
      "𝙙": "d",
      "𝙚": "e",
      "𝙛": "f",
      "𝙜": "g",
      "𝙝": "h",
      "𝙞": "i",
      "𝙟": "j",
      "𝙠": "k",
      "𝙡": "l",
      "𝙢": "m",
      "𝙣": "n",
      "𝙤": "o",
      "𝙥": "p",
      "𝙦": "q",
      "𝙧": "r",
      "𝙨": "s",
      "𝙩": "t",
      "𝙪": "u",
      "𝙫": "v",
      "𝙬": "w",
      "𝙭": "x",
      "𝙮": "y",
      "𝙯": "z",
    };
    return _.replace(
      /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]/g,
      (f) => T[f] || f
    );
  }
  const i = "tiranga",
    l = (_, T) => {
      const f =
        /[0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、\f\n\r\t\v\d]/g;
      let w = _[T].replace(f, "").replace(/ {2,}/g, " ");
      ["ar020"].includes(i) && (w = w.replace(/[^a-zA-Z\s]/g, "")),
        (w = c(w)),
        (_[T] = oI.nfd(VT(w.replace(/[\u0300-\u036f]/g, "")))),
        g(_, T);
    };
  function g(_, T) {
    const f = e.value || "";
    f === "1"
      ? (_[T] = _[T].toLowerCase())
      : f === "0" && (_[T] = _[T].toUpperCase());
  }
  function m(_, T) {
    t.length > 0 ? ((_[T] = t), g(_, T), (s.value = !0)) : (s.value = !1);
  }
  function d(_) {
    Is.value = _;
  }
  function b(_) {
    ft.value = _;
  }
  function v(_) {
    At.value = _;
  }
  return {
    iseditor: s,
    lastBandCarkName: t,
    onInput: n,
    checkAccoutNo: a,
    setUL: g,
    onLoad: m,
    makeTxt: l,
    data_NewSetWithdrawalH: Is,
    setWithdrawal: d,
    setWithdrawalsrule: b,
    withdrawalsrule: ft,
    setWithdrawalTypeslist: v,
    withdrawalTypeslist: At,
    setc2cAmount: (_) => {
      Is.value.amount = _;
    },
  };
}
class pI {
  constructor() {
    dt(this, "events");
    this.events = {};
  }
  on(s, t) {
    this.events[s] || (this.events[s] = []), this.events[s].push(t);
  }
  off(s, t) {
    if (!s && !t) return (this.events = {}), this;
    if (s) {
      if (!t) return (this.events[s] = []), this;
      const n = this.events[s];
      if (!n) return this;
      let a = n.length;
      for (; a--; ) n[a] === t && n.splice(a, 1);
      return this;
    }
  }
  emit(s, ...t) {
    const n = this.events[s];
    if (!n) return;
    let a;
    for (let c = 0; c < n.length; c++) {
      const i = n[c];
      if (i && ((a = i.apply(this, t)), a === !0)) return a;
    }
  }
  destory() {
    this.events = {};
  }
}
let Rs;
function Yt() {
  return Rs || (Rs = new pI()), Rs;
}
function cI(e) {
  let s;
  Qs(async () => {
    e(),
      await Cn(() => {
        s = !0;
      });
  }),
    Pn(() => {
      s && e();
    });
}
function HP(e, s, t = {}) {
  const { target: n = window, passive: a = !1, capture: c = !1 } = t;
  let i;
  const l = (m) => {
      const d = zs(m);
      d &&
        !i &&
        (d.addEventListener(e, s, { capture: c, passive: a }), (i = !0));
    },
    g = (m) => {
      const d = zs(m);
      d && i && (d.removeEventListener(e, s, c), (i = !1));
    };
  et(() => g(n)),
    Ut(() => g(n)),
    cI(() => l(n)),
    Dn(n) &&
      En(n, (m, d) => {
        g(d), l(m);
      });
}
const ht = j(!1);
function qP() {
  const e = j(!1),
    s = j(!1),
    t = j(!1),
    n = j(!1),
    a = j(!1),
    c = j(!1),
    i = j(!1),
    l = j(!1),
    g = j(!1),
    m = j(!1),
    d = j(!1),
    b = j(!1),
    v = j(!1),
    u = j(!1);
  async function _() {
    const f = await L(tn());
    if (f) {
      const {
        registerSMSState: w,
        registerState: A,
        IsOpenForgetPasswordSMS: D,
        IsOpenForgetPasswordEmail: C,
        isOpenCaptcha: R = "0",
        isOpenRegisterCaptcha: V = "0",
        isOpenGoogleVerifySms: X,
        isOpenGoogleVerifyEmail: M,
        registerEmailState: F,
        registerMobileState: Z,
        isOpenAddWithdrawSMS: G,
        isOpenAddWithdrawEmail: te,
        isOpenExternalAccount: ce,
        isInvitecode: be,
      } = f.data;
      (e.value = Number(w) !== 0),
        (s.value = Number(A) !== 0),
        (a.value = D === "1"),
        (c.value = C === "1"),
        (g.value = Number(X) !== 0),
        (m.value = Number(M) !== 0),
        (d.value = F === "1"),
        (b.value = Z === "1"),
        (t.value = Number(G) !== 0),
        (n.value = Number(te) !== 0),
        (i.value = R === "1"),
        (l.value = V === "1"),
        (v.value = ce === "1"),
        (u.value = be === "1");
    }
  }
  async function T() {
    const f = await L(FR());
    f && (ht.value = f.data.state == 1);
  }
  return {
    registerState: _,
    isShowSMS: e,
    isRegisterState: s,
    isOpenAddWithdrawSMSState: t,
    isOpenAddWithdrawEmailState: n,
    isSmSForgetPasswordSMSState: a,
    IsOpenForgetPasswordEmailState: c,
    getPointMallState: T,
    isShowPointMall: ht,
    hasOpenCaptcha: i,
    hasOpenRegisterCaptcha: l,
    isGoogleVerifySms: g,
    isGoogleVerifyEmail: m,
    isregisterEmailState: d,
    isregisterMobileState: b,
    isOpenExternalAccountState: v,
    isInvitecodeState: u,
  };
}
const pt = () => {
    let e = null;
    const s = j(!1),
      t = Yt(),
      n = (c) => {
        (s.value = !1),
          t.emit("changeIsGame"),
          clearInterval(e),
          (e = setTimeout(() => {
            (s.value = !0), c(), t.emit("changeIsGame");
          }, 1e4));
      },
      a = (c) => {
        (s.value = !1),
          clearInterval(e),
          c
            ? t.emit("changeIsGame")
            : setTimeout(() => {
                t.emit("changeIsGame");
              }, 1e4);
      };
    return (
      et(() => {
        (s.value = !1), clearInterval(e);
      }),
      { start: n, end: a, flag: s }
    );
  },
  ae = ue({
    isTaskState: !1,
    isOpenJackpotReward: !1,
    isOpenWashCode: !1,
    unJackpotCount: 0,
    isOpenActivityAward: !1,
    unWeeklyAwardCount: 0,
    unDayAwardCount: 0,
    isFinishUserGuidelines: !1,
    isFirstUserDayRequest: !1,
    isShowFirstSaveDialog: !1,
    FirstRechargeList: [],
    showReceiveDialog: !1,
    receiveAmount: 0,
    newbieGiftPackCount: 0,
    isOpenChampion: 0,
    newMemberGiftPackageSwitch: !1,
    firstDepositRewardCodeAmount: "",
    todayRewards: 0,
    totalRewards: 0,
  }),
  iI = {
    A1: { goPath: "Recharge", icon: "weeklyType1" },
    A2: { goPath: "Recharge", icon: "weeklyType1" },
    A3: { goPath: "Withdraw", icon: "weeklyType2" },
    A4: { goPath: "Withdraw", icon: "weeklyType2" },
    B5: { goPath: "home", homeType: "lottery", icon: "weeklyType3" },
    B6: { goPath: "home", homeType: "lottery", icon: "weeklyType3" },
    B7: { goPath: "home", homeType: "slot", icon: "weeklyType4" },
    B8: { goPath: "home", homeType: "slot", icon: "weeklyType4" },
    B9: { goPath: "home", homeType: "video", icon: "weeklyType5" },
    B10: { goPath: "home", homeType: "video", icon: "weeklyType5" },
    B11: { goPath: "home", homeType: "sport", icon: "weeklyType6" },
    B12: { goPath: "home", homeType: "sport", icon: "weeklyType6" },
    B13: { goPath: "home", homeType: "chess", icon: "weeklyType7" },
    B14: { goPath: "home", homeType: "chess", icon: "weeklyType7" },
    C15: { goPath: "PromotionShare", icon: "weeklyType8" },
    D16: { goPath: "DailySignIn", icon: "weeklyType9" },
    D17: { goPath: "SuperJackpot", icon: "weeklyType10" },
    D18: { goPath: "StrongBox", icon: "weeklyType11" },
    D19: { goPath: "Laundry", icon: "weeklyType12" },
  },
  cs = (e) => e === "1";
function gI() {
  async function e() {
    const d = await L(uR());
    ((d == null ? void 0 : d.code) === 0 || (d != null && d.data)) &&
      ((ae.isTaskState = cs(d.data.isTaskState)),
      (ae.isOpenJackpotReward = cs(d.data.isOpenJackpotReward)),
      (ae.isOpenWashCode = cs(d.data.isOpenWashCode)),
      (ae.isOpenActivityAward = cs(d.data.isOpenActivityAward)),
      (ae.unJackpotCount = d.data.unJackpotCount),
      (ae.unWeeklyAwardCount = d.data.unWeeklyAwardCount || 0),
      (ae.isFinishUserGuidelines = !d.data.isFinishUserGuidelines),
      (ae.isFirstUserDayRequest = d.data.isFirstUserDayRequest),
      (ae.newbieGiftPackCount = d.data.newbieGiftPackCount || 0),
      (ae.isOpenChampion = d.data.isOpenChampion),
      (ae.todayRewards = d.data.todayRewards || 0),
      (ae.totalRewards = d.data.totalRewards || 0),
      (ae.newMemberGiftPackageSwitch = cs(d.data.newMemberGiftPackageSwitch)));
  }
  async function s() {
    (await L(bR())).code == 0 && (ae.isFinishUserGuidelines = !1);
  }
  async function t() {
    (await L(wR())).code == 0 && (ae.isFirstUserDayRequest = !1);
  }
  async function n() {
    const d = await L(rR());
    d.code == 0 && (ae.isShowFirstSaveDialog = d.data);
  }
  async function a(d = !1) {
    if (!localStorage.getItem("token")) return;
    const b = await L(dR({ getAll: d }));
    if ((b == null ? void 0 : b.code) == 0) {
      let v = !1;
      return (
        (ae.FirstRechargeList = b.data.map(
          (u) => (v && (u.canReceive = !1), u.canReceive && (v = !0), u)
        )),
        new Promise((u) => {
          u(b.data);
        })
      );
    }
  }
  async function c(d) {
    const b = await L(lR({ taskId: d }));
    return (b == null ? void 0 : b.code) == 0
      ? ((ae.isShowFirstSaveDialog = !1),
        a(),
        new Promise((v) => {
          v(!0);
        }))
      : new Promise((v) => {
          v((b == null ? void 0 : b.data) || null);
        });
  }
  async function i() {
    const d = await L(yR());
    d.code == 0 && (ae.unDayAwardCount = (d == null ? void 0 : d.data) || 0);
  }
  const l = (d = !1) => {
      ae.isShowFirstSaveDialog = d;
    },
    g = $(() => ae),
    m = $(
      () =>
        g.value.unWeeklyAwardCount +
        g.value.unDayAwardCount +
        g.value.newbieGiftPackCount
    );
  return {
    ActiveTaskMap: iI,
    ActiveSotre: g,
    allUnAwardCount: m,
    setShowFirstSaveDialog: l,
    getActive: e,
    saveUserGuidelines: s,
    saveUserDayRequest: t,
    needPopupFirstRecharge: n,
    getFirstRechargeList: a,
    receiveFirstRechargeReward: c,
    getDailyAwardCount: i,
  };
}
const z = ue({
    prompt: !1,
    laundry: !1,
    invite: !1,
    firstSave: !1,
    oldUser: !1,
    appDownload: !1,
    rebateAmount: 0,
    returnAwards: 0,
    downAppRewardBonusAmount: 0,
    isARPay: !1,
    isAppDownloadPromptTextEnabled: !1,
    appForcedDownloadUrl: "",
    isLandingPageEnabled: !1,
    landingPageUrl: "",
    isAppForcedDownloadEnabled: !1,
    appDownloadPromptText: "",
    financePromptText: "",
    isFinancePromptTextEnabled: !1,
    rewardCenter: !1,
  }),
  Cs = new Map(),
  Ze = j(""),
  Ps = j([]),
  _t = new AbortController();
function zP() {
  const e = Zs(),
    { t: s } = Re(),
    t = Ae(),
    n = Te(),
    { ActiveSotre: a, setShowFirstSaveDialog: c } = gI(),
    i = (R) => () =>
      new Promise((V) => {
        Cs.set(R, V), (z[R] = !0);
      }),
    l = (R) => (V) => {
      const X = Cs.get(R);
      X &&
        (R === "prompt" && sessionStorage.setItem("promptShowCount", "1"),
        R === "firstSave" && a.value.isShowFirstSaveDialog
          ? (z[R] = !0)
          : (z[R] = !1),
        ["prompt", "laundry"].includes(R) &&
          sessionStorage.setItem(`pop_${R}`, "1"),
        X(),
        V === !0 && _t.abort());
    },
    g = l("invite"),
    m = () => {
      (Ze.value = Ps.value.splice(0, 1)[0] || {}),
        !Ze.value.title && l("prompt")();
    },
    d = () => !Ze.value.title,
    b = l("laundry"),
    v = l("firstSave"),
    u = l("oldUser"),
    _ = l("appDownload"),
    T = $(
      () =>
        ["activity", "home", "main", "wallet", "promotion"].includes(e.name) &&
        z.firstSave
    ),
    f = async () => {
      (await L(an())) && ((z.returnAwards = 0), je(s("receiveSuccess"))), u();
    },
    w = async () => {
      (await L(on())) &&
        ((z.downAppRewardBonusAmount = 0), je(s("receiveSuccess"))),
        _();
    },
    A = async () => {
      (z.firstSave = !1),
        (z.prompt = !1),
        (z.invite = !1),
        (z.laundry = !1),
        (z.oldUser = !1),
        (z.appDownload = !1),
        Cs.clear();
      const R = localStorage.getItem("token"),
        V = sessionStorage.getItem("pop_prompt"),
        X = sessionStorage.getItem("pop_laundry");
      let M = !1;
      if (R) {
        const G = (await L(FI())).data || {};
        c((G == null ? void 0 : G.needPopupFirstRecharge) || !1),
          (M = (G == null ? void 0 : G.isExistGrandAward) || !1),
          (z.rebateAmount =
            (G == null ? void 0 : G.children_Lv_RebateAmount_Yesterday) || 0),
          (z.returnAwards = (G == null ? void 0 : G.returnAwards) || 0),
          (z.downAppRewardBonusAmount =
            (G == null ? void 0 : G.downAppRewardBonusAmount) || 0),
          (z.isARPay = G == null ? void 0 : G.isARPay),
          (z.isAppDownloadPromptTextEnabled =
            G == null ? void 0 : G.isAppDownloadPromptTextEnabled),
          (z.appForcedDownloadUrl =
            G == null ? void 0 : G.appForcedDownloadUrl),
          (z.isLandingPageEnabled =
            G == null ? void 0 : G.isLandingPageEnabled),
          (z.landingPageUrl = G == null ? void 0 : G.landingPageUrl),
          (z.financePromptText = G == null ? void 0 : G.financePromptText),
          (z.isFinancePromptTextEnabled =
            G == null ? void 0 : G.isFinancePromptTextEnabled),
          sessionStorage.setItem("ar_pay", `${G != null && G.isARPay ? 1 : 0}`),
          Se() &&
            (G != null && G.isAppForcedDownloadEnabled
              ? Ve({
                  title: s("tips"),
                  message: G == null ? void 0 : G.appDownloadPromptText,
                  confirmButtonText: s("downloadAPP"),
                  cancelButtonText: s("cancel"),
                  overlayStyle: { zIndex: 9999999 },
                  className: "isAppForcedDownloadEnabled-dialog",
                  beforeClose: (te, ce) => {
                    te === "confirm"
                      ? Ss("downloadAPK", { url: z.appForcedDownloadUrl })
                      : ce();
                  },
                })
              : G != null &&
                G.isAppDownloadPromptTextEnabled &&
                ut({
                  title: s("tips"),
                  message: G == null ? void 0 : G.appDownloadPromptText,
                  overlayStyle: { zIndex: 9999999 },
                  className: "isAppForcedDownloadEnabled-dialog",
                  confirmButtonText: s("downloadAPP"),
                  cancelButtonText: s("cancel"),
                }).then((te) => {
                  Ss("downloadAPK", { url: z.appForcedDownloadUrl });
                })),
          e.name == "home" && !V && (await D());
      }
      const F = [];
      !V && R && Ze.value && e.name == "home" && F.push(i("prompt")),
        a.value.isShowFirstSaveDialog && F.push(i("firstSave")),
        t.getUserInfo.isPopupCommissionSwitch == "1" &&
          !V &&
          z.rebateAmount > 0 &&
          R &&
          F.push(i("invite")),
        !X && R && M && F.push(i("laundry")),
        z.returnAwards > 0 && F.push(i("oldUser")),
        n.isOpenDownAppRewardSwitch &&
          z.downAppRewardBonusAmount > 0 &&
          R &&
          F.push(i("appDownload")),
        xn(F, { signal: _t.signal });
    };
  async function D() {
    const R = await L(IR());
    R.data && ((Ps.value = R.data), (Ze.value = Ps.value.splice(0, 1)[0]));
  }
  return {
    store: z,
    closeInvite: g,
    closePrompt: m,
    closeLaundry: b,
    closeFirstSave: v,
    showFirstSave: T,
    closOldPrompt: u,
    onReturnAwards: f,
    onAppDownloadAwards: w,
    openAll: A,
    promptContent: Ze,
    downAppTip: async (R) => {
      if (Se() || !z.isFinancePromptTextEnabled) return fe.push({ name: R });
      De(),
        ut({ title: s("tips"), message: z.financePromptText })
          .then((V) => {})
          .catch((V) => {});
    },
    beforeClosePrompt: d,
  };
}
const Ds = j();
function KP() {
  const { t: e } = Re(),
    s = Ce(),
    t = j({}),
    n = j({}),
    a = j([]),
    c = j([]),
    i = j([]),
    l = [
      { key: 1, title: e("ongoing") },
      { key: 0, title: e("cpsTip2") },
      { key: 2, title: e("ended") },
    ],
    g = {
      1: e("bankCard"),
      2: "UPI",
      3: "USDT",
      4: "E-Wallet",
      5: "PIX",
      6: "WavePay",
      7: "TRX",
      8: "KBZPay",
      10: "USDT2",
      20: "NewUPI",
    };
  ue({
    30: {
      typeId: 30,
      class: "wingo",
      title: "Win Go 30s",
      path: "WinGo",
      icon: "Win Go",
    },
    1: {
      typeId: 1,
      class: "wingo",
      title: "Win Go 1Min",
      path: "WinGo",
      icon: "Win Go",
    },
    2: {
      typeId: 2,
      class: "wingo",
      title: "Win Go 3Min",
      path: "WinGo",
      icon: "Win Go",
    },
    3: {
      typeId: 3,
      class: "wingo",
      title: "Win Go 5Min",
      path: "WinGo",
      icon: "Win Go",
    },
    4: {
      typeId: 4,
      class: "wingo",
      title: "Win Go 10Min",
      path: "WinGo",
      icon: "Win Go",
    },
    5: { typeId: 5, class: "d5", title: "5D 1Min", path: "5D", icon: "5D" },
    6: { typeId: 6, class: "d5", title: "5D 3Min", path: "5D", icon: "5D" },
    7: { typeId: 7, class: "d5", title: "5D 5Min", path: "5D", icon: "5D" },
    8: { typeId: 8, class: "d5", title: "5D 10Min", path: "5D", icon: "5D" },
    9: { typeId: 9, class: "k3", title: "K3 1Min", path: "K3", icon: "K3" },
    10: { typeId: 10, class: "k3", title: "K3 3Min", path: "K3", icon: "K3" },
    11: { typeId: 11, class: "k3", title: "K3 5Min", path: "K3", icon: "K3" },
    12: { typeId: 12, class: "k3", title: "K3 10Min", path: "K3", icon: "K3" },
    13: {
      typeId: 13,
      class: "trx",
      title: "Trx Win Go 1Min",
      path: "WinTrx",
      icon: "Trx Win Go",
    },
    14: {
      typeId: 14,
      class: "trx",
      title: "Trx Win Go 3Min",
      path: "WinTrx",
      icon: "Trx Win Go",
    },
    15: {
      typeId: 15,
      class: "trx",
      title: "Trx Win Go 5Min",
      path: "WinTrx",
      icon: "Trx Win Go",
    },
    16: {
      typeId: 16,
      class: "trx",
      title: "Trx Win Go 10Min",
      path: "WinTrx",
      icon: "Trx Win Go",
    },
  });
  const m = async () => {
      const w = await L(AR());
      w != null &&
        w.data &&
        ((t.value = w == null ? void 0 : w.data),
        (Ds.value = w.serviceNowTime));
    },
    d = async (w) => {
      var D, C, R;
      const A = await L(hR({ championId: w }));
      if (A != null && A.data) {
        if (
          ((n.value = A == null ? void 0 : A.data),
          (Ds.value = A.serviceNowTime),
          ((D = n.value) == null ? void 0 : D.vendorCode) == "ARLottery")
        )
          return (i.value =
            (C = n.value) == null
              ? void 0
              : C.subGames.map(
                  (V) => (
                    (V.vendorCode = "ARLottery"),
                    (V.title = V.gameCode.replace("_", " ")),
                    V
                  )
                ));
        (R = n.value) != null &&
          R.vendorId &&
          v(n.value.vendorId, n.value.subGameName);
      }
    },
    b = async (w) => {
      const A = await L(_R({ championId: w }));
      A != null && A.data && (a.value = A == null ? void 0 : A.data);
    },
    v = async (w, A) => {
      var R;
      const C = await L(TR({ type: w, gameNameEn: A || "", isMiniGame: !1 }));
      C != null &&
        C.data &&
        (c.value =
          (R = C == null ? void 0 : C.data) == null ? void 0 : R.gameLists);
    },
    { start: u, end: _, flag: T } = pt();
  function f(w) {
    if (!Ae().token) {
      s.push({ name: "login" });
      return;
    }
    Ve({
      title: e("tips"),
      message: e("tipsPlayGame"),
      cancelButtonText: e("cancel"),
      showCancelButton: !0,
    }).then(async () => {
      var R;
      u(() => {
        Ve({ title: "", message: e("gameLoadTimeOut") }).then(() => {
          s.push({ path: "/" });
        });
      });
      const D = {
        vendorCode:
          w.hasOwnProperty("vendorCode") && w.vendorCode
            ? w.vendorCode
            : Number(w.vendorId) || Number(w.slotsTypeID),
        gameCode: w.gameID,
        returnUrl: location.origin,
      };
      w.hasOwnProperty("vendorCode")
        ? (D.deviceType = De(!1))
        : (D.phonetype = De());
      const C = await L(gt(D));
      if (C && !T.value)
        if ((!T.value && _(!0), Xe()))
          ms({ ...((C == null ? void 0 : C.data) || {}), title: w.gameNameEn });
        else if (Se())
          ts("game", {
            ...((C == null ? void 0 : C.data) || {}),
            gameName: w.gameNameEn,
          });
        else
          return Ye
            ? ns(C == null ? void 0 : C.data, 1)
            : s.push({
                name: "game",
                query: {
                  url: nt(
                    (R = C == null ? void 0 : C.data) == null ? void 0 : R.url
                  ),
                  vendorCode: D.vendorCode,
                },
              });
      else {
        !T.value && _(!0);
        return;
      }
      !T.value && _();
    });
  }
  return {
    tabList: l,
    championEntranceV: m,
    championEntranceVO: t,
    serviceNowTime: Ds,
    getChampionTaskDetailV: d,
    championTaskDetailVO: n,
    getTop10UserList: b,
    top10UserListVO: a,
    thirdGameListVO: c,
    onItemClick: f,
    type: g,
    arLotteryList: i,
  };
}
function XP() {
  const e = Ce(),
    { t: s } = Re(),
    t = ue({
      amount: 0,
      count: 0,
      rotateCount: 0,
      turntableList: [],
      turntableRecord: [],
      taskList: [],
      vipRating: [],
      bindingType: -1,
      result: null,
      dialog: !1,
    }),
    n = j({ pageNo: 1, pageSize: 10 }),
    a = (f) => {
      const w = Number(f);
      return w < 1e3
        ? w.toString()
        : w < 1e6
        ? fs(Math.floor((w / 1e3) * 100) / 100, "", f.includes(".") ? 2 : 0) +
          "k"
        : fs(Math.floor((w / 1e6) * 100) / 100, "", 2) + "M";
    },
    c = {
      1: s("bankCard"),
      2: "UPI",
      3: "USDT",
      4: "E-Wallet",
      5: "PIX",
      6: "WavePay",
      7: "TRX",
      8: "KBZPay",
      10: "USDT2",
      20: "NewUPI",
    },
    i = j(),
    l = j(),
    g = $(() =>
      t.turntableList.map((f) => {
        if (f.rewardType === 1) {
          const w = f.rewardSetting + "";
          return {
            fonts: [
              {
                text: `${
                  w.length >= 9 ? a(w) : fs(w, "", w.includes(".") ? 2 : 0)
                }`,
                lineClamp: 2,
                fontColor: "#fff",
                wordWrap: !0,
                top: "30%",
                fontSize: "12px",
              },
            ],
            imgs: f.prizePicturesUrl
              ? [{ src: f.prizePicturesUrl, top: "45%", width: "55%" }]
              : [],
          };
        }
        return {
          fonts: [
            {
              text: f.rewardSetting,
              lineClamp: 2,
              fontColor: "#fff",
              fontSize: "12px",
              wordWrap: !0,
              top: "30%",
            },
          ],
          imgs: f.prizePicturesUrl
            ? [{ src: f.prizePicturesUrl, top: "45%", width: "50%" }]
            : null,
        };
      })
    ),
    m = async () => {
      const f = await L(SR());
      f && (t.amount = f.data || 0);
    },
    d = async () => {
      var w, A;
      const f = await L(jR());
      f &&
        ((t.count = ((w = f.data) == null ? void 0 : w.sumRotateNum) || 0),
        (t.rotateCount =
          ((A = f.data) == null ? void 0 : A.surplusRotateNum) || 0));
    },
    b = async () => {
      const f = await L($R());
      if (f) {
        t.turntableList = f.data.rewardList;
        const w = f.data.vipRating.split(",");
        (t.vipRating = w.map((A) => `Vip${A}`)),
          (t.taskList = f.data.taskList),
          (t.bindingType = f.data.bindingType);
      }
    },
    v = async () => {
      await Promise.all([m(), d(), b()]);
    },
    u = st(async () => {
      const f = await BR();
      f.code === 0
        ? (i.value.play(),
          setTimeout((w) => {
            t.result = f.data;
            const A = t.turntableList.findIndex(
              (D) => D.rewardSetting === f.data.rewardSetting
            );
            if (A == -1) return i.value.stop(0);
            i.value.stop(A);
          }, 1500))
        : [904].includes(f.msgCode)
        ? Fe(s("turntableTip", [c[f.data.bindingType]]))
        : us(f);
    }, 600),
    _ = async () => {
      t.result &&
        ((t.rotateCount = t.result.surplusRotateNum || 0),
        (t.dialog = !0),
        l.value && l.value.resetRefresh());
    };
  function T() {
    e.go(-1);
  }
  return {
    store: t,
    prizes: g,
    myLucky: i,
    bindingTypes: c,
    recordQuery: n,
    pull: l,
    getTurntabl: v,
    getTurntablInfo: b,
    getTurntablAmount: m,
    onStart: u,
    onEnd: _,
    onClick: T,
  };
}
function JP() {
  const { t: e } = Re(),
    s = ue({
      firstDepositConfig: {
        activityStartDate: "",
        bonusLimit: 0,
        firstDeposiSendBonust: 0,
        firstDepositTimeLiness: "",
      },
      giftPackConfigList: [],
      rewardRecordList: [],
    }),
    t = $(() => {
      var v;
      return (v = s.firstDepositConfig) == null ? void 0 : v.activityStartDate;
    }),
    n = $(() => {
      var v;
      return (v = s.firstDepositConfig) == null
        ? void 0
        : v.firstDepositTimeLiness;
    }),
    a = $(() => {
      var v;
      return (v = s.firstDepositConfig) == null ? void 0 : v.bonusLimit;
    }),
    c = $(() => {
      var v;
      return (v = s.firstDepositConfig) == null
        ? void 0
        : v.firstDeposiSendBonust;
    }),
    i = $(() => s.giftPackConfigList || []),
    l = $(() => s.rewardRecordList || []),
    g = async () => {
      const v = await L(GR());
      v &&
        ((s.firstDepositConfig = v.data.firstDepositConfig),
        (s.giftPackConfigList = v.data.giftPackConfigAwardList),
        (s.rewardRecordList = v.data.newUserRewardRecordList));
    };
  return {
    store: s,
    time: t,
    firstDepositTimeLiness: n,
    bonusLimit: a,
    firstDeposiSendBonust: c,
    giftPackConfigList: i,
    rewardRecordList: l,
    onApplyFirstCharge: async () => {
      (await L(LR({}))) && (je(e("applySuccess")), await g());
    },
    onReceive: async (v) => {
      (await L(Gt({ orderId: v, optType: 2 }))) &&
        (je(e("receiveSuccess")), await g());
    },
    onApply: async (v) => {
      (await L(Gt({ orderId: v, optType: 1 }))) &&
        (je(e("applySuccess")), await g());
    },
    getConfig: g,
  };
}
const rI = {
    login: "Login",
    register: "Register",
    purchase: "Purchase",
    first_purchase: "FirstPurchase",
    recharge: "Recharge",
  },
  lI = {
    login: "FbLogin",
    register: "CompleteRegistration",
    recharge: "AddToCart",
    first_purchase: "AddToCart",
    purchase: "Purchase",
  },
  dI = {
    login: "Lead",
    register: "SignUp",
    recharge: "AddToCart",
    first_purchase: "AddToCart",
    purchase: "Purchase",
  },
  rs = On("gtag"),
  Qt = () => "dataLayer" in window,
  uI = () => "fbq" in window,
  mI = () => "rdt" in window,
  wI = {}.VITE_BAN_FBSELF === "1";
rs.on((e, s) => {
  Qt() && window.gtag("event", e, s),
    uI() &&
      (wI || window.fbq("trackCustom", rI[e], s),
      window.fbq("track", lI[e], s)),
    mI() && window.rdt("track", dI[e]);
  try {
    if (
      (lT() ? dT(e, s) : Se() && Ss(e, s),
      !window.android || !window.android.onEvent)
    )
      return;
    s
      ? window.android.onEvent(e, JSON.stringify(s))
      : window.android.onEvent(e);
  } catch {}
});
function Zt() {
  return {
    onTriggerLogin: (c) => {
      rs.emit("login", { content_name: c });
    },
    onTriggerRegister: (c) => {
      rs.emit("register", { content_name: c });
    },
    onTriggerPurchase: (c, i) => {
      rs.emit(i ? "first_purchase" : "purchase", {
        currency: "₹",
        value: 0,
        content_name:
          (localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo")).userId
            : "") || "",
      });
    },
    onTriggerRecharege: (c) => {
      rs.emit("recharge", {
        currency: "₹",
        value: c.amount || 0,
        content_name:
          (localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo")).userId
            : "") || "",
      });
    },
    onTriggerGoogle: (c, i) => {
      Qt() && (i ? window.gtag("event", c, i) : window.gtag("event", c));
    },
  };
}
const Es = j(),
  YP = () => {
    const { t: e } = Re(),
      s = Ce(),
      t = $(() => {
        var g;
        return (
          ((g = Es.value) == null ? void 0 : g.walletActivationStatus) === 1
        );
      }),
      n = async (g, m) => {
        var b, v;
        Ne({ message: e("loading") + "...", forbidClick: !0 });
        const d = { returnUrl: "https://" + window.location.host + "/#/main" };
        if (m === "RSN") {
          const u = await L(ZR(d));
          (u == null ? void 0 : u.code) === 0 &&
            (window.location.href =
              ((b = u == null ? void 0 : u.data) == null
                ? void 0
                : b.walletActivationPageUrl) +
              "&memberId=" +
              u.data.memberId +
              "&merchantCode=" +
              u.data.merchantCode +
              "&timestamp=" +
              u.data.timestamp);
        } else {
          const u = await L(YR(d));
          (u == null ? void 0 : u.code) === 0 &&
            (window.location.href =
              ((v = u == null ? void 0 : u.data) == null
                ? void 0
                : v.walletActivationPageUrl) +
              "&memberId=" +
              u.data.memberId +
              "&merchantCode=" +
              u.data.merchantCode +
              "&timestamp=" +
              u.data.timestamp);
        }
        es();
      };
    return {
      getInfo: async () => {
        const g = await L(JR({ ip: localStorage.getItem("ARIP") }));
        g.code === 0 && (Es.value = g.data);
      },
      arWallet: Es,
      goWallet: async (g, m) => {
        var b, v;
        Ne({ message: e("loading") + "...", forbidClick: !0 });
        const d = { returnUrl: "https://" + window.location.host + "/#/main" };
        if (m === "RSN") {
          const u = await L(eC(d));
          if ((u == null ? void 0 : u.code) === 0) {
            let _ =
              (b = u == null ? void 0 : u.data) == null
                ? void 0
                : b.walletAccessUrl;
            window.location.href = _;
          }
        } else {
          const u = await L(QR(d));
          if ((u == null ? void 0 : u.code) === 0) {
            let _ =
              (v = u == null ? void 0 : u.data) == null
                ? void 0
                : v.walletAccessUrl;
            window.location.href = _;
          }
        }
        es();
      },
      goActive: n,
      activeBind: async (g, m) => {
        const d = { phone: g.phone, smsvCode: g.smsvCode },
          b = await L(L(VI(d)));
        (b == null ? void 0 : b.code) === 0 && (await n());
      },
      onTradRule: () => {
        let g = "https://arwwallet.com";
        s.push({ name: "ArbRule", query: { url: g } });
      },
      isArWalletActive: t,
    };
  };
function QP() {
  const e = Ce(),
    s = ue({
      config: {
        configAmount: 0,
        effectiveQuantity: 0,
        invitationCode: "",
        numberOfInvitations: 0,
        totalAmount: 0,
        days: 0,
        items: [],
      },
    }),
    t = j({ pageNo: 1, pageSize: 10 }),
    n = j([]),
    a = $(() => s.config.configAmount),
    c = $(() => s.config.totalAmount),
    i = $(
      () =>
        `${location.origin}/#/register?invitationCode=${
          s.config.invitationCode || ""
        }`
    ),
    l = $(() => s.config.invitationCode || ""),
    g = $(() => s.config.effectiveQuantity),
    m = $(() => s.config.numberOfInvitations),
    d = $(() => s.config.items.filter((A) => A.type === 1)),
    b = $(() => s.config.items.filter((A) => A.type === 2)),
    v = $(() => s.config.items.filter((A) => A.type === 3)),
    u = $(() => s.config.items),
    _ = $(() => s.config.days || "0");
  return {
    getInfo: async () => {
      const A = await L(MR());
      A && (s.config = A.data);
    },
    goBack: () => {
      e.go(-1);
    },
    goInvitation: async () => {
      await e.push({ name: "TeamPartner-Invitation" });
    },
    amount: a,
    invitationLink: i,
    totalAmount: c,
    invitationCode: l,
    effectiveQuantity: g,
    numberOfInvitations: m,
    query: t,
    partnerList: n,
    days: _,
    firstItem: d,
    secondItem: b,
    thirdItem: v,
    allItem: u,
  };
}
const vs = j({ canIUse: !1, download: null }),
  xs = j(null),
  is = j(!0),
  bI = () => {
    let e = navigator.userAgent.toLowerCase(),
      s = NT();
    return (
      (s = s == null ? void 0 : s.toLowerCase()),
      /[\u4e00-\u9fa5]+/.test(s) && (s = "vxth"),
      e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1
        ? navigator.standalone
          ? (is.value = !1)
          : (is.value = !0)
        : window.matchMedia("(display-mode: standalone)").matches
        ? (is.value = !1)
        : (is.value = !0),
      window.addEventListener(
        "beforeinstallprompt",
        (t) => {
          t.preventDefault(), (xs.value = t), (vs.value.canIUse = !0);
        },
        { once: !0 }
      ),
      (vs.value.download = function () {
        xs.value.prompt().then((t) => {
          t.outcome === "accepted"
            ? (vs.value.canIUse = !1)
            : location.reload();
        });
      }),
      { PWA: vs, deferredPrompt: xs, isShowDwa: is }
    );
  },
  Be = ue({
    banner: [],
    winInfoList: [],
    rankList: [],
    gameTypeList: [],
    allGameList: void 0,
    slotsGame: [],
    videoGame: [],
    iosDialog: !1,
  }),
  ZP = () => {
    const e = Te(),
      s = Ae(),
      t = s.getUserInfo,
      { start: n, end: a, flag: c } = pt(),
      { localStore: i } = ot(),
      { t: l } = Re();
    bI();
    const g = j(!0),
      m = Mn("show-pwa-download", !0),
      d = $(() => e.getIsShowLotteryDragon),
      b = $(() => e.getIsCanAppDownload),
      v = $(() => e.getIsShowAppDownloadIcon),
      u = $(() => e.getProjectLogo),
      _ = $(() => Be.banner),
      T = $(() => Be.winInfoList),
      f = $(() => e.getWebIco),
      w = $(() => e.getWebSiteUrl),
      A = $(() => e.getHeadLogo),
      D = $(() => e.getIsOpenInvitedWheel),
      C = $(() => !(t.allowNoRechargeGame === "1" || t.canDirectToGame));
    function R() {
      const h = at();
      (g.value = !(s.getUserInfo.unRead > 0)), h.setReadState(g.value);
    }
    const V = async () => {
      const h = await L(kR());
      h &&
        ((Be.banner = h.data),
        Be.banner.length === 0 &&
          Be.banner.push({ bannerUrl: ss("home", "banner"), url: "" }));
    };
    async function X() {
      fe.push({ path: "/downloadCenter" });
    }
    async function M() {
      const [h, I] = await DT(pn());
      if (h) Fe({ message: h.msg, wordBreak: "break-word" });
      else if (I) {
        Be.winInfoList = I.dataList || [];
        const q = I.penarikanList || [];
        q.length > 0 && (Be.rankList = q);
      }
    }
    const F = async () => {
        const h = await L(cn());
        h && (Be.gameTypeList = h.data || []);
      },
      Z = async () => {
        const h = await L(gn()),
          I = ["slot", "video", "chess", "sport", "lottery"];
        if (h) {
          let q = {};
          for (const [E, J] of Object.entries(h.data)) {
            let se = E.toLocaleLowerCase();
            E !== "popular" && I.includes(se)
              ? (q[se] = J.filter((ge) => ge.state === 1))
              : (q[se] = J);
          }
          Be.allGameList = q;
        }
      },
      G = async () => {
        const h = await L(rn());
        h && (Be.slotsGame = h.data);
      },
      te = async () => {
        const h = await L(ln());
        h && (Be.videoGame = h.data);
      },
      ce = (h) => {
        fe.push({ name: "AllGames", query: { type: h } });
      },
      be = (h, I) => {
        sessionStorage.setItem("gameType", JSON.stringify("chess")),
          sessionStorage.setItem("clickedItem", JSON.stringify(h)),
          sessionStorage.setItem("slotGamesList", JSON.stringify(I)),
          fe.push({ name: "AllOnlineGames" });
      },
      Ie = (h) => (h ? h.hasOwnProperty("vendorCode") && h.vendorCode : !1),
      Ee = (h) => {
        if (!h) return !1;
        const I = h.hasOwnProperty("gameCode");
        return h.gameCode ? I && h.gameCode : e.getIsOpenArLottery;
      },
      ie = async (h, I, q = !0) => {
        const E = (x) => {
            const U = x.split("_");
            return { gameCode: x, lottery: U[0] };
          },
          J = new URL(h),
          se = J.searchParams,
          ge = se.get("Token"),
          y = se.get("Skin"),
          P = se.get("Lang");
        if (
          (i.set("ar_token", ge),
          i.set("ar_api", $s("api", J.origin)),
          i.set("ar_api_json", $s("draw", J.origin)),
          i.set("ar_lang", P || "en"),
          i.set("ar_skin", y),
          q)
        ) {
          const x = E(I.gameCode);
          await fe.push({ name: x.lottery, query: x });
        }
      },
      B = async (h) => {
        var J, se;
        n(() => {
          Ve({ title: "", message: l("gameLoadTimeOut") }).then(() => {
            fe.push({ path: "/" });
          });
        });
        let I = {
          gameCode: h.gameCode || h.gameID,
          vendorCode: Ie(h)
            ? h.vendorCode
            : Number(h.vendorId) || Number(h.slotsTypeID),
          returnUrl: location.origin,
        };
        Ie(h) ? (I.deviceType = De(!1)) : (I.phonetype = De());
        const q = localStorage.getItem("lotteryLoginUrl");
        if (["ARLottery"].includes(I.vendorCode) && q) {
          !c.value && a(!0), s.notifyTransfer(), await ie(q, I);
          return;
        }
        const E = await L(gt({ ...I }));
        if (E && !c.value) {
          if ((!c.value && a(!0), ["ARLottery"].includes(I.vendorCode))) {
            await ie(
              (J = E == null ? void 0 : E.data) == null ? void 0 : J.url,
              I
            );
            return;
          }
          if (Xe())
            ms({
              ...((E == null ? void 0 : E.data) || {}),
              title: h.slotsName || h.gameNameEn || "",
            });
          else if (Se())
            ts("game", {
              ...((E == null ? void 0 : E.data) || {}),
              gameName: h.slotsName || h.gameNameEn || "",
            });
          else {
            if (
              Ye ||
              ["Wickets9", "CMD", "IM", "SaBa", "ARLottery"].includes(
                I.vendorCode
              )
            ) {
              if (I.vendorCode == "PG") return ns(E == null ? void 0 : E.data);
              const ge = ns(E == null ? void 0 : E.data, 1),
                y = setInterval(() => {
                  ge != null &&
                    ge.closed &&
                    (clearInterval(y), s.notifyARGame(!0));
                }, 500);
              return;
            }
            return fe.push({
              name: "game",
              query: {
                url: nt(
                  (se = E == null ? void 0 : E.data) == null ? void 0 : se.url
                ),
                vendorCode: I.vendorCode,
              },
            });
          }
        } else {
          !c.value && a(!0);
          return;
        }
      },
      k = st(B, 500),
      H = async () => {
        const h = localStorage.getItem("lotteryLoginUrl");
        if (e.getIsOpenArLottery) {
          if (!h) {
            ds({ message: l("GameMaintenance"), type: "fail" });
            return;
          }
          await s.notifyTransfer(),
            await ie(h, {}, !1),
            await fe.push({ name: "SaasChangLong" });
          return;
        }
        fe.push({ name: "AllLotteryGames-ChangLong" });
      },
      N = async (h) => {
        if (!s.token) {
          fe.push({ name: "login" });
          return;
        }
        if (["ARLottery"].includes(h.vendorCode)) return await k(h);
        Ve({
          title: l("tips"),
          message: l("tipsPlayGame"),
          cancelButtonText: l("cancel"),
          showCancelButton: !0,
        }).then(async () => {
          await B(h);
        });
      },
      S = (h) => {
        W(h, N);
      },
      W = async (h, I) => {
        if (!h.vendorCode) return I(h);
        if (C.value) {
          const q = await L(PR()),
            {
              data: {
                allowNoRechargeGame: E,
                userRechargeTimes: J,
                lowestRechargeAmountToGame: se,
                userRechargeAmount: ge,
                canDirectToGame: y,
              },
            } = q;
          if (E == "1" || y) return I(h);
          if (Number(se) && Number(se) > ge)
            return Ve({
              title: l("tips"),
              message: `${l("gameT", [fs(se)])}`,
              showCancelButton: !0,
            })
              .then(() => {
                fe.push({ name: "Recharge" });
              })
              .catch(() => {});
          if (Number(se) === 0 && J === 0)
            return Ve({
              title: l("tips"),
              message: `${l("code1003")}
${l("rechargeNow")}`,
              showCancelButton: !0,
            })
              .then(() => {
                fe.push({ name: "Recharge" });
              })
              .catch(() => {
                e.getIsOpenArLottery || ((h.id || h.typeId) && I(h));
              });
          I(h);
        } else I(h);
      };
    return {
      getBannerApi: V,
      onDown: X,
      getMessagesData: R,
      getWinInfoDetail: M,
      getGameType: F,
      getAllGame: Z,
      onItemClick: S,
      getSlotList: G,
      getVideonChildGame: te,
      openThirdGame: N,
      isRead: g,
      getBanner: _,
      getWinInfo: T,
      showChanglong: d,
      isAppDownload: b,
      isAppDownloadIcon: v,
      showPWA: m,
      projectIcon: u,
      homeState: Be,
      gol2: ce,
      gol2chess: be,
      downloadIcon: f,
      webSiteUrl: w,
      isAlowGame: W,
      isSassLotteryGame: Ee,
      goSassLotteryGame: ie,
      goChangLong: H,
      headLogo: A,
      isOpenInvitedWheel: D,
    };
  },
  vI = "/assets/png/popular-044514e1.png",
  yI = "/assets/png/lottery-c0a9176b.png",
  fI = "/assets/png/video-c9dce622.png",
  AI = "/assets/png/slot-bf07af03.png",
  hI = "/assets/png/sport-ac79bf87.png",
  _I = "/assets/png/chess-9c4d1dff.png",
  SI = "/assets/png/fish-a70df76d.png",
  jI = "/assets/png/flash-eac62fa4.png",
  K = ue({
    gameList: [],
    categoryList: [],
    active: 0,
    allGame: null,
    loading: !1,
    electron: [],
    video: [],
    imgMap: new Map(),
  }),
  $I = {
    1: ["popular"],
    2: ["sport", "chess", "video"],
    3: ["lottery"],
    4: ["slot"],
    5: ["flash", "fish"],
  },
  en = Symbol("GAME_PROVIDER_KEY");
function eD() {
  return Un(en, {});
}
function sD() {
  const e = Ce(),
    { start: s, end: t, flag: n } = pt(),
    { t: a } = Re(),
    c = Ae(),
    { localStore: i } = ot(),
    l = Te(),
    g = {
      popular: {
        isShow: !0,
        key: "popular",
        title: a("hot"),
        image: vI,
        img: "",
        state: 1,
      },
      video: { isShow: !0, key: "video", title: a("live"), image: fI, img: "" },
      slot: {
        isShow: !0,
        key: "slot",
        title: a("electronic"),
        image: AI,
        img: "",
      },
      sport: {
        isShow: !0,
        key: "sport",
        title: a("sport"),
        image: hI,
        img: "",
      },
      chess: {
        isShow: !0,
        key: "chess",
        title: a("chess"),
        image: _I,
        img: "",
      },
      fish: {
        isShow: !0,
        key: "fish",
        title: a("fishing"),
        image: SI,
        img: "",
      },
      flash: {
        isShow: !0,
        key: "flash",
        title: a("miniGame"),
        image: jI,
        img: "",
      },
      lottery: {
        isShow: !0,
        key: "lottery",
        title: a("lottery"),
        image: yI,
        img: "",
      },
    },
    m = $(() =>
      K.categoryList.map((S) => {
        var I;
        const W = (I = S.categoryCode) == null ? void 0 : I.toLowerCase(),
          h = g[W] || {};
        return Object.assign(h, { img: S.categoryImg });
      })
    ),
    d = j(0),
    b = $(() => m.value.map((S) => S.key)),
    v = $(() => K.allGame),
    u = $(() => K.electron),
    _ = $(() => K.video),
    T = $(() => m.value[d.value]),
    f = $(() => {
      var S;
      return ((S = m.value[d.value]) == null ? void 0 : S.key) || "";
    }),
    w = $(() => {
      var S;
      return ((S = K.allGame) == null ? void 0 : S[f.value]) || [];
    }),
    A = $(() =>
      K.allGame
        ? K.allGame
          ? K.allGame.popular
            ? K.allGame.popular[0]
            : []
          : []
        : []
    ),
    D = $(() =>
      K.allGame ? (K.allGame.popular ? K.allGame.popular[1] : []) : []
    ),
    C = $(() => (K.allGame ? K.allGame.lottery || [] : [])),
    R = $(() => K.loading),
    V = $(() => {
      let S = -1;
      for (const [W, h] of Object.entries($I))
        h.includes(f.value) && (S = Number(W));
      return S;
    }),
    X = new Map(
      [
        { value: 1, path: "WinGo", rule: "winGoRule" },
        { value: 3, path: "5D", rule: "d5Rule" },
        { value: 2, path: "K3", rule: "k3Rule" },
        { value: 4, path: "WinTrx", rule: "trxRule" },
        { value: 5, path: "XoSo", rule: "xosoRule" },
        { value: 6, path: "XoSo", rule: "xosoRule" },
        { value: 7, path: "Binguo", rule: "" },
        { value: 8, path: "4D", rule: "" },
        { value: 9, path: "MotoRace", rule: "MotoRaceRule" },
      ].map((S) => [S.value, S])
    ),
    M = (S) => {
      d.value = S;
    },
    F = (S) => {
      if (!S) return !1;
      const W = S.hasOwnProperty("gameCode");
      return S.gameCode ? W && S.gameCode : l.getIsOpenArLottery;
    },
    Z = async (S, W, h = !0) => {
      const I = (ge) => {
          const y = ge.split("_");
          return { gameCode: ge, lottery: y[0] };
        },
        q = new URL(S),
        E = q.searchParams,
        J = E.get("Token"),
        se = E.get("Skin");
      if (
        (i.set("ar_token", J),
        i.set("ar_api", $s("api", q.origin)),
        i.set("ar_api_json", $s("draw", q.origin)),
        i.set("ar_skin", se),
        h)
      ) {
        const ge = I(W.gameCode);
        await e.push({ name: ge.lottery, query: ge });
      }
    },
    G = async (S) => {
      var q;
      s(() => {
        Ve({ title: "", message: a("gameLoadTimeOut") }).then(() => {
          e.push({ path: "/" });
        });
      });
      let W = {
        gameCode: S.gameCode || S.gameID,
        vendorCode:
          S.hasOwnProperty("vendorCode") && S.vendorCode
            ? S.vendorCode
            : Number(S.vendorId) || Number(S.slotsTypeID),
        returnUrl: location.origin,
      };
      S.hasOwnProperty("vendorCode")
        ? (W.deviceType = De(!1))
        : (W.phonetype = De());
      const h = localStorage.getItem("lotteryLoginUrl");
      if (["ARLottery"].includes(W.vendorCode) && h) {
        !n.value && t(!0), c.notifyTransfer(), await Z(h, W);
        return;
      }
      const I = await L(gt({ ...W }));
      if (I && !n.value) {
        if ((!n.value && t(!0), ["ARLottery"].includes(W.vendorCode))) {
          await Z(I.data.url, W);
          return;
        }
        if (Xe())
          ms({ ...((I == null ? void 0 : I.data) || {}), title: S.gameNameEn });
        else if (Se())
          ts("game", {
            ...((I == null ? void 0 : I.data) || {}),
            gameName: S.slotsName || S.gameNameEn || "",
          });
        else {
          if (
            Ye ||
            ["Wickets9", "CMD", "IM", "SaBa", "ARLottery"].includes(
              W.vendorCode
            )
          ) {
            const E = ns(I == null ? void 0 : I.data, 1),
              J = setInterval(() => {
                E != null && E.closed && (clearInterval(J), c.notifyARGame(!0));
              }, 500);
            return;
          }
          return e.push({
            name: "game",
            query: {
              url: nt(
                (q = I == null ? void 0 : I.data) == null ? void 0 : q.url
              ),
              vendorCode: W.vendorCode,
            },
          });
        }
      } else {
        !n.value && t(!0);
        return;
      }
    },
    te = st(G, 500),
    ce = async (S) => {
      if (!c.token) {
        e.push({ name: "login" });
        return;
      }
      if (["ARLottery"].includes(S.vendorCode)) return await te(S);
      Ve({
        title: a("tips"),
        message: a("tipsPlayGame"),
        cancelButtonText: a("cancel"),
        showCancelButton: !0,
      }).then(async () => {
        await G(S);
      });
    },
    be = async (S) => {
      const h = (K.allGame.lottery || []).find(
        ({ id: q }) => q === (S.id || S.categoryId)
      );
      if (F(h)) return await ce({ ...h, vendorCode: "ARLottery" });
      const I = X.get(S.id || S.categoryId);
      if (!I) return console.error("no found id path");
      e.push({
        name: "AllLotteryGames-" + I.path,
        query: { typeId: S.typeId, id: S.id },
      });
    },
    Ie = async (S) => {
      var W;
      if (!c.token) {
        await e.push({ name: "login" });
        return;
      }
      if (["chess", "slot", "video"].includes(S.key || f.value)) {
        const h =
          ((W = K.allGame) == null ? void 0 : W[S.key || f.value]) || [];
        sessionStorage.setItem("slotGamesList", JSON.stringify(h)),
          sessionStorage.setItem("gameType", JSON.stringify(S.key || f.value)),
          sessionStorage.setItem("clickedItem", JSON.stringify(S)),
          await e.push({
            name: "AllOnlineGames",
            query: { game: S.key || f.value, vendorCode: S.slotsName },
          });
        return;
      }
      await ce(S);
    },
    Ee = (S) => {
      const W = ["slot", "video", "chess", "sport", "lottery"],
        h = {};
      for (const [I, q] of Object.entries(S)) {
        const E = I.toLocaleLowerCase();
        if (W.includes(E)) h[E] = q.filter((J) => J.state === 1);
        else if (E === "popular") {
          const J = S[E];
          (h[E] = [J.platformList, J.clicksTopList]),
            (h.clicksVideoTopList = J.clicksVideoTopList);
        } else h[E] = q;
      }
      return h;
    },
    ie = async (S = !0) => {
      const W = async () => ({ data: null });
      if (K.loading) return;
      K.loading = !0;
      const [{ data: h }, { data: I }] = await Promise.all([
          S ? cn() : W(),
          gn(),
        ]),
        q = (h || []).filter((E) => E.state === 1);
      (K.imgMap = new Map(
        q.map((E) => [E.categoryCode.toLowerCase(), E.categoryImg])
      )),
        (K.categoryList = q.filter((E) => E.categoryCode !== "BigAward")),
        (K.allGame = Ee(I) || {}),
        (K.loading = !1),
        sessionStorage.setItem("gameData", JSON.stringify(I));
    },
    B = async () => {
      const { result: S, data: W } = await rn();
      W && (K.electron = W);
    },
    k = async () => {
      const { result: S, data: W } = await ln();
      W && (K.video = W);
    };
  return {
    store: K,
    gameList: m,
    currentGame: f,
    platformList: A,
    current: T,
    loading: R,
    active: d,
    gameType: V,
    currentList: w,
    gameTopList: D,
    allGame: v,
    lotteryType: C,
    gameListKey: b,
    setMenu: (S) => {
      K.gameList = S;
    },
    goGame: ce,
    onItemLottery: be,
    onGame: Ie,
    getGameList: ie,
    setActive: M,
    useProvid: () => {
      Wn(en, {
        gameList: m,
        currentGame: f,
        current: T,
        platformList: A,
        loading: R,
        active: d,
        gameType: V,
        currentList: w,
        gameTopList: D,
        allGame: v,
        lotteryRoutes: X,
        videoList: _,
        electronList: u,
        onGame: Ie,
        goGame: ce,
        setActive: M,
        getElectronChildGame: B,
        getVideonChildGame: k,
        onItemLottery: be,
      });
    },
    getElectronChildGame: B,
    getVideonChildGame: k,
    goSassLotteryGame: Z,
  };
}
ue({ list: [], timer: -1 });
const ye = ue({
  list: [],
  topList: [],
  penarikanlist: [],
  timer: null,
  source: null,
});
function tD() {
  const e = j(null),
    s = $(() => ye.list),
    t = $(() => ye.topList),
    n = $(() => ye.penarikanlist || []),
    a = $(() => ye.source),
    c = (b) => {
      if (b.length >= 7)
        return b.substring(0, 3) + "***" + b.substring(b.length - 3);
      {
        const v = "***",
          u = 7 - b.length,
          _ = "*".repeat(u);
        return (
          b.substring(0, Math.ceil((7 - u) / 2)) +
          v +
          _ +
          b.substring(Math.ceil((7 - u) / 2))
        );
      }
    },
    i = async () => {
      const { data: b } = await pn();
      (ye.list = b.dataList || []),
        (ye.topList = b.penarikanList || []),
        (ye.penarikanlist = b.penarikanList || []);
    },
    l = () => {
      ye.timer && (clearInterval(ye.timer), (ye.timer = null));
    },
    g = () => {
      ye.list.length &&
        (l(),
        (ye.timer = setInterval(() => {
          if (ye.list.length) {
            if (!e.value) return l();
            ye.list.unshift(ye.list.pop());
          }
        }, 3e3)));
    },
    m = {
      k3list: "K3",
      fishslist: "Fish",
      smallgameslist: "SmallGame",
      trxwigolist: "TrxHash",
      wlist: "WinGo",
    };
  return {
    getWinner: i,
    startTimer: g,
    destroyTimer: l,
    desensitizeString: c,
    getImages: (b = "") => {
      if (!b) return;
      const v = m[b];
      return v || b;
    },
    penarikanlist: n,
    wrapperRef: e,
    winnerList: s,
    source: a,
    topList: t,
  };
}
const St = ue({ info: { utr: "", orderStatus: "", syncNotifyAddress: "" } });
function nD() {
  const e = Ce();
  let s = {};
  const t = async (c) => {
      const i = await uC({ token: c });
      i.code == "1"
        ? ((St.info = i.data),
          i.data.orderStatus === "2"
            ? e.replace("/Payment")
            : i.data.orderStatus === "3" && e.replace("/Fail"))
        : a();
    },
    n = (c, i) => {
      let l = i == 0 ? 1e4 : 2e3;
      s[i] && clearInterval(s[i]),
        (s[i] = setInterval(() => {
          i == 0 ? t(c) : wC({ token: c });
        }, l));
    },
    a = () => {
      Object.keys(s).forEach((c) => {
        clearInterval(s[Number(c)]);
      }),
        Object.keys(s).forEach((c) => delete s[Number(c)]);
    };
  return (
    et(() => {
      a();
    }),
    Ut(() => {}),
    { orderStatus: t, startFun: n, stopFun: a, pageData: St }
  );
}
const xe = j();
function aD(e) {
  const { type: s } = e,
    t = async () => {
      (window.__lc = window.__lc || {}),
        (window.__lc.license = 15861567),
        (window.__lc.asyncInit = !0),
        (function (b, v, u) {
          function _(f) {
            return T._h ? T._h.apply(null, f) : T._q.push(f);
          }
          var T = {
            _q: [],
            _h: null,
            _v: "2.0",
            on: function () {
              _(["on", u.call(arguments)]);
            },
            once: function () {
              _(["once", u.call(arguments)]);
            },
            off: function () {
              _(["off", u.call(arguments)]);
            },
            get: function () {
              if (!T._h)
                throw new Error(
                  "[LiveChatWidget] You can't use getters before load."
                );
              return _(["get", u.call(arguments)]);
            },
            call: function () {
              _(["call", u.call(arguments)]);
            },
            init: function () {
              var f = v.createElement("script");
              (f.async = !0),
                (f.type = "text/javascript"),
                (f.src = "https://cdn.livechatinc.com/tracking.js"),
                v.head.appendChild(f);
            },
          };
          !b.__lc.asyncInit && T.init(),
            (b.LiveChatWidget = b.LiveChatWidget || T);
        })(window, document, [].slice);
    },
    n = (b, v) => {
      window.Tawk_API.toggle(),
        window.Tawk_API.setAttributes(
          { userid: b, vv075mxt0i: v },
          function (u) {}
        );
    },
    a = (b) => {
      window.Tawk_API.toggle(),
        window.Tawk_API.setAttributes({ wizmpunyhe: b }, function (v) {});
    },
    c = () => {
      document.getElementById("tawk-chatjs") ||
        (function () {
          var u;
          var b = document.createElement("script"),
            v = document.getElementsByTagName("script")[0];
          (b.async = !0),
            (b.src =
              "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hjs089gi"),
            (b.charset = "UTF-8"),
            b.setAttribute("crossorigin", "*"),
            (u = v.parentNode) == null || u.insertBefore(b, v);
        })();
    };
  function i(b) {
    var v;
    switch (b.visibility) {
      case "maximized":
        break;
      case "minimized":
        (v = window.LiveChatWidget) == null || v.call("hide");
        break;
    }
  }
  const l = mt(async (b, v) => {
      s === 1
        ? (xe.value.call("set_session_variables", { userId: b, balance: v }),
          xe.value.call("maximize"))
        : s === 2
        ? n(b, v)
        : s === 3 && d();
    }, 2e3),
    g = mt(async (b) => {
      s === 1
        ? (xe.value.call("set_session_variables", { routhPath: b }),
          xe.value.call("maximize"))
        : s === 2
        ? a(b)
        : s === 3 && d();
    }, 2e3),
    m = async () => {
      if (s !== 3)
        if (s == 1) {
          if (window.LiveChatWidget) return;
          await t(),
            (xe.value = window.LiveChatWidget),
            await xe.value.init(),
            xe.value.call("hide"),
            xe.value.on("visibility_changed", i);
        } else c();
    },
    d = async () => {
      const b = await mC({ antCustomer: "2" });
      b.code === "1" && ns(b.data.serviceSystemUrl, 0);
    };
  return { LiveChatWidget: xe, onReady: m, handleOpen: l, handleLoginOpen: g };
}
function oD() {
  const e = Ce();
  return {
    goMerchant: () => {
      e.push({ name: "Recharge" });
    },
  };
}
function pD() {
  const e = Zs(),
    s = async (c) => {
      (await sC(c)).code;
    };
  return {
    pageView: async (c, i = 26001) => {
      const l = e.query.payTypeId,
        g = {
          buriedPageType: c === "recharge" ? 1 : 2,
          eventType: 1,
          clickType: 0,
          payTypeId: i,
        };
      l && (g.payTypeId = Number(l)), await s(g);
    },
    pageLeve: async (c, i = 26001) => {
      const l = e.query.payTypeId,
        g = {
          buriedPageType: c === "recharge" ? 1 : 2,
          eventType: 3,
          clickType: 0,
          payTypeId: i,
        };
      l && (g.payTypeId = Number(l)), await s(g);
    },
    pageClick: async (c) => {
      const i = e.query.payTypeId,
        l = {
          buriedPageType: 2,
          eventType: 2,
          clickType: c,
          payTypeId: i ? Number(i) : 26001,
        };
      await s(l);
    },
  };
}
const de = ue({ turntableInfo: void 0 }),
  BI = new Map(),
  le = tt(),
  Oe = tt(null),
  jt = j(!1),
  Me = j(null),
  Os = j("00:00:00"),
  Ms = j(!0),
  $t = j(!1),
  cD = () => {
    const e = j(null),
      s = [0, 1, 4, 3, 2, 7, 6, 5],
      t = j(null),
      n = tt(null),
      a = j(void 0),
      c = j([]),
      i = j(!1),
      l = j({ page: 1, pageSize: 10, total: 0 }),
      g = j([]),
      m = Te(),
      d = $(() => m.getDollarSign),
      b = j(!1),
      v = j(!1),
      u = j(null),
      _ = j(),
      T = j(!1),
      f = j(!1),
      w = j(!1),
      A = j(!1),
      D = j(new Set()),
      C = async () => {
        var ne;
        const y = await L(rC()),
          { data: P, serviceNowTime: x } = y;
        (de.turntableInfo = P), (jt.value = !!P.isFirstInvitedWheel);
        const { noWinningRandomAmount: U } = P;
        if (
          U != null &&
          U.length &&
          (ne = de == null ? void 0 : de.turntableInfo) != null &&
          ne.diskDisplayAmount
        ) {
          let oe = de.turntableInfo.diskDisplayAmount.sort((Q, ee) => ee - Q),
            re = U[0] >= 1e4 ? U[0] / 1e3 + "K" : U[0],
            _e = U[1] >= 1e4 ? U[1] / 1e3 + "K" : U[1];
          oe.push(re + "-" + _e), (de.turntableInfo.diskDisplayAmount = oe);
        }
        Ms.value && (Ms.value = !1), P.expiredTime && E(x);
      },
      R = $(() => {
        var y;
        return (
          ((y = de.turntableInfo) == null
            ? void 0
            : y.invitedWheelTotalPrizeAmount) || 0
        );
      }),
      V = $(() => {
        var y;
        return (
          ((y = de.turntableInfo) == null
            ? void 0
            : y.userInvitedWheelAmount) || 0
        );
      }),
      X = $(() => {
        var y;
        return (
          ((y = de.turntableInfo) == null ? void 0 : y.lastWheelRecordList) ||
          []
        );
      }),
      M = $(() => R.value - V.value || 0),
      F = $(() => {
        var P, x;
        if (!b.value) return 5;
        let y =
          (x = (P = de.turntableInfo) == null ? void 0 : P.diskDisplayAmount) ==
          null
            ? void 0
            : x.findIndex((U) => U === a.value);
        return y !== -1 ? s.findIndex((U) => U === y) : 5;
      }),
      Z = async () => {
        if (!e.value) return;
        const y = document.getElementById("turntable_canvas");
        y
          ? ((Oe.value = new Nn()),
            await Oe.value.init({
              width: y.clientWidth,
              height: y.clientHeight,
              backgroundAlpha: 0,
              resolution: window.devicePixelRatio || 1.5,
              autoDensity: !0,
              antialias: !0,
              preference: "webgpu",
            }),
            e.value.appendChild(Oe.value.canvas),
            ce())
          : console.error("Canvas element not found");
      },
      G = async (y) =>
        new URL(
          Object.assign({
            "../views/turntable/assets/img/gold.png": Jn,
            "../views/turntable/assets/img/icon_left.png": Yn,
            "../views/turntable/assets/img/icon_right.png": Qn,
            "../views/turntable/assets/img/money.png": Zn,
            "../views/turntable/assets/img/money2.png": ea,
            "../views/turntable/assets/img/rule_bg.png": sa,
            "../views/turntable/assets/img/select.png": ta,
            "../views/turntable/assets/img/start_btn.png": na,
            "../views/turntable/assets/img/turn_bottom.png": aa,
            "../views/turntable/assets/img/turntable.png": oa,
            "../views/turntable/assets/img/turntable_bg.png": pa,
          })[`../views/turntable/assets/img/${y}.png`],
          self.location
        ).href,
      te = async () => {
        ve.reset();
        try {
          const y = [
            { alias: "bg", src: "turntable" },
            { alias: "startBtn", src: "start_btn" },
            { alias: "select", src: "select" },
            { alias: "gold", src: "gold" },
            { alias: "money2", src: "money2" },
            {
              alias: "start",
              src: new URL("/assets/gif/start-863906a3.gif", self.location)
                .href,
            },
            {
              alias: "animate",
              src: new URL("/assets/gif/animate-461ec0ce.gif", self.location)
                .href,
            },
          ];
          await Promise.all(
            y.map(async (U) => {
              let ne;
              U.alias !== "animate" && U.alias !== "start"
                ? (ne = await G(U.src))
                : (ne = U.src),
                ve.cache.has(U.alias) && ve.cache.remove(U.alias);
              const oe = await ve.load({ alias: U.alias, src: ne });
            })
          ),
            ve.cache.has("money") && ve.cache.remove("money");
          const P = await G("money"),
            x = await ve.load(P);
          ve.add({ alias: "money", src: Xn, data: { texture: x } }),
            (t.value = await ve.load("money"));
        } catch (y) {
          throw (console.error("Error loading assets:", y), y);
        }
      },
      ce = async () => {
        if (!Oe.value) return;
        (le.value = new ks()),
          (le.value.sortableChildren = !0),
          (le.value.zIndex = 1);
        const y = document.getElementsByClassName("turntable_all")[0];
        Oe.value.stage.scale.set((y == null ? void 0 : y.clientWidth) / 750),
          Oe.value.stage.addChild(le.value),
          (n.value = new ks()),
          (n.value.sortableChildren = !0),
          (n.value.x = 330),
          (n.value.y = 570),
          (n.value.zIndex = 0);
        const P = new os(await ve.get("bg"));
        P.anchor.set(0.5),
          (P.width = 660),
          (P.height = 660),
          n.value.addChild(P);
        const x = new os(await ve.get("select"));
        (x.width = 278),
          (x.height = 340),
          (x.x = 330 - 139),
          (x.y = 240),
          (x.zIndex = 2),
          le.value.addChild(n.value, x),
          await Ee(),
          await Ie(),
          S(),
          W();
      },
      be = async () => {
        var P, x;
        await C();
        let y = (P = le.value) == null ? void 0 : P.getChildByName("awardText");
        y && ((x = le.value) == null || x.removeChild(y)), H();
      },
      Ie = async () => {
        var ne, oe, re, _e;
        if (!n.value || !t.value) return;
        const y = 174,
          P = 360 / 8,
          x = -90;
        for (let Q = 0; Q < 8; Q++) {
          const ee = new os(t.value.textures[`money${s[Q] + 1}.png`]);
          ee.anchor.set(0.5), (ee.width = 74), (ee.height = 74);
          const we = (P * Q + x) * (Math.PI / 180);
          (ee.x = y * Math.cos(we)),
            (ee.y = y * Math.sin(we)),
            (ee.rotation = we + Math.PI / 2),
            n.value.addChild(ee);
        }
        let U =
          (oe =
            (ne = de.turntableInfo) == null ? void 0 : ne.diskDisplayAmount) ==
          null
            ? void 0
            : oe.map((Q) => (Q >= 1e4 && (Q = Q / 1e3 + "K"), Q));
        for (let Q = 0; Q < 8; Q++) {
          if (
            !(
              (_e =
                (re = de.turntableInfo) == null
                  ? void 0
                  : re.diskDisplayAmount) != null && _e.length
            )
          )
            return;
          const ee = new ps({
            text: d.value + ((U && U[s[Q]]) || "0"),
            style: {
              fontSize: 30,
              fill: "#F15542",
              align: "center",
              fontWeight: 600,
            },
          });
          ee.anchor.set(0.5);
          const we = (P * Q + x) * (Math.PI / 180),
            he = 230;
          (ee.x = he * Math.cos(we)),
            (ee.y = he * Math.sin(we)),
            (ee.rotation = we + Math.PI / 2),
            n.value.addChild(ee);
        }
      },
      Ee = async () => {
        var P;
        const y = new os(await ve.get("startBtn"));
        (y.width = 211),
          (y.height = 211),
          (y.x = 330),
          (y.y = 576),
          (y.zIndex = 3),
          y.anchor.set(0.5),
          (P = le.value) == null || P.addChild(y),
          H(),
          (y.interactive = !0),
          y.on("pointerdown", ie);
      },
      ie = async () => {
        var ne, oe, re;
        if (w.value) return;
        if (!((ne = de.turntableInfo) != null && ne.userInvitedWheelCount)) {
          $t.value = !0;
          return;
        }
        if (M.value === 0) {
          v.value = !0;
          return;
        }
        (w.value = !0), await I();
        const y = Math.floor(Math.random() * 8);
        await h(F.value || y);
        const P = k(),
          [x, U] = B();
        (oe = le.value) == null || oe.removeChild(x, U),
          (re = le.value) == null || re.addChild(P),
          await N();
      },
      B = () => {
        var ne, oe, re, _e;
        let y =
            (ne = le.value) == null ? void 0 : ne.getChildByLabel("centerBtn"),
          P =
            (oe = le.value) == null ? void 0 : oe.getChildByLabel("centerBtn2");
        y && P && ((re = le.value) == null || re.removeChild(y, P));
        const x = new ps({
            text:
              "X" +
              (((_e = de.turntableInfo) == null
                ? void 0
                : _e.userInvitedWheelCount) || 0),
            style: {
              fontSize: 60,
              fill: "#F15542",
              align: "center",
              fontWeight: 700,
            },
          }),
          U = new ps({
            text: "FREE SPIN",
            style: {
              fontSize: 16,
              fill: "#F15542",
              align: "center",
              fontWeight: 700,
            },
          });
        return (
          x.anchor.set(0.5),
          (x.x = 330),
          (x.y = 576 - 20),
          (x.zIndex = 4),
          U.anchor.set(0.5),
          (U.x = 330),
          (U.y = 576 + 26),
          (U.zIndex = 4),
          (x.label = "centerBtn"),
          (U.label = "centerBtn2"),
          [x, U]
        );
      },
      k = () => {
        const y = new ps({
          text: d.value + (a.value || 0),
          style: {
            fontSize: 32,
            fill: "#F15542",
            align: "center",
            fontWeight: 700,
          },
        });
        return (
          y.anchor.set(0.5),
          (y.x = 330),
          (y.y = 576),
          (y.zIndex = 4),
          (y.label = "awardText"),
          y
        );
      },
      H = () => {
        var x;
        const [y, P] = B();
        (x = le.value) == null || x.addChild(y, P);
      },
      N = async () => {
        var Q;
        const y = new ks({
            width: 414,
            height: 414,
            x: 330,
            y: 576,
            zIndex: 5,
            sortableChildren: !0,
          }),
          P = new os(await ve.get("gold"));
        (P.width = 414), (P.height = 414), P.anchor.set(0.5);
        const x = new ps({
          text: d.value + (a.value || 0),
          style: {
            fontSize: 34,
            fill: "#F15542",
            align: "center",
            fontWeight: 700,
          },
        });
        x.anchor.set(0.5),
          (x.x = 5),
          (x.y = 5),
          (x.zIndex = 6),
          y.scale.set(0),
          y.addChild(x, P),
          (Q = le.value) == null || Q.addChild(y);
        const U = 0.6,
          ne = Date.now();
        let oe;
        const re = () => {
            var $e;
            const we = (Date.now() - ne) / 1e3;
            if (we >= U) {
              y.scale.set(1),
                ($e = u.value) == null || $e.play(),
                _e(),
                setTimeout(() => {
                  var Qe;
                  (Qe = _.value) == null || Qe.play();
                }, 500),
                setTimeout(() => {
                  be(), (w.value = !1);
                }, 1200);
              return;
            }
            const he = we / U;
            y.scale.set(he), (oe = requestAnimationFrame(re)), D.value.add(oe);
          },
          _e = () => {
            const we = Date.now();
            let he;
            const $e = () => {
              var qe;
              const Gs = (Date.now() - we) / 1e3;
              if (Gs >= 1) {
                (y.alpha = 0),
                  (qe = le.value) == null || qe.removeChild(y),
                  he && D.value.delete(he);
                return;
              }
              (y.alpha = 1 - Gs / 1),
                (he = requestAnimationFrame($e)),
                D.value.add(he);
            };
            $e();
          };
        re();
      },
      S = () => {
        var P;
        const y = new wt(ve.get("animate"));
        (y.width = 274),
          (y.height = 643),
          (y.x = 330 - 137),
          (y.y = 40),
          (y.zIndex = 7),
          (y.loop = !1),
          y.stop(),
          (u.value = y),
          (P = le.value) == null || P.addChild(y);
      },
      W = () => {
        var P;
        const y = new wt(ve.get("start"));
        (y.width = 600),
          (y.height = 140),
          (y.y = 10),
          (y.x = 30),
          (y.zIndex = 7),
          (y.loop = !1),
          y.stop(),
          (_.value = y),
          (P = le.value) == null || P.addChild(y);
      },
      h = (y) =>
        new Promise((P) => {
          if (!n.value) return P();
          const x = Math.abs(y % 8),
            U = 360 / 8,
            ne = 0,
            oe = 360 - (x * U + ne),
            re = 5 * 360,
            Q = ((n.value.rotation || 0) * 180) / Math.PI,
            ee = re + oe - Q,
            we = Date.now(),
            he = 2e3,
            $e = 1500,
            Qe = () => {
              const qe = Date.now() - we;
              if (qe >= he) {
                n.value &&
                  ((n.value.rotation = (oe * Math.PI) / 180),
                  (n.value.rotation * 180) / Math.PI),
                  P();
                return;
              }
              let Ls;
              if (qe < $e) Ls = (qe / $e) * 0.85;
              else {
                const _n = (qe - $e) / (he - $e);
                Ls = 0.85 + (1 - Math.pow(1 - _n, 2)) * 0.15;
              }
              const An = Ls * ee;
              n.value && (n.value.rotation = (An * Math.PI) / 180);
              const hn = requestAnimationFrame(Qe);
              D.value.add(hn);
            };
          Qe();
        }),
      I = async () => {
        const { data: y, code: P } = await L(lC());
        P === 0 &&
          (y.isFirstInvitedWheel
            ? ((i.value = !0), (c.value = y.firstInvitedWheelDatas || []))
            : ((c.value = []), (b.value = !!y.isWin)),
          (a.value = y.prizeAmount));
      },
      q = async (y) => {
        let P = { pageNo: y || l.value.page, pageSize: l.value.pageSize };
        const { data: x, code: U } = await L(dC(P));
        U === 0 &&
          ((g.value = x.list || []),
          (l.value.page = x.pageNo),
          (l.value.total = x.totalCount));
      },
      E = (y) => {
        Me.value && clearInterval(Me.value);
        const P = new Date(y).getTime(),
          x = Date.now(),
          U = P - x;
        Me.value = setInterval(() => {
          var _e, Q;
          const ne =
              new Date(
                (_e = de.turntableInfo) == null ? void 0 : _e.expiredTime
              ).getTime() || 0,
            oe = Date.now() + U,
            re = ne - oe;
          if (re <= 0)
            (Os.value = "00:00:00"),
              Me.value && (clearInterval(Me.value), (Me.value = null)),
              ((Q = de.turntableInfo) != null && Q.isFirstInvitedWheel) || C();
          else {
            const ee = Math.floor(re / 1e3),
              we = Math.floor(ee / 3600),
              he = Math.floor((ee % 3600) / 60),
              $e = ee % 60;
            Os.value = `${String(we).padStart(2, "0")}:${String(he).padStart(
              2,
              "0"
            )}:${String($e).padStart(2, "0")}`;
          }
        }, 1e3);
      },
      J = () => {
        Me.value && (clearInterval(Me.value), (Me.value = null));
      },
      se = () => {
        D.value.forEach((y) => {
          cancelAnimationFrame(y);
        }),
          D.value.clear();
      };
    return {
      turntableCanvas: e,
      turntableApps: Oe,
      initTurntableCanvas: Z,
      loadAssets: te,
      transformTurntable: h,
      getTurntableInfo: C,
      turntableState: de,
      getTurntableReward: I,
      firstReward: a,
      firstInvitedWheelDatas: c,
      isOpenAward: i,
      isEveryDayGift: jt,
      recordList: X,
      getPageListHistory: q,
      historyList: g,
      pageInfo: l,
      countDownTime: Os,
      textureCacheTurntable: BI,
      withdrawDialog: v,
      withdrawNeedAmount: R,
      userInvitedWheelAmount: V,
      dollarSign: d,
      needAmount: M,
      cashOutDialog: T,
      ruleDialog: f,
      restBgcontainer: be,
      hasWithdrawMethodDialog: A,
      loading: Ms,
      clearCountDown: J,
      removeAllAnimate: () => {
        var y, P;
        se(),
          u.value && (u.value.destroy(), (u.value = null)),
          _.value && (_.value.destroy(), (_.value = null)),
          (y = Oe.value) == null || y.canvas.remove(),
          (P = Oe.value) == null || P.destroy(!0, { children: !0 });
      },
      clearAllAnimations: se,
      amountNoDialog: $t,
    };
  };
function iD() {
  const { t: e } = Re(),
    s = Ce(),
    { onTriggerGoogle: t } = Zt(),
    n = j(!1),
    a = ue({
      date: null,
      rewardType: -1,
      receiveState: 0,
      pageSize: 20,
      pageNo: 1,
    }),
    c = j(null),
    i = j([]),
    l = $(() => ({
      0: { label: e("actTip2"), value: 0 },
      1: { label: e("claimed"), value: 1 },
      2: { label: e("rewardExpired"), value: 2 },
    })),
    g = $(() => (l.value ? Object.values(l.value) : [])),
    m = $(() => ({
      113: { label: e("code8113"), value: 113 },
      115: { label: e("code8115"), value: 115 },
      7: { label: e("code9007"), value: 7 },
      10: { label: e("code9010"), value: 10 },
      29: { label: e("code9029"), value: 29 },
      118: { label: e("code8118"), value: 118 },
      107: { label: e("code8107"), value: 107 },
      122: { label: e("TeamPartner"), value: 122 },
      13: { label: e("code9013"), value: 13 },
      3: { label: e("code8003"), value: 3 },
      102: { label: e("washingCode"), value: 102 },
      30: { label: e("code8030"), value: 30 },
      20: { label: e("invitationBonus"), value: 20 },
      119: { label: e("code8119"), value: 119 },
      103: { label: e("code9309"), value: 103 },
      114: { label: e("code8114"), value: 114 },
      126: { label: e("withdrawalRewards"), value: 126 },
      116: { label: e("newMembersRewards"), value: 116 },
      130: { label: e("code8130"), value: 130 },
      117: { label: e("code8117"), value: 117 },
      131: { label: e("code8131"), value: 131 },
    })),
    d = $(() => [{ value: -1, label: e("all") }, ...Object.values(m.value)]),
    b = {
      3: "RedeemGift",
      7: "DailySignIn",
      10: "Recharge",
      102: "Laundry",
      114: "Championship",
      116: "MemberPackage",
      117: "MemberPackage",
      119: "Turntable",
      122: "TeamPartner",
      126: "Withdraw",
      130: "turntable",
      20: "InvitationBonus",
      118: "DailyTasks",
      107: "DailyTasks",
      30: "vip",
      29: "vip",
      103: "SuperJackpot",
    },
    v = (w) => {
      (a.receiveState = w.value), c.value.resetRefresh();
    },
    u = async () => {
      if (!n.value)
        try {
          const { pageSize: w, receiveState: A, rewardType: D, ...C } = a,
            R = await Lt(
              Object.assign({}, C, {
                receiveState: 3,
                rewardType: D === -1 ? null : D,
                pageSize: 20,
              })
            );
          R.code === 0 &&
            (i.value = R.data.list.map((V) => ({ ...V, loading: !1 })));
        } catch {
        } finally {
          n.value = !1;
        }
    },
    _ = async (w = {}) => {
      const { rewardType: A, ...D } = { ...a, ...w };
      return await Lt({ ...D, rewardType: A === -1 ? null : A });
    },
    T = async (w) => {
      const A = {
          20: UI,
          29: It,
          30: It,
          118: fR,
          107: mR,
          103: nn,
          113: vR,
          115: an,
          131: on,
        },
        D = {
          118: { dailyAwardId: w.receiveTaskId },
          107: { weeklyAwardId: w.receiveTaskId },
          29: {
            receiveId: w.receiveTaskId,
            vipLevel: w.vipLevel,
            rewardType: w.vipRewardType,
          },
          30: {
            receiveId: w.receiveTaskId,
            vipLevel: w.vipLevel,
            rewardType: w.vipRewardType,
          },
          20: { taskId: w.receiveTaskId },
          103: { orderId: w.receiveTaskId },
          113: { id: w.receiveTaskId },
          102: { codeType: -1 },
        };
      if (!A[w.rewardType])
        return ds(`${w.rewardType} ${e("noSupportReceive")}`);
      if (!w.loading) {
        w.loading = !0;
        try {
          const C = A[w.rewardType],
            R = D[w.rewardType] || {};
          (await L(C(R))) &&
            (ds({ message: e("receiveSuccess"), duration: 3e3 }),
            c.value ? c.value.resetRefresh() : u());
        } finally {
          w.loading = !1;
        }
      }
    };
  return {
    getRewards: u,
    onBonusPack: async (w) => {
      const A = [20, 118, 107, 30, 29, 103].includes(w.rewardType);
      if ((A && w.recordType === 1) || (b[w.rewardType] && !A))
        return (
          t("reward_center_pages"), await s.push({ name: b[w.rewardType] })
        );
      await T(w);
    },
    onTabState: v,
    getListRewards: _,
    mapParam: b,
    listRef: c,
    list: i,
    loading: n,
    query: a,
    rewardStates: g,
    rewardTypes: d,
    rewardTypeMap: m,
    rewardStateMap: l,
  };
}
function GI() {
  async function e() {
    if (Ae().getToken)
      try {
        const t = await xI();
      } catch (t) {
        console.error("Error setting user language:", t);
      }
  }
  return { upUserLanguage: e };
}
const sn = He({
    id: "userStore",
    state: () => ({
      currentView: "SignIn",
      userForm: {
        number: "",
        password: "",
        verify: "",
        rePassword: "",
        invitation: "",
        packId: Ue.getPackId() || "",
        numberType: "",
        email: "",
        remember: !1,
        termAndPolicy: !1,
        vCode: "",
        logintype: "",
        rememberpwd: !1,
      },
      rPwdForm: {
        number: "",
        numberType: "",
        email: "",
        verify: "",
        password: "",
        rePassword: "",
      },
      ARIP: "",
      numberTypes: [],
      countDown: 0,
      countEmailDown: 0,
      remember: !1,
      messageDetail: {},
      isShowSMS: !1,
      isRegisterState: !1,
      isAddBankCardSMS: !1,
      isOpenForgetPasswordSMSState: !1,
      isOpenForgetPasswordEmailState: !1,
      isOpenRegisterEmailState: !1,
      isOpenRegisterSMSState: !1,
      isOpenCaptcha: !1,
      isOpenRegisterCaptcha: !1,
      isOpenAddWithdrawEmailState: !1,
      isOpenAddWithdrawSMSState: !1,
      isOpenAddBankCardOpenEmail: !1,
      isOpenExternalAccount: !1,
      state: null,
      isOpenRegisterSMS: !1,
      isOpenRegisterEmail: !1,
    }),
    getters: {
      getCurrentView: (e) => e.currentView,
      getUserForm: (e) => e.userForm,
      getNumberTypes: (e) => e.numberTypes,
      getMessagesDetail: (e) => e.messageDetail,
    },
    actions: {
      setCurrentView(e) {
        this.currentView = e;
      },
      setUserForm(e) {
        this.userForm = e;
      },
      setNumberTypes(e) {
        this.numberTypes = e;
      },
      setTermAndPolicy(e) {
        this.userForm.termAndPolicy = e;
      },
      setNumberType(e) {
        (this.userForm.numberType = e), (this.rPwdForm.numberType = e);
      },
      setCountDown(e) {
        this.countDown = e;
      },
      setCountEmailDown(e) {
        this.countEmailDown = e;
      },
      setMessageDetail(e) {
        this.messageDetail = e;
      },
      loginout() {
        const e = Ae();
        localStorage.removeItem("lotteryLoginUrl"),
          localStorage.removeItem("tokenHeader"),
          localStorage.removeItem("refreshToken"),
          localStorage.removeItem("numberType"),
          localStorage.removeItem("number"),
          localStorage.removeItem("email"),
          sessionStorage.removeItem("pop_prompt"),
          sessionStorage.removeItem("pop_laundry"),
          localStorage.removeItem("isToLogin"),
          localStorage.removeItem("ar_token"),
          sessionStorage.removeItem("ar_pay"),
          e.setUserInfo({}),
          gs("userInfo", {});
      },
      remember(e = !1) {
        const s = this.userForm.logintype,
          t = `ar_account_${s}`,
          n = localStorage.getItem(t) || "",
          a = (m) => {
            try {
              return JSON.parse(m);
            } catch {
              return null;
            }
          };
        if (e) {
          const m = a(n);
          if (!m) return;
          s === "email"
            ? (this.userForm.email = m.email)
            : ((this.userForm.number = m.number),
              m.numberType && (this.userForm.numberType = m.numberType)),
            m.password &&
              ((this.userForm.rememberpwd = !0),
              (this.userForm.password = m.password));
          return;
        }
        const c = this.userForm.numberType,
          i = this.userForm.number,
          l = this.userForm.email,
          g = this.userForm.rememberpwd ? this.userForm.password : "";
        localStorage.setItem(
          t,
          JSON.stringify({
            email: l,
            numberType: c,
            number: i,
            password: g,
            logintype: s,
          })
        );
      },
      async signIn(e) {
        let s = {};
        e.logintype == "email"
          ? (s = {
              username: e.email,
              captchaId: e.captchaId,
              track: e.track,
              pwd: e.password,
              phonetype: De(),
              logintype: e.logintype,
              packId: Ue.getPackId() || "",
              deviceId: Ue.getDeviceId() || localStorage.getItem("arvId"),
            })
          : (s = {
              username: e.numberType + e.number,
              captchaId: e.captchaId,
              track: e.track,
              pwd: e.password,
              phonetype: De(),
              logintype: e.logintype,
              packId: Ue.getPackId() || "",
              deviceId: Ue.getDeviceId() || localStorage.getItem("arvId"),
            });
        const t = localStorage.getItem("fireBaseToken") || null;
        t && (s.fireBaseToken = t), e.vCode && (s.vCode = e.vCode);
        const n = Ae(),
          { onTriggerLogin: a } = Zt();
        return new Promise(async (c, i) => {
          var m;
          const l = await DI(s, { "AR-REAL-IP": this.ARIP });
          if (l.data && l.code === 0) {
            const {
              token: d,
              tokenHeader: b,
              refreshToken: v,
              lotteryLoginUrl: u,
              parentUserId: _,
            } = l.data;
            n.setToken(d),
              this.remember(),
              localStorage.setItem("tokenHeader", b),
              localStorage.setItem("refreshToken", v),
              localStorage.setItem("numberType", e.numberType),
              localStorage.setItem("number", e.number || ""),
              localStorage.setItem("email", e.email || ""),
              localStorage.setItem("isToLogin", "1"),
              u && localStorage.setItem("lotteryLoginUrl", u);
            const T = await this.getUserInfo({ signature: d });
            a((m = T == null ? void 0 : T.data) == null ? void 0 : m.userId),
              UT("/home");
            const { setLoading: f } = Bs();
            return (
              f(!1),
              vt("prediction", "userId", [_]),
              vt("fcm", "login", d),
              t && (await ER({ fireBaseToken: t, isSubscribe: !0 })),
              c({})
            );
          }
          [122, 33].includes(l.msgCode) || us(l), i(l);
        });
      },
      async getUserInfo(e) {
        var c, i;
        const s = Ae(),
          t = II(),
          n = Te(),
          a = await L(EI(e));
        if (a) {
          if (
            (s.setUserInfo(a == null ? void 0 : a.data),
            n.getIsSwitchSaasBalance ||
              t.setAmount(
                (c = a == null ? void 0 : a.data) == null ? void 0 : c.amount
              ),
            t.setUSDTCanAdd(a == null ? void 0 : a.data),
            ((i = a == null ? void 0 : a.data) == null
              ? void 0
              : i.useLanguage) != s.getLanguage)
          ) {
            const { upUserLanguage: l } = GI();
            l();
          }
          return a;
        }
      },
      async register(e) {
        const s = uT("advertisingId");
        s && Object.assign(e, { gpcadid: s });
        const t = localStorage.getItem("fireBaseToken") || null;
        t && (e.fireBaseToken = t), (e.packId = Ue.getPackId() || "");
        const n = await L(MI(e, { "AR-REAL-IP": this.ARIP }));
        return new Promise(async (a, c) => {
          if (n) {
            const { lotteryLoginUrl: i } = n.data || {};
            i && localStorage.setItem("lotteryLoginUrl", i), a(n);
          } else c(n);
        });
      },
      async getIp() {
        if (!this.ARIP)
          try {
            const e = await as.post("https://tosma.lhlasjdanc.com/"),
              s =
                /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            e.data && s.test(e.data) && (this.ARIP = e.data || "");
          } catch {}
      },
      sendCode() {
        this.countDown = 120;
        const e = setInterval(() => {
          this.countDown > 0 ? this.countDown-- : clearInterval(e),
            this.countDown === 0 && clearInterval(e);
        }, 1e3);
      },
      sendEmailCode() {
        this.countEmailDown = 300;
        const e = setInterval(() => {
          this.countEmailDown > 0 ? this.countEmailDown-- : clearInterval(e),
            this.countEmailDown === 0 && clearInterval(e);
        }, 1e3);
      },
      setRemember(e) {
        this.remember = e;
      },
      setICode(e) {
        this.userForm.invitation = e;
      },
      clearRpwdData() {
        (this.rPwdForm = {
          number: "",
          numberType: Te().getAreacode.replace("+", "") || "",
          verify: "",
          password: "",
          rePassword: "",
          email: "",
        }),
          (this.userForm.number = "");
      },
      async getRegisterState() {
        const e = await L(tn());
        if (e) {
          const {
            registerSMSState: s,
            registerState: t,
            isOpenAddBankCardSMS: n,
            isOpenForgetPasswordSMS: a,
            isOpenForgetPasswordEmail: c,
            registerEmailState: i,
            registerMobileState: l,
            isOpenAddWithdrawEmail: g,
            isOpenAddWithdrawSMS: m,
            isOpenCaptcha: d = "0",
            isOpenRegisterCaptcha: b = "0",
            addBankCardOpenEmail: v,
            isOpenExternalAccount: u,
            isOpenRegisterSMS: _,
            isOpenRegisterEmail: T,
          } = e.data;
          this.state = e.data;
          const f = (w = "0") => w === "1";
          return (
            (this.isShowSMS = f(s)),
            (this.isRegisterState = f(t)),
            (this.isAddBankCardSMS = f(n)),
            (this.isOpenForgetPasswordSMSState = f(a)),
            (this.isOpenForgetPasswordEmailState = f(c)),
            (this.isOpenRegisterEmailState = f(i)),
            (this.isOpenRegisterSMSState = f(l)),
            (this.isOpenCaptcha = f(d)),
            (this.isOpenRegisterCaptcha = f(b)),
            (this.isOpenAddWithdrawEmailState = f(g)),
            (this.isOpenAddWithdrawSMSState = f(m)),
            (this.isOpenAddBankCardOpenEmail = f(v)),
            (this.isOpenExternalAccount = f(u)),
            (this.isOpenRegisterSMS = f(_)),
            (this.isOpenRegisterEmail = f(T)),
            e
          );
        }
        return {};
      },
    },
  }),
  LI = [
    { name: "English", key: "en" },
    { name: "中文", key: "zh" },
    { name: "Tiếng Việt", key: "vi" },
    { name: "Bahasa Melayu", key: "my" },
    { name: "Bahasa Indonesia", key: "id" },
    { name: "ภาษาไทย", key: "th" },
    { name: "မြန်မာဘာသာ", key: "md" },
    { name: "Português", key: "bra" },
    { name: "हिंदी", key: "hd" },
    { name: "русский", key: "rus" },
    { name: "Filipino", key: "ph" },
    { name: "বাংলা", key: "bd" },
    { name: "اردو", key: "pk" },
    { name: "عربي", key: "ar" },
    { name: "தமிழ்", key: "ta" },
    { name: "తెలుగు", key: "te" },
  ],
  Ae = He({
    id: "GlobalState",
    state: () => ({
      token: gs("token", ""),
      userInfo: gs("userInfo", {}),
      language: zt(),
      clientConfig: gs("clientConfig", {}),
      requsetData: "",
      isOpen: !0,
      apiUrl: localStorage.getItem("ApiUrl") || "",
      visibility: 1,
      deferredPrompt: null,
      dollarSign: "",
      projectLogo: "",
      headLogo: "",
      areaCode: null,
      messageList: null,
      notifyTime: null,
      isNotify: !1,
    }),
    getters: {
      getToken: (e) => e.token,
      getLanguage: (e) => e.language,
      getLanguageIcon: (e) => qt("languages", `${e.language}`),
      getLanguageName: (e) => {
        for (let s of LI) if (s.key == e.language) return s.name;
      },
      getUserInfo: (e) => e.userInfo,
      getClientConfig: (e) => e.clientConfig,
      getReqData: (e) => e.requsetData,
      getIsOpen: (e) => e.isOpen,
      getApiUrl: (e) => e.apiUrl,
      getDollarSign: (e) => e.dollarSign,
      getMessage: (e) => e.messageList,
      getIsNotify: (e) => e.isNotify,
    },
    actions: {
      setToken(e) {
        (this.token = e),
          localStorage.setItem("token", e),
          sessionStorage.removeItem("pop_prompt"),
          sessionStorage.removeItem("pop_laundry");
      },
      setUserInfo(e) {
        if (
          ((this.userInfo = e),
          e.groupDataShowAuth && e.groupDataShowAuth.length)
        ) {
          const s = {};
          e.groupDataShowAuth.forEach((t, n) => {
            s[t.id] = t.isShow;
          }),
            sessionStorage.setItem("permission", JSON.stringify(s));
        } else sessionStorage.removeItem("permission");
        gs("userInfo", e);
      },
      updateLanguage(e) {
        (this.language = e), localStorage.setItem("language", e);
      },
      setPrompt(e) {
        this.deferredPrompt = e;
      },
      SET_HTML_ATTR(e, s) {
        var t;
        (t = document.querySelector("link[rel='icon']")) == null ||
          t.setAttribute("href", e),
          (document.title = s);
      },
      setReqData(e) {
        this.requsetData = e;
      },
      setIsOpen(e) {
        this.isOpen = e;
      },
      setvisibility(e = null) {
        typeof e == "number" ? (this.visibility = e) : this.visibility++;
      },
      setMessage(e) {
        this.messageList = e;
      },
      async notifyARGame(e = !1) {
        if (this.isNotify) return;
        if (e) {
          (this.isNotify = !0),
            await L(Tt()),
            (this.notifyTime = Date.now()),
            (this.isNotify = !1);
          return;
        }
        !this.token ||
          Date.now() - (this.notifyTime || 0) <= 7 * 1e3 ||
          ((this.isNotify = !0),
          await L(Tt()),
          (this.notifyTime = Date.now()),
          (this.isNotify = !1));
      },
      async notifyTransfer() {
        if (this.token)
          try {
            await DR();
          } catch {}
      },
    },
  });
function kI() {
  let e = window.location.hash;
  e.includes("?") || (e = location.search);
  function s(t) {
    if (t) {
      const c = t.indexOf("?");
      c !== -1 && (t = t.substring(c + 1));
      var n = t.split("&"),
        a = {};
      return (
        n.forEach(function (i) {
          var l = i.split("=");
          a[l[0]] = decodeURIComponent(l[1]);
        }),
        a
      );
    } else return {};
  }
  return s(e);
}
const O = kI(),
  TI = {
    "91club": () => {
      const e = { 356634288423: "749293993830590" },
        s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    yjlottery: () => {
      (function (e, s, t, n, a, c, i) {
        e.fbq ||
          ((a = e.fbq =
            function () {
              a.callMethod
                ? a.callMethod.apply(a, arguments)
                : a.queue.push(arguments);
            }),
          e._fbq || (e._fbq = a),
          (a.push = a),
          (a.loaded = !0),
          (a.version = "2.0"),
          (a.queue = []),
          (c = s.createElement(t)),
          (c.async = !0),
          (c.src = n),
          (i = s.getElementsByTagName(t)[0]),
          i.parentNode.insertBefore(c, i));
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      ),
        fbq("init", "865606625239361"),
        fbq("track", "PageView");
    },
    "66lottery": () => {
      O.gtagId && localStorage.setItem("gtagId", O.gtagId),
        O.fb_dynamic_pixel &&
          localStorage.setItem("fb_dynamic_pixel", O.fb_dynamic_pixel);
      const e = O.gtagId || localStorage.getItem("gtagId") || "AW-11352382371",
        s =
          O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || "";
      (function () {
        window.dataLayer = window.dataLayer || [];
        function t() {
          dataLayer.push(arguments);
        }
        window.gtag = t;
        var n = document.createElement("script");
        n.src = "https://www.googletagmanager.com/gtag/js?id=" + e;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(n, a), t("js", new Date()), t("config", e);
      })(),
        s &&
          ((function (t, n, a, c, i, l, g) {
            t.fbq ||
              ((i = t.fbq =
                function () {
                  i.callMethod
                    ? i.callMethod.apply(i, arguments)
                    : i.queue.push(arguments);
                }),
              t._fbq || (t._fbq = i),
              (i.push = i),
              (i.loaded = !0),
              (i.version = "2.0"),
              (i.queue = []),
              (l = n.createElement(a)),
              (l.async = !0),
              (l.src = c),
              (g = n.getElementsByTagName(a)[0]),
              g.parentNode.insertBefore(l, g));
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          ),
          fbq("init", s),
          fbq("track", "PageView"));
    },
    lottery7: () => {
      const e = { 18685100001: "749293993830590" },
        s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode &&
          sessionStorage.setItem("invitecode", O.invitationCode);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    pakgames: () => {
      const e = { 28187260351: "1611788192994065" },
        s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode &&
          sessionStorage.setItem("invitecode", O.invitationCode);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    fb999: () => {
      const e = { 17837762: "1544377389683477" },
        s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.invitationCode &&
        sessionStorage.setItem("invitecode", O.invitationCode),
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    ar006: () => {
      const e = {
          8281440027: "946249607200818",
          38316220667: "2061590324241394",
          42318414899: "893342322790796",
        },
        s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode &&
          sessionStorage.setItem("invitecode", O.invitationCode);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    tc: () => {
      const e = { 782836509244: "726754589391410" },
        s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.invitationCode &&
        sessionStorage.setItem("invitecode", O.invitationCode),
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    lottery82: () => {
      const e = document.createElement("meta");
      (e.name = "description"),
        (e.content =
          "82Lottery - is an online lottery platform in India that allows users in exciting lottery games and have a chance to big prizes and be lucky winners at 82Lottery!"),
        document.head.appendChild(e);
      const s = document.createElement("meta");
      (s.name = "keywords"),
        (s.content = "82Lottery, 82bet, play india lottery"),
        document.head.appendChild(s);
    },
    fb: (e = {}) => {
      const s = O.invitationCode || sessionStorage.getItem("invitecode"),
        t = O.fb_dynamic_pixel || e[s] || "";
      O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode &&
          sessionStorage.setItem("invitecode", O.invitationCode);
      const n =
        O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
      n &&
        ((function (a, c, i, l, g, m, d) {
          a.fbq ||
            ((g = a.fbq =
              function () {
                g.callMethod
                  ? g.callMethod.apply(g, arguments)
                  : g.queue.push(arguments);
              }),
            a._fbq || (a._fbq = g),
            (g.push = g),
            (g.loaded = !0),
            (g.version = "2.0"),
            (g.queue = []),
            (m = c.createElement(i)),
            (m.async = !0),
            (m.src = l),
            (d = c.getElementsByTagName(i)[0]),
            d.parentNode.insertBefore(m, d));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", n),
        fbq("track", "PageView"));
    },
    fbNew: (e = []) => {
      const s = {};
      e.forEach((g) => {
        s[g.domainUrl] = g.pixelId;
      });
      var t = window.location.origin + "/" + window.location.hash,
        n = window.location.origin,
        a = window.location.host;
      let c =
        sessionStorage.getItem("pixel") ||
        sessionStorage.getItem("fb_dynamic_pixel");
      const i = O.fb_dynamic_pixel || "";
      O.invitationCode &&
        sessionStorage.setItem("invitecode", O.invitationCode),
        i && sessionStorage.setItem("fb_dynamic_pixel", O.fb_dynamic_pixel);
      let l = s[t] || s[n] || s[a] || c || i;
      l &&
        ((function (g, m, d, b, v, u, _) {
          g.fbq ||
            ((v = g.fbq =
              function () {
                v.callMethod
                  ? v.callMethod.apply(v, arguments)
                  : v.queue.push(arguments);
              }),
            g._fbq || (g._fbq = v),
            (v.push = v),
            (v.loaded = !0),
            (v.version = "2.0"),
            (v.queue = []),
            (u = m.createElement(d)),
            (u.async = !0),
            (u.src = b),
            (_ = m.getElementsByTagName(d)[0]),
            _.parentNode.insertBefore(u, _));
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        ),
        fbq("init", l),
        fbq("track", "PageView"),
        sessionStorage.setItem("pixel", l));
    },
  },
  Te = He({
    id: "SettingStore",
    persist: !0,
    state: () => ({
      areaPhoneLenList: [],
      areacode: "",
      headLogo: "",
      isShowAppDownloadUp: !1,
      isShowAppDownloadDown: !1,
      isShowLotteryDragon: !1,
      isShowDownAppBonusAmountSwitch: !1,
      jackportMaxReswadAmount: 0,
      projectName: "tiranga",
      projectLogo: "",
      languages: "en",
      webIco: "",
      dollarSign: "₹",
      upperOrLower: "0",
      defaultCurrentLanguage: "",
      isSplitLocalEWallet: !1,
      isOpenLoginChangeLanguage: "0",
      ossUrl: "",
      rewardValidityTime: 0,
      winRate: {},
      isShowHotGameWinOdds: !1,
      isShowAppHandCodeWashingSwitch: !1,
      bigTurntableLink: "",
      bigTurntableImgUrl: "",
      telegramExternalLink: "",
      telegramImgUrl: "",
      isOpenTurntable: !1,
      isPartnerReward: !1,
      isSelfCustomerService: !1,
      webSiteUrl: "",
      isOpenAdjustEvent: !1,
      isOpenRegisterPhoneFirstZeroSwitch: {}.VITE_SHOWREGISTERTIP || !1,
      firebaseConfig: {},
      isOpenArLottery: !1,
      isSwitchSaasBalance: !1,
      arUpiInputUtrSwitch: !1,
      isOpenInvitedWheel: !1,
      invitedWheelImgUrl: "",
      invitedWheelTotalPrizeAmount: 0,
      isOpenDownAppRewardSwitch: !1,
      isShowRewardCenter: !1,
      downAppBonusAmount: 0,
    }),
    getters: {
      getArUpiInputUtrSwitch: (e) => e.arUpiInputUtrSwitch,
      getIsCanAppDownload: (e) => e.isShowAppDownloadUp,
      getIsShowAppDownloadIcon: (e) => e.isShowAppDownloadDown,
      getIsShowLotteryDragon: (e) => e.isShowLotteryDragon,
      getJackportMaxReswadAmount: (e) => e.jackportMaxReswadAmount,
      getProjectLogo: (e) => e.projectLogo,
      getHeadLogo: (e) => e.headLogo,
      getDollarSign: (e) => e.dollarSign,
      getAreaPhoneLenList: (e) => e.areaPhoneLenList,
      getAreacode: (e) => e.areacode,
      getLanguage: (e) => e.languages,
      getWebIco: (e) => e.webIco,
      getProjectName: (e) => e.projectName,
      getUpperOrLower: (e) => e.upperOrLower,
      getDL: (e) => e.defaultCurrentLanguage,
      getIsSplitLocalEWallet: (e) => e.isSplitLocalEWallet,
      getLoginChangeLanguage: (e) => e.isOpenLoginChangeLanguage,
      getOSSUrl: (e) => e.ossUrl,
      getRewardValidityTime: (e) => e.rewardValidityTime,
      getWinRate: (e) => e.winRate,
      getIsShowAppHandCodeWashingSwitch: (e) =>
        e.isShowAppHandCodeWashingSwitch,
      getBigTurntableLink: (e) => e.bigTurntableLink,
      getTelegramExternalLink: (e) => e.telegramExternalLink,
      getTelegramImgUrl: (e) => e.telegramImgUrl,
      getBigTurntableImgUrl: (e) => e.bigTurntableImgUrl,
      getOpenTurntable: (e) => e.isOpenTurntable,
      getIsPartnerReward: (e) => e.isPartnerReward,
      getIsSelfCustomerService: (e) => e.isSelfCustomerService,
      getWebSiteUrl: (e) => e.webSiteUrl,
      getFirebaseConfig: (e) => e.firebaseConfig,
      getIsOpenArLottery: (e) => e.isOpenArLottery,
      getIsSwitchSaasBalance: (e) => e.isSwitchSaasBalance,
      getIsOpenInvitedWheel: (e) => e.isOpenInvitedWheel,
      getIsOpenDownAppRewardSwitch: (e) => e.isOpenDownAppRewardSwitch,
      getInvitedWheelImgUrl: (e) => e.invitedWheelImgUrl,
      getInvitedWheelTotalPrizeAmount: (e) => e.invitedWheelTotalPrizeAmount,
      getIsShowRewardCenter: (e) => e.isShowRewardCenter,
      getIsShowDownAppBonusAmountSwitch: (e) =>
        e.isShowDownAppBonusAmountSwitch,
      getDownAppBonusAmount: (e) => e.downAppBonusAmount,
    },
    actions: {
      async getHomeSetting() {
        var s, t;
        const e = await L(RR());
        if (e && e.data) {
          const {
            areaPhoneLenList: n,
            headLogo: a,
            isShowAppDownloadUp: c,
            isShowAppDownloadDown: i,
            isShowLotteryDragon: l,
            jackportMaxReswadAmount: g,
            projectName: m,
            projectLogo: d,
            languages: b,
            webIco: v,
            dollarSign: u,
            upperOrLower: _,
            defaultCurrentLanguage: T,
            isSplitLocalEWallet: f,
            isOpenLoginChangeLanguage: w,
            electronicWinRateExternalLink: A,
            electronicWinRateImgUrl: D,
            isShowElectronicWinRateExternalLink: C,
            isShowHotGameWinOdds: R,
            isShowAppHandCodeWashingSwitch: V,
            rewardValidityTime: X,
            ossUrl: M,
            bigTurntableLink: F,
            bigTurntableImgUrl: Z,
            telegramExternalLink: G,
            telegramImgUrl: te,
            isOpenTurntable: ce,
            isPartnerReward: be,
            eventRegionConfigList: Ie,
            isSelfCustomerService: Ee,
            webSiteUrl: ie,
            firstDepositRewardCodeAmount: B,
            isOpenRegisterPhoneFirstZeroSwitch: k,
            isShowDownAppBonusAmountSwitch: H,
            isOpenAdjustEvent: N,
            firebaseConfig: S,
            isOpenArLottery: W,
            isSwitchSaasBalance: h,
            arUpiInputUtrSwitch: I,
            isOpenInvitedWheel: q,
            isOpenDownAppRewardSwitch: E,
            invitedWheelImgUrl: J,
            invitedWheelTotalPrizeAmount: se,
            isShowRewardCenter: ge,
            downAppBonusAmount: y,
          } = e.data;
          hC(m),
            (this.ossUrl = M),
            (this.rewardValidityTime = X),
            (this.areaPhoneLenList = n),
            (this.headLogo = a),
            (this.isShowAppDownloadUp = c),
            (this.isShowAppDownloadDown = i),
            (this.isShowLotteryDragon = l),
            (this.jackportMaxReswadAmount = g),
            (this.projectLogo = d),
            (this.projectName = m),
            (this.languages = b),
            (this.webIco = v),
            (this.dollarSign = u),
            (this.upperOrLower = _),
            (this.areacode = ((s = n[0]) == null ? void 0 : s.area) || ""),
            (this.isSplitLocalEWallet = f),
            (this.isOpenLoginChangeLanguage = w),
            (this.isShowHotGameWinOdds = R || !1),
            (this.isShowDownAppBonusAmountSwitch = H || !1),
            (this.isShowAppHandCodeWashingSwitch = V),
            (this.winRate = {
              electronicWinRateExternalLink: A,
              electronicWinRateImgUrl: D,
              isShowElectronicWinRateExternalLink: C,
            }),
            (this.bigTurntableLink = F),
            (this.bigTurntableImgUrl = Z),
            (this.telegramExternalLink = G),
            (this.telegramImgUrl = te),
            (this.isOpenTurntable = ce),
            (this.isPartnerReward = be),
            (this.isSelfCustomerService = Ee),
            (this.webSiteUrl = ie),
            (this.isOpenRegisterPhoneFirstZeroSwitch = k),
            (this.isOpenAdjustEvent = N),
            (this.firebaseConfig = S),
            (this.isOpenArLottery = W || !1),
            (this.isSwitchSaasBalance = h || !1),
            (this.arUpiInputUtrSwitch = I || !1),
            (this.isOpenInvitedWheel = q || !1),
            (this.isOpenDownAppRewardSwitch = E || !1),
            (this.invitedWheelImgUrl = J || ""),
            (this.invitedWheelTotalPrizeAmount = se || 0),
            (this.isShowRewardCenter = ge || !1),
            (this.downAppBonusAmount = y || 0),
            sessionStorage.setItem("dollarSign", u),
            sessionStorage.setItem("fa1", B),
            sessionStorage.setItem("areaPhoneLenList", JSON.stringify(n)),
            localStorage.getItem("language") ||
              ((this.defaultCurrentLanguage = T.replace("tha", "th")),
              xT(this.defaultCurrentLanguage)),
            (t = document.querySelector("link[rel='icon']")) == null ||
              t.setAttribute("href", v),
            (document.title = m),
            TI.fbNew(Ie || []);
        }
      },
    },
  }),
  { t: Ws } = ke.global;
let Us = !1;
const II = He({
    id: "walletStore",
    state: () => ({
      bankName: {},
      withdrawalslist: [],
      bankList: [],
      withdrawals: { amount: 0, pwd: "", type: 0, bid: 0 },
      payTabList: [],
      amount: 0,
      timestampLast: 0,
      timestamp: 0,
      allwallets: "",
      isAllowUserAddUSDT: !0,
    }),
    getters: {
      getBankName: (e) => e.bankName,
      getWithdrawalslist: (e) => e.withdrawalslist,
      getBankList: (e) => e.bankList,
      getWithdrawal: (e) => e.withdrawals,
      getPayTabList: (e) => e.payTabList,
      getAmount: (e) => e.amount,
      getTimestampLast: (e) => e.timestampLast,
      getAllwallets: (e) => e.allwallets,
      getADDUSTD: (e) => e.isAllowUserAddUSDT,
    },
    actions: {
      setBankName(e) {
        this.bankName = e;
      },
      setWithdrawalslist(e) {
        this.withdrawalslist = e;
      },
      setBankList(e) {
        this.bankList = e;
      },
      setWithdrawal(e) {
        this.withdrawals = e;
      },
      setPayTabList(e) {
        this.payTabList = e;
      },
      setAmount(e) {
        this.amount = e;
      },
      setUSDTCanAdd(e) {
        this.isAllowUserAddUSDT =
          (e == null ? void 0 : e.isAllowUserAddUSDT) === void 0
            ? !0
            : (e == null ? void 0 : e.isAllowUserAddUSDT) === "1";
      },
      setTimestampLast(e) {
        this.timestampLast = e;
      },
      setAllwallets(e) {
        this.allwallets = e;
      },
      async GetARGameAndPlatWallets(e) {
        const s = new Date().getTime() / 1e3;
        if (s - this.timestamp <= 4) return;
        const t = await L(KR());
        if (t) {
          (this.timestamp = s), (this.allwallets = t == null ? void 0 : t.data);
          let a = (t == null ? void 0 : t.data.thidGameBalanceList) || [],
            c = 0,
            i = 0;
          if (a)
            for (var n of a)
              n.vendorCode === "Lottery" ? (c += n.balance) : (i += n.balance);
          (this.amount = c + i), e && je(Ws("refreshSuccess"));
        }
      },
      async getAllwalletsBalance(e, s = !1) {
        const t = Ae(),
          n = new Date().getTime() / 1e3;
        if (n - this.timestampLast <= 6 || Us) return;
        (Us = !0), t.getIsNotify && (await HT(1400));
        const a = await L(zR(s));
        if (((Us = !1), a)) {
          (this.timestampLast = n),
            (this.allwallets = a == null ? void 0 : a.data);
          let i = (a == null ? void 0 : a.data.thidGameBalanceList) || [],
            l = 0,
            g = 0;
          if (i)
            for (var c of i)
              c.vendorCode === "Lottery" ? (l += c.balance) : (g += c.balance);
          (this.amount = l + g), e && je(Ws("refreshSuccess"));
        }
      },
      async resetData(e, s) {
        const t = await L(s ? qR() : HR());
        if (t) {
          if (((this.amount = t == null ? void 0 : t.data.amount), e)) return;
          je(Ws("refreshSuccess"));
        }
      },
      async getPayTypeName() {
        const e = await L(XR());
        if (e) {
          if (Te().getIsSplitLocalEWallet) {
            let s = e.data.typelist.map(
              (t) => (
                t.payID === 18 &&
                  t.paySysName === "KBZPay" &&
                  ((t.payNameUrl = ss("wallet/detail", "kbz_icon")),
                  (t.payNameUrl2 = ss("wallet/detail", "kbz_icon"))),
                t.payID === 18 &&
                  t.paySysName === "WavePay" &&
                  ((t.payNameUrl = ss("wallet/detail", "wave_icon")),
                  (t.payNameUrl2 = ss("wallet/detail", "wave_icon"))),
                t
              )
            );
            this.setPayTabList(s);
          }
          this.setPayTabList(e.data.typelist);
        }
      },
    },
    persist: !0,
  }),
  gD = He({
    id: "lorreryStore",
    state: () => ({
      wingo: [
        {
          typeID: 30,
          typeName: "Win Go<br />30 second",
          tabName: "WinGo 30 Second",
          intervalM: 0.5,
          scope: "1|10|100|1000",
          sort: 1,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 1,
          typeName: "Win Go<br />1Min",
          tabName: "WinGo 1Min",
          intervalM: 1,
          scope: "1|10|100|1000",
          sort: 4,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
          show: !0,
        },
        {
          typeID: 2,
          typeName: "Win Go<br />3Min",
          tabName: "WinGo 3Min",
          intervalM: 3,
          scope: "1|10|100|1000",
          sort: 3,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 3,
          typeName: "Win Go<br />5Min",
          tabName: "WinGo 5Min",
          intervalM: 5,
          scope: "1|10|100|1000",
          sort: 2,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 4,
          typeName: "Win Go<br />30Sec",
          tabName: "WinGo 30Sec",
          intervalM: 10,
          scope: "1|10|100|1000",
          sort: 1,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
      ],
      fiveD: [
        {
          typeID: 5,
          typeName: "5D Lotre<br />1Min",
          tabName: "5D 1Min",
          intervalM: 1,
          scope: "1|10|100|1000",
          sort: 4,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
          show: !0,
        },
        {
          typeID: 6,
          typeName: "5D Lotre<br />3Min",
          tabName: "5D 3Min",
          intervalM: 3,
          scope: "1|10|100|1000",
          sort: 3,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 7,
          typeName: "5D Lotre<br />5Min",
          tabName: "5D 5Min",
          intervalM: 5,
          scope: "1|10|100|1000",
          sort: 2,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 8,
          typeName: "5D Lotre<br />10Min",
          tabName: "5D 10Min",
          intervalM: 10,
          scope: "1|10|100|1000",
          sort: 1,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
      ],
      k3: [
        {
          typeID: 9,
          typeName: "K3 Lotre<br />1Min",
          tabName: "K3 1Min",
          intervalM: 1,
          scope: "1|10|100|1000",
          sort: 4,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 10,
          typeName: "K3 Lotre<br />3Min",
          tabName: "K3 3Min",
          intervalM: 3,
          scope: "1|10|100|1000",
          sort: 3,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 11,
          typeName: "K3 Lotre<br />5Min",
          tabName: "K3 5Min",
          intervalM: 5,
          scope: "1|10|100|1000",
          sort: 2,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 12,
          typeName: "K3 Lotre<br />10Min",
          tabName: "K3 10Min",
          intervalM: 10,
          scope: "1|10|100|1000",
          sort: 1,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
      ],
      trx: [
        {
          typeID: 13,
          typeName: "Trx Win Go<br />1Min",
          tabName: "Trx 1Min",
          intervalM: 1,
          scope: "1|10|100|1000",
          sort: 4,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 14,
          typeName: "Trx Win Go<br />3Min",
          tabName: "Trx 3Min",
          intervalM: 3,
          scope: "1|10|100|1000",
          sort: 3,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 15,
          typeName: "Trx Win Go<br />5Min",
          tabName: "Trx 5Min",
          intervalM: 5,
          scope: "1|10|100|1000",
          sort: 2,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
        {
          typeID: 16,
          typeName: "Trx Win Go<br />10Min",
          tabName: "Trx 10Min",
          intervalM: 10,
          scope: "1|10|100|1000",
          sort: 1,
          gamePresentation: null,
          betMultiple: "1|5|10|20|50|100",
        },
      ],
      winGoLock: !1,
      TrxLock: !1,
      k3Lock: !1,
      fiveDLock: !1,
      winType: ({}.VITE_WINGO && JSON.parse({}.VITE_WINGO)) || [1, 2, 3, 4],
    }),
    getters: {
      getWingo: (e) => e.wingo,
      get5D: (e) => e.fiveD,
      getK3: (e) => e.k3,
      getTrx: (e) => e.trx,
    },
    actions: {
      async getWinGoData() {
        if (this.winGoLock) return;
        Ne({ overlay: !0, type: "loading" });
        const e = await L(tC()),
          s = {
            1: "Win Go<br />1Min",
            2: "Win Go<br />3Min",
            3: "Win Go<br />5Min",
            4: "Win Go<br />10Min",
            30: "Win Go<br />30s",
          };
        e &&
          e.data &&
          ((this.wingo = e.data.map(
            (t) => ((t.typeName = s[t.typeID]), (t.gamePresentation = null), t)
          )),
          (this.winGoLock = !0)),
          es();
      },
      async getTrxData() {
        if (this.TrxLock) return;
        Ne({ overlay: !0, type: "loading" });
        const e = await L(aC()),
          s = {
            13: "Trx Win Go<br />1Min",
            14: "Trx Win Go<br />3Min",
            15: "Trx Win Go<br />5Min",
            16: "Trx Win Go<br />10Min",
          };
        e &&
          e.data &&
          ((this.trx = e.data.map(
            (t) => ((t.typeName = s[t.typeID]), (t.gamePresentation = null), t)
          )),
          (this.TrxLock = !0)),
          es();
      },
      async getK3Data() {
        if (this.k3Lock) return;
        Ne({ overlay: !0, type: "loading" });
        const e = await L(pC()),
          s = {
            9: "K3 Lotre <br />1Min",
            10: "K3 Lotre<br />3Min",
            11: "K3 Lotre<br />5Min",
            12: "K3 Lotre<br />10Min",
          };
        e &&
          e.data &&
          ((this.k3 = e.data.map(
            (t) => ((t.typeName = s[t.typeID]), (t.gamePresentation = null), t)
          )),
          (this.k3Lock = !0)),
          es();
      },
      async get5DData() {
        if (this.fiveDLock) return;
        Ne({ overlay: !0, type: "loading" });
        const e = await L(iC()),
          s = {
            5: "5D<br />1Min",
            6: "5D<br />3Min",
            7: "5D<br />5Min",
            8: "5D<br />10Min",
          };
        e &&
          e.data &&
          ((this.fiveD = e.data.map(
            (t) => ((t.typeName = s[t.typeID]), (t.gamePresentation = null), t)
          )),
          (this.fiveDLock = !0)),
          es();
      },
      async getWinGoRule(e) {
        let s = this.wingo.findIndex((n) => n.typeID === e);
        if (this.wingo[s].gamePresentation) return;
        const t = await L(nC({ typeId: e }));
        t &&
          t.data &&
          (this.wingo[s].gamePresentation = t.data.gamePresentation);
      },
      async getTrxRule(e) {
        let s = this.trx.findIndex((n) => n.typeID === e);
        if (this.trx[s].gamePresentation) return;
        const t = await L(oC({ typeId: e }));
        t && t.data && (this.trx[s].gamePresentation = t.data.gamePresentation);
      },
      async getK3Rule(e) {
        let s = this.k3.findIndex((n) => n.typeID === e);
        if (this.k3[s].gamePresentation) return;
        const t = await L(cC({ typeId: e }));
        t && t.data && (this.k3[s].gamePresentation = t.data.gamePresentation);
      },
      async get5DRule(e) {
        let s = this.fiveD.findIndex((n) => n.typeID === e);
        if (this.fiveD[s].gamePresentation) return;
        const t = await L(gC({ typeId: e }));
        t &&
          t.data &&
          (this.fiveD[s].gamePresentation = t.data.gamePresentation);
      },
      setData(e, s) {
        let t = this[s].findIndex((n) => n.typeID === e.typeID);
        (this[s][t].scope = e.scope),
          (this[s][t].betMultiple = e.betMultiple),
          e.gamePresentation &&
            (this[s][t].gamePresentation = e.gamePresentation);
      },
    },
  }),
  As = "/login",
  RI = [
    "/500",
    "/",
    "/main/About/AboutDetail",
    "/rpwd",
    "/register",
    "/main/CustomerService",
    "/main/CustomerService/ServiceCollection",
    "/maintenance",
    "/downloadCenter",
    "/downloadCenter/ios",
    "/downloadCenter/empty",
  ],
  CI = ["home", "activity", "main", "promotion", "chat", "wallet"],
  ws = [];
let Xs = Object.assign({
    "../views/activity/index.vue": () =>
      r(
        () => import("./page-activity-index.vue-b8837e9f.js"),
        [
          "assets/js/page-activity-index.vue-b8837e9f.js",
          "assets/js/page-activity-index.vue_vue_type_script_setup_true_lang.ts-859ad1a5.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-index.vue_vue_type_script_setup_true_lang-f4947d3c.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-activity-index.vue_vue_type_style_index_0_scoped_214b87c9_lang-f98129fc.css",
        ]
      ),
    "../views/arWallet/index.vue": () =>
      r(
        () => import("./page-arWallet-index.vue-768b6c8f.js"),
        [
          "assets/js/page-arWallet-index.vue-768b6c8f.js",
          "assets/js/page-arWallet-index.vue_vue_type_script_setup_true_lang.ts-264972e1.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-arWallet-components-1546caab.js",
          "assets/css/page-arWallet-components-f05acc1d.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-arWallet-index.vue_vue_type_style_index_0_scoped_847764eb_lang-2b608b65.css",
        ]
      ),
    "../views/arupi/index.vue": () =>
      r(
        () => import("./page-arupi-index.vue-b6729961.js"),
        [
          "assets/js/page-arupi-index.vue-b6729961.js",
          "assets/js/page-arupi-index.vue_vue_type_script_setup_true_lang.ts-cd7ca802.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-arupi-index.vue_vue_type_style_index_0_scoped_7afe3ff2_lang-dfa74143.css",
        ]
      ),
    "../views/downloadCenter/index.vue": () =>
      r(
        () => import("./page-downloadCenter-index.vue-57958083.js"),
        [
          "assets/js/page-downloadCenter-index.vue-57958083.js",
          "assets/js/page-downloadCenter-index.vue_vue_type_script_setup_true_lang.ts-6035a9e3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-downloadCenter-index.vue_vue_type_style_index_0_scoped_887c2eae_lang-5bff268b.css",
        ]
      ),
    "../views/login/index.vue": () =>
      r(
        () => import("./page-login-index.vue-e4f62f0a.js"),
        [
          "assets/js/page-login-index.vue-e4f62f0a.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-login-index.vue_vue_type_style_index_0_scoped_47f4cc84_lang-152ba1fa.css",
        ]
      ),
    "../views/main/index.vue": () =>
      r(
        () => import("./page-main-index.vue-93bbd87e.js"),
        [
          "assets/js/page-main-index.vue-93bbd87e.js",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-main-index.vue_vue_type_style_index_0_scoped_a78765c7_lang-fdb9c9a2.css",
        ]
      ),
    "../views/maintenance/index.vue": () =>
      r(
        () => import("./page-maintenance-index.vue-ce7b3683.js"),
        [
          "assets/js/page-maintenance-index.vue-ce7b3683.js",
          "assets/js/page-maintenance-index.vue_vue_type_script_setup_true_lang.ts-37657a5b.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-maintenance-index.vue_vue_type_style_index_0_scoped_88ca4a94_lang-11cea38a.css",
        ]
      ),
    "../views/promotion/index.vue": () =>
      r(
        () => import("./page-promotion-index.vue-6ed32840.js"),
        [
          "assets/js/page-promotion-index.vue-6ed32840.js",
          "assets/js/page-promotion-index.vue_vue_type_script_setup_true_lang.ts-9d804ab2.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-promotion-TeamReport-0ceac5a3.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-promotion-TeamReport-b4099877.css",
          "assets/css/page-promotion-index.vue_vue_type_script_setup_true_lang-a2693a7f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-promotion-index.vue_vue_type_style_index_0_scoped_600663f7_lang-c8ba773a.css",
        ]
      ),
    "../views/register/index.vue": () =>
      r(
        () => import("./page-register-index.vue-b7f5b9a9.js"),
        [
          "assets/js/page-register-index.vue-b7f5b9a9.js",
          "assets/js/page-register-index.vue_vue_type_script_setup_true_lang.ts-b87ccb67.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/css/page-register-index.vue_vue_type_script_setup_true_lang-7eef3283.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-register-index.vue_vue_type_style_index_0_scoped_4752d5f1_lang-12ca9d10.css",
        ]
      ),
    "../views/rpwd/index.vue": () =>
      r(
        () => import("./page-rpwd-index.vue-1d7ee657.js"),
        [
          "assets/js/page-rpwd-index.vue-1d7ee657.js",
          "assets/js/page-rpwd-index.vue_vue_type_script_setup_true_lang.ts-db3ff464.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/css/page-rpwd-index.vue_vue_type_script_setup_true_lang-0e74062c.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-rpwd-index.vue_vue_type_style_index_0_scoped_928a098a_lang-4123754b.css",
        ]
      ),
    "../views/test/index.vue": () =>
      r(
        () => import("./page-test-index.vue-264f6b91.js"),
        [
          "assets/js/page-test-index.vue-264f6b91.js",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
        ]
      ),
    "../views/turntable/index.vue": () =>
      r(
        () => import("./page-turntable-index.vue-9fc9a687.js"),
        [
          "assets/js/page-turntable-index.vue-9fc9a687.js",
          "assets/js/page-turntable-index.vue_vue_type_script_setup_true_lang.ts-ed13cbdb.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-components-3f5d00a5.js",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/css/page-turntable-components-92d644d6.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-turntable-index.vue_vue_type_script_setup_true_lang-2ca1393d.css",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-turntable-index.vue_vue_type_style_index_0_scoped_74bb6d20_lang-a5277a26.css",
        ]
      ),
    "../views/vip/index.vue": () =>
      r(
        () => import("./page-vip-index.vue-b459b8fc.js"),
        [
          "assets/js/page-vip-index.vue-b459b8fc.js",
          "assets/js/page-vip-index.vue_vue_type_script_setup_true_lang.ts-346ec00c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-vip-index.vue_vue_type_script_setup_true_lang-771101b3.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-vip-index.vue_vue_type_style_index_0_scoped_92d3d2e1_lang-2b042406.css",
        ]
      ),
    "../views/wallet/index.vue": () =>
      r(
        () => import("./page-wallet-index.vue-e136dffb.js"),
        [
          "assets/js/page-wallet-index.vue-e136dffb.js",
          "assets/js/page-wallet-index.vue_vue_type_script_setup_true_lang.ts-8a8b99a0.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/page-wallet-index.vue_vue_type_style_index_0_scoped_0dabd3fc_lang-68a64964.css",
        ]
      ),
  }),
  Js = Object.assign({
    "../views/activity/ActivityDetail/index.vue": () =>
      r(() => Promise.resolve().then(() => UC), void 0),
    "../views/activity/Bonus/index.vue": () =>
      r(
        () => import("./page-activity-Bonus-c94a181e.js").then((e) => e.i),
        [
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-activity-Bonus-608b6579.css",
        ]
      ),
    "../views/activity/Championship/index.vue": () =>
      r(
        () =>
          import("./page-activity-Championship-c5772910.js").then((e) => e.i),
        [
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
        ]
      ),
    "../views/activity/DailySignIn/index.vue": () =>
      r(
        () =>
          import("./page-activity-DailySignIn-7bda4bcc.js").then((e) => e.i),
        [
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
        ]
      ),
    "../views/activity/DailyTasks/index.vue": () =>
      r(
        () => import("./page-activity-DailyTasks-2503d545.js").then((e) => e.i),
        [
          "assets/js/page-activity-DailyTasks-2503d545.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailyTasks-6c157f4e.css",
        ]
      ),
    "../views/activity/FirstRecharge/index.vue": () =>
      r(
        () =>
          import("./page-activity-FirstRecharge-7ed1349a.js").then((e) => e.i),
        [
          "assets/js/page-activity-FirstRecharge-7ed1349a.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-FirstRecharge-1994fe55.css",
        ]
      ),
    "../views/activity/MemberPackage/index.vue": () =>
      r(
        () =>
          import("./page-activity-MemberPackage-2ee3bc33.js").then((e) => e.i),
        [
          "assets/js/page-activity-MemberPackage-2ee3bc33.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-MemberPackage-8e83e72b.css",
        ]
      ),
    "../views/activity/PointMall/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.i),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/Turntable/index.vue": () =>
      r(
        () => import("./page-activity-Turntable-a4a5b50d.js").then((e) => e.i),
        [
          "assets/js/page-activity-Turntable-a4a5b50d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-Turntable-f1f48080.css",
        ]
      ),
    "../views/arupi/Appeal/index.vue": () =>
      r(
        () => import("./page-arupi-Appeal-92264599.js").then((e) => e.i),
        [
          "assets/js/page-arupi-Appeal-92264599.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-arupi-Appeal-cc6221a0.css",
        ]
      ),
    "../views/arupi/Fail/index.vue": () =>
      r(
        () => import("./page-arupi-Fail-979b6617.js"),
        [
          "assets/js/page-arupi-Fail-979b6617.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-c3aa243b.css",
        ]
      ),
    "../views/arupi/Payment/index.vue": () =>
      r(
        () => import("./page-arupi-Payment-997d440b.js"),
        [
          "assets/js/page-arupi-Payment-997d440b.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-998b9303.css",
        ]
      ),
    "../views/arupi/arupi_v2/index.vue": () =>
      r(
        () => import("./page-arupi-arupi_v2-cf58090a.js"),
        [
          "assets/js/page-arupi-arupi_v2-cf58090a.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-4ad23cf4.css",
        ]
      ),
    "../views/arupi/kycAppeal/index.vue": () =>
      r(
        () => import("./page-arupi-kycAppeal-3bffbc16.js").then((e) => e.i),
        [
          "assets/js/page-arupi-kycAppeal-3bffbc16.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-arupi-Appeal-92264599.js",
          "assets/css/page-arupi-Appeal-cc6221a0.css",
          "assets/css/page-arupi-kycAppeal-2841ab25.css",
        ]
      ),
    "../views/arupi/kycAppeal_v2/index.vue": () =>
      r(
        () => import("./page-arupi-kycAppeal_v2-011e7c31.js"),
        [
          "assets/js/page-arupi-kycAppeal_v2-011e7c31.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-arupi-Appeal-92264599.js",
          "assets/css/page-arupi-Appeal-cc6221a0.css",
          "assets/js/page-arupi-kycAppeal-3bffbc16.js",
          "assets/css/page-arupi-kycAppeal-2841ab25.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-49686d63.css",
        ]
      ),
    "../views/downloadCenter/empty/index.vue": () =>
      r(
        () => import("./page-downloadCenter-empty-89cfba2d.js"),
        [
          "assets/js/page-downloadCenter-empty-89cfba2d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-1a74f91a.css",
        ]
      ),
    "../views/downloadCenter/ios/index.vue": () =>
      r(
        () => import("./page-downloadCenter-ios-cd494f73.js"),
        [
          "assets/js/page-downloadCenter-ios-cd494f73.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-f08c44cc.css",
        ]
      ),
    "../views/home/AllGames/index.vue": () =>
      r(
        () => import("./page-home-AllGames-ebd16353.js").then((e) => e.i),
        [
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-home-AllGames-6031b577.css",
        ]
      ),
    "../views/home/AllLotteryGames/index.vue": () =>
      r(
        () => import("./index-00fcc234.js"),
        [
          "assets/js/index-00fcc234.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-579f2545.css",
        ]
      ),
    "../views/home/AllOnlineGames/index.vue": () =>
      r(
        () => import("./page-home-AllOnlineGames-a5826ef6.js"),
        [
          "assets/js/page-home-AllOnlineGames-a5826ef6.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-56a9b147.css",
        ]
      ),
    "../views/home/Casino/index.vue": () =>
      r(
        () => import("./page-home-Casino-ff36f722.js").then((e) => e.i),
        [
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-home-Casino-0640108f.css",
        ]
      ),
    "../views/home/Chess/index.vue": () =>
      r(
        () => import("./page-home-Chess-fa05abab.js").then((e) => e.i),
        [
          "assets/js/page-home-Chess-fa05abab.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/css/page-home-Chess-a935e832.css",
        ]
      ),
    "../views/home/FishGames/index.vue": () =>
      r(
        () => import("./page-home-FishGames-67e27902.js"),
        [
          "assets/js/page-home-FishGames-67e27902.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-368d06bf.css",
        ]
      ),
    "../views/home/Fishing/index.vue": () =>
      r(
        () => import("./page-home-Fishing-4be1699c.js"),
        [
          "assets/js/page-home-Fishing-4be1699c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-3e85bb37.css",
        ]
      ),
    "../views/home/HotGames/index.vue": () =>
      r(
        () => import("./page-home-HotGames-7eab6370.js"),
        [
          "assets/js/page-home-HotGames-7eab6370.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-ad24e6d1.css",
        ]
      ),
    "../views/home/Lottery/index.vue": () =>
      r(
        () => import("./page-home-Lottery-b9b4b2a3.js"),
        [
          "assets/js/page-home-Lottery-b9b4b2a3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-a97b3f8b.css",
        ]
      ),
    "../views/home/Messages/index.vue": () =>
      r(
        () => import("./page-home-Messages-9b17888c.js").then((e) => e.i),
        [
          "assets/js/page-home-Messages-9b17888c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-home-Messages-300061c7.css",
        ]
      ),
    "../views/home/Original/index.vue": () =>
      r(
        () => import("./page-home-Original-6fb59895.js"),
        [
          "assets/js/page-home-Original-6fb59895.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-1be3247a.css",
        ]
      ),
    "../views/home/Slots/index.vue": () =>
      r(
        () => import("./page-home-Slots-33e02d2c.js"),
        [
          "assets/js/page-home-Slots-33e02d2c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-d0134c3c.css",
        ]
      ),
    "../views/home/eSports/index.vue": () =>
      r(
        () => import("./page-home-eSports-45b7eff8.js"),
        [
          "assets/js/page-home-eSports-45b7eff8.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-7d74df59.css",
        ]
      ),
    "../views/home/game/index.vue": () =>
      r(
        () => import("./page-home-game-3a23c6a4.js"),
        [
          "assets/js/page-home-game-3a23c6a4.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-dc00deb0.css",
        ]
      ),
    "../views/main/About/index.vue": () =>
      r(
        () => import("./page-main-About-0ad5a514.js").then((e) => e.i),
        [
          "assets/js/page-main-About-0ad5a514.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-main-About-0a2b139d.css",
        ]
      ),
    "../views/main/Avatar/index.vue": () =>
      r(
        () => import("./page-main-Avatar-2f3c6726.js"),
        [
          "assets/js/page-main-Avatar-2f3c6726.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-cb1994dc.css",
        ]
      ),
    "../views/main/BetRecords/index.vue": () =>
      r(
        () => import("./page-main-BetRecords-23cd9dbf.js").then((e) => e.i),
        [
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
        ]
      ),
    "../views/main/CustomerService/index.vue": () =>
      r(
        () =>
          import("./page-main-CustomerService-f3e56e53.js").then((e) => e.i),
        [
          "assets/js/page-main-CustomerService-f3e56e53.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-main-CustomerService-c6a43cb8.css",
        ]
      ),
    "../views/main/Feedback/index.vue": () =>
      r(
        () => import("./page-main-Feedback-5343fa13.js"),
        [
          "assets/js/page-main-Feedback-5343fa13.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-127fc91b.css",
        ]
      ),
    "../views/main/GameStats/index.vue": () =>
      r(
        () => import("./page-main-GameStats-9ddf4056.js"),
        [
          "assets/js/page-main-GameStats-9ddf4056.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-18dce474.css",
        ]
      ),
    "../views/main/GoogleVerify/index.vue": () =>
      r(
        () => import("./page-main-GoogleVerify-2f301acd.js").then((e) => e.i),
        [
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
        ]
      ),
    "../views/main/Guide/index.vue": () =>
      r(
        () => import("./page-main-Guide-39fafdcc.js"),
        [
          "assets/js/page-main-Guide-39fafdcc.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-b5fb5d98.css",
        ]
      ),
    "../views/main/InvitationBonus/index.vue": () =>
      r(
        () =>
          import("./page-main-InvitationBonus-a20acc62.js").then((e) => e.i),
        [
          "assets/js/page-main-InvitationBonus-a20acc62.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-main-InvitationBonus-ddde9522.css",
        ]
      ),
    "../views/main/Language/index.vue": () =>
      r(
        () => import("./page-main-Language-76059ab6.js"),
        [
          "assets/js/page-main-Language-76059ab6.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-5bd3c6c1.css",
        ]
      ),
    "../views/main/Laundry/index.vue": () =>
      r(
        () => import("./page-main-Laundry-5f400a58.js").then((e) => e.i),
        [
          "assets/js/page-main-Laundry-5f400a58.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-main-Laundry-399460d6.css",
        ]
      ),
    "../views/main/MyCoins/index.vue": () =>
      r(
        () => import("./page-main-MyCoins-849287eb.js"),
        [
          "assets/js/page-main-MyCoins-849287eb.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-3c21bae8.css",
        ]
      ),
    "../views/main/MyCps/index.vue": () =>
      r(
        () => import("./page-main-MyCps-2e6e6227.js"),
        [
          "assets/js/page-main-MyCps-2e6e6227.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-53763fce.css",
        ]
      ),
    "../views/main/Notification/index.vue": () =>
      r(
        () => import("./page-main-Notification-4bbad700.js"),
        [
          "assets/js/page-main-Notification-4bbad700.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-0aeaa076.css",
        ]
      ),
    "../views/main/PointDetail/index.vue": () =>
      r(
        () => import("./page-main-PointDetail-72255778.js"),
        [
          "assets/js/page-main-PointDetail-72255778.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
        ]
      ),
    "../views/main/RedeemGift/index.vue": () =>
      r(
        () => import("./page-main-RedeemGift-3fa1016d.js"),
        [
          "assets/js/page-main-RedeemGift-3fa1016d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-559367fa.css",
        ]
      ),
    "../views/main/SettingCenter/index.vue": () =>
      r(
        () => import("./page-main-SettingCenter-174c20d3.js").then((e) => e.i),
        [
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
        ]
      ),
    "../views/main/StrongBox/index.vue": () =>
      r(
        () => import("./page-main-StrongBox-78adb505.js").then((e) => e.i),
        [
          "assets/js/page-main-StrongBox-78adb505.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-main-StrongBox-6c2fafaf.css",
        ]
      ),
    "../views/main/SuperJackpot/index.vue": () =>
      r(
        () => import("./page-main-SuperJackpot-5cdae3d3.js").then((e) => e.i),
        [
          "assets/js/page-main-SuperJackpot-5cdae3d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-main-SuperJackpot-034fc85f.css",
        ]
      ),
    "../views/promotion/CommissionDetail/index.vue": () =>
      r(
        () => import("./page-promotion-CommissionDetail-8061901c.js"),
        [
          "assets/js/page-promotion-CommissionDetail-8061901c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-7a2e3b9b.css",
        ]
      ),
    "../views/promotion/MyCommission/index.vue": () =>
      r(
        () =>
          import("./page-promotion-MyCommission-1c7ba20d.js").then((e) => e.i),
        [
          "assets/js/page-promotion-MyCommission-1c7ba20d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-promotion-MyCommission-7dd23603.css",
        ]
      ),
    "../views/promotion/MyInvitation/index.vue": () =>
      r(
        () =>
          import("./page-promotion-MyInvitation-87fe6c0d.js").then((e) => e.i),
        [
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-MyInvitation-66710573.css",
        ]
      ),
    "../views/promotion/MyReceive/index.vue": () =>
      r(
        () => import("./page-promotion-MyReceive-cdf60dc4.js"),
        [
          "assets/js/page-promotion-MyReceive-cdf60dc4.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-9dd9fdd9.css",
        ]
      ),
    "../views/promotion/PromotionRule/index.vue": () =>
      r(
        () => import("./page-promotion-PromotionRule-b25307fc.js"),
        [
          "assets/js/page-promotion-PromotionRule-b25307fc.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-f29d12f1.css",
        ]
      ),
    "../views/promotion/PromotionShare/index.vue": () =>
      r(
        () => import("./page-promotion-PromotionShare-9da78278.js"),
        [
          "assets/js/page-promotion-PromotionShare-9da78278.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-26da3088.css",
        ]
      ),
    "../views/promotion/RebateRatio/index.vue": () =>
      r(
        () => import("./page-promotion-RebateRatio-cede1311.js"),
        [
          "assets/js/page-promotion-RebateRatio-cede1311.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-732aa85c.css",
        ]
      ),
    "../views/promotion/Server/index.vue": () =>
      r(
        () => import("./page-promotion-Server-c8ca311e.js").then((e) => e.i),
        [
          "assets/js/page-promotion-Server-c8ca311e.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-promotion-Server-1fe351f8.css",
        ]
      ),
    "../views/promotion/Subordinate/index.vue": () =>
      r(
        () => import("./page-promotion-Subordinate-2a456ac4.js"),
        [
          "assets/js/page-promotion-Subordinate-2a456ac4.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-c7cbf941.css",
        ]
      ),
    "../views/promotion/TeamPartner/index.vue": () =>
      r(
        () =>
          import("./page-promotion-TeamPartner-9a70e0c2.js").then((e) => e.i),
        [
          "assets/js/page-promotion-TeamPartner-9a70e0c2.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-TeamPartner-d433c1ee.css",
        ]
      ),
    "../views/promotion/TeamReport/index.vue": () =>
      r(
        () =>
          import("./page-promotion-TeamReport-0ceac5a3.js").then((e) => e.i),
        [
          "assets/js/page-promotion-TeamReport-0ceac5a3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-promotion-TeamReport-b4099877.css",
        ]
      ),
    "../views/saasLottery/D5/index.vue": () =>
      r(
        () => import("./page-saasLottery-D5-c991f6a0.js").then((e) => e.V),
        [
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
        ]
      ),
    "../views/saasLottery/K3/index.vue": () =>
      r(
        () => import("./page-saasLottery-K3-885050cf.js").then((e) => e.i),
        [
          "assets/js/page-saasLottery-K3-885050cf.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/css/page-saasLottery-K3-4f3cb208.css",
        ]
      ),
    "../views/saasLottery/MotoRace/index.vue": () =>
      r(
        () =>
          import("./page-saasLottery-MotoRace-5b715646.js").then((e) => e.i),
        [
          "assets/js/page-saasLottery-MotoRace-5b715646.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/css/page-saasLottery-MotoRace-c6a96213.css",
        ]
      ),
    "../views/saasLottery/SaasChangLong/index.vue": () =>
      r(
        () =>
          import("./page-saasLottery-SaasChangLong-0d72bafc.js").then(
            (e) => e.i
          ),
        [
          "assets/js/page-saasLottery-SaasChangLong-0d72bafc.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/js/page-saasLottery-MotoRace-5b715646.js",
          "assets/css/page-saasLottery-MotoRace-c6a96213.css",
          "assets/css/page-saasLottery-SaasChangLong-acc6252b.css",
        ]
      ),
    "../views/saasLottery/TrxWinGo/index.vue": () =>
      r(
        () => import("./page-saasLottery-TrxWinGo-9e6733ad.js"),
        [
          "assets/js/page-saasLottery-TrxWinGo-9e6733ad.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-7efc22f9.css",
        ]
      ),
    "../views/saasLottery/VideoWinGo/index.vue": () =>
      r(
        () =>
          import("./page-saasLottery-VideoWinGo-2b067161.js").then((e) => e.i),
        [
          "assets/js/page-saasLottery-VideoWinGo-2b067161.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/css/page-saasLottery-VideoWinGo-9e6fce7a.css",
        ]
      ),
    "../views/saasLottery/WinGo/index.vue": () =>
      r(
        () => import("./page-saasLottery-WinGo-db1c87da.js"),
        [
          "assets/js/page-saasLottery-WinGo-db1c87da.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/js/page-saasLottery-VideoWinGo-2b067161.js",
          "assets/css/page-saasLottery-VideoWinGo-9e6fce7a.css",
          "assets/js/page-saasLottery-SaasChangLong-0d72bafc.js",
          "assets/js/page-saasLottery-MotoRace-5b715646.js",
          "assets/css/page-saasLottery-MotoRace-c6a96213.css",
          "assets/css/page-saasLottery-SaasChangLong-acc6252b.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-35705175.css",
        ]
      ),
    "../views/turntable/withdrawHistory/index.vue": () =>
      r(
        () => import("./page-turntable-withdrawHistory-93800122.js"),
        [
          "assets/js/page-turntable-withdrawHistory-93800122.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-66882331.css",
        ]
      ),
    "../views/vip/RebateDetails/index.vue": () =>
      r(
        () => import("./page-vip-RebateDetails-3559a0fa.js"),
        [
          "assets/js/page-vip-RebateDetails-3559a0fa.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-72866795.css",
        ]
      ),
    "../views/vip/RecordVsruleHistory/index.vue": () =>
      r(
        () => import("./page-vip-RecordVsruleHistory-4f18dadd.js"),
        [
          "assets/js/page-vip-RecordVsruleHistory-4f18dadd.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-7711cd2b.css",
        ]
      ),
    "../views/wallet/ArbRule/index.vue": () =>
      r(
        () => import("./page-wallet-ArbRule-418ba61d.js"),
        [
          "assets/js/page-wallet-ArbRule-418ba61d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-a6a76edd.css",
        ]
      ),
    "../views/wallet/BankStatus/index.vue": () =>
      r(
        () => import("./page-wallet-BankStatus-8d8cb7e0.js"),
        [
          "assets/js/page-wallet-BankStatus-8d8cb7e0.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-5cfe3fd0.css",
        ]
      ),
    "../views/wallet/CancelRecharge/index.vue": () =>
      r(
        () => import("./page-wallet-CancelRecharge-f72a5a40.js"),
        [
          "assets/js/page-wallet-CancelRecharge-f72a5a40.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-62fb6178.css",
        ]
      ),
    "../views/wallet/OrderCancel/index.vue": () =>
      r(
        () => import("./page-wallet-OrderCancel-76833c18.js"),
        [
          "assets/js/page-wallet-OrderCancel-76833c18.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-c1bc57aa.css",
        ]
      ),
    "../views/wallet/OtherPay/index.vue": () =>
      r(
        () => import("./page-wallet-OtherPay-4f4fd754.js").then((e) => e.i),
        [
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
        ]
      ),
    "../views/wallet/Recharge/index.vue": () =>
      r(
        () => import("./page-wallet-Recharge-15722c11.js").then((e) => e.i),
        [
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
        ]
      ),
    "../views/wallet/RechargeArUpi/index.vue": () =>
      r(
        () => import("./page-wallet-RechargeArUpi-8ebe02f1.js"),
        [
          "assets/js/page-wallet-RechargeArUpi-8ebe02f1.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-a7f3c74c.css",
        ]
      ),
    "../views/wallet/RechargeDetail/index.vue": () =>
      r(
        () => import("./page-wallet-RechargeDetail-a99b4c65.js"),
        [
          "assets/js/page-wallet-RechargeDetail-a99b4c65.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-0246e31f.css",
        ]
      ),
    "../views/wallet/RechargeHistory/index.vue": () =>
      r(
        () =>
          import("./page-wallet-RechargeHistory-6602bddb.js").then((e) => e.i),
        [
          "assets/js/page-wallet-RechargeHistory-6602bddb.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/css/page-wallet-RechargeHistory-087ac70f.css",
        ]
      ),
    "../views/wallet/RechargeUsdt/index.vue": () =>
      r(
        () => import("./page-wallet-RechargeUsdt-df0e2144.js"),
        [
          "assets/js/page-wallet-RechargeUsdt-df0e2144.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-3949d951.css",
        ]
      ),
    "../views/wallet/TransAction/index.vue": () =>
      r(
        () => import("./page-wallet-TransAction-57b585aa.js"),
        [
          "assets/js/page-wallet-TransAction-57b585aa.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-622796d7.css",
        ]
      ),
    "../views/wallet/Withdraw/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.i),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/WithdrawHistory/index.vue": () =>
      r(
        () =>
          import("./page-wallet-WithdrawHistory-a6ce973d.js").then((e) => e.i),
        [
          "assets/js/page-wallet-WithdrawHistory-a6ce973d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
          "assets/js/page-wallet-RechargeHistory-6602bddb.js",
          "assets/css/page-wallet-RechargeHistory-087ac70f.css",
          "assets/css/page-wallet-WithdrawHistory-730b49d5.css",
        ]
      ),
  }),
  Ys = Object.assign({
    "../views/activity/Championship/ChampionshipDetail/index.vue": () =>
      r(
        () =>
          import("./page-activity-Championship-c5772910.js").then((e) => e.a),
        [
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
        ]
      ),
    "../views/activity/DailySignIn/Record/index.vue": () =>
      r(
        () =>
          import("./page-activity-DailySignIn-7bda4bcc.js").then((e) => e.a),
        [
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
        ]
      ),
    "../views/activity/DailySignIn/Rules/index.vue": () =>
      r(
        () =>
          import("./page-activity-DailySignIn-7bda4bcc.js").then((e) => e.b),
        [
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
        ]
      ),
    "../views/activity/DailyTasks/Record/index.vue": () =>
      r(
        () => import("./page-activity-DailyTasks-2503d545.js").then((e) => e.a),
        [
          "assets/js/page-activity-DailyTasks-2503d545.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailyTasks-6c157f4e.css",
        ]
      ),
    "../views/activity/MemberPackage/Rules/index.vue": () =>
      r(
        () =>
          import("./page-activity-MemberPackage-2ee3bc33.js").then((e) => e.a),
        [
          "assets/js/page-activity-MemberPackage-2ee3bc33.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-MemberPackage-8e83e72b.css",
        ]
      ),
    "../views/activity/PointMall/AddAddress/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.a),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/LotteryActivity/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.b),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/LotteryDetail/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.c),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/MyLottery/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.d),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/MyOrders/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.e),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/OrderDetail/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.f),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/ReceiveLottery/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.g),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/Record/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.h),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/Redeem/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.j),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/PointMall/Rules/index.vue": () =>
      r(
        () => import("./page-activity-PointMall-19e2176f.js").then((e) => e.k),
        [
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
        ]
      ),
    "../views/activity/Turntable/Detail/index.vue": () =>
      r(
        () => import("./page-activity-Turntable-a4a5b50d.js").then((e) => e.a),
        [
          "assets/js/page-activity-Turntable-a4a5b50d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-Turntable-f1f48080.css",
        ]
      ),
    "../views/activity/Turntable/Introduce/index.vue": () =>
      r(
        () => import("./page-activity-Turntable-a4a5b50d.js").then((e) => e.b),
        [
          "assets/js/page-activity-Turntable-a4a5b50d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-Turntable-f1f48080.css",
        ]
      ),
    "../views/activity/Turntable/Rules/index.vue": () =>
      r(
        () => import("./page-activity-Turntable-a4a5b50d.js").then((e) => e.c),
        [
          "assets/js/page-activity-Turntable-a4a5b50d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-activity-Turntable-f1f48080.css",
        ]
      ),
    "../views/home/AllLotteryGames/4D/index.vue": () =>
      r(
        () => import("./index-dbda4b0c.js"),
        [
          "assets/js/index-dbda4b0c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/use4D.hook-bcecec5a.js",
          "assets/js/showResult-f3d4a02d.js",
          "assets/css/showResult-6239d839.css",
          "assets/js/showGame-756890c0.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/showGame-16c1f0e5.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-5c9ec1d8.css",
        ]
      ),
    "../views/home/AllLotteryGames/4DLotteryResults/index.vue": () =>
      r(
        () => import("./index-340eecd2.js"),
        [
          "assets/js/index-340eecd2.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/showResult-f3d4a02d.js",
          "assets/css/showResult-6239d839.css",
          "assets/js/use4D.hook-bcecec5a.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-41c18b88.css",
        ]
      ),
    "../views/home/AllLotteryGames/4DOdds/index.vue": () =>
      r(
        () => import("./index-a58c5a38.js"),
        [
          "assets/js/index-a58c5a38.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/use4D.hook-bcecec5a.js",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-3770c846.css",
        ]
      ),
    "../views/home/AllLotteryGames/4DPlay/index.vue": () =>
      r(
        () => import("./index-5c71729e.js"),
        [
          "assets/js/index-5c71729e.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-7acac3df.css",
        ]
      ),
    "../views/home/AllLotteryGames/4DmyGame/index.vue": () =>
      r(
        () => import("./index-f1384103.js"),
        [
          "assets/js/index-f1384103.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/showGame-756890c0.js",
          "assets/js/showResult-f3d4a02d.js",
          "assets/css/showResult-6239d839.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/use4D.hook-bcecec5a.js",
          "assets/css/showGame-16c1f0e5.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-4ace13d9.css",
        ]
      ),
    "../views/home/AllLotteryGames/5D/index.vue": () =>
      r(
        () => import("./index-99b6bf92.js"),
        [
          "assets/js/index-99b6bf92.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/audio-3199225d.js",
          "assets/css/audio-e4083850.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/MyGameRecord-3d3e4253.js",
          "assets/js/MayrecordList-9b743c2e.js",
          "assets/css/MayrecordList-8fd07e14.css",
          "assets/css/MyGameRecord-6d1eef75.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-d8657f62.css",
        ]
      ),
    "../views/home/AllLotteryGames/BettingRecord5D/index.vue": () =>
      r(
        () => import("./index-23ce3ce6.js"),
        [
          "assets/js/index-23ce3ce6.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/MayrecordList-9b743c2e.js",
          "assets/css/MayrecordList-8fd07e14.css",
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-6339d5b7.css",
        ]
      ),
    "../views/home/AllLotteryGames/BettingRecordK3/index.vue": () =>
      r(
        () => import("./index-61d2c41e.js"),
        [
          "assets/js/index-61d2c41e.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/MayrecordList-6a5c04fc.js",
          "assets/css/MayrecordList-3b789575.css",
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-5bb15185.css",
        ]
      ),
    "../views/home/AllLotteryGames/BettingRecordWin/index.vue": () =>
      r(
        () => import("./index-5209cffd.js"),
        [
          "assets/js/index-5209cffd.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/MayrecordList-cd649a5c.js",
          "assets/css/MayrecordList-7b6f4905.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-b44d129c.css",
        ]
      ),
    "../views/home/AllLotteryGames/BettingRecordWinTrx/index.vue": () =>
      r(
        () => import("./index-ed564707.js"),
        [
          "assets/js/index-ed564707.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/MayrecordList-cd649a5c.js",
          "assets/css/MayrecordList-7b6f4905.css",
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-75e23cda.css",
        ]
      ),
    "../views/home/AllLotteryGames/Binguo/index.vue": () =>
      r(
        () => import("./index-b729ea3e.js"),
        [
          "assets/js/index-b729ea3e.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-f50a1976.css",
        ]
      ),
    "../views/home/AllLotteryGames/BinguoCount/index.vue": () =>
      r(
        () => import("./index-210b7bc9.js"),
        [
          "assets/js/index-210b7bc9.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-bb47a999.css",
        ]
      ),
    "../views/home/AllLotteryGames/BinguoRecord/index.vue": () =>
      r(
        () => import("./index-fbc9f457.js"),
        [
          "assets/js/index-fbc9f457.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-main-BetRecords-23cd9dbf.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-main-BetRecords-1e0c3344.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-59c14ddc.css",
        ]
      ),
    "../views/home/AllLotteryGames/ChangLong/index.vue": () =>
      r(
        () => import("./index-8fe5beef.js"),
        [
          "assets/js/index-8fe5beef.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/MyGameRecord-8f9b2b54.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/MayrecordList-cd649a5c.js",
          "assets/css/MayrecordList-7b6f4905.css",
          "assets/css/MyGameRecord-a4c5b06e.css",
          "assets/js/MyGameRecord-3d3e4253.js",
          "assets/js/MayrecordList-9b743c2e.js",
          "assets/css/MayrecordList-8fd07e14.css",
          "assets/css/MyGameRecord-6d1eef75.css",
          "assets/js/MyGameRecord-5589bd7e.js",
          "assets/js/MayrecordList-6a5c04fc.js",
          "assets/css/MayrecordList-3b789575.css",
          "assets/css/MyGameRecord-9b43697f.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-d597da1e.css",
        ]
      ),
    "../views/home/AllLotteryGames/K3/index.vue": () =>
      r(
        () => import("./index-d07de874.js"),
        [
          "assets/js/index-d07de874.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/audio-3199225d.js",
          "assets/css/audio-e4083850.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/MyGameRecord-5589bd7e.js",
          "assets/js/MayrecordList-6a5c04fc.js",
          "assets/css/MayrecordList-3b789575.css",
          "assets/css/MyGameRecord-9b43697f.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-a9c74a98.css",
        ]
      ),
    "../views/home/AllLotteryGames/NewVietnam/index.vue": () =>
      r(
        () => import("./index-46f399a2.js"),
        [
          "assets/js/index-46f399a2.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/MyGameRecord-35862572.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/MyGameRecord-3111f221.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-eaab5f84.css",
        ]
      ),
    "../views/home/AllLotteryGames/Play/index.vue": () =>
      r(
        () => import("./index-8abea632.js"),
        [
          "assets/js/index-8abea632.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-829b58cd.css",
        ]
      ),
    "../views/home/AllLotteryGames/WinGo/index.vue": () =>
      r(
        () => import("./index-b5e71da4.js"),
        [
          "assets/js/index-b5e71da4.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/audio-3199225d.js",
          "assets/css/audio-e4083850.css",
          "assets/js/WinningTips-25b7d8e0.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/WinningTips-12e12a5e.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/MyGameRecord-8f9b2b54.js",
          "assets/js/MayrecordList-cd649a5c.js",
          "assets/css/MayrecordList-7b6f4905.css",
          "assets/css/MyGameRecord-a4c5b06e.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-saasLottery-D5-c991f6a0.js",
          "assets/css/page-saasLottery-D5-02b7ea84.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-224d1f6b.css",
        ]
      ),
    "../views/home/AllLotteryGames/WinTrx/index.vue": () =>
      r(
        () => import("./index-fb1502c5.js"),
        [
          "assets/js/index-fb1502c5.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/audio-3199225d.js",
          "assets/css/audio-e4083850.css",
          "assets/js/WinningTips-25b7d8e0.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/WinningTips-12e12a5e.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/js/MyGameRecord-8f9b2b54.js",
          "assets/js/MayrecordList-cd649a5c.js",
          "assets/css/MayrecordList-7b6f4905.css",
          "assets/css/MyGameRecord-a4c5b06e.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-4a874873.css",
        ]
      ),
    "../views/home/AllLotteryGames/WinTrxIframe/index.vue": () =>
      r(
        () => import("./index-8d3c00de.js"),
        [
          "assets/js/index-8d3c00de.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-b158b076.css",
        ]
      ),
    "../views/home/AllLotteryGames/XoSo/index.vue": () =>
      r(
        () => import("./index-a0fb6db8.js"),
        [
          "assets/js/index-a0fb6db8.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-db4a7ce5.css",
        ]
      ),
    "../views/home/AllLotteryGames/XoSoRecord/index.vue": () =>
      r(
        () => import("./index-a9668535.js"),
        [
          "assets/js/index-a9668535.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-wallet-RechargeHistory-6602bddb.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/css/page-wallet-RechargeHistory-087ac70f.css",
          "assets/js/MyGameRecord-35862572.js",
          "assets/css/MyGameRecord-3111f221.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-2d772cdf.css",
        ]
      ),
    "../views/home/AllLotteryGames/XoSoRecordF/index.vue": () =>
      r(
        () => import("./index-fe6776d9.js"),
        [
          "assets/js/index-fe6776d9.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/MyGameRecord-35862572.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/MyGameRecord-3111f221.css",
          "assets/js/page-turntable-assets-d6267459.js",
          "assets/js/native/index-9bac92b2.js",
          "assets/js/en-5d34117c.js",
          "assets/css/index-41178364.css",
        ]
      ),
    "../views/home/Casino/Detail/index.vue": () =>
      r(
        () => import("./page-home-Casino-ff36f722.js").then((e) => e.a),
        [
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-home-Casino-0640108f.css",
        ]
      ),
    "../views/home/Chess/Detail/index.vue": () =>
      r(
        () => import("./page-home-Chess-fa05abab.js").then((e) => e.a),
        [
          "assets/js/page-home-Chess-fa05abab.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/css/page-home-Chess-a935e832.css",
        ]
      ),
    "../views/home/Messages/MessageDetail/index.vue": () =>
      r(
        () => import("./page-home-Messages-9b17888c.js").then((e) => e.a),
        [
          "assets/js/page-home-Messages-9b17888c.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-home-Messages-300061c7.css",
        ]
      ),
    "../views/main/About/AboutDetail/index.vue": () =>
      r(
        () => import("./page-main-About-0ad5a514.js").then((e) => e.a),
        [
          "assets/js/page-main-About-0ad5a514.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-main-About-0a2b139d.css",
        ]
      ),
    "../views/main/CustomerService/ServiceCollection/index.vue": () =>
      r(
        () =>
          import("./page-main-CustomerService-f3e56e53.js").then((e) => e.a),
        [
          "assets/js/page-main-CustomerService-f3e56e53.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-main-CustomerService-c6a43cb8.css",
        ]
      ),
    "../views/main/GoogleVerify/BindGoogle/index.vue": () =>
      r(
        () => import("./page-main-GoogleVerify-2f301acd.js").then((e) => e.a),
        [
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
        ]
      ),
    "../views/main/InvitationBonus/Record/index.vue": () =>
      r(
        () =>
          import("./page-main-InvitationBonus-a20acc62.js").then((e) => e.a),
        [
          "assets/js/page-main-InvitationBonus-a20acc62.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-main-InvitationBonus-ddde9522.css",
        ]
      ),
    "../views/main/InvitationBonus/Rule/index.vue": () =>
      r(
        () =>
          import("./page-main-InvitationBonus-a20acc62.js").then((e) => e.b),
        [
          "assets/js/page-main-InvitationBonus-a20acc62.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-main-InvitationBonus-ddde9522.css",
        ]
      ),
    "../views/main/Laundry/LaundryRecord/index.vue": () =>
      r(
        () => import("./page-main-Laundry-5f400a58.js").then((e) => e.a),
        [
          "assets/js/page-main-Laundry-5f400a58.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-main-Laundry-399460d6.css",
        ]
      ),
    "../views/main/Laundry/LaundryRule/index.vue": () =>
      r(
        () => import("./page-main-Laundry-5f400a58.js").then((e) => e.b),
        [
          "assets/js/page-main-Laundry-5f400a58.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-main-Laundry-399460d6.css",
        ]
      ),
    "../views/main/SettingCenter/BindEmail/index.vue": () =>
      r(
        () => import("./page-main-SettingCenter-174c20d3.js").then((e) => e.a),
        [
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
        ]
      ),
    "../views/main/SettingCenter/LoginPassword/index.vue": () =>
      r(
        () => import("./page-main-SettingCenter-174c20d3.js").then((e) => e.b),
        [
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
        ]
      ),
    "../views/main/SettingCenter/UpdatePhone/index.vue": () =>
      r(
        () => import("./page-main-SettingCenter-174c20d3.js").then((e) => e.c),
        [
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
        ]
      ),
    "../views/main/StrongBox/StrongBoxAbout/index.vue": () =>
      r(
        () => import("./page-main-StrongBox-78adb505.js").then((e) => e.a),
        [
          "assets/js/page-main-StrongBox-78adb505.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-main-StrongBox-6c2fafaf.css",
        ]
      ),
    "../views/main/StrongBox/StrongBoxRecord/index.vue": () =>
      r(
        () => import("./page-main-StrongBox-78adb505.js").then((e) => e.b),
        [
          "assets/js/page-main-StrongBox-78adb505.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-main-StrongBox-6c2fafaf.css",
        ]
      ),
    "../views/main/SuperJackpot/rule/index.vue": () =>
      r(
        () => import("./page-main-SuperJackpot-5cdae3d3.js").then((e) => e.a),
        [
          "assets/js/page-main-SuperJackpot-5cdae3d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-main-SuperJackpot-034fc85f.css",
        ]
      ),
    "../views/main/SuperJackpot/star/index.vue": () =>
      r(
        () => import("./page-main-SuperJackpot-5cdae3d3.js").then((e) => e.b),
        [
          "assets/js/page-main-SuperJackpot-5cdae3d3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-main-SuperJackpot-034fc85f.css",
        ]
      ),
    "../views/promotion/MyCommission/MyCommissionDetail/index.vue": () =>
      r(
        () =>
          import("./page-promotion-MyCommission-1c7ba20d.js").then((e) => e.a),
        [
          "assets/js/page-promotion-MyCommission-1c7ba20d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-promotion-MyCommission-7dd23603.css",
        ]
      ),
    "../views/promotion/MyInvitation/InvitationDetail/index.vue": () =>
      r(
        () =>
          import("./page-promotion-MyInvitation-87fe6c0d.js").then((e) => e.a),
        [
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-MyInvitation-66710573.css",
        ]
      ),
    "../views/promotion/Server/ServiceCollection/index.vue": () =>
      r(
        () => import("./page-promotion-Server-c8ca311e.js").then((e) => e.a),
        [
          "assets/js/page-promotion-Server-c8ca311e.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/css/page-promotion-Server-1fe351f8.css",
        ]
      ),
    "../views/promotion/TeamPartner/Invitation/index.vue": () =>
      r(
        () =>
          import("./page-promotion-TeamPartner-9a70e0c2.js").then((e) => e.a),
        [
          "assets/js/page-promotion-TeamPartner-9a70e0c2.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-TeamPartner-d433c1ee.css",
        ]
      ),
    "../views/promotion/TeamReport/TeamReportDetail/index.vue": () =>
      r(
        () =>
          import("./page-promotion-TeamReport-0ceac5a3.js").then((e) => e.a),
        [
          "assets/js/page-promotion-TeamReport-0ceac5a3.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-promotion-TeamReport-b4099877.css",
        ]
      ),
    "../views/wallet/RechargeHistory/RechargeUpiDetail/index.vue": () =>
      r(
        () =>
          import("./page-wallet-RechargeHistory-6602bddb.js").then((e) => e.a),
        [
          "assets/js/page-wallet-RechargeHistory-6602bddb.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/css/page-wallet-RechargeHistory-087ac70f.css",
        ]
      ),
    "../views/wallet/Withdraw/AddBankCard/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.b),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddKbz/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.d),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddPIX/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.e),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddRsnPay/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.f),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddType4/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.g),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddUSDT/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.h),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddUpi/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.j),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/AddWave/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.k),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/BankCard/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.l),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/C2cDetail/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.m),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/ChooseBank/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.a),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/PIX/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.n),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/RsnPay/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.o),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/Type4/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.p),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/USDT/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.q),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/Upi/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.r),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/c2cCancelWithdrawal/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.s),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/Withdraw/c2cWrongAmount/index.vue": () =>
      r(
        () => import("./page-wallet-Withdraw-3ad80760.js").then((e) => e.t),
        [
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
        ]
      ),
    "../views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue": () =>
      r(
        () =>
          import("./page-wallet-WithdrawHistory-a6ce973d.js").then((e) => e.a),
        [
          "assets/js/page-wallet-WithdrawHistory-a6ce973d.js",
          "assets/js/common.modules-cecf9b0d.js",
          "assets/css/common-e210f711.css",
          "assets/js/page-wallet-Withdraw-3ad80760.js",
          "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-26a67568.js",
          "assets/js/page-activity-Championship-c5772910.js",
          "assets/js/page-activity-Bonus-c94a181e.js",
          "assets/css/page-activity-Bonus-608b6579.css",
          "assets/css/page-activity-Championship-0dbc2b73.css",
          "assets/js/page-activity-PointMall-19e2176f.js",
          "assets/js/page-activity-DailySignIn-7bda4bcc.js",
          "assets/css/page-activity-DailySignIn-129a7831.css",
          "assets/css/page-activity-PointMall-7a01fa13.css",
          "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-f52dbe76.css",
          "assets/js/page-wallet-Recharge-15722c11.js",
          "assets/js/page-wallet-OtherPay-4f4fd754.js",
          "assets/css/page-wallet-OtherPay-0370b97c.css",
          "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-20c7be30.js",
          "assets/js/page-main-SettingCenter-174c20d3.js",
          "assets/js/page-main-GoogleVerify-2f301acd.js",
          "assets/css/page-main-GoogleVerify-193cdf16.css",
          "assets/js/page-home-other-6d9782ba.js",
          "assets/js/page-home-Casino-ff36f722.js",
          "assets/css/page-home-Casino-0640108f.css",
          "assets/js/page-home-AllGames-ebd16353.js",
          "assets/css/page-home-AllGames-6031b577.css",
          "assets/css/page-home-other-e61ff531.css",
          "assets/css/page-main-SettingCenter-48faf3e2.css",
          "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css",
          "assets/css/page-wallet-Recharge-898ddc63.css",
          "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-07da407d.js",
          "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css",
          "assets/js/page-promotion-MyInvitation-87fe6c0d.js",
          "assets/css/page-promotion-MyInvitation-66710573.css",
          "assets/css/page-wallet-Withdraw-50fc28be.css",
          "assets/js/page-wallet-RechargeHistory-6602bddb.js",
          "assets/css/page-wallet-RechargeHistory-087ac70f.css",
          "assets/css/page-wallet-WithdrawHistory-730b49d5.css",
        ]
      ),
  });
const ct = ["AllGames"];
for (const e in Xs) {
  const s = e.split("/")[2];
  s !== "home" &&
    s !== "test" &&
    ws.push({
      path: s === "home" ? "/" : `/${s}`,
      name: s,
      component: Xs[e],
      meta: { title: s, tabBar: CI.includes(s), keepAlive: ct.includes(s) },
    });
}
Xs = null;
for (const e in Js) {
  const s = "/" + e.split("/")[2] + "/" + e.split("/")[3],
    t = e.split("/")[3];
  if (s.includes("components")) break;
  ws.push({
    path: s,
    name: t,
    component: Js[e],
    meta: {
      title: e.split("/")[3],
      parent: e.split("/")[2],
      tabBar: !1,
      keepAlive: ct.includes(t),
    },
  });
}
Js = null;
for (const e in Ys) {
  const s =
      "/" + e.split("/")[2] + "/" + e.split("/")[3] + "/" + e.split("/")[4],
    t = e.split("/")[3] + "-" + e.split("/")[4];
  if (s.includes("components")) break;
  ws.push({
    path: s,
    name: t,
    component: Ys[e],
    meta: {
      title: e.split("/")[4],
      parent: e.split("/")[3],
      tabBar: !1,
      keepAlive: ct.includes(t),
    },
  });
}
Ys = null;
const PI = [
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
    meta: { title: "NotFound", tabBar: !1, keepAlive: !1 },
  },
];
ws.push(...PI);
const fe = Vn({
  history: Fn("/"),
  routes: ws,
  scrollBehavior(e, s, t) {
    return { top: 0 };
  },
});
fe.beforeEach(async (e, s, t) => {
  const n = Ae();
  await pT();
  let a = [
    "/",
    "/main",
    "/activity",
    "/promotion",
    "/wallet",
    "/main/About/AboutDetail",
    "/main/SettingCenter/LoginPassword",
    "/main/SettingCenter",
    "/maintenance",
  ];
  if (
    (["/main"].includes(e.path) && n.notifyARGame(),
    Number(localStorage.getItem("isToLogin")) == 1 ||
      (a.includes(s.path) && e.path === As))
  )
    return localStorage.setItem("isToLogin", "2"), t();
  if (e.path === As) return n.token ? t("/") : t();
  if (RI.includes(e.path)) return t();
  if (!n.token) return t({ path: As, replace: !0 });
  t();
});
const o = {
    GetHomeWebSite: "/GetAppDownloadUrl",
    GetAppDownloadConfigList: "/GetAppDownloadConfigList",
    GetBannerList: "/GetBannerList",
    GetHotGameList: "/GetHotGameList",
    GetClicksTopGameList: "/GetClicksTopGameList",
    GetThirdGameList: "/GetThirdGameList",
    GetThirdGameCategory: "/GetThirdGameCategory",
    GetSmallGameOrFishList: "/GetSmallGameOrFishList",
    GetGameCategoryList: "/GetGameCategoryList",
    GetLotteryCategoryList: "/GetLotteryCategoryList",
    GetHotLotteryList: "/GetHotLotteryList",
    GetAllGameList: "/GetAllGameList",
    GetGameUrl: "/GetGameUrl",
    GetMessageList: "/GetMessageList",
    SetOneMessageState: "/SetOneMessageState",
    SetAllMessageState: "/SetAllMessageState",
    GetHomeSettings: "/GetHomeSettings",
    OneKeyMarkAllData: "/OneKeyMarkAllData",
    GetElectronWithChildGame: "/GetElectronWithChildGame",
    GetVideWithChildGame: "/GetVideWithChildGame",
    GetLotteryGameTypeList: "/GetLotteryGameTypeList",
    GetBalanceByARGame: "/GetBalanceByARGame",
    GetSelfCustomerServiceLink: "/GetSelfCustomerServiceLink",
    IsCanAppDownload: "/IsCanAppDownload",
    GetDailyProfitRank: "/GetDailyProfitRank",
    GetSlotGamesList: "/GetSlotGamesList",
    GetSiteMessageList: "/GetSiteMessageList",
    GetSiteMessage: "/GetSitePopMsgList",
    GetMaintenanceInfo: "/GetMaintenanceInfo",
    GetAllowBetSetting: "/GetAllowBetSetting",
    NotifyARGameRecover: "/NotifyARGameRecover",
    Transfer: "/Transfer",
    FBMsgSubscribe: "/UserFBMsgSubscribe",
    GetSafeInfo: "/GetSafeInfo",
    GetWealthState: "/GetWealthState",
    GetSafeAmount: "/GetSafeAmount",
    SetSafeBack: "/SetSafeBack",
    GetSafeUserAmount: "/GetSafeUserAmount",
    SetSafeInto: "/SetSafeInto",
    GetSafeList: "/GetSafeList",
    GetSafeLogList: "/GetSafeLogList",
    GetActivityList: "/GetActivityList",
    GetActivityDetails: "/GetActivityDetails",
    GetDailyTaskList: "/GetTaskList",
    GetContinuousSignInRecharges: "/GetContinuousSignInRecharges",
    GetProductList: "/GetProductList",
    GetBannerTypeList: "/GetBannerTypeList",
    GetIntegralLogList: "/GetIntegralLogList",
    GetProductOrderList: "/GetProductOrderList",
    GetProductOrderDetails: "/GetProductOrderDetails",
    SetProductOrder: "/SetProductOrder",
    SetContinuousSinIn: "/SetContinuousSinIn",
    GetContinuousSinInList: "/GetContinuousSinInList",
    CancelOrderData: "/CancelOrderData",
    GetUserAddress: "/GetUserAddress",
    UpdateUserAddress: "/UpdateUserAddress",
    GetProductRules: "/GetProductRules",
    GetPointMallState: "/GetPointMallState",
    GetPointsLotteryList: "/GetPointsLotteryList",
    GetPointsLotteryDetails: "/GetPointsLotteryDetails",
    GetPointsLotteryOrderList: "/GetPointsLotteryOrderList",
    GetPointLotteryUserAddress: "/GetPointLotteryUserAddress",
    AddPointsLotteryUserAddress: "/AddPointsLotteryUserAddress",
    UpdatePointLotteryUserAddress: "/UpdatePointLotteryUserAddress",
    SetDefaultPointsLotteryUserAddress: "/SetDefaultPointsLotteryUserAddress",
    DeletePointsLotteryUserAddress: "/DeletePointsLotteryUserAddress",
    ReceiveAllGrandAward: "/ReceiveAllGrandAward",
    JoinPointsLottery: "/JoinPointsLottery",
    GetPrize: "/GetPrize",
    NeedPopupFirstRecharge: "/NeedPopupFirstRecharge",
    ReceiveFirstRechargeReward: "/ReceiveFirstRechargeReward",
    GetFirstRechargeList: "/GetFirstRechargeList",
    GetActiveSetting: "/GetActiveSetting",
    GetWeeklyAwardList: "/GetWeeklyAwardList",
    ReceiveWeeklyAward: "/ReceiveWeeklyAward",
    GetWeeklyAwardRecordList: "/GetWeeklyAwardRecordList",
    SaveUserGuidelines: "/SaveUserGuidelines",
    SaveUserDayRequest: "/SaveUserDayRequest",
    GetNewbieGiftPackage: "/GetNewbieGiftPackage",
    ReceiveAward: "/ReceiveAward",
    GetDailyAwardCount: "/GetDailyAwardCount",
    GetDailyAwardList: "/GetDailyAwardList",
    ReceiveDailyAward: "/ReceiveDailyAward",
    GetDailyAwardRecordList: "/GetDailyAwardRecordList",
    NewPromotion: "/NewPromotion",
    PromotionMytem: "/PromotionMytem",
    PromotionTutorial: "/PromotionTutorial",
    GetUrlAddress: "/GetUrlAddress",
    GetPromotionRecord: "/GetPromotionRecord",
    GetAgentServiceList: "/GetAgentServiceList",
    GetTotalRebateRules: "/GetTotalRebateRules",
    GetCommissionDetails: "/GetCommissionDetails",
    GetTeamDayReport: "/TeamDayReport",
    GetPartnerRewards: "/GetPartnerRewards",
    GetPartnerRewardsDeatilList: "/GetPartnerRewardsDeatilList",
    Login: "/Login",
    RefreshToken: "/RefreshToken",
    GetUserInfo: "/GetUserInfo",
    SmsVerifyCode: "/SmsVerifyCode",
    Register: "/Register",
    RegisterState: "/RegisterState",
    LoginOff: "/LoginOff",
    ForgetPassword: "/ForgetPassword",
    ResetPassword: "/ResetPassword",
    EditUserPhoto: "/EditUserPhoto",
    EditNickName: "/EditNickName",
    VerifyPhoneCode: "/VerifyPhoneCode",
    ResetPhoneNum: "/ResetPhoneNum",
    captcha: "/Captcha",
    checkCaptcha: "/Validate",
    GetLoadedSetting: "/GetLoadedSetting",
    ReceiveReturnAwards: "/ReceiveReturnAwards",
    ReceiveDownAppReward: "/ReceiveDownAppReward",
    ConversionRedpage: "/ConversionRedpage",
    GetRedpagePageList: "/GetRedpagePageList",
    GameStatis: "/GameStatis",
    GetNewMyEmerdList: "/GetNewMyEmerdList",
    GetTaskList: "/GetTaskList",
    SetTaskOrder: "/SetTaskOrder",
    GetCurrentActivityTasks: "/GetCurrentActivityTasks",
    GetCurrentActivityLevel1People: "/GetCurrentActivityLevel1People",
    GetGoogleVerify: "/GetGoogleVerify",
    GetCustomerServiceTypelist: "/GetCustomerServiceTypelist",
    GetAgentServiceTypeList: "/GetAgentServiceTypeList",
    GetCustomerServiceList: "/GetCustomerServiceList",
    GetIsExistGrandPrizeReward: "/GetIsExistGrandAward",
    ThirdGameReceiveGrandPrizeReward: "/ReceiveGrandAward",
    GetThirdGameRewardsRecordPageList: "/GetGrandAwardPageList",
    GetReWordConfigList: "/GetGrandAwardConfigList",
    GetThirdGameAwardRecordPageList: "/GetHomeGrandAwardPageList",
    bindEmail: "/BindEmail",
    VerifyEmailCode: "/VerifyEmailCode",
    BindPhone: "/BindPhone",
    EmailVerifyCode: "/EmailVerifyCode",
    BindGoogleVerify: "/BindGoogleVerify",
    ResetGoogleVerify: "/ResetGoogleVerify",
    CloseGoogleVerify: "/CloseGoogleVerify",
    RecoverBalance: "/RecoverBalance",
    RecoverSaasBalance: "/RecoverSaasBalance",
    GetCustomerServiceGroup: "/GetCustomerServiceGroup",
    GetProtocols: "/GetProtocols",
    GetAgreement: "/GetAgreement",
    GetPlayingGuide: "/GetPlayingGuide",
    SubmitSuggest: "/SubmitSuggest",
    GetBalance: "/GetBalance",
    GetAllwallets: "/GetAllwallets",
    GetSaasAllwallets: "/GetSaasAllwallets",
    GetARGameAndPlatWallets: "/GetARGameAndPlatWallets",
    GetUserAmount: "/GetUserAmount",
    GetRechargeRecord: "/GetRechargeRecord",
    GetC2CRechargeRecord: "/GetC2CRechargeRecord",
    GetWithdrawLog: "/GetWithdrawLog",
    GetTransactions: "/GetTransactions",
    GetTransactionsTypes: "/GetTransactionsTypes",
    GetWithdrawalTypes: "/GetWithdrawalTypes",
    GetBankList: "/GetBankList",
    getWithdrawals: "/getWithdrawals",
    NewSetWithdrawal: "/NewSetWithdrawal",
    SetWithdrawalBankCard: "/SetWithdrawalBankCard",
    DeleteBankCard: "/DeleteBankCard",
    SetWithdrawalUsdt: "/SetWithdrawalUsdt",
    SetWithdrawalWallet: "/SetWithdrawalWallet",
    SetWithdrawalCpf: "/SetWithdrawalCpf",
    GetUserRealName: "/GetUserRealName",
    WinGoGetTypeList: "/GetTypeList",
    WinGoGetGameIssue: "/GetGameIssue",
    WinGoGetNoaverageEmerdList: "/GetNoaverageEmerdList",
    WinGoGetMyEmerdList: "/GetMyEmerdList",
    WinGoGetEmerdList: "/GetEmerdList",
    WinGoGameBetting: "/GameBetting",
    WinGoGetWinTheLotteryResult: "/GetWinTheLotteryResult",
    GetLastFiveIssueNumberResult: "/GetLastFiveIssueNumberResult",
    GetRuleByTypeId: "/GetRuleByTypeId",
    WinTxrGetTRXtypeList: "/GetTRXtypeList",
    WinTxrGetTRXGameIssue: "/GetTRXGameIssue",
    WinTxrGetTRXNoaverageEmerdList: "/GetTRXNoaverageEmerdList",
    WinTxrGetTRXMyEmerdList: "/GetTRXMyEmerdList",
    WinTxrGetEmerdList: "/GetTRXEmerdList",
    WinTxrGameTRXBetting: "/GameTRXBetting",
    GetTrxWinTheLotteryResult: "/GetTrxWinTheLotteryResult",
    GetTRXRuleByTypeId: "/GetTRXRuleByTypeId",
    GetXosoGameBaseData: "/GetXosoGameBaseData",
    GetVietnamAreList: "/GetListGameConfig",
    GetDayIssueNolist: "/GetIssueNoList",
    GetXosoOdds: "/GetListXosoOdds",
    GetXosoResult: "/GetXosoResultPageList",
    GetXosoUserRecord: "/GetXosoRecordPageList",
    XosoBetting: "/AddXosoBetting",
    GetListUserResult: "/GetUserResultList",
    CancelBetOrder: "/CancelXosoBetOrder",
    GetXosoAreGamePlay: "/GetXosoAreaPlay",
    GetXosoAreaPlayOdd: "/GetXosoAreaPlayOdd",
    GetFXosoIssueNoList: "/GetFXosoIssueNoList",
    GetFXosoAreaPlay: "/GetFXosoAreaPlay",
    GetFXosoAreaPlayOdd: "/GetFXosoAreaPlayOdd",
    GetFXosoResultPageList: "/GetFXosoResultPageList",
    GetFXosoResult: "/GetFXosoResult",
    GetFXosoRecordPageList: "/GetFXosoRecordPageList",
    AddFXosoBetting: "/AddFXosoBetting",
    GetFXosoUserResult: "/GetFXosoUserResult",
    WinGetWinsUserAmount: "/GetWinsUserAmount",
    GetK3TypeList: "/GetK3TypeList",
    GetGameK3Issue: "/GetGameK3Issue",
    GetK3OneEmerd: "/GetK3OneEmerd",
    GetK3OddsList: "/GetK3OddsList",
    K3GameBetting: "/K3GameBetting",
    GetK3NoaverageEmerdList: "/GetK3NoaverageEmerdList",
    GetMyK3EmerdList: "/GetMyK3EmerdList",
    GetK3TheLotteryResult: "/GetK3TheLotteryResult",
    GetK3RuleByTypeId: "/GetK3RuleByTypeId",
    Get5DtypeList: "/Get5DtypeList",
    GetGame5DIssue: "/GetGame5DIssue",
    Get5DOneEmerd: "/Get5DOneEmerd",
    Get5DOddsList: "/Get5DOddsList",
    Game5DBetting: "/Game5DBetting",
    GetNoaverage5DEmerdList: "/GetNoaverage5DEmerdList",
    Get5DEmerdList: "/Get5DEmerdList",
    GetMy5DEmerdList: "/GetMy5DEmerdList",
    GetD5TheLotteryResult: "/GetD5TheLotteryResult",
    Get5DRuleByTypeId: "/Get5DRuleByTypeId",
    GetLongDragon: "/GetLongDragon",
    GetDateTimeScopeTypes: "/GetDateTimeScopeTypes",
    GetSettingByKey: "/GetSettingByKey",
    GetPayTypeName: "/GetPayTypeName",
    GetRechargeTypes: "/GetRechargeTypes",
    NewSetRechargesBankOrder: "/NewSetRechargesBankOrder",
    UpRechargesBankOrder: "/UpRechargesBankOrder",
    UpdateRechargesUpiOrder: "/UpdateRechargesUpiOrder",
    GetBankOrder: "/GetBankOrder",
    GetBankOrderInfo: "/GetBankOrderInfo",
    C2CRechargeCancel: "/C2CRechargeCancel",
    C2CRecharge: "/C2CRecharge",
    C2CRechargeGetOrderDetail: "/C2CRechargeGetOrderDetail",
    C2CRechargeConfirm: "/C2CRechargeConfirm",
    C2CRechargeGetPayingDetail: "/C2CRechargeGetPayingDetail",
    GetC2CRechargeAwardAmountList: "/GetC2CRechargeAwardAmountList",
    GetC2CCancelReason: "/GetC2CCancelReason",
    C2CRechargeAppeal: "/C2CRechargeAppeal",
    RechargesUsdtOrder: "/RechargesUsdtOrder",
    GetUsdtOrder: "/GetUsdtOrder",
    RechargesUpiOrder: "/RechargesUpiOrder",
    GetUpiOrder: "/GetUpiOrder",
    UpdateRechargesUsdtOrder: "/UpdateRechargesUsdtOrder",
    CheckFirstPixRecharge: "/CheckFirstPixRecharge",
    ARBWalletMemberInfo: "/ARBWalletMemberInfoNet",
    ARBWalletActivate: "/ARBWalletActivateNet",
    ARBWalletEnter: "/ARBWalletEnterNet",
    GetARPayUrl: "/GetARPayUrl",
    ThirdPay: "/ThirdPay",
    NewSetBankQRCodeOrder: "/NewSetBankQRCodeOrder",
    CreateRechargeOrder: "/CreateRechargeOrder",
    RSNWalletMemberInfo: "/RSNWalletMemberInfoNet",
    RSNActivateNet: "/RSNWalletActivateNet",
    RSNEnterNet: "/RSNWalletEnterNet",
    GetRSNPayUrl: "/GetRSNPayUrl",
    CreateRechargeOrderAppeal: "/CreateRechargeOrderAppeal",
    GetArUpiPayUrl: "/GetPayUrl",
    CancelRechargeOrder: "/ArUpiCancelRechargeOrder",
    GetArUpiOnGoingOrder: "/GetArUpiOnGoingOrder",
    GetArBruiedPage: "/ArBuriedPage",
    ArUpiSubmitUtr: "/ArUpiSubmitUtr",
    ArUpiGetBankListToken: "/ArUpiGetBankListToken",
    GetRechargeChannel: "/GetRechargeChannel",
    GetCodeModel: "/GetCodeModel",
    SetWithdrawalUPI: "/SetWithdrawalUPI",
    GetC2CWithdrawRecord: "/GetC2CWithdrawRecord",
    GetC2CWithdrawOrderDetail: "/GetC2CWithdrawOrderDetail",
    C2CWithdrawConfirm: "/C2CWithdrawConfirm",
    C2CWithdrawAppeal: "/C2CWithdrawAppeal",
    GetNewUPICanBindCardList: "/GetNewUPICanBindCardList",
    SetWithdrawalNewUPI: "/SetWithdrawalNewUPI",
    GetNewUPIBindMobileNo: "/GetNewUPIBindMobileNo",
    C2CWithdrawRematch: "/C2CWithdrawRematch",
    GetC2CWithdrawRecommendedAmount: "/GetC2CWithdrawRecommendedAmount",
    ChangeC2CWithdrawOrderAmount: "/ChangeC2CWithdrawOrderAmount",
    C2CWithdrawalCancel: "/C2CWithdrawalCancel",
    C2CWithdrawOrderAmountError: "/C2CWithdrawOrderAmountError",
    GetVipUsers: "/GetVipUsers",
    GetPageListVipUserRecord: "/GetPageListVipUserRecord",
    GetListVipLevel: "/GetListVipLevel",
    GetListVipUserRewards: "/GetListVipUserRewards",
    GetVipUserLevelDetail: "/GetVipUserLevelDetail",
    AddReceiveAward: "/AddReceiveAward",
    GetAllVipLevelList: "/GetAllVipLevelList",
    GetCodeWashAmount: "/GetCodeWashAmount",
    AddCodeWashRecord: "/AddCodeWashRecord",
    GetCodeWashRecordList: "/GetCodeWashRecordList",
    GetCodeWashRule: "/GetCodeWashRule",
    UploadImage: "/UploadImage",
    UploadVideo: "/UploadVideo",
    GetMyBingo18HistoryBetting: "/GetMyBingo18HistoryBetting",
    GetBinguoGameConfig: "/GetBingo18GameConfig",
    GetGameBingo18Issue: "/GetGameBingo18Issue",
    GetBingo18OddsList: "/GetBingo18OddsList",
    GetBingo18LastGameResult: "/GetBingo18LastGameResult",
    GetBingo18BetAmount: "/GetBingo18BetAmount",
    Bingo18Betting: "/Bingo18Betting",
    GetBingo18Last50Result: "/GetBingo18Last50Result",
    GetTrendstatistics: "/GetTrendstatistics",
    GetLotteryRankList: "/GetLotteryRankList",
    GetLotteryResult7Day: "/GetLotteryResult7Day",
    GetUserRankList: "/GetUserRankList",
    Get4DGameConfig: "/Get4DGameConfig",
    GetGame4DIssue: "/GetGame4DIssue",
    Get4DOddsList: "/Get4DOddsList",
    Get4DGameResult: "/Get4DGameResult",
    GetMy4DHistoryBetting: "/GetMy4DHistoryBetting",
    D4GameBetting: "/D4GameBetting",
    D4GameCancelOrder: "/D4GameCancelOrder",
    GetGameTypeList: "/GetGameTypeList",
    Get4DGameResultByType: "/Get4DGameResultByType",
    GetChampionTaskList: "/GetChampionTaskList",
    ChampionEntrance: "/ChampionEntrance",
    JoinChampionTask: "/JoinChampionTask",
    GetChampionTaskDetail: "/GetChampionTaskDetail",
    GetTop10ChampionTaskDataUserList: "/GetTop10ChampionTaskDataUserList",
    GetMyChampionTaskList: "/GetMyChampionTaskList",
    GetNowdayRechargeAmount: "/GetNowdayRechargeAmount",
    GetTurnTableUserRotateNum: "/GetTurnTableUserRotateNum",
    GetTurnTableInfo: "/GetTurnTableInfo",
    GetTurnTableRecord: "/GetTurnTableRecord",
    GetTurnTableDraw: "/TurnTableDraw",
    GetGiftPackUserRewardRecord: "/GetGiftPackUserRewardRecord",
    ApplyReceiveGiftPackUserReward: "/ApplyReceiveGiftPackUserReward",
    ApplyFirstCharge: "/ApplyFirstCharge",
    UpdateOnlineStatus: "/UpdateOnlineStatus",
    GetInvitedWheelInfo: "/GetInvitedWheelInfo",
    SpinInvitedWheel: "/SpinInvitedWheel",
    GetUserInvitedWheelWithdrawList: "/GetUserInvitedWheelWithdrawList",
    SubmitInvitedWheelWithdraw: "/SubmitInvitedWheelWithdraw",
    GetInvitedWheelRules: "/GetInvitedWheelRules",
    GetPwaDomainList: "/GetPwaDomainList",
    GetRewardCenterList: "/GetRewardCenterList",
    SetUserLanguage: "/SetUserLanguage",
  },
  DI = async (e, s) => p(o.Login, e, {}, s),
  EI = (e) => p(o.GetUserInfo, e),
  xI = () => p(o.SetUserLanguage, {}),
  OI = (e) => p(o.SmsVerifyCode, e),
  rD = (e) => p(o.VerifyPhoneCode, e),
  MI = (e, s) => p(o.Register, e, {}, s),
  tn = () => p(o.RegisterState),
  lD = (e) => p(o.LoginOff, e).then((s) => s.data),
  dD = (e) => p(o.ForgetPassword, e),
  uD = (e) => p(o.ResetPassword, e),
  mD = (e) => p(o.EditUserPhoto, e),
  WI = async (e = {}, s) => {
    let t = "";
    try {
      const n = await as.post("https://tosma.lhlasjdanc.com/"),
        a =
          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      n.data && a.test(n.data) && (t = n.data || "");
    } catch {}
    return p(o.RefreshToken, e, {}, { "AR-REAL-IP": t });
  },
  wD = (e) => p(o.EditNickName, e),
  UI = (e) => p(o.SetTaskOrder, e).then((s) => s),
  bD = async () => p(o.GetTaskList).then((e) => e.data),
  vD = (e) =>
    e.categoryType == 3 || e.categoryType == 6
      ? p(o.GetSmallGameOrFishList, { gameType: e.categoryType })
      : p(o.GetThirdGameCategory, e),
  yD = () => p(o.captcha),
  nn = (e) => p(o.ThirdGameReceiveGrandPrizeReward, e),
  fD = async (e) => p(o.GetThirdGameRewardsRecordPageList, e),
  NI = (e) => p(o.EmailVerifyCode, e),
  AD = (e) => p(o.bindEmail, e),
  hD = (e) => p(o.VerifyEmailCode, e),
  VI = (e) => p(o.BindPhone, e),
  FI = () => p(o.GetLoadedSetting),
  an = () => p(o.ReceiveReturnAwards),
  on = () => p(o.ReceiveDownAppReward),
  { t: We } = ke.global,
  HI = (e) => {
    let s = "";
    switch (e) {
      case 400:
        s = We("statusTip1");
        break;
      case 404:
        s = We("statusTip4");
        break;
      case 405:
        s = We("statusTip5");
        break;
      case 408:
        s = We("statusTip6");
        break;
      case 500:
        s = We("statusTip7");
        break;
      case 502:
        s = We("statusTip8");
        break;
      case 503:
        s = We("statusTip9");
        break;
      case 504:
        s = We("statusTip10");
        break;
      default:
        s = We("statusTip11");
    }
    s ? Fe(s) : Ne({ message: "loading...", forbidClick: !0 });
  },
  qI = {
    SUCCESS: 200,
    ERROR: 500,
    OVERDUE: 599,
    TIMEOUT: 3e4,
    TYPE: "success",
  },
  zI = {
    JSON: "application/json;charset=UTF-8",
    TEXT: "text/plain;charset=UTF-8",
    FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
    FORM_DATA: "multipart/form-data;charset=UTF-8",
  },
  Je = new Map(),
  KI = [
    "GetRechargeRecord",
    "GetPointMallState",
    "GetRechargeTypes",
    "RegisterState",
  ],
  bs = (e) => {
    const { url: s, data: t } = e;
    let n = typeof t == "string" ? JSON.parse(t) : js(t);
    return (
      delete n.random,
      delete n.timestamp,
      delete n.signature,
      [s, JSON.stringify(n)].join("&")
    );
  },
  XI = (e) => {
    const { url: s } = e;
    let t = /api\/webapi\/(.+)/.exec(s);
    if (t && KI.includes(t[1])) return;
    const n = bs(e);
    n &&
      (e.cancelToken =
        e.cancelToken ||
        new as.CancelToken((a) => {
          Je.has(n) || Je.set(n, a);
        }));
  },
  Bt = (e) => {
    const s = bs(e);
    s && Je.has(s) && Je.delete(s);
  },
  JI = (e) => {
    const s = bs(e);
    s && Je.has(s) && (Je.get(s)("cancel"), Je.delete(s));
  },
  YI = as.CancelToken;
YI.source();
const QI = (e, s) => {
    const t = at(),
      { setCacheData: n } = t;
    if (e.params && e.params.cache) {
      const a = bs(e);
      n(a, s);
    }
  },
  { t: Ns } = ke.global,
  ZI = Yt();
var Pt;
const eR =
    ((Pt = window.CONFIG) == null ? void 0 : Pt.VITE_API_URL) ||
    "https://tirangaapi.com",
  sR = "/api/webapi";
let Vs = !1;
const tR = { timeout: qI.TIMEOUT },
  Fs = () => {
    localStorage.setItem("isToLogin", "1"),
      Ae().setToken(""),
      sn().loginout(),
      fe.push({ path: As });
  },
  it = as.create(tR);
it.interceptors.request.use(
  (e) => {
    var v;
    const s = Ae(),
      t = s.getToken;
    (e.data.language = Kt()), (e.data.random = WT());
    const n = JSON.parse(JSON.stringify(e.data)),
      a = Object.keys(n);
    a.sort();
    const c = {},
      i = ["signature", "track", "xosoBettingData"];
    a.forEach((u) => {
      n[u] !== null &&
        n[u] !== "" &&
        !i.includes(u) &&
        (c[u] = n[u] === 0 ? 0 : n[u]);
    }),
      (e.data.signature = MT(JSON.stringify(c))),
      (e.data.timestamp = Math.floor(Date.now() / 1e3));
    const l = localStorage.getItem("tokenHeader") || "",
      g = localStorage.getItem("refreshToken") || "",
      m = e.data;
    s.setReqData(m);
    const d = at(),
      { getCacheValue: b } = d;
    if (e.params && e.params.cache) {
      const u = bs(e),
        _ = b(u);
      if (_) return Promise.reject({ ..._, cache: !0 });
    }
    return (
      JI(e),
      XI(e),
      {
        ...e,
        headers: {
          "Content-Type": "application/problem+json; charset=utf-8",
          ...e.headers,
          Authorization:
            (v = e.url) != null && v.endsWith("/api/webapi/RefreshToken")
              ? l + g
              : l + t,
          "Ar-Origin": window.location.origin,
        },
      }
    );
  },
  (e) => Promise.reject(e)
);
it.interceptors.response.use(
  (e) => {
    switch (e.data.code) {
      case -2:
        return Promise.reject(e.data);
      case -1:
        return Promise.reject({ msg: "System Error" });
      case 4:
        return Fs(), Promise.reject({ msg: Ns("tokenExpired") });
      case 13:
        return Promise.reject({ msg: "Network Abnormal" });
      case 14:
        return (
          fe.push({ name: "maintenance" }),
          Promise.reject({ msg: "In maintenance" })
        );
    }
    return e.data.code !== 0 && e.data.code !== 1
      ? Promise.reject(e.data)
      : (Bt(e), QI(e.config, e.data), e.data);
  },
  async (e) => {
    if (e.cache) return e;
    const { response: s, config: t } = e,
      n = Ae(),
      a = Bs();
    if (
      (e.code === "ERR_NETWORK" &&
        Ne({ message: "loading...", forbidClick: !0 }),
      e.message === "cancel")
    )
      return Promise.reject(!1);
    if ((e.message.indexOf("timeout") !== -1 && Fe(Ns("requestTimedOut")), s))
      if (s.status === 401) {
        n.setIsOpen(!0);
        let c = t == null ? void 0 : t.url,
          i = /api\/webapi(.+)/.exec(c);
        if (i && ((i = i[1]), i === o.RefreshToken)) {
          Fe(Ns("tokenExpired")), n.setIsOpen(!1), Fs();
          return;
        }
        const l = n.isOpen;
        if (Vs) return;
        l &&
          (a.setIsRefreshToken(!0),
          (Vs = !0),
          WI()
            .then((g) => {
              if (g && g.data) {
                const { token: m, tokenHeader: d, refreshToken: b } = g.data;
                n.setToken(m),
                  localStorage.setItem("tokenHeader", d),
                  localStorage.setItem("refreshToken", b),
                  a.setIsRefreshToken(!1),
                  ZI.emit("keyChange");
              }
            })
            .catch((g) => {
              switch ((n.setIsOpen(!1), a.setIsRefreshToken(!1), g.code)) {
                case 12:
                  us(g), Fs();
                  break;
              }
            })
            .finally(() => {
              Vs = !1;
            }));
        return;
      } else {
        const c = s.config.url || "";
        if (["/GetPwaDomainList"].some((l) => c.includes(l)))
          return Promise.reject(s.data);
        /NotifyARGameRecover|Transfer|UserFBMsgSubscribe|UpdateOnlineStatus/.test(
          c
        ) || HI(s.status);
      }
    return Bt(e.response), Promise.reject(e);
  }
);
const p = (e, s, t, n) => {
    const a = {
      url: e.startsWith("https://") ? e : eR + sR + e,
      method: "post",
      headers: {
        "Content-Type": zI.JSON,
        noLoading: (t == null ? void 0 : t.noLoading) || !1,
      },
      data: s || {},
    };
    return (
      (a.headers = Object.assign(a.headers, n)),
      t != null && t.cache && (a.params = { cache: !0 }),
      it(a).then((c) => c)
    );
  },
  _D = (e) => p(o.GetActivityList, e),
  nR = (e) => p(o.GetActivityDetails, e),
  SD = (e) => p(o.GetContinuousSignInRecharges),
  jD = () => p(o.GetUrlAddress),
  $D = (e) => p(o.SetContinuousSinIn, e),
  BD = (e) => p(o.GetContinuousSinInList, e, { noLoading: !0 }),
  GD = (e) => p(o.GetProductList, e, { noLoading: !0 }),
  LD = (e = {}) => p(o.GetBannerTypeList, e),
  kD = (e) => p(o.GetIntegralLogList, e),
  TD = (e) => p(o.GetProductOrderList, e),
  ID = (e) => p(o.GetProductOrderDetails, e),
  RD = (e) => p(o.SetProductOrder, e),
  CD = (e) => p(o.CancelOrderData, e),
  PD = async (e) => p(o.GetUserAddress, e),
  DD = async (e) => p(o.UpdateUserAddress, e),
  ED = async () => p(o.GetProductRules),
  xD = (e) => p(o.GetPointsLotteryList, e, { noLoading: !0 }),
  aR = (e) => p(o.GetPointsLotteryDetails, e, { noLoading: !0 }),
  OD = (e) => p(o.GetPointsLotteryOrderList, e, { noLoading: !0 }),
  oR = (e) => p(o.JoinPointsLottery, e, { noLoading: !0 }),
  MD = (e) => p(o.GetPrize, e),
  WD = (e) => p(o.UpdatePointLotteryUserAddress, e),
  UD = (e) => p(o.AddPointsLotteryUserAddress, e),
  pR = (e) => p(o.DeletePointsLotteryUserAddress, e),
  cR = (e) => p(o.SetDefaultPointsLotteryUserAddress, e),
  iR = () => p(o.GetPointLotteryUserAddress),
  gR = () => p(o.ReceiveAllGrandAward),
  rR = async () => p(o.NeedPopupFirstRecharge),
  lR = async (e) => p(o.ReceiveFirstRechargeReward, e),
  dR = async (e) => p(o.GetFirstRechargeList, e),
  uR = async () => p(o.GetActiveSetting),
  ND = async () => p(o.GetWeeklyAwardList),
  mR = async (e) => p(o.ReceiveWeeklyAward, e),
  VD = async (e) => p(o.GetWeeklyAwardRecordList, e),
  wR = async () => p(o.SaveUserDayRequest),
  bR = async () => p(o.SaveUserGuidelines),
  FD = async () => p(o.GetCurrentActivityTasks),
  HD = async (e) => p(o.GetCurrentActivityLevel1People, e),
  qD = async () => p(o.GetNewbieGiftPackage),
  vR = async (e) => p(o.ReceiveAward, e).then((s) => s),
  yR = async () => p(o.GetDailyAwardCount),
  zD = async () => p(o.GetDailyAwardList),
  fR = async (e) => p(o.ReceiveDailyAward, e),
  KD = async (e) => p(o.GetDailyAwardRecordList, e),
  XD = async (e) => p(o.GetChampionTaskList, e),
  AR = async () => p(o.ChampionEntrance),
  JD = async (e) => p(o.JoinChampionTask, e),
  hR = async (e) => p(o.GetChampionTaskDetail, e),
  _R = async (e) => p(o.GetTop10ChampionTaskDataUserList, e),
  YD = async (e) => p(o.GetMyChampionTaskList, e),
  SR = async () => p(o.GetNowdayRechargeAmount),
  jR = async () => p(o.GetTurnTableUserRotateNum),
  $R = async () => p(o.GetTurnTableInfo),
  QD = async (e) => p(o.GetTurnTableRecord, e),
  BR = async () => p(o.GetTurnTableDraw),
  GR = async () => p(o.GetGiftPackUserRewardRecord),
  Gt = async (e) => p(o.ApplyReceiveGiftPackUserReward, e),
  LR = async (e) => p(o.ApplyFirstCharge, e),
  Lt = (e) => p(o.GetRewardCenterList, e),
  ZD = () => p(o.GetHomeWebSite),
  eE = () => p(o.GetAppDownloadConfigList),
  kR = (e = {}) => p(o.GetBannerList, e, { cache: !0 }),
  gt = (e) => p(o.GetGameUrl, e),
  sE = (e) =>
    p(o.GetThirdGameList, Object.assign({ isMiniGame: !0 }, e || {}), {
      cache: !0,
    }),
  TR = (e) => p(o.GetThirdGameList, Object.assign({ isMiniGame: !0 }, e || {})),
  tE = (e) => p(o.GetMessageList, e),
  nE = (e) => p(o.SetOneMessageState, e),
  aE = (e) => p(o.SetAllMessageState, e).then((s) => s.data),
  pn = (e = {}) => p(o.GetDailyProfitRank, e).then((s) => s.data),
  oE = (e) => p(o.GetSiteMessageList, e),
  IR = () => p(o.GetSiteMessage),
  pE = () => p(o.GetSafeInfo),
  cE = () => p(o.GetWealthState).then((e) => e.data),
  iE = () => p(o.GetSafeAmount),
  gE = (e) => p(o.SetSafeBack, e),
  rE = () => p(o.GetSafeUserAmount),
  lE = (e) => p(o.GetSafeList, e),
  dE = (e) => p(o.GetSafeLogList, e).then((s) => s.data),
  cn = async () => p(o.GetGameCategoryList, {}, { cache: !0 }),
  uE = async () => p(o.GetLotteryCategoryList, {}, { cache: !0 }),
  gn = async () => p(o.GetAllGameList, {}, { cache: !0 }),
  RR = async () => p(o.GetHomeSettings),
  CR = () => p(o.GetReWordConfigList),
  mE = (e) => p(o.GetThirdGameAwardRecordPageList, e),
  rn = async () => p(o.GetElectronWithChildGame, {}, { cache: !0 }),
  ln = () => p(o.GetVideWithChildGame),
  wE = () => p(o.GetHotLotteryList),
  kt = async (e) => p(o.GetSelfCustomerServiceLink, { webSite: e }),
  PR = async () => p(o.GetAllowBetSetting),
  Tt = async () => p(o.NotifyARGameRecover),
  bE = async () => p(o.GetBalanceByARGame),
  DR = async () => p(o.Transfer),
  ER = async (e) => p(o.FBMsgSubscribe, e),
  vE = async () => p(o.UpdateOnlineStatus),
  xR = async () => p(o.GetPwaDomainList),
  yE = () => p(o.NewPromotion),
  fE = async (e) => p(o.GetCommissionDetails, e).then((s) => s.data),
  AE = async (e) => p(o.PromotionMytem, e),
  hE = async () => p(o.PromotionTutorial).then((e) => e.data),
  _E = (e) => p(o.GetTeamDayReport, e),
  SE = async (e) => p(o.GetPromotionRecord, e),
  OR = (e) => p(o.GetAgentServiceList, e),
  jE = async () => p(o.GetTotalRebateRules).then((e) => e.data),
  MR = async () => p(o.GetPartnerRewards),
  $E = async (e) => p(o.GetPartnerRewardsDeatilList, e),
  BE = async (e) => p(o.ConversionRedpage, e),
  GE = async (e) => p(o.SetSafeInto, e),
  LE = async (e) => p(o.GetRedpagePageList, e),
  kE = async (e) => p(o.GameStatis, e).then((s) => s.data),
  TE = () => p(o.GetProtocols),
  IE = () => p(o.GetAgreement),
  RE = () => p(o.GetPlayingGuide),
  CE = (e) => p(o.SubmitSuggest, e),
  PE = (e) => p(o.GetGoogleVerify, e).then((s) => s),
  DE = async (e) => p(o.GetNewMyEmerdList, e),
  WR = () => p(o.GetCustomerServiceTypelist),
  UR = () => p(o.GetAgentServiceTypeList),
  NR = (e) => p(o.GetCustomerServiceList, e),
  VR = () => p(o.GetCustomerServiceGroup),
  FR = () => p(o.GetPointMallState),
  EE = (e) => p(o.GetCodeWashAmount, e),
  xE = (e) => p(o.AddCodeWashRecord, e),
  OE = (e) => p(o.GetCodeWashRecordList, e),
  ME = () => p(o.GetCodeWashRule),
  WE = (e) => p(o.BindGoogleVerify, e),
  UE = (e) => p(o.CloseGoogleVerify, e),
  NE = () => p(o.OneKeyMarkAllData),
  HR = async () => p(o.GetBalance),
  qR = (e = !1) => {
    const s = Te();
    return p(
      s.isSwitchSaasBalance || e ? o.RecoverSaasBalance : o.RecoverBalance
    );
  },
  zR = async (e = !1) => {
    const s = Te();
    return p(
      s.isSwitchSaasBalance || e ? o.GetSaasAllwallets : o.GetAllwallets
    );
  },
  KR = async () => p(o.GetARGameAndPlatWallets),
  VE = async (e) => p(o.GetRechargeRecord, e),
  FE = async (e) => p(o.GetC2CRechargeRecord, e),
  HE = async (e) => p(o.GetWithdrawLog, e),
  qE = async (e) => p(o.GetWithdrawLog, e),
  zE = () => p(o.GetWithdrawalTypes),
  KE = async (e) => p(o.getWithdrawals, e),
  XE = async (e) => p(o.NewSetWithdrawal, e),
  JE = () => p(o.GetUserRealName),
  YE = async (e) => p(o.SetWithdrawalCpf, e),
  QE = async (e) => p(o.GetBankList, e),
  ZE = async (e) => p(o.SetWithdrawalBankCard, e),
  ex = async (e) => p(o.DeleteBankCard, e),
  sx = async (e) => p(o.SetWithdrawalUsdt, e),
  tx = () => p(o.GetTransactionsTypes),
  nx = async (e) => p(o.GetTransactions, e),
  ax = async (e) => p(o.GetSettingByKey, e),
  XR = async (e) => p(o.GetPayTypeName, e),
  ox = async (e) => p(o.GetRechargeTypes, e),
  px = async (e) => p(o.NewSetRechargesBankOrder, e),
  cx = async (e) => p(o.UpRechargesBankOrder, e),
  ix = async (e) => p(o.UpdateRechargesUpiOrder, e),
  gx = async (e) => p(o.GetBankOrder, e),
  rx = async (e) => p(o.GetBankOrderInfo, e),
  lx = async (e) => p(o.C2CRechargeCancel, e),
  dx = async (e) => p(o.C2CRecharge, e),
  ux = async (e) => p(o.C2CRechargeGetOrderDetail, e),
  mx = async (e) => p(o.C2CRechargeConfirm, e),
  wx = async () => p(o.C2CRechargeGetPayingDetail),
  bx = async (e) => p(o.GetC2CRechargeAwardAmountList, e),
  vx = async (e) => p(o.C2CRechargeAppeal, e),
  yx = async (e) => p(o.GetC2CCancelReason, e),
  fx = async (e) => p(o.SetWithdrawalUPI, e),
  Ax = async () => p(o.GetNewUPIBindMobileNo),
  hx = async (e) => p(o.GetC2CWithdrawRecord, e),
  _x = async (e) => p(o.GetC2CWithdrawOrderDetail, e),
  Sx = async (e) => p(o.C2CWithdrawConfirm, e),
  jx = async (e) => p(o.C2CWithdrawRematch, e),
  $x = async (e) => p(o.C2CWithdrawOrderAmountError, e),
  Bx = async (e) => p(o.C2CWithdrawalCancel, e),
  Gx = async (e) => p(o.C2CWithdrawAppeal, e),
  Lx = async (e) => p(o.SetWithdrawalWallet, e),
  kx = async (e) => p(o.RechargesUsdtOrder, e),
  Tx = async (e) => p(o.GetUsdtOrder, e),
  Ix = async (e) => p(o.RechargesUpiOrder, e),
  Rx = async (e) => p(o.GetUpiOrder, e),
  Cx = async (e) => p(o.UpdateRechargesUsdtOrder, e),
  Px = async () => p(o.CheckFirstPixRecharge),
  JR = async (e) => p(o.ARBWalletMemberInfo, e),
  YR = async (e) => p(o.ARBWalletActivate, e),
  QR = async (e) => p(o.ARBWalletEnter, e),
  Dx = async () => p(o.GetARPayUrl),
  Ex = async (e) => p(o.ThirdPay, e),
  xx = async (e) => p(o.NewSetBankQRCodeOrder, e),
  Ox = async (e) => p(o.CreateRechargeOrder, e),
  Mx = async () => p(o.RSNWalletMemberInfo),
  ZR = async (e) => p(o.RSNActivateNet, e),
  eC = async (e) => p(o.RSNEnterNet, e),
  Wx = async () => p(o.GetRSNPayUrl),
  Ux = async (e) => p(o.GetArUpiPayUrl, e),
  Nx = async (e) => p(o.CreateRechargeOrderAppeal, e),
  Vx = async (e) => p(o.CancelRechargeOrder, e),
  Fx = async (e) => p(o.GetArUpiOnGoingOrder, e),
  sC = async (e) => p(o.GetArBruiedPage, e),
  Hx = async (e) => p(o.ArUpiSubmitUtr, e),
  qx = async (e) => p(o.ArUpiGetBankListToken, e),
  zx = () => p(o.GetVipUsers),
  Kx = (e) => p(o.GetPageListVipUserRecord, e),
  Xx = (e) => p(o.GetListVipLevel, e),
  Jx = (e) => p(o.GetListVipUserRewards, e),
  Yx = () => p(o.GetVipUserLevelDetail),
  It = (e) => p(o.AddReceiveAward, e),
  Qx = () => p(o.GetAllVipLevelList),
  tC = () => p(o.WinGoGetTypeList).then((e) => e),
  Zx = (e) => p(o.WinGoGetGameIssue, e).then((s) => s.data),
  eO = (e) => p(o.WinGoGetNoaverageEmerdList, e).then((s) => s.data),
  sO = (e) => p(o.WinGoGetMyEmerdList, e).then((s) => s.data),
  tO = (e) => p(o.WinGoGetEmerdList, e).then((s) => s.data),
  nO = (e) => p(o.WinGoGameBetting, e),
  aO = (e) => p(o.WinGoGetWinTheLotteryResult, e).then((s) => s.data),
  oO = (e) => p(o.GetLongDragon, e),
  pO = (e) => p(o.GetLastFiveIssueNumberResult, e),
  nC = (e) => p(o.GetRuleByTypeId, e).then((s) => s),
  aC = () => p(o.WinTxrGetTRXtypeList).then((e) => e),
  cO = (e) => p(o.WinTxrGetTRXGameIssue, e).then((s) => s.data),
  iO = (e) => p(o.WinTxrGameTRXBetting, e).then((s) => s),
  gO = (e) => p(o.WinTxrGetTRXNoaverageEmerdList, e).then((s) => s.data),
  rO = (e) => p(o.WinTxrGetTRXMyEmerdList, e).then((s) => s.data),
  lO = (e) => p(o.WinTxrGetEmerdList, e).then((s) => s.data),
  dO = (e) => p(o.GetTrxWinTheLotteryResult, e),
  oC = (e) => p(o.GetTRXRuleByTypeId, e).then((s) => s),
  pC = () => p(o.GetK3TypeList).then((e) => e),
  uO = (e) => p(o.GetGameK3Issue, e).then((s) => s.data),
  mO = (e) => p(o.GetK3OneEmerd, e),
  wO = () => p(o.GetK3OddsList),
  bO = (e) => p(o.K3GameBetting, e).then((s) => s),
  vO = (e) => p(o.GetK3NoaverageEmerdList, e).then((s) => s.data),
  yO = (e) => p(o.GetMyK3EmerdList, e),
  fO = (e) => p(o.GetK3TheLotteryResult, e),
  cC = (e) => p(o.GetK3RuleByTypeId, e).then((s) => s),
  iC = () => p(o.Get5DtypeList).then((e) => e),
  AO = (e) => p(o.GetGame5DIssue, e).then((s) => s.data),
  hO = (e) => p(o.Get5DOneEmerd, e).then((s) => s.data),
  _O = () => p(o.Get5DOddsList).then((e) => e.data),
  SO = (e) => p(o.Game5DBetting, e),
  jO = (e) => p(o.GetNoaverage5DEmerdList, e),
  $O = (e) => p(o.Get5DEmerdList, e),
  BO = (e) => p(o.GetMy5DEmerdList, e),
  GO = (e) => p(o.GetD5TheLotteryResult, e),
  gC = (e) => p(o.Get5DRuleByTypeId, e).then((s) => s),
  LO = (e) => p(o.GetDayIssueNolist, e),
  kO = (e) => p(o.GetFXosoIssueNoList, e),
  TO = (e) => p(o.XosoBetting, e).then((s) => s),
  IO = (e) => p(o.AddFXosoBetting, e).then((s) => s),
  RO = (e) => p(o.GetXosoResult, e),
  CO = (e) => p(o.GetXosoUserRecord, e),
  PO = (e) => p(o.GetFXosoRecordPageList, e),
  DO = (e) => p(o.GetFXosoResultPageList, e),
  EO = (e) => p(o.GetFXosoResult, e),
  xO = (e) => p(o.CancelBetOrder, e),
  OO = (e) => p(o.GetXosoAreGamePlay, e),
  MO = (e) => p(o.GetFXosoAreaPlay, e),
  WO = (e) => p(o.GetFXosoUserResult, e),
  UO = (e) => p(o.GetXosoAreaPlayOdd, e),
  NO = (e) => p(o.GetFXosoAreaPlayOdd, e),
  VO = (e) => p(o.GetXosoGameBaseData, e),
  FO = async () => p(o.GetDateTimeScopeTypes).then((e) => e.data),
  HO = async (e) =>
    p(o.UploadImage, e, {}, { "Content-Type": "multipart/form-data" }),
  qO = async (e) =>
    p(o.UploadVideo, e, {}, { "Content-Type": "multipart/form-data" }),
  zO = () => p(o.Get4DGameConfig).then((e) => e),
  KO = () => p(o.GetGame4DIssue).then((e) => e),
  XO = (e) => p(o.D4GameBetting, e).then((s) => s),
  JO = () => p(o.Get4DOddsList).then((e) => e),
  YO = () => p(o.GetGameTypeList).then((e) => e),
  QO = (e) => p(o.GetMy4DHistoryBetting, e).then((s) => s),
  ZO = () => p(o.Get4DGameResult).then((e) => e),
  eM = (e) => p(o.Get4DGameResultByType, e).then((s) => s),
  sM = (e) => p(o.D4GameCancelOrder, e).then((s) => s),
  rC = async () => p(o.GetInvitedWheelInfo),
  lC = async () => p(o.SpinInvitedWheel),
  tM = async () => p(o.GetInvitedWheelRules),
  dC = async (e) => p(o.GetUserInvitedWheelWithdrawList, e),
  nM = async (e) => p(o.SubmitInvitedWheelWithdraw, e),
  { localStore: Rt } = ot(),
  me = as.create({ baseURL: "https://apiweb.arbpay.me", timeout: 3e4 });
me.interceptors.request.use(
  (e) => {
    const s = e.data;
    return (
      s &&
        Object.keys(s).forEach((t) => {
          s[t] === "" && delete s[t];
        }),
      e.method === "post" && (e.data = { ...e.data, token: Rt.get("ar_p_t") }),
      e.method === "get" &&
        (e.params = { ...e.params, token: Rt.get("ar_p_t") || "" }),
      e
    );
  },
  (e) => Promise.reject(e)
);
me.interceptors.response.use(
  (e) => {
    const s = ke.global.t,
      { data: t, config: n, status: a } = e;
    return n.method === "put" && a === 200
      ? (je(s("UploadSuccessful")), !0)
      : t;
  },
  (e) => {
    const s = ke.global.t;
    return Fe(s("pServer")), Promise.reject(e);
  }
);
function aM(e) {
  return me.post("/ar-wallet/v4/apiCenter/payWithoutUtr", e);
}
function oM(e) {
  return me.post("/ar-wallet/v4/apiCenter/subUtr", e);
}
function uC(e) {
  return me.post("/ar-wallet/v4/apiCenter/status", e);
}
function pM(e) {
  return me.get("/ar-wallet/v4/apiCenter/fetchThirdPartyRechargePageInfo");
}
function cM(e) {
  return me.post("/ar-wallet/v4/apiCenter/noPay", e);
}
function mC(e) {
  return me.get("/ar-wallet/signUp/getCurrentCustomerServiceSystem", {
    params: e,
  });
}
function iM(e) {
  return me.post("/ar-wallet/v4/apiCenter/submitRechargeAppeal", e);
}
function gM(e) {
  return me.post("/ar-wallet/v4/apiCenter/rechargeAppealExist", e);
}
function rM(e) {
  return me.post("/ar-wallet/v4/apiCenter/getBanks/forBuyAppeal", e);
}
function lM(e) {
  return me.post("/ar-wallet/v4/apiCenter/sendOtp", e);
}
function dM(e) {
  return me.post("/ar-wallet/v4/apiCenter/verifyOtp", e);
}
function uM(e) {
  return me.post("/ar-wallet/v4/apiCenter/confirmPayment", e);
}
function wC(e) {
  return me.post("/ar-wallet/v4/apiCenter/onPaymentPageExit", e);
}
function mM(e) {
  return me.post("/ar-wallet/v4/apiCenter/cancellationReasonList", e);
}
function wM(e) {
  return me.post("/ar-wallet/v4/apiCenter/subForWakeUp", e);
}
var bC = ((e) => ((e.QuickApk = "quick_apk"), (e.FullApk = "full_apk"), e))(
  bC || {}
);
const vC = Hn(() => {
    const e = qn("apk-value-storage", "");
    return {
      apk: e,
      setApk: (s) => {
        e.value = s;
      },
      getApk: () => e.value,
      isFullApk: () => !!e.value && e.value === "full_apk",
    };
  }),
  yC = vC(),
  bM = () => {
    "serviceWorker" in navigator &&
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/ar-sw.js")
          .then((e) => {})
          .catch((e) => {
            console.error("Service Worker registration failed:", e);
          });
      }),
      fC();
  };
function fC() {
  var e;
  try {
    if ((e = window.NativeBridge) != null && e.getInfoString) {
      const s = window.NativeBridge.getInfoString(),
        t = JSON.parse(s);
      window.gtag("event", t.apkType),
        un("apkInfo", t),
        yC.setApk(t.apkType || "native");
    }
  } catch (s) {
    console.error("🍎获取原生参数失败:", s);
  }
  return {};
}
function vM() {
  var e;
  try {
    if ((e = window.NativeBridge) != null && e.openExternalUrl) return !0;
  } catch (s) {
    console.error("🍎检查是否为原生WebView失败:", s);
  }
  return !1;
}
function Xe() {
  var e;
  try {
    if ((e = window.NativeBridge) != null && e.openExternalPage) return !0;
  } catch (s) {
    console.error("🍎检查是否为原生WebView失败:", s);
  }
  return !1;
}
function ms(e) {
  var a;
  const s = getComputedStyle(document.documentElement),
    t = s.getPropertyValue("--main-color").trim(),
    n = s.getPropertyValue("--text_color_L1").trim();
  (a = window.NativeBridge) == null ||
    a.openExternalPage(
      JSON.stringify({ ...e, backgroundColor: t, fontColor: n })
    );
}
function AC(e) {
  var s;
  try {
    (s = window.NativeBridge) != null &&
      s.openExternalUrl &&
      window.NativeBridge.openExternalUrl(e);
  } catch (t) {
    ds({
      message: t instanceof Error ? t.message : "open external url failed",
      duration: 2e3,
      type: "fail",
    }),
      console.error("🍎打开外部链接失败:", t);
  }
}
function hC(e) {
  const s = location.origin,
    t = {
      name: e,
      short_name: e,
      start_url: s + "/",
      display: "standalone",
      safari_specific: {
        safari_extension_version: 2,
        permissions: ["cross-origin-content", "web-page"],
      },
      icons: [
        { src: s + "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: s + "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    n = new Blob([JSON.stringify(t)], { type: "application/manifest+json" }),
    a = URL.createObjectURL(n),
    c = document.createElement("link");
  (c.rel = "manifest"), (c.href = a), document.head.appendChild(c), _C();
}
const _C = async () => {
  const { code: e, data: s } = await xR();
  if (e == 0) {
    const t = s.map((n) => ({ jumpDomain: n.startsWith("http") ? n : FT(n) }));
    if (t.length === 0) return;
    await un("domainInfo", { landingDomainList: t }),
      SC() &&
        window.parent.postMessage({ type: "upDomainList", params: t }, "*");
  }
};
async function dn() {
  return new Promise((e, s) => {
    const t = indexedDB.open("_arstorage", 2);
    (t.onerror = (n) => {
      const a = n.target && "error" in n.target ? n.target.error : void 0;
      s(a);
    }),
      (t.onsuccess = (n) => {
        if (!n.target) {
          s(new Error("IndexedDB onsuccess event.target is null"));
          return;
        }
        const i = n.target.result
          .transaction(["_ionickv"], "readwrite")
          .objectStore("_ionickv");
        e(i);
      }),
      (t.onupgradeneeded = (n) => {
        if (!n.target)
          throw new Error("IndexedDB onupgradeneeded event.target is null");
        const a = n.target.result;
        a.objectStoreNames.contains("_ionickv") ||
          a.createObjectStore("_ionickv");
      });
  });
}
function SC() {
  const e = new URL(window.location.href);
  return (
    e.searchParams.get("unTopWindow") === "true" &&
    e.searchParams.get("domainType") !== "google"
  );
}
async function jC(e, s, t) {
  const n = await dn(),
    a = n == null ? void 0 : n.get(e);
  (a.onsuccess = () => s([[e], a.result])),
    (a.onerror = (c) => t(c.target.error));
}
async function yM(e) {
  const s = await Promise.all(e.map((t) => new Promise((n, a) => jC(t, n, a))));
  try {
    return Object.fromEntries(s);
  } catch {
    const n = {};
    return (
      s.forEach(([a, c]) => {
        n[a] = c;
      }),
      n
    );
  }
}
async function un(e, s) {
  return new Promise((t, n) => {
    dn().then((a) => {
      const i = a.put(s, e);
      (i.onsuccess = () => t(!0)),
        (i.onerror = (l) => {
          l.target
            ? n(l.target.error)
            : n(new Error("putRequest.onerror: event.target is null"));
        });
    });
  });
}
const Hs = {};
pe.extend(zn);
const Ct = localStorage.getItem("language") || "zh";
let ls = "";
switch (Ct) {
  case "zh_TC":
    ls = "zh-tw";
    break;
  case "tc":
    ls = "zh-tw";
    break;
  default:
    ls = Ct;
    break;
}
ls && pe.locale(ls);
const rt = (e, s = "YYYY-MM-DD HH:mm:ss") => {
    var t = 8,
      n = new Date().getTimezoneOffset();
    if (!e) return "";
    typeof e == "number" && (e = new Date(e * 1e3));
    var a = e.getTime(),
      c = new Date(a + n * 60 * 1e3 + t * 60 * 60 * 1e3),
      i = {
        "M+": c.getMonth() + 1,
        "D+": c.getDate(),
        "h+": c.getHours() % 12 === 0 ? 12 : c.getHours() % 12,
        "H+": c.getHours(),
        "m+": c.getMinutes(),
        "s+": c.getSeconds(),
        "q+": Math.floor((c.getMonth() + 3) / 3),
        S: c.getMilliseconds(),
      },
      l = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" };
    /(Y+)/.test(s) &&
      (s = s.replace(
        RegExp.$1,
        (c.getFullYear() + "").substr(4 - RegExp.$1.length)
      )),
      /(E+)/.test(s) &&
        (s = s.replace(
          RegExp.$1,
          (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "星期" : "周") : "") +
            l[e.getDay() + ""]
        ));
    for (var g in i)
      new RegExp("(" + g + ")").test(s) &&
        (s = s.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? i[g]
            : ("00" + i[g]).substr(("" + i[g]).length)
        ));
    return s;
  },
  mn = (e, s = 1, t = "YYYY-MM-DD HH:mm:ss") => {
    var n = e;
    return (
      s === 1
        ? (isNaN(n) && (n = 0),
          (n = Math.round(parseInt(e.valueOf()))),
          (n = pe(n).format(t)))
        : s === 2 && (n = lt(n)),
      n
    );
  },
  lt = (e) => {
    e = e.replace(/-/g, "/");
    var s = Math.round(parseInt(new Date(e).valueOf()) / 1e3);
    return isNaN(s) && (s = 0), s;
  },
  wn = (e) => parseInt(e / 1e3),
  hs = (e) => {
    var s = new Date().getTimezoneOffset() / 60;
    if (s > 0)
      var t = 8 - s,
        t = t * 60 * 60,
        n = e - t - 46800 + t;
    else
      var t = 8 + s,
        t = t * 60 * 60,
        n = e - t;
    return n < 0 ? 0 : n;
  },
  bn = (e, s) => {
    let t = e;
    return (
      t.startTime &&
        ((t.startTime = parseInt(t.startTime / 1e3 || 0)),
        (t.startTime = hs(t.startTime))),
      t.endTime &&
        ((t.endTime = parseInt(t.endTime / 1e3 || 0)),
        (t.endTime = hs(t.endTime))),
      s &&
        s.length > 0 &&
        s.map((n) => {
          let a = t[n];
          a && ((a = parseInt(a / 1e3 || 0)), (a = hs(a)));
        }),
      t
    );
  },
  $C = () => Math.ceil(new Date().getTime() / 1e3),
  BC = () => pe(new Date()).add(7, "day").unix(),
  vn = (e, s = "YYYY-MM-DD HH:mm:ss") => {
    let t = rt(e, s);
    return pe().to(pe(t));
  };
let yn = {
  filterDate: rt,
  filterTimeStamp: mn,
  makeNewTimes: lt,
  toUnix: wn,
  toBeiJingTime: bn,
  fromNow: vn,
};
function GC(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function LC(e, s) {
  let t = {};
  return (
    e.map((n) => {
      t[n.value] = n.key;
    }),
    s || s === 0 ? t[s] : ""
  );
}
let fn = [];
for (let e in Hs) {
  if (Hs[e][0].auto === !1) break;
  let t = "filter" + GC(e);
  fn.push([t, (n) => LC(Hs[e], n)]);
}
fn.forEach(([e, s]) => {
  yn[e] = (t) => s(t);
});
const kC = yn,
  TC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Timestamp: hs,
        filterDate: rt,
        filterTimeStamp: mn,
        fromNow: vn,
        getNowTime: $C,
        makeNewTimes: lt,
        nextWeek: BC,
        refiter: kC,
        toBeiJingTime: bn,
        toUnix: wn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fM = TC,
  IC = { key: 0, class: "active-container" },
  RC = ["src"],
  CC = { class: "active-box" },
  PC = { class: "title" },
  DC = ["src"],
  EC = ["innerHTML"],
  xC = { key: 2 },
  OC = ["src"],
  MC = Et({
    __name: "index",
    setup(e) {
      const s = Ce(),
        { setLoading: t } = Bs(),
        n = j({}),
        a = async () => {
          var g;
          t(!0);
          const l = await L(
            nR({ bannerId: Number(s.currentRoute.value.query.id) })
          );
          (g = l == null ? void 0 : l.data) == null || g.jumpType,
            (n.value = l.data),
            t(!1);
        },
        c = $(() => {
          var l;
          if (!((l = n.value) != null && l.img)) return [];
          try {
            return JSON.parse(n.value.img);
          } catch {
            return [];
          }
        });
      function i() {
        s.go(-1);
      }
      return (
        Qs(async () => {
          a();
        }),
        (l, g) => {
          const m = xt("NavBar");
          return (
            Le(),
            Ge(
              qs,
              null,
              [
                Wt(
                  m,
                  {
                    title: l.$t("activityDestitle"),
                    backgroundColor: "#f54545",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: i,
                  },
                  null,
                  8,
                  ["title"]
                ),
                n.value.coverUrl || n.value.title || n.value.img
                  ? (Le(),
                    Ge("div", IC, [
                      Ke(
                        "img",
                        { class: "banner", src: n.value.coverUrl },
                        null,
                        8,
                        RC
                      ),
                      Ke("div", CC, [
                        Ke("div", PC, Mt(n.value.title), 1),
                        n.value.jumpType == 4
                          ? (Le(),
                            Ge(
                              "iframe",
                              { key: 0, src: n.value.contents },
                              null,
                              8,
                              DC
                            ))
                          : n.value.jumpType !== 3
                          ? (Le(),
                            Ge(
                              "div",
                              { key: 1, innerHTML: n.value.img },
                              null,
                              8,
                              EC
                            ))
                          : (Le(),
                            Ge("div", xC, [
                              (Le(!0),
                              Ge(
                                qs,
                                null,
                                Ot(
                                  c.value,
                                  (d, b) => (
                                    Le(),
                                    Ge("div", { key: b }, [
                                      Ke(
                                        "img",
                                        { src: d == null ? void 0 : d.Url },
                                        null,
                                        8,
                                        OC
                                      ),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ])),
                      ]),
                    ]))
                  : Kn("v-if", !0),
              ],
              64
            )
          );
        }
      );
    },
  });
const WC = Xt(MC, [
    ["__scopeId", "data-v-cfff515d"],
    [
      "__file",
      "/usr/local/jenkins-prod/workspace/ar051-india-tiranga/src/views/activity/ActivityDetail/index.vue",
    ],
  ]),
  UC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: WC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  XP as $,
  L as A,
  kP as B,
  VP as C,
  xD as D,
  GD as E,
  LD as F,
  Ae as G,
  UD as H,
  DD as I,
  TP as J,
  OD as K,
  nP as L,
  TD as M,
  ke as N,
  CD as O,
  ID as P,
  PD as Q,
  mR as R,
  $D as S,
  MD as T,
  WD as U,
  lP as V,
  kD as W,
  RD as X,
  EI as Y,
  ED as Z,
  Xt as _,
  KP as a,
  rT as a$,
  QD as a0,
  sI as a1,
  _D as a2,
  sn as a3,
  Bs as a4,
  YP as a5,
  wP as a6,
  ox as a7,
  Dx as a8,
  YR as a9,
  bI as aA,
  vM as aB,
  AC as aC,
  ZD as aD,
  eE as aE,
  sE as aF,
  RP as aG,
  gn as aH,
  cn as aI,
  jP as aJ,
  tD as aK,
  sD as aL,
  De as aM,
  gt as aN,
  Xe as aO,
  ms as aP,
  Se as aQ,
  ts as aR,
  Ye as aS,
  ns as aT,
  nt as aU,
  pt as aV,
  at as aW,
  aE as aX,
  tE as aY,
  nE as aZ,
  rn as a_,
  KE as aa,
  XE as ab,
  me as ac,
  oD as ad,
  PP as ae,
  EP as af,
  xP as ag,
  ot as ah,
  gM as ai,
  iM as aj,
  aD as ak,
  nD as al,
  pD as am,
  mM as an,
  pM as ao,
  aM as ap,
  DP as aq,
  OP as ar,
  cM as as,
  oM as at,
  wM as au,
  rM as av,
  dM as aw,
  lM as ax,
  uM as ay,
  fe as az,
  qt as b,
  rD as b$,
  FT as b0,
  bE as b1,
  oE as b2,
  GP as b3,
  WR as b4,
  eD as b5,
  gD as b6,
  wE as b7,
  vC as b8,
  bC as b9,
  CE as bA,
  cP as bB,
  DT as bC,
  kE as bD,
  qP as bE,
  PE as bF,
  WE as bG,
  UE as bH,
  RE as bI,
  bD as bJ,
  UI as bK,
  HD as bL,
  FD as bM,
  EE as bN,
  xE as bO,
  OE as bP,
  ME as bQ,
  YD as bR,
  BE as bS,
  LE as bT,
  zx as bU,
  wD as bV,
  ZC as bW,
  NE as bX,
  hD as bY,
  AD as bZ,
  uD as b_,
  Zt as ba,
  NT as bb,
  LI as bc,
  zt as bd,
  xT as be,
  pT as bf,
  GI as bg,
  Vt as bh,
  OI as bi,
  zT as bj,
  dD as bk,
  SP as bl,
  yD as bm,
  IP as bn,
  NI as bo,
  TE as bp,
  IE as bq,
  mD as br,
  p as bs,
  o as bt,
  uE as bu,
  ET as bv,
  Nt as bw,
  DE as bx,
  iP as by,
  vD as bz,
  fs as c,
  Vx as c$,
  bP as c0,
  VI as c1,
  pE as c2,
  lE as c3,
  qR as c4,
  iE as c5,
  rE as c6,
  dP as c7,
  GE as c8,
  gE as c9,
  JC as cA,
  XC as cB,
  HP as cC,
  YC as cD,
  QC as cE,
  WP as cF,
  UP as cG,
  HO as cH,
  cD as cI,
  tM as cJ,
  nM as cK,
  dC as cL,
  Qx as cM,
  mP as cN,
  Kx as cO,
  Yx as cP,
  Xx as cQ,
  Jx as cR,
  It as cS,
  lx as cT,
  ux as cU,
  yx as cV,
  XR as cW,
  Ux as cX,
  Fx as cY,
  Mx as cZ,
  Wx as c_,
  dE as ca,
  uP as cb,
  NP as cc,
  fD as cd,
  mE as ce,
  II as cf,
  cE as cg,
  Yt as ch,
  lD as ci,
  fE as cj,
  FO as ck,
  AE as cl,
  jE as cm,
  jD as cn,
  hE as co,
  SE as cp,
  QP as cq,
  $E as cr,
  _E as cs,
  yE as ct,
  Ue as cu,
  yM as cv,
  vt as cw,
  tn as cx,
  vE as cy,
  KC as cz,
  rP as d,
  HR as d$,
  Nx as d0,
  qx as d1,
  kx as d2,
  Px as d3,
  uT as d4,
  $P as d5,
  Ex as d6,
  dx as d7,
  bx as d8,
  wx as d9,
  zE as dA,
  QE as dB,
  ZE as dC,
  Lx as dD,
  YE as dE,
  JE as dF,
  sx as dG,
  Ax as dH,
  fx as dI,
  ex as dJ,
  jx as dK,
  _x as dL,
  Sx as dM,
  Gx as dN,
  Bx as dO,
  qO as dP,
  $x as dQ,
  HE as dR,
  un as dS,
  LT as dT,
  eP as dU,
  sP as dV,
  pP as dW,
  oP as dX,
  CP as dY,
  bM as dZ,
  fM as d_,
  gx as da,
  Rx as db,
  ix as dc,
  mx as dd,
  Tx as de,
  Cx as df,
  px as dg,
  xx as dh,
  LP as di,
  rx as dj,
  cx as dk,
  FE as dl,
  VE as dm,
  Ox as dn,
  Ix as dp,
  BP as dq,
  Hx as dr,
  vx as ds,
  tx as dt,
  aP as du,
  nx as dv,
  qE as dw,
  FP as dx,
  hx as dy,
  ax as dz,
  XD as e,
  zO as e0,
  KO as e1,
  XO as e2,
  JO as e3,
  YO as e4,
  QO as e5,
  ZO as e6,
  eM as e7,
  sM as e8,
  _O as e9,
  kO as eA,
  EO as eB,
  OO as eC,
  MO as eD,
  UO as eE,
  NO as eF,
  AP as eG,
  hP as eH,
  fP as eI,
  yP as eJ,
  vP as eK,
  _P as eL,
  TO as eM,
  IO as eN,
  WO as eO,
  tP as eP,
  xO as eQ,
  eO as eR,
  Zx as eS,
  pO as eT,
  aO as eU,
  gO as eV,
  cO as eW,
  dO as eX,
  iO as eY,
  VO as eZ,
  SO as ea,
  jO as eb,
  $O as ec,
  AO as ed,
  hO as ee,
  GO as ef,
  tO as eg,
  BO as eh,
  yO as ei,
  sO as ej,
  rO as ek,
  js as el,
  oO as em,
  nO as en,
  bO as eo,
  wO as ep,
  vO as eq,
  uO as er,
  mO as es,
  fO as et,
  lO as eu,
  RO as ev,
  DO as ew,
  CO as ex,
  PO as ey,
  LO as ez,
  gP as f,
  ss as g,
  us as h,
  ZP as i,
  JD as j,
  SD as k,
  BD as l,
  gI as m,
  zP as n,
  qD as o,
  vR as p,
  fR as q,
  WT as r,
  ND as s,
  zD as t,
  iD as u,
  VD as v,
  KD as w,
  JP as x,
  Te as y,
  MP as z,
};
