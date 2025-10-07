import { Page, expect } from '@playwright/test';

export class A11yPage {
  constructor(private page: Page) {}

  selectors = {
    homePageMenuLink: () => this.page.getByRole('link', { name: ' Homepage' }),
    uiElementsMenuLink: () => this.page.getByRole('link', { name: '  Single UI Elements' }),
    inputsLink: () => this.page.getByRole('link', { name: 'Inputs' }),
    buttonsLink: () => this.page.getByRole('link', { name: 'Buttons' }),
    checkboxLink: () => this.page.getByRole('link', { name: 'Checkbox' }),
    selectLink: () => this.page.getByRole('link', { name: 'Select' }),
    newTabLink: () => this.page.getByRole('link', { name: 'New tab' }),
    textAreaLink: () => this.page.getByRole('link', { name: 'Text area' }),
    alertsLink: () => this.page.getByRole('link', { name: 'Alerts' }),
    dragAndDropLink: () => this.page.getByRole('link', { name: 'Drag and Drop' }),
    iframesLink: () => this.page.getByRole('link', { name: 'Iframes' }),
    popUpLink: () => this.page.getByRole('link', { name: 'Pop-Up' }),
    launchPopUpButton: () => this.page.getByRole('button', { name: 'Launch Pop-Up' }),
    popUpModal: () => this.page.getByRole('dialog', { name: 'I am a Pop-Up' }),
    anyOpenModal: () => this.page.locator('.modal.show'),
  };
  async verifyUiElementsList() {
    const expectedLinks = [
      { name: 'Inputs', url: '/elements/input' },
      { name: 'Buttons', url: '/elements/button' },
      { name: 'Checkbox', url: '/elements/checkbox' },
      { name: 'Select', url: '/elements/select' },
      { name: 'New tab', url: '/elements/new_tab' },
      { name: 'Text area', url: '/elements/textarea' },
      { name: 'Alerts', url: '/elements/alert' },
      { name: 'Drag and Drop', url: '/elements/dragndrop' },
      { name: 'Iframes', url: '/elements/iframe/iframe_page' },
      { name: 'Pop-Up', url: '/elements/popup' },
    ];

    for (const link of expectedLinks) {
      const locator = this.page.getByRole('link', { name: link.name });
      await locator.isVisible();
      await expect(locator).toHaveAttribute('href', link.url);
    }
  }

  async goToPopUp() {
    await this.selectors.uiElementsMenuLink().click();
    await this.selectors.popUpLink().click();
  }
  async launchPopUp() {
    await this.selectors.launchPopUpButton().click();
  }
}
