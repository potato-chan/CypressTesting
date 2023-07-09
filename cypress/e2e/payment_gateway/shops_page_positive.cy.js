const data = require('../../fixtures/payment_gateway_data');

describe('Shop\'s page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/index.php`)
    cy.iframeSkip();
  })

  it('KKP-8, The drop-down functionality on the "Shop\'s Page" and price change from the changed quantity on the "Payment Process" page', () => {
    cy.dropdownFunctionality('1');
    cy.go('back');
    cy.dropdownFunctionality('2');
    cy.go('back');
    cy.dropdownFunctionality('3');
    cy.go('back');
    cy.dropdownFunctionality('4');
    cy.go('back');
    cy.dropdownFunctionality('5');
    cy.go('back');
    cy.dropdownFunctionality('6');
    cy.go('back');
    cy.dropdownFunctionality('7');
    cy.go('back');
    cy.dropdownFunctionality('8');
    cy.go('back');
    cy.dropdownFunctionality('9');
  })
})