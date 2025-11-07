---
layout: meeting
title: "Management & Sustainability"
subtitle: "Lean Practices, Sustainable Work, and Employee Satisfaction"
week: 5
meeting: 3
chapters: "7-10"
duration: "1 Hour"
dora_color: "#d97706" # $meeting-3-primary
---

<!-- Main Content Layout: 70% Content + 30% Sidebar -->

<!-- Modern Chapters Overview -->
<div class="chapter-metrics-compact section-card" markdown="0">
<h2><i class="fas fa-book-open" aria-hidden="true"></i> Chapters 7-10 Overview</h2>
<div class="chapters-grid">
<div class="chapter-item" data-chapter="management" onclick="showChapterDetail('management')">
 
  <div class="chapter-content">
    <div class="chapter-number">Chapter 7</div>
    <div class="chapter-title">Management Practices</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="product" onclick="showChapterDetail('product')">
 
  <div class="chapter-content">
    <div class="chapter-number">Chapter 8</div>
    <div class="chapter-title">Product Development</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="sustainable" onclick="showChapterDetail('sustainable')">
 
  <div class="chapter-content">
    <div class="chapter-number">Chapter 9</div>
    <div class="chapter-title">Making Work Sustainable</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>

<div class="chapter-item" data-chapter="satisfaction" onclick="showChapterDetail('satisfaction')">
 
  <div class="chapter-content">
    <div class="chapter-number">Chapter 10</div>
    <div class="chapter-title">Employee Satisfaction</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>
</div>

<!-- Expandable Details Section -->
<div class="chapter-details" id="chapter-details" hidden>
  <div class="chapter-detail" id="detail-management">
    <h3>Management Practices for Software</h3>
    <p>Lean management for software delivery: limiting WIP, visualizing work, and using monitoring for business decisions. Lightweight change approval processes outperform formal external approval bodies.</p>
    <ul>
      <li>Limit Work In Progress (WIP): Using WIP limits to expose systemic problems and drive process improvement</li>
      <li>Visualize Work: Dashboards and Kanban boards make work and problems visible to teams and stakeholders</li>
      <li>Monitor for Business Decisions: Leveraging production data to inform business choices and create feedback loops</li>
      <li>Lightweight Change Approval: Peer review (pair programming, code reviews) achieves higher performance than CABs</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-product">
    <h3>Product Development</h3>
    <p>Lean approach to the "fuzzy front end" of product development, emphasizing continuous user research and experimental approach from the beginning.</p>
    <ul>
      <li>Working in Small Batches: Decomposing work into pieces completed in less than a week for faster feedback</li>
      <li>Making Work Visible: Clear understanding of flow from business ideation to customer delivery</li>
      <li>Customer Feedback Integration: Actively seeking and incorporating customer input throughout the lifecycle</li>
      <li>Team Experimentation: Authority to try ideas and change specifications without external approval</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-sustainable">
    <h3>Making Work Sustainable</h3>
    <p>Deployment pain and burnout are symptoms of systemic issues, not inevitable consequences. The same practices that improve performance also improve work-life balance.</p>
    <ul>
      <li>Deployment Pain as Signal: Fear and anxiety during releases indicate friction between development and operations</li>
      <li>Burnout Prevention: CD practices reduce burnout by eliminating manual, error-prone processes</li>
      <li>Six Burnout Risk Factors: Work overload, lack of control, insufficient rewards, community breakdown, unfairness, value conflicts</li>
      <li>Sustainable Pace: Microsoft Bing team saw work/life satisfaction jump from 38% to 75% with CD practices</li>
    </ul>
  </div>

  <div class="chapter-detail" id="detail-satisfaction">
    <h3>Employee Satisfaction, Identity, and Engagement</h3>
    <p>Employee satisfaction drives business outcomes. High performers are 2.2x more likely to recommend their organization, creating competitive advantage through engagement.</p>
    <ul>
      <li>Employee Net Promoter Score (eNPS): Measure of employee loyalty correlating with business performance</li>
      <li>Organizational Identity: Employees' values alignment with organization goals reduces burnout</li>
      <li>Job Satisfaction: Dependent on right tools, resources, autonomy for challenging and meaningful work</li>
      <li>Diversity Impact: Diverse teams achieve better performance and business outcomes</li>
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

