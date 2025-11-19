# Security: Shift Left for Speed + Safety
**10-minute quick reference guide**

## 🔒 The Revolutionary Insight

**Security and speed are NOT in conflict.** Building security in from the start improves BOTH security AND delivery speed.

**Traditional "bolt-on" approach:**
- Security review at the end
- Issues found late → expensive rework
- 50% MORE time on security remediation
- Slower deployments, worse security

**Shift-left approach:**
- Security integrated throughout
- Issues caught early → cheap to fix
- 50% LESS time on security remediation
- Faster deployments, better security

---

## 📊 The Research

**Shift-left security predicts:**
- **2× better** delivery performance
- **50% faster** security issue remediation
- Higher deployment frequency with better security

---

## 🎯 Four Shift-Left Practices

### 1. Security Reviews for Major Features
**When:** Early in design phase, before coding  
**Who:** Security team + development team  
**What:** Threat modeling, security requirements  
**Not:** Approval gate at the end

### 2. Security Team Provides Feedback During Development
**How:** 
- Security champions in each team
- Security team joins standups/retros
- #security Slack channel
- Security office hours

### 3. Automated Security Testing in Pipeline
**What runs:**
- SAST (static analysis) - finds code vulnerabilities
- Dependency scanning - finds known CVEs
- Container scanning (if using containers)  
**Target:** <10 minute runtime, low false positives

### 4. Security Team Uses Shared Repositories
**Why:**
- Security sees all changes
- Security contributes code, not just reviews
- Security policies are code
- Shared responsibility

---

## 🛠️ Quick Self-Assessment (2 minutes)

**Check all that apply to YOUR team:**

### ✅ Shift-Left Indicators
- [ ] Security reviews designs before coding starts
- [ ] Developers ask security questions during development
- [ ] Automated security testing in CI/CD
- [ ] Security team sees all code changes
- [ ] Security issues fixed in same sprint

### ❌ Bolt-On Indicators
- [ ] Security review only at end
- [ ] Developers surprised by security findings
- [ ] No automated security testing
- [ ] Security issues delay releases

**If 3+ bolt-on signs:** Your security process is blocking delivery AND creating security risks

---

## 🔧 Start Shifting Left (Pick ONE)

### Option 1: Add Visibility (5 minutes)
**This week:**
1. Subscribe security team to repository notifications
2. Invite security to one planning meeting
3. Create #security Slack channel

### Option 2: Add Automation (5 minutes)
**Pick ONE tool to integrate:**
- [ ] Dependency scanning (Dependabot, Snyk)
- [ ] SAST (SonarQube, Semgrep)
- [ ] Container scanning (Trivy, Grype)

**Start with:** Warning-only mode (don't block builds yet)

### Option 3: Early Security Review (5 minutes)
**For your next major feature:**
1. Identify: What makes it "security-sensitive"?
2. Schedule: 30-min security design review BEFORE coding
3. Document: Security requirements as acceptance criteria

---

## 📋 Implementation Phases (Pick Your Starting Point)

### Phase 1: Visibility (Weeks 1-4)
- [ ] Security team subscribed to repos
- [ ] Security invited to planning
- [ ] Security channel created
- [ ] First automated scan running

### Phase 2: Collaboration (Weeks 5-12)
- [ ] Security design reviews scheduled
- [ ] Security joins retros
- [ ] Security office hours started
- [ ] Security contributing to code reviews

### Phase 3: Automation (Weeks 13-24)
- [ ] SAST integrated and enforced
- [ ] Dependency scanning blocks high-severity
- [ ] Security tests run in <10 minutes
- [ ] 80% issues caught before code review

---

## 📊 Common Obstacles & Quick Fixes

| Obstacle | Quick Fix (This Week) |
|----------|----------------------|
| **"Security is too busy"** | Start with design reviews only (30 min/feature) |
| **"Too many false positives"** | Start with high-severity only, warning mode |
| **"Developers don't know security"** | Create security patterns wiki, start with OWASP Top 10 |
| **"Compliance requires gates"** | Automate compliance checks, approve pipeline not deployments |

---

## 📋 Action: Take to Your Team (5 minutes)

**Before next meeting, complete ONE:**

1. **[ ] Measure current security friction**
   - Last security delay: _____ days
   - Time spent on rework: _____ hours
   - When was issue found? [ ] Design [ ] Dev [ ] Review [ ] Production

2. **[ ] Propose one shift-left experiment**
   - What: _____________________
   - Why: _____________________
   - Timeline: _____________________

3. **[ ] Add one automated security check**
   - Tool: _____________________
   - What it checks: _____________________
   - Mode: [ ] Warning [ ] Blocking

---

## 💭 Key Takeaway

> **"Shift-left security means finding issues when they're cheap to fix. High performers spend 50% less time on security remediation because they catch issues early."**

**The false choice:** Security OR speed  
**The reality:** Building security in creates BOTH better security AND faster delivery

---

## 📚 Resources

**Meeting Materials:** [Meeting 2: Technical Excellence](../) | [Chapter 6 Notes](../chapter-notes.md)  
**Related:** [Architecture Guide](architecture-team-independence.md) | [24 Capabilities Assessment](../../../assessments/24-capabilities-assessment.md)
