const locators = require("./locators/locators")

// Home page methods
class HomePage {
    signUp() {
        cy.get(locators.signUp).click()
    }
    userName(userName) {
        cy.get(locators.userName).type(userName)
    }
    password(password) {
        cy.get(locators.userPassword).type(password)
    }
    submitBtn() {
        cy.xpath(locators.signUpBtn).click()
    }

}

module.exports = new HomePage()