/// <reference types ="cypress"/>


import BaseClass from '../../../support/base'

const baseClass = new BaseClass()

class PostQuestion {

    clickAskQuestion() {
        baseClass.buttonClick('.sc-fzqBZW')
    }
    fillAskQuestionWithValidData(topic, topicValue, title, description, questionsavedmsg) {
        cy.get(':nth-child(1) > .sc-fzpisO > .sc-fznXWL > .svg-inline--fa').eq(0).click() // to open the drop down
        cy.get('[data-category-id="5d788ffb1b14bc98c973d281"]').click()
        cy.get('.sc-fznOgF').clear()
        baseClass.enterValue('.sc-fznOgF', title)
        baseClass.enterValue('.ql-editor', description)
        baseClass.buttonClick('.fkGoSs > .sc-fzqzEs')
        cy.contains(questionsavedmsg).should('be.visible')
    }

    fillAskQuestionWithInValidData(invalidmsg) {
        baseClass.buttonClick('.fkGoSs > .sc-fzqzEs')
        cy.contains(invalidmsg).should('be.visible')

    }



}
export default PostQuestion