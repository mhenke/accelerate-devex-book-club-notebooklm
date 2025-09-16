---
layout: meeting
title: "Meeting 1: Foundation"
subtitle: "Laying the Foundation – The Myth and the Measurement"
week: 1
chapters: "1-3"
duration: "1 Hour"
dora_color: "#0969da" # $meeting-1-primary
---

<!-- Meeting Progress Indicator -->
<div class="meeting-progress-bar" markdown="0">
  <div class="progress-indicator">
    <span class="progress-label">Meeting 1 of 4</span>
    <div class="progress-track">
      <div class="progress-fill" style="width: 25%"></div>
    </div>
    <span class="progress-text">Foundation Phase</span>
  </div>
</div>

<!-- Main Content Layout: 70% Content + 30% Sidebar -->
<div class="meeting-content-layout" markdown="0">
  <main class="meeting-main-content">
    <section class="key-insights-prominent">
      <h2><i class="fas fa-lightbulb"></i> Key Insights</h2>

<div class="insights-grid" markdown="0">
  {% include simple-card.html type="insight" icon="fas fa-microscope" title="Evidence-Based" description="Rigorous research backing all findings" theme="info" %}
  {% include simple-card.html type="insight" icon="fas fa-medal" title="Competitive Advantage" description="Software delivery capability drives success" theme="success" %}
  {% include simple-card.html type="insight" icon="fas fa-user-check" title="Process Not People" description="Anxiety signals inefficiency, not failure" theme="info" %}
</div>

### DORA Metrics Dashboard

<div class="dora-dashboard" markdown="0">
  <div class="dashboard-header">
    <h3>The Four Key Metrics</h3>
    <p>Evidence-based measurements of software delivery performance</p>
  </div>

  <div class="metrics-horizontal">
    <div class="metric-tile lead-time">
      <div class="metric-icon-container">
        <i class="fas fa-clock"></i>
      </div>
      <div class="metric-info">
        <h4>Lead Time</h4>
        <span class="metric-desc">Commit to production</span>
        <div class="metric-benchmark">
          <span class="elite">Elite: < 1 hour</span>
          <span class="high">High: < 1 day</span>
        </div>
      </div>
    </div>

    <div class="metric-tile deployment-freq">
      <div class="metric-icon-container">
        <i class="fas fa-rocket"></i>
      </div>
      <div class="metric-info">
        <h4>Deployment Frequency</h4>
        <span class="metric-desc">How often you deploy</span>
        <div class="metric-benchmark">
          <span class="elite">Elite: On-demand</span>
          <span class="high">High: Daily</span>
        </div>
      </div>
    </div>

    <div class="metric-tile recovery-time">
      <div class="metric-icon-container">
        <i class="fas fa-tools"></i>
      </div>
      <div class="metric-info">
        <h4>Recovery Time</h4>
        <span class="metric-desc">Time to restore service</span>
        <div class="metric-benchmark">
          <span class="elite">Elite: < 1 hour</span>
          <span class="high">High: < 1 day</span>
        </div>
      </div>
    </div>

    <div class="metric-tile change-fail">
      <div class="metric-icon-container">
        <i class="fas fa-shield-alt"></i>
      </div>
      <div class="metric-info">
        <h4>Change Failure Rate</h4>
        <span class="metric-desc">% causing failures</span>
        <div class="metric-benchmark">
          <span class="elite">Elite: 0-15%</span>
          <span class="medium">Medium: 16-30%</span>
        </div>
      </div>
    </div>
  </div>
</div>

### Interactive Learning Checkpoint

<div class="learning-checkpoint" markdown="0">
  {% include simple-checkpoint.html
    title="DORA Metrics Assessment"
    icon="fas fa-chart-line"
    question="Rate your organization's current DORA metrics maturity:"
    type="radio"
    options=site.data.checkpoint_answers.dora_maturity
    feedback_id="dora-feedback"
    radio_name="dora-maturity"
    default_feedback="Select your organization's DORA maturity level to see improvement opportunities."
  %}

  {% include simple-checkpoint.html
    title="Culture Assessment"
    icon="fas fa-users"
    question="Rate your team's culture characteristics:"
    type="slider"
    slider_labels="Pathological|Bureaucratic|Generative"
    feedback_id="culture-feedback"
    default_feedback="Move the slider to assess your team's culture based on Westrum's model"
  %}
</div>

#### Speed vs Stability

