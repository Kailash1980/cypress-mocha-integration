/// <reference types ="cypress"/>

class PostQuestion {

    clickAskQuestion() {
        cy.get('.sc-fzqBZW').click()
    }
    fillAskQuestionWithValidData(topic, topicValue, title, description, questionsavedmsg) {
        cy.get(':nth-child(1) > .sc-fzpisO > .sc-fznXWL > .svg-inline--fa').eq(0).click() // to open the drop down
        cy.get('[data-category-id="5d788ffb1b14bc98c973d281"]').click()
        //cy.get(':nth-child(1) > .sc-fzpisO > .sc-fznXWL > .svg-inline--fa').click().select(topic).wait(400).should('have.value', topicValue)
        cy.get('.sc-fznOgF').clear()
        cy.get('.sc-fznOgF').type(title)
        cy.get('.ql-editor').type(description)
        cy.get('.fkGoSs > .sc-fzqzEs').click()
        cy.contains(questionsavedmsg).should('be.visible')
    }

    fillAskQuestionWithInValidData(invalidmsg) {
         cy.get('.fkGoSs > .sc-fzqzEs').click()
         cy.contains(invalidmsg).should('be.visible')
        
    }



}
export default PostQuestion