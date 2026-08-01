/* ==========================================================================
   QUASAR AI - PROJECTS & ACTIVITIES MANAGEMENT MODULE
   ========================================================================== */

const ProjectHub = {
  projects: [
    {
      id: 'proj-1',
      title: 'Quasar AI SaaS Launch',
      category: 'Software & AI',
      progress: 65,
      status: 'In Progress',
      date: '2026-08-15',
      activities: [
        { name: 'Define Core Unique Selling Proposition (USP)', status: 'Completed', agent: 'CSO Aura-9' },
        { name: 'Setup Unit Economics & Break-Even Model', status: 'Completed', agent: 'CFO Valor-X' },
        { name: 'Build Front-End Cyber Glassmorphism UI', status: 'Completed', agent: 'CDO Vivid-1' },
        { name: 'Deploy API Gateway & Async Workers', status: 'In Progress', agent: 'CTO Cyber-7' },
        { name: 'Launch Cold Email & LinkedIn Acquisition', status: 'Pending', agent: 'CMO Pulse-4' }
      ]
    },
    {
      id: 'proj-2',
      title: 'E-Commerce Quick Supply Store',
      category: 'Retail / D2C',
      progress: 30,
      status: 'In Progress',
      date: '2026-08-30',
      activities: [
        { name: 'Product Niche & Supplier Selection', status: 'Completed', agent: 'CSO Aura-9' },
        { name: 'Storefront Branding & Logo Render', status: 'In Progress', agent: 'CDO Vivid-1' },
        { name: 'Facebook & Instagram Ad Copy Setup', status: 'Pending', agent: 'CMO Pulse-4' }
      ]
    }
  ],

  activityFeed: [
    { time: 'Just now', text: 'CSO Aura-9 generated 90-Day GTM strategy for SaaS launch.', type: 'strategy' },
    { time: '5 mins ago', text: 'CFO Valor-X calculated $10,000 seed break-even point.', type: 'finance' },
    { time: '12 mins ago', text: 'CDO Vivid-1 updated cyber neon logo concept canvas.', type: 'design' },
    { time: '25 mins ago', text: 'New Project "Quasar AI SaaS Launch" initialized.', type: 'project' }
  ],

  init: function() {
    this.bindEvents();
    this.renderProjects();
    this.renderActivityFeed();
  },

  bindEvents: function() {
    const btnCreate = document.getElementById('btn-create-project');
    if (btnCreate) {
      btnCreate.addEventListener('click', () => this.createNewProject());
    }

    const btnGenActivities = document.getElementById('btn-gen-ai-tasks');
    if (btnGenActivities) {
      btnGenActivities.addEventListener('click', () => this.generateAIActivities());
    }
  },

  createNewProject: function() {
    const title = document.getElementById('proj-title-input').value.trim() || 'New Venture Project';
    const category = document.getElementById('proj-cat-select').value || 'Business Strategy';
    const deadline = document.getElementById('proj-date-input').value || '2026-09-01';

    const newProj = {
      id: 'proj-' + Date.now(),
      title: title,
      category: category,
      progress: 10,
      status: 'In Progress',
      date: deadline,
      activities: [
        { name: 'Initial Business Scope & Market Research', status: 'In Progress', agent: 'CSO Aura-9' },
        { name: 'Financial Capital Allocation Plan', status: 'Pending', agent: 'CFO Valor-X' },
        { name: 'Marketing Funnel Blueprint', status: 'Pending', agent: 'CMO Pulse-4' }
      ]
    };

    this.projects.unshift(newProj);
    this.logActivity(`New Project "${title}" created under ${category}.`, 'project');
    this.renderProjects();

    // Reset inputs
    document.getElementById('proj-title-input').value = '';
  },

  generateAIActivities: function() {
    const goal = document.getElementById('ai-task-goal-input').value.trim() || 'Scale customer support automation';
    const output = document.getElementById('ai-tasks-output');

    output.innerHTML = `<div style="text-align:center; padding:15px; color:#00f0ff;"><i class="fas fa-brain fa-spin"></i> AI Brain is auto-decomposing project goal into actionable activities...</div>`;

    setTimeout(() => {
      const activities = [
        { step: 1, title: 'Analyze existing workflow bottlenecks', agent: 'CSO Aura-9', est: '2 Days' },
        { step: 2, title: 'Integrate Quasar AI Knowledge Base API', agent: 'CTO Cyber-7', est: '4 Days' },
        { step: 3, title: 'Design user feedback & sentiment dashboard', agent: 'CDO Vivid-1', est: '3 Days' },
        { step: 4, title: 'Test automated response accuracy with 100 queries', agent: 'CFO Valor-X', est: '1 Day' },
        { step: 5, title: 'Roll out automated support agent live', agent: 'CMO Pulse-4', est: '1 Day' }
      ];

      let html = `<h4 style="color:#fbbf24; font-family:'Outfit'; font-size:1.05rem; margin-bottom:12px;"><i class="fas fa-list-check"></i> AI Actionable Task Decomposition for "${goal}"</h4>`;
      html += `<div style="display:flex; flex-direction:column; gap:10px;">`;

      activities.forEach(act => {
        html += `
          <div style="background:rgba(15,23,42,0.8); border-left:4px solid #00f0ff; border-radius:8px; padding:10px 14px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <strong style="color:#fff; font-size:0.9rem;">Step ${act.step}: ${act.title}</strong>
              <div style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">Assigned AI Executive: <span style="color:#00f0ff;">${act.agent}</span></div>
            </div>
            <span style="background:rgba(0,240,255,0.15); color:#00f0ff; padding:3px 8px; border-radius:10px; font-size:0.75rem; font-weight:700;">Est: ${act.est}</span>
          </div>
        `;
      });
      html += `</div>`;

      output.innerHTML = html;
      this.logActivity(`AI generated 5 breakdown tasks for "${goal}".`, 'strategy');
    }, 1300);
  },

  renderProjects: function() {
    const container = document.getElementById('projects-card-grid');
    if (!container) return;

    let html = '';
    this.projects.forEach(p => {
      html += `
        <div class="biz-card col-6">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
            <div>
              <span style="background:rgba(0,240,255,0.15); color:#00f0ff; padding:3px 8px; border-radius:10px; font-size:0.72rem; font-weight:700; text-transform:uppercase;">${p.category}</span>
              <h4 style="color:#fff; font-family:'Outfit'; font-size:1.2rem; margin-top:6px;">${p.title}</h4>
            </div>
            <span style="background:rgba(16,185,129,0.15); color:#10b981; padding:4px 10px; border-radius:12px; font-size:0.75rem; font-weight:700;">${p.status}</span>
          </div>

          <div style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#94a3b8; margin-bottom:4px;">
              <span>Progress</span>
              <span>${p.progress}% Completed</span>
            </div>
            <div style="width:100%; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;">
              <div style="width:${p.progress}%; height:100%; background:var(--grad-quasar);"></div>
            </div>
          </div>

          <h5 style="color:#cbd5e1; font-size:0.82rem; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Active Activities (${p.activities.length})</h5>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${p.activities.map(a => `
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:6px;">
                <span style="color:${a.status === 'Completed' ? '#94a3b8' : '#e2e8f0'}; text-decoration:${a.status === 'Completed' ? 'line-through' : 'none'};">
                  <i class="fas ${a.status === 'Completed' ? 'fa-check-circle' : a.status === 'In Progress' ? 'fa-spinner fa-spin' : 'fa-clock'}" style="color:${a.status === 'Completed' ? '#10b981' : a.status === 'In Progress' ? '#00f0ff' : '#64748b'}; margin-right:6px;"></i>
                  ${a.name}
                </span>
                <span style="font-size:0.7rem; color:#00f0ff;">${a.agent}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Update Stats counters
    const projCount = document.getElementById('stat-total-projects');
    if (projCount) projCount.textContent = this.projects.length;
  },

  logActivity: function(text, type) {
    this.activityFeed.unshift({
      time: 'Just now',
      text: text,
      type: type
    });
    this.renderActivityFeed();
  },

  renderActivityFeed: function() {
    const feedContainer = document.getElementById('activity-feed-list');
    if (!feedContainer) return;

    let html = '';
    this.activityFeed.slice(0, 6).forEach(item => {
      html += `
        <div style="display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="width:10px; height:10px; border-radius:50%; background:#00f0ff; box-shadow:0 0 10px #00f0ff;"></div>
          <div style="flex:1;">
            <p style="font-size:0.85rem; color:#e2e8f0; margin:0;">${item.text}</p>
            <span style="font-size:0.72rem; color:#64748b;">${item.time}</span>
          </div>
        </div>
      `;
    });

    feedContainer.innerHTML = html;
  }
};
