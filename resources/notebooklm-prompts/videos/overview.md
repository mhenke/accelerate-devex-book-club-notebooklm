# NotebookLM Video Prompts: Overview Format

_Visual conversation-based overviews of each meeting's core concepts (15-25 minutes)_

## Format Overview

The **Video Overview** format provides visual learning through:
- Two AI hosts discussing concepts with visual aids
- Key statistics and data visualizations
- Concept diagrams and frameworks
- Real-world application examples
- Structured presentation for book club preparation

## Video Settings in NotebookLM

- **Default Length:** Typically 15-25 minutes
- **Style:** Conversational discussion with visual elements

---

## Meeting 1: Laying the Foundation – The Myth and the Measurement

**Chapters:** 1-3

### NotebookLM Video Focus Field

**Base Prompt:**
```
Focus on chapters 1-3 of Accelerate by Forsgren, Humble, and Kim. Cover the four DORA metrics as practical measurement tools (delivery lead time, deployment frequency, mean time to restore service, change fail rate), debunk the speed vs stability trade-off myth, and introduce Westrum's organizational culture typology.
```

### Customization Options

**Target Specific Use Case:**
```
Present this to a book club preparing for their first meeting. Start by talking about why software delivery performance matters as competitive advantage, then cover the four DORA metrics in detail, and end with how teams can start measuring these metrics informally.
```

**Focus on Specific Topic:**
```
Show the research findings from chapters 2-3 about how high performers achieve 46x more deployments, 440x faster lead time, and 170x faster recovery, and explain Westrum's three culture types.
```

**Describe Show Structure:**
```
Start by talking about the research methodology (23,000+ responses over 4 years), then present each DORA metric with examples, explain the speed+stability myth, and end with next steps for teams to begin measuring performance.
```

### Key Visual Elements to Emphasize

- DORA metrics definitions and measurement approaches
- 46x, 440x, 170x performance statistics comparison
- Westrum culture types characteristics table
- Speed vs. stability correlation visualization

---

## Meeting 2: Technical Excellence & Continuous Delivery

**Chapters:** 4-6

### NotebookLM Video Focus Field

**Base Prompt:**
```
Focus on chapters 4-6 of Accelerate, covering the technical practices that enable continuous delivery: version control, automated testing, continuous integration, trunk-based development, deployment automation, loosely coupled architecture, and shift-left security practices.
```

### Customization Options

**Target Specific Use Case:**
```
Present this to engineering teams considering adopting continuous delivery practices. Focus on the five CD principles, explain how loosely coupled architecture enables team independence, and help viewers understand which practices to prioritize.
```

**Focus on Specific Topic:**
```
Show how continuous delivery acts as the 'engine that drives all of this' performance, with detailed examples of version control, CI, trunk-based development, and automated testing.
```

**Describe Show Structure:**
```
Start by talking about the five CD principles (build quality in, small batches, automation, continuous improvement, shared responsibility), then discuss each technical practice in detail, explain loosely coupled architecture benefits, cover shift-left security, and end with how these practices improve both performance and culture.
```

### Key Visual Elements to Emphasize

- Five continuous delivery principles diagram
- Technical practices interconnection flow
- Conway's Law and inverse Conway maneuver illustration
- Shift-left security timeline comparison

---

## Meeting 3: Management, Product Development & Sustainability

**Chapters:** 7-10

### NotebookLM Video Focus Field

**Base Prompt:**
```
Focus on chapters 7-10 of Accelerate, discussing lean management practices like WIP limits and visual displays, lean product development with customer feedback and small batches, deployment pain as a sustainability signal, and the connection between technical practices and employee satisfaction.
```

### Customization Options

**Target Specific Use Case:**
```
Present this to managers and team leads. Focus on why external change approval boards slow delivery without improving stability, how lean management practices reduce burnout, and what managers can do to support sustainable high performance.
```

**Focus on Specific Topic:**
```
Show the research findings about change approval boards, WIP limits, and visual management, plus the connection between CD practices and work-life balance improvements (Microsoft 38% to 75% example).
```

**Describe Show Structure:**
```
Start by talking about the change approval board research findings, then cover lean management practices (WIP limits, visualization, monitoring), discuss lean product development with small batches and customer feedback, explain deployment pain and burnout factors, and end with specific management practices that improve both performance and team wellbeing.
```

### Key Visual Elements to Emphasize

- Change approval board correlation data
- WIP limits and flow visualization
- Six burnout risk factors framework
- Microsoft work-life balance improvement stats

---

## Meeting 4: Leadership, Research Methods & Transformation

**Chapters:** 11, 16, Conclusion

### NotebookLM Video Focus Field

**Base Prompt:**
```
Focus on chapter 11 and chapter 16 of Accelerate, covering transformational leadership's five dimensions (vision, inspirational communication, intellectual stimulation, supportive leadership, personal recognition) and the ING Netherlands case study demonstrating high-performance leadership practices including Obeya rooms, tribe/squad structures, and coaching culture.
```

### Customization Options

**Target Specific Use Case:**
```
Present this to current and aspiring technical leaders. Show how transformational leadership enables high performance indirectly, use the ING case study to provide concrete examples of transformation practices, and end with actionable steps leaders can take.
```

