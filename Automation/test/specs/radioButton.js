const expect = require("chai").expect;
import {URLs} from "../../expected";
import RadioButton from "../../pageobjects/radioButton";

describe('Validate Radio Button page', () => {
    it('Randomly select a radio button and validate the selection', () => {
        browser.url(URLs.radioButton);
        const selection = Math.round(Math.random());
        RadioButton.radioButtons[selection].click();
        expect(RadioButton.textSuccess).to.equal(RadioButton.radioButtons[selection].getText());
    });
    // it('', () => {
        
    // });
    // it('', () => {
        
    // });
});