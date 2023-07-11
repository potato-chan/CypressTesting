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

  it('KKP-5, Adding an active customer with nominal values', () => {
    cy.get(':nth-child(1) > label')
    .click();

    cy.addCustomerFieldsFilling(data.nominal);
    cy.errorMessageNotVisibleChecking();

    cy.get('#main input[type=submit]')
    .click();

    cy.customerAddedSuccessfullyChecking(data.baseURL);
  })

  it('KKP-5, Adding an active customer with nominal values with special characters', () => {
    cy.get(':nth-child(1) > label')
    .click();

    cy.addCustomerFieldsFilling(data.nominalWithSpecChars);
    cy.errorMessageNotVisibleChecking();

    cy.get('#main input[type=submit]')
    .click();
    cy.customerAddedSuccessfullyChecking(data.baseURL);
  })

  it('KKP-5, Adding an active customer with max values', () => {
    cy.get(':nth-child(1) > label')
    .click();

    cy.addCustomerFieldsFilling(data.max);
    cy.errorMessageNotVisibleChecking();

    cy.get('#main input[type=submit]')
    .click();

    cy.customerAddedSuccessfullyChecking(data.baseURL);
  })

  it('KKP-5, Adding an active customer with min values', () => {
    cy.get(':nth-child(1) > label')
    .click();

    cy.addCustomerFieldsFilling(data.min);
    cy.errorMessageNotVisibleChecking();

    cy.get('#main input[type=submit]')
    .click();

    cy.customerAddedSuccessfullyChecking(data.baseURL);
  })

  it('KKP-5, The "RESET" button functionality', () => {
    cy.window()
    .then((win) => {
      const alertStub = cy.stub(win, 'alert');

      cy.get(':nth-child(1) > label')
      .click();

      cy.addCustomerFieldsFilling(data.nominal);
      cy.errorMessageNotVisibleChecking();

      cy.get('.alt')
      .click();

      cy.get('#main input[type=submit]')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledOnce;
        const alertText = alertStub.getCall(0).args[0];
        expect(alertText).to.equal('please fill all fields');
      })
    }) 
  })
})
