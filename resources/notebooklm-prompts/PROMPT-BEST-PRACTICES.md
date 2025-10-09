# NotebookLM Prompt Best Practices

This guide explains how to create effective NotebookLM prompts based on research and official guidance.

## Key Principles

### 1. Character Limit (500 Characters)

NotebookLM steering prompts have a **500-character limit** for the customization field when generating audio overviews or summaries.

**Best Practice:**
- Keep the actual prompt concise (under 500 chars)
- Put detailed context in your uploaded sources, not the prompt
- Use the prompt to steer focus and format, not provide content

**Example:**
```
❌ TOO LONG (1,200+ characters):
This podcast prepares participants for Meeting 1 of an Accelerate DevEx Book Club focused on Chapters 1-3. Cover the research foundation with 23,000+ survey responses from 2,000+ organizations, scientific rigor including cross-sectional studies and statistical significance...

✅ OPTIMIZED (450 characters):
Assume the listener is a software developer preparing for a book club discussion. Focus on Chapters 1-3 from uploaded Accelerate sources. Create a 15-20 minute deep dive covering: (1) research foundation and DORA metrics, (2) Westrum's three culture types, and (3) deployment pain as signal. Help prepare listeners to discuss metrics and culture practices.
```

---

## 2. Target Audience (Persona Pattern)

**Pattern Structure:**
```
"Assume the listener is [persona]. [Task/output guidance]."
```

**Why It Works:**
- Places persona information at the beginning (higher compliance)
- Helps LLM tailor complexity, vocabulary, and examples
- Improves relevance for intended audience

**Examples:**

**For Developers:**
```
Assume the listener is a software developer or DevOps engineer with 3-5 years experience.
```

**For Managers:**
```
Assume the listener is an engineering manager responsible for team performance and culture.
```

**For Mixed Audience:**
```
Assume the listener is a technical professional (developer, DevOps practitioner, or engineering manager) preparing for a team discussion.
```

**For Beginners:**
```
Assume the listener has no prior DevOps experience. Use simple analogies and avoid jargon.
```

---

## 3. Focus on Specific Sources

**Pattern Structure:**
```
"Focus on [specific source]. Reference [supporting source] for [purpose]."
```

**Best Practices:**
- Explicitly name sources: "Focus on Chapters 1-3 from uploaded Accelerate sources"
- Use source selection in NotebookLM UI when available
- Specify relationships: "Use Chapter 2 for metrics definitions, Chapter 3 for culture types"

**Examples:**

**Single Source Focus:**
```
Focus on Chapter 2 of Accelerate. Explain the four DORA metrics with examples.
```

**Multi-Source with Priority:**
```
Focus primarily on Chapters 1-3 from Accelerate. Reference Meeting 1 Chapter Notes for discussion preparation.
```

**Cross-Reference Pattern:**
```
Analyze Chapter 5 technical practices. Compare with ING case study from Chapter 16 for real-world validation.
```

---

## 4. Focus on Specific Topics

**Pattern Structure:**
```
"Topic: [theme]. Cover [specific aspects]. Emphasize [key points]."
```

**Best Practices:**
- State topic explicitly at the beginning
- Use numbered lists for multiple topics
- Add emphasis cues: "especially highlight...", "pay particular attention to..."

**Examples:**

**Single Topic:**
```
Topic: DORA Metrics. Explain each metric's definition, how to measure it, and why it matters for team performance.
```

**Multiple Topics with Structure:**
```
Cover three topics: (1) DORA metrics with speed-vs-stability myth-busting, (2) Westrum's culture types, (3) deployment pain as signal.
```

**Topic with Exclusions:**
```
Focus on Lean management practices from Chapter 7. Emphasize WIP limits and visual management. Exclude the statistical analysis sections.
```

---

## 5. Output Format and Length

**Best Practices:**
- Specify desired length: "15-20 minute conversational podcast"
- Request specific format: "debate format with contrasting viewpoints"
- Add tone guidance: "conversational", "academic", "practical"

**Examples:**

**Length Specification:**
```
Create a 15-20 minute conversational deep dive. Balance research rigor with practical applicability.
```

**Format Specification:**
```
Format: Two-person debate. One host emphasizes research validity, the other questions real-world applicability.
```

**Tone and Style:**
```
Use a conversational tone with real-world examples. Avoid academic jargon. Make complex concepts accessible.
```

---

## 6. Discussion Preparation Cues

**Pattern Structure:**
```
"Help listeners prepare to discuss: [question 1], [question 2], [question 3]."
```

**Best Practices:**
- Frame as "help prepare to discuss" (actionable)
- Limit to 3-4 key questions (maintains focus)
- Connect to meeting objectives

