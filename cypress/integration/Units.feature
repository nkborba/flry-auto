Feature: Units Page

@firstUnit
Scenario: Check selected unit name
    Given I am on the Fleury homepage
    When I click on the menu link "Unidades"
    And I select the facility filter:
        | categoria                 |
        | Bicicletário e vaga verde |
        | Vacinação                 |
    And I click on the first unit resulted
    Then I should see the unit name 

    
