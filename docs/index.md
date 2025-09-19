---
layout: default
title: Home
---

<div class="hero-banner">
  <div class="hero-content">
    <h1 class="hero-headline" id="building-high-performing-tech-organizations">Building High Performing<br>Technology Organizations</h1>
    <div class="site-title">
      <h2 id="accelerate-devex-book-club">Accelerate DevEx Book Club</h2>
    </div>
    <p class="hero-subtitle">A structured 2-month journey through "Accelerate" focused on DORA metrics and DevOps transformation</p>
  </div>
  <div class="hero-metrics">
    <a href="{{ '/meetings' | relative_url }}" class="metric-icon">
      <i class="fas fa-calendar-alt"></i>
      <span>Meetings</span>
    </a>
    <a href="{{ '/resources' | relative_url }}" class="metric-icon">
      <i class="fas fa-book-open"></i>
      <span>Resources</span>
    </a>
    <a href="{{ '/prompts' | relative_url }}" class="metric-icon">
      <i class="fas fa-microphone-alt"></i>
      <span>AI Content</span>
    </a>
  </div>
</div>

<div class="welcome-start">
Welcome to our structured 2-month journey through "Accelerate" by Nicole Forsgren, Jez Humble, and Gene Kim. This book club is designed specifically for developers, DevOps practitioners, and engineering leaders who want to transform their organizations through evidence-based practices.
</div>

<div class="quick-start">
<h2><i class="fas fa-book"></i> About the Book Club</h2>
<p><strong>Duration:</strong> 2 Months | <strong>Format:</strong> 4 Biweekly 1-Hour Sessions | <strong>Approach:</strong> Theme-Based Structure</p>
<p>This book club follows the book's own principle of breaking work into small, manageable chunks with a steady, regular pace that allows for deep understanding and practical application.</p>
</div>

<h2 class="section-accent" id="what-youll-learn"><i class="fas fa-bullseye"></i> What You'll Learn</h2>

<div class="learning-highlights">
  <div class="highlight-grid">
    <div class="highlight-card meeting-1">
      <div class="highlight-icon">
        <i class="fas fa-chart-line"></i>
      </div>
      <h3>DORA Metrics</h3>
      <p>Master the four key measurements that drive high-performing teams: Lead Time, Deployment Frequency, Recovery Time, and Change Fail Rate.</p>
      <div class="meeting-badge">Meeting 1</div>
    </div>
    
    <div class="highlight-card meeting-2">
      <div class="highlight-icon">
        <i class="fas fa-rocket"></i>
      </div>
      <h3>Continuous Delivery</h3>
      <p>Learn technical practices that enable both speed and stability: automated testing, deployment pipelines, and trunk-based development.</p>
      <div class="meeting-badge">Meeting 2</div>
    </div>
    
    <div class="highlight-card meeting-3">
      <div class="highlight-icon">
        <i class="fas fa-columns"></i>
      </div>
      <h3>Lean Management</h3>
      <p>Implement work visualization and WIP limits that expose bottlenecks and drive process improvement at the team level.</p>
      <div class="meeting-badge">Meeting 3</div>
    </div>
    
    <div class="highlight-card meeting-4">
      <div class="highlight-icon">
        <i class="fas fa-users"></i>
      </div>
      <h3>Transformational Leadership</h3>
      <p>Develop the five key leadership characteristics that enable teams to implement technical and organizational changes.</p>
      <div class="meeting-badge">Meeting 4</div>
    </div>
  </div>
</div>

