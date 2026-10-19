/*
 * Dobrilo — OS-style windows (point 5 of the map-UX redesign).
 * Loaded only on S01 (the map "desktop"). Clicking an internal content link — a map pin, a nav
 * link, a card inside an already-open window — opens that URL's content in a floating, draggable,
 * closable window instead of navigating away. The URL itself still renders as a complete normal
 * page on direct load/refresh (spec §2.5): this is a fetch-and-inject enhancement on top of real
 * pages, not a replacement for them. Links to "/" (the map itself) do a real navigation, since
 * that's "going home", not opening a content window.
 */
(function () {
  'use strict';

  var layer = document.getElementById('window-layer');
  if (!layer) return;

  var topZ = 100;
  var cascade = 0;
  var openWindows = {}; // href -> window element, so re-clicking the same place refocuses it

  function bringToFront(win) {
    topZ += 1;
    win.style.zIndex = String(topZ);
  }

  function closeWindow(win, href) {
    win.remove();
    if (href) delete openWindows[href];
  }

  function makeDraggable(win, handle) {
    var startX, startY, originX, originY, dragging = false;
    handle.addEventListener('pointerdown', function (e) {
      if (e.target.closest('.os-window__close')) return;
      dragging = true;
      handle.setPointerCapture(e.pointerId);
      startX = e.clientX; startY = e.clientY;
      var rect = win.getBoundingClientRect();
      originX = rect.left; originY = rect.top;
      bringToFront(win);
    });
    handle.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var x = Math.max(4, Math.min(window.innerWidth - 60, originX + (e.clientX - startX)));
      var y = Math.max(4, Math.min(window.innerHeight - 60, originY + (e.clientY - startY)));
      win.style.left = x + 'px';
      win.style.top = y + 'px';
    });
    function end() { dragging = false; }
    handle.addEventListener('pointerup', end);
    handle.addEventListener('pointercancel', end);
  }

  function openWindow(href, fallbackTitle) {
    if (openWindows[href]) { bringToFront(openWindows[href]); return; }

    var win = document.createElement('div');
    win.className = 'os-window glass is-loading';
    cascade = (cascade + 1) % 6;
    win.style.left = (60 + cascade * 28) + 'px';
    win.style.top = (90 + cascade * 24) + 'px';

    var titlebar = document.createElement('div');
    titlebar.className = 'os-window__titlebar';
    var titleEl = document.createElement('span');
    titleEl.className = 'os-window__title';
    titleEl.textContent = fallbackTitle || 'Načítání…';
    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'os-window__close';
    closeBtn.setAttribute('aria-label', 'Zavřít okno');
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', function () { closeWindow(win, href); });
    titlebar.appendChild(titleEl);
    titlebar.appendChild(closeBtn);

    var body = document.createElement('div');
    body.className = 'os-window__body';

    win.appendChild(titlebar);
    win.appendChild(body);
    win.addEventListener('pointerdown', function () { bringToFront(win); });
    layer.appendChild(win);

    // clamp into the viewport now that the window has a real rendered size — the cascade offset
    // alone can push a window (esp. a later one in the cascade) partly off-screen on narrower
    // viewports, taking its close button with it
    var rect = win.getBoundingClientRect();
    var left = Math.min(parseFloat(win.style.left), Math.max(4, window.innerWidth - rect.width - 4));
    var top = Math.min(parseFloat(win.style.top), Math.max(4, window.innerHeight - rect.height - 4));
    win.style.left = Math.max(4, left) + 'px';
    win.style.top = Math.max(4, top) + 'px';

    openWindows[href] = win;
    bringToFront(win);
    makeDraggable(win, titlebar);

    fetch(href)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var main = doc.querySelector('main');
        var h1 = doc.querySelector('h1');
        titleEl.textContent = (h1 && h1.textContent.trim()) || doc.title.split(' — ')[0] || fallbackTitle || '';
        win.classList.remove('is-loading');
        body.innerHTML = main ? main.innerHTML : '<p style="padding:20px">Obsah se nepodařilo načíst.</p>';
      })
      .catch(function () {
        win.classList.remove('is-loading');
        titleEl.textContent = 'Chyba';
        body.innerHTML = '<p style="padding:20px">Tuhle stránku se nepodařilo načíst. <a href="' + href + '" data-no-window>Otevřít přímo</a>.</p>';
      });
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    if (a.dataset.noWindow != null) return;
    if (a.target && a.target !== '_self') return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let modified clicks behave normally

    var url;
    try { url = new URL(a.getAttribute('href'), location.href); } catch (err) { return; }
    if (url.origin !== location.origin) return;               // external links behave normally
    if (url.pathname === '/' || url.pathname === '') return;  // "home"/map links really navigate

    e.preventDefault();
    openWindow(url.pathname + url.search, a.textContent.trim());
  });
})();
