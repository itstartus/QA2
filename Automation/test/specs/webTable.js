const expect = require("chai").expect;
import WebTable from "../../pageobjects/webTable";
import { URLs } from "../../expected";

describe("Validate WebTable section", () => {
  it("Click on Add button and check that a new modal appears", () => {
    browser.url(URLs.webtable);
    if (!WebTable.btnAdd.isDisplayedInViewport())
      WebTable.btnAdd.scrollIntoView();
    WebTable.btnAdd.click();
    WebTable.modal.waitForExist({ timeout: 5000 });
    expect(WebTable.modalHeader).to.equal("Registration Form");
  });
  it("Validate that all fields are required", () => {
    for (let el of WebTable.allFields) {
      expect(el.getProperty("required")).to.be.true;
    }
  });
  it('Fill the form with the text and click on Submit button', () => {
        WebTable.firstName.setValue('Aliona');
        WebTable.lastName.setValue('Granados');
        WebTable.userEmail.setValue('aliona@gmail.com');
        WebTable.age.setValue('25');
        WebTable.salary.setValue('100000000000');
        WebTable.department.setValue('IT');
        WebTable.btnSubmit.click();
        WebTable.modal.waitForExist({ timeout: 5000, reverse : true });
        browser.pause(10000);
  });
});
