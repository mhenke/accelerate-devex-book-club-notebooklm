---
layout: meeting
title: 'Meeting 2: Technical Excellence'
subtitle: 'Technical Excellence &amp; Continuous Delivery'
week: 3
chapters: '4-6'
duration: '1 Hour'
dora_color: '#0F766E'
---

{% include reusable-media-video.html 
  meeting_number="2"
  video_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-2-video.mp4"
%}

{% include reusable-media-podcast.html 
  meeting_number="2"
  audio_url="https://accelerate-devex-book-club-notebooklm.s3.amazonaws.com/meeting-2-podcast.m4a"
%}

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
  {% include insight-card.html icon="fas fa-tools" title="Build Quality In" description="Start with quality, don't inspect later" %}
  {% include insight-card.html icon="fas fa-box" title="Small Batches" description="Manageable, testable units" %}
  {% include insight-card.html icon="fas fa-robot" title="Automate Tasks" description="Free humans for creative work" %}
  {% include insight-card.html icon="fas fa-folder" title="Version Control" description="All artifacts under control" %}
  {% include insight-card.html icon="fas fa-code-branch" title="Trunk-Based Dev" description="Short branches, frequent integration" %}
  {% include insight-card.html icon="fas fa-flask" title="Test Automation" description="Automated testing at all levels" %}
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
  {% include law-statement.html 
    quote="Organizations design systems that mirror their communication structures"
    attribution="Melvin Conway, 1967"
    context="Conway's Law demonstrates how organizational structure directly influences system architecture"
    theme="tech"
  %}

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
  {% include checkpoint-card.html 
    title="CD Maturity Assessment"
    icon="fas fa-chart-line"
    question="Rate your organization's maturity in Continuous Delivery practices:"
    answers=site.data.checkpoint_answers.technical_maturity
    feedback_id="cd-maturity-feedback"
    radio_name="cd-maturity"
    card_class="cd-maturity"
    default_feedback="Select your organization's CD maturity level to see improvement opportunities."
  %}

  {% include checkpoint-card.html 
    title="Security Integration Assessment"
    icon="fas fa-shield-alt"
    question="Rate how well security is integrated into your delivery process:"
    answers=site.data.checkpoint_answers.five_point_scale
    feedback_id="checkpoint-feedback"
    radio_name="security-integration"
    card_class="security-integration"
    default_feedback="Select your security integration level to see improvement strategies and performance impacts."
  %}

  {% include reusable-slider-checkpoint.html 
    title="Tool Freedom"
    icon="fas fa-palette"
    question="Rate your team's tool selection autonomy:"
    min_label="Restricted"
    mid_label="Flexible"
    max_label="Full Freedom"
    slider_id="tool-slider"
    feedback_id="slider-feedback"
    card_class="tool-autonomy"
    default_feedback="Move the slider to assess your team's tool autonomy level"
  %}
</div>

### Real-World Applications

<div class="real-world-applications" markdown="0">
  {% include reusable-application-card.html 
    icon="fas fa-robot"
    title="Automation Success Stories"
    description="Share examples from your experience:"
    prompts="What manual process did you recently automate? What was the impact?|How did test automation change your team's deployment confidence?|What task took hours manually but now takes minutes with automation?"
    theme="automation"
  %}

  {% include reusable-application-card.html 
    icon="fas fa-sitemap"
    title="Architectural Decisions"
    description="Discuss decisions that impacted team independence:"
    prompts="Which architectural changes improved your team's deployment frequency?|What dependencies currently prevent independent deployments?|How did microservices or modular design affect your delivery speed?"
    theme="architecture"
  %}

  {% include reusable-application-card.html 
    icon="fas fa-shield-alt"
    title="Security Integration"
    description="Examine security practices that impact delivery:"
    prompts="Which security practices actually speed up delivery?|What security requirements currently slow down your team?|How do you balance security compliance with delivery speed?"
    theme="security"
  %}
</div>

### Discussion Questions

<div class="discussion-questions-grid" markdown="0">
  {% include discussion-card.html 
    icon="fas fa-chart-line" 
    title="CD Maturity Assessment" 
    question="Which CD practices is your organization currently implementing well/poorly?" 
    prompts="Trunk-based development and branching strategy|Automated testing coverage and quality|Deployment pipeline automation|Feature flags and rollback capabilities" 
  %}

  {% include discussion-card.html 
    icon="fas fa-project-diagram" 
    title="Architecture Dependencies" 
    question="What prevents your team from deploying independently?" 
    prompts="Shared databases and data dependencies|Coordinated release schedules|Service coupling and API contracts|Infrastructure and deployment bottlenecks" 
    theme="warning"
  %}

  {% include discussion-card.html 
    icon="fas fa-tools" 
    title="Tool Autonomy" 
    question="How much freedom do teams have in tool selection? What are the constraints?" 
    prompts="Security and compliance requirements|Standardization vs. innovation balance|Budget and licensing considerations|Support and maintenance capabilities" 
    theme="primary"
  %}

  {% include discussion-card.html 
    icon="fas fa-shield-alt" 
    title="Security Integration" 
    question="How early in your development process is security considered?" 
    prompts="Security testing in CI/CD pipelines|Developer security training and awareness|Code review and static analysis integration|Shift-left vs. security gate approaches" 
    theme="neutral"
  %}
</div>

### Action Items for Next Meeting

<div class="action-items-grid" markdown="0">
  {% include reusable-action-card.html 
    icon="fas fa-robot"
    title="Automate one manual process"
    question="Which repetitive task will you tackle first?"
    details="Identify a repetitive deployment, testing, or configuration task and automate it within 1-2 weeks."
    action_items="Choose a manual process to automate|Research automation tools and approaches|Implement basic automation|Document time savings and benefits"
    checkbox_id="automation-task"
    theme="success"
  %}

  {% include reusable-action-card.html 
    icon="fas fa-project-diagram"
    title="Map your dependencies"
    question="What prevents independent deployments?"
    details="Document shared databases, services, and infrastructure dependencies that impact team autonomy."
    action_items="List all shared databases and services|Document coordination requirements|Identify deployment bottlenecks|Create dependency visualization diagram"
    checkbox_id="dependency-mapping"
    theme="warning"
  %}

  {% include reusable-action-card.html 
    icon="fas fa-flask"
    title="Experiment with a CD practice"
    question="Which practice will move you forward?"
    details="Try trunk-based development, test automation, or feature flags. Set goals and share results next meeting."
    action_items="Choose one CD practice to experiment with|Set measurable goals and timeline|Implement pilot or proof of concept|Prepare results to share with team"
    checkbox_id="cd-experiment"
    theme="primary"
  %}
</div>

### Related Resources

<div class="resource-grid" markdown="0">
  {% include reusable-resource-card.html 
    icon="fas fa-tools" 
    title="CI/CD Tools & Platforms" 
    links="GitHub Actions|https://github.com/features/actions|Jenkins|https://www.jenkins.io/|CircleCI|https://circleci.com/|Argo CD|https://argoproj.github.io/cd/" 
    theme="tools"
    show_external_icons=true
  %}

  {% include reusable-resource-card.html 
    icon="fas fa-shield-alt" 
    title="Security Integration" 
    links="OWASP DevSecOps Guidelines|https://owasp.org/www-project-devsecops-guideline/|Snyk|https://snyk.io/|GitHub Security|https://github.com/features/security|SonarQube|https://www.sonarqube.org/" 
    theme="technical"
    show_external_icons=true
  %}
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

.insight-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #0F766E;
}

.insight-card:hover {
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

.insight-card p {
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

