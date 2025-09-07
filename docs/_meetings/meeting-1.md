---
layout: meeting
title: 'Meeting 1: Foundation'
subtitle: 'Laying the Foundation – The Myth and the Measurement'
week: 1
chapters: '1-3'
duration: '1 Hour'
dora_color: '#1E3A8A'
---

{% include reusable-media-video.html 
  meeting_number="1"
  video_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-video.mp4"
%}

{% include reusable-media-podcast.html 
  meeting_number="1"
  audio_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-podcast.m4a"
%}

### Key Insights

<div class="insights-grid" markdown="0">
  {% include insight-card.html icon="fas fa-microscope" title="Evidence-Based" description="Rigorous research backing all findings" %}
  {% include insight-card.html icon="fas fa-medal" title="Competitive Advantage" description="Software delivery capability drives success" theme="success" %}
  {% include insight-card.html icon="fas fa-user-check" title="Process Not People" description="Anxiety signals inefficiency, not failure" theme="info" %}
</div>

#### The Four DORA Metrics

<div class="dora-metrics-grid" markdown="0">
  {% include reusable-metric-card.html type="lead-time" icon="fas fa-chart-line" title="Delivery Lead Time" description="Time from code commit to production deployment" goal="Hours/Days not Weeks/Months" %}
  {% include reusable-metric-card.html type="deploy-frequency" icon="fas fa-rocket" title="Deployment Frequency" description="How often code gets deployed to production" goal="Multiple times per day" %}
  {% include reusable-metric-card.html type="restore-time" icon="fas fa-clock" title="Time to Restore Service" description="How quickly service is restored after incidents" goal="Under 1 hour" %}
  {% include reusable-metric-card.html type="change-fail" icon="fas fa-exclamation-triangle" title="Change Fail Rate" description="Percentage of deployments causing failures" goal="0-15%" %}
</div>

#### Speed vs Stability: The Myth Busted

<div class="myth-buster" markdown="0">
  <div class="myth-side" markdown="0">
    <h3><i class="fas fa-times-circle"></i> Old Thinking</h3>
    <div class="myth-content" markdown="0">
      <p><strong>Either Fast OR Stable</strong></p>
      <ul>
        <li><i class="fas fa-turtle"></i> Slow = Safe</li>
        <li><i class="fas fa-running"></i> Fast = Risky</li>
        <li><i class="fas fa-balance-scale"></i> Must choose one</li>
      </ul>
    </div>
  </div>

  <div class="vs-divider" markdown="0">
    <span>VS</span>
  </div>

  <div class="reality-side" markdown="0">
    <h3><i class="fas fa-check-circle"></i> Research Reality</h3>
    <div class="reality-content" markdown="0">
      <p><strong>Both Fast AND Stable</strong></p>
      <div class="performance-stats" markdown="0">
        <div class="stat-item" markdown="0">
          <i class="fas fa-rocket"></i>
          <strong>46x</strong> more frequent deployments
        </div>
        <div class="stat-item" markdown="0">
          <i class="fas fa-clock"></i>
          <strong>440x</strong> faster lead time
        </div>
        <div class="stat-item" markdown="0">
          <i class="fas fa-tools"></i>
          <strong>170x</strong> faster recovery
        </div>
        <div class="stat-item" markdown="0">
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

### Deployment Pain → Solution Flow

<div class="deployment-flow" markdown="0">
  <div class="flow-problem" markdown="0">
    <h4><i class="fas fa-frown"></i> Deployment Anxiety</h4>
    <ul>
      <li>Fear before releases</li>
      <li>Manual processes</li>
      <li>Unpredictable outcomes</li>
    </ul>
  </div>

  <div class="flow-arrow" markdown="0">→</div>

  <div class="flow-solution" markdown="0">
    <h4><i class="fas fa-bullseye"></i> DevOps Practices</h4>
    <ul>
      <li>Automated pipelines</li>
      <li>Small, frequent changes</li>
      <li>Rapid feedback loops</li>
    </ul>
  </div>

  <div class="flow-arrow" markdown="0">→</div>

  <div class="flow-result" markdown="0">
    <h4><i class="fas fa-trophy"></i> Confident Deployments</h4>
    <ul>
      <li>Predictable releases</li>
      <li>Faster recovery</li>
      <li>Better business outcomes</li>
    </ul>
  </div>
