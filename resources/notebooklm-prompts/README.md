# NotebookLM Prompts for Accelerate Book Club

This directory contains ready-to-use prompts for generating AI-powered podcasts and videos using Google's NotebookLM to supplement your book club experience.

## What is NotebookLM?

[NotebookLM](https://notebooklm.google.com/) is Google's AI-powered research assistant that can generate audio podcasts and video overviews from your uploaded sources (PDFs, documents, web pages). For this book club, you can upload relevant chapters from "Accelerate" and use our prompts to generate high-quality supplementary content.

## Available Formats

### 🎙️ Podcast Formats

| Format | Length | Best For | File |
|--------|--------|----------|------|
| **Deep Dive** | 15-25 min | Comprehensive preparation, detailed understanding | [podcasts/deep-dive.md](podcasts/deep-dive.md) |
| **Brief** | 5-10 min | Quick overviews, busy schedules, concept refreshers | [podcasts/brief.md](podcasts/brief.md) |
| **Critique** | 10-15 min | Critical analysis, identifying challenges | [podcasts/critique.md](podcasts/critique.md) |
| **Debate** | 15-20 min | Exploring controversies, understanding trade-offs | [podcasts/debate.md](podcasts/debate.md) |

### 📺 Video Format

| Format | Length | Best For | File |
|--------|--------|----------|------|
| **Overview** | 15-25 min | Visual learning, concept visualization, structured presentation | [videos/overview.md](videos/overview.md) |

## Quick Start Guide

### Step 1: Set Up NotebookLM

1. Go to [notebooklm.google.com](https://notebooklm.google.com/)
2. Create a new notebook for your book club
3. Upload the "Accelerate" book (PDF) or relevant chapters
4. Add any additional sources (meeting notes, articles, etc.)

### Step 2: Choose Your Format

Select the format that best fits your needs:

- **First time preparing?** Start with **Brief** for quick overview
- **Want comprehensive prep?** Use **Deep Dive**
- **Planning implementation?** Try **Critique** to identify challenges
- **Have divided opinions?** Use **Debate** to explore different perspectives
- **Visual learner?** Generate **Video Overview**

### Step 3: Generate Content

1. In NotebookLM, click "Generate" (for audio) or "Create Video" (for video)
2. Select "Customize" option
3. Copy the appropriate prompt from our files
4. Paste into NotebookLM's customization fields:
   - **Focus** field: What topics to cover
   - **Topic/Discussion** field: Specific aspects to emphasize
   - **Audience** field (optional): Who is this for
5. Click "Generate"

### Step 4: Use in Book Club

- **Share 3-5 days before meeting** for participant preparation
- **Reference during discussion** to reinforce key concepts
- **Revisit after meeting** for retention and follow-up

## Format Selection Guide

### By Participant Type

**Busy Professionals:**
- Primary: Brief (5-10 min quick overview)
- Supplementary: Video Overview (can watch at 1.5x speed)

**Deep Learners:**
- Primary: Deep Dive (comprehensive coverage)
- Supplementary: Critique (understanding limitations)

**Skeptical Team Members:**
- Primary: Critique (addresses concerns constructively)
- Supplementary: Debate (acknowledges valid counterarguments)

**Visual Learners:**
- Primary: Video Overview (diagrams and visualizations)
- Supplementary: Deep Dive (for audio during commutes)

### By Meeting Phase

**Pre-Meeting Preparation:**
1. Brief (initial overview)
2. Read assigned chapters
3. Deep Dive or Video (detailed preparation)

**During Meeting:**
- Reference Video segments for key concepts
- Use Critique points in discussion
- Explore Debate topics for controversial areas

**Post-Meeting Review:**
- Brief (refresh key takeaways)
- Debate (explore unresolved tensions)

## Content by Meeting

All formats cover all four meetings:

| Meeting | Chapters | Key Topics |
|---------|----------|------------|
| **1** | 1-3 | DORA metrics, speed+stability myth, Westrum culture types |
| **2** | 4-6 | Continuous delivery, loosely coupled architecture, shift-left security |
| **3** | 7-10 | Lean management, product development, sustainability, burnout |
| **4** | 11, 16, Conclusion | Transformational leadership, ING case study, transformation |

## Customization Tips

### Length Customization (Deep Dive only)

When generating Deep Dive podcasts, NotebookLM offers length options:
- **Shorter** (10-15 min): Key concepts only
- **Default** (15-20 min): Balanced coverage ✅ Recommended
- **Longer** (20-25 min): Comprehensive with examples

### Focus Customization

Modify prompts for your specific context:

**Industry-Specific:**
```
[Original prompt] with examples relevant to healthcare/finance/retail
```

**Role-Specific:**
```
[Original prompt] targeting product managers/executives/developers
```

**Challenge-Specific:**
```
[Original prompt] with focus on addressing legacy system constraints/regulatory compliance
```

### Structure Customization (Video only)

For videos, you can specify show structure:

```
Start by talking about [topic], then [next topic], and end with [final topic]
```

Example:
```
Start by talking about the research methodology, present each DORA metric with examples, and end with how teams can begin measuring.
```

## Best Practices

### For Facilitators

- ✅ **Generate all formats** for each meeting to have options
- ✅ **Review content** before sharing with participants
- ✅ **Note timestamps** of key concepts for discussion references
- ✅ **Customize prompts** based on your organization's context
- ✅ **Combine formats** (e.g., Brief for prep + Debate for discussion)

### For Participants

- ✅ **Listen/watch** 2-3 days before meeting
- ✅ **Take notes** on questions or points of interest
- ✅ **Bring examples** from your work that relate to concepts
- ✅ **Revisit** after meeting for retention

### For Organizations

- ✅ **Create playlist** of all meeting content
- ✅ **Share with stakeholders** who can't attend meetings
- ✅ **Use for onboarding** new book club participants mid-series
- ✅ **Archive** for future reference and team sharing

## Troubleshooting

### "The generated content doesn't match the prompt"

- Ensure you've uploaded the correct chapters to NotebookLM
- Try being more specific in the customization fields
- Use the exact prompts from our files as starting points

### "Content is too long/short"

- For podcasts: Try different formats (Brief vs. Deep Dive)
- For Deep Dive: Use the length selector (shorter/default/longer)
- For videos: Add structure guidance to focus on specific topics

### "Content is too technical/not technical enough"

- Modify the "Target Audience" field
- Add context like "explain to beginners" or "assume technical expertise"

## Examples in Action

### Example 1: Preparing for Meeting 1

**Goal:** Team members need quick prep before first meeting

**Approach:**
1. Generate **Brief** podcast (5-10 min)
2. Share via email with reading assignment
3. Generate **Video Overview** for visual learners
4. Save **Deep Dive** as optional for those wanting more

### Example 2: Addressing Implementation Concerns

**Goal:** Team is skeptical about continuous delivery practices

**Approach:**
1. Generate **Critique** podcast for Meeting 2
2. Play relevant sections during discussion
3. Generate **Debate** podcast to explore trade-offs
4. Use both to acknowledge concerns constructively

### Example 3: Executive Summary

**Goal:** Share key findings with leadership who haven't read the book

**Approach:**
1. Generate **Brief** podcasts for all four meetings
2. Customize with "explain to executives" audience
3. Create playlist with 20-minute total listening time
4. Supplement with **Video Overview** of Meeting 1 (foundation)

## Related Resources

- [Key Questions](../key-questions.md) - Core discussion questions for each meeting
- [Meeting Resources](../meetings/) - Complete facilitator guides and outlines
- [Book Club Roadmap](../book-club-roadmap.md) - Overall 2-month plan

## Feedback and Iteration

As you use these prompts:

- **Document what works:** Note which formats resonate with your team
- **Customize and improve:** Adapt prompts to your context
- **Share learnings:** Help others by documenting your approach
- **Iterate:** Refine prompts based on participant feedback

---

Happy generating! 🎙️📺

For questions about using NotebookLM, visit [notebooklm.google.com/help](https://notebooklm.google.com/help)
