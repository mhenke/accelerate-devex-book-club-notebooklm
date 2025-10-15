# Meeting Page Update Reference Guide

This guide documents the patterns and alignment requirements discovered while updating meeting-2.md to ensure consistency across all meeting pages.

## Overview

Each meeting page must follow the same UX pattern while aligning with multiple resource files. This guide shows exactly what to check and how to structure each meeting.

---

## 1. Resource Files to Check for Each Meeting

### Core Meeting Resources
For each meeting (X = meeting number):

```
/resources/book-club-roadmap.md
/resources/meetings/meeting-X/outline.md  
/resources/meetings/meeting-X/chapter-notes.md
/resources/key-questions.md
```

### NotebookLM Prompts (Critical for Media Section)
```
/resources/meetings/meeting-X/notebooklm/
├── ALL-SOURCES-TO-UPLOAD.md
├── podcast-brief.md
├── podcast-deep-dive-default.md
├── podcast-critique.md
├── video.md
└── (other podcast variations)
```

---

## 2. Meeting Page Structure Template

Each meeting page must follow this exact structure:

```markdown
---
layout: meeting
title: "[Meeting Title]"
subtitle: "[Meeting Subtitle]" 
week: [X]
chapters: "[X-Y]"
duration: "1 Hour"
dora_color: "[COLOR]" # Meeting-specific color
---

<!-- Main Content Layout: 70% Content + 30% Sidebar -->

<!-- Chapter Overview Section -->
<!-- Meeting Key Question -->  
<!-- Media Section -->
<!-- Visual Concept Sections -->
<!-- Discussion Questions -->
<!-- Action Items -->
<!-- Next Meeting Section -->
<!-- JavaScript includes -->
```

---

## 3. Color Schemes by Meeting

From `/docs/_sass/abstracts/_tokens.scss`:

```scss
--meeting-1-color: #0969da; // Foundation (Blue)
--meeting-2-color: #1a7f37; // Technical (Green) 
--meeting-3-color: #d97706; // Management (Orange)
--meeting-4-color: #8b5cf6; // Leadership (Purple)
```

---

## 4. Chapter Overview Section

### Pattern:
Interactive expandable cards for each chapter with unique `data-chapter` attributes.

### Required Elements:
- Chapter number and title
- Clickable interaction with `showChapterDetail()` function
- Expandable details with chapter summaries
- JavaScript for show/hide functionality

### Example Structure:
```html
<div class="chapter-item" data-chapter="[unique-id]" onclick="showChapterDetail('[unique-id]')">
  <div class="chapter-content">
    <div class="chapter-number">Chapter X</div>
    <div class="chapter-title">[Chapter Title]</div>
  </div>
  <div class="chapter-indicator"><i class="fas fa-chevron-down"></i></div>
</div>
```

---

## 5. Key Question Alignment

### Source: `/resources/key-questions.md`

Each meeting has a specific core question that must be used exactly:

- **Meeting 1**: Focus on measurement and outputs vs outcomes
- **Meeting 2**: Architecture/security friction and technical changes  
- **Meeting 3**: Lean principles, WIP limits, deployment pain, burnout
- **Meeting 4**: Leadership support and transformation practices

### Template:
```html
<div class="key-question-banner" markdown="0">
<div class="key-question-wrapper">
<div class="key-question-label">MEETING X KEY QUESTION</div>
<div class="key-question-intro">Throughout this meeting, we'll return to this central reflection:</div>
<div class="key-question-main">
<div class="quote-mark-start">&ldquo;</div>
<div class="question-text">[EXACT QUESTION FROM key-questions.md]</div>
<div class="quote-mark-end">&rdquo;</div>
</div>
</div>
</div>
```

---

## 6. Media Section Alignment

### Video Section:
Always includes:
- Main video player with captions
- Alternative video link matching `/resources/meetings/meeting-X/notebooklm/video.md`

### Podcast Section:
Must align with NotebookLM prompt files:

#### Required Podcast Types:
1. **Brief** (5-10 min) - from `podcast-brief.md`
2. **Deep Dive** (15-20 min) - from `podcast-deep-dive-default.md`  
3. **Critique** (15-20 min) - from `podcast-critique.md`

#### Podcast Structure Template:
```html
<div class="podcast-item" tabindex="0"
     data-src="[URL]"
     data-title="[TITLE]"
     data-duration="[DURATION]"
     data-type="[TYPE]">
  <!-- Play button, content, equalizer -->
</div>
```

#### Podcast Titles and Descriptions:
Extract from the actual prompt files, NOT invented names. Look for:
- Titles that match the prompt focus
- Descriptions that reflect prompt content
- Durations that match format expectations