<!-- MEETING 3 KEY QUESTION -->

<div class="key-question-banner" markdown="0">
<div class="key-question-wrapper">
<div class="key-question-label">MEETING 3 KEY QUESTION</div>
<div class="key-question-intro">Throughout this meeting, we'll challenge assumptions with research:</div>
<div class="key-question-main">
<div class="quote-mark-start">&ldquo;</div>
<div class="question-text">Given the research showing CABs are negatively correlated with performance AND show zero stability improvement, and that toxic workplace behavior predicts <strong>60% of burnout variance</strong>, how could we apply Lean principles like limiting WIP and visualizing work to reduce 'deployment pain' (where risk grows <strong>near-quadratically</strong> with batch size) and address burnout through systemic solutions rather than individual interventions?</div>
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
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/The_Human_Engine__Beat_Burnout.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Previous Videos (concise list) -->
          <div class="alternative-video">
            <h4>Previous Videos</h4>
            <ul>
              <li><a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/meeting-3-video.mp4" target="_blank">Management & Sustainability Overview</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Podcast Section - Compact Playlist -->
      <div class="media-section podcast-section">
        <section class="podcast-playlist" aria-label="Podcast playlist">

          <!-- Podcast Items (Compact List) -->
          <div class="podcast-item" tabindex="0"
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/Lean,_Less_Burnout,_and_the_Data_That_Proves_Tech_Fixes_Employe.m4a"
               data-title="Less Burnout Brief"
               data-duration="1:20"
               data-type="brief">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Less Burnout Brief">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Less Burnout Brief
              </div>
              <div class="podcast-meta">
                <span class="podcast-type brief">Brief</span>
                <span class="podcast-duration">1:20</span>
              </div>
              <div class="podcast-subtitle">The Data That Proves Tech Fixes Employee Satisfaction</div>
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
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/Accelerate_Chapters_7-10__How_Lean_Management,_WIP_Limits,_and_.m4a"
               data-title="Accelerate Chapters 7-10: How Lean Management, WIP Limits, and Fixing Deployment Pain Cure Burnout"
               data-duration="11:42"
               data-type="deep-dive">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Accelerate Chapters 7-10 Deep Dive">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Accelerate Chapters 7-10: How Lean Management, WIP Limits, and Fixing Deployment Pain Cure Burnout
              </div>
              <div class="podcast-meta">
                <span class="podcast-type deep-dive">Deep Dive</span>
                <span class="podcast-duration">11:42</span>
              </div>
              <div class="podcast-subtitle">Deep dive on lean management, WIP limits, and how reducing deployment pain can lower burnout</div>
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
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/Lean_Mechanics_vs_Human_Cost_The_High-Stakes_Debate_on_Performance_and_Burnout.m4a"
               data-title="Lean Mechanics vs Human Cost: The High-Stakes Debate on Performance and Burnout"
               data-duration="14:06"
               data-type="debate">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Lean Mechanics Debate">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Lean Mechanics vs Human Cost: The High-Stakes Debate on Performance and Burnout
              </div>
              <div class="podcast-meta">
                <span class="podcast-type debate">Debate</span>
                <span class="podcast-duration">14:06</span>
              </div>
              <div class="podcast-subtitle">A debate about WIP limits, system trade-offs, and human cost</div>
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
               data-src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/Beyond_the_Code__Challenging_Lean,_Burnout,_and_Loyalty_Through.m4a"
               data-title="Beyond the Code: Challenging Lean, Burnout, and Loyalty"
               data-duration="11:13"
               data-type="critique">
            <div class="podcast-start">
              <button type="button" class="play-btn" aria-label="Play Beyond the Code Critique">
                <i class="fas fa-play" aria-hidden="true"></i>
              </button>
            </div>

            <div class="podcast-content">
              <div class="podcast-headline">
                Beyond the Code: Critique
              </div>
              <div class="podcast-meta">
                <span class="podcast-type critique">Critique</span>
                <span class="podcast-duration">16:00</span>
              </div>
              <div class="podcast-subtitle">Challenging Lean, Burnout, and Loyalty Through Operational Friction</div>
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
                  <div class="now-playing-title" id="now-playing-title">Less Burnout Brief</div>
                </div>
              </div>
              
            </div>
            <audio id="shared-player" controls>
              <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/Lean,_Less_Burnout,_and_the_Data_That_Proves_Tech_Fixes_Employe.m4a" type="audio/mp4" id="shared-player-source">
              Your browser does not support the audio tag.
            </audio>
          </div>
        </section>
      </div>
    </div>

  </div>
