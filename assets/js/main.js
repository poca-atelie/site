/* ============================================================
   POCA — site behaviour
   ============================================================ */

/* ------------------------------------------------------------------
   CONTACT — troque estes dois valores pelos canais reais do ateliê.
   Todas as compras e reservas do site apontam para cá.
------------------------------------------------------------------- */
window.POCA = {
  whatsapp: "5511999999999", // número no formato 55 + DDD + número, só dígitos
  instagram: "poca.ceramica", // @ do ateliê, sem o @
};

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var wa = "https://wa.me/" + window.POCA.whatsapp;
  var ig = "https://instagram.com/" + window.POCA.instagram;

  /* ---- WhatsApp links: preenche a mensagem a partir do data-wa ---- */
  function fillContactLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var msg = el.getAttribute("data-wa") || "";
      el.setAttribute("href", wa + "?text=" + encodeURIComponent(msg));
    });
    document.querySelectorAll("[data-ig]").forEach(function (el) {
      el.setAttribute("href", ig);
    });
  }

  /* ---- menu mobile ---- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- galeria: filtro por categoria ---- */
  function initFilter() {
    var bar = document.querySelector(".filterbar");
    if (!bar) return;
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
    var buttons = bar.querySelectorAll("button");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        items.forEach(function (item) {
          var show = cat === "all" || item.getAttribute("data-category") === cat;
          item.hidden = !show;
        });
      });
    });
  }

  /* ---- lightbox ---- */
  function initLightbox() {
    var box = document.querySelector(".lightbox");
    if (!box) return;
    var img = box.querySelector(".lightbox__img");
    var name = box.querySelector(".lightbox__name");
    var kind = box.querySelector(".lightbox__kind");
    var close = box.querySelector(".lightbox__close");

    function open(item) {
      img.src = item.getAttribute("data-full") || item.querySelector("img").src;
      img.alt = item.getAttribute("data-alt") || "";
      name.textContent = item.getAttribute("data-name") || "";
      kind.textContent = item.getAttribute("data-kind") || "";
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      close.focus();
    }
    function shut() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-lightbox]").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        open(item);
      });
    });
    close.addEventListener("click", shut);
    box.addEventListener("click", function (e) { if (e.target === box) shut(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) shut();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fillContactLinks();
    initNav();
    initReveal();
    initFilter();
    initLightbox();
  });
})();
