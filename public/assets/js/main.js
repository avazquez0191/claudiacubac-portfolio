/* ==========================================================================
   Claudia Cuba — Portfolio scripts
   No build step, no dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var SITE = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var ARROW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function projectUrl(p) {
    return "project.html?p=" + encodeURIComponent(p.slug);
  }

  /* ------------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------------ */

  var revealObserver =
    !reduceMotion && "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries, obs) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        )
      : null;

  function reveal(root) {
    $$("[data-reveal]:not(.is-visible)", root).forEach(function (el) {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("is-visible");
    });
  }

  /* ------------------------------------------------------------------------
     Header: border on scroll + mobile menu
     ------------------------------------------------------------------------ */

  function initHeader() {
    var header = $(".site-header");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    var toggle = $(".nav-toggle");
    var nav = $("#site-nav");
    if (!toggle || !nav) return;

    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------------
     Highlight the current section in the nav (home page)
     ------------------------------------------------------------------------ */

  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = $$('.site-nav a[href^="#"]');
    var map = new Map();
    links.forEach(function (a) {
      var section = document.getElementById(a.getAttribute("href").slice(1));
      if (section) map.set(section, a);
    });
    if (!map.size) return;

    var hero = document.getElementById("top");
    if (hero) map.set(hero, null);

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (l) { l.removeAttribute("aria-current"); });
          var link = map.get(entry.target);
          if (link) link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach(function (_, section) { spy.observe(section); });
  }

  /* ------------------------------------------------------------------------
     Work grid + filters (home page)
     ------------------------------------------------------------------------ */

  function workCard(p, i) {
    return (
      '<article class="work-card" data-reveal style="--delay:' + (i % 2) * 0.08 + 's">' +
        '<a class="work-card__link" href="' + projectUrl(p) + '">' +
          '<div class="work-card__media">' +
            '<img src="' + esc(p.cover) + '" alt="' + esc(p.coverAlt || p.title) + '" width="1200" height="900" loading="lazy" decoding="async">' +
            '<span class="work-card__cta">View project ' + ARROW + "</span>" +
          "</div>" +
          '<div class="work-card__meta">' +
            '<h3 class="work-card__title">' + esc(p.title) + "</h3>" +
            '<span class="work-card__year">' + esc(p.year) + "</span>" +
            '<p class="work-card__cat">' + esc(p.discipline || p.category) + "</p>" +
          "</div>" +
        "</a>" +
      "</article>"
    );
  }

  function initWork() {
    var grid = $("#work-grid");
    if (!grid) return;

    var filtersEl = $("#work-filters");
    var countEl = $("#work-count");
    var active = "All";

    var render = function (list) {
      grid.innerHTML = list.map(workCard).join("");
      reveal(grid);
    };

    if (countEl) countEl.textContent = "(" + String(PROJECTS.length).padStart(2, "0") + ")";

    if (filtersEl) {
      // Use the preferred order from data.js, then any extra categories, skipping empty ones
      var used = PROJECTS.map(function (p) { return p.category; });
      var categories = ["All"];
      (SITE.categories || []).concat(used).forEach(function (c) {
        if (categories.indexOf(c) === -1 && used.indexOf(c) !== -1) categories.push(c);
      });

      filtersEl.innerHTML = categories
        .map(function (c) {
          var n = c === "All" ? PROJECTS.length : PROJECTS.filter(function (p) { return p.category === c; }).length;
          return (
            '<button type="button" class="chip" data-filter="' + esc(c) + '" aria-pressed="' + (c === active) + '">' +
              esc(c) + ' <span class="chip__count">' + n + "</span>" +
            "</button>"
          );
        })
        .join("");

      filtersEl.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-filter]");
        if (!btn || btn.getAttribute("data-filter") === active) return;
        active = btn.getAttribute("data-filter");

        $$("[data-filter]", filtersEl).forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });

        var list = active === "All" ? PROJECTS : PROJECTS.filter(function (p) { return p.category === active; });

        if (reduceMotion) return render(list);
        grid.classList.add("is-fading");
        setTimeout(function () {
          render(list);
          grid.classList.remove("is-fading");
        }, 250);
      });
    }

    render(PROJECTS);
  }

  /* ------------------------------------------------------------------------
     Testimonials
     ------------------------------------------------------------------------ */

  function initQuotes() {
    var root = $("[data-quotes]");
    if (!root) return;
    var items = $$(".quote-item", root);
    var counter = $("[data-quotes-count]", root);
    var index = 0;
    var pad = function (n) { return String(n).padStart(2, "0"); };

    var show = function (i) {
      index = (i + items.length) % items.length;
      items.forEach(function (el, n) {
        el.classList.toggle("is-active", n === index);
        el.setAttribute("aria-hidden", String(n !== index));
      });
      if (counter) counter.textContent = pad(index + 1) + " / " + pad(items.length);
    };

    var prev = $("[data-quotes-prev]", root);
    var next = $("[data-quotes-next]", root);
    if (prev) prev.addEventListener("click", function () { show(index - 1); });
    if (next) next.addEventListener("click", function () { show(index + 1); });
    show(0);
  }

  /* ------------------------------------------------------------------------
     Copy email button
     ------------------------------------------------------------------------ */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (err) { /* ignore */ }
      ta.remove();
      resolve();
    });
  }

  function initCopy() {
    $$("[data-copy]").forEach(function (btn) {
      var label = $("[data-copy-label]", btn);
      var original = label ? label.textContent : "";
      var timer;
      btn.addEventListener("click", function () {
        copyText(btn.getAttribute("data-copy")).then(function () {
          btn.classList.add("is-copied");
          if (label) label.textContent = "Copied!";
          clearTimeout(timer);
          timer = setTimeout(function () {
            btn.classList.remove("is-copied");
            if (label) label.textContent = original;
          }, 2000);
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     Local time + current year
     ------------------------------------------------------------------------ */

  function initClock() {
    var els = $$("[data-local-time]");
    if (!els.length) return;
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: SITE.timezone,
        timeZoneName: "short",
      });
    } catch (err) {
      fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" });
    }
    var tick = function () {
      var t = fmt.format(new Date());
      els.forEach(function (el) { el.textContent = t; });
    };
    tick();
    setInterval(tick, 30000);
  }

  function initYear() {
    var y = String(new Date().getFullYear());
    $$("[data-year]").forEach(function (el) { el.textContent = y; });
  }

  /* ------------------------------------------------------------------------
     Case-study page (project.html?p=slug)
     ------------------------------------------------------------------------ */

  function initProject() {
    var root = $("#project");
    if (!root) return;

    var slug = new URLSearchParams(window.location.search).get("p");
    var i = -1;
    PROJECTS.forEach(function (p, n) { if (p.slug === slug) i = n; });

    if (i === -1) {
      document.title = "Project not found — " + (SITE.name || "");
      root.innerHTML =
        '<section class="container page-message">' +
          '<p class="eyebrow">404</p>' +
          '<h1 class="project-title">Project <em>not found</em></h1>' +
          '<p class="project-summary">The project you\'re looking for doesn\'t exist or has moved.</p>' +
          '<a class="btn btn--primary" href="index.html#work">Back to all work ' + ARROW + "</a>" +
        "</section>";
      return;
    }

    var p = PROJECTS[i];
    var next = PROJECTS.length > 1 ? PROJECTS[(i + 1) % PROJECTS.length] : null;

    document.title = p.title + " — " + (SITE.name || "");
    var metaDesc = $('meta[name="description"]');
    if (metaDesc && p.summary) metaDesc.setAttribute("content", p.summary);

    var blocks = (p.description || [])
      .map(function (b) {
        return '<div class="project-block" data-reveal><h2>' + esc(b.heading) + "</h2><p>" + esc(b.text) + "</p></div>";
      })
      .join("");

    var gallery = (p.gallery || [])
      .map(function (g) {
        return (
          '<figure class="' + (g.wide ? "is-wide" : "") + '" data-reveal>' +
            '<img src="' + esc(g.src) + '" alt="' + esc(g.alt || "") + '" loading="lazy" decoding="async">' +
            (g.caption ? "<figcaption>" + esc(g.caption) + "</figcaption>" : "") +
          "</figure>"
        );
      })
      .join("");

    root.innerHTML =
      '<header class="project-hero container">' +
        '<a class="back-link" href="index.html#work">' + ARROW + " All work</a>" +
        '<p class="eyebrow" data-reveal>' + esc(p.discipline || p.category) + " · " + esc(p.year) + "</p>" +
        '<h1 class="project-title" data-reveal style="--delay:.06s">' + esc(p.title) + "</h1>" +
        '<p class="project-summary" data-reveal style="--delay:.12s">' + esc(p.summary) + "</p>" +
        '<dl class="project-meta" data-reveal style="--delay:.18s">' +
          "<div><dt>Client</dt><dd>" + esc(p.client) + "</dd></div>" +
          "<div><dt>Year</dt><dd>" + esc(p.year) + "</dd></div>" +
          "<div><dt>Role</dt><dd>" + esc(p.role) + "</dd></div>" +
          "<div><dt>Services</dt><dd>" + (p.services || []).map(esc).join("<br>") + "</dd></div>" +
        "</dl>" +
      "</header>" +
      '<figure class="project-cover container" data-reveal>' +
        '<img src="' + esc(p.hero || p.cover) + '" alt="' + esc(p.coverAlt || p.title) + '" fetchpriority="high">' +
      "</figure>" +
      (blocks ? '<section class="project-body container" aria-label="Case study">' + blocks + "</section>" : "") +
      (gallery ? '<section class="project-gallery container" aria-label="Project images">' + gallery + "</section>" : "") +
      (next
        ? '<nav class="project-next container" aria-label="Next project">' +
            '<a class="next-link" href="' + projectUrl(next) + '">' +
              '<span><span class="eyebrow">Next project</span><span class="next-link__title">' + esc(next.title) + "</span></span>" +
              '<span class="next-link__thumb"><img src="' + esc(next.cover) + '" alt="" loading="lazy" decoding="async"></span>' +
            "</a>" +
          "</nav>"
        : "");
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */

  initHeader();
  initProject();
  initWork();
  initScrollSpy();
  initQuotes();
  initCopy();
  initClock();
  initYear();
  reveal(document);
})();
