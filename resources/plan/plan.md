# Accelerate DevEx Book Club Plan V2 (Corrected)

_Building and Scaling High Performing Technology Organizations_
**Duration:** 2 Months | **Format:** 4 Biweekly 1-Hour Sessions | **Theme-Based Structure**

## Overview

This book club follows the book's own principle of breaking work into small, manageable chunks with a steady, regular pace that allows for deep understanding and practical application. Each session focuses on core themes that build upon each other, culminating in actionable insights for improving developer experience.

## Bi-Weekly Meeting Structure

**Rationale:** This cadence provides ample time for reflection, small experiments between meetings, and embodies the "acting your way into a better culture" approach the book advocates.

---

## Meeting 1: Laying the Foundation – The Myth and the Measurement

**Week 1 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 1-3 (Accelerate, Measuring Performance, Measuring and Changing Culture)

- Chapter 1: Accelerate - Why software delivery matters
- Chapter 2: Measuring Performance - The four DORA metrics
- Chapter 3: Measuring and Changing Culture - Westrum's organizational culture typology

### Core Concepts to Explore

#### 1. Introduction to "Accelerate"

- **Central Argument:** High software delivery performance drives organizational success (profitability, productivity, market share)
- **Evidence-Based Approach:** 23,000+ survey responses from 2,000+ organizations over 4 years
- **Digital Transformation Reality:** Software delivery capability provides competitive advantage across all industries

#### 2. The Four DORA Metrics - "Powerful New Vocabulary"

- **Delivery Lead Time:** Time from code commit to production (high performers: <1 hour)
- **Deployment Frequency:** How often code gets deployed (high performers: multiple times per day)
- **Mean Time to Restore Service:** Recovery time after incidents (high performers: <1 hour)
- **Change Fail Rate:** Percentage of deployments causing failures (high performers: 0-15%)

#### 3. Debunking the Speed vs. Stability Myth

- **Key Insight:** High performers achieve BOTH speed AND stability simultaneously
- **46x more frequent deployments + 440x faster lead time + 170x faster recovery**
- **No Trade-offs:** Practices that make you faster also make you more stable

#### 4. Addressing "Deployment Pain"

- **Recognition:** Anxiety before deployments signals process inefficiencies, not personal failing
- **Root Causes:** Complex, manual deployment processes and poor architecture
- **Cultural Signal:** Fear indicates pathological or bureaucratic culture

### Discussion Questions

1. **Current State Assessment:** How would you rate your team on each DORA metric?
2. **Speed vs. Stability Myths:** What examples have you seen of assumed trade-offs in your organization?
3. **Deployment Pain Points:** Describe your team's current deployment experience and anxiety levels
4. **Culture Indicators:** Using Westrum's model, what culture type best describes your organization?

### Action Items for Next Meeting

- Begin informal tracking of one DORA metric for your team
- Identify your biggest deployment pain point
- Observe examples of pathological, bureaucratic, or generative culture behaviors

---

## Meeting 2: Technical Excellence & Continuous Delivery

**Week 3 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 4-6 (Technical Practices, Architecture, Integrating Infosec)

- Chapter 4: Technical Practices - CD capabilities and their impact
- Chapter 5: Architecture - Loosely coupled systems and team autonomy
- Chapter 6: Integrating Infosec - Shift-left security practices

### Core Concepts to Explore

#### 1. Continuous Delivery (CD) as "Engine That Drives All of This"

- **Definition:** Getting all types of changes into production safely, quickly, sustainably
- **Five Principles:** Build quality in, work in small batches, automate repetition, pursue continuous improvement, everyone responsible
- **Key Practices:** Version control everything, CI, trunk-based development, test automation, deployment automation

#### 2. Architecture That Enables Independence

- **Loosely Coupled Systems:** Teams can test, deploy, and change independently
- **Conway's Law Inverse:** Evolve team structure to match desired architecture
- **Key Capabilities:** Deploy independently, test without integrated environments, make large-scale changes without external permission

#### 3. "Act Your Way into a Better Culture"

- **Behavioral Change Drives Cultural Change:** Implementing CD practices improves Westrum culture scores
- **Tool Autonomy:** Teams choosing their own tools drives performance and satisfaction
- **Security Integration:** Building security in (vs. bolting on) improves both performance and security

#### 4. Breaking the "Wall of Confusion"

- **Traditional Problem:** Development optimizes for throughput, operations for stability
- **CD Solution:** System-level outcomes requiring collaboration between all functions
- **Evidence:** CD reduces deployment pain and burnout while improving performance

### Discussion Questions

1. **CD Maturity Assessment:** Which CD practices is your organization currently implementing well/poorly?
2. **Architecture Dependencies:** What prevents your team from deploying independently?
3. **Tool Autonomy:** How much freedom do teams have in tool selection? What are the constraints?
4. **Security Integration:** How early in your development process is security considered?

### Real-World Applications

- Share examples of successful automation implementations
- Discuss architectural decisions that improved (or hindered) team independence
- Identify security practices that currently slow down vs. speed up delivery

### Action Items for Next Session

- Identify one manual process that could be automated
- Map current dependencies that prevent independent deployment
- Experiment with one CD practice (trunk-based development, test automation, etc.)

---

## Meeting 3: Management, Product Development & Sustainability

**Week 5 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 7-10 (Management Practices, Product Development, Making Work Sustainable, Employee Satisfaction)

- Chapter 7: Management Practices for Software - Lean management and lightweight change approval
- Chapter 8: Product Development - Lean product practices and team experimentation
- Chapter 9: Making Work Sustainable - Deployment pain and burnout
- Chapter 10: Employee Satisfaction, Identity, and Engagement - Job satisfaction and diversity

### Core Concepts to Explore

#### 1. Lean Management Principles

- **Limit Work in Progress (WIP):** Using limits to drive process improvement and expose bottlenecks
- **Visualize Work:** Dashboards showing quality, productivity metrics, and work status
- **Monitor and Decide:** Using application/infrastructure data for daily business decisions
- **Lightweight Change Approval:** Peer review outperforms external change boards

#### 2. Lean Product Development - Working in Small Batches

- **Customer Feedback Integration:** Actively seeking and incorporating customer input into design
- **Value Stream Visibility:** Understanding work flow from business to customers
- **Team Experimentation:** Authority to create/change specifications without external approval
- **MVP Approach:** Prototype with just enough features for validated learning

#### 3. Making Work Sustainable

- **Deployment Pain as Signal:** Fear during deployments indicates process problems
- **Burnout Prevention:** CD practices reduce burnout and improve work-life balance (Microsoft: 38% → 75% satisfaction)
- **Six Burnout Risk Factors:** Work overload, lack of control, insufficient rewards, breakdown of community, absence of fairness, value conflicts

#### 4. Employee Satisfaction and Diversity Impact

- **Identity and Values Alignment:** Employees identifying with organizational values and goals
- **Net Promoter Score (eNPS):** High performers 2.2x more likely to recommend their organization
- **Diversity Research:** Teams with more diversity achieve better performance and business outcomes
- **Tool Access:** Having right resources correlates strongly with job satisfaction

### Discussion Questions

1. **Lean Practices Assessment:** Which lean management practices do you currently use? What's missing?
2. **Work Visualization:** How does your team currently visualize WIP and quality metrics?
3. **Change Approval Reality:** Describe your current change approval process - who's involved and how long does it take?
4. **Burnout Indicators:** What signs of deployment pain or burnout do you observe in your team?
5. **Employee Engagement:** How would your team score on employee Net Promoter Score?

### Practical Exercises

- Assess current WIP limits and visualization practices
- Map your change approval process and identify bottlenecks
- Calculate informal eNPS for your team

### Action Items for Next Meeting

- Experiment with visualizing work using simple kanban board
- Identify one change approval step that could be streamlined
- Observe and document burnout risk factors in your environment

---

## Meeting 4: Leadership, Research Methods & Transformation

**Week 7 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 11, 16, and Conclusion (Leaders and Managers, High-Performance Leadership case study, wrap-up)

- Chapter 11: Leaders and Managers - Transformational leadership characteristics
- **Skip Chapters 12-15:** Research methodology (optional reading for interested members)
- Chapter 16: High-Performance Leadership and Management - ING Netherlands case study
- Conclusion: Summary and call to action

### Core Concepts to Explore

#### 1. Transformational Leadership - Five Key Characteristics

- **Vision:** Clear understanding of where organization is going in 5 years
- **Inspirational Communication:** Motivates even in uncertain/changing environments
- **Intellectual Stimulation:** Challenges followers to think about problems in new ways
- **Supportive Leadership:** Demonstrates care for followers' personal needs and feelings
- **Personal Recognition:** Acknowledges achievements and compliments outstanding work

#### 2. Leadership's Indirect Impact

- **Key Finding:** Leaders alone cannot achieve high DevOps outcomes
- **Enablement Role:** Leadership enables teams to implement technical and lean practices
- **Investment Areas:** Training budgets, conference attendance, hack days, 20% time, internal DevOps conferences
- **Manager's Role:** Connecting strategic objectives to team work, removing obstacles

#### 3. ING Netherlands Case Study - Learning Organization in Practice

- **Obeya Rooms:** Visual management spaces showing strategic objectives, performance gaps, problems
- **Tribe/Squad Structure:** Cross-functional BizDevOps teams following "Two Pizza Rule"
- **Catchball Communication:** Vertical and horizontal information flow between levels
- **Standard Work:** Teams experiment to find best practices, then standardize and share
- **Coaching Culture:** Leaders as coaches, focusing on developing people

#### 4. Transformation Principles - "Make It Your Own"

- **Learn How to Learn:** Creating environment for shared organizational learning
- **Go Deep Before Wide:** Focus on thorough transformation before scaling
- **Practice, Patience, Discipline:** Rhythm and routine until new habits form culture
- **Evidence-Based Experimentation:** Try, measure, learn, adjust, repeat

### Discussion Questions

1. **Leadership Assessment:** What transformational leadership behaviors do you see in your organization? Which are missing?
2. **Investment in Learning:** How does your organization currently invest in developing team capabilities?
3. **ING Practices:** Which practices from the ING case study could work in your context? What would need adaptation?
4. **Transformation Readiness:** What's your organization's appetite for the discipline and patience required for real transformation?

### Culminating Reflection

**The Single Smallest Change Question:** "What is the single smallest change we can make that would make our next deployment just a tiny bit less painful?"

### Final Action Items and Commitments

1. **Individual Commitments:** Each participant commits to implementing one specific 24 capabilities from the book
2. **Team Experiments:** Identify small experiments to try over next 2-4 weeks
3. **Measurement Plan:** Establish how to track progress on DORA metrics
4. **Follow-up Strategy:** Plan monthly check-ins to share results and continued learning
5. **Next Steps:** Decide on next book or continuing with State of DevOps Reports

### Success Metrics for Book Club

- Participants can articulate and explain the four DORA metrics and their current team performance
- Teams have identified specific bottlenecks and improvement opportunities using the 24 capabilities framework
- Action items from sessions are being actively implemented with measurement
- Increased awareness of culture's impact on technical performance (Westrum model)
- Concrete transformation plan with small experiments and regular reflection

---

# Accelerate DevEx Book Club Plan V2 (Corrected)

_Building and Scaling High Performing Technology Organizations_
**Duration:** 2 Months | **Format:** 4 Biweekly 1-Hour Sessions | **Theme-Based Structure**

## Overview

This book club follows the book's own principle of breaking work into small, manageable chunks with a steady, regular pace that allows for deep understanding and practical application. Each session focuses on core themes that build upon each other, culminating in actionable insights for improving developer experience.

## Bi-Weekly Meeting Structure

**Rationale:** This cadence provides ample time for reflection, small experiments between meetings, and embodies the "acting your way into a better culture" approach the book advocates.

---

## Meeting 1: Laying the Foundation – The Myth and the Measurement

**Week 1 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 1-3 (Accelerate, Measuring Performance, Measuring and Changing Culture)

- Chapter 1: Accelerate - Why software delivery matters
- Chapter 2: Measuring Performance - The four DORA metrics
- Chapter 3: Measuring and Changing Culture - Westrum's organizational culture typology

### Core Concepts to Explore

#### 1. Introduction to "Accelerate"

- **Central Argument:** High software delivery performance drives organizational success (profitability, productivity, market share)
- **Evidence-Based Approach:** 23,000+ survey responses from 2,000+ organizations over 4 years
- **Digital Transformation Reality:** Software delivery capability provides competitive advantage across all industries

#### 2. The Four DORA Metrics - "Powerful New Vocabulary"

- **Delivery Lead Time:** Time from code commit to production (high performers: <1 hour)
- **Deployment Frequency:** How often code gets deployed (high performers: multiple times per day)
- **Mean Time to Restore Service:** Recovery time after incidents (high performers: <1 hour)
- **Change Fail Rate:** Percentage of deployments causing failures (high performers: 0-15%)

#### 3. Debunking the Speed vs. Stability Myth

- **Key Insight:** High performers achieve BOTH speed AND stability simultaneously
- **46x more frequent deployments + 440x faster lead time + 170x faster recovery**
- **No Trade-offs:** Practices that make you faster also make you more stable

#### 4. Addressing "Deployment Pain"

- **Recognition:** Anxiety before deployments signals process inefficiencies, not personal failing
- **Root Causes:** Complex, manual deployment processes and poor architecture
- **Cultural Signal:** Fear indicates pathological or bureaucratic culture

### Discussion Questions

1. **Current State Assessment:** How would you rate your team on each DORA metric?
2. **Speed vs. Stability Myths:** What examples have you seen of assumed trade-offs in your organization?
3. **Deployment Pain Points:** Describe your team's current deployment experience and anxiety levels

### Action Items for Next Meeting

- Begin informal tracking of one DORA metric for your team
- Identify your biggest deployment pain point
- Observe examples of pathological, bureaucratic, or generative culture behaviors

---

## Meeting 2: Technical Excellence & Continuous Delivery

**Week 3 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 4-6 (Technical Practices, Architecture, Integrating Infosec)

- Chapter 4: Technical Practices - CD capabilities and their impact
- Chapter 5: Architecture - Loosely coupled systems and team autonomy
- Chapter 6: Integrating Infosec - Shift-left security practices

### Core Concepts to Explore

#### 1. Continuous Delivery (CD) as "Engine That Drives All of This"

- **Definition:** Getting all types of changes into production safely, quickly, sustainably
- **Five Principles:** Build quality in, work in small batches, automate repetition, pursue continuous improvement, everyone responsible
- **Key Practices:** Version control everything, CI, trunk-based development, test automation, deployment automation

#### 2. Architecture That Enables Independence

- **Loosely Coupled Systems:** Teams can test, deploy, and change independently
- **Conway's Law Inverse:** Evolve team structure to match desired architecture
- **Key Capabilities:** Deploy independently, test without integrated environments, make large-scale changes without external permission

#### 3. "Act Your Way into a Better Culture"

- **Behavioral Change Drives Cultural Change:** Implementing CD practices improves Westrum culture scores
- **Tool Autonomy:** Teams choosing their own tools drives performance and satisfaction
- **Security Integration:** Building security in (vs. bolting on) improves both performance and security

#### 4. Breaking the "Wall of Confusion"

- **Traditional Problem:** Development optimizes for throughput, operations for stability
- **CD Solution:** System-level outcomes requiring collaboration between all functions
- **Evidence:** CD reduces deployment pain and burnout while improving performance

### Discussion Questions

1. **CD Maturity Assessment:** Which CD practices is your organization currently implementing well/poorly?
2. **Architecture Dependencies:** What prevents your team from deploying independently?
3. **Tool Autonomy:** How much freedom do teams have in tool selection? What are the constraints?

### Real-World Applications

- Share examples of successful automation implementations
- Discuss architectural decisions that improved (or hindered) team independence

### Action Items for Next Session

- Identify one manual process that could be automated
- Map current dependencies that prevent independent deployment
- Experiment with one CD practice (trunk-based development, test automation, etc.)

---

## Meeting 3: Management, Product Development & Sustainability

**Week 5 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 7-10 (Management Practices, Product Development, Making Work Sustainable, Employee Satisfaction)

- Chapter 7: Management Practices for Software - Lean management and lightweight change approval
- Chapter 8: Product Development - Lean product practices and team experimentation
- Chapter 9: Making Work Sustainable - Deployment pain and burnout
- Chapter 10: Employee Satisfaction, Identity, and Engagement - Job satisfaction and diversity

### Core Concepts to Explore

#### 1. Lean Management Principles

- **Limit Work in Progress (WIP):** Using limits to drive process improvement and expose bottlenecks
- **Visualize Work:** Dashboards showing quality, productivity metrics, and work status
- **Monitor and Decide:** Using application/infrastructure data for daily business decisions
- **Lightweight Change Approval:** Peer review outperforms external change boards

#### 2. Lean Product Development - Working in Small Batches

- **Customer Feedback Integration:** Actively seeking and incorporating customer input into design
- **Value Stream Visibility:** Understanding work flow from business to customers
- **Team Experimentation:** Authority to create/change specifications without external approval
- **MVP Approach:** Prototype with just enough features for validated learning

#### 3. Making Work Sustainable

- **Deployment Pain as Signal:** Fear during deployments indicates process problems
- **Burnout Prevention:** CD practices reduce burnout and improve work-life balance (Microsoft: 38% → 75% satisfaction)
- **Six Burnout Risk Factors:** Work overload, lack of control, insufficient rewards, breakdown of community, absence of fairness, value conflicts

#### 4. Employee Satisfaction and Diversity Impact

- **Identity and Values Alignment:** Employees identifying with organizational values and goals
- **Net Promoter Score (eNPS):** High performers 2.2x more likely to recommend their organization
- **Diversity Research:** Teams with more diversity achieve better performance and business outcomes
- **Tool Access:** Having right resources correlates strongly with job satisfaction

### Discussion Questions

1. **Lean Practices Assessment:** Which lean management practices do you currently use? What's missing?
2. **Work Visualization:** How does your team currently visualize WIP and quality metrics?
3. **Change Approval Reality:** Describe your current change approval process - who's involved and how long does it take?

### Practical Exercises

- Assess current WIP limits and visualization practices
- Map your change approval process and identify bottlenecks

### Action Items for Next Meeting

- Experiment with visualizing work using simple kanban board
- Identify one change approval step that could be streamlined
- Observe and document burnout risk factors in your environment

---

## Meeting 4: Leadership, Research Methods & Transformation

**Week 7 | Duration:** 1 Hour

### Pre-Reading Assignment

**Chapters:** 11, 16, and Conclusion (Leaders and Managers, High-Performance Leadership case study, wrap-up)

- Chapter 11: Leaders and Managers - Transformational leadership characteristics
- **Skip Chapters 12-15:** Research methodology (optional reading for interested members)
- Chapter 16: High-Performance Leadership and Management - ING Netherlands case study
- Conclusion: Summary and call to action

### Core Concepts to Explore

#### 1. Transformational Leadership - Five Key Characteristics

- **Vision:** Clear understanding of where organization is going in 5 years
- **Inspirational Communication:** Motivates even in uncertain/changing environments
- **Intellectual Stimulation:** Challenges followers to think about problems in new ways
- **Supportive Leadership:** Demonstrates care for followers' personal needs and feelings
- **Personal Recognition:** Acknowledges achievements and compliments outstanding work

#### 2. Leadership's Indirect Impact

- **Key Finding:** Leaders alone cannot achieve high DevOps outcomes
- **Enablement Role:** Leadership enables teams to implement technical and lean practices
- **Investment Areas:** Training budgets, conference attendance, hack days, 20% time, internal DevOps conferences
- **Manager's Role:** Connecting strategic objectives to team work, removing obstacles

#### 3. ING Netherlands Case Study - Learning Organization in Practice

- **Obeya Rooms:** Visual management spaces showing strategic objectives, performance gaps, problems
- **Tribe/Squad Structure:** Cross-functional BizDevOps teams following "Two Pizza Rule"
- **Catchball Communication:** Vertical and horizontal information flow between levels
- **Standard Work:** Teams experiment to find best practices, then standardize and share
- **Coaching Culture:** Leaders as coaches, focusing on developing people

#### 4. Transformation Principles - "Make It Your Own"

- **Learn How to Learn:** Creating environment for shared organizational learning
- **Go Deep Before Wide:** Focus on thorough transformation before scaling
- **Practice, Patience, Discipline:** Rhythm and routine until new habits form culture
- **Evidence-Based Experimentation:** Try, measure, learn, adjust, repeat

### Discussion Questions

1. **Leadership Assessment:** What transformational leadership behaviors do you see in your organization? Which are missing?
2. **Investment in Learning:** How does your organization currently invest in developing team capabilities?
3. **ING Practices:** Which practices from the ING case study could work in your context? What would need adaptation?

### Culminating Reflection

**The Single Smallest Change Question:** "What is the single smallest change we can make that would make our next deployment just a tiny bit less painful?"

### Final Action Items and Commitments

1. **Individual Commitments:** Each participant commits to implementing one specific 24 capabilities from the book
2. **Team Experiments:** Identify small experiments to try over next 2-4 weeks
3. **Measurement Plan:** Establish how to track progress on DORA metrics

### Success Metrics for Book Club

- Participants can articulate and explain the four DORA metrics and their current team performance
- Teams have identified specific bottlenecks and improvement opportunities using the 24 capabilities framework
- Action items from sessions are being actively implemented with measurement
- Increased awareness of culture's impact on technical performance (Westrum model)
- Concrete transformation plan with small experiments and regular reflection

---

## The 24 Capabilities Reference

_Use this as a checklist for identifying improvement opportunities_

### Continuous Delivery (8 capabilities)

1. Version control for all production artifacts
2. Deployment automation
3. Continuous integration
4. Trunk-based development
5. Test automation
6. Test data management
7. Shift left on security
8. Continuous delivery practices

### Architecture (2 capabilities)

9. Loosely coupled architecture
10. Empowered teams (tool choice)

### Product and Process (4 capabilities)

11. Customer feedback gathering/implementation
12. Value stream visibility
13. Working in small batches
14. Team experimentation authority

### Lean Management and Monitoring (5 capabilities)

15. Lightweight change approval processes
16. Monitoring for business decisions
17. Proactive system health monitoring
18. Work-in-process (WIP) limits
19. Visual work displays

### Cultural (5 capabilities)

20. Generative culture (Westrum model)
21. Supporting learning culture
22. Team collaboration
23. Meaningful work and tools
24. Transformational leadership

## Additional Resources and Follow-Up

### Between-Meeting Activities

- **24 Capabilities Self-Assessment:** Rate your team on each capability (1-5 scale)
- **DORA Metrics Baseline:** Begin measuring your current performance
- **Culture Observation Journal:** Document examples of pathological, bureaucratic, and generative behaviors
- **Small Experiments:** Try one practice from each session's focus area

### Post-Book Club Extensions

1. **Annual State of DevOps Report:** Review latest findings and trends
2. **Related Reading:** Continue with The Phoenix Project, The DevOps Handbook, Team Topologies
3. **Capability Implementation:** Form working groups around specific capabilities
4. **ING Case Study Deep Dive:** Study their transformation approach for applicable practices

### Discussion Best Practices

- **Create Psychological Safety:** Ensure safe space for sharing deployment pain and culture challenges
- **Focus on Learning:** Approach with curiosity about what works, not judgment about current state
- **Action Orientation:** Connect every insight to specific, measurable next steps
- **Evidence-Based:** Reference the book's research findings, not just opinions
- **Inclusive Participation:** Welcome all experience levels and roles (not just engineers)

**Remember:** This isn't about copying other organizations' practices, but developing your own capabilities through experimentation and learning. As the ING case study shows: "You have to understand why, not just copy the behaviors."


### Continuous Delivery (8 capabilities)

1. Version control for all production artifacts
2. Deployment automation
3. Continuous integration
4. Trunk-based development
5. Test automation
6. Test data management
7. Shift left on security
8. Continuous delivery practices

### Architecture (2 capabilities)

9. Loosely coupled architecture
10. Empowered teams (tool choice)

### Product and Process (4 capabilities)

11. Customer feedback gathering/implementation
12. Value stream visibility
13. Working in small batches
14. Team experimentation authority

### Lean Management and Monitoring (5 capabilities)

15. Lightweight change approval processes
16. Monitoring for business decisions
17. Proactive system health monitoring
18. Work-in-process (WIP) limits
19. Visual work displays

### Cultural (5 capabilities)

20. Generative culture (Westrum model)
21. Supporting learning culture
22. Team collaboration
23. Meaningful work and tools
24. Transformational leadership

## Additional Resources and Follow-Up

### Between-Meeting Activities

- **24 Capabilities Self-Assessment:** Rate your team on each capability (1-5 scale)
- **DORA Metrics Baseline:** Begin measuring your current performance
- **Culture Observation Journal:** Document examples of pathological, bureaucratic, and generative behaviors
- **Small Experiments:** Try one practice from each session's focus area

### Post-Book Club Extensions

1. **Annual State of DevOps Report:** Review latest findings and trends
2. **Related Reading:** Continue with The Phoenix Project, The DevOps Handbook, Team Topologies
3. **Capability Implementation:** Form working groups around specific capabilities
4. **ING Case Study Deep Dive:** Study their transformation approach for applicable practices

### Discussion Best Practices

- **Create Psychological Safety:** Ensure safe space for sharing deployment pain and culture challenges
- **Focus on Learning:** Approach with curiosity about what works, not judgment about current state
- **Action Orientation:** Connect every insight to specific, measurable next steps
- **Evidence-Based:** Reference the book's research findings, not just opinions
- **Inclusive Participation:** Welcome all experience levels and roles (not just engineers)

**Remember:** This isn't about copying other organizations' practices, but developing your own capabilities through experimentation and learning. As the ING case study shows: "You have to understand why, not just copy the behaviors."
