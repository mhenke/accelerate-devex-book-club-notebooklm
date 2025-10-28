---
layout: meeting
title: "Kickoff"
subtitle: "Setting the Foundation – Preparing for Your 2-Month Journey"
week: 0
meeting: 0
chapters: "No Reading Required"
duration: "30 Minutes"
dora_color: "#6e7681" # Neutral gray for kickoff
---

<!-- Main Content Layout: 70% Content + 30% Sidebar -->

<!-- Meeting Overview Section -->
<div class="chapter-metrics-compact section-card" markdown="0">
<h2><i class="fas fa-rocket" aria-hidden="true"></i> Kickoff Meeting Overview</h2>
<p class="section-intro">This 30-minute informational session sets expectations and prepares everyone for a successful 2-month learning journey through <em>Accelerate</em>.</p>

<div class="chapters-grid">
<div class="chapter-item" data-chapter="format" onclick="showKickoffDetail('format')">
  <div class="chapter-content">
    <div class="chapter-number"><i class="fas fa-calendar-alt"></i></div>
    <div class="chapter-title">Book Club Format</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="practices" onclick="showKickoffDetail('practices')">
  <div class="chapter-content">
    <div class="chapter-number"><i class="fas fa-comments"></i></div>
    <div class="chapter-title">Discussion Practices</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="preparation" onclick="showKickoffDetail('preparation')">
  <div class="chapter-content">
    <div class="chapter-number"><i class="fas fa-tasks"></i></div>
    <div class="chapter-title">Preparation Checklist</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>
</div>

<!-- Expandable Details Section -->
<div class="chapter-details" id="kickoff-details" hidden>
  <div class="chapter-detail" id="detail-format">
    <h3>Book Club Format</h3>
    <p><strong>Duration:</strong> 2 Months | <strong>Meetings:</strong> 4 Sessions | <strong>Cadence:</strong> Biweekly (Weeks 1, 3, 5, 7)</p>
    <ul>
      <li><strong>Meeting 1 (Week 1):</strong> The Myth & Measurement – DORA metrics, speed + stability, Westrum culture</li>
      <li><strong>Meeting 2 (Week 3):</strong> Technical Excellence – Continuous delivery, architecture, security</li>
      <li><strong>Meeting 3 (Week 5):</strong> Management & Sustainability – Lean practices, WIP limits, reducing burnout</li>
      <li><strong>Meeting 4 (Week 7):</strong> Leadership & Transformation – Transformational leadership, ING case study</li>
    </ul>
    <p><strong>Each session is 1 hour</strong> with theme-focused discussions and practical action items.</p>
  </div>

  <div class="chapter-detail" id="detail-practices">
    <h3>Discussion Best Practices</h3>
    <p>Create an environment where everyone can learn and contribute:</p>
    <ul>
      <li><strong>Psychological Safety:</strong> Share challenges openly—no judgment</li>
      <li><strong>Curiosity Over Criticism:</strong> Learn what works, don't critique what doesn't</li>
      <li><strong>Action-Oriented:</strong> Every insight → specific next step</li>
      <li><strong>Evidence-Based:</strong> Reference research findings from the book</li>
      <li><strong>Inclusive:</strong> All roles welcome (engineers, QA, product, managers, operations)</li>
    </ul>
    <p><strong>The Golden Rule:</strong> This isn't about copying other companies' practices—it's about developing <strong>your own capabilities</strong> through experimentation and learning.</p>
  </div>

  <div class="chapter-detail" id="detail-preparation">
    <h3>Preparation Checklist</h3>
    <p>Before Meeting 1 (Week 1), complete these tasks:</p>
    <ul>
      <li><strong>Get the book</strong> <em>Accelerate</em> (physical, audiobook, or Kindle)</li>
      <li><strong>Read Chapters 1-3</strong> (Foundation, Measurement, Culture)</li>
      <li><strong>Complete the 24 Capabilities Self-Assessment</strong> (takes ~10 minutes)</li>
      <li><strong>Optional:</strong> Review the Key Questions document to preview the journey</li>
    </ul>
    <p><strong>Time commitment:</strong> Plan for 2-3 hours total every two weeks: reading (~1.5-2 hours) + optional activities (~30-60 min)</p>
  </div>
</div>

<script>
// Interactive Kickoff Overview Functionality
let currentActiveKickoff = null;

