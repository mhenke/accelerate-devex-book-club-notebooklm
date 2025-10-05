# Book Club Resources

This directory contains all supporting materials for the Accelerate DevEx Book Club - a structured 2-month journey through "Accelerate: The Science of Lean Software and DevOps" by Forsgren, Humble, and Kim.

## Quick Start for Facilitators

**New to facilitating?** Follow this path:

1. Read [**book-club-roadmap.md**](book-club-roadmap.md) - Overall 2-month plan and structure
2. Review [**key-questions.md**](key-questions.md) - Core framing questions for each meeting
3. Check [**handouts/**](handouts/) - Print attendee materials 2-3 days before each meeting
4. Use [**meetings/meeting-X/**](meetings/) - Complete facilitator guides for each session
5. Generate NotebookLM content with [**notebooklm-prompts/**](notebooklm-prompts/) - AI-generated podcasts/videos

**Quick prep checklist:**
- ✅ Print [handouts](handouts/) for participants
- ✅ Review [meeting outline](meetings/) and [leader cheatsheet](meetings/meeting-1/leader-cheatsheet.md)
- ✅ Complete [baseline assessments](assessments/) before Meeting 1
- ✅ Generate [NotebookLM podcast](notebooklm-prompts/podcasts/) for pre-meeting prep (optional)

---

## Directory Structure

### 📋 Core Planning Documents

**[book-club-roadmap.md](book-club-roadmap.md)**
- Complete 2-month plan with meeting schedule (Weeks 1, 3, 5, 7)
- Success metrics and discussion best practices
- Between-meeting activities and post-book club extensions
- **Start here** for overall understanding

**[key-questions.md](key-questions.md)**
- Overall framing question connecting all 4 meetings
- Meeting-specific core questions with anchor links for easy referencing
- Use these to guide discussions and keep meetings focused

---

### 📅 `/meetings` - Complete Meeting Guides

Each meeting folder contains comprehensive facilitator resources:

#### **[meeting-1/](meetings/meeting-1/)** - Foundation (Week 1, Chapters 1-3)
- `outline.md` - Complete meeting structure with timing and objectives
- `leader-cheatsheet.md` - 1-page quick reference for facilitators
- `discussion-guide.md` - Open-ended questions with scenarios
- `chapter-notes.md` - Detailed chapter summaries
- `retrospective-template.md` - Post-meeting reflection format

#### **[meeting-2/](meetings/meeting-2/)** - Technical Excellence (Week 3, Chapters 4-6)
#### **[meeting-3/](meetings/meeting-3/)** - Management & Sustainability (Week 5, Chapters 7-10)
#### **[meeting-4/](meetings/meeting-4/)** - Leadership & Transformation (Week 7, Chapters 11, 16, Conclusion)

**See [meetings/README.md](meetings/README.md) for complete index**

---

### 📄 `/handouts` - Printable Materials for Participants

Ready-to-print materials for standard 8.5" × 11" paper:

#### For Each Meeting:
- **Attendee Guide** - Comprehensive participant workbook with fill-in sections
- **Meeting Agenda** - 60-minute structured facilitator guide with timing
- **Action Items Tracker** - Individual commitment and progress tracking

**Print 2-3 days before each meeting** and distribute to participants.

**See [handouts/README.md](handouts/README.md) for printing recommendations and usage guide**

---

### 🎙️ `/notebooklm-prompts` - AI-Generated Content

Use Google's NotebookLM to generate supplementary podcasts and videos for pre-meeting prep or post-meeting review.

#### Podcast Formats:
- **[podcasts/deep-dive.md](notebooklm-prompts/podcasts/deep-dive.md)** - Comprehensive exploration (3 length options: shorter/default/longer)
- **[podcasts/brief.md](notebooklm-prompts/podcasts/brief.md)** - Quick 5-10 min overview
- **[podcasts/critique.md](notebooklm-prompts/podcasts/critique.md)** - Critical analysis examining research methodology
- **[podcasts/debate.md](notebooklm-prompts/podcasts/debate.md)** - Pro/con exploration of controversial topics

#### Video Format:
- **[videos/overview.md](notebooklm-prompts/videos/overview.md)** - Visual summary with customization examples

**See [notebooklm-prompts/README.md](notebooklm-prompts/README.md) for complete usage guide**

---

### 📊 `/assessments` - Measurement Tools

Assessment tools for measuring current state and tracking progress:

- **[24-capabilities-assessment.md](assessments/24-capabilities-assessment.md)** - Comprehensive self-assessment covering all 24 capabilities from Accelerate research
- **[dora-metrics-template.md](assessments/dora-metrics-template.md)** - Template for tracking the four key metrics (Lead Time, Deployment Frequency, Time to Restore, Change Fail Rate)
- **[culture-assessment-worksheet.md](assessments/culture-assessment-worksheet.md)** - Westrum organizational culture assessment and action planning tool

**When to use:** Complete baseline assessments before Meeting 1, track continuously throughout book club, reassess after completion.

**See [assessments/README.md](assessments/README.md) for meeting-by-meeting usage guide**

---

### 🎯 `/activities` - Discussion & Between-Meeting Practices

Ongoing activities and facilitation best practices:

- **[discussion-practices.md](activities/discussion-practices.md)** - Best practices for facilitating discussions, creating psychological safety, handling difficult conversations
- **[between-meetings.md](activities/between-meetings.md)** - Activities for between sessions to maintain momentum and track progress

**See [activities/README.md](activities/README.md) for meeting mapping guide**

---

### 📝 `/templates` - Reusable Documentation Formats

Templates for capturing meeting outcomes and reflections:

- **[meeting-notes-template.md](templates/meeting-notes-template.md)** - Comprehensive template for capturing meeting discussions, action items, and next steps
- **[retrospective-format.md](templates/retrospective-format.md)** - Accelerate-inspired retrospective format for team reflection sessions
- **Meeting-specific retrospectives** - Custom templates in each `meetings/meeting-X/` folder

---

## Getting Started Workflow

### Before Book Club Begins (Week 0)

1. **Review overall plan:**
   - Read [book-club-roadmap.md](book-club-roadmap.md)
   - Review [key-questions.md](key-questions.md)

2. **Complete baseline assessments:**
   - [24 Capabilities Assessment](assessments/24-capabilities-assessment.md)
   - [DORA Metrics Template](assessments/dora-metrics-template.md) - establish baseline

3. **Prepare Meeting 1 materials:**
   - Print [Meeting 1 handouts](handouts/meeting-1/)
   - Review [Meeting 1 outline](meetings/meeting-1/outline.md)
   - Review [leader cheatsheet](meetings/meeting-1/leader-cheatsheet.md)
   - (Optional) Generate [Deep Dive podcast](notebooklm-prompts/podcasts/deep-dive.md) for pre-meeting prep

### During Book Club (Weeks 1-7)

**Each meeting cycle:**
1. Distribute [attendee guide](handouts/) 2-3 days before meeting
2. Generate [NotebookLM podcast](notebooklm-prompts/podcasts/brief.md) for prep (optional)
3. Facilitate meeting using [outline](meetings/) and [agenda](handouts/)
4. Track commitments with [action items tracker](handouts/)
5. Between meetings: Use [activities](activities/between-meetings.md) to maintain momentum
6. Post-meeting: Complete [retrospective template](templates/retrospective-format.md)

**Track progress continuously:**
- [DORA Metrics](assessments/dora-metrics-template.md) - ongoing measurement
- [Culture observations](assessments/culture-assessment-worksheet.md)
- Meeting notes using [template](templates/meeting-notes-template.md)

### After Book Club (Months 3+)

**See [book-club-roadmap.md](book-club-roadmap.md#post-book-club-months-3)** for:
- Ongoing measurement approach
- Next book club topics
- Practice implementation working groups
- Transformation roadmap creation

---

## Key Features of This Resource Collection

✅ **Consistent meeting structure** - All 4 meetings follow repeatable 60-minute format
✅ **Printable handouts** - Ready-to-print materials for all participants
✅ **AI-generated supplements** - NotebookLM prompts for podcasts and videos
✅ **Comprehensive assessments** - Baseline and ongoing measurement tools
✅ **Facilitator support** - Cheatsheets, discussion guides, troubleshooting tips
✅ **Evidence-based content** - All materials grounded in Accelerate research findings
✅ **Actionable takeaways** - Each meeting includes specific action items and experiments

---

## Resource Cross-Reference

| Need | Resource | Location |
|------|----------|----------|
| Overall book club plan | Book Club Roadmap | [book-club-roadmap.md](book-club-roadmap.md) |
| Core framing questions | Key Questions | [key-questions.md](key-questions.md) |
| Meeting facilitation guide | Meeting Outlines | [meetings/](meetings/) |
| Quick facilitator reference | Leader Cheatsheets | [meetings/meeting-X/leader-cheatsheet.md](meetings/meeting-1/leader-cheatsheet.md) |
| Participant workbooks | Attendee Guides | [handouts/](handouts/) |
| AI-generated prep content | NotebookLM Prompts | [notebooklm-prompts/](notebooklm-prompts/) |
| Baseline measurements | Assessments | [assessments/](assessments/) |
| Discussion facilitation tips | Discussion Practices | [activities/discussion-practices.md](activities/discussion-practices.md) |
| Meeting notes capture | Templates | [templates/](templates/) |
| Post-meeting reflection | Retrospective Templates | [templates/retrospective-format.md](templates/retrospective-format.md) |

---

## Support and Customization

### Adapting Materials for Your Organization

All resources can be customized:
- Add industry-specific examples relevant to your context
- Include company-specific metrics or systems
- Adjust timing for longer or shorter meetings
- Translate materials for global teams

**See individual README files in each directory for customization guidance.**

### Questions?

- **Facilitation best practices:** See [activities/discussion-practices.md](activities/discussion-practices.md)
- **Meeting-specific guidance:** See [meetings/meeting-X/leader-cheatsheet.md](meetings/meeting-1/leader-cheatsheet.md)
- **Assessment usage:** See [assessments/README.md](assessments/README.md)
- **Printing handouts:** See [handouts/README.md](handouts/README.md)

---

All materials are designed to support evidence-based transformation using the principles from "Accelerate" by Forsgren, Humble, and Kim.
