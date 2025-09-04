---
layout: default
title: Language Test
---

# Syntax Highlighting Test

Testing common languages used in MD040/MD046 fixes:

## Shell/Bash Commands

```bash
npm install
cd /path/to/project
bundle exec jekyll build
```

## YAML Configuration

```yaml
title: 'Test Site'
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

## JSON Data

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "scripts": {
    "build": "jekyll build"
  }
}
```

## HTML Markup

```html
<div class="container">
  <h1>Title</h1>
  <p>Content</p>
</div>
```

## CSS Styles

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

## SCSS Styles

```scss
$primary-color: #333;

.container {
  max-width: 1200px;
  color: $primary-color;

  @media (max-width: 768px) {
    padding: 10px;
  }
}
```

## JavaScript

```javascript
function initialize() {
  console.log('Site initialized');
  return true;
}
```

## Liquid Templates

```liquid
{% for post in site.posts %}
  <h2>{{ post.title }}</h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
```

## Markdown Syntax

```markdown
# Heading

This is **bold** and _italic_ text.

- List item 1
- List item 2
```

## Plain Text

```text
This is plain text output
No syntax highlighting applied
Example terminal output or documentation
```

## XML (for feeds)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Test Feed</title>
    <item>
      <title>Test Item</title>
    </item>
  </channel>
</rss>
```
