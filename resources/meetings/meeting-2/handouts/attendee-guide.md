# Meeting 2 Attendee Guide
**Technical Excellence & Continuous Delivery** | Week 3 | Chapters 4-6 | 1 Hour

## Key Question
> **"Which of our current architectural or security practices create the most friction and dependencies for our teams, and what would it take to shift from approval-based safety to automation-based confidence?"**

## The 8 Continuous Delivery Capabilities

| Capability | Your Team Status | What's Missing/Blocking? |
|------------|------------------|-------------------------|
| **1. Version Control** | ⬜ Code ⬜ Config ⬜ Infrastructure ⬜ Build scripts | ________________ |
| **2. Deployment Automation** | Manual steps: _____ Most painful: _____________ Time: _____ | ________________ |
| **3. Continuous Integration** | ⬜ Triggers ⬜ Tests ⬜ <10min ⬜ Fix immediately | ________________ |
| **4. Trunk-Based Dev** | Branch life: ⬜ <1day ⬜ 1-7d ⬜ 1-4wk ⬜ >1mo Active: _____ | ________________ |
| **5. Test Automation** | % automated: _____ Runtime: _____ ⬜ Reliable ⬜ Flaky | ________________ |
| **6. Test Data Mgmt** | ⬜ Dev ⬜ Staging ⬜ Automated ⬜ No manual setup | ________________ |
| **7. Shift Left Security** | When: ⬜ Plan ⬜ Dev ⬜ Gate ⬜ Never   Auto: ⬜ None ⬜ Some ⬜ Most | ________________ |
| **8. Continuous Delivery** | ⬜ On-demand ⬜ Low-risk ⬜ Fast rollback ⬜ Confident | ________________ |

### Key Research Finding
Elite performers are **2.3x more likely** to use trunk-based development (< 3 branches, < 1 day lifespan)

## Architecture & Team Independence

| Assessment | Your Team |
|------------|-----------|
| **⬜ Deploy without coordinating with other teams** | Teams we coordinate with: 1.____________ 2.____________ 3.____________ |
| **⬜ Complete work without external communication** | Why coordination needed: 1.____________ 2.____________ 3.____________ |
| **⬜ Make design changes independently** | Architecture type: ⬜ Monolith ⬜ Microservices ⬜ Hybrid ⬜ Other: _____ |
| **⬜ Changes don't burden other teams** | **Key Finding:** Type matters less than **loose coupling** |

## Change Approval Processes: Critical Research

### Performance Ranking (Best → Worst)
1. **No approval OR peer review only** = HIGHEST performance
2. **Only high-risk changes need external approval** = Moderate
3. **All changes require CAB approval** = LOWEST performance

### Shocking Truth About CABs
**Negatively correlated with:** Lead time (slower) | Deployment frequency (fewer) | Recovery time (slower)
**NO correlation with:** Change fail rate (don't improve stability)
**Conclusion:** Having a CAB is **worse than having no approval process**

### Your Organization

| Current Process | Details |
|----------------|---------|
| ⬜ All changes need CAB/manager approval | Meeting freq: _____ Delay: _____ Value: _____________ |
| ⬜ Only high-risk need external approval | |
| ⬜ Peer review only | |
| ⬜ No approval process | |

**Lightweight alternatives:** ⬜ Peer review ⬜ Pair programming ⬜ Automated gates ⬜ Post-deploy review

## Key Statistics

| Metric | Impact |
|--------|--------|
| **Deployment frequency** | High performers: **46x** more than low |
| **Time on new work** | With CD: **49%** vs. Without: **38%** |
| **Unplanned work** | High performers: **22%** less time |
| **Branch strategy** | Elite: **<3 branches, <1 day** Top: **1,000x** more deployments |
| **Approval** | Peer review = best | CABs = worst for all metrics |

## Discussion Notes

| Topic | Key Points |
|-------|------------|
| **CD practices** | _____________________________________________ |
| **Architectural coupling** | _____________________________________________ |
| **Change approval** | _____________________________________________ |
| **Security integration** | _____________________________________________ |

## Action Items (Before Meeting 3 - Week 5)

| Action | Details |
|--------|---------|
| **⬜ Document deployment & identify automation** | _____________________________________________ |
| **⬜ Map architectural dependencies** | Team: ____________ Why: ____________ Type: ____________ |
| **⬜ Experiment with one CD practice** | Practice: ____________ Measure: ____________ Timeline: _____ to _____ |
| **⬜ Observe change approval bottlenecks** | Date: _____ Change: ____________ Time: _____ Bottleneck: ____________ |

## Myths Busted

| Myth | Reality |
|------|---------|
| Long-lived feature branches improve quality | Elite: branches <1 day. Long branches increase risk |
| CABs improve stability | Negatively correlated with performance, NO correlation with stability |
| Microservices required for high performance | Type matters less than loose coupling. Monoliths can be high-performing |
| Security must be gate before production | 70%+ shift left successfully. Automated security in CI/CD is faster |

## Key Takeaways
**Most important learning:** ________________________________________________________________
**One practice I'll implement:** ________________________________________________________________
**One thing I'll stop doing:** ________________________________________________________________

## Prepare for Meeting 3
**Chapters 7-10:** Management, Product Development, Sustainability, Employee Satisfaction
**Preview question:** _What WIP limits would reveal bottlenecks, and how do we prevent burnout while improving performance?_
**Optional:** [NotebookLM Brief podcast](../notebooklm/podcast-brief.md) (5-10 min)

## Resources
[Discussion Guide](../leadership/discussion-guide.md) | [Architecture Worksheet](architecture-team-independence.md) | [Security Checklist](security-shift-left.md)
