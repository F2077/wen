/* =====================================================================
   文 — GitHub Page 动效
   1. 标 .js（与 <noscript> 兜底相呼应，无 JS 时 .reveal 直接可见）
   2. 竖排题额逐字浮出（书写之象）
   3. 各卷入视揭示
   ===================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // ── 2. 竖排逐字 ────────────────────────────────────────────────────
  // 选首屏竖排标语与小注（大字「文」自有 glyph-drop，不拆）
  var lines = document.querySelectorAll(".frontispiece .vline-tagline, .frontispiece .vline-note");
  var baseDelay = 1.15;   // 待大字落定、版心绘毕
  var step = 0.11;
  var gi = 0;

  Array.prototype.forEach.call(lines, function (line) {
    var text = line.textContent;
    line.textContent = "";
    // vertical-rl：DOM 在先者居右，故从首字（最右、最靠版心）起笔，向左递延
    for (var i = 0; i < text.length; i++) {
      var ch = document.createElement("span");
      ch.className = "ch";
      ch.textContent = text[i];
      ch.style.animationDelay = (baseDelay + gi * step).toFixed(2) + "s";
      line.appendChild(ch);
      gi++;
    }
  });

  // ── 3. 入视揭示 ────────────────────────────────────────────────────
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // 老旧浏览器：直接显示
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
