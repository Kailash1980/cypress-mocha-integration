/// <reference types ="cypress"/>

class LoginPage {

    enetURL() {
        cy.visit("https://3.84.11.0/login");
    }
    enterUserNamePassword(username, password) {
        cy.get('input[type="email"]').type(username)
        cy.get('input[type="password"]').type(password)
        cy.get('.sc-fznWOq').click()
    }
    verifyHomePageText(headertext) {
        cy.contains(headertext).should('be.visible')
    }

    verifyInvalidUserPassword(invalidvalidationmsg) {
        cy.contains(invalidvalidationmsg).should('be.visible')
    }
    clickLogout() {
        cy.get('.sc-fzomuh > .sc-fzoaKM').click()
        cy.get('.sc-fzoPby').click()
    }

}
export default LoginPage