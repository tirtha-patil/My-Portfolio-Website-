/**
 * ====================================================================
 * TIRTHA PATIL — RESEARCH PORTFOLIO MAIN CONTROLLER
 * ====================================================================
 * Renders data dynamically from portfolio-data.js, manages UI states,
 * modals, sound events, contact form, and navigation.
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Ambient Canvas Background
  if (typeof AmbientCanvas === 'function') {
    new AmbientCanvas('ambient-canvas');
  }

  // 2. Initialize Sound Toggle & Global Click Feedback
  initAudioControls();

  // 3. Render Dynamic Portfolio Sections
  renderResearchInterests();
  renderProjects();
  renderCertifications();
  renderExperience();
  renderEducation();
  renderLeadership();
  renderContactInfo();

  // 4. Initialize Navigation & Active Scroll Spy
  initNavigation();

  // 5. Initialize Modals (Resume & Certificate Viewers)
  initModals();

  // 6. Initialize Contact Form Submission & Validation
  initContactForm();

  // 7. Initialize Robot Companion Character
  initRobotCompanion();

  // 8. Typewriter effect on hero heading
  initHeroTypewriter();
});

/* ==========================================================================
   Hero Heading Typewriter Effect
   ========================================================================== */
function initHeroTypewriter() {
  const headline = document.getElementById('hero-headline');
  if (!headline) return;

  // Respect reduced-motion — show full text immediately, skip animation
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const plainText = "Hi, I'm ";
  const accentText = "Tirtha.";
  const fullText = plainText + accentText;

  // Replace heading content with typing targets + blinking cursor
  headline.innerHTML =
    '<span id="tw-plain"></span>' +
    '<span class="gradient-text" id="tw-accent"></span>' +
    '<span class="typewriter-cursor" id="tw-cursor" aria-hidden="true"></span>';

  const plainEl = document.getElementById('tw-plain');
  const accentEl = document.getElementById('tw-accent');
  const cursor = document.getElementById('tw-cursor');

  let index = 0;
  const SPEED_MS = 82; // ~82 ms per character — natural typing pace

  function typeNextChar() {
    if (index >= fullText.length) {
      // Typing done — fade out cursor after short pause
      setTimeout(() => { if (cursor) cursor.remove(); }, 900);
      return;
    }
    const ch = fullText[index];
    if (index < plainText.length) {
      plainEl.textContent += ch;
    } else {
      accentEl.textContent += ch;
    }
    index++;
    setTimeout(typeNextChar, SPEED_MS);
  }

  // Small initial delay so the page feels settled before typing starts
  setTimeout(typeNextChar, 300);
}

/* ==========================================================================
   Sound Controls & Tactile Audio Feedback
   ========================================================================== */
function initAudioControls() {
  const soundToggleBtn = document.getElementById('sound-toggle');
  if (!soundToggleBtn) return;

  function updateButtonState(enabled) {
    if (enabled) {
      soundToggleBtn.classList.add('active');
      soundToggleBtn.setAttribute('aria-label', 'Sound effects enabled. Click to mute.');
      soundToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    } else {
      soundToggleBtn.classList.remove('active');
      soundToggleBtn.setAttribute('aria-label', 'Sound effects muted. Click to enable.');
      soundToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
    }
  }

  // Pre-unlock AudioContext on first user interaction for zero latency
  const unlockAudio = () => {
    if (typeof audioManager !== 'undefined') {
      const ctx = audioManager.getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => { });
      }
    }
    document.removeEventListener('pointerdown', unlockAudio, true);
    document.removeEventListener('keydown', unlockAudio, true);
  };
  document.addEventListener('pointerdown', unlockAudio, { passive: true, capture: true });
  document.addEventListener('keydown', unlockAudio, { passive: true, capture: true });

  // Initial state check
  if (typeof audioManager !== 'undefined') {
    updateButtonState(audioManager.enabled);

    soundToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isEnabled = audioManager.toggle();
      updateButtonState(isEnabled);
    });

    // Attach soft click sound to all interactive elements across the website using capture phase
    document.addEventListener('click', (e) => {
      if (!audioManager.enabled) return;
      const target = e.target.closest('button, a, input[type="submit"], input[type="button"], [role="button"], .btn, .nav-link, .sound-toggle-btn, .robot-avatar, .channel-action-btn, .social-btn, .view-cert-btn, .tab-btn, .clickable');
      if (target) {
        // Sound toggle manages its own audio feedback in toggle()
        if (target.closest('#sound-toggle')) return;
        audioManager.playClick();
      }
    }, true);
  }
}