<div class="speed-vs-stability" markdown="0">
  <div class="comparison-layout">
    <div class="old-thinking">
      <h4>Old Thinking</h4>
      <p>Either Fast OR Stable</p>
      <ul>
        <li><i class="fas fa-times"></i> Slow = Safe</li>
        <li><i class="fas fa-times"></i> Fast = Risky</li>
      </ul>
    </div>

    <div class="new-thinking">
      <h4>New Thinking</h4>
      <p>Both Fast AND Stable</p>
      <ul>
        <li><i class="fas fa-check"></i> Speed enables stability</li>
        <li><i class="fas fa-check"></i> High performers excel at both</li>
      </ul>
    </div>

  </div>
</div>

### Deployment Pain → Solution Flow

<div class="deployment-flow-section" markdown="0">
  <div class="deployment-assessment">
    {% include simple-card.html
      type="metric"
      title="DORA Metrics Assessment"
      icon="fas fa-chart-line"
      description="Complete your team's performance on the four key metrics:"
      items="Deployment Accuracy|Get Feedback|Frequency Issue|Sentiment Issue|Estimate|Understand"
      theme="primary"
    %}
  </div>
</div>

    </section>
  </main>

  <!-- Meeting Toolkit Sidebar -->
  <aside class="meeting-sidebar">
    <div class="sidebar-section">
      <h3><i class="fas fa-video"></i> Video</h3>
      {% include simple-card.html
        type="media"
        title="Meeting 1: Foundation"
        subtitle="Video & Key Concepts"
        description="Three experts from Dev, Ops, and Product discuss..."
        media_type="video"
        media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-video.mp4"
        theme="compact"
      %}
    </div>

    <div class="sidebar-section">
      <h3><i class="fas fa-headphones"></i> Podcast</h3>
      {% include simple-card.html
        type="media"
        title="Meeting 1 Podcast"
        subtitle="Expert discussion on key findings"
        media_type="audio"
        media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-podcast.m4a"
        theme="compact"
      %}
    </div>

    <div class="sidebar-section">
      <h3><i class="fas fa-tasks"></i> Quick Actions</h3>
      <div class="quick-actions">
        <a href="#action-items" class="quick-action-btn">→ Action Items</a>
        <a href="#discussion" class="quick-action-btn">→ Discussion</a>
        <a href="/meetings/meeting-2/" class="quick-action-btn">→ Next Meeting</a>
      </div>
    </div>

    <div class="sidebar-section">
      <h3><i class="fas fa-chart-pie"></i> Progress</h3>
      <div class="assessment-status">
        <div class="status-item">
          <span class="status-label">DORA Understanding</span>
          <div class="status-bar"><div class="status-fill" style="width: 75%"></div></div>
        </div>
        <div class="status-item">
          <span class="status-label">Cultural Assessment</span>
          <div class="status-bar"><div class="status-fill" style="width: 60%"></div></div>
        </div>
      </div>
    </div>
  </aside>
</div>

<!-- Action Items Section - Moved Up for Prominence -->
<section id="action-items" class="action-items-section">
  <h2><i class="fas fa-clipboard-check"></i> Action Items for Next Meeting</h2>

<div class="action-items-layout" markdown="0">
  <div class="action-grid">
    <div class="action-card current-state">
      <div class="action-header">
        <i class="fas fa-chart-line action-icon"></i>
      </div>
      <div class="action-content">
        <p>Start tracking ONE DORA metric this week</p>
        <ul>
          <li>Choose lead time OR deployment frequency</li>
          <li>Set up basic measurement</li>
          <li>Collect baseline data</li>
        </ul>
      </div>
      <div class="action-button">
        <button class="btn-action">→ Start Tracking</button>
      </div>
    </div>

    <div class="action-card deployment-stability">
      <div class="action-header">
        <i class="fas fa-balance-scale action-icon"></i>
      </div>
      <div class="action-content">
        <p>Type measure at deployment</p>
        <ul>
          <li>Document current deployment process</li>
          <li>Identify speed vs stability tradeoffs</li>
          <li>Note improvement opportunities</li>
        </ul>
      </div>
      <div class="action-button">
        <button class="btn-action">→ Other Metrics</button>
      </div>
    </div>

    <div class="action-card culture-indicators">
      <div class="action-header">
        <i class="fas fa-users action-icon"></i>
      </div>
      <div class="action-content">
        <p>Culture detective mode</p>
        <ul>
          <li>Observe team interactions</li>
          <li>Note communication patterns</li>
          <li>Identify Westrum culture signals</li>
        </ul>
      </div>
      <div class="action-button">
        <button class="btn-action">→ Audio & Video</button>
      </div>
    </div>

  </div>
