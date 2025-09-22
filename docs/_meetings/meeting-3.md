---
layout: meeting
title: 'Meeting 3: Architecture'
subtitle: 'Architecture, Autonomy, and Lean Thinking'
week: 5
chapters: '9-12'
duration: '1 Hour'
dora_color: '#FF9800'
---

## Architecture: Tightly Coupled vs Loosely Coupled

<div class="architecture-comparison">
  <div class="arch-side tight-coupled">
    <div class="arch-icon"><i class="fas fa-link"></i></div>
    <h3>Tightly Coupled</h3>
    <div class="arch-content">
      <p><strong>High Dependencies</strong></p>
      <ul>
        <li><i class="fas fa-ban"></i> Teams block each other</li>
        <li><i class="fas fa-phone"></i> Constant coordination needed</li>
        <li><i class="fas fa-turtle"></i> Slower deployment cycles</li>
        <li><i class="fas fa-fire"></i> Cascading failures</li>
      </ul>
    </div>
  </div>
  
  <div class="vs-divider">
    <span>VS</span>
  </div>
  
  <div class="arch-side loose-coupled">
    <div class="arch-icon"><i class="fas fa-puzzle-piece"></i></div>
    <h3>Loosely Coupled</h3>
    <div class="arch-content">
      <p><strong>Independent Teams</strong></p>
      <ul>
        <li><i class="fas fa-check"></i> Autonomous team work</li>
        <li><i class="fas fa-rocket"></i> Faster feature delivery</li>
        <li><i class="fas fa-shield-alt"></i> Isolated failures</li>
        <li><i class="fas fa-chart-line"></i> Better scalability</li>
      </ul>
    </div>
  </div>
</div>

## Lean Management Principles in Action

<div class="lean-principles-board">
  <div class="principle-column wip">
    <div class="column-header">
      <div class="column-icon"><i class="fas fa-traffic-light"></i></div>
      <h4>Limit WIP</h4>
    </div>
    <div class="principle-cards">
      <div class="principle-item">Focus on fewer items</div>
      <div class="principle-item">Reduce context switching</div>
      <div class="principle-item">Drive process improvement</div>
    </div>
  </div>
  
  <div class="principle-column visualize">
    <div class="column-header">
      <div class="column-icon"><i class="fas fa-eye"></i></div>
      <h4>Visualize Work</h4>
    </div>
    <div class="principle-cards">
      <div class="principle-item">Kanban boards</div>
      <div class="principle-item">Burndown charts</div>
      <div class="principle-item">Team dashboards</div>
    </div>
  </div>
  
  <div class="principle-column approval">
    <div class="column-header">
      <div class="column-icon"><i class="fas fa-users"></i></div>
      <h4>Peer Review</h4>
    </div>
    <div class="principle-cards">
      <div class="principle-item">Lightweight approval</div>
      <div class="principle-item">Team ownership</div>
      <div class="principle-item">Faster decisions</div>
    </div>
  </div>
  
  <div class="principle-column feedback">
    <div class="column-header">
      <div class="column-icon"><i class="fas fa-sync-alt"></i></div>
      <h4>Fast Feedback</h4>
    </div>
    <div class="principle-cards">
      <div class="principle-item">Customer input</div>
      <div class="principle-item">Quick iterations</div>
      <div class="principle-item">Data-driven choices</div>
    </div>
  </div>
</div>

## Employee Satisfaction Formula

<div class="satisfaction-formula">
  <div class="formula-component">
    <div class="component-icon"><i class="fas fa-bullseye"></i></div>
    <h4>Meaningful Work</h4>
    <p>Appropriate challenges</p>
  </div>
  <div class="formula-plus">+</div>
  <div class="formula-component">
    <div class="component-icon"><i class="fas fa-graduation-cap"></i></div>
    <h4>Learning</h4>
    <p>Growth opportunities</p>
  </div>
  <div class="formula-plus">+</div>
  <div class="formula-component">
    <div class="component-icon"><i class="fas fa-handshake"></i></div>
    <h4>Support</h4>
    <p>Team culture</p>
  </div>
  <div class="formula-plus">+</div>
  <div class="formula-component">
    <div class="component-icon"><i class="fas fa-tools"></i></div>
    <h4>Right Tools</h4>
    <p>Resource access</p>
  </div>
  <div class="formula-equals">=</div>
  <div class="formula-result">
    <div class="result-icon"><i class="fas fa-smile"></i></div>
    <h4>High Satisfaction</h4>
    <p>Better performance</p>
  </div>
</div>

## Team Architecture Assessment

