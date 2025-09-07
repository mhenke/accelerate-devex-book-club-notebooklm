---
layout: meeting
title: 'Meeting 2: Technical Excellence'
subtitle: 'Technical Excellence &amp; Continuous Delivery'
week: 3
chapters: '4-6'
duration: '1 Hour'
dora_color: '#0F766E'
---

### Watch the Meeting 2 Video

<div class="media-container" markdown="0">
<video controls width="100%">
  <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-2-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

<div class="media-download-controls" markdown="0">
  <a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-2-video.mp4" download class="download-btn">
		<i class="fas fa-download"></i> Download Video
	</a>
</div>
</div>

### Listen to the Meeting 2 Podcast

<div class="media-container" markdown="0">
<audio controls>
  <source src="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-2-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

<div class="media-download-controls" markdown="0">
  <a href="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-2-podcast.m4a" download class="download-btn">
		<i class="fas fa-download"></i> Download Audio
	</a>
</div>
</div>

### Key Insights

#### Architecture: Loosely Coupled Systems Enable Team Independence

<div class="architecture-comparison" markdown="0">
  <div class="arch-side tight-coupled" markdown="0">
    <h4><i class="fas fa-link"></i> Tightly Coupled</h4>
    <div class="arch-content" markdown="0">
      <p><strong>High Dependencies</strong></p>
      <ul>
        <li><i class="fas fa-ban"></i> Teams block each other</li>
        <li><i class="fas fa-phone"></i> Constant coordination needed</li>
        <li><i class="fas fa-turtle"></i> Slower deployment cycles</li>
        <li><i class="fas fa-fire"></i> Cascading failures</li>
      </ul>
    </div>
  </div>

  <div class="vs-divider" markdown="0">
    <span>VS</span>
  </div>

  <div class="arch-side loose-coupled" markdown="0">
    <h4><i class="fas fa-puzzle-piece"></i> Loosely Coupled</h4>
    <div class="arch-content" markdown="0">
      <p><strong>Independent Teams</strong></p>
      <ul>
        <li><i class="fas fa-check"></i> Autonomous team work</li>
        <li><i class="fas fa-rocket"></i> Faster feature delivery</li>
        <li><i class="fas fa-shield-alt"></i> Isolated failures</li>
        <li><i class="fas fa-chart-line"></i> Better scalability</li>
      </ul>
    </div>
  </div>
</div>

#### Continuous Delivery Core Principles

<div class="cd-principles-grid" markdown="0">
  <div class="principle-card quality" markdown="0">
    <div class="principle-title" markdown="0"><i class="fas fa-tools"></i> Build Quality In</div>
    <p>Start with quality, don't inspect later</p>
  </div>

  <div class="principle-card batches" markdown="0">
    <div class="principle-title" markdown="0"><i class="fas fa-box"></i> Small Batches</div>
    <p>Manageable, testable units</p>
  </div>

  <div class="principle-card automation" markdown="0">
    <div class="principle-title" markdown="0"><i class="fas fa-robot"></i> Automate Tasks</div>
    <p>Free humans for creative work</p>
  </div>

  <div class="principle-card version" markdown="0">
    <div class="principle-title" markdown="0"><i class="fas fa-folder"></i> Version Control</div>
    <p>All artifacts under control</p>
  </div>

  <div class="principle-card trunk" markdown="0">
    <div class="principle-title" markdown="0"><i class="fas fa-code-branch"></i> Trunk-Based Dev</div>
    <p>Short branches, frequent integration</p>
  </div>

  <div class="principle-card testing" markdown="0">
    <div class="principle-title" markdown="0"><i class="fas fa-flask"></i> Test Automation</div>
    <p>Automated testing at all levels</p>
  </div>
</div>

#### Breaking the "Wall of Confusion"

<div class="wall-confusion-section" markdown="0">
  <div class="confusion-problem" markdown="0">
    <h4><i class="fas fa-wall-brick"></i> Traditional Silos</h4>
    <ul>
      <li><i class="fas fa-code"></i> Development optimizes for <strong>throughput</strong></li>
      <li><i class="fas fa-server"></i> Operations optimizes for <strong>stability</strong></li>
      <li><i class="fas fa-times-circle"></i> Conflicting incentives create friction</li>
      <li><i class="fas fa-handshake-slash"></i> Blame culture emerges from misalignment</li>
    </ul>
  </div>

  <div class="arrow-breakthrough" markdown="0">
    <i class="fas fa-arrow-right"></i>
    <span>CD Solution</span>
  </div>

  <div class="confusion-solution" markdown="0">
    <h4><i class="fas fa-hands-helping"></i> System-Level Outcomes</h4>
    <ul>
      <li><i class="fas fa-bullseye"></i> Shared responsibility for <strong>both</strong> speed and stability</li>
      <li><i class="fas fa-chart-line"></i> Metrics that reward collaboration</li>
      <li><i class="fas fa-tools"></i> Technical practices that enable both goals</li>
      <li><i class="fas fa-seedling"></i> Culture transformation through behavioral change</li>
    </ul>
  </div>
</div>

#### Security: Shift Left for Speed AND Safety

