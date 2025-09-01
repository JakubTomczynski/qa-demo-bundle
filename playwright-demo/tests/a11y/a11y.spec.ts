import { test } from '../../fixtures/classFixture';
import { a11yScan } from '../../utils/accessibility';

test.describe('@smoke a11y', () => {
  test.fail('Login page has no critical wcag violations', async ({ page }) => {
    await page.goto('/');
    await a11yScan(page);
  });
});
