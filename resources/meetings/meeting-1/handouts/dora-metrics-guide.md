# The DORA Metrics Guide: What to Measure (and What to Avoid)

**A practical guide to choosing metrics that drive improvement**

---

## 📊 The Critical Distinction

Not all metrics are created equal. The wrong metrics create dysfunction, while the right metrics reveal opportunities for improvement.

**The fundamental principle:** Measure system health and flow, not individual performance.

---

## ✅ Good Metrics: System Health & Flow

These metrics diagnose system issues and reveal opportunities for improvement without blaming individuals.

### The Four DORA Metrics

#### 1. Deployment Frequency
**What it measures:** How often you deploy code to production

**Why it matters:**
- Reflects your ability to deliver value continuously
- High frequency indicates smooth, low-risk processes
- Enables faster feedback and learning

**Benchmarks:**
- **Elite:** Multiple deploys per day
- **High:** Between once per day and once per week
- **Medium:** Between once per week and once per month
- **Low:** Fewer than once per month

**How to measure:**
- Count production deployments over a period (e.g., last 30 days)
- Track via deployment logs, CI/CD tools, or release management systems

---

#### 2. Lead Time for Changes
**What it measures:** Time from code committed to code successfully running in production

**Why it matters:**
- Reflects efficiency of your entire delivery pipeline
- Short lead times enable faster response to business needs
- Long lead times indicate process bottlenecks

**Benchmarks:**
- **Elite:** Less than one hour
- **High:** Between one day and one week
- **Medium:** Between one week and one month
- **Low:** More than one month

**How to measure:**
- Track time from first commit to production deployment
- Use version control timestamps and deployment logs
- Focus on completed work, not work in progress

---

#### 3. Time to Restore Service (MTTR)
**What it measures:** How long it takes to restore service after an incident or defect

**Why it matters:**
- Reflects your ability to respond to problems
- Fast recovery indicates good observability and automated processes
- Slow recovery indicates manual, complex remediation

**Benchmarks:**
- **Elite:** Less than one hour
- **High:** Less than one day
- **Medium:** Between one day and one week
- **Low:** More than one week

**How to measure:**
- Track from incident detection to service restoration
- Use incident management systems or monitoring tools
- Include all production-impacting incidents

---

#### 4. Change Failure Rate
**What it measures:** Percentage of deployments that cause a failure requiring remediation

**Why it matters:**
- Reflects quality of your testing and deployment processes
- Low rate indicates effective quality gates
- High rate indicates insufficient testing or risky deployments

**Benchmarks:**
- **Elite:** 0-15%
- **High:** 16-30%
- **Medium:** 16-30%
- **Low:** 16-30%

**How to measure:**
- Track deployments that required hotfix, rollback, or emergency patch
- Calculate: (Failed deployments / Total deployments) × 100
- Define "failure" clearly (e.g., production incident, rollback, hotfix)

---

### Additional Good Metrics

Beyond the four DORA metrics, these system-level metrics also drive improvement:

#### Flow Time Through System
- Time from work item creation to customer delivery
- Reveals process bottlenecks and handoffs
- Enables system-level optimization

#### Feedback Loop Duration
- Time from action to feedback (e.g., commit to test results)
- Faster feedback enables faster learning
- Slow feedback indicates automation opportunities

#### Work in Progress (WIP) Limits
- Number of items actively being worked on
- High WIP indicates context switching and delays
- Lower WIP improves focus and flow

#### Cycle Time
- Time spent actively working on an item
- Excludes waiting time, focuses on work time
- Short cycle time indicates small batches and efficiency

---

## ❌ Bad Metrics: Individual Performance & Vanity

These metrics grade individuals, create perverse incentives, and encourage gaming the system. **Avoid these at all costs.**

### Why These Metrics Are Harmful

**They focus on individuals instead of systems:**
- Create competition instead of collaboration
- Encourage gaming and optimization for the metric
- Miss systemic problems that only team-level metrics reveal

