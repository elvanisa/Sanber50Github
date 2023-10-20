class LoginPage{
    username = '#user-name'
    passw = '[data-test="password"]'
    loginBtn = '.submit-button.btn_action'
    err_msg = '[data-test="error"]'

    inputUsername(name){
        cy.get(this.username)
        .clear()
        .type(name)
    }

    inputPassword(password){
        cy.get(this.passw)
        .clear()
        .type(password)
    }
}
export default new LoginPage()