<div class="architecture-assessment">
  <div class="assessment-card dependency-map">
    <div class="assessment-icon"><i class="fas fa-map"></i></div>
    <h4>Dependency Mapping</h4>
    <p>Identify team dependencies that slow you down:</p>
    <div class="dependency-examples">
      <div class="dependency-item"><i class="fas fa-circle" style="color: #f44336;"></i> Shared database</div>
      <div class="dependency-item"><i class="fas fa-circle" style="color: #ffc107;"></i> Release coordination</div>
      <div class="dependency-item"><i class="fas fa-circle" style="color: #4caf50;"></i> Independent services</div>
    </div>
  </div>
  
  <div class="assessment-card tool-autonomy">
    <div class="assessment-icon"><i class="fas fa-palette"></i></div>
    <h4>Tool Freedom</h4>
    <p>Rate your team's tool selection autonomy:</p>
    <div class="autonomy-slider">
      <div class="slider-labels">
        <span>Restricted</span>
        <span>Flexible</span>
        <span>Full Freedom</span>
      </div>
      <div class="slider-track" id="tool-slider">
        <div class="slider-thumb" id="tool-thumb"></div>
      </div>
      <div class="slider-feedback" id="slider-feedback">
        <p>Move the slider to assess your team's tool autonomy level</p>
      </div>
    </div>
  </div>
  
  <div class="assessment-card wip-current">
    <div class="assessment-icon"><i class="fas fa-chart-bar"></i></div>
    <h4>WIP Visualization</h4>
    <p>How do you currently track work in progress?</p>
    <div class="wip-options">
      <label class="wip-option">
        <input type="checkbox" name="wip-method" value="task-lists">
        <span class="checkmark"></span>
        <i class="fas fa-clipboard-list"></i> Task lists
      </label>
      <label class="wip-option">
        <input type="checkbox" name="wip-method" value="kanban">
        <span class="checkmark"></span>
        <i class="fas fa-columns"></i> Kanban board
      </label>
      <label class="wip-option">
        <input type="checkbox" name="wip-method" value="sprint">
        <span class="checkmark"></span>
        <i class="fas fa-chart-line"></i> Sprint board
      </label>
      <label class="wip-option">
        <input type="checkbox" name="wip-method" value="none">
        <span class="checkmark"></span>
        <i class="fas fa-question"></i> No tracking
      </label>
    </div>
  </div>
</div>

## <i class="fas fa-headphones"></i> Listen to the Meeting 3 Podcast

<audio controls>
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-3-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

## <i class="fas fa-video"></i> Watch the Meeting 3 Video

<video controls width="100%">
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-3-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

---

## Discussion Questions

1. **Architecture Assessment:** How well does your current architecture enable independent team work?
2. **Tool Autonomy:** What level of tool selection freedom do teams currently have?
3. **Lean Practices:** Which lean management practices are you currently using? Which could be adopted?
4. **WIP Visibility:** How do you currently visualize and limit work in progress?
5. **Developer Satisfaction:** What factors most impact job satisfaction in your organization?

## Action Items for Next Meeting

- [ ] Map one architectural dependency that slows your team
- [ ] Experiment with WIP limits on your current board
- [ ] Identify one approval process for peer review

<style>
/* Architecture Comparison */
.architecture-comparison {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  border-radius: 16px;
  border: 2px solid #ff9800;
}

.arch-side {
  flex: 1;
  text-align: center;
}

.arch-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.arch-side h3 {
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.tight-coupled h3 {
  color: #d32f2f;
}

.loose-coupled h3 {
  color: #2e7d32;
}

.arch-content p {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.arch-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.arch-content li {
  padding: 0.3rem 0;
  font-size: 0.95rem;
}

.vs-divider {
  font-size: 2rem;
  font-weight: bold;
  color: #ff9800;
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ff9800;
}

/* Lean Principles Board */
.lean-principles-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
  border-radius: 16px;
  border: 2px solid #4caf50;
}

.principle-column {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.principle-column:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.column-header {
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.column-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.column-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.principle-cards {
  padding: 1rem;
}

.principle-item {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  transition: all 0.3s ease;
  cursor: pointer;
}

.principle-item:hover {
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  transform: translateX(4px);
}

.principle-item:last-child {
  margin-bottom: 0;
}

/* Satisfaction Formula */
.satisfaction-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 16px;
  border: 2px solid #2196f3;
  flex-wrap: wrap;
}

.formula-component, .formula-result {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-width: 120px;
}

.formula-component:hover, .formula-result:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.2);
}

.component-icon, .result-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.formula-component h4, .formula-result h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1565c0;
}

.formula-component p, .formula-result p {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.formula-plus, .formula-equals {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff9800;
}

.formula-result {
  border: 3px solid #4caf50;
}

.formula-result h4 {
  color: #2e7d32;
}

/* Architecture Assessment */
.architecture-assessment {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.assessment-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #ff9800;
}

.assessment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(255, 152, 0, 0.2);
}

.assessment-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
  text-align: center;
}

