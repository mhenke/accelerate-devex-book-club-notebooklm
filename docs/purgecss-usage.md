# PurgeCSS Integration

## Overview

PurgeCSS automatically removes unused CSS from the built site, reducing file size by ~52%.

## Results

- **Original CSS**: 242 KB
- **Purged CSS**: 116 KB  
- **Savings**: 126 KB (52% reduction)

## Usage

### Analyze (without modifying files)

```bash
npm run purgecss:analyze
```

This shows what would be removed without actually modifying files.

### Production Build (with PurgeCSS)

```bash
npm run build:production
```

This builds the site AND runs PurgeCSS on the output.

### Manual PurgeCSS

```bash
npm run purgecss
```

Runs PurgeCSS on already-built site (requires `npm run build` first).

## What Gets Removed

PurgeCSS scans all HTML files in `docs/_site/` and removes any CSS selectors that aren't found.

### Protected Classes (Safelist)

These patterns are NEVER removed:

- `meeting-theme--*` - Meeting color themes
- `fa-*`, `fas`, `far`, `fab` - Font Awesome icons
- `sr-only` - Screen reader only content
- `focus-visible` - Focus states
- Data attributes (`data-*`)
- ARIA attributes (`aria-*`)

## Configuration

The PurgeCSS configuration is in `scripts/purgecss.sh`:

```bash
npx purgecss \
  --css docs/_site/assets/main.css \
  --content 'docs/_site/**/*.html' \
  --safelist-patterns-children '/^meeting-theme--/' '/^fa-/' \
  --output docs/_site/assets/
```

## When to Use

### Development
❌ **Don't use PurgeCSS** - You want all CSS available for testing

### Production/Deployment
✅ **Use `npm run build:production`** - Removes unused CSS for faster load times

### Testing
✅ **Use `npm run purgecss:analyze`** - Check what would be removed

## Common Issues

### Missing Styles After PurgeCSS

If styles are missing after running PurgeCSS, the class might be:

1. **Added dynamically via JavaScript** - Add to safelist in `scripts/purgecss.sh`
2. **Used in a template not scanned** - Ensure HTML is in `docs/_site/`
3. **Using pseudo-classes** - May need pattern in safelist

### How to Add to Safelist

Edit `scripts/purgecss.sh` and add pattern:

```bash
--safelist-patterns-children '/^my-pattern/' \
```

## Verification

After running PurgeCSS, test the site:

```bash
npm run serve
```

Visit all pages and check:
- [ ] Meeting pages render correctly
- [ ] Icons display properly  
- [ ] Interactive elements work
- [ ] Responsive design intact
- [ ] Theme colors apply correctly

## CI/CD Integration

For GitHub Pages deployment, PurgeCSS should run automatically:

```yaml
- name: Build with PurgeCSS
  run: npm run build:production
```

## Files

- `scripts/purgecss.sh` - Main PurgeCSS script
- `package.json` - NPM scripts
- `purgecss.config.cjs` - Config file (currently not used, kept for reference)
