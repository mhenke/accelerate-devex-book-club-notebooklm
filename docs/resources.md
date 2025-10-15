---
layout: default
title: Resources
---

<div class="page-hero page-hero--teal" markdown="0">
<div class="hero-content">
<div class="hero-icon">
<i class="fas fa-book-open"></i>
</div>
<h1 class="page-title">Book Club Resources</h1>
<p class="page-subtitle">Supporting materials to enhance your "Accelerate" book club experience</p>
</div>
</div>

<div class="page-container" markdown="0">
<div class="navigation-tabs">
<a href="{{ '/' | relative_url }}" class="nav-tab"><i class="fas fa-home"></i> Home</a>
<a href="{{ '/meetings' | relative_url }}" class="nav-tab"><i class="fas fa-calendar-alt"></i> Meetings</a>
<a href="{{ '/prompts' | relative_url }}" class="nav-tab"><i class="fas fa-microphone-alt"></i> AI Content</a>
<a href="{{ '/resources' | relative_url }}" class="nav-tab active"><i class="fas fa-book-open"></i> Resources</a>
</div>

<div class="section-accent" markdown="0">
<i class="fas fa-clipboard-check"></i>
Between Meetings Activities
</div>

<!-- FEATURED RESOURCE: Culture Before Metrics -->
<div class="featured-resource" markdown="0">
<div class="featured-banner">
<div class="featured-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="featured-content">
<h3>⚠️ Critical Foundation: Culture Before Metrics</h3>
<p>The single most common mistake in DevOps transformation is jumping to metrics without building culture first. This foundational handout explains why sequence matters and how to build the right foundation for sustainable improvement.</p>
<div class="featured-actions">
<a href="{{ '/resources/meetings/meeting-1/handouts/culture-before-metrics' | relative_url }}" class="btn btn--primary-action">Read the Guide →</a>
<span class="featured-badge">Required Reading</span>
</div>
</div>
</div>
</div>

<div class="resource-grid" markdown="0">
<div class="resource-card">
<div class="resource-icon" data-color="#2196F3">
<i class="fas fa-clipboard-check"></i>
</div>
<h3>Between Meetings</h3>
<p>Reflection questions, practical exercises, and activities to deepen your understanding between sessions.</p>
<a href="#section-between-meetings" class="btn btn--secondary-action">View Activities →</a>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#4CAF50">
<i class="fas fa-comments"></i>
</div>
<h3>Discussion Practices</h3>
<p>Facilitation guidelines and techniques for productive book club discussions.</p>
<a href="#section-discussion-practices" class="btn btn--secondary-action">Facilitation Guide →</a>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#FF9800">
<i class="fas fa-arrow-up"></i>
</div>
<h3>Extensions</h3>
<p>Advanced topics and learning paths to continue your DevOps transformation journey.</p>
<a href="#section-extensions" class="btn btn--secondary-action">Explore Extensions →</a>
</div>

</div>
</div>

## <i class="fas fa-folder-open"></i> Resource Categories {#direct-resource-links}

<div class="card-grid" markdown="0">
<div class="card card--gradient card--border-left card--theme-green">
<div class="card__header">
<h4><i class="fas fa-clipboard-list"></i> Activities</h4>
</div>
<div class="card__content">
<p>Reflection questions and practical exercises to deepen understanding between sessions.</p>
<a href="#section-between-meetings" class="btn btn--secondary-action">View Activities →</a>
</div>
</div>

<div class="card card--gradient card--border-left card--theme-green">
<div class="card__header">
<h4><i class="fas fa-chart-bar"></i> Assessments</h4>
</div>
<div class="card__content">
<p>Tools and templates for measuring your team's DevOps performance and culture.</p>
<a href="#section-assessments" class="btn btn--secondary-action">View Assessments →</a>
</div>
</div>

