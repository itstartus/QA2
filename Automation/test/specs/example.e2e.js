import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        browser.pause(5000);
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        browser.pause(5000);
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


