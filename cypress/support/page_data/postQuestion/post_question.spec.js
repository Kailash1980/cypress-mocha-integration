/// <reference types ="cypress"/>


import BaseClass from '../../base.spec'

const baseClass = new BaseClass()

class PostQuestion {

    clickAskQuestion() {
        baseClass.buttonClick('.sc-fznZeY')
    }
    fillAskQuestionWithValidData(topic, topicValue, title, description, questionsavedmsg) {
        cy.get(':nth-child(1) > .sc-fzonjX > .sc-fzoCCn > .svg-inline--fa').eq(0).click() // to open the drop down
        baseClass.buttonClick('[data-category-id="5d788ffb1b14bc98c973d281"]')
        baseClass.enterValue('.sc-fzqKVi', title)
        baseClass.enterValue('.ql-editor', description)
        baseClass.buttonClick('.gvJXce')
        baseClass.verifyTextVisible(questionsavedmsg)


        //cy.contains(questionsavedmsg).should('be.visible')
    }

    fillAskQuestionWithInValidData(invalidmsg) {
        baseClass.buttonClick('.hJaQBP')
        baseClass.verifyTextVisible(invalidmsg)
        //cy.contains(invalidmsg).should('be.visible')

    }



}
export default PostQuestion