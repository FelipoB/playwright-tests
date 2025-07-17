# Playwright E2E Tests for QA Training Site

This repository contains End-to-End (E2E) tests for the QA Training website (`https://qa-training.sbx.devsquad.app/`) using Playwright. The tests are written in TypeScript and incorporate best practices for maintainability and clarity.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Best Practices Applied](#best-practices-applied)

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (Node Package Manager)

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers (Chromium, Firefox, WebKit):
   ```bash
   npx playwright install
   ```
   If you encounter issues with system dependencies, you might need to run:
   ```bash
   sudo npx playwright install-deps
   ```

## Running Tests

To run all tests:
```bash
npx playwright test
```

To run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

To run tests on a specific browser (e.g., Chromium):
```bash
npx playwright test --project=chromium
```

To run a specific test file (e.g., `tests/form.spec.ts`):
```bash
npx playwright test tests/form.spec.ts
```

To run tests in debug mode:
```bash
npx playwright test --debug
```

## Test Structure

- `tests/`: This directory contains all the E2E test files.
  - `form.spec.ts`: Contains tests for the Client Profile Form, including successful submission and validation scenarios (with known bugs highlighted).
- `pages/`: This directory contains the Page Object Model (POM) classes.
  - `FormPage.ts`: Page object for the Client Profile Form, encapsulating selectors and interactions.
- `playwright.config.ts`: Playwright Test configuration file. Configured with `baseURL` and increased `timeout`.

## Best Practices Applied

This project adheres to the following Playwright best practices:

1.  **Page Object Model (POM):** The `FormPage.ts` class demonstrates the POM pattern, separating UI interaction logic from test scripts. This improves test readability, reusability, and maintainability.
2.  **Clear Test Naming:** Test names clearly describe the behavior being tested (e.g., `should submit the form successfully with valid data`).
3.  **Explicit Waits:** Instead of using `page.waitForTimeout()`, explicit waits like `locator.waitFor({ state: 'visible' })` are used to ensure elements are ready for interaction, making tests more robust and faster.
4.  **`test.use()` for Reusable Contexts:** The `playwright.config.ts` file sets a `baseURL`, avoiding repetition in test files and making it easier to switch environments.
5.  **Focus on E2E Scenarios:** Tests are designed to cover end-to-end user flows, ensuring critical paths of the application function as expected.