---

## 7. Visual Concept Sections

### Pattern:
Each meeting has 3-4 major visual concept sections that illustrate key themes using:
- Causal chain diagrams
- Comparison sections (vs, transform, flow)
- Alternative grids
- Impact statistics

### Required Elements:
- Section cards with appropriate themes
- Icons matching Font Awesome classes
- Statistics from the book research
- Visual flow indicators (arrows, vs separators)

---

## 8. Discussion Questions

### Source: Meeting outline files

Must align with `/resources/meetings/meeting-X/outline.md` discussion questions.

### Template:
```html
<div class="section-card dark-theme full-width" markdown="0">
  <div class="false-choice-container">
    <h2>Discussion Questions</h2>
    <p class="false-choice-subtitle">Reflect on these questions as a team to deepen your understanding</p>
    
    <div class="discussion-questions-list">
      <div class="deployment-signal">
        <h4>[Question Category]</h4>
        <p>[Question text from outline.md]</p>
      </div>
      <!-- Repeat for each question -->
    </div>
  </div>
</div>
```

---

## 9. Action Items

### Source: Meeting outline files

Must align with action items listed in `/resources/meetings/meeting-X/outline.md`.

### Template:
```html
<div class="section-card action-items" markdown="0">
  <div class="action-header">
    <h2><i class="fas fa-tasks" aria-hidden="true"></i> Action Items for Next Meeting</h2>
    <p class="subtitle">Complete these tasks before Meeting [X+1] to maximize your learning</p>
  </div>

  <div class="action-list">
    <div class="action-item">
      <div class="task-row">
        <div class="task-checkbox">
          <i class="far fa-square"></i>
        </div>
        <span class="task-title">[Action item from outline.md]</span>
      </div>
    </div>
    <!-- Repeat for each action item -->
  </div>

  <div class="due-date">
    <i class="fas fa-calendar-check" aria-hidden="true"></i>
    <strong>Due: Before Meeting [X+1] (Week [Y])</strong>
  </div>
</div>
```

---

## 10. Next Meeting Navigation

### Template:
```html
<div class="welcome-compact section-card next-meeting-card next-meeting-[X]" markdown="0">
  <h2 id="next-meeting-heading"><i class="fas fa-arrow-right" aria-hidden="true"></i> Next Meeting</h2>
  <p>Continue your journey: <strong>Meeting [X] · [Title]</strong> covers [brief description].</p>
  <div class="welcome-cta">
    <a href="/accelerate-devex-book-club-notebooklm/meetings/meeting-[X]/" class="btn btn--primary-action btn--meeting-[X]">
      Meeting [X]: [Title]
    </a>
    <p class="welcome-cta-subtitle">Chapters [X-Y] • [Key Themes]</p>
  </div>
</div>
```

---

## 11. JavaScript Requirements

### Required Scripts:
```html
<script src="{{ '/assets/js/podcast-player.js' | relative_url }}"></script>
```

### Required JavaScript Functions:
- Chapter detail show/hide functionality
- Outside click handlers
- Keyboard accessibility (Escape key)

---

## 12. Alignment Checklist

For each meeting page, verify:

### ✅ Content Alignment:
- [ ] Title/subtitle match roadmap.md
- [ ] Chapters match outline.md
- [ ] Key question matches key-questions.md exactly
- [ ] Chapter summaries match chapter-notes.md
- [ ] Discussion questions match outline.md
- [ ] Action items match outline.md

### ✅ Media Alignment:
- [ ] Podcast titles match NotebookLM prompt files
- [ ] Podcast descriptions match prompt focus
- [ ] Podcast durations are realistic for format
- [ ] Video description matches video.md prompt
- [ ] All 3 podcast types present (brief, deep-dive, critique)

### ✅ UX Pattern Alignment:
- [ ] Same structure as meeting-0.md and meeting-1.md
- [ ] Interactive chapter overview
- [ ] Proper color scheme applied
- [ ] Media section with podcast player
- [ ] Visual concept sections
- [ ] Dark theme discussion questions
- [ ] Action items with checkboxes
- [ ] Next meeting navigation
- [ ] JavaScript includes

---

## 13. Meeting-Specific Content Sources

