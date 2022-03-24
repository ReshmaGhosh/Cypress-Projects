/// <reference types="cypress" />

describe('Locating Element', () => {
    it('verify types of locators', () => {
      cy.visit("https://demo.nopcommerce.com/")
      cy.get("#small-searchterms").type("Nikon D5500 DSLR")
      cy.get("[type='submit']").click
      cy.get(".product-box-add-to-cart-button[type='button']").      click()
      cy.get("#product_enteredQuantity_14").clear().type('2')
      cy.get("#add-to-cart-button-14").click()
      cy.wait(5000)
      cy.get("#topcartlink > a > span.cart-lebel").click()
      cy.wait(3000)
      cy.get("product-unit-price").contains('$670.00')


      
    })
  })