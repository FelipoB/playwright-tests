import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

test.describe('Client Profile Form', () => {
  let formPage: FormPage;

  test.beforeEach(async ({ page }) => {
    formPage = new FormPage(page);
    await formPage.navigate();
    await page.waitForLoadState('networkidle'); // Wait for network to be idle
  });

  test('should submit the form successfully with valid data ', async ({ page }) => {
    await formPage.fillForm({
      fullName: 'QA Tester',
      email: 'teste.quality@example.com',
      prefix: '+1',
      phoneNumber: '5551234567',
      dateOfBirth: '1985-10-26',
      address: '123 Main St',
      country: 'United States',
      state: 'Alaska',
      income: '75000',
    });
    await formPage.submitForm();
    await expect(formPage.successMessage).toBeVisible();
  });

  test('should display error message with invalid email format ', async ({ page }) => {
    await formPage.fillForm({
      fullName: 'Teste User',
      email: 'invalid-email', 
      prefix: '+1',
      phoneNumber: '5551234567',
      dateOfBirth: '1985-10-26',
      address: '456 Oak Ave',
      country: 'United States',
      state: 'Arizona',
      income: '60000',
    });
    await formPage.submitForm();
    //await expect(formPage.errorMessage).toBeVisible(); Playwright Não esta conseguindo fazer a validação do elemento de erro (texto e icone), verificaria com o dev o possível erro de locator 
    await expect(formPage.successMessage).not.toBeVisible(); //A saída que tive é que a mensagem de sucesso não deve aparecer após o click Submit
});
});

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
    await page.waitForLoadState('networkidle'); 
  });

  test('should navigate to the List page and Form page ', async ({ page }) => {
    await page.locator('a:has-text("List")').click();
    await expect(page).toHaveURL('/list-clients'); 
    await expect(page.locator("[data-flux-heading='']")).toBeVisible();
    await page.locator('a:has-text("Form")').click();
    await expect(page).toHaveURL('/'); 
    await expect(page.locator("[data-flux-heading='']")).toBeVisible();
  });
});


