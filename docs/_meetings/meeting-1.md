---
layout: meeting
title: 'Meeting 1: Foundation'
subtitle: 'Laying the Foundation – The Myth and the Measurement'
week: 1
chapters: '1-3'
duration: '1 Hour'
dora_color: '#1E3A8A'
---

## <i class="fas fa-video"></i> Watch the Meeting 1 Video

<video controls width="100%">
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-1-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

## <i class="fas fa-headphones"></i> Listen to the Meeting 1 Podcast

<audio controls>
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-1-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

## Key Insights

<div class="insights-grid">
  <div class="insight-card">
    <h4><i class="fas fa-microscope"></i> Evidence-Based</h4>
    <p>Rigorous research backing all findings</p>
  </div>
  
  <div class="insight-card">
    <h4><i class="fas fa-medal"></i> Competitive Advantage</h4>
    <p>Software delivery capability drives success</p>
  </div>
  
  <div class="insight-card">
    <h4><i class="fas fa-user-check"></i> Process Not People</h4>
    <p>Anxiety signals inefficiency, not failure</p>
  </div>
</div>

### The Four DORA Metrics

<div class="dora-metrics-grid">
  <div class="metric-card lead-time">
    <h3><i class="fas fa-chart-line"></i> Delivery Lead Time</h3>
    <p class="metric-description">Time from code commit to production deployment</p>
    <div class="metric-goal">Goal: Hours/Days not Weeks/Months</div>
  </div>
  
  <div class="metric-card deploy-frequency">
    <h3><i class="fas fa-rocket"></i> Deployment Frequency</h3>
    <p class="metric-description">How often code gets deployed to production</p>
    <div class="metric-goal">Goal: Multiple times per day</div>
  </div>
  
  <div class="metric-card restore-time">
    <h3><i class="fas fa-clock"></i> Time to Restore Service</h3>
    <p class="metric-description">How quickly service is restored after incidents</p>
    <div class="metric-goal">Goal: Under 1 hour</div>
  </div>
  
  <div class="metric-card change-fail">
    <h3><i class="fas fa-exclamation-triangle"></i> Change Fail Rate</h3>
    <p class="metric-description">Percentage of deployments causing failures</p>
    <div class="metric-goal">Goal: 0-15%</div>
  </div>
</div>

### Speed vs Stability: The Myth Busted

<div class="myth-buster">
  <div class="myth-side">
    <h3><i class="fas fa-times-circle"></i> Old Thinking</h3>
    <div class="myth-content">
      <p><strong>Either Fast OR Stable</strong></p>
      <ul>
        <li><i class="fas fa-turtle"></i> Slow = Safe</li>
        <li><i class="fas fa-running"></i> Fast = Risky</li>
        <li><i class="fas fa-balance-scale"></i> Must choose one</li>
      </ul>
    </div>
  </div>
  
  <div class="vs-divider">
    <span>VS</span>
  </div>
  
  <div class="reality-side">
    <h3><i class="fas fa-check-circle"></i> Research Reality</h3>
    <div class="reality-content">
      <p><strong>Both Fast AND Stable</strong></p>
      <div class="performance-stats">
        <div class="stat-item">
          <i class="fas fa-rocket"></i>
          <strong>46x</strong> more frequent deployments
        </div>
        <div class="stat-item">
          <i class="fas fa-clock"></i>
          <strong>440x</strong> faster lead time
        </div>
        <div class="stat-item">
          <i class="fas fa-tools"></i>
          <strong>170x</strong> faster recovery
        </div>
        <div class="stat-item">
          <i class="fas fa-shield-alt"></i>
          <strong>5x</strong> lower change fail rate
        </div>
      </div>
      <ul>
        <li><i class="fas fa-bolt"></i> Speed enables stability</li>
        <li><i class="fas fa-shield-alt"></i> Stability enables speed</li>
        <li><i class="fas fa-chart-bar"></i> High performers excel at both</li>
      </ul>
    </div>
  </div>
</div>

## Deployment Pain → Solution Flow

