export default {
  jekyll: {
    buildDir: 'docs/_site',
    buildCommand: 'cd docs && bundle exec jekyll build'
  },
  crawl: {
    useSitemap: true,
    maxPages: 50,
    paths: ['/accelerate-devex-book-club-notebooklm/']
  },
  thresholds: {
    lighthouse: {
      performance: 0.8,
      accessibility: 0.9,
      'best-practices': 0.9,
      seo: 0.9
    },
    accessibility: {
      maxIssues: 5
    },
    links: {
      maxBroken: 0
    },
    html: {
      maxErrors: 0
    }
  },
  reports: {
    formats: ['json', 'csv'],
    outDir: 'reports'
  },
  options: {
    linksInternalOnly: true,
    linksConcurrency: 50,
    linksTimeout: 15000,
    includeDetails: true,
    includeScreenshots: false
  }
};