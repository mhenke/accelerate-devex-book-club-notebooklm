# DORA Metrics Baseline Template

## Purpose

This template helps you establish a baseline for the four DORA metrics and track improvement over time. These metrics are the most reliable indicators of software delivery performance according to research from *Accelerate*.

## The Four DORA Metrics

### 1. Lead Time for Changes
**How long does it take to go from code committed to code successfully running in production?**

### 2. Deployment Frequency
**How often does your team deploy code to production?**

### 3. Mean Time to Recovery (MTTR)
**How long does it generally take to restore service when a service incident occurs?**

### 4. Change Failure Rate
**What percentage of changes to production result in degraded service requiring remediation?**

---

## Establishing Your Baseline

### Instructions

1. Choose a representative time period (recommended: last 2-4 weeks)
2. Gather data from your deployment logs, incident tracking, and version control
3. Be honest and precise - this baseline helps you measure real improvement
4. If exact data isn't available, make your best estimate and note it

---

## Metric 1: Lead Time for Changes

**Definition:** Time from code commit to code running successfully in production (includes build, test, and deployment time).

### Data Collection Period
- **Start Date:** _______________
- **End Date:** _______________

### Recent Deployments

| Deployment | Commit Date/Time | Production Date/Time | Lead Time (hours) |
|------------|------------------|----------------------|-------------------|
| 1          |                  |                      |                   |
| 2          |                  |                      |                   |
| 3          |                  |                      |                   |
| 4          |                  |                      |                   |
| 5          |                  |                      |                   |
| 6          |                  |                      |                   |
| 7          |                  |                      |                   |
| 8          |                  |                      |                   |
| 9          |                  |                      |                   |
| 10         |                  |                      |                   |

### Calculations

- **Total Lead Time:** _____ hours
- **Number of Deployments:** _____
- **Average Lead Time:** _____ hours (_____ days)
- **Median Lead Time:** _____ hours (_____ days)

### Your Performance Level

- ☐ **Elite:** Less than 1 hour
- ☐ **High:** Between 1 day and 1 week
- ☐ **Medium:** Between 1 week and 1 month
- ☐ **Low:** Between 1 month and 6 months

### Notes & Context
_______________________________________________________________________________
_______________________________________________________________________________
_______________________________________________________________________________

---

## Metric 2: Deployment Frequency

**Definition:** How often your team deploys code to production or releases it to end users.

### Data Collection Period
- **Start Date:** _______________
- **End Date:** _______________
- **Number of Days:** _____

### Deployment Count

| Week | # of Production Deployments | Notes |
|------|----------------------------|-------|
| 1    |                            |       |
| 2    |                            |       |
| 3    |                            |       |
| 4    |                            |       |

### Calculations

- **Total Deployments:** _____
- **Total Days:** _____
- **Deployments per Day:** _____ (Total Deployments ÷ Total Days)
- **Deployments per Week:** _____ (Total Deployments ÷ Number of Weeks)

### Your Performance Level

- ☐ **Elite:** On-demand (multiple deploys per day)
- ☐ **High:** Between once per day and once per week
- ☐ **Medium:** Between once per week and once per month
- ☐ **Low:** Between once per month and once every 6 months

### Notes & Context
_______________________________________________________________________________
_______________________________________________________________________________
_______________________________________________________________________________

---

## Metric 3: Mean Time to Recovery (MTTR)

**Definition:** Time between when an incident is detected and when service is restored.

### Data Collection Period
- **Start Date:** _______________
- **End Date:** _______________

### Recent Incidents

| Incident | Detected Date/Time | Resolved Date/Time | Recovery Time (hours) | Severity |
|----------|-------------------|--------------------|-----------------------|----------|
| 1        |                   |                    |                       |          |
| 2        |                   |                    |                       |          |
| 3        |                   |                    |                       |          |
| 4        |                   |                    |                       |          |
| 5        |                   |                    |                       |          |
| 6        |                   |                    |                       |          |
| 7        |                   |                    |                       |          |
| 8        |                   |                    |                       |          |

### Calculations

- **Total Recovery Time:** _____ hours
- **Number of Incidents:** _____
- **Average MTTR:** _____ hours (_____ days)
- **Median MTTR:** _____ hours

### Your Performance Level

- ☐ **Elite:** Less than 1 hour
- ☐ **High:** Less than 1 day
- ☐ **Medium:** Between 1 day and 1 week
- ☐ **Low:** Between 1 week and 1 month

### Notes & Context
_______________________________________________________________________________
_______________________________________________________________________________
_______________________________________________________________________________

---

## Metric 4: Change Failure Rate

**Definition:** Percentage of changes to production that result in degraded service requiring remediation (hotfix, rollback, patch, etc.).

### Data Collection Period
- **Start Date:** _______________
- **End Date:** _______________

