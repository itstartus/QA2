const expect = require("chai").expect;
import { URLs, labels } from "../../expected";
import TextBox from "../../pageobjects/textbox.page";
import { inputTextBox } from "../../input";
describe("Validate Elements section", () => {
  it("Navigate to Elements page and check the header text", () => {
    browser.url(URLs.elements);
    const header = $(".main-header");
    expect(header.getText()).to.equal(labels.elements);
  });
  it("Validate the URL of Text Box element", () => {
    const elements = $$(".accordion > .element-group")[0];
    const textBox = elements.$$("div > ul > li")[0];
    textBox.click();
    expect(browser.getUrl()).to.equal(URLs.textBox);
  });
  it("Validate the labels in TextBox area", () => {
    expect(TextBox.labelFullName).to.equal(labels.textBoxLabels.fullName);
    expect(TextBox.labelEmail).to.equal(labels.textBoxLabels.email);
    expect(TextBox.labelCurrentAddress).to.equal(
      labels.textBoxLabels.currentAddress
    );
    expect(TextBox.labelPermAddress).to.equal(labels.textBoxLabels.permAddress);
  });
  it("Validate placeholder texts of inputs", () => {
    expect(TextBox.inputFullNamePlaceholder).to.equal(
      labels.textBoxPlaceholders.fullName
    );
    expect(TextBox.inputEmailPlaceholder).to.equal(
      labels.textBoxPlaceholders.email
    );
    expect(TextBox.inputCurrentAddressPlaceholder).to.equal(
      labels.textBoxPlaceholders.currentAddress
    );
  });
  it("Fill the form, click Submit btn and validate the result", () => {
    TextBox.fillForm(inputTextBox);
    TextBox.btnSubmit.scrollIntoView();
    TextBox.btnSubmit.click();
    TextBox.resultFullName.scrollIntoView();
    expect(TextBox.resultFullName.getText().split(":")[1]).to.equal(
      inputTextBox.fullName
    );
    expect(TextBox.resultEmail.getText().split(":")[1]).to.equal(
      inputTextBox.email
    );
    expect(TextBox.resultCurrentAddress.getText().split(":")[1]).to.equal(
      inputTextBox.currentAddress
    );
    expect(TextBox.resultPermanentAddress.getText().split(":")[1]).to.equal(
      inputTextBox.permanentAddress
    );
  });
});
