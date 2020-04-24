/// <reference types ="cypress"/>

import BaseClass from '../../base.spec'

const baseClass = new BaseClass()
class LoginPage {

    enetURL() {
        cy.visit("https://3.84.11.0/login");
    }
    enterUserNamePassword(username, password) {
        baseClass.enterValue('input[type="email"]', username)
        baseClass.enterValue('input[type="password"]', password)
        baseClass.buttonClick('.sc-fzoydu')
    }
    verifyHomePageText(headertext) {
        baseClass.verifyTextVisibleOrNot(headertext, ':nth-child(2) > .sc-fzoWqW')
        //cy.contains(headertext).should('be.visible')
    }
    verifyInvalidLoginText(headertext) {
        baseClass.verifyTextVisibleOrNot(headertext, '.sc-fzomuh')
        //cy.contains(headertext).should('be.visible')
    }

    verifyInvalidUserPassword(invalidvalidationmsg) {
        baseClass.verifyTextVisible(invalidvalidationmsg)
        //cy.contains(invalidvalidationmsg).should('be.visible')
    }
    clickLogout() {
        baseClass.buttonClick('.sc-fzoMdx > .sc-fzoxnE')
        baseClass.buttonClick('.sc-fznNvL')
    }

}
export default LoginPage