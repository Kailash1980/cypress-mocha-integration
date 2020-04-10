/// <reference types ="cypress"/>

import LoginPage from '../../../support/page_data/loginpage/login_page'

const loginPage = new LoginPage()

beforeEach('read test data', function () {
    cy.fixture('testCase').then((data) => {
        this.data001 = data['TC001']
        this.data002 = data['TC002']
    })

})

describe('Ask Question-Test Suite', function () {

    it("Ask Question -into the application with valid crediential", function () {
        loginPage.enetURL()
        loginPage.enterUserNamePassword(this.data001.userName, this.data001.passWord)
        loginPage.verifyHomePageText(this.data001.homepageheadertext)
        loginPage.clickLogout()
    })

    it("Ask Question - into the application with Invalid crediential", function () {

        loginPage.enetURL()
        loginPage.enterUserNamePassword(this.data002.userName, this.data002.passWord)
        loginPage.verifyHomePageText(this.data002.invalidusernamepasswordtext)
    })
})