<div class="card card--gradient card--border-left card--theme-green">
<div class="card__header">
<h4><i class="fas fa-arrow-up"></i> Extensions</h4>
</div>
<div class="card__content">
<p>Advanced topics and learning paths to continue your DevOps transformation journey.</p>
<a href="#section-extensions" class="btn btn--secondary-action">Explore Extensions →</a>
</div>
</div>

<div class="card card--gradient card--border-left card--theme-green">
<div class="card__header">
<h4><i class="fas fa-users"></i> Meeting Resources</h4>
</div>
<div class="card__content">
<p>Templates and formats for organizing effective book club meetings.</p>
<a href="#section-meeting-templates" class="btn btn--secondary-action">View Templates →</a>
</div>
</div>
</div>

<div class="feature-grid" markdown="0">
{% assign meetings = site.meetings | sort: "week" %}
{% for meeting in meetings %}
<div class="meeting-resource-card">
<div class="meeting-icon" data-color="{{ meeting.dora_color }}">
{% case forloop.index %}
{% when 1 %}<i class="fas fa-chart-line"></i>
{% when 2 %}<i class="fas fa-sync-alt"></i>
{% when 3 %}<i class="fas fa-building"></i>
{% when 4 %}<i class="fas fa-users"></i>
{% endcase %}
</div>
<h4>{{ meeting.title }}</h4>
<div class="resource-links">
<a href="https://mhenke.github.io/accelerate-devex-book-club-notebooklm/resources/meetings/meeting-{{ meeting.week }}/meeting-guide.md" class="resource-item">
<i class="fas fa-book"></i> Meeting Guide
</a>
<a href="https://mhenke.github.io/accelerate-devex-book-club-notebooklm/resources/meetings/meeting-{{ meeting.week }}/podcast-prompt.md" class="resource-item">
<i class="fas fa-microphone-alt"></i> Podcast Prompt
</a>
<a href="https://mhenke.github.io/accelerate-devex-book-club-notebooklm/resources/meetings/meeting-{{ meeting.week }}/video-prompt.md" class="resource-item">
<i class="fas fa-video"></i> Video Prompt
</a>
</div>
</div>
{% endfor %}
</div>

## Between Meetings Activities {#section-between-meetings}

<div class="learning-checkpoint" markdown="0">
<div class="checkpoint-card">
<h4><i class="fas fa-lightbulb"></i> Post-Meeting Reflection</h4>
<p>After each session, spend 10-15 minutes reflecting on these key areas:</p>
<div class="reflection-items">
<div class="reflection-item">
<strong><i class="fas fa-star"></i> Key Insights:</strong> What surprised you most from this meeting?
</div>
<div class="reflection-item">
<strong><i class="fas fa-user-cog"></i> Personal Application:</strong> How can you apply these concepts in your current role?
</div>
<div class="reflection-item">
<strong><i class="fas fa-exclamation-triangle"></i> Organizational Gaps:</strong> What barriers exist in your organization?
</div>
<div class="reflection-item">
<strong><i class="fas fa-tasks"></i> Action Items:</strong> What specific changes will you make this week?
</div>
</div>
</div>

<div class="checkpoint-card">
<h4><i class="fas fa-dumbbell"></i> Practical Exercises</h4>
<div class="exercise-timeline">
<div class="exercise-week">
<div class="week-marker" data-bg="linear-gradient(135deg, #2196F3, #1976D2)">2</div>
<div class="week-content">
<strong>After Meeting 1:</strong>
<ul>
<li>Measure your team's current DORA metrics</li>
<li>Identify the biggest bottleneck in your deployment pipeline</li>
<li>Start a "deployment pain journal"</li>
</ul>
</div>
</div>

<div class="exercise-week">
<div class="week-marker" data-bg="linear-gradient(135deg, #4CAF50, #388E3C)">4</div>
<div class="week-content">
<strong>After Meeting 2:</strong>
<ul>
<li>Assess your organization's culture type using Westrum's model</li>
<li>Interview 3 colleagues about psychological safety</li>
<li>Implement one small continuous delivery practice</li>
</ul>
</div>
</div>

