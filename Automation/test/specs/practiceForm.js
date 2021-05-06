const expect = require("chai").expect;
import { URLs } from "../../expected";
import PracticeForm from "../../pageobjects/practiceForm";

describe("Validate Practice Form", () => {
  // it('Make a selection in State DD', () => {
  //     browser.maximizeWindow();
  //     browser.url(URLs.practiceForm);
  //     if (!PracticeForm.ddState.isDisplayedInViewport()) PracticeForm.ddState.scrollIntoView();
  //     PracticeForm.ddState.click();
  //     PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
  //     const stateList = PracticeForm.ddStateList.map(el => el.getText());
  //     console.log(stateList);
  //     const state = 'Haryana';
  //     const index = stateList.indexOf(state);
  //     PracticeForm.ddStateList[index].click();
  // });
  // it('Get the list of cities per state', () => {
  //     let obj = {};
  //     PracticeForm.ddState.click();
  //     PracticeForm.ddStateList[0].waitForExist({ timeout: 10000 });
  //     for(let i = 0; i< PracticeForm.ddStateList.length; i++){
  //         const state = PracticeForm.ddStateList[i].getText();
  //         PracticeForm.ddStateList[i].click();
  //         PracticeForm.ddCity.click();
  //         PracticeForm.ddCityList[0].waitForExist({ timeout: 10000 });
  //         const cityList = PracticeForm.ddCityList.map(el => el.getText());
  //         obj[state] = [...cityList];
  //         PracticeForm.ddState.click();
  //     }
  //     console.log(obj);
  // });
  it("Set date", () => {
    browser.maximizeWindow();
    browser.url(URLs.practiceForm);
    PracticeForm.inputDate.click();
    browser.keys(['Control', 'a']);
    browser.keys('Space');
    PracticeForm.inputDate.setValue("03 Apr 2021");
    browser.keys("Enter");
    browser.pause(5000);
  });

});
