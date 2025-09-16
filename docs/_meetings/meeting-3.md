---
layout: meeting
title: "Meeting 3: Management &amp; Sustainability"
subtitle: "Management, Product Development &amp; Sustainability"
week: 5
chapters: "7-10"
duration: "1 Hour"
dora_color: "#D97706"
---

{% include simple-card.html
  type="media"
  title="Meeting 3 Video"
  description="AI-generated video content covering lean management, work visualization, and sustainable practices"
  media_type="video"
  media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3-video.mp4"
  theme="warning"
%}

{% include simple-card.html
  type="media"
  title="Meeting 3 Podcast"
  description="AI-generated podcast discussing WIP limits, employee satisfaction, and burnout prevention"
  media_type="audio"
  media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3-podcast.m4a"
  theme="warning"
%}

### Key Insights

#### Lean vs Traditional Management

{% include simple-comparison.html
  type="vs"
  left_title="Traditional Management"
  left_icon="fas fa-clipboard-list"
  left_subtitle="Command & Control"
  left_items="<i class='fas fa-user-tie'></i> Approval-heavy processes|<i class='fas fa-exclamation-triangle'></i> Blame-oriented culture|<i class='fas fa-hourglass-half'></i> Slow decision making|<i class='fas fa-chart-line-down'></i> Focus on individual metrics"
  right_title="Lean Management"
  right_icon="fas fa-rocket"
  right_subtitle="Enable & Empower"
  right_items="<i class='fas fa-users'></i> Peer review processes|<i class='fas fa-graduation-cap'></i> Learning from failures|<i class='fas fa-tachometer-alt'></i> Fast feedback loops|<i class='fas fa-chart-line'></i> System-level outcomes"
  theme="warning"
%}

#### Employee Satisfaction: The Four Pillars

<svg width="100%" height="280" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" aria-label="Employee Satisfaction Framework">
  <rect x="10" y="10" width="880" height="260" rx="20" fill="#fff7ed" stroke="#d97706" stroke-width="4"/>
  <text x="450" y="40" text-anchor="middle" font-size="24" fill="#92400e" font-family="Poppins, Inter, sans-serif">Employee Satisfaction = Performance</text>

  <!-- Pillar 1: Meaningful Work -->
  <rect x="70" y="70" width="160" height="120" rx="12" fill="#fed7aa" stroke="#d97706" stroke-width="2"/>
  <text x="150" y="95" text-anchor="middle" font-size="14" fill="#92400e" font-weight="bold">Meaningful Work</text>
  <text x="150" y="115" text-anchor="middle" font-size="11" fill="#92400e">Challenging &amp;</text>
  <text x="150" y="130" text-anchor="middle" font-size="11" fill="#92400e">Purposeful Tasks</text>
  <circle cx="150" cy="155" r="15" fill="#d97706"/>
  <text x="150" y="160" text-anchor="middle" font-size="12" fill="white" font-weight="bold">1</text>

  <!-- Pillar 2: Learning -->
  <rect x="260" y="70" width="160" height="120" rx="12" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
  <text x="340" y="95" text-anchor="middle" font-size="14" fill="#92400e" font-weight="bold">Learning</text>
  <text x="340" y="115" text-anchor="middle" font-size="11" fill="#92400e">Growth &amp;</text>
  <text x="340" y="130" text-anchor="middle" font-size="11" fill="#92400e">Development</text>
  <circle cx="340" cy="155" r="15" fill="#d97706"/>
  <text x="340" y="160" text-anchor="middle" font-size="12" fill="white" font-weight="bold">2</text>

  <!-- Pillar 3: Support -->
  <rect x="450" y="70" width="160" height="120" rx="12" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="530" y="95" text-anchor="middle" font-size="14" fill="#92400e" font-weight="bold">Support</text>
  <text x="530" y="115" text-anchor="middle" font-size="11" fill="#92400e">Team Culture &amp;</text>
  <text x="530" y="130" text-anchor="middle" font-size="11" fill="#92400e">Psychological Safety</text>
  <circle cx="530" cy="155" r="15" fill="#d97706"/>
  <text x="530" y="160" text-anchor="middle" font-size="12" fill="white" font-weight="bold">3</text>

  <!-- Pillar 4: Tools -->
  <rect x="640" y="70" width="160" height="120" rx="12" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
  <text x="720" y="95" text-anchor="middle" font-size="14" fill="#92400e" font-weight="bold">Right Tools</text>
  <text x="720" y="115" text-anchor="middle" font-size="11" fill="#92400e">Resources &amp;</text>
  <text x="720" y="130" text-anchor="middle" font-size="11" fill="#92400e">Technology Access</text>
  <circle cx="720" cy="155" r="15" fill="#d97706"/>
  <text x="720" y="160" text-anchor="middle" font-size="12" fill="white" font-weight="bold">4</text>

  <!-- Connection arrows -->
  <line x1="230" y1="130" x2="260" y2="130" stroke="#d97706" stroke-width="3" marker-end="url(#arrow-amber)"/>
  <line x1="420" y1="130" x2="450" y2="130" stroke="#d97706" stroke-width="3" marker-end="url(#arrow-amber)"/>
  <line x1="610" y1="130" x2="640" y2="130" stroke="#d97706" stroke-width="3" marker-end="url(#arrow-amber)"/>

  <!-- Research Finding -->

