# Hardcoded Values Audit & Token Migration Plan

**Date:** October 5, 2025  
**Purpose:** Comprehensive audit of all hardcoded colors, shadows, borders, and other values that should use design tokens

---

## 🎯 Audit Summary

### Categories of Hardcoded Values Found:
1. **Colors & Gradients** - RGB/Hex values that should use CSS custom properties
2. **Shadows & Elevation** - Box-shadow values that should use elevation tokens
3. **Borders** - Border colors with opacity that should use color-mix()
4. **Opacity Values** - RGBA opacity that should be semantic tokens
5. **Gray Scale Colors** - Various gray shades that need standardization

---

## 📋 Priority 1: Colors That Need New Tokens

### Dark Theme Grays (Currently Hardcoded)
These appear frequently and need dedicated tokens:

```scss
// CURRENT - Hardcoded in multiple files
#0f172a, #1e293b, #334155  // Dark theme gradient
#1a202c, #2d3748           // Card dark theme
#1a1a2e, #16213e           // Header colors (HAVE TOKENS!)

// PROPOSED NEW TOKENS
--color-slate-900: #0f172a;  // Darkest gray
--color-slate-800: #1e293b;  // Dark gray  
--color-slate-700: #334155;  // Medium-dark gray
--color-gray-800: #1a202c;   // Alt dark gray
--color-gray-700: #2d3748;   // Alt medium-dark gray
```

**Files Affected:** `_sections.scss`, `_meeting.scss`, `_404.scss`

### White with Opacity (Needs Semantic Tokens)
```scss
// CURRENT - Scattered throughout
rgba(255, 255, 255, 0.1)   // Borders
rgba(255, 255, 255, 0.15)  // Borders hover
rgba(255, 255, 255, 0.2)   // Light borders
rgba(255, 255, 255, 0.3)   // Medium borders
rgba(255, 255, 255, 0.8)   // Text light
rgba(255, 255, 255, 0.85)  // Text medium
rgba(255, 255, 255, 0.9)   // Text dark

// PROPOSED NEW TOKENS
--white-alpha-10: color-mix(in srgb, white 10%, transparent);
--white-alpha-15: color-mix(in srgb, white 15%, transparent);
--white-alpha-20: color-mix(in srgb, white 20%, transparent);
--white-alpha-30: color-mix(in srgb, white 30%, transparent);
--white-alpha-80: color-mix(in srgb, white 80%, transparent);
--white-alpha-85: color-mix(in srgb, white 85%, transparent);
--white-alpha-90: color-mix(in srgb, white 90%, transparent);
```

**Files Affected:** `_sections.scss`, `_meeting.scss`, `_hero.scss`

### Black with Opacity (Needs Semantic Tokens)
```scss
// CURRENT - Shadow and overlay values
rgba(0, 0, 0, 0.03)   // Very light background
rgba(0, 0, 0, 0.05)   // Light shadow
rgba(0, 0, 0, 0.1)    // Shadow
rgba(0, 0, 0, 0.15)   // Medium shadow
rgba(0, 0, 0, 0.16)   // Shadow component
rgba(0, 0, 0, 0.23)   // Shadow component
rgba(0, 0, 0, 0.25)   // Dark shadow
rgba(0, 0, 0, 0.3)    // Darker overlay
rgba(0, 0, 0, 0.35)   // Very dark shadow

// PROPOSED NEW TOKENS
--black-alpha-03: color-mix(in srgb, black 3%, transparent);
--black-alpha-05: color-mix(in srgb, black 5%, transparent);
--black-alpha-10: color-mix(in srgb, black 10%, transparent);
--black-alpha-15: color-mix(in srgb, black 15%, transparent);
--black-alpha-30: color-mix(in srgb, black 30%, transparent);
```

**Files Affected:** All component files

---

## 📋 Priority 2: Specific Color Families Needing Tokens

### Green Shades (Success/Good Metrics)
```scss
// CURRENT - Multiple green variations
#dcfce7  // Light green background (good metric)
#14532d  // Dark green text
#16a34a  // Green border (MATCHES --success-green!)
#28a745, #34ce57, #45a049  // Various greens

// ACTION: Use existing --success-green token
// CREATE: Additional green scale tokens
--color-green-50: #f0fdf4;   // Lightest
--color-green-100: #dcfce7;  // Light background
--color-green-600: #16a34a;  // Standard (matches success)
--color-green-700: #15803d;  // Medium
--color-green-900: #14532d;  // Darkest text
```

