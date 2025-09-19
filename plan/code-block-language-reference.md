# Code Block Language Reference for MD040/MD046 Fixes

## Overview

Reference guide for resolving 11 code block violations (MD040: missing language + MD046: style conversion) across Jekyll site files.

## Identified Code Block Violations

### MD040: Missing Language Specification (2 violations)

1. `book-club-guide.md:92` - Generic code block
2. `PERCY_SETUP.md:125` - Generic code block

### MD046: Code Block Style Conversion (9 violations)

Files requiring fenced → indented conversion:

- `docs/_meetings/meeting-1.md:259`
- `docs/_meetings/meeting-2.md:199`
- `docs/_meetings/meeting-3.md:704, 766`
- `docs/_meetings/meeting-4.md:83`
- `docs/feeds.md:111`
- `docs/index.md:53, 94`
- `docs/meetings.md:56`
- `docs/prompts.md:41, 154`
- `docs/resources.md:32, 158`
- `docs/transformation-complete.md:307, 365, 404`

## Language Classification System

### 1. Primary Languages (Jekyll Site Context)

#### Web Technologies

```markdown
- `html` - HTML markup
- `css` - Stylesheets and SCSS
- `scss` - Sass/SCSS syntax
- `javascript` - JavaScript code
- `json` - JSON data structures
- `yaml` - YAML configuration (Jekyll \_config.yml, front matter)
```

#### Documentation & Markup

```markdown
- `markdown` - Markdown syntax examples
- `liquid` - Jekyll/Liquid template code
- `text` - Plain text or terminal output
- `bash` - Shell commands and scripts
- `shell` - Generic shell commands
- `zsh` - ZSH-specific commands
```

#### Configuration & Data

```markdown
- `toml` - Configuration files
- `xml` - XML markup (feeds, sitemaps)
- `ini` - Configuration files
- `env` - Environment variable files
```

### 2. Context-Specific Language Detection

#### By File Type Analysis

**Meeting Files** (`docs/_meetings/*.md`):

- Likely: `javascript`, `json`, `yaml`, `bash`, `markdown`
- Context: Technical DevOps content, code examples, configuration

**Documentation Files** (`docs/*.md`):

- Likely: `yaml`, `liquid`, `html`, `css`, `bash`, `markdown`
- Context: Jekyll site documentation, configuration examples

**Root Files** (`*.md`):

- Likely: `bash`, `yaml`, `json`, `text`, `markdown`
- Context: Setup instructions, configuration, documentation

#### By Content Pattern Recognition

**Command Line Examples**:

````markdown
<!-- Pattern: $ command or command execution -->

```bash
$ npm install
cd /path/to/project
```
````

**YAML Configuration**:

````markdown
<!-- Pattern: key: value, Jekyll front matter -->

```yaml
title: 'Example'
layout: default
```
````

**JSON Data**:

````markdown
<!-- Pattern: {"key": "value"} structures -->

```json
{
  "name": "value",
  "array": [1, 2, 3]
}
```
````

**HTML Markup**:

````markdown
<!-- Pattern: <tag> elements -->

```html
<div class="example">
  <p>Content</p>
</div>
```
````

**CSS/SCSS Styles**:

````markdown
<!-- Pattern: selectors { property: value; } -->

```scss
.example {
  color: $primary-color;
  @include mixin-name;
}
```
````

### 3. Decision Matrix for Language Assignment

#### Step 1: Content Analysis Patterns

