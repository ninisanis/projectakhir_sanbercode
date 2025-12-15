import ForgotPasswordPage from '../../pages/ForgotPasswordPage'

describe('Forgot Password Feature', () => {

  beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
    ForgotPasswordPage.interceptReset()
  })

  it('User berhasil request reset password', () => {
    ForgotPasswordPage.openForgotPassword()
    ForgotPasswordPage.inputUsername('Admin')
    ForgotPasswordPage.clickReset()
    ForgotPasswordPage.assertResetSuccess()
  })

  it('Forgot password dengan username kosong', () => {
  ForgotPasswordPage.openForgotPassword()
  ForgotPasswordPage.clickReset()
  cy.contains('Required').should('be.visible')
})

it('Navigasi back ke halaman login dari forgot password', () => {
  ForgotPasswordPage.openForgotPassword()
  cy.contains('Cancel').click()
  cy.url().should('include', '/auth/login')
})


})
