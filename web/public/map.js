/*
 * Dobrilo — Mapa Ostrova Socci (S01)
 * Pannable / zoomable island with parallax clouds and clickable places.
 * Follows DOBRILO_MASTER_UX_SPECIFICATION v1.1, ch. 3.2 and K11–K20:
 *  - one click on a place (pin or label = one target) opens its page, no "Vstoupit" step
 *  - mouse wheel scrolls the PAGE; zoom has its own buttons (trackpad pinch = ctrl+wheel also zooms)
 *  - touch: drag pans inside the map, two-finger pinch zooms; outside the map the page scrolls
 *  - every place's pin is always visible, even fully zoomed out; its text label only appears
 *    once the camera is zoomed in close enough to that place (data-min-zoom), so 13 labels never
 *    pile up on top of each other at the overview
 *  - labels that would still collide at that zoom are hidden (pin stays, label shows on hover/focus)
 *  - highlight(id) zooms to a place and marks it (shape + ring, not only colour)
 *
 * Places are read from the DOM list (the "Seznam míst" view), so map and list share one source:
 *   <li data-place="L03" data-x="1865" data-y="2090" [data-min-zoom="1.9"]><a href="/plavani">…</a></li>
 * x / y = pixels in the island painting (3481 × 3790). Open the page with ?edit to pick coordinates.
 */
