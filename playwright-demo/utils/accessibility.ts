import { AxeBuilder } from '@axe-core/playwright';
import { expect, Page } from '@playwright/test';
import { A11yPage } from '../pages/A11yPracticePage';

type A11yOptions = {
  include?: string[];
  exclude?: string[];
  impact?: Array<'critical' | 'serious' | 'moderate' | 'minor'>;
  tags?: string[];
};

export async function a11yScan(page: Page, opts: A11yOptions = {}) {
  const { include, exclude, impact = ['critical', 'serious'], tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag22aa'] } = opts;

  let builder = new AxeBuilder({ page }).withTags(tags);

  if (include?.length) builder = builder.include(include);
  if (exclude?.length) builder = builder.exclude(exclude);

  const results = await builder.analyze();
  const violations = results.violations.filter((v) => impact.includes(v.impact as any));

  const pretty = JSON.stringify(
    violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.slice(0, 5).map((n) => ({
        target: n.target,
        failureSummary: n.failureSummary,
      })),
    })),
    null,
    2,
  );

  expect(violations, `A11y violations:\n${pretty}\n`).toEqual([]);
  return results;
}

export async function tabN(page: Page, n: number) {
  for (let i = 0; i < n; i++) await page.keyboard.press('Tab');
}

export async function assertFocusVisible(a11yPage: A11yPage) {
  await expect(a11yPage.selectors.homePageMenuLink()).toBeFocused();
}

export const assertFocusWithin = async (page: Page, selector: string) => {
  await expect
    .poll(
      async () =>
        page.evaluate((sel) => {
          const el = document.querySelector(sel);
          return el ? el.contains(document.activeElement) : false;
        }, selector),
      { message: `Focus should be inside element: ${selector}` },
    )
    .toBeTruthy();
};