**They measure outputs instead of outcomes:**
- Quantity over quality
- Activity over value
- Busy-ness over effectiveness

---

### Common Bad Metrics to Avoid

#### Lines of Code Written
**The problem:**
- Rewards verbosity over clarity
- Encourages copy-paste and code bloat
- Ignores that the best code is often the shortest

**What it misses:**
- Code quality, readability, maintainability
- Whether the code solves the right problem
- Refactoring and deletion are valuable work

---

#### Number of Commits
**The problem:**
- Encourages tiny, frequent commits for metrics
- Rewards activity over thoughtful work
- Creates noise in version control history

**What it misses:**
- Quality of changes
- Whether commits are logically organized
- Team collaboration and pairing

---

#### Hours Worked / Utilization
**The problem:**
- Rewards long hours over sustainable pace
- Encourages burnout and presenteeism
- Ignores that tired developers make mistakes

**What it misses:**
- Quality of work produced
- Creative thinking time
- Health and sustainability

---

#### Story Points Completed
**The problem:**
- Teams inflate estimates to look productive
- Encourages gaming through point inflation
- Ignores value delivered to customers

**What it misses:**
- Whether work solved customer problems
- Quality of implementation
- Learning and improvement

---

#### Code Coverage Percentage
**The problem:**
- Encourages shallow tests that hit lines without validating behavior
- Creates false sense of quality
- Becomes a checkbox instead of a quality practice

**What it misses:**
- Test quality and meaningfulness
- Critical paths vs. trivial code
- Integration and system-level issues

---

#### Velocity Trends
**The problem:**
- Teams optimize for velocity instead of value
- Encourages inflating estimates over time
- Creates pressure to maintain unsustainable pace

**What it misses:**
- Customer value delivered
- Technical debt incurred
- Team sustainability

---

## 🎯 Choosing the Right Metrics: Key Principles

### 1. Measure Systems, Not People
Focus on process health, not individual productivity. Good metrics reveal system constraints and improvement opportunities.

**Good:** "Our deployment process takes 4 hours—how can we automate it?"
**Bad:** "Bob only committed 5 times this week—why so low?"

---

### 2. Measure Outcomes, Not Outputs
Focus on value delivered, not activity performed. Outcomes reflect customer impact; outputs reflect busy-ness.

**Good:** "How quickly can we deliver value to customers?"
**Bad:** "How many story points did we complete?"

---

### 3. Measure Flow, Not Inventory
Focus on throughput and cycle time, not backlog size. Flow metrics reveal bottlenecks; inventory metrics just measure accumulation.

**Good:** "How long does work sit in review?"
**Bad:** "How many tickets are in the backlog?"

---

### 4. Measure at the Team Level
Focus on team performance, not individual comparisons. Teams collaborate; individuals shouldn't compete.

**Good:** "Our team's deployment frequency is once per week"
**Bad:** "Comparing each developer's commit counts"

---

### 5. Use Metrics for Learning, Not Judging
Frame metrics as experiments and learning tools. Ask "what can we learn?" not "who is responsible?"

**Good:** "What happened when lead time increased last month?"
**Bad:** "Who caused the lead time increase?"

---

## 📋 Self-Assessment: Are Your Metrics Healthy?

Before implementing any metric, ask these questions:

### ✅ Healthy Metrics

- [ ] Does this metric reveal system bottlenecks?
- [ ] Can teams improve this metric through collaboration?
- [ ] Does this metric encourage quality and sustainability?
- [ ] Is this metric measured at the team or system level?
- [ ] Does this metric focus on customer value?
- [ ] Can this metric be gamed? If so, have we mitigated that?

### ⚠️ Unhealthy Metrics

- [ ] Does this metric grade individuals?
- [ ] Could this metric encourage gaming or shortcuts?
- [ ] Does this metric reward activity over outcomes?
- [ ] Is this metric focused on outputs rather than value?
- [ ] Does this metric create competition instead of collaboration?
- [ ] Is this metric being used for performance reviews?

