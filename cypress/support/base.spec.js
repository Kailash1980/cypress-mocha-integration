/// <reference types ="cypress"/>

class BaseClass {

    enterValue(xpath, value) {
        cy.get(xpath).clear().type(value);
    }

    buttonClick(xpath) {
        cy.get(xpath).click()
    }
    verifyTextVisible(texttoverify){
        cy.contains(texttoverify).should('be.visible')
    }

     verifyTextVisibleOrNot(texttoverify, xpath) {
         cy.get(xpath).then(function (element) {
                 const actualText = element.text()
                 expect(actualText.includes(texttoverify))
            
         })

         }
     }

export default BaseClass