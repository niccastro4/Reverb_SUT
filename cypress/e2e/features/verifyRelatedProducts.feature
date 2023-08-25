Feature: Verify that related products belong to the same category

Scenario: Verify that selecting a random product displays related products from the same brand
    Given I  am on the Reverb homepage
    And I navigate to the guitars sections
    When I choose the tenor electric guitars category
    And I select a random product
    Then all related products should belong to the same brand as the selected product
