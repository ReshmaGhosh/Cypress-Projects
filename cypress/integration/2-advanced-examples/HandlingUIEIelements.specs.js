/// <reference types="cypress"/>

describe('UI Elements',function()
{
 it('Verify Inputbox and Radio buttons',function()
 {
   cy.visit("http://newtours.demoaut.com/")
   cy.url().should('include','newtours')
   cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type("reshmaghosh")
   cy.get('input[name="password"]').should('be.visible').should('be.enabled').type("12345")
   cy.get('input[name="submit"]').should('be.visible').click()
   cy.title().should('eq','Find a Flight: Mercury Tours:')
   cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
   cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()
   cy.get('input[name="findFlight"]').should('be.visible').click()
   cy.title().should('eq','Find a Flight: Mercury Tours:')
   
   
 }
 )
}
)