/* ==========================================================================
   Render Research Interests
   ========================================================================== */
function renderResearchInterests() {
  const container = document.getElementById('research-grid');
  if (!container || !PORTFOLIO_DATA.researchInterests) return;

  const icons = {
    cpu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    database: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    network: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`,
    eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    "message-square": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    activity: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.researchInterests.map(item => `
    <div class="research-card">
      <div class="research-icon-wrapper">
        ${icons[item.icon] || icons.cpu}
      </div>
      <h3 class="research-card-title">${item.title}</h3>
      <p class="research-card-desc">${item.shortDescription}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   Render Selected Projects
   ========================================================================== */
function renderProjects() {
  const gridContainer = document.getElementById('projects-grid');

  if (!PORTFOLIO_DATA.projects || !gridContainer) return;

  gridContainer.innerHTML = PORTFOLIO_DATA.projects.map(proj => {
    const buttons = [];

    if (proj.githubUrl) {
      buttons.push(`
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </a>
      `);
    }

    if (proj.liveDemoUrl) {
      buttons.push(`
        <a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
          Live Demo
        </a>
      `);
    }

    return `
      <article class="project-card">
        <h3 class="project-card-title">${proj.title}</h3>
        <p class="project-card-desc">${proj.description || proj.shortDescription}</p>
        <div class="project-card-actions">
          ${buttons.join('')}
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   Render Certifications
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <article class="cert-card">
      <div class="cert-card-body">
        <h3 class="cert-title">${cert.title}</h3>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
      <div class="cert-card-action">
        <a href="${encodeURI(cert.file)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm cert-view-btn">View</a>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   Render Experience Section
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-container') || document.getElementById('experience-timeline');
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(item => `
    <article class="experience-card">
      <div class="exp-card-header">
        <div class="exp-meta">
          <h3 class="exp-role">${item.role}</h3>
          <div class="exp-org">${item.organization}</div>
        </div>
        ${item.certificateUrl ? `
          <a href="${encodeURI(item.certificateUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm exp-btn exp-cert-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            View Certificate
          </a>
        ` : ''}
      </div>

      <ul class="exp-bullets">
        ${item.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div class="exp-actions">
        ${item.githubUrl ? `
          <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm exp-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        ` : ''}
        ${item.liveDemoUrl ? `
          <a href="${item.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm exp-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            Live Demo
          </a>
        ` : ''}
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   Render Education Section
   ========================================================================== */
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container || !PORTFOLIO_DATA.education) return;

  const edu = PORTFOLIO_DATA.education;
  container.innerHTML = `
    <div class="education-card">
      <div>
        <span class="section-tag">Academic Background</span>
        <h3 class="edu-degree" style="margin-top: 6px;">${edu.degree}</h3>
        <div class="edu-spec">${edu.specialization}</div>
        <div class="edu-inst" style="margin-top: 4px;">${edu.institution}</div>
      </div>

      <div class="edu-stats-row">
        <div class="edu-stat-box">
          <div class="lbl">Cumulative GPA</div>
          <div class="val">${edu.cgpa}</div>
        </div>
        <div class="edu-stat-box">
          <div class="lbl">Expected Graduation</div>
          <div class="val">${edu.expectedGraduation}</div>
        </div>
      </div>

      <div class="coursework-box">
        <div class="coursework-label">Core Technical Coursework</div>
        <div class="coursework-chips">
          ${edu.coursework.map(c => `<span class="course-chip">${c}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   Render Beyond Academics Section
   ========================================================================== */
function renderLeadership() {
  renderBeyondAcademics();
}

function renderBeyondAcademics() {
  const container = document.getElementById('beyond-academics-grid') || document.getElementById('leadership-grid');
  const items = PORTFOLIO_DATA.beyondAcademics || PORTFOLIO_DATA.leadership;
  if (!container || !items) return;

  container.innerHTML = items.map(item => `
    <article class="activity-card">
      <div class="activity-card-body">
        <div class="activity-card-top">
          <h3 class="activity-title">${item.title}</h3>
          ${item.status ? `
            <span class="activity-status status-${item.status.toLowerCase()}">${item.status}</span>
          ` : ''}
        </div>
        ${item.subtitle ? `<div class="activity-subtitle">${item.subtitle}</div>` : ''}
        ${item.role ? `<div class="activity-role">${item.role}</div>` : ''}
      </div>

      ${item.certificateUrl ? `
        <div class="activity-card-action">
          <a href="${encodeURI(item.certificateUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm cert-view-btn">
            View
          </a>
        </div>
      ` : ''}
    </article>
  `).join('');
}

/* ==========================================================================
   Render Contact Info & Channels
   ========================================================================== */
function renderContactInfo() {
  const container = document.getElementById('contact-channels');
  if (!container || !PORTFOLIO_DATA.personal) return;

  const p = PORTFOLIO_DATA.personal;

  container.innerHTML = `
    <!-- Email Channel -->
    <div class="contact-channel-item">
      <div class="channel-meta">
        <div class="channel-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div>
          <div class="channel-label">Email (Preferred)</div>
          <a href="mailto:${p.email}" class="channel-val">${p.email}</a>
        </div>
      </div>
      <a href="mailto:${p.email}" class="channel-action-btn" title="Compose email in your email app">
        Compose ↗
      </a>
    </div>

    <!-- GitHub Channel -->
    <div class="contact-channel-item">
      <div class="channel-meta">
        <div class="channel-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </div>
        <div>
          <div class="channel-label">GitHub</div>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="channel-val">github.com/tirtha-patil</a>
        </div>
      </div>
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="channel-action-btn">
        Visit ↗
      </a>
    </div>

    <!-- LinkedIn Channel -->
    <div class="contact-channel-item">
      <div class="channel-meta">
        <div class="channel-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </div>
        <div>
          <div class="channel-label">LinkedIn</div>
          <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="channel-val">linkedin.com/in/tirtha-patil</a>
        </div>
      </div>
      <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="channel-action-btn">
        Connect ↗
      </a>
    </div>

    <!-- Instagram Channel -->
    <div class="contact-channel-item">
      <div class="channel-meta">
        <div class="channel-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
        <div>
          <div class="channel-label">Instagram</div>
          <a href="${p.instagram}" target="_blank" rel="noopener noreferrer" class="channel-val">@ft._.tirthaaaa</a>
        </div>
      </div>
      <a href="${p.instagram}" target="_blank" rel="noopener noreferrer" class="channel-action-btn">
        Visit ↗
      </a>
    </div>
  `;

}

/* ==========================================================================
   Navigation, Active Scroll Spy & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Mobile drawer toggle
  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      mobileToggleBtn.classList.toggle('open', isOpen);
      mobileToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when link is clicked
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggleBtn.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll spy with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   Modals (Resume & Certificate Viewers)
   ========================================================================== */
function initModals() {
  const resumeModal = document.getElementById('resume-modal');
  const certModal = document.getElementById('cert-modal');
  const viewResumeBtns = document.querySelectorAll('.view-resume-trigger');
  const resumeFrame = document.getElementById('resume-iframe');

  // Resume modal triggers
  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resumeModal && resumeFrame) {
        const pdfSrc = PORTFOLIO_DATA.personal.resumePdfPath || 'assets/resume.pdf';
        resumeFrame.src = pdfSrc;
        openModal(resumeModal);
      }
    });
  });

  // Modal close handlers (backdrop click or close button)
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        closeModal(modal);
      }
    });
  });

  // Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
        closeModal(modal);
      });
    }
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  // Clear iframes so audio or processing stops
  const iframe = modal.querySelector('iframe');
  if (iframe && modal.id === 'cert-modal') {
    iframe.src = 'about:blank';
  }
}

