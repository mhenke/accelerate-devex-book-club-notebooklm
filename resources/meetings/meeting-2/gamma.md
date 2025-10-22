# Meeting 2: Technical Excellence Presentation

Chapters 4-6 Overview

- Chapter 4: Technical Practices - Five key practices that distinguish high performers
- Chapter 5: Architecture - Loosely coupled architecture enables team independence
- Chapter 6: Integrating Infosec - Security integrated throughout delivery lifecycle
- Focus on continuous delivery, trunk-based development, and shift-left security
- Conway's Law: system design reflects communication structure

---

The Wall of Confusion

- Traditional organizations create conflicting incentives between dev and ops
- Development optimizes for throughput, Operations optimizes for stability
- Change Advisory Boards (CABs) signal lack of technical practices for safe deployment
- Manual change approval processes slow delivery without improving stability
- The wall must be broken down, not reinforced with process

---

Five Key Technical Practices

- Version Control: Everything in source control (code, config, scripts)
- Test Automation: Developers create and maintain automated tests
- Trunk-Based Development: Short-lived branches (less than one day)
- Continuous Integration: Regular check-ins trigger automated build and test
- Shift-Left Security: Build security into delivery process from the beginning

---

Continuous Delivery Impact

- 2x more likely to exceed organizational goals
- 50% less time spent on unplanned work and rework
- 22% less time spent on manual work
- 29% more time spent on new work
- Teams spend more time creating value, less time fighting fires

---

Architecture for Team Independence

- Loosely coupled systems: Teams deploy on demand without dependencies
- Services are testable: Most testing without integrated environment
- Teams choose tools: Appropriate tech stack without constraints
- Conway's Law in action: Organize teams to create desired architecture
- Architecture enables autonomy, autonomy drives performance

---

Shift-Left Security Practices

- Security reviews conducted for all major features
- Information security team provides feedback during development
- Application security testing integrated into deployment pipeline
- Security teams use shared repositories and collaborate on concerns
- Security and speed are NOT in conflict - both improve together

---

Discussion Questions

- Which of the five key practices is your team strongest/weakest at?
- How independently can your team deploy? What dependencies prevent on-demand deployment?
- How does your team structure influence your system architecture?
- Where do security concerns get raised? How could you shift left?

---

Action Items for Next Meeting

- Read Chapters 7-10 (Management, Product Development, Sustainability)
- Identify one manual process to automate (testing, deployment, or configuration)
- Document one key dependency that prevents independent deployment
- Calculate your team's "blast radius" - how many teams affected by your changes?
- Review architecture and security handouts
