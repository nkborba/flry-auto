/// <reference types="Cypress" />

import UnitsPageElements from '../support/elements/UnitsPageElements'
import UnitsPagesMap from '../support/staticData/UnitsPagesMap'

const unitsPageElements = new UnitsPageElements
const unitsPagesMap = new UnitsPagesMap

class UnitsPages {

    clickFacilidades(datatable){
        cy.get(unitsPageElements.check_facilidades()).click()
        datatable.hashes().forEach(element => {
            cy.contains(element.categoria).click()
        });
    }

    clickFirstResult() {
        cy.get(unitsPageElements.lnk_verDtalhes()).first().click()
        cy.wait(2000)
    }

    checkPageUnitsName(){
        var unitName = ""
        cy.url().then(($link) => {
            unitName = unitsPagesMap.pages[$link]
        })

        cy.get(unitsPageElements.txt_unitName()).invoke('text').then((text) => {
            expect(text).equal(unitName)
        })
    }


}

export default UnitsPages