---
layout: meeting
title: "Meeting 2: Cultivating Culture"
subtitle: "Embracing Continuous Delivery"
week: "Week 3"
duration: "1 Hour"
chapters: "Chapters 5-8 (Continued Research Findings)"
order: 2
---

## Pre-Reading Assignment

**Chapters:** 5-8 (Continued Research Findings)
- Chapter 5: Architecture
- Chapter 6: Integrating Infosec into the Delivery Lifecycle
- Chapter 7: Management Practices for Software
- Chapter 8: Product Development

## Core Concepts to Explore

### 1. Organizational Culture Types (Westrum's Typology)

<div class="culture-types">
  <div class="culture-card pathological">
    <h4>⚠️ Pathological (Power-Oriented)</h4>
    <ul>
      <li>Low cooperation</li>
      <li>Messengers shot</li>
      <li>Responsibility shirked</li>
    </ul>
  </div>
  
  <div class="culture-card bureaucratic">
    <h4>📋 Bureaucratic (Rule-Oriented)</h4>
    <ul>
      <li>Modest cooperation</li>
      <li>Messengers neglected</li>
      <li>Narrow responsibilities</li>
    </ul>
  </div>
  
  <div class="culture-card generative">
    <h4>🚀 Generative (Performance-Oriented)</h4>
    <ul>
      <li>High cooperation</li>
      <li>Messengers trained</li>
      <li>Risks shared, bridging encouraged</li>
    </ul>
  </div>
</div>

### 2. "Act Your Way into a Better Culture"
- **Behavioral Change Drives Cultural Change:** How implementing practices transforms organizational culture
- **Practical Application:** Concrete actions that shift culture toward generative
- **Evidence:** Research showing DevOps practices improve both performance and culture

### 3. Continuous Delivery as Disciplined Approach
- **Definition:** Getting changes of all kinds into production safely, quickly, and sustainably
- **Comprehensive Scope:** Features, configuration changes, bug fixes, experiments
- **Foundation:** The "engine that drives all of this" high performance

### 4. Core CD Principles and Practices

<div class="cd-practices">
  <div class="practice-item">
    <h5>🏗️ Build Quality In</h5>
    <p>Starting with quality rather than inspecting it later</p>
  </div>
  
  <div class="practice-item">
    <h5>📦 Work in Small Batches</h5>
    <p>Breaking tasks into manageable, testable units</p>
  </div>
  
  <div class="practice-item">
    <h5>🤖 Automate Repetitive Tasks</h5>
    <p>Freeing humans for creative problem-solving</p>
  </div>
  
  <div class="practice-item">
    <h5>📂 Version Control Everything</h5>
    <p>All production artifacts under version control</p>
  </div>
  
  <div class="practice-item">
    <h5>🌳 Trunk-Based Development</h5>
    <p>Short-lived branches and frequent integration</p>
  </div>
  
  <div class="practice-item">
    <h5>🧪 Comprehensive Test Automation</h5>
    <p>Automated testing at multiple levels</p>
  </div>
</div>

## Discussion Questions

1. **Culture Assessment:** Using Westrum's model, how would you categorize your current organizational culture?
2. **Cultural Transformation Examples:** What behavioral changes have you seen that shifted culture?
3. **CD Maturity:** Which continuous delivery practices is your organization currently implementing?
4. **Automation Opportunities:** What repetitive tasks could be automated to improve developer experience?

## Real-World Applications
- Share examples of successful cultural shifts through practice implementation
- Discuss barriers to continuous delivery adoption
- Identify quick wins for improving CD practices

## Action Items for Next Meeting

- [ ] Observe and document culture type indicators in your daily work
- [ ] Identify one repetitive task that could be automated
- [ ] Experiment with working in smaller batches on current projects

---

## 🎧 Supplementary Content

### Audio Podcast
Generate a discussion podcast using our [Meeting 2 Podcast Prompt](/prompts/meeting-2-podcast-prompt.md)

### Video Summary  
Create a visual overview with our [Meeting 2 Video Prompt](/prompts/meeting-2-video-prompt.md)

<style>
.culture-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.culture-card {
  border: 2px solid;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
}

.culture-card.pathological {
  border-color: #d73a49;
  background: #ffeef0;
}

.culture-card.bureaucratic {
  border-color: #f66a0a;
  background: #fff8f0;
}

.culture-card.generative {
  border-color: #28a745;
  background: #f0fff4;
}

.culture-card h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.culture-card ul {
  margin-bottom: 0;
}

.cd-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.practice-item {
  border-left: 4px solid #0366d6;
  padding-left: 1rem;
  margin: 1rem 0;
}

.practice-item h5 {
  margin: 0 0 0.5rem 0;
  color: #0366d6;
}

.practice-item p {
  margin: 0;
  color: #586069;
}
</style>