### Meeting 3 (Management & Sustainability):
- **Chapters**: 7-10 
- **Focus**: Lean management, WIP limits, burnout, employee satisfaction
- **Color**: Orange (#d97706)
- **Key Concepts**: Deployment pain, sustainable work, lean practices

### Meeting 4 (Leadership & Transformation):
- **Chapters**: 11, 16, Conclusion
- **Focus**: Transformational leadership, ING case study, transformation principles
- **Color**: Purple (#8b5cf6)  
- **Key Concepts**: Five leadership characteristics, ING Netherlands transformation, "make it your own" principles
- **Key Question**: Leadership support behaviors and visible practices (Obeya rooms, catchball communication)
- **Visual Concepts**: Leadership indirect impact, five transformational characteristics, ING case study, transformation roadmap
- **Final Elements**: "Single smallest change" culmination question, completion celebration, transformation continuation

### Transformation Complete Page:
- **Focus**: Post-book club journey, extension resources, capability implementation
- **Color**: Likely primary theme color
- **Content**: Summary of journey, next steps, working groups

---

## 14. Common Pitfalls to Avoid

1. **Don't invent podcast names** - Always check NotebookLM prompt files
2. **Don't use generic key questions** - Use exact text from key-questions.md
3. **Don't skip JavaScript functions** - Interactive elements require working code
4. **Don't forget color themes** - Each meeting has specific color scheme
5. **Don't miss action items** - Must match outline.md exactly
6. **Don't forget accessibility** - Include aria-labels, keyboard support
7. **Don't hardcode paths** - Use Jekyll relative_url filter

---

## 15. Update Process

### Step-by-Step Process:
1. Read all resource files for the meeting
2. Extract key question from key-questions.md
3. Extract chapter summaries from chapter-notes.md
4. Extract discussion questions and action items from outline.md
5. Extract podcast information from NotebookLM prompt files
6. Copy meeting-2.md structure as template
7. Replace content while maintaining structure
8. Update color scheme variables
9. Test interactive elements
10. Verify all alignments using checklist

---

## 16. Button Theming Architecture (Updated 2024)

### Issue Resolved:
Previously, button hover states were hardcoded to Meeting 1 blue (`#388bfd`) regardless of the current meeting context, causing visual inconsistency.

### Solution Implemented:

#### Dynamic Meeting Theme System:
- Each meeting page sets a `data-meeting` attribute that defines CSS variables
- Button styles now use `--theme-primary`, `--accent-teal`, etc. instead of hardcoded colors
- Next meeting buttons use the **target meeting's** colors, not the current meeting

#### CSS Architecture Changes:
```scss
// Before (hardcoded):
&:hover { background: linear-gradient(135deg, #388bfd, var(--meeting-1-color)); }

// After (dynamic):
&:hover { background: linear-gradient(135deg, var(--accent-teal), var(--theme-primary)); }
```

#### Files Modified:
- `/docs/_sass/base/_critical.scss`: Fixed main button hover logic
- `/docs/_sass/components/_buttons.scss`: Added focus-visible states
- Applied to meeting badge buttons, next meeting buttons, and general meeting buttons

#### Meeting Color Mapping:
```scss
[data-meeting="1"] { --theme-primary: #0969da; --accent-teal: #1f6feb; }
[data-meeting="2"] { --theme-primary: #1a7f37; --accent-teal: #238636; }
[data-meeting="3"] { --theme-primary: #d97706; --accent-teal: #f59e0b; }
[data-meeting="4"] { --theme-primary: #8b5cf6; --accent-teal: #a78bfa; }
```

### Accessibility Improvements:
- Added focus-visible states to all meeting buttons with appropriate meeting colors
- Proper outline colors that match each meeting's theme
- Maintained WCAG contrast requirements

---

## 17. Completion Status

### ✅ **Completed Updates:**
- **Meeting 2** (Technical Excellence): ✅ Full alignment with all resources
- **Meeting 3** (Management & Sustainability): ✅ Full alignment with all resources  
- **Meeting 4** (Leadership & Transformation): ✅ Full alignment with all resources
- **Transformation Complete Page**: ✅ Updated to modern UX patterns with consistency

### ✅ **Additional Improvements Completed:**
- **Button Hover/Focus States**: ✅ Fixed meeting theme button hover states to use dynamic colors instead of hardcoded Meeting 1 blue
- **Next Meeting Button Theming**: ✅ Next meeting buttons now use the target meeting's color theme, not the current meeting
- **Focus-Visible Accessibility**: ✅ Added proper focus-visible states to all meeting buttons with appropriate meeting colors
- **CSS Architecture**: ✅ Replaced hardcoded color values with dynamic CSS variables that respect `data-meeting` attributes

This guide provided everything needed to successfully update meetings 2, 3, and 4 with full consistency and alignment. All meeting pages now follow the same modern UX pattern with proper resource alignment.