**Focus on Specific Topic:**
```
Show the ING Netherlands transformation story including Obeya visual management rooms, tribe and squad structure, catchball communication, standard work development, and coaching culture practices.
```

**Describe Show Structure:**
```
Start by talking about the five dimensions of transformational leadership and how they differ from traditional management, then present the ING case study with specific practices (Obeya, tribes/squads, catchball), explain how leaders enable rather than command performance, discuss the 'make it your own' philosophy, and end with the key reflection question about making deployments less painful.
```

### Key Visual Elements to Emphasize

- Five transformational leadership dimensions
- ING's Obeya room layout and purpose
- Tribe/squad organizational structure
- 24 capabilities framework overview

---

## General Video Guidelines

### Consistent Themes Across All Videos

- These insights come from rigorous 4-year research study with 23,000+ responses
- High performance means achieving both speed AND stability simultaneously - no trade-offs
- Technical practices and culture are interconnected - you can "act your way to better culture"
- Focus on capabilities (continuous improvement) not maturity models (fixed endpoints)
- The 24 capabilities framework provides concrete areas for improvement

### Video Tone and Style

- **Evidence-Based:** Constantly reference the research methodology and sample size
- **Practical:** Include concrete examples from real organizations (Microsoft, ING, Netflix, Amazon)
- **Developer-Focused:** Use examples that resonate with daily software development work
- **Research-Grounded:** Distinguish between correlation and prediction in findings
- **Encouraging:** Frame current challenges as normal parts of transformation journey

### Recommended Visual Elements

**Meeting 1:**
- DORA metrics dashboard mockup
- Culture types comparison table
- Speed vs. stability scatter plot

**Meeting 2:**
- CD pipeline visualization
- Loosely vs. tightly coupled architecture diagram
- Security integration timeline

**Meeting 3:**
- Kanban board with WIP limits
- Value stream mapping example
- Burnout risk factors checklist

**Meeting 4:**
- Leadership characteristics radar chart
- ING transformation timeline
- 24 capabilities checklist

---

## Customization Examples

### Use Case Examples

**Book Club Preparation:**
```
Present this to a book club preparing for meeting 2. Start with a quick recap of DORA metrics from meeting 1, then cover continuous delivery practices in detail, and end with discussion questions for the upcoming meeting.
```

**Executive Summary:**
```
Present this to executives who haven't read the book but need to understand why we're investing in DevOps transformation. Focus on business outcomes, high-level practices, and ROI evidence.
```

**Implementation Planning:**
```
Present this to a team planning to implement continuous delivery. Focus on practical steps, common pitfalls, and prioritization guidance for the CD capabilities.
```

### Topic Focus Examples

**Specific Metric:**
```
Focus only on deployment frequency and lead time from chapter 2, explaining what they measure, why they matter, and how to improve them.
```

**Specific Practice:**
```
Show just the trunk-based development practice from chapter 4, including how it works, why it enables continuous integration, and how to adopt it incrementally.
```

**Specific Case Study:**
```
Present the ING Netherlands transformation case study from chapter 16, covering all their specific practices and what other organizations can learn from them.
```

### Structure Examples

**Problem-Solution Format:**
```
Start by talking about common deployment pain and anxiety, then show how DORA metrics reveal the problems, explain which practices address each problem, and end with a transformation roadmap.
```

**Journey Format:**
```
Structure the video as a transformation journey: where we are now (baseline assessment), where we want to be (high performer characteristics), how to get there (capability development), and what to expect along the way (challenges and timeline).
```

**Deep Dive Format:**
```
Start with brief overview of all four meetings' content, then deep dive into this meeting's specific chapters, include detailed examples and research findings, and end with connections to other meetings' concepts.
```

---

## Usage Tips

### Before Generating Video

1. **Upload relevant chapter content** to NotebookLM notebook
2. **Select meeting-specific prompt** from above
3. **Customize using examples** for your specific use case
4. **Consider your audience** and adjust focus accordingly

### After Generating Video

1. **Review video** for accuracy and relevance
2. **Note key timestamps** for reference during discussion
3. **Prepare supplementary materials** based on visual elements
4. **Share with participants** 3-5 days before meeting

### Best Practices

- **Combine with podcasts:** Use video for visual learners, audio for commuters
- **Reference during meetings:** Display video segments to reinforce concepts
- **Create playlists:** Organize all four meeting videos for structured learning
- **Annotate and share:** Add your own notes and context when sharing

---

## Comparison: Video vs. Audio Formats

| Aspect | Video Overview | Audio Podcasts |
|--------|---------------|----------------|
| **Length** | 15-25 minutes | 5-25 minutes (format dependent) |
| **Learning Style** | Visual, structured | Auditory, flexible |
| **Best For** | Concept visualization, data presentation | Commutes, multitasking |
| **Complexity** | Can show complex diagrams | Must explain verbally |
| **Engagement** | Requires active viewing | Passive listening OK |

---

## Related Resources

- [Deep Dive Podcasts](../podcasts/deep-dive.md) - Comprehensive audio coverage
- [Brief Podcasts](../podcasts/brief.md) - Quick audio overviews
- [Critique Podcasts](../podcasts/critique.md) - Critical analysis
- [Debate Podcasts](../podcasts/debate.md) - Pro/con exploration
- [Key Questions](../../key-questions.md) - Discussion frameworks

[Return to NotebookLM Prompts Overview](../README.md)