<div class="deployment-flow">
  <div class="flow-problem">
    <h4><i class="fas fa-frown"></i> Deployment Anxiety</h4>
    <ul>
      <li>Fear before releases</li>
      <li>Manual processes</li>
      <li>Unpredictable outcomes</li>
    </ul>
  </div>
  
  <div class="flow-arrow">→</div>
  
  <div class="flow-solution">
    <h4><i class="fas fa-bullseye"></i> DevOps Practices</h4>
    <ul>
      <li>Automated pipelines</li>
      <li>Small, frequent changes</li>
      <li>Rapid feedback loops</li>
    </ul>
  </div>
  
  <div class="flow-arrow">→</div>
  
  <div class="flow-result">
    <h4><i class="fas fa-trophy"></i> Confident Deployments</h4>
    <ul>
      <li>Predictable releases</li>
      <li>Faster recovery</li>
      <li>Better business outcomes</li>
    </ul>
  </div>
</div>

## Interactive Learning Checkpoint

<div class="learning-checkpoint">
  <div class="checkpoint-card dora-assessment">
    <h4><i class="fas fa-chart-line"></i> DORA Metrics Assessment</h4>
    <p>Rate your team's current performance on the four key metrics:</p>
    <div class="assessment-buttons">
      <label class="assessment-btn high-performance">
        <input type="radio" name="dora-performance" value="high">
        <span class="radio-mark"></span>
        High Performance
      </label>
      <label class="assessment-btn medium-performance">
        <input type="radio" name="dora-performance" value="medium">
        <span class="radio-mark"></span>
        Medium Performance
      </label>
      <label class="assessment-btn low-performance">
        <input type="radio" name="dora-performance" value="low">
        <span class="radio-mark"></span>
        Low Performance
      </label>
    </div>
    <div class="feedback-area" id="dora-feedback">
      <p>Select your team's performance level to understand improvement opportunities.</p>
    </div>
  </div>
  
  <div class="checkpoint-card deployment-anxiety">
    <h4><i class="fas fa-heart"></i> Deployment Confidence</h4>
    <p>How does your team feel about deployments?</p>
    <div class="confidence-options">
      <label class="confidence-item anxious">
        <input type="radio" name="deployment-confidence" value="anxious">
        <span class="radio-mark"></span>
        <i class="fas fa-frown"></i> Anxious & Stressful
      </label>
      <label class="confidence-item neutral">
        <input type="radio" name="deployment-confidence" value="neutral">
        <span class="radio-mark"></span>
        <i class="fas fa-meh"></i> Manageable but Tense
      </label>
      <label class="confidence-item confident">
        <input type="radio" name="deployment-confidence" value="confident">
        <span class="radio-mark"></span>
        <i class="fas fa-smile"></i> Confident & Routine
      </label>
    </div>
    <div class="feedback-area" id="confidence-feedback">
      <p>Select how your team feels about deployments to get targeted improvement suggestions.</p>
    </div>
  </div>
  
  <div class="checkpoint-card improvement-priority">
    <h4><i class="fas fa-bullseye"></i> Improvement Priority</h4>
    <p>Which DORA metric should your team focus on first?</p>
    <div class="priority-selector">
      <label class="priority-option">
        <input type="radio" name="improvement-focus" value="lead-time">
        <span class="radio-mark"></span>
        <i class="fas fa-chart-line"></i> Lead Time
      </label>
      <label class="priority-option">
        <input type="radio" name="improvement-focus" value="deploy-frequency">
        <span class="radio-mark"></span>
        <i class="fas fa-rocket"></i> Deploy Frequency
      </label>
      <label class="priority-option">
        <input type="radio" name="improvement-focus" value="restore-time">
        <span class="radio-mark"></span>
        <i class="fas fa-clock"></i> Restore Time
      </label>
      <label class="priority-option">
        <input type="radio" name="improvement-focus" value="change-fail">
        <span class="radio-mark"></span>
        <i class="fas fa-exclamation-triangle"></i> Change Fail Rate
      </label>
    </div>
    <div class="feedback-area" id="priority-feedback">
      <p>Choose which metric needs the most attention to get specific improvement strategies.</p>
    </div>
  </div>

  <div class="checkpoint-card culture-assessment">
    <h4><i class="fas fa-users"></i> Culture Assessment</h4>
    <p>Assess your organization's culture type using Westrum's model:</p>
    
    <div class="culture-selector">
      <div class="culture-option pathological-option">
        <input type="radio" name="culture-type" value="pathological" id="culture-pathological">
        <label for="culture-pathological">
          <span class="radio-mark"></span>
          <div class="option-content">
            <div class="option-header">
              <i class="fas fa-exclamation-triangle"></i>
              <strong>Pathological</strong>
            </div>
            <div class="option-description">Power-oriented, low cooperation, blame culture</div>
          </div>
        </label>
      </div>
      
      <div class="culture-option bureaucratic-option">
        <input type="radio" name="culture-type" value="bureaucratic" id="culture-bureaucratic">
        <label for="culture-bureaucratic">
          <span class="radio-mark"></span>
          <div class="option-content">
            <div class="option-header">
              <i class="fas fa-clipboard-list"></i>
              <strong>Bureaucratic</strong>
            </div>
            <div class="option-description">Rule-oriented, modest cooperation, rules over mission</div>
          </div>
        </label>
      </div>
      
      <div class="culture-option generative-option">
        <input type="radio" name="culture-type" value="generative" id="culture-generative">
        <label for="culture-generative">
          <span class="radio-mark"></span>
          <div class="option-content">
            <div class="option-header">
              <i class="fas fa-rocket"></i>
              <strong>Generative</strong>
            </div>
            <div class="option-description">Performance-oriented, high cooperation, mission focused</div>
          </div>
        </label>
      </div>
    </div>
    
    <div class="feedback-area" id="culture-feedback">
      <p>Select your organization's culture type to see how it impacts delivery performance.</p>
    </div>
  </div>
