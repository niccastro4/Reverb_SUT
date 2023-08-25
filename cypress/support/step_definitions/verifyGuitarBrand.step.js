import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Reverb homepage', () => {
    cy.visit('https://reverb.com/');
});

Given('I  navigate to the guitars section', () => {
    cy.get("button[data-header-category='guitars']").eq(0).click();
});

When('I choose the acoustic guitars category', () => {
    cy.get("a[href$='/c/acoustic-guitars/']").eq(0).click();
});

When('I filter by the Martin brand', () => {
    cy.get("li a[href*='/brand/martin']").eq(0).click();
});

Then('all displayed guitars should be from the Martin brand', () => {
    cy.get("ul[class='sortable-tiles']").each((instrument, index, list) => {
        cy.wrap(instrument).find('h4').should('include.text', 'Martin');
    });
});