</div>

### Interactive Learning Checkpoint

<div class="learning-checkpoint" markdown="0">
  <div class="checkpoint-card dora-assessment" markdown="0">
    <h4><i class="fas fa-chart-line"></i> DORA Metrics Assessment</h4>
    <p>Rate your team's current performance on the four key metrics:</p>
    <div class="assessment-buttons" markdown="0">
      <label class="assessment-btn performance-high">
        <input type="radio" name="dora-performance" value="high">
        <span class="radio-mark"></span>
        High Performance
      </label>
      <label class="assessment-btn performance-medium">
        <input type="radio" name="dora-performance" value="medium">
        <span class="radio-mark"></span>
        Medium Performance
      </label>
      <label class="assessment-btn performance-low">
        <input type="radio" name="dora-performance" value="low">
        <span class="radio-mark"></span>
        Low Performance
      </label>
    </div>
    <div class="feedback-area" id="dora-feedback">
      <p>Select your team's performance level to understand improvement opportunities.</p>
    </div>
  </div>

  {% include checkpoint-card.html 
    title="Deployment Confidence"
    icon="fas fa-heart"
    question="How does your team feel about deployments?"
    answers=site.data.checkpoint_answers.deployment_confidence
    feedback_id="confidence-feedback"
    radio_name="deployment-confidence"
    card_class="deployment-anxiety"
    default_feedback="Select how your team feels about deployments to get targeted improvement suggestions."
  %}

  {% include checkpoint-grid.html 
    title="Improvement Priority"
    icon="fas fa-bullseye"
    question="Which DORA metric should your team focus on first?"
    layout="grid-2"
    answers=site.data.checkpoint_answers.improvement_priority
    feedback_id="priority-feedback"
    radio_name="improvement-focus"
    card_class="improvement-priority"
    default_feedback="Choose which metric needs the most attention to get specific improvement strategies."
  %}

  {% include culture-checkpoint.html 
    title="Culture Assessment"
    icon="fas fa-users"
    question="Assess your organization's culture type using Westrum's model:"
    culture_types=site.data.checkpoint_answers.westrum_culture_types
    feedback_id="culture-feedback"
    radio_name="culture-type"
    card_class="culture-assessment"
    default_feedback="Select your organization's culture type to see how it impacts delivery performance."
  %}
</div>

### Discussion Questions

<div class="discussion-questions-grid" markdown="0">
  {% include discussion-card.html icon="fas fa-chart-line" title="Current State Assessment" question="How would you rate your team on each DORA metric?" prompts="Deployment frequency|Lead time for changes|Time to restore service|Change failure rate" %}
  {% include discussion-card.html icon="fas fa-balance-scale" title="Speed vs. Stability Myths" question="What examples have you seen of assumed trade-offs in your organization?" prompts="We can't deploy frequently because...|Quality requires slow releases|Fast delivery means cutting corners" theme="warning" %}
  {% include discussion-card.html icon="fas fa-rocket" title="Deployment Pain Points" question="Describe your team's current deployment experience and anxiety levels" prompts="What causes deployment anxiety?|Manual steps and coordination needed|Frequency and timing of deployments" theme="primary" %}
  {% include discussion-card.html icon="fas fa-users" title="Culture Indicators" question="Using Westrum's model, what culture type best describes your organization?" prompts="How do you handle failure and learning?|Information sharing and collaboration|Risk-taking and innovation support" theme="neutral" %}
</div>

## Action Items for Next Meeting

