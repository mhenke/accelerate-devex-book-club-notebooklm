#!/usr/bin/env python3
"""
scripts/migrate-add-icon-class.py

Scans markdown files under docs/_meetings and docs/ for <i class="fas fa-..."> occurrences and reports
or optionally modifies the files to ensure the "icon" utility class is present.

Usage:
  python3 scripts/migrate-add-icon-class.py --dry-run
  python3 scripts/migrate-add-icon-class.py --apply
"""
import argparse
from pathlib import Path
import re
import json
from datetime import datetime

ROOT = Path(__file__).resolve().parents[1]
PATTERN = re.compile(r"<i\s+([^>]*?)class=\"([^"]*fas[^\"]*)\"([^>]*)>", re.IGNORECASE)

def scan_files(paths):
    results = []
    for p in paths:
        for f in Path(p).rglob('*.md'):
            text = f.read_text(encoding='utf-8')
            for m in PATTERN.finditer(text):
                classes = m.group(2)
                if 'icon' not in classes.split():
                    line_no = text.count('\n', 0, m.start()) + 1
                    snippet = text[m.start():m.end()]
                    results.append({'file': str(f.relative_to(ROOT)), 'line': line_no, 'snippet': snippet})
    return results

def apply_changes(items):
    backup_dir = ROOT / 'backups' / f"meetings-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    backup_dir.mkdir(parents=True, exist_ok=True)
    modified = []
    for item in items:
        fpath = ROOT / item['file']
        text = fpath.read_text(encoding='utf-8')
        new_text = PATTERN.sub(lambda m: add_icon_to_match(m), text)
        if new_text != text:
            # backup
            target_backup = backup_dir / item['file']
            target_backup.parent.mkdir(parents=True, exist_ok=True)
            target_backup.write_text(text, encoding='utf-8')
            fpath.write_text(new_text, encoding='utf-8')
            modified.append(str(item['file']))
    return modified

def add_icon_to_match(m):
    pre = m.group(1)
    classes = m.group(2)
    post = m.group(3)
    class_list = classes.split()
    if 'icon' not in class_list:
        class_list.insert(0, 'icon')
    new_classes = ' '.join(class_list)
    return f"<i {pre}class=\"{new_classes}\"{post}>"

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()

    paths = [ROOT / 'docs' / '_meetings', ROOT / 'docs']
    items = scan_files(paths)
    (ROOT / 'migrations').mkdir(exist_ok=True)
    report_file = ROOT / 'migrations' / 'migrate-add-icon-class-report.json'
    report = {'count': len(items), 'items': items}
    report_file.write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(f"Found {len(items)} candidate icons. Report written to {report_file}")

    if args.apply:
        modified = apply_changes(items)
        apply_report = ROOT / 'migrations' / 'migrate-add-icon-class-applied.json'
        apply_report.write_text(json.dumps({'modified': modified}, indent=2), encoding='utf-8')
        print(f"Modified {len(modified)} files. Backup stored.")

if __name__ == '__main__':
    main()
