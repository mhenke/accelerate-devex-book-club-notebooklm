---
layout: default
title: Meetings
---

<div class="page-hero page-hero--blue">
<div class="hero-content">
<div class="hero-icon">
<i class="fas fa-calendar-alt"></i>
</div>
<h1 class="page-title">Meeting Schedule</h1>
<p class="page-subtitle">Four focused sessions over 2 months, each building upon the previous meeting's insights</p>
</div>
</div>

<div class="page-container">
<div class="navigation-tabs">
<a href="{{ '/' | relative_url }}" class="nav-tab"><i class="fas fa-home"></i> Home</a>
<a href="{{ '/meetings' | relative_url }}" class="nav-tab active"><i class="fas fa-calendar-alt"></i> Meetings</a>
<a href="{{ '/prompts' | relative_url }}" class="nav-tab"><i class="fas fa-microphone-alt"></i> AI Content</a>
<a href="{{ '/resources' | relative_url }}" class="nav-tab"><i class="fas fa-book-open"></i> Resources</a>
</div>

## Meeting Overview

Our book club consists of four focused sessions over 2 months, each building upon the previous meeting's insights.

<div class="feature-grid" markdown="0">
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

</div>

<footer class="ai-attribution" markdown="0">
<div class="ai-attribution__icon">
<i class="fas fa-robot" aria-hidden="true"></i>
</div>
<div class="ai-attribution__content">
<h4 class="ai-attribution__title">AI-Generated Content</h4>
<p class="ai-attribution__text">This content was created with AI assistance from <strong><a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude</a></strong>, <strong><a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a></strong>, <strong><a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer">NotebookLM</a></strong>, <strong><a href="https://www.napkin.ai/" target="_blank" rel="noopener noreferrer">Napkin AI</a></strong>, and <strong><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a></strong>.</p>
</div>
</footer>