<div class="action-items-grid" markdown="0">
  {% include reusable-action-card.html 
    icon="fas fa-chart-line"
    title="Start tracking ONE DORA metric this week"
    question="Which metric will reveal your team's biggest opportunity?"
    details="Pick deployment frequency, lead time, MTTR, or change failure rate. Use a simple spreadsheet or notes. The goal is baseline measurement, not perfection."
    action_items="Choose one DORA metric to track|Set up basic measurement tracking|Document baseline numbers|Review weekly for patterns"
    checkbox_id="metric-tracking"
    theme="primary"
  %}

  {% include reusable-action-card.html 
    icon="fas fa-exclamation-triangle"
    title="Document your #1 deployment pain point"
    question="What makes your team anxious before releases?"
    details="Write down the manual steps, coordination needed, and how it impacts work-life balance. Be specific about what happens when things go wrong."
    action_items="Identify main deployment anxiety source|Document manual steps involved|Note coordination requirements|Record impact on work-life balance"
    checkbox_id="pain-point"
    theme="warning"
  %}

  {% include reusable-action-card.html 
    icon="fas fa-users"
    title="Culture detective mode"
    question="Observe 3 team interactions - Are you pathological, bureaucratic, or generative?"
    details="Watch how failures are discussed in meetings. Note information sharing patterns. Do you see blame or learning? Cooperation or silos?"
    action_items="Observe failure discussions in meetings|Note information sharing patterns|Look for blame vs learning responses|Document cooperation vs silo behaviors"
    checkbox_id="culture-observe"
    theme="success"
  %}
</div>

### Related Resources

<div class="resource-grid" markdown="0">
  {% include reusable-resource-card.html icon="fas fa-chart-line" title="DORA Research & Assessment" links="2024 State of DevOps Report|https://dora.dev/research/2024/dora-report/|DORA Research Program|https://dora.dev/|DORA Quick Check Assessment|https://dora.dev/quickcheck/|DORA Capabilities Overview|https://dora.dev/capabilities/" theme="research" show_external_icons=true %}
  {% include reusable-resource-card.html icon="fas fa-users" title="Westrum Organizational Culture" links="Westrum Organizational Culture Types|https://dora.dev/capabilities/generative-organizational-culture/|IT Revolution Westrum Model|https://itrevolution.com/articles/westrums-organizational-model-in-tech-orgs/|Generative Culture Assessment|https://continuousdelivery.com/implementing/culture/" theme="culture" show_external_icons=true %}
</div>

<style>
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
  padding: 1rem 1.5rem;
  border: 2px solid #ddd;
  
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 48px;
  min-width: 48px;
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

