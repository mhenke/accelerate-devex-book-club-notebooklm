---
layout: default
title: AI Content Generation
---

<div class="page-hero page-hero--orange">
  <div class="hero-content">
    <div class="hero-icon">
      <i class="fas fa-microphone-alt"></i>
    </div>
    <h1 class="page-title">AI Content Generation</h1>
    <p class="page-subtitle">Enhance your "Accelerate" book club experience with AI-generated podcasts, videos, and supplementary content</p>
  </div>
</div>

<div class="page-container">
  <div class="section-accent">
    <i class="fas fa-robot"></i>
    NotebookLM Content Generation
  </div>

  <p class="intro-text">Use these carefully crafted prompts with <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">NotebookLM</a> to create engaging audio and video content for each meeting.</p>

  <div class="meeting-grid">
    {% include meeting-card.html 
       meeting_number="1" 
       title="Meeting 1: Foundation" 
       subtitle="DORA Metrics & Speed vs. Stability" 
       icon="chart-line" 
       podcast_link="#meeting-1-podcast" 
       video_link="#meeting-1-video" %}

    {% include meeting-card.html 
       meeting_number="2" 
       title="Meeting 2: Culture & CD" 
       subtitle="Westrum Culture & Continuous Delivery" 
       icon="sync-alt" 
       podcast_link="#meeting-2-podcast" 
       video_link="#meeting-2-video" %}

    {% include meeting-card.html 
       meeting_number="3" 
       title="Meeting 3: Architecture" 
       subtitle="Loose Coupling & Team Autonomy" 
       icon="building" 
       podcast_link="#meeting-3-podcast" 
       video_link="#meeting-3-video" %}

    {% include meeting-card.html 
       meeting_number="4" 
       title="Meeting 4: Leadership" 
       subtitle="Transformational Leadership" 
       icon="users" 
       podcast_link="#meeting-4-podcast" 
       video_link="#meeting-4-video" %}

  </div>
</div>

## How to Use These Prompts

<div class="learning-checkpoint">
  <div class="checkpoint-card">
    <h4><i class="fas fa-play-circle"></i> Step-by-Step Process</h4>
    <div class="process-steps">
      <div class="step-item">
        <div class="step-number">1</div>
        <div class="step-content">
          <strong>Visit NotebookLM</strong>
          <p>Go to <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">NotebookLM</a> and create a new notebook</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">2</div>
        <div class="step-content">
          <strong>Upload source materials</strong>
          <p>Add relevant book chapters or meeting notes</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">3</div>
        <div class="step-content">
          <strong>Copy the prompt</strong>
          <p>Select the prompt for your desired meeting and format</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">4</div>
        <div class="step-content">
          <strong>Generate content</strong>
          <p>NotebookLM will create engaging audio/video content</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-number">5</div>
        <div class="step-content">
          <strong>Share with participants</strong>
          <p>Use before or after meetings to enhance discussion</p>
        </div>
      </div>
    </div>
  </div>

  <div class="checkpoint-card">
    <h4><i class="fas fa-shield-alt"></i> General Guidelines</h4>
    <div class="guidelines-grid">
      <div class="guideline-item">
        <div class="guideline-icon" style="color: #2196F3">
          <i class="fas fa-check-circle"></i>
        </div>
        <div>
          <strong>Content Quality Standards</strong>
          <ul>
            <li><strong>Accuracy:</strong> All content should reflect the book's core principles</li>
            <li><strong>Accessibility:</strong> Use clear language accessible to diverse technical backgrounds</li>
            <li><strong>Engagement:</strong> Include real-world examples and practical applications</li>
            <li><strong>Time Management:</strong> Keep podcasts 15-20 minutes, videos 10-15 minutes</li>
          </ul>
        </div>
      </div>

      <div class="guideline-item">
        <div class="guideline-icon" style="color: #4CAF50">
          <i class="fas fa-lightbulb"></i>
        </div>
        <div>
          <strong>Best Practices</strong>
          <ul>
            <li><strong>Pre-Meeting:</strong> Use content to prime discussions and highlight key concepts</li>
            <li><strong>Post-Meeting:</strong> Reinforce learning and provide alternative perspectives</li>
            <li><strong>Supplementary:</strong> Never replace actual book reading or group discussion</li>
            <li><strong>Attribution:</strong> Always credit AI generation and source materials</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

