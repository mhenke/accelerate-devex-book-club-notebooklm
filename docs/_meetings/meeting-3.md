---
layout: meeting
title: 'Meeting 3: Management & Sustainability'
subtitle: 'Management, Product Development & Sustainability'
week: 5
chapters: '7-10'
duration: '1 Hour'
dora_color: '#FF9800'
---

## <i class="fas fa-video"></i> Watch the Meeting 3 Video

<video controls width="100%">
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-3-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

## <i class="fas fa-headphones"></i> Listen to the Meeting 3 Podcast

<audio controls>
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-3-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

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

## Microsoft Research: Work-Life Balance Impact

<div class="microsoft-stats">
  <div class="stat-highlight">
    <div class="stat-icon"><i class="fas fa-balance-scale"></i></div>
    <div class="stat-content">
      <div class="stat-numbers">
        <span class="before-stat">38%</span>
        <i class="fas fa-arrow-right"></i>
        <span class="after-stat">75%</span>
      </div>
      <h4>Work-Life Balance Satisfaction</h4>
      <p>Microsoft teams implementing DevOps practices saw dramatic improvements in work-life balance satisfaction scores</p>
    </div>
  </div>
</div>

## Team Architecture Assessment

<div class="architecture-assessment">
  <div class="assessment-card dependency-map">
    <div class="assessment-icon"><i class="fas fa-map"></i></div>
    <h4>Dependency Mapping</h4>
    <p>Identify team dependencies that slow you down:</p>
    <div class="dependency-examples">
      <label class="dependency-item high-impact">
        <input type="radio" name="dependency-type" value="shared-database">
        <span class="radio-mark"></span>
        <i class="fas fa-circle" style="color: #f44336;"></i> Shared database
      </label>
      <label class="dependency-item medium-impact">
        <input type="radio" name="dependency-type" value="release-coordination">
        <span class="radio-mark"></span>
        <i class="fas fa-circle" style="color: #ffc107;"></i> Release coordination
      </label>
      <label class="dependency-item low-impact">
        <input type="radio" name="dependency-type" value="independent-services">
        <span class="radio-mark"></span>
        <i class="fas fa-circle" style="color: #4caf50;"></i> Independent services
      </label>
    </div>
    <div class="feedback-area" id="dependency-feedback">
      <p>Select dependencies to understand their impact on software delivery performance.</p>
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
        <input type="radio" name="wip-method" value="task-lists">
        <span class="radio-mark"></span>
        <i class="fas fa-clipboard-list"></i> Task lists
      </label>
      <label class="wip-option">
        <input type="radio" name="wip-method" value="kanban">
        <span class="radio-mark"></span>
        <i class="fas fa-columns"></i> Kanban board
      </label>
      <label class="wip-option">
        <input type="radio" name="wip-method" value="sprint">
        <span class="radio-mark"></span>
        <i class="fas fa-chart-line"></i> Sprint board
      </label>
      <label class="wip-option">
        <input type="radio" name="wip-method" value="none">
        <span class="radio-mark"></span>
        <i class="fas fa-question"></i> No tracking
      </label>
    </div>
    <div class="feedback-area" id="wip-feedback">
      <p>Select your WIP tracking methods to learn about their effectiveness in lean software delivery.</p>
    </div>
  </div>
</div>

## Practical Exercises

