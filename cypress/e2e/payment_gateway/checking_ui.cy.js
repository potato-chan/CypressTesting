const data = require('../../fixtures/payment_gateway_data');

describe('Payment Process page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/index.php`)
    cy.iframeSkip();
  })

  it('Menu visible and contains elements', () => {
    cy.get('#header').should('be.visible');
    cy.get('.inner > .logo').should('be.visible').should('have.attr', 'href', 'purchasetoy.php').contains('Guru99 Payment Gateway');
    cy.get('#nav > [href="purchasetoy.php"]').should('be.visible').should('have.attr', 'href', 'purchasetoy.php').contains('Cart');
    cy.get('#nav > [href="cardnumber.php"]').should('be.visible').should('have.attr', 'href', 'cardnumber.php').contains('Generate Card Number');
    cy.get('#nav > [href="check_credit_balance.php"]').should('be.visible').should('have.attr', 'href', 'check_credit_balance.php').contains('Check Credit Card Limit')
  })

  it('Page visible and contains elements', () => {
    cy.get('h2').should('be.visible').contains('Mother Elephant With Babies Soft Toy');
    cy.get('p > img').should('be.visible').should('have.attr', 'src', 'images/Toy.jpg');
    cy.get(':nth-child(2) > p').should('be.visible');
    cy.get(':nth-child(2) > ul > :nth-child(1)').should('be.visible');
    cy.get(':nth-child(2) > ul > :nth-child(2)').should('be.visible');
    cy.get(':nth-child(2) > ul > :nth-child(3)').should('be.visible');
    cy.get(':nth-child(2) > ul > :nth-child(4)').should('be.visible');
    cy.get(':nth-child(2) > ul > :nth-child(5)').should('be.visible');
    cy.get(':nth-child(2) > ul > :nth-child(6)').should('be.visible');
    cy.get('h3').should('be.visible');
    cy.get('h4').should('be.visible').contains('Quantity:');
    cy.get('select').should('have.length.above', 0);
    cy.get('.button').should('be.visible').should('have.attr', 'value', 'Buy Now')
  })
})