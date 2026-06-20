// Projects grid
(function () {
  const projects = [
    {
      title: 'LedgerOps',
      desc: 'Multi-tenant accounting platform for SMBs with audit trails, role-based permissions and real-time reporting.',
      stack: ['Laravel', 'Vue', 'MySQL', 'Redis'],
      icon: 'database',
      grad: 'linear-gradient(135deg, rgba(59,130,246,.3), rgba(16,185,129,.2))',
    },
    {
      title: 'API Gateway Kit',
      desc: 'Open-source rate-limited API gateway with token introspection, caching layer and webhook fan-out.',
      stack: ['PHP', 'Laravel', 'Docker', 'Redis'],
      icon: 'code',
      grad: 'linear-gradient(135deg, rgba(16,185,129,.3), rgba(59,130,246,.2))',
    },
    {
      title: 'ShelfSync',
      desc: 'Inventory & POS dashboard for boutique retailers — offline-first, barcode scanner ready.',
      stack: ['Laravel', 'Livewire', 'Tailwind'],
      icon: 'box',
      grad: 'linear-gradient(135deg, rgba(251,191,36,.2), rgba(59,130,246,.2))',
    },
    {
      title: 'DevPulse',
      desc: 'Self-hosted observability dashboard surfacing app errors, slow queries, and queue health at a glance.',
      stack: ['Laravel', 'TypeScript', 'PostgreSQL'],
      icon: 'activity',
      grad: 'linear-gradient(135deg, rgba(59,130,246,.3), rgba(168,85,247,.2))',
    },
  ];

  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
      <article class="project-card">
        <div class="cover" style="background:${p.grad}">
          <div class="icon-wrap">${window.Icons[p.icon] || window.Icons.code}</div>
        </div>
        <div class="body">
          <div class="row">
            <h3>${p.title}</h3>
            <div class="links">
              <a href="#" aria-label="GitHub">${window.Icons.github}</a>
              <a href="#" aria-label="Live demo">${window.Icons.external}</a>
            </div>
          </div>
          <p class="desc">${p.desc}</p>
          <div class="stack">
            ${p.stack.map((s) => `<span>${s}</span>`).join('')}
          </div>
        </div>
      </article>`
    )
    .join('');
})();