(function () {
  'use strict';

  var IMG_W = 3481, IMG_H = 3790;
  // the cloud PNGs (2557×3843) were drawn centred over the island at equal height
  var CLOUD_W = (2557 / 3843) * IMG_H;
  var CLOUD_X = (IMG_W - CLOUD_W) / 2;
  // main island bounding box = the "Celý ostrov" view. Shifted down-left of the island's own
  // centre (2026-10-19, Jachym) so the default view shows more open sea on the left and below —
  // the mainland fragment (upper right) has no interactive content, so it should read as a
  // distant backdrop suggesting a larger world, not share the frame equally with Socci itself.
  var FOCUS = { x: 630, y: 1250, w: 1500, h: 1700 };
  // painted-content bounds (from `magick island.avif -format "%@" info:` => 2450x2881+1031+0).
  // The mainland fragment in the upper area is drawn with a deliberate straight "torn map" edge
  // on its north/west side (meant to read as "the edge of a bigger world"); panning past it would
  // instead reveal blank transparent canvas, which breaks that illusion. The south/east sides are
  // open sea and already fade into the page's sea-coloured background, so they're left generous.
  // x0/y1 loosened from the island's own coastline (2026-10-19) to let panning reach the extra
  // open sea the new default view shows — still well short of the fully-transparent canvas edges.
  var SAFE = { x0: 500, y0: 50, x1: IMG_W - 40, y1: 3300 };
  var CLOUD_DEPTHS = [1.18, 1.38, 1.62];   // >1 = closer to the viewer
  var MIN_ZOOM = 0.75, MAX_ZOOM = 5;        // relative to the "Celý ostrov" scale
  var STEP = 1.6;                           // one press of Přiblížit / Oddálit

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function el(tag, cls, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }

  function init(root, opts) {
    opts = opts || {};
    var assets = Object.assign({
      island: 'img/island.avif',
      clouds: ['img/clouds-1.webp', 'img/clouds-2.webp', 'img/clouds-3.webp']
    }, opts.assets || {});
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var editMode = /[?&]edit\b/.test(location.search);
    var listeners = [];

    var places = (opts.places || []).map(function (p) {
      return Object.assign({ minZoom: 0 }, p);
    });

    root.classList.add('dmap');
    root.tabIndex = 0;
    root.setAttribute('role', 'region');
    root.setAttribute('aria-roledescription', 'mapa');
    root.setAttribute('aria-label', opts.label || 'Mapa Ostrova Socci. Posun tažením nebo šipkami.');

    // ---------- DOM ----------
    var island = el('div', 'dmap__layer dmap__island', root);
    island.style.width = IMG_W + 'px';
    island.style.height = IMG_H + 'px';
    var islandImg = el('img', '', island);
    islandImg.alt = '';
    islandImg.decoding = 'async';
    islandImg.draggable = false;
    islandImg.addEventListener('error', function () { if (opts.onError) opts.onError(); });
    islandImg.src = assets.island;

    var clouds = assets.clouds.map(function (src, i) {
      var layer = el('div', 'dmap__layer dmap__clouds', root);
      layer.style.width = CLOUD_W + 'px';
      layer.style.height = IMG_H + 'px';
      var img = el('img', '', layer);
      img.src = src; img.alt = ''; img.draggable = false; img.decoding = 'async';
      return { el: layer, depth: CLOUD_DEPTHS[i] || 1.2 + i * 0.2, phase: i * 1.7 };
    });

    var placesLayer = el('div', 'dmap__places', root);   // above the clouds
    places.forEach(function (p) {
      var a = el('a', 'place', placesLayer);
      a.href = p.href || '#';
      a.dataset.id = p.id;
      if (p.type) a.dataset.type = p.type;                 // e.g. "character" (K13) — styled in CSS
      var pin = el('span', 'place__pin', a);
      if (p.image) pin.style.backgroundImage = 'url(' + p.image + ')';
      var lb = el('span', 'place__label', a);
      lb.textContent = p.name;
      a.addEventListener('click', function (e) {
        if (moved > 6) { e.preventDefault(); return; }        // it was a drag
        if (opts.onPlace) opts.onPlace(p, e);
      });
      p.el = a; p.label = lb;
    });

    var coordsBox = null;
    if (editMode) {
      coordsBox = el('div', 'dmap__coords', root);
      coordsBox.textContent = 'edit: klikni do mapy → souřadnice se zkopírují';
    }

    // ---------- camera ----------
    // cx, cy = painting pixel at the centre of the map box; s = screen px per painting px
    var vw = 0, vh = 0, fit = 1;
    var cam = { cx: FOCUS.x + FOCUS.w / 2, cy: FOCUS.y + FOCUS.h / 2, s: 1 };
    var anim = null, vel = { x: 0, y: 0 }, moved = 0, highlighted = null;

    function measure() {
      var zoom = cam.s / fit;
      vw = root.clientWidth; vh = root.clientHeight;
      fit = Math.min((vh * 0.92) / FOCUS.h, (vw * 0.92) / FOCUS.w);
      cam.s = fit * (isFinite(zoom) && zoom > 0 ? zoom : 1);
      measureLabels();
    }
    function measureLabels() {
      places.forEach(function (p) {
        p.lw = p.label.offsetWidth || p.name.length * 8 + 18;
        p.lh = p.label.offsetHeight || 24;
      });
    }

    function constrain() {
      cam.s = clamp(cam.s, fit * MIN_ZOOM, fit * MAX_ZOOM);
      // Keep the whole visible viewport (not just its centre) inside SAFE — a fixed centre clamp
      // would still show blank canvas past the edges once zoomed out, since the visible half-width
      // grows as zoom shrinks.
      var halfW = vw / 2 / cam.s, halfH = vh / 2 / cam.s;
      var minCx = SAFE.x0 + halfW, maxCx = SAFE.x1 - halfW;
      var minCy = SAFE.y0 + halfH, maxCy = SAFE.y1 - halfH;
      cam.cx = minCx <= maxCx ? clamp(cam.cx, minCx, maxCx) : (SAFE.x0 + SAFE.x1) / 2;
      cam.cy = minCy <= maxCy ? clamp(cam.cy, minCy, maxCy) : (SAFE.y0 + SAFE.y1) / 2;
    }
    function toScreen(x, y) { return { x: vw / 2 + (x - cam.cx) * cam.s, y: vh / 2 + (y - cam.cy) * cam.s }; }
    function toWorld(sx, sy) { return { x: cam.cx + (sx - vw / 2) / cam.s, y: cam.cy + (sy - vh / 2) / cam.s }; }
    function zoomLevel() { return cam.s / fit; }

    // ---------- render ----------
    var t0 = performance.now(), lastSig = '';
    function render(now) {
      var s = cam.s, zoom = zoomLevel();
      island.style.transform =
        'translate3d(' + (vw / 2 - cam.cx * s) + 'px,' + (vh / 2 - cam.cy * s) + 'px,0) scale(' + s + ')';

      var t = reduceMotion ? 0 : (now - t0) / 1000;
      clouds.forEach(function (c) {
        var d = c.depth, sd = s * d;
        var drift = Math.sin(t * 0.05 + c.phase) * 60 * d;
        var x = vw / 2 + (CLOUD_X + drift - cam.cx) * sd;
        var y = vh / 2 + (0 - cam.cy) * sd;
        c.el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) scale(' + sd + ')';
        c.el.style.opacity = clamp(1 - (zoom - 1) * (0.55 + d * 0.25), 0, 1).toFixed(3);
      });

      // every pin is always visible; its label only reveals once zoomed into that place's area
      // (data-min-zoom), then greedy label collision on top of that (list order = priority)
      var taken = [];
      var order = highlighted
        ? places.filter(function (p) { return p.id === highlighted; })
            .concat(places.filter(function (p) { return p.id !== highlighted; }))
        : places;
      order.forEach(function (p) {
        var pt = toScreen(p.x, p.y);
        p.el.style.transform = 'translate3d(' + pt.x + 'px,' + pt.y + 'px,0) translate(-50%,-10px)';
        var labelReady = zoom >= p.minZoom || p.id === highlighted;
        p.el.classList.toggle('is-far', !labelReady);
        if (!labelReady) return;
        var r = { x0: pt.x - p.lw / 2, x1: pt.x + p.lw / 2, y0: pt.y + 14, y1: pt.y + 14 + p.lh };
        var hit = taken.some(function (q) {
          return r.x0 < q.x1 + 4 && r.x1 > q.x0 - 4 && r.y0 < q.y1 + 2 && r.y1 > q.y0 - 2;
        });
        p.el.classList.toggle('is-crowded', hit);
        if (!hit) taken.push(r);
      });

      var sig = cam.cx.toFixed(1) + ',' + cam.cy.toFixed(1) + ',' + zoom.toFixed(4);
      if (sig !== lastSig) {
        lastSig = sig;
        listeners.forEach(function (fn) { fn(api.state()); });
      }
    }

    // ---------- loop ----------
    var dirty = true;
    function frame(now) {
      if (anim) {
        var k = clamp((now - anim.start) / anim.dur, 0, 1);
        var e = 1 - Math.pow(1 - k, 3);
        cam.cx = anim.from.cx + (anim.to.cx - anim.from.cx) * e;
        cam.cy = anim.from.cy + (anim.to.cy - anim.from.cy) * e;
        cam.s = Math.exp(Math.log(anim.from.s) + (Math.log(anim.to.s) - Math.log(anim.from.s)) * e);
        if (k >= 1) anim = null;
        dirty = true;
      } else if (!dragging && (Math.abs(vel.x) > 0.02 || Math.abs(vel.y) > 0.02)) {
        cam.cx -= vel.x * 16 / cam.s;
        cam.cy -= vel.y * 16 / cam.s;
        vel.x *= 0.92; vel.y *= 0.92;
        constrain();
        dirty = true;
      }
      if (dirty || !reduceMotion) { render(now); dirty = false; }
      requestAnimationFrame(frame);
    }

    function flyTo(x, y, zoom, dur) {
      vel.x = vel.y = 0;
      var from = { cx: cam.cx, cy: cam.cy, s: cam.s };
      cam.cx = x; cam.cy = y; cam.s = fit * (zoom == null ? zoomLevel() : zoom);
      constrain();
      var to = { cx: cam.cx, cy: cam.cy, s: cam.s };
      cam.cx = from.cx; cam.cy = from.cy; cam.s = from.s;
      anim = { from: from, to: to, start: performance.now(), dur: reduceMotion ? 1 : (dur || 800) };
    }
    function jumpTo(x, y, zoom) {
      anim = null; vel.x = vel.y = 0;
      cam.cx = x; cam.cy = y; cam.s = fit * zoom;
      constrain(); dirty = true;
    }
    function zoomAt(sx, sy, factor) {
      anim = null;
      var before = toWorld(sx, sy);
      cam.s = clamp(cam.s * factor, fit * MIN_ZOOM, fit * MAX_ZOOM);
      var after = toWorld(sx, sy);
      cam.cx += before.x - after.x;
      cam.cy += before.y - after.y;
      constrain(); dirty = true;
    }
    function targetZoom() { return anim ? anim.to.s / fit : zoomLevel(); }

    // ---------- pointer input (mouse, pen, touch) ----------
    var pointers = new Map(), dragging = false, last = null, pinch = null, lastMoveT = 0;
    function localXY(e) {
      var r = root.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    root.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      var onPlace = e.target.closest('.place');
      pointers.set(e.pointerId, localXY(e));
      if (!onPlace) root.setPointerCapture(e.pointerId);
      anim = null; vel.x = vel.y = 0; moved = 0;
      dragging = true;
      root.classList.add('is-dragging');
      last = localXY(e); lastMoveT = performance.now();
      if (pointers.size === 2) {
        var p = Array.from(pointers.values());
        pinch = { dist: Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y),
                  mid: { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 } };
      }
    });

    root.addEventListener('pointermove', function (e) {
      if (coordsBox) {
        var w = toWorld(localXY(e).x, localXY(e).y);
        coordsBox.textContent = 'x: ' + Math.round(w.x) + '  y: ' + Math.round(w.y);
      }
      if (!pointers.has(e.pointerId)) return;
      var pt = localXY(e);
      pointers.set(e.pointerId, pt);

      if (pointers.size >= 2 && pinch) {
        var p = Array.from(pointers.values());
        var dist = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
        var mid = { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 };
        cam.cx -= (mid.x - pinch.mid.x) / cam.s;
        cam.cy -= (mid.y - pinch.mid.y) / cam.s;
        if (pinch.dist > 0) zoomAt(mid.x, mid.y, dist / pinch.dist);
        pinch.dist = dist; pinch.mid = mid;
        moved += 10;
        return;
      }
      var dx = pt.x - last.x, dy = pt.y - last.y;
      moved += Math.abs(dx) + Math.abs(dy);
      var now = performance.now(), dt = Math.max(1, now - lastMoveT);
      vel.x = 0.8 * (dx / dt) + 0.2 * vel.x;
      vel.y = 0.8 * (dy / dt) + 0.2 * vel.y;
      lastMoveT = now;
      cam.cx -= dx / cam.s;
      cam.cy -= dy / cam.s;
      constrain();
      last = pt;
      dirty = true;
    });

    function endPointer(e) {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinch = null;
      if (pointers.size === 1) { last = Array.from(pointers.values())[0]; return; }
      if (pointers.size === 0) {
        dragging = false;
        root.classList.remove('is-dragging');
        if (performance.now() - lastMoveT > 80) vel.x = vel.y = 0;
      }
    }
    root.addEventListener('pointerup', endPointer);
    root.addEventListener('pointercancel', endPointer);

    root.addEventListener('click', function (e) {
      if (!editMode || moved > 6 || e.target.closest('.place')) return;
      var p = localXY(e), w = toWorld(p.x, p.y);
      var snippet = 'data-x="' + Math.round(w.x) + '" data-y="' + Math.round(w.y) + '"';
      console.log(snippet);
      if (navigator.clipboard) navigator.clipboard.writeText(snippet).catch(function () {});
      coordsBox.textContent = 'zkopírováno: ' + snippet;
    });

    root.addEventListener('dblclick', function (e) {
      if (e.target.closest('.place')) return;
      var p = localXY(e), w = toWorld(p.x, p.y);
      flyTo(w.x, w.y, Math.min(MAX_ZOOM, targetZoom() * STEP), 450);
    });

    // Wheel scrolls the page (spec 3.2). Only trackpad pinch / ctrl+wheel zooms the map.
    root.addEventListener('wheel', function (e) {
      if (!e.ctrlKey) return;
      e.preventDefault();
      var p = localXY(e);
      zoomAt(p.x, p.y, Math.exp(-e.deltaY * 0.01));
    }, { passive: false });

    // K16: arrows pan while the map has focus; + / − zoom
    root.addEventListener('keydown', function (e) {
      if (e.target !== root) return;
      var step = 90 / cam.s;
      switch (e.key) {
        case 'ArrowLeft': flyTo(cam.cx - step, cam.cy, null, 180); break;
        case 'ArrowRight': flyTo(cam.cx + step, cam.cy, null, 180); break;
        case 'ArrowUp': flyTo(cam.cx, cam.cy - step, null, 180); break;
        case 'ArrowDown': flyTo(cam.cx, cam.cy + step, null, 180); break;
        case '+': case '=': api.zoomIn(); break;
        case '-': case '_': api.zoomOut(); break;
        default: return;
      }
      e.preventDefault();
    });

    if ('ResizeObserver' in window) new ResizeObserver(function () { measure(); constrain(); dirty = true; }).observe(root);
    else window.addEventListener('resize', function () { measure(); constrain(); dirty = true; });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measureLabels(); dirty = true; });

    function setHighlight(id) {
      highlighted = id;
      places.forEach(function (p) {
        p.el.classList.toggle('is-active', p.id === id);
        if (p.id === id) p.el.setAttribute('aria-current', 'location'); else p.el.removeAttribute('aria-current');
      });
      dirty = true;
    }

    // ---------- public API ----------
    var api = {
      zoomIn: function () { flyTo(cam.cx, cam.cy, Math.min(MAX_ZOOM, targetZoom() * STEP), 350); },
      zoomOut: function () { flyTo(cam.cx, cam.cy, Math.max(MIN_ZOOM, targetZoom() / STEP), 350); },
      /** K17 Celý ostrov: default view, clears the highlight */
      reset: function (instant) {
        setHighlight(null);
        var c = [FOCUS.x + FOCUS.w / 2, FOCUS.y + FOCUS.h / 2, 1];
        if (instant) jumpTo(c[0], c[1], c[2]); else flyTo(c[0], c[1], c[2], 700);
      },
      /** K20 Ukázat na mapě: zoom to the place and mark it */
      highlight: function (id, instant) {
        var p = places.find(function (q) { return q.id === id; });
        if (!p) return false;
        setHighlight(id);
        var z = Math.max(2.2, p.minZoom + 0.6);
        if (instant) jumpTo(p.x, p.y, z); else flyTo(p.x, p.y, z, 1000);
        return true;
      },
      /** camera as { x, y, z } (z relative to Celý ostrov) — for restoring on Back */
      state: function () {
        var z = zoomLevel();
        return { x: Math.round(cam.cx), y: Math.round(cam.cy), z: +z.toFixed(3),
                 atMin: z <= MIN_ZOOM + 1e-3, atMax: z >= MAX_ZOOM - 1e-3, active: highlighted };
      },
      restore: function (st) { if (st) jumpTo(st.x, st.y, st.z); if (st && st.active) setHighlight(st.active); },
      onChange: function (fn) { listeners.push(fn); },
      places: places
    };

    // ---------- start ----------
    measure();
    if (opts.start === 'restore' && opts.camera) {
      api.restore(opts.camera);
    } else if (opts.start === 'highlight' && opts.highlight) {
      api.reset(true);
      api.highlight(opts.highlight, false);
    } else {
      // gentle descent through the clouds on first visit
      cam.s = fit * 0.8; constrain();
      var go = function () { setTimeout(function () { if (!anim && moved === 0) api.reset(); }, 150); };
      if (islandImg.complete) go(); else islandImg.addEventListener('load', go);
    }
    render(performance.now());
    requestAnimationFrame(frame);
    return api;
  }

  window.DobriloMap = { init: init, IMG_W: IMG_W, IMG_H: IMG_H };
})();
