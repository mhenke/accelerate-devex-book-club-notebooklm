# Meeting 2 Attendee Guide

**Technical Excellence & Continuous Delivery**

**Week 3 | Chapters 4-6 | 1 Hour**

_Print this guide and bring to the meeting_

---

## Meeting Overview

Today we explore:
-  The 8 continuous delivery capabilities that drive performance
-  How architecture enables (or prevents) team independence
-  Why Change Approval Boards don't improve stability
-  Shifting security left into the development process

---

## Key Question for Today

> **"Which of our current architectural or security practices create the most friction and dependencies for our teams, and what would it take to shift from approval-based safety to automation-based confidence?"**

---

## The 8 Continuous Delivery Capabilities

### 1. Version Control
**What it means:** Keep everything in version controlcode, configuration, infrastructure

**Your team:**
-  Application code in version control
-  Application configuration in version control
-  System/infrastructure configuration in version control
-  Build and deployment scripts in version control

**What's missing?** _________________________________________

---

### 2. Deployment Automation
**What it means:** Deployments are automated, repeatable, and don't require manual steps

**Your deployment process:**
- Number of manual steps: _______
- Most painful manual step: _______________________________________
- Time from "ready to deploy" to "running in production": _______

**One automation opportunity:** _______________________________________

---

### 3. Continuous Integration (CI)
**What it means:** Every commit triggers automated build and tests

**Your team:**
-  Every commit triggers automated build
-  Every commit triggers automated tests
-  Build feedback in < 10 minutes
-  Team fixes broken builds immediately

**What's blocking better CI?** _______________________________________

---

### 4. Trunk-Based Development
**What it means:** < 3 active branches, branches live < 1 day

**Research finding:** Elite performers are **2.3x more likely** to use trunk-based development

**Your team:**
- Typical branch lifetime:  < 1 day  1-7 days  1-4 weeks  > 1 month
- Number of active branches: _______
- What prevents daily merges? _______________________________________

---

### 5. Test Automation
**What it means:** Comprehensive automated tests that catch real failures

**Your team:**
- % of tests automated: _______
- Full test suite runtime: _______
- Tests are:  Reliable  Flaky  Catch real issues  Produce false positives

**Biggest test automation gap:** _______________________________________

---

### 6. Test Data Management
**What it means:** Test data available on-demand in any environment

**Your team:**
-  Can run tests in dev without manual setup
-  Can run tests in staging without manual setup
-  Test data is automated/scripted
-  No manual test data preparation required

**Test data challenge:** _______________________________________

---

### 7. Shift Left on Security
**What it means:** Security integrated early, automated in CI/CD

**Your team:**
- When security gets involved:  Planning  Development  Pre-release gate  Never
- Security checks automated:  None  Some  Most  All
- Security is:  Separate team  Shared responsibility

**Security bottleneck:** _______________________________________

---

### 8. Continuous Delivery (The Goal)
**What it means:** Can deploy to production on demand, safely and quickly

**Your team:**
-  Can deploy on demand (not just scheduled windows)
-  Deployments are low-risk events
-  Rollback is fast and easy
-  Team confident in deployment process

---

## Architecture & Team Independence

Check all that apply to your team:

### Team Autonomy Assessment
-  We can deploy changes without coordinating with other teams
-  We can complete work without communicating outside our team
-  We can make design changes without depending on other teams
-  Our changes don't create significant work for other teams

### Architectural Dependencies

**Teams we must coordinate with for deployment:**

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

**Why coordination is required:**

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

### Architecture Type

Our system is:
-  Monolith
-  Microservices
-  Hybrid
-  Other: _____________________

**Key Research Finding:** Architecture **type** matters less than **loose coupling**. High performance is possible with all architecture types if teams can deploy independently.

---

## Change Approval Processes

### Critical Research Finding

