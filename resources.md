---
layout: default
title: Resources
---

# Resources

Supporting materials to enhance your book club experience and continue your transformation journey.

## 📚 Core Resources

<div class="resource-grid">
  <div class="resource-card">
    <h3>📖 The Book</h3>
    <p><strong>"Accelerate: The Science of Lean Software and DevOps"</strong><br>
    by Nicole Forsgren, Jez Humble, and Gene Kim</p>
    <p>The foundational research that drives all our discussions. Available in print, digital, and audiobook formats.</p>
  </div>
  
  <div class="resource-card">
    <h3>📊 DORA Metrics</h3>
    <p><strong>State of DevOps Reports</strong><br>
    Annual research findings from the DevOps Research and Assessment team</p>
    <p>Track the latest research and benchmark your organization against industry standards.</p>
  </div>
</div>

## 🎯 Between Meetings

### [Activity Guide](/resources/between-meetings/)
Structured activities to deepen understanding between sessions:
- **Observation Journals:** Track cultural behaviors and technical practices
- **Small Experiments:** Try incremental improvements
- **Metric Collection:** Begin informal measurement of DORA metrics
- **Reflection Questions:** Process learnings from each chapter

## 🚀 After the Book Club

### [Extension Pathways](/resources/extensions/)
Continue your learning journey:
- **Related Reading:** Complementary books and resources
- **Practice Implementation:** Working groups for specific improvements
- **Organizational Assessment:** Formal capability evaluation
- **Long-term Transformation:** Roadmap for sustained change

### [Discussion Best Practices](/resources/discussion-practices/)
Guidelines for productive book club conversations:
- Creating psychological safety
- Focusing on learning over judgment  
- Making discussions actionable
- Ensuring inclusive participation

## 🎧 Multimedia Content

### [NotebookLM Prompts](/prompts/)
Create supplementary audio and video content:
- **Podcast Prompts:** Generate discussion-style audio content for each meeting
- **Video Prompts:** Create visual summaries of key concepts
- **Guidelines:** Consistent approach across all generated content

<div class="content-formats">
  <div class="format-item">
    <h4>🎧 Audio Podcasts</h4>
    <p>15-25 minute conversational discussions perfect for commutes or exercise</p>
  </div>
  
  <div class="format-item">
    <h4>📺 Video Summaries</h4>
    <p>Visual overviews of key concepts with examples and practical applications</p>
  </div>
</div>

## 📈 Assessment Tools

### Current State Evaluation
Before starting your transformation journey, assess where you are:

<div class="assessment-checklist">
  <h4>DORA Metrics Baseline</h4>
  <ul>
    <li>How long from commit to production?</li>
    <li>How often do you deploy?</li>
    <li>How quickly do you recover from incidents?</li>
    <li>What percentage of deployments fail?</li>
  </ul>
</div>

<div class="assessment-checklist">
  <h4>Culture Assessment (Westrum Model)</h4>
  <ul>
    <li>How is information shared across teams?</li>
    <li>How are messengers treated when bringing bad news?</li>
    <li>How are responsibilities shared during incidents?</li>
    <li>How much collaboration exists between teams?</li>
  </ul>
</div>

### Progress Tracking
Monitor your transformation:
- **Metric Trends:** Track DORA metrics over time
- **Cultural Indicators:** Observe changes in team interactions
- **Practice Adoption:** Document new processes and tools implemented
- **Team Satisfaction:** Regular pulse surveys on developer experience

## 🛠️ Implementation Support

### Quick Wins (0-3 months)
- Start measuring DORA metrics informally
- Implement simple kanban boards for work visualization
- Begin blameless postmortem practices
- Try trunk-based development for new projects

### Medium-term Goals (3-12 months)  
- Deploy comprehensive CI/CD pipeline
- Implement automated testing at multiple levels
- Establish security shift-left practices
- Create architecture decision records

### Long-term Transformation (1-2 years)
- Achieve continuous delivery capability
- Establish generative organizational culture
- Implement comprehensive observability
- Create autonomous, cross-functional teams

---

## 🤝 Community and Support

### Discussion Forums
- **Internal:** Set up Slack channels or Teams spaces for ongoing discussion
- **External:** Join DevOps and software engineering communities
- **Conferences:** Attend DevOps Enterprise Summit, Velocity, and similar events

### Continued Learning
- **Newsletters:** Subscribe to DevOps and software engineering publications  
- **Podcasts:** Follow shows focused on DevOps, software engineering, and organizational culture
- **Blogs:** Read from practitioners sharing their transformation experiences

**Need help getting started?** Return to our [Meeting Schedule](/meetings/) to begin your structured journey through "Accelerate."

<style>
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.resource-card {
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.resource-card h3 {
  margin-top: 0;
  color: #0366d6;
}

.resource-card strong {
  color: #24292e;
}

.content-formats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.format-item {
  border-left: 4px solid #28a745;
  padding-left: 1rem;
}

.format-item h4 {
  margin: 0 0 0.5rem 0;
  color: #28a745;
}

.format-item p {
  margin: 0;
  color: #586069;
}

.assessment-checklist {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.assessment-checklist h4 {
  margin-top: 0;
  color: #0366d6;
}

.assessment-checklist ul {
  margin-bottom: 0;
}

.assessment-checklist li {
  margin: 0.5rem 0;
}
</style>