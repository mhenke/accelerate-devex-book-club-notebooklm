import { percySnapshot } from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Visual Regression Testing', () => {
  const meetings = [
    { name: 'meeting-1', theme: 'blue' },
    { name: 'meeting-2', theme: 'teal' },
    { name: 'meeting-3', theme: 'amber' },
    { name: 'meeting-4', theme: 'purple' },
  ];

  meetings.forEach((meeting) => {
    test(`${meeting.name} visual consistency`, async ({ page }) => {
      await page.goto(`/meetings/${meeting.name}/`);
      await page.waitForLoadState('networkidle');

      // Wait for any animations or transitions
      await page.waitForTimeout(1000);

      // Hide any dynamic content that might affect screenshots
      await page.evaluate(() => {
        // Hide any timestamp or dynamic content
        const dynamicElements = document.querySelectorAll(
          '[data-timestamp], .timestamp'
        );
        dynamicElements.forEach((el) => (el.style.display = 'none'));
      });

      // Full page screenshot
      await expect(page).toHaveScreenshot(`${meeting.name}-full-page.png`, {
        fullPage: true,
        threshold: 0.2,
        maxDiffPixels: 100,
      });

      // Percy visual snapshot
      await percySnapshot(page, `${meeting.name} Full Page`);

      // Hero section screenshot
      const heroSection = page.locator('.meeting-hero');
      await expect(heroSection).toHaveScreenshot(`${meeting.name}-hero.png`, {
        threshold: 0.1,
      });

      // Interactive checkpoint screenshot (if exists)
      const checkpoint = page.locator('.interactive-checkpoint');
      if ((await checkpoint.count()) > 0) {
        await expect(checkpoint).toHaveScreenshot(
          `${meeting.name}-checkpoint.png`,
          {
            threshold: 0.1,
          }
        );
      }
    });
  });

  test('Homepage visual consistency', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot('homepage-full.png', {
      fullPage: true,
      threshold: 0.2,
    });

    // DORA metrics section
    const doraSection = page.locator('.dora-metrics');
    if ((await doraSection.count()) > 0) {
      await expect(doraSection).toHaveScreenshot('homepage-dora-metrics.png');
    }
  });

  test('Responsive visual testing', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1200, height: 800, name: 'desktop' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto('/meetings/meeting-1/');
      await page.waitForLoadState('networkidle');

      await expect(page).toHaveScreenshot(`meeting-1-${viewport.name}.png`, {
        fullPage: true,
        threshold: 0.2,
      });
    }
  });

  test('Key Pages Visual Snapshots', async ({ page }) => {
    const baseURL =
      'http://localhost:4000/accelerate-devex-book-club-notebooklm';

    // Homepage
    await page.goto(baseURL + '/');
    await page.waitForLoadState('networkidle');
    await percySnapshot(page, 'Homepage');

    // Navigation pages
    const pages = [
      { url: '/meetings/', name: 'Meetings Index' },
      { url: '/resources/', name: 'Resources Page' },
      { url: '/prompts/', name: 'Prompts Page' },
    ];

    for (const pageInfo of pages) {
      await page.goto(baseURL + pageInfo.url);
      await page.waitForLoadState('networkidle');
      await percySnapshot(page, pageInfo.name);
    }
  });
});
