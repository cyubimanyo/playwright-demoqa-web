# 🎭 Playwright Automation - DemoQA

This is an automation testing project using **Playwright** with the **Page Object Model (POM)** approach for the website: https://demoqa.com

---

## 📁 Project Structure

```
playwright-demoqa/
│
├── tests/          # Test cases
├── pages/          # Page Object Model (business logic)
├── locators/       # Locator definitions
├── data/           # Test data
├── test-results/   # Test results (ignored)
├── playwright.config.js
└── package.json
```

---

## ⚙️ Tech Stack

* Playwright
* Node.js
* JavaScript
* Page Object Model (POM)

---

## 🚀 Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Run Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/form.spec.js

# Run with reporter
npx playwright test --reporter=list
```

---

## 📦 Test Modules

### 1. [WEB] - Form Submission

**Test Case:**

* ✅ User successfully fills the Student Registration Form with valid data

---

### 2. [WEB] - Alerts

**Test Cases:**

* ✅ User can see an alert after clicking the "Click me" button
* ✅ User can see an alert after 5 seconds when clicking the "Click me" button
* ✅ User can confirm "OK" on the alert box
* ✅ User can confirm "Cancel" on the alert box
* ✅ User can fill the prompt alert and submit input

---

### 3. [WEB] - Interactions

**Test Cases:**

* ✅ User can select 1 item from the list
* ✅ User can select 2 items from the list
* ✅ User can select 3 items from the list
* ✅ User can select all items from the list

Check the detailed test cases here 

https://docs.google.com/spreadsheets/d/1S0zBHhppzOpjU7sez_RkVJEHXTlKtmhrepBYhQTJsgg/edit?usp=sharing 

---

## 🧠 Framework Design

This project follows the **Page Object Model (POM)** design pattern:

* **pages/** → contains page actions (methods)
* **locators/** → stores selectors (centralized & maintainable)
* **tests/** → contains test scenarios only
* **data/** → stores test data

---

## 🧹 Best Practices Implemented

* ✅ Separation of concerns (POM)
* ✅ Reusable functions
* ✅ Data-driven testing
* ✅ Clean locator strategy
* ✅ Assertions using Playwright expect
* ✅ Modular and scalable structure

---

## 👨‍💻 Author

Andhiny Fatikha Rizki - QA Automation / SDET
