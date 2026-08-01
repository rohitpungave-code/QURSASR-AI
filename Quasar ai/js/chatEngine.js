/* ==========================================================================
   QUASAR AI - CHAT ENGINE MODULE (ChatGPT-Style Experience)
   ========================================================================== */

const ChatEngine = {
  activeModel: 'Quasar Prime 4.5',
  isGenerating: false,

  // Intelligent Response Generator Matrix
  aiKnowledgeBase: {
    business: [
      "Here is a strategic analysis for your business request:\n\n### 1. Value Proposition & Positioning\n- Establish a clear USP (Unique Selling Proposition) targeting your core demographic.\n- Build trust through transparent pricing, social proof, and rapid customer support.\n\n### 2. Go-To-Market (GTM) Strategy\n- **Direct Sales & Outbound**: Target key decision makers via automated LinkedIn & Cold Email sequences.\n- **Content Marketing**: Produce high-authority blog posts, industry whitepapers, and video breakdown tutorials.\n- **Paid Acquisition**: Run hyper-targeted Search Ads (Google Ads) and retargeting ads on Meta/LinkedIn.\n\n```json\n{\n  \"recommended_launch_budget\": \"$2,500 - $5,000\",\n  \"expected_payback_period\": \"3 to 5 Months\",\n  \"key_metrics\": [\"CAC\", \"LTV\", \"MRR Growth\"]\n}\n```",

      "To scale your venture efficiently, consider these essential milestones:\n1. **Validation Phase**: Run pre-orders or MVP landing page tests.\n2. **Unit Economics Optimization**: Ensure gross margin remains above 65%.\n3. **Automation**: Implement AI agents for customer service and leads qualification."
    ],
    coding: [
      "Here is the optimized implementation for your request:\n\n```javascript\n// Quasar AI High-Performance Utility\nasync function processStreamData(inputPayload) {\n  const startTime = performance.now();\n  try {\n    const response = await fetch('/api/v1/quasar/process', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer QUASAR_KEY_7720'\n      },\n      body: JSON.stringify(inputPayload)\n    });\n    const data = await response.json();\n    console.log(`Execution completed in ${Math.round(performance.now() - startTime)}ms`);\n    return data;\n  } catch (err) {\n    console.error('Quasar Engine Error:', err);\n  }\n}\n```\n\nThis function handles async requests safely with execution timing loggers."
    ],
    general: [
      "I am **Quasar AI**, your advanced AI copilot powered by multi-agent intelligence. How can I help propel your project, business, or code today?",
      "Analyzing your request across our AI Brain matrix... Here is the structured resolution:\n\n- **Key Insight**: Success relies on execution velocity and continuous feedback loops.\n- **Action Item**: Break down your roadmap into 7-day sprint objectives.\n- **AI Recommendation**: Utilize our **BizBrain Entrepreneur Hub** for automated financial modeling and pitch generation!"
    ]
  },

  // Initialize Chat Events
  init: function() {
    const sendBtn = document.getElementById('btn-chat-send');
    const textarea = document.getElementById('chat-input-field');
    const voiceBtn = document.getElementById('btn-voice-input');

    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.handleSendMessage());
    }

    if (textarea) {
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSendMessage();
        }
      });
      // Auto-resize
      textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
      });
    }

    if (voiceBtn) {
      voiceBtn.addEventListener('click', () => this.startVoiceRecognition());
    }
  },

  setModel: function(modelName) {
    this.activeModel = modelName;
    const label = document.getElementById('current-model-label');
    if (label) label.textContent = modelName;
  },

  handleSendMessage: function() {
    const textarea = document.getElementById('chat-input-field');
    if (!textarea || this.isGenerating) return;

    const message = textarea.value.trim();
    if (!message) return;

    // Reset input
    textarea.value = '';
    textarea.style.height = '24px';

    // Hide welcome card if visible
    const welcomeCard = document.getElementById('chat-welcome-card');
    if (welcomeCard) welcomeCard.style.display = 'none';

    // Append User Message
    this.appendMessage('user', message);

    // AI Processing
    this.isGenerating = true;
    this.showTypingIndicator();

    setTimeout(() => {
      this.removeTypingIndicator();
      const responseText = this.generateResponse(message);
      this.appendStreamingMessage('ai', responseText);
    }, 1200);
  },

  appendMessage: function(sender, text) {
    const history = document.getElementById('chat-history-container');
    if (!history) return;

    const row = document.createElement('div');
    row.className = `message-row ${sender}`;
    
    const avatarContent = sender === 'ai' ? '<i class="fas fa-brain"></i>' : '<i class="fas fa-user"></i>';
    
    row.innerHTML = `
      <div class="message-avatar">${avatarContent}</div>
      <div class="message-bubble">${this.formatMarkdown(text)}</div>
    `;

    history.appendChild(row);
    history.scrollTop = history.scrollHeight;
  },

  appendStreamingMessage: function(sender, fullText) {
    const history = document.getElementById('chat-history-container');
    if (!history) return;

    const row = document.createElement('div');
    row.className = `message-row ${sender}`;

    row.innerHTML = `
      <div class="message-avatar"><i class="fas fa-brain"></i></div>
      <div class="message-bubble" id="streaming-active-bubble"></div>
    `;

    history.appendChild(row);
    const bubble = document.getElementById('streaming-active-bubble');

    let idx = 0;
    const speed = 15;

    const interval = setInterval(() => {
      idx += 3;
      if (idx >= fullText.length) {
        idx = fullText.length;
        clearInterval(interval);
        this.isGenerating = false;
        bubble.removeAttribute('id');
        // Speech TTS Synthesis Option
        this.addTTSButton(bubble, fullText);
      }
      bubble.innerHTML = this.formatMarkdown(fullText.substring(0, idx));
      history.scrollTop = history.scrollHeight;
    }, speed);
  },

  showTypingIndicator: function() {
    const history = document.getElementById('chat-history-container');
    if (!history) return;

    const indicator = document.createElement('div');
    indicator.id = 'typing-indicator-row';
    indicator.className = 'message-row ai';
    indicator.innerHTML = `
      <div class="message-avatar"><i class="fas fa-brain"></i></div>
      <div class="message-bubble" style="display: flex; gap: 6px; align-items: center;">
        <span class="dot" style="width: 8px; height: 8px; background: #00f0ff; border-radius: 50%; animation: pulse 1s infinite alternate;"></span>
        <span class="dot" style="width: 8px; height: 8px; background: #8a2be2; border-radius: 50%; animation: pulse 1s infinite alternate 0.3s;"></span>
        <span class="dot" style="width: 8px; height: 8px; background: #ec4899; border-radius: 50%; animation: pulse 1s infinite alternate 0.6s;"></span>
        <span style="font-size: 0.8rem; color: #94a3b8; margin-left: 6px;">${this.activeModel} is thinking...</span>
      </div>
    `;
    history.appendChild(indicator);
    history.scrollTop = history.scrollHeight;
  },

  removeTypingIndicator: function() {
    const elem = document.getElementById('typing-indicator-row');
    if (elem) elem.remove();
  },

  generateResponse: function(prompt) {
    const lower = prompt.toLowerCase();
    if (lower.includes('business') || lower.includes('plan') || lower.includes('profit') || lower.includes('money') || lower.includes('market') || lower.includes('startup') || lower.includes('bussnest')) {
      return this.aiKnowledgeBase.business[Math.floor(Math.random() * this.aiKnowledgeBase.business.length)];
    } else if (lower.includes('code') || lower.includes('javascript') || lower.includes('python') || lower.includes('html') || lower.includes('build')) {
      return this.aiKnowledgeBase.coding[0];
    }
    return this.aiKnowledgeBase.general[Math.floor(Math.random() * this.aiKnowledgeBase.general.length)];
  },

  formatMarkdown: function(text) {
    let formatted = text
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gim, '<h3 style="color:#00f0ff; margin:10px 0 6px 0;">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 style="color:#fbbf24; margin:12px 0 8px 0;">$1</h2>')
      .replace(/^- (.*$)/gim, '<li style="margin-left: 18px;">$1</li>');
    return formatted;
  },

  addTTSButton: function(bubble, text) {
    const btn = document.createElement('button');
    btn.className = 'btn-icon';
    btn.style.cssText = 'margin-top: 10px; font-size: 0.8rem; color: #00f0ff; gap: 4px; display: inline-flex; align-items: center; cursor: pointer;';
    btn.innerHTML = '<i class="fas fa-volume-up"></i> Listen';
    btn.onclick = () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]*>?/gm, ''));
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Text-to-speech is not supported on this browser.');
      }
    };
    bubble.appendChild(btn);
  },

  startVoiceRecognition: function() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice Speech Recognition is not supported by your browser. Try Google Chrome or Edge.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    const voiceBtn = document.getElementById('btn-voice-input');
    if (voiceBtn) voiceBtn.style.color = '#f43f5e';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const inputField = document.getElementById('chat-input-field');
      if (inputField) {
        inputField.value = transcript;
      }
      if (voiceBtn) voiceBtn.style.color = '#94a3b8';
    };

    recognition.onerror = () => {
      if (voiceBtn) voiceBtn.style.color = '#94a3b8';
    };

    recognition.start();
  }
};
