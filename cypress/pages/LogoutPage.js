class LogoutPage {

  interceptLogout() {
  cy.intercept('GET', '**/auth/logout').as('logoutRequest')
}


  openUserMenu() {
    cy.get('.oxd-userdropdown-tab').should('be.visible').click()
  }

  clickLogout() {
    cy.contains('Logout').click()
  }

  assertLogoutSuccess() {
    // jangan cy.wait wajib, karena kadang tidak selalu terpanggil
    cy.url().should('include', '/auth/login')
    cy.get('button[type="submit"]').should('be.visible')
  }
}

export default new LogoutPage()
