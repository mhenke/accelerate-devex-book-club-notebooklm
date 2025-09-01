---
layout: meeting
title: 'Meeting 2: Technical Excellence'
subtitle: 'Technical Excellence & Continuous Delivery'
week: 3
chapters: '4-6'
duration: '1 Hour'
dora_color: '#059669'
---

## Watch the Meeting 2 Video

<video controls width="100%">
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-2-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

## Listen to the Meeting 2 Podcast

<audio controls>
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-2-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

## Architecture: Loosely Coupled Systems Enable Team Independence

<div class="architecture-comparison">
  <div class="arch-side tight-coupled">
    <h3><i class="fas fa-link"></i> Tightly Coupled</h3>
    <div class="arch-content">
      <p><strong>High Dependencies</strong></p>
      <ul>
        <li><i class="fas fa-ban"></i> Teams block each other</li>
        <li><i class="fas fa-phone"></i> Constant coordination needed</li>
        <li><i class="fas fa-turtle"></i> Slower deployment cycles</li>
        <li><i class="fas fa-fire"></i> Cascading failures</li>
      </ul>
    </div>
  </div>
  
  <div class="vs-divider">
    <span>VS</span>
  </div>
  
  <div class="arch-side loose-coupled">
    <h3><i class="fas fa-puzzle-piece"></i> Loosely Coupled</h3>
    <div class="arch-content">
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

## Tool Autonomy & CD Maturity Assessment

<div class="tool-autonomy-impact">
  <div class="autonomy-stat">
    <div class="stat-icon"><i class="fas fa-palette"></i></div>
    <div class="stat-content">
      <h4>Tool Choice Freedom</h4>
      <p>Teams that choose their own tools are:</p>
      <div class="impact-metrics">
        <div class="metric-point">
          <i class="fas fa-chart-line"></i>
          <span>Higher performing</span>
        </div>
        <div class="metric-point">
          <i class="fas fa-smile"></i>
          <span>More satisfied</span>
        </div>
        <div class="metric-point">
          <i class="fas fa-lightbulb"></i>
          <span>More innovative</span>
        </div>
      </div>
    </div>
  </div>
</div>

## CD Maturity Assessment

<div class="cd-maturity-assessment">
  <h4>How mature are your CD practices?</h4>
  <ul>
    <li>Which CD practices is your organization currently implementing well/poorly?</li>
    <li>What prevents your team from deploying independently?</li>
    <li>How much freedom do teams have in tool selection? What are the constraints?</li>
    <li>How early in your development process is security considered?</li>
  </ul>
</div>

## Continuous Delivery Core Principles

<div class="cd-principles-grid">
  <div class="principle-card quality">
    <h4><i class="fas fa-tools"></i> Build Quality In</h4>
    <p>Start with quality, don't inspect later</p>
  </div>
  
  <div class="principle-card batches">
    <h4><i class="fas fa-box"></i> Small Batches</h4>
    <p>Manageable, testable units</p>
  </div>
  
  <div class="principle-card automation">
    <h4><i class="fas fa-robot"></i> Automate Tasks</h4>
    <p>Free humans for creative work</p>
  </div>
  
  <div class="principle-card version">
    <h4><i class="fas fa-folder"></i> Version Control</h4>
    <p>All artifacts under control</p>
  </div>
  
  <div class="principle-card trunk">
    <h4><i class="fas fa-code-branch"></i> Trunk-Based Dev</h4>
    <p>Short branches, frequent integration</p>
  </div>
  
  <div class="principle-card testing">
    <h4><i class="fas fa-flask"></i> Test Automation</h4>
    <p>Automated testing at all levels</p>
  </div>
</div>

## Breaking the "Wall of Confusion"

<div class="wall-confusion-section">
  <div class="confusion-problem">
    <div class="problem-icon"><i class="fas fa-wall-brick"></i></div>
    <h4>Traditional Silos</h4>
    <ul>
      <li><i class="fas fa-code"></i> Development optimizes for <strong>throughput</strong></li>
      <li><i class="fas fa-server"></i> Operations optimizes for <strong>stability</strong></li>
      <li><i class="fas fa-times-circle"></i> Conflicting incentives create friction</li>
      <li><i class="fas fa-handshake-slash"></i> Blame culture emerges from misalignment</li>
    </ul>
  </div>
  
  <div class="arrow-breakthrough">
    <i class="fas fa-arrow-right"></i>
    <span>CD Solution</span>
  </div>
  
  <div class="confusion-solution">
    <div class="solution-icon"><i class="fas fa-hands-helping"></i></div>
    <h4>System-Level Outcomes</h4>
    <ul>
      <li><i class="fas fa-bullseye"></i> Shared responsibility for <strong>both</strong> speed and stability</li>
      <li><i class="fas fa-chart-line"></i> Metrics that reward collaboration</li>
      <li><i class="fas fa-tools"></i> Technical practices that enable both goals</li>
      <li><i class="fas fa-seedling"></i> Culture transformation through behavioral change</li>
    </ul>
  </div>
