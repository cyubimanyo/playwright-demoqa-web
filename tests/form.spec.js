import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/form.page.js';

test.describe('[WEB] - Form Submission', () => {

  test('User successfully fill form submission of Student Registration Form with valid data', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.goto();
    await formPage.openMenuRegisterForm();
    await expect(page.getByText('Student Registration Form')).toBeVisible();
    await formPage.fillStudentRegistrationForm();
    await formPage.clickSubmitButton();
  });

});