---

## 🛠️ Implementing Good Metrics: Practical Guidance

### Start with One Metric
Begin with the easiest DORA metric to track in your context:
- **Deployment Frequency** if you have deployment logs
- **Lead Time** if you have version control + deployment tracking
- **MTTR** if you have incident management

### Make It Visible to the Team First
- Display metrics on team dashboards
- Discuss trends in retrospectives
- Use metrics to identify experiments

### Never Use for Individual Performance
- DORA metrics are team/system metrics only
- Never include in performance reviews
- Never compare individuals

### Pair with Qualitative Discussion
- Metrics show "what" is happening
- Team discussion reveals "why" and "how to improve"
- Use metrics to start conversations, not end them

### Review and Adjust Regularly
- Are we learning from these metrics?
- Are they revealing improvement opportunities?
- Are they being gamed? If so, how can we change?

---

## 📖 Evidence from Accelerate

From "Accelerate" research across 23,000+ survey responses:

**Key findings:**
- DORA metrics distinguish high performers from low performers
- High performers excel on ALL four metrics simultaneously (no trade-offs)
- Teams that use good metrics improve continuously
- Teams that use bad metrics create dysfunction

**High performer advantages:**
- 46× more frequent deployments
- 440× faster lead time
- 170× faster recovery from incidents
- 5× lower change failure rate

**The research proves:**
- You can measure what matters
- Good metrics drive improvement
- Bad metrics drive gaming and dysfunction

---

## 🎓 Discussion Questions for Teams

### Understanding Current State
1. What metrics do we currently track? Are they system-level or individual?
2. How do we currently use metrics—for learning or for judgment?
3. Which of our current metrics drive improvement? Which drive dysfunction?

### Choosing Metrics
4. Which DORA metric would be easiest for us to start tracking?
5. What bad metrics are we currently using that we should stop?
6. How can we make metrics visible to the team for learning?

### Creating a Metrics Culture
7. How can we ensure metrics are used for improvement, not judgment?
8. What would it take to make our team feel safe discussing metric trends?
9. How can we prevent metrics from being gamed?

---

## ⚡ Key Takeaways

1. **Measure systems, not people** - Focus on process health and flow
2. **The four DORA metrics are proven** - Use them as your foundation
3. **Avoid vanity and individual metrics** - They create dysfunction
4. **Use metrics for learning** - Not judgment or performance reviews
5. **Start small and iterate** - Begin with one metric and learn

---

## 📚 Where This Fits in the Book Club

**Meeting 1:** Introduction to DORA metrics and why they matter

**Throughout all meetings:** Reference these metrics when discussing practices:
- Meeting 2: How CD practices improve DORA metrics
- Meeting 3: How lean practices improve flow and reduce burnout
- Meeting 4: How leadership enables metric improvements

---

## 🔗 Related Resources

**Assessments:**
- [DORA Metrics Template](../assessments/dora-metrics-template.md) - Start tracking your metrics
- [24 Capabilities Assessment](../assessments/24-capabilities-assessment.md) - Identify improvement areas

**Handouts:**
- [Culture Before Metrics](culture-before-metrics.md) - Why sequence matters
- [Culture Change Model](culture-change-model.md) - How practices improve culture

**Meeting Materials:**
- [Meeting 1: Foundation](../meetings/meeting-1/) - Full meeting guide
- [Meeting 2: Technical Excellence](../meetings/meeting-2/) - CD practices that improve metrics

---

## 💭 Remember

> **"The goal of measurement is to enable better conversations, not to replace conversation with numbers."**

Good metrics reveal opportunities for improvement. Bad metrics create gaming and dysfunction. Choose wisely, measure systems not people, and use metrics to enable learning and collaboration.

---

**Print this guide** and reference it whenever choosing metrics or discussing performance measurement.