<text x="450" y="225" text-anchor="middle" font-size="16" fill="#92400e" font-weight="bold">Research Finding</text>
<text x="450" y="245" text-anchor="middle" font-size="12" fill="#92400e">Teams scoring high on all four pillars are 2.2x more likely</text>
<text x="450" y="260" text-anchor="middle" font-size="12" fill="#92400e">to recommend their organization as a great place to work</text>

  <defs>
    <marker id="arrow-amber" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L10,5 L0,10 Z" fill="#d97706" />
    </marker>
  </defs>
</svg>

#### Deployment Pain Spectrum

{% include simple-comparison.html
  type="flow"
  left_title="High Deployment Pain"
  left_icon="fas fa-fire"
  left_subtitle="High stress, low performance, team burnout"
  left_items="<i class='fas fa-clock'></i> Hours/days to deploy|<i class='fas fa-exclamation-triangle'></i> Frequent rollbacks|<i class='fas fa-user-clock'></i> Weekend deployments|<i class='fas fa-phone-alt'></i> All-hands meetings"
  right_title="Low Deployment Pain"
  right_icon="fas fa-check-circle"
  right_subtitle="Confident releases, sustainable pace, happy teams"
  right_items="<i class='fas fa-tachometer-alt'></i> Minutes to deploy|<i class='fas fa-shield-check'></i> Reliable releases|<i class='fas fa-calendar-check'></i> Business hours only|<i class='fas fa-coffee'></i> Normal workday"
  divider_text="Lean Practices"
  theme="success"
%}

### Lean Product Development: Interactive Flow

