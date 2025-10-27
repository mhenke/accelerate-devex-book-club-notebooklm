---
layout: meeting
title: "Foundation"
subtitle: "Laying the Foundation – The Myth and the Measurement"
week: 1
meeting: 1
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
 
  <div class="chapter-content">
    <div class="chapter-number">Chapter 1</div>
    <div class="chapter-title">Accelerate</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="measuring" onclick="showChapterDetail('measuring')">
 
  <div class="chapter-content">
    <div class="chapter-number">Chapter 2</div>
    <div class="chapter-title">Measuring Performance</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="culture" onclick="showChapterDetail('culture')">
 
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
    <h3>Accelerate</h3>
    <p>Software delivery capability drives organizational success across all industries. This chapter presents evidence from 23,000+ survey responses showing that digital transformation is real and software delivery creates competitive advantage.</p>
    <ul>
      <li>Software delivery capability drives organizational success across all industries (profitability, productivity, market share)</li>
      <li>Evidence-based approach: 23,000+ survey responses identifying 24 key capabilities</li>
      <li>Performance predicts success: high-performing software delivery creates competitive advantage</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-measuring">
    <h3>Measuring Performance</h3>
    <p>Replaces flawed traditional metrics with four reliable DORA metrics that distinguish high-performing teams from low performers.</p>
    <ul>
      <li>Tempo metrics: Lead Time and Deployment Frequency</li>
      <li>Stability metrics: Recovery Time and Change Fail Rate</li>
      <li>Key insight: High performers achieve both speed AND stability simultaneously</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-culture">
    <h3>Measuring & Changing Culture</h3>
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
<div class="key-question-wrapper">
<div class="key-question-label">MEETING 1 KEY QUESTION</div>
<div class="key-question-intro">Throughout this meeting, we'll return to this central reflection:</div>
<div class="key-question-main">
<div class="quote-mark-start">&ldquo;</div>
<div class="question-text">What one thing could we change to shift our focus from local outputs (like story points) to the global outcomes of speed and stability (like operational excellence)?</div>
<div class="quote-mark-end">&rdquo;</div>
</div>
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
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/The_Accelerate_Blueprint.mp4" type="video/mp4">
              <track kind="captions" src="{{ '/assets/captions/meeting-1-video.vtt' | relative_url }}" srclang="en" label="English" default>
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Alternative Videos -->
          <div class="alternative-video">
            <h3>Alternative Videos</h3>
            <p><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/the-explainer-unpacking-accelerate.mp4" target="_blank">The Explainer: Unpacking "Accelerate"</a> (5:48, Oct 1, 2025)</p>
            <p class="alt-video-desc">Alternative foundational overview with expert discussion on core concepts.</p>
            <p><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1-video.mp4" target="_blank">Meeting 1 Video</a> (8:11, Oct 1, 2025)</p>
            <p class="alt-video-desc">Original primary video with comprehensive meeting overview.</p>
          </div>
        </div>
      </div>

      <!-- Podcast Section - Compact Playlist -->
      <div class="media-section podcast-section">
        <section class="podcast-playlist" aria-label="Podcast playlist">

          <!-- Podcast Items (Compact List) -->
          <div class="podcast-item" tabindex="0"
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/Accelerate_s_Data_Secrets__The_4_DORA_Metrics_That_Kill_the_Spe.m4a"
               data-title="Accelerate's Data Secrets: The 4 DORA Metrics"
               data-duration="1:31"
               data-type="brief">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Accelerate's Data Secrets: The 4 DORA Metrics">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Accelerate's Data Secrets: The 4 DORA Metrics
                <span class="podcast-type brief">Brief</span>
                <span class="podcast-duration">1:31</span>
              </div>
              <div class="podcast-subtitle">The Key Metrics That Kill the Speed vs. Stability Myth</div>
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

          <div class="podcast-item" tabindex="0"
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/Culture_or_Code_First_Accelerate_s_Battle_for_Transformation_Pr.m4a"
               data-title="Culture or Code First? Accelerate's Battle for Transformation"
               data-duration="16:35"
               data-type="debate">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Culture or Code First? Accelerate's Battle for Transformation">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Culture or Code First? Accelerate's Battle for Transformation
                <span class="podcast-type debate">Debate</span>
                <span class="podcast-duration">16:35</span>
              </div>
              <div class="podcast-subtitle">Debating Which Comes First: Cultural Change or Technical Practices</div>
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

          <div class="podcast-item" tabindex="0"
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/Accelerate_Under_the_Microscope__Critiquing_DORA_Metrics%2C_Survey_Methods_And_Cultural_Assumptions.m4a"
               data-title="Accelerate Under the Microscope"
               data-duration="10:19"
               data-type="critique">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Accelerate Under the Microscope">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Accelerate Under the Microscope
                <span class="podcast-type critique">Critique</span>
                <span class="podcast-duration">10:19</span>
              </div>
              <div class="podcast-subtitle">Critiquing DORA Metrics, Survey Methods, and Cultural Assumptions</div>
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

          <div class="podcast-item" tabindex="0"
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/Accelerate_Your_Book_Club__The_Science_of_High-Performing_Tech_.m4a"
               data-title="Accelerate Your Book Club: The Science of High-Performing Tech"
               data-duration="15:10"
               data-type="deep-dive">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Accelerate Your Book Club: The Science of High-Performing Tech">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Accelerate Your Book Club: The Science of High-Performing Tech
                <span class="podcast-type deep-dive">Deep Dive</span>
                <span class="podcast-duration">15:10</span>
              </div>
              <div class="podcast-subtitle">The Science Behind High-Performing Tech Teams and Culture Transformation</div>
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
                  <div class="now-playing-title" id="now-playing-title">Accelerate's Data Secrets: The 4 DORA Metrics</div>
                </div>
              </div>
              <div class="now-playing-time" id="now-playing-time">0:00 / 1:31</div>
            </div>
            <audio id="shared-player" controls>
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/Accelerate_s_Data_Secrets__The_4_DORA_Metrics_That_Kill_the_Spe.m4a" type="audio/mp4" id="shared-player-source">
              Your browser does not support the audio tag.
            </audio>
          </div>

          <!-- Alternative Podcasts -->
          <div class="alternative-podcasts">
            <h4>Previous Podcasts</h4>
            <ul>
              <li><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/accelerate-metrics-unlocked.mp4" target="_blank">Accelerate Metrics Unlocked</a> (Brief, 1:35, Oct 1, 2025)</li>
              <li><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/accelerate-success-deep-dive.mp4" target="_blank">Accelerate Success</a> (Deep Dive, 30:38, Oct 1, 2025)</li>
              <li><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-1/accelerate-devex-critique.mp4" target="_blank">Accelerate Your DevEx</a> (Critique, 10:34, Oct 1, 2025)</li>
            </ul>
          </div>

        </section>
      </div>
    </div>

  </div>
