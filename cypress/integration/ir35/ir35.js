import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import ir35calc from "../../pages/ir35calc.po.ts";
const hp = new ir35calc();

const url = "https://www.contractorcalculator.co.uk/ir35calculator.aspx";

Given(`I open the webpage`, () => {
  cy.visit(url);
  cy.log("website accessed");
  cy.wait(100000);
});
Then("I enter {string} as the day rate", (rate) => {
  hp.RateInput.clear();
  hp.RateInput.type(rate);
});
Then("I set the rate type to {string}", (type) => {
  hp.rateType(type).click({ force: true });
});
Then("I set IR35 status to {string}", (state) => {
  hp.ir35Status(state).check({ force: true });
});
Then("I calculate and verify the result is {string}", (value) => {
  hp.calcButton.click();
  hp.result("Inside", value);
});
Then("I enter values", (datatable) => {
  datatable.hashes().forEach((element) => {
    hp.RateInput.clear().type(element.rate);
    hp.rateType(element.type).click({ force: true });
    hp.ir35Status(element.state).check({ force: true });
    hp.calcButton.click();
    hp.result(element.state, element.value);
    cy.visit(url);
  });
});
