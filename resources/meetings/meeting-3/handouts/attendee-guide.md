# Meeting 3 Attendee Guide

**Management, Product Development & Sustainability**

**Week 5 | Chapters 7-10 | 1 Hour**

_Print this guide and bring to the meeting_

---

## Meeting Overview

Today we explore:
- The 3 Lean management practices that drive high performance
- How product development with small batches and customer feedback accelerates learning
- Why deployment pain signals process problems and how to fix them
- What actually prevents burnout (hint: not individual resilience training)
- The 5 factors that drive employee satisfaction and engagement

---

## Key Question for Today

> **"How could we apply Lean principles like limiting WIP and visualizing work to not only improve our delivery flow but also directly reduce 'deployment pain' and burnout, making our work more sustainable and satisfying?"**

---

## The 3 Lean Management Practices

### 1. Limiting Work-in-Progress (WIP)

**Why it matters:** Reduces overload, context switching, and helps locate bottlenecks

**Your team:**
- Current WIP per person: _______
- How many projects are you juggling right now? _______
- When did you last finish something completely? _____________

**Benefits of WIP limits:**
- Focus the team on fewer things
- Reduce context switching costs
- Make bottlenecks visible faster
- Increase throughput by reducing multitasking

**What would happen if you limited WIP to 2-3 items per person?**

________________________________________________________________

________________________________________________________________

---

### 2. Visualizing Work

**Practice:** Use visual displays (dashboards, boards) to monitor quality, work status, and blockers

**Your team:**
- Can everyone see all work in progress?
- Can you identify bottlenecks at a glance?
- Are quality metrics visible to the team?

**What's visible:**
- Work items and their status
- Who's working on what
- Blockers and dependencies
- Quality metrics

**What's NOT visible currently:**

________________________________________________________________

________________________________________________________________

**How would better visibility help?**

________________________________________________________________

________________________________________________________________

---

### 3. Feedback from Production

**Practice:** Comprehensive monitoring and observability to understand system health

**Your team's monitoring:**
- We have dashboards showing system health
- Alerts trigger BEFORE failures occur (proactive)
- We can debug production issues without redeploying
- Monitoring data informs business decisions

**Monitoring gaps:**

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

**Key Stat:** AWS detects **78%** of incidents proactively through automation and monitoring.

---

## Change Approval Processes: The Shocking Truth

### Research Findings

**CRITICAL FINDING:** Change Approval Boards (CABs) are **worse than having no approval process at all**.

**CABs are negatively correlated with:**
- Lead time (slower)
- Deployment frequency (fewer deployments)
- Time to restore service (slower recovery)

