import { expect, Page } from '@playwright/test';

export class BasePage {
  constructor(private page: Page) {}

  //selectors
  selectors = {
    cancelButton: () => this.page.getByRole('button', { name: 'cancel' }),
    continueButton: () => this.page.getByRole('button', { name: 'continue' }),
    finishButton: () => this.page.getByRole('button', { name: 'finish' }),
  };

  //methods
}