<div class="exercise-week">
<div class="week-marker" data-bg="linear-gradient(135deg, #FF9800, #F57C00)">6</div>
<div class="week-content">
<strong>After Meeting 3:</strong>
<ul>
<li>Map your system's coupling dependencies</li>
<li>Identify opportunities for team autonomy</li>
<li>Experiment with lean management techniques</li>
</ul>
</div>
</div>

<div class="exercise-week">
<div class="week-marker" data-bg="linear-gradient(135deg, #F44336, #D32F2F)">8</div>
<div class="week-content">
<strong>After Meeting 4:</strong>
<ul>
<li>Practice transformational leadership behaviors</li>
<li>Create a learning culture initiative</li>
<li>Develop your transformation roadmap</li>
</ul>
</div>
</div>
</div>

</div>
</div>

## Discussion Practices {#section-discussion-practices}

<div class="myth-buster" markdown="0">
<div class="myth-side">
<h3><i class="fas fa-shield-alt"></i> Creating Psychological Safety</h3>
<div class="safety-practices">
<div class="practice-item">
<i class="fas fa-comments"></i>
<div>
<strong>Start with check-ins</strong>
<p>How is everyone feeling about the concepts?</p>
</div>
</div>
<div class="practice-item">
<i class="fas fa-question-circle"></i>
<div>
<strong>Normalize not knowing</strong>
<p>"This is complex, let's figure it out together"</p>
</div>
</div>
<div class="practice-item">
<i class="fas fa-lightbulb"></i>
<div>
<strong>Encourage questions</strong>
<p>"What would you like to understand better?"</p>
</div>
</div>
<div class="practice-item">
<i class="fas fa-exclamation-triangle"></i>
<div>
<strong>Share failures</strong>
<p>Discuss what hasn't worked in your organizations</p>
</div>
</div>
</div>
</div>

<div class="vs-divider">
<span><i class="fas fa-arrow-right"></i></span>
</div>

<div class="reality-side">
<h3><i class="fas fa-users"></i> Facilitation Techniques</h3>
<div class="facilitation-techniques">
<div class="technique-card">
<h4><i class="fas fa-sync-alt"></i> Round-Robin Sharing</h4>
<p>Give everyone a chance to share insights without interruption.</p>
</div>
<div class="technique-card">
<h4><i class="fas fa-puzzle-piece"></i> Problem-Solution Pairs</h4>
<p>Identify organizational challenges, then brainstorm solutions together.</p>
</div>
<div class="technique-card">
<h4><i class="fas fa-globe"></i> Real-World Examples</h4>
<p>Share concrete examples from your work experiences.</p>
</div>
<div class="technique-card">
<h4><i class="fas fa-handshake"></i> Action Commitments</h4>
<p>End each session with specific commitments for the next two weeks.</p>
</div>
</div>
</div>
</div>

## Extensions {#section-extensions}

<div class="resource-grid" markdown="0">
<div class="resource-card">
<div class="resource-icon" data-color="#2196F3">
<i class="fas fa-book"></i>
</div>
<h3>Advanced Reading</h3>
<p>After completing "Accelerate," consider these follow-up books:</p>
<ul class="book-list">
<li><strong>"The DevOps Handbook"</strong> - Practical implementation guide</li>
<li><strong>"Team Topologies"</strong> - Modern organizational design</li>
<li><strong>"The Phoenix Project"</strong> - DevOps transformation story</li>
<li><strong>"Continuous Delivery"</strong> - Technical practices deep-dive</li>
</ul>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#4CAF50">
<i class="fas fa-graduation-cap"></i>
</div>
<h3>Professional Development</h3>
<div class="development-paths">
<div class="path-item">
<i class="fas fa-certificate"></i>
<span>DevOps Institute Certifications</span>
</div>
<div class="path-item">
<i class="fas fa-chart-bar"></i>
<span>DORA State of DevOps Reports (annual)</span>
</div>
<div class="path-item">
<i class="fas fa-users"></i>
<span>DevOps conferences and meetups</span>
</div>
<div class="path-item">
<i class="fas fa-comments"></i>
<span>Internal communities of practice</span>
</div>
</div>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#FF9800">
<i class="fas fa-chart-line"></i>
</div>
<h3>Measurement & Monitoring</h3>
<div class="monitoring-practices">
<div class="practice-item">
<i class="fas fa-tachometer-alt"></i>
<span>Set up DORA metrics tracking</span>
</div>
<div class="practice-item">
<i class="fas fa-sitemap"></i>
<span>Implement value stream mapping</span>
</div>
<div class="practice-item">
<i class="fas fa-heartbeat"></i>
<span>Create organizational health dashboards</span>
</div>
<div class="practice-item">
<i class="fas fa-clipboard-check"></i>
<span>Regular culture assessments</span>
</div>
</div>
</div>
</div>

