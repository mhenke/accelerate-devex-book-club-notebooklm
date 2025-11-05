# Validation & Link Checking Guide

This repository uses a two-tier validation strategy for optimal developer experience and comprehensive CI/CD checking.

## 🏠 Local Development (Fast Feedback)

### Quick Validation Commands

```bash
# Check everything (recommended before commit)
npm run lint                    # CSS + JS + Markdown linting
npm run test:links              # Check all markdown links (quiet)

# Individual checks
npm run lint:md                 # Markdown linting only
npm run lint:css                # CSS/SCSS linting only
npm run lint:js                 # JavaScript linting only
npm run test:links:verbose      # Link checking with details
```

### Installed Tools

#### 1. **markdownlint-cli2** (Markdown Linting)
- Checks markdown formatting and style
- Config: `.markdownlint.json`
- Faster and more flexible than markdownlint-cli

```bash
# Run manually
npx markdownlint-cli2 "**/*.md" "#node_modules"
```

#### 2. **markdown-link-check** (Link Validation)
- Validates all links in markdown files
- Config: `.markdown-link-check.json`
- Checks both internal and external links

```bash
# Check specific file
npx markdown-link-check resources/meetings/meeting-1/leadership/agenda.md
```

#### 3. **Custom Bash Script**
- Alternative link checker: `./verify-links.sh`
- Uses native file system checks for faster local validation

---

## ☁️ CI/CD (Comprehensive Validation)

### GitHub Actions Workflows

#### 1. **Markdown Lint** (`.github/workflows/markdown-lint.yml`)
- Runs on: Push to main, PRs, manual trigger
- Uses: markdownlint-cli2
- Triggers: Any `.md` file changes

#### 2. **Link Checker** (`.github/workflows/link-checker.yml`)
- Runs on: Push to main, PRs, weekly schedule, manual trigger
- Uses: **lychee-action** (fast, Rust-based)
- Config: `lychee.toml`
- Features:
  - Checks all markdown and HTML links
  - Retries failed links
  - Creates detailed summary
  - Weekly automated runs

### Lychee Configuration

Customize link checking in `lychee.toml`:
- Exclude patterns (localhost, example domains)
- Timeout and retry settings
- Accepted HTTP status codes
- File type includes/excludes

---

## 📋 Validation Workflow

### Before Committing

```bash
# 1. Lint markdown
npm run lint:md

# 2. Check links
npm run test:links

# 3. (Optional) Full validation
npm run lint && npm run test:links
```

### In Pull Requests

GitHub Actions automatically run:
1. ✅ Markdown linting
2. ✅ Link validation
3. ✅ Build validation (Jekyll)
4. ✅ HTML validation

### Weekly Maintenance

The link checker runs automatically every Monday at 9 AM UTC to catch:
- Broken external links
- Dead documentation references
- Moved/renamed files

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `.markdownlint.json` | Markdown linting rules |
| `.markdown-link-check.json` | npm link checker config |
| `lychee.toml` | GitHub Actions link checker config |
| `verify-links.sh` | Bash script for fast local checks |

---

## 🐛 Troubleshooting

### False Positives

**External link timeout:**
```bash
# Increase timeout in .markdown-link-check.json
{
  "timeout": "30s"  # Default is 20s
}
```

**Exclude specific URLs:**
Add to `lychee.toml`:
```toml
exclude = [
  'https://problematic-site.com/*'
]
```

### Performance

**Local checks too slow:**
- Use `npm run test:links` (quiet mode) instead of verbose
- Use `./verify-links.sh` for fastest local validation
- Check specific files: `npx markdown-link-check path/to/file.md`

---

## 📊 Current Status

### ✅ Fully Validated (All Links Working)
- All `agenda.md` files (meetings 1-4)
- All `outline.md` files (meetings 1-4)
- Meeting 1 handouts
- Meeting 3 handouts

### ⚠️ Known Issues
See output of `npm run test:links` for current broken links.
Most are references to files not yet created.

---

## 🎯 Best Practices

1. **Run locally first** - Catch issues before pushing
2. **Fix broken links immediately** - Don't let them accumulate
3. **Use relative paths** - Easier to maintain than absolute paths
4. **Test after refactoring** - File moves often break links
5. **Review GitHub Action results** - They catch what local checks miss

---

## 🔗 Tool Documentation

- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
- [markdown-link-check](https://github.com/tcort/markdown-link-check)
- [lychee](https://github.com/lycheeverse/lychee)
- [lychee-action](https://github.com/lycheeverse/lychee-action)
