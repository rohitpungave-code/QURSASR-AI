/* ==========================================================================
   QUASAR AI - MULTI-AGENT AI BRAIN TEAM MODULE
   ========================================================================== */

const AgentHub = {
  selectedAgent: 'cso',

  agents: {
    cso: {
      name: 'AURA-9 (CSO)',
      title: 'Chief Strategy Officer',
      avatarIcon: 'fa-chess-king',
      color: '#00f0ff',
      bio: 'Disruptive market strategy, competitive intelligence & venture growth positioning.'
    },
    cfo: {
      name: 'VALOR-X (CFO)',
      title: 'Chief Financial Officer',
      avatarIcon: 'fa-chart-line',
      color: '#10b981',
      bio: 'Financial modeling, burn rate control, pricing strategy & venture fundraising.'
    },
    cto: {
      name: 'CYBER-7 (CTO)',
      title: 'Chief Technology Officer',
      avatarIcon: 'fa-microchip',
      color: '#8a2be2',
      bio: 'Full-stack software architecture, AI model integration & scalable tech infrastructure.'
    },
    cmo: {
      name: 'PULSE-4 (CMO)',
      title: 'Chief Marketing Officer',
      avatarIcon: 'fa-bullhorn',
      color: '#ec4899',
      bio: 'Viral acquisition channels, conversion copywriting & high-conversion GTM funnels.'
    },
    cdo: {
      name: 'VIVID-1 (CDO)',
      title: 'Creative Design Director',
      avatarIcon: 'fa-palette',
      color: '#fbbf24',
      bio: 'Cyber aesthetics, premium UI/UX design systems, brand guidelines & visual storytelling.'
    }
  },

  init: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    const cards = document.querySelectorAll('.agent-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedAgent = card.dataset.agent;
        this.updateAgentView();
      });
    });

    const btnConsult = document.getElementById('btn-agent-consult');
    if (btnConsult) {
      btnConsult.addEventListener('click', () => this.runConsultation());
    }

    const btnBoard = document.getElementById('btn-board-meeting');
    if (btnBoard) {
      btnBoard.addEventListener('click', () => this.runBoardMeeting());
    }
  },

  updateAgentView: function() {
    const agent = this.agents[this.selectedAgent];
    if (!agent) return;
    const titleElem = document.getElementById('selected-agent-title');
    if (titleElem) titleElem.textContent = `${agent.name} - ${agent.title}`;
  },

  runConsultation: function() {
    const promptInput = document.getElementById('agent-prompt-input');
    const prompt = promptInput ? promptInput.value.trim() : '';
    if (!prompt) return;

    const agent = this.agents[this.selectedAgent];
    const outputBox = document.getElementById('agent-consult-output');

    outputBox.innerHTML = `<div style="text-align:center; padding:20px; color:${agent.color};"><i class="fas fa-brain fa-spin fa-2x"></i><p style="margin-top:10px;">${agent.name} is formulating specialized recommendations...</p></div>`;

    setTimeout(() => {
      outputBox.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.9); border: 1px solid ${agent.color}; border-radius: 14px; padding: 20px;">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
            <div style="width:40px; height:40px; border-radius:50%; background:${agent.color}; color:#000; display:flex; align-items:center; justify-content:center; font-weight:800;">
              <i class="fas ${agent.avatarIcon}"></i>
            </div>
            <div>
              <h4 style="color:#fff; font-family:'Outfit'; font-size:1.1rem;">${agent.name}</h4>
              <span style="color:${agent.color}; font-size:0.75rem; font-weight:700;">${agent.title}</span>
            </div>
          </div>
          <div style="color:#e2e8f0; font-size:0.92rem; line-height:1.6;">
            <p style="margin-bottom:10px;"><strong>Analysis for:</strong> "${prompt}"</p>
            <p style="margin-bottom:12px;">Based on my specialized domain expertise as ${agent.title}, here is my tactical recommendation:</p>
            <ul style="padding-left:20px; color:#cbd5e1; font-size:0.88rem;">
              <li style="margin-bottom:6px;"><strong>Core Focus:</strong> Prioritize high-leverage actions that deliver immediate ROI within 30 days.</li>
              <li style="margin-bottom:6px;"><strong>Risk Mitigation:</strong> Establish quantitative performance indicators (KPIs) to evaluate success weekly.</li>
              <li style="margin-bottom:6px;"><strong>Execution Directive:</strong> Align team resources to eliminate friction points in client onboarding.</li>
            </ul>
          </div>
        </div>
      `;
    }, 1200);
  },

  runBoardMeeting: function() {
    const promptInput = document.getElementById('agent-prompt-input');
    const prompt = promptInput ? promptInput.value.trim() : 'How should our business scale to $100k MRR while maintaining high profitability?';

    const outputBox = document.getElementById('agent-consult-output');
    outputBox.innerHTML = `<div style="text-align:center; padding:20px; color:#00f0ff;"><i class="fas fa-users-cog fa-spin fa-2x"></i><p style="margin-top:10px;">Convening AI Executive Board Meeting across all 5 Agent Brains...</p></div>`;

    setTimeout(() => {
      let html = `<h3 style="color:#fbbf24; font-family:'Outfit'; margin-bottom:16px;"><i class="fas fa-gavel"></i> Joint Executive Board Strategy Minutes</h3>`;
      
      Object.keys(this.agents).forEach(key => {
        const ag = this.agents[key];
        html += `
          <div style="background:rgba(15,23,42,0.7); border-left:4px solid ${ag.color}; border-radius:8px; padding:12px 16px; margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong style="color:${ag.color}; font-size:0.9rem;">${ag.name} (${ag.title})</strong>
              <span style="font-size:0.7rem; color:#64748b;">AGENT VERDICT</span>
            </div>
            <p style="font-size:0.85rem; color:#e2e8f0; margin-top:6px;">"My mandate for '${prompt}' is to strictly optimize domain operations with zero efficiency loss."</p>
          </div>
        `;
      });

      outputBox.innerHTML = html;
    }, 1800);
  }
};
