(function () {
  var SIDEBAR_WIDTH = 260;
  var TOC_WIDTH = 200;

  var PAGES = [
    { id: "diretrizes", label: "Diretrizes de Marca", href: "diretrizes.html" },
    { id: "conformidade", label: "Conformidade", href: "conformidade.html" },
    { id: "projetos", label: "Projetos", href: "projetos.html" },
    { id: "calendario", label: "Calendário", href: "calendario.html" },
    { id: "qualidade", label: "Qualidade (ISO 9001)", href: "qualidade.html" },
  ];

  var currentPageId = document.documentElement.getAttribute("data-page") || "";

  function buildSidebar() {
    var sidebar = document.createElement("aside");
    sidebar.className = "wiki-sidebar";
    sidebar.id = "wiki-sidebar";

    var logo = document.createElement("a");
    logo.className = "wiki-sidebar-logo";
    logo.href = "diretrizes.html";
    logo.innerHTML =
      '<svg viewBox="0 0 300 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.8,4.6C32.8,4.6,32.8,4.6,32.8,4.6c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0,0-0.1,0 c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0 c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0l-25.9,15c-0.5,0.3-0.9,0.9-0.9,1.5V51c0,0,0,0,0,0 c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.2 c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0.1,0c0,0,0.1,0.1,0.1,0.1 c0,0,0,0,0,0l0,0c0,0,0,0,0,0l25.9,15c0.3,0.2,0.6,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2l25.9-15c0,0,0,0,0,0l0,0c0,0,0,0,0,0 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0 c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0 V21.1c0-0.6-0.3-1.2-0.9-1.5L32.8,4.6z M33.7,25.5l10.7,18.6l-10.7,6.2V25.5z M7.7,22.1L30.1,9.2v9.2l-14.4,25L7.7,48V22.1z M30.1,25.5v24.8l-10.7-6.2L30.1,25.5z M31.9,64L9.5,51l7.5-4.3l14,8.1c0,0,0,0,0,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0 c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0 c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0,0,0,0,0,0l14-8.1l7.5,4.3L31.9,64z M56,48l-7.9-4.6l-14.4-25V9.2L56,22.1V48z" fill="#E74F3D"/><path d="M190.5,23.4h13.6v4h-13.6v13.3c0,0.2,0.2,0.6,0.4,0.7l5,3.1c0.4,0.3,1.3,0.5,1.8,0.5h6.4v4h-6.4 c-1.2,0-2.9-0.5-3.9-1.1l-5-3.1c-1.3-0.8-2.3-2.5-2.3-4.1V19.4l4-1.2V23.4z" fill="#E74F3D"/></svg>' +
      '<span>EDMTECH Wiki</span>';
    sidebar.appendChild(logo);

    var nav = document.createElement("nav");
    nav.className = "wiki-sidebar-nav";

    PAGES.forEach(function (p) {
      var a = document.createElement("a");
      a.href = p.href;
      a.textContent = p.label;
      if (p.id === currentPageId) a.classList.add("active");
      nav.appendChild(a);
    });

    sidebar.appendChild(nav);

    var mobileBtn = document.createElement("button");
    mobileBtn.className = "wiki-sidebar-close";
    mobileBtn.id = "wiki-sidebar-close";
    mobileBtn.setAttribute("aria-label", "Fechar menu");
    mobileBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    sidebar.appendChild(mobileBtn);

    document.body.prepend(sidebar);
  }

  function buildTOC() {
    var main = document.querySelector(".wiki-main");
    if (!main) return;

    var headings = [];
    main.querySelectorAll("section[id]").forEach(function (sec) {
      var h2 = sec.querySelector(".section-header h2");
      if (h2) headings.push(h2);
    });
    if (!headings.length) return;

    var toc = document.createElement("aside");
    toc.className = "wiki-toc";
    toc.id = "wiki-toc";

    var tocTitle = document.createElement("div");
    tocTitle.className = "wiki-toc-title";
    tocTitle.textContent = "Nesta Página";
    toc.appendChild(tocTitle);

    var tocList = document.createElement("ul");
    tocList.className = "wiki-toc-list";

    headings.forEach(function (h2) {
      var section = h2.closest("section[id]");
      if (!section) return;
      var id = section.getAttribute("id");
      var label = h2.textContent.trim();
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + id;
      a.textContent = label;
      a.setAttribute("data-toc-id", id);
      li.appendChild(a);
      tocList.appendChild(li);
    });

    toc.appendChild(tocList);
    var wrap = document.querySelector(".wiki-content-wrap") || main;
    wrap.parentNode.insertBefore(toc, wrap.nextSibling);
  }

  function buildMobileToggle() {
    var btn = document.createElement("button");
    btn.className = "wiki-mobile-toggle";
    btn.id = "wiki-mobile-toggle";
    btn.setAttribute("aria-label", "Abrir menu");
    btn.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    document.body.appendChild(btn);
  }

  function setupScrollSpy() {
    var tocLinks = document.querySelectorAll(".wiki-toc-list a[data-toc-id]");
    var sections = document.querySelectorAll("section[id]");
    if (!tocLinks.length || !sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tocLinks.forEach(function (l) {
              l.classList.remove("active");
            });
            var match = document.querySelector(
              '.wiki-toc-list a[data-toc-id="' +
                entry.target.getAttribute("id") +
                '"]'
            );
            if (match) match.classList.add("active");
          }
        });
      },
      { root: null, rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  function setupMobileMenu() {
    var toggle = document.getElementById("wiki-mobile-toggle");
    var sidebar = document.getElementById("wiki-sidebar");
    var close = document.getElementById("wiki-sidebar-close");
    var overlay = document.createElement("div");
    overlay.className = "wiki-overlay";
    overlay.id = "wiki-overlay";
    document.body.appendChild(overlay);

    function open() {
      sidebar.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (toggle) toggle.addEventListener("click", open);
    if (close) close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }

  function injectStyles() {
    var style = document.createElement("style");
    style.textContent =
      ".wiki-sidebar{" +
      "position:fixed;top:0;left:0;bottom:0;width:" + SIDEBAR_WIDTH + "px;" +
      "background:#fff;border-right:1px solid var(--border,#e5e7eb);" +
      "display:flex;flex-direction:column;z-index:1100;overflow-y:auto;" +
      "padding:24px 0;transition:transform .25s ease;" +
      "}" +
      ".wiki-sidebar-logo{" +
      "display:flex;align-items:center;gap:10px;padding:0 20px 20px;" +
      "text-decoration:none;color:var(--text-main,#1a1d23);font-weight:600;font-size:14px;" +
      "border-bottom:1px solid var(--border,#e5e7eb);margin-bottom:12px;" +
      "}" +
      ".wiki-sidebar-logo svg{height:22px;width:auto;flex-shrink:0}" +
      ".wiki-sidebar-nav{" +
      "display:flex;flex-direction:column;gap:2px;padding:0 12px;" +
      "}" +
      ".wiki-sidebar-nav a{" +
      "display:block;padding:8px 12px;border-radius:6px;font-size:13px;font-weight:500;" +
      "color:var(--text-muted,#5f6977);text-decoration:none;transition:all .15s;" +
      "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" +
      "}" +
      ".wiki-sidebar-nav a:hover{background:var(--gray-100,#f8f9fa);color:var(--text-main,#1a1d23)}" +
      ".wiki-sidebar-nav a.active{background:rgba(231,79,61,.08);color:var(--red,#e74f3d);font-weight:600}" +
      ".wiki-sidebar-close{" +
      "display:none;position:absolute;top:16px;right:16px;background:none;border:none;" +
      "color:var(--text-muted,#5f6977);cursor:pointer;padding:4px;" +
      "}" +
      ".wiki-toc{" +
      "position:sticky;top:24px;width:" + TOC_WIDTH + "px;flex-shrink:0;" +
      "max-height:calc(100vh - 48px);overflow-y:auto;" +
      "padding:8px 0;" +
      "}" +
      ".wiki-toc-title{" +
      "font-size:11px;font-weight:600;color:var(--text-muted,#5f6977);" +
      "text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;padding:0 12px;" +
      "}" +
      ".wiki-toc-list{list-style:none;margin:0;padding:0}" +
      ".wiki-toc-list li{margin-bottom:2px}" +
      ".wiki-toc-list a{" +
      "display:block;padding:4px 12px;font-size:12px;color:var(--text-muted,#5f6977);" +
      "text-decoration:none;border-left:2px solid transparent;transition:all .15s;" +
      "line-height:1.4;" +
      "}" +
      ".wiki-toc-list a:hover{color:var(--text-main,#1a1d23)}" +
      ".wiki-toc-list a.active{color:var(--red,#e74f3d);border-left-color:var(--red,#e74f3d);font-weight:600}" +
      ".wiki-content-wrap{" +
      "flex:1;min-width:0;max-width:860px;" +
      "}" +
      ".wiki-main{" +
      "margin-left:" + SIDEBAR_WIDTH + "px;display:flex;justify-content:center;" +
      "min-height:100vh;padding:32px 24px 80px;" +
      "gap:32px;" +
      "}" +
      ".wiki-mobile-toggle{" +
      "display:none;position:fixed;top:12px;left:12px;z-index:1200;" +
      "background:rgba(255,255,255,.92);backdrop-filter:blur(8px);" +
      "border:1px solid var(--border,#e5e7eb);border-radius:8px;" +
      "padding:8px;cursor:pointer;color:var(--text-main,#1a1d23);" +
      "box-shadow:0 2px 8px rgba(0,0,0,.08);" +
      "}" +
      ".wiki-overlay{" +
      "display:none;position:fixed;inset:0;background:rgba(0,0,0,.3);z-index:1050;" +
      "}" +
      "@media(max-width:1100px){" +
      ".wiki-toc{display:none}" +
      "}" +
      "@media(max-width:768px){" +
      ".wiki-sidebar{transform:translateX(-100%)}" +
      ".wiki-sidebar.open{transform:translateX(0)}" +
      ".wiki-sidebar-close{display:block}" +
      ".wiki-mobile-toggle{display:block}" +
      ".wiki-overlay.open{display:block}" +
      ".wiki-main{margin-left:0;padding:56px 16px 60px}" +
      "}" +
      "";
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    buildSidebar();
    buildMobileToggle();
    buildTOC();
    setupScrollSpy();
    setupMobileMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
