# Meeting 2: Technical Excellence Presentation

Chapters 4-6 Overview

- Chapter 4: Technical Practices - CD capabilities and their impact
- Chapter 5: Architecture - Loosely coupled systems and team autonomy
- Chapter 6: Integrating Infosec - Security integrated throughout delivery lifecycle
- Focus: Continuous Delivery as "the engine that drives all of this"
- Key insight: "Act your way into a better culture" through technical practices
- Conway's Law: Evolve team structure to match desired architecture

---

Meeting 2 Key Question

**"Which of our current architectural or security practices create the most friction and dependencies for our teams, and what is the smallest technical change—like improving test automation or adopting trunk-based development—we could make to move toward more independent, 'shift-left' work?"**

This question focuses on identifying concrete, actionable changes to reduce team dependencies and enable faster, safer delivery.

---

The Wall of Confusion

- Traditional organizations create conflicting incentives between dev and ops
- Development optimizes for throughput, Operations optimizes for stability
- Change Advisory Boards (CABs) signal lack of technical practices for safe deployment
- Manual change approval processes slow delivery without improving stability
- The wall must be broken down, not reinforced with process

---

Continuous Delivery: Principles & Capabilities

**Five Principles:**
Build quality in | Work in small batches | Automate repetition | Pursue improvement | Everyone responsible

**Eight Key Capabilities:**
- Version Control (everything: code, config, infrastructure, scripts)
- Deployment Automation (repeatable, reliable processes)
- Continuous Integration (automated build & test on check-in)
- Trunk-Based Development (branches < 1 day)
- Test Automation (comprehensive, multiple levels)
- Test Data Management (automated provisioning)
- Shift-Left Security (integrated from start)
- On-Demand Delivery (low-risk, fast rollback)

---

Continuous Delivery Impact

- 2x more likely to exceed organizational goals
- 50% less time spent on unplanned work and rework
- 22% less time spent on manual work
- 29% more time spent on new work
- High performers: 46x more deployments, 440x faster lead time
- Teams spend more time creating value, less time fighting fires

---

Change Approval Processes: Critical Research

**Performance Ranking (Best → Worst):**
1. No approval OR peer review only = HIGHEST performance
2. Only high-risk changes need external approval = Moderate
3. All changes require CAB approval = LOWEST performance

**Shocking Truth About CABs:**
- Negatively correlated with: Lead time (slower), deployment frequency (fewer), recovery time (slower)
- NO correlation with: Change failure rate (don't improve stability)
- Conclusion: Having a CAB is worse than having no approval process
- Lightweight alternatives: Peer review, pair programming, automated gates

---

Architecture & Security: Enabling Independence

**Loosely Coupled Architecture (Ch 5):**
- Teams deploy on demand without coordination
- Services testable without integrated environments
- Teams choose appropriate tools independently
- Conway's Law Inverse: Organize teams to create desired architecture
- Architecture type matters less than loose coupling

**Shift-Left Security (Ch 6):**
- Security reviews during development, not at gates
- Security testing integrated into deployment pipeline
- 70%+ successfully shift security left into CI/CD
- **Key Finding:** Security and speed improve together - NOT in conflict

---

Act Your Way into a Better Culture

- Technical practices create better interactions between teams
- Better interactions create generative culture patterns
- You don't need to change culture first - culture follows practices
- Implementing CD, trunk-based dev, and automation improves Westrum culture scores
- Tool autonomy and architectural independence drive satisfaction and performance

---

Discussion Questions

- Which of the eight CD capabilities is your team strongest/weakest at?
- How independently can your team deploy? What dependencies prevent on-demand deployment?
- Does your organization use CABs? What would it take to move to peer review?
- How does your team structure influence your system architecture (Conway's Law)?
- Where do security concerns get raised? How could you shift left?
- What's the smallest technical change to reduce friction and enable independence?

---

Action Items for Next Meeting

- Read Chapters 7-10 (Management, Product Development, Sustainability)
- Document your current deployment process and identify one automation opportunity
- Map architectural dependencies that prevent independent deployment
- Observe change approval bottlenecks and calculate delay time
- Calculate your team's "blast radius" - how many teams affected by your changes?
- Experiment with one CD practice (trunk-based dev, test automation, etc.)
