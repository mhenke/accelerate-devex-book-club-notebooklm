# NotebookLM Documentation

Guide for using Google's NotebookLM to generate supplementary educational content for the Accelerate DevOps Book Club.

## What is NotebookLM?

NotebookLM is Google's AI-powered research assistant that can:
- Analyze uploaded documents and sources
- Generate audio podcasts with two AI hosts discussing the material
- Create study guides, summaries, and Q&A content
- Provide citations back to source material

**Official site:** https://notebooklm.google.com

## How We Use NotebookLM

This book club uses NotebookLM to create **optional supplementary content** that participants can consume between meetings:

### Content Types

**Podcasts (Audio):**
- **Brief** (5-10 min) - Quick chapter summaries
- **Deep Dive** (15-25 min) - Comprehensive exploration
- **Debate** (15-20 min) - Pro/con format exploring tensions
- **Critique** (15-20 min) - Critical analysis of research

**Videos (Visual):**
- Animated overviews with key concepts
- Visual summaries of DORA metrics and frameworks

### Why Use NotebookLM Content?

**For Participants:**
- Reinforces learning through different modality (audio/visual)
- Accessible during commute, exercise, chores
- Provides recap without re-reading chapters
- Offers alternative explanations of complex concepts

**For Facilitators:**
- Reduces prep time (can listen instead of re-reading)
- Provides consistent baseline understanding
- Helps gauge what concepts need clarification
- Offers backup content if discussion lags

## Generating NotebookLM Content

### Step 1: Gather Sources

Each meeting has a curated list of source documents to upload:

- [Meeting 1 Sources](../meetings/meeting-1/notebooklm/ALL-SOURCES-TO-UPLOAD.md)
- [Meeting 2 Sources](../meetings/meeting-2/notebooklm/ALL-SOURCES-TO-UPLOAD.md)
- [Meeting 3 Sources](../meetings/meeting-3/notebooklm/ALL-SOURCES-TO-UPLOAD.md)
- [Meeting 4 Sources](../meetings/meeting-4/notebooklm/ALL-SOURCES-TO-UPLOAD.md)

**Required sources:**
- Relevant book chapters (PDF or text)
- Chapter notes from this repository
- Key questions document
- Meeting outline

**Optional sources:**
- Discussion guide questions
- DORA metrics templates
- Culture assessment worksheets

### Step 2: Create NotebookLM Notebook

1. Go to https://notebooklm.google.com
2. Create new notebook
3. Name it clearly: "Accelerate Book Club - Meeting X"
4. Upload all sources from Step 1

### Step 3: Generate Content Using Prompts

Each meeting folder contains prompt files:

**For Brief Podcast:**
```
meetings/meeting-X/notebooklm/podcast-brief.md
```

**For Deep Dive Podcast:**
```
meetings/meeting-X/notebooklm/podcast-deep-dive-default.md
meetings/meeting-X/notebooklm/podcast-deep-dive-shorter.md (10-15 min)
meetings/meeting-X/notebooklm/podcast-deep-dive-longer.md (20-25 min)
```

**For Alternative Formats:**
```
meetings/meeting-X/notebooklm/podcast-critique.md
meetings/meeting-X/notebooklm/podcast-debate.md
meetings/meeting-X/notebooklm/video.md
```

**To use prompts:**
1. Open the prompt file in this repository
2. Copy the full prompt text (everything under "Prompt for NotebookLM")
3. Paste into NotebookLM's "Audio Overview" custom instructions
4. Generate content
5. Review and download

### Step 4: Review and Share

**Quality Check:**
- Listen to first 2-3 minutes
- Verify it covers intended topics
- Check for factual accuracy
- Ensure appropriate tone and level

**Distribution:**
- Upload to shared drive or S3 bucket
- Share link in meeting prep email
- Post in team chat/Slack
- Add to meeting resources page

## Prompt Design Best Practices

### Effective Prompt Structure

```markdown
# Core Instruction
[Be specific about format, duration, audience]

# Context
[Provide background on book club, participants, goals]

# Content Focus
[List specific topics, chapters, concepts to cover]

# Style Guidelines
[Tone, language level, examples to use/avoid]

# Format Requirements
[Structure, segments, transitions]

# Success Criteria
[What makes this content valuable]
```

### Tips for Better Prompts

**Be Specific:**
- ❌ "Create a podcast about the chapters"
- ✅ "Create a 7-minute podcast that explains DORA metrics with real-world examples for mid-level software engineers"

**Provide Context:**
- Include: Book club format, participant backgrounds, time constraints
- Explain: Why this content matters, how it fits into learning journey

**Request Examples:**
- Ask for "concrete scenarios" not "theoretical explanations"
- Specify: "Use deployment pipeline as running example"