function openCertModal(cert) {
  const certModal = document.getElementById('cert-modal');
  const titleElem = document.getElementById('cert-modal-title');
  const iframe = document.getElementById('cert-iframe');
  const downloadBtn = document.getElementById('cert-download-btn');
  const newTabBtn = document.getElementById('cert-newtab-btn');

  if (certModal && iframe) {
    if (titleElem) titleElem.textContent = cert.title;
    iframe.src = cert.file;
    if (downloadBtn) downloadBtn.href = cert.file;
    if (newTabBtn) newTabBtn.href = cert.file;
    openModal(certModal);
  }
}

/* ==========================================================================
   Real Functional Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot spam protection
    const honeypot = form.querySelector('input[name="_honey"]');
    if (honeypot && honeypot.value) return;

    const name = (form.querySelector('#sender-name')?.value || '').trim();
    const email = (form.querySelector('#sender-email')?.value || '').trim();
    const subject = (form.querySelector('#sender-subject')?.value || '').trim();
    const message = (form.querySelector('#sender-message')?.value || '').trim();

    // Validate all four fields
    if (!name || !email || !subject || !message) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please provide a valid email address.', 'error');
      return;
    }

    // Loading state
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      Sending Message...
    `;

    const endpoint = PORTFOLIO_DATA.config?.contactFormEndpoint;
    const ejsCfg = PORTFOLIO_DATA.config?.emailjs;
    const ejsReady = ejsCfg && ejsCfg.serviceId && ejsCfg.templateId && ejsCfg.publicKey
      && ejsCfg.serviceId.trim() && ejsCfg.templateId.trim() && ejsCfg.publicKey.trim();

    try {
      if (ejsReady) {
        // ── EmailJS direct-send path ──────────────────────────────────────
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS SDK not loaded. Check your internet connection and refresh.');
        }
        await emailjs.send(
          ejsCfg.serviceId,
          ejsCfg.templateId,
          {
            name: name,
            email: email,
            subject: subject,
            message: message,
            to_email: 'patiltirtha8811@gmail.com'
          },
          ejsCfg.publicKey
        );
        form.reset();
        showFeedback('Message sent! I\'ll get back to you soon.', 'success');

      } else if (endpoint && endpoint.trim().length > 0) {
        // ── Custom / Formspree endpoint path ─────────────────────────────
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });
        if (!response.ok) throw new Error('Endpoint returned error status ' + response.status);
        form.reset();
        showFeedback('Message sent successfully! I\'ll get back to you shortly.', 'success');

      } else {
        // ── No delivery method configured ────────────────────────────────
        // Do NOT fake success or redirect to mailto. Show clear setup instructions.
        showFeedback(
          'Email delivery is not configured yet. ' +
          'To enable real message delivery, open js/portfolio-data.js and add your EmailJS ' +
          'serviceId, templateId, and publicKey under config.emailjs. ' +
          'Visit emailjs.com to create a free account and get these values.',
          'error'
        );
        // Inputs are intentionally preserved so the visitor does not lose their message.
        return;
      }
    } catch (err) {
      console.error('[Contact Form] Send error:', err);
      showFeedback(
        'Failed to send your message. Please try again, or email me directly at patiltirtha8811@gmail.com.',
        'error'
      );
      // Intentionally do NOT reset the form — preserve entered text.
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
    }
  });

  function showFeedback(text, type) {
    if (!feedback) return;
    feedback.textContent = text;
    feedback.className = `form-feedback ${type}`;
    if (type === 'success') {
      setTimeout(() => { feedback.className = 'form-feedback'; }, 7000);
    }
  }
}

/* ==========================================================================
   Cute Futuristic Robot Companion
   ========================================================================== */
