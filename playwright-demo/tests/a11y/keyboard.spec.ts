import { test } from '../../fixtures/classFixture';
import { expect } from '@playwright/test';
import { tabN, assertFocusVisible, a11yScan } from '../../utils/accessibility';

test.describe('@a11y @keyboard Focus management & shortcuts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Focus ring is visible on tabbable elements', async ({ page, a11yPage }) => {
    await test.step('Tab to the first focusable control', async () => {
      await page.keyboard.press('Tab');
    });
    await test.step('Visible focus should be present', async () => {
      await assertFocusVisible(a11yPage);
    });
  });

  test('No focus trap inside modal. Tab cycles and ESC - closes', async ({ a11yPage, page }) => {
    await test.step('Open modal via button', async () => {
      await a11yPage.goToPopUp();
      await a11yPage.launchPopUp();
    });
    await test.step('Try tabbing around inside modal', async () => {
      await tabN(page, 10);
    });
    await test.step('Escape should close modal', async () => {
      await page.keyboard.press('Escape');
      await expect(a11yPage.selectors.popUpHeading()).toBeHidden();
    });
  });

  test.fail('[JIRA-1234] Known a11y issues on this page: A11y scan on critical/serious only, ignoring banners', async ({ page }) => {
    await a11yScan(page, {
      exclude: ['#cookie-banner', '#consent-modal'],
      impact: ['critical', 'serious'],
      tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
    });
  });
});
