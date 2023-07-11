const data = require('../../fixtures/payment_gateway_data');

describe('Payment Process page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/index.php`)
    cy.iframeSkip();
  })

  it('Menu visible and contains elements', () => {
    cy.get('#header')
    .should('be.visible')
    .and('have.css', 'background', 'rgb(108, 192, 145) none repeat scroll 0% 0% / auto padding-box border-box')
    .and('have.css', 'height', '44px')
    .and('have.css', 'line-height', '44px');

    cy.get('.inner > .logo')
    .should('be.visible')
    .and('have.attr', 'href', 'purchasetoy.php')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'font-weight', '400')
    .and('have.css', 'margin', '0px')
    .and('have.css', 'padding', '0px')
    .and('have.css', 'top', '0px')
    .and('have.css', 'font-size', '16px')
    .contains('Guru99 Payment Gateway');

    cy.get('#nav > [href="purchasetoy.php"]')
    .should('be.visible')
    .and('have.attr', 'href', 'purchasetoy.php')
    .and('have.css', 'padding', '0px 12px')
    .and('have.css', 'font-size', '16px')
    .contains('Cart');

    cy.get('#nav > [href="cardnumber.php"]')
    .should('be.visible')
    .and('have.attr', 'href', 'cardnumber.php')
    .and('have.css', 'padding', '0px 12px')
    .and('have.css', 'font-size', '16px')
    .contains('Generate Card Number');

    cy.get('#nav > [href="check_credit_balance.php"]')
    .should('be.visible')
    .and('have.attr', 'href', 'check_credit_balance.php')
    .and('have.css', 'padding', '0px 0px 0px 12px')
    .and('have.css', 'font-size', '16px')
    .contains('Check Credit Card Limit')
  })

  it('Page visible and contains elements', () => {
    cy.get('h2')
    .should('be.visible')
    .and('have.css', 'font-weight', '300')
    .and('have.css', 'line-height', '66px')
    .and('have.css', 'color', 'rgb(85, 85, 85)')
    .and('have.css', 'font-size', '44px')
    .and('have.css', 'margin', '0px 0px 22px')
    .contains('Mother Elephant With Babies Soft Toy');

    cy.get('p > img')
    .should('be.visible')
    .and('have.attr', 'src', 'images/Toy.jpg')
    .and('have.css', 'vertical-align', 'middle')
    .and('have.css', 'border', '0px none rgb(154, 154, 154)')
    .and('have.css', 'margin', '0px')
    .and('have.css', 'padding', '0px');

    cy.get(':nth-child(2) > p')
    .should('be.visible')
    .and('have.css', 'margin', '0px 0px 10px');

    cy.get(':nth-child(2) > ul > :nth-child(1)')
    .should('be.visible')
    .and('have.css', 'padding-left', '8px');

    cy.get(':nth-child(2) > ul > :nth-child(2)')
    .should('be.visible')
    .and('have.css', 'padding-left', '8px');

    cy.get(':nth-child(2) > ul > :nth-child(3)')
    .should('be.visible')
    .and('have.css', 'padding-left', '8px');

    cy.get(':nth-child(2) > ul > :nth-child(4)')
    .should('be.visible')
    .and('have.css', 'padding-left', '8px');

    cy.get(':nth-child(2) > ul > :nth-child(5)')
    .should('be.visible')
    .and('have.css', 'padding-left', '8px');

    cy.get(':nth-child(2) > ul > :nth-child(6)')
    .should('be.visible')
    .and('have.css', 'padding-left', '8px');

    cy.get('h3')
    .should('be.visible')
    .and('have.css', 'font-size', '28px')
    .and('have.css', 'font-weight', '400')
    .and('have.css', 'color', 'rgb(85, 85, 85)')
    .and('have.css', 'line-height', '42px')
    .and('have.css', 'margin-top', '20px')
    .and('have.css', 'margin-bottom', '10px');

    cy.get('h4')
    .should('be.visible')
    .contains('Quantity:')
    .and('have.css', 'font-size', '24px')
    .and('have.css', 'font-weight', '400')
    .and('have.css', 'color', 'rgb(85, 85, 85)')
    .and('have.css', 'line-height', '36px')
    .and('have.css', 'margin-top', '10px')
    .and('have.css', 'margin-bottom', '10px');

    cy.get('select')
    .should('have.length.above', 0)
    .and('have.css', 'font-size', '19.2px')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'height', '52.79999923706055px')
    .and('have.css', 'background', 'rgb(108, 192, 145) none repeat scroll 0% 0% / auto padding-box border-box')
    .and('have.css', 'border-radius', '10px')
    .and('have.css', 'border', '1.6px solid rgb(141, 204, 169)')
    .and('have.css', 'padding', '0px 19.2px');

    cy.get('.button')
    .should('be.visible')
    .and('have.attr', 'value', 'Buy Now')
    .and('have.css', 'font-size', '19.2px')
    .and('have.css', 'background-color', 'rgb(108, 192, 145)')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'border-radius', '30px')
  })
})