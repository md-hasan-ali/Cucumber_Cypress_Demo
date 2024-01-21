import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/homePage")

// Sign-up:
Given("User open the demoblaze website", function () {
  cy.visit("/")
});

When("Click on the Sign Up button", ()=> {
  homePage.signUp()
})