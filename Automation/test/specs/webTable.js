const expect = require("chai").expect;

import WebTable from "../../pageobjects/webTable";
import { URLs } from "../../expected";
import {webTableData} from "../../input"

describe("Validate WebTable section", () => {
const myData = webTableData();
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
        WebTable.fillWebTableData(myData);
        browser.pause(10000);
        console.log(myData.firstName);
        console.log(myData.lastName);
        WebTable.btnAdd.click();
        WebTable.fillWebTableData(webTableData());
        console.log(myData.firstName);
        console.log(myData.lastName);
  });
});