---

<div class="section-accent">
  <i class="fas fa-podcast"></i>
  Podcast Prompts
</div>

### Meeting 1: Foundation {#meeting-1-podcast}

<div class="prompt-container">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #2196F3">
      <i class="fas fa-microphone-alt"></i>
    </div>
    <div class="prompt-meta">
      <h4>Foundation Podcast - 15 minutes</h4>
      <p>DORA Metrics & Debunking Speed vs. Stability</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 15-minute podcast discussing the foundational concepts from "Accelerate" chapters 1-4. Focus on:

1. **DORA Metrics Introduction** (5 minutes)

   - Lead Time, Deployment Frequency, MTTR, Change Fail Rate
   - Why these metrics matter for organizational performance
   - Common measurement pitfalls

2. **Debunking Speed vs. Stability** (7 minutes)

   - The false trade-off myth
   - How high performers achieve both
   - Real-world examples from the research

3. **Practical Application** (3 minutes)
   - First steps for measuring DORA metrics
   - Quick wins for improvement
   - Setting realistic expectations

Keep the tone conversational and include concrete examples. Address common skepticism about DevOps practices.</code></pre>

  </div>
</div>

### Meeting 2: Culture & CD {#meeting-2-podcast}

<div class="prompt-container">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #4CAF50">
      <i class="fas fa-microphone-alt"></i>
    </div>
    <div class="prompt-meta">
      <h4>Culture & Continuous Delivery - 18 minutes</h4>
      <p>Westrum Culture Types & CD Practices</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 18-minute podcast exploring organizational culture and continuous delivery from "Accelerate" chapters 5-8:

1. **Westrum Culture Types** (6 minutes)

   - Pathological, Bureaucratic, Generative cultures
   - How culture predicts performance
   - Signs of each culture type in practice

2. **Continuous Delivery Deep Dive** (8 minutes)

   - Core practices and their impact
   - Breaking down implementation barriers
   - The role of automation and testing

3. **Culture Transformation** (4 minutes)
   - Practical steps to shift culture
   - Leadership behaviors that matter
   - Measuring cultural progress

Include stories of successful transformations and address resistance to change.</code></pre>

  </div>
</div>

### Meeting 3: Architecture {#meeting-3-podcast}

<div class="prompt-container">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #FF9800">
      <i class="fas fa-microphone-alt"></i>
    </div>
    <div class="prompt-meta">
      <h4>Architecture & Team Organization - 16 minutes</h4>
      <p>Loose Coupling & Team Autonomy</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 16-minute podcast about architecture and team organization from "Accelerate" chapters 9-12:

1. **Loosely Coupled Architecture** (6 minutes)

   - What loose coupling means in practice
   - Impact on team velocity and independence
   - Common architectural anti-patterns

2. **Team Autonomy and Conway's Law** (6 minutes)

   - How organizational design affects system design
   - Enabling team independence
   - Balancing autonomy with alignment

3. **Lean Management Principles** (4 minutes)
   - Applying lean thinking to software delivery
   - Visual management and feedback loops
   - Continuous improvement practices

Focus on practical advice for technical leaders and architects.</code></pre>

  </div>
</div>

### Meeting 4: Leadership {#meeting-4-podcast}

<div class="prompt-container">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #F44336">
      <i class="fas fa-microphone-alt"></i>
    </div>
    <div class="prompt-meta">
      <h4>Transformational Leadership - 20 minutes</h4>
      <p>Leadership Behaviors & Learning Organizations</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 20-minute podcast on transformational leadership from "Accelerate" chapters 13-15:

1. **Transformational Leadership Behaviors** (8 minutes)

   - Vision, inspirational communication, intellectual stimulation
   - Personal recognition and supportive leadership
   - Real examples of these behaviors in action

