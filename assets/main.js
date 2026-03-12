/* ================================================
   Letterbot – main.js
   ================================================ */
(function () {
  'use strict';
  var cfg = window.LB || {};

  function onReady(fn) {
    document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {

    /* ── wire dynamic links ── */
    function wire(sel, url, opts) {
      opts = opts || {};
      document.querySelectorAll(sel).forEach(function (el) {
        if (el.tagName === 'A') {
          el.href = url;
          if (!url.startsWith('mailto')) { el.target = '_blank'; el.rel = 'noopener'; }
        }
        if (opts.text) el.textContent = url.replace('mailto:', '');
      });
    }
    wire('[data-gh]',       cfg.github   || '#');
    wire('[data-releases]', cfg.releases  || '#');
    wire('[data-issues]',   cfg.issues    || '#');
    wire('[data-boosty]',   cfg.boosty   || '#');
    wire('[data-tips]',     cfg.cloudtips|| '#');
    wire('[data-tg]',       cfg.telegram || '#');
    wire('[data-email]',    'mailto:' + (cfg.email || 'master@letterbot.ru'));
    wire('[data-email-show]','mailto:' + (cfg.email || 'master@letterbot.ru'), {text: true});
    document.querySelectorAll('[data-ver]').forEach(function (el) { el.textContent = cfg.version || '28.0.0'; });
    document.querySelectorAll('[data-updated]').forEach(function (el) { el.textContent = cfg.updated || 'March 2026'; });

    /* ── mobile nav ── */
    var tog = document.getElementById('mob-toggle');
    var mob = document.getElementById('mob-nav');
    if (tog && mob) {
      tog.addEventListener('click', function () {
        var open = mob.classList.toggle('open');
        tog.setAttribute('aria-expanded', String(open));
        tog.textContent = open ? '✕' : '☰';
      });
    }

    /* ── active nav link ── */
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mob-nav a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('on');
    });

    /* ── FAQ search ── */
    var si = document.getElementById('faq-search');
    if (si) {
      si.addEventListener('input', function () {
        var q = this.value.trim().toLowerCase();
        document.querySelectorAll('[data-fq]').forEach(function (el) {
          el.style.display = (!q || el.textContent.toLowerCase().includes(q)) ? '' : 'none';
        });
        document.querySelectorAll('[data-fq-sec]').forEach(function (sec) {
          var vis = Array.from(sec.querySelectorAll('[data-fq]')).filter(function (i) {
            return i.style.display !== 'none';
          });
          sec.style.display = vis.length ? '' : 'none';
        });
      });
    }

    /* ── FAQ icon toggle ── */
    document.querySelectorAll('details.faq').forEach(function (d) {
      d.addEventListener('toggle', function () {
        var ic = this.querySelector('.faq-icon');
        if (ic) ic.textContent = this.open ? '−' : '+';
      });
    });

    /* ── scroll reveal ── */
    var rvs = document.querySelectorAll('.rv');
    if ('IntersectionObserver' in window && rvs.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
        });
      }, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });
      rvs.forEach(function (el) { io.observe(el); });
    } else {
      rvs.forEach(function (el) { el.classList.add('on'); });
    }

    /* ── copy email on click ── */
    document.querySelectorAll('[data-copy-email]').forEach(function (el) {
      el.style.cursor = 'pointer';
      el.title = 'Click to copy email';
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(cfg.email || 'master@letterbot.ru');
          var orig = el.textContent;
          el.textContent = 'Copied!';
          setTimeout(function () { el.textContent = orig; }, 1500);
        }
      });
    });
  });
})();
