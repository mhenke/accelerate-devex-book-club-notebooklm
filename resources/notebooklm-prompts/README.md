# NotebookLM Prompts for Accelerate Book Club

This directory contains **32 ready-to-use, copy-paste prompts** for generating AI-powered podcasts and videos using Google's NotebookLM to supplement your Accelerate DevEx Book Club experience.

---

## What is NotebookLM?

[NotebookLM](https://notebooklm.google.com/) is Google's AI-powered research assistant that can generate audio podcasts and video overviews from your uploaded sources. Upload chapters from "Accelerate" and use our pre-crafted prompts to generate high-quality supplementary content for each book club meeting.

---

## New Per-Meeting Structure 🎯

**Each meeting has its own directory** with complete, copy-paste-ready prompts for all formats. No more searching through long files - just go to your meeting folder and pick your format!

```
notebooklm-prompts/
  meeting-1/  (8 prompts)
  meeting-2/  (8 prompts)
  meeting-3/  (8 prompts)
  meeting-4/  (8 prompts)
```

### Available Formats (Per Meeting)

Each meeting includes these formats:

| Format | Length | Purpose | File Name |
|--------|--------|---------|-----------|
| **Deep Dive (Default)** | 15-20 min | Balanced, comprehensive coverage | `podcast-deep-dive-default.md` |
| **Deep Dive (Shorter)** | 10-15 min | Quick overview | `podcast-deep-dive-shorter.md` |
| **Deep Dive (Longer)** | 20-25 min | Detailed exploration | `podcast-deep-dive-longer.md` |
| **Brief** | 5-10 min | Essential takeaways only | `podcast-brief.md` |
| **Critique** | 15-20 min | Critical analysis | `podcast-critique.md` |
| **Debate** | 15-20 min | Pro/con exploration | `podcast-debate.md` |
| **Video** | 10-15 min | Visual summary | `video.md` |
| **Sources Guide** | N/A | What to upload | `ALL-SOURCES-TO-UPLOAD.md` |

---

## Quick Start Guide

### Step 1: Choose Your Meeting

Navigate to your meeting's directory:

- **[meeting-1/](meeting-1/)** - Foundation (Chapters 1-3: DORA Metrics, Culture)
- **[meeting-2/](meeting-2/)** - Technical Excellence (Chapters 4-6: CD Practices, Architecture)
- **[meeting-3/](meeting-3/)** - Management & Sustainability (Chapters 7-10: Lean, Burnout)
- **[meeting-4/](meeting-4/)** - Leadership & Transformation (Chapters 11, 16, Conclusion)

### Step 2: Upload Sources to NotebookLM

1. Open [notebooklm.google.com](https://notebooklm.google.com/)
2. Create a new notebook (e.g., "Accelerate Book Club - Meeting 1")
3. **See the meeting's `ALL-SOURCES-TO-UPLOAD.md`** for complete source list
4. Upload required chapters from "Accelerate" book
5. (Optional) Upload meeting chapter notes for additional context

### Step 3: Choose Your Format

**Which format should you use?**

| If you want... | Use this format |
|----------------|-----------------|
| Quick prep before meeting | **Brief** (5-10 min) |
| Comprehensive preparation | **Deep Dive Default** (15-20 min) ⭐ Recommended |
| Maximum detail | **Deep Dive Longer** (20-25 min) |
| Minimum time | **Deep Dive Shorter** (10-15 min) |
| Critical analysis | **Critique** |
| Multiple perspectives | **Debate** |
| Visual learning | **Video** |

### Step 4: Generate Content

1. In NotebookLM, click **Audio Overview** (for podcasts) or **Video** (if available)
2. Click **Customize**
3. Open your chosen prompt file (e.g., `meeting-1/podcast-deep-dive-default.md`)
4. **Copy the ENTIRE prompt** from the "COPY-PASTE PROMPT FOR NOTEBOOKLM" section
5. **Paste into NotebookLM's prompt field**
6. Click **Generate**
7. Wait 3-5 minutes for generation
8. Download and share with participants!

---

## Meeting-Specific Content

### Meeting 1: Foundation (Week 1)
**Chapters:** 1-3 (Measuring Performance, Speed + Stability, Culture)
**Directory:** [meeting-1/](meeting-1/)

**Key Topics:**
- Four DORA metrics
- Speed + stability myth-busting
- Westrum's organizational culture types

**Best formats:**
- **Default Deep Dive** - Comprehensive prep for facilitators
- **Brief** - Quick overview for participants
- **Video** - Visual DORA metrics and culture types

---

### Meeting 2: Technical Excellence (Week 3)
**Chapters:** 4-6 (Technical Practices, Architecture, Security)
**Directory:** [meeting-2/](meeting-2/)

**Key Topics:**
- 8 continuous delivery practices
- Loosely coupled architecture
- Shift-left security

**Best formats:**
- **Default Deep Dive** - All CD practices explained
- **Critique** - Implementation challenges
- **Debate** - Trunk-based vs. feature branches, microservices vs. monolith

---

### Meeting 3: Management & Sustainability (Week 5)
**Chapters:** 7-10 (Lean Management, Product Development, Burnout, Satisfaction)
**Directory:** [meeting-3/](meeting-3/)

**Key Topics:**
- 5 lean management practices
- Deployment pain → burnout connection
- Employee satisfaction drivers

**Best formats:**
- **Default Deep Dive** - All lean practices
- **Debate** - WIP limits, CABs, deployment frequency
- **Video** - WIP visualization, burnout cycle

---

### Meeting 4: Leadership & Transformation (Week 7)
**Chapters:** 11, 16, Conclusion (Leadership, ING Case Study, Path Forward)
**Directory:** [meeting-4/](meeting-4/)

**Key Topics:**
- 5 transformational leadership characteristics
- ING Netherlands case study
- Creating transformation roadmap
- Sustaining improvement

**Best formats:**
- **Longer Deep Dive** - Complete transformation guidance
- **Video** - Inspiring visual summary
- **Default Deep Dive** - ING practices and roadmap

---

## How Prompts Are Structured

Each prompt file includes:

✅ **Book club context** - Meeting number, chapters, focus
✅ **Overall framing question** - Connecting all 4 meetings
✅ **Meeting-specific core question** - From [key-questions.md](../key-questions.md)
✅ **Complete prompt** - Copy-paste ready, no editing needed
✅ **Length guidance** - Exact duration expectations
✅ **Target audience** - Who this format serves best
✅ **Discussion preparation** - Questions to explore in meeting
✅ **Prerequisites** - What sources to upload first

---

## When to Generate Content

### Pre-Meeting (Recommended)
**Timing:** 2-3 days before meeting
**Format:** Brief or Default Deep Dive
**Purpose:** Give participants time to listen before meeting

### Post-Meeting (Optional)
**Timing:** After meeting for review
**Format:** Same as pre-meeting, or Critique for reflection
**Purpose:** Reinforce learning, catchup for absent members

### Throughout Book Club
**Generate progressively:**
- Week 0: Meeting 1 Brief for all participants
- Week 1: Meeting 2 Default for facilitator prep
- Week 2: Meeting 2 Brief for participants
- Repeat for Meetings 3-4

---

## Customization Tips

### Adjust for Your Context

While prompts are copy-paste ready, you can customize by:

1. **Adding your team's context** to sources:
   - Upload your DORA metrics baseline
   - Include your pain points documentation
   - Add your culture assessment

2. **Modifying prompts** (optional):
   - Add your industry-specific examples
   - Emphasize topics most relevant to your team
   - Adjust length guidance

### Format Combinations

**Effective combinations:**
- **Brief** (for all) + **Longer Deep Dive** (for facilitator)
- **Default Deep Dive** (pre-meeting) + **Critique** (post-meeting)
- **Video** (team viewing) + **Brief** (individual prep)

---

## Troubleshooting

### NotebookLM says "Source material doesn't match prompt"
- Make sure you uploaded the correct chapters (see `ALL-SOURCES-TO-UPLOAD.md`)
- Try uploading chapter notes as additional source

### Generated content is too generic
- Upload more specific sources (your team's metrics, pain points)
- Use Longer Deep Dive format for more detail

### Audio is too long/short
- Use different length variant (Shorter/Default/Longer)
- Brief format is shortest (5-10 min)

### Want different perspective
- Try Critique format (skeptical analysis)
- Try Debate format (multiple viewpoints)

---

## Best Practices

### For Facilitators

✅ **Generate 3 days before meeting** - Give participants time to listen
✅ **Use Default Deep Dive for yourself** - Comprehensive prep
✅ **Share Brief with participants** - Easier to consume
✅ **Listen before sharing** - Ensure quality matches expectations
✅ **Provide context when sharing** - "This is AI-generated supplement, not replacement for reading"

### For Participants

✅ **Listen during commute or exercise** - Make use of downtime
✅ **Take notes while listening** - Capture questions for discussion
✅ **Don't treat as replacement for reading** - Supplement, not substitute
✅ **Share feedback** - Help facilitator improve content selection

### For Organizations

✅ **Create library** - Generate all formats for all meetings upfront
✅ **Version control** - Track which prompts generated which content
✅ **Internal sharing** - Create shared folder for all participants
✅ **Measure engagement** - Survey whether podcasts/videos helped

---

## Technical Notes

### File Organization

```
meeting-1/
  ALL-SOURCES-TO-UPLOAD.md        ← Start here
  podcast-deep-dive-default.md    ← Recommended
  podcast-deep-dive-shorter.md
  podcast-deep-dive-longer.md
  podcast-brief.md
  podcast-critique.md
  podcast-debate.md
  video.md
```

### Prompt File Format

All prompts use this structure:
- **Title and metadata** - Meeting, chapters, format, length
- **Prerequisites section** - What sources to upload
- **Complete prompt in code block** - Copy everything between backticks
- **What to expect** - Coverage summary
- **When to use** - Ideal scenarios

---

## FAQ

**Q: Do I need to edit the prompts?**
A: No! They're copy-paste ready. Just upload sources and paste the prompt.

**Q: Which format should I start with?**
A: **Default Deep Dive** for comprehensive prep, **Brief** for quick overview.

**Q: Can I use multiple formats?**
A: Yes! Different perspectives are valuable. Try Default + Critique.

**Q: How long does generation take?**
A: Usually 3-5 minutes for podcasts, possibly longer for videos.

**Q: Can I share generated content?**
A: Yes, with your book club participants. Consider AI-generated content policies.

**Q: What if NotebookLM doesn't support video yet?**
A: Use video prompts as script/outline for manual video creation.

---

## Related Resources

- **[Book Club Roadmap](../book-club-roadmap.md)** - Overall plan and schedule
- **[Key Questions](../key-questions.md)** - Core questions for each meeting
- **[Meeting Guides](../meetings/)** - Complete facilitator materials
- **[Handouts](../handouts/)** - Printable participant materials

---

## Support

**Questions about NotebookLM?**
- NotebookLM Help: [support.google.com](https://support.google.com/notebooklm/)

**Questions about prompts?**
- See individual prompt files for detailed guidance
- Check [key-questions.md](../key-questions.md) for framing questions

**Feedback on prompts?**
- These prompts are maintained as part of the book club resources
- Suggest improvements via issues or pull requests

---

**Total prompts available:** 32 (8 per meeting × 4 meetings)

**Ready to start?** Go to [meeting-1/ALL-SOURCES-TO-UPLOAD.md](meeting-1/ALL-SOURCES-TO-UPLOAD.md) to begin!