function showKickoffDetail(kickoffId) {
  const detailsContainer = document.getElementById('kickoff-details');
  const targetDetail = document.getElementById('detail-' + kickoffId);
  const clickedItem = document.querySelector('[data-chapter="' + kickoffId + '"]');

  if (currentActiveKickoff === kickoffId) {
    hideKickoffDetails();
    return;
  }

  document.querySelectorAll('.chapter-item').forEach(item => {
    item.classList.remove('active');
  });

  document.querySelectorAll('.chapter-detail').forEach(detail => {
    detail.classList.remove('active');
  });

  detailsContainer.style.display = 'block';
  setTimeout(() => {
    detailsContainer.classList.add('show');
  }, 10);

  targetDetail.classList.add('active');
  clickedItem.classList.add('active');
  currentActiveKickoff = kickoffId;

  setTimeout(() => {
    detailsContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, 300);
}

function hideKickoffDetails() {
  const detailsContainer = document.getElementById('kickoff-details');

  document.querySelectorAll('.chapter-item').forEach(item => {
    item.classList.remove('active');
  });

  document.querySelectorAll('.chapter-detail').forEach(detail => {
    detail.classList.remove('active');
  });

  detailsContainer.classList.remove('show');
  setTimeout(() => {
    detailsContainer.style.display = 'none';
  }, 400);

  currentActiveKickoff = null;
}

document.addEventListener('click', function(event) {
  const detailsContainer = document.getElementById('kickoff-details');
  const kickoffItems = document.querySelectorAll('.chapter-item');

  if (currentActiveKickoff &&
      !detailsContainer.contains(event.target) &&
      !Array.from(kickoffItems).some(item => item.contains(event.target))) {
    hideKickoffDetails();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && currentActiveKickoff) {
    hideKickoffDetails();
  }
});
</script>
</div>

<!-- CENTRAL VIRTUOUS CYCLE QUESTION -->
<div class="key-question-banner" markdown="0">
<div class="key-question-wrapper">
<div class="key-question-label">CENTRAL QUESTION FOR ALL MEETINGS</div>
<div class="key-question-intro">This question connects all four meetings and frames our entire journey:</div>
<div class="key-question-main">
<div class="quote-mark-start">&ldquo;</div>
<div class="question-text">How can we build a virtuous cycle where improving our <em>technical systems</em> enhances our <em>team culture</em>, and where an improved culture, in turn, accelerates our ability to deliver value and achieve better outcomes?</div>
<div class="quote-mark-end">&rdquo;</div>
</div>
<p class="key-question-context">This reflects the book's core argument: technical practices, cultural norms, and organizational performance are mutually reinforcing — not separate concerns.</p>
</div>
</div>

<div class="section-card" markdown="0">
  <div class="step-header">
    <h2><i class="fas fa-play-circle" aria-hidden="true"></i> Media</h2>
  </div>
  <div class="media-content">
    <div class="feature-grid">
      <!-- Video Section -->
      <div class="media-section video-section">
        <div class="video-card">
          <div class="media-controls">
            <video controls width="100%" class="meeting-video">
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-0/Accelerate_Book_Club_Intro.mp4" type="video/mp4">
              <track kind="captions" src="{{ '/assets/captions/meeting-0-video.vtt' | relative_url }}" srclang="en" label="English" default>
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Previous Videos (concise list) -->
          <div class="alternative-video">
            <h4>Previous Videos</h4>
            <ul>
              <li><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-0/Accelerate_Book_Club_Kickoff.mp4" target="_blank">Accelerate Book Club Kickoff</a> (4:51, Oct 22, 2025)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Podcast Section - Compact Playlist -->
      <div class="media-section podcast-section">
        <section class="podcast-playlist" aria-label="Podcast playlist">

          <!-- Podcast Items (Compact List) -->
          <div class="podcast-item" tabindex="0"
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-0/accelerate-mastery-deep-dive.m4a"
               data-title="Accelerate Mastery"
               data-duration="11:38"
               data-type="deep-dive">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Accelerate Mastery">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Accelerate Mastery
                <span class="podcast-type deep-dive">Deep Dive</span>
                <span class="podcast-duration">11:38</span>
              </div>
              <div class="podcast-subtitle">The Data-Driven Blueprint Proving Speed and Stability</div>
            </div>

            <div class="podcast-end">
              <div class="podcast-equalizer">
                <div class="equalizer">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Shared Player at Bottom -->
          <div class="playlist-player">
            <div class="now-playing-header">
              <div class="now-playing-info">
                <div class="playing-indicator-large"></div>
                <div class="now-playing-text-wrapper">
                  <div class="now-playing-label">Now Playing</div>
                  <div class="now-playing-title" id="now-playing-title">Accelerate Mastery</div>
                </div>
              </div>
              <div class="now-playing-time" id="now-playing-time">0:00 / 18:30</div>
            </div>
            <audio id="shared-player" controls>
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-0/accelerate-mastery-deep-dive.m4a" type="audio/mp4" id="shared-player-source">
              Your browser does not support the audio tag.
            </audio>
          </div>
        </section>
      </div>
    </div>

  </div>
</div>

<!-- WHY THIS BOOK MATTERS -->
<div class="section-card" markdown="0">
  <div class="causal-chain-container">
    <div class="infographic-header">
      <h2><i class="fas fa-book-open" aria-hidden="true"></i> Why Accelerate?</h2>
      <p class="research-foundation">This book stands apart from other DevOps resources</p>
    </div>

    <div class="causal-flow">
      <!-- Step 1: Evidence-Based -->,
      <div class="causal-step step-business">
        <div class="step-content">
          <h3>Evidence-Based</h3>
          <p class="step-chapter">Not Just Opinions</p>
          <div class="step-metrics">
            <div class="metric-item">4+ years research</div>
            <div class="metric-item">23,000+ surveys</div>
            <div class="metric-item">2,000+ organizations</div>
          </div>
        </div>
      </div>

      <!-- Arrow 1 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
        <span class="arrow-label">reveals</span>
      </div>

      <!-- Step 2: What Actually Works -->
      <div class="causal-step step-measurement">
        <div class="step-content">
          <h3>What Works</h3>
          <p class="step-chapter">24 Key Capabilities</p>
          <div class="step-metrics">
            <div class="metric-item">Technical practices</div>
            <div class="metric-item">Lean management</div>
            <div class="metric-item">Cultural patterns</div>
          </div>
        </div>
      </div>

      <!-- Arrow 2 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
        <span class="arrow-label">driving</span>
      </div>

      <!-- Step 3: Real Business Impact -->
      <div class="causal-step step-culture">
        <div class="step-content">
          <h3>Business Impact</h3>
          <p class="step-chapter">Measurable Outcomes</p>
          <div class="step-metrics">
            <div class="metric-item">Profitability</div>
            <div class="metric-item">Productivity</div>
            <div class="metric-item">Market share</div>
          </div>
        </div>
      </div>
    </div>

    <div class="impact-stats">
      <h4>High Performers Achieve</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">46x</div>
          <div class="stat-label">More Deployments</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">440x</div>
          <div class="stat-label">Faster Lead Time</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">170x</div>
          <div class="stat-label">Faster Recovery</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2.6x</div>
          <div class="stat-label">Exceed Goals</div>
        </div>
      </div>
      <p class="stats-conclusion">These aren't aspirational goals—they're proven outcomes from organizations that built the right capabilities.</p>
    </div>

  </div>
</div>

<!-- THE 2-MONTH JOURNEY -->
<div class="what-youll-learn-section section-card" markdown="0">
<h2><i class="fas fa-road" aria-hidden="true"></i> Your 2-Month Journey</h2>
<div class="learning-highlights">
<div class="card-grid">
<div class="highlight-card meeting-1 dark-theme">
  <div class="card-header">
    <div class="highlight-icon">
      <i class="fas fa-chart-line" role="img" aria-label="Chart line"></i>
    </div>
    <h3>Week 1: Foundation</h3>
  </div>
  <p><strong>Chapters 1-3:</strong> Learn the four DORA metrics, debunk the speed vs. stability myth, and understand Westrum's culture types.</p>
  <div class="card-footer">
    <a href="{{ '/meetings/meeting-1/' | relative_url }}" class="btn btn--primary-action meeting-badge meeting-badge--1">
      <span>MEETING 1</span>
    </a>
    <div class="meeting-subtitle">The Myth and the Measurement</div>
  </div>
</div>

<div class="highlight-card meeting-2 dark-theme">
  <div class="card-header">
    <div class="highlight-icon">
      <i class="fas fa-rocket" role="img" aria-label="Rocket"></i>
    </div>
    <h3>Week 3: Technical Excellence</h3>
  </div>
  <p><strong>Chapters 4-6:</strong> Master continuous delivery practices, architecture patterns, and shift-left security approaches.</p>
  <div class="card-footer">
    <a href="{{ '/meetings/meeting-2/' | relative_url }}" class="btn btn--primary-action meeting-badge meeting-badge--2">
      <span>MEETING 2</span>
    </a>
    <div class="meeting-subtitle">Continuous Delivery & Architecture</div>
  </div>
</div>

<div class="highlight-card meeting-3 dark-theme">
  <div class="card-header">
    <div class="highlight-icon">
      <i class="fas fa-columns" role="img" aria-label="Columns"></i>
    </div>
    <h3>Week 5: Management</h3>
  </div>
  <p><strong>Chapters 7-10:</strong> Implement Lean management, reduce burnout, and understand what drives employee satisfaction.</p>
  <div class="card-footer">
    <a href="{{ '/meetings/meeting-3/' | relative_url }}" class="btn btn--primary-action meeting-badge meeting-badge--3">
      <span>MEETING 3</span>
    </a>
    <div class="meeting-subtitle">Product Development & Sustainability</div>
  </div>
</div>

<div class="highlight-card meeting-4 dark-theme">
  <div class="card-header">
    <div class="highlight-icon">
      <i class="fas fa-users" role="img" aria-label="Users"></i>
    </div>
    <h3>Week 7: Leadership</h3>
  </div>
  <p><strong>Chapters 11, 16, Conclusion:</strong> Develop transformational leadership skills and learn from real-world transformation case studies.</p>
  <div class="card-footer">
    <a href="{{ '/meetings/meeting-4/' | relative_url }}" class="btn btn--primary-action meeting-badge meeting-badge--4">
      <span>MEETING 4</span>
    </a>
    <div class="meeting-subtitle">Transformation & Case Study</div>
  </div>
</div>
</div>
</div>
</div>

<!-- WHAT SUCCESS LOOKS LIKE -->
<div class="section-card dark-theme full-width" markdown="0">
  <div class="false-choice-container">
    <h2><i class="fas fa-bullseye" aria-hidden="true"></i> What Success Looks Like</h2>
    <h3 class="false-choice-subtitle">By the end of 2 months, you'll be able to:</h3>

    <div class="discussion-questions-list">
      <div class="deployment-signal">
        <h4><i class="fas fa-check-circle"></i> Identify Improvement Opportunities</h4>
        <p>Recognize specific capabilities your team can build to improve software delivery performance and organizational outcomes.</p>
      </div>

      <div class="deployment-signal">
        <h4><i class="fas fa-check-circle"></i> Implement Measurable Changes</h4>
        <p>Start small experiments with technical practices, management approaches, or cultural behaviors that compound over time.</p>
      </div>

      <div class="deployment-signal">
        <h4><i class="fas fa-check-circle"></i> Understand Research-Backed Practices</h4>
        <p>Know what the data shows actually works—and what doesn't—based on evidence from 23,000+ organizations.</p>
      </div>

      <div class="deployment-signal">
        <h4><i class="fas fa-check-circle"></i> Build a Transformation Roadmap</h4>
        <p>Have a concrete, prioritized plan for continued transformation customized to your team's context and constraints.</p>
      </div>
    </div>

  </div>
</div>

<!-- COMMON QUESTIONS -->
<div class="section-card" markdown="0">
  <div class="causal-chain-container">
    <div class="infographic-header">
      <h2><i class="fas fa-question-circle" aria-hidden="true"></i> Common Questions</h2>
      <p class="research-foundation">Answers to questions teams often ask before starting</p>
    </div>

    <div class="alternative-section">
      <div class="alternative-grid">
        <div class="alternative-item">
          <i class="fas fa-book" aria-hidden="true"></i>
          <div class="alternative-content">
            <strong>What if I fall behind on reading?</strong>
            <span>Come anyway! Discussions are theme-based, and you'll still get value. You can catch up for the next meeting.</span>
          </div>
        </div>

        <div class="alternative-item">
          <i class="fas fa-user" aria-hidden="true"></i>
          <div class="alternative-content">
            <strong>Do I need a technical background?</strong>
            <span>No! This book is for anyone in software delivery—engineers, managers, product owners, QA, operations, security, etc.</span>
          </div>
        </div>

        <div class="alternative-item">
          <i class="fas fa-clock" aria-hidden="true"></i>
          <div class="alternative-content">
            <strong>How much time between meetings?</strong>
            <span>Plan for 2-3 hours total every two weeks: reading (~1.5-2 hours) + optional activities (~30-60 min).</span>
          </div>
        </div>

        <div class="alternative-item">
          <i class="fas fa-industry" aria-hidden="true"></i>
          <div class="alternative-content">
            <strong>Does this apply to my industry?</strong>
            <span>Yes. The research covered 2,000+ organizations across all industries. The capabilities are adaptable, not prescriptive.</span>
          </div>
        </div>

        <div class="alternative-item">
          <i class="fas fa-tools" aria-hidden="true"></i>
          <div class="alternative-content">
            <strong>Is this just about DevOps tools?</strong>
            <span>No. It's about capabilities (what you can do), not tools (what you buy). Many capabilities require minimal tooling.</span>
          </div>
        </div>

        <div class="alternative-item">
          <i class="fas fa-forward" aria-hidden="true"></i>
          <div class="alternative-content">
            <strong>What about after 2 months?</strong>
            <span>We have extension resources: working groups, related readings, and capability implementation plans to continue learning.</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- RESOURCES -->
<div class="section-card" markdown="0">
  <div class="step-header">
    <h2><i class="fas fa-book-reader" aria-hidden="true"></i> Resources</h2>
    <p class="section-intro">Essential materials to prepare for your book club journey</p>
  </div>

  <div class="resource-callout-grid">
    <div class="resource-callout">
      <h3><i class="fas fa-file-pdf" aria-hidden="true"></i> Welcome Guide</h3>
      <p>A comprehensive introduction to the Accelerate DevEx Book Club. This guide covers the book club format, meeting schedule, discussion practices, and preparation checklist to help you get the most out of your 2-month journey.</p>
      <p><strong>Kickoff Resource:</strong> <a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-0/welcome-devex-book-club.pdf" class="resource-link" target="_blank"><strong>Download Welcome Guide (PDF)</strong></a></p>
    </div>

    <div class="resource-callout">
      <h3><i class="fas fa-clipboard-check" aria-hidden="true"></i> 24 Capabilities Assessment</h3>
      <p>Before starting your journey, complete this self-assessment to understand your team's current state across all 24 capabilities. This baseline will help you track progress and identify high-impact improvement opportunities.</p>
      <p><strong>Pre-Work Assessment:</strong> <a href="/accelerate-devex-book-club-notebooklm/assessment" class="btn btn--primary-action"><strong>Take Interactive Assessment</strong></a></p>
      <p class="text-sm"><a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/assessments/24-capabilities-assessment.md" class="resource-link" target="_blank">View printable version →</a></p>
    </div>

    <div class="resource-callout">
      <h3><i class="fas fa-chart-line" aria-hidden="true"></i> DORA Metrics Baseline</h3>
      <p>Establish your baseline measurements for the four DORA metrics: Lead Time, Deployment Frequency, MTTR, and Change Failure Rate. You'll use these to measure improvement throughout the book club.</p>
      <p><strong>Metrics Template:</strong> <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/assessments/dora-metrics-template.md" class="resource-link" target="_blank"><strong>Track Your Metrics</strong></a></p>
    </div>
  </div>
</div>

<!-- ACTION ITEMS -->
<div class="section-card action-items" markdown="0">
  <div class="action-header">
    <h2><i class="fas fa-tasks" aria-hidden="true"></i> Preparation for Meeting 1</h2>
    <p class="subtitle">Complete these tasks before Meeting 1 (Week 1) to be ready</p>
  </div>

  <div class="action-list">
    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Get the book <em>Accelerate</em> (physical, audiobook, or Kindle)</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Read Chapters 1-3 (Foundation, Measurement, Culture)</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Complete the 24 Capabilities Self-Assessment (~10 minutes)</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Review the Key Questions document (optional)</span>
      </div>
    </div>

  </div>

  <div class="due-date">
    <i class="fas fa-calendar-check" aria-hidden="true"></i>
    <strong>Due: Before Meeting 1 (Week 1)</strong>
  </div>
</div>

<!-- NEXT MEETING SECTION -->
<div class="welcome-compact section-card next-meeting-card next-meeting-1" markdown="0">
  <h2 id="next-meeting-heading"><i class="fas fa-arrow-right" aria-hidden="true"></i> Next Meeting</h2>
  <p>Start your journey: <strong>Meeting 1 · Foundation</strong> explores the four DORA metrics and how culture drives performance.</p>
  <div class="welcome-cta">
    <a href="/accelerate-devex-book-club-notebooklm/meetings/meeting-1/" class="btn btn--primary-action btn--meeting-1">
      Meeting 1: Foundation
    </a>
    <p class="welcome-cta-subtitle">Chapters 1-3 • DORA Metrics • Westrum Culture Types</p>
  </div>
</div>

<script src="{{ '/assets/js/podcast-player.js' | relative_url }}"></script>
