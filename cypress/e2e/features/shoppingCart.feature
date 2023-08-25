Feature: View a product added in the shopping cart

Scenario: Viewing PRS SE Silver Sky in the cart
    Given I visit the Reverb homepage
    When I navigate to the guitars section
    And I navigate to the solid body guitars
    And I select the "PRS SE Silver Sky" product
    Then the selected product should be "PRS SE Silver Sky"
    When I add it to the cart
    And I select the shopping cart icon
    Then I should have "PRS SE Silver Sky" in the cart
