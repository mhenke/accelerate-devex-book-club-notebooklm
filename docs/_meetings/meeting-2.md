---
layout: meeting
title: 'Meeting 2: Culture & CD'
subtitle: 'Cultivating Culture and Embracing Continuous Delivery'
week: 3
chapters: '5-8'
duration: '1 Hour'
dora_color: '#4CAF50'
---

## Westrum's Organizational Culture Types

<div class="culture-types-diagram">
  <div class="culture-card pathological">
    <div class="culture-icon"><i class="fas fa-exclamation-triangle"></i></div>
    <h3>Pathological</h3>
    <p class="culture-subtitle">Power-Oriented</p>
    <ul class="culture-traits">
      <li><i class="fas fa-times"></i> Low cooperation</li>
      <li><i class="fas fa-user-slash"></i> Messengers shot</li>
      <li><i class="fas fa-hand-paper"></i> Responsibility shirked</li>
    </ul>
  </div>
  
  <div class="culture-card bureaucratic">
    <div class="culture-icon"><i class="fas fa-clipboard-list"></i></div>
    <h3>Bureaucratic</h3>
    <p class="culture-subtitle">Rule-Oriented</p>
    <ul class="culture-traits">
      <li><i class="fas fa-chart-bar"></i> Modest cooperation</li>
      <li><i class="fas fa-user-times"></i> Messengers neglected</li>
      <li><i class="fas fa-ruler"></i> Narrow responsibilities</li>
    </ul>
  </div>
  
  <div class="culture-card generative">
    <div class="culture-icon"><i class="fas fa-rocket"></i></div>
    <h3>Generative</h3>
    <p class="culture-subtitle">Performance-Oriented</p>
    <ul class="culture-traits">
      <li><i class="fas fa-check"></i> High cooperation</li>
      <li><i class="fas fa-graduation-cap"></i> Messengers trained</li>
      <li><i class="fas fa-handshake"></i> Risks shared</li>
    </ul>
  </div>
</div>

## Culture Transformation

<div class="transformation-flow">
  <div class="flow-step">
    <div class="step-icon"><i class="fas fa-bullseye"></i></div>
    <h4>Act Your Way</h4>
    <p>Behavioral changes</p>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon"><i class="fas fa-sync-alt"></i></div>
    <h4>Into Better Culture</h4>
    <p>Cultural transformation</p>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon"><i class="fas fa-chart-line"></i></div>
    <h4>Higher Performance</h4>
    <p>Measurable results</p>
  </div>
</div>

## Continuous Delivery Core Principles

<div class="cd-principles-grid">
  <div class="principle-card quality">
    <div class="principle-icon"><i class="fas fa-tools"></i></div>
    <h4>Build Quality In</h4>
    <p>Start with quality, don't inspect later</p>
  </div>
  
  <div class="principle-card batches">
    <div class="principle-icon"><i class="fas fa-box"></i></div>
    <h4>Small Batches</h4>
    <p>Manageable, testable units</p>
  </div>
  
  <div class="principle-card automation">
    <div class="principle-icon"><i class="fas fa-robot"></i></div>
    <h4>Automate Tasks</h4>
    <p>Free humans for creative work</p>
  </div>
  
  <div class="principle-card version">
    <div class="principle-icon"><i class="fas fa-folder"></i></div>
    <h4>Version Control</h4>
    <p>All artifacts under control</p>
  </div>
  
  <div class="principle-card trunk">
    <div class="principle-icon"><i class="fas fa-code-branch"></i></div>
    <h4>Trunk-Based Dev</h4>
    <p>Short branches, frequent integration</p>
  </div>
  
  <div class="principle-card testing">
    <div class="principle-icon"><i class="fas fa-flask"></i></div>
    <h4>Test Automation</h4>
    <p>Automated testing at all levels</p>
  </div>
</div>

## Interactive Learning Checkpoint

