const expect = require("chai").expect;
import {URLs, labels} from "../../expected";
describe("Main page test suite", () => {
  it("Validate the title of the main page", () => {
    browser.url("https://demoqa.com/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal(labels.title);
  });
  it("Validate the number of tiles on the main page", () => {
    const elements = $$("div.category-cards > div");
    expect(elements.length).to.equal(6);
  });
  it("Validate the text of footer", () => {
    const span = $("#app > footer > span");
    const actualText = span.getText();
    expect(actualText).to.equal(labels.footer);
  });
  it("Validate the names of tiles", () => {
    const [
      actualElements,
      actualForms,
      actualAlerts,
      actualWidgets,
      actualIteractions,
      actualBookStore,
    ] = $$("h5").map((el) => el.getText());
    expect(actualElements).to.equal(labels.elements);
    expect(actualForms).to.equal(labels.forms);
    expect(actualAlerts).to.equal(labels.alerts);
    expect(actualWidgets).to.equal(labels.widgets);
    expect(actualIteractions).to.equal(labels.interactions);
    expect(actualBookStore).to.equal(labels.books);
  });
  it("Click on Elements tile and validate the target URL", () => {
    const element = $$(".category-cards > div")[0];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.elements);
  });
  it("Click on Forms tile and validate the target URL", () => {
    browser.url("https://demoqa.com/");
    const element = $$(".category-cards > div")[1];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.forms);
  });
  it("Click on AlertsWindows tile and validate the target URL", () => {
    browser.url("https://demoqa.com/");
    const element = $$(".category-cards > div")[2];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.alertsWindows);
  });
  it("Click on Widgets tile and validate the target URL", () => {
    browser.url("https://demoqa.com/");
    const element = $$(".category-cards > div")[3];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.widgets);
  });
  it("Click on Interaction tile and validate the target URL", () => {
    browser.url("https://demoqa.com/");
    const element = $$(".category-cards > div")[4];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.interaction);
  });
  it("Click on Books tile and validate the target URL", () => {
    browser.url("https://demoqa.com/");
    const element = $$(".category-cards > div")[5];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.books);
  });
});