</div>

<!-- Step-Based Progressive Learning Structure -->

<!-- DEVELOPER EXPERIENCE DIMENSIONS -->

<!-- THE PROBLEM -->
<div class="section-card dark-theme full-width" markdown="0">
  <div class="false-choice-container">
    <h2><i class="fas fa-code-branch" aria-hidden="true"></i> The Problem: False Choice</h2>
    <h3 class="false-choice-subtitle">Most teams believe they must choose the optimal development approach</h3>

    <div class="choice-options">
      <div class="choice-option">
        <div class="choice-circle">
          <i class="fas fa-rocket" aria-hidden="true"></i>
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
          <i class="fas fa-shield-alt" aria-hidden="true"></i>
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
      <h2><i class="fas fa-project-diagram" aria-hidden="true"></i> The Framework: How Culture Drives Performance</h2>
      <p class="research-foundation">4 years of research across <strong>23,000+ organizations</strong> reveals this causal chain:</p>
    </div>

    <div class="causal-flow">
      <!-- Step 1: Business Need -->
      <div class="causal-step step-business">
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

        <span class="arrow-label">measured by</span>
      </div>

      <!-- Step 2: Measurement -->
      <div class="causal-step step-measurement">
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

        <span class="arrow-label">enabled by</span>
      </div>

      <!-- Step 3: Cultural Foundation -->
      <div class="causal-step step-culture">
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
        <div class="stat-item">
          <div class="stat-number">5x</div>
          <div class="stat-label">Lower Change Failure Rate</div>
        </div>
      </div>
      <p class="stats-conclusion">High performers achieve these results because their culture enables better technical practices.</p>
    </div>

  </div>
</div>

<!-- RESOURCES -->
<div class="section-card" markdown="0">
  <div class="step-header">
    <h2><i class="fas fa-book-reader" aria-hidden="true"></i> Resources</h2>
    <p class="section-intro">Essential handouts and guides to support your transformation journey</p>
  </div>

  <div class="resource-callout-grid">
    <div class="resource-callout">
      <h3><i class="fas fa-exclamation-triangle" aria-hidden="true"></i> Culture Must Come First</h3>
      <p>The single most common mistake in DevOps transformation is jumping straight to metrics without building a healthy culture foundation. Without trust, measurement becomes surveillance rather than improvement.</p>
      <p><strong>Required Reading:</strong> <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/meetings/meeting-1/handouts/culture-before-metrics.md" class="resource-link"><strong>Culture Before Metrics</strong></a></p>
    </div>

    <div class="resource-callout">
      <h3><i class="fas fa-balance-scale" aria-hidden="true"></i> The DORA Metrics Guide</h3>
      <p>Not all metrics are created equal. Learn which metrics drive improvement (DORA metrics: deployment frequency, lead time, MTTR, change failure rate) and which create dysfunction (individual performance, vanity metrics).</p>
      <p><strong>Reference Guide:</strong> <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/meetings/meeting-1/handouts/dora-metrics-guide.md" class="resource-link"><strong>What to Measure (and What to Avoid)</strong></a></p>
    </div>

    <div class="resource-callout">
      <h3><i class="fas fa-sync" aria-hidden="true"></i> The Virtuous Cycle</h3>
      <p>Culture isn't fixed—you can act your way to better culture. Understand how technical practices create better interactions, which create generative culture, which enables high performance.</p>
      <p><strong>Change Model:</strong> <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/meetings/meeting-1/handouts/culture-change-model.md" class="resource-link"><strong>Acting Your Way to Better Culture</strong></a></p>
    </div>
  </div>
