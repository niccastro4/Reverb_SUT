Feature: Verify that guitars belong to the correct brand category when filtered

Scenario: Verify that all guitars are from the Martin brand when Martin is selected as a filter
    Given I am on the Reverb homepage
    And I  navigate to the guitars section
    When I choose the acoustic guitars category
    And I filter by the Martin brand
    Then all displayed guitars should be from the Martin brand
