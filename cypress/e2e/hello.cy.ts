describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.wait(1000)
    cy.get('.banner').contains('Kitchen Sink')
  })
})