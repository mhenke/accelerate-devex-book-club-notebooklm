# Line Wrapping Strategy for MD013 Violations

## Overview

Strategy for resolving 158 MD013 line-length violations (89.8% of all MD violations) across the Jekyll site.

## Wrapping Rules & Priorities

### 1. Line Length Targets

- **Target**: 120 characters (markdownlint configured limit)
- **Soft Limit**: 115 characters (buffer for minor edits)
- **Hard Limit**: Never exceed 120 characters

### 2. Content-Type Specific Rules

#### A. URLs and Links

**Priority**: HIGH (common cause of violations)

```markdown
<!-- BAD -->

This is a very long line with a URL that exceeds the limit: https://example.com/very/long/path/to/resource?param1=value1&param2=value2

<!-- GOOD -->

This is a very long line with a URL that exceeds the limit:
<https://example.com/very/long/path/to/resource?param1=value1&param2=value2>

<!-- OR -->

This is a very long line with a [URL][1] that doesn't exceed the limit.

[1]: https://example.com/very/long/path/to/resource?param1=value1&param2=value2
```

#### B. Long Sentences

**Priority**: MEDIUM (preserve readability)

```markdown
<!-- BAD -->

This is an extremely long sentence that contains multiple clauses and ideas that should probably be broken into smaller, more digestible pieces for better readability and compliance.

<!-- GOOD -->

This is an extremely long sentence that contains multiple clauses and ideas
that should probably be broken into smaller, more digestible pieces for better
readability and compliance.
```

#### C. Lists and Code References

**Priority**: HIGH (common in technical docs)

```markdown
<!-- BAD -->

- This is a very long list item that describes complex technical concepts and implementation details that exceed the line limit

<!-- GOOD -->

- This is a very long list item that describes complex technical concepts
  and implementation details that exceed the line limit
```

#### D. Code Block Descriptions

**Priority**: MEDIUM (preserve code context)

```markdown
<!-- BAD -->

The following code demonstrates how to implement a complex algorithm that processes data efficiently while maintaining performance characteristics:

<!-- GOOD -->

The following code demonstrates how to implement a complex algorithm that
processes data efficiently while maintaining performance characteristics:
```

### 3. Automated vs Manual Wrapping

#### Automated Candidates (85% of violations)

- Simple prose paragraphs
- List items without complex formatting
- Standard markdown links
- Headers with simple text

#### Manual Review Required (15% of violations)

- Lines with embedded code/backticks
- Complex markdown syntax (tables, nested lists)
- YAML front matter blocks
- Lines with special formatting requirements

### 4. File-Specific Strategies

#### Meeting Files (docs/\_meetings/\*.md)

- **Challenge**: Long technical descriptions and URLs
- **Strategy**: Prioritize URL reference links, wrap at natural sentence breaks
- **Special Handling**: Code examples and technical terminology

#### Documentation Files (docs/\*.md)

- **Challenge**: Mixed content types (prose + code + links)
- **Strategy**: Context-aware wrapping preserving code readability

#### Root Files (\*.md)

- **Challenge**: Varied formats and purposes
- **Strategy**: File-by-file assessment based on content type

### 5. Wrapping Patterns

#### Pattern 1: Natural Break Points

```markdown
<!-- Wrap at conjunctions, prepositions, after punctuation -->

This is a long sentence, and it contains multiple clauses that need careful
consideration when wrapping to maintain readability.
```

#### Pattern 2: List Continuation

```markdown
<!-- Use proper indentation for wrapped list items -->

- Long list item that needs wrapping should continue
  with proper indentation alignment
```

#### Pattern 3: URL Handling

```markdown
<!-- Reference-style links for long URLs -->

See the [documentation][doc-link] for more details.

[doc-link]: https://very-long-url-that-would-exceed-limits.com/path
```

#### Pattern 4: Code Reference Preservation

```markdown
<!-- Keep code references together when possible -->

The `very_long_function_name()` should be called with specific parameters
to ensure proper functionality.
```

### 6. Jekyll-Specific Considerations

#### Front Matter Handling

- YAML front matter lines >120 chars need special handling
- Preserve YAML syntax while wrapping values
- Use YAML block scalar notation for long strings

#### Liquid Template Integration

- Ensure wrapped content doesn't break Jekyll processing
- Test rendered output after wrapping changes
- Verify markdown conversion accuracy

### 7. Validation & Testing

#### Pre-Fix Checks

1. Run `npm run lint:md` to identify current violations
2. Document line count and specific violation patterns
3. Create test cases for complex wrapping scenarios

#### Post-Fix Validation

1. Verify `npm run lint:md` passes
2. Test Jekyll build: `bundle exec jekyll build`
3. Check rendered HTML output for formatting integrity
4. Validate site functionality with `npm run validate`

### 8. Implementation Order

#### Phase 1: High-Volume, Low-Risk Files

- Root documentation files (README, ATTRIBUTION, etc.)
- Simple prose-heavy content

#### Phase 2: Meeting Documentation

- docs/\_meetings/\*.md files
- Technical content requiring careful handling

#### Phase 3: Site Documentation

- docs/\*.md files
- Mixed content types needing context-aware wrapping

#### Phase 4: Specialized Files

- Configuration and setup documentation
- Files with complex formatting requirements

### 9. Quality Assurance

#### Readability Metrics

- Ensure wrapped content maintains logical flow
- Preserve meaning and context across line breaks
- Maintain professional documentation standards

#### Technical Validation

- All links remain functional after wrapping
- Code references render correctly
- Jekyll build remains stable

#### Accessibility Considerations

- Line breaks don't interfere with screen reader flow
- Maintain semantic meaning of content structure
- Preserve document navigation patterns

## Success Criteria

1. ✅ Reduce MD013 violations from 158 to 0
2. ✅ Maintain Jekyll build compatibility
3. ✅ Preserve content readability and meaning
4. ✅ Pass all validation tests post-implementation
5. ✅ Document any special cases or exceptions

## Implementation Notes

- Use backup created in TASK-002 for rollback if needed
- Test changes incrementally by file or section
- Maintain commit history for detailed change tracking
- Consider creating git branches for major wrapping phases
