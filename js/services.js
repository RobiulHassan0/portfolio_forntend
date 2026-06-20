// Services grid
(function () {
  const services = [
    {
      icon: 'layers',
      title: 'Web App Development',
      desc: 'End-to-end Laravel applications — from spec and schema design to deployment and monitoring.',
      bullets: ['Laravel · Livewire · Inertia', 'Auth, billing, multi-tenancy', 'CI/CD ready'],
    },
    {
      icon: 'server',
      title: 'Backend & APIs',
      desc: 'REST and GraphQL APIs designed to scale, stay readable, and not wake you up at 3 AM.',
      bullets: ['REST · GraphQL · Webhooks', 'Queues, jobs & schedulers', 'Versioned & documented'],
    },
    {
      icon: 'layout',
      title: 'Admin Dashboards',
      desc: 'Internal tools that operations teams actually want to open — fast, focused, role-aware.',
      bullets: ['Filament · custom panels', 'Reports & exports', 'Role & permission systems'],
    },
    {
      icon: 'wrench',
      title: 'Optimization & Fixes',
      desc: 'Slow queries, leaky abstractions, gnarly legacy bugs — diagnosed and quietly fixed.',
      bullets: ['DB & query tuning', 'Refactors & code audits', 'Performance profiling'],
    },
  ];

  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (s, i) => `
      <div class="service-card">
        <div class="glow"></div>
        <div class="header">
          <div class="icon">${window.Icons[s.icon]}</div>
          <span class="num">0${i + 1}</span>
        </div>
        <h3>${s.title}</h3>
        <p class="desc">${s.desc}</p>
        <ul>
          ${s.bullets.map((b) => `<li>${window.Icons.check}${b}</li>`).join('')}
        </ul>
      </div>`
    )
    .join('');
})();
