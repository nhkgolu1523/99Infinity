/* ==========================================================================
   LUDO MARKUP — the standalone game's <body>, kept exactly as designed.

   Generated from Ludo.html by tools/split-ludo.cjs — do not hand-edit; change
   the game there and re-run the splitter. It lives here as a string because it
   is one closed, self-contained screen tree (boards, SVGs, overlays, templates
   — ~16 kB of markup), so rendering it verbatim through dangerouslySetInnerHTML
   keeps the game pixel-identical while src/pages/ludo.tsx hands over the real
   account data.

   Only three ids differ from the standalone file:
     cFee / qFee          the "-100" labels, filled with the live entry fee
     ludo-toast           the game's own toast (never the site-wide #toast)
   ========================================================================== */
export const LUDO_HTML = `

<!-- ═══════════ LOADING SCREEN ═══════════ -->
<div id="loadingScreen">
  <div class="board-pattern"></div><div class="glow"></div>
  <main class="loader">
    <div class="crown"></div>
    <div class="dice-area">
      <div class="token-load blue-load"></div>
      <div class="token-load red-load"></div>
      <div class="token-load green-load"></div>
      <div class="token-load yellow-load"></div>
      <div class="dice-load"><i class="dots-load d1"></i><i class="dots-load d2"></i><i class="dots-load d3"></i><i class="dots-load d4"></i><i class="dots-load d5"></i></div>
    </div>
    <div class="brand-load">Ludo King</div>
    <div class="subtitle-load">Preparing Your Game</div>
    <section class="progress-box">
      <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
      <div class="progress-row">
        <div class="status-load" id="statusText">Loading...</div>
        <div class="percent-load" id="percentText">0%</div>
      </div>
    </section>
  </main>
</div>

<div id="mainGame" style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">

  <!-- ═══════════ PLAYERS SCREEN ═══════════ -->
  <div class="screen" id="screenPlayers">
    <div class="topbar">
      <div class="topbar-left">
        <button class="icon-btn" id="homeBtn1" aria-label="Home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 13 15 13 15 22"/></svg>
        </button>
        <button class="icon-btn" id="soundBtn1" aria-label="Sound"></button>
      </div>
      <div class="coins-pill">
        <svg class="coin-icon" viewBox="0 0 40 40"><defs><radialGradient id="coinFace1" cx="38%" cy="30%" r="70%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="45%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></radialGradient></defs><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="url(#coinFace1)"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg>
        <div class="coins-count" id="balance1">500</div>
      </div>
    </div>
    <div class="game-title">Ludo King</div>
    <div class="panel">
      <div class="panel-title">Select Players</div>
      <div class="options" id="playerOptions">
        <div class="option selected" data-value="2">
          <div class="radio"><div class="radio-inner"></div></div>
          <div class="option-text"><div class="option-label">2 Players</div><div class="option-sub">Entry Fee 100 Get 200</div></div>
          <div class="option-prize"><svg class="prize-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="#fbbf24"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg><span class="prize-amount">200</span></div>
        </div>
        <div class="option" data-value="4">
          <div class="radio"><div class="radio-inner"></div></div>
          <div class="option-text"><div class="option-label">4 Players</div><div class="option-sub">Entry Fee 100 Get 400</div></div>
          <div class="option-prize"><svg class="prize-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="#fbbf24"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg><span class="prize-amount">400</span></div>
        </div>
      </div>
    </div>
    <div class="how-to-play">
      <div class="htp-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        How To Play
      </div>
      <div class="htp-list" id="howToPlay1"></div>
    </div>
    <button class="btn-primary" id="nextBtn">Next</button>
  </div>

  <!-- ═══════════ COLORS SCREEN ═══════════ -->
  <div class="screen hidden" id="screenColors">
    <div class="topbar">
      <div class="topbar-left">
        <button class="icon-btn" id="backBtn" aria-label="Back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 13 15 13 15 22"/></svg>
        </button>
        <button class="icon-btn" id="soundBtn2" aria-label="Sound"></button>
      </div>
      <div class="coins-pill">
        <svg class="coin-icon" viewBox="0 0 40 40"><defs><radialGradient id="coinFace2" cx="38%" cy="30%" r="70%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="45%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></radialGradient></defs><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="url(#coinFace2)"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg>
        <div class="coins-count" id="balance2">500</div>
      </div>
    </div>
    <div class="game-title">Ludo King</div>
    <div class="panel">
      <div class="panel-title">Select Your Color</div>
      <div class="colors" id="colorOptions">
        <div class="color-opt color-blue selected" data-color="blue"><div class="token-wrap"><div class="color-circle"><svg class="color-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg></div></div><div class="color-label">Blue</div></div>
        <div class="color-opt color-red" data-color="red"><div class="token-wrap"><div class="color-circle"><svg class="color-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg></div></div><div class="color-label">Red</div></div>
        <div class="color-opt color-green" data-color="green"><div class="token-wrap"><div class="color-circle"><svg class="color-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg></div></div><div class="color-label">Green</div></div>
        <div class="color-opt color-yellow" data-color="yellow"><div class="token-wrap"><div class="color-circle"><svg class="color-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg></div></div><div class="color-label">Yellow</div></div>
      </div>
    </div>
    <button class="btn-play" id="playBtn">Play Now</button>
  </div>

  <!-- ═══════════ FINDING SCREEN ═══════════ -->
  <div class="screen hidden" id="screenFinding">
    <div class="topbar">
      <div class="topbar-left">
        <button class="icon-btn" id="homeBtn3" aria-label="Back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 13 15 13 15 22"/></svg>
        </button>
        <button class="icon-btn" id="soundBtn3" aria-label="Sound"></button>
      </div>
      <div class="coins-pill">
        <svg class="coin-icon" viewBox="0 0 40 40"><defs><radialGradient id="coinFace3" cx="38%" cy="30%" r="70%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="45%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></radialGradient></defs><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="url(#coinFace3)"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg>
        <div class="coins-count" id="balance3">500</div>
      </div>
    </div>
    <div class="game-title">Ludo King</div>
    <div class="panel">
      <div class="panel-title">Finding Players</div>
      <div class="finding-status" id="findingStatus"><span id="findingStatusText">Searching</span><span class="search-dots"><span></span><span></span><span></span></span></div>
      <div class="players-grid mode-2" id="playersGrid"></div>
      <div class="progress-wrap">
        <div class="progress-bar"><div class="progress-fill-bar" id="progressFillBar"></div></div>
        <div class="progress-text" id="progressText">1 / 2 ready</div>
      </div>
    </div>
  </div>

  <!-- ═══════════ GAME SCREEN ═══════════ -->
  <div class="screen hidden" id="screenGame">
    <div class="app">

      <div class="topbar">
        <div class="topbar-left">
          <button class="icon-btn" id="homeBtnGame" aria-label="Home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 13 15 13 15 22"/></svg>
          </button>
          <button class="icon-btn" id="soundBtnGame" aria-label="Sound"></button>
        </div>
        <div class="coins-pill">
          <svg class="coin-icon" viewBox="0 0 40 40"><defs><radialGradient id="coinFaceG" cx="38%" cy="30%" r="70%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="45%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></radialGradient></defs><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="url(#coinFaceG)"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg>
          <div class="coins-count" id="balanceGame">500</div>
        </div>
      </div>

      <div class="tray-row top" id="trayRowTop">
        <div class="tray-slot tl-slot"></div>
        <div class="tray-slot tr-slot"></div>
      </div>

      <div class="game" id="game">
        <svg class="board-img" id="boardSvg" viewBox="0 0 15 15" shape-rendering="crispEdges"></svg>
        <div class="turn-toast" id="turnToast"></div>
      </div>

      <div class="tray-row bottom" id="trayRowBottom">
        <div class="tray-slot bl-slot"></div>
        <div class="royal-frame-slot" id="royalFrameSlot"></div>
        <div class="tray-slot br-slot"></div>
      </div>

    </div>
  </div>

  <!-- ═══════════ HIDDEN TRAY TEMPLATES ═══════════ -->
  <div style="display:none;" id="trayTemplates">
    <div class="dice-tray red" id="tray-red">
      <div class="tray-dot"></div>
      <div class="tray-body">
        <span class="tray-name">Player</span>
        <span class="tray-sub">ONLINE</span>
      </div>
    </div>
    <div class="dice-tray green" id="tray-green">
      <div class="tray-dot"></div>
      <div class="tray-body">
        <span class="tray-name">Player 2</span>
        <span class="tray-sub">ONLINE</span>
      </div>
    </div>
    <div class="dice-tray blue" id="tray-blue">
      <div class="tray-dot"></div>
      <div class="tray-body">
        <span class="tray-name">You</span>
        <span class="tray-sub">ONLINE</span>
      </div>
    </div>
    <div class="dice-tray yellow" id="tray-yellow">
      <div class="tray-dot"></div>
      <div class="tray-body">
        <span class="tray-name">Player 3</span>
        <span class="tray-sub">ONLINE</span>
      </div>
    </div>
  </div>

  <!-- ═══════════ ROYAL DICE FRAME (hidden initially) ═══════════ -->
  <div class="royal-frame" id="royalFrame" style="display:none;">
    <div class="royal-frame-inner">
      <span class="corner tl"></span><span class="corner tr"></span>
      <span class="corner bl"></span><span class="corner br"></span>
      <span class="crown-top"></span>
      <div class="dice" id="dice"></div>
    </div>
  </div>

  <!-- ═══════════ CONFIRM OVERLAY ═══════════ -->
  <div class="confirm-overlay" id="confirmOverlay">
    <div class="confirm-box">
      <div class="confirm-header">
        <div class="confirm-title">Are You Sure?</div>
        <div class="confirm-sub">Confirm your match details</div>
      </div>
      <div class="fee-card">
        <div class="fee-row"><span class="lbl">Match Mode</span><span class="val" id="cMode">2 Players</span></div>
        <div class="fee-row"><span class="lbl">Entry Fee</span><span class="val red"><svg class="mini-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="#fbbf24"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg><span class="big-amount" id="cFee">-100</span></span></div>
        <div class="fee-row"><span class="lbl">Prize Pool</span><span class="val gold"><svg class="mini-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="#fbbf24"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg><span class="big-amount" id="cPrize">+200</span></span></div>
        <div class="fee-row divider"><span class="lbl">Balance After</span><span class="val green" id="cAfter"><svg class="mini-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="#fbbf24"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg>400</span></div>
      </div>
      <div class="fee-note">Win: <b id="cWin">+200</b> · Lose: only <b>entry fee</b> lost</div>
      <div class="confirm-actions">
        <button class="btn-back" id="btnBack">Back</button>
        <button class="btn-confirm" id="btnConfirm">Confirm</button>
      </div>
    </div>
  </div>

  <!-- ═══════════ MATCH FOUND ═══════════ -->
  <div class="match-found" id="matchFound">
    <div class="match-glow"></div>
    <div class="match-crown">👑</div>
    <div class="match-found-title">Match Found!</div>
    <div class="match-found-sub">Starting game...</div>
  </div>

  <!-- ═══════════ QUIT OVERLAY ═══════════ -->
  <div class="quit-overlay" id="quitOverlay">
    <div class="quit-box">
      <div class="quit-icon">⚠️</div>
      <div class="quit-title">Are You Sure?</div>
      <div class="quit-msg">If you leave now, your match will be abandoned. The entry fee you already paid is not refunded — nothing else is deducted.</div>
      <div class="quit-cost">
        <svg class="mini-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#b45309"/><circle cx="20" cy="20" r="15" fill="#fbbf24"/><text x="20" y="27" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="19" font-weight="900" fill="#78350f">₹</text></svg>
        <span class="amount" id="qFee">-100</span>
        <span class="lbl">Entry Fee Lost</span>
      </div>
      <div class="quit-actions">
        <button class="btn-stay" id="stayBtn">Stay</button>
        <button class="btn-quit" id="quitBtn">Quit</button>
      </div>
    </div>
  </div>

  <!-- ═══════════ EXIT TOAST ═══════════ -->
  <div class="exit-toast" id="exitToast">
    <span class="t-icon">⚠️</span>
    You left the match · entry fee not refunded
  </div>

  <!-- ═══════════ WIN OVERLAY ═══════════ -->
  <div class="overlay" id="overlay">
    <div class="overlay-card">
      <div class="crown">🏆</div>
      <h2 id="winText"></h2>
      <div class="win-stats" id="winStats">
        <div class="win-line"><span class="win-label" id="winAmountLabel">Prize Won</span><span class="win-amount" id="winAmount">+0</span></div>
        <div class="win-line"><span class="win-label">Wallet Balance</span><span class="win-balance" id="winBalance">0</span></div>
      </div>
      <button id="againBtn">New Game 🔄</button>
    </div>
  </div>

  <div class="ludo-toast" id="ludo-toast"></div>
</div>`