**CABs have NO correlation with:**
- Change fail rate (don't improve stability)

### The Performance Ranking

**From Best to Worst:**
1. No approval process OR peer review only = **HIGHEST performance**
2. Only high-risk changes require external approval = Moderate performance
3. All changes require CAB approval = **LOWEST performance**

### Your Organization's Process

**Check your current approval process:**
- All changes require external approval (CAB or manager)
- Only high-risk changes require external approval
- Peer review only (pair programming or code review)
- No approval process

**If you have CABs:**
- Meeting frequency: _____________________
- Average delay: _____________________
- Last time CAB caught a real issue: _____________________

**Lightweight alternatives:**
- Pair programming
- Intrateam code review
- Automated pipeline gates (tests, security scans)
- Post-deployment review and learning

**What would it take to eliminate CABs?**

________________________________________________________________

________________________________________________________________

---

## Product Development: Customer Feedback & Small Batches

### Customer Feedback Loops

**Key Practice:** Actively seek customer feedback and incorporate it into product design

**Your team:**
- How often do you interact with customers? _________________
- How long until customer feedback reaches developers? _______
- Recent example of feedback changing your work:

________________________________________________________________

________________________________________________________________

**Benefits of tight feedback loops:**
- Make adjustments based on actual economic value
- Improve efficiency and urgency
- Orders of magnitude more important in product development than manufacturing

---

### Working in Small Batches

**Definition:** Teams slice work into pieces completable in **< 1 week**

**CRITICAL RESEARCH FINDING:** "There is a **near quadratic growth** of the risk associated with a deployment as batch size increases."

**Why Small Batches Reduce Risk:**
- Single feature per release = easier to identify problems
- Simpler rollback decisions
- Shorter cycle times
- Lower failure rates
- Faster feedback

**Your current batch size:**
- Typical deployment includes how many changes/features? _______
- How long from starting a feature to deploying it? ___________

**If you reduced batch size to < 1 week:**

What would need to change? ________________________________________

________________________________________________________________

What risks would decrease? ________________________________________

________________________________________________________________

---

### Key Statistics: Time Allocation

Organizations **with** Continuous Delivery:
- **49%** of time on new work
- Less time on unplanned work and rework

Organizations **without** Continuous Delivery:
- **38%** of time on new work
- **22% MORE** time on unplanned work/rework

**Your team's time allocation (estimate):**
- New features: ______%
- Unplanned work/firefighting: ______%
- Technical debt: ______%
- Meetings: ______%

---

## Deployment Pain: The Canary in the Coal Mine

### What is Deployment Pain?

**Definition:** The fear and anxiety engineers feel when pushing code to production

**What it signals:**
- Poor technical practices
- Lack of automation
- Low confidence in changes
- Brittle systems

### Your Deployment Experience

**Rate your last deployment:**

**Anxiety level (1-10):** _____

**Why?** ________________________________________________________

________________________________________________________________

**What made it painful?**
- Manual steps required
- Unclear rollback procedure
- Poor monitoring/observability
- Coordination with multiple teams
- Weekend/off-hours timing required
- Other: ____________________________________________________

### The Solution

**"If it hurts, do it more often"** - This forces investment in:
- Automation
- Better testing
- Simplified architecture
- Improved monitoring

**One thing that would reduce your deployment pain:**

________________________________________________________________

________________________________________________________________

---

## Burnout: Systemic Problems Require Systemic Solutions

### The Research

**SHOCKING STATISTIC:** Toxic workplace behavior predicts **60%** of total global variance in burnout symptoms and intent to leave.

**Key Finding:** Interventions targeting only individuals are **far less likely** to have sustainable impact than **organizational-level systemic solutions**.

### What Contributes to Burnout?

Check what you experience:
- Feeling always on call
- Unfair treatment
- Unreasonable workload
- Low autonomy
- Lack of social support
- Work doesn't align with values

### Manager Actions That Prevent Burnout

**What managers should do:**

1. **Foster respectful, supportive environment**
   - Learning from failures, not blame
   - Psychological safety to speak up

2. **Communicate strong sense of purpose**
   - Connect work to organizational mission
   - Explain the "why" behind decisions

3. **Invest in employee development**
   - Training opportunities
   - Career growth support

4. **Remove blockers and impediments**
   - Ask: "What's preventing you from succeeding?"
   - Fix those things

5. **Give space to experiment and learn**
   - Slack time for innovation
   - Permission to try new approaches

**What your manager does well:**

________________________________________________________________

**What could improve:**

________________________________________________________________

---

## Employee Satisfaction: The 5 Key Factors

### What Drives Job Satisfaction

**1. Control and Autonomy**
Your level of control over your work (1-10): _____

What would increase autonomy? ____________________________________

### **2. Clear Vision and Goals**
Do you understand where the organization is going? Yes / Somewhat / No

Connection between your work and company goals: __________________

________________________________________________________________

### **3. Environment for Experimentation and Learning**
- We can experiment without fear of failure
- Learning resources are available
- Taking risks is supported

**Recent experiment your team tried:**

________________________________________________________________

### **4. Diversity in Teams**
- Multiple perspectives represented
- Cognitive diversity valued
- Inclusive environment

**How diversity helps your team:**

________________________________________________________________

### **5. Connection to Products and Customers**
- We see impact of our work on customers
- Direct customer interaction happens
- Customer feedback reaches us quickly

**When did you last interact with a customer?** __________________

---

## Discussion Notes

Use this space to capture key points during discussion:

**Insights about Lean management (WIP, visualization, feedback):**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Change approval process observations:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Small batches and deployment risk:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Burnout contributors and solutions:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Employee satisfaction factors:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**Questions to explore further:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

---

## Action Items (My Personal Commitments)

### Before Meeting 4 (Week 7), I will:

** Experiment with WIP limits:**

My WIP limit: _____ items at a time

How I'll track it: _______________________________________________

Expected benefits: ______________________________________________

** Track deployment pain:**

| Deployment Date | Anxiety (1-10) | What Made It Painful | What Would Help |
|----------------|----------------|---------------------|----------------|
|                |                |                     |                |
|                |                |                     |                |
|                |                |                     |                |

** Identify one systemic burnout contributor and propose solution:**

Contributor: ____________________________________________________

________________________________________________________________

Systemic solution (not individual training): ___________________

________________________________________________________________

________________________________________________________________

** Gather customer feedback:**

Who I'll talk to: _______________________________________________

Questions I'll ask: _____________________________________________

________________________________________________________________

How I'll share with team: _______________________________________

---

## Key Takeaways

**Most important thing I learned today:**

________________________________________________________________

________________________________________________________________

________________________________________________________________

**One practice I'll implement:**

________________________________________________________________

________________________________________________________________

**One systemic problem I'll address:**

________________________________________________________________

________________________________________________________________

**One question I still have:**

________________________________________________________________

________________________________________________________________

---

## Key Statistics from Chapters 7-10

### Time Allocation
- Organizations with CD: **49%** time on new work
- Organizations without CD: **38%** time on new work
- High performers: **22%** less time on unplanned work

### Risk and Batch Size
- Risk grows **near quadratic** with batch size
- Small batches (< 1 week) dramatically reduce deployment risk

### Burnout
- Toxic workplace: **60%** of burnout variance
- Systemic solutions > individual interventions

### Change Approval
- CABs: Negatively correlated with performance
- CABs: NO improvement in stability
- Peer review: Highest performance

### Proactive Monitoring
- AWS example: **78%** of incidents detected proactively

---

## Myths Busted in Chapters 7-10

### Myth: CABs improve stability
**Reality:** CABs are negatively correlated with performance and have NO correlation with stability. They're worse than having no approval process.

### Myth: Larger batches are more efficient
**Reality:** Risk grows "near quadratic" with batch size. Small batches (< 1 week) reduce risk exponentially and enable faster feedback.

### Myth: Individual resilience training solves burnout
**Reality:** Toxic workplace predicts 60% of burnout variance. Systemic organizational solutions are far more effective than individual interventions.

### Myth: Deployment pain is unavoidable
**Reality:** Deployment pain signals poor technical practices. Solution: deploy more frequently to force investment in automation and testing.

---

## Prepare for Meeting 4

**Chapters to read:** 11, 16, and Conclusion (Leaders and Managers, High-Performance Leadership case study, transformation wrap-up)

**Preview question:** _What single supportive behavior could our leaders adopt to best enable team experimentation and a generative culture?_

**Think about:** The 5 characteristics of transformational leadership and how they show up (or don't) in your organization.

**Optional prep:** Listen to [NotebookLM Brief podcast](../notebooklm/podcast-brief.md) (5-10 min)

---

## Resources

- **Full discussion questions:** [Discussion Guide](../leadership/discussion-guide.md)
- **WIP tracking template:** [Work-in-Progress Tracker](wip-limits-tracker.md)
- **Burnout assessment:** [Team Sustainability Checklist](team-sustainability-checklist.md)
- **Customer feedback template:** [Feedback Loop Mapping](customer-feedback-template.md)

---

**Bring this completed guide to Meeting 4 to track your progress!**