<div class="practical-exercises">
  <div class="exercise-card dependency-mapping">
    <div class="exercise-icon"><i class="fas fa-project-diagram"></i></div>
    <h4>Dependency Mapping Exercise</h4>
    <p>Map current dependencies between teams and systems:</p>
    <div class="exercise-steps">
      <div class="step-item">
        <div class="step-number">1</div>
        <div class="step-content">
          <h5>Identify Your Services</h5>
          <p>List all services/systems your team owns or depends on</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">2</div>
        <div class="step-content">
          <h5>Map Dependencies</h5>
          <p>Draw connections showing which services depend on others</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">3</div>
        <div class="step-content">
          <h5>Rate Impact</h5>
          <p>Color-code dependencies: Red (blocks deployment), Yellow (coordination required), Green (independent)</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="exercise-card bottleneck-identification">
    <div class="exercise-icon"><i class="fas fa-funnel-dollar"></i></div>
    <h4>Bottleneck Identification</h4>
    <p>Identify bottlenecks in current change approval processes:</p>
    <div class="exercise-steps">
      <div class="step-item">
        <div class="step-number">1</div>
        <div class="step-content">
          <h5>Map Current Process</h5>
          <p>Document every step from code commit to production deployment</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">2</div>
        <div class="step-content">
          <h5>Time Each Step</h5>
          <p>Record average time for each approval/review stage</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">3</div>
        <div class="step-content">
          <h5>Find Bottlenecks</h5>
          <p>Identify which steps take longest or block progress most frequently</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="exercise-card wip-assessment">
    <div class="exercise-icon"><i class="fas fa-clipboard-check"></i></div>
    <h4>WIP Limits Assessment</h4>
    <p>Assess current WIP limits and visualization practices:</p>
    <div class="exercise-steps">
      <div class="step-item">
        <div class="step-number">1</div>
        <div class="step-content">
          <h5>Count Current WIP</h5>
          <p>Inventory all work currently in progress across team members</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">2</div>
        <div class="step-content">
          <h5>Visualize Flow</h5>
          <p>Create a simple board showing To Do, Doing, Blocked, Done columns</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">3</div>
        <div class="step-content">
          <h5>Set WIP Limits</h5>
          <p>Establish limits for each column based on team size and capacity</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Discussion Questions

1. **Lean Practices Assessment:** Which lean management practices do you currently use? What's missing?
2. **Work Visualization:** How does your team currently visualize WIP and quality metrics?
3. **Change Approval Reality:** Describe your current change approval process - who's involved and how long does it take?
4. **Burnout Indicators:** What signs of deployment pain or burnout do you observe in your team?
5. **Employee Engagement:** How would your team score on employee Net Promoter Score?

## Action Items for Next Meeting

[ ] Experiment with visualizing work using simple kanban board
[ ] Identify one change approval step that could be streamlined
[ ] Observe and document burnout risk factors in your environment

## 🧭 Navigation

<style>
/* Meeting Navigation */
.meeting-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  border-radius: 16px;
  border: 2px solid #9ca3af;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #4b5563;
}

.nav-item.prev {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border: 2px solid #16a34a;
}

.nav-item.prev:hover {
  background: linear-gradient(135deg, #16a34a, #15803d);
  color: white;
  transform: translateX(-4px);
  box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);
}

.nav-item.next {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border: 2px solid #3b82f6;
}

