import { chromium, test } from '@playwright/test';

test.describe('Website Exploration', () => {
  let browser;
  let context;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await context.close();
    await browser.close();
  });

  test('Explore Homepage and Core Features', async () => {
    const baseURL =
      'http://localhost:4000/accelerate-devex-book-club-notebooklm';

    console.log('🚀 Starting website exploration...');

    // 1. Navigate to Homepage
    console.log('\n1. Exploring Homepage...');
    await page.goto(baseURL);
    await page.waitForLoadState('networkidle');

    // Document homepage elements
    const title = await page.title();
    console.log(`   Title: ${title}`);

    // Check for hero section
    const heroSection = page.locator('.hero, .banner, h1').first();
    if (await heroSection.isVisible()) {
      const heroText = await heroSection.textContent();
      console.log(`   Hero section: ${heroText?.slice(0, 100)}...`);
    }

    // Check for navigation
    const navLinks = page.locator('nav a, .nav a, header a');
    const navCount = await navLinks.count();
    console.log(`   Navigation links found: ${navCount}`);

    for (let i = 0; i < Math.min(navCount, 5); i++) {
      const linkText = await navLinks.nth(i).textContent();
      const linkHref = await navLinks.nth(i).getAttribute('href');
      console.log(`     - ${linkText}: ${linkHref}`);
    }

    // 2. Explore Meeting Pages
    console.log('\n2. Exploring Meeting Pages...');
    const meetingLinks = page.locator('a[href*="meeting"]');
    const meetingCount = await meetingLinks.count();
    console.log(`   Meeting links found: ${meetingCount}`);

    if (meetingCount > 0) {
      // Navigate to first meeting
      await meetingLinks.first().click();
      await page.waitForLoadState('networkidle');

      const meetingTitle = await page.title();
      console.log(`   Meeting page title: ${meetingTitle}`);

      // Check for interactive elements
      const radioButtons = page.locator('input[type="radio"]');
      const radioCount = await radioButtons.count();
      console.log(`   Radio buttons found: ${radioCount}`);

      // Test DORA Performance Assessment if exists
      const doraRadios = page.locator('input[name="dora-performance"]');
      const doraCount = await doraRadios.count();
      console.log(`   DORA assessment options: ${doraCount}`);

      if (doraCount > 0) {
        console.log('   Testing DORA assessment interaction...');
        await doraRadios.first().check();
        await page.waitForTimeout(500);

        const feedback = page.locator('#dora-feedback, .feedback-area');
        if (await feedback.isVisible()) {
          const feedbackText = await feedback.textContent();
          console.log(
            `   Feedback displayed: ${feedbackText?.slice(0, 100)}...`
          );
        }
      }
    }

    // 3. Explore Resources Section
    console.log('\n3. Exploring Resources...');
    await page.goto(baseURL + '/resources/');
    await page.waitForLoadState('networkidle');

    const resourceTitle = await page.title();
    console.log(`   Resources page title: ${resourceTitle}`);

    const resourceLinks = page.locator('a[href*="resource"], .resource-link');
    const resourceCount = await resourceLinks.count();
    console.log(`   Resource links found: ${resourceCount}`);

    // 4. Explore Meetings Index
    console.log('\n4. Exploring Meetings Index...');
    await page.goto(baseURL + '/meetings/');
    await page.waitForLoadState('networkidle');

    const meetingsTitle = await page.title();
    console.log(`   Meetings index title: ${meetingsTitle}`);

    const allMeetings = page.locator(
      '.meeting-card, .meeting-item, a[href*="meeting-"]'
    );
    const allMeetingsCount = await allMeetings.count();
    console.log(`   Total meetings found: ${allMeetingsCount}`);

    // 5. Test Responsive Behavior
    console.log('\n5. Testing Responsive Design...');
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1200, height: 800, name: 'Desktop' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto(baseURL + '/meetings/meeting-1/');
      await page.waitForLoadState('networkidle');

      const isNavVisible = await page.locator('nav, .navigation').isVisible();
      console.log(
        `   ${viewport.name} (${viewport.width}x${viewport.height}): Navigation visible = ${isNavVisible}`
      );
    }

    console.log('\n✅ Website exploration complete!');
  });
});
