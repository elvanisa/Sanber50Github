describe('Web UI orangeHRM', () => {
    it('Login orangeHRM', () => {
        cy.visit(Cypress.env('orangeHRM'))
        cy.get('[name="username"]').type('username')

    })
})