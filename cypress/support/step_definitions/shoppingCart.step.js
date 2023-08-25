import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the Reverb homepage', () => {
    cy.visit('https://reverb.com/');
});

When('I navigate to the guitars section', () => {
    cy.get("button[data-header-category='guitars']").eq(0).click();
});

When('I navigate to the solid body guitars', () => {
    cy.get("a[href*='/solid-body']").click();
});

When('I select the "PRS SE Silver Sky" product', () => {
    cy.get("div[class='csp-square-card__main']").each((instrument, index, list) => {
        if(instrument.find('h3').text() === " SE Silver Sky") {
            instrument.find('h3').trigger("click");
        }
    });
});

Then('the selected product should be {string}', (productName) => {
    cy.get(".csp2-header__title").should('include.text', productName).then(() => {
        cy.get(".color-gray[rel='nofollow']").click();
    });
});

When('I add it to the cart', () => {
    cy.get("button[class='add-to-cart-button']").eq(0).click();
});

When('I select the shopping cart icon', () => {
    cy.get("div[class='reverb-header__nav__link']").click();
});

Then('I should have {string} in the cart', (cartStatus) => {
    cy.get(".color-gray.hyphenate").should('include.text', cartStatus);
});