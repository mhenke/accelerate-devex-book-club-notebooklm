---
layout: meeting
title: "Meeting 1: Foundation"
subtitle: "Laying the Foundation – The Myth and the Measurement"
week: 1
chapters: "1-3"
duration: "1 Hour"
dora_color: "#0969da" # $meeting-1-primary
---

<div class="meeting-hero-content" markdown="0">
  <div class="meeting-video-card">
    {% include simple-card.html
      type="media"
      title="Meeting 1: Foundation"
      subtitle="Video & Key Concepts"
      description="Three experts from Dev, Ops, and Product discuss..."
      media_type="video"
      media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-video.mp4"
      theme="primary"
    %}
  </div>

  <div class="meeting-podcast-card">
    {% include simple-card.html
      type="media"
      title="Meeting 1 Podcast"
      subtitle="Three experts have a cool, balanced, fact-based and grounded discussion about key findings from accelerate."
      media_type="audio"
      media_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-podcast.m4a"
      theme="info"
    %}
  </div>
</div>

### Key Insights

<div class="insights-grid" markdown="0">
  {% include simple-card.html type="insight" icon="fas fa-microscope" title="Evidence-Based" description="Rigorous research backing all findings" theme="info" %}
  {% include simple-card.html type="insight" icon="fas fa-medal" title="Competitive Advantage" description="Software delivery capability drives success" theme="success" %}
  {% include simple-card.html type="insight" icon="fas fa-user-check" title="Process Not People" description="Anxiety signals inefficiency, not failure" theme="info" %}
</div>

#### The Four DORA Metrics

<div class="dora-metrics-layout" markdown="0">
  <div class="metric-card metric-lead-time">
    <div class="metric-content">
      <i class="fas fa-chart-line metric-icon"></i>
      <h4>Lead Time</h4>
      <p>Measures the frequency of software releases</p>
      <div class="metric-target">Target: Daily</div>
    </div>
  </div>

  <div class="metric-card metric-deployment">
    <div class="metric-content">
      <i class="fas fa-clock metric-icon"></i>
      <h4>MTTR</h4>
      <p>Deployment Confidence</p>
      <div class="metric-target">Learn about DORA</div>
    </div>
  </div>

  <div class="metric-card metric-change-fail">
    <div class="metric-content">
      <i class="fas fa-exclamation-triangle metric-icon"></i>
      <h4>Change Failure Rate</h4>
      <p>Learn about DORA</p>
      <div class="metric-target">Target: <15%</div>
    </div>
  </div>
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

### Discussion Questions

<div class="discussion-layout" markdown="0">
  <div class="discussion-questions-grid">
    <div class="discussion-card">
      <div class="discussion-header">
        <i class="fas fa-chart-line"></i>
        <h4>Current State</h4>
      </div>
      <div class="discussion-content">
        <p>Speed vs. Stability</p>
        <ul>
          <li>How do you think your team has been viewed categorized in each methodology?</li>
          <li>Think big teams, long projects in accelerate methodology.</li>
          <li>Measure and measure processes that aren't working</li>
        </ul>
      </div>
    </div>

    <div class="discussion-card">
      <div class="discussion-header">
        <i class="fas fa-users"></i>
        <h4>Current State</h4>
      </div>
      <div class="discussion-content">
        <p>Where do you think team is now related capabilities? Do you look big teams, long projects in accelerate methodology.</p>
        <ul>
          <li>Think big teams, long projects in accelerate methodology.</li>
          <li>Measure and measure processes that aren't working</li>
        </ul>
      </div>
    </div>

  </div>
</div>

## Action Items for Next Meeting

<div class="action-items-layout" markdown="0">
  <div class="action-grid">
    <div class="action-card current-state">
      <div class="action-header">
        <i class="fas fa-chart-line"></i>
        <h4>Current State</h4>
      </div>
      <div class="action-content">
        <p>Start tracking ONE DORA metric this week</p>
        <ul>
          <li>Type measure and deployment</li>
          <li>Take measurements before and after</li>
          <li>Your measure will take more work or</li>
          <li>Need dev keeps infrastructure linked</li>
        </ul>
      </div>
      <div class="action-button">
        <button class="btn-action">→ Start Tracking</button>
      </div>
    </div>

    <div class="action-card deployment-stability">
      <div class="action-header">
        <i class="fas fa-cogs"></i>
        <h4>Deployment Stability</h4>
      </div>
      <div class="action-content">
        <p>Type measure at deployment</p>
        <ul>
          <li>Your pipeline and production and you should track</li>
          <li>Need dev focus tracked</li>
          <li>Want dev keep infrastructure linked</li>
          <li>Track pipeline tracked</li>
        </ul>
      </div>
      <div class="action-button">
        <button class="btn-action">→ Other Metrics</button>
      </div>
    </div>

    <div class="action-card culture-indicators">
      <div class="action-header">
        <i class="fas fa-users"></i>
        <h4>Culture Indicators</h4>
      </div>
      <div class="action-content">
        <p>Culture detective mode</p>
        <ul>
          <li>Where expert environment</li>
          <li>Around all experience</li>
          <li>Team thinking about all capabilities</li>
          <li>Threaten by culture seniors and mainstream behaviors experience point</li>
        </ul>
      </div>
      <div class="action-button">
        <button class="btn-action">→ Audio & Video</button>
      </div>
    </div>

  </div>
</div>

<style>
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