</div>
</section>

<!-- Consolidated Discussion Section -->
<section id="discussion" class="discussion-section">
  <h2><i class="fas fa-comments"></i> Discussion Questions</h2>

  <div class="discussion-consolidated" markdown="0">
    <details class="discussion-expandable">
      <summary class="discussion-summary">
        <i class="fas fa-chart-line"></i>
        <span>Current State Assessment</span>
        <i class="fas fa-chevron-down"></i>
      </summary>
      <div class="discussion-content">
        <h4>Evaluate Your Team's Current Performance</h4>
        <ul>
          <li>How would you categorize your team using the DORA performance levels?</li>
          <li>What evidence do you have for speed vs stability in your organization?</li>
          <li>Where do you see the biggest gaps in your delivery capabilities?</li>
          <li>What cultural patterns do you observe in your team interactions?</li>
        </ul>
      </div>
    </details>

    <details class="discussion-expandable">
      <summary class="discussion-summary">
        <i class="fas fa-target"></i>
        <span>Improvement Opportunities</span>
        <i class="fas fa-chevron-down"></i>
      </summary>
      <div class="discussion-content">
        <h4>Identify Next Steps</h4>
        <ul>
          <li>Which DORA metric would be easiest for your team to start measuring?</li>
          <li>What's one speed vs stability assumption you could challenge?</li>
          <li>How might you begin shifting towards a more generative culture?</li>
          <li>What's the smallest change that could have the biggest impact?</li>
        </ul>
      </div>
    </details>
  </div>
</section>

<style>
/* New Meeting Layout Styles */
.meeting-progress-bar {
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: var(--space-md) 0;
  margin-bottom: var(--space-xl);
}

.progress-indicator {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: 0 var(--space-lg);
}

.progress-label,
.progress-text {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--meeting-1-primary, #0969da);
}

.progress-track {
  flex: 1;
  height: 6px;
  background: rgba(9, 105, 218, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--meeting-1-primary, #0969da);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.meeting-content-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--space-2xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.meeting-main-content {
  min-width: 0; /* Prevent overflow */
}

.key-insights-prominent {
  margin-bottom: var(--space-2xl);
}

.key-insights-prominent h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-xl);
  color: var(--text-primary);
}

.meeting-sidebar {
  position: sticky;
  top: var(--space-xl);
  height: fit-content;
}