<svg width="100%" height="350" viewBox="0 0 1000 350" xmlns="http://www.w3.org/2000/svg" aria-label="Lean Product Development Flow">
  <rect x="10" y="10" width="980" height="330" rx="20" fill="#fff7ed" stroke="#d97706" stroke-width="3"/>
  <text x="500" y="40" text-anchor="middle" font-size="24" fill="#92400e" font-family="Poppins, Inter, sans-serif">Small Batches & Customer Feedback Flow</text>

  <!-- Customer Feedback Integration -->
  <rect x="50" y="80" width="200" height="200" rx="15" fill="#fed7aa" stroke="#d97706" stroke-width="2"/>
  <circle cx="150" cy="110" r="20" fill="#d97706"/>
  <circle cx="150" cy="116" r="8" fill="white"/>
  <text x="150" y="119" text-anchor="middle" font-size="10" fill="#d97706" style="font-family: 'Font Awesome 6 Free'; font-weight: 900;">f075</text>
  <text x="150" y="140" text-anchor="middle" font-size="16" fill="#92400e" font-weight="bold">Customer Feedback</text>
  <text x="150" y="160" text-anchor="middle" font-size="12" fill="#92400e">Active Incorporation</text>
  
  <text x="60" y="185" font-size="11" fill="#92400e">• Regular feedback cycles</text>
  <text x="60" y="200" font-size="11" fill="#92400e">• Direct customer input</text>
  <text x="60" y="215" font-size="11" fill="#92400e">• Design iteration</text>
  <text x="60" y="230" font-size="11" fill="#92400e">• Quick response</text>
  <text x="150" y="260" text-anchor="middle" font-size="14" fill="#d97706" font-weight="bold">Research: 2.3x better outcomes</text>

  <!-- Arrow 1 -->
  <line x1="250" y1="180" x2="300" y2="180" stroke="#d97706" stroke-width="4" marker-end="url(#arrow-amber)"/>

  <!-- Small Batches -->
  <rect x="320" y="80" width="200" height="200" rx="15" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
  <circle cx="420" cy="110" r="20" fill="#d97706"/>
  <circle cx="420" cy="116" r="8" fill="white"/>
  <text x="420" y="119" text-anchor="middle" font-size="10" fill="#d97706" style="font-family: 'Font Awesome 6 Free'; font-weight: 900;">f468</text>
  <text x="420" y="140" text-anchor="middle" font-size="16" fill="#92400e" font-weight="bold">Small Batches</text>
  <text x="420" y="160" text-anchor="middle" font-size="12" fill="#92400e">Less Than One Week</text>
  
  <text x="330" y="185" font-size="11" fill="#92400e">• MVP approach</text>
  <text x="330" y="200" font-size="11" fill="#92400e">• Rapid learning cycles</text>
  <text x="330" y="215" font-size="11" fill="#92400e">• Frequent delivery</text>
  <text x="330" y="230" font-size="11" fill="#92400e">• Reduced risk</text>
  <text x="420" y="260" text-anchor="middle" font-size="14" fill="#d97706" font-weight="bold">Batch size ↓ = Performance ↑</text>

  <!-- Arrow 2 -->
  <line x1="520" y1="180" x2="570" y2="180" stroke="#d97706" stroke-width="4" marker-end="url(#arrow-amber)"/>

  <!-- Team Experimentation -->
  <rect x="590" y="80" width="200" height="200" rx="15" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <circle cx="690" cy="110" r="20" fill="#d97706"/>
  <text x="690" y="116" text-anchor="middle" font-size="16" fill="white" font-weight="bold">🧪</text>
  <text x="690" y="140" text-anchor="middle" font-size="16" fill="#92400e" font-weight="bold">Team Autonomy</text>
  <text x="690" y="160" text-anchor="middle" font-size="12" fill="#92400e">Authority to Adapt</text>
  
  <text x="600" y="185" font-size="11" fill="#92400e">• Create specifications</text>
  <text x="600" y="200" font-size="11" fill="#92400e">• Change requirements</text>
  <text x="600" y="215" font-size="11" fill="#92400e">• No external approval</text>
  <text x="600" y="230" font-size="11" fill="#92400e">• Data-driven decisions</text>
  <text x="690" y="260" text-anchor="middle" font-size="14" fill="#d97706" font-weight="bold">Autonomy drives innovation</text>

  <!-- Arrow 3 -->
  <line x1="790" y1="180" x2="840" y2="180" stroke="#d97706" stroke-width="4" marker-end="url(#arrow-amber)"/>

  <!-- Value Stream Result -->
  <circle cx="900" cy="180" r="60" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
  <text x="900" y="170" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Value Stream</text>
  <text x="900" y="185" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Visibility</text>
  <text x="900" y="200" text-anchor="middle" font-size="12" fill="white">End-to-End</text>

  <!-- Bottom insight -->

<text x="500" y="320" text-anchor="middle" font-size="18" fill="#92400e" font-weight="bold">Research Finding: Teams with all four practices deliver 50% faster</text>

  <defs>
    <marker id="arrow-amber-2" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L12,6 L0,12 Z" fill="#d97706" />
    </marker>
  </defs>
</svg>

<style>
/* eNPS Assessment Styling */
.score-selector {
  margin: 1.5rem 0;
}

.score-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.score-btn {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: none;
  padding: 0;
}

.score-btn input[type="radio"] {
  display: none;
}

.score-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #d1d5db;
  background: white;
  transition: all 0.3s ease;
}

/* Zone-based coloring */
.detractor-zone .score-number {
  border-color: #dc2626;
  color: #dc2626;
}

.passive-zone .score-number {
  border-color: #d97706;
  color: #d97706;
}

.promoter-zone .score-number {
  border-color: #16a34a;
  color: #16a34a;
}

