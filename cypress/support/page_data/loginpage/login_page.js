/// <reference types ="cypress"/>

import BaseClass from '../../../support/base'

const baseClass = new BaseClass()
class LoginPage {

    enetURL() {
        cy.visit("https://3.84.11.0/login");
    }
    enterUserNamePassword(username, password) {
        baseClass.enterValue('input[type="email"]', username)
        baseClass.enterValue('input[type="password"]', password)
        baseClass.buttonClick('.sc-fznWOq')
    }
    verifyHomePageText(headertext) {
        cy.contains(headertext).should('be.visible')
    }

    verifyInvalidUserPassword(invalidvalidationmsg) {
        cy.contains(invalidvalidationmsg).should('be.visible')
    }
    clickLogout() {
        baseClass.buttonClick('.sc-fzomuh > .sc-fzoaKM')
    }

}
export default LoginPage