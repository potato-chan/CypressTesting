const data = require('../../fixtures/payment_gateway_data');

describe('Payment Process page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/index.php`)
    cy.iframeSkip();
  })

  it('KKP-9, Making a purchase with nominal card data', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchase(data.nominal);
    cy.paymentSuccessfully(data.baseURL)
  })

  it('KKP-9, Making a purchase with max card data', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchase(data.max);
    cy.paymentSuccessfully(data.baseURL)
  })

  it('KKP-9, Making a purchase with min card data', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchase(data.min);
    cy.paymentSuccessfully(data.baseURL)
  })
})