<!-- DevOps Virtuous Cycle -->
<section class="devops-cycle-section" aria-label="DevOps Virtuous Cycle">
  <h2 class="devops-cycle__header">DevOps Virtuous Cycle</h2>
  <div class="devops-cycle" aria-label="DevOps Virtuous Cycle">
    <!-- Center Circle -->
    <div class="cycle-center">
      <div class="center-content">
        <h3>Accelerate</h3>
        <p>Delivery</p>
      </div>
    </div>

    <!-- Circular Flow Path -->
    <div class="cycle-path">
      <svg class="cycle-svg" viewBox="0 0 400 400">
        <!-- Background circle -->
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
        <!-- Flow arrows -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-coral)"/>
          </marker>
        </defs>
        <!-- Arrow paths -->
        <path d="M 350 200 A 150 150 0 0 1 283 342" fill="none" stroke="var(--accent-coral)" stroke-width="3" marker-end="url(#arrowhead)" opacity="0.8"/>
        <path d="M 283 342 A 150 150 0 0 1 117 342" fill="none" stroke="var(--accent-coral)" stroke-width="3" marker-end="url(#arrowhead)" opacity="0.8"/>
        <path d="M 117 342 A 150 150 0 0 1 50 200" fill="none" stroke="var(--accent-coral)" stroke-width="3" marker-end="url(#arrowhead)" opacity="0.8"/>
        <path d="M 50 200 A 150 150 0 0 1 117 58" fill="none" stroke="var(--accent-coral)" stroke-width="3" marker-end="url(#arrowhead)" opacity="0.8"/>
        <path d="M 117 58 A 150 150 0 0 1 283 58" fill="none" stroke="var(--accent-coral)" stroke-width="3" marker-end="url(#arrowhead)" opacity="0.8"/>
        <path d="M 283 58 A 150 150 0 0 1 350 200" fill="none" stroke="var(--accent-coral)" stroke-width="3" marker-end="url(#arrowhead)" opacity="0.8"/>
      </svg>
    </div>

    <!-- Practice Nodes -->
    <div class="cycle-node" data-position="plan" style="--angle: 0deg;">
      <div class="node-content">
        <i class="fas fa-clipboard-list"></i>
        <span>Plan</span>
      </div>
    </div>

    <div class="cycle-node" data-position="code" style="--angle: 60deg;">
      <div class="node-content">
        <i class="fas fa-code"></i>
        <span>Code</span>
      </div>
    </div>

    <div class="cycle-node" data-position="build" style="--angle: 120deg;">
      <div class="node-content">
        <i class="fas fa-hammer"></i>
        <span>Build</span>
      </div>
    </div>

    <div class="cycle-node" data-position="test" style="--angle: 180deg;">
      <div class="node-content">
        <i class="fas fa-flask"></i>
        <span>Test</span>
      </div>
    </div>

    <div class="cycle-node" data-position="release" style="--angle: 240deg;">
      <div class="node-content">
        <i class="fas fa-rocket"></i>
        <span>Release</span>
      </div>
    </div>

    <div class="cycle-node" data-position="monitor" style="--angle: 300deg;">
      <div class="node-content">
        <i class="fas fa-chart-line"></i>
        <span>Monitor</span>
      </div>
    </div>

  </div>

  <p class="devops-cycle__description">
    Continuous delivery practices create a virtuous cycle where each phase feeds into the next, accelerating value delivery and organizational learning.
  </p>
</section>
<!-- End DevOps Virtuous Cycle -->

