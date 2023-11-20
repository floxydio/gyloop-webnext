describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://gyloop-webnext.vercel.app/Main')
    cy.contains('Start your planning, and feel the change')
  })
})