</div>

<!-- TRADITIONAL VS LEAN MANAGEMENT -->
<div class="section-card dark-theme full-width" markdown="0">
  <div class="false-choice-container">
    <h2><i class="fas fa-balance-scale" aria-hidden="true"></i> Traditional vs Lean Management</h2>
    <h3 class="false-choice-subtitle">Most organizations default to command-and-control management approaches</h3>

    <div class="choice-options">
      <div class="choice-option">
        <div class="choice-circle">
          <i class="fas fa-clipboard-list" aria-hidden="true"></i>
        </div>
        <h4 class="choice-label">Traditional</h4>
        <p class="choice-consequence">Approval-Heavy Processes</p>
      </div>

      <div class="vs-separator">
        <div class="vs-circle">
          VS
        </div>
      </div>

      <div class="choice-option">
        <div class="choice-circle">
          <i class="fas fa-users" aria-hidden="true"></i>
        </div>
        <h4 class="choice-label">Lean</h4>
        <p class="choice-consequence">Enable & Empower Teams</p>
      </div>
    </div>

    <div class="deployment-signal">
      <h4>The Signal: Change Advisory Boards (CABs)</h4>
      <p>Formal external approval processes are negatively correlated with performance. They slow delivery without improving stability.</p>
    </div>

  </div>
</div>

<!-- THE FRAMEWORK - Lean Management Practices -->
<div class="section-card" markdown="0">
  <div class="causal-chain-container">
    <div class="infographic-header">
      <h2><i class="fas fa-rocket" aria-hidden="true"></i> The Framework: Five Lean Management Practices</h2>
      <p class="research-foundation">Research shows these practices significantly boost <strong>performance, culture, and reduce burnout</strong>:</p>
    </div>

    <div class="causal-flow">
      <!-- Step 1: Limit WIP -->
      <div class="causal-step step-business">
        <div class="step-content">
          <h3>Limit WIP</h3>
          <p class="step-chapter">Chapter 7: Expose Problems</p>
          <div class="step-metrics">
            <div class="metric-item">Reduce Context Switching</div>
            <div class="metric-item">Expose Bottlenecks</div>
            <div class="metric-item">Drive Improvement</div>
          </div>
        </div>
      </div>

      <!-- Arrow 1 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
        <span class="arrow-label">enables</span>
      </div>

      <!-- Step 2: Visualize Work -->
      <div class="causal-step step-measurement">
        <div class="step-content">
          <h3>Visualize Work</h3>
          <p class="step-chapter">Chapter 7: Make Visible</p>
          <div class="step-metrics">
            <div class="metric-item">Kanban Boards</div>
            <div class="metric-item">Dashboards</div>
            <div class="metric-item">Quality Metrics</div>
          </div>
        </div>
      </div>

      <!-- Arrow 2 -->
      <div class="causal-arrow">
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
        <span class="arrow-label">supports</span>
      </div>

      <!-- Step 3: Monitor for Decisions -->
      <div class="causal-step step-culture">
        <div class="step-content">
          <h3>Monitor & Decide</h3>
          <p class="step-chapter">Chapter 7: Business Feedback</p>
          <div class="step-metrics">
            <div class="metric-item">Production Data</div>
            <div class="metric-item">Business Intelligence</div>
            <div class="metric-item">Fast Feedback</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Stats Callout -->
    <div class="impact-stats">
      <h4>Lean Management Impact</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">2x</div>
          <div class="stat-label">Better Software Delivery Performance</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1.8x</div>
          <div class="stat-label">More Generative Culture</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50%</div>
          <div class="stat-label">Less Burnout</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">38%→75%</div>
          <div class="stat-label">Work-Life Satisfaction (Microsoft)</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">60%</div>
          <div class="stat-label">Burnout Variance from Toxic Workplace</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">Quadratic</div>
          <div class="stat-label">Risk Growth with Batch Size</div>
        </div>
      </div>
      <p class="stats-conclusion">Lean practices create a virtuous cycle: better performance reduces stress, improving satisfaction and culture. Research shows toxic workplace predicts 60% of burnout variance—systemic solutions required. Risk grows nearly quadratically with batch size—work in small increments.</p>
    </div>

  </div>