<!-- Culture Transformation Diagram -->
<section class="culture-diagram" aria-label="Culture Transformation Diagram">
  <h2 class="culture-diagram__header">Culture Transformation Journey</h2>
  <div class="culture-diagram__container">
    <div class="culture-box culture-box--red" aria-label="Pathological Culture">
      <span class="culture-icon" aria-hidden="true">
        <!-- SVG: Exclamation Circle (Pathological) -->
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#F44336" stroke-width="2"/><text x="16" y="21" text-anchor="middle" font-size="18" fill="#F44336" font-family="Poppins, sans-serif">!</text></svg>
      </span>
      <h3>Pathological</h3>
      <ul>
        <li>Power-oriented</li>
        <li>Low trust</li>
        <li>Blame culture</li>
      </ul>
    </div>
    <span class="culture-arrow" aria-hidden="true">
      <!-- SVG: Arrow Right -->
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none"><path d="M4 16h36M36 16l-8-8M36 16l-8 8" stroke="#FF9800" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>
    <div class="culture-box culture-box--orange" aria-label="Bureaucratic Culture">
      <span class="culture-icon" aria-hidden="true">
        <!-- SVG: Clipboard List (Bureaucratic) -->
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="6" width="20" height="20" rx="4" stroke="#FF9800" stroke-width="2"/><text x="16" y="21" text-anchor="middle" font-size="16" fill="#FF9800" font-family="Poppins, sans-serif">≡</text></svg>
      </span>
      <h3>Bureaucratic</h3>
      <ul>
        <li>Rule-oriented</li>
        <li>Moderate trust</li>
        <li>Process focus</li>
      </ul>
    </div>
    <span class="culture-arrow" aria-hidden="true">
      <!-- SVG: Arrow Right -->
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none"><path d="M4 16h36M36 16l-8-8M36 16l-8 8" stroke="#4CAF50" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>
    <div class="culture-box culture-box--green" aria-label="Generative Culture">
      <span class="culture-icon" aria-hidden="true">
        <!-- SVG: Lightbulb (Generative) -->
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="18" rx="10" ry="12" stroke="#4CAF50" stroke-width="2"/>
          <rect x="13" y="26" width="6" height="4" rx="2" fill="#4CAF50"/>
          <circle cx="16" cy="16" r="6" fill="none" stroke="#4CAF50" stroke-width="2"/>
          <path d="M16 12v8M12 16h8" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>
      <h3>Generative</h3>
      <ul>
        <li>Performance-oriented</li>
        <li>High trust</li>
        <li>Innovation focus</li>
      </ul>
    </div>
  </div>
</section>
<!-- End Culture Transformation Diagram -->

<h2 class="section-accent"><i class="fas fa-calendar-alt"></i> Meeting Schedule</h2>

<div class="timeline-visual">
  <div class="timeline-line"></div>
  <div class="timeline-nodes">
    <a href="{{ '/meetings/meeting-1/' | relative_url }}" class="timeline-node node-1">
      <div class="node-circle">1</div>
      <div class="node-content">
    <h4>Meeting 1: Foundation</h4>
    <p>Laying the Foundation – The Myth and the Measurement</p>
      </div>
    </a>
    <a href="{{ '/meetings/meeting-2/' | relative_url }}" class="timeline-node node-2">
      <div class="node-circle">2</div>
      <div class="node-content">
    <h4>Meeting 2: Technical Excellence</h4>
    <p>Technical Excellence & Continuous Delivery</p>
      </div>
    </a>
    <a href="{{ '/meetings/meeting-3/' | relative_url }}" class="timeline-node node-3">
      <div class="node-circle">3</div>
      <div class="node-content">
    <h4>Meeting 3: Management & Sustainability</h4>
    <p>Management, Product Development & Sustainability</p>
      </div>
    </a>
    <a href="{{ '/meetings/meeting-4/' | relative_url }}" class="timeline-node node-4">
      <div class="node-circle">4</div>
      <div class="node-content">
    <h4>Meeting 4: Leadership & Transformation</h4>
    <p>Transformational Leadership, ING Case Study, & Make It Your Own</p>
      </div>
    </a>
  </div>
</div>

<h2 class="section-accent"><i class="fas fa-trophy"></i> Transformation Complete</h2>

<div class="transformation-complete-grid">
  <div class="transformation-card">
    <div class="trophy-icon">
      <svg viewBox="0 0 100 100" class="trophy-svg">
        <defs>
          <linearGradient id="trophy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M50 15 L35 25 L35 45 L50 55 L65 45 L65 25 Z" fill="url(#trophy-gradient)"/>
        <rect x="45" y="55" width="10" height="20" fill="url(#trophy-gradient)"/>
        <rect x="35" y="75" width="30" height="5" fill="url(#trophy-gradient)"/>
        <circle cx="30" cy="35" r="8" fill="none" stroke="#FFD700" stroke-width="2"/>
        <circle cx="70" cy="35" r="8" fill="none" stroke="#FFD700" stroke-width="2"/>
      </svg>
    </div>
    <h3><i class="fas fa-graduation-cap"></i> Congratulations!</h3>
    <p>You've completed your DevOps transformation journey! Celebrate your achievement and review your progress through all four meetings.</p>
    <a href="{{ '/transformation-complete/' | relative_url }}" class="resource-link completion-link">View Your Achievement →</a>
  </div>
