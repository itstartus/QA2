import Links from "../../pageobjects/links.page";
const expect = require("chai").expect;
const axios = require("axios");
import links from "../../links.json";

describe("Validate all links on the page", () => {
  it("Validate each link", async() => {
    for (let key in links) {
      try {
        // fetch data from a url endpoint
        const response = await axios.get(links[key].link);
        expect(response.status).to.equal(links[key].code);
      } catch (error) {
        console.log("error",links[key].link + error.toJSON().message);        
        // appropriately handle the error
      }
    }
  });
  it('Validate links on the page', async() => {
      await browser.url('https://github.com/');
      let allLinks = await $$('a');
      for (let a of allLinks) {
        let href = await a.getAttribute('href');
        console.log(href);
        if ( (href != null) && (href.indexOf('https://github.com/') !== - 1)){
        try {
          // fetch data from a url endpoint
          const response = await axios.get(href);
          expect(response.status).to.equal(200);
        } catch (error) {
          console.log("error", href + '  --->  ' + error.toJSON().message);        
          // appropriately handle the error
        }
    }
      }
  });
});
