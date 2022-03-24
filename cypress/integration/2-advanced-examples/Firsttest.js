

describe('My First Test', () => {
    
    it('verify the title', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')
    })
    

  })