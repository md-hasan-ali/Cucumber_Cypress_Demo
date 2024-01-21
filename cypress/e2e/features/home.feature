Feature: Automate the Demobalze website

    Background:
        Given User open the demoblaze website

    Scenario: Verify the user registration successfuly
        When Click on the Sign Up button
        And Enter your username "Hasan Ali"
        And Enter your password "123456"
        And Click on the submit button

    Scenario: Verify the user login successfuly
        When Click on the login button
        And Enter your login user name "Hasan Ali"
        And Enter your login password "123456"
        And Click on the submit login