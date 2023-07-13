const data = require('../../fixtures/login_data');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(data.baseURL)
    cy.iframeSkip();
  })

  it('Page visible and contains elements', () => {
    cy.get(':nth-child(5) > .barone')
    .should('be.visible')
    .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 155, 81)')
    .contains('Guru99 Bank');

    cy.get(':nth-child(1) > [align="right"]')
    .should('be.visible')
    .and('have.css', 'COLOR', 'rgb(128, 128, 128)')
    .contains('UserID');

    cy.get(':nth-child(2) > [align="right"]')
    .should('be.visible')
    .and('have.css', 'COLOR', 'rgb(128, 128, 128)')
    .contains('Password');

    cy.get(':nth-child(1) > :nth-child(2) > input')
    .should('be.visible')
    .and('have.attr', 'type', 'text')
    .and('have.attr', 'maxlength', '10')
    .and('have.css', 'border-color', 'rgb(128, 128, 128)')
    .and('have.css', 'background-color', 'rgb(248, 248, 255)');

    cy.get(':nth-child(2) > :nth-child(2) > input')
    .should('be.visible')
    .and('have.attr', 'type', 'password')
    .and('have.css', 'border-color', 'rgb(128, 128, 128)')
    .and('have.css', 'background-color', 'rgb(248, 248, 255)');

    cy.get('[type="submit"]')
    .should('be.visible')
    .and('have.attr', 'value', 'LOGIN')
    .and('have.css', 'border-color', 'rgb(128, 128, 128)')
    .and('have.css', 'background-color', 'rgb(248, 248, 255)');

    cy.get('[type="reset"]')
    .should('be.visible')
    .and('have.attr', 'value', 'RESET')
    .and('have.css', 'border-color', 'rgb(128, 128, 128)')
    .and('have.css', 'background-color', 'rgb(248, 248, 255)')
  })
})