<div class="security-shift-comparison" markdown="0">
  <div class="security-approach traditional" markdown="0">
    <h4><i class="fas fa-shield-alt"></i> Traditional: Bolt-On Security</h4>
    <div class="security-problems" markdown="0">
      <div class="problem-item" markdown="0">
        <i class="fas fa-clock"></i>
        <span>Security review at the end</span>
      </div>
      <div class="problem-item" markdown="0">
        <i class="fas fa-exclamation-triangle"></i>
        <span>50% more remediation time</span>
      </div>
      <div class="problem-item" markdown="0">
        <i class="fas fa-turtle"></i>
        <span>Delayed releases</span>
      </div>
    </div>
  </div>

  <div class="vs-arrow" markdown="0">→</div>

  <div class="security-approach integrated" markdown="0">
    <h4><i class="fas fa-lock"></i> Shift-Left: Built-In Security</h4>
    <div class="security-benefits" markdown="0">
      <div class="benefit-item" markdown="0">
        <i class="fas fa-rocket"></i>
        <span>Security checks in CI/CD pipeline</span>
      </div>
      <div class="benefit-item" markdown="0">
        <i class="fas fa-chart-line"></i>
        <span>50% faster remediation</span>
      </div>
      <div class="benefit-item" markdown="0">
        <i class="fas fa-balance-scale"></i>
        <span>Better security AND faster delivery</span>
      </div>
    </div>
  </div>
</div>

#### Conway's Law & Team Structure

<div class="conway-law-section" markdown="0">
  <div class="law-statement" markdown="0">
    <blockquote>
      "Organizations design systems that mirror their communication structures"
    </blockquote>
    <cite>— Melvin Conway, 1967</cite>
  </div>

  <div class="conway-examples" markdown="0">
    <div class="example-card" markdown="0">
      <h4><i class="fas fa-sitemap"></i> Traditional Organization</h4>
      <p><strong>Structure:</strong> Separate dev, QA, ops teams</p>
      <p><strong>Result:</strong> Monolithic systems with handoff bottlenecks</p>
    </div>

    <div class="arrow-transform" markdown="0">
      <i class="fas fa-sync-alt"></i>
      <span>Inverse Conway</span>
    </div>

    <div class="example-card" markdown="0">
      <h4><i class="fas fa-users"></i> Cross-Functional Teams</h4>
      <p><strong>Structure:</strong> Full-stack teams with all skills</p>
      <p><strong>Result:</strong> Loosely coupled, independently deployable services</p>
    </div>

  </div>
</div>

### Interactive Learning Checkpoint

<div class="learning-checkpoint" markdown="0">
  <div class="checkpoint-card cd-maturity" markdown="0">
    <h4><i class="fas fa-chart-line"></i> CD Maturity Assessment</h4>
    <p>Rate your organization's maturity in Continuous Delivery practices:</p>
    <div class="assessment-buttons" markdown="0">
      <label class="assessment-btn high-performance">
        <input type="radio" name="cd-maturity" value="high">
        <span class="radio-mark"></span>
        High Maturity<br>
        <span class="cd-desc">Automated pipelines, trunk-based development, rapid feedback, frequent deploys</span>
      </label>
      <label class="assessment-btn medium-performance">
        <input type="radio" name="cd-maturity" value="medium">
        <span class="radio-mark"></span>
        Medium Maturity<br>
        <span class="cd-desc">Some automation, regular releases, partial trunk-based, some manual steps</span>
      </label>
      <label class="assessment-btn low-performance">
        <input type="radio" name="cd-maturity" value="low">
        <span class="radio-mark"></span>
        Low Maturity<br>
        <span class="cd-desc">Manual deployments, long-lived branches, infrequent releases, little automation</span>
      </label>
    </div>
    <div class="feedback-area" id="cd-maturity-feedback">
      <p>Select your organization's CD maturity level to see improvement opportunities.</p>
    </div>
  </div>

  <div class="checkpoint-card security-integration" markdown="0">
    <h4><i class="fas fa-shield-alt"></i> Security Integration Assessment</h4>
    <p>Rate how well security is integrated into your delivery process:</p>
    <div class="assessment-buttons" markdown="0">
      <label class="assessment-btn high-performance">
        <input type="radio" name="security-integration" value="high">
        <span class="radio-mark"></span>
        <strong>Shift-Left Security</strong><br>
        <small>Security built into development process, automated security testing, developer security training</small>
      </label>
      <label class="assessment-btn medium-performance">
        <input type="radio" name="security-integration" value="medium">
        <span class="radio-mark"></span>
        <strong>Some Integration</strong><br>
        <small>Security reviews at key milestones, some automated tools, occasional security training</small>
      </label>
      <label class="assessment-btn low-performance">
        <input type="radio" name="security-integration" value="low">
        <span class="radio-mark"></span>
        <strong>Security Gate</strong><br>
        <small>Security team reviews at end, manual security checks, separate security processes</small>
      </label>
    </div>
    <div class="feedback-area" id="checkpoint-feedback">
      <p>Select your security integration level to see improvement strategies and performance impacts.</p>
    </div>
  </div>

  <div class="checkpoint-card tool-autonomy" markdown="0">
    <h4><i class="fas fa-palette"></i> Tool Freedom</h4>
    <p>Rate your team's tool selection autonomy:</p>
    <div class="autonomy-slider" markdown="0">
      <div class="slider-labels" markdown="0">
        <span>Restricted</span>
        <span>Flexible</span>
        <span>Full Freedom</span>
      </div>
      <div class="slider-track" id="tool-slider">
        <div class="slider-thumb" id="tool-thumb"></div>
      </div>
      <div class="slider-feedback" id="slider-feedback">
        <p>Move the slider to assess your team's tool autonomy level</p>
      </div>
    </div>
  </div>
</div>

### Real-World Applications

