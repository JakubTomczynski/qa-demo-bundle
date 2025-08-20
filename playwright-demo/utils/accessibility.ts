import { AxeBuilder } from '@axe-core/playwright';
import { Page, expect } from '@playwright/test';

export async function a11ySmoke(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
}
