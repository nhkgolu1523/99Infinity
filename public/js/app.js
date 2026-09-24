/* ==========================================================================
   app.js — client interactions for the Veer.Game H5 UI
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
     13. float stack drag     #floatStack
     14. entry points         [data-open-messages] [data-open-dialog] .tabbar__center
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
          document.dispatchEvent(new CustomEvent('tab:change', { detail: { key, value } }));
        });
      });
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
    $$('.faq-item__q').forEach((q) => {
      on(q, 'click', () => {
        const item = q.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('is-open');
        $$('.faq-item', item.parentElement).forEach((s) => s.classList.remove('is-open'));
        if (!isOpen) item.classList.add('is-open');
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
        const field = btn.closest('.field');
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

  /* ------------------------------------------------------------------ 13. float stack drag */
  function initFloatDrag() {
    const stack = $('#floatStack');
    if (!stack) return;

    let dragging = false;
    let startY = 0;
    let startBottom = 0;
    let moved = 0;

    const bottomPx = () => parseFloat(getComputedStyle(stack).bottom) || 0;

    on(stack, 'pointerdown', (e) => {
      if (e.target.closest('a') && moved < 5) {
        /* allow click-through but track for drag */
      }
      dragging = true;
      moved = 0;
      startY = e.clientY;
      startBottom = bottomPx();
      stack.setPointerCapture && stack.setPointerCapture(e.pointerId);
    });

    on(stack, 'pointermove', (e) => {
      if (!dragging) return;
      const dy = startY - e.clientY;
      moved = Math.abs(dy);
      if (moved < 6) return;
      const nextBottom = Math.max(rem(2.2), Math.min(window.innerHeight - rem(2), startBottom + dy));
      stack.style.bottom = `${nextBottom}px`;
    });

    on(stack, 'pointerup', () => {
      dragging = false;
    });
    on(stack, 'pointercancel', () => {
      dragging = false;
    });

    /* swallow the click that follows a real drag */
    on(
      stack,
      'click',
      (e) => {
        if (moved > 8) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );
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

    /* centre tabbar button → quick actions sheet */
    const center = $('.tabbar__center');
    on(center, 'click', (e) => {
      e.preventDefault();
      Dialog.open('quickActionsSheet');
    });

    /* guest-gated actions: everything that needs an account */
    $$('[data-requires-auth]').forEach((el) =>
      on(el, 'click', (e) => {
        e.preventDefault();
        Dialog.open('login-alert');
      })
    );

    /* language switcher */
    $$('[data-lang-toggle]').forEach((btn) =>
      on(btn, 'click', () => toast('Language: English'))
    );

    /* honour prefers-reduced-motion for the marquees */
    if (prefersReduced) {
      $$('.noticeBar__container-body-text, .winners__track').forEach((el) => {
        el.style.animation = 'none';
      });
    }
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
    initFloatDrag();
    initEntryPoints();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
