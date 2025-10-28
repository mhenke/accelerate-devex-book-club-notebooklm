#!/usr/bin/env node
/**
 * Analyze PurgeCSS report and SCSS partials to identify unused partials.
 * Heuristic: if all class selectors defined in a partial appear in the
 * PurgeCSS rejected selector set, consider the partial unused.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SCSS_DIRS = [
  path.join(ROOT, 'docs', '_sass', 'components'),
  path.join(ROOT, 'docs', '_sass', 'layout'),
  path.join(ROOT, 'docs', '_sass', 'pages'),
  // base and abstracts are skipped from deletion for safety
];

const REPORT_PATH = path.join(ROOT, 'planning', 'purgecss-report.json');

function readRejected() {
  const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
  // Extract class names from selectors (e.g., '.btn.primary' -> ['btn','primary'])
  const classNameRegex = /\.[A-Za-z0-9_-]+/g;
  const classSet = new Set();
  for (const sel of report.rejectedSelectors || []) {
    const matches = sel.match(classNameRegex);
    if (matches) {
      for (const m of matches) {
        classSet.add(m.slice(1));
      }
    }
  }
  return classSet;
}

function extractDefinedClasses(scssText) {
  // Very simple regex for class definitions; captures .class at rule starts or nested
  const classRegex = /\.[A-Za-z0-9_-]+/g;
  const set = new Set();
  const matches = scssText.match(classRegex) || [];
  for (const m of matches) {
    const name = m.slice(1);
    // skip placeholders (%foo) and Sass variables/maps
    if (name.startsWith('%')) {
      continue;
    }
    set.add(name);
  }
  return set;
}

function analyze() {
  const rejectedClasses = readRejected();
  const results = [];

  for (const dir of SCSS_DIRS) {
    if (!fs.existsSync(dir)) {
      continue;
    }
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.scss'));
    for (const file of files) {
      const full = path.join(dir, file);
      const txt = fs.readFileSync(full, 'utf8');
      const defined = extractDefinedClasses(txt);
      if (defined.size === 0) {
        results.push({ file: full, defined: 0, removed: 0, status: 'no-classes' });
        continue;
      }
      let removedCount = 0;
      for (const cls of defined) {
        if (rejectedClasses.has(cls)) {
          removedCount++;
        }
      }
      const allRemoved = removedCount === defined.size;
      results.push({ file: full, defined: defined.size, removed: removedCount, status: allRemoved ? 'unused' : 'partial' });
    }
  }

  const outPath = path.join(ROOT, 'planning', 'scss-unused-report.json');
  fs.writeFileSync(outPath, JSON.stringify({ analyzedAt: new Date().toISOString(), results }, null, 2));
  console.log('Wrote report to', outPath);
  const unused = results.filter(r => r.status === 'unused');
  console.log('Unused partials:', unused.length);
  for (const u of unused) {
    console.log('-', path.relative(ROOT, u.file));
  }
}

analyze();