function initRobotCompanion() {
  const robotContainer = document.getElementById('robot-companion');
  const speechBubble = document.getElementById('robot-speech');
  const robotAvatar = document.getElementById('robot-avatar');
  const closeBtn = document.getElementById('robot-speech-close');
  const contactCta = document.getElementById('robot-contact-cta');

  if (!robotContainer || !speechBubble) return;

  let isBubbleVisible = false;

  function showBubble(playAudio = false) {
    speechBubble.classList.add('active');
    isBubbleVisible = true;
    if (playAudio && typeof audioManager !== 'undefined') {
      try {
        audioManager.playChirp();
      } catch (err) {
        // Browser autoplay restriction handled gracefully
      }
    }
  }

  function hideBubble() {
    speechBubble.classList.remove('active');
    isBubbleVisible = false;
  }

  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const header = document.querySelector('.site-header');
      const headerOffset = (header ? header.offsetHeight : 70) + 24;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: offsetPosition,
        behavior: isReduced ? 'auto' : 'smooth'
      });
    }
    hideBubble();
  }

  // 1. Initial Page Load Greeting
  // Automatically display the speech bubble with subtle intro timing (silent on page load)
  setTimeout(() => {
    showBubble(false);
  }, 400);

  // 2. Dismiss / Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideBubble();
    });
  }

  // 3. CTA "Send me a message 💌"
  if (contactCta) {
    contactCta.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      scrollToContact();
    });
  }

  // 4. Robot Avatar Interaction
  if (robotAvatar) {
    const handleAvatarInteraction = () => {
      if (!isBubbleVisible) {
        showBubble(false);
      } else {
        // If bubble is already visible, clicking the robot navigates directly to contact section
        scrollToContact();
      }
    };

    robotAvatar.addEventListener('click', (e) => {
      e.stopPropagation();
      handleAvatarInteraction();
    });

    robotAvatar.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        if (typeof audioManager !== 'undefined') {
          audioManager.playClick();
        }
        handleAvatarInteraction();
      }
    });
  }
}