</div>

<!-- AI TOOL SPOTLIGHT -->
<div class="section-card ai-spotlight" markdown="0">
  <div class="spotlight-header">
    <h2><i class="fas fa-robot" aria-hidden="true"></i> AI Tool Spotlight</h2>
    <p class="spotlight-subtitle">Practical AI tools powering this book club</p>
  </div>

  <div class="spotlight-content">
    <div class="tool-card">
      <div class="tool-header">
        <h3><i class="fas fa-microphone-alt" aria-hidden="true"></i> NotebookLM</h3>
        <span class="tool-badge">Meeting Audio Generation</span>
      </div>

      <div class="tool-description">
        <p><strong>What it does:</strong> Google's NotebookLM transforms our source materials (book chapters, notes, articles) into engaging podcast-style audio discussions and video explainers.</p>

        <p><strong>How we use it:</strong> All meeting podcasts and videos you hear are AI-generated from carefully crafted prompts. This allows us to create multiple perspectives (Brief, Deep Dive, Critique) on the same content, giving you flexible learning options.</p>

        <p><strong>Key benefit:</strong> Consume content while commuting, exercising, or multitasking. The conversational format makes complex DevOps concepts more accessible.</p>

        <div class="tool-demo">
          <p><i class="fas fa-external-link-alt"></i> <a href="https://notebooklm.google.com/" target="_blank">Try NotebookLM</a> | <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/tree/main/resources/meetings/meeting-1/notebooklm" target="_blank">View our prompts</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- DISCUSSION QUESTIONS -->
<div class="section-card dark-theme full-width" markdown="0">
  <div class="false-choice-container">
    <h2>Discussion Questions</h2>
    <p class="false-choice-subtitle">Reflect on these questions as a team to deepen your understanding</p>

    <div class="discussion-questions-list">
      <div class="deployment-signal">
        <h4>Current State Assessment</h4>
        <p>Honestly assess your team's current deployment experience. What anxiety levels exist? What does this reveal about your organizational culture and technical practices?</p>
      </div>

      <div class="deployment-signal">
        <h4>Speed vs. Stability Trade-off</h4>
        <p>Where does your organization fall on the false "speed vs stability" spectrum? What evidence supports the idea that you can achieve both high speed AND high stability?</p>
      </div>

      <div class="deployment-signal">
        <h4>Acting Your Way to Better Culture</h4>
        <p>Using Westrum's model, what behaviors indicate your organization's culture type? What's one technical practice we could adopt to shift toward a more "generative" culture?</p>
      </div>
    </div>

  </div>
</div>

<!-- ACTION ITEMS -->
<div class="section-card action-items" markdown="0">
  <div class="action-header">
    <h2><i class="fas fa-tasks" aria-hidden="true"></i> Action Items for Next Meeting</h2>
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
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Count deployments (last 14 days)</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Write a one-line deployment pain summary</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Experiment with NotebookLM: Upload a document and generate an audio overview</span>
      </div>
    </div>

  </div>

  <div class="due-date">
   
    <strong>Due: Before Meeting 2 (Week 3)</strong>
  </div>
</div>

<!-- NEXT MEETING SECTION -->
<div class="welcome-compact section-card next-meeting-card next-meeting-2" markdown="0">
  <h2 id="next-meeting-heading"><i class="fas fa-arrow-right" aria-hidden="true"></i> Next Meeting</h2>
  <p>Continue your journey: <strong>Meeting 2 · Technical Excellence</strong> covers the practices that drive high performance and reliability.</p>
  <div class="welcome-cta">
    <a href="/accelerate-devex-book-club-notebooklm/meetings/meeting-2/" class="btn btn--primary-action btn--meeting-2">
      Meeting 2: Technical Excellence
    </a>
    <p class="welcome-cta-subtitle">Chapters 4-6 • Continuous Delivery • Architecture & Testing</p>
  </div>
</div>

<script src="{{ '/assets/js/podcast-player.js' | relative_url }}"></script>
