# Interactive Learning Checkpoint Components - Usage Examples

## 1. Basic Checkpoint Card (Simple Question/Answer)

```liquid
{% include advanced-checkpoint.html 
  title="Deployment Confidence"
  icon="fas fa-heart"
  question="How does your team feel about deployments?"
  answers=site.data.checkpoint_answers.deployment_confidence
  feedback_id="confidence-feedback"
  radio_name="deployment-confidence"
  card_class="deployment-anxiety"
%}
```

## 2. DORA Assessment with Subtext

```liquid
{% include advanced-checkpoint.html 
  title="DORA Metrics Assessment"
  icon="fas fa-chart-line"
  question="Rate your team's current performance:"
  subtext="Consider deployment frequency, lead time, recovery time, and change failure rate"
  instruction="Select the level that best describes your current state across all four metrics"
  answers=site.data.checkpoint_answers.dora_assessment
  feedback_id="dora-feedback"
  radio_name="dora-performance"
  card_class="dora-assessment"
%}
```

## 3. Grid Layout for Priority Selection

```liquid
{% include advanced-checkpoint.html 
  title="Improvement Priority"
  icon="fas fa-bullseye"
  question="Which DORA metric should your team focus on first?"
  layout="grid-2"
  answers=site.data.checkpoint_answers.improvement_priority
  feedback_id="priority-feedback"
  radio_name="improvement-focus"
  card_class="improvement-priority"
%}
```

## 4. Culture Assessment with Complex Layout

```liquid
{% include advanced-checkpoint.html 
  title="Culture Assessment"
  icon="fas fa-users"
  question="Assess your organization's culture type:"
  subtext="Based on Westrum's Organizational Culture model"
  instruction="Consider how information flows, failures are handled, and innovation is supported"
  answers=site.data.checkpoint_answers.westrum_culture_types
  has_culture_layout=true
  feedback_id="culture-feedback"
  radio_name="culture-type"
  card_class="culture-assessment"
%}
```

## 5. Technical Maturity Assessment (4-option grid)

```liquid
{% include advanced-checkpoint.html 
  title="Technical Practices Maturity"
  icon="fas fa-cogs"
  question="What best describes your current technical practices?"
  answers=site.data.checkpoint_answers.technical_maturity
  layout="grid-2"
  feedback_id="technical-feedback"
  radio_name="technical-maturity"
  card_class="technical-assessment"
%}
```

## 6. Leadership Style Assessment (horizontal layout)

```liquid
{% include advanced-checkpoint.html 
  title="Leadership Style Assessment"
  icon="fas fa-users-cog"
  question="Which leadership approach best describes your organization?"
  subtext="Consider decision-making processes, autonomy levels, and management style"
  answers=site.data.checkpoint_answers.leadership_styles
  layout="horizontal"
  feedback_id="leadership-feedback"
  radio_name="leadership-style"
  card_class="leadership-assessment"
%}
```

## 7. Simple Yes/No Question

```liquid
{% include advanced-checkpoint.html 
  title="Continuous Integration"
  icon="fas fa-code-branch"
  question="Does your team practice continuous integration?"
  subtext="All developers integrate their code changes multiple times per day"
  answers=site.data.checkpoint_answers.yes_no
  feedback_id="ci-feedback"
  radio_name="continuous-integration"
  card_class="ci-assessment"
%}
```

## 8. Five-Point Scale with Instructions

```liquid
{% include advanced-checkpoint.html 
  title="Team Satisfaction Survey"
  icon="fas fa-smile"
  question="Our team is satisfied with the current deployment process"
  instruction="Rate your level of agreement with this statement"
  answers=site.data.checkpoint_answers.five_point_scale
  layout="vertical"
  feedback_id="satisfaction-feedback"
  radio_name="team-satisfaction"
  card_class="satisfaction-assessment"
%}
```

## Parameter Reference

### Required Parameters:
- `title`: Main heading for the card
- `answers`: Array of answer objects from `_data/checkpoint_answers.yml`
- `feedback_id`: Unique ID for the feedback area
- `radio_name`: Unique name for the radio button group

### Optional Parameters:
- `icon`: FontAwesome icon class
- `question`: Primary question text
- `subtext`: Secondary explanatory text below question  
- `instruction`: Instruction text for user guidance
- `layout`: "vertical" (default), "grid-2", "grid-3", "horizontal"
- `card_class`: CSS class for styling variations
- `default_feedback`: Default text in feedback area
- `has_culture_layout`: Boolean for complex culture card layout

### Answer Object Structure:
```yaml
dora_assessment:
  - text: "Elite Performance"           # Main answer text (required)
    subtext: "Daily deployments..."     # Optional explanatory text
    value: "elite"                      # Form value (required)
    performance_class: "performance-high"  # Color coding (required)
```

### Culture Type Object Structure:
```yaml
westrum_culture_types:
  - name: "Pathological"               # Culture type name
    description: "Power-oriented..."    # Description text  
    value: "pathological"              # Form value
    performance_class: "performance-low"  # Color coding
    characteristics: ["Info hoarded"]   # Optional detailed list
```

## Best Practices:

1. **Keep radio names unique** across the entire page
2. **Use descriptive feedback IDs** for JavaScript targeting
3. **Choose appropriate layouts** based on answer count and complexity
4. **Include subtexts** for complex assessments to provide guidance
5. **Use consistent performance classes** for color coding
6. **Add instructions** for multi-faceted assessments
7. **Test responsive behavior** with different layout options