/* Hover states */
.score-btn:hover .score-number {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.detractor-zone:hover .score-number {
  background: #fef2f2;
  border-color: #b91c1c;
}

.passive-zone:hover .score-number {
  background: #fef3c7;
  border-color: #b45309;
}

.promoter-zone:hover .score-number {
  background: #f0fdf4;
  border-color: #15803d;
}

/* Selected states */
.score-btn.selected .score-number,
.score-btn input:checked ~ .score-number {
  transform: scale(1.2);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.detractor-zone.selected .score-number,
.detractor-zone input:checked ~ .score-number {
  background: #dc2626;
  color: white;
  border-color: #b91c1c;
}

.passive-zone.selected .score-number,
.passive-zone input:checked ~ .score-number {
  background: #d97706;
  color: white;
  border-color: #b45309;
}

.promoter-zone.selected .score-number,
.promoter-zone input:checked ~ .score-number {
  background: #16a34a;
  color: white;
  border-color: #15803d;
}

.score-zones {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.zone {
  text-align: center;
  padding: 0.75rem 1rem;
  
  min-width: 120px;
  border: 2px solid transparent;
}

.zone.detractors {
  background: linear-gradient(135deg, #fef2f2, #fecaca);
  border-color: #dc2626;
  color: #991b1b;
}

.zone.passives {
  background: linear-gradient(135deg, #fef3c7, #fbbf24);
  border-color: #d97706;
  color: #92400e;
}

.zone.promoters {
  background: linear-gradient(135deg, #f0fdf4, #bbf7d0);
  border-color: #16a34a;
  color: #15803d;
}

.zone-range {
  display: block;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.zone-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Responsive design */
@media (max-width: 768px) {
  .score-buttons {
    gap: 0.25rem;
  }
  
  .score-number {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    font-size: 1rem;
  }
  
  .score-zones {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .zone {
    min-width: auto;
  }
}

/* Deployment Pain Comparison Styles */
.deployment-pain-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fff7ed, #fef3c7);
  
  border: 2px solid #d97706;
}

.pain-side {
  background: white;
  
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.pain-side h4 {
  margin: 0 0 1rem 0;
  color: #92400e;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.pain-indicators {
  margin-bottom: 1.5rem;
}

.pain-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
}

.pain-item i {
  width: 20px;
  color: #d97706;
}

.pain-impact {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  padding: 1.25rem;
  border-left: 4px solid #d97706;
}

.impact-statement {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #374151;
  line-height: 1.4;
}

.impact-detail {
  margin: 0;
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.3;
  font-style: italic;
}

.pain-arrow {
  font-size: 2rem;
  color: #d97706;
  font-weight: bold;
  text-align: center;
}

/* Responsive design */
@media (max-width: 768px) {
  .deployment-pain-comparison {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 1.5rem;
  }
  
  .pain-arrow {
    transform: rotate(90deg);
  }
}
</style>

### Interactive Learning Checkpoint

<div class="learning-checkpoint" markdown="0">
  {% include simple-checkpoint.html 
    title="Lean Management Maturity"
    icon="fas fa-chart-line"
    question="Rate your team's current lean management practices:"
    type="radio"
    options=site.data.checkpoint_answers.lean_management
    radio_name="lean-maturity"
    feedback_id="lean-feedback"
    default_feedback="Select your current maturity level to see research-backed insights and improvement strategies."
  %}

{% include simple-checkpoint.html
    title="Deployment Pain Level"
    icon="fas fa-rocket"
    question="How painful are your deployments on a 1-10 scale?"
    type="radio"
    options=site.data.checkpoint_answers.deployment_pain
    radio_name="deployment-pain"
    feedback_id="deployment-feedback"
    default_feedback="Rate your deployment pain to see improvement strategies and performance correlations."
  %}

</div>

### Discussion Questions

<div class="discussion-grid" markdown="0">
  {% include simple-card.html 
    type="discussion" 
    icon="fas fa-chart-line" 
    title="Lean Management Assessment" 
    question="Which lean management practices do you currently use? What's missing?" 
    items="Peer review vs. approval processes|Visual work management and WIP limits|Learning from failures vs. blame culture|Fast feedback loops and decision making" 
    theme="warning"
  %}

{% include simple-card.html
    type="discussion"
    icon="fas fa-rocket"
    title="Deployment Pain Check"
    question="On a scale of 1-10, how painful are your deployments? What causes the anxiety?"
    items="Manual coordination and handoff processes|Weekend and after-hours deployment schedule|Rollback complexity and recovery procedures|Team stress and work-life balance impact"
    theme="warning"
  %}

{% include simple-card.html
    type="discussion"
    icon="fas fa-users"
    title="Employee Engagement"
    question="How would your team score on employee Net Promoter Score?"
    items="Meaningful work and growth opportunities|Team support and psychological safety|Access to right tools and resources|Organizational culture and values alignment"
    theme="warning"
  %}

</div>

### Action Items for Next Meeting

<div class="discussion-grid" markdown="0">
  {% include simple-card.html 
    type="action"
    icon="fas fa-columns"
    title="Create a visual work board"
    question="Can you see everything your team is juggling right now?"
    description="Set up kanban board with WIP limits to make work visible and prevent overload."
    items="Set up To Do, In Progress, Done columns|Add WIP limits to prevent overload|Start tracking cycle time to spot bottlenecks|Make work visible, make problems obvious"
    theme="warning"
  %}

{% include simple-card.html
    type="action"
    icon="fas fa-chart-line"
    title="Run an eNPS pulse check"
    question="Would your teammates recommend your org as a great place to work?"
    description="Conduct employee Net Promoter Score assessment to measure team satisfaction."
    items="Ask: \"On a scale 0-10, how likely are you to recommend our organization as a great place to work?\"|Follow up with \"What would make it better?\"|Listen deeply to the answers|Analyze results against the four satisfaction pillars"
    theme="warning"
  %}

{% include simple-card.html
    type="action"
    icon="fas fa-balance-scale"
    title="Pick ONE practice that boosts both performance AND wellbeing"
    question="What will reduce stress while improving delivery?"
    description="Choose a lean practice that improves both team performance and work-life balance."
    items="Consider deployment automation to eliminate weekend work|Try blameless post-mortems to build psychological safety|Implement work visualization to reduce context switching|Focus on practices that help people AND performance"
    theme="warning"
  %}

</div>

### Related Resources

<div class="resource-grid" markdown="0">
  {% include simple-card.html 
    type="resource" 
    icon="fas fa-users" 
    title="Lean Management & Team Performance" 
    links="Kanban Boards|https://www.atlassian.com/agile/kanban/boards|Value Stream Mapping|https://www.lean.org/lexicon-terms/value-stream-mapping/|eNPS Calculator|https://blog.officevibe.com/employee-net-promoter-score|Psychological Safety Guide|https://rework.withgoogle.com/guides/understanding-team-effectiveness/|Team Topologies|https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819" 
    theme="warning"
  %}

{% include simple-card.html
    type="resource"
    icon="fas fa-chart-line"
    title="DevOps Culture & Assessment"
    links="DORA Capabilities|https://dora.dev/devops-capabilities/|Four Keys Project|https://github.com/dora-team/fourkeys|Burnout Prevention Toolkit|https://www.mindgarden.com/maslach-burnout-toolkit/"
    theme="warning"
  %}

</div>

<style>
/* H3 Themed Styling */
h3 {
  border-left: 4px solid #d97706;
  background: linear-gradient(135deg, #fff7ed, #fef3c7);
  padding: 1rem 1.5rem;
  margin: 0;
  font-weight: 600;
}

/* Discussion Questions Styling */
.discussion-questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.discussion-card {
  background: linear-gradient(135deg, #fff7ed, #fef3c7);
  padding: 1.5rem;
  border-top: 4px solid #d97706;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.discussion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(217, 119, 6, 0.2);
  border-top-color: #92400e;
}

.discussion-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.discussion-header i {
  color: #d97706;
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

/* Discussion Questions Styling */
.discussion-questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.discussion-card {
  background: linear-gradient(135deg, #fff7ed, #e9ecef);
  padding: 1.5rem;
  border-top: 4px solid #d97706;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.discussion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(217, 119, 6, 0.2);
  border-top-color: #92400e;
}

/* Action Checklist Styling */
.action-checklist {
  background: linear-gradient(135deg, #fff7ed, #e9ecef);
  padding: 2rem;
  border-left: 4px solid #d97706;
  margin: 2rem 0;
}

.checklist-intro {
  font-weight: 500;
  color: #92400e;
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
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.1);
}

.action-checkbox {
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  accent-color: #d97706;
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
  color: #d97706;
  font-size: 1.1rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.action-label strong {
  color: #92400e;
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
  box-shadow: 0 8px 25px rgba(217, 119, 6, 0.15);
}

.resource-card h4 {
  margin-bottom: 1rem;
  color: #d97706;
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
  color: #d97706;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.resource-card a:hover {
  color: #92400e;
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