</div>

<h2 class="section-accent"><i class="fas fa-tools"></i> Resources</h2>

<div class="resources-grid">
  <div class="resource-card">
    <h3><i class="fas fa-book"></i> Meeting Materials</h3>
    <p>Detailed agendas, discussion questions, and action items for each session.</p>
    <a href="{{ '/meetings' | relative_url }}" class="resource-link">View Meeting Guides →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-headphones"></i> Audio & Video Content</h3>
    <p>NotebookLM prompts for creating podcasts and videos to supplement your reading.</p>
    <a href="{{ '/prompts' | relative_url }}" class="resource-link">Content Generation →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-rss"></i> RSS Feeds & Downloads</h3>
    <p>Subscribe to podcast feeds or download audio/video files directly to your device.</p>
    <a href="{{ '/feeds' | relative_url }}" class="resource-link">Subscribe & Download →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-clipboard-list"></i> Between Meetings</h3>
    <p>Activities, reflection questions, and experiments to try between sessions.</p>
    <a href="{{ '/resources' | relative_url }}" class="resource-link">Additional Resources →</a>
  </div>

  <div class="resource-card book-required">
    <div class="book-visual">
      <div class="book-3d">
        <div class="book-cover">
          <h4>ACCELERATE</h4>
          <p class="book-authors">Forsgren • Humble • Kim</p>
          <div class="book-subtitle">The Science of Lean Software and DevOps</div>
        </div>
        <div class="book-spine"></div>
      </div>
      <h3>Required Reading</h3>
      <a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339" class="btn btn-secondary">Get the Book</a>
    </div>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-book"></i> Foundation Resources</h3>
    <p>Essential research and background materials supporting the book club content.</p>
    <ul class="foundation-resources">
      <li><a href="https://dora.dev/research/" target="_blank" rel="noopener noreferrer">State of DevOps Report Archive</a> - Historical DevOps research and trends</li>
      <li><a href="https://cloud.google.com/blog/products/devops-sre/the-2021-accelerate-state-of-devops-report-addresses-burnout-team-performance" target="_blank" rel="noopener noreferrer">DevOps Research and Assessment</a> - Google Cloud DORA insights</li>
      <li><a href="https://dora.dev/capabilities/generative-organizational-culture/" target="_blank" rel="noopener noreferrer">Westrum Organizational Culture Types</a> - DORA culture implementation guide</li>
      <li><a href="https://itrevolution.com/articles/westrums-organizational-model-in-tech-orgs/" target="_blank" rel="noopener noreferrer">IT Revolution Westrum Model</a> - Detailed explanation of culture types</li>
    </ul>
  </div>
</div>

<div class="success-metrics">
<h2>Success Metrics</h2>
<p>By the end of this book club, participants will be able to:</p>
<ul>
<li>Articulate and explain the four DORA metrics</li>
<li>Identify specific organizational bottlenecks and improvement opportunities</li>
<li>Implement action items from sessions in their daily work</li>
<li>Understand culture's impact on technical performance</li>
<li>Have concrete next steps for organizational transformation</li>
</ul>
</div>

<div class="key-question">
<h2>The Key Question</h2>
<p>Throughout our journey, we'll return to this central reflection:</p>
<blockquote>
"What is the single smallest change we can make that would make our next deployment just a tiny bit less painful?"
</blockquote>
</div>

<h2 class="section-accent"><i class="fas fa-tools"></i> Resources</h2>

