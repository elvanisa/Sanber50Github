describe('Web UI Saucedemo', () => {
    it('Login Saucedemo', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('username')

    })
})