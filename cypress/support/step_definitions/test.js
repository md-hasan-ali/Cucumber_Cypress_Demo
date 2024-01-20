import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I go to google", function () {
    cy.visit('http://www.google.com')
  });