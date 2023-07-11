const data = require('../../fixtures/add_tariff_plans_data');


describe('Add Tariff Plans page', () => {
  beforeEach(() => {
    cy.visit("http://demo.guru99.com/telecom/addtariffplans.php")
    cy.iframeSkip();
  })

  it('KKP-3, Adding a tariff plan with nominal values', () => {
    cy.addTariffPlansFieldsFilling(data.nominal);

    cy.get(':nth-child(1) > input')
    .click();

    cy.tariffPlanIsAddedChecking();
  })

  it('KKP-3, Adding a tariff plan with max values', () => {
    cy.addTariffPlansFieldsFilling(data.max);

    cy.get(':nth-child(1) > input')
    .click();

    cy.tariffPlanIsAddedChecking();
  })

  it('KKP-3, Adding a tariff plan with min values', () => {
    cy.addTariffPlansFieldsFilling(data.min);

    cy.get(':nth-child(1) > input')
    .click();

    cy.tariffPlanIsAddedChecking();
  })

  it('KKP-3, The "RESET" button functionality', () => {
    cy.window()
    .then((win) => {
      const alertStub = cy.stub(win, 'alert');

      cy.addTariffPlansFieldsFilling(data.nominal);

      cy.get('.alt')
      .click();

      cy.get(':nth-child(1) > input')
      .click()
      .then(() => {
        expect(alertStub).to.be.calledOnce;
        const alertText = alertStub.getCall(0).args[0];
        expect(alertText).to.equal('please fill all fields Correct Value');
      })
    }) 
  })
})
