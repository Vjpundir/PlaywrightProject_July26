class SignUpPage {
    constructor(page) {
        this.page = page;
        this.titleSignUp = page.locator("img[alt='Website for automation practice']");
        this.signUpSection = page.locator('.signup-form');
        this.clickSignUpButton = page.locator('a[href="/login"]');
        this.userNameInput = page.getByPlaceholder('Name');
        this.emailInput = page.getByPlaceholder('Email Address');
        this.signUpButton = page.getByRole('button', { name: 'Signup' });
        this.registerPageTitle = page.locator("h2:has(b)", { hasText: "Enter Account Information" });

    }

    //Method 

    async SignUpPageTitle() {

        return this.titleSignUp;
    }

    async SignUpSection() {

        return this.signUpSection;
    }

    async ClickSignUpButton() {
        await this.clickSignUpButton.click();
    }

    async fillSignUpForm(name, email) {
        await this.userNameInput.fill(name);
        await this.emailInput.nth(1).fill(email);
        await this.signUpButton.click();
    }

    async RegisterPageTitle() {
        return this.registerPageTitle;
    }
};

module.exports = { SignUpPage };