</div>

## Security: Shift Left for Speed AND Safety

<div class="security-shift-comparison">
  <div class="security-approach traditional">
    <div class="approach-icon"><i class="fas fa-shield-alt"></i></div>
    <h4>Traditional: Bolt-On Security</h4>
    <div class="security-problems">
      <div class="problem-item">
        <i class="fas fa-clock"></i>
        <span>Security review at the end</span>
      </div>
      <div class="problem-item">
        <i class="fas fa-exclamation-triangle"></i>
        <span>50% more remediation time</span>
      </div>
      <div class="problem-item">
        <i class="fas fa-turtle"></i>
        <span>Delayed releases</span>
      </div>
    </div>
  </div>
  
  <div class="vs-arrow">→</div>
  
  <div class="security-approach integrated">
    <div class="approach-icon"><i class="fas fa-lock"></i></div>
    <h4>Shift-Left: Built-In Security</h4>
    <div class="security-benefits">
      <div class="benefit-item">
        <i class="fas fa-rocket"></i>
        <span>Security checks in CI/CD pipeline</span>
      </div>
      <div class="benefit-item">
        <i class="fas fa-chart-line"></i>
        <span>50% faster remediation</span>
      </div>
      <div class="benefit-item">
        <i class="fas fa-balance-scale"></i>
        <span>Better security AND faster delivery</span>
      </div>
    </div>
  </div>
</div>

## Conway's Law & Team Structure

<div class="conway-law-section">
  <div class="law-statement">
    <blockquote>
      <i class="fas fa-quote-left"></i> "Organizations design systems that mirror their communication structures"
    </blockquote>
    <cite>— Melvin Conway, 1967</cite>
  </div>
  
  <div class="conway-examples">
    <div class="example-card">
      <h4><i class="fas fa-sitemap"></i> Traditional Organization</h4>
      <p><strong>Structure:</strong> Separate dev, QA, ops teams</p>
      <p><strong>Result:</strong> Monolithic systems with handoff bottlenecks</p>
    </div>
    
    <div class="arrow-transform">
      <i class="fas fa-sync-alt"></i>
      <span>Inverse Conway</span>
    </div>
    
    <div class="example-card">
      <h4><i class="fas fa-users"></i> Cross-Functional Teams</h4>
      <p><strong>Structure:</strong> Full-stack teams with all skills</p>
      <p><strong>Result:</strong> Loosely coupled, independently deployable services</p>
    </div>
  </div>
</div>


## Interactive Learning Checkpoint

<div class="learning-checkpoint">
  <div class="checkpoint-card cd-maturity">
    <div class="checkpoint-icon"><i class="fas fa-chart-line"></i></div>
    <h4>CD Maturity Assessment</h4>
    <p>Reflect on your team's strengths and gaps in CD practices.</p>
    <ul>
      <li>Automate one manual process</li>
      <li>Map dependencies blocking independent deployment</li>
      <li>Experiment with trunk-based development or test automation</li>
    </ul>
  </div>

  <div class="checkpoint-card tool-autonomy">
    <div class="checkpoint-icon"><i class="fas fa-palette"></i></div>
    <h4>Tool Freedom</h4>
    <p>Rate your team's tool selection autonomy:</p>
    <div class="autonomy-slider">
      <div class="slider-labels">
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

## Real-World Applications

<div class="real-world-applications">
  <div class="application-card automation-examples">
    <h4><i class="fas fa-robot"></i> Automation Success Stories</h4>
    <p>Share examples from your experience:</p>
    <div class="example-prompts">
      <div class="prompt-item">
        <i class="fas fa-lightbulb"></i>
        <span>What manual process did you recently automate? What was the impact?</span>
      </div>
      <div class="prompt-item">
        <i class="fas fa-chart-line"></i>
        <span>How did test automation change your team's deployment confidence?</span>
      </div>
      <div class="prompt-item">
        <i class="fas fa-clock"></i>
        <span>What task took hours manually but now takes minutes with automation?</span>
      </div>
    </div>
  </div>
  
  <div class="application-card architecture-decisions">
    <h4><i class="fas fa-sitemap"></i> Architectural Decisions</h4>
    <p>Discuss decisions that impacted team independence:</p>
    <div class="example-prompts">
      <div class="prompt-item">
        <i class="fas fa-check-circle"></i>
        <span>Which architectural changes improved your team's deployment frequency?</span>
      </div>
      <div class="prompt-item">
        <i class="fas fa-times-circle"></i>
        <span>What dependencies currently prevent independent deployments?</span>
      </div>
      <div class="prompt-item">
        <i class="fas fa-puzzle-piece"></i>
        <span>How did microservices or modular design affect your delivery speed?</span>
      </div>
    </div>
  </div>
  
  <div class="application-card security-practices">
    <h4><i class="fas fa-shield-alt"></i> Security Integration</h4>
    <p>Examine security practices that impact delivery:</p>
    <div class="example-prompts">
      <div class="prompt-item">
        <i class="fas fa-fast-forward"></i>
        <span>Which security practices actually speed up delivery?</span>
      </div>
      <div class="prompt-item">
        <i class="fas fa-turtle"></i>
        <span>What security requirements currently slow down your team?</span>
      </div>
      <div class="prompt-item">
        <i class="fas fa-balance-scale"></i>
        <span>How do you balance security compliance with delivery speed?</span>
      </div>
    </div>
  </div>
