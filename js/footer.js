// Footer rendering
(function () {
  const root = document.getElementById('site-footer');
  if (!root) return;

  const year = new Date().getFullYear();

  root.innerHTML = `
    <div class="inner">
      <div class="footer-brand">
        <div class="logo"><span class="accent">~/</span>dev</div>
        <p>Full Stack Laravel developer shipping practical web applications, APIs and internal tools — backend-first and detail-obsessed.</p>
        <div class="socials">
          <a href="#" aria-label="GitHub">${window.Icons.github}</a>
          <a href="#" aria-label="LinkedIn">${window.Icons.linkedin}</a>
          <a href="mailto:hello@alexcarter.dev" aria-label="Email">${window.Icons.mail}</a>
          <a href="#" aria-label="WhatsApp">${window.Icons.whatsapp}</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>// navigate</h4>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>// services</h4>
        <ul>
          <li><a href="#services">Web Apps</a></li>
          <li><a href="#services">Backend & APIs</a></li>
          <li><a href="#services">Admin Panels</a></li>
          <li><a href="#services">Optimization</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>// account</h4>
        <ul>
          <li><a href="login.html">Sign in</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#top">Back to top</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© ${year} Alex Carter. Built with care.</span>
      <span class="status"><span class="dot"></span>all systems operational</span>
    </div>
  `;
})();
