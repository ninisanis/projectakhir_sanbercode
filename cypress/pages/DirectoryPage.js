class DirectoryPage {

  interceptDirectory() {
    cy.intercept('GET', '**/directory/**').as('getDirectory')
  }

  openDirectory() {
    cy.contains('Directory').click()
  }

  assertDirectoryPage() {
    cy.wait('@getDirectory')
    cy.url().should('include', '/directory')
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name)
    cy.contains('Search').click()
  }
}

export default new DirectoryPage()
