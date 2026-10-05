// Loads the OpenStreetMap iframe only after the user asks for it.
// Kept in a separate file so the Content-Security-Policy can allow self scripts only.
(function () {
  document.querySelectorAll("[data-map-embed]").forEach(function (button) {
    button.addEventListener(
      "click",
      function () {
        var wrap = button.closest("[data-map-wrap]");
        if (!wrap) return;
        var url = button.getAttribute("data-map-embed");
        var iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer";
        iframe.title = button.getAttribute("data-map-title") || "Map";
        iframe.style.width = "100%";
        iframe.style.height = "360px";
        iframe.style.border = "0";
        wrap.textContent = "";
        wrap.appendChild(iframe);
      },
      { once: true },
    );
  });
})();
