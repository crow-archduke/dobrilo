/*
 * Dobrilo — global single-media-at-a-time rule (spec §6.3, C05–C07):
 * starting any <video>/<audio> pauses every other one already playing on the page.
 * 'play' doesn't bubble, so this listens on the capture phase instead.
 */
(function () {
  'use strict';
  document.addEventListener('play', function (e) {
    document.querySelectorAll('video, audio').forEach(function (m) {
      if (m !== e.target && !m.paused) m.pause();
    });
  }, true);
})();