### Red Shades (Danger/Bad Metrics)
```scss
// CURRENT - Multiple red variations
#fee2e2  // Light red background
#7f1d1d  // Dark red text
#b91c1c  // Red border
#ff6b6b, #ee5a24  // Gradient reds
#ef5350, #f44336  // Error reds (HAVE --danger-red!)

// ACTION: Use existing --danger-red (#f44336)
// CREATE: Additional red scale tokens
--color-red-50: #fef2f2;   // Lightest
--color-red-100: #fee2e2;  // Light background
--color-red-700: #b91c1c;  // Border
--color-red-800: #991b1b;  // Medium dark
--color-red-900: #7f1d1d;  // Darkest text
--color-red-gradient-start: #ff6b6b;
--color-red-gradient-end: #ee5a24;
```

### Blue Shades (Already Have Some Tokens!)
```scss
// CURRENT - Multiple blue variations
#eff6ff  // Very light blue background
#1e3a8a  // Dark blue text
#2563eb  // Blue accent

// EXISTING TOKENS WE CAN USE:
--meeting-1-color: #0969da;  // Primary blue
--primary-blue: #2196f3;      // Alt blue

// CREATE: Additional blue scale for consistency
--color-blue-50: #eff6ff;   // Lightest background
--color-blue-600: #2563eb;  // Accent
--color-blue-900: #1e3a8a;  // Darkest text
```

### Orange Shades
```scss
// CURRENT
#fff7ed  // Light orange background
#7c2d12  // Dark orange text
#ea580c  // Orange accent
#ffab00  // Bright orange

// EXISTING: --dora-orange (#ff9800)
// EXISTING: --meeting-3-color (#d97706)

// CREATE: Additional orange scale
--color-orange-50: #fff7ed;
--color-orange-600: #ea580c;
--color-orange-700: #c2410c;
--color-orange-900: #7c2d12;
```

### Purple Shades
```scss
// CURRENT
#faf5ff  // Light purple background
#3c1361  // Dark purple text
#9c27b0  // Purple accent

// EXISTING: --meeting-4-color (#8b5cf6)

// CREATE: Additional purple scale
--color-purple-50: #faf5ff;
--color-purple-600: #9333ea;
--color-purple-900: #3c1361;
```

### Amber/Yellow Shades
```scss
// CURRENT
#fffbeb  // Light amber background
#78350f  // Dark amber text

// EXISTING: --warning-yellow (#ffc107)

// CREATE: Additional amber scale
--color-amber-50: #fffbeb;
--color-amber-900: #78350f;
```

---

## 📋 Priority 3: Shadow/Elevation System

### Current Hardcoded Shadows
```scss
// Various shadow values throughout codebase
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
```

### PROPOSED: Material Design 3 Elevation Tokens
```scss
// Add to _tokens.scss
:root {
  // Material Design 3 Elevation System
  --elevation-0: none;
  --elevation-1: 0 2px 4px color-mix(in srgb, black 5%, transparent);
  --elevation-2: 0 3px 6px color-mix(in srgb, black 10%, transparent),
                 0 3px 6px color-mix(in srgb, black 16%, transparent);
  --elevation-3: 0 4px 12px color-mix(in srgb, black 10%, transparent);
  --elevation-4: 0 8px 25px color-mix(in srgb, black 12%, transparent);
  --elevation-5: 0 12px 32px color-mix(in srgb, black 15%, transparent);
  
  // Colored elevations for accent cards
  --elevation-teal: 0 4px 16px color-mix(in srgb, var(--accent-teal) 30%, transparent);
  --elevation-blue: 0 4px 16px color-mix(in srgb, var(--meeting-1-color) 30%, transparent);
  --elevation-green: 0 4px 12px color-mix(in srgb, var(--success-green) 30%, transparent);
  --elevation-coral: 0 4px 16px color-mix(in srgb, var(--accent-coral) 40%, transparent);
}
```

