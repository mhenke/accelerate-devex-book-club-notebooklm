const { test, expect } = require("@playwright/test");
const { percySnapshot } = require("@percy/playwright");

// Percy visual exploration: Homepage, Meetings, Podcast Prompts, Resources
test.describe("Percy visual exploration", () => {
  test("Homepage, navigation, and key flows", async ({ page }) => {
    // 1. Homepage
    await page.goto(
      "http://localhost:4000/accelerate-devex-book-club-notebooklm",
    );
    await expect(page).toHaveTitle(/Accelerate DevEx Book Club/);
    // Expect hero banner and DORA metrics visible
    await expect(page.locator("h1")).toContainText(
      "Accelerate DevEx Book Club",
    );
    await percySnapshot(page, "Homepage");

    // 2. Meetings page
    await page.click('a[href*="meetings"]'); // Main nav link
    await expect(page).toHaveURL(/meetings/);
    // Expect meetings list/grid visible
    await expect(page.locator("main")).toContainText("Meeting");
    await percySnapshot(page, "Meetings Page");

    // 3. Podcast Prompts page
    await page.click('a[href*="prompts"]');
    await expect(page).toHaveURL(/prompts/);
    // Expect podcast prompt content visible
    await expect(page.locator("main")).toContainText("Podcast");
    await percySnapshot(page, "Podcast Prompts");

    // 4. Resources page
    await page.click('a[href*="resources"]');
    await expect(page).toHaveURL(/resources/);
    // Expect resources content visible
    await expect(page.locator("main")).toContainText("Resources");
    await percySnapshot(page, "Resources Page");
  });
});