2. **Creating Learning Organizations** (8 minutes)

   - Psychological safety and its importance
   - Encouraging experimentation and learning from failure
   - Building continuous improvement mindsets

3. **Sustaining Transformation** (4 minutes)
   - Long-term change strategies
   - Metrics for measuring transformation success
   - Avoiding common transformation pitfalls

Include case studies from high-performing organizations and actionable leadership advice.</code></pre>

  </div>
</div>

---

<div class="section-accent">
  <i class="fas fa-video"></i>
  Video Prompts
</div>

### Meeting 1: Foundation {#meeting-1-video}

<div class="prompt-container video">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #2196F3">
      <i class="fas fa-video"></i>
    </div>
    <div class="prompt-meta">
      <h4>DORA Metrics Introduction - 10 minutes</h4>
      <p>Visual explanation of the four key metrics</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 10-minute educational video introducing DORA metrics:

Structure:

- **Opening** (1 min): Hook with deployment horror story
- **DORA Overview** (3 min): Visual explanation of each metric
- **Research Findings** (4 min): Key insights from the State of DevOps reports
- **Getting Started** (2 min): First steps for measurement

Visual elements:

- Animated metric definitions
- Before/after transformation examples
- Simple dashboard mockups
- Clear, professional graphics

Target audience: Technical teams new to DevOps metrics</code></pre>

  </div>
</div>

### Meeting 2: Culture & CD {#meeting-2-video}

<div class="prompt-container video">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #4CAF50">
      <i class="fas fa-video"></i>
    </div>
    <div class="prompt-meta">
      <h4>Culture Transformation - 12 minutes</h4>
      <p>Westrum model and continuous delivery practices</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 12-minute video exploring organizational culture transformation:

Structure:

- **Culture Types Explained** (4 min): Visual representation of Westrum model
- **CD Practices Demo** (5 min): Show automated pipeline in action
- **Transformation Journey** (3 min): Timeline of typical culture change

Visual elements:

- Culture assessment diagrams
- Pipeline automation demonstrations
- Transformation roadmap templates
- Team collaboration examples

Include real organizational examples and practical next steps.</code></pre>

  </div>
</div>

### Meeting 3: Architecture {#meeting-3-video}

<div class="prompt-container video">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #FF9800">
      <i class="fas fa-video"></i>
    </div>
    <div class="prompt-meta">
      <h4>Architecture & Team Organization - 14 minutes</h4>
      <p>Visual guide to loosely coupled systems and team autonomy</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 14-minute video exploring architecture and team organization:

Structure:

- **Architecture Overview** (4 min): Visual explanation of loosely coupled systems
- **Conway's Law Demo** (6 min): Show how org structure affects system design
- **Lean Management** (4 min): Visual management practices in action

Visual elements:

- System architecture diagrams
- Team structure comparisons
- Conway's Law examples
- Lean management dashboards
- Continuous improvement workflows

Target audience: Technical leaders and architects looking to optimize team structure.</code></pre>

  </div>
</div>

### Meeting 4: Leadership {#meeting-4-video}

<div class="prompt-container video">
  <div class="prompt-header">
    <div class="prompt-icon" style="color: #F44336">
      <i class="fas fa-video"></i>
    </div>
    <div class="prompt-meta">
      <h4>Transformational Leadership - 15 minutes</h4>
      <p>Leadership behaviors that drive high performance</p>
    </div>
  </div>
  
  <div class="prompt-content">
    <pre><code>Create a 15-minute video on transformational leadership:

Structure:

- **Leadership Behaviors** (6 min): Demonstrate key transformational behaviors
- **Learning Organizations** (6 min): Building psychological safety and continuous learning
- **Sustaining Change** (3 min): Long-term transformation strategies

Visual elements:

- Leadership behavior examples
- Psychological safety indicators
- Learning organization frameworks
- Transformation timeline templates
- Success metrics dashboards

Include real case studies and actionable leadership practices.</code></pre>

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
