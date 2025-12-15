import LoginPage from '../../pages/LoginPage'
import { loginData } from '../../data/loginData'

describe('Login Feature - OrangeHRM', () => {

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.interceptLogin()
  })

  it('Login berhasil dengan data valid', () => {
    LoginPage.login(
      loginData.valid.username,
      loginData.valid.password
    )
    LoginPage.assertLoginSuccess()
  })

  it('Login gagal dengan password salah', () => {
    LoginPage.login(
      loginData.valid.username,
      loginData.invalid.password
    )
    LoginPage.assertLoginFailed()
  })

  it('Login gagal dengan field kosong', () => {
    LoginPage.clickLogin()
    cy.contains('Required').should('be.visible')
  })

  it('Login gagal dengan username salah', () => {
  LoginPage.login('WrongUser', 'admin123')
  LoginPage.assertLoginFailed()
})

it('Login case sensitive (lowercase)', () => {
  LoginPage.login('admin', 'ADMIN123')
  LoginPage.assertLoginFailed()
})

it('Field password harus bertipe password', () => {
  cy.get('input[name="password"]')
    .should('have.attr', 'type', 'password')
})


})
