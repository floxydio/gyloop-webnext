describe('Login spec', () => {
    it('passes', () => {
        cy.visit('https://gyloop-webnext.vercel.app/Login')
        cy.contains('Email')
        cy.contains('Password')
        cy.contains('Remember Me').click()
    })
})