<div class="real-world-applications" markdown="0">
  <div class="application-card automation-examples" markdown="0">
    <h4><i class="fas fa-robot"></i> Automation Success Stories</h4>
    <p>Share examples from your experience:</p>
    <div class="example-prompts" markdown="0">
      <div class="prompt-item" markdown="0">
        <i class="fas fa-lightbulb"></i>
        <span>What manual process did you recently automate? What was the impact?</span>
      </div>
      <div class="prompt-item" markdown="0">
        <i class="fas fa-chart-line"></i>
        <span>How did test automation change your team's deployment confidence?</span>
      </div>
      <div class="prompt-item" markdown="0">
        <i class="fas fa-clock"></i>
        <span>What task took hours manually but now takes minutes with automation?</span>
      </div>
    </div>
  </div>

  <div class="application-card architecture-decisions" markdown="0">
    <h4><i class="fas fa-sitemap"></i> Architectural Decisions</h4>
    <p>Discuss decisions that impacted team independence:</p>
    <div class="example-prompts" markdown="0">
      <div class="prompt-item" markdown="0">
        <i class="fas fa-check-circle"></i>
        <span>Which architectural changes improved your team's deployment frequency?</span>
      </div>
      <div class="prompt-item" markdown="0">
        <i class="fas fa-times-circle"></i>
        <span>What dependencies currently prevent independent deployments?</span>
      </div>
      <div class="prompt-item" markdown="0">
        <i class="fas fa-puzzle-piece"></i>
        <span>How did microservices or modular design affect your delivery speed?</span>
      </div>
    </div>
  </div>

  <div class="application-card security-practices" markdown="0">
    <h4><i class="fas fa-shield-alt"></i> Security Integration</h4>
    <p>Examine security practices that impact delivery:</p>
    <div class="example-prompts" markdown="0">
      <div class="prompt-item" markdown="0">
        <i class="fas fa-fast-forward"></i>
        <span>Which security practices actually speed up delivery?</span>
      </div>
      <div class="prompt-item" markdown="0">
        <i class="fas fa-turtle"></i>
        <span>What security requirements currently slow down your team?</span>
      </div>
      <div class="prompt-item" markdown="0">
        <i class="fas fa-balance-scale"></i>
        <span>How do you balance security compliance with delivery speed?</span>
      </div>
    </div>
  </div>
</div>

### Discussion Questions

<div class="discussion-questions-grid" markdown="0">
  <div class="discussion-card" markdown="0">
    <div class="discussion-header" markdown="0">
      <i class="fas fa-chart-line"></i>
      <h4>CD Maturity Assessment</h4>
    </div>
    <div class="discussion-content" markdown="0">
      <p><strong>Which CD practices is your organization currently implementing well/poorly?</strong></p>
      <div class="discussion-prompts" markdown="0">
        <span>• Trunk-based development and branching strategy</span>
        <span>• Automated testing coverage and quality</span>
        <span>• Deployment pipeline automation</span>
        <span>• Feature flags and rollback capabilities</span>
      </div>
    </div>
  </div>

  <div class="discussion-card" markdown="0">
    <div class="discussion-header" markdown="0">
      <i class="fas fa-project-diagram"></i>
      <h4>Architecture Dependencies</h4>
    </div>
    <div class="discussion-content" markdown="0">
      <p><strong>What prevents your team from deploying independently?</strong></p>
      <div class="discussion-prompts" markdown="0">
        <span>• Shared databases and data dependencies</span>
        <span>• Coordinated release schedules</span>
        <span>• Service coupling and API contracts</span>
        <span>• Infrastructure and deployment bottlenecks</span>
      </div>
    </div>
  </div>

  <div class="discussion-card" markdown="0">
    <div class="discussion-header" markdown="0">
      <i class="fas fa-tools"></i>
      <h4>Tool Autonomy</h4>
    </div>
    <div class="discussion-content" markdown="0">
      <p><strong>How much freedom do teams have in tool selection? What are the constraints?</strong></p>
      <div class="discussion-prompts" markdown="0">
        <span>• Security and compliance requirements</span>
        <span>• Standardization vs. innovation balance</span>
        <span>• Budget and licensing considerations</span>
        <span>• Support and maintenance capabilities</span>
      </div>
    </div>
  </div>

  <div class="discussion-card" markdown="0">
    <div class="discussion-header" markdown="0">
      <i class="fas fa-shield-alt"></i>
      <h4>Security Integration</h4>
    </div>
    <div class="discussion-content" markdown="0">
      <p><strong>How early in your development process is security considered?</strong></p>
      <div class="discussion-prompts" markdown="0">
        <span>• Security testing in CI/CD pipelines</span>
        <span>• Developer security training and awareness</span>
        <span>• Code review and static analysis integration</span>
        <span>• Shift-left vs. security gate approaches</span>
      </div>
    </div>
  </div>
</div>

### Action Items for Next Meeting

