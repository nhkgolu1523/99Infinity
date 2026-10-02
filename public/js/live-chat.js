/* ==========================================================================
   live-chat.js — the Support team chat (the /support/live-chat screen).

   The behaviour is the standalone chat page's own script, unchanged: the bot
   knowledge base, the longest-keyword matcher, the typing indicator, the quick
   topics panel and the touch behaviour all work exactly as designed.

   Only two things differ on the site:

     * the icons. The standalone page used Font Awesome; the site ships its own
       inline SVG sprite (src/components/icons.tsx, mounted once near the top of
       <body>), so every <i class="fa-..."> becomes a tiny <svg><use href="#i-...">
       helper (`svgIcon` below) — the chat stays CDN-free.
     * the ids. The header back arrow is an <a href="/support"> so it walks back
       normally, and the chat's own markup ids are all `lc-*`.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.getElementById('liveChat');
  if (!root) return;

  var chatArea = document.getElementById('lcChat');
  var msgInput = document.getElementById('lcInput');
  var chipsPanel = document.getElementById('lcChips');
  var plusBtn = document.getElementById('lcPlus');
  var sendBtn = document.getElementById('lcSend');

  if (!chatArea || !msgInput || !chipsPanel || !plusBtn || !sendBtn) return;

  /* ================= ICONS (site sprite — no Font Awesome) ================= */
  function svgIcon(name, size, solid) {
    return (
      '<svg class="icon" style="width:' +
      size +
      ';height:' +
      size +
      ';"' +
      (solid ? ' fill="currentColor"' : '') +
      ' aria-hidden="true"><use href="#i-' +
      name +
      '"></use></svg>'
    );
  }

  var ICON_HEADSET = svgIcon('fa-headset', '0.26rem', true);

  var topicIcons = {
    'Deposit Issue': svgIcon('fa-credit-card', '0.24rem', true),
    'Withdrawal Issue': svgIcon('fa-arrow-up-from-bracket', '0.24rem', true),
    'Game Issue': svgIcon('fa-dice', '0.24rem', true),
    'Account Issue': svgIcon('fa-shield', '0.24rem', true),
  };

  /* the server renders the chips without an icon font; fill in the sprite icon
     so the panel looks like the design even if the markup changes upstream */
  Array.prototype.forEach.call(
    chipsPanel.querySelectorAll('[data-lc-topic]'),
    function (chip) {
      var icon = topicIcons[chip.getAttribute('data-lc-topic')];
      if (icon && !chip.querySelector('.icon')) chip.insertAdjacentHTML('afterbegin', icon);
    }
  );

  var topicLocked = false;
  var scrollScheduled = false;

  function getTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + String(m).padStart(2, '0') + ' ' + ampm;
  }

  function scrollToBottom(instant) {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(function () {
      scrollScheduled = false;
      if (instant) {
        chatArea.scrollTop = chatArea.scrollHeight;
      } else {
        chatArea.scrollTo({ top: chatArea.scrollHeight, behavior: 'smooth' });
      }
    });
  }

  function addMessage(text, sender) {
    sender = sender || 'bot';
    var row = document.createElement('div');
    row.className = 'lc-msg lc-msg--' + (sender === 'bot' ? 'bot' : 'user');

    if (sender === 'bot') {
      row.innerHTML =
        '<div class="lc-msg__avatar">' +
        ICON_HEADSET +
        '</div><div class="lc-bubble">' +
        text +
        '<span class="lc-time">' +
        getTime() +
        '</span></div>';
    } else {
      row.innerHTML =
        '<div class="lc-bubble">' +
        text +
        '<span class="lc-time">' +
        getTime() +
        '</span></div>';
    }

    chatArea.appendChild(row);
    scrollToBottom();
  }

  function showTyping() {
    var row = document.createElement('div');
    row.className = 'lc-typing-row';
    row.id = 'lcTyping';
    row.innerHTML =
      '<div class="lc-msg__avatar">' +
      ICON_HEADSET +
      '</div><div class="lc-typing"><span></span><span></span><span></span></div>';
    chatArea.appendChild(row);
    scrollToBottom();
  }

  function hideTyping() {
    var typing = document.getElementById('lcTyping');
    if (typing) typing.remove();
  }

  function openChips() {
    chipsPanel.classList.add('is-open');
    plusBtn.classList.add('is-open');
  }

  function closeChips() {
    chipsPanel.classList.remove('is-open');
    plusBtn.classList.remove('is-open');
  }

  function toggleChips() {
    if (chipsPanel.classList.contains('is-open')) closeChips();
    else openChips();
  }

  msgInput.addEventListener('input', function () {
    if (topicLocked) return;
    if (this.value.trim().length > 0) closeChips();
    else openChips();
  });

  function sendMessage() {
    var text = msgInput.value.trim();
    if (!text) return;

    addMessage(escapeHtml(text), 'user');
    msgInput.value = '';

    showTyping();
    var delay = 900 + Math.random() * 700;
    setTimeout(function () {
      hideTyping();
      addMessage(getBotReply(text), 'bot');
    }, delay);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  }

  function sendSuggestion(text) {
    /* the tap closes the panel; typing inside it would otherwise reopen it
       (the "input" listener) — the lock lasts exactly one send */
    topicLocked = true;
    closeChips();
    msgInput.value = text;
    sendMessage();
    topicLocked = false;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  plusBtn.addEventListener('click', toggleChips);
  sendBtn.addEventListener('click', sendMessage);
  msgInput.addEventListener('keypress', handleKeyPress);

  Array.prototype.forEach.call(
    chipsPanel.querySelectorAll('[data-lc-topic]'),
    function (chip) {
      chip.addEventListener('click', function () {
        sendSuggestion(chip.getAttribute('data-lc-topic') || '');
      });
    }
  );

  /* ================================================================
                        BOT KNOWLEDGE BASE
     ================================================================ */
  /* Priority order: specific first, generic last. The matcher below picks the
     LONGEST keyword that matches, so an entry order only breaks ties. */
  var botKnowledge = [

    /* ============ HOW ARE YOU (SPECIFIC) ============ */
    {
      keywords: ['how are you', 'how r u', 'how do you do', 'kaise ho', 'kaisa hai', 'kaise hain', 'kese ho', 'how are u doing'],
      reply: 'I\'m doing great, thank you for asking! 😊 I\'m here 24/7 to help you with anything. How are <strong>you</strong> doing today?'
    },

    /* ============ WHAT IS YOUR NAME / WHO ARE YOU ============ */
    {
      keywords: ['your name', 'who are you', 'what is your name', 'tumhara naam', 'aap kaun', 'tum kaun'],
      reply: 'I\'m the <strong>99Infinity Support Assistant</strong> 🤖 — here to help you with deposits, withdrawals, games, and anything else 24/7!'
    },

    /* ============ ARE YOU A BOT ============ */
    {
      keywords: ['are you a bot', 'are you human', 'are you real', 'bot ho', 'insaan ho'],
      reply: 'I\'m an <strong>AI assistant</strong> 🤖 helping with quick support. If you need a human agent, just say "talk to human" and I\'ll connect you!'
    },

    /* ============ GOOD MORNING / EVENING ============ */
    {
      keywords: ['good morning', 'gm', 'good evening', 'good afternoon', 'subah', 'shubh'],
      reply: 'Hello and welcome! 🌞 Hope you\'re having a wonderful day. How can I help you today?'
    },

    /* ============ GREETINGS (BASIC) ============ */
    {
      keywords: ['hi', 'hello', 'hey', 'hii', 'hiii', 'hlo', 'helo', 'namaste', 'namaskar', 'yo', 'start', 'salam', 'assalam'],
      reply: 'Hello! 👋 Welcome to <strong>99Infinity Support</strong>. How can I help you today?'
    },

    /* ============ DEPOSIT NOT CREDITED ============ */
    {
      keywords: ['not credited', 'not received', 'nahi aya', 'nahi aaya', 'not showing', 'pending deposit', 'deposit pending', 'deposit missing'],
      reply: 'Sorry for the delay! 🙏 Deposits usually reflect within <strong>10 minutes</strong>. If it\'s been longer, please share your <strong>Transaction ID</strong> or UPI reference and we\'ll resolve it immediately.'
    },

    /* ============ DEPOSIT ============ */
    {
      keywords: ['deposit', 'add money', 'add balance', 'recharge', 'add fund', 'top up', 'topup', 'paisa dal', 'paisa add', 'paise dal'],
      reply: 'I can help with deposits! 💳 The minimum is <strong>₹500</strong> and deposits are instant via UPI, Bank, USDT, or Card. What\'s your issue — payment failed, not credited, or something else?'
    },

    /* ============ WITHDRAWAL NOT RECEIVED ============ */
    {
      keywords: ['withdraw not received', 'withdrawal pending', 'withdraw pending', 'withdraw nahi', 'paisa nahi aya'],
      reply: 'Withdrawals are usually processed within <strong>30 minutes</strong>. ⏱️ If it\'s been longer, please share your <strong>Withdrawal Request ID</strong> and I\'ll check the status right away.'
    },

    /* ============ WITHDRAWAL ============ */
    {
      keywords: ['withdraw', 'withdrawal', 'cash out', 'payout', 'nikalna', 'paisa nikal', 'paisa withdraw'],
      reply: 'Withdrawals usually take <strong>1–30 minutes</strong>. 💸 Could you share your withdrawal request ID so I can check the status?'
    },

    /* ============ GAME ISSUES ============ */
    {
      keywords: ['game', 'play', 'bet', 'crash', 'stuck', 'lag', 'freeze', 'glitch', 'bug', 'khel', 'khelna'],
      reply: 'Sorry to hear about the game issue. 🎮 Please tell me <strong>which game</strong> you were playing and what happened — I\'ll help you sort it out.'
    },

    /* ============ WIN / LOSS ============ */
    {
      keywords: ['win', 'won', 'loss', 'lost', 'profit', 'lose', 'jeeta', 'haara'],
      reply: 'Your winnings are credited automatically to your wallet. 🏆 If you feel there\'s a discrepancy, please share the <strong>game name, round ID, and a screenshot</strong> for review.'
    },

    /* ============ OTP ============ */
    {
      keywords: ['otp', 'otp not received', 'no otp', 'otp nahi'],
      reply: 'If you\'re not receiving OTP: 1️⃣ Check SMS inbox & spam 2️⃣ Ensure correct number 3️⃣ Wait 60 seconds & retry. 📱 Still not working? Share your registered number.'
    },

    /* ============ PASSWORD ============ */
    {
      keywords: ['password', 'forgot password', 'reset password', 'change password', 'password bhul'],
      reply: 'To reset your password: 1️⃣ Go to Login page 2️⃣ Tap "Forgot Password" 3️⃣ Enter registered number 4️⃣ Verify OTP 5️⃣ Set new password. 🔐 Need more help?'
    },

    /* ============ LOGIN ============ */
    {
      keywords: ['login', 'sign in', 'signin', 'log in', 'cannot login', 'login issue'],
      reply: 'Having trouble logging in? 🔑 Please share what happens — wrong password, OTP not received, or account locked? I\'ll guide you.'
    },

    /* ============ REGISTER ============ */
    {
      keywords: ['register', 'signup', 'sign up', 'create account', 'new account', 'naya account'],
      reply: 'Creating an account is easy! 📝 Tap <strong>Register</strong> on the home page, enter your phone number and set a password. Takes less than a minute!'
    },

    /* ============ ACCOUNT ============ */
    {
      keywords: ['account', 'account issue', 'account problem', 'account band', 'account locked'],
      reply: 'Account issues are important to us. 👤 Is it related to <strong>login, OTP, verification, or account suspension</strong>? Let me know.'
    },

    /* ============ BALANCE ============ */
    {
      keywords: ['balance', 'wallet', 'amount', 'paisa', 'balance issue', 'balance kam', 'balance gayab'],
      reply: 'Could you please share a <strong>screenshot</strong> or the exact amount discrepancy you noticed? 💰 Our team will resolve it quickly.'
    },

    /* ============ BONUS ============ */
    {
      keywords: ['bonus', 'promo', 'offer', 'reward', 'cashback', 'voucher', 'coupon', 'free'],
      reply: 'We have great bonuses! 🎁 Which one are you asking about — <strong>Welcome Bonus, Daily Reload, Refer & Earn, Weekend Cashback,</strong> or <strong>VIP</strong>?'
    },

    /* ============ KYC ============ */
    {
      keywords: ['kyc', 'verify', 'verification', 'document', 'id proof', 'aadhaar', 'pan', 'aadhar'],
      reply: 'For KYC: upload a clear photo of your <strong>ID proof</strong> and a <strong>selfie</strong>. 📄 Verification usually takes up to 24 hours.'
    },

    /* ============ REFUND ============ */
    {
      keywords: ['refund', 'cancel', 'return', 'money back', 'paisa wapas'],
      reply: 'Refunds are processed as per policy. 🔄 Please share your <strong>transaction details</strong> and reason, our team will review it.'
    },

    /* ============ MINIMUM ============ */
    {
      keywords: ['minimum', 'min deposit', 'min withdraw', 'minimum deposit', 'minimum withdrawal', 'kitna'],
      reply: 'The minimum deposit is <strong>₹500</strong> and minimum withdrawal is <strong>₹100</strong>. 💵 Need help getting started?'
    },

    /* ============ HOW TO DEPOSIT ============ */
    {
      keywords: ['how to deposit', 'how do i deposit', 'deposit kaise', 'kaise deposit', 'how to add money'],
      reply: 'To deposit: 1️⃣ Go to <strong>Wallet</strong> 2️⃣ Tap <strong>Deposit</strong> 3️⃣ Enter amount (min ₹500) 4️⃣ Choose payment method 5️⃣ Scan QR & pay 6️⃣ Tap Verify Payment. ✅'
    },

    /* ============ HOW TO WITHDRAW ============ */
    {
      keywords: ['how to withdraw', 'how do i withdraw', 'withdraw kaise', 'kaise withdraw', 'how to cash out'],
      reply: 'To withdraw: 1️⃣ Go to <strong>Wallet</strong> 2️⃣ Tap <strong>Withdraw</strong> 3️⃣ Enter amount (min ₹100) 4️⃣ Choose UPI/Bank/USDT 5️⃣ Enter details 6️⃣ Tap Request Withdrawal. 💸'
    },

    /* ============ HOW LONG ============ */
    {
      keywords: ['how long', 'kitna time', 'when will', 'time lagega', 'kab tak', 'kitne time'],
      reply: 'Deposits are <strong>instant</strong>, withdrawals take up to <strong>30 minutes</strong>, and support replies within <strong>2 minutes</strong>. ⏱️'
    },

    /* ============ REFER ============ */
    {
      keywords: ['refer', 'friend', 'invite', 'referral', 'friend ko', 'dost'],
      reply: 'Invite friends and earn up to <strong>30% commission</strong> on their gameplay! 🎉 Check the Refer & Earn section in Promotions.'
    },

    /* ============ SECURITY ============ */
    {
      keywords: ['safe', 'secure', 'security', 'trust', 'hack', 'fraud', 'scam', 'dhoka'],
      reply: 'Absolutely safe! 🔒 Your data is fully encrypted with industry-standard security. Passwords are stored using one-way hashing — even we can\'t see them.'
    },

    /* ============ COMPLAINT ============ */
    {
      keywords: ['complain', 'complaint', 'report', 'issue', 'problem', 'dikkat', 'problem hai'],
      reply: 'I\'m sorry for the inconvenience. 🙏 Please describe your issue in detail and our team will resolve it within <strong>24 hours</strong>.'
    },

    /* ============ TALK TO HUMAN ============ */
    {
      keywords: ['human', 'agent', 'talk to', 'real person', 'executive', 'manager', 'call', 'insaan se baat'],
      reply: 'I\'ll connect you with a human agent shortly. 👨‍💼 Meanwhile, could you briefly describe your issue so we can route it correctly?'
    },

    /* ============ LANGUAGE ============ */
    {
      keywords: ['language', 'hindi', 'english', 'tamil', 'telugu', 'change language'],
      reply: 'You can change your preferred language anytime from <strong>Settings → Language</strong>. We currently support English, हिन्दी, தமிழ், and తెలుగు. 🌐'
    },

    /* ============ CONTACT ============ */
    {
      keywords: ['contact', 'email', 'phone', 'whatsapp', 'telegram', 'reach you'],
      reply: 'You can reach us via: 📧 <strong>99Infinity@gmail.com</strong> · 💬 <strong>Live Chat</strong> (24/7) · ✈️ <strong>Telegram</strong> — check the Customer Service page for the links!'
    },

    /* ============ APP UPDATE ============ */
    {
      keywords: ['update', 'app crash', 'app not working', 'app slow', 'app hang'],
      reply: 'Try these steps: 1️⃣ Clear app cache from Settings 2️⃣ Update the app to latest version 3️⃣ Restart your phone. 📱 Still stuck? Let me know your device details.'
    },

    /* ============ VIP ============ */
    {
      keywords: ['vip', 'vip member', 'vip level'],
      reply: 'VIP members get exclusive rewards, personal manager, higher limits, and faster payouts! 👑 Check the VIP section in Promotions to upgrade.'
    },

    /* ============ CASHBACK ============ */
    {
      keywords: ['cashback', 'weekend cashback'],
      reply: 'Weekend Cashback gives you up to <strong>10% back</strong> on losses! 🎁 It\'s automatically credited every Monday. Play more to earn more!'
    },

    /* ============ DAILY BONUS ============ */
    {
      keywords: ['daily bonus', 'daily reward', 'daily login', 'login bonus'],
      reply: 'Daily Bonus gives you a <strong>free game</strong> after completing a 7-day login streak! 🎮 Log in every day without missing to unlock it.'
    },

    /* ============ COMPLIMENTS ============ */
    {
      keywords: ['good app', 'nice app', 'love it', 'great app', 'best app', 'awesome', 'mast', 'badhiya', 'accha'],
      reply: 'Thank you so much! 😊 Your support means the world to us. Happy gaming! 🎮'
    },

    /* ============ FRUSTRATED ============ */
    {
      keywords: ['worst', 'bad', 'useless', 'fraud', 'cheat', 'ghatiya', 'bekar', 'bakwas', 'waste'],
      reply: 'I sincerely apologize for your experience. 🙏 Your concern matters to us. Please share the details and I\'ll personally ensure it\'s resolved quickly.'
    },

    /* ============ CONFUSED ============ */
    {
      keywords: ['don\'t understand', 'confused', 'samajh nahi', 'not clear', 'explain'],
      reply: 'No worries! 😊 Let me help. Could you tell me which part is confusing — <strong>deposit, withdrawal, games, or account</strong>? I\'ll explain step by step.'
    },

    /* ============ THANKS ============ */
    {
      keywords: ['thank', 'thanks', 'thankyou', 'thx', 'shukriya', 'dhanyavaad'],
      reply: 'You\'re most welcome! 😊 Happy gaming! 🎮'
    },

    /* ============ OK / FINE ============ */
    {
      keywords: ['ok', 'okay', 'fine', 'sure', 'hmm', 'achha', 'accha', 'theek', 'thik', 'got it'],
      reply: 'Great! 👍 Let me know if there\'s anything else I can help you with.'
    },

    /* ============ BYE ============ */
    {
      keywords: ['bye', 'goodbye', 'see you', 'tc', 'alvida', 'chalta'],
      reply: 'Goodbye! 👋 Come back anytime if you need help. Happy gaming! 🎮'
    },

    /* ============ HELP ============ */
    {
      keywords: ['help', 'support', 'assist', 'madad', 'guide', 'kya karu'],
      reply: 'Of course! 😊 Please tell me a bit more — is it related to <strong>deposit, withdrawal, game, or account</strong>?'
    },

    /* ============ YES / NO ============ */
    {
      keywords: ['yes', 'yeah', 'yep', 'haan', 'han', 'ha'],
      reply: 'Perfect! ✅ Please share more details and I\'ll assist you right away.'
    },
    {
      keywords: ['no', 'nope', 'nahi', 'nah'],
      reply: 'No problem! 😊 Let me know if you change your mind or need help with something else.'
    },

    /* ============ OK BYE ============ */
    {
      keywords: ['ok bye', 'ok thanks', 'ok done', 'thanks bye'],
      reply: 'Thanks for reaching out! 👋 Have a great day and happy gaming! 🎮'
    }
  ];

  /* ============ FALLBACK RESPONSES (varied) ============ */
  var fallbacks = [
    'Thanks for reaching out! 🙏 Could you please share a bit more detail so I can assist you better?',
    'I\'ve noted your message. 📝 Could you tell me if this is about <strong>deposit, withdrawal, game, or account</strong>?',
    'Got it! Could you provide more context — like your <strong>user ID</strong> or a screenshot — so I can look into it? 🔍',
    'Thanks for the message! 🙌 For faster help, could you briefly describe your issue?',
    'I\'m here to help! 😊 Could you share more details so I can connect you with the right solution?'
  ];

  /* ============ NORMALIZE TEXT ============ */
  function normalize(text) {
    return text
      .toLowerCase()
      /* strip punctuation but keep Devanagari / Tamil / Telugu */
      .replace(/[^\w\s\u0900-\u097F\u0B80-\u0BFF\u0C00-\u0C7F]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* ============ GET BOT REPLY ============ */
  function getBotReply(userText) {
    var raw = userText.trim();
    if (!raw) return 'Please type a message so I can assist you. 😊';

    var text = normalize(raw);

    /* very short gibberish */
    if (text.length < 2 && !/^\d+$/.test(text)) {
      return 'Could you please type a bit more so I can understand? 😊';
    }

    /* match against the keyword list — pick the LONGEST keyword (most specific) */
    var bestMatch = null;
    var bestMatchLength = 0;

    for (var i = 0; i < botKnowledge.length; i++) {
      var item = botKnowledge[i];
      for (var j = 0; j < item.keywords.length; j++) {
        var k = item.keywords[j].toLowerCase();
        if (text.indexOf(k) !== -1 && k.length > bestMatchLength) {
          bestMatch = item;
          bestMatchLength = k.length;
        }
      }
    }

    if (bestMatch) return bestMatch.reply;

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  /* ============ INITIAL LOAD ============ */
  function boot() {
    requestAnimationFrame(function () {
      openChips();
    });

    setTimeout(function () {
      addMessage('Hi there! 👋 Welcome to <strong>99Infinity Support</strong>. How can I help you today?', 'bot');
    }, 350);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* the on-screen keyboard shrinks the viewport without scrolling the chat —
     keep the last bubble in view while it opens and closes */
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', function () {
      scrollToBottom(true);
    });
  }
})();
