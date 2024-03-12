describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://win-1ics5jffm16.dev.local:9080/navigator/')
    cy.contains('Welcome to IBM Content Navigator')
  })
})