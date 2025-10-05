# Design Token System - Complete Reference

**Last Updated:** October 5, 2025  
**Status:** ✅ All new tokens added and validated

---

## 🎯 Overview

This document provides a complete reference for all design tokens in the Accelerate DevEx Book Club design system. All tokens have been added to `_tokens.scss` and are ready to use.

---

## 📦 New Tokens Added (October 2025 Audit)

### Color Scale Tokens

#### Slate Scale (Dark Themes)
```scss
--color-slate-900: #0f172a;  // Darkest backgrounds
--color-slate-800: #1e293b;  // Very dark
--color-slate-700: #334155;  // Dark
--color-slate-600: #64748b;  // Medium (existing)
--color-slate-100: #f1f5f9;  // Light backgrounds
```

#### Gray Scale (Alternative)
```scss
--color-gray-800: #1a202c;   // Alternative dark
--color-gray-700: #2d3748;   // Alternative medium-dark
--color-gray-50: #f9fafb;    // Lightest (existing)
```

#### Green Scale (Success)
```scss
--color-green-900: #14532d;  // Darkest text
--color-green-700: #15803d;  // Medium
--color-green-600: #16a34a;  // Standard (existing)
--color-green-100: #ecfdf5;  // Light bg (existing)
--color-green-50: #f0fdf4;   // Lightest bg (existing)
```

#### Red Scale (Danger/Error)
```scss
--color-red-900: #7f1d1d;           // Darkest text
--color-red-800: #991b1b;           // Medium-dark
--color-red-700: #b91c1c;           // Borders
--color-red-100: #fee2e2;           // Light background
--color-red-50: #fef2f2;            // Lightest background
--color-red-gradient-start: #ff6b6b; // Gradient
--color-red-gradient-end: #ee5a24;   // Gradient
```

#### Blue Scale (Primary/Info)
```scss
--color-blue-900: #1e3a8a;  // Darkest text
--color-blue-600: #2563eb;  // Accents
--color-blue-500: #3b82f6;  // Alt (existing)
--color-blue-100: #dbeafe;  // Light bg (existing)
--color-blue-50: #eff6ff;   // Lightest bg (existing)
```

#### Orange Scale (Warning)
```scss
--color-orange-900: #7c2d12; // Darkest text
--color-orange-700: #c2410c; // Medium-dark
--color-orange-600: #ea580c; // Accents
--color-orange-50: #fff7ed;  // Lightest background
```

#### Purple Scale (Meeting 4)
```scss
--color-purple-900: #3c1361; // Darkest text
--color-purple-600: #9333ea; // Accents
--color-purple-50: #faf5ff;  // Lightest background
```

#### Amber Scale (Tertiary)
```scss
--color-amber-900: #78350f;  // Darkest text
--color-amber-50: #fffbeb;   // Lightest background
```

### Alpha Transparency Tokens

#### White Alpha (Dark Theme Overlays)
```scss
--white-alpha-05: color-mix(in srgb, white 5%, transparent);
--white-alpha-10: color-mix(in srgb, white 10%, transparent);
--white-alpha-15: color-mix(in srgb, white 15%, transparent);
--white-alpha-20: color-mix(in srgb, white 20%, transparent);
--white-alpha-30: color-mix(in srgb, white 30%, transparent);
--white-alpha-80: color-mix(in srgb, white 80%, transparent);
--white-alpha-85: color-mix(in srgb, white 85%, transparent);
--white-alpha-90: color-mix(in srgb, white 90%, transparent);
```

#### Black Alpha (Shadows & Overlays)
```scss
--black-alpha-03: color-mix(in srgb, black 3%, transparent);
--black-alpha-05: color-mix(in srgb, black 5%, transparent);
--black-alpha-10: color-mix(in srgb, black 10%, transparent);
--black-alpha-12: color-mix(in srgb, black 12%, transparent);
--black-alpha-15: color-mix(in srgb, black 15%, transparent);
--black-alpha-16: color-mix(in srgb, black 16%, transparent);
--black-alpha-23: color-mix(in srgb, black 23%, transparent);
--black-alpha-25: color-mix(in srgb, black 25%, transparent);
--black-alpha-30: color-mix(in srgb, black 30%, transparent);
--black-alpha-35: color-mix(in srgb, black 35%, transparent);
```

### Border Tokens
```scss
--border-light: rgba(148, 163, 184, 0.3);  // Existing
--border-medium: color-mix(in srgb, var(--color-slate-600) 45%, transparent);
--border-subtle: color-mix(in srgb, var(--color-slate-600) 20%, transparent);
--border-strong: color-mix(in srgb, var(--color-slate-600) 60%, transparent);
--border-dark: var(--black-alpha-10);
```

