const { test, expect } = require('@playwright/test');
const { SignUpPage } = require('../pageObjects/SignUpPage');
const { RegisterPage } = require('../pageObjects/RegisterPage');

const testData = JSON.parse(JSON.stringify(require('../utils/testData.json')));


test.describe.configure({ mode: 'serial' });

let signUpPage;
let registerPage;

test.beforeEach(async ({ page }) => {
  signUpPage = new SignUpPage(page);
  registerPage = new RegisterPage(page);
  await page.goto('https://automationexercise.com/');
});


test('@web Navigate to automation exercise', async ({ page }) => {
  console.log("User able to navigate to automation exercise website");
  await expect(await signUpPage.SignUpPageTitle()).toBeVisible();
  console.log("User able to verify the title of the page");

});

test('@web click on sign up button', async ({ page }) => {
  await signUpPage.ClickSignUpButton();
  console.log("User able to click on sign up button");
  await expect(await signUpPage.SignUpSection()).toBeVisible();
  console.log("User able to verify the sign up section");
});

test('Fill the sign up form', async ({ page }) => {
  await signUpPage.ClickSignUpButton();
  await signUpPage.fillSignUpForm(testData.name, testData.email);
  console.log("User able to fill the sign up form");
});

test('Verify the register page title', async ({ page }) => {
  await signUpPage.ClickSignUpButton();
  await signUpPage.fillSignUpForm(testData.name, testData.email);
  await expect(await signUpPage.RegisterPageTitle()).toBeVisible();
  console.log("User able to verify the register page title");
});

test('user fill the register form', async ({ page }) => {

  await signUpPage.ClickSignUpButton();
  await signUpPage.fillSignUpForm(testData.name, testData.email);
  await expect(registerPage.selectRadioBtn).toBeVisible();
  await registerPage.selectMrTitle();
  await expect(registerPage.selectRadioBtn).toBeChecked();
  console.log("user able to select the radio button");
  await registerPage.enterPassword();
  await registerPage.selectDOB("10", "5", "1990");
  await page.waitForTimeout(3000);
  await registerPage.fillFirstName();
  await registerPage.fillLastName();
  await registerPage.fillCompany();
  await registerPage.fillAddressOne();
  await registerPage.fillAddressTwo();
  await registerPage.selectCountry("United States");
  await registerPage.fillState();
  await registerPage.fillCity();
  await registerPage.fillPostalCode();
  await registerPage.fillMobileNumber();
  await registerPage.clickCreateAccount();
  await expect(await registerPage.continueBtnIsVisible()).toBeTruthy();

});