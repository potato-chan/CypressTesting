const data = require('../../fixtures/payment_gateway_data');

describe('Payment Process page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/index.php`)
    cy.iframeSkip();
  })

  it('Menu visible and contains elements', () => {
    cy.get('#header')
    .should('be.visible')
    .and('have.css', 'background', 'rgb(108, 192, 145) none repeat scroll 0% 0% / auto padding-box border-box');

    cy.get('.inner > .logo')
    .should('be.visible')
    .and('have.attr', 'href', 'purchasetoy.php')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-weight', '400')
    .contains('Guru99 Payment Gateway');

    cy.get('#nav > [href="purchasetoy.php"]')
    .should('be.visible')
    .and('have.attr', 'href', 'purchasetoy.php')
    .contains('Cart');

    cy.get('#nav > [href="cardnumber.php"]')
    .should('be.visible')
    .and('have.attr', 'href', 'cardnumber.php')
    .contains('Generate Card Number');

    cy.get('#nav > [href="check_credit_balance.php"]')
    .should('be.visible')
    .and('have.attr', 'href', 'check_credit_balance.php')
    .contains('Check Credit Card Limit')
  })

  it('Page visible and contains elements', () => {
    cy.get('h2')
    .should('be.visible')
    .and('have.css', 'color', 'rgb(85, 85, 85)')
    .contains('Mother Elephant With Babies Soft Toy');

    cy.get('p > img')
    .should('be.visible')
    .and('have.attr', 'src', 'images/Toy.jpg');

    cy.get(':nth-child(2) > p')
    .should('be.visible');

    cy.get(':nth-child(2) > ul > :nth-child(1)')
    .should('be.visible');

    cy.get(':nth-child(2) > ul > :nth-child(2)')
    .should('be.visible');

    cy.get(':nth-child(2) > ul > :nth-child(3)')
    .should('be.visible');

    cy.get(':nth-child(2) > ul > :nth-child(4)')
    .should('be.visible');

    cy.get(':nth-child(2) > ul > :nth-child(5)')
    .should('be.visible');

    cy.get(':nth-child(2) > ul > :nth-child(6)')
    .should('be.visible');

    cy.get('h3')
    .should('be.visible')
    .and('have.css', 'color', 'rgb(85, 85, 85)');

    cy.get('h4')
    .should('be.visible')
    .contains('Quantity:')
    .and('have.css', 'color', 'rgb(85, 85, 85)');

    cy.get('select')
    .should('have.length.above', 0)
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'background', 'rgb(108, 192, 145) none repeat scroll 0% 0% / auto padding-box border-box');

    cy.get('.button')
    .should('be.visible')
    .and('have.attr', 'value', 'Buy Now')
    .and('have.css', 'background-color', 'rgb(108, 192, 145)')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
  })
})