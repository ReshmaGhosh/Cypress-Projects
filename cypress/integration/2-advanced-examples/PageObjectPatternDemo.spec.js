/// <reference types="Cypress" />

import loginPage from '../pageObject/loginPage'

describe('Test Suite', () => {
    it('Valid Login Test', () => {
      
        const lp=new loginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
  })