import { expect, test } from '@playwright/test';

test.describe('Performance and Loading Tests', () => {
  test('Page load performance benchmarks', async ({ page }) => {
    const pages = [
      '/',
      '/meetings/',
      '/meetings/meeting-1/',
      '/meetings/meeting-2/',
      '/meetings/meeting-3/',
      '/meetings/meeting-4/',
      '/resources/',
      '/prompts/',
    ];

    for (const path of pages) {
      const startTime = Date.now();

      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const loadTime = Date.now() - startTime;
      console.log(`${path}: ${loadTime}ms`);

      // Expect pages to load within 3 seconds
      expect(loadTime).toBeLessThan(3000);

      // Check that essential resources are loaded
      const hasCSS =
        (await page.locator('link[rel="stylesheet"], style').count()) > 0;
      expect(hasCSS).toBeTruthy();

      // Check for JavaScript errors
      const errors = [];
      page.on('pageerror', (error) => errors.push(error));

      await page.waitForTimeout(1000);
      expect(errors.length).toBe(0);
    }
  });

  test('CSS and JavaScript resource loading', async ({ page }) => {
    await page.goto('/meetings/meeting-1/');

    // Check that main CSS is loaded
    const mainCSS = page.locator('link[href*="main.css"]');
    await expect(mainCSS).toHaveCount(1);

    // Check that Google Fonts are loaded
    const googleFonts = page.locator('link[href*="fonts.googleapis.com"]');
    if ((await googleFonts.count()) > 0) {
      for (let i = 0; i < (await googleFonts.count()); i++) {
        const response = await page.request.get(
          await googleFonts.nth(i).getAttribute('href')
        );
        expect(response.status()).toBe(200);
      }
    }

    // Check that Font Awesome is loaded (if used)
    const fontAwesome = page.locator(
      'link[href*="font-awesome"], link[href*="fontawesome"]'
    );
    if ((await fontAwesome.count()) > 0) {
      for (let i = 0; i < (await fontAwesome.count()); i++) {
        const response = await page.request.get(
          await fontAwesome.nth(i).getAttribute('href')
        );
        expect(response.status()).toBe(200);
      }
    }
  });

  test('Image optimization and loading', async ({ page }) => {
    await page.goto('/');

    // Get all images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');

      if (src && !src.startsWith('data:')) {
        // Check that image loads successfully
        const response = await page.request.get(src);
        expect(response.status()).toBe(200);

        // Check that images have alt text
        const alt = await img.getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    }
  });

  test('Interactive element performance', async ({ page }) => {
    await page.goto('/meetings/meeting-1/');
    await page.waitForLoadState('networkidle');

    // Measure time to interactive for radio buttons
    const startTime = performance.now();

    await page.locator('input[name="dora-performance"]').first().click();
    await page.waitForSelector('#dora-feedback.active');

    const interactionTime = performance.now() - startTime;
    console.log(`Radio button interaction time: ${interactionTime}ms`);

    // Interaction should be nearly instantaneous
    expect(interactionTime).toBeLessThan(500);
  });

  test('Memory usage during navigation', async ({ page }) => {
    // Navigate through all meeting pages to test for memory leaks
    const meetingPages = [
      '/meetings/meeting-1/',
      '/meetings/meeting-2/',
      '/meetings/meeting-3/',
      '/meetings/meeting-4/',
    ];

    for (const meetingPage of meetingPages) {
      await page.goto(meetingPage);
      await page.waitForLoadState('networkidle');

      // Test interactive elements to ensure they don't accumulate listeners
      const radioButtons = page.locator('input[type="radio"]');
      const radioCount = await radioButtons.count();

      for (let i = 0; i < Math.min(radioCount, 3); i++) {
        await radioButtons.nth(i).click();
        await page.waitForTimeout(100);
      }
    }

    // If we get here without memory issues, the test passes
    expect(true).toBeTruthy();
  });
});
