#!/usr/bin/env node
/**
 * PurgeCSS Script
 * Removes unused CSS from the built site using PurgeCSS API
 */

const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');

async function runPurgeCSS() {
  const configPath = path.join(__dirname, '..', 'purgecss.config.cjs');
  const config = require(configPath);
  // Ensure we capture rejected selectors for reporting
  const purgeOptions = { ...config, rejected: true };

  console.log('🧹 Running PurgeCSS to remove unused CSS...');
  console.log('');

  // Get original file size
  const cssPath = config.css[0];
  const originalSize = fs.statSync(cssPath).size;
  const originalSizeKB = Math.round(originalSize / 1024);

  try {
    const purgeCSSResults = await new PurgeCSS().purge(purgeOptions);

    // Write the purged CSS
    const outputDir = 'docs/_site/assets/';
    for (const result of purgeCSSResults) {
      const outputPath = path.join(outputDir, path.basename(result.file || 'main.css'));
      fs.writeFileSync(outputPath, result.css);

      // Also write a purged artifact inside the repo for inspection (git can track if desired)
      const repoArtifact = path.join(__dirname, '..', 'docs', 'assets', 'main.purged.css');
      try {
        fs.writeFileSync(repoArtifact, result.css);
      } catch (e) {
        // non-fatal
      }
    }

    // Get new file size
    const newSize = fs.statSync(cssPath).size;
    const newSizeKB = Math.round(newSize / 1024);
    const savings = Math.round(((originalSize - newSize) / originalSize) * 100);

    // Aggregate rejected selectors across results
    const rejected = purgeCSSResults.flatMap(r => Array.isArray(r.rejected) ? r.rejected : []);

    // Write machine-readable report
    const report = {
      cssPath,
      originalSize,
      newSize: fs.statSync(cssPath).size,
      originalSizeKB: Math.round(originalSize / 1024),
      newSizeKB: Math.round(fs.statSync(cssPath).size / 1024),
      savingsPercent: Math.round(((originalSize - fs.statSync(cssPath).size) / originalSize) * 100),
      rejectedCount: rejected.length,
      rejectedSelectors: rejected,
      generatedAt: new Date().toISOString()
    };
    const planningDir = path.join(__dirname, '..', 'planning');
    try {
      fs.mkdirSync(planningDir, { recursive: true });
      fs.writeFileSync(path.join(planningDir, 'purgecss-report.json'), JSON.stringify(report, null, 2));
    } catch (e) {
      // ignore write failures
    }

    console.log('✅ PurgeCSS Complete!');
    console.log(`   Before: ${originalSizeKB}KB`);
    console.log(`   After:  ${newSizeKB}KB`);
    console.log(`   Saved:  ${savings}% (${originalSizeKB - newSizeKB}KB)`);
    console.log(`   Rejected selectors: ${report.rejectedCount}`);
    console.log('');
  } catch (error) {
    console.error('❌ PurgeCSS failed:', error.message);
    process.exit(1);
  }
}

runPurgeCSS();
