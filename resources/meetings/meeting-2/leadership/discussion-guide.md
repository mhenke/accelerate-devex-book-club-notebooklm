# Meeting 2 Discussion Questions Resource Bank

**Technical Excellence & Continuous Delivery**

## Purpose of This Document

This is a **question bank** containing 40+ discussion questions for Meeting 2. **You will NOT use all of these questions.** Facilitators should select 8-10 questions that best fit their team's context and the 60-minute meeting format.

See [Quick Start Guide](#quick-start-recommended-meeting-flow) below for a default meeting flow, or browse the [Question Bank](#question-bank-all-options) to customize your discussion.

---

## Core Framing Question

> **See [Key Questions - Meeting 2](../../../key-questions.md#meeting-2)**

**"Which of our current architectural or security practices create the most friction and dependencies for our teams, and what would it take to shift from approval-based safety to automation-based confidence?"**

This question connects architecture (Ch. 5) to the technical practices (Ch. 4) and security integration (Ch. 6) that reduce dependencies. It challenges the assumption that manual approvals improve quality and prompts teams to consider automated alternatives.

---

## Quick Start: Recommended Meeting Flow

**Full Meeting: 60 minutes (25 min core discussion + 35 min other activities) | Questions Used: 6-8**

*Note: The agenda allocates 25 minutes for core discussion. Opening/wrap-up happen in other agenda sections (welcome, action items).*

### Part 1: Continuous Delivery Practices (10 min)
- **Question 5:** How long-lived are your feature branches? Hours, days, weeks, or months?
- **Question 7:** What prevents your team from merging to trunk/main daily?
- **Question 11:** What percentage of your tests run automatically on every commit vs. manually?

### Part 2: Change Approval & CABs (10 min)
- **Question 19:** Does your organization use a Change Approval Board (CAB) for production changes?
- **Question 20:** Given the research shows CABs are negatively correlated with performance and don't improve stability, how would you propose eliminating or replacing them?
- **Question 22:** What would "lightweight approval" look like for your team?

### Part 3: Architecture & Team Independence (5 min)
- **Question 25:** Can your team deploy changes independently without coordinating with other teams?
- **Question 27:** What architectural dependencies force you to coordinate with other teams?

---

## Question Bank: All Options

**Instructions:** Browse questions below and select 6-8 that fit your team's context for the **25-minute core discussion**. The [Quick Start Guide](#quick-start-recommended-meeting-flow) above provides a recommended selection for a typical meeting.

### Section A: Understanding Current Technical Practices

**On Version Control & Deployment:**
1. What do you currently keep in version control: application code, application config, infrastructure config, deployment scripts?
2. What's missing from version control that should be there?
3. Describe your deployment process from "code complete" to "running in production." How many manual steps?
4. What's the most painful part of your deployment process?

**On Continuous Integration & Trunk-Based Development:**
5. How long-lived are your feature branches? Hours, days, weeks, or months?
6. How many active branches does your repository typically have at any given time?
7. What prevents your team from merging to trunk/main daily?
8. Do you practice continuous integration (every commit triggers automated build and tests)?
9. How long does your CI build take? Is it fast enough to provide immediate feedback?
10. What happens when a build fails in CI? How quickly do teams respond?

**On Test Automation:**
11. What percentage of your tests run automatically on every commit vs. manually?
12. Are your test suites reliable? Do they catch real failures or produce false positives?
13. Can you run your full test suite in any environment (dev, staging, prod) without manual setup?
14. How long does it take to run your full test suite? Is that acceptable?

**Follow-up prompts:**
- "What would it take to automate that?"
- "Who owns fixing that process?"
- "What's blocking improvement?"

### Section B: Exploring Change Approval & CABs

**Critical Research Finding:**
> Change Approval Boards are **negatively correlated** with lead time, deployment frequency, and restore time. CABs have **NO correlation** with change fail ratethey don't improve stability.

**On Current Approval Processes:**
19. Does your organization use a Change Approval Board (CAB) for production changes?
20. Given the research shows CABs are negatively correlated with performance and don't improve stability, how would you propose eliminating or replacing them?
21. If you have CABs, describe the approval process. How long does approval take? What value does it provide?
22. What would "lightweight approval" look like for your team (peer review, pair programming)?
23. What concerns would leadership have about removing CABs? How would you address them?
24. Have CABs actually prevented production incidents in your organization, or do problems slip through anyway?

**Follow-up prompts:**
- "What evidence would you need to convince leadership?"
- "How could you pilot peer review instead?"
- "What would a phased elimination look like?"

### Section C: Architecture & Team Independence

**On Loose Coupling:**
25. Can your team deploy changes independently without coordinating with other teams?
26. Can you complete most work without communicating with people outside your team?
27. What architectural dependencies force you to coordinate with other teams?
28. Can you make large-scale changes to your system design without depending on other teams?
29. Is your architecture optimized for testability and deployability, or something else?

**On Monoliths vs. Microservices:**
30. What architecture does your system use: monolith, microservices, or hybrid?
31. Given the research shows architecture **type** matters less than **loose coupling**, does your current architecture enable team independence?
32. If you could redesign one architectural dependency to improve team autonomy, what would it be?

**Follow-up prompts:**
- "What would it take to remove that dependency?"
- "Is the problem technical architecture or organizational structure?"
- "Could you decouple this without a complete rewrite?"

### Section D: Security Integration (Shift Left)

**On Current Security Practices:**
33. At what stage does security get involved in your development process: planning, development, testing, or pre-production gate?
34. How long does security review typically add to your delivery timeline?
35. What security checks could be automated in your CI/CD pipeline (SAST, DAST, dependency scanning)?
36. Do developers have security training and tools, or is security handled by a separate team?
37. What's the biggest security-related delay or bottleneck in your process?

**On Shifting Left:**
38. What would "shift left on security" look like for your team?
39. What resistance would you encounter trying to integrate security earlier?
40. How could you make security everyone's responsibility instead of a separate team's job?

**Follow-up prompts:**
- "What tools exist to automate this?"
- "What would security team need to feel comfortable with automation?"
- "Could you start with one automated security scan?"

### Section E: Reflection and Commitment

**Personal Reflection:**
41. What surprised you most in chapters 4-6?
42. Which technical practice will you experiment with before Meeting 3?
43. What myth from chapters 4-6 challenged your existing beliefs most?
44. What evidence would you need to convince your team to adopt one of these practices?
45. What's your biggest takeaway from Meeting 2?

**Team Commitment:**
46. Which deployment step will you automate first?
47. How will you document architectural dependencies that require cross-team coordination?
48. What's one small change you can make to trunk-based development practices?
49. What security check can you add to CI/CD in the next two weeks?

### Section F: Real-World Scenarios

**Scenario 1: The Long-Lived Branch Problem**
Your team uses feature branches that last 2-3 weeks. Merge conflicts are common, and integration is painful. A developer argues that longer branches give more time for thorough testing before merging. How would you use chapters 4-6 research to respond?

**Discussion points:**
- What does research say about branch lifetime?
- How do elite performers handle incomplete features?
- What's the actual relationship between branch length and quality?
- What practices enable short-lived branches?

**Scenario 2: The CAB Defense**
Your organization's CAB meets weekly to approve production changes. Leadership argues it prevents incidents and ensures quality. Last month the CAB delayed 3 deployments by an average of 5 days. You want to propose eliminating the CAB. What's your approach?

**Discussion points:**
- What does research say about CAB effectiveness?
- What evidence can you present to leadership?
- What lightweight alternatives exist?
- How would you pilot a new approach?

**Scenario 3: The Security Gate**
Security reviews happen at the end of your development cycle, often delaying releases by 1-2 weeks. The security team is overwhelmed and becomes a bottleneck. Developers want to "shift left" but security team worries about quality. How do you bridge this gap?

**Discussion points:**
- What security checks can be automated?
- How can developers take ownership of security?
- What training and tools does security team need to provide?
- How can you start small and build trust?

**Scenario 4: The Architecture Debate**
Your organization is considering migrating from a monolith to microservices to "improve performance." Based on chapter 5, what questions would you ask before committing to this multi-year initiative?

**Discussion points:**
- Does architecture type determine performance?
- What actually matters for high performance?
- Can current architecture be loosely coupled?
- What organizational changes would be required?

---

## How to Customize Your Discussion

### For Facilitators

**Step 1: Choose Your Approach**
- **Option A:** Use the [Quick Start Guide](#quick-start-recommended-meeting-flow) above (8 pre-selected questions for 25 min)
- **Option B:** Build custom discussion by selecting 6-8 questions from the [Question Bank](#question-bank-all-options)

**Step 2: Selection Guidelines (for 25-minute core discussion)**
- **Start with current state:** Select 2-3 questions from Section A to ground discussion in team's technical practices (10 min)
- **Focus on 1 key concept:** Choose either CABs OR architecture OR security for depth (10 min)
- **Close with reflection:** 1-2 questions from Section E if time permits (5 min)
- **Skip scenarios:** Scenarios add 10-15 minutes and won't fit in 25-minute discussion slot

**Step 3: Facilitation Tips**
- **Reference research statistics** (46x, 2.3x, "negatively correlated") when challenging assumptions
- **Use CAB discussion carefully** - this is often politically sensitive
- **Make it safe** to acknowledge current practices aren't research-backed
- **Focus on experiments** - what's one small thing to try, not "transform everything"
- **Capture commitments** in writing - these become Meeting 3 accountability check-ins

### For Participants

- **Come prepared** with specific examples from your deployment process, architecture, and security practices
- **Be honest** about current state - technical debt is universal
- **Challenge assumptions** constructively - CABs, long branches, security gates may be sacred cows
- **Connect to evidence** from chapters 4-6 research when making points
- **Commit to experiments** - you'll be asked which practice you'll try before Meeting 3

### Meeting Time Allocation (60 minutes)

**Full Meeting Structure per Agenda:**
- Welcome & Check-In: 5 min (from agenda)
- Key Concepts Review: 10 min (from agenda)
- **Core Discussion: 25 min** (this is where you use discussion questions)
- AI Tool Spotlight: 5 min (from agenda)
- Action Items & Commitments: 10 min (from agenda)
- Wrap-Up & Preview: 5 min (from agenda)

**Core Discussion Time (25 minutes) - Using Quick Start Guide:**
- Part 1 (CD Practices): 10 min (3 questions)
- Part 2 (CABs): 10 min (3 questions)
- Part 3 (Architecture): 5 min (2 questions)

**Custom Discussion Flow (25 minutes):**
- Current State: 10 min (2-3 questions from Section A)
- Core Concepts: 10 min (2-3 questions from Section B, C, or D)
- Reflection: 5 min (1-2 questions from Section E)

---

## Related Resources

Use these tools during or after discussion:

- **[Architecture Team Independence Worksheet](../handouts/architecture-team-independence.md)** - Map cross-team dependencies
- **[Security Shift-Left Checklist](../handouts/security-shift-left.md)** - Plan security automation
- **[24 Capabilities Assessment](../../../assessments/24-capabilities-assessment.md)** - Update CD capabilities ratings

---

## Next Meeting Prep

**[Meeting 3: Management, Product Development & Sustainability](../../meeting-3/)**

Preview question to consider:
> "What work-in-progress limits would reveal our bottlenecks, and how do we create sustainable practices that prevent burnout while improving performance?"

---

[� Meeting 2 Resources](../README.md) | [Key Questions](../../../key-questions.md) �
