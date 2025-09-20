# Meeting 2: Technical Excellence & Continuous Delivery

**Week 3 | Duration:** 1 Hour

## Pre-Reading Assignment

**Chapters:** 4-6 (Technical Practices, Architecture, Integrating Infosec)

- Chapter 4: Technical Practices - CD capabilities and their impact
- Chapter 5: Architecture - Loosely coupled systems and team autonomy
- Chapter 6: Integrating Infosec - Shift-left security practices

## Core Concepts to Explore

### 1. Continuous Delivery (CD) as "Engine That Drives All of This"

- **Definition:** Getting all types of changes into production safely, quickly, sustainably
- **Five Principles:** Build quality in, work in small batches, automate repetition, pursue continuous improvement, everyone responsible
- **Key Practices:** Version control everything, CI, trunk-based development, test automation, deployment automation

### 2. Architecture That Enables Independence

- **Loosely Coupled Systems:** Teams can test, deploy, and change independently
- **Conway's Law Inverse:** Evolve team structure to match desired architecture  
- **Key Capabilities:** Deploy independently, test without integrated environments, make large-scale changes without external permission

### 3. "Act Your Way into a Better Culture"

- **Behavioral Change Drives Cultural Change:** Implementing CD practices improves Westrum culture scores
- **Tool Autonomy:** Teams choosing their own tools drives performance and satisfaction
- **Security Integration:** Building security in (vs. bolting on) improves both performance and security

### 4. Breaking the "Wall of Confusion"

- **Traditional Problem:** Development optimizes for throughput, operations for stability
- **CD Solution:** System-level outcomes requiring collaboration between all functions
- **Evidence:** CD reduces deployment pain and burnout while improving performance

### 4. Core CD Principles and Practices

#### 🏗️ Build Quality In

Starting with quality rather than inspecting it later

#### 📦 Work in Small Batches

Breaking tasks into manageable, testable units

#### 🤖 Automate Repetitive Tasks

Freeing humans for creative problem-solving

#### 📂 Version Control Everything

All production artifacts under version control

#### 🌳 Trunk-Based Development

Short-lived branches and frequent integration

#### 🧪 Comprehensive Test Automation

Automated testing at multiple levels

#### 📊 Proactive Monitoring

Observability and alerting for rapid problem detection

## Discussion Questions

1. **CD Maturity Assessment:** Which CD practices is your organization currently implementing well/poorly?
2. **Architecture Dependencies:** What prevents your team from deploying independently?
3. **Tool Autonomy:** How much freedom do teams have in tool selection? What are the constraints?
4. **Security Integration:** How early in your development process is security considered?

## Real-World Applications

- Share examples of successful automation implementations
- Discuss architectural decisions that improved (or hindered) team independence
- Identify security practices that currently slow down vs. speed up delivery

## Action Items for Next Meeting

- [ ] Identify one manual process that could be automated
- [ ] Map current dependencies that prevent independent deployment  
- [ ] Experiment with one CD practice (trunk-based development, test automation, etc.)

## Supplementary Content

### Audio Podcast

Generate a discussion podcast using the [Meeting 2 Podcast Prompt](podcast-prompt.md)

### Video Summary

Create a visual overview with the [Meeting 2 Video Prompt](video-prompt.md)

## Navigation

- Previous: [Meeting 1: Laying the Foundation](../meeting-1/meeting-guide.md)
- Next: [Meeting 3: Management, Product Development & Sustainability](../meeting-3/meeting-guide.md)
