---
layout: meeting
title: "Foundation"
subtitle: "Laying the Foundation – The Myth and the Measurement"
week: 1
chapters: "1-3"
duration: "1 Hour"
dora_color: "#0969da" # $meeting-1-primary
---

<!-- Main Content Layout: 70% Content + 30% Sidebar -->

<!-- Modern Chapters Overview -->
<div class="chapter-metrics-compact section-card" markdown="0">
<h2><i class="fas fa-book-open" aria-hidden="true"></i> Chapters 1-3 Overview</h2>
<div class="chapters-grid">
<div class="chapter-item" data-chapter="accelerate" onclick="showChapterDetail('accelerate')">
  <i class="fas fa-rocket"></i>
  <div class="chapter-content">
    <div class="chapter-number">Chapter 1</div>
    <div class="chapter-title">Accelerate</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="measuring" onclick="showChapterDetail('measuring')">
  <i class="fas fa-chart-line"></i>
  <div class="chapter-content">
    <div class="chapter-number">Chapter 2</div>
    <div class="chapter-title">Measuring Performance</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="culture" onclick="showChapterDetail('culture')">
  <i class="fas fa-users"></i>
  <div class="chapter-content">
    <div class="chapter-number">Chapter 3</div>
    <div class="chapter-title">Measuring and Changing Culture</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>
</div>

<!-- Expandable Details Section -->
<div class="chapter-details" id="chapter-details" hidden>
  <div class="chapter-detail" id="detail-accelerate">
    <h3><i class="fas fa-rocket"></i> Accelerate</h3>
    <p>Software delivery capability drives organizational success across all industries. This chapter presents evidence from 23,000+ survey responses showing that digital transformation is real and software delivery creates competitive advantage.</p>
    <ul>
      <li>Software delivery capability drives organizational success across all industries (profitability, productivity, market share)</li>
      <li>Evidence-based approach: 23,000+ survey responses identifying 24 key capabilities</li>
      <li>Performance predicts success: high-performing software delivery creates competitive advantage</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-measuring">
    <h3><i class="fas fa-chart-line"></i> Measuring Performance</h3>
    <p>Replaces flawed traditional metrics with four reliable DORA metrics that distinguish high-performing teams from low performers.</p>
    <ul>
      <li>Tempo metrics: Lead Time and Deployment Frequency</li>
      <li>Stability metrics: Recovery Time and Change Fail Rate</li>
      <li>Key insight: High performers achieve both speed AND stability simultaneously</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-culture">
    <h3><i class="fas fa-users"></i> Measuring & Changing Culture</h3>
    <p>Proves that culture can be measured and intentionally improved using Westrum's typology. Culture is an outcome, not a precondition for transformation.</p>
    <ul>
      <li>Westrum organizational culture types: Pathological, Bureaucratic, Generative</li>
      <li>Generative culture strongly predicts software delivery and organizational performance</li>
      <li>Key insight: "You can act your way to a better culture" through technical practices</li>
    </ul>
  </div>
</div>

<script>
// Interactive Chapter Overview Functionality
let currentActiveChapter = null;

function showChapterDetail(chapterId) {
  const detailsContainer = document.getElementById('chapter-details');
  const targetDetail = document.getElementById('detail-' + chapterId);
  const clickedItem = document.querySelector('[data-chapter="' + chapterId + '"]');

  // If clicking the same item that's already active, close it
  if (currentActiveChapter === chapterId) {
    hideChapterDetails();
    return;
  }

  // Remove active state from all items
  document.querySelectorAll('.chapter-item').forEach(item => {
    item.classList.remove('active');
  });

  // Hide all detail sections
  document.querySelectorAll('.chapter-detail').forEach(detail => {
    detail.classList.remove('active');
  });

  // Show the details container
  detailsContainer.style.display = 'block';
  setTimeout(() => {
    detailsContainer.classList.add('show');
  }, 10);

  // Show the specific detail and mark item as active
  targetDetail.classList.add('active');
  clickedItem.classList.add('active');
  console.log('Added active class to:', clickedItem);
  console.log('Active classes:', clickedItem.classList);
  currentActiveChapter = chapterId;

  // Smooth scroll to the details section
  setTimeout(() => {
    detailsContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, 300);
}

function hideChapterDetails() {
  const detailsContainer = document.getElementById('chapter-details');

  // Remove active states
  document.querySelectorAll('.chapter-item').forEach(item => {
    item.classList.remove('active');
  });

  document.querySelectorAll('.chapter-detail').forEach(detail => {
    detail.classList.remove('active');
  });

  // Hide with animation
  detailsContainer.classList.remove('show');
  setTimeout(() => {
    detailsContainer.style.display = 'none';
  }, 400);

  currentActiveChapter = null;
}

// Close details when clicking outside
document.addEventListener('click', function(event) {
  const detailsContainer = document.getElementById('chapter-details');
  const chapterItems = document.querySelectorAll('.chapter-item');

  if (currentActiveChapter &&
      !detailsContainer.contains(event.target) &&
      !Array.from(chapterItems).some(item => item.contains(event.target))) {
    hideChapterDetails();
  }
});

// Keyboard accessibility
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && currentActiveChapter) {
    hideChapterDetails();
  }
});
</script>
</div>

