describe('Web UI Saucedemo', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Failed Login Saucedemo - Wrong Creds', () => {
        cy.get('#user-name').clear().type('username')
        cy.get('[data-test="password"]').type('password')
        cy.get('.submit-button.btn_action').click()
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')
    })
    it('Failed Login Saucedemo - Locked User', () => {
        cy.get('#user-name').clear().type(Cypress.env('lockedUser'))
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('.submit-button.btn_action').click()
        cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out')
    })
    it('Success Login Saucedemo', () => {
        cy.get('#user-name').clear().type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')       
        cy.get('.submit-button.btn_action').click()
        cy.get('.title').should('be.visible')
        cy.url().should('include', '/inventory.html') 
    })
})