\# Toolshop Playwright Capstone



Playwright JavaScript automation project for the \*\*Practice Software Testing Toolshop\*\* application.



\## Project Overview



This project demonstrates web automation using \*\*Playwright with JavaScript\*\*, following the \*\*Page Object Model (POM)\*\* design pattern.



The project includes reusable page objects, fixtures, external test data, environment configuration, automatic failure screenshots, video recording for failed tests, and Allure reporting.



\## Application Under Test



Practice Software Testing - Toolshop



https://practicesoftwaretesting.com/



\## Technologies Used



\* JavaScript

\* Playwright

\* Node.js

\* Page Object Model (POM)

\* Playwright Fixtures

\* JSON test data

\* dotenv

\* Allure Report

\* Git \& GitHub



\## Project Structure



```text

toolshop-playwright-capstone/

│

├── fixtures/

│   └── fixtures.js

│

├── pages/

│   ├── HomePage.js

│   ├── LoginPage.js

│   └── ProductPage.js

│

├── test-data/

│   └── testData.json

│

├── tests/

│   ├── home.spec.js

│   ├── login.spec.js

│   ├── product.spec.js

│   └── loggedInProduct.spec.js

│

├── utils/

│   └── screenshot.js

│

├── .env

├── .gitignore

├── package.json

├── package-lock.json

└── playwright.config.js

```



\## Test Scenarios



The project currently covers:



1\. Search for a product from the home page

2\. Login with a valid user

3\. Add a product to the cart without login

4\. Login and add a product to the cart



\## Key Features



\### Page Object Model



Page-specific locators and actions are maintained in separate page classes:



\* `HomePage.js`

\* `LoginPage.js`

\* `ProductPage.js`



This improves code reusability and maintainability.



\### External Test Data



Test data is maintained separately in:



```text

test-data/testData.json

```



The application Base URL is configured through:



```text

.env

```



Example:



```text

BASE\_URL=https://practicesoftwaretesting.com/

```



\### Playwright Fixtures



Reusable functionality is configured in:



```text

fixtures/fixtures.js

```



The fixtures include reusable login functionality and automatic screenshot capture for failed tests.



\### Failure Screenshot



Screenshots are automatically captured when a test fails.



\### Video Recording



Playwright is configured to retain videos for failed tests:



```javascript

video: 'retain-on-failure'

```



\### Trace



Playwright trace recording is enabled on the first retry:



```javascript

trace: 'on-first-retry'

```



\### Allure Reporting



Allure reporting is integrated into the project for detailed test execution reports.



\## Installation



Clone the repository:



```bash

git clone https://github.com/20001707/toolshop-playwright-capstone.git

```



Navigate to the project:



```bash

cd toolshop-playwright-capstone

```



Install dependencies:



```bash

npm install

```



Install Playwright browsers:



```bash

npx playwright install

```



\## Running Tests



Run the complete test suite:



```bash

npx playwright test

```



Run tests using a specific browser:



```bash

npx playwright test --project=chromium

```



```bash

npx playwright test --project=firefox

```



```bash

npx playwright test --project=webkit

```



Run a specific test:



```bash

npx playwright test tests/login.spec.js

```



\## HTML Report



After test execution, open the Playwright HTML report using:



```bash

npx playwright show-report

```



\## Allure Report



Generate the Allure report:



```bash

npx allure-commandline generate allure-results --clean -o allure-report

```



Open the report:



```bash

npx allure-commandline open allure-report

```



\## Test Execution



The complete test suite was successfully executed across the configured browsers.



\*\*Latest execution result: 9 tests passed.\*\*



\## Author



\*\*Anagha V\*\*



