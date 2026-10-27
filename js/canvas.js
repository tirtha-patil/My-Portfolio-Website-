/**
 * ====================================================================
 * AMBIENT AI RESEARCH CANVAS & PARTICLES
 * ====================================================================
 * Lightweight, performant interactive particle network & orbital
 * geometric visual. Respects prefers-reduced-motion.
 * Subtle, sophisticated, and responsive to cursor movement.
 * ====================================================================
 */

class AmbientCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 130 };
    this.width = 0;
    this.height = 0;
    this.animationFrame = null;
    this.orbitAngle = 0;
    this.isReducedMotion = false;

    this.checkReducedMotion();
    this.init();
  }

  checkReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isReducedMotion = mediaQuery.matches;
    mediaQuery.addEventListener('change', (e) => {
      this.isReducedMotion = e.matches;
      if (this.isReducedMotion) {
        if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
        this.drawStatic();
      } else {
        this.animate();
      }
    });
  }

  init() {
    this.resize();
    this.bindEvents();
    this.createParticles();

    if (this.isReducedMotion) {
      this.drawStatic();
    } else {
      this.animate();
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
      if (this.isReducedMotion) this.drawStatic();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.targetX = -1000;
      this.mouse.targetY = -1000;
    }, { passive: true });
  }

  createParticles() {
    this.particles = [];
    // Maintain modest density for high performance
    const isMobile = this.width < 768;
    const count = isMobile ? 24 : 55;
    
    // Palette: soft violet, lavender, subtle magenta
    const colors = [
      'rgba(139, 92, 246, ',  // Bright violet #8B5CF6
      'rgba(216, 180, 254, ', // Lavender #D8B4FE
      'rgba(192, 38, 211, ',  // Subtle magenta #C026D3
      'rgba(109, 40, 217, '   // Deep violet #6D28D9
    ];

    for (let i = 0; i < count; i++) {
      const colorBase = colors[i % colors.length];
      const isPixel = Math.random() > 0.65; // Mix of micro-circles and tiny 1x1 data pixels
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isPixel ? (Math.random() > 0.5 ? 1.5 : 2) : (Math.random() * 1.5 + 0.8),
        colorBase: colorBase,
        baseAlpha: Math.random() * 0.4 + 0.15,
        isPixel: isPixel,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  drawStatic() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    // Draw static subtle constellation
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.fillStyle = `${p.colorBase}${p.baseAlpha * 0.6})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  animate() {
    if (this.isReducedMotion) return;

    // Smooth mouse damping
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw hero orbital rings in top background
    this.drawOrbitalGeometry();

    // Update and draw particles
    const connectionDist = this.width < 768 ? 85 : 120;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Natural subtle drift
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around bounds softly
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Mouse repulsion/interaction (subtle shift)
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius && dist > 0) {
        const force = (1 - dist / this.mouse.radius) * 1.8;
        p.x -= (dx / dist) * force;
        p.y -= (dy / dist) * force;
      }

      // Gentle pulsing alpha
      p.pulseVal += p.pulseSpeed;
      const alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.12;

      // Draw particle or tiny data pixel
      this.ctx.fillStyle = `${p.colorBase}${Math.max(0.08, alpha)})`;
      if (p.isPixel) {
        this.ctx.fillRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Draw subtle node connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const ndx = p.x - p2.x;
        const ndy = p.y - p2.y;
        const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

        if (nDist < connectionDist) {
          const lineAlpha = (1 - nDist / connectionDist) * 0.16;
          this.ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  drawOrbitalGeometry() {
    this.orbitAngle += 0.0015;
    const centerX = this.width > 1024 ? this.width * 0.72 : this.width * 0.5;
    const centerY = this.width > 1024 ? 320 : 260;

    // Outer subtle orbital dashed ring
    this.ctx.save();
    this.ctx.translate(centerX, centerY);
    this.ctx.rotate(this.orbitAngle);

    this.ctx.strokeStyle = 'rgba(139, 92, 246, 0.07)';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 12]);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 180, 0, Math.PI * 2);
    this.ctx.stroke();

    // Inner orbital ring
    this.ctx.strokeStyle = 'rgba(192, 38, 211, 0.06)';
    this.ctx.setLineDash([2, 18]);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 120, 0, Math.PI * 2);
    this.ctx.stroke();

    this.ctx.restore();
  }
}
