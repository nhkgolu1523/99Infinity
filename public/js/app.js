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
    el.textContent = msg;
    el.classList.add('is-open');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-open'), ms);
  }
  window.VG_TOAST = toast;

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

  /* ------------------------------------------------------------------ 11. auth forms */
  function initAuthForms() {
    $$('[data-auth-form]').forEach((form) => {
      on(form, 'submit', (e) => {
        e.preventDefault();
        const kind = form.dataset.authForm;

        const phone = form.querySelector('[name="phone"]');
        const password = form.querySelector('[name="password"]');
        const confirm = form.querySelector('[name="confirm"]');
        const terms = form.querySelector('[name="terms"]');

        const digits = phone ? phone.value.replace(/\D/g, '') : '';
        if (digits.length < 8) return toast('Enter a valid phone number');
        if (kind !== 'reset' && password && password.value.length < 6)
          return toast('Password must be at least 6 characters');
        if (confirm && confirm.value !== password.value) return toast('Passwords do not match');
        if (terms && !terms.checked) return toast('Please accept the terms to continue');

        toast(kind === 'login' ? 'Signing you in…' : 'Creating your account…');
        setTimeout(() => Dialog.open('login-alert'), 700);
      });
    });

    $$('[data-send-code]').forEach((btn) => {
      on(btn, 'click', () => toast('Verification code sent'));
    });
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

    /* quick amount chips */
    quickBtns.forEach((btn) =>
      on(btn, 'click', () => {
        amountInput.value = btn.dataset.wdQuick;
        quickBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      })
    );

    /* manual typing — digits only, max ₹5,000 per withdrawal */
    const WD_MAX = 5000;
    on(amountInput, 'input', () => {
      let v = amountInput.value.replace(/[^\d]/g, '');
      if (v.length > 1) v = v.replace(/^0+/, '');
      if (v !== '' && parseInt(v, 10) > WD_MAX) {
        v = String(WD_MAX);
        toast('Maximum withdrawal is ₹5,000 at a time', 3000);
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
      if (amount < 100) return toast('Minimum withdrawal is ₹100', 3000);
      if (amount > WD_MAX) return toast('Maximum withdrawal is ₹5,000 at a time', 3000);

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
        'Are you sure you want to withdraw ₹' + amountInput.value + ' via ' + label + '?';
      Dialog.open('withdrawConfirm');
    });

    /* confirm → success toast + reset */
    on(document.getElementById('wdConfirm'), 'click', () => {
      setTimeout(() => {
        toast('Withdrawal of ₹' + amountInput.value + ' requested!', 3000);
        amountInput.value = '';
        quickBtns.forEach((b) => b.classList.remove('active'));
      }, 300);
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

    /* guest-gated actions: everything that needs an account */
    $$('[data-requires-auth]').forEach((el) =>
      on(el, 'click', (e) => {
        e.preventDefault();
        Dialog.open('login-alert');
      })
    );

    /* declarative toasts — any element with [data-toast] shows its message */
    $$('[data-toast]').forEach((el) => on(el, 'click', () => toast(el.dataset.toast)));

    /* security tools: strength meter, pin keypad, copy, devices, forms */
    initSecurityTools();

    /* lucky wheel spin page */
    initLuckyWheel();

    /* daily reward streak page */
    initDailyReward();

    /* notifications + deposit pages */
    initNotifications();
    initDeposit();

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

    /* page-transition spinner — instant feedback on internal navigation */
    document.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const t = e.target;
      if (!t || !t.closest) return;
      const a = t.closest('a[href]');
      if (!a || a.hasAttribute('data-dialog-open') || a.hasAttribute('data-open-dialog')) return;
      const href = a.getAttribute('href') || '';
      if (!href || href.charAt(0) !== '/' || a.target === '_blank') return;
      if (document.getElementById('pageLoader')) return;
      const loader = document.createElement('div');
      loader.id = 'pageLoader';
      loader.className = 'page-loader';
      loader.innerHTML = '<i></i>';
      document.body.appendChild(loader);
    });

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

    /* device logout */
    const fadeOut = (card) => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateX(-0.48rem)';
      setTimeout(() => card.remove(), 400);
    };
    $$('[data-device-logout]').forEach((btn) =>
      on(btn, 'click', () => {
        const card = btn.closest('[data-device]');
        if (card) fadeOut(card);
        toast('Device logged out successfully!');
      })
    );
    const allBtn = $('[data-logout-all]');
    if (allBtn)
      on(allBtn, 'click', () => {
        const cards = $$('[data-device]');
        if (cards.length <= 1) {
          toast('No other devices to log out');
          return;
        }
        cards.slice(1).forEach(fadeOut);
        setTimeout(() => toast('Logged out from all other devices'), 450);
      });

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
      on(form, 'submit', (e) => {
        e.preventDefault();
        const kind = form.dataset.secForm;
        if (kind === 'password') {
          const cur = form.querySelector('[name="current"]').value.trim();
          const nw = form.querySelector('[name="new"]').value.trim();
          const cf = form.querySelector('[name="confirm"]').value.trim();
          if (!cur) return toast('Please enter your current password');
          if (!nw || nw.length < 8) return toast('Password must be at least 8 characters');
          if (nw !== cf) return toast('Passwords do not match');
          toast('Password changed successfully!', 2500);
          form.reset();
          $$('[data-strength-bars] span').forEach((b) => (b.className = ''));
          const st = $('[data-strength-text]');
          if (st) {
            st.textContent = 'Enter a password';
            st.style.color = '#8b949e';
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

  /* ------------------------------------------------------------------ lucky wheel */
  function initLuckyWheel() {
    const wheel = $('[data-wheel]');
    if (!wheel) return;

    /* MUST match the label order in src/pages/spin.tsx */
    const SEGMENTS = [
      { type: 'win', value: '₹500' },
      { type: 'lose', value: null },
      { type: 'win', value: '₹250' },
      { type: 'lose', value: null },
      { type: 'win', value: '1 Free Game' },
      { type: 'lose', value: null },
      { type: 'win', value: '₹100' },
      { type: 'lose', value: null },
    ];

    let rotation = 0;
    let spinning = false;

    const modal = $('[data-wheel-modal]');
    const icon = $('[data-result-icon]');
    const title = $('[data-result-title]');
    const msg = $('[data-result-msg]');
    const btn = $('[data-result-btn]');

    if (btn && modal) on(btn, 'click', () => modal.classList.remove('active'));

    const spinBtn = $('[data-spin-btn]');
    on(spinBtn, 'click', () => {
      if (spinning) return;
      spinning = true;
      if (spinBtn) spinBtn.disabled = true;

      const index = Math.floor(Math.random() * SEGMENTS.length);
      const seg = SEGMENTS[index];
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

      const info = $('[data-wheel-info]');
      if (info) info.textContent = 'Spinning — good luck!';

      setTimeout(() => {
        if (modal && icon && title && msg) {
          if (seg.type === 'win') {
            icon.textContent = '🎉';
            icon.className = 'lw-box__icon lw-box__icon--win';
            title.textContent = 'Congratulations!';
            title.className = 'lw-box__title lw-box__title--win';
            msg.innerHTML = `You've won <strong>${seg.value}</strong>.`;
          } else {
            icon.textContent = '😢';
            icon.className = 'lw-box__icon lw-box__icon--lose';
            title.textContent = 'Better Luck Next Time';
            title.className = 'lw-box__title lw-box__title--lose';
            msg.textContent = 'No luck this time. Try again!';
          }
          setTimeout(() => modal.classList.add('active'), 100);
        }
        if (info) info.textContent = 'Tap the button to spin the wheel again!';
        spinning = false;
        if (spinBtn) spinBtn.disabled = false;
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
        toggleText.textContent = expanded ? 'Hide Full Calendar' : 'View Full 30-Day Calendar';
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
        titleEl.textContent = 'Streak Complete!';
        subEl.textContent = 'You have unlocked 1 Free Game per day.';
        rewardEl.classList.remove('is-hidden');
      } else if (type === 'progress') {
        titleEl.textContent = 'Login Marked!';
        const remaining = UNLOCK_DAY - (today - 1);
        subEl.textContent = `Keep going! ${remaining} more ${remaining === 1 ? 'day' : 'days'} to unlock daily free games.`;
        rewardEl.classList.add('is-hidden');
      } else {
        titleEl.textContent = 'Free Game Claimed!';
        subEl.textContent = 'Enjoy your daily free game. Come back tomorrow!';
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

    /* claim — mark today's login */
    const claim = $('[data-dr-claim]');
    const claimText = $('[data-dr-claim-text]');
    on(claim, 'click', () => {
      if (marked) return;
      marked = true;
      if (claim) {
        claim.disabled = true;
        claim.classList.add('is-loading');
      }
      if (claimText) claimText.textContent = 'Marking...';

      setTimeout(() => {
        if (claim) {
          claim.classList.remove('is-loading');
          claim.classList.add('is-done');
        }
        if (claimText) claimText.textContent = 'Login Marked Today';

        const previousDay = today;
        today += 1;

        /* advance the calendar boxes */
        const done = grid.querySelector(`[data-dr-day="${previousDay}"]`);
        const next = grid.querySelector(`[data-dr-day="${today}"]`);
        if (done) {
          done.classList.remove('dr-day--today');
          done.classList.add('dr-day--completed');
        }
        if (next) next.classList.add('dr-day--today');

        /* status card */
        const statusIcon = $('[data-dr-status-icon]');
        const statusTitle = $('[data-dr-status-title]');
        const statusText = $('[data-dr-status-text]');
        if (statusIcon && today > UNLOCK_DAY) statusIcon.classList.remove('is-locked');
        if (statusTitle && today <= UNLOCK_DAY)
          statusTitle.textContent = `${today - 1} / ${UNLOCK_DAY} Days Completed`;
        else if (statusTitle) statusTitle.textContent = 'Unlocked!';
        if (statusText && today <= UNLOCK_DAY) {
          const remaining = UNLOCK_DAY - (today - 1);
          statusText.textContent = `Complete ${remaining} more ${remaining === 1 ? 'day' : 'days'} to unlock daily free games.`;
        } else if (statusText) {
          statusText.textContent = 'You get 1 Free Game every day — keep logging in!';
        }

        if (previousDay === UNLOCK_DAY) showModal('unlocked');
        else if (previousDay < UNLOCK_DAY) showModal('progress');
        else showModal('daily');
      }, 700);
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
  function initDeposit() {
    const amount = $('[data-dp-amount]');
    if (!amount) return;

    const step1 = $('[data-dp-step="1"]');
    const step2 = $('[data-dp-step="2"]');
    const title = $('[data-dp-title]');
    const payAmount = $('[data-dp-pay-amount]');
    const instrAmount = $('[data-dp-instr-amount]');
    const timerEl = $('[data-dp-timer]');
    let timerInterval = null;
    let timeLeft = 600;
    let verified = false;

    const fmt = (v) => v.toLocaleString('en-IN');

    const setVerify = (text, disabled) => {
      const verify = $('[data-dp-verify]');
      if (!verify) return;
      verify.disabled = disabled;
      verify.classList.toggle('is-loading', text === 'Verifying...');
      const label = verify.querySelector('span');
      if (label) label.textContent = text;
    };

    const goStep1 = () => {
      clearInterval(timerInterval);
      if (step2) step2.classList.remove('active');
      if (step1) step1.classList.add('active');
      if (title) title.textContent = 'Deposit';
      verified = false;
      setVerify('Verify Payment', false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const updateTimer = () => {
      if (!timerEl) return;
      const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const secs = String(timeLeft % 60).padStart(2, '0');
      timerEl.textContent = `${mins}:${secs}`;
    };

    /* quick amounts — fill + active state */
    $$('[data-dp-quick]').forEach((btn) =>
      on(btn, 'click', () => {
        if (!amount) return;
        amount.value = btn.dataset.dpQuick;
        $$('[data-dp-quick]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      })
    );

    /* header back + cancel link return to step 1 when on the payment step */
    on($('[data-dp-back]'), 'click', (e) => {
      if (step2 && step2.classList.contains('active')) {
        e.preventDefault();
        goStep1();
      }
    });
    on($('[data-dp-cancel]'), 'click', (e) => {
      e.preventDefault();
      goStep1();
    });

    /* proceed — validate then show the QR step with a 10-minute timer */
    on($('[data-dp-proceed]'), 'click', () => {
      const value = parseFloat(amount.value);
      if (!value || value <= 0) return toast('Please enter a valid amount');
      if (value < 100) return toast('Minimum deposit is ₹100');

      if (payAmount) payAmount.textContent = fmt(value);
      if (instrAmount) instrAmount.textContent = '₹' + fmt(value);

      if (step1) step1.classList.remove('active');
      if (step2) step2.classList.add('active');
      if (title) title.textContent = 'Complete Payment';

      timeLeft = 600;
      verified = false;
      updateTimer();
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          toast('Time expired. Please try again.');
          goStep1();
        }
      }, 1000);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* verify — fake 1.5s check then success modal */
    on($('[data-dp-verify]'), 'click', () => {
      if (verified) return;
      verified = true;
      setVerify('Verifying...', true);
      setTimeout(() => {
        clearInterval(timerInterval);
        const modal = $('[data-dp-modal]');
        if (modal) modal.classList.add('active');
      }, 1500);
    });

    on($('[data-dp-modal-close]'), 'click', () => {
      const modal = $('[data-dp-modal]');
      if (modal) modal.classList.remove('active');
      goStep1();
    });
  }

  /* ------------------------------------------------------------------ boot */
  function boot() {
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
