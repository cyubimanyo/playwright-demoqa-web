import { expect } from '@playwright/test';
import { fillFormRegistration, alertFeatures } from '../locators/data.locator.js';

export class AlertPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/');
  }

  async openMenuAlerts() {
    await this.page.locator(fillFormRegistration.mainMenu).getByText('Alerts, Frame & Windows').click();
    await this.page.locator(fillFormRegistration.menuList).getByText('Alerts').click();
 }

  async clickOkAlert() {
  await Promise.all([
    this.page.waitForEvent('dialog').then(dialog => {
      console.log(`Alert Message: ${dialog.message()}`);
      return dialog.accept();
    }),
    this.page.locator(alertFeatures.alertButtonField).click()
  ]);
}

  async clickDelayedAlert() {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        console.log(`Delayed Alert: ${dialog.message()}`);
        return dialog.accept();
      }),
      this.page.locator(alertFeatures.timerAlertButtonField).click()
    ]);
  }

  async clickConfirmAlert(action = 'accept') {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        console.log(`Confirm Alert: ${dialog.message()}`);
        return action === 'accept'
          ? dialog.accept()
          : dialog.dismiss();
      }),
      this.page.locator(alertFeatures.confirmButtonField).click()
    ]);
  }

  async clickPromptAlert(inputText) {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        console.log(`Prompt Alert: ${dialog.message()}`);
        return dialog.accept(inputText);
      }),
      this.page.locator(alertFeatures.promtButtonField).click()
    ]);
  }

  async validateConfirmResult(expectedText) {
    const locator = this.page.locator('#confirmResult');
    const actualText = await locator.textContent();

    console.log(`✅ Confirm Result Match Check`);
    console.log(`Actual   : ${actualText}`);
    console.log(`Expected : ${expectedText}`);

    await expect(locator).toHaveText(expectedText);
 }

    async validatePromptResult(expectedText) {
    const locator = this.page.locator('#promptResult');
    const actualText = await locator.textContent();

    console.log(`✅ Prompt Result Match Check`);
    console.log(`Actual   : ${actualText}`);
    console.log(`Expected : ${expectedText}`);

    await expect(locator).toHaveText(expectedText);
 }
}