# Meeting 3 Attendee Guide
**Management, Product Development & Sustainability** | Week 5 | Chapters 7-10 | 1 Hour

## Key Question
> **"Given CABs are negatively correlated with performance AND show zero stability improvement, and toxic workplace predicts 60% of burnout variance, how could we apply Lean principles (limiting WIP, visualizing work) to reduce deployment pain (risk grows near-quadratically with batch size) and address burnout through systemic solutions?"**

## The 3 Lean Management Practices

| Practice | Your Team | What Would Help? |
|----------|-----------|------------------|
| **Limiting WIP** | Current WIP/person: _____ Projects juggling: _____ Last finish: _____ | If WIP limited to 2-3: ________________ |
| **Visualizing Work** | ⬜ All WIP visible ⬜ Bottlenecks at glance ⬜ Quality visible | Not visible: ________________ |
| **Feedback from Production** | ⬜ Health dashboards ⬜ Proactive alerts ⬜ Debug w/o redeploy ⬜ Informs business | Gaps: 1.______ 2.______ 3.______ |

**Key Stat:** AWS detects **78%** of incidents proactively through automation and monitoring.

## Change Approval: The Shocking Truth

### Performance Ranking (Best → Worst)
1. **No approval OR peer review only** = HIGHEST performance
2. **Only high-risk need external approval** = Moderate
3. **All changes require CAB** = LOWEST performance

### CABs: The Research
**Negatively correlated:** Lead time (slower) | Deployment freq (fewer) | Recovery time (slower)
**NO correlation:** Change fail rate (don't improve stability)
**Conclusion:** CABs are **worse than no approval process**

| Your Process | Details |
|--------------|---------|
| ⬜ All changes need CAB | Freq: _____ Delay: _____ Last caught issue: _____ |
| ⬜ Only high-risk | What would it take to eliminate CABs? ________________ |
| ⬜ Peer review only | |
| ⬜ No approval | |

**Alternatives:** Pair programming | Intrateam review | Automated gates | Post-deploy review

## Product Development

### Customer Feedback
**How often interact:** _____ **Feedback reach time:** _____ **Recent example:** ________________

### Small Batches (<1 week)
**CRITICAL:** Risk grows **near quadratic** with batch size
**Benefits:** Single feature = easier ID problems | Simple rollback | Shorter cycles | Lower failures

| Your Team | If Reduced to <1 week |
|-----------|-----------------------|
| Changes per deployment: _____ | What would change? ________________ |
| Feature start → deploy: _____ | What risks decrease? ________________ |

### Time Allocation

| | With CD | Without CD | Your Team |
|---|---------|------------|-----------|
| **New work** | 49% | 38% | ____% |
| **Unplanned/firefight** | Lower | 22% MORE | ____% |
| **Technical debt** | | | ____% |
| **Meetings** | | | ____% |

## Deployment Pain

**Definition:** Fear and anxiety when pushing to production
**Signals:** Poor practices | Lack automation | Low confidence | Brittle systems

**Your Last Deployment:**
**Anxiety (1-10):** _____ **Why:** ________________________________________________________________
**What made it painful:** ⬜ Manual steps ⬜ Unclear rollback ⬜ Poor monitoring ⬜ Multi-team coordination ⬜ Off-hours ⬜ Other: ______

**Solution:** "If it hurts, do it more often" forces investment in automation, testing, architecture, monitoring
**One thing to reduce pain:** ________________________________________________________________

## Burnout: Systemic Problems Need Systemic Solutions

**SHOCKING STAT:** Toxic workplace predicts **60%** of burnout variance and intent to leave
**Key Finding:** Individual interventions far less effective than **organizational systemic solutions**

### Burnout Contributors (Check What You Experience)
⬜ Always on call | ⬜ Unfair treatment | ⬜ Unreasonable workload | ⬜ Low autonomy | ⬜ Lack social support | ⬜ Values misalignment

### Manager Actions That Prevent Burnout
1. **Foster respectful environment** - Learning from failures, psychological safety
2. **Communicate strong purpose** - Connect work to mission, explain "why"
3. **Invest in development** - Training, career growth
4. **Remove blockers** - Ask "What prevents success?" and fix it
5. **Give space to experiment** - Slack time, try new approaches

**Your manager does well:** ________________________________________________________________
**Could improve:** ________________________________________________________________

## Employee Satisfaction: 5 Key Factors

| Factor | Your Rating (1-10) | What Would Help? |
|--------|-------------------|------------------|
| **1. Control & Autonomy** | _____ | ________________ |
| **2. Clear Vision & Goals** | _____ | Connection to company goals: ________________ |
| **3. Experiment & Learn** | _____ | Recent experiment: ________________ |
| **4. Diversity in Teams** | _____ | How diversity helps: ________________ |
| **5. Customer Connection** | _____ | Last customer interaction: _____ |

## Discussion Notes

| Topic | Key Points |
|-------|------------|
| **Lean management** | _____________________________________________ |
| **Change approval** | _____________________________________________ |
| **Small batches & risk** | _____________________________________________ |
| **Burnout solutions** | _____________________________________________ |
| **Satisfaction factors** | _____________________________________________ |

## Action Items (Before Meeting 4 - Week 7)

| Action | Details |
|--------|---------|
| **⬜ Experiment with WIP limits** | Limit: _____ Track: ____________ Benefits: ____________ |
| **⬜ Track deployment pain** | Date: _____ Anxiety: _____ Painful: ____________ Help: ____________ |
| **⬜ Identify systemic burnout contributor** | Contributor: ____________ Solution (not individual): ____________ |
| **⬜ Gather customer feedback** | Who: ____________ Questions: ____________ Share: ____________ |

## Key Statistics

| Finding | Stat |
|---------|------|
| **Time allocation** | With CD: **49%** new work vs. **38%** without | **22%** less unplanned work |
| **Batch size risk** | Risk grows **near quadratic** | Small batches (<1 week) dramatically reduce risk |
| **Burnout** | Toxic workplace: **60%** of variance | Systemic > individual solutions |
| **CABs** | Negatively correlated with all performance | NO correlation with stability |
| **Proactive monitoring** | AWS: **78%** incidents detected proactively |

## Myths Busted

| Myth | Reality |
|------|---------|
| CABs improve stability | Negatively correlated with performance, NO stability improvement |
| Larger batches more efficient | Risk grows near quadratic. Small (<1 week) reduce risk exponentially |
| Individual resilience solves burnout | Toxic workplace = 60% variance. Need systemic solutions |
| Deployment pain unavoidable | Signals poor practices. Deploy more to force automation investment |

## Key Takeaways
**Most important learning:** ________________________________________________________________
**One practice I'll implement:** ________________________________________________________________
**One systemic problem I'll address:** ________________________________________________________________

## Prepare for Meeting 4
**Chapters 11, 16, Conclusion:** Leaders, High-Performance Leadership case, transformation wrap-up
**Preview question:** _"What is the single smallest change we can make that would make our next deployment just a tiny bit less painful?"_ ← THE culminating question (start small, focus on pain, act into culture, measure and iterate)
**Optional:** [NotebookLM Brief podcast](../notebooklm/podcast-brief.md) (5-10 min)

## Resources
[Discussion Guide](../leadership/discussion-guide.md) | WIP Tracker (lean-management-practices.md) | Burnout Assessment (deployment-pain-burnout.md) | Customer Feedback Template (employee-satisfaction.md)