**Example:**
```
Help listeners prepare to discuss: (1) how their current metrics reinforce wrong behaviors, (2) which culture type describes their organization, (3) what one practice could shift culture toward generative.
```

---

## 7. Complete Prompt Template

**Optimized Structure (Under 500 Characters):**

```
Assume the listener is [persona]. Focus on [sources]. Create a [length] [format] covering: (1) [topic 1], (2) [topic 2], (3) [topic 3]. [Special emphasis]. Help prepare listeners to discuss [key questions].
```

**Example Application:**
```
Assume the listener is a software developer preparing for a book club. Focus on Chapters 4-6 from Accelerate. Create a 15-20 minute deep dive covering: (1) continuous delivery principles, (2) architecture for testability, (3) trunk-based development. Emphasize how practices enable both speed and stability. Help prepare listeners to discuss deployment frequency and testing strategies.
```

*Character count: 423*

---

## 8. Extended Context Pattern

Since NotebookLM has a 500-character prompt limit, use this two-part structure:

**Part 1: The Actual Prompt (< 500 chars)**
- Concise, actionable steering
- Copy-paste ready for NotebookLM
- Follows persona → sources → topics → outcome pattern

**Part 2: Extended Context (For facilitators only)**
- Detailed background information
- Full meeting objectives and questions
- Resource references
- Implementation notes
- *DO NOT copy to NotebookLM* - this is reference material

---

## 9. Common Mistakes to Avoid

❌ **Mistake 1: Prompt Too Long**
```
This is a podcast for Meeting 1 covering chapters 1, 2, and 3 of Accelerate by Nicole Forsgren, Jez Humble, and Gene Kim. In chapter 1 they discuss the research foundation with over 23,000 survey responses... [continues for 1,500 characters]
```

✅ **Fix:** Trust your uploaded sources
```
Focus on Chapters 1-3 from uploaded Accelerate sources. Cover research foundation, DORA metrics, and culture types in 15-20 minutes.
```

---

❌ **Mistake 2: No Persona Specified**
```
Create a podcast about DORA metrics from Chapter 2.
```

✅ **Fix:** Add target audience
```
Assume the listener is a DevOps engineer. Create a podcast explaining DORA metrics from Chapter 2 with practical examples.
```

---

❌ **Mistake 3: Vague Topic Focus**
```
Talk about the book and what's interesting.
```

✅ **Fix:** Explicit topic structure
```
Cover three topics: (1) DORA metrics definitions, (2) speed vs stability myth-busting with stats, (3) culture types and behaviors.
```

---

❌ **Mistake 4: No Output Guidance**
```
Discuss chapters 1-3.
```

✅ **Fix:** Specify format and length
```
Create a 15-20 minute conversational deep dive on chapters 1-3. Balance research rigor with real-world applicability.
```

---

## 10. Testing Your Prompts

**Quick Check:**
1. ✅ Character count under 500?
2. ✅ Persona specified at beginning?
3. ✅ Sources explicitly named?
4. ✅ Topics listed with structure?
5. ✅ Output format and length specified?
6. ✅ Discussion prep questions included?

**Character Counter Tool:**
Use any online character counter or this bash command:
```bash
echo "Your prompt here" | wc -m
```

---

## 11. Additional Resources

**Official Documentation:**
- [NotebookLM Support: Customize Audio Overviews](https://support.google.com/notebooklm/answer/16454555)
- [NotebookLM Support: Source Management](https://support.google.com/notebooklm/answer/16215270)

**Prompt Engineering Guides:**
- [Vanderbilt University: Prompt Patterns](https://www.vanderbilt.edu/generative-ai/prompt-patterns/)
- [Learn Prompting: NotebookLM Guide](https://learnprompting.org/blog/notebooklm-guide)

**Research Articles:**
- [In AI We Trust: NotebookLM Comprehensive Guide](https://inaiwetrust.com/p/notebooklm-comprehensive-guide-18)
- [AI for Lifelong Learners: Getting Familiar with NotebookLM](https://aiforlifelonglearners.substack.com/p/getting-familiar-with-google-notebooklm)

---

## 12. Source Upload Limits

**Per Notebook:**
- **50 sources maximum** (default)
- **500,000 words per source** (sufficient for entire books)
- **Supported formats:** PDF, text, Google Docs, URLs, YouTube videos, audio files

**Best Practices:**
- Upload all relevant chapters as separate sources for granular control
- Include supplementary materials (meeting notes, discussion guides) as additional sources
- Use descriptive source names for easy reference in prompts

---

## Version History

- **v1.0** (2025-01-09): Initial best practices guide based on NotebookLM research and official documentation

---

**Need Help?**
See [README.md](README.md) for prompt examples and meeting-specific guidance.
