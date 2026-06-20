// Mobile menu toggle + nav rendering
(function () {
  const links = [
    { num: '01.', label: 'Projects', href: '#projects' },
    { num: '02.', label: 'Skills', href: '#skills' },
    { num: '03.', label: 'About', href: '#about' },
    { num: '04.', label: 'Services', href: '#services' },
    { num: '05.', label: 'Contact', href: '#contact' },
  ];

  const navLinks = document.getElementById('nav-links');
  const mobileMenu = document.getElementById('mobile-menu-inner');
  if (navLinks) {
    navLinks.innerHTML = links
      .map((l) => `<a href="${l.href}"><span class="num">${l.num}</span>${l.label}</a>`)
      .join('');
  }
  if (mobileMenu) {
    mobileMenu.innerHTML = links
      .map((l) => `<a href="${l.href}"><span class="num">${l.num}</span>${l.label}</a>`)
      .join('');
  }

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.innerHTML = window.Icons.menu;
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.innerHTML = open ? window.Icons.close : window.Icons.menu;
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.innerHTML = window.Icons.menu;
      }
    });
  }
})();
