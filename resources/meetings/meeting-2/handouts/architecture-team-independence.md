# Architecture: The Key to Team Independence
**10-minute quick reference guide**

## 🎯 The Big Idea

**Conway's Law:** Your system architecture mirrors your team structure. Want independent deployments? You need both loosely coupled architecture AND cross-functional teams.

## 📊 Why It Matters

**The Research:**
- Loosely coupled architecture = **2× better** delivery performance
- System type (monolith vs. microservices) **doesn't matter**
- What matters: **Can your team deploy independently?**

## ✅ Four Signs of Loose Coupling

Your team can:
1. **Deploy without coordinating** with other teams
2. **Test without integrated environments** (use mocks/contracts)
3. **Choose your own tools** (within platform guardrails)
4. **Make design changes** without affecting other teams

**Score 3-4:** Loosely coupled ✓ | **Score 1-2:** Partially coupled ⚠️ | **Score 0:** Tightly coupled ❌

## 🛠️ Quick Self-Assessment (2 minutes)

**Check all that apply to YOUR team:**

### ✅ Loose Coupling Signs
- [ ] Deploy without coordinating with other teams
- [ ] Test without integrated environments (use mocks)
- [ ] Choose our own tools within guardrails
- [ ] Changes rarely affect other teams

### ❌ Tight Coupling Signs
- [ ] Must coordinate deploys with 3+ teams
- [ ] Need "the integration environment" to test
- [ ] Constrained by organization-wide tech standards
- [ ] Multiple teams modify same database

**If 2+ tight coupling signs:** Your architecture is blocking CD adoption

---

## 🔧 Start Loosening Coupling (Pick ONE)

### Option 1: Map Your Dependencies (5 minutes)
**Draw this now:**
```
My Team → [Service/System] → [Other Teams]
         ↓
    [Shared Database] ← [Other Teams]
```
**Circle the dependency causing the most delays**

### Option 2: Test Your Independence (5 minutes)
**Answer these:**
1. **How many teams must approve your deployment?** _____
2. **What percentage of tests need integrated environment?** _____%
3. **Last time you changed tech stack?** _____

**Target:** 0 approvals, <10% integration tests, recent tech flexibility

### Option 3: Apply Strangler Fig (5 minutes)
**If you have a monolith:**
1. Identify ONE bounded context to extract (e.g., notifications, reports)
2. Which has clearest boundaries? _____________________
3. Start extracting this next sprint: [ ] Yes [ ] Not yet

---

## 🎯 Conway's Law in Practice

**The Problem:**
```
Frontend Team → Frontend Layer
Backend Team  → Backend Layer  } = Coordination overhead
DB Team       → Data Layer       for every deployment
```

**The Solution:**
```
Product Team A → Full-stack Service A  } = Independent
Product Team B → Full-stack Service B     deployments
```

**Inverse Conway Maneuver:** Design your desired architecture, THEN organize teams to match

---

## 📋 Action: Take to Your Team (5 minutes)

**Before next meeting, complete ONE:**

1. **[ ] Document one key dependency** that blocks independent deployment
   - Dependency: _____________________
   - Why it blocks: _____________________
   - Possible solution: _____________________

2. **[ ] Propose one decoupling experiment**
   - What: _____________________
   - Why: _____________________
   - Timeline: _____________________

3. **[ ] Measure coordination overhead**
   - Track: How many teams coordinate for one deploy
   - For: Next 2 weeks
   - Share: At next retro

---

## 💭 Key Takeaway

> **"System type doesn't matter. Loose coupling does. You can have high-performing monoliths or low-performing microservices."**

**Focus on:** Can your team deploy independently, test without integrated environments, and choose appropriate tools?

---

## 📚 Resources

**Meeting Materials:** [Meeting 2: Technical Excellence](../) | [Chapter 5 Notes](../chapter-notes.md)
**Related:** [Security: Shift Left](security-shift-left.md) | [24 Capabilities Assessment](../../../assessments/24-capabilities-assessment.md)
