const expect = require("chai").expect;
import {URLs, labels} from "../../expected";
import checkbox from "../../pageobjects/checkbox";
import CheckBox from "../../pageobjects/checkbox";
describe('Test Suite to validate the functionality of Check Box page', () => {
    it('Validate URL of the page', () => {
        browser.url(URLs.mainPage);
        CheckBox.mainPageElements.scrollIntoView();
        CheckBox.mainPageElements.click();
        CheckBox.checkbox.click();
        expect(browser.getUrl()).to.equal(URLs.checkbox);
    });
    it('Validate header of the page', () => {
        expect(CheckBox.mainHeader.getText()).to.equal(labels.checkbox);
    });

    it('Check some of the elements and validate the result', () => {
        CheckBox.expandAll.scrollIntoView();
        CheckBox.expandAll.click();
        for(let i = 0; i<5; i++){
            const item = Math.trunc(Math.random()*10);
            CheckBox.listItem(CheckBox.allTitles[item]).click();
        }
        expect(CheckBox.checkedElements).to.eql(CheckBox.result);
    });
});