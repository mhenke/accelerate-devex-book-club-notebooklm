#!/usr/bin/env node

/**
 * RSS Feed Link Validator
 *
 * Validates all URLs in RSS feeds to ensure media files are accessible
 * on AWS S3 bucket and other linked resources are valid.
 *
 * Usage: node validate-rss-feeds.js
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Configuration
const RSS_FEEDS = [
  'docs/_site/podcast.xml',
  'docs/_site/videos.xml',
  'docs/_site/media-feed.xml',
];

const URL_TIMEOUT = 10000; // 10 seconds timeout for URL checks

// Statistics
const stats = {
  totalFeeds: 0,
  totalUrls: 0,
  validUrls: 0,
  invalidUrls: 0,
  errors: [],
};

/**
 * Check if a URL is accessible
 * @param {string} url - URL to check
 * @returns {Promise<{valid: boolean, status?: number, error?: string}>}
 */
function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const timeoutId = setTimeout(() => {
      resolve({ valid: false, error: 'Timeout' });
    }, URL_TIMEOUT);

    const request = client.get(url, { method: 'HEAD' }, (response) => {
      clearTimeout(timeoutId);
      const status = response.statusCode;

      // Accept 2xx and 3xx status codes as valid
      if (status >= 200 && status < 400) {
        resolve({ valid: true, status });
      } else {
        resolve({ valid: false, status, error: `HTTP ${status}` });
      }
    });

    request.on('error', (error) => {
      clearTimeout(timeoutId);
      resolve({ valid: false, error: error.message });
    });

    request.end();
  });
}

/**
 * Extract URLs from RSS/XML content
 * Looks for <enclosure url="..."/>, <link>...</link>, <media:content url="..."/>
 * @param {string} xmlContent - XML content to parse
 * @returns {Array<{url: string, type: string}>}
 */
function extractUrlsFromXml(xmlContent) {
  const urls = [];

  // Extract enclosure URLs (audio/video files)
  const enclosureRegex = /<enclosure[^>]*url="([^"]+)"/g;
  let match;
  while ((match = enclosureRegex.exec(xmlContent)) !== null) {
    urls.push({ url: match[1], type: 'enclosure' });
  }

  // Extract media:content URLs
  const mediaContentRegex = /<media:content[^>]*url="([^"]+)"/g;
  while ((match = mediaContentRegex.exec(xmlContent)) !== null) {
    urls.push({ url: match[1], type: 'media:content' });
  }

  // Extract atom:link URLs (feed self-reference)
  const atomLinkRegex = /<atom:link[^>]*href="([^"]+)"/g;
  while ((match = atomLinkRegex.exec(xmlContent)) !== null) {
    urls.push({ url: match[1], type: 'atom:link' });
  }

  // Remove duplicates
  const uniqueUrls = Array.from(new Set(urls.map(u => u.url)))
    .map(url => urls.find(u => u.url === url));

  return uniqueUrls;
}

/**
 * Validate a single RSS feed file
 * @param {string} feedPath - Path to RSS feed file
 * @returns {Promise<void>}
 */
async function validateFeed(feedPath) {
  console.log(`\n${colors.bright}${colors.cyan}Validating feed: ${feedPath}${colors.reset}`);

  try {
    const xmlContent = readFileSync(join(__dirname, feedPath), 'utf-8');
    const urls = extractUrlsFromXml(xmlContent);

    console.log(`Found ${urls.length} URLs to validate`);

    for (const { url, type } of urls) {
      stats.totalUrls++;

      // Skip non-S3 URLs (internal site links) for now
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        console.log(`  ${colors.yellow}⊘${colors.reset} Skipping relative URL: ${url}`);
        continue;
      }

      // Validate the URL
      const result = await checkUrl(url);

      if (result.valid) {
        stats.validUrls++;
        console.log(`  ${colors.green}✓${colors.reset} [${type}] ${url} (${result.status})`);
      } else {
        stats.invalidUrls++;
        const errorMsg = `[${type}] ${url} - ${result.error || 'Failed'}`;
        stats.errors.push({ feed: feedPath, url, error: result.error || 'Failed' });
        console.log(`  ${colors.red}✗${colors.reset} ${errorMsg}`);
      }
    }
  } catch (error) {
    console.error(`  ${colors.red}✗${colors.reset} Error reading feed: ${error.message}`);
    stats.errors.push({ feed: feedPath, url: 'N/A', error: error.message });
  }
}

/**
 * Main validation function
 */
async function main() {
  console.log(`${colors.bright}${colors.blue}RSS Feed Link Validator${colors.reset}`);
  console.log(`${colors.blue}${'='.repeat(50)}${colors.reset}\n`);

  stats.totalFeeds = RSS_FEEDS.length;

  // Validate each feed sequentially
  for (const feedPath of RSS_FEEDS) {
    await validateFeed(feedPath);
  }

  // Print summary
  console.log(`\n${colors.bright}${colors.blue}${'='.repeat(50)}${colors.reset}`);
  console.log(`${colors.bright}Validation Summary${colors.reset}`);
  console.log(`${colors.blue}${'='.repeat(50)}${colors.reset}`);
  console.log(`Feeds validated: ${stats.totalFeeds}`);
  console.log(`Total URLs checked: ${stats.totalUrls}`);
  console.log(`${colors.green}Valid URLs: ${stats.validUrls}${colors.reset}`);
  console.log(`${colors.red}Invalid URLs: ${stats.invalidUrls}${colors.reset}`);

  if (stats.errors.length > 0) {
    console.log(`\n${colors.bright}${colors.red}Errors Found:${colors.reset}`);
    stats.errors.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error.feed}`);
      console.log(`     URL: ${error.url}`);
      console.log(`     Error: ${error.error}`);
    });

    console.log(`\n${colors.red}${colors.bright}Validation FAILED${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}All RSS feed URLs are valid!${colors.reset}`);
    process.exit(0);
  }
}

// Run the validator
main().catch((error) => {
  console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});
