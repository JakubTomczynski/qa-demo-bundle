import { test } from '../../fixtures/classFixture';
import { a11ySmoke } from '../../utils/accessibility';

test.describe('@smoke a11y', () => {
  test('Login page has no critical wcag violations', async ({ page }) => {
    await page.goto('/');
    await a11ySmoke(page);
  });
});