<div class="resources-grid">
  <div class="resource-card">
    <h3><i class="fas fa-microphone-alt"></i> AI-Generated Podcasts</h3>
    <p>Listen to AI-generated podcast discussions about each meeting's core concepts.</p>
    <a href="{{ '/prompts' | relative_url }}" class="resource-link">NotebookLM Audio →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-video"></i> Video Explanations</h3>
    <p>Watch video explanations of DORA metrics, continuous delivery practices, and transformation strategies.</p>
    <a href="{{ '/prompts' | relative_url }}" class="resource-link">AI Video Content →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-rss"></i> RSS Feeds & Downloads</h3>
    <p>Subscribe to podcast feeds or download audio/video files directly to your device.</p>
    <a href="{{ '/feeds' | relative_url }}" class="resource-link">Subscribe & Download →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-clipboard-list"></i> Between Meetings</h3>
    <p>Activities, reflection questions, and experiments to try between sessions.</p>
    <a href="{{ '/resources' | relative_url }}" class="resource-link">Additional Resources →</a>
  </div>

  <div class="resource-card book-required">
    <div class="book-visual">
      <div class="book-3d">
        <div class="book-cover">
          <h4>ACCELERATE</h4>
          <p class="book-authors">Forsgren • Humble • Kim</p>
          <div class="book-subtitle">The Science of Lean Software and DevOps</div>
        </div>
        <div class="book-spine"></div>
      </div>
      <h3>Required Reading</h3>
      <a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339" class="btn btn-secondary">Get the Book</a>
    </div>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-book"></i> Foundation Resources</h3>
    <p>Essential research and background materials supporting the book club content.</p>
    <ul class="foundation-resources">
      <li><a href="https://dora.dev/research/" target="_blank" rel="noopener noreferrer">State of DevOps Report Archive</a> - Historical DevOps research and trends</li>
      <li><a href="https://cloud.google.com/blog/products/devops-sre/the-2021-accelerate-state-of-devops-report-addresses-burnout-team-performance" target="_blank" rel="noopener noreferrer">DevOps Research and Assessment</a> - Google Cloud DORA insights</li>
      <li><a href="https://dora.dev/capabilities/generative-organizational-culture/" target="_blank" rel="noopener noreferrer">Westrum Organizational Culture Types</a> - DORA culture implementation guide</li>
      <li><a href="https://itrevolution.com/articles/westrums-organizational-model-in-tech-orgs/" target="_blank" rel="noopener noreferrer">IT Revolution Westrum Model</a> - Detailed explanation of culture types</li>
    </ul>
  </div>
</div>

---

<p style="text-align: center; margin-top: 2rem;">
  <a href="{{ '/meetings/meeting-1/' | relative_url }}" class="btn btn-meeting-1"><i class="fas fa-rocket"></i> Get Started with Meeting 1</a>
</p>

<p style="text-align: center; font-style: italic; color: #586069; margin-top: 1rem;">
  Ready to transform your organization into a high-performing technology team?
</p>

<div class="ai-attribution">
  <div class="ai-attribution__icon">
    <i class="fas fa-robot" aria-hidden="true"></i>
  </div>
  <div class="ai-attribution__content">
    <h4 class="ai-attribution__title">AI-Generated Content</h4>
    <p class="ai-attribution__text">This book club content was created with AI assistance from <strong><a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude</a></strong>, <strong><a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a></strong>, <strong><a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer">NotebookLM</a></strong>, <strong><a href="https://www.napkin.ai/" target="_blank" rel="noopener noreferrer">Napkin AI</a></strong>, and <strong><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a></strong> to enhance your learning experience.</p>
    <div class="ai-attribution__tools">
      <div class="ai-tool">
        <i class="fas fa-brain" aria-hidden="true"></i>
        <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude</a>
      </div>
      <div class="ai-tool">
        <i class="fas fa-code" aria-hidden="true"></i>
        <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a>
      </div>
      <div class="ai-tool">
        <i class="fas fa-microphone-alt" aria-hidden="true"></i>
        <a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer">NotebookLM</a>
      </div>
      <div class="ai-tool">
        <i class="fas fa-palette" aria-hidden="true"></i>
        <a href="https://www.napkin.ai/" target="_blank" rel="noopener noreferrer">Napkin AI</a>
      </div>
      <div class="ai-tool">
        <i class="fab fa-github" aria-hidden="true"></i>
        <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a>
      </div>
    </div>
  </div>
</div>