<!-- MEETING 1 KEY QUESTION -->

<div class="key-question-banner" markdown="0">
<div class="key-question-content">
<div class="key-question-header">
<div class="key-question-icon">
<i class="fas fa-key" aria-hidden="true"></i>
</div>
<h2 class="key-question-title">MEETING 1 KEY QUESTION</h2>
</div>
<div class="key-question-intro">Throughout this meeting, we'll return to this central reflection:</div>
<div class="key-question-quote">
<div class="quote-content">&ldquo;How do we currently perceive and measure performance, and what would it take to shift our focus from local outputs (like utilization or story points) to the global outcomes of speed and stability that the research proves matter?&rdquo;</div>
</div>
</div>
</div>

<div class="section-card" markdown="0">
  <div class="step-header">
    <h2><i class="fas fa-play-circle"></i> Media</h2>
  </div>
  <div class="media-content">
    <div class="feature-grid">
      <!-- Video Section -->
      <div class="media-section video-section">
        <h3><i class="fas fa-video"></i> Video</h3>
        <div class="video-card">
          <h4>Meeting 1: Foundation</h4>
          <p class="media-subtitle">The Myth and the Measurement</p>
          <p class="media-description">Foundation concepts: Why software delivery matters, DORA metrics explained, and culture as the key enabler.</p>
          <div class="media-controls">
            <video controls width="100%" class="meeting-video">
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Alternative Video -->
          <div class="alternative-video">
            <h5><i class="fas fa-link"></i> Alternative Video</h5>
            <p><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/the-explainer-unpacking-accelerate.mp4" target="_blank">The Explainer: Unpacking "Accelerate"</a></p>
            <p class="alt-video-desc">Alternative foundational overview with expert discussion on core concepts.</p>
          </div>
        </div>
      </div>

      <!-- Podcast Section -->
      <div class="media-section podcast-section">
        <h3><i class="fas fa-podcast"></i> Podcasts</h3>
        <div class="podcast-playlist" role="list">

          <!-- Brief Podcast -->
          <div class="podcast-item" role="listitem" data-episode-id="brief" tabindex="0">
            <div class="podcast-start">
              <div class="playing-indicator" hidden>
                <div class="equalizer">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
              <i class="fas fa-podcast podcast-icon"></i>
            </div>

            <div class="podcast-content">
              <h4 class="podcast-headline">
                Accelerate Metrics Unlocked
                <span class="podcast-type brief">Brief</span>
              </h4>
              <p class="podcast-subtitle">How Speed and Stability Drive 2x Business Performance</p>
              <div class="podcast-metadata">
                <span class="duration">15:30</span>
              </div>
            </div>

            <div class="podcast-controls">
              <audio controls data-episode="brief">
                <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/accelerate-metrics-unlocked.mp4" type="audio/mp4">
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>

          <!-- Deep Dive Podcast -->
          <div class="podcast-item" role="listitem" data-episode-id="deep-dive" tabindex="-1">
            <div class="podcast-start">
              <div class="playing-indicator" hidden>
                <div class="equalizer">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
              <i class="fas fa-podcast podcast-icon"></i>
            </div>

            <div class="podcast-content">
              <h4 class="podcast-headline">
                Accelerate Success
                <span class="podcast-type deep-dive">Deep Dive</span>
              </h4>
              <p class="podcast-subtitle">The Data-Driven Proof That Destroys the CAB Model</p>
              <div class="podcast-metadata">
                <span class="duration">28:45</span>
              </div>
            </div>

            <div class="podcast-controls">
              <audio controls data-episode="deep-dive">
                <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/accelerate-success-deep-dive.mp4" type="audio/mp4">
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>

          <!-- Critique Podcast -->
          <div class="podcast-item" role="listitem" data-episode-id="critique" tabindex="-1">
            <div class="podcast-start">
              <div class="playing-indicator" hidden>
                <div class="equalizer">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
              <i class="fas fa-podcast podcast-icon"></i>
            </div>

            <div class="podcast-content">
              <h4 class="podcast-headline">
                Accelerate Your DevEx
                <span class="podcast-type critique">Critique</span>
              </h4>
              <p class="podcast-subtitle">Why Culture Must Precede Metrics and Why Traditional DevOps Gets It Wrong</p>
              <div class="podcast-metadata">
                <span class="duration">22:15</span>
              </div>
            </div>

            <div class="podcast-controls">
              <audio controls data-episode="critique">
                <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/accelerate-devex-critique.mp4" type="audio/mp4">
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Step-Based Progressive Learning Structure -->