</div>

## Discussion Questions

1. **CD Maturity Assessment:** Which CD practices is your organization currently implementing well/poorly?
2. **Architecture Dependencies:** What prevents your team from deploying independently?
3. **Tool Autonomy:** How much freedom do teams have in tool selection? What are the constraints?
4. **Security Integration:** How early in your development process is security considered?

## Action Items for Next Meeting

<ul class="action-items">
<li>[ ] Identify one manual process that could be automated</li>
<li>[ ] Map current dependencies that prevent independent deployment</li>
<li>[ ] Experiment with one CD practice (trunk-based development, test automation, etc.)</li>
</ul>

## Related Resources

<div class="related-resources">
  <div class="resource-category">
    <h4><i class="fas fa-tools"></i> CI/CD Tools & Platforms</h4>
    <ul>
      <li><a href="https://github.com/features/actions" target="_blank">GitHub Actions</a> - Workflow automation</li>
      <li><a href="https://www.jenkins.io/" target="_blank">Jenkins</a> - Open source automation server</li>
      <li><a href="https://circleci.com/" target="_blank">CircleCI</a> - Continuous integration platform</li>
      <li><a href="https://argoproj.github.io/cd/" target="_blank">Argo CD</a> - GitOps continuous delivery</li>
    </ul>
  </div>
  
  <div class="resource-category">
    <h4><i class="fas fa-shield-alt"></i> Security Integration</h4>
    <ul>
      <li><a href="https://owasp.org/www-project-devsecops-guideline/" target="_blank">OWASP DevSecOps</a> - Security guidelines</li>
      <li><a href="https://snyk.io/" target="_blank">Snyk</a> - Developer security platform</li>
      <li><a href="https://github.com/features/security" target="_blank">GitHub Security</a> - Built-in security features</li>
      <li><a href="https://www.sonarqube.org/" target="_blank">SonarQube</a> - Code quality and security</li>
    </ul>
  </div>
</div>

<style>
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
  border-radius: 12px;
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

/* Related Resources */
.related-resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
}

.resource-category {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #059669;
}

.resource-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.2);
}


.resource-category h4 {
  margin: 0 0 1rem 0;
  color: #1565c0;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.resource-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resource-category li {
  margin: 0.75rem 0;
  padding: 0.5rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.resource-category li:hover {
  background: linear-gradient(135deg, #059669, #047857);
  transform: translateX(4px);
}

.resource-category a {
  color: #047857;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  display: block;
  transition: all 0.3s ease;
}

.resource-category li:hover a {
  color: white;
}

/* Architecture Comparison */
.architecture-comparison {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
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
  color: #064e3b;
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
  color: #059669;
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #059669;
}

/* Wall of Confusion Section */
.wall-confusion-section {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
}

.confusion-problem, .confusion-solution {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.problem-icon, .solution-icon {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #059669;
}

.confusion-problem h4, .confusion-solution h4 {
  margin: 0 0 1rem 0;
  color: #047857;
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
  color: #059669;
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
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
}

.security-approach {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.approach-icon {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #059669;
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
  color: #059669;
  font-weight: bold;
}

/* Conway's Law Section */
.conway-law-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
}

.law-statement {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}


.law-statement blockquote {
  font-size: 1.2rem;
  font-style: italic;
  color: #065f46;
  margin: 1rem 0;
  font-weight: 500;
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
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}


.example-card h4 {
  margin: 0 0 1rem 0;
  color: #065f46;
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
  color: #059669;
  font-weight: bold;
}

.arrow-transform i {
  font-size: 2rem;
}

/* Tool Autonomy Impact */
.tool-autonomy-impact {
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
}

.autonomy-stat {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.stat-icon {
  font-size: 3rem;
  color: #059669;
  flex-shrink: 0;
}

.stat-content h4 {
  margin: 0 0 1rem 0;
  color: #047857;
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
  color: #059669;
}

/* Transformation Flow */
.transformation-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #fce4ec);
  border-radius: 16px;
  border: 2px solid #059669;
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
  color: #064e3b;
  font-size: 1.1rem;
}

.flow-step p {
  color: #059669;
  font-size: 0.9rem;
  margin: 0;
}

.flow-arrow {
  font-size: 2rem;
  color: #059669;
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
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #059669;
}

.principle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}


.principle-card h4 {
  margin: 0 0 0.75rem 0;
  color: #064e3b;
  font-size: 1.2rem;
  font-weight: 600;
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
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 16px;
  border: 2px solid #059669;
}

.application-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid #059669;
}

.application-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}


