import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const locators = require("../locators/locators")


Given("I go to google", function () {
  cy.visit(locators.web_url)
});