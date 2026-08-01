/* ==========================================================================
   QUASAR AI - ENTREPRENEUR & BUSINESSMAN COPILOT (BIZBRAIN MODULE)
   ========================================================================== */

const BizBrain = {
  init: function() {
    this.bindEvents();
    this.updateChecklistProgress();
  },

  bindEvents: function() {
    // 1. Business Plan Generator
    const btnGenPlan = document.getElementById('btn-gen-plan');
    if (btnGenPlan) {
      btnGenPlan.addEventListener('click', () => this.generateBusinessPlan());
    }

    // 2. Financial & ROI Calculator
    const btnCalc = document.getElementById('btn-calc-financials');
    if (btnCalc) {
      btnCalc.addEventListener('click', () => this.calculateFinancials());
    }

    // 3. Pitch Deck Builder
    const btnPitch = document.getElementById('btn-gen-pitch');
    if (btnPitch) {
      btnPitch.addEventListener('click', () => this.generatePitchDeck());
    }

    // 4. Business Problem Solver
    const btnSolve = document.getElementById('btn-solve-problem');
    if (btnSolve) {
      btnSolve.addEventListener('click', () => this.solveBusinessProblem());
    }
  },

  // 1. Generate Business Plan
  generateBusinessPlan: function() {
    const bizName = document.getElementById('biz-name-input').value.trim() || 'Nova Cloud Logistics';
    const bizType = document.getElementById('biz-type-select').value || 'E-Commerce / D2C';
    const bizDesc = document.getElementById('biz-desc-input').value.trim() || 'AI-driven logistics and quick supply chain fulfillment for micro-merchants.';
    const budget = document.getElementById('biz-budget-input').value.trim() || '$10,000';

    const outputBox = document.getElementById('biz-plan-output');
    outputBox.innerHTML = `<div style="text-align:center; padding:20px; color:#00f0ff;"><i class="fas fa-circle-notch fa-spin fa-2x"></i><p style="margin-top:10px;">Quasar BizBrain is building your Business Plan & Growth Blueprint...</p></div>`;

    setTimeout(() => {
      const planHTML = `
        <div style="color: #f8fafc;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom:14px;">
            <h4 style="color:#fbbf24; font-family:'Outfit'; font-size:1.2rem;"><i class="fas fa-file-contract"></i> Executive Summary: ${bizName}</h4>
            <span style="background:rgba(251,191,36,0.2); color:#fbbf24; padding:3px 10px; border-radius:12px; font-size:0.75rem; font-weight:700;">${bizType}</span>
          </div>

          <p style="margin-bottom:12px;"><strong>Overview:</strong> ${bizDesc}</p>
          <p style="margin-bottom:14px; color:#94a3b8;"><strong>Estimated Seed Capital:</strong> ${budget}</p>

          <h5 style="color:#00f0ff; margin-top:14px; margin-bottom:6px;">1. Market Validation & Target Audience</h5>
          <ul style="padding-left:18px; margin-bottom:12px; color:#cbd5e1; font-size:0.88rem;">
            <li><strong>Primary Segment:</strong> Tech-savvy entrepreneurs, small business owners, and digital brands seeking high efficiency.</li>
            <li><strong>Total Addressable Market (TAM):</strong> $45B Global Industry Segment growing at 18.5% CAGR.</li>
            <li><strong>Competitive Edge:</strong> Automated AI dispatch, lower unit cost overhead, and instant 24/7 customer support.</li>
          </ul>

          <h5 style="color:#00f0ff; margin-top:14px; margin-bottom:6px;">2. Monetization & Revenue Stream</h5>
          <ul style="padding-left:18px; margin-bottom:12px; color:#cbd5e1; font-size:0.88rem;">
            <li><strong>Tier 1 Subscription:</strong> $49/mo Starter merchant access.</li>
            <li><strong>Tier 2 Pro Growth:</strong> $199/mo with automated analytics & dedicated agent copilot.</li>
            <li><strong>Transaction Fee:</strong> 2.5% platform processing margin.</li>
          </ul>

          <h5 style="color:#00f0ff; margin-top:14px; margin-bottom:6px;">3. 90-Day Go-To-Market Execution Plan</h5>
          <div style="background:rgba(0,0,0,0.3); border-left:3px solid #fbbf24; padding:10px 14px; margin-top:8px; font-size:0.85rem; color:#e2e8f0;">
            <p><strong>Month 1:</strong> MVP Deployment, initial cohort testing with 25 Beta Merchants.</p>
            <p><strong>Month 2:</strong> Targeted ad campaigns, content marketing, and affiliate channel onboarding.</p>
            <p><strong>Month 3:</strong> Unit Economics stabilization & scaling monthly recurring revenue (MRR) to $15k.</p>
          </div>
        </div>
      `;
      outputBox.innerHTML = planHTML;

      // Also render SWOT Matrix in container
      QuasarCharts.renderSwotMatrix('swot-matrix-container', {
        strengths: [`Proprietary AI Tech in ${bizType}`, 'Agile Operational Structure', 'Low Initial Overhead'],
        weaknesses: ['New Brand Awareness', 'Lean Early Marketing Budget'],
        opportunities: ['Rapid Market Demand Expansion', 'Enterprise API Licensing'],
        threats: ['Established Legacy Competitors', 'Ad Cost Fluctuations']
      });

    }, 1500);
  },

  // 2. Calculate Financials
  calculateFinancials: function() {
    const initialCapital = parseFloat(document.getElementById('calc-capital').value) || 10000;
    const monthlyExpenses = parseFloat(document.getElementById('calc-expenses').value) || 2500;
    const unitPrice = parseFloat(document.getElementById('calc-price').value) || 99;
    const unitSales = parseFloat(document.getElementById('calc-sales').value) || 50;

    const monthlyRevenue = unitPrice * unitSales;
    const monthlyNetProfit = monthlyRevenue - monthlyExpenses;
    const breakEvenMonths = monthlyNetProfit > 0 ? Math.ceil(initialCapital / monthlyNetProfit) : 'N/A (Unprofitable)';

    const resultBox = document.getElementById('calc-results');
    resultBox.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:12px; text-align:center;">
        <div style="background:rgba(0,240,255,0.1); border:1px solid rgba(0,240,255,0.3); border-radius:10px; padding:12px;">
          <div style="font-size:0.75rem; color:#94a3b8;">Monthly Revenue</div>
          <div style="font-size:1.2rem; font-weight:800; color:#00f0ff;">$${monthlyRevenue.toLocaleString()}</div>
        </div>
        <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:10px; padding:12px;">
          <div style="font-size:0.75rem; color:#94a3b8;">Monthly Net Profit</div>
          <div style="font-size:1.2rem; font-weight:800; color:${monthlyNetProfit >= 0 ? '#10b981' : '#f43f5e'};">$${monthlyNetProfit.toLocaleString()}</div>
        </div>
        <div style="background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.3); border-radius:10px; padding:12px;">
          <div style="font-size:0.75rem; color:#94a3b8;">Break-Even Period</div>
          <div style="font-size:1.2rem; font-weight:800; color:#fbbf24;">${typeof breakEvenMonths === 'number' ? breakEvenMonths + ' Months' : breakEvenMonths}</div>
        </div>
      </div>
    `;

    // Render Canvas Chart
    QuasarCharts.renderFinancialChart('financial-canvas-chart', initialCapital, monthlyExpenses, unitPrice, unitSales);
  },

  // 3. Generate Pitch Deck
  generatePitchDeck: function() {
    const pitchOutput = document.getElementById('pitch-deck-output');
    pitchOutput.innerHTML = `<div style="text-align:center; padding:15px; color:#fbbf24;"><i class="fas fa-spinner fa-spin"></i> Generating Investor Pitch Deck Slides & Presentation Script...</div>`;

    setTimeout(() => {
      const slidesHTML = `
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
            <span style="color:#fbbf24; font-weight:800; font-size:0.8rem;">SLIDE 1: THE VISION & PROBLEM</span>
            <p style="color:#e2e8f0; font-size:0.88rem; margin-top:4px;">Industry inefficiency and manual overhead waste 30%+ of merchant profits. Our platform automates operations seamlessly.</p>
          </div>
          <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
            <span style="color:#00f0ff; font-weight:800; font-size:0.8rem;">SLIDE 2: THE SOLUTION & TECH</span>
            <p style="color:#e2e8f0; font-size:0.88rem; margin-top:4px;">Quasar AI Copilot integration: Reduces operational delay by 85% with autonomous multi-agent decision support.</p>
          </div>
          <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
            <span style="color:#10b981; font-weight:800; font-size:0.8rem;">SLIDE 3: MARKET POTENTIAL & ASK</span>
            <p style="color:#e2e8f0; font-size:0.88rem; margin-top:4px;">Seeking $250,000 Seed Funding for 15% equity to accelerate engineering and scale customer acquisition to 1,000 active clients.</p>
          </div>
        </div>
      `;
      pitchOutput.innerHTML = slidesHTML;
    }, 1200);
  },

  // 4. Solve Business Problem
  solveBusinessProblem: function() {
    const problemText = document.getElementById('problem-input-field').value.trim() || 'Struggling to acquire first 100 paying customers on a low budget.';
    const output = document.getElementById('problem-solution-output');

    output.innerHTML = `<div style="text-align:center; padding:15px; color:#00f0ff;"><i class="fas fa-brain fa-spin"></i> Analyzing Root Cause & Formulating Actionable Resolution...</div>`;

    setTimeout(() => {
      const solutionHTML = `
        <div style="color:#f8fafc;">
          <h4 style="color:#f43f5e; font-size:1rem; margin-bottom:8px;"><i class="fas fa-stethoscope"></i> Root Cause Diagnosis:</h4>
          <p style="font-size:0.88rem; color:#cbd5e1; margin-bottom:12px;">The challenge stems from insufficient direct trust signals and reliance on passive discovery rather than proactive outbound messaging.</p>

          <h4 style="color:#10b981; font-size:1rem; margin-bottom:8px;"><i class="fas fa-check-circle"></i> 3-Step Immediate Action Plan:</h4>
          <ol style="padding-left:20px; font-size:0.88rem; color:#e2e8f0; line-height:1.6;">
            <li><strong>Lighthouse Client Offer:</strong> Provide 10 influential businesses free 30-day access in exchange for detailed video case studies.</li>
            <li><strong>Hyper-Targeted Cold Outreach:</strong> Send 50 personalized Loom videos or custom demos daily to high-fit prospects.</li>
            <li><strong>Incentivized Referral Engine:</strong> Give existing users 20% recurring commission for every successful client referral.</li>
          </ol>
        </div>
      `;
      output.innerHTML = solutionHTML;
    }, 1300);
  },

  updateChecklistProgress: function() {
    const checkboxes = document.querySelectorAll('.biz-checklist-item');
    const progressBar = document.getElementById('checklist-progress-bar');
    const label = document.getElementById('checklist-progress-label');

    if (!checkboxes.length) return;

    let checkedCount = 0;
    checkboxes.forEach(box => {
      if (box.checked) checkedCount++;
      box.addEventListener('change', () => this.updateChecklistProgress());
    });

    const percent = Math.round((checkedCount / checkboxes.length) * 100);
    if (progressBar) progressBar.style.width = percent + '%';
    if (label) label.textContent = `${percent}% Completed (${checkedCount}/${checkboxes.length} Tasks)`;
  }
};