<div class="action-checklist" markdown="0">
  <p class="checklist-intro">Ready to level up your CD practices? Check off these game-changing actions before our next session!</p>
  
  <div class="checklist-item" markdown="0">
    <input type="checkbox" id="action-1" class="action-checkbox">
    <label for="action-1" class="action-label">
      <i class="fas fa-robot"></i>
      <strong>Automate ONE painful manual process</strong> - What task makes your team groan every time?
    </label>
    <div class="action-details">
      Look for repetitive deployment, testing, or configuration tasks. Start small and achievable - pick something you can automate in 1-2 weeks. Quick wins build momentum.
    </div>
  </div>

  <div class="checklist-item" markdown="0">
    <input type="checkbox" id="action-2" class="action-checkbox">
    <label for="action-2" class="action-label">
      <i class="fas fa-project-diagram"></i>
      <strong>Map your dependency hell</strong> - What stops your team from deploying independently?
    </label>
    <div class="action-details">
      Document shared databases, services, and coordination requirements with other teams. Note infrastructure dependencies. Make the invisible visible.
    </div>
  </div>

  <div class="checklist-item" markdown="0">
    <input type="checkbox" id="action-3" class="action-checkbox">
    <label for="action-3" class="action-label">
      <i class="fas fa-flask"></i>
      <strong>Experiment with ONE CD practice</strong> - What will you try: trunk-based dev, test automation, or feature flags?
    </label>
    <div class="action-details">
      Choose based on your team's current maturity level. Set measurable goals and timeline. Plan to share results and learnings with your team next meeting.
    </div>
  </div>
</div>

### Related Resources

<div class="resource-grid" markdown="0">
  <div class="resource-card" markdown="0">
    <h4><i class="fas fa-tools"></i> CI/CD Tools & Platforms</h4>
    <ul>
      <li><a href="https://github.com/features/actions" target="_blank">GitHub Actions</a></li>
      <li><a href="https://www.jenkins.io/" target="_blank">Jenkins</a></li>
      <li><a href="https://circleci.com/" target="_blank">CircleCI</a></li>
      <li><a href="https://argoproj.github.io/cd/" target="_blank">Argo CD</a></li>
    </ul>
  </div>

  <div class="resource-card" markdown="0">
    <h4><i class="fas fa-shield-alt"></i> Security Integration</h4>
    <ul>
      <li><a href="https://owasp.org/www-project-devsecops-guideline/" target="_blank">OWASP DevSecOps Guidelines</a></li>
      <li><a href="https://snyk.io/" target="_blank">Snyk</a></li>
      <li><a href="https://github.com/features/security" target="_blank">GitHub Security</a></li>
      <li><a href="https://www.sonarqube.org/" target="_blank">SonarQube</a></li>
    </ul>
  </div>
</div>

<div class="meeting-navigation" markdown="0">
  <div class="nav-item prev">
    <a href="{{ '/meetings/meeting-1/' | relative_url }}">
      <i class="fas fa-arrow-left"></i>
      <span>Previous: Foundation</span>
    </a>
  </div>
  
  <div class="progress-container">
    <div class="progress-text">Meeting 2 of 4</div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 50%"></div>
    </div>
  </div>
  
  <div class="nav-item next">
    <a href="{{ '/meetings/meeting-3/' | relative_url }}">
      <span>Next: Management</span>
      <i class="fas fa-arrow-right"></i>
    </a>
  </div>
</div>

<style>
/* H3 Themed Styling */
h3 {
  border-left: 4px solid #0F766E;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  padding: 1rem 1.5rem;
  margin: 0;
  font-weight: 600;
}

/* Meeting Navigation */
.meeting-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  border-radius: 16px;
  border: 2px solid #9ca3af;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  
  font-weight: 500;
  transition: all 0.3s ease;
  color: #4b5563;
}

.nav-item.prev {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border: 2px solid #f59e0b;
}

