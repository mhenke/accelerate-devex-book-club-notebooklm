---
layout: meeting
title: 'Meeting 1: Foundation'
subtitle: 'Laying the Foundation – The Myth and the Measurement'
week: 1
chapters: '1-3'
duration: '1 Hour'
dora_color: '#1E3A8A'
---

{% include simple-card.html 
  type="media" 
  title="Meeting 1 Video"
  description="AI-generated video content covering Meeting 1 topics"
  media_type="video"
  media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-video.mp4"
  theme="primary"
%}

{% include simple-card.html 
  type="media" 
  title="Meeting 1 Podcast"
  description="AI-generated podcast discussing Meeting 1 concepts"
  media_type="audio"
  media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-podcast.m4a"
  theme="info"
%}

### Key Insights

<div class="insights-grid" markdown="0">
  {% include simple-card.html type="insight" icon="fas fa-microscope" title="Evidence-Based" description="Rigorous research backing all findings" theme="info" %}
  {% include simple-card.html type="insight" icon="fas fa-medal" title="Competitive Advantage" description="Software delivery capability drives success" theme="success" %}
  {% include simple-card.html type="insight" icon="fas fa-user-check" title="Process Not People" description="Anxiety signals inefficiency, not failure" theme="info" %}
</div>

#### The Four DORA Metrics

<div class="learning-highlights" markdown="0">
<div class="highlight-grid">
<div class="highlight-card meeting-1">
<div class="highlight-icon">
<i class="fas fa-chart-line"></i>
</div>
<h3>Lead Time for Changes</h3>
<p>Time from code commit to production deployment. Elite performers achieve under 1 hour, while low performers take weeks or months.</p>
<div class="meeting-badge">
<span>Target:</span>
<span>Hours not Days</span>
</div>
</div>

<div class="highlight-card meeting-1">
<div class="highlight-icon">
<i class="fas fa-rocket"></i>
</div>
<h3>Deployment Frequency</h3>
<p>How often your team deploys code to production. High performers deploy multiple times per day with confidence.</p>
<div class="meeting-badge">
<span>Target:</span>
<span>Multiple Daily Deploys</span>
</div>
</div>

<div class="highlight-card meeting-1">
<div class="highlight-icon">
<i class="fas fa-clock"></i>
</div>
<h3>Mean Time to Recovery</h3>
<p>How quickly your team restores service when incidents occur. Fast recovery reduces customer impact and team stress.</p>
<div class="meeting-badge">
<span>Target:</span>
<span>Under 1 Hour</span>
</div>
</div>

<div class="highlight-card meeting-1">
<div class="highlight-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<h3>Change Failure Rate</h3>
<p>Percentage of deployments that cause production failures. Elite teams maintain 0-15% while deploying frequently.</p>
<div class="meeting-badge">
<span>Target:</span>
<span>0-15%</span>
</div>
</div>
</div>
</div>

#### Speed vs Stability: The Myth Busted

{% include simple-comparison.html 
  type="vs"
  left_title="Old Thinking"
  left_icon="fas fa-times-circle"
  left_subtitle="Either Fast OR Stable"
  left_items="<i class='fas fa-turtle'></i> Slow = Safe|<i class='fas fa-running'></i> Fast = Risky|<i class='fas fa-balance-scale'></i> Must choose one"
  right_title="Research Reality"
  right_icon="fas fa-check-circle"
  right_subtitle="Both Fast AND Stable"
  right_stats="fas fa-rocket|46x|more frequent deployments|fas fa-clock|440x|faster lead time|fas fa-tools|170x|faster recovery|fas fa-shield-alt|5x|lower change fail rate"
  right_items="<i class='fas fa-bolt'></i> Speed enables stability|<i class='fas fa-shield-alt'></i> Stability enables speed|<i class='fas fa-chart-bar'></i> High performers excel at both"
  theme="warning"
%}

{% include statistic-card.html 
  icon="fas fa-rocket"
  title="High Performers vs. Low Performers"
  statistic="46x"
  subtitle="more frequent deployments"
  description="Elite performers deploy 46 times more frequently than low performers while maintaining superior stability and quality"
  theme="meeting-1"
%}

### Deployment Pain → Solution Flow

{% include simple-comparison.html 
  type="flow"
  left_title="Deployment Anxiety"
  left_icon="fas fa-frown"
  left_items="Fear before releases|Manual processes|Unpredictable outcomes"
  right_title="Confident Deployments"
  right_icon="fas fa-trophy"
  right_items="Predictable releases|Faster recovery|Better business outcomes"
  divider_text="DevOps Practices"
  theme="success"
%}

### Interactive Learning Checkpoint