<!-- THE PROBLEM -->
<div class="false-choice-visual" markdown="0">
  <div class="false-choice-container">
    <h2 class="false-choice-main-title">The Problem: False Choice</h2>
    <h3 class="false-choice-subtitle">Most teams believe they must choose the optimal development approach</h3>

    <div class="choice-options">
      <div class="choice-option">
        <div class="choice-circle">
          <i class="fas fa-rocket"></i>
        </div>
        <h4 class="choice-label">Fast Delivery</h4>
        <p class="choice-consequence">High Risk</p>
      </div>

      <div class="vs-separator">
        <div class="vs-circle">
          VS
        </div>
      </div>

      <div class="choice-option">
        <div class="choice-circle">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h4 class="choice-label">Stable Systems</h4>
        <p class="choice-consequence">Slow Pace</p>
      </div>
    </div>

    <div class="deployment-signal">
      <h4>The Signal: Deployment Anxiety</h4>
      <p>That knot in your stomach before deployment isn't personal weakness—it's your organization sending you a message about deeper systemic problems.</p>
    </div>
  </div>
</div>

<!-- THE FRAMEWORK - Causal Chain Infographic -->
<div class="section-card" markdown="0">
  <div class="causal-chain-container">
    <div class="infographic-header">
      <h2>The Framework: How Culture Drives Performance</h2>
      <p class="research-foundation">4 years of research across <strong>23,000+ organizations</strong> reveals this causal chain:</p>
    </div>

    <div class="causal-flow">
      <!-- Step 1: Business Need -->
      <div class="causal-step step-business">
        <div class="step-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="step-content">
          <h3>Business Need</h3>
          <p class="step-chapter">Chapter 1: Competitive Advantage</p>
          <div class="step-metrics">
            <div class="metric-item">Market Share</div>
            <div class="metric-item">Profitability</div>
            <div class="metric-item">Productivity</div>
          </div>
        </div>
      </div>

      <!-- Arrow 1 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right"></i>
        <span class="arrow-label">measured by</span>
      </div>

      <!-- Step 2: Measurement -->
      <div class="causal-step step-measurement">
        <div class="step-icon">
          <i class="fas fa-tachometer-alt"></i>
        </div>
        <div class="step-content">
          <h3>Measurement</h3>
          <p class="step-chapter">Chapter 2: DORA Metrics</p>
          <div class="step-metrics">
            <div class="metric-item">Lead Time</div>
            <div class="metric-item">Deploy Frequency</div>
            <div class="metric-item">Recovery Time</div>
            <div class="metric-item">Change Fail Rate</div>
          </div>
        </div>
      </div>

      <!-- Arrow 2 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right"></i>
        <span class="arrow-label">enabled by</span>
      </div>

      <!-- Step 3: Cultural Foundation -->
      <div class="causal-step step-culture">
        <div class="step-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="step-content">
          <h3>Cultural Foundation</h3>
          <p class="step-chapter">Chapter 3: Westrum Culture</p>
          <div class="step-metrics">
            <div class="metric-item pathological">Pathological</div>
            <div class="metric-item bureaucratic">Bureaucratic</div>
            <div class="metric-item generative">Generative</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Stats Callout -->
    <div class="impact-stats">
      <h4>Research Impact</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">46x</div>
          <div class="stat-label">More Frequent Deployments</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">440x</div>
          <div class="stat-label">Faster Lead Time</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">170x</div>
          <div class="stat-label">Faster Recovery</div>
        </div>
      </div>
      <p class="stats-conclusion">High performers achieve these results because their culture enables better technical practices.</p>
    </div>
  </div>
</div>

