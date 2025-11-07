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

Five Continuous Delivery Principles

- Build Quality In: Start with quality rather than inspecting it later
- Work in Small Batches: Break tasks into manageable, testable units
- Automate Repetitive Tasks: Free humans for creative problem-solving
- Pursue Continuous Improvement: Regular reflection and experimentation
- Everyone is Responsible: Shared ownership of delivery outcomes

---

Eight Continuous Delivery Capabilities

- Version Control: Everything in source control (code, config, infrastructure, scripts)
- Deployment Automation: Automated, repeatable deployment processes
- Continuous Integration: Regular check-ins trigger automated build and test
- Trunk-Based Development: Short-lived branches (less than one day)
- Test Automation: Comprehensive automated testing at multiple levels
- Test Data Management: Automated test data provisioning
- Shift-Left Security: Build security into delivery process from the beginning
- Continuous Delivery: On-demand, low-risk deployments with fast rollback

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

Architecture for Team Independence

- Loosely coupled systems: Teams deploy on demand without coordination
- Services are testable: Most testing without integrated environment
- Teams choose tools: Appropriate tech stack without constraints
- Conway's Law Inverse: Organize teams to create desired architecture
- Architecture type matters less than loose coupling
- Independence enables experimentation and rapid iteration

---

Shift-Left Security Practices

- Security reviews conducted for all major features (during development, not at gates)
- Information security team provides feedback and collaboration throughout
- Application security testing integrated into deployment pipeline
- Security teams use shared repositories and automated scanning tools
- **Key Finding:** Security and speed are NOT in conflict - both improve together
- 70%+ of organizations successfully shift security left into CI/CD

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
