/* ==========================================================================
   QUASAR AI - GRAPHIC & BRAND IDENTITY STUDIO MODULE
   ========================================================================== */

const BrandStudio = {
  palettes: [
    { name: 'Cyber Neon', colors: ['#00f0ff', '#7000ff', '#ec4899', '#10b981', '#0b0f19'] },
    { name: 'Gold Luxury', colors: ['#fbbf24', '#d97706', '#78350f', '#fef3c7', '#0f172a'] },
    { name: 'Tech Emerald', colors: ['#10b981', '#059669', '#064e3b', '#a7f3d0', '#022c22'] },
    { name: 'Midnight Violet', colors: ['#6366f1', '#4f46e5', '#312e81', '#c7d2fe', '#090d16'] }
  ],

  init: function() {
    this.bindEvents();
    this.renderPalette(this.palettes[0]);
  },

  bindEvents: function() {
    const btnGenBrand = document.getElementById('btn-gen-brand');
    if (btnGenBrand) {
      btnGenBrand.addEventListener('click', () => this.generateBrandAssets());
    }

    const btnPalette = document.getElementById('btn-new-palette');
    if (btnPalette) {
      btnPalette.addEventListener('click', () => {
        const randomP = this.palettes[Math.floor(Math.random() * this.palettes.length)];
        this.renderPalette(randomP);
      });
    }

    const btnRenderLogo = document.getElementById('btn-render-logo-canvas');
    if (btnRenderLogo) {
      btnRenderLogo.addEventListener('click', () => this.updateCanvasPreview());
    }
  },

  generateBrandAssets: function() {
    const keyword = document.getElementById('brand-keyword-input').value.trim() || 'Aura AI';
    const output = document.getElementById('brand-output-box');

    output.innerHTML = `<div style="text-align:center; padding:15px; color:#ec4899;"><i class="fas fa-magic fa-spin"></i> Designing Brand Identity & Slogans...</div>`;

    setTimeout(() => {
      const html = `
        <div style="color:#f8fafc;">
          <h4 style="color:#ec4899; font-family:'Outfit'; font-size:1.05rem; margin-bottom:8px;"><i class="fas fa-bullseye"></i> Suggested Brand Taglines for "${keyword}"</h4>
          <ul style="padding-left:18px; font-size:0.88rem; color:#cbd5e1; margin-bottom:14px;">
            <li style="margin-bottom:4px;">"<strong>${keyword}</strong>: Empowering Future Business with Autonomous AI Intelligence."</li>
            <li style="margin-bottom:4px;">"Unleash Exponential Growth through <strong>${keyword}</strong> Brainpower."</li>
            <li style="margin-bottom:4px;">"The Next Generation AI Platform for Visionary Founders."</li>
          </ul>

          <h4 style="color:#00f0ff; font-family:'Outfit'; font-size:1.05rem; margin-bottom:8px;"><i class="fas fa-ad"></i> High-Converting Social Ad Copy</h4>
          <div style="background:rgba(0,0,0,0.5); border:1px solid rgba(0,240,255,0.2); border-radius:8px; padding:12px; font-size:0.85rem; color:#e2e8f0;">
            🚀 Ready to scale your business 10x faster with AI?<br><br>
            Meet <strong>${keyword}</strong> — the all-in-one AI copilot that builds your strategy, calculates financials, and solves complex business problems in seconds.<br><br>
            👉 Try ${keyword} today & transform your workflow! #BusinessAI #Entrepreneurship
          </div>
        </div>
      `;
      output.innerHTML = html;
    }, 1200);
  },

  renderPalette: function(paletteObj) {
    const container = document.getElementById('palette-swatches-container');
    if (!container) return;

    let html = '';
    paletteObj.colors.forEach(hex => {
      html += `
        <div class="color-swatch" style="background:${hex};" onclick="navigator.clipboard.writeText('${hex}'); alert('Copied color code: ${hex}');">
          ${hex}
        </div>
      `;
    });
    container.innerHTML = html;
  },

  updateCanvasPreview: function() {
    const text = document.getElementById('logo-text-input').value.trim() || 'QUASAR';
    const iconClass = document.getElementById('logo-icon-select').value || 'fa-atom';

    const iconElem = document.getElementById('preview-logo-icon');
    const textElem = document.getElementById('preview-logo-text');

    if (iconElem) iconElem.className = `logo-icon fas ${iconClass}`;
    if (textElem) textElem.textContent = text.toUpperCase();
  }
};