.assessment-card h4 {
  margin: 0 0 1rem 0;
  color: #e65100;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.assessment-card p {
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Dependency Examples */
.dependency-examples {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dependency-item {
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.dependency-item:nth-child(1) {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  border-left: 4px solid #f44336;
}

.dependency-item:nth-child(2) {
  background: linear-gradient(135deg, #fff8e1, #ffecb3);
  border-left: 4px solid #ffc107;
}

.dependency-item:nth-child(3) {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  border-left: 4px solid #4caf50;
}

/* Tool Autonomy Slider */
.autonomy-slider {
  margin-top: 1rem;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.slider-track {
  height: 6px;
  background: linear-gradient(90deg, #f44336, #ffc107, #4caf50);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
}

.slider-thumb {
  width: 20px;
  height: 20px;
  background: white;
  border: 3px solid #ff9800;
  border-radius: 50%;
  position: absolute;
  top: -7px;
  left: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.slider-thumb:hover {
  transform: scale(1.2);
  border-color: #e65100;
}

.slider-feedback {
  margin-top: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  border-left: 4px solid #ff9800;
  min-height: 60px;
  transition: all 0.3s ease;
}

.slider-feedback p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

/* WIP Options */
.wip-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.wip-option {
  position: relative;
  padding: 0.75rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.wip-option:hover {
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  border-color: #e65100;
  transform: scale(1.02);
}

.wip-option input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.wip-option .checkmark {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.wip-option input:checked ~ .checkmark {
  background-color: #4caf50;
  border-color: #4caf50;
}

.wip-option input:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  display: block;
  left: 4px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.wip-option input:checked {
  background: linear-gradient(135deg, #4caf50, #388e3c);
  border-color: #2e7d32;
}

.wip-option:has(input:checked) {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  border-color: #4caf50;
  color: #2e7d32;
}

/* Responsive Design */
@media (max-width: 768px) {
  .architecture-comparison {
    flex-direction: column;
    gap: 1rem;
  }
  
  .vs-divider {
    transform: rotate(90deg);
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .lean-principles-board {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .satisfaction-formula {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .formula-plus, .formula-equals {
    transform: rotate(90deg);
  }
  
  .architecture-assessment {
    grid-template-columns: 1fr;
  }
  
  .wip-options {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .lean-principles-board {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('tool-slider');
  const thumb = document.getElementById('tool-thumb');
  const feedback = document.getElementById('slider-feedback');
  
  let isDragging = false;
  
  const feedbackMessages = {
    restricted: {
      title: "Restricted Tool Selection",
      content: "Teams must use pre-approved tools only. This can limit innovation but ensures standardization and security compliance. Common in highly regulated environments."
    },
    flexible: {
      title: "Flexible Tool Selection", 
      content: "Teams have some choice in tools within defined categories or approval processes. Balances innovation with governance. Allows experimentation with oversight."
    },
    freedom: {
      title: "Full Tool Freedom",
      content: "Teams can choose any tools that help them deliver value. Maximizes autonomy and innovation but requires strong practices around security and integration."
    }
  };
  
  function updateSlider(clientX) {
    const rect = slider.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    thumb.style.left = percentage + '%';
    
    let level, color;
    if (percentage < 33) {
      level = 'restricted';
      color = '#f44336';
    } else if (percentage < 67) {
      level = 'flexible';
      color = '#ffc107';
    } else {
      level = 'freedom';
      color = '#4caf50';
    }
    
    thumb.style.borderColor = color;
    feedback.style.borderLeftColor = color;
    feedback.innerHTML = `<h5 style="margin: 0 0 0.5rem 0; color: ${color}; font-size: 1rem;">${feedbackMessages[level].title}</h5><p style="margin: 0; font-size: 0.85rem; line-height: 1.4;">${feedbackMessages[level].content}</p>`;
  }
  
  function startDrag(clientX) {
    isDragging = true;
    updateSlider(clientX);
    document.body.style.userSelect = 'none';
  }
  
  function stopDrag() {
    isDragging = false;
    document.body.style.userSelect = '';
  }
  
  // Mouse events
  thumb.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startDrag(e.clientX);
  });
  
  slider.addEventListener('click', (e) => {
    if (!isDragging) {
      updateSlider(e.clientX);
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      e.preventDefault();
      updateSlider(e.clientX);
    }
  });
  
  document.addEventListener('mouseup', stopDrag);
  
  // Touch events for mobile
  thumb.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrag(e.touches[0].clientX);
  });
  
  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      e.preventDefault();
      updateSlider(e.touches[0].clientX);
    }
  });
  
  document.addEventListener('touchend', stopDrag);
  
  // Initialize with default message
  updateSlider(slider.getBoundingClientRect().left + (slider.getBoundingClientRect().width * 0.5));
});
</script>