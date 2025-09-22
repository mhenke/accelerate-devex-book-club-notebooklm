---
layout: meeting
title: "Meeting 3: Architecture & Autonomy"
subtitle: "Lean Thinking"
week: "Week 5"
duration: "1 Hour"
chapters: "Chapters 9-12 (Organizational and Management Practices)"
order: 3
---

## Pre-Reading Assignment

**Chapters:** 9-12 (Organizational and Management Practices)
- Chapter 9: Making Work Sustainable
- Chapter 10: Employee Satisfaction, Identity, and Engagement
- Chapter 11: Leaders and Managers
- Chapter 12: Diversity in Tech

## Core Concepts to Explore

### 1. Modular/Loosely Coupled Architecture

<div class="architecture-comparison">
  <div class="arch-card tightly-coupled">
    <h4>🔗 Tightly Coupled</h4>
    <ul>
      <li>Teams wait on each other</li>
      <li>High coordination overhead</li>
      <li>Changes require multiple teams</li>
      <li>Deployment dependencies</li>
    </ul>
  </div>
  
  <div class="arch-card loosely-coupled">
    <h4>🧩 Loosely Coupled</h4>
    <ul>
      <li>Independent team work</li>
      <li>Reduced coordination</li>
      <li>Teams own their services</li>
      <li>Independent deployment</li>
    </ul>
  </div>
</div>

**Kitchen Analogy:** Like chefs working independently on their dishes without constant coordination

**Conway's Law Inverse:** Evolving team structures to match desired architecture

### 2. Empowerment Through Tool Selection

<div class="autonomy-benefits">
  <div class="benefit-item">
    <h5>🎨 Enhanced Creativity</h5>
    <p>Freedom to choose tools that best fit the problem</p>
  </div>
  
  <div class="benefit-item">
    <h5>📈 Increased Productivity</h5>
    <p>Using familiar and efficient tools</p>
  </div>
  
  <div class="benefit-item">
    <h5>😊 Higher Satisfaction</h5>
    <p>Autonomy directly correlates with job satisfaction</p>
  </div>
  
  <div class="benefit-item">
    <h5>💡 Innovation Driver</h5>
    <p>Flexible policies lead to better solutions</p>
  </div>
</div>

### 3. Lean Management Principles

<div class="lean-principles">
  <div class="principle">
    <h5>🚦 Limit Work in Progress (WIP)</h5>
    <p>Using WIP limits to manage flow and drive process improvement</p>
  </div>
  
  <div class="principle">
    <h5>👁️ Visualize Work</h5>
    <p>Making work and metrics visible to the team</p>
  </div>
  
  <div class="principle">
    <h5>👥 Lightweight Change Approval</h5>
    <p>Peer review over external change approval boards</p>
  </div>
  
  <div class="principle">
    <h5>🔄 Customer Feedback Integration</h5>
    <p>Getting early and frequent customer input</p>
  </div>
  
  <div class="principle">
    <h5>📊 Data-Driven Decisions</h5>
    <p>Using monitoring and metrics to inform choices</p>
  </div>
</div>

### 4. Employee Satisfaction Drivers

- **Meaningful Work:** Appropriate challenges and purposeful tasks
- **Learning Opportunities:** Growth and development possibilities
- **Supportive Environment:** Team culture that enables success
- **Tool Access:** Having the right resources to do the job effectively

## Discussion Questions

1. **Architecture Assessment:** How well does your current architecture enable independent team work?
2. **Tool Autonomy:** What level of tool selection freedom do teams currently have?
3. **Lean Practices:** Which lean management practices are you currently using? Which could be adopted?
4. **WIP Visibility:** How do you currently visualize and limit work in progress?
5. **Developer Satisfaction:** What factors most impact job satisfaction in your organization?

## Practical Exercises

- Map current dependencies between teams and systems
- Identify bottlenecks in current change approval processes
- Assess current WIP limits and visualization practices

## Action Items for Next Meeting

- [ ] Document one architectural dependency that slows down your team
- [ ] Experiment with visualizing work using a simple kanban board
- [ ] Identify one process that could benefit from peer review instead of external approval

---

## 🎧 Supplementary Content

### Audio Podcast
Generate a discussion podcast using our [Meeting 3 Podcast Prompt](/prompts/meeting-3-podcast-prompt.md)

### Video Summary  
Create a visual overview with our [Meeting 3 Video Prompt](/prompts/meeting-3-video-prompt.md)

<style>
.architecture-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.arch-card {
  border: 2px solid;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
}

.arch-card.tightly-coupled {
  border-color: #d73a49;
  background: #ffeef0;
}

.arch-card.loosely-coupled {
  border-color: #28a745;
  background: #f0fff4;
}

.arch-card h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.arch-card ul {
  margin-bottom: 0;
}

.autonomy-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.benefit-item {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1rem;
  background: #f8f9fa;
}

.benefit-item h5 {
  margin: 0 0 0.5rem 0;
  color: #0366d6;
}

.benefit-item p {
  margin: 0;
  color: #586069;
  font-size: 0.9em;
}

.lean-principles {
  margin: 2rem 0;
}

.principle {
  border-left: 4px solid #0366d6;
  padding-left: 1rem;
  margin: 1.5rem 0;
}

.principle h5 {
  margin: 0 0 0.5rem 0;
  color: #0366d6;
}

.principle p {
  margin: 0;
  color: #586069;
}

@media (max-width: 768px) {
  .architecture-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>