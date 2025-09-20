/**
 * Simple test to validate mobile layout fixes for Meeting 2
 */

const { test, expect } = require('@playwright/test');

test.describe('Meeting 2 Mobile Layout Fixes', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:8000/test-meeting-2.html');
  });

  test('VS divider should not be rotated sideways on mobile', async ({ page }) => {
    const vsDiv = page.locator('.vs-divider');
    await expect(vsDiv).toBeVisible();
    
    // Check that VS divider is not transformed with rotation
    const transform = await vsDiv.evaluate(el => getComputedStyle(el).transform);
    expect(transform).not.toMatch(/rotate\(90deg\)/);
  });

  test('Arrow breakthrough text should be readable horizontally', async ({ page }) => {
    const arrowBreakthrough = page.locator('.arrow-breakthrough');
    await expect(arrowBreakthrough).toBeVisible();
    await expect(arrowBreakthrough).toContainText('CD Solution');
    
    // Check that text container is not rotated
    const transform = await arrowBreakthrough.evaluate(el => getComputedStyle(el).transform);
    expect(transform).not.toMatch(/rotate\(90deg\)/);
  });

  test('Arrow transform text should be readable horizontally', async ({ page }) => {
    const arrowTransform = page.locator('.arrow-transform');
    await expect(arrowTransform).toBeVisible();
    await expect(arrowTransform).toContainText('Inverse Conway');
    
    // Check that text container is not rotated
    const transform = await arrowTransform.evaluate(el => getComputedStyle(el).transform);
    expect(transform).not.toMatch(/rotate\(90deg\)/);
  });

  test('Security arrow should point downward on mobile', async ({ page }) => {
    const vsArrow = page.locator('.vs-arrow');
    await expect(vsArrow).toBeVisible();
    
    // Check that arrow icon is rotated to point down
    const transform = await vsArrow.evaluate(el => getComputedStyle(el).transform);
    expect(transform).toMatch(/rotate\(90deg\)/);
  });

  test('Related resources should be more compact', async ({ page }) => {
    const relatedResources = page.locator('.related-resources');
    await expect(relatedResources).toBeVisible();
    
    // Check that gap is reduced on mobile
    const gap = await relatedResources.evaluate(el => getComputedStyle(el).gap);
    expect(gap).toBe('1rem'); // Should be 1rem instead of 1.5rem
  });

  test('Resource categories should be stacked on mobile', async ({ page }) => {
    const resourceCategories = page.locator('.resource-category');
    const count = await resourceCategories.count();
    expect(count).toBeGreaterThan(0);
    
    // Check grid template columns is set to 1fr on mobile
    const relatedResources = page.locator('.related-resources');
    const gridColumns = await relatedResources.evaluate(el => getComputedStyle(el).gridTemplateColumns);
    expect(gridColumns).toBe('1fr');
  });
});