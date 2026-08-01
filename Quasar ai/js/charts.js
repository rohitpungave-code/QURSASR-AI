/* ==========================================================================
   QUASAR AI - CHARTS & VISUAL ANALYTICS MODULE
   ========================================================================== */

const QuasarCharts = {
  // Render Financial Projection Line Chart on Canvas
  renderFinancialChart: function(canvasId, initialCapital, monthlyExpenses, pricePerUnit, unitSales) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.parentElement.clientWidth || 600;
    const height = canvas.height = 240;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Calculate 12 Months Projection
    const months = Array.from({length: 12}, (_, i) => `Month ${i+1}`);
    const costData = [];
    const revenueData = [];
    const profitData = [];

    let totalCostAccumulated = parseFloat(initialCapital);
    const unitPrice = parseFloat(pricePerUnit) || 0;
    const units = parseFloat(unitSales) || 0;
    const expense = parseFloat(monthlyExpenses) || 0;

    for (let m = 1; m <= 12; m++) {
      totalCostAccumulated += expense;
      costData.push(totalCostAccumulated);
      const monthlyRev = unitPrice * units * m;
      revenueData.push(monthlyRev);
      profitData.push(monthlyRev - totalCostAccumulated);
    }

    const maxVal = Math.max(...revenueData, ...costData, 10000);
    const padding = 40;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    // Draw Grid Lines & Axes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = height - padding - (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();

      // Y-axis Labels
      ctx.fillStyle = '#64748b';
      ctx.font = '10px Plus Jakarta Sans';
      const valStr = '$' + Math.round((maxVal / 4) * i).toLocaleString();
      ctx.fillText(valStr, 5, y + 3);
    }

    // Helper Line Plotter
    const drawLine = (data, color, shadowColor) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = 10;

      data.forEach((val, index) => {
        const x = padding + (chartW / (data.length - 1)) * index;
        const y = height - padding - (val / maxVal) * chartH;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.shadowBlur = 0; // reset
    };

    // Draw Cost Line (Pink/Red)
    drawLine(costData, '#f43f5e', 'rgba(244, 63, 94, 0.5)');
    // Draw Revenue Line (Cyan)
    drawLine(revenueData, '#00f0ff', 'rgba(0, 240, 255, 0.6)');

    // Legend
    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(width - 160, 15, 12, 12);
    ctx.fillStyle = '#f8fafc';
    ctx.fillText('Cumulative Revenue', width - 142, 25);

    ctx.fillStyle = '#f43f5e';
    ctx.fillRect(width - 160, 32, 12, 12);
    ctx.fillStyle = '#f8fafc';
    ctx.fillText('Total Expenses', width - 142, 42);
  },

  // Render SWOT Matrix Visual Cards
  renderSwotMatrix: function(containerId, swotData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 15px;">
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 14px;">
          <h5 style="color: #10b981; font-weight: 700; margin-bottom: 8px;"><i class="fas fa-shield-alt"></i> STRENGTHS</h5>
          <ul style="padding-left: 18px; font-size: 0.85rem; color: #cbd5e1;">
            ${(swotData.strengths || ['High Market Demand', 'Low Overhead', 'Unique AI Branding']).map(s => `<li style="margin-bottom: 4px;">${s}</li>`).join('')}
          </ul>
        </div>
        <div style="background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: 12px; padding: 14px;">
          <h5 style="color: #f43f5e; font-weight: 700; margin-bottom: 8px;"><i class="fas fa-exclamation-triangle"></i> WEAKNESSES</h5>
          <ul style="padding-left: 18px; font-size: 0.85rem; color: #cbd5e1;">
            ${(swotData.weaknesses || ['New Brand Perception', 'Initial Capital Constraints']).map(w => `<li style="margin-bottom: 4px;">${w}</li>`).join('')}
          </ul>
        </div>
        <div style="background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 12px; padding: 14px;">
          <h5 style="color: #00f0ff; font-weight: 700; margin-bottom: 8px;"><i class="fas fa-rocket"></i> OPPORTUNITIES</h5>
          <ul style="padding-left: 18px; font-size: 0.85rem; color: #cbd5e1;">
            ${(swotData.opportunities || ['Global Expansion', 'Enterprise Automation Partnerships']).map(o => `<li style="margin-bottom: 4px;">${o}</li>`).join('')}
          </ul>
        </div>
        <div style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 12px; padding: 14px;">
          <h5 style="color: #fbbf24; font-weight: 700; margin-bottom: 8px;"><i class="fas fa-bolt"></i> THREATS</h5>
          <ul style="padding-left: 18px; font-size: 0.85rem; color: #cbd5e1;">
            ${(swotData.threats || ['Fast-moving Competitors', 'Changing Platform Policies']).map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    container.innerHTML = html;
  }
};
