/// <reference types="cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit("https://www.axis.com/");
      cy.get('#email').type("reshmaghosh114@gmail.com");
      cy.get('#passwordfield').type("12345678");
      cy.get('#login-form-submit-button').click();

    })
  })