/// <reference types ="cypress"/>

import LoginPage from '../../../support/page_data/loginpage/login_page'

const loginPage = new LoginPage()

beforeEach('read test data', function () {
    cy.fixture('testCase').then((data) => {
        this.data001 = data['TC001']
        this.data002 = data['TC002']
    })
    cy.visit('http://' + Cypress.env('env'))
})

describe('Login - Test Suite', function () {

    it("Login into the application with valid crediential", function () {
        loginPage.enterUserNamePassword(this.data001.userName, this.data001.passWord)
        loginPage.verifyHomePageText(this.data001.homepageheadertext)
        loginPage.clickLogout()
    })

    it("Login into the application with Invalid crediential", function () {
        loginPage.enterUserNamePassword(this.data002.userName, this.data002.passWord)
        loginPage.verifyHomePageText(this.data002.invalidusernamepasswordtext)
    })
})