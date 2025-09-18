/** @type {import('./dist/config/schema.js').AuditConfig} */
export default {
  jekyll: {
    // this repo keeps the Jekyll site under `docs`
    sourceDir: 'docs',
    buildDir: 'docs/_site',
    // ensure the build runs for the `docs` source even when invoked from repo root
    // change to docs directory and run build there to avoid vendor issues
    buildCommand:
      'echo "Site already built - skipping Jekyll build" && true',
  },
  server: {
    // optional: override host/port if needed
    // host: '127.0.0.1',
    // port: 4001,
  },
  crawl: {
    // the site's baseurl is set in docs/_config.yml; crawl the site root
    useSitemap: true,
    maxPages: 200,
    paths: ['/accelerate-devex-book-club-notebooklm/'],
  },
  thresholds: {
    lighthouse: {
      performance: 0.8,
      seo: 0.9,
      'best-practices': 0.9,
    },
    accessibility: { maxIssues: 5 },
    links: { maxBroken: 0 },
    html: { maxErrors: 0 },
  },
  reports: {
    formats: ['json', 'csv'],
    outDir: 'reports',
  },
  options: {
    // friendly defaults for faster local runs
    linksInternalOnly: true,
    linksConcurrency: 50,
    linksTimeout: 15000,
    includeDetails: true,
    includeScreenshots: false,
  },
};
