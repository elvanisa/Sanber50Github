import loginPage from "../../support/pageObject/loginPage"
const userData = require('../../fixtures/user.json')

describe('Web UI Saucedemo', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Failed Login Saucedemo - Wrong Creds', () => {
        //cy.get('#user-name').clear().type('username')
        cy.get(loginPage.username).clear().type(userData.invalid_user)
        cy.get(loginPage.passw).type(userData.invalid_pass)
        cy.get(loginPage.loginBtn).click()
        cy.get(loginPage.err_msg).should('contain.text', 'Username and password do not match any user in this service')
    })
    it('Failed Login Saucedemo - Locked User', () => {
        cy.get(loginPage.username).clear().type(Cypress.env('lockedUser'))
        cy.get(loginPage.passw).type(userData.valid_Pass)
        cy.get('.submit-button.btn_action').click()
        cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out')
    })
    it('Success Login Saucedemo', () => {
        //cy.get(loginPage.username).clear().type('standard_user')
        loginPage.inputUsername('standard_user')
        //cy.get('[data-test="password"]').type('secret_sauce')    
        cy.ketik(loginPage.passw,'secret_sauce')   //CUSTOM COMMAND
        cy.get('.submit-button.btn_action').click()
        cy.get('.title').should('be.visible')
        cy.url().should('include', '/inventory.html') 
    })
    it('Success Login Saucedemo - Custom Command', () => {
        cy.login('standard_user','secret_sauce')
        cy.get('.title').should('be.visible')
        cy.url().should('include', '/inventory.html') 
    })
})