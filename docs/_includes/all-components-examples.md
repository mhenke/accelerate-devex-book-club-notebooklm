# Complete Reusable Components Library - Usage Examples

## 🎯 Interactive Learning Checkpoint Components

### 1. Advanced Checkpoint Card
```liquid
{% include advanced-checkpoint.html 
  title="DORA Metrics Assessment"
  icon="fas fa-chart-line"
  question="Rate your team's current performance:"
  subtext="Consider all four key metrics when making your assessment"
  instruction="Select the level that best describes your current state"
  answers=site.data.checkpoint_answers.dora_assessment
  layout="vertical"
  feedback_id="dora-feedback"
  radio_name="dora-performance"
  card_class="dora-assessment"
%}
```

### 2. Culture Assessment Checkpoint
```liquid
{% include culture-checkpoint.html 
  title="Culture Assessment"
  icon="fas fa-users"
  question="Assess your organization's culture type:"
  feedback_id="culture-feedback"
  radio_name="culture-type"
  card_class="culture-assessment"
%}
```

### 3. Slider Checkpoint Card
```liquid
{% include reusable-slider-checkpoint.html 
  icon="fas fa-palette"
  title="Tool Freedom"
  question="Rate your team's tool selection autonomy:"
  labels="Restricted|Flexible|Full Freedom"
  feedback_id="tool-slider"
  slider_id="tool-autonomy"
  theme="primary"
%}
```

## 📊 Display Components

### 4. Insight Cards
```liquid
{% include reusable-insight-card.html 
  icon="fas fa-microscope"
  title="Evidence-Based"
  description="Rigorous research backing all findings"
  theme="success"
%}
```

### 5. Metric Cards
```liquid
{% include reusable-metric-card.html 
  icon="fas fa-chart-line"
  title="Delivery Lead Time"
  description="Time from code commit to production deployment"
  goal="Goal: Hours/Days not Weeks/Months"
  metric_type="lead-time"
  current_value="2.5 hours"
  trend="improving"
%}
```

### 6. Stats Cards
```liquid
{% include reusable-stats-card.html 
  icon="fas fa-clock"
  title="Recovery Time"
  stat_number="440"
  stat_text="times faster lead time"
  description="From commit to production in minutes, not months"
  theme="success"
  trend="improving"
%}
```

### 7. Employee Net Promoter Score Cards
```liquid
{% include reusable-enps-card.html 
  title="Employee Net Promoter Score (eNPS)"
  before_value="-15"
  after_value="+42"
  before_label="Before DevOps"
  after_label="After DevOps"
  description="Improvement in employee satisfaction and advocacy"
  theme="wellbeing"
%}
```

## 💡 Content Components

### 8. Law Statement Cards
```liquid
{% include reusable-law-statement.html 
  title="Conway's Law"
  quote="Organizations design systems that mirror their own communication structure."
  author="Melvin Conway"
  context="Computer Programmer, 1967"
  theme="tech"
%}
```

### 9. Discussion Cards
```liquid
{% include reusable-discussion-card.html 
  icon="fas fa-chart-line"
  title="Current State Assessment"
  question="How would you rate your team on each DORA metric?"
  prompts="Deployment frequency|Lead time for changes|Time to restore service|Change failure rate"
  theme="primary"
%}
```

### 10. Application Cards
```liquid
{% include reusable-application-card.html 
  icon="fas fa-robot"
  title="Automation Success Stories"
  description="Share examples from your experience:"
  prompts=site.data.application_prompts.automation
  theme="automation"
%}
```

### 11. Related Resources Cards
```liquid
{% include reusable-resource-card.html 
  icon="fas fa-chart-line"
  title="DORA Research & Assessment"
  links=site.data.resource_links.dora_research
  theme="research"
  show_external_icons=true
%}
```

## 🎨 Theme Options

### Available Themes:
- `default` - Blue theme (default)
- `primary` - Dark blue
- `success` - Green 
- `warning` - Yellow/Orange
- `danger` - Red
- `info` - Light blue
- `culture` - Purple
- `technical` - Green
- `automation` - Blue
- `architecture` - Purple
- `security` - Orange
- `collaboration` - Pink
- `performance` - Cyan
- `wellbeing` - Purple
- `books` - Orange
- `tools` - Cyan
- `research` - Red

### Layout Options:
- `vertical` (default) - Stacked layout
- `grid-2` - Two column grid
- `grid-3` - Three column grid  
- `horizontal` - Horizontal layout

### Custom Classes:
- `featured-*` - Larger, emphasized styling
- `highlight-*` - Special highlighting
- Any custom CSS class name

## 📋 Data Structure Examples

### Checkpoint Answers (checkpoint_answers.yml)
```yaml
dora_assessment:
  - text: "Elite Performance"
    subtext: "Daily deployments, <1 hour lead time"
    value: "elite"
    performance_class: "performance-high"
```

### Resource Links (resource_links.yml)
```yaml
dora_research:
  - title: "2024 State of DevOps Report"
    url: "https://dora.dev/research/2024/dora-report/"
    description: "Latest research findings"
```

### Application Prompts (application_prompts.yml)
```yaml
automation:
  - text: "What manual process did you automate?"
    icon: "fas fa-lightbulb"
```

## 🔧 Advanced Usage Patterns

### Grid Layouts for Cards
```liquid
<div class="insights-grid">
  {% for insight in site.data.insights.meeting_1 %}
    {% include reusable-insight-card.html 
      icon=insight.icon
      title=insight.title
      description=insight.description
      theme=insight.theme
    %}
  {% endfor %}
</div>
```

### Dynamic Content from Data
```liquid
{% for metric in site.data.dora_metrics %}
  {% include reusable-metric-card.html 
    icon=metric.icon
    title=metric.title
    description=metric.description
    goal=metric.goal
    metric_type=metric.type
  %}
{% endfor %}
```

### Conditional Components
```liquid
{% if page.has_checkpoints %}
  {% include advanced-checkpoint.html 
    title="Assessment"
    answers=page.checkpoint_data
    feedback_id="page-feedback"
    radio_name="page-assessment"
  %}
{% endif %}
```

## 📱 Responsive Design

All components include:
- **Mobile-first design** with responsive breakpoints
- **Touch-friendly interactions** for mobile devices
- **Flexible layouts** that adapt to screen size
- **Accessible markup** with proper ARIA attributes
- **Performance optimized** CSS and JavaScript

## ♿ Accessibility Features

- **Semantic HTML** structure
- **ARIA labels** and descriptions
- **Keyboard navigation** support
- **Screen reader** compatible
- **Color contrast** compliant
- **Focus indicators** for interactive elements

## 🚀 Performance Considerations

- **CSS-in-JS approach** for component-specific styles
- **Lazy loading** JavaScript for interactive components
- **Minimal dependencies** - uses vanilla JavaScript
- **Optimized images** and icons
- **Efficient DOM manipulation** for dynamic content

This library provides a complete set of reusable components that maintain consistency while allowing for customization and theming across all meeting pages!