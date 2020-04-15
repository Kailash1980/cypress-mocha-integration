/// <reference types ="cypress"/>

class BaseClass {

    enterValue(xpath, value) {
        cy.get(xpath).clear().type(value);
    }

    buttonClick(xpath) {
        cy.get(xpath).click()
    }
}

export default BaseClass