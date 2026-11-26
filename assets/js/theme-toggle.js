/*! Lynx | MIT License | https://github.com/ffflorian/lynx */

// Loaded as an external file (not inline) so it works with a strict
// Content-Security-Policy such as `script-src 'self'`.
(function () {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  // Apply the stored theme right away, before the page renders, to avoid a flash of the wrong theme
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light') {
      root.setAttribute('data-theme', theme);
    }
  } catch (e) {}

  function isDark() {
    const theme = root.getAttribute('data-theme');
    return theme ? theme === 'dark' : media.matches;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('theme-toggle');
    if (!button) {
      return;
    }

    function sync() {
      button.setAttribute('aria-pressed', String(isDark()));
    }

    button.addEventListener('click', function () {
      const theme = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
      sync();
    });

    media.addEventListener('change', sync);
    button.hidden = false;
    sync();
  });
})();
