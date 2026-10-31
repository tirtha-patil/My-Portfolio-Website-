/**
 * ====================================================================
 * AUDIO MANAGER (Web Audio API Synthesizer)
 * ====================================================================
 * Generates delicate, subtle micro-sounds without any external audio
 * files. Guaranteed fast, cross-browser, and zero-latency.
 * Respects browser autoplay restrictions and user preference.
 * ====================================================================
 */

class AudioManager {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.storageKey = 'tirtha_portfolio_sound_enabled';
    this.init();
  }

  init() {
    // Check localStorage preference, default to true if unconfigured
    const stored = localStorage.getItem(this.storageKey);
    if (stored !== null) {
      this.enabled = stored === 'true';
    } else if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.config && typeof PORTFOLIO_DATA.config.soundEnabledByDefault !== 'undefined') {
      this.enabled = Boolean(PORTFOLIO_DATA.config.soundEnabledByDefault);
    } else {
      this.enabled = true;
    }
  }

  getAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem(this.storageKey, this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.getAudioContext();
      this.playClick();
    }
    return this.enabled;
  }

  setEnabled(state) {
    this.enabled = Boolean(state);
    localStorage.setItem(this.storageKey, this.enabled ? 'true' : 'false');
  }

  // Soft, delicate tactile click
  playClick() {
    if (!this.enabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Bandpass filter for soft, non-piercing high-tech acoustic click
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.028);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.028);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.03);
    } catch (e) {
      // AudioContext failure shouldn't throw or block execution
    }
  }

  // Gentle futuristic chirp for robot & toggles
  playChirp() {
    if (!this.enabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(680, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1150, ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.085);
    } catch (e) {
      // Fail silently
    }
  }

  // Soft modal open/close pulse
  playModalSound() {
    if (!this.enabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.075);
    } catch (e) {}
  }
}

const audioManager = new AudioManager();