.application-card h4 {
  margin: 0 0 1rem 0;
  color: #047857;
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
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  transform: translateX(4px);
}

.prompt-item i {
  flex-shrink: 0;
  font-size: 1.1rem;
  margin-top: 0.1rem;
  color: #059669;
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
  }
  
  .vs-divider {
    transform: rotate(90deg);
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .wall-confusion-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .arrow-breakthrough {
    transform: rotate(90deg);
  }
  
  .security-shift-comparison {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .vs-arrow {
    transform: rotate(90deg);
  }
  
  .conway-examples {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .arrow-transform {
    transform: rotate(90deg);
  }
  
  .autonomy-stat {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .related-resources {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .resource-category {
    padding: 1.5rem;
  }
  
  .transformation-flow {
    flex-direction: column;
    gap: 1rem;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
    font-size: 1.5rem;
  }
  
  .cd-principles-grid {
    grid-template-columns: 1fr;
  }
  
  .principle-card {
    padding: 1.5rem;
  }
  
  .real-world-applications {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .application-card {
    padding: 1.5rem;
  }
}

/* Interactive Learning Checkpoint */
.learning-checkpoint {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-radius: 20px;
  border: 2px solid #059669;
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
  border-color: #059669;
}

.checkpoint-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.checkpoint-card h4 {
  margin: 0 0 1rem 0;
  color: #064e3b;
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
  border: 3px solid #059669;
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
  border-left: 4px solid #059669;
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
  padding: 1rem 1.5rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
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
  border-color: #059669;
  color: #047857;
}

.assessment-btn.generative .radio-mark {
  border-color: #059669;
}

.assessment-btn.generative input:checked ~ .radio-mark {
  background: #059669;
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
  background: #059669;
  color: white;
  transform: scale(1.02);
}

.assessment-btn.generative:has(input:checked) {
  background: #dcfce7;
  border-color: #047857;
  color: #047857;
}

/* Feedback Areas */
.feedback-area {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
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
  border-color: #059669;
  background: linear-gradient(135deg, #dcfce7, #fce4ec);
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
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border-left: 4px solid #059669;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;
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
  border: 2px solid #059669;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
}

.practice-item input:checked ~ .radio-mark {
  background: #059669;
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
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
}

.practice-item:has(input:checked) {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-left-color: #064e3b;
  color: #064e3b;
}

/* CD Selector */
.cd-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.cd-option {
  position: relative;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.9rem;
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
  border: 2px solid #059669;
  border-radius: 50%;
  background: white;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
}

.cd-option input:checked ~ .radio-mark {
  background: #059669;
  border-color: #059669;
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
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  border-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
}

.cd-option:has(input:checked) {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  border-color: #059669;
  color: #064e3b;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.2);
}

/* Responsive Design for Checkpoint */
@media (max-width: 768px) {
  .learning-checkpoint {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .checkpoint-card {
    padding: 1.5rem;
  }
  
  .cd-selector {
    grid-template-columns: 1fr;
  }
  
  .assessment-buttons {
    gap: 0.75rem;
  }
  
  .assessment-btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .practice-options {
    gap: 0.75rem;
  }
  
  .practice-item {
    padding: 0.875rem;
    font-size: 0.85rem;
  }
  
  .cd-option {
    padding: 0.875rem;
    font-size: 0.85rem;
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

/* Action Items Styling */
.action-items {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.action-items li {
  display: block;
  padding: 0.5rem 0;
  font-weight: 500;
}
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
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
        color = '#4caf50';
      }
      
      thumb.style.borderColor = color;
      feedback.style.borderLeftColor = color;
      feedback.innerHTML = `<h5 style="margin: 0 0 0.5rem 0; color: ${color}; font-size: 1rem;">${feedbackMessages[level].title}</h5><p style="margin: 0; font-size: 0.85rem; line-height: 1.4;">${feedbackMessages[level].content}</p>`;
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
