const data = require('../../fixtures/login_data');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(data.baseURL)
    cy.iframeSkip();
  })

  it('Page visible and contains elements', () => {
    cy.get(':nth-child(5) > .barone').should('be.visible').contains('Guru99 Bank');
    cy.get(':nth-child(1) > [align="right"]').should('be.visible').contains('UserID');
    cy.get(':nth-child(2) > [align="right"]').should('be.visible').contains('Password');
    cy.get(':nth-child(1) > :nth-child(2) > input').should('be.visible');
    cy.get(':nth-child(2) > :nth-child(2) > input').should('be.visible');
    cy.get('[type="submit"]').should('be.visible').should('have.attr', 'value', 'LOGIN');
    cy.get('[type="reset"]').should('be.visible').should('have.attr', 'value', 'RESET')
  })
})