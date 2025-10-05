# NotebookLM Podcast Prompts: Critique Format

_Constructive analysis and expert review of research methodology, concepts, and practical applications (10-15 minutes)_

## Format Overview

The **Critique** format provides thoughtful evaluation including:
- Analysis of research methodology and validity
- Examination of assumptions and limitations
- Practical application challenges
- Constructive feedback for implementation
- Areas requiring additional consideration

## Audio Settings in NotebookLM

- **Format:** Customize Audio Overview → Critique
- **Length:** Automatically optimized (typically 10-15 minutes)

---

## Meeting 1: Laying the Foundation – The Myth and the Measurement

**Chapters:** 1-3

### NotebookLM Input Field

**Critique Prompt:**
```
Provide constructive feedback on chapters 1-3 of Accelerate, analyzing the research methodology behind the DORA metrics study (sample size, survey design, statistical approaches), evaluating whether the four metrics adequately capture software delivery performance, and critiquing Westrum's culture typology for practical applicability in diverse organizational contexts.
```

### Focus Areas for Critique

**Research Methodology:**
- Strength of 23,000+ survey sample size
- Potential self-selection bias in survey participants
- Cross-sectional vs. longitudinal study trade-offs
- Statistical significance testing rigor

**DORA Metrics Framework:**
- Do four metrics capture complete picture?
- Challenges in measuring lead time accurately
- Context dependency (startup vs. enterprise)
- Missing metrics (e.g., quality, customer satisfaction)

**Culture Typology:**
- Westrum model applicability across industries
- Difficulty measuring culture objectively
- Culture as outcome vs. prerequisite
- Regional/cultural differences

### Discussion Prompts

- Does the research adequately prove causation or just correlation?
- Are the DORA metrics too developer-centric?
- Can culture really be "changed through practice" as claimed?

---

## Meeting 2: Technical Excellence & Continuous Delivery

**Chapters:** 4-6

### NotebookLM Input Field

**Critique Prompt:**
```
Review chapters 4-6 of Accelerate with critical analysis of whether the continuous delivery practices are realistically achievable for all organization types (regulated industries, legacy systems, distributed teams), evaluate if loosely coupled architecture is practical advice or idealistic aspiration, and assess the shift-left security approach for feasibility and potential drawbacks.
```

### Focus Areas for Critique

**Continuous Delivery Practices:**
- Regulatory compliance challenges (healthcare, finance)
- Legacy system realities vs. greenfield assumptions
- Resource requirements for implementation
- Time-to-value considerations

**Loosely Coupled Architecture:**
- Cost and effort of architectural transformation
- Not all systems can be easily decomposed
- Distributed monolith anti-pattern risks
- Organizational structure constraints

**Shift-Left Security:**
- Developer skill requirements
- Security expertise availability
- Tool maturity and accessibility
- Potential for security gaps

### Discussion Prompts

- Are the practices overly biased toward web/cloud companies?
- Does the book underestimate organizational resistance?
- What about teams that can't adopt trunk-based development?

---

## Meeting 3: Management, Product Development & Sustainability

**Chapters:** 7-10

### NotebookLM Input Field

**Critique Prompt:**
```
Critically evaluate chapters 7-10 of Accelerate, examining whether the negative correlation between change approval boards and performance holds true for all contexts (compliance-heavy industries, safety-critical systems), analyzing if the burnout prevention claims are overstated, and assessing whether lean product development practices are universally applicable or context-dependent.
```

### Focus Areas for Critique

**Change Approval Process:**
- Regulatory requirements for change boards
- Safety-critical system needs
- Compliance vs. performance trade-offs
- Alternative governance models

**Burnout and Sustainability:**
- Causation vs. correlation in burnout research
- Individual differences in stress response
- Work-life balance cultural differences
- Sustainability beyond technical practices

**Lean Product Development:**
- Customer feedback quality and representativeness
- Small batches in large-scale systems
- MVP approach limitations
- Team autonomy boundaries

### Discussion Prompts

- Can regulated industries really eliminate change boards?
- Does the book romanticize continuous delivery's impact on burnout?
- Are lean practices applicable to all product types?

---

## Meeting 4: Leadership, Research Foundation & Transformation

**Chapters:** 11, 16, Conclusion

### NotebookLM Input Field

**Critique Prompt:**
```
Analyze chapters 11, 16, and the conclusion of Accelerate with focus on whether transformational leadership characteristics are culturally universal or Western-centric, evaluate if the ING case study is representative or an exceptional outlier, and assess whether the 24 capabilities framework is comprehensive or has significant gaps for modern software organizations.
```

### Focus Areas for Critique

**Transformational Leadership:**
- Cultural assumptions in leadership model
- Applicability to non-Western organizations
- Individual leader vs. leadership system
- Measurement challenges

**ING Case Study:**
- Selection bias (successful example)
- Financial services context specificity
- Scale and resource advantages
- Applicability to smaller organizations

**24 Capabilities Framework:**
- Missing capabilities (e.g., AI/ML, platform engineering)
- Capability interdependencies not fully explored
- Prioritization guidance limited
- Evolution since book publication

### Discussion Prompts

- Is the leadership model too focused on individual traits?
- Can smaller organizations replicate ING's approach?
- What capabilities are missing for 2025 and beyond?

---

## General Critique Guidelines

### Constructive Analysis Principles

- **Acknowledge Strengths:** Start by recognizing valuable contributions
- **Identify Limitations:** Point out gaps, assumptions, or constraints
- **Provide Context:** Explain when/where findings might not apply
- **Suggest Improvements:** Offer alternative approaches or considerations
- **Maintain Respect:** Critique ideas, not authors

### Common Critique Themes Across All Meetings

**Research Methodology:**
- Survey-based research limitations
- Self-reported data reliability
- Causation vs. correlation
- Generalizability to all contexts

**Practical Application:**
- Implementation difficulty underestimated
- Resource requirements understated
- Organizational resistance not fully addressed
- Time-to-value expectations

**Context Dependency:**
- Industry-specific challenges
- Organization size considerations
- Geographic/cultural differences
- Legacy system realities

---

## Usage Tips

### When to Use Critique Format

- **Advanced Discussions:** When group has read chapters and wants deeper analysis
- **Implementation Planning:** Identifying potential challenges before starting
- **Academic Settings:** Book clubs with research or academic focus
- **Skeptical Audiences:** Addressing concerns constructively

### Customization Options

**Example: Focus on specific topic**
```
Critique the opening paragraph of chapter 2. Does it successfully hook the reader and set up the argument effectively?
```

**Example: Target specific audience**
```
Review chapters 4-6 and tell me if the main point is clear for a general audience without deep technical background.
```

**Example: Request specific feedback type**
```
Critique the writing style and tone of chapter 11. Is it accessible to practicing managers or too academic?
```

**Example: Analyze methodology**
```
Analyze the methodology used in the State of DevOps research presented in chapters 12-15 (methodology chapters). Are the statistical approaches sound?
```

---

## Comparison with Other Formats

| Format | Approach | Best For |
|--------|----------|----------|
| Deep Dive | Comprehensive coverage | Understanding all concepts |
| Brief | Quick overview | Time-constrained prep |
| **Critique** | **Critical analysis** | **Evaluating applicability, identifying challenges** |
| Debate | Pro/con exploration | Exploring controversies |

---

## Related Resources

- [Deep Dive Format](deep-dive.md) - Comprehensive podcasts
- [Brief Format](brief.md) - Quick overviews
- [Debate Format](debate.md) - Exploring controversies
- [Key Questions](../../key-questions.md) - Discussion frameworks

[Return to NotebookLM Prompts Overview](../README.md)
