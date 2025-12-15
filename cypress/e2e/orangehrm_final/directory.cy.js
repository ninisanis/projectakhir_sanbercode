import LoginPage from '../../pages/LoginPage'
import DirectoryPage from '../../pages/DirectoryPage'
import { loginData } from '../../data/loginData'

describe('Dashboard - Directory Menu', () => {

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.interceptLogin()
    LoginPage.login(
      loginData.valid.username,
      loginData.valid.password
    )
    LoginPage.assertLoginSuccess()

    DirectoryPage.interceptDirectory()
  })

  it('User dapat membuka menu Directory', () => {
    DirectoryPage.openDirectory()
    DirectoryPage.assertDirectoryPage()
  })

  it('User dapat melakukan search employee', () => {
    DirectoryPage.openDirectory()
    DirectoryPage.searchEmployee('a')
    DirectoryPage.assertDirectoryPage()
  })

  it('Directory tampil dengan card employee', () => {
  DirectoryPage.openDirectory()
  DirectoryPage.assertDirectoryPage()
  cy.get('.oxd-sheet')
    .should('exist')
})

it('Search directory tanpa input', () => {
  DirectoryPage.openDirectory()
  cy.contains('Search').click()
  DirectoryPage.assertDirectoryPage()
})


})