---

## 📋 Priority 4: Border System Audit

### Current Border Patterns
```scss
// Already have these tokens (GOOD):
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 4px;

// Missing border-specific tokens:
// Border with opacity variations
border: 1px solid rgba(148, 163, 184, 0.45);  // Slate with opacity
border: 2px solid rgba(148, 163, 184, 0.5);   // Slate with opacity
border: 1px solid rgba(0, 0, 0, 0.1);         // Black with opacity
```

### PROPOSED: Border Color Tokens
```scss
:root {
  // Existing (keep):
  --border-light: rgba(148, 163, 184, 0.3);
  
  // Add:
  --border-medium: color-mix(in srgb, var(--color-slate-600) 45%, transparent);
  --border-subtle: color-mix(in srgb, var(--color-slate-600) 20%, transparent);
  --border-strong: color-mix(in srgb, var(--color-slate-600) 60%, transparent);
  --border-dark: color-mix(in srgb, black 10%, transparent);
}
```

---

## 📋 Priority 5: Specific Files Analysis

### `_sections.scss` - Line-by-Line Issues

#### Lines 33-34: Dark Theme Base
```scss
// CURRENT
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
border: 1px solid rgba(255, 255, 255, 0.1);

// FIX
background: linear-gradient(135deg, 
  var(--color-slate-900) 0%, 
  var(--color-slate-800) 50%, 
  var(--color-slate-700) 100%);
border: var(--border-width-thin) solid var(--white-alpha-10);
```

#### Lines 49: Gradient Overlay
```scss
// CURRENT
rgba(9, 105, 218, 0.1)

// FIX
color-mix(in srgb, var(--meeting-1-color) 10%, transparent)
```

#### Lines 108-122: h3 Theme Colors
```scss
// CURRENT - Multiple rgba with teal/emerald
rgba(122, 218, 209, 0.1), rgba(16, 185, 129, 0.1)
border: 1px solid rgba(122, 218, 209, 0.3);
rgba(16, 185, 129, 0.15), rgba(122, 218, 209, 0.15)
border-color: rgba(16, 185, 129, 0.4);

// FIX
color-mix(in srgb, var(--accent-teal) 10%, transparent)
color-mix(in srgb, var(--accent-emerald) 10%, transparent)
border: var(--border-width-thin) solid color-mix(in srgb, var(--accent-teal) 30%, transparent);
// etc.
```

#### Lines 282: Border Top
```scss
// CURRENT
border-top: var(--border-width-thin) solid rgba(148, 163, 184, 0.45);

// FIX
border-top: var(--border-width-thin) solid var(--border-medium);
```

#### Lines 341, 359, 364, 392: Box Shadows
```scss
// CURRENT
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15);
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25);

// FIX
box-shadow: var(--elevation-2);
box-shadow: var(--elevation-3);
box-shadow: var(--elevation-4);
```

#### Lines 356-357: Item Card Dark Theme
```scss
// CURRENT
background: linear-gradient(135deg, #1a202c, #2d3748);
border: 1px solid rgba(255, 255, 255, 0.1);

// FIX
background: linear-gradient(135deg, var(--color-gray-800), var(--color-gray-700));
border: var(--border-width-thin) solid var(--white-alpha-10);
```

#### Lines 447: Background Color
```scss
// CURRENT
background: #f1f5f9;

// FIX - Need token or use existing
--color-slate-100: #f1f5f9;  // Add to tokens
background: var(--color-slate-100);
```

#### Lines 693-708: Metric Bubbles (Good/Bad)
```scss
// CURRENT - Hardcoded green/red
&.good {
  background: #dcfce7;
  color: #14532d;
  border: 2px solid #16a34a;
  i { color: #16a34a; }
}
&.bad {
  background: #fee2e2;
  color: #7f1d1d;
  border: 2px solid #b91c1c;
  i { color: #b91c1c; }
}

// FIX
&.good {
  background: var(--color-green-100);
  color: var(--color-green-900);
  border: var(--border-width-medium) solid var(--success-green);
  i { color: var(--success-green); }
}
&.bad {
  background: var(--color-red-100);
  color: var(--color-red-900);
  border: var(--border-width-medium) solid var(--color-red-700);
  i { color: var(--color-red-700); }
}
```

