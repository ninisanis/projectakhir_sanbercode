class ForgotPasswordPage {

  interceptReset() {
    cy.intercept('POST', '**/auth/**').as('resetPassword')
  }

  openForgotPassword() {
    cy.contains('Forgot your password?').click()
  }

  inputUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  clickReset() {
    cy.get('button[type="submit"]').click()
  }

  assertResetSuccess() {
    cy.contains('Reset Password link sent successfully')
      .should('be.visible')
  }
}

export default new ForgotPasswordPage()