### Deployment Outcomes

| Deployment | Date | Success? | Required Remediation? | Type of Issue |
|------------|------|----------|----------------------|---------------|
| 1          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 2          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 3          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 4          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 5          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 6          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 7          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 8          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 9          |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |
| 10         |      | ☐ Yes ☐ No | ☐ Yes ☐ No         |               |

### Calculations

- **Total Deployments:** _____
- **Failed Deployments (requiring remediation):** _____
- **Change Failure Rate:** _____% (Failed ÷ Total × 100)

### Your Performance Level

- ☐ **Elite:** 0-15%
- ☐ **High:** 16-30%
- ☐ **Medium:** 31-45%
- ☐ **Low:** 46-60%

### Notes & Context
_______________________________________________________________________________
_______________________________________________________________________________
_______________________________________________________________________________

---

## Overall Performance Summary

### Your Current State

| Metric | Your Value | Performance Level | Elite Target |
|--------|-----------|-------------------|--------------|
| Lead Time | | | < 1 hour |
| Deployment Frequency | | | Multiple per day |
| MTTR | | | < 1 hour |
| Change Failure Rate | | | 0-15% |

### Overall Classification

Based on your metrics, your team is currently a:

- ☐ **Elite Performer** (All four metrics at elite level)
- ☐ **High Performer** (All four metrics at high or elite level)
- ☐ **Medium Performer** (Mix of medium and high performance)
- ☐ **Low Performer** (One or more metrics at low level)

---

## Analysis & Action Planning

### Strengths
**Which metric(s) are you performing best on?**
_______________________________________________________________________________
_______________________________________________________________________________

**What practices or conditions enable this performance?**
_______________________________________________________________________________
_______________________________________________________________________________

### Opportunities
**Which metric(s) need the most improvement?**
_______________________________________________________________________________
_______________________________________________________________________________

**What are the primary blockers or pain points?**
_______________________________________________________________________________
_______________________________________________________________________________

### Root Causes
**What systemic issues are affecting your metrics?**

☐ Manual deployment processes
☐ Insufficient test automation
☐ Long-lived feature branches
☐ Change approval boards (CABs)
☐ Tightly coupled architecture
☐ Poor monitoring/observability
☐ Lack of version control
☐ Inadequate test environments
☐ Other: _______________

---

## Improvement Goals

### 3-Month Goals

**Lead Time Target:** _____________________
**Deployment Frequency Target:** _____________________
**MTTR Target:** _____________________
**Change Failure Rate Target:** _____________________

### 6-Month Goals

**Lead Time Target:** _____________________
**Deployment Frequency Target:** _____________________
**MTTR Target:** _____________________
**Change Failure Rate Target:** _____________________

### 12-Month Goals

**Lead Time Target:** _____________________
**Deployment Frequency Target:** _____________________
**MTTR Target:** _____________________
**Change Failure Rate Target:** _____________________

---

## First Actions

**Based on your assessment, what are the top 3 actions you can take to improve your metrics?**

### Action 1: _____________________
**Metric it improves:** _____________________
**Owner:** _____________________
**Timeline:** _____________________

### Action 2: _____________________
**Metric it improves:** _____________________
**Owner:** _____________________
**Timeline:** _____________________

### Action 3: _____________________
**Metric it improves:** _____________________
**Owner:** _____________________
**Timeline:** _____________________

---

## Measurement Schedule

**Establish a regular cadence for measuring these metrics:**

- **Weekly Review:** _______________
- **Monthly Deep Dive:** _______________
- **Quarterly Assessment:** _______________

---

## Important Reminders

1. **Speed AND Stability:** High performers excel at BOTH tempo (lead time, deployment frequency) AND stability (MTTR, change failure rate). Don't sacrifice one for the other.

2. **Focus on Flow:** These metrics measure the flow of work from commit to customer. Optimize the system, not individual utilization.

3. **No Vanity Metrics:** Avoid measuring individual productivity (lines of code, commits, velocity). Focus on team outcomes.

4. **Culture Matters:** Without a generative culture, attempts to improve these metrics can backfire. Build psychological safety first.

5. **Capabilities Drive Metrics:** Don't try to improve metrics directly. Instead, build the 24 capabilities that enable better performance.

---

## Additional Resources

- **DORA Quick Check:** https://dora.dev/quickcheck/
- **State of DevOps Reports:** https://dora.dev/research/
- **Google Cloud DORA Metrics:** https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance

---

## Tracking Over Time

| Date | Lead Time | Deploy Freq | MTTR | Change Fail % | Notes |
|------|-----------|-------------|------|---------------|-------|
|      |           |             |      |               |       |
|      |           |             |      |               |       |
|      |           |             |      |               |       |
|      |           |             |      |               |       |
|      |           |             |      |               |       |
|      |           |             |      |               |       |
