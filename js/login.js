// Login page — vanilla validation, no backend
(function () {
  // Inject icons
  const slots = document.querySelectorAll('[data-icon]');
  slots.forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (window.Icons[name]) el.insertAdjacentHTML('afterbegin', window.Icons[name]);
  });

  const submitBtn = document.getElementById('login-submit');
  if (submitBtn) submitBtn.insertAdjacentHTML('beforeend', window.Icons.arrowRight);

  const form = document.getElementById('login-form');
  const status = document.getElementById('login-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'login-status';

    const data = Object.fromEntries(new FormData(form).entries());
    const email = (data.email || '').trim();
    const password = (data.password || '').trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = '✗ Enter a valid email address.';
      status.className = 'login-status error';
      return;
    }
    if (password.length < 6) {
      status.textContent = '✗ Password must be at least 6 characters.';
      status.className = 'login-status error';
      return;
    }

    status.textContent = '✓ Signing in…';
    status.className = 'login-status success';
    // Static demo: redirect after short delay
    setTimeout(() => { window.location.href = 'index.html'; }, 900);
  });
})();