</div>
</div>

---

## Discussion Questions

1. **Current State Assessment:** How would you rate your team on each DORA metric?
2. **Speed vs. Stability Myths:** What examples have you seen of assumed trade-offs in your organization?
3. **Deployment Pain Points:** Describe your team's current deployment experience and anxiety levels
4. **Culture Indicators:** Using Westrum's model, what culture type best describes your organization?

## Action Items for Next Meeting

<ul class="action-items">
<li>[ ] Begin informal tracking of one DORA metric for your team</li>
<li>[ ] Identify your biggest deployment pain point</li>
<li>[ ] Observe examples of pathological, bureaucratic, or generative culture behaviors</li>
</ul>

## Related Resources

### DORA Research & Assessment

- [2024 State of DevOps Report](https://dora.dev/research/2024/dora-report/) - Latest DORA findings and industry benchmarks
- [DORA Research Program](https://dora.dev/) - Official DORA website with comprehensive research
- [DORA Quick Check Assessment](https://dora.dev/quickcheck/) - Self-assessment tool for your team
- [DORA Capabilities Overview](https://dora.dev/capabilities/) - Technical and cultural capabilities framework

### Westrum Organizational Culture

- [Westrum Organizational Culture Types](https://dora.dev/capabilities/generative-organizational-culture/) - DORA culture implementation guide
- [IT Revolution Westrum Model](https://itrevolution.com/articles/westrums-organizational-model-in-tech-orgs/) - Detailed explanation of culture types
- [Generative Culture Assessment](https://continuousdelivery.com/implementing/culture/) - Practical culture implementation guide

### Foundation Books & Resources

- [Accelerate Book](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339) - The source material for our book club
- [State of DevOps Report Archive](https://dora.dev/research/) - Historical DevOps research and trends
- [DevOps Research and Assessment](https://cloud.google.com/blog/products/devops-sre/the-2021-accelerate-state-of-devops-report-addresses-burnout-team-performance) - Google Cloud DORA insights

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
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border: 2px solid #cbd5e1;
}

.nav-item.next {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border: 2px solid #1E3A8A;
}

.nav-item.next:hover {
  background: linear-gradient(135deg, #1E3A8A, #1d4ed8);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
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

/* Interactive Learning Checkpoint */
.learning-checkpoint {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-radius: 16px;
  border: 2px solid #1E3A8A;
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
  box-shadow: 0 12px 35px rgba(30, 58, 138, 0.2);
  border-color: #1E3A8A;
}

.checkpoint-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  color: #1e40af;
}

.checkpoint-card h4 {
  margin: 0 0 1rem 0;
  color: #1e40af;
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
  margin-bottom: 1.5rem;
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

.assessment-btn.high-performance {
  border-color: #1E3A8A;
  color: #1e40af;
}

.assessment-btn.high-performance .radio-mark {
  border-color: #1E3A8A;
}

.assessment-btn.high-performance input:checked ~ .radio-mark {
  background: #1E3A8A;
}

.assessment-btn.high-performance input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.high-performance:has(input:checked) {
  background: #dbeafe;
  border-color: #1e40af;
  color: #1e40af;
}

.assessment-btn.medium-performance {
  border-color: #1E3A8A;
  color: #1e40af;
}

.assessment-btn.medium-performance .radio-mark {
  border-color: #1E3A8A;
}

.assessment-btn.medium-performance input:checked ~ .radio-mark {
  background: #1E3A8A;
}

.assessment-btn.medium-performance input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.medium-performance:has(input:checked) {
  background: #dbeafe;
  border-color: #1e40af;
  color: #1e40af;
}

.assessment-btn.low-performance {
  border-color: #f44336;
  color: #d32f2f;
}

.assessment-btn.low-performance .radio-mark {
  border-color: #f44336;
}

.assessment-btn.low-performance input:checked ~ .radio-mark {
  background: #f44336;
}

.assessment-btn.low-performance input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.low-performance:has(input:checked) {
  background: #dbeafe;
  border-color: #d32f2f;
  color: #d32f2f;
}

/* Confidence Options */
.confidence-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.confidence-item {
  position: relative;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border-left: 4px solid #1E3A8A;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.confidence-item input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.confidence-item .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #1E3A8A;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.confidence-item input:checked ~ .radio-mark {
  background: #1E3A8A;
}

.confidence-item input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.confidence-item:hover {
  background: linear-gradient(135deg, #1E3A8A, #3730a3);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
}

.confidence-item:has(input:checked) {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-left-color: #1e40af;
  color: #1e40af;
}

/* Priority Selector */
.priority-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.priority-option {
  position: relative;
  padding: 1rem;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-radius: 12px;
  border: 2px solid #1E3A8A;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e40af;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.priority-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.priority-option .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #1E3A8A;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.priority-option input:checked ~ .radio-mark {
  background: #1E3A8A;
}

.priority-option input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.priority-option:hover {
  background: linear-gradient(135deg, #1E3A8A, #3730a3);
  color: white;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(30, 58, 138, 0.3);
}

.priority-option:has(input:checked) {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-color: #1e40af;
  color: #1e40af;
  font-weight: 600;
}

/* Feedback Areas */
.feedback-area {
  margin-top: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  border-left: 4px solid #1E3A8A;
  min-height: 60px;
  transition: all 0.3s ease;
}

.feedback-area p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.feedback-area h5 {
  margin: 0 0 0.5rem 0;
  color: #1e40af;
  font-size: 1rem;
  font-weight: 600;
}

.feedback-area.active {
  border-left-color: #1E3A8A;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
}

/* Culture Assessment Styling */
.culture-selector {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.culture-option {
  position: relative;
}

.culture-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.culture-option label {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.culture-option .radio-mark {
  width: 20px;
  height: 20px;
  border: 2px solid #64748b;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
}

.culture-option input:checked ~ label .radio-mark {
  background: #1E3A8A;
  border-color: #1E3A8A;
}

.culture-option input:checked ~ label .radio-mark:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  transform: translate(-50%, -50%);
}

.culture-option .option-content {
  flex: 1;
}

.culture-option .option-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

.culture-option .option-header i {
  width: 16px;
  text-align: center;
}

.culture-option .option-description {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.4;
}

.culture-option label:hover {
  background: linear-gradient(135deg, #e0f2fe, #bae6fd);
  border-color: #0ea5e9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
}

.culture-option input:checked ~ label {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-color: #1E3A8A;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.15);
}

.culture-option input:checked ~ label .option-header {
  color: #1E3A8A;
}

.culture-option input:checked ~ label .option-description {
  color: #3730a3;
}

/* Specific culture type colors */
.pathological-option input:checked ~ label {
  background: linear-gradient(135deg, #fef2f2, #fecaca);
  border-color: #dc2626;
}

.pathological-option input:checked ~ label .radio-mark {
  background: #dc2626;
  border-color: #dc2626;
}

.pathological-option input:checked ~ label .option-header {
  color: #dc2626;
}

.bureaucratic-option input:checked ~ label {
  background: linear-gradient(135deg, #fef3c7, #fbbf24);
  border-color: #d97706;
}

.bureaucratic-option input:checked ~ label .radio-mark {
  background: #d97706;
  border-color: #d97706;
}

.bureaucratic-option input:checked ~ label .option-header {
  color: #d97706;
}

.generative-option input:checked ~ label {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-color: #16a34a;
}

.generative-option input:checked ~ label .radio-mark {
  background: #16a34a;
  border-color: #16a34a;
}

.generative-option input:checked ~ label .option-header {
  color: #16a34a;
}

/* Responsive Design for Checkpoint */
@media (max-width: 768px) {
  .learning-checkpoint {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .priority-selector {
    grid-template-columns: 1fr;
  }
  
  .assessment-buttons {
    gap: 0.5rem;
  }
  
  .confidence-options {
    gap: 0.5rem;
  }
}

/* DORA Metrics Grid */
.dora-metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 1.5rem 0;
  max-width: 900px;
}

.metric-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.metric-card.lead-time {
  border-color: #1E3A8A;
}

.metric-card.lead-time::before {
  background: linear-gradient(90deg, #1E3A8A, #1d4ed8);
}

.metric-card.deploy-frequency {
  border-color: #1E3A8A;
}

.metric-card.deploy-frequency::before {
  background: linear-gradient(90deg, #1E3A8A, #1d4ed8);
}

.metric-card.restore-time {
  border-color: #1E3A8A;
}

.metric-card.restore-time::before {
  background: linear-gradient(90deg, #1E3A8A, #1d4ed8);
}

.metric-card.change-fail {
  border-color: #f44336;
}

.metric-card.change-fail::before {
  background: linear-gradient(90deg, #f44336, #d32f2f);
}

.metric-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* Icons integrated into headers */
h3 i, h4 i {
  margin-right: 0.5rem;
  color: inherit;
}

.metric-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.metric-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
}

.metric-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

.metric-goal {
  background: rgba(30, 58, 138, 0.1);
  color: #1d4ed8;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Myth Buster Section */
.myth-buster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-radius: 12px;
  border: 2px solid #1E3A8A;
}

.myth-side, .reality-side {
  flex: 1;
  text-align: center;
}

.myth-icon, .reality-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.myth-side h3, .reality-side h3 {
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.myth-side h3 {
  color: #d32f2f;
}

.reality-side h3 {
  color: #2e7d32;
}

.myth-content p, .reality-content p {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.myth-content ul, .reality-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.myth-content li, .reality-content li {
  padding: 0.3rem 0;
  font-size: 0.95rem;
}

.vs-divider {
  font-size: 2rem;
  font-weight: bold;
  color: #1E3A8A;
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #1E3A8A;
}

/* Deployment Flow */
.deployment-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-radius: 12px;
  border: 2px solid #1E3A8A;
}

.flow-problem, .flow-solution, .flow-result {
  flex: 1;
  text-align: center;
  max-width: 250px;
}

.problem-icon, .solution-icon, .result-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.flow-problem h4, .flow-solution h4, .flow-result h4 {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e40af;
}

.flow-problem ul, .flow-solution ul, .flow-result ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.flow-problem li, .flow-solution li, .flow-result li {
  padding: 0.25rem 0;
}

.flow-arrow {
  font-size: 2rem;
  color: #1E3A8A;
  font-weight: bold;
}

/* Insights Grid */
.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
}

.insight-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #1E3A8A;
}

.insight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.insight-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.insight-card h4 {
  margin: 0 0 0.75rem 0;
  color: #1e40af;
  font-size: 1.1rem;
  font-weight: 600;
}

.insight-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dora-metrics-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .myth-buster {
    flex-direction: column;
    gap: 1rem;
  }
  
  .vs-divider {
    transform: rotate(90deg);
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .deployment-flow {
    flex-direction: column;
    gap: 1rem;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
    font-size: 1.5rem;
  }
  
  .insights-grid {
    grid-template-columns: 1fr;
  }
  
  .metric-card, .insight-card {
    padding: 1.5rem;
  }
  
  .myth-side, .reality-side {
    max-width: 100%;
  }
}

/* Westrum Culture Types Styling */
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

.culture-card.pathological .culture-icon {
  color: #f44336;
}

.culture-card.bureaucratic {
  border-color: #1E3A8A;
}

.culture-card.bureaucratic::before {
  background: linear-gradient(90deg, #1E3A8A, #1d4ed8);
}

.culture-card.bureaucratic .culture-icon {
  color: #1E3A8A;
}

.culture-card.generative {
  border-color: #1E3A8A;
}

.culture-card.generative::before {
  background: linear-gradient(90deg, #1E3A8A, #1d4ed8);
}

.culture-card.generative .culture-icon {
  color: #1E3A8A;
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
  padding: 0.4rem 0;
  font-size: 0.9rem;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.culture-traits li i {
  width: 16px;
  text-align: center;
  flex-shrink: 0;
}

/* Performance Statistics Styling */
.performance-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 2px solid #dbeafe;
  border-bottom: 2px solid #dbeafe;
}

.stat-item {
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: #1e40af;
  font-weight: 500;
}

.stat-item i {
  font-size: 1.2rem;
  color: #1E3A8A;
}

.stat-item strong {
  font-size: 1.1rem;
  color: #1e40af;
}

@media (max-width: 768px) {
  .culture-types-diagram {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .performance-stats {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .stat-item {
    font-size: 0.8rem;
  }
}

/* Action Items Styling */
.action-items {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.action-items li {
  display: block;
  padding: 0.5rem 0;
  font-weight: 500;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Feedback content from Accelerate research
  const doraInfo = {
    high: {
      title: "High-Performing Team",
      content: "Your team demonstrates elite software delivery performance! High-performing organizations deploy multiple times per day, have lead times under one hour, restore service in under an hour, and have change failure rates under 15%. Focus on maintaining these practices and sharing knowledge with other teams."
    },
    medium: {
      title: "Medium-Performing Team", 
      content: "Your team shows solid DevOps practices with room for improvement. Medium performers typically deploy weekly to monthly, have lead times of days to weeks, and change failure rates of 16-45%. Focus on reducing batch sizes, improving test automation, and increasing deployment frequency."
    },
    low: {
      title: "Low-Performing Team",
      content: "Your team has significant opportunities for improvement. Low performers deploy monthly to every six months, have lead times of months, take days to weeks to restore service, and have change failure rates of 46-60%. Start with version control, deployment automation, and continuous integration basics."
    }
  };

  const confidenceInfo = {
    anxious: {
      title: "Deployment Anxiety Signals Process Problems",
      content: "According to Accelerate research, deployment pain is not inevitable—it's a signal of poor practices. Anxiety indicates manual processes, large batch sizes, and insufficient testing. Start with small improvements: add one test, create a deployment checklist, or implement basic monitoring."
    },
    neutral: {
      title: "Manageable Deployments with Improvement Potential",
      content: "Your team manages deployments but still experiences tension. This suggests some good practices are in place but opportunities remain. Focus on increasing deployment frequency, reducing batch sizes, and building more comprehensive automated testing to move toward confident deployments."
    },
    confident: {
      title: "Confident Deployment Culture",
      content: "Excellent! Confident, routine deployments indicate strong DevOps practices. Your team likely has good test automation, deployment automation, and monitoring. Continue refining these practices and help other teams achieve similar confidence through knowledge sharing."
    }
  };

  const priorityInfo = {
    "lead-time": {
      title: "Improve Lead Time",
      content: "Lead time measures the time from code commit to production. To improve: reduce batch sizes, implement trunk-based development, automate testing and deployment pipelines, and eliminate manual approval processes. Small, frequent changes reduce lead time significantly."
    },
    "deploy-frequency": {
      title: "Increase Deployment Frequency",
      content: "Deployment frequency indicates your ability to deliver value quickly. To improve: work in smaller batches, implement feature flags, improve automated testing, and reduce dependencies between teams. Start by deploying weekly, then progress to daily deployments."
    },
    "restore-time": {
      title: "Reduce Mean Time to Restore",
      content: "Faster recovery from failures is crucial for stability. To improve: implement comprehensive monitoring and alerting, practice incident response procedures, improve rollback capabilities, and maintain good documentation. Preparation enables rapid response when issues occur."
    },
    "change-fail": {
      title: "Lower Change Failure Rate", 
      content: "High change failure rates indicate quality issues in your delivery process. To improve: implement comprehensive automated testing, use test-driven development, improve code review processes, and implement continuous integration. Quality must be built in, not inspected later."
    }
  };
  
  // Add event listeners for DORA performance assessment
  document.querySelectorAll('input[name="dora-performance"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('dora-feedback');
      const info = doraInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Add event listeners for deployment confidence
  document.querySelectorAll('input[name="deployment-confidence"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('confidence-feedback');
      const info = confidenceInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Add event listeners for improvement focus
  document.querySelectorAll('input[name="improvement-focus"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('priority-feedback');
      const info = priorityInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Culture assessment feedback content
  const cultureInfo = {
    pathological: {
      title: "Pathological Culture (Type A)",
      content: "Organizations with pathological culture tend to have lower software delivery performance. This culture is characterized by low cooperation, messengers being 'shot', shared responsibility being discouraged, and failure leading to scapegoating. Research shows these organizations typically have longer lead times, higher change failure rates, and slower recovery times. Focus on building psychological safety and encouraging learning from failures.",
      impact: "📉 Lower delivery performance, higher failure rates"
    },
    bureaucratic: {
      title: "Bureaucratic Culture (Type B)", 
      content: "Bureaucratic cultures show modest cooperation but are rule-oriented rather than mission-focused. These organizations often have medium software delivery performance with room for improvement. While better than pathological cultures, they can still benefit from reducing red tape, encouraging innovation, and focusing more on outcomes than processes.",
      impact: "📊 Medium delivery performance, process-heavy"
    },
    generative: {
      title: "Generative Culture (Type C)",
      content: "Congratulations! Generative culture is strongly correlated with high software delivery performance. Organizations with generative culture encourage high cooperation, treat failures as learning opportunities, encourage risk-taking, and focus on mission accomplishment. Research shows these organizations have faster lead times, higher deployment frequency, lower change failure rates, and faster recovery times.",
      impact: "📈 High delivery performance, continuous improvement"
    }
  };

  // Add event listeners for culture assessment
  document.querySelectorAll('input[name="culture-type"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('culture-feedback');
      const info = cultureInfo[this.value];
      feedback.innerHTML = `
        <h5>${info.title}</h5>
        <p><strong>${info.impact}</strong></p>
        <p>${info.content}</p>
      `;
      feedback.classList.add('active');
    });
  });
});
</script>