#### Lines 830-831: Alternative Reminder
```scss
// CURRENT
rgba(122, 218, 209, 0.1), rgba(122, 218, 209, 0.05)

// FIX
color-mix(in srgb, var(--accent-teal) 10%, transparent),
color-mix(in srgb, var(--accent-teal) 5%, transparent)
```

#### Lines 1092: Sequence Number Shadow
```scss
// CURRENT
box-shadow: 0 2px 8px rgba(9, 105, 218, 0.3);

// FIX
box-shadow: var(--elevation-blue);
```

#### Lines 1218-1219, 1262-1263, 1285-1286: Blue Gradients
All using hardcoded `rgba(9, 105, 218, ...)` - should use `var(--meeting-1-color)` with color-mix()

#### Lines 1381-1397: Pitfall Card Icons
```scss
// CURRENT - Multiple hardcoded colors
background: rgba(239, 83, 80, 0.1);   // Red-ish
background: rgba(255, 171, 0, 0.1);   // Orange
background: rgba(156, 39, 176, 0.1);  // Purple
color: #9c27b0;
background: rgba(244, 67, 54, 0.1);   // Red
color: #f44336;  // MATCHES --danger-red!

// FIX - Use existing tokens or create semantic ones
```

#### Lines 1786-1805: Step Cards
```scss
// CURRENT
border-top-color: #2563eb;  // Blue
background: #2563eb;
border-top-color: #ea580c;  // Orange
background: #ea580c;
border-top-color: #059669;  // Green
background: #059669;

// FIX
border-top-color: var(--color-blue-600);
background: var(--color-blue-600);
border-top-color: var(--color-orange-600);
background: var(--color-orange-600);
border-top-color: var(--hover-emerald);
background: var(--hover-emerald);
```

#### Lines 1861-1880: Resource Type Badges
```scss
// CURRENT - All hardcoded light backgrounds and dark text
background: #eff6ff; color: #1e3a8a; border-color: #2563eb;  // Blue
background: #fff7ed; color: #7c2d12; border-color: #ea580c;  // Orange
background: #fff5f5; color: #7f1d1d; border-color: #b91c1c;  // Red
background: #fffbeb; color: #78350f;  // Amber

// FIX - Use new color scale tokens
```

---

## 🔧 Implementation Plan

### Phase 1: Add Missing Color Tokens (HIGH PRIORITY)
1. Add slate scale (900, 800, 700) to `_tokens.scss`
2. Add alpha transparency semantic tokens (white-alpha-*, black-alpha-*)
3. Add complete color scales for: green, red, blue, orange, purple, amber

### Phase 2: Add Elevation System (MEDIUM PRIORITY)
1. Add Material Design 3 elevation tokens (elevation-1 through elevation-5)
2. Add colored elevation tokens for accent cards

### Phase 3: Add Border Tokens (MEDIUM PRIORITY)
1. Add border-medium, border-subtle, border-strong tokens

### Phase 4: Migration - Sections File (HIGH PRIORITY)
Replace all hardcoded values in `_sections.scss` using multi_replace_string_in_file

### Phase 5: Migration - Other Files (ONGOING)
- `_meeting.scss`
- `_404.scss`
- `_buttons.scss`
- `_meeting-content.scss`
- `_meeting-themes.scss`

### Phase 6: Validation & Testing
1. Build Jekyll site
2. Visual regression testing
3. Verify all colors render correctly
4. Check accessibility (contrast ratios maintained)

---

## 📊 Statistics

- **Total Hardcoded Colors Found:** 200+ instances
- **Files Affected:** 10+ SCSS files
- **New Tokens Needed:** ~40-50 tokens
- **Existing Tokens to Leverage:** 20+ tokens

---

## ✅ Next Actions

1. **Review and approve this audit** - Confirm token naming conventions
2. **Add new tokens to `_tokens.scss`** - Batch add all new color/elevation/border tokens
3. **Create migration script** - Use multi_replace for bulk updates
4. **Test incrementally** - Build and test after each file migration

---

**Last Updated:** October 5, 2025