## Handouts & Printable Resources {#section-handouts}

<div class="resource-grid" markdown="0">
<div class="resource-card featured">
<div class="resource-icon" data-color="#F44336">
<i class="fas fa-exclamation-triangle"></i>
</div>
<h3>Culture Before Metrics</h3>
<p><strong>Critical Foundation:</strong> Why culture must come before measurement in DevOps transformation. The single most important handout for avoiding transformation pitfalls.</p>
<ul>
<li>Understanding the trap of metrics-first transformation</li>
<li>The correct sequence: Culture → Metrics → Acceleration</li>
<li>Self-assessment for cultural readiness</li>
<li>Practical guidance for building trust first</li>
</ul>
<a href="{{ '/resources/meetings/meeting-1/handouts/culture-before-metrics' | relative_url }}" class="btn btn--primary-action">Read Guide →</a>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#2196F3">
<i class="fas fa-book-reader"></i>
</div>
<h3>Meeting Handouts</h3>
<p>Each meeting includes comprehensive handouts: attendee guides, facilitator agendas, and action item trackers.</p>
<a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/tree/main/resources/meetings/meeting-1/handouts" class="btn btn--secondary-action">View Handouts →</a>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#4CAF50">
<i class="fas fa-tasks"></i>
</div>
<h3>Deep-Dive Guides</h3>
<p>Comprehensive reference materials on architecture, security, metrics, and culture change available in each meeting's handouts folder.</p>
<a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/tree/main/resources/meetings" class="btn btn--secondary-action">Browse All Meetings →</a>
</div>
</div>

## Assessments {#section-assessments}

<div class="learning-checkpoint" markdown="0">
<div class="checkpoint-card">
<h4><i class="fas fa-chart-bar"></i> DORA Metrics Assessment</h4>
<p>Use these tools to measure your team's current DevOps performance:</p>
<ul>
<li>Track deployment frequency over the last month</li>
<li>Measure lead time from commit to production</li>
<li>Calculate mean time to restore service</li>
<li>Monitor change failure rate</li>
</ul>
<p>See the <a href="#dora-metrics-summary">DORA Metrics Summary</a> below for performance benchmarks.</p>
</div>

<div class="checkpoint-card">
<h4><i class="fas fa-users"></i> Culture Assessment</h4>
<p>Evaluate your organizational culture using Westrum's model:</p>
<ul>
<li>How is information shared across teams?</li>
<li>How are failures handled and discussed?</li>
<li>Is cross-functional collaboration encouraged?</li>
<li>Do teams have autonomy to make decisions?</li>
</ul>
<p>See the <a href="#culture-types-westrum">Culture Types</a> below for reference.</p>
</div>
</div>

## Meeting Templates {#section-meeting-templates}

<div class="resource-grid" markdown="0">
<div class="resource-card">
<div class="resource-icon" data-color="#2196F3">
<i class="fas fa-clipboard-list"></i>
</div>
<h3>Meeting Notes Template</h3>
<p>Structured template for capturing key discussions, insights, and action items from each session.</p>
<ul>
<li>Date, attendees, and chapter coverage</li>
<li>Key discussion points and insights</li>
<li>Action items and commitments</li>
<li>Questions for next meeting</li>
</ul>
</div>

