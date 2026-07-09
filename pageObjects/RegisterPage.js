class RegisterPage {
    constructor(page) {
        this.page = page;
        this.selectRadioBtn = page.locator('#id_gender1');
        this.passwordInput = page.locator("#password");
        this.selectDays = page.locator("#days");
        this.selectMonths = page.locator("#months");
        this.selectYears = page.locator("#years");
        this.enterFirstName = page.locator("#first_name");
        this.enterLastName = page.locator("#last_name");
        this.enterCompany = page.locator("#company");
        this.enterAddress1 = page.locator("#address1");
        this.enterAddress2 = page.locator("#address2");
        this.countryDropdown = page.locator("#country")
        this.enterState = page.locator("#state");
        this.enterCity = page.locator("#city");
        this.enterZipCode = page.locator("#zipcode");
        this.enterMobileNumber = page.locator("#mobile_number");
        this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });
        this.continueButton = page.getByRole('link', { name: 'Continue' });

    }
    //Method

    async selectMrTitle() {
        await this.selectRadioBtn.click();
        await this.page.keyboard.press("Enter");;
    }

    async selectDay(dayValue) {
        await this.selectDays.selectOption({ value: dayValue });
        await this.page.keyboard.press("Enter");
    }

    async selectMonth(monthValue) {
        await this.selectMonths.selectOption({ value: monthValue });
        await this.page.keyboard.press("Enter");
    }

    async selectYear(yearValue) {
        await this.selectYears.selectOption({ value: yearValue });
        await this.page.keyboard.press("Enter");
    }

    async enterPassword() {
        await this.passwordInput.fill("Test12345");
        await this.page.keyboard.press("Enter");
    }

    async selectDOB(dayValue, monthValue, yearValue) {
        await this.selectDay(dayValue);
        await this.selectMonth(monthValue);
        await this.selectYear(yearValue);
    }


    async selectCountry(country) {
        await this.countryDropdown.selectOption({ label: country });
        await this.page.keyboard.press("Enter");

    }
    async fillFirstName() {
        await this.enterFirstName.fill("vijay");
    }

    async fillLastName() {
        await this.enterLastName.fill("Pundir");
    }
    async fillCompany() {
        await this.enterCompany.fill("Bayone");
        //await this.page.keyboard.press("Enter");

    }

    async fillAddressOne() {
        await this.enterAddress1.fill("Sector 14");
        //await this.page.keyboard.press("Enter");
    }
    async fillAddressTwo() {
        await this.enterAddress2.fill("Old dlf ggn");
        //await this.page.keyboard.press("Enter");
    }
    async fillState() {
        await this.enterState.fill("haryana");
        //await this.page.keyboard.press("Enter");
    }

    async fillCity() {
        await this.enterCity.fill("Gurgaon");
        //await this.page.keyboard.press("Enter");
    }
    async fillPostalCode() {
        await this.enterZipCode.fill("10101");
        //await this.page.keyboard.press("Enter");
    }
    async fillMobileNumber() {
        await this.enterMobileNumber.fill("9984847231");
        //await this.page.keyboard.press("Enter");
    }

   async clickCreateAccount() {
    await this.createAccountBtn.waitFor({ state: 'visible' });
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'load' }),
      this.createAccountBtn.click()
    ]);
 }

 async continueBtnIsVisible() {
    return await this.continueButton.isVisible();
 }
 
}

module.exports = { RegisterPage };
