import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I  am on the Reverb homepage', () => {
    cy.visit('https://reverb.com/');
});

Given('I navigate to the guitars sections', () => {
    cy.get("button[data-header-category='guitars']").eq(0).click();
});

When('I choose the tenor electric guitars category', () => {
    cy.get("a[href='/c/electric-guitars/tenor']").click().then(() => {
        cy.get(".color-gray[rel='nofollow']").click();
    });
});

When('I select a random product', () => {
    cy.get("div[class='overflowing-row__items__inner']").eq(0).find('li').then(($elements) => {
        const totalElements = $elements.length;
        const randomIndex = Math.floor(Math.random() * totalElements);
        cy.wrap($elements[randomIndex]).trigger("click");  
    });
});

Then('all related products should belong to the same brand as the selected product', () => {
    cy.get("a[data-brand-link='true'] span[itemprop='name']").invoke('text').then((text) => {
        cy.get("ul[class='tiles tiles--one-wide']").eq(0).each((instrument, index, list) => {
            cy.wrap(instrument).find('a').should('include.text', text);
        });
    });
});
