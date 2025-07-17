import { Page, Locator } from '@playwright/test';

export class FormPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly prefixInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly dateOfBirthInput: Locator;
  readonly addressTextarea: Locator;
  readonly countrySelectButton: Locator;
  readonly stateSelectButton: Locator;
  readonly individualRadio: Locator;
  readonly incomeInput: Locator;
  readonly termsCheckbox: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.locator('input[placeholder="Enter full name"]');
    this.emailInput = page.locator('input[placeholder="Enter email address"]');
    this.prefixInput = page.locator('input[placeholder="Prefix (+1)"]');
    this.phoneNumberInput = page.locator('input[placeholder="Enter phone number (e.g., (555) 123-4567)"]');
    this.dateOfBirthInput = page.locator("[name='dateOfBirth']");
    this.addressTextarea = page.locator('textarea[placeholder="Enter full address"]');
    this.countrySelectButton = page.locator('button:has-text("Select a country...")');
    this.stateSelectButton = page.locator('button:has-text("Select a state...")');
    this.individualRadio = page.locator("iui-radio[value='business']");
    this.incomeInput = page.locator('input[placeholder="Enter income (numbers only)"]');
    this.termsCheckbox = page.locator('ui-checkbox');
    this.submitButton = page.locator('button:has-text("Submit")');
    this.successMessage = page.locator('text="Client created successfully!"');
    this.errorMessage = page.locator("[data-slot='icon']:nth-of-type(4)");
  }

  async navigate() {
    await this.page.goto('/');
  }

  async fillForm(data: {
    fullName: string;
    email: string;
    prefix: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;
    country: string;
    state: string;
    income: string;
  }) {
    await this.fullNameInput.waitFor({ state: 'visible' });
    await this.fullNameInput.fill(data.fullName);
    
    await this.emailInput.waitFor({ state: 'visible' });
    await this.emailInput.fill(data.email);
    
    await this.prefixInput.waitFor({ state: 'visible' });
    await this.prefixInput.fill(data.prefix);
    
    await this.phoneNumberInput.waitFor({ state: 'visible' });
    await this.phoneNumberInput.fill(data.phoneNumber);
    
    await this.dateOfBirthInput.waitFor({ state: 'visible' });
    await this.dateOfBirthInput.fill(data.dateOfBirth);
    
    await this.addressTextarea.waitFor({ state: 'visible' });
    await this.addressTextarea.fill(data.address);
    
    await this.countrySelectButton.waitFor({ state: 'visible' });
    await this.countrySelectButton.click();
    
    await this.page.locator(`ui-option:has-text("${data.country}")`).waitFor({ state: 'visible' });
    await this.page.locator(`ui-option:has-text("${data.country}")`).click();

    await this.stateSelectButton.waitFor({ state: 'visible' });
    await this.stateSelectButton.click();
    
    await this.page.locator(`ui-option:has-text("${data.state}")`).waitFor({ state: 'visible' });
    await this.page.locator(`ui-option:has-text("${data.state}")`).click();

    //await this.individualRadio.waitFor({ state: 'visible' });  
    //await this.individualRadio.click();
    
    await this.incomeInput.waitFor({ state: 'visible' });
    await this.incomeInput.fill(data.income);
    
    await this.termsCheckbox.waitFor({ state: 'visible' });
    await this.termsCheckbox.click();
  }

  async submitForm() {
    await this.submitButton.waitFor({ state: 'visible' });
    await this.submitButton.click();
  }
}