.sidebar-section {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar-section h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.quick-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.quick-action-btn {
  padding: var(--space-sm) var(--space-md);
  background: rgba(9, 105, 218, 0.1);
  color: var(--meeting-1-primary, #0969da);
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.quick-action-btn:hover {
  background: rgba(9, 105, 218, 0.2);
  text-decoration: none;
}

.assessment-status {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.status-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.status-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.status-bar {
  height: 6px;
  background: rgba(9, 105, 218, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.status-fill {
  height: 100%;
  background: var(--meeting-1-primary, #0969da);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.action-items-section {
  max-width: 1200px;
  margin: var(--space-2xl) auto 0;
  padding: 0 var(--space-lg);
}

.action-items-section h2 {
  margin-bottom: var(--space-xl);
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .meeting-content-layout {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .meeting-sidebar {
    position: static;
    order: -1; /* Move sidebar above content on mobile */
  }

  .sidebar-section {
    margin-bottom: var(--space-md);
  }
}

@media (max-width: 768px) {
  .progress-indicator {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }

  .progress-track {
    width: 100%;
  }
}

/* DORA Dashboard Horizontal Layout */
.dora-dashboard {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin: var(--space-xl) 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dashboard-header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.dashboard-header h3 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.dashboard-header p {
  color: var(--text-secondary);
  font-size: var(--font-size-base);
}

.metrics-horizontal {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.metric-tile {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: #f8fafc;
  border: 1px solid rgba(9, 105, 218, 0.1);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.metric-tile:hover {
  border-color: rgba(9, 105, 218, 0.2);
  box-shadow: 0 2px 8px rgba(9, 105, 218, 0.1);
}

.metric-icon-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(9, 105, 218, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.metric-icon-container i {
  font-size: var(--font-size-lg);
  color: var(--meeting-1-primary, #0969da);
}

.metric-info {
  flex: 1;
  min-width: 0;
}

.metric-info h4 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.metric-desc {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-sm);
}

.metric-benchmark {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.metric-benchmark span {
  font-size: var(--font-size-xs);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: var(--font-weight-medium);
}

.metric-benchmark .elite {
  background: rgba(34, 197, 94, 0.1);
  color: #166534;
}

.metric-benchmark .high {
  background: rgba(59, 130, 246, 0.1);
  color: #1e40af;
}

.metric-benchmark .medium {
  background: rgba(245, 158, 11, 0.1);
  color: #92400e;
}

/* Mobile Responsive for DORA Dashboard */
@media (max-width: 1024px) {
  .metrics-horizontal {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }
}

@media (max-width: 768px) {
  .metrics-horizontal {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .metric-tile {
    padding: var(--space-md);
    gap: var(--space-sm);
  }

  .metric-icon-container {
    width: 40px;
    height: 40px;
  }

  .dashboard-header {
    margin-bottom: var(--space-lg);
  }
}

/* Interactive Learning Checkpoint */
.learning-checkpoint {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin: var(--space-2xl) 0;
  padding: var(--space-xl);
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 2px solid rgba(9, 105, 218, 0.2);
  border-radius: var(--radius-lg);
}

.checkpoint-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  text-align: center;
  box-shadow: 0 4px 12px rgba(9, 105, 218, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.checkpoint-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(9, 105, 218, 0.2);
  border-color: rgba(9, 105, 218, 0.3);
}

.checkpoint-card h4 {
  margin: 0 0 var(--space-md) 0;
  color: var(--meeting-1-primary, #0969da);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.checkpoint-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  font-size: var(--font-size-base);
}

/* Radio button styles for checkpoints */
.checkpoint-card input[type="radio"] {
  margin-right: var(--space-sm);
  transform: scale(1.2);
  accent-color: var(--meeting-1-primary, #0969da);
}

.checkpoint-card label {
  display: block;
  padding: var(--space-sm) var(--space-md);
  margin: var(--space-sm) 0;
  border: 1px solid rgba(9, 105, 218, 0.2);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.checkpoint-card label:hover {
  background: rgba(9, 105, 218, 0.05);
  border-color: rgba(9, 105, 218, 0.3);
}

.checkpoint-card input[type="radio"]:checked + label {
  background: rgba(9, 105, 218, 0.1);
  border-color: var(--meeting-1-primary, #0969da);
  font-weight: var(--font-weight-medium);
}

/* Slider styles for checkpoints */
.checkpoint-card input[type="range"] {
  width: 100%;
  margin: var(--space-md) 0;
  accent-color: var(--meeting-1-primary, #0969da);
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-top: var(--space-sm);
}

/* Feedback area */
.feedback-area {
  margin-top: var(--space-lg);
  padding: var(--space-md);
  background: rgba(9, 105, 218, 0.05);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  color: var(--text-primary);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile responsive for checkpoints */
@media (max-width: 768px) {
  .learning-checkpoint {
    grid-template-columns: 1fr;
    padding: var(--space-lg);
    gap: var(--space-lg);
  }

  .checkpoint-card {
    padding: var(--space-lg);
  }
}

/* Consolidated Discussion Section */
.discussion-section {
  max-width: 1200px;
  margin: var(--space-2xl) auto;
  padding: 0 var(--space-lg);
}

.discussion-section h2 {
  margin-bottom: var(--space-xl);
}

.discussion-consolidated {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.discussion-expandable {
  background: white;
  border: 1px solid rgba(9, 105, 218, 0.1);
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.discussion-expandable:hover {
  border-color: rgba(9, 105, 218, 0.2);
  box-shadow: 0 4px 12px rgba(9, 105, 218, 0.1);
}

.discussion-expandable[open] {
  border-color: var(--meeting-1-primary, #0969da);
}

.discussion-summary {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-xl);
  cursor: pointer;
  background: #f8fafc;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  list-style: none;
  transition: all 0.2s ease;
}

.discussion-summary:hover {
  background: rgba(9, 105, 218, 0.05);
}

.discussion-summary::-webkit-details-marker {
  display: none;
}

.discussion-summary i:first-child {
  color: var(--meeting-1-primary, #0969da);
  font-size: var(--font-size-lg);
  width: 24px;
  text-align: center;
}

.discussion-summary span {
  flex: 1;
  font-size: var(--font-size-lg);
}

.discussion-summary i:last-child {
  color: var(--text-secondary);
  transition: transform 0.3s ease;
}

.discussion-expandable[open] .discussion-summary i:last-child {
  transform: rotate(180deg);
}

.discussion-content {
  padding: var(--space-xl);
  background: white;
  border-top: 1px solid rgba(9, 105, 218, 0.1);
}

.discussion-content h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--meeting-1-primary, #0969da);
  margin-bottom: var(--space-md);
}

.discussion-content ul {
  margin: 0;
  padding-left: var(--space-lg);
}

.discussion-content li {
  margin-bottom: var(--space-md);
  color: var(--text-primary);
  line-height: 1.6;
}

.discussion-content li:last-child {
  margin-bottom: 0;
}

/* Mobile responsive for discussion */
@media (max-width: 768px) {
  .discussion-summary {
    padding: var(--space-md) var(--space-lg);
    gap: var(--space-sm);
  }

  .discussion-summary span {
    font-size: var(--font-size-base);
  }

  .discussion-content {
    padding: var(--space-lg);
  }

  .discussion-content h4 {
    font-size: var(--font-size-base);
  }
}

/* Original Meeting 1 Wireframe Styling (Updated) */
/* Meeting 1 Wireframe Styling */
.meeting-hero-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.meeting-video-card,
.meeting-podcast-card {
  background: var(--card-dark);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

/* DORA Metrics Layout */
.dora-metrics-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin: var(--space-2xl) 0;
}

.metric-card {
  background: var(--background-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  text-align: center;
  border: 1px solid var(--border-light);
  transition: all var(--duration-normal) var(--ease-out);
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--elevation-3);
}

.metric-icon {
  font-size: var(--font-size-3xl);
  color: var(--accent-emerald);
  margin-bottom: var(--space-md);
}

.metric-card h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-sm);
  color: var(--text-dark);
}

.metric-card p {
  color: var(--text-medium);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-md);
}

.metric-target {
  background: var(--accent-emerald);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

/* Speed vs Stability */
.speed-vs-stability {
  margin: var(--space-md) 0;
}

.comparison-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  background: var(--card-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
}

.old-thinking,
.new-thinking {
  text-align: center;
}

.old-thinking h4,
.new-thinking h4 {
  color: var(--text-white);
  margin-bottom: var(--space-md);
}

.old-thinking p,
.new-thinking p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-lg);
}

.old-thinking ul,
.new-thinking ul {
  list-style: none;
  padding: 0;
}

.old-thinking li,
.new-thinking li {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.old-thinking i {
  color: var(--accent-coral);
}

.new-thinking i {
  color: var(--accent-emerald);
}

/* Discussion Questions */
.discussion-questions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  margin: var(--space-2xl) 0;
}

.discussion-card {
  background: var(--card-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.discussion-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.discussion-header i {
  color: var(--accent-teal);
  font-size: var(--font-size-xl);
  background: rgba(122, 218, 209, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.discussion-header h4 {
  color: var(--text-white);
  font-size: var(--font-size-lg);
  margin: 0;
}

.discussion-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-md);
  font-weight: var(--font-weight-medium);
}

.discussion-content ul {
  list-style: none;
  padding: 0;
}

.discussion-content li {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-sm);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

/* Action Items */
.action-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin: var(--space-2xl) 0;
}

.action-card {
  background: var(--card-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--duration-normal) var(--ease-out);
}

.action-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
}

.action-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.action-header i {
  color: var(--accent-emerald);
  font-size: var(--font-size-xl);
  background: rgba(16, 185, 129, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-header h4 {
  color: var(--text-white);
  font-size: var(--font-size-lg);
  margin: 0;
}

.action-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-md);
  font-weight: var(--font-weight-medium);
}

.action-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space-lg);
}

.action-content li {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-sm);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.btn-action {
  background: linear-gradient(135deg, var(--accent-emerald), var(--hover-emerald));
  color: white;
  border: none;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  width: 100%;
}

.btn-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
}

/* Insights Grid */
.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin: var(--space-2xl) 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .meeting-hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .dora-metrics-layout {
    grid-template-columns: 1fr;
  }

  .action-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .comparison-layout {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .discussion-questions-grid {
    grid-template-columns: 1fr;
  }

  .insights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
