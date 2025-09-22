---
layout: default
title: Content Generation Prompts
---

# NotebookLM Content Generation

Create supplementary audio and video content for your book club using these carefully crafted NotebookLM prompts.

## 🎧 Audio Podcasts

Generate engaging 15-25 minute conversational podcasts for each meeting. Perfect for busy developers who want to absorb key concepts during commutes or exercise.

### How to Use
1. **Upload Source Material:** Add relevant chapters from "Accelerate" to NotebookLM
2. **Select Audio Generation:** Choose the podcast/audio option
3. **Configure Settings:** Select "Longer" length for comprehensive coverage
4. **Input Prompts:** Use the three-field format below

<div class="prompt-grid">
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-1-podcast-prompt/">Meeting 1: Foundation</a></h3>
    <p><strong>Focus:</strong> DORA metrics and speed vs. stability myth</p>
    <p><strong>Key Topics:</strong> Deployment pain, measurement tools, high-performer characteristics</p>
  </div>
  
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-2-podcast-prompt/">Meeting 2: Culture & CD</a></h3>
    <p><strong>Focus:</strong> Westrum culture types and continuous delivery</p>
    <p><strong>Key Topics:</strong> Acting into better culture, CD principles, automation</p>
  </div>
  
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-3-podcast-prompt/">Meeting 3: Architecture</a></h3>
    <p><strong>Focus:</strong> Loosely coupled systems and team autonomy</p>
    <p><strong>Key Topics:</strong> Kitchen analogy, tool freedom, lean practices</p>
  </div>
  
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-4-podcast-prompt/">Meeting 4: Leadership</a></h3>
    <p><strong>Focus:</strong> Transformational leadership and learning culture</p>
    <p><strong>Key Topics:</strong> Shift-left security, diversity impact, experimentation</p>
  </div>
</div>

## 📺 Video Summaries

Create visual overviews with examples and practical applications. Great for teams who prefer visual learning or want to share concepts with stakeholders.

### How to Use
1. **Upload Source Material:** Add relevant chapters from "Accelerate" to NotebookLM
2. **Select Video Generation:** Choose the video content option
3. **Input Prompts:** Use the three-field format from our video prompts

<div class="prompt-grid">
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-1-video-prompt/">Meeting 1: Foundation</a></h3>
    <p><strong>Structure:</strong> Deployment pain → DORA metrics → Speed+stability → Assessment</p>
    <p><strong>Audience:</strong> Developers and DevOps practitioners</p>
  </div>
  
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-2-video-prompt/">Meeting 2: Culture & CD</a></h3>
    <p><strong>Structure:</strong> Culture types → Behavioral change → CD practices → Action steps</p>
    <p><strong>Audience:</strong> Teams studying organizational transformation</p>
  </div>
  
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-3-video-prompt/">Meeting 3: Architecture</a></h3>
    <p><strong>Structure:</strong> Kitchen analogy → Tool autonomy → Lean practices → Developer experience</p>
    <p><strong>Audience:</strong> Architects, managers, and developers</p>
  </div>
  
  <div class="prompt-card">
    <h3><a href="/prompts/meeting-4-video-prompt/">Meeting 4: Leadership</a></h3>
    <p><strong>Structure:</strong> Leadership definition → Shift-left security → Diversity → Key question</p>
    <p><strong>Audience:</strong> Technical leaders and aspiring leaders</p>
  </div>
</div>

## 📋 Guidelines and Best Practices

### [Video Guidelines](/prompts/general-guidelines/)
Consistent approach for creating video content:
- **Tone:** Conversational but informative
- **Evidence:** Reference research methodology
- **Practical:** Include concrete examples
- **Inclusive:** Welcome all experience levels

### [Podcast Guidelines](/prompts/podcast-guidelines/)
Best practices for audio content generation:
- **Format:** Conversational discussion between hosts
- **Length:** 15-25 minutes for comprehensive coverage
- **Structure:** Opening → Concepts → Examples → Takeaways → Closing
- **Focus:** Practical application over theory

## 🎯 Content Customization

### Adaptation Tips
- **Modify Prompts:** Adjust focus areas for your specific organizational context
- **Add Examples:** Include industry-specific scenarios relevant to your team
- **Extend Content:** Generate follow-up discussions for complex topics
- **Create Series:** Build multi-part content for deeper exploration

### Quality Checklist
Before using generated content, ensure it:
- [ ] Aligns with assigned book chapters
- [ ] Includes relevant developer experience examples  
- [ ] References research foundations
- [ ] Provides actionable practices
- [ ] Prepares participants for group discussion

## 🔄 Iterative Improvement

### Feedback Loop
1. **Generate Content:** Use prompts as starting point
2. **Review Output:** Check against quality checklist
3. **Gather Feedback:** Ask participants what works best
4. **Refine Prompts:** Adjust for better results
5. **Share Improvements:** Update prompts based on learnings

### Common Adjustments
- **Length:** Adjust timing based on participant preference
- **Depth:** Increase or decrease technical detail
- **Examples:** Swap generic examples for industry-specific ones
- **Tone:** Modify formality level for your organization

---

**Ready to create content?** Start with [Meeting 1 Podcast Prompt](/prompts/meeting-1-podcast-prompt/) to generate your first piece of supplementary material.

<style>
.prompt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.prompt-card {
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
  transition: box-shadow 0.2s ease;
}

.prompt-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.prompt-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.prompt-card h3 a {
  text-decoration: none;
  color: #0366d6;
}

.prompt-card h3 a:hover {
  text-decoration: underline;
}

.prompt-card p {
  margin: 0.5rem 0;
  color: #586069;
}

.prompt-card strong {
  color: #24292e;
}
</style>