<!-- ASSESSMENT SKETCH DIAGRAM -->
<div class="section-card" markdown="0">
  <div class="sketch-container">
    <div class="sketch-header">
      <h2>Assessment: Reading Signals</h2>
      <p class="sketch-intro">Your deployment pain level reveals where you are in the causal chain. Let's connect the dots:</p>
    </div>

    <div class="sketch-diagram">
      <!-- Row 1: High Anxiety → Pathological -->
      <div class="assessment-row">
        <div class="experience-item anxiety">
          <div class="icon-face anxiety">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div class="experience-text">
            <strong>High Anxiety</strong>
            <span class="experience-detail">"stressful events"</span>
          </div>
        </div>
        <div class="connection-arrow">→</div>
        <div class="culture-bubble pathological">
          Pathological/Bureaucratic Culture
        </div>
      </div>

      <!-- Row 2: Moderate Concern → Transitioning -->
      <div class="assessment-row">
        <div class="experience-item concern">
          <div class="icon-face concern">
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="experience-text">
            <strong>Moderate Concern</strong>
            <span class="experience-detail">"some worry, manageable"</span>
          </div>
        </div>
        <div class="connection-arrow">→</div>
        <div class="culture-bubble transitioning">
          Transitioning Culture
        </div>
      </div>

      <!-- Row 3: Confident → Generative -->
      <div class="assessment-row">
        <div class="experience-item confident">
          <div class="icon-face confident">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="experience-text">
            <strong>Confident</strong>
            <span class="experience-detail">"routine, no stress"</span>
          </div>
        </div>
        <div class="connection-arrow">→</div>
        <div class="culture-bubble generative">
          Generative Culture
        </div>
      </div>
    </div>

    <!-- Bottom Message -->
    <div class="sketch-message">
      <div class="hope-bubble">
        <strong>Remember: Culture CAN change through better practices!</strong>
        <span class="meetings-note">(meetings 2-4)</span>
      </div>
    </div>
  </div>
</div>

<!-- KEY INSIGHT: CULTURE CAN BE CHANGED -->
<div class="section-card" markdown="0">
  <div class="causal-chain-container">
    <div class="infographic-header">
      <h2><i class="fas fa-sync" role="img" aria-label="Cycle"></i> Key Insight: You Can Act Your Way to Better Culture</h2>
      <p class="research-foundation">The most important takeaway from chapters 1-3: <strong>Culture isn't fixed.</strong> You can intentionally change it.</p>
    </div>

    <div class="causal-flow">
      <!-- Step 1: Better Practices -->
      <div class="causal-step step-business">
        <div class="step-icon">
          <i class="fas fa-code"></i>
        </div>
        <div class="step-content">
          <h3>Better Practices</h3>
          <p class="step-chapter">Technical Excellence</p>
          <div class="step-metrics">
            <div class="metric-item">CI/CD</div>
            <div class="metric-item">Version Control</div>
            <div class="metric-item">Testing</div>
          </div>
        </div>
      </div>

      <!-- Arrow 1 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right"></i>
        <span class="arrow-label">enable</span>
      </div>

      <!-- Step 2: Better Interactions -->
      <div class="causal-step step-measurement">
        <div class="step-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="step-content">
          <h3>Better Interactions</h3>
          <p class="step-chapter">Daily Work Changes</p>
          <div class="step-metrics">
            <div class="metric-item">Collaboration</div>
            <div class="metric-item">Trust</div>
            <div class="metric-item">Learning</div>
          </div>
        </div>
      </div>

      <!-- Arrow 2 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right"></i>
        <span class="arrow-label">create</span>
      </div>

      <!-- Step 3: Better Culture -->
      <div class="causal-step step-culture">
        <div class="step-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <div class="step-content">
          <h3>Better Culture</h3>
          <p class="step-chapter">Generative Culture</p>
          <div class="step-metrics">
            <div class="metric-item generative">High Performance</div>
            <div class="metric-item generative">Low Anxiety</div>
            <div class="metric-item generative">Speed + Stability</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Stats Callout -->
    <div class="impact-stats">
      <h4>Why This Matters</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-label">Deployment pain reflects culture</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">High performers achieve speed AND stability</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Software delivery drives business success</div>
        </div>
      </div>
      <p class="stats-conclusion"><strong>The Hope:</strong> Meetings 2-4 will cover the specific technical practices that improve culture and performance.</p>
    </div>
  </div>
</div>

