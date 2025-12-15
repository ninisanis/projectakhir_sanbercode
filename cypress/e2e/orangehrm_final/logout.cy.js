import LoginPage from '../../pages/LoginPage'
import LogoutPage from '../../pages/LogoutPage'
import { loginData } from '../../data/loginData'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('reading \'response\'')) {
    return false
  }
})


describe('Logout Feature', () => {

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.interceptLogin()
    LoginPage.login(
      loginData.valid.username,
      loginData.valid.password
    )
    LoginPage.assertLoginSuccess()

    LogoutPage.interceptLogout()
  })

  it('User berhasil logout', () => {
  LogoutPage.openUserMenu()
  LogoutPage.clickLogout()

  cy.url().should('include', '/auth/login')
})


  it('User menu dropdown tampil sebelum logout', () => {
    LogoutPage.openUserMenu()
    cy.contains('Logout').should('be.visible')
  })

  it('Setelah logout user tidak bisa akses dashboard', () => {
    LogoutPage.openUserMenu()
    LogoutPage.clickLogout()

    cy.visit('/web/index.php/dashboard/index')
    cy.url().should('include', '/auth/login')
  })

})
