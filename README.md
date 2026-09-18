# Toolshop Playwright Capstone

Playwright JavaScript automation project for the **Practice Software Testing Toolshop** application.

## Project Overview

This project demonstrates web automation using **Playwright with JavaScript**, following the **Page Object Model (POM)** design pattern.

The project includes reusable page objects, Playwright fixtures, external test data, environment configuration, automatic failure screenshots, video recording for failed tests, trace support, and Allure reporting.

## Application Under Test

**Practice Software Testing - Toolshop**

https://practicesoftwaretesting.com/

## Technologies Used

* JavaScript
* Playwright
* Node.js
* Page Object Model (POM)
* Playwright Fixtures
* JSON test data
* dotenv
* Allure Report
* Git & GitHub

## Project Structure

```text
toolshop-playwright-capstone/
│
├── fixtures/
│   └── fixtures.js
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── RegisterPage.js
│
├── test-data/
│   └── testData.json
│
├── tests/
│   ├── home.spec.js
│   ├── login.spec.js
│   ├── product.spec.js
│   ├── loggedInProduct.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── register.spec.js
│
├── utils/
│   └── screenshot.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

> `.env` is created locally and is intentionally excluded from GitHub through `.gitignore`.

## Test Scenarios

The project covers the following functional areas:

### Home Page

1. Search for a valid product
2. Search for an invalid product
3. Sort products
4. Filter products by category
5. Navigate through pagination

### Login

6. Login with valid credentials
7. Login with invalid credentials

### Product

8. Add a product to cart without login
9. Login and add a product to cart

### Registration

10. Register a new user using external test data

### Cart

11. Add a product and open the shopping cart

### Checkout

12. Proceed to checkout login
13. Complete checkout after login

## Page Object Model

Page-specific locators and actions are maintained in separate page classes:

* `HomePage.js`
* `LoginPage.js`
* `ProductPage.js`
* `CartPage.js`
* `CheckoutPage.js`
* `RegisterPage.js`

This improves code reusability, maintainability, and readability.

## External Test Data

Test data is maintained separately in:

```text
test-data/testData.json
```

The test data includes login credentials, product information, registration data, and checkout address data.

The application Base URL is configured through an environment variable in:

```text
.env
```

Example:

```text
BASE_URL=https://practicesoftwaretesting.com/
```

The `.env` file is not committed to GitHub.

## Playwright Fixtures

Reusable functionality is configured in:

```text
fixtures/fixtures.js
```

The fixtures include:

* Reusable login functionality
* Automatic screenshot capture for failed tests

## Failure Screenshot

Screenshots are automatically captured when a test fails.

The screenshot utility is implemented in:

```text
utils/screenshot.js
```

## Video Recording

Playwright is configured to retain videos for failed tests:

```text
video: 'retain-on-failure'
```

## Trace

Playwright trace recording is enabled on the first retry:

```text
trace: 'on-first-retry'
```

## Allure Reporting

Allure reporting is integrated into the project for detailed test execution reports.

Generate the Allure report:

```text
npx allure-commandline generate allure-results --clean -o allure-report
```

Open the report:

```text
npx allure-commandline open allure-report
```

## Installation

Clone the repository:

```text
git clone https://github.com/20001707/toolshop-playwright-capstone.git
```

Navigate to the project:

```text
cd toolshop-playwright-capstone
```

Install dependencies:

```text
npm install
```

Install Playwright browsers:

```text
npx playwright install
```

Create a local `.env` file and add:

```text
BASE_URL=https://practicesoftwaretesting.com/
```

## Running Tests

Run the complete test suite:

```text
npx playwright test
```

Run tests using a specific browser:

```text
npx playwright test --project=chromium
```

```text
npx playwright test --project=firefox
```

```text
npx playwright test --project=webkit
```

Run a specific test file:

```text
npx playwright test tests/login.spec.js
```

## HTML Report

After test execution, open the Playwright HTML report using:

```text
npx playwright show-report
```

## Test Execution

The complete test suite was successfully executed across the configured browsers.

**Latest execution result: 39 tests passed (100%).**

Execution was performed across:

* Chromium — 13 tests passed
* Firefox — 13 tests passed
* WebKit — 13 tests passed

**Total: 39/39 passed**

## Author

**Anagha V**