<!-- DISCUSSION QUESTIONS -->
<div class="section-card action-items" markdown="0">
  <div class="discussion-header">
    <h2><i class="fas fa-comments"></i> Discussion Questions</h2>
  </div>

  <div class="discussion-questions-list">
    <div class="question-item" role="group" aria-labelledby="q1">
      <div class="question-row">
        <div id="q1" class="question-title">Current State Assessment</div>
      </div>
      <div class="question-content">
        <p>Honestly assess your team's current deployment experience. What anxiety levels exist? What does this reveal about your organizational culture and technical practices?</p>
      </div>
    </div>

    <div class="question-item" role="group" aria-labelledby="q2">
      <div class="question-row">
        <div id="q2" class="question-title">Speed vs. Stability Myths</div>
      </div>
      <div class="question-content">
        <p>Where does your organization fall on the false "speed vs stability" spectrum? What evidence supports the idea that you can achieve both high speed AND high stability?</p>
      </div>
    </div>

    <div class="question-item" role="group" aria-labelledby="q3">
      <div class="question-row">
        <div id="q3" class="question-title">Building the Virtuous Cycle</div>
      </div>
      <div class="question-content">
        <p>Chapter 3 introduces the idea that "you can act your way to a better culture" by implementing specific practices. What's one technical practice we could adopt that might positively shift our team from a "pathological" or "bureaucratic" culture toward a more "generative" one?</p>
      </div>
    </div>

    <div class="question-item" role="group" aria-labelledby="q4">
      <div class="question-row">
        <div id="q4" class="question-title">Culture Indicators</div>
      </div>
      <div class="question-content">
        <p>Using Westrum's model, what behaviors indicate your organization's culture type? How do these behaviors manifest in your technical practices and architecture decisions?</p>
      </div>
    </div>
  </div>
</div>

<!-- ACTION ITEMS -->
<div class="section-card action-items" markdown="0">
  <div class="action-header">
    <h2><i class="fas fa-tasks"></i> Action Items for Next Meeting</h2>
    <p class="subtitle">Complete these tasks before Meeting 2 to maximize your learning</p>
  </div>

  <div class="action-list">
    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Record lead time for most recent production deploy</span>
      </div>
      <div class="task-details">
        <i class="fas fa-file-alt"></i>
        Add commit timestamp and production-available timestamp to a DORA metrics tracking sheet (spreadsheet or tool of your choice)
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Count deployments (last 14 days)</span>
      </div>
      <div class="task-details">
        <i class="fas fa-file-alt"></i>
        Add numeric count to your DORA metrics tracking sheet
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Write a one-line deployment pain summary</span>
      </div>
      <div class="task-details">
        <i class="fas fa-file-alt"></i>
        One-sentence (what, when, impact) pasted into meeting notes
      </div>
    </div>
  </div>

  <div class="due-date">
    <i class="fas fa-clock"></i>
    <strong>Due: Before Meeting 2 (Week 3)</strong>
  </div>
</div>

<div class="section-card resources-clean" markdown="0">
  <div class="step-header">
    <h2><i class="fas fa-link"></i> Related Resources</h2>
    <p class="section-subtitle">Dive deeper into the research and frameworks that power high-performing organizations</p>
  </div>
  <div class="resource-content">
    <div class="resource-grid">
      {% include simple-card.html
        type="resource"
        icon="fas fa-chart-line"
        title="DORA Metrics & Research"
        description="Evidence-based performance measurement"
        links="2024 State of DevOps Report|https://dora.dev/research/2024/dora-report/|DORA Research Program|https://dora.dev/|DORA Quick Check Assessment|https://dora.dev/quickcheck/|Four Key Metrics Guide|https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance"
        theme="primary"
      %}
      {% include simple-card.html
        type="resource"
        icon="fas fa-users"
        title="Westrum Culture & Transformation"
        description="Building generative organizational culture"
        links="Westrum Organizational Culture Types|https://dora.dev/capabilities/generative-organizational-culture/|IT Revolution Westrum Model|https://itrevolution.com/articles/westrums-organizational-model-in-tech-orgs/|Generative Culture Assessment|https://continuousdelivery.com/implementing/culture/|Google's Project Aristotle|https://rework.withgoogle.com/print/guides/5312474543562752/"
        theme="info"
      %}
    </div>
  </div>
</div>

<!-- NEXT MEETING SECTION -->
<div class="welcome-compact section-card next-meeting-card next-meeting-2" markdown="0">
  <h2 id="next-meeting-heading"><i class="fas fa-arrow-right"></i> Next Meeting</h2>
  <p>Continue your journey: <strong>Meeting 2 · Technical Excellence</strong> covers the practices that drive high performance and reliability.</p>
  <div class="welcome-cta">
    <a href="/accelerate-devex-book-club-notebooklm/meetings/meeting-2/" class="btn btn--primary-action btn--meeting-2">
      <i class="fas fa-code"></i> Meeting 2: Technical Excellence
    </a>
    <p class="welcome-cta-subtitle">Chapters 4-6 • Continuous Delivery • Architecture & Testing</p>
  </div>
</div>

<script src="{{ '/assets/js/podcast-player.js' | relative_url }}"></script>