> Change Approval Boards (CABs) are **negatively correlated** with:
> - Lead time (slower)
> - Deployment frequency (fewer deployments)
> - Time to restore (slower recovery)
>
> CABs have **NO correlation** with change fail rate (don't improve stability).
>
> **Having a CAB is worse than having no approval process at all.**

### Your Organization's Approval Process

**Check your current process:**
-  All changes require external approval (CAB or manager)
-  Only high-risk changes require external approval
-  Peer review only (pair programming or code review)
-  No approval process

**If you have CABs:**
- How often do they meet? _____________________
- Average approval delay: _____________________
- Value provided: _____________________________________________

**Lightweight alternatives your team could try:**
-  Peer code review
-  Pair programming
-  Automated pipeline gates
-  Post-deployment review

---

## Key Statistics from Chapters 4-6

### Technical Practices Impact
- High performers deploy **46x more frequently** than low performers
- Organizations with CD spend **49%** of time on new work vs. **38%** without CD
- High performers spend **22%** less time on unplanned work/rework

### Trunk-Based Development
- Elite performers: **< 3 active branches**, branches **< 1 day**
- Top performers deploy **nearly 1,000x more frequently** than lowest

### Change Approval
- **Peer review = highest performance**
- **CABs = negatively correlated with performance**
- **CABs don't improve stability**

---

## Discussion Notes

Use this space to capture key points during discussion:

**Insights about continuous delivery practices:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Examples of architectural coupling:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Change approval observations:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Security integration opportunities:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Questions to explore further:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

---

## Action Items (My Personal Commitments)

### Before Meeting 3 (Week 5), I will:

** Document deployment process and identify automation opportunity:**

________________________________________________________________

________________________________________________________________

** Map architectural dependencies:**

| Team We Coordinate With | Why Coordination Needed | Coupling Type |
|------------------------|-------------------------|---------------|
|                        |                         |               |
|                        |                         |               |
|                        |                         |               |

** Experiment with one CD practice:**

Practice I'll try: _______________________________________________

How I'll measure success: ________________________________________

________________________________________________________________

Timeline: Start _____________ End _____________

** Observe change approval process and document bottlenecks:**

| Date | Change Requested | Approval Time | Bottleneck |
|------|------------------|---------------|------------|
|      |                  |               |            |
|      |                  |               |            |
|      |                  |               |            |

---

## Key Takeaways

**Most important thing I learned today:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**One practice I'll implement:**

________________________________________________________________

________________________________________________________________

**One thing I'll stop doing:**

________________________________________________________________

________________________________________________________________

**One question I still have:**

________________________________________________________________

________________________________________________________________

---

## Myths Busted in Chapters 4-6

### Myth: Long-lived feature branches improve quality
**Reality:** Elite performers keep branches < 1 day. Long branches increase integration risk and reduce deployment frequency.

### Myth: CABs improve stability
**Reality:** CABs are negatively correlated with performance and have NO correlation with stability. Peer review performs better.

### Myth: Microservices are required for high performance
**Reality:** Architecture type matters less than loose coupling. High performance is possible with monoliths if teams can deploy independently.

### Myth: Security must be a gate before production
**Reality:** 70%+ of organizations successfully shift security left. Automated security in CI/CD is faster and more effective.

---

## Prepare for Meeting 3

**Chapters to read:** 7-10 (Management Practices, Product Development, Sustainability, Employee Satisfaction)

**Preview question:** _What work-in-progress limits would reveal our bottlenecks, and how do we create sustainable practices that prevent burnout while improving performance?_

**Optional prep:** Listen to [NotebookLM Brief podcast](../notebooklm/podcast-brief.md) (5-10 min)

---

## Resources

- **Full discussion questions:** [Discussion Guide](../leadership/discussion-guide.md)
- **Architecture worksheet:** [Team Independence Assessment](architecture-team-independence.md)
- **Security checklist:** [Shift-Left Security Planning](security-shift-left.md)

---

**Bring this completed guide to Meeting 3 to track your progress!**
