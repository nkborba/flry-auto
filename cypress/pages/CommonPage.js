/// <reference types="Cypress" />

import HomepageElements from '../support/elements/HomepageElements'
const homeElements = new HomepageElements
const baseUrl = "https://www.fleury.com.br/"

class CommonPage {

    accessHomepage() {
        cy.visit(baseUrl)
    }

    clickOnMenuOption(menuOption) {
        cy.get(homeElements.menuLinks[menuOption]).click();
    }

}

export default CommonPage