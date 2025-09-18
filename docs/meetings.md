---
layout: default
title: Meetings
---

# Meeting Schedule

Our book club consists of four focused sessions over 2 months, each building upon the previous meeting's insights.

<div class="meeting-grid" markdown="0">
  {% assign meetings = site.meetings | sort: "week" %}
  {% for meeting in meetings %}
    <div class="meeting-card" markdown="0">
      <div class="meeting-icon" style="color: {{ meeting.dora_color }}">
        {% case forloop.index %}
          {% when 1 %}<i class="fas fa-chart-line"></i>
          {% when 2 %}<i class="fas fa-sync-alt"></i>
          {% when 3 %}<i class="fas fa-building"></i>
          {% when 4 %}<i class="fas fa-users"></i>
        {% endcase %}
      </div>
      <h3><a href="{{ meeting.url }}">{{ meeting.title }}</a></h3>
      <p><strong>Week {{ meeting.week }}</strong> • Chapters {{ meeting.chapters }}</p>
      <p>{{ meeting.subtitle }}</p>
    </div>
  {% endfor %}
</div>

## Meeting Structure

Each 1-hour session follows a consistent format:

- **Check-in** (5 minutes) - Share key insights from reading
- **Core Discussion** (40 minutes) - Dive deep into key concepts
- **Action Planning** (10 minutes) - Define concrete next steps
- **Wrap-up** (5 minutes) - Confirm next session preparation

## Between Sessions

- **Reflection Questions** - Process insights from each meeting
- **Practical Exercises** - Apply concepts in your work environment
- **Community Discussion** - Share experiences with fellow participants

---

<div class="resource-links" markdown="0">
  <h3><i class="fas fa-book"></i> Additional Resources</h3>

  <div class="resource-grid" markdown="0">
    <a href="{{ '/resources' | relative_url }}" class="resource-link-card">
      <i class="fas fa-clipboard-list"></i>
      <strong>Between Meetings</strong>
      <span>Activities and reflection questions</span>
    </a>

    <a href="{{ '/prompts' | relative_url }}" class="resource-link-card">
      <i class="fas fa-microphone-alt"></i>
      <strong>AI Content</strong>
      <span>Generate podcasts and videos</span>
    </a>
  </div>
</div>