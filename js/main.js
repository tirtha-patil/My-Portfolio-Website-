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
  renderSkills();
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
});

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

  // Initial state check
  if (typeof audioManager !== 'undefined') {
    updateButtonState(audioManager.enabled);

    soundToggleBtn.addEventListener('click', () => {
      const isEnabled = audioManager.toggle();
      updateButtonState(isEnabled);
    });

    // Attach soft click sound to all interactive elements
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a, .tab-btn, .clickable');
      if (target && !target.closest('#sound-toggle')) {
        audioManager.playClick();
      }
    });
  }
}

/* ==========================================================================
   Render Research Interests
   ========================================================================== */
function renderResearchInterests() {
  const container = document.getElementById('research-grid');
  if (!container || !PORTFOLIO_DATA.researchInterests) return;

  const icons = {
    eye: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    sparkles: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    activity: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    cpu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    layers: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    "shield-check": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.researchInterests.map(item => `
    <div class="research-card">
      <div class="research-card-top">
        <div class="research-icon-wrapper">
          ${icons[item.icon] || icons.cpu}
        </div>
        <span class="research-badge">${item.badge}</span>
      </div>
      <div>
        <h3 class="research-card-title">${item.title}</h3>
        <p class="research-card-desc" style="margin-top: 8px;">${item.shortDescription}</p>
      </div>
      <div class="research-keywords">
        ${item.focusKeywords.map(kw => `<span class="research-kw-chip">${kw}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Render Selected Projects
   ========================================================================== */
function renderProjects() {
  const featuredContainer = document.getElementById('featured-project-container');
  const gridContainer = document.getElementById('projects-grid');

  if (!PORTFOLIO_DATA.projects) return;

  // 1. Featured Project Layout (Retina Disease Detection)
  const featured = PORTFOLIO_DATA.projects.find(p => p.featured) || PORTFOLIO_DATA.projects[0];
  if (featured && featuredContainer) {
    const breakdownTabs = featured.breakdown ? Object.keys(featured.breakdown) : [];
    
    // Build action buttons (only if link is present)
    let actionButtons = '';
    if (featured.githubUrl) {
      actionButtons += `
        <a href="${featured.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub Repository
        </a>
      `;
    }
    if (featured.liveDemoUrl) {
      actionButtons += `
        <a href="${featured.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          Live Demo
        </a>
      `;
    }
    if (featured.paperUrl) {
      actionButtons += `
        <a href="${featured.paperUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Research Paper
        </a>
      `;
    }

    featuredContainer.innerHTML = `
      <div class="featured-card">
        <div class="featured-grid">
          <div class="featured-visual-box">
            <img src="${featured.image || 'assets/images/retina-gradcam.jpg'}" alt="Retina Disease Detection Grad-CAM heatmap visualization" loading="lazy">
            <div class="featured-visual-overlay">
              <span>MODEL: MobileNetV2</span>
              <span>XAI: Grad-CAM Feature Attribution</span>
            </div>
          </div>
          <div class="featured-content-box">
            <div>
              <span class="featured-category-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Featured Research Project • ${featured.category}
              </span>
              <h3 class="featured-title" style="margin-top: 8px;">${featured.title}</h3>
              <p class="featured-desc" style="margin-top: 10px;">${featured.longDescription}</p>
            </div>

            <!-- Metrics -->
            <div class="metrics-grid">
              ${featured.metrics.map(m => `
                <div class="metric-item">
                  <div class="metric-label">${m.label}</div>
                  <div class="metric-value">${m.value}</div>
                </div>
              `).join('')}
            </div>

            <!-- Architectural Breakdown Tabs -->
            <div class="breakdown-section">
              <div class="breakdown-tabs" id="featured-breakdown-tabs">
                ${breakdownTabs.map((key, idx) => `
                  <button class="breakdown-tab-btn ${idx === 0 ? 'active' : ''}" data-tab="${key}">
                    ${key.toUpperCase()}
                  </button>
                `).join('')}
              </div>
              <div class="breakdown-content" id="featured-breakdown-content">
                ${featured.breakdown ? featured.breakdown[breakdownTabs[0]] : ''}
              </div>
            </div>

            <div class="project-tech-tags">
              ${featured.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>

            <div class="project-actions">
              ${actionButtons}
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind tab clicks for the featured project
    const tabs = featuredContainer.querySelectorAll('.breakdown-tab-btn');
    const content = featuredContainer.querySelector('#featured-breakdown-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const key = tab.getAttribute('data-tab');
        if (featured.breakdown && featured.breakdown[key] && content) {
          content.style.opacity = '0';
          setTimeout(() => {
            content.textContent = featured.breakdown[key];
            content.style.opacity = '1';
          }, 120);
        }
      });
    });
  }

  // 2. Standard Projects Grid (Remaining Projects)
  const remainingProjects = PORTFOLIO_DATA.projects.filter(p => !p.featured);
  if (gridContainer && remainingProjects.length > 0) {
    gridContainer.innerHTML = remainingProjects.map(proj => {
      let actions = '';
      if (proj.githubUrl) {
        actions += `
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        `;
      }
      if (proj.liveDemoUrl) {
        actions += `
          <a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Live Demo
          </a>
        `;
      }
      if (proj.paperUrl) {
        actions += `
          <a href="${proj.paperUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            Paper
          </a>
        `;
      }

      return `
        <div class="project-card">
          <div class="project-card-header">
            <span class="project-card-cat">${proj.category}</span>
            <h4 class="project-card-title">${proj.title}</h4>
            <p class="project-card-desc">${proj.shortDescription}</p>
          </div>

          ${proj.metrics ? `
            <div class="project-metrics-row">
              ${proj.metrics.map(m => `
                <div class="mini-metric">
                  <span class="mini-metric-label">${m.label}:</span>
                  <span class="mini-metric-val">${m.value}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div class="project-tech-tags">
            ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-actions" style="margin-top: 10px;">
            ${actions}
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   Render Technical Skills
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container || !PORTFOLIO_DATA.skills) return;

  const categories = [
    {
      title: "Programming Languages",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      items: PORTFOLIO_DATA.skills.programming.map(p => ({ name: p.name, note: p.level }))
    },
    {
      title: "Machine Learning & Neural Models",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      items: PORTFOLIO_DATA.skills.machineLearning
    },
    {
      title: "Scientific Computing & Analytics",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      items: PORTFOLIO_DATA.skills.libraries
    },
    {
      title: "Developer Tools & Frameworks",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      items: PORTFOLIO_DATA.skills.toolsFrameworks
    }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <h3 class="skill-cat-title">
        <span class="skill-cat-icon">${cat.icon}</span>
        ${cat.title}
      </h3>
      <div class="skill-pills-list">
        ${cat.items.map(item => `
          <div class="skill-chip">
            <span class="skill-chip-name">${item.name}</span>
            <span class="skill-chip-note">${item.note}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Render Certifications
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map((cert, idx) => `
    <div class="cert-card">
      <div>
        <div class="cert-card-top">
          <span class="cert-badge">${cert.badge}</span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${cert.date}</span>
        </div>
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-issuer" style="margin-top: 4px;">${cert.issuer}</div>
        <p class="cert-desc" style="margin-top: 10px;">${cert.description}</p>
      </div>

      <div class="cert-actions">
        <button class="btn btn-secondary btn-sm view-cert-btn" data-cert-index="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          View Credential
        </button>
        <a href="${cert.file}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Open PDF in new tab" title="Open PDF directly in new tab">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  `).join('');

  // Attach modal triggers for certs
  const certButtons = container.querySelectorAll('.view-cert-btn');
  certButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-cert-index'), 10);
      const cert = PORTFOLIO_DATA.certifications[idx];
      if (cert) {
        openCertModal(cert);
      }
    });
  });
}

/* ==========================================================================
   Render Experience Timeline
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h4 class="timeline-role">${item.role}</h4>
            <div class="timeline-org">${item.organization}</div>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-bullets">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="project-tech-tags">
          ${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
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
   Render Leadership & Activities ("Beyond the Lab")
   ========================================================================== */
function renderLeadership() {
  const container = document.getElementById('leadership-grid');
  if (!container || !PORTFOLIO_DATA.leadership) return;

  container.innerHTML = PORTFOLIO_DATA.leadership.map(item => `
    <div class="leadership-card">
      <div class="leadership-header">
        <div>
          <h3 class="leadership-org">${item.organization}</h3>
          <div class="leadership-role">${item.role}</div>
        </div>
        <span class="leadership-time">${item.timeline}</span>
      </div>
      <p style="color: var(--text-secondary); line-height: 1.6;">${item.description}</p>
      <ul class="timeline-bullets" style="margin-bottom: 0;">
        ${item.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
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
      <button class="channel-action-btn" id="copy-email-btn" title="Copy email address">
        Copy
      </button>
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

    <!-- Instagram Placeholder (Clearly marked) -->
    <div class="contact-channel-item">
      <div class="channel-meta">
        <div class="channel-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
        <div>
          <div class="channel-label">Instagram (Configurable)</div>
          <a href="${p.instagram}" target="_blank" rel="noopener noreferrer" class="channel-val">Instagram Profile</a>
        </div>
      </div>
      <a href="${p.instagram}" target="_blank" rel="noopener noreferrer" class="channel-action-btn">
        Open ↗
      </a>
    </div>
  `;

  // Email Copy button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(p.email).then(() => {
        const origText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.color = '#34D399';
        copyBtn.style.borderColor = '#34D399';
        setTimeout(() => {
          copyBtn.textContent = origText;
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      });
    });
  }
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
  if (typeof audioManager !== 'undefined') {
    audioManager.playModalSound();
  }
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

    // Check honeypot spam protection
    const honeypot = form.querySelector('input[name="_honey"]');
    if (honeypot && honeypot.value) {
      // Spam bot detected, silently drop
      return;
    }

    const name = form.querySelector('#sender-name')?.value.trim();
    const email = form.querySelector('#sender-email')?.value.trim();
    const subject = form.querySelector('#sender-subject')?.value.trim();
    const message = form.querySelector('#sender-message')?.value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please provide a valid email address.', 'error');
      return;
    }

    // Set loading state
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      Sending Transmission...
    `;

    const endpoint = PORTFOLIO_DATA.config?.contactFormEndpoint;

    try {
      if (endpoint && endpoint.trim().length > 0) {
        // Dispatch to custom or Formspree endpoint
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ name, email, subject, message })
        });

        if (response.ok) {
          form.reset();
          showFeedback('Thank you! Your message has been transmitted successfully. I will get back to you shortly.', 'success');
        } else {
          throw new Error('Endpoint returned error');
        }
      } else {
        // Fallback for direct mailto delivery when no backend API key is connected
        const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(`[Portfolio Contact] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;
        form.reset();
        showFeedback('Message dispatched to your default mail client! I look forward to connecting.', 'success');
      }
    } catch (err) {
      showFeedback('Transmission failed. Please reach out directly to tirtha.patil24@vit.edu', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  });

  function showFeedback(text, type) {
    if (!feedback) return;
    feedback.textContent = text;
    feedback.className = `form-feedback ${type}`;
    setTimeout(() => {
      if (type === 'success') {
        feedback.className = 'form-feedback';
      }
    }, 7000);
  }
}

/* ==========================================================================
   Cute Futuristic Robot Companion
   ========================================================================== */
function initRobotCompanion() {
  const robotContainer = document.getElementById('robot-companion');
  const speechBubble = document.getElementById('robot-speech');
  if (!robotContainer || !speechBubble) return;

  let hideTimeout = null;

  function triggerGreeting() {
    robotContainer.classList.add('active');
    if (typeof audioManager !== 'undefined') {
      audioManager.playChirp();
    }
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      robotContainer.classList.remove('active');
    }, 3200);
  }

  robotContainer.addEventListener('click', triggerGreeting);
  robotContainer.addEventListener('mouseenter', () => {
    if (typeof audioManager !== 'undefined') {
      audioManager.playChirp();
    }
  });
}
