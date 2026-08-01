/* ==========================================================================
   QUASAR AI - MAIN APPLICATION ENTRY POINT & ROUTER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  QuasarApp.init();
});

const QuasarApp = {
  activeTab: 'pane-chat',

  init: function() {
    this.bindNavigation();
    this.bindModelSelector();
    this.bindPromptSuggestions();

    // Initialize Child Subsystems
    if (typeof ChatEngine !== 'undefined') ChatEngine.init();
    if (typeof BizBrain !== 'undefined') BizBrain.init();
    if (typeof AgentHub !== 'undefined') AgentHub.init();
    if (typeof BrandStudio !== 'undefined') BrandStudio.init();
    if (typeof ProjectHub !== 'undefined') ProjectHub.init();

    console.log('⚡ QUASAR AI System Ready.');
  },

  bindNavigation: function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const targetPaneId = item.dataset.pane;
        if (!targetPaneId) return;

        // Active State update
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        // Tab Switching
        const panes = document.querySelectorAll('.tab-pane');
        panes.forEach(p => p.classList.remove('active'));

        const targetPane = document.getElementById(targetPaneId);
        if (targetPane) {
          targetPane.classList.add('active');
          this.activeTab = targetPaneId;

          // Auto-render financial chart if switching to BizBrain
          if (targetPaneId === 'pane-biz') {
            setTimeout(() => {
              if (typeof BizBrain !== 'undefined') BizBrain.calculateFinancials();
            }, 200);
          }
        }
      });
    });
  },

  bindModelSelector: function() {
    const dropdownBtn = document.getElementById('model-selector-btn');
    const menu = document.getElementById('model-dropdown-menu');

    if (dropdownBtn && menu) {
      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      });

      document.addEventListener('click', () => {
        menu.style.display = 'none';
      });

      const options = menu.querySelectorAll('.model-option');
      options.forEach(opt => {
        opt.addEventListener('click', () => {
          const modelName = opt.dataset.model;
          ChatEngine.setModel(modelName);
          menu.style.display = 'none';
        });
      });
    }
  },

  bindPromptSuggestions: function() {
    const cards = document.querySelectorAll('.suggestion-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const prompt = card.dataset.prompt;
        const inputField = document.getElementById('chat-input-field');
        if (inputField) {
          inputField.value = prompt;
          ChatEngine.handleSendMessage();
        }
      });
    });
  }
};
