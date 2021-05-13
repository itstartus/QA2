const expect = require("chai").expect;

import WebTable from "../../pageobjects/webTable.page";
import { URLs } from "../../expected";
import {webTableData} from "../../input"

describe("Validate WebTable section", () => {
const myData = webTableData();
  // it("Click on Add button and check that a new modal appears", () => {
  //   browser.url(URLs.webtable);
  //   if (!WebTable.btnAdd.isDisplayedInViewport())
  //     WebTable.btnAdd.scrollIntoView();
  //   WebTable.btnAdd.click();
  //   WebTable.modal.waitForExist({ timeout: 5000 });
  //   expect(WebTable.modalHeader).to.equal("Registration Form");
  // });
  // it("Validate that all fields are required", () => {
  //   for (let el of WebTable.allFields) {
  //     expect(el.getProperty("required")).to.be.true;
  //   }
  // });
  // it('Fill the form with the text and click on Submit button', () => {
  //       WebTable.fillWebTableData(myData);
  //       browser.pause(10000);
  //       console.log(myData.firstName);
  //       console.log(myData.lastName);
  //       WebTable.btnAdd.click();
  //       WebTable.fillWebTableData(webTableData());
  //       console.log(myData.firstName);
  //       console.log(myData.lastName);
  // });
  // it('Click on Delete button and validate that the row has got deleted', () => {
  //   browser.url(URLs.webtable);
  //   const firstRowText = WebTable.tableRows[0].getText();
  //   WebTable.btnDelete(1).click();
  //   const allText = WebTable.tableBody.getText();
  //   expect(allText).to.not.include(firstRowText);
  // });
  it('Click on the Edit button of the second row, make changes, save changes and validate the result', () => {
   // browser.maximizeWindow();
    browser.url(URLs.webtable);
   // WebTable.btnEdit(1).waitForExist({ timeout: 5000 });
    WebTable.btnEdit(1).click();
    WebTable.modal.waitForExist({ timeout: 5000 });
    WebTable.firstName.clearValue();
    //browser.pause(3000);
    WebTable.firstName.setValue('Alex');
    WebTable.btnSubmit.click();
    const firstRowText = WebTable.tableRows[0].getText();
    expect(firstRowText.split('\n')[0]).to.equal('Alex');
    browser.pause(10000);
  });
});
