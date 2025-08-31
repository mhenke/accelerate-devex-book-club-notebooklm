---
layout: meeting
title: 'Meeting 1: Foundation'
subtitle: 'Laying the Foundation – The Myth and the Measurement'
week: 1
chapters: '1-3'
duration: '1 Hour'
dora_color: '#2196F3'
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

## The Four DORA Metrics

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

## Speed vs Stability: The Myth Busted

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

## Culture Assessment

<div class="culture-assessment">
  <h4>Assess Your Organization's Culture</h4>
  <ul>
    <li>Pathological: Power-oriented, low cooperation, blame culture</li>
    <li>Bureaucratic: Rule-oriented, modest cooperation, rules over mission</li>
    <li>Generative: Performance-oriented, high cooperation, mission focused</li>
  </ul>
  <p>Use Westrum's model to identify your team's culture type and discuss how it impacts delivery performance.</p>
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
</div>

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

<!-- Styles are now centralized in /assets/main.css -->

<!-- JavaScript functionality is now centralized in /assets/main.js -->