### Elevation Tokens (Colored Shadows)

#### Teal Elevations
```scss
--elevation-teal-sm: 0 2px 8px color-mix(in srgb, var(--accent-teal) 30%, transparent);
--elevation-teal-md: 0 4px 16px color-mix(in srgb, var(--accent-teal) 30%, transparent);
--elevation-teal-lg: 0 4px 24px color-mix(in srgb, var(--accent-teal) 50%, transparent);
```

#### Blue Elevations
```scss
--elevation-blue-sm: 0 2px 8px color-mix(in srgb, var(--meeting-1-color) 30%, transparent);
--elevation-blue-md: 0 4px 16px color-mix(in srgb, var(--meeting-1-color) 30%, transparent);
--elevation-blue-lg: 0 6px 20px color-mix(in srgb, var(--meeting-1-color) 40%, transparent);
```

#### Green Elevations
```scss
--elevation-green-sm: 0 2px 8px color-mix(in srgb, var(--success-green) 30%, transparent);
--elevation-green-md: 0 4px 12px color-mix(in srgb, var(--success-green) 30%, transparent);
--elevation-green-lg: 0 4px 15px color-mix(in srgb, var(--success-green) 30%, transparent);
```

#### Coral Elevations
```scss
--elevation-coral-sm: 0 2px 8px color-mix(in srgb, var(--accent-coral) 30%, transparent);
--elevation-coral-md: 0 4px 16px color-mix(in srgb, var(--accent-coral) 40%, transparent);
--elevation-coral-lg: 0 6px 20px color-mix(in srgb, var(--accent-coral) 60%, transparent);
```

#### Red Elevations
```scss
--elevation-red-md: 0 4px 16px color-mix(in srgb, #ff6b6b 40%, transparent);
```

---

## 🔄 Migration Examples

### Before (Hardcoded)
```scss
// Dark theme background
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
border: 1px solid rgba(255, 255, 255, 0.1);

// Shadows
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
box-shadow: 0 2px 8px rgba(9, 105, 218, 0.3);

// Metric bubbles
&.good {
  background: #dcfce7;
  color: #14532d;
  border: 2px solid #16a34a;
}

&.bad {
  background: #fee2e2;
  color: #7f1d1d;
  border: 2px solid #b91c1c;
}
```

### After (Using Tokens)
```scss
// Dark theme background
background: linear-gradient(135deg, 
  var(--color-slate-900) 0%, 
  var(--color-slate-800) 50%, 
  var(--color-slate-700) 100%);
border: var(--border-width-thin) solid var(--white-alpha-10);

// Shadows
box-shadow: var(--elevation-2);
box-shadow: var(--elevation-blue-sm);

// Metric bubbles
&.good {
  background: var(--color-green-100);
  color: var(--color-green-900);
  border: var(--border-width-medium) solid var(--success-green);
}

&.bad {
  background: var(--color-red-100);
  color: var(--color-red-900);
  border: var(--border-width-medium) solid var(--color-red-700);
}
```

---

## 📋 Quick Reference

### When to Use Each Token Type

#### Color Scales
- **50**: Lightest backgrounds (alerts, badges)
- **100**: Light backgrounds (cards, sections)
- **600**: Standard accents (icons, links)
- **700**: Medium emphasis (borders, hover)
- **800**: Dark emphasis (text, icons)
- **900**: Darkest text (high contrast)

#### Alpha Tokens
- **05-10**: Very subtle overlays
- **15-30**: Borders and dividers
- **80-90**: Semi-transparent text (dark themes)

#### Elevations
- **-sm**: Subtle lift (2-8px blur)
- **-md**: Standard lift (4-16px blur)
- **-lg**: Prominent lift (4-24px blur)

---

## ✅ Validation

All tokens have been:
- ✅ Added to `_tokens.scss`
- ✅ Validated with Jekyll build
- ✅ Documented in audit file
- ✅ Ready for migration

---

## 📚 Related Documents

- **Audit Document:** `HARDCODED-VALUES-AUDIT.md` - Complete analysis of all hardcoded values
- **Tokens File:** `_tokens.scss` - All design token definitions
- **Migration Guide:** See examples in audit document

---

**Next Steps:**
1. Begin migrating hardcoded values to tokens (start with `_sections.scss`)
2. Test visual regression after each migration
3. Update component documentation to reference tokens
4. Consider automated linting rules to prevent new hardcoded values