<div class="resource-card">
<div class="resource-icon" data-color="#4CAF50">
<i class="fas fa-sync-alt"></i>
</div>
<h3>Retrospective Format</h3>
<p>Framework for reflecting on the book club experience and planning improvements.</p>
<ul>
<li>What went well?</li>
<li>What could be improved?</li>
<li>Action items for next cycle</li>
<li>Celebration of progress</li>
</ul>
</div>
</div>

---

<div class="section-accent" markdown="0">
<i class="fas fa-bookmark"></i>
Quick Reference
</div>

### DORA Metrics Summary {#dora-metrics-summary}

<div class="content-grid" markdown="0">
<div class="metric-card lead-time">
<div class="metric-title"><i class="fas fa-chart-line"></i> Lead Time</div>
<div class="performance-levels">
<div class="perf-level elite">Elite: &lt; 1 hour</div>
<div class="perf-level high">High: 1 day - 1 week</div>
<div class="perf-level medium">Medium: 1 week - 1 month</div>
<div class="perf-level low">Low: 1-6 months</div>
</div>
</div>

<div class="metric-card deploy-frequency">
<div class="metric-title"><i class="fas fa-rocket"></i> Deploy Frequency</div>
<div class="performance-levels">
<div class="perf-level elite">Elite: Multiple/day</div>
<div class="perf-level high">High: 1/week - 1/month</div>
<div class="perf-level medium">Medium: 1/month - 1/6months</div>
<div class="perf-level low">Low: &lt; 1/6months</div>
</div>
</div>

<div class="metric-card restore-time">
<div class="metric-title"><i class="fas fa-clock"></i> MTTR</div>
<div class="performance-levels">
<div class="perf-level elite">Elite: &lt; 1 hour</div>
<div class="perf-level high">High: &lt; 1 day</div>
<div class="perf-level medium">Medium: &lt; 1 week</div>
<div class="perf-level low">Low: 1 week - 1 month</div>
</div>
</div>

<div class="metric-card change-fail">
<div class="metric-title"><i class="fas fa-exclamation-triangle"></i> Change Fail Rate</div>
<div class="performance-levels">
<div class="perf-level elite">Elite: 0-15%</div>
<div class="perf-level high">High: 0-15%</div>
<div class="perf-level medium">Medium: 0-15%</div>
<div class="perf-level low">Low: 31-45%</div>
</div>
</div>
</div>

### Culture Types (Westrum) {#culture-types-westrum}

<div class="culture-types" markdown="0">
<div class="culture-card pathological">
<div class="culture-icon"><i class="fas fa-times-circle"></i></div>
<h4>Pathological</h4>
<p>Power-oriented, low trust, blame culture</p>
</div>

<div class="culture-card bureaucratic">
<div class="culture-icon"><i class="fas fa-file-alt"></i></div>
<h4>Bureaucratic</h4>
<p>Rule-oriented, modest trust, process focus</p>
</div>

<div class="culture-card generative">
<div class="culture-icon"><i class="fas fa-rocket"></i></div>
<h4>Generative</h4>
<p>Performance-oriented, high trust, innovation focus</p>
</div>
</div>

---

---

<footer class="ai-attribution" markdown="0">
<div class="ai-attribution__icon">
<i class="fas fa-robot" aria-hidden="true"></i>
</div>
<div class="ai-attribution__content">
<h4 class="ai-attribution__title">AI-Generated Content</h4>
<p class="ai-attribution__text">This content was created with AI assistance from <strong><a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude</a></strong>, <strong><a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a></strong>, <strong><a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer">NotebookLM</a></strong>, <strong><a href="https://www.napkin.ai/" target="_blank" rel="noopener noreferrer">Napkin AI</a></strong>, and <strong><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a></strong>.</p>
</div>
</footer>
