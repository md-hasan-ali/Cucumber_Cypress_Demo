const locators = require("./locators/locators")

// Home page methods
class HomePage {
    signUp() {
        cy.get(locators.signUp).click()
    }

}

module.exports = new HomePage()