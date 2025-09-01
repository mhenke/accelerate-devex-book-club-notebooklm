import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('Interactive Components - Meeting Pages', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a meeting page before each test
    await page.goto('/meetings/meeting-1/');
    await page.waitForLoadState('networkidle');
  });

  test('DORA Performance Assessment Radio Buttons', async ({ page }) => {
    // Test radio button interactions
    const performanceRadios = page.locator('input[name="dora-performance"]');
    await expect(performanceRadios).toHaveCount(4);

    // Test selecting high performance option
    await page.locator('input[name="dora-performance"][value="high"]').check();
    await expect(
      page.locator('input[name="dora-performance"][value="high"]')
    ).toBeChecked();

    // Verify feedback appears
    const feedback = page.locator('#dora-feedback');
    await expect(feedback).toHaveClass(/active/);
    await expect(feedback).toContainText('High Performers');
  });

  test('Deployment Confidence Assessment', async ({ page }) => {
    // Test deployment confidence radio buttons
    const confidenceRadios = page.locator(
      'input[name="deployment-confidence"]'
    );
    await expect(confidenceRadios).toHaveCount(4);

    // Test each option provides appropriate feedback
    const options = ['high', 'medium', 'low', 'very-low'];

    for (const option of options) {
      await page
        .locator(`input[name="deployment-confidence"][value="${option}"]`)
        .check();
      await expect(
        page.locator(`input[name="deployment-confidence"][value="${option}"]`)
      ).toBeChecked();

      const feedback = page.locator('#confidence-feedback');
      await expect(feedback).toHaveClass(/active/);
    }
  });

  test('Assessment Button Styling and Hover States', async ({ page }) => {
    // Test hover states for different performance categories
    const highPerfButton = page
      .locator('.assessment-btn.high-performance')
      .first();

    // Test initial styling
    await expect(highPerfButton).toHaveCSS('border-color', 'rgb(30, 58, 138)');

    // Test hover effect
    await highPerfButton.hover();
    await expect(highPerfButton).toHaveCSS(
      'transform',
      'matrix(1.02, 0, 0, 1.02, 0, 0)'
    );
  });

  test('Tool Freedom Slider Functionality', async ({ page }) => {
    // Navigate to meeting-2 which has the slider
    await page.goto('/meetings/meeting-2/');
    await page.waitForLoadState('networkidle');

    const slider = page.locator('#tool-slider');
    const thumb = page.locator('#tool-thumb');
    const feedback = page.locator('#slider-feedback');

    // Test slider exists and is interactive
    await expect(slider).toBeVisible();
    await expect(thumb).toBeVisible();

    // Test dragging slider (simulate different positions)
    const sliderBox = await slider.boundingBox();
    if (sliderBox) {
      // Move to 25% position
      await thumb.dragTo(slider, {
        targetPosition: { x: sliderBox.width * 0.25, y: sliderBox.height / 2 },
      });

      // Verify feedback updates
      await expect(feedback).toContainText(/freedom|autonomy|control/i);
    }
  });

  test('Interactive Learning Checkpoint - Meeting 3', async ({ page }) => {
    await page.goto('/meetings/meeting-3/');
    await page.waitForLoadState('networkidle');

    // Test Lean Management Assessment
    const leanRadios = page.locator('input[name="lean-maturity"]');
    await expect(leanRadios).toHaveCount(3);

    await page.locator('input[name="lean-maturity"][value="high"]').check();
    const leanFeedback = page.locator('#lean-feedback');
    await expect(leanFeedback).toContainText(/Excellent/i);

    // Test Deployment Pain Assessment
    const deploymentRadios = page.locator('input[name="deployment-pain"]');
    await page.locator('input[name="deployment-pain"][value="high"]').check();
    const deploymentFeedback = page.locator('#deployment-feedback');
    await expect(deploymentFeedback).toContainText(/Critical/i);

    // Test Employee Satisfaction Checkboxes
    const satisfactionChecks = page.locator(
      'input[name="satisfaction-factors"]'
    );
    await expect(satisfactionChecks).toHaveCount(4);

    // Check all satisfaction factors
    await satisfactionChecks.nth(0).check();
    await satisfactionChecks.nth(1).check();
    await satisfactionChecks.nth(2).check();
    await satisfactionChecks.nth(3).check();

    // Verify score updates
    const score = page.locator('#satisfaction-score');
    await expect(score).toHaveText('4');

    const satisfactionFeedback = page.locator('#satisfaction-feedback');
    await expect(satisfactionFeedback).toContainText(/Optimal/i);
  });

  test('CSS Color Theme Consistency', async ({ page }) => {
    // Test Meeting 1 (Blue theme)
    await page.goto('/meetings/meeting-1/');
    const meeting1Hero = page.locator('.meeting-hero');
    await expect(meeting1Hero).toHaveCSS('background', /rgb\(30, 58, 138\)/);

    // Test Meeting 2 (Teal theme)
    await page.goto('/meetings/meeting-2/');
    const meeting2Hero = page.locator('.meeting-hero');
    await expect(meeting2Hero).toHaveCSS('background', /rgb\(15, 118, 110\)/);

    // Test Meeting 3 (Amber theme)
    await page.goto('/meetings/meeting-3/');
    const meeting3Hero = page.locator('.meeting-hero');
    await expect(meeting3Hero).toHaveCSS('background', /rgb\(217, 119, 6\)/);

    // Test Meeting 4 (Purple theme)
    await page.goto('/meetings/meeting-4/');
    const meeting4Hero = page.locator('.meeting-hero');
    await expect(meeting4Hero).toHaveCSS('background', /rgb\(126, 34, 206\)/);
  });

  test('Responsive Design - Mobile Layout', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile-specific padding
    const heroSection = page.locator('.meeting-hero');
    await expect(heroSection).toHaveCSS('padding', '1rem');

    // Test card layout stacking
    const cards = page.locator('.checkpoint-card');
    if ((await cards.count()) > 0) {
      const firstCard = cards.first();
      await expect(firstCard).toHaveCSS('width', '100%');
    }
  });

  test('Accessibility Compliance', async ({ page }) => {
    // Run axe accessibility tests
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();

    // Test radio button keyboard interaction
    await page.locator('input[name="dora-performance"]').first().focus();
    await page.keyboard.press('ArrowDown');
    await expect(
      page.locator('input[name="dora-performance"]:checked')
    ).toHaveCount(1);
  });

  test('Form Validation and Error States', async ({ page }) => {
    // Test that required fields show appropriate feedback
    const assessmentButtons = page.locator('.assessment-btn');

    // Verify radio buttons work correctly
    for (let i = 0; i < Math.min(3, await assessmentButtons.count()); i++) {
      await assessmentButtons.nth(i).click();

      // Check that selection is reflected in styling
      const radioInput = assessmentButtons
        .nth(i)
        .locator('input[type="radio"]');
      await expect(radioInput).toBeChecked();
    }
  });

  test('Performance and Load Times', async ({ page }) => {
    // Test page load performance
    const startTime = Date.now();
    await page.goto('/meetings/meeting-1/', { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;

    // Expect page to load within 3 seconds
    expect(loadTime).toBeLessThan(3000);

    // Test that CSS and JS are loaded
    await expect(
      page.locator('style, link[rel="stylesheet"]')
    ).toHaveCount.greaterThan(0);

    // Test that interactive elements are ready
    await page.waitForFunction(() => {
      return (
        document.querySelectorAll('input[name="dora-performance"]').length > 0
      );
    });
  });
});

test.describe('Cross-Browser Visual Consistency', () => {
  test('Visual regression testing', async ({ page, browserName }) => {
    await page.goto('/meetings/meeting-1/');
    await page.waitForLoadState('networkidle');

    // Take screenshot for visual regression testing
    await expect(page).toHaveScreenshot(`meeting-1-${browserName}.png`, {
      fullPage: true,
      threshold: 0.2,
    });
  });

  test('Font and icon rendering', async ({ page }) => {
    await page.goto('/meetings/meeting-1/');

    // Test Font Awesome icons load correctly
    const icons = page.locator('.fas, .far, .fab');
    if ((await icons.count()) > 0) {
      await expect(icons.first()).toHaveCSS('font-family', /Font Awesome/);
    }

    // Test Google Fonts load correctly
    await expect(page.locator('body')).toHaveCSS(
      'font-family',
      /Roboto|Inter|sans-serif/
    );
  });
});
