---
layout: default
title: Home
---

<div class="hero-banner">
  <div class="hero-content">
    <h1 class="hero-headline">Building High Performing<br>Technology Organizations</h1>
    <div class="site-title">
      <h2>Accelerate DevEx Book Club</h2>
    </div>
    <p class="hero-subtitle">A structured 2-month journey through "Accelerate" focused on DORA metrics and DevOps transformation</p>
  </div>
  <div class="hero-metrics">
    <a href="{{ '/meetings/' | relative_url }}" class="metric-icon">
      <i class="fas fa-calendar-alt"></i>
      <span>Meetings</span>
    </a>
    <a href="{{ '/resources/' | relative_url }}" class="metric-icon">
      <i class="fas fa-book-open"></i>
      <span>Resources</span>
    </a>
    <a href="{{ '/prompts/' | relative_url }}" class="metric-icon">
      <i class="fas fa-microphone-alt"></i>
      <span>AI Content</span>
    </a>
  </div>
</div>

Welcome to our structured 2-month journey through "Accelerate" by Nicole Forsgren, Jez Humble, and Gene Kim. This book club is designed specifically for developers, DevOps practitioners, and engineering leaders who want to transform their organizations through evidence-based practices.

<div class="quick-start">
<h2><i class="fas fa-book"></i> About the Book Club</h2>
<p><strong>Duration:</strong> 2 Months | <strong>Format:</strong> 4 Biweekly 1-Hour Sessions | <strong>Approach:</strong> Theme-Based Structure</p>
<p>This book club follows the book's own principle of breaking work into small, manageable chunks with a steady, regular pace that allows for deep understanding and practical application.</p>
</div>

## <i class="fas fa-bullseye"></i> What You'll Learn

<div class="dora-metrics-visual">
  <h3>The Four DORA Metrics</h3>
  <div class="metrics-grid">
      <div class="metric-card lead-time">
        <div class="metric-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#2196F3" stroke="#ffffff" stroke-width="2"/>
            <path d="M12 6v6l4 2" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>Lead Time</h4>
        <p>Time from code commit to production deployment</p>
        <span class="tooltip">Measures how quickly code moves from commit to production.</span>
        <div class="meeting-title">Meeting 1: Foundation</div>
      </div>
      <div class="metric-card deployment-frequency">
        <div class="metric-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#4CAF50" stroke="#ffffff" stroke-width="2"/>
            <path d="M12 7v10M7 12h10" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M12 7l-3 3M12 7l3 3" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h4>Deployment Frequency</h4>
        <p>How often code gets deployed to production</p>
        <span class="tooltip">Tracks how frequently you release to production.</span>
        <div class="meeting-title">Meeting 2: Culture & CD</div>
      </div>
      <div class="metric-card recovery-time">
        <div class="metric-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#FF9800" stroke="#ffffff" stroke-width="2"/>
            <path d="M12 6.5l2.5 5 5.5 0.8-4 3.9 0.9 5.7-4.9-2.6-4.9 2.6 0.9-5.7-4-3.9 5.5-0.8z" fill="#ffffff"/>
          </svg>
        </div>
        <h4>Mean Time to Recovery</h4>
        <p>How quickly service is restored after incidents</p>
        <span class="tooltip">Measures time to restore service after a failure.</span>
        <div class="meeting-title">Meeting 3: Architecture</div>
      </div>
      <div class="metric-card fail-rate">
        <div class="metric-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#F44336" stroke="#ffffff" stroke-width="2"/>
            <path d="M12 7v6M12 15h0" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="12" cy="15" r="1" fill="#ffffff"/>
          </svg>
        </div>
        <h4>Change Fail Rate</h4>
        <p>Percentage of deployments causing failures</p>
        <span class="tooltip">Shows the rate of failed changes in production.</span>
        <div class="meeting-title">Meeting 4: Leadership</div>
      </div>
  </div>
</div>

- How to **debunk the speed vs. stability myth**
- **Organizational culture types** and how to drive transformation
- **Continuous delivery practices** that improve both performance and culture
- **Architecture patterns** that enable team autonomy
- **Leadership practices** that create psychological safety and innovation

<!-- DevOps Practices Wheel -->
<section class="devops-wheel-section" aria-label="DevOps Practices Wheel">
  <h2 class="devops-wheel__header">High Performance DevOps Practices</h2>
  <div class="devops-wheel" aria-label="DevOps Practices Wheel">
    <div class="wheel-center">
      <h3>High<br>Performance</h3>
    </div>
    
    <div class="practice-spoke practice-ci" style="--angle: 0deg;">
      <div class="spoke-line"></div>
      <div class="spoke-icon">
        <i class="fas fa-code-branch" aria-hidden="true"></i>
      </div>
      <div class="spoke-label">Continuous<br>Integration</div>
    </div>
    
    <div class="practice-spoke practice-testing" style="--angle: 72deg;">
      <div class="spoke-line"></div>
      <div class="spoke-icon">
        <i class="fas fa-flask" aria-hidden="true"></i>
      </div>
      <div class="spoke-label">Automated<br>Testing</div>
    </div>
    
    <div class="practice-spoke practice-monitoring" style="--angle: 144deg;">
      <div class="spoke-line"></div>
      <div class="spoke-icon">
        <i class="fas fa-chart-area" aria-hidden="true"></i>
      </div>
      <div class="spoke-label">Monitoring &<br>Observability</div>
    </div>
    
    <div class="practice-spoke practice-version" style="--angle: 216deg;">
      <div class="spoke-line"></div>
      <div class="spoke-icon">
        <i class="fab fa-git-alt" aria-hidden="true"></i>
      </div>
      <div class="spoke-label">Version<br>Control</div>
    </div>
    
    <div class="practice-spoke practice-deployment" style="--angle: 288deg;">
      <div class="spoke-line"></div>
      <div class="spoke-icon">
        <i class="fas fa-rocket" aria-hidden="true"></i>
      </div>
      <div class="spoke-label">Deployment<br>Automation</div>
    </div>
  </div>
  
  <p class="devops-wheel__description">
    High-performing teams excel in all five key DevOps practices, creating a virtuous cycle of continuous improvement and innovation.
  </p>