.nav-item.prev:hover {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  transform: translateX(-4px);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.nav-item.next {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border: 2px solid #3b82f6;
}

.nav-item.next:hover {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.nav-item a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-item i {
  font-size: 1.2rem;
}

/* Resource Grid Styling */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.resource-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(15, 118, 110, 0.15);
}

.resource-card h4 {
  margin-bottom: 1rem;
  color: #0F766E;
  font-size: 1.1rem;
  font-weight: 600;
}

.resource-card h4 i {
  margin-right: 0.5rem;
}

.resource-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resource-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.resource-card li:last-child {
  border-bottom: none;
}

.resource-card a {
  color: #0F766E;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.resource-card a:hover {
  color: #134e4a;
  text-decoration: underline;
}

/* Architecture Comparison */
.architecture-comparison {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.arch-side {
  flex: 1;
  text-align: center;
}


.arch-side h3 {
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.tight-coupled h3 {
  color: #d32f2f;
}

.loose-coupled h3 {
  color: #134e4a;
}

.arch-content p {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.arch-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.arch-content li {
  padding: 0.3rem 0;
  font-size: 0.95rem;
}

.vs-divider {
  font-size: 2rem;
  font-weight: bold;
  color: #0F766E;
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #0F766E;
}

/* Wall of Confusion Section */
.wall-confusion-section {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.confusion-problem, .confusion-solution {
  background: white;
  
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.confusion-problem h4, .confusion-solution h4 {
  margin: 0 0 1rem 0;
  color: #134e4a;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.confusion-problem ul, .confusion-solution ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.confusion-problem li, .confusion-solution li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.arrow-breakthrough {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #0F766E;
  font-weight: bold;
}

.arrow-breakthrough i {
  font-size: 2rem;
}

/* Security Shift Comparison */
.security-shift-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.security-approach {
  background: white;
  
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.security-approach h4 {
  margin: 0 0 1rem 0;
  color: #1565c0;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.problem-item, .benefit-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
}

.vs-arrow {
  font-size: 2rem;
  color: #0F766E;
  font-weight: bold;
}

/* Conway's Law Section */
.conway-law-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.law-statement {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}


.law-statement blockquote {
  font-size: 1.2rem;
  font-style: italic;
  color: #134e4a;
  margin: 1rem 0;
  font-weight: 500;
  /* Remove green quote icon if present */
}

/* Remove any pseudo-element that adds a quote icon */
.law-statement blockquote::before {
  content: none !important;
}
}

.law-statement cite {
  color: #666;
  font-size: 0.9rem;
}

.conway-examples {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
}

.example-card {
  background: white;
  
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}


.example-card h4 {
  margin: 0 0 1rem 0;
  color: #134e4a;
  font-size: 1.1rem;
  font-weight: 600;
}

.example-card p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.arrow-transform {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #0F766E;
  font-weight: bold;
}

.arrow-transform i {
  font-size: 2rem;
}

/* Tool Autonomy Impact */
.tool-autonomy-impact {
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.autonomy-stat {
  background: white;
  
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.stat-content h4 {
  margin: 0 0 1rem 0;
  color: #134e4a;
  font-size: 1.3rem;
  font-weight: 600;
}

.stat-content p {
  margin: 0 0 1rem 0;
  color: #666;
  font-weight: 500;
}

.impact-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric-point {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
}

.metric-point i {
  color: #0F766E;
}

/* Transformation Flow */
.transformation-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #fce4ec);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.flow-step {
  text-align: center;
  flex: 1;
  max-width: 200px;
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.flow-step h4 {
  margin: 0 0 0.5rem 0;
  color: #134e4a;
  font-size: 1.1rem;
}

.flow-step p {
  color: #0F766E;
  font-size: 0.9rem;
  margin: 0;
}

.flow-arrow {
  font-size: 2rem;
  color: #0F766E;
  font-weight: bold;
}

/* CD Principles Grid */
.cd-principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.principle-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #0F766E;
}

.principle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}


.principle-title {
  margin: 0 0 0.75rem 0;
  color: #134e4a;
  font-size: 1.2rem;
  font-weight: 600;
  display: block;
}

.principle-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Real-World Applications */
.real-world-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 16px;
  border: 2px solid #0F766E;
}

.application-card {
  background: white;
  
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #0F766E;
}

.application-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}


.application-card h4 {
  margin: 0 0 1rem 0;
  color: #134e4a;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.application-card p {
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
}

.example-prompts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.prompt-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.prompt-item:hover {
  background: linear-gradient(135deg, #0F766E, #134e4a);
  color: white;
  transform: translateX(4px);
}

.prompt-item i {
  flex-shrink: 0;
  font-size: 1.1rem;
  margin-top: 0.1rem;
  color: #0F766E;
}

.prompt-item:hover i {
  color: white;
}

.prompt-item span {
  font-size: 0.9rem;
  line-height: 1.4;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .architecture-comparison {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .vs-divider {
    /* Remove problematic rotation - keep as circular indicator */
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .wall-confusion-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .arrow-breakthrough {
    /* Remove rotation - keep text readable */
    flex-direction: row;
    justify-content: center;
  }

  .arrow-breakthrough i {
    /* Point arrow downward for mobile flow */
    transform: rotate(90deg);
  }

  .security-shift-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .vs-arrow {
    /* Point arrow downward for mobile flow */
    transform: rotate(90deg);
  }

  .conway-examples {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .conway-law-section {
    padding: 1rem;
  }

  .arrow-transform {
    /* Remove rotation - keep text readable */
    flex-direction: row;
    justify-content: center;
  }

  .arrow-transform i {
    /* Point arrow downward for mobile flow */
    transform: rotate(90deg);
  }

  .autonomy-stat {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  /* Compact related resources section */
  .related-resources {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem; /* Reduced from 1.5rem */
    margin: 1.5rem 0; /* Reduced from 2rem */
  }

  .resource-category {
    padding: 1rem; /* Already correctly set */
  }

  .transformation-flow {
    flex-direction: column;
    gap: 1rem;
  }

  .flow-arrow {
    /* Point arrow downward for mobile flow */
    transform: rotate(90deg);
    font-size: 1.5rem;
  }

  .cd-principles-grid {
    grid-template-columns: 1fr;
    gap: 1rem; /* Reduced from default */
  }

  .principle-card {
    padding: 1rem;
  }

  .real-world-applications {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem; /* Reduced from 1.5rem */
  }

  .application-card {
    padding: 1rem;
  }

  .learning-checkpoint {
    padding: 1rem;
    gap: 1rem; /* Reduced for more compact layout */
  }
}

/* Interactive Learning Checkpoint */
.learning-checkpoint {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-radius: 20px;
  border: 2px solid #0F766E;
}

.checkpoint-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.checkpoint-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(5, 150, 105, 0.2);
  border-color: #0F766E;
}


.checkpoint-card h4 {
  margin: 0 0 1rem 0;
  color: #134e4a;
  font-size: 1.3rem;
  font-weight: 600;
}

.checkpoint-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

/* Tool Freedom Slider */
.autonomy-slider {
  text-align: left;
  margin-top: 1rem;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

.slider-track {
  position: relative;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.slider-thumb {
  position: absolute;
  top: -8px;
  left: 0;
  width: 22px;
  height: 22px;
  background: white;
  border: 3px solid #0F766E;
  border-radius: 50%;
  cursor: grab;
  transition: border-color 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.slider-thumb:active {
  cursor: grabbing;
}

.slider-feedback {
  background: #f8f9fa;
  border-left: 4px solid #0F766E;
  border-radius: 8px;
  padding: 1rem;
  min-height: 60px;
  transition: border-left-color 0.3s ease;
}

/* Assessment Buttons */
.assessment-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.assessment-btn {
  position: relative;
  min-width: 48px;
  min-height: 48px;
  padding: 1rem 1.5rem;
  border: 2px solid #ddd;
  
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
}

.assessment-btn input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.assessment-btn .radio-mark {
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
}

.assessment-btn.pathological {
  border-color: #f44336;
  color: #d32f2f;
}

.assessment-btn.pathological .radio-mark {
  border-color: #f44336;
}

.assessment-btn.pathological input:checked ~ .radio-mark {
  background: #f44336;
}

.assessment-btn.pathological input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.pathological:hover {
  background: #f44336;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.pathological:has(input:checked) {
  background: #ffebee;
  border-color: #d32f2f;
  color: #d32f2f;
}

.assessment-btn.bureaucratic {
  border-color: #ff9800;
  color: #f57c00;
}

.assessment-btn.bureaucratic .radio-mark {
  border-color: #ff9800;
}

.assessment-btn.bureaucratic input:checked ~ .radio-mark {
  background: #ff9800;
}

.assessment-btn.bureaucratic input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.bureaucratic:hover {
  background: #ff9800;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.bureaucratic:has(input:checked) {
  background: #fff8e1;
  border-color: #f57c00;
  color: #f57c00;
}

.assessment-btn.generative {
  border-color: #0F766E;
  color: #134e4a;
}

.assessment-btn.generative .radio-mark {
  border-color: #0F766E;
}

.assessment-btn.generative input:checked ~ .radio-mark {
  background: #0F766E;
}

.assessment-btn.generative input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.assessment-btn.generative:hover {
  background: #0F766E;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.generative:has(input:checked) {
  background: #f0fdfa;
  border-color: #134e4a;
  color: #134e4a;
}

/* Feedback Areas */
.feedback-area {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  border: 2px solid #dee2e6;
  min-height: 80px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.feedback-area p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.feedback-area h5 {
  margin: 0 0 0.5rem 0;
  color: #1565c0;
  font-size: 1rem;
  font-weight: 600;
}

.feedback-area.active {
  border-color: #0F766E;
  background: linear-gradient(135deg, #f0fdfa, #fce4ec);
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.2);
}

/* Practice Options */
.practice-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.practice-item {
  position: relative;
  min-width: 48px;
  min-height: 48px;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  border-left: 4px solid #0F766E;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.practice-item input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.practice-item .radio-mark {
  width: 18px;
  height: 18px;
  border: 2px solid #0F766E;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
}

.practice-item input:checked ~ .radio-mark {
  background: #0F766E;
}

.practice-item input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.practice-item:hover {
  background: linear-gradient(135deg, #0F766E, #134e4a);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
}

.practice-item:has(input:checked) {
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-left-color: #134e4a;
  color: #134e4a;
}

/* CD Selector */
.cd-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.cd-option {
  position: relative;
  min-width: 48px;
  min-height: 48px;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
}

.cd-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.cd-option .radio-mark {
  width: 18px;
  height: 18px;
  border: 2px solid #0F766E;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
}

.cd-option input:checked ~ .radio-mark {
  background: #0F766E;
  border-color: #0F766E;
}

.cd-option input:checked ~ .radio-mark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.cd-option:hover {
  background: linear-gradient(135deg, #0F766E, #134e4a);
  color: white;
  border-color: #0F766E;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
}

.cd-option:has(input:checked) {
  background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
  border-color: #0F766E;
  color: #134e4a;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.2);
}

/* Responsive Design for Checkpoint */
@media (max-width: 768px) {
  .learning-checkpoint {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }

  .checkpoint-card {
    padding: 1rem;
  }

  .cd-selector {
    grid-template-columns: 1fr;
  }

  .assessment-buttons {
    gap: 0.75rem;
  }

  .assessment-btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .practice-options {
    gap: 0.75rem;
  }

  .practice-item {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .cd-option {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    gap: 0.5rem;
  }

  .feedback-area {
    padding: 1rem;
    min-height: 60px;
  }

  .feedback-area p {
    font-size: 0.85rem;
  }
}

/* Discussion Questions Styling */
.discussion-questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.discussion-card {
  background: linear-gradient(135deg, #f0fdfa, #e9ecef);
  padding: 1.5rem;
  border-top: 4px solid #0F766E;
  box-shadow: 0 4px 15px rgba(15, 118, 110, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.discussion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(15, 118, 110, 0.2);
  border-top-color: #134e4a;
}

.discussion-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.discussion-header i {
  color: #0F766E;
  font-size: 1.2rem;
}

.discussion-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.discussion-content p {
  margin: 0 0 1rem 0;
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
}

.discussion-prompts {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.discussion-prompts span {
  color: #6b7280;
  font-size: 0.85rem;
  padding-left: 0.5rem;
  border-left: 2px solid #e5e7eb;
  line-height: 1.4;
}

/* Action Items Styling */
.action-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.action-item-card {
  background: linear-gradient(135deg, #f0fdfa, #e9ecef);
  padding: 1.5rem;
  border-top: 4px solid #0F766E;
  box-shadow: 0 4px 15px rgba(15, 118, 110, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(15, 118, 110, 0.2);
  border-top-color: #134e4a;
}

.action-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.action-header i {
  color: #0F766E;
  font-size: 1.2rem;
}

.action-header h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.action-item-card p {
  margin: 0 0 1rem 0;
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
}

.action-guidance {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-guidance span {
  color: #6b7280;
  font-size: 0.85rem;
  padding-left: 0.5rem;
  border-left: 2px solid #e5e7eb;
  line-height: 1.4;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // CD Maturity Assessment functionality
  const cdMaturityInputs = document.querySelectorAll('input[name="cd-maturity"]');
  const cdMaturityFeedback = document.getElementById('cd-maturity-feedback');
  
  const cdMaturityInfo = {
    high: {
      title: "🚀 High CD Maturity - Elite Performer",
      content: "Excellent! Your organization demonstrates advanced CD practices. Focus on: continuous improvement culture, sharing knowledge across teams, and measuring outcomes. Elite performers deploy 208x more frequently with 106x faster lead times.",
      bgColor: "linear-gradient(135deg, #e8f8f5, #d1f2eb)",
      textColor: "#155724"
    },
    medium: {
      title: "⚡ Medium CD Maturity - Strong Foundation", 
      content: "Good progress! You have solid foundations in place. Priority improvements: increase deployment frequency, automate more manual steps, strengthen trunk-based development. Focus on reducing batch sizes and feedback loops.",
      bgColor: "linear-gradient(135deg, #fff3cd, #ffeaa7)",
      textColor: "#856404"
    },
    low: {
      title: "🔧 Low CD Maturity - Major Opportunity",
      content: "Significant opportunity for improvement! Start with: version control for everything, basic CI/CD pipeline, automated testing, smaller batch sizes. Research shows CD practices strongly predict both delivery performance and organizational outcomes.",
      bgColor: "linear-gradient(135deg, #f8d7da, #f5c6cb)",
      textColor: "#721c24"
    }
  };
  
  cdMaturityInputs.forEach(input => {
    input.addEventListener('change', function() {
      const info = cdMaturityInfo[this.value];
      cdMaturityFeedback.style.background = info.bgColor;
      cdMaturityFeedback.style.color = info.textColor;
      cdMaturityFeedback.style.border = `2px solid ${this.value === 'high' ? '#28a745' : this.value === 'medium' ? '#ffc107' : '#dc3545'}`;
      cdMaturityFeedback.innerHTML = `
        <div style="padding: 0.5rem 0;">
          <h5 style="margin: 0 0 1rem 0; color: inherit;">${info.title}</h5>
          <p style="margin: 0; line-height: 1.5;">${info.content}</p>
        </div>
      `;
      cdMaturityFeedback.classList.add('active');
    });
  });

  // Security Integration Assessment functionality
  const securityIntegrationInputs = document.querySelectorAll('input[name="security-integration"]');
  const securityFeedback = document.getElementById('checkpoint-feedback');
  
  const securityInfo = {
    high: {
      title: "🛡️ Shift-Left Security - High Performance",
      content: "Excellent security integration! Organizations with integrated security practices achieve 50% fewer security incidents while maintaining high delivery performance. Continue with: threat modeling, security champions program, and automated compliance checks.",
      bgColor: "linear-gradient(135deg, #e8f8f5, #d1f2eb)",
      textColor: "#155724"
    },
    medium: {
      title: "🔒 Some Integration - Good Progress",
      content: "Solid foundation! You're on the right track. Next steps: increase security automation, train developers on security, implement security testing in CI/CD pipeline. Focus on shifting security activities earlier in development lifecycle.",
      bgColor: "linear-gradient(135deg, #fff3cd, #ffeaa7)",
      textColor: "#856404"
    },
    low: {
      title: "⚠️ Security Gate - Improvement Needed",
      content: "Security gates create bottlenecks and reduce delivery performance. Research shows this approach leads to both security issues AND slower delivery. Start with: developer security training, automated security scanning, and collaborative security reviews.",
      bgColor: "linear-gradient(135deg, #f8d7da, #f5c6cb)",
      textColor: "#721c24"
    }
  };
  
  securityIntegrationInputs.forEach(input => {
    input.addEventListener('change', function() {
      const info = securityInfo[this.value];
      securityFeedback.style.background = info.bgColor;
      securityFeedback.style.color = info.textColor;
      securityFeedback.style.border = `2px solid ${this.value === 'high' ? '#28a745' : this.value === 'medium' ? '#ffc107' : '#dc3545'}`;
      securityFeedback.innerHTML = `
        <div style="padding: 0.5rem 0;">
          <h5 style="margin: 0 0 1rem 0; color: inherit;">${info.title}</h5>
          <p style="margin: 0; line-height: 1.5;">${info.content}</p>
        </div>
      `;
      securityFeedback.classList.add('active');
    });
  });

  // Feedback content from Accelerate book
  const cultureInfo = {
    pathological: {
      title: "Pathological (Power-Oriented) Culture",
      content: "Characterized by large amounts of fear and threat. Information is hoarded and withheld for political reasons, or distorted to make individuals look better. These organizations show low cooperation across groups and a culture of blame. According to Westrum's research, pathological cultures correlate with poor performance and higher failure rates."
    },
    bureaucratic: {
      title: "Bureaucratic (Rule-Oriented) Culture",
      content: "Preoccupied with rules and positions, with responsibilities compartmentalized by department. There's little concern for the overall mission of the organization. Rules are more important than the mission. Information flows through official channels, but innovation and risk-taking are discouraged."
    },
    generative: {
      title: "Generative (Performance-Oriented) Culture",
      content: "Focuses fully on the mission with high cooperation and trust. Features good information flow, collaboration between teams, and conscious inquiry. According to Accelerate research, generative cultures predict both software delivery performance and organizational performance, leading to higher market share, productivity, and profitability."
    }
  };

  const practiceInfo = {
    "peer-review": {
      title: "Peer Review Over Approval Boards",
      content: "Lightweight approval processes with team ownership enable faster decisions and shared responsibility. This practice reduces bureaucratic overhead while maintaining quality, fostering trust and collaboration. Teams become more autonomous and can respond quickly to change."
    },
    "transparent-metrics": {
      title: "Transparent Metrics Sharing",
      content: "Open sharing of performance data creates accountability and drives improvement. When teams can see how their work impacts key metrics like deployment frequency and lead time, it enables data-driven decisions and continuous improvement. Transparency builds trust and alignment."
    },
    "learning-failures": {
      title: "Learning from Failures",
      content: "Treating failures as learning opportunities rather than blame events is crucial for psychological safety. When teams conduct blameless post-mortems and share lessons learned, it prevents future issues and builds organizational resilience. This practice is essential for high-performing cultures."
    },
    "rapid-feedback": {
      title: "Rapid Feedback Loops",
      content: "Short feedback cycles from customers, monitoring, and automated testing enable quick course correction. Fast feedback reduces risk, improves quality, and accelerates learning. This practice supports continuous delivery and helps teams deliver value more effectively."
    }
  };

  const cdInfo = {
    "build-quality": {
      title: "Build Quality In",
      content: "Quality should be built into the process from the start, not inspected later. This requires reliable test automation at all levels (unit, API, UI), continuous testing throughout development, and automated tests running against every commit. This practice reduces rework and increases confidence in deployments."
    },
    "small-batches": {
      title: "Work in Small Batches",
      content: "Slice work into small pieces completed in a week or less. This applies at feature and product levels to achieve short lead times and faster feedback loops. Working in small batches enables rapid customer feedback and data-driven hypothesis testing, reducing risk and improving outcomes."
    },
    "automate": {
      title: "Automate Repetitive Tasks",
      content: "Computers perform repetitive tasks; people solve problems. Automate regression testing and software deployments to reduce the cost of pushing changes. Automation frees teams to focus on solving customer problems and reduces human error in repetitive processes."
    },
    "trunk-based": {
      title: "Trunk-Based Development",
      content: "Developers merge small, frequent updates to a main branch with short-lived feature branches. This practice streamlines merging and integration, enabling continuous integration and delivery. High-performing teams keep branches short-lived and integrate regularly with automated testing."
    }
  };

  // Add event listeners for culture assessment
  document.querySelectorAll('input[name="culture-type"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('culture-feedback');
      const info = cultureInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Add event listeners for practice selection
  document.querySelectorAll('input[name="cultural-practice"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('practice-feedback');
      const info = practiceInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Add event listeners for CD principles
  document.querySelectorAll('input[name="cd-priority"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const feedback = document.getElementById('cd-feedback');
      const info = cdInfo[this.value];
      feedback.innerHTML = `<h5>${info.title}</h5><p>${info.content}</p>`;
      feedback.classList.add('active');
    });
  });

  // Format action items
  const headings = document.querySelectorAll('h2');
  headings.forEach(heading => {
    if (heading.textContent.includes('Action Items')) {
      let nextElement = heading.nextElementSibling;
      while (nextElement) {
        if (nextElement.tagName === 'UL' || nextElement.tagName === 'OL') {
          nextElement.classList.add('action-items');
          break;
        }
        if (nextElement.tagName === 'H1' || nextElement.tagName === 'H2' || nextElement.tagName === 'H3') {
          break;
        }
        nextElement = nextElement.nextElementSibling;
      }
    }
  });

  // Tool Freedom Slider functionality
  const slider = document.getElementById('tool-slider');
  const thumb = document.getElementById('tool-thumb');
  const feedback = document.getElementById('slider-feedback');

  if (slider && thumb && feedback) {
    let isDragging = false;

    const feedbackMessages = {
      restricted: {
        title: "Restricted Tool Selection",
        content: "Teams must use pre-approved tools only. This can limit innovation but ensures standardization and security compliance. Common in highly regulated environments."
      },
      flexible: {
        title: "Flexible Tool Selection",
        content: "Teams have some choice in tools within defined categories or approval processes. Balances innovation with governance. Allows experimentation with oversight."
      },
      freedom: {
        title: "Full Tool Freedom",
        content: "Teams can choose any tools that help them deliver value. Maximizes autonomy and innovation but requires strong practices around security and integration."
      }
    };

    function updateSlider(clientX) {
      const rect = slider.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      thumb.style.left = percentage + '%';

      let level, color;
      if (percentage < 33) {
        level = 'restricted';
        color = '#f44336';
      } else if (percentage < 67) {
        level = 'flexible';
        color = '#ffc107';
      } else {
        level = 'freedom';
        color = '#0F766E';
      }

      thumb.style.borderColor = color;
      feedback.style.borderLeftColor = color;
      feedback.innerHTML = `<h5 class="feedback-title" style="color: ${color};">${feedbackMessages[level].title}</h5><p class="feedback-content">${feedbackMessages[level].content}</p>`;
    }

    function startDrag(clientX) {
      isDragging = true;
      updateSlider(clientX);
      document.body.style.userSelect = 'none';
    }

    function stopDrag() {
      isDragging = false;
      document.body.style.userSelect = '';
    }

    // Mouse events
    thumb.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    });

    slider.addEventListener('click', (e) => {
      if (!isDragging) {
        updateSlider(e.clientX);
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.clientX);
      }
    });

    document.addEventListener('mouseup', stopDrag);

    // Touch events for mobile
    thumb.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startDrag(e.touches[0].clientX);
    });

    document.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
      }
    });

    document.addEventListener('touchend', stopDrag);
  }
});
</script>