```markdown
1. **Command Line**: Contains `$`, `cd`, `npm`, `bundle`, `git` → `bash`
2. **Key-Value Pairs**: Contains `key:`, indented structure → `yaml`
3. **HTML Tags**: Contains `<` and `>` with tag names → `html`
4. **JSON Structure**: Contains `{`, `"key":` format → `json`
5. **CSS Rules**: Contains `.class` or `#id` with `{` → `css`/`scss`
6. **Code Comments**: Contains `//` or `/* */` → language-specific
7. **Liquid Tags**: Contains `{%` or `{{` → `liquid`
```

#### Step 2: File Context Clues

```markdown
1. **Meeting Files**: Technical content → programming languages likely
2. **Config Examples**: Setup instructions → `yaml`, `json`, `bash`
3. **Jekyll Docs**: Site documentation → `liquid`, `html`, `css`
4. **README/Setup**: Installation instructions → `bash`, `text`
```

#### Step 3: Fallback Strategy

```markdown
1. **Specific Language**: Use most specific language available
2. **Generic Code**: Use `text` for unidentifiable code blocks
3. **Mixed Content**: Split into multiple fenced blocks if possible
4. **Documentation**: Use `markdown` for Markdown syntax examples
```

### 4. Common Code Block Patterns in Jekyll Sites

#### Jekyll Configuration

```yaml
# _config.yml examples
title: 'Site Title'
plugins:
  - jekyll-feed
```

#### Front Matter

```yaml
---
layout: post
title: 'Example'
date: 2023-01-01
---
```

#### Liquid Templates

```liquid
{% for post in site.posts %}
  <h2>{{ post.title }}</h2>
{% endfor %}
```

#### Build Commands

```bash
bundle install
bundle exec jekyll build
npm run lint
```

#### Package Configuration

```json
{
  "scripts": {
    "build": "jekyll build",
    "test": "npm run lint"
  }
}
```

### 5. Conversion Strategy

#### MD040: Add Language Specification

```markdown
<!-- BEFORE (MD040 violation) -->
```

code content here

````

<!-- AFTER (compliant) -->
```bash
code content here
````

````

#### MD046: Convert to Fenced Style
```markdown
<!-- BEFORE (MD046 violation - indented) -->
    code content here
    more code content

<!-- AFTER (compliant - fenced) -->
```language
code content here
more code content
````

```

### 6. File-by-File Language Mapping Plan

#### Priority 1: Clear Context Files
- `PERCY_SETUP.md` → Likely `bash` (setup commands)
- `book-club-guide.md` → Likely `markdown` or `text` (examples)

#### Priority 2: Documentation Files
- `docs/index.md` → Mixed: `yaml`, `liquid`, `html`
- `docs/feeds.md` → Likely `xml` (RSS feeds)
- `docs/prompts.md` → Likely `text` or `markdown`

#### Priority 3: Meeting Files
- `docs/_meetings/*.md` → Context-dependent: `json`, `yaml`, `javascript`, `bash`

#### Priority 4: Complex Content
- `docs/transformation-complete.md` → Mixed content analysis needed

### 7. Quality Assurance Checklist

#### Language Selection Validation
- [ ] Language syntax highlighting renders correctly
- [ ] Code block content is appropriate for assigned language
- [ ] No false positives from syntax highlighting
- [ ] Maintain code readability and context

#### Jekyll Build Compatibility
- [ ] Syntax highlighting plugins support selected languages
- [ ] Rouge highlighter (Jekyll default) recognizes languages
- [ ] No build warnings or errors introduced
- [ ] Generated HTML renders properly

#### Documentation Standards
- [ ] Code blocks maintain technical accuracy
- [ ] Examples remain functional and correct
- [ ] Syntax highlighting enhances rather than distracts
- [ ] Consistent language usage across similar content

### 8. Implementation Order

#### Phase 1: Simple Cases (MD040)
1. Identify clear language context
2. Add appropriate language specification
3. Test syntax highlighting

#### Phase 2: Style Conversion (MD046)
1. Convert indented blocks to fenced format
2. Add appropriate language specification
3. Validate formatting preservation

#### Phase 3: Validation
1. Run `npm run lint:md` to verify fixes
2. Test Jekyll build compatibility
3. Review syntax highlighting in rendered output

## Language Reference Quick List

### Most Likely Languages for This Project
1. `bash` - Shell commands, installation instructions
2. `yaml` - Jekyll configuration, front matter
3. `json` - Package files, data structures
4. `html` - Web markup examples
5. `css`/`scss` - Styling examples
6. `liquid` - Jekyll template code
7. `markdown` - Documentation examples
8. `text` - Plain text, generic content
9. `javascript` - Web development examples
10. `xml` - Feed configuration, sitemap examples

### Fallback Strategy
- **Unknown/Mixed**: Use `text`
- **Documentation Examples**: Use `markdown`
- **Configuration**: Prefer `yaml` over `json` unless clearly JSON syntax
- **Commands**: Use `bash` for shell commands
- **Web Code**: Use most specific language (`html` > `css` > `javascript`)
```