</section>
<!-- End DevOps Practices Wheel -->

## <i class="fas fa-calendar-alt"></i> Meeting Schedule

<div class="timeline-visual">
  <div class="timeline-line"></div>
  <div class="timeline-nodes">
    <div class="timeline-node node-1">
      <div class="node-circle">1</div>
      <div class="node-content">
        <h4>Foundation</h4>
        <p>DORA Metrics</p>
      </div>
      <div class="meeting-title">Meeting 1: Foundation</div>
    </div>
    <div class="timeline-node node-2">
      <div class="node-circle">2</div>
      <div class="node-content">
        <h4>Culture & CD</h4>
        <p>Continuous Delivery</p>
      </div>
      <div class="meeting-title">Meeting 2: Culture & CD</div>
    </div>
    <div class="timeline-node node-3">
      <div class="node-circle">3</div>
      <div class="node-content">
        <h4>Architecture</h4>
        <p>Lean Management</p>
      </div>
      <div class="meeting-title">Meeting 3: Architecture</div>
    </div>
    <div class="timeline-node node-4">
      <div class="node-circle">4</div>
      <div class="node-content">
        <h4>Leadership</h4>
        <p>Transformation</p>
      </div>
      <div class="meeting-title">Meeting 4: Leadership</div>
    </div>
  </div>
</div>

<div class="meeting-grid">
  <div class="meeting-card">
    <div class="meeting-icon"><i class="fas fa-chart-line"></i></div>
    <h3><a href="{{ '/meetings/meeting-1/' | relative_url }}">Meeting 1: Foundation</a></h3>
    <p><strong>Week 1</strong> • Chapters 1-4</p>
    <p>DORA metrics and debunking the speed vs. stability myth</p>
  </div>
  
  <div class="meeting-card">
    <div class="meeting-icon"><i class="fas fa-sync-alt"></i></div>
    <h3><a href="{{ '/meetings/meeting-2/' | relative_url }}">Meeting 2: Culture & CD</a></h3>
    <p><strong>Week 3</strong> • Chapters 5-8</p>
    <p>Westrum culture types and continuous delivery practices</p>
  </div>
  
  <div class="meeting-card">
    <div class="meeting-icon"><i class="fas fa-building"></i></div>
    <h3><a href="{{ '/meetings/meeting-3/' | relative_url }}">Meeting 3: Architecture</a></h3>
    <p><strong>Week 5</strong> • Chapters 9-12</p>
    <p>Loosely coupled systems and lean management</p>
  </div>
  
  <div class="meeting-card">
    <div class="meeting-icon"><i class="fas fa-users"></i></div>
    <h3><a href="{{ '/meetings/meeting-4/' | relative_url }}">Meeting 4: Leadership</a></h3>
    <p><strong>Week 7</strong> • Chapters 13-15</p>
    <p>Transformational leadership and continuous learning</p>
  </div>
</div>

## <i class="fas fa-tools"></i> Resources

<div class="resources-grid">
  <div class="resource-card">
    <h3><i class="fas fa-book"></i> Meeting Materials</h3>
    <p>Detailed agendas, discussion questions, and action items for each session.</p>
    <a href="/meetings/" class="resource-link">View Meeting Guides →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-headphones"></i> Audio & Video Content</h3>
    <p>NotebookLM prompts for creating podcasts and videos to supplement your reading.</p>
    <a href="/prompts/" class="resource-link">Content Generation →</a>
  </div>

  <div class="resource-card">
    <h3><i class="fas fa-clipboard-list"></i> Between Meetings</h3>
    <p>Activities, reflection questions, and experiments to try between sessions.</p>
    <a href="/resources/" class="resource-link">Additional Resources →</a>
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
</div>

<section class="book-cover-section">
  <h3 class="required-reading">Required Reading</h3>
  <div class="book-cover-3d">
    <div class="book-image"></div>
  </div>
  <div class="book-actions">
    <button class="buy-now">Buy Now</button>
    <div class="purchase-icons">
      <span class="icon-amazon" title="Amazon"></span>
      <span class="icon-google" title="Google Books"></span>
      <span class="icon-local" title="Local Bookstore"></span>
    </div>
  </div>
</section>

<div class="success-metrics">
<h2><i class="fas fa-rocket"></i> Success Metrics</h2>
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

---

<p style="text-align: center; margin-top: 2rem;">
  <a href="{{ '/meetings/meeting-1/' | relative_url }}" class="btn"><i class="fas fa-rocket"></i> Get Started with Meeting 1</a>
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
    <p class="ai-attribution__text">This book club content was created with AI assistance from <strong>Claude</strong> and <strong>NotebookLM</strong> to enhance your learning experience.</p>
    <div class="ai-attribution__tools">
      <div class="ai-tool">
        <i class="fas fa-brain" aria-hidden="true"></i>
        <span>Claude</span>
      </div>
      <div class="ai-tool">
        <i class="fas fa-microphone-alt" aria-hidden="true"></i>
        <span>NotebookLM</span>
      </div>
    </div>
  </div>
</div>