**Set Guardrails:**
- Avoid: Jargon, overly academic language, vendor-specific tools
- Emphasize: Practical application, research findings, actionable insights

**Structure the Output:**
- Opening: Hook that connects to participant experience
- Body: 3-5 key concepts with examples
- Closing: Clear takeaways and preview of next content

## Common Issues and Solutions

### Issue: Generated content is too technical

**Solution:** Update prompt with:
- "Explain concepts as you would to a smart colleague unfamiliar with DevOps"
- "Avoid acronyms without defining them"
- "Use analogies from everyday life"

### Issue: Podcast is too long/short

**Solution:**
- Specify exact duration: "7-8 minutes, no more than 9"
- Request pacing: "Cover 3 main concepts with 2 minutes each"
- Use shorter/longer prompt variants

### Issue: Content misses key points

**Solution:**
- List must-cover topics explicitly in prompt
- Provide bullet points of key research findings
- Reference specific chapters and pages

### Issue: Tone doesn't match audience

**Solution:**
- Describe audience explicitly: "Practicing software engineers who are skeptical of management fads"
- Provide tone guidance: "Conversational but evidence-based. Enthusiastic but not preachy."
- Give examples of phrases to use/avoid

## Advanced Techniques

### Podcast Progression

Order podcasts to create a learning journey:

1. **Brief** - High-level overview, builds curiosity
2. **Deep Dive** - Comprehensive coverage, builds understanding
3. **Debate** - Explores tensions, builds critical thinking
4. **Critique** - Analyzes limitations, builds sophistication

### Customizing for Your Organization

**Add context in prompt:**
- "Our organization uses AWS and deploys to Kubernetes"
- "Participants work in regulated financial services industry"
- "Team is transitioning from waterfall to agile"

**Request relevant examples:**
- "Use examples from large enterprises with compliance requirements"
- "Focus on challenges for teams with legacy monolithic systems"

### Iterating on Prompts

1. Generate initial content
2. Note what's missing or off-target
3. Update prompt with corrections
4. Regenerate (can use same notebook)
5. Compare versions
6. Document what worked in prompt file

## Storage and Organization

### Recommended Structure

```
media/
├── meeting-1/
│   ├── podcast-brief.m4a
│   ├── podcast-deep-dive.m4a
│   ├── podcast-critique.m4a
│   └── video-overview.mp4
├── meeting-2/
│   └── [same structure]
...
```

### File Naming Convention

```
meeting-[number]-[type]-[variant].ext

Examples:
- meeting-1-podcast-brief.m4a
- meeting-2-podcast-deep-dive-longer.m4a
- meeting-3-video-overview.mp4
```

### Distribution Options

**AWS S3 (Current approach):**
- Upload to bucket: `s3://accelerate-devex-book-club-notebooklm/`
- Generate presigned URLs or make public
- Link from meeting pages

**Google Drive:**
- Create shared folder
- Upload and share links
- Easy for small teams

**Internal LMS:**
- If your org has learning management system
- Upload and link from there

## Legal and Ethical Considerations

### Copyright and Fair Use

- NotebookLM-generated content is derived from copyrighted book
- Use for educational purposes within your organization
- Don't publicly distribute without permission
- Consider purchasing books for all participants

### Attribution

- Always credit the original book and authors
- Note that content is "generated by AI based on Accelerate"
- Include proper citations in meeting materials

### Privacy

- Don't upload confidential organizational information
- Anonymize examples before including in prompts
- Review generated content before sharing broadly

## Resources

### Official NotebookLM Documentation
- https://notebooklm.google.com/help

### Meeting-Specific Prompts
- [Meeting 1 Prompts](../meetings/meeting-1/notebooklm/)
- [Meeting 2 Prompts](../meetings/meeting-2/notebooklm/)
- [Meeting 3 Prompts](../meetings/meeting-3/notebooklm/)
- [Meeting 4 Prompts](../meetings/meeting-4/notebooklm/)

### Book Club Resources
- [Main README](../README.md)
- [Meeting Format](../meeting-format-learning-objectives.md)
- [Key Questions](../key-questions.md)

## FAQ

**Q: Is NotebookLM content required for participants?**
A: No, it's optional supplementary material. Reading the actual book is primary.

**Q: How accurate is AI-generated content?**
A: Generally accurate when based on uploaded sources, but always verify key facts against the book.

**Q: Can we edit the generated podcasts?**
A: No, NotebookLM doesn't provide editing. If content isn't right, regenerate with updated prompt.

**Q: How much does NotebookLM cost?**
A: As of 2024, NotebookLM is free to use with a Google account.

**Q: Can we use NotebookLM for other books?**
A: Yes! This approach works for any technical or business book.

---

**Questions or suggestions?** Open an issue in this repository or contact the book club organizers.
