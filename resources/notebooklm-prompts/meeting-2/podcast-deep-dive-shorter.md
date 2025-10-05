# Meeting 2: Deep Dive Podcast (Shorter Length)

**Meeting:** 2 - Technical Excellence
**Chapters:** 4-6 (Technical Practices, Architecture, Integrating Infosec)
**Format:** Deep Dive Podcast
**Length:** Shorter (10-15 minutes)

---

## Prerequisites

**Before using this prompt:**
1. Upload Chapters 4-6 from "Accelerate" to NotebookLM
2. (Optional) Upload [Meeting 2 Chapter Notes](../../meetings/meeting-2/chapter-notes.md)

**See [ALL-SOURCES-TO-UPLOAD.md](ALL-SOURCES-TO-UPLOAD.md) for complete source list**

---

## COPY-PASTE PROMPT FOR NOTEBOOKLM

```
BOOK CLUB CONTEXT:
This podcast prepares participants for Meeting 2 of an Accelerate DevEx Book Club. This is a SHORTER format - focus on the most critical CD concepts only.

MEETING 2 CORE QUESTION:
"What is the smallest technical change we could make to enable more independent, 'shift-left' work?"

FOCUS (Chapters 4-6):

1. THE 8 CD PRACTICES - LIST ONLY (3 minutes)
   Just name and briefly explain each practice:
   - Version control, Deployment automation, CI, Trunk-based dev
   - Test automation, Test data, Shift-left security, CD capability

   KEY POINT: These practices enable DORA metrics from Meeting 1

2. LOOSELY COUPLED ARCHITECTURE (3 minutes)
   CORE CONCEPT: Teams can deploy independently without coordination

   ONE QUESTION: Can you test and deploy without depending on other teams?

   WHY IT MATTERS: Biggest contributor to CD capability

3. SHIFT-LEFT SECURITY (2 minutes)
   Move security from end-gate to integrated practice

   WHAT CHANGES:
   - Security reviews throughout (not just before prod)
   - Pre-approved tools for teams
   - Automated security testing

   RESULT: Improves both speed AND security

TARGET AUDIENCE:
Participants who need a quick overview before the meeting.

LENGTH: 10-15 minutes maximum. List practices, don't deep dive. Focus on loosely coupled architecture and shift-left as the two biggest concepts.

DISCUSSION PREP:
- Which CD practices are we missing?
- Can we deploy independently?
- Is security integrated or a gate?
```

---

## Related Resources

- **[Default (15-20 min)](podcast-deep-dive-default.md)** - More comprehensive
- **[Meeting 2 Outline](../../meetings/meeting-2/outline.md)**
