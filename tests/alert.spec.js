import { test, expect } from '@playwright/test';
import { AlertPage } from '../pages/alert.page.js';

test.describe('[WEB] - Alerts', () => {

  test('01_User can see alert after clicking Click Me button', async ({ page }) => {
    const alertPage = new AlertPage(page);

    await alertPage.goto();
    await alertPage.openMenuAlerts();
    await expect( page.getByRole('heading', { name: 'Alerts' }) ).toBeVisible();
    await alertPage.clickOkAlert();
  });

  test('02_User can see alert after 5 seconds clicked Click Me button', async ({ page }) => {
    const alertPage = new AlertPage(page);

    await alertPage.goto();
    await alertPage.openMenuAlerts();
    await expect( page.getByRole('heading', { name: 'Alerts' }) ).toBeVisible();
    await alertPage.clickDelayedAlert();
  });

  test('03_User can confirm box OK alert after clicking Click Me button', async ({ page }) => {
    const alertPage = new AlertPage(page);

    await alertPage.goto();
    await alertPage.openMenuAlerts();
    await expect( page.getByRole('heading', { name: 'Alerts' }) ).toBeVisible();
    await alertPage.clickConfirmAlert('accept');
    await alertPage.validateConfirmResult("You selected Ok");
  });

  test('04_User can confirm box Cancel alert after clicking Click Me button', async ({ page }) => {
    const alertPage = new AlertPage(page);

    await alertPage.goto();
    await alertPage.openMenuAlerts();
    await expect( page.getByRole('heading', { name: 'Alerts' }) ).toBeVisible();
    await alertPage.clickConfirmAlert('dismiss');
    await alertPage.validateConfirmResult("You selected Cancel");
  });

  test('05_User can fill prompt box alert after clicking Click Me button', async ({ page }) => {
    const alertPage = new AlertPage(page);

    let fullName = "Testing QA"

    await alertPage.goto();
    await alertPage.openMenuAlerts();
    await expect( page.getByRole('heading', { name: 'Alerts' }) ).toBeVisible();
    await alertPage.clickPromptAlert(fullName);
    await alertPage.validatePromptResult(`You entered ${fullName}`);
  });

});