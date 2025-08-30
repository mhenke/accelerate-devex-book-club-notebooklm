---
layout: default
title: Meeting Schedule
---

# Meeting Schedule

Our 4-meeting journey through "Accelerate" is designed to build understanding progressively, with each session focusing on key themes that enable organizational transformation.

<div class="meeting-timeline">
  {% assign meetings = site.meetings | sort: "order" %}
  {% for meeting in meetings %}
    <div class="timeline-item">
      <div class="timeline-marker">{{ meeting.order }}</div>
      <div class="timeline-content">
        <h3><a href="{{ meeting.url }}">{{ meeting.title }}</a></h3>
        <p class="meeting-meta">{{ meeting.week }} • {{ meeting.duration }}</p>
        <p class="chapters">{{ meeting.chapters }}</p>
        <p>{{ meeting.subtitle }}</p>
      </div>
    </div>
  {% endfor %}
</div>

## Meeting Structure

Each session follows a consistent structure designed to maximize learning and practical application:

### Pre-Meeting Preparation
- **Reading Assignment:** 3-4 chapters from "Accelerate"
- **Optional Content:** Audio podcasts and video summaries using our [NotebookLM prompts](/prompts/)
- **Reflection:** Questions and activities from our [between-meetings guide](/resources/between-meetings/)

### During the Meeting (1 Hour)
- **Opening (10 minutes):** Check-in on previous action items and current challenges
- **Core Discussion (35 minutes):** Deep dive into key concepts with practical examples
- **Action Planning (15 minutes):** Identify specific experiments and commitments

### Post-Meeting Follow-up
- **Individual Action Items:** Small experiments to try before the next session
- **Team Discussions:** Continue conversations with your immediate team
- **Progress Tracking:** Document learnings and obstacles encountered

## Success Metrics

By the end of our 4-meeting journey, participants will have:

- ✅ **Understanding:** Clear grasp of the four DORA metrics and their importance
- ✅ **Assessment:** Identified specific bottlenecks in their current processes
- ✅ **Action:** Implemented at least one improvement from each session
- ✅ **Culture:** Increased awareness of how technical practices affect culture
- ✅ **Plan:** Concrete next steps for continued organizational transformation

---

**Ready to begin?** Start with [Meeting 1: Laying the Foundation](/meetings/meeting-1/) to understand the research foundation and measurement approach that makes everything else possible.

<style>
.meeting-timeline {
  position: relative;
  margin: 2rem 0;
}

.meeting-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e1e4e8;
}

.timeline-item {
  position: relative;
  margin: 2rem 0;
  padding-left: 60px;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background: #0366d6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
}

.timeline-content {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1.5rem;
}

.timeline-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.timeline-content h3 a {
  text-decoration: none;
  color: #0366d6;
}

.timeline-content h3 a:hover {
  text-decoration: underline;
}

.meeting-meta {
  color: #586069;
  font-weight: 500;
  margin: 0.5rem 0;
}

.chapters {
  background: #fff;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 0.9em;
  color: #586069;
}

.timeline-content p:last-child {
  margin-bottom: 0;
}
</style>