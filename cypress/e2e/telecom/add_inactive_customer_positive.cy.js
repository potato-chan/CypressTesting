const data = require('../../fixtures/add_customer_data');


describe('Add Customer page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/addcustomer.php`)
    cy.iframeSkip();
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('v6 is not defined')) {
          return false
      }
    })
  })

  it('KKP-6, Adding an inactive customer with nominal values', () => {
    cy.get(':nth-child(2) > label')
    .click();

    cy.addCustomerFieldsFilling(data.nominal);
    cy.errorMessageNotVisibleChecking();
    
    cy.get('#main input[type=submit]')
    .click();
    cy.customerAddedSuccessfullyChecking(data.baseURL);
  })
})
