/// <reference types="cypress" />

describe('Test contact us via webdriveruniversity', () => {
    it('Does not do much!', () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Reshma");
        cy.get('[name="last_name"]').type("Ghosh");
        cy.get('[name="email"]').type("reshmaghosh114@gmail.com");
        cy.get('textarea.feedback-input').type("I want to learn Cypress");
        cy.get('[type="submit"]').click();
  });
  it('Negative Test', () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");  
        cy.get('[name="first_name"]').type("Jolly");
        cy.get('[name="last_name"]').type("Ghosh");
        cy.get('textarea.feedback-input').type("I want to learn Cypress");
        cy.get('[type="submit"]').click();
  });
  })