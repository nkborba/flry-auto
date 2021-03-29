/* global Given, When, Then */

import CommonPage from '../../pages/CommonPage'
import UnitsPage from '../../pages/UnitsPages'

const commonPage = new CommonPage
const unitsPage = new UnitsPage

Given("I am on the Fleury homepage", () => {
    commonPage.accessHomepage();
})

When("I click on the menu link {string}", (menuOption) => {
    commonPage.clickOnMenuOption(menuOption);
})

When("I select the facility filter:", (datatable) => {
    unitsPage.clickFacilidades(datatable)
})

When("I click on the first unit resulted", () => {
    unitsPage.clickFirstResult()
})

Then("I should see the unit name", () => {
    unitsPage.checkPageUnitsName()
})