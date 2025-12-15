class LoginPage {

  visit() {
    cy.visit('/web/index.php/auth/login')
  }

  interceptLogin() {
    cy.intercept('POST', '**/auth/validate').as('loginRequest')
  }

  inputUsername(username) {
    cy.get('input[name="username"]').clear().type(username)
  }

  inputPassword(password) {
    cy.get('input[name="password"]').clear().type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  login(username, password) {
    this.inputUsername(username)
    this.inputPassword(password)
    this.clickLogin()
  }

  assertLoginSuccess() {
    cy.wait('@loginRequest')
    cy.url().should('include', '/dashboard')
  }

  assertLoginFailed() {
    cy.wait('@loginRequest')
    cy.contains('Invalid credentials').should('be.visible')
  }
}

export default new LoginPage()
