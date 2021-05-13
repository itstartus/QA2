const expect = require("chai").expect;
import {URLs} from "../../expected";
import RadioButton from "../../pageobjects/radioButton.page";

describe('Validate Radio Button page', () => {
    it('Randomly select a radio button and validate the selection', () => {
        browser.url(URLs.radioButton);
        const selection = Math.round(Math.random());
        RadioButton.radioButtons[selection].nextElement().click();
        expect(RadioButton.no.isEnabled()).to.be.false;
        expect(RadioButton.yes.isEnabled()).to.be.true;
        expect(RadioButton.impressive.isEnabled()).to.be.true;
        expect(RadioButton.textSuccess).to.equal(RadioButton.radioButtons[selection].nextElement().getText());
    });

});