<div class="learning-checkpoint">
  <div class="checkpoint-card culture-assessment">
    <div class="checkpoint-icon"><i class="fas fa-chart-bar"></i></div>
    <h4>Culture Assessment</h4>
    <p>Rate your organization on Westrum's model:</p>
    <div class="assessment-buttons">
      <label class="assessment-btn pathological">
        <input type="radio" name="culture-type" value="pathological">
        <span class="radio-mark"></span>
        Pathological
      </label>
      <label class="assessment-btn bureaucratic">
        <input type="radio" name="culture-type" value="bureaucratic">
        <span class="radio-mark"></span>
        Bureaucratic
      </label>
      <label class="assessment-btn generative">
        <input type="radio" name="culture-type" value="generative">
        <span class="radio-mark"></span>
        Generative
      </label>
    </div>
  </div>
  
  <div class="checkpoint-card behavioral-shifts">
    <div class="checkpoint-icon"><i class="fas fa-sync-alt"></i></div>
    <h4>Behavioral Shifts</h4>
    <p>Which practice could shift your culture?</p>
    <div class="practice-options">
      <label class="practice-item">
        <input type="radio" name="cultural-practice" value="peer-review">
        <span class="radio-mark"></span>
        <i class="fas fa-handshake"></i> Peer review over approval boards
      </label>
      <label class="practice-item">
        <input type="radio" name="cultural-practice" value="transparent-metrics">
        <span class="radio-mark"></span>
        <i class="fas fa-chart-bar"></i> Transparent metrics sharing
      </label>
      <label class="practice-item">
        <input type="radio" name="cultural-practice" value="learning-failures">
        <span class="radio-mark"></span>
        <i class="fas fa-graduation-cap"></i> Learning from failures
      </label>
      <label class="practice-item">
        <input type="radio" name="cultural-practice" value="rapid-feedback">
        <span class="radio-mark"></span>
        <i class="fas fa-bolt"></i> Rapid feedback loops
      </label>
    </div>
  </div>
  
  <div class="checkpoint-card cd-gaps">
    <div class="checkpoint-icon"><i class="fas fa-bullseye"></i></div>
    <h4>CD Priority</h4>
    <p>Which principle needs immediate attention?</p>
    <div class="cd-selector">
      <label class="cd-option">
        <input type="radio" name="cd-priority" value="build-quality">
        <span class="radio-mark"></span>
        <i class="fas fa-tools"></i> Build Quality In
      </label>
      <label class="cd-option">
        <input type="radio" name="cd-priority" value="small-batches">
        <span class="radio-mark"></span>
        <i class="fas fa-box"></i> Small Batches
      </label>
      <label class="cd-option">
        <input type="radio" name="cd-priority" value="automate">
        <span class="radio-mark"></span>
        <i class="fas fa-robot"></i> Automate Tasks
      </label>
      <label class="cd-option">
        <input type="radio" name="cd-priority" value="trunk-based">
        <span class="radio-mark"></span>
        <i class="fas fa-code-branch"></i> Trunk-Based Dev
      </label>
    </div>
  </div>
</div>

## <i class="fas fa-headphones"></i> Listen to the Meeting 2 Podcast

<audio controls>
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-2-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

## <i class="fas fa-video"></i> Watch the Meeting 2 Video

<video controls width="100%">
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-2-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

---

## Discussion Questions

1. **Culture Assessment:** Where is your organization on Westrum's model?
2. **Behavioral Shifts:** What practices could shift your culture?
3. **CD Gaps:** Which CD principles need improvement?
4. **Quick Wins:** What could be automated this month?

## Action Items for Next Meeting

- [ ] Identify your team's culture type using Westrum's model
- [ ] Find one repetitive task to automate
- [ ] Practice working in smaller batches on current work

<style>
/* Culture Types Diagram */
.culture-types-diagram {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  max-width: 1000px;
}

.culture-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.culture-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.culture-card.pathological {
  border-color: #f44336;
}

