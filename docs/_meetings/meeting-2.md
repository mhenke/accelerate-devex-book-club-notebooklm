---
layout: meeting
title: 'Meeting 2: Culture & CD'
subtitle: 'Cultivating Culture and Embracing Continuous Delivery'
week: 3
chapters: '5-8'
duration: '1 Hour'
dora_color: '#4CAF50'
---

## Pre-Reading Assignment

**Chapters 5-8:** Architecture • Infosec • Management • Product Development

## Westrum's Organizational Culture Types

<div class="culture-types-diagram">
  <div class="culture-card pathological">
    <div class="culture-icon">⚠️</div>
    <h3>Pathological</h3>
    <p class="culture-subtitle">Power-Oriented</p>
    <ul class="culture-traits">
      <li>❌ Low cooperation</li>
      <li>🔫 Messengers shot</li>
      <li>🙅 Responsibility shirked</li>
    </ul>
  </div>
  
  <div class="culture-card bureaucratic">
    <div class="culture-icon">📋</div>
    <h3>Bureaucratic</h3>
    <p class="culture-subtitle">Rule-Oriented</p>
    <ul class="culture-traits">
      <li>📊 Modest cooperation</li>
      <li>😐 Messengers neglected</li>
      <li>📏 Narrow responsibilities</li>
    </ul>
  </div>
  
  <div class="culture-card generative">
    <div class="culture-icon">🚀</div>
    <h3>Generative</h3>
    <p class="culture-subtitle">Performance-Oriented</p>
    <ul class="culture-traits">
      <li>✅ High cooperation</li>
      <li>🎓 Messengers trained</li>
      <li>🤝 Risks shared</li>
    </ul>
  </div>
</div>

## Culture Transformation

<div class="transformation-flow">
  <div class="flow-step">
    <div class="step-icon">🎯</div>
    <h4>Act Your Way</h4>
    <p>Behavioral changes</p>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">🔄</div>
    <h4>Into Better Culture</h4>
    <p>Cultural transformation</p>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="step-icon">📈</div>
    <h4>Higher Performance</h4>
    <p>Measurable results</p>
  </div>
</div>

## Continuous Delivery Core Principles

<div class="cd-principles-grid">
  <div class="principle-card quality">
    <div class="principle-icon">🏗️</div>
    <h4>Build Quality In</h4>
    <p>Start with quality, don't inspect later</p>
  </div>
  
  <div class="principle-card batches">
    <div class="principle-icon">📦</div>
    <h4>Small Batches</h4>
    <p>Manageable, testable units</p>
  </div>
  
  <div class="principle-card automation">
    <div class="principle-icon">🤖</div>
    <h4>Automate Tasks</h4>
    <p>Free humans for creative work</p>
  </div>
  
  <div class="principle-card version">
    <div class="principle-icon">📂</div>
    <h4>Version Control</h4>
    <p>All artifacts under control</p>
  </div>
  
  <div class="principle-card trunk">
    <div class="principle-icon">🌳</div>
    <h4>Trunk-Based Dev</h4>
    <p>Short branches, frequent integration</p>
  </div>
  
  <div class="principle-card testing">
    <div class="principle-icon">🧪</div>
    <h4>Test Automation</h4>
    <p>Automated testing at all levels</p>
  </div>
</div>

## Discussion Questions

1. **Culture Assessment:** Where is your organization on Westrum's model?
2. **Behavioral Shifts:** What practices could shift your culture?
3. **CD Gaps:** Which CD principles need improvement?
4. **Quick Wins:** What could be automated this month?

## Action Items for Next Meeting

- [ ] Identify your team's culture type using Westrum's model
- [ ] Find one repetitive task to automate
- [ ] Practice working in smaller batches on current work

## Supplementary Content

Generate additional content using the [NotebookLM prompts](../notebooklm-prompts/)

---

## 🎧 Listen to the Meeting 2 Podcast

<p>Generate a discussion podcast using the <a href="../notebooklm-prompts/podcast-prompt.md">Meeting 2 Podcast Prompt</a></p>

<audio controls>
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-2-podcast.m4a" type="audio/x-m4a">
	Your browser does not support the audio element.
</audio>

## 📺 Watch the Meeting 2 Video

<p>Create a visual overview with the <a href="../notebooklm-prompts/video-prompt.md">Meeting 2 Video Prompt</a></p>

<video controls width="100%">
	<source src="/accelerate-devex-book-club-notebooklm/assets/media/meeting-2-video.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

<style>
/* Culture Types Diagram */
.culture-types-diagram {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  max-width: 1000px;
}

.culture-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.culture-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.culture-card.pathological {
  border-color: #f44336;
}

.culture-card.pathological::before {
  background: linear-gradient(90deg, #f44336, #d32f2f);
}

.culture-card.bureaucratic {
  border-color: #ff9800;
}

.culture-card.bureaucratic::before {
  background: linear-gradient(90deg, #ff9800, #f57c00);
}

.culture-card.generative {
  border-color: #4caf50;
}

.culture-card.generative::before {
  background: linear-gradient(90deg, #4caf50, #388e3c);
}

.culture-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.culture-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.culture-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.culture-subtitle {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.culture-traits {
  list-style: none;
  padding: 0;
  margin: 0;
}

.culture-traits li {
  padding: 0.5rem 0;
  font-size: 0.95rem;
  text-align: left;
}

/* Transformation Flow */
.transformation-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e8, #f1f8e9);
  border-radius: 16px;
  border: 2px solid #4caf50;
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
  color: #2e7d32;
  font-size: 1.1rem;
}

.flow-step p {
  color: #4caf50;
  font-size: 0.9rem;
  margin: 0;
}

.flow-arrow {
  font-size: 2rem;
  color: #4caf50;
  font-weight: bold;
}

/* CD Principles Grid */
.cd-principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.principle-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #4caf50;
}

.principle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.principle-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.principle-card h4 {
  margin: 0 0 0.75rem 0;
  color: #2e7d32;
  font-size: 1.2rem;
  font-weight: 600;
}

.principle-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .culture-types-diagram {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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
  
  .culture-card, .principle-card {
    padding: 1.5rem;
  }
}
</style>