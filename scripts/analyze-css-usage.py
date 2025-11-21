#!/usr/bin/env python3
"""
CSS Usage Analysis Script
Analyzes which CSS classes are defined vs used in the codebase
"""

import re
from collections import defaultdict
from pathlib import Path

# Read defined CSS classes
with open('/tmp/css-classes-defined.txt', 'r') as f:
    defined_classes = set(line.strip() for line in f if line.strip())

# Read used classes from HTML
with open('/tmp/html-classes-used.txt', 'r') as f:
    used_in_html = set(line.strip() for line in f if line.strip() and line.strip() != 'markdown="0"' and line.strip() != 'markdown="1"')

# Count usage frequency in HTML/MD files
docs_path = Path('/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/docs')
usage_count = defaultdict(int)

for file_path in docs_path.rglob('*.html'):
    content = file_path.read_text(errors='ignore')
    for cls in defined_classes:
        # Match class in class attribute
        pattern = rf'\bclass="[^"]*\b{re.escape(cls)}\b[^"]*"'
        usage_count[cls] += len(re.findall(pattern, content))

for file_path in docs_path.rglob('*.md'):
    content = file_path.read_text(errors='ignore')
    for cls in defined_classes:
        pattern = rf'\bclass="[^"]*\b{re.escape(cls)}\b[^"]*"'
        usage_count[cls] += len(re.findall(pattern, content))

# Categorize classes
unused = sorted([cls for cls in defined_classes if usage_count.get(cls, 0) == 0])
used_once = sorted([cls for cls in defined_classes if usage_count.get(cls, 0) == 1])
used_2_3 = sorted([cls for cls in defined_classes if 2 <= usage_count.get(cls, 0) <= 3])
used_4_10 = sorted([cls for cls in defined_classes if 4 <= usage_count.get(cls, 0) <= 10])
used_frequently = sorted([(cls, usage_count[cls]) for cls in defined_classes if usage_count.get(cls, 0) > 10], key=lambda x: x[1], reverse=True)

# Classes used in HTML but not defined (might be utility classes)
undefined_used = sorted([cls for cls in used_in_html if cls not in defined_classes and cls and not cls.startswith('fa-')])

# Generate report
report_path = Path('/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/planning/css-usage-report.md')
report_path.parent.mkdir(parents=True, exist_ok=True)

with open(report_path, 'w') as f:
    f.write("# CSS Usage Analysis Report\n\n")
    f.write(f"**Generated:** 2025-11-20\n\n")
    f.write(f"**Total CSS Classes Defined:** {len(defined_classes)}\n")
    f.write(f"**Total Classes Used in HTML:** {len(used_in_html)}\n\n")
    
    f.write("## Summary\n\n")
    f.write(f"- **Unused Classes (0 uses):** {len(unused)} ({len(unused)*100//len(defined_classes)}%)\n")
    f.write(f"- **Used Once:** {len(used_once)} ({len(used_once)*100//len(defined_classes)}%)\n")
    f.write(f"- **Used 2-3 times:** {len(used_2_3)} ({len(used_2_3)*100//len(defined_classes)}%)\n")
    f.write(f"- **Used 4-10 times:** {len(used_4_10)} ({len(used_4_10)*100//len(defined_classes)}%)\n")
    f.write(f"- **Used 10+ times:** {len(used_frequently)} ({len(used_frequently)*100//len(defined_classes)}%)\n\n")
    
    f.write("---\n\n")
    f.write("## ⚠️ UNUSED CLASSES (Candidates for Removal)\n\n")
    f.write(f"**Total:** {len(unused)} classes\n\n")
    if unused:
        f.write("```\n")
        for cls in unused:
            f.write(f"{cls}\n")
        f.write("```\n\n")
    else:
        f.write("*None found*\n\n")
    
    f.write("---\n\n")
    f.write("## 🔍 LOW USAGE CLASSES (Consider Inlining or Consolidating)\n\n")
    f.write(f"### Used Once ({len(used_once)} classes)\n\n")
    if used_once:
        f.write("```\n")
        for cls in used_once[:50]:  # Limit to first 50
            f.write(f"{cls}\n")
        if len(used_once) > 50:
            f.write(f"... and {len(used_once) - 50} more\n")
        f.write("```\n\n")
    
    f.write(f"### Used 2-3 Times ({len(used_2_3)} classes)\n\n")
    if used_2_3:
        f.write("```\n")
        for cls in used_2_3[:50]:
            f.write(f"{cls} ({usage_count[cls]}x)\n")
        if len(used_2_3) > 50:
            f.write(f"... and {len(used_2_3) - 50} more\n")
        f.write("```\n\n")
    
    f.write("---\n\n")
    f.write("## ✅ WELL-USED CLASSES (Keep These)\n\n")
    f.write(f"### Moderate Usage: 4-10 times ({len(used_4_10)} classes)\n\n")
    if used_4_10:
        for cls in used_4_10[:20]:
            f.write(f"- `{cls}` ({usage_count[cls]}x)\n")
        if len(used_4_10) > 20:
            f.write(f"- ... and {len(used_4_10) - 20} more\n")
        f.write("\n")
    
    f.write(f"### Frequent Usage: 10+ times ({len(used_frequently)} classes)\n\n")
    if used_frequently:
        for cls, count in used_frequently[:30]:
            f.write(f"- `{cls}` ({count}x)\n")
        if len(used_frequently) > 30:
            f.write(f"- ... and {len(used_frequently) - 30} more\n")
        f.write("\n")
    
    f.write("---\n\n")
    f.write("## 📝 Classes Used But Not Defined\n\n")
    f.write(f"**Total:** {len(undefined_used)} (likely utility classes, Bootstrap, or dynamically generated)\n\n")
    if undefined_used:
        f.write("```\n")
        for cls in undefined_used[:100]:
            f.write(f"{cls}\n")
        if len(undefined_used) > 100:
            f.write(f"... and {len(undefined_used) - 100} more\n")
        f.write("```\n\n")
    
    f.write("---\n\n")
    f.write("## Recommendations\n\n")
    f.write(f"1. **Remove {len(unused)} unused classes** - Safe to delete, zero usage\n")
    f.write(f"2. **Review {len(used_once)} single-use classes** - Consider inlining or removing\n")
    f.write(f"3. **Consolidate {len(used_2_3)} rarely-used classes** - Merge similar patterns\n")
    f.write(f"4. **Keep {len(used_4_10) + len(used_frequently)} well-used classes** - These are essential\n\n")
    
    estimated_savings = len(unused) * 5 + len(used_once) * 4 + len(used_2_3) * 3
    f.write(f"**Estimated CSS Line Savings:** ~{estimated_savings} lines\n")

print(f"Report generated: {report_path}")
print(f"\nQuick Stats:")
print(f"  Unused classes: {len(unused)}")
print(f"  Used once: {len(used_once)}")
print(f"  Used 2-3x: {len(used_2_3)}")
print(f"  Well-used (10+): {len(used_frequently)}")
