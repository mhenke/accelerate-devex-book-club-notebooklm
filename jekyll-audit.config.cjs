module.exports = {
  jekyll: {
    // ensure the CLI runs the Jekyll build from the docs folder
    buildCommand: 'bundle exec jekyll build',
    buildDir: 'docs/_site',
    sourceDir: 'docs',
  },
  crawl: { useSitemap: true, maxPages: 200, paths: ['/'] },
  thresholds: {
    // lighthouse accepts numeric scores in the range 0.0 - 1.0
    lighthouse: { performance: 0.8, seo: 0.9, 'best-practices': 0.9 },
    accessibility: { maxIssues: 9999 },
    links: { maxBroken: 9999 },
    html: { maxErrors: 9999 },
  },
  // reports.formats must be one or more of ['json','html','md'] per schema
  reports: { formats: ['json'], outDir: 'reports' },
};