/* Reusable Performance Level Styles */
.performance-high:has(input:checked) {
  background: linear-gradient(135deg, #e8f8f5, #d1f2eb);
  border-color: #28a745;
  color: #155724;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.4);
}

.performance-high input:checked ~ .radio-mark {
  background: #28a745;
  border-color: #28a745;
}

.performance-medium:has(input:checked) {
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border-color: #ffc107;
  color: #856404;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
}

.performance-medium input:checked ~ .radio-mark {
  background: #ffc107;
  border-color: #ffc107;
}

.performance-low:has(input:checked) {
  background: linear-gradient(135deg, #f8d7da, #f5c6cb);
  border-color: #dc3545;
  color: #721c24;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.4);
}

.performance-low input:checked ~ .radio-mark {
  background: #dc3545;
  border-color: #dc3545;
}

/* Radio button checked indicator */
.performance-high input:checked ~ .radio-mark:after,
.performance-medium input:checked ~ .radio-mark:after,
.performance-low input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
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
  padding: 1rem 1.5rem;
  background: white;
  border: 2px solid #ddd;
  
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 48px;
  min-width: 48px;
}

.confidence-item input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.confidence-item .radio-mark {
  width: 16px;
  height: 16px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

/* Confidence items now use the shared performance classes */

/* Priority Selector */
.priority-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
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

/* Color-coded feedback areas */
.feedback-area.feedback-high {
  border-left-color: #28a745;
  background: linear-gradient(135deg, #e8f8f5, #d1f2eb);
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.2);
}

.feedback-area.feedback-high h5 {
  color: #155724;
}

.feedback-area.feedback-medium {
  border-left-color: #ffc107;
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.2);
}

.feedback-area.feedback-medium h5 {
  color: #856404;
}

.feedback-area.feedback-low {
  border-left-color: #dc3545;
  background: linear-gradient(135deg, #f8d7da, #f5c6cb);
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.2);
}

.feedback-area.feedback-low h5 {
  color: #721c24;
}

/* Culture Assessment Styling */
.culture-selector {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.culture-content {
  flex: 1;
}

.culture-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

.culture-header i {
  width: 16px;
  text-align: center;
}

.culture-description {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Action Items Styling */
.action-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.action-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border-left: 4px solid #1E3A8A;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.15);
}

.action-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.action-header i {
  color: #1E3A8A;
  font-size: 1.2rem;
}

.action-header h4 {
  margin: 0;
  color: #1e40af;
  font-size: 1.1rem;
  font-weight: 600;
}

.action-card p {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.action-details {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, #e0f2fe, #bae6fd);
  border-radius: 8px;
  border: 1px solid #0ea5e9;
}

.action-checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.action-label {
  color: #0c4a6e;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
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
  
  .action-items-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .action-card {
    padding: 1.25rem;
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
  
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  border-color: #2196F3;
}

.metric-card.lead-time::before {
  background: linear-gradient(90deg, #2196F3, #1976d2);
}

.metric-card.deploy-frequency {
  border-color: #4CAF50;
}

.metric-card.deploy-frequency::before {
  background: linear-gradient(90deg, #4CAF50, #388e3c);
}

.metric-card.restore-time {
  border-color: #FF9800;
}

.metric-card.restore-time::before {
  background: linear-gradient(90deg, #FF9800, #f57c00);
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

/* H3 Themed Styling */
h3 {
  border-left: 4px solid #1E3A8A;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  padding: 1rem 1.5rem;
  margin: 0;
  font-weight: 600;
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

.metric-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.metric-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: auto;
  flex-grow: 1;
}

.metric-goal {
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  border: 2px solid #d1d5db;
  margin-top: 1rem;
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
    transform: none;
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

/* Discussion Questions Styling */
.discussion-questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.discussion-card {
  background: linear-gradient(135deg, #f8fafc, #e9ecef);
  padding: 1.5rem;
  border-top: 4px solid #1E3A8A;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.discussion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.2);
  border-top-color: #1e40af;
}

.discussion-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.discussion-header i {
  color: #1E3A8A;
  font-size: 1.2rem;
}

.discussion-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.discussion-content p {
  margin: 0 0 1rem 0;
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
}

.discussion-prompts {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.discussion-prompts span {
  color: #6b7280;
  font-size: 0.85rem;
  padding-left: 0.5rem;
  border-left: 2px solid #e5e7eb;
  line-height: 1.4;
}

/* Action Checklist Styling */
.action-checklist {
  background: linear-gradient(135deg, #f8fafc, #e9ecef);
  padding: 2rem;
  border-left: 4px solid #1E3A8A;
  margin: 2rem 0;
}

.checklist-intro {
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.checklist-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.checklist-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.1);
}

.action-checkbox {
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  accent-color: #1E3A8A;
  cursor: pointer;
}

.action-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

.action-label i {
  color: #1E3A8A;
  font-size: 1.1rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.action-label strong {
  color: #1e40af;
}

.action-details {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.5;
  margin-left: 2.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
}

.checklist-item input[type="checkbox"]:checked + .action-label {
  opacity: 0.7;
  text-decoration: line-through;
}

/* Resource Grid Styling */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.resource-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.15);
}

.resource-card h4 {
  margin-bottom: 1rem;
  color: #1E3A8A;
  font-size: 1.1rem;
  font-weight: 600;
}

.resource-card h4 i {
  margin-right: 0.5rem;
}

.resource-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resource-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.resource-card li:last-child {
  border-bottom: none;
}

.resource-card a {
  color: #1E3A8A;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.resource-card a:hover {
  color: #1e40af;
  text-decoration: underline;
}


/* Responsive adjustments for Related Resources */
@media (max-width: 768px) {
  .related-resources {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .resource-category {
    padding: 1.25rem;
  }
  
  .resource-category h4 {
    font-size: 1rem;
  }
  
  .resource-links li {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .related-resources {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .resource-category {
    padding: 1rem;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Feedback content from Accelerate research
  const doraInfo = {
      high: {
        title: 'High-Performing Team',
        content: 'Your team demonstrates elite software delivery performance! High-performing organizations deploy multiple times per day, have lead times under one hour, restore service in under an hour, and have change failure rates under 15%. Focus on maintaining these practices and sharing knowledge with other teams.'
      },
      medium: {
        title: 'Medium-Performing Team',
        content: 'Your team shows solid DevOps practices with room for improvement. Medium performers typically deploy weekly to monthly, have lead times of days to weeks, and change failure rates of 16-45%. Focus on reducing batch sizes, improving test automation, and increasing deployment frequency.'
      },
      low: {
        title: 'Low-Performing Team',
        content: 'Your team has significant opportunities for improvement. Low performers deploy monthly to every six months, have lead times of months, take days to weeks to restore service, and have change failure rates of 46-60%. Start with version control, deployment automation, and continuous integration basics.'
      }
  };

  const confidenceInfo = {
      anxious: {
        title: 'Deployment Anxiety Signals Process Problems',
        content: 'According to Accelerate research, deployment pain is not inevitable—it\'s a signal of poor practices. Anxiety indicates manual processes, large batch sizes, and insufficient testing. Start with small improvements: add one test, create a deployment checklist, or implement basic monitoring.'
      },
      neutral: {
        title: 'Manageable Deployments with Improvement Potential',
        content: 'Your team manages deployments but still experiences tension. This suggests some good practices are in place but opportunities remain. Focus on increasing deployment frequency, reducing batch sizes, and building more comprehensive automated testing to move toward confident deployments.'
      },
      confident: {
        title: 'Confident Deployment Culture',
        content: 'Excellent! Confident, routine deployments indicate strong DevOps practices. Your team likely has good test automation, deployment automation, and monitoring. Continue refining these practices and help other teams achieve similar confidence through knowledge sharing.'
      }
  };

  const priorityInfo = {
      'lead-time': {
        title: 'Improve Lead Time',
        content: 'Lead time measures the time from code commit to production. To improve: reduce batch sizes, implement trunk-based development, automate testing and deployment pipelines, and eliminate manual approval processes. Small, frequent changes reduce lead time significantly.'
      },
      'deploy-frequency': {
        title: 'Increase Deployment Frequency',
        content: 'Deployment frequency indicates your ability to deliver value quickly. To improve: work in smaller batches, implement feature flags, improve automated testing, and reduce dependencies between teams. Start by deploying weekly, then progress to daily deployments.'
      },
      'restore-time': {
        title: 'Reduce Mean Time to Restore',
        content: 'Faster recovery from failures is crucial for stability. To improve: implement comprehensive monitoring and alerting, practice incident response procedures, improve rollback capabilities, and maintain good documentation. Preparation enables rapid response when issues occur.'
      },
      'change-fail': {
        title: 'Lower Change Failure Rate',
        content: 'High change failure rates indicate quality issues in your delivery process. To improve: implement comprehensive automated testing, use test-driven development, improve code review processes, and implement continuous integration. Quality must be built in, not inspected later.'
      }
  };

  // Add event listeners for DORA performance assessment
  document.querySelectorAll('input[name="dora-performance"]').forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('dora-feedback');
        const info = doraInfo[this.value];
        feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
        
        // Remove existing color classes
        feedback.classList.remove('feedback-high', 'feedback-medium', 'feedback-low');
        
        // Add appropriate color class based on performance level
        if (this.value === 'high') {
          feedback.classList.add('feedback-high');
        } else if (this.value === 'medium') {
          feedback.classList.add('feedback-medium');
        } else if (this.value === 'low') {
          feedback.classList.add('feedback-low');
        }
        
        feedback.classList.add('active');
      });
  });

  // Add event listeners for deployment confidence
  document.querySelectorAll('input[name="deployment-confidence"]').forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('confidence-feedback');
        const info = confidenceInfo[this.value];
        feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
        
        // Remove existing color classes
        feedback.classList.remove('feedback-high', 'feedback-medium', 'feedback-low');
        
        // Add appropriate color class based on confidence level
        if (this.value === 'confident') {
          feedback.classList.add('feedback-high');
        } else if (this.value === 'neutral') {
          feedback.classList.add('feedback-medium');
        } else if (this.value === 'anxious') {
          feedback.classList.add('feedback-low');
        }
        
        feedback.classList.add('active');
      });
  });

  // Add event listeners for improvement focus
  document.querySelectorAll('input[name="improvement-focus"]').forEach(radio => {
      radio.addEventListener('change', function() {
        const feedback = document.getElementById('priority-feedback');
        const info = priorityInfo[this.value];
        feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
        
        // Remove existing color classes
        feedback.classList.remove('feedback-high', 'feedback-medium', 'feedback-low');
        
        // Add color-coded feedback based on performance level
        const priorityLevels = {
          'lead-time': 'feedback-high',
          'deploy-frequency': 'feedback-high', 
          'restore-time': 'feedback-medium',
          'change-fail': 'feedback-low'
        };
        
        feedback.classList.add('active', priorityLevels[this.value]);
      });
  });

  // Culture assessment feedback content
  const cultureInfo = {
      pathological: {
        title: 'Pathological Culture (Type A)',
        content: 'Organizations with pathological culture tend to have lower software delivery performance. This culture is characterized by low cooperation, messengers being \'shot\', shared responsibility being discouraged, and failure leading to scapegoating. Research shows these organizations typically have longer lead times, higher change failure rates, and slower recovery times. Focus on building psychological safety and encouraging learning from failures.',
        impact: '📉 Lower delivery performance, higher failure rates'
      },
      bureaucratic: {
        title: 'Bureaucratic Culture (Type B)',
        content: 'Bureaucratic cultures show modest cooperation but are rule-oriented rather than mission-focused. These organizations often have medium software delivery performance with room for improvement. While better than pathological cultures, they can still benefit from reducing red tape, encouraging innovation, and focusing more on outcomes than processes.',
        impact: 'Medium delivery performance, process-heavy'
      },
      generative: {
        title: 'Generative Culture (Type C)',
        content: 'Congratulations! Generative culture is strongly correlated with high software delivery performance. Organizations with generative culture encourage high cooperation, treat failures as learning opportunities, encourage risk-taking, and focus on mission accomplishment. Research shows these organizations have faster lead times, higher deployment frequency, lower change failure rates, and faster recovery times.',
        impact: 'High delivery performance, continuous improvement'
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
        
        // Remove existing color classes
        feedback.classList.remove('feedback-high', 'feedback-medium', 'feedback-low');
        
        // Add appropriate color class based on culture type
        if (this.value === 'generative') {
          feedback.classList.add('feedback-high');
        } else if (this.value === 'bureaucratic') {
          feedback.classList.add('feedback-medium');
        } else if (this.value === 'pathological') {
          feedback.classList.add('feedback-low');
        }
        
        feedback.classList.add('active');
      });
  });
});
</script>
