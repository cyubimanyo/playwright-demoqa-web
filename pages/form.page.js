import { expect } from '@playwright/test';
import { fillFormRegistration } from '../locators/data.locator.js';
import { studentRegistrationForm } from '../data/testData.js';
import path from 'path';

export class FormPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/');
  }

  async openMenuRegisterForm() {
    await this.page.locator(fillFormRegistration.mainMenu).getByText('Forms').click();

    await this.page.locator(fillFormRegistration.menuList).getByText('Practice Form').click();

    await expect(this.page.getByText('Student Registration Form')).toBeVisible();
  }

  async fillStudentRegistrationForm() {
    await this.page.locator(fillFormRegistration.firstNameField).fill(studentRegistrationForm.firstName);

    await this.page.locator(fillFormRegistration.lastNameField).fill(studentRegistrationForm.lastName);

    await this.page.locator(fillFormRegistration.emailField).fill(studentRegistrationForm.email);

    await this.page.locator(fillFormRegistration.genderRadio).click();

    await this.page.locator(fillFormRegistration.mobileField).fill(studentRegistrationForm.mobile);

    await this.page.locator(fillFormRegistration.dateOfBirthField).fill(studentRegistrationForm.dateOfBirth);

    await this.page.locator(fillFormRegistration.subjectsField).fill(studentRegistrationForm.subject);

    await this.page.locator('.subjects-auto-complete__option').getByText(studentRegistrationForm.subject).click();

    await this.page.waitForTimeout(5000);

    await this.page.locator(fillFormRegistration.hobbyField).click();

    const filePath = path.resolve('data/sampleFile.jpeg');

    await this.page.locator(fillFormRegistration.pictureField).setInputFiles(filePath);

    await this.page.locator(fillFormRegistration.currentAddressField).fill(studentRegistrationForm.currentAddress);

    await this.page.locator(fillFormRegistration.selectStateField).click();
    await this.page.locator(fillFormRegistration.selectStateField).fill(studentRegistrationForm.state);

    await this.page.getByRole('option', { name: studentRegistrationForm.state }).click();

    await this.page.locator(fillFormRegistration.selectCityField).click();
    await this.page.locator(fillFormRegistration.selectCityField).fill(studentRegistrationForm.city);

    await this.page.getByRole('option', { name: studentRegistrationForm.city }).click();
  }

  async clickSubmitButton() {
    await this.page.locator(fillFormRegistration.submitButton).click();
    await expect(this.page.getByText('Thanks for submitting the form')).toBeVisible();
  }

  async validateSubmittedForm(data) {
    const expected = {
        'Student Name': `${data.firstName} ${data.lastName}`,
        'Student Email': data.email,
        'Gender': data.gender,
        'Mobile': data.mobile,
        'Date of Birth': data.dateOfBirth.replace(',', ''),
        'Subjects': data.subject,
        'Hobbies': data.hobby,
        'Address': data.currentAddress,
        'State and City': `${data.state} ${data.city}`
    };

    for (const label in expected) {
        let actual = await this.getTableValue(label);

        if (label === 'Date of Birth') {
        actual = actual.replace(',', '');
        }

        const actualTrim = actual.trim();
        const expectedValue = expected[label];

        if (actualTrim === expectedValue) {
            console.log(`✅ ${label} MATCH → ${actualTrim}\n`);
        } else {
            console.log(`❌ ${label} MISMATCH\n`);
            console.log(`Expected: ${expectedValue}\n`);
            console.log(`Actual: ${actualTrim}\n`);
        }

        await expect(actualTrim).toBe(expectedValue);
    }

    await this.page.waitForTimeout(5000);
 }
}