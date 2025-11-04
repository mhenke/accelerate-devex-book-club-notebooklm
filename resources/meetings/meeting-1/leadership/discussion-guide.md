# Meeting 1 Discussion Guide

**Laying the Foundation – The Myth and the Measurement**

## Core Framing Question

> **See [Key Questions - Meeting 1](../../../key-questions.md#meeting-1)**

**"How do we currently _perceive_ and _measure_ performance, and what would it take to shift our focus from local outputs (like utilization or story points) to the global outcomes of speed and stability that the research proves matter?"**

This question challenges common metrics (lines of code, velocity) and prompts evaluation of current practices against evidence-based models. It connects measurement (Ch. 2) to the cultural environment needed for learning instead of blame (Ch. 3).

---

## Open Discussion Questions

### Understanding Current State

**On Performance Measurement:**
1. What metrics does your organization currently use to assess software delivery performance?
2. How do these metrics influence team behavior? Are the influences positive or negative?
3. If you could only track one metric starting tomorrow, which DORA metric would you choose and why?
4. What barriers prevent you from measuring the four DORA metrics today?

**On Deployment Practices:**
5. Describe your team's typical deployment process. How long does it take from "code complete" to "in production"?
6. On a scale of 1-10, how anxious are you before a production deployment? What specific factors contribute to that anxiety?
7. What deployment pain points cause the most stress for your team?
8. When was the last time a deployment went smoothly? What made it different?

**On Organizational Culture:**
9. Using Westrum's model, what culture type best describes your organization: pathological, bureaucratic, or generative?
10. Give a concrete example of how information flows (or doesn't flow) in your organization.
11. What happens when someone brings bad news to leadership or management?
12. Can you identify specific behaviors that indicate your organization's culture type?

### Exploring Concepts

**On the Speed vs. Stability Myth:**
13. Before reading the book, did you believe there was a trade-off between speed and stability? What examples influenced that belief?
14. How does the research finding (46x, 440x, 170x) challenge assumptions in your organization?
15. What quality practices does your team already have that support both speed and stability?
16. Can you think of a time when slowing down deployment actually made things worse, not better?

**Follow-up prompts:**
- "What would it take to prove this in your organization?"
- "Who needs to see this evidence?"
- "What practices create both speed and stability?"

**On DORA Metrics:**
17. Which DORA metric would be easiest to improve in your organization? Which would be hardest?
18. How might focusing on these metrics change team priorities or behaviors?
19. What concerns do you have about measuring these metrics?
20. How could you use these metrics for learning vs. performance evaluation?

**Follow-up prompts:**
- "What would good performance look like?"
- "What's blocking improvement?"
- "How could we measure this without expensive tools?"

**On Culture Change:**
21. Do you believe culture can be changed through implementing technical practices? Why or why not?
22. What's one technical practice that might positively shift your team's culture toward more generative?
23. What obstacles would you face trying to implement that practice?
24. How does your current culture support or hinder software delivery performance?

**Follow-up prompts:**
- "What would need to change first?"
- "Who has influence over this?"
- "What small experiment could we try?"

### Real-World Scenarios

**Scenario 1: The Metrics Debate**
Your manager wants to start tracking individual developer productivity using lines of code and story points completed. How would you use concepts from chapters 1-3 to propose an alternative?

**Discussion points:**
- Why are individual metrics problematic?
- What system-level metrics better predict success?
- How to frame conversation with manager?

**Scenario 2: The Deployment Incident**
Last Friday's deployment caused a production outage. Leadership is proposing more approval gates and longer testing cycles to prevent future incidents. How would the book's research inform your response?

**Discussion points:**
- Does slowing down improve stability?
- What actually prevents deployment failures?
- How to propose evidence-based alternative?

**Scenario 3: The Culture Clash**
Your team wants to adopt trunk-based development, but another team insists on long-lived feature branches and formal merge approvals. Both teams must share the same codebase. How do you navigate this?

**Discussion points:**
- What culture types might each team represent?
- How does culture impact technical choices?
- What conversation might bridge the gap?

### Team Self-Assessment

**Deployment Frequency:**
25. How often does your team deploy to production?
   - Multiple times per day
   - Daily to weekly
   - Weekly to monthly
   - Monthly to less frequently

26. What prevents more frequent deployments?

**Lead Time:**
27. How long from commit to production deployment?
   - Less than 1 hour
   - 1 day to 1 week
   - 1 week to 1 month
   - More than 1 month

28. Where is time lost in that process?

**Time to Restore:**
29. When production breaks, how quickly can you restore service?
   - Less than 1 hour
   - 1 hour to 1 day
   - 1 day to 1 week
   - More than 1 week

30. What slows down recovery?

**Change Fail Rate:**
31. What percentage of deployments cause production issues?
   - 0-15%
   - 15-30%
   - 30-45%
   - More than 45%

32. What typically causes deployment failures?

### Reflection and Commitment

**Personal Reflection:**
33. What surprised you most in chapters 1-3?
34. What concept challenged your existing beliefs?
35. What evidence do you need to see to believe this applies to your context?
36. What's your biggest takeaway from Meeting 1?

**Team Commitment:**
37. Which DORA metric will you start tracking before Meeting 2?
38. How will you track it? (tool, spreadsheet, manual observation)
39. What deployment pain point will you document or address?
40. What culture behavior will you observe over the next two weeks?

---

## Using This Discussion Guide

### For Facilitators

- **Don't try to cover all questions** - Select 8-10 most relevant for your group
- **Start with current state** questions to ground discussion in experience
- **Use follow-up prompts** to deepen superficial answers
- **Reference scenarios** when abstract discussion needs concrete grounding
- **End with commitment** questions to drive action

### For Participants

- **Come prepared** with specific examples from your work
- **Be honest** about current state - psychological safety is essential
- **Challenge assumptions** constructively and respectfully
- **Connect to evidence** from the research
- **Commit to action** - select one metric to track

### Time Management

- **Current State (15 min):** Questions 1-12
- **Exploring Concepts (20 min):** Questions 13-24 (select 6-8)
- **Scenarios or Self-Assessment (10 min):** Choose 1 scenario OR do quick self-assessment
- **Reflection & Commitment (10 min):** Questions 33-40

---

## Related Assessments

Use these tools during or after discussion:

- **[DORA Metrics Template](../../../assessments/dora-metrics-template.md)** - Begin baseline tracking
- **[Culture Assessment Worksheet](../../../assessments/culture-assessment-worksheet.md)** - Identify current culture type
- **[24 Capabilities Assessment](../../../assessments/24-capabilities-assessment.md)** - Complete organizational baseline

---

## Next Meeting Prep

**[Meeting 2: Technical Excellence & Continuous Delivery](../../meeting-2/)**

Preview question to consider:
> "Which of our current architectural or security practices create the most friction and dependencies for our teams?"

---

[← Meeting 1 Resources](../README.md) | [Key Questions](../../../key-questions.md) →
