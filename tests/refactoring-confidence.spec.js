import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Refactoring Confidence - Complete Jekyll Site Testing', () => {
  // Base URL configuration for GitHub Pages
  const baseURL = '/accelerate-devex-book-club-notebooklm/';
  
  test.beforeEach(async ({ page }) => {
    // Set up each test with consistent starting point
    await page.goto(`${baseURL}`);
    await page.waitForLoadState('networkidle');
  });

  test.describe('Meeting Page Theme Consistency', () => {
    const meetings = [
      { number: 1, theme: 'blue', color: 'rgb(30, 58, 138)' },
      { number: 2, theme: 'teal', color: 'rgb(15, 118, 110)' },
      { number: 3, theme: 'amber', color: 'rgb(217, 119, 6)' },
      { number: 4, theme: 'purple', color: 'rgb(126, 34, 206)' }
    ];

    meetings.forEach(meeting => {
      test(`Meeting ${meeting.number} - ${meeting.theme} theme consistency`, async ({ page }) => {
        await page.goto(`${baseURL}meetings/meeting-${meeting.number}/`);
        await page.waitForLoadState('networkidle');

        // Test hero section background color
        const heroSection = page.locator('.meeting-hero');
        await expect(heroSection).toHaveCSS('background', new RegExp(meeting.color));

        // Test navigation theme
        const navLinks = page.locator('.meeting-nav a');
        if (await navLinks.count() > 0) {
          await expect(navLinks.first()).toHaveCSS('color', new RegExp(meeting.color));
        }

        // Test card elements use theme colors
        const cards = page.locator('.checkpoint-card, .assessment-card');
        if (await cards.count() > 0) {
          const firstCard = cards.first();
          await expect(firstCard).toHaveCSS('border-color', new RegExp(meeting.color));
        }
      });
    });
  });

  test.describe('Interactive Assessment Components', () => {
    test('DORA Metrics Assessment - Meeting 1', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);
      await page.waitForLoadState('networkidle');

      // Test deployment frequency assessment
      const deploymentRadios = page.locator('input[name="deployment-frequency"]');
      if (await deploymentRadios.count() > 0) {
        await deploymentRadios.first().check();
        
        // Verify feedback appears
        const feedback = page.locator('#deployment-feedback, .feedback-container');
        await expect(feedback.first()).toBeVisible();
      }

      // Test lead time assessment
      const leadTimeRadios = page.locator('input[name="lead-time"]');
      if (await leadTimeRadios.count() > 0) {
        await leadTimeRadios.first().check();
        
        const leadTimeFeedback = page.locator('#leadtime-feedback, .feedback-container');
        await expect(leadTimeFeedback.first()).toBeVisible();
      }
    });

    test('Tool Freedom Slider - Meeting 2', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-2/`);
      await page.waitForLoadState('networkidle');

      const slider = page.locator('#tool-slider, .tool-freedom-slider');
      if (await slider.count() > 0) {
        await expect(slider.first()).toBeVisible();
        
        // Test slider interaction
        const sliderHandle = page.locator('.slider-handle, .slider-thumb');
        if (await sliderHandle.count() > 0) {
          await sliderHandle.first().click();
          
          // Verify feedback updates
          const feedback = page.locator('#slider-feedback, .slider-feedback');
          await expect(feedback.first()).toBeVisible();
        }
      }
    });

    test('Learning Checkpoint - Meeting 3', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-3/`);
      await page.waitForLoadState('networkidle');

      // Test Lean Management assessment
      const leanRadios = page.locator('input[name="lean-management"], input[name="lean-maturity"]');
      if (await leanRadios.count() > 0) {
        await leanRadios.first().check();
        
        const leanFeedback = page.locator('#lean-feedback, .lean-feedback');
        await expect(leanFeedback.first()).toBeVisible();
      }

      // Test Employee Satisfaction checkboxes
      const satisfactionChecks = page.locator('input[name="satisfaction-factors"], .satisfaction-checkbox');
      if (await satisfactionChecks.count() > 0) {
        await satisfactionChecks.first().check();
        
        // Verify score calculation
        const score = page.locator('#satisfaction-score, .satisfaction-score');
        await expect(score.first()).toBeVisible();
      }
    });

    test('Leadership Assessment - Meeting 4', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-4/`);
      await page.waitForLoadState('networkidle');

      // Test transformational leadership assessment
      const leadershipRadios = page.locator('input[name="leadership-style"], input[name="transformational-leadership"]');
      if (await leadershipRadios.count() > 0) {
        await leadershipRadios.first().check();
        
        const leadershipFeedback = page.locator('#leadership-feedback, .leadership-feedback');
        await expect(leadershipFeedback.first()).toBeVisible();
      }
    });
  });

  test.describe('Responsive Design Validation', () => {
    const viewports = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1024, height: 768 },
      { name: 'Large Desktop', width: 1440, height: 900 }
    ];

    viewports.forEach(viewport => {
      test(`${viewport.name} (${viewport.width}x${viewport.height}) layout`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Test main navigation
        await page.goto(`${baseURL}`);
        const navigation = page.locator('nav, .navigation');
        await expect(navigation.first()).toBeVisible();

        // Test meeting pages at this viewport
        await page.goto(`${baseURL}meetings/meeting-1/`);
        const heroSection = page.locator('.meeting-hero, .hero');
        await expect(heroSection.first()).toBeVisible();

        // Test content cards adapt to viewport
        const cards = page.locator('.checkpoint-card, .assessment-card, .card');
        if (await cards.count() > 0) {
          const firstCard = cards.first();
          await expect(firstCard).toBeVisible();
          
          // On mobile, cards should stack
          if (viewport.width < 768) {
            await expect(firstCard).toHaveCSS('width', '100%');
          }
        }
      });
    });
  });

  test.describe('Performance Standards', () => {
    test('Page load performance', async ({ page }) => {
      const startTime = Date.now();
      await page.goto(`${baseURL}meetings/meeting-1/`);
      await page.waitForLoadState('networkidle');
      const loadTime = Date.now() - startTime;

      // Page should load within 3 seconds
      expect(loadTime).toBeLessThan(3000);

      // Critical resources should be loaded
      await expect(page.locator('link[rel="stylesheet"]')).toHaveCount.greaterThan(0);
    });

    test('Core Web Vitals - LCP', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);
      
      // Wait for largest contentful paint
      const lcpTime = await page.evaluate(() => {
        return new Promise((resolve) => {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          }).observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Fallback timeout
          setTimeout(() => resolve(0), 5000);
        });
      });

      // LCP should be under 2.5 seconds (2500ms)
      expect(lcpTime).toBeLessThan(2500);
    });
  });

  test.describe('Accessibility Compliance', () => {
    test('WCAG 2.1 AA compliance - All meeting pages', async ({ page }) => {
      const meetingPages = [1, 2, 3, 4];
      
      for (const meetingNum of meetingPages) {
        await page.goto(`${baseURL}meetings/meeting-${meetingNum}/`);
        await page.waitForLoadState('networkidle');

        // Run axe accessibility scan
        const accessibilityScanResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa'])
          .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      }
    });

    test('Keyboard navigation', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);
      
      // Test tab navigation
      await page.keyboard.press('Tab');
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();

      // Test radio button keyboard navigation
      const radioButtons = page.locator('input[type="radio"]');
      if (await radioButtons.count() > 0) {
        await radioButtons.first().focus();
        await page.keyboard.press('ArrowDown');
        
        // Verify a radio button is selected
        const checkedRadio = page.locator('input[type="radio"]:checked');
        await expect(checkedRadio).toHaveCount(1);
      }
    });

    test('Screen reader compatibility', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);

      // Test ARIA labels exist
      const ariaLabels = page.locator('[aria-label], [aria-labelledby]');
      await expect(ariaLabels.first()).toBeVisible();

      // Test semantic structure
      const headings = page.locator('h1, h2, h3, h4, h5, h6');
      await expect(headings).toHaveCount.greaterThan(0);

      // Test form labels
      const inputs = page.locator('input');
      if (await inputs.count() > 0) {
        const labels = page.locator('label');
        await expect(labels).toHaveCount.greaterThan(0);
      }
    });
  });

  test.describe('Cross-Browser Visual Consistency', () => {
    test('Visual regression - Meeting themes', async ({ page, browserName }) => {
      const meetings = [1, 2, 3, 4];
      
      for (const meetingNum of meetings) {
        await page.goto(`${baseURL}meetings/meeting-${meetingNum}/`);
        await page.waitForLoadState('networkidle');

        // Take screenshot for visual regression
        await expect(page).toHaveScreenshot(`meeting-${meetingNum}-${browserName}.png`, {
          fullPage: true,
          threshold: 0.2
        });
      }
    });

    test('Font and icon rendering', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);

      // Test web fonts load correctly
      const bodyElement = page.locator('body');
      await expect(bodyElement).toHaveCSS('font-family', /Roboto|Inter|sans-serif/);

      // Test Font Awesome icons if present
      const fontAwesomeIcons = page.locator('.fas, .far, .fab');
      if (await fontAwesomeIcons.count() > 0) {
        await expect(fontAwesomeIcons.first()).toHaveCSS('font-family', /Font Awesome/);
      }
    });
  });

  test.describe('Content Navigation Workflow', () => {
    test('Meeting navigation links work correctly', async ({ page }) => {
      await page.goto(`${baseURL}`);
      
      // Test navigation to meetings page
      const meetingsLink = page.locator('a[href*="meetings"]');
      if (await meetingsLink.count() > 0) {
        await meetingsLink.first().click();
        await expect(page).toHaveURL(new RegExp('meetings'));
      }

      // Test individual meeting page links
      const meetingLinks = page.locator('a[href*="meeting-"]');
      if (await meetingLinks.count() > 0) {
        await meetingLinks.first().click();
        await expect(page).toHaveURL(new RegExp('meeting-[1-4]'));
      }
    });

    test('Breadcrumb navigation', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);
      
      const breadcrumbs = page.locator('.breadcrumb, .breadcrumbs');
      if (await breadcrumbs.count() > 0) {
        await expect(breadcrumbs.first()).toBeVisible();
        
        // Test breadcrumb links
        const breadcrumbLinks = breadcrumbs.locator('a');
        if (await breadcrumbLinks.count() > 0) {
          await breadcrumbLinks.first().click();
          // Should navigate to parent page
          await expect(page).toHaveURL(new RegExp(`${baseURL}`));
        }
      }
    });
  });

  test.describe('Media Integration Workflow', () => {
    test('Audio player functionality', async ({ page }) => {
      const meetings = [1, 2, 3, 4];
      
      for (const meetingNum of meetings) {
        await page.goto(`${baseURL}meetings/meeting-${meetingNum}/`);
        
        const audioPlayers = page.locator('audio');
        if (await audioPlayers.count() > 0) {
          const player = audioPlayers.first();
          await expect(player).toBeVisible();
          
          // Test controls are present
          await expect(player).toHaveAttribute('controls');
          
          // Test that media loads (check for duration)
          await page.waitForFunction(
            (audio) => audio.readyState >= 1,
            await player.elementHandle()
          );
        }
      }
    });

    test('Video player functionality', async ({ page }) => {
      const meetings = [1, 2, 3, 4];
      
      for (const meetingNum of meetings) {
        await page.goto(`${baseURL}meetings/meeting-${meetingNum}/`);
        
        const videoPlayers = page.locator('video');
        if (await videoPlayers.count() > 0) {
          const player = videoPlayers.first();
          await expect(player).toBeVisible();
          
          // Test controls are present
          await expect(player).toHaveAttribute('controls');
          
          // Test poster image if present
          const poster = await player.getAttribute('poster');
          if (poster) {
            // Verify poster image loads
            const response = await page.request.get(poster);
            expect(response.status()).toBe(200);
          }
        }
      }
    });
  });

  test.describe('Error Handling and Edge Cases', () => {
    test('404 page handling', async ({ page }) => {
      const response = await page.goto(`${baseURL}nonexistent-page`);
      expect(response?.status()).toBe(404);
      
      // Should show custom 404 page
      await expect(page.locator('h1, h2')).toContainText(/404|not found/i);
    });

    test('Missing image graceful handling', async ({ page }) => {
      await page.goto(`${baseURL}meetings/meeting-1/`);
      
      // Check for broken images
      const images = page.locator('img');
      const imageCount = await images.count();
      
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const naturalWidth = await img.evaluate((el) => el.naturalWidth);
        
        // If image fails to load, it should have alt text
        if (naturalWidth === 0) {
          await expect(img).toHaveAttribute('alt');
        }
      }
    });
  });
});