.nav-item.next:hover {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.nav-item a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-item i {
  font-size: 1.2rem;
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

/* Microsoft Stats */
.microsoft-stats {
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e8eaf6, #c5cae9);
  border-radius: 16px;
  border: 2px solid #3f51b5;
}

.stat-highlight {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 8px 25px rgba(63, 81, 181, 0.1);
  transition: all 0.3s ease;
}

.stat-highlight:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(63, 81, 181, 0.2);
}

.stat-icon {
  font-size: 3.5rem;
  color: #3f51b5;
  text-align: center;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-numbers {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.before-stat {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f44336;
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: 2px solid #f44336;
}

.after-stat {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4caf50;
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: 2px solid #4caf50;
}

.stat-numbers i {
  font-size: 1.5rem;
  color: #3f51b5;
}

.stat-content h4 {
  margin: 0 0 0.5rem 0;
  color: #1a237e;
  font-size: 1.4rem;
  font-weight: 600;
}

.stat-content p {
  margin: 0;
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

/* Practical Exercises */
.practical-exercises {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  border-radius: 16px;
  border: 2px solid #9c27b0;
}

.exercise-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #9c27b0;
}

.exercise-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(156, 39, 176, 0.2);
}

.exercise-icon {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #9c27b0;
}

.exercise-card h4 {
  margin: 0 0 1rem 0;
  color: #7b1fa2;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.exercise-card > p {
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
}

.exercise-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.step-item:hover {
  background: linear-gradient(135deg, #9c27b0, #8e24aa);
  color: white;
  transform: translateX(4px);
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9c27b0, #7b1fa2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h5 {
  margin: 0 0 0.5rem 0;
  color: #7b1fa2;
  font-size: 1rem;
  font-weight: 600;
}

.step-item:hover .step-content h5 {
  color: white;
}

.step-content p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
}

.step-item:hover .step-content p {
  color: rgba(255, 255, 255, 0.9);
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
  position: relative;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dependency-item input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.dependency-item .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.dependency-item.high-impact {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  border-left: 4px solid #f44336;
}

.dependency-item.high-impact .radio-mark {
  border-color: #f44336;
}

.dependency-item.high-impact input:checked ~ .radio-mark {
  background: #f44336;
}

.dependency-item.high-impact input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.dependency-item.high-impact:has(input:checked) {
  background: linear-gradient(135deg, #ffcdd2, #ffabab);
  border-left-color: #d32f2f;
}

.dependency-item.medium-impact {
  background: linear-gradient(135deg, #fff8e1, #ffecb3);
  border-left: 4px solid #ffc107;
}

.dependency-item.medium-impact .radio-mark {
  border-color: #ffc107;
}

.dependency-item.medium-impact input:checked ~ .radio-mark {
  background: #ffc107;
}

.dependency-item.medium-impact input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.dependency-item.medium-impact:has(input:checked) {
  background: linear-gradient(135deg, #ffecb3, #ffe082);
  border-left-color: #f57c00;
}

.dependency-item.low-impact {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  border-left: 4px solid #4caf50;
}

.dependency-item.low-impact .radio-mark {
  border-color: #4caf50;
}

.dependency-item.low-impact input:checked ~ .radio-mark {
  background: #4caf50;
}

.dependency-item.low-impact input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.dependency-item.low-impact:has(input:checked) {
  background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
  border-left-color: #388e3c;
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

.wip-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.wip-option .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #ff9800;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.wip-option input:checked ~ .radio-mark {
  background: #ff9800;
}

.wip-option input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.wip-option input:checked {
  background: linear-gradient(135deg, #4caf50, #388e3c);
  border-color: #2e7d32;
}

.wip-option:has(input:checked) {
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  border-color: #ff9800;
  color: #e65100;
}

/* Responsive Design */
@media (max-width: 768px) {
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
  
  .stat-highlight {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .stat-numbers {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .before-stat, .after-stat {
    font-size: 2rem;
  }
  
  .practical-exercises {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .exercise-card {
    padding: 1.5rem;
  }
  
  .step-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
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
  
  // Dependency feedback content from Accelerate research
  const dependencyInfo = {
    "shared-database": {
      title: "Shared Database Dependency",
      content: "Shared databases create tight coupling between teams and services. According to Accelerate research, this significantly impacts deployment frequency and lead time. Teams must coordinate changes, creating bottlenecks and reducing autonomy. Consider database-per-service patterns or careful schema evolution strategies."
    },
    "release-coordination": {
      title: "Release Coordination Dependency", 
      content: "When teams must coordinate releases, it indicates architectural coupling and reduces deployment frequency. The Accelerate book emphasizes that high-performing teams can deploy independently. Consider trunk-based development, feature flags, and backward-compatible API changes to eliminate coordination needs."
    },
    "independent-services": {
      title: "Independent Services",
      content: "Independent services enable loose coupling and autonomous team operation. This architectural pattern correlates with high software delivery performance in Accelerate research. Teams can test, deploy, and scale services independently, leading to faster lead times and higher deployment frequency."
    }
  };

  const wipInfo = {
    "task-lists": {
      title: "Task Lists for WIP Tracking",
      content: "Simple task lists provide basic visibility but lack flow optimization. While better than no tracking, they don't enforce WIP limits or highlight bottlenecks. Consider evolving to visual systems that limit work in progress and make flow problems visible."
    },
    "kanban": {
      title: "Kanban Boards",
      content: "Kanban boards excel at visualizing flow and limiting WIP. They align with lean principles from manufacturing that influenced DevOps practices. The visual nature helps identify bottlenecks and optimize flow. According to Accelerate research, teams that limit batch sizes and visualize work achieve better performance."
    },
    "sprint": {
      title: "Sprint/Scrum Boards", 
      content: "Sprint boards provide time-boxed visibility and can work well when integrated with continuous delivery practices. The key is maintaining small batch sizes within sprints. Accelerate research shows that working in small batches - regardless of framework - correlates with higher performance."
    },
    "none": {
      title: "No WIP Tracking",
      content: "Without WIP visualization, teams lose critical visibility into flow and bottlenecks. This makes it difficult to identify improvement opportunities and limits the ability to optimize delivery. Consider implementing basic Kanban visualization as a first step toward better flow management."
    }
  };
  
  // Add event listeners for dependency radio buttons
  document.querySelectorAll('input[name="dependency-type"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('dependency-feedback');
      const info = dependencyInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Add event listeners for WIP method radio buttons
  document.querySelectorAll('input[name="wip-method"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('wip-feedback');
      const info = wipInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });
});
</script>
