/// <reference types="cypress"/>

describe('Interacting With UI Elements', () => {
    it('Hobbies Check Box', () => {

        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
      
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

    })


  it('Skills Drop Down', () => {
    
    cy.get('#Skills').select('Android').should('have.value','Android')

  })
  
  it('Languages Multi Select', () => {
    
    cy.get('#msdd').click()
    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Japanese').click()
  })
  it('Select countries searchable drop down', () => {
    
    cy.get('[role=combobox]').click({force: true})
    cy.get('.select2-search_field').type('Ind')
    cy.get('.select2-search_field').type('{enter}')
  })

})