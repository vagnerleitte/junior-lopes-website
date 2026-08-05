import { expect, test } from '@playwright/test';

test('home apresenta a jornada completa', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByTestId('practice-areas')).toBeVisible();
  await expect(page.getByTestId('how-it-works')).toBeVisible();
  await expect(page.getByTestId('about')).toBeVisible();
  await expect(page.getByTestId('faq')).toBeVisible();
  await expect(page.getByTestId('contact')).toBeVisible();
});
