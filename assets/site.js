/* Quantify — клієнтський скрипт. Сторінки повністю працюють і без нього
   (контент статичний); скрипт додає інтерактивність. */
(function () {
  "use strict";
  var doc = document, body = doc.body;
  var lang = body.getAttribute("data-lang") || "en";
  var kind = body.getAttribute("data-kind") || "";
  var data = {};
  try { data = JSON.parse(doc.getElementById("qdata").textContent); } catch (e) {}
  var ui = data.ui || {}, strs = data.strings || {};

  function $(sel, root) { return (root || doc).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function debounce(fn, ms) { var t; return function () { clearTimeout(t); var a = arguments, c = this; t = setTimeout(function () { fn.apply(c, a); }, ms); }; }

  /* ---------- рік у підвалі ---------- */
  var yr = $("#footerYear");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- меню тем (мобільне) ---------- */
  var sidebar = $("#sidebar"), overlay = $("#sidebarOverlay"), toggle = $("#sidebarToggle");
  function setSidebar(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("open", open);
    if (overlay) overlay.classList.toggle("active", open);
    body.classList.toggle("no-scroll", open);
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) { var a = $("a", sidebar); if (a) a.focus(); } else if (toggle && doc.activeElement && sidebar.contains(doc.activeElement)) toggle.focus();
  }
  if (toggle) toggle.addEventListener("click", function () { setSidebar(!sidebar.classList.contains("open")); });
  if (overlay) overlay.addEventListener("click", function () { setSidebar(false); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape" && sidebar && sidebar.classList.contains("open")) setSidebar(false); });

  /* ---------- «Діаграма, позначення та калькулятор» ---------- */
  function setOpen(card, open) {
    var btn = $(".more-toggle", card); if (!btn) return;
    var label = $(".more-label", btn);
    if (!btn._orig) btn._orig = label.textContent;
    card.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    label.textContent = open ? (ui.hide || btn._orig) : btn._orig;
  }
  $$(".more-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () { var card = btn.closest(".card"); setOpen(card, !card.classList.contains("open")); });
  });
  function openFromHash() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    if (!id) return;
    var el = doc.getElementById(id);
    if (el && el.classList.contains("card")) { setOpen(el, true); el.scrollIntoView({ block: "start" }); }
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);

  /* ---------- обране (той самий ключ, що й раніше: math_favs) ---------- */
  var favs = [];
  try { favs = JSON.parse(lsGet("math_favs") || "[]"); } catch (e) {}
  if (!Array.isArray(favs)) favs = [];
  function isFav(id) { return favs.indexOf(id) > -1; }
  function paintFav(btn) {
    var on = isFav(+btn.getAttribute("data-id"));
    btn.textContent = on ? "★" : "☆";
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.setAttribute("aria-label", on ? ui.favRemove : ui.favAdd);
  }
  var favBtns = $$(".fav-btn");
  favBtns.forEach(function (btn) {
    paintFav(btn);
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var id = +btn.getAttribute("data-id");
      favs = isFav(id) ? favs.filter(function (x) { return x !== id; }) : favs.concat(id);
      lsSet("math_favs", JSON.stringify(favs));
      favBtns.forEach(function (b) { if (+b.getAttribute("data-id") === id) paintFav(b); });
      if (kind === "sheet") applyFilters();
    });
  });

  /* ---------- калькулятори ---------- */
  function translateMsg(s) {
    if (lang === "ru") return s;
    var m = data.calcMsg && data.calcMsg[s];
    if (m) return m;
    var ps = data.calcPatterns || [];
    for (var i = 0; i < ps.length; i++) {
      var r = new RegExp(ps[i].re).exec(s);
      if (r) return ps[i].t.replace(/\$(\d)/g, function (_, n) { var g = r[+n]; return ps[i].w && ps[i].w[g] ? ps[i].w[g] : g; });
    }
    return s;
  }
  $$(".calc-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fn = window.QCALC && window.QCALC[form.getAttribute("data-id")];
      var box = $(".result-box", form.parentNode);
      var vals = {}, res = null, text;
      $$("input", form).forEach(function (i) { vals[i.getAttribute("data-key")] = parseFloat(i.value); });
      try { res = fn ? fn(vals) : null; } catch (err) { res = null; }
      if (typeof res === "number") text = isFinite(res) ? String(Number(res.toFixed(4))) : ui.calcError;
      else if (typeof res === "string") text = translateMsg(res);
      else text = ui.calcError;
      box.textContent = ui.result + ": " + text;
      box.hidden = false;
    });
  });

  /* ---------- фільтри (клас / предмет / обране) ---------- */
  var state = { grade: null, subject: "all", view: "all" };
  var empty = $("#emptyNote");
  function applyFilters() {
    var shown = 0;
    $$(".card[data-id]").forEach(function (c) {
      var ok = (!state.grade || c.getAttribute("data-grade") === String(state.grade)) &&
        (state.subject === "all" || c.getAttribute("data-subject") === state.subject) &&
        (state.view === "all" || isFav(+c.getAttribute("data-id")));
      c.hidden = !ok;
      if (ok) shown++;
    });
    $$("[data-section]").forEach(function (s) { s.hidden = !$(".card:not([hidden])", s); });
    if (empty) {
      empty.hidden = shown > 0;
      if (!shown && empty.hasAttribute("data-none")) empty.textContent = state.view === "fav" && !favs.length ? empty.getAttribute("data-fav") : empty.getAttribute("data-none");
    }
    fit();
  }
  function syncControls() {
    $$("button.class-chip[data-grade]").forEach(function (b) {
      var on = String(state.grade) === b.getAttribute("data-grade");
      b.classList.toggle("active", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    $$(".view-btn").forEach(function (b) {
      var on = b.getAttribute("data-view") === state.view;
      b.classList.toggle("active", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    $$(".subject-btn").forEach(function (b) {
      var v = b.getAttribute("data-subject"), on = v === state.subject;
      b.className = "subject-btn" + (on ? " active-" + v : ""); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  $$("button.class-chip[data-grade]").forEach(function (b) {
    b.addEventListener("click", function () {
      var g = +b.getAttribute("data-grade");
      state.grade = state.grade === g ? null : g;
      syncControls(); applyFilters();
    });
  });
  $$(".view-btn").forEach(function (b) { b.addEventListener("click", function () { state.view = b.getAttribute("data-view"); syncControls(); applyFilters(); }); });
  $$(".subject-btn").forEach(function (b) { b.addEventListener("click", function () { state.subject = b.getAttribute("data-subject"); syncControls(); applyFilters(); }); });
  if (kind === "sheet") {
    var p = new URLSearchParams(location.search);
    if (/^(5|6|7|8|9|10|11)$/.test(p.get("grade") || "")) state.grade = +p.get("grade");
    if (/^(algebra|geometry)$/.test(p.get("subject") || "")) state.subject = p.get("subject");
    if (p.get("view") === "fav") state.view = "fav";
    syncControls(); applyFilters();
  }

  /* ---------- друк ---------- */
  $$("[data-print]").forEach(function (b) {
    b.addEventListener("click", function () {
      var standalone = window.navigator.standalone === true ||
        (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
      if (standalone) { alert(strs.iosPrint); return; }
      if (typeof window.print !== "function") { alert(strs.noPrint); return; }
      try { window.print(); } catch (err) { alert(strs.printFail); }
    });
  });

  /* ---------- підгонка формул під ширину ---------- */
  // Довгі формули зменшуємо, щоб вони вміщувались у картку (на екрані й у друку).
  function natWidth(k) {
    var html = k.querySelector(".katex-html"), w = 0;
    if (html) $$(":scope > .base", html).forEach(function (b) { w += b.offsetWidth; });
    return w || k.scrollWidth;
  }
  function fit() {
    var cs = $$(".formula-math"), ks = [];
    cs.forEach(function (c) { var k = c.querySelector(".katex"); if (k) { k.style.fontSize = ""; ks.push([c, k]); } });
    var rows = ks.map(function (p) { return { k: p[1], avail: p[0].clientWidth, nat: natWidth(p[1]), px: parseFloat(getComputedStyle(p[1]).fontSize) }; });
    rows.forEach(function (r) {
      if (r.avail > 20 && r.nat > r.avail - 2) r.k.style.fontSize = (r.px * Math.max(0.45, (r.avail - 2) / r.nat)).toFixed(2) + "px";
    });
  }
  var PRINT_PX = 14, PRINT_AVAIL = 200; // ширина формули в колонці A4 (3 колонки)
  function fitForPrint() {
    var ks = $$(".formula-math .katex");
    ks.forEach(function (k) { k.style.fontSize = ""; });
    var rows = ks.map(function (k) { return { k: k, nat: natWidth(k), px: parseFloat(getComputedStyle(k).fontSize) }; });
    rows.forEach(function (r) {
      var pn = r.nat * (PRINT_PX / r.px);
      r.k.style.fontSize = (PRINT_PX * (pn > PRINT_AVAIL ? Math.max(0.4, PRINT_AVAIL / pn) : 1)).toFixed(2) + "px";
    });
  }
  window.addEventListener("beforeprint", fitForPrint);
  window.addEventListener("afterprint", fit);
  if (window.matchMedia) {
    var mq = window.matchMedia("print");
    var onMq = function (e) { if (e.matches) fitForPrint(); else fit(); };
    if (mq.addEventListener) mq.addEventListener("change", onMq); else if (mq.addListener) mq.addListener(onMq);
  }
  fit();
  window.addEventListener("load", fit);
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(fit);
  window.addEventListener("resize", debounce(fit, 150));

  /* ---------- пошук ---------- */
  var input = $("#searchInput"), list = $("#searchResults"), index = null, loading = false;
  function loadIndex(cb) {
    if (index) return cb();
    if (loading) return;
    loading = true;
    fetch(input.getAttribute("data-index")).then(function (r) { return r.json(); })
      .then(function (j) { index = j; loading = false; cb(); })
      .catch(function () { loading = false; });
  }
  function hideResults() { if (!list) return; list.hidden = true; input.setAttribute("aria-expanded", "false"); }
  function showResults(res) {
    list.textContent = "";
    if (!res.length) {
      var li0 = doc.createElement("li"); li0.className = "sr-empty"; li0.textContent = strs.noResults || ""; list.appendChild(li0);
    }
    res.forEach(function (r) {
      var li = doc.createElement("li"), a = doc.createElement("a");
      a.href = r.e.u;
      var t = doc.createElement("span"); t.className = "sr-title"; t.textContent = r.e.t;
      var m = doc.createElement("span"); m.className = "sr-meta"; m.textContent = r.e.n + " · " + r.e.l;
      a.appendChild(t); a.appendChild(m); li.appendChild(a); list.appendChild(li);
    });
    list.hidden = false; input.setAttribute("aria-expanded", "true");
  }
  function runSearch() {
    var q = input.value.trim().toLowerCase();
    if (!q) { hideResults(); return; }
    loadIndex(function () {
      var toks = q.split(/\s+/), res = [];
      index.forEach(function (e) {
        if (toks.every(function (t) { return e.k.indexOf(t) > -1; })) {
          var tl = e.t.toLowerCase(), s = 0;
          toks.forEach(function (t) { var p = tl.indexOf(t); if (p === 0) s += 3; else if (p > 0) s += 1; });
          res.push({ e: e, s: s });
        }
      });
      res.sort(function (a, b) { return b.s - a.s || a.e.g - b.e.g; });
      showResults(res.slice(0, 10));
    });
  }
  if (input && list) {
    input.addEventListener("input", debounce(runSearch, 120));
    input.addEventListener("focus", function () { loadIndex(function () {}); if (input.value.trim()) runSearch(); });
    input.addEventListener("keydown", function (e) {
      var links = $$("a", list);
      if (e.key === "ArrowDown" && links.length) { e.preventDefault(); links[0].focus(); }
      else if (e.key === "Enter" && links.length && !list.hidden) { e.preventDefault(); location.href = links[0].href; }
      else if (e.key === "Escape") hideResults();
    });
    list.addEventListener("keydown", function (e) {
      var links = $$("a", list), i = links.indexOf(doc.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); if (i < links.length - 1) links[i + 1].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (i > 0) links[i - 1].focus(); else input.focus(); }
      else if (e.key === "Escape") { hideResults(); input.focus(); }
    });
    doc.addEventListener("click", function (e) { if (!list.hidden && !list.contains(e.target) && e.target !== input) hideResults(); });
    var q0 = new URLSearchParams(location.search).get("q");
    if (q0) { input.value = q0; runSearch(); }
  }

  /* ---------- підказка про мову (без примусового перенаправлення) ---------- */
  $$(".lang-switch a").forEach(function (a) { a.addEventListener("click", function () { lsSet("math_lang", a.getAttribute("lang")); }); });
  (function () {
    var bar = $("#langSuggest");
    if (!bar || lang !== "en" || lsGet("q_lang_dismiss")) return;
    var pref = lsGet("math_lang");
    var nav = String((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase().slice(0, 2);
    var target = pref ? (pref === "ru" || pref === "uk" ? pref : null) : (nav === "ru" || nav === "uk" ? nav : null);
    var href = target && data.alt && data.alt[target];
    if (!href) return;
    var msg = { ru: ["Эта страница доступна на русском языке", "Открыть"], uk: ["Ця сторінка доступна українською мовою", "Відкрити"] }[target];
    var s = doc.createElement("span"); s.textContent = msg[0];
    var a = doc.createElement("a"); a.href = href; a.textContent = msg[1]; a.lang = target;
    var x = doc.createElement("button"); x.type = "button"; x.textContent = "×"; x.setAttribute("aria-label", "×");
    x.addEventListener("click", function () { bar.hidden = true; lsSet("q_lang_dismiss", "1"); });
    bar.appendChild(s); bar.appendChild(a); bar.appendChild(x); bar.hidden = false;
  })();
})();
