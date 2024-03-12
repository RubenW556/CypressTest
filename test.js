describe('e2e tests', () => {
    it('should log-in', () => {
        cy.visit('http://win-1ics5jffm16.dev.local:9080/navigator/')
        cy.contains('Gmail').click()
    })
})