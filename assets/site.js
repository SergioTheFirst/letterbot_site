/* ============================================================
   Letterbot — site.js
   Wires all links from LB config, animations, FAQ, mobile nav
   ============================================================ */
(function() {
  'use strict';

  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function() {
    var cfg = window.LB || {};

    /* ── wire all links ── */
    var linkMap = {
      '[id*="github-link"]':    cfg.githubUrl,
      '[id*="release-link"]':   cfg.releaseUrl,
      '[id*="download"]':       cfg.downloadUrl,
      '[id*="boosty-link"]':    cfg.boostyUrl,
      '[id*="cloudtips"]':      cfg.cloudtipsUrl,
      '[id*="telegram-link"]':  cfg.telegramUrl,
      '[data-email]':           'mailto:' + cfg.email,
      '[id*="boosty-qr"]':      null,
    };
    Object.keys(linkMap).forEach(function(sel) {
      var url = linkMap[sel];
      if (!url) return;
      document.querySelectorAll(sel).forEach(function(el) {
        if (el.tagName === 'A') {
          el.href = url;
          if (!url.startsWith('mailto')) el.target = '_blank';
          el.rel = 'noopener';
        }
      });
    });

    /* email links */
    document.querySelectorAll('[data-email]').forEach(function(el) {
      if (el.tagName === 'A') el.href = 'mailto:' + cfg.email;
      if (el.getAttribute('data-show') !== null) el.textContent = cfg.email;
    });

    /* version */
    document.querySelectorAll('[data-version]').forEach(function(el) {
      el.textContent = cfg.version || '28.0.0';
    });
    document.querySelectorAll('[data-updated]').forEach(function(el) {
      el.textContent = cfg.updated || '';
    });

    /* ── mobile nav ── */
    var toggle = document.getElementById('mobile-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
      toggle.addEventListener('click', function() {
        var open = mobileNav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? '✕' : '☰';
      });
    }

    /* ── FAQ search ── */
    var searchInput = document.getElementById('faq-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        var q = this.value.trim().toLowerCase();
        document.querySelectorAll('[data-faq-item]').forEach(function(item) {
          var text = item.textContent.toLowerCase();
          var match = !q || text.includes(q);
          item.style.display = match ? '' : 'none';
        });
        /* show/hide section headers */
        document.querySelectorAll('[data-faq-section]').forEach(function(sec) {
          var visItems = Array.from(sec.querySelectorAll('[data-faq-item]'))
            .filter(function(i) { return i.style.display !== 'none'; });
          sec.style.display = visItems.length ? '' : 'none';
        });
      });
    }

    /* ── scroll reveal ── */
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function(el) { obs.observe(el); });
    } else {
      reveals.forEach(function(el) { el.classList.add('visible'); });
    }

    /* ── active nav ── */
    var path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    document.querySelectorAll('.nav a, .mobile-nav a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (href === path || href === path + '.html') a.classList.add('active');
      if (path === '/' && (href === '/' || href === '/index.html')) a.classList.add('active');
    });

    /* ── FAQ details toggle icon ── */
    document.querySelectorAll('.faq-item').forEach(function(details) {
      details.addEventListener('toggle', function() {
        var icon = this.querySelector('.faq-icon');
        if (icon) icon.textContent = this.open ? '−' : '+';
      });
    });
  });
})();
