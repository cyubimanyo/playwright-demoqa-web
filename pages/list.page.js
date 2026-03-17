import { expect } from '@playwright/test';
import { fillFormRegistrationFeatures, listFeatures } from '../locators/data.locator.js';

export class ListPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/');
  }

  async openMenuInteractions() {
    await this.page.locator(fillFormRegistrationFeatures.mainMenu)
      .getByText('Interactions')
      .click();

    await this.page.locator(fillFormRegistrationFeatures.menuList)
      .getByText('Selectable')
      .click();

    await expect(this.page.getByRole('heading', { name: 'Selectable' })).toBeVisible();
  }

  async selectItems(indexes) {
    const items = this.page.locator('#verticalListContainer li');

    for (const i of indexes) {
        await items.nth(i).click();
    }
  }

    async validateSelectedCount(expectedCount) {
    const selected = this.page.locator('#verticalListContainer li.active');
    await expect(selected).toHaveCount(expectedCount);
  }
}