.culture-card.pathological::before {
  background: linear-gradient(90deg, #f44336, #d32f2f);
}

.culture-card.bureaucratic {
  border-color: #ff9800;
}

.culture-card.bureaucratic::before {
  background: linear-gradient(90deg, #ff9800, #f57c00);
}

.culture-card.generative {
  border-color: #4caf50;
}

.culture-card.generative::before {
  background: linear-gradient(90deg, #4caf50, #388e3c);
}

.culture-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.culture-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.culture-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.culture-subtitle {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.culture-traits {
  list-style: none;
  padding: 0;
  margin: 0;
}

.culture-traits li {
  padding: 0.5rem 0;
  font-size: 0.95rem;
  text-align: left;
}

/* Transformation Flow */
.transformation-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
  border-radius: 16px;
  border: 2px solid #4caf50;
}

.flow-step {
  text-align: center;
  flex: 1;
  max-width: 200px;
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.flow-step h4 {
  margin: 0 0 0.5rem 0;
  color: #2e7d32;
  font-size: 1.1rem;
}

.flow-step p {
  color: #4caf50;
  font-size: 0.9rem;
  margin: 0;
}

.flow-arrow {
  font-size: 2rem;
  color: #4caf50;
  font-weight: bold;
}

/* CD Principles Grid */
.cd-principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.principle-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #4caf50;
}

.principle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.principle-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.principle-card h4 {
  margin: 0 0 0.75rem 0;
  color: #2e7d32;
  font-size: 1.2rem;
  font-weight: 600;
}

.principle-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .culture-types-diagram {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .transformation-flow {
    flex-direction: column;
    gap: 1rem;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
    font-size: 1.5rem;
  }
  
  .cd-principles-grid {
    grid-template-columns: 1fr;
  }
  
  .culture-card, .principle-card {
    padding: 1.5rem;
  }
}

/* Interactive Learning Checkpoint */
.learning-checkpoint {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
  border-radius: 20px;
  border: 2px solid #4caf50;
}

.checkpoint-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.checkpoint-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(76, 175, 80, 0.2);
  border-color: #4caf50;
}

.checkpoint-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.checkpoint-card h4 {
  margin: 0 0 1rem 0;
  color: #2e7d32;
  font-size: 1.3rem;
  font-weight: 600;
}

.checkpoint-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

/* Assessment Buttons */
.assessment-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.assessment-btn {
  position: relative;
  padding: 0.75rem 1.5rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.assessment-btn input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.assessment-btn .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.assessment-btn.pathological {
  border-color: #f44336;
  color: #d32f2f;
}

.assessment-btn.pathological .radio-mark {
  border-color: #f44336;
}

.assessment-btn.pathological input:checked ~ .radio-mark {
  background: #f44336;
}

.assessment-btn.pathological input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.pathological:hover {
  background: #f44336;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.pathological:has(input:checked) {
  background: #ffebee;
  border-color: #d32f2f;
  color: #d32f2f;
}

.assessment-btn.bureaucratic {
  border-color: #ff9800;
  color: #f57c00;
}

.assessment-btn.bureaucratic .radio-mark {
  border-color: #ff9800;
}

.assessment-btn.bureaucratic input:checked ~ .radio-mark {
  background: #ff9800;
}

.assessment-btn.bureaucratic input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.bureaucratic:hover {
  background: #ff9800;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.bureaucratic:has(input:checked) {
  background: #fff8e1;
  border-color: #f57c00;
  color: #f57c00;
}

.assessment-btn.generative {
  border-color: #4caf50;
  color: #388e3c;
}

.assessment-btn.generative .radio-mark {
  border-color: #4caf50;
}

.assessment-btn.generative input:checked ~ .radio-mark {
  background: #4caf50;
}

.assessment-btn.generative input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.generative:hover {
  background: #4caf50;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.generative:has(input:checked) {
  background: #e8f5e8;
  border-color: #388e3c;
  color: #388e3c;
}

/* Practice Options */
.practice-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.practice-item {
  position: relative;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border-left: 4px solid #4caf50;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.practice-item input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.practice-item .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #4caf50;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.practice-item input:checked ~ .radio-mark {
  background: #4caf50;
}

.practice-item input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.practice-item:hover {
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.practice-item:has(input:checked) {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  border-left-color: #2e7d32;
  color: #2e7d32;
}

/* CD Selector */
.cd-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.cd-option {
  position: relative;
  padding: 1rem;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 12px;
  border: 2px solid #2196f3;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1565c0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cd-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.cd-option .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #2196f3;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.cd-option input:checked ~ .radio-mark {
  background: #2196f3;
}

.cd-option input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.cd-option:hover {
  background: linear-gradient(135deg, #2196f3, #42a5f5);
  color: white;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(33, 150, 243, 0.3);
}

.cd-option:has(input:checked) {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-color: #1565c0;
  color: #1565c0;
  font-weight: 600;
}

/* Responsive Design for Checkpoint */
@media (max-width: 768px) {
  .learning-checkpoint {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
  
  .cd-selector {
    grid-template-columns: 1fr;
  }
  
  .assessment-buttons {
    gap: 0.5rem;
  }
  
  .practice-options {
    gap: 0.5rem;
  }
}
}
</style>