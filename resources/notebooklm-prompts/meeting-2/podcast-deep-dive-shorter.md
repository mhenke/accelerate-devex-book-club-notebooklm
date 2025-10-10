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

TARGET AUDIENCE:
Assume the listener is a developer or manager needing a quick overview before a book club meeting. They need the essential concepts without deep technical dives.

SOURCE FOCUS:
Focus on Chapters 4-6 from uploaded Accelerate sources.

FORMAT & LENGTH:
Create a concise 10-15 minute podcast. List practices and concepts, don't deep dive. Focus on loosely coupled architecture and shift-left security as the two biggest takeaways.

TOPICS TO COVER (Essential Points Only):

1. THE 8 CD PRACTICES - LIST ONLY (3 minutes)
   - Just name and briefly explain: Version control, deployment automation, CI, trunk-based development, test automation, test data management, shift-left security, CD capability
   - Key point: These practices enable DORA metrics from Meeting 1

2. LOOSELY COUPLED ARCHITECTURE (3 minutes)
   - Core concept: Teams can deploy independently without coordination
   - One critical question: Can you test and deploy without depending on other teams?
   - Why it matters: Biggest contributor to CD capability

3. SHIFT-LEFT SECURITY (2 minutes)
   - Move security from end-gate to integrated practice
   - What changes: Security reviews throughout, pre-approved tools, automated security testing
   - Result: Improves both speed AND security (no trade-off)

DISCUSSION PREPARATION:
Prompt listeners to think about: Which CD practices are we missing? Can we deploy independently? Is security integrated or a gate?
```

---

## Related Resources

- **[Default (15-20 min)](podcast-deep-dive-default.md)** - More comprehensive
- **[Meeting 2 Outline](../../meetings/meeting-2/outline.md)**
