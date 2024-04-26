import { expect, Locator, Page } from '@playwright/test';

require('dotenv').config();


export class LoginPage {

    readonly page: Page;
    readonly createAccount: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly createAccountBtn: Locator;
    readonly consent: Locator;



    constructor(page: Page) {
        this.page = page;
        this.createAccount = page.getByRole('link', { name: 'Create an Account' });
        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.email = page.getByLabel('Email', { exact: true });
        this.password = page.getByRole('textbox', { name: 'Password*', exact: true });
        this.confirmPassword = page.getByLabel('Confirm Password');
        this.createAccountBtn = page.getByRole('button', { name: 'Create an Account' });
        this.consent = page.getByLabel('Consent', { exact: true });

    }

    async navigate() {
        await this.page.goto(process.env.URL as string);
    }

    // async loginToApplication(username: string, password: string) {
    //     await this.loginText.click();
    //     await this.usernameTextbox.fill(process.env.USERNAME as string);
    //     await this.passwordTextbox.fill(process.env.PASSWORD as string);
    //     await this.loginButton.click();
    //     await expect(this.nameOfUser).toHaveText("Welcome " + process.env.USERNAME);
    // }

    async signUp() {

        await this.handleConsent();

        const email = await this.generateUniqueEmail();
        await this.createAccount.click();
        await this.firstName.fill(process.env.USERNAME as string);
        await this.lastName.fill(process.env.USERNAME as string)
        await this.email.fill(email as string);
        await this.password.fill(process.env.PASSWORD as string);
        await this.confirmPassword.fill(process.env.PASSWORD as string)
        await this.createAccountBtn.click();

    }

    async generateUniqueEmail() {
        // Generate a unique email address using timestamp or random string
        const timestamp = Date.now(); // Example: 1618233245987
        const uniqueEmail = `user${timestamp}@example.com`;
        return uniqueEmail;
    }

    async handleConsent() {
        const consent = this.consent;
        if (await consent.isVisible()) {
            await consent.click();
            console.log('Consent clicked.');
        } else {
            console.log('Consent element is not visible.');
        }
    }





}