<div class="learning-checkpoint" markdown="0">
  {% include simple-checkpoint.html 
    title="DORA Metrics Assessment"
    icon="fas fa-chart-line"
    question="Rate your team's current performance on the four key metrics:"
    type="radio"
    options=site.data.checkpoint_answers.dora_assessment
    feedback_id="dora-feedback"
    radio_name="dora-performance"
    default_feedback="Select your team's performance level to understand improvement opportunities."
  %}

  {% include simple-checkpoint.html 
    title="Deployment Confidence"
    icon="fas fa-heart"
    question="How does your team feel about deployments?"
    type="radio"
    options=site.data.checkpoint_answers.deployment_confidence
    feedback_id="confidence-feedback"
    radio_name="deployment-confidence"
    default_feedback="Select how your team feels about deployments to get targeted improvement suggestions."
  %}

  {% include simple-checkpoint.html 
    title="Improvement Priority"
    icon="fas fa-bullseye"
    question="Which DORA metric should your team focus on first?"
    type="radio"
    options=site.data.checkpoint_answers.improvement_priority
    feedback_id="priority-feedback"
    radio_name="improvement-focus"
    default_feedback="Choose which metric needs the most attention to get specific improvement strategies."
  %}

  {% include simple-checkpoint.html 
    title="Culture Assessment"
    icon="fas fa-users"
    question="Assess your organization's culture type using Westrum's model:"
    type="radio"
    options=site.data.checkpoint_answers.culture_assessment
    feedback_id="culture-feedback"
    radio_name="culture-type"
    default_feedback="Select your organization's culture type to see how it impacts delivery performance."
  %}
</div>

### Discussion Questions

<div class="discussion-questions-grid" markdown="0">
  {% include simple-card.html type="discussion" icon="fas fa-chart-line" title="Current State Assessment" question="How would you rate your team on each DORA metric?" items="Deployment frequency|Lead time for changes|Time to restore service|Change failure rate" theme="primary" %}
  {% include simple-card.html type="discussion" icon="fas fa-balance-scale" title="Speed vs. Stability Myths" question="What examples have you seen of assumed trade-offs in your organization?" items="We can't deploy frequently because...|Quality requires slow releases|Fast delivery means cutting corners" theme="warning" %}
  {% include simple-card.html type="discussion" icon="fas fa-rocket" title="Deployment Pain Points" question="Describe your team's current deployment experience and anxiety levels" items="What causes deployment anxiety?|Manual steps and coordination needed|Frequency and timing of deployments" theme="warning" %}
  {% include simple-card.html type="discussion" icon="fas fa-users" title="Culture Indicators" question="Using Westrum's model, what culture type best describes your organization?" items="How do you handle failure and learning?|Information sharing and collaboration|Risk-taking and innovation support" theme="neutral" %}
</div>

## Action Items for Next Meeting

<div class="action-items-grid" markdown="0">
  {% include simple-card.html 
    type="action"
    icon="fas fa-chart-line"
    title="Start tracking ONE DORA metric this week"
    question="Which metric will reveal your team's biggest opportunity?"
    description="Pick deployment frequency, lead time, MTTR, or change failure rate. Use a simple spreadsheet or notes. The goal is baseline measurement, not perfection."
    items="Choose one DORA metric to track|Set up basic measurement tracking|Document baseline numbers|Review weekly for patterns"
    theme="primary"
  %}

  {% include simple-card.html 
    type="action"
    icon="fas fa-exclamation-triangle"
    title="Document your #1 deployment pain point"
    question="What makes your team anxious before releases?"
    description="Write down the manual steps, coordination needed, and how it impacts work-life balance. Be specific about what happens when things go wrong."
    items="Identify main deployment anxiety source|Document manual steps involved|Note coordination requirements|Record impact on work-life balance"
    theme="warning"
  %}

  {% include simple-card.html 
    type="action"
    icon="fas fa-users"
    title="Culture detective mode"
    question="Observe 3 team interactions - Are you pathological, bureaucratic, or generative?"
    description="Watch how failures are discussed in meetings. Note information sharing patterns. Do you see blame or learning? Cooperation or silos?"
    items="Observe failure discussions in meetings|Note information sharing patterns|Look for blame vs learning responses|Document cooperation vs silo behaviors"
    theme="success"
  %}
</div>

### Related Resources

<div class="resource-grid" markdown="0">
  {% include simple-card.html type="resource" icon="fas fa-chart-line" title="DORA Research & Assessment" links="2024 State of DevOps Report|https://dora.dev/research/2024/dora-report/|DORA Research Program|https://dora.dev/|DORA Quick Check Assessment|https://dora.dev/quickcheck/|DORA Capabilities Overview|https://dora.dev/capabilities/" theme="primary" %}
  {% include simple-card.html type="resource" icon="fas fa-users" title="Westrum Organizational Culture" links="Westrum Organizational Culture Types|https://dora.dev/capabilities/generative-organizational-culture/|IT Revolution Westrum Model|https://itrevolution.com/articles/westrums-organizational-model-in-tech-orgs/|Generative Culture Assessment|https://continuousdelivery.com/implementing/culture/" theme="success" %}
</div>

<style>
/* Meeting 1 specific styling - checkpoint styling now handled by includes */
.learning-checkpoint {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  
  border: 2px solid #1E3A8A;
}

/* Responsive Design for Checkpoint */
@media (max-width: 768px) {
  .learning-checkpoint {
    grid-template-columns: 1fr;
    padding: 1rem;
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

<!-- JavaScript now handled by checkpoint-card.html includes -->
