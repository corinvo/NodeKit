import { test, expect } from '@playwright/test';

test.describe('Storybook E2E Tests', () => {
  test('should load Storybook', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Storybook/);
  });
});