</div>

<!-- RESOURCES -->
<div class="section-card" markdown="0">
  <div class="step-header">
    <h2><i class="fas fa-book-reader" aria-hidden="true"></i> Resources</h2>
    <p class="section-intro">Essential tools for lean management, sustainability, and burnout prevention</p>
  </div>

  <div class="resource-callout-grid">
    <div class="resource-callout">
      <h3><i class="fas fa-file-pdf" aria-hidden="true"></i> Lean Management & Sustainability Presentation</h3>
      <p>Complete presentation deck covering Chapters 7-10: Lean Management Practices, Product Development, Making Work Sustainable, and Employee Satisfaction. Includes discussion questions, action items, and key insights for facilitators and participants.</p>
      <p><strong>Presentation PDF:</strong> <a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-3/Lean-Management-and-Sustainability.pdf" class="resource-link" target="_blank"><strong>Download Slides</strong></a></p>
    </div>

    <div class="resource-callout">
      <h3><i class="fas fa-clipboard-check" aria-hidden="true"></i> 24 Capabilities Assessment</h3>
      <p>Comprehensive self-assessment covering all 24 capabilities from Accelerate research, including lean management practices, WIP limits, and team experimentation. Identify which capabilities to focus on for your transformation journey.</p>
      <p><strong>Assessment Tool:</strong> <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/assessments/24-capabilities-assessment.md" class="resource-link"><strong>Assess Your Capabilities</strong></a></p>
    </div>

    <div class="resource-callout">
      <h3><i class="fas fa-print" aria-hidden="true"></i> Attendee Workbook</h3>
      <p>Printable workbook for participants with fill-in exercises on lean management, small batches, deployment pain tracking, and burnout risk assessment. Includes quick reference sections and personal reflection prompts for all key concepts.</p>
      <p><strong>Printable Guide:</strong> <a href="https://github.com/mhenke/accelerate-devex-book-club-notebooklm/blob/main/resources/meetings/meeting-3/handouts/attendee-guide.md" class="resource-link"><strong>Attendee Guide</strong></a></p>
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
        <h3><i class="fas fa-presentation" aria-hidden="true"></i> Gamma</h3>
        <span class="tool-badge">Presentation Creation</span>
      </div>

      <div class="tool-description">
        <p><strong>What it does:</strong> Gamma is an AI-powered presentation tool that generates beautiful, professional slide decks from simple text prompts or outlines. No design skills required.</p>

        <p><strong>How we use it:</strong> Create visual summaries of book chapters, build training materials for team presentations, or generate executive summaries of DORA metrics. Turns meeting notes into shareable presentations in minutes.</p>

        <p><strong>Key benefit:</strong> Reduces time spent on presentation design from hours to minutes. Perfect for visualizing work (Chapter 9's theme!) and communicating transformation progress to leadership. Embodies lean thinking - eliminate waste, deliver value faster.</p>

        <div class="tool-demo">
          <p><i class="fas fa-external-link-alt"></i> <a href="https://gamma.app/" target="_blank">Try Gamma</a> | <a href="https://gamma.app/docs/Welcome-to-Gamma-nqz1sw7ojz5r94c" target="_blank">View examples</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- DISCUSSION QUESTIONS -->
<div class="section-card dark-theme full-width" markdown="0">
  <div class="false-choice-container">
    <h2>Discussion Questions</h2>
    <p class="false-choice-subtitle">Challenge assumptions with research-backed questions from the comprehensive discussion guide</p>

    <div class="discussion-questions-list">
      <div class="deployment-signal">
        <h4>The CAB Challenge (Controversial)</h4>
        <p>Given the research showing CABs are <strong>negatively correlated with performance AND show ZERO stability improvement</strong>, what approval processes could replace your CAB? Who would need to be convinced, and what data would convince them?</p>
      </div>

      <div class="deployment-signal">
        <h4>The Burnout Causation Question (High-Impact)</h4>
        <p>Research shows toxic workplace behavior predicts <strong>60% of burnout variance</strong>. Is burnout addressed on your team through individual interventions (resilience training, wellness programs) or systemic solutions (process improvements, workload management)? What systemic changes would reduce burnout more than individual training?</p>
      </div>

      <div class="deployment-signal">
        <h4>The Batch Size Reality Check (Impactful)</h4>
        <p>Your team deploys monthly releases containing 20-30 features. Last deployment caused an outage, and it took 6 hours to identify which of 25 changes caused the problem. Leadership proposes <strong>QUARTERLY</strong> releases to "reduce risk." How do you respond using the book's research on <strong>near-quadratic risk growth</strong> with batch size?</p>
      </div>
    </div>

  </div>
</div>

<!-- ACTION ITEMS -->
<div class="section-card action-items" markdown="0">
  <div class="action-header">
    <h2><i class="fas fa-tasks" aria-hidden="true"></i> Action Items for Next Meeting</h2>
    <p class="subtitle">Complete these tasks before Meeting 4 to maximize your learning</p>
  </div>

  <div class="action-list">
    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Read Chapters 11, 16, and Conclusion (Leadership & Transformation)</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Visualize work using a kanban board and identify one approval step to streamline</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Observe burnout risk factors and run an informal eNPS pulse check with your team</span>
      </div>
    </div>

    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">Experiment with Gamma: Create a presentation summarizing your team's DORA metrics</span>
      </div>
    </div>

  </div>

  <div class="due-date">
    <i class="fas fa-calendar-check" aria-hidden="true"></i>
    <strong>Due: Before Meeting 4 (Week 7)</strong>
  </div>
</div>

<!-- NEXT MEETING SECTION -->
<div class="welcome-compact section-card next-meeting-card next-meeting-4" markdown="0">
  <h2 id="next-meeting-heading"><i class="fas fa-arrow-right" aria-hidden="true"></i> Next Meeting</h2>
  <p>Complete your journey: <strong>Meeting 4 · Leadership</strong> covers transformational leadership and real-world transformation case studies.</p>
  <div class="welcome-cta">
    <a href="/accelerate-devex-book-club-notebooklm/meetings/meeting-4/" class="btn btn--primary-action btn--meeting-4">
      Meeting 4: Leadership & Transformation
    </a>
    <p class="welcome-cta-subtitle">Chapters 11, 16, Conclusion • Transformational Leadership • ING Case Study</p>
  </div>
</div>

<script src="{{ '/assets/js/podcast-player.js' | relative_url }}"></script>

