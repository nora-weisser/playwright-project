import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


test.describe('UI Tests for sign up and login', () => {
    let loginPage: LoginPage;
  
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate(); 
        
    });

    test('User should be able to create a new account', async ({ page }) => {
        
        await loginPage.signUp();


    });
});