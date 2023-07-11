describe('Add Tariff Plans page, content section', () => {
  beforeEach(() => {
    cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
    cy.iframeSkip();
  })

  it('Page contains logo', () => {
    cy.get('.left > .logo')
    .should('be.visible')
  })

  it('Logo is clickable and has correct URl', () => {
    cy.get('.left > .logo')
    .click();

    cy.location("pathname")
    .should("equal", "/telecom/index.html")
  })

  it('The H1 contains correct text', () => {
    cy.get('h1')
    .contains('Add Tariff Plans')
    .should('be.visible')
  })

  it('The lables on the page are correct', () => {
    cy.get(':nth-child(1) > h3')
    .contains('Monthly Rental')
    .should('be.visible');

    cy.get(':nth-child(6) > h3')
    .contains('Free Local Minutes')
    .should('be.visible');

    cy.get(':nth-child(11) > h3')
    .contains('Free International Minutes')
    .should('be.visible');

    cy.get(':nth-child(16) > h3')
    .contains('Free SMS Pack')
    .should('be.visible');

    cy.get(':nth-child(21) > h3')
    .contains('Local Per Minutes Charges')
    .should('be.visible');

    cy.get(':nth-child(26) > h3')
    .contains('International Per Minutes Charges')
    .should('be.visible');

    cy.get(':nth-child(31) > h3')
    .contains('SMS Per Charges')
    .should('be.visible')
  })

  it('The text fields on the page are correct and have correct placeholder', () => {
    cy.get('#rental1')
    .should('have.attr', 'placeholder', 'Monthly Rental')
    .should('be.visible');

    cy.get('#local_minutes')
    .should('have.attr', 'placeholder', 'Free Local Minutes')
    .should('be.visible');

    cy.get('#inter_minutes')
    .should('have.attr', 'placeholder', 'Free International Minutes')
    .should('be.visible');

    cy.get('#sms_pack')
    .should('have.attr', 'placeholder', 'Free SMS Pack')
    .should('be.visible');

    cy.get('#minutes_charges')
    .should('have.attr', 'placeholder', 'Local Per Minutes Charges')
    .should('be.visible');

    cy.get('#inter_charges')
    .should('have.attr', 'placeholder', 'Inter. Per Minutes Charges')
    .should('be.visible');

    cy.get('#sms_charges')
    .should('have.attr', 'placeholder', 'SMS Per Charges')
    .should('be.visible');
  })

  it('The page contains SUBMIT and RESET buttons', () => {
    cy.get(':nth-child(1) > input')
    .should('have.attr', 'name', 'submit')
    .should('be.visible');

    cy.get('.alt')
    .should('have.attr', 'value', 'Reset')
    .should('be.visible');
  })

  it('The error messages are hidden', () => {
    cy.get('#message2')
    .should('not.be.visible');

    cy.get('#message3')
    .should('not.be.visible');

    cy.get('#message4')
    .should('not.be.visible');

    cy.get('#message5')
    .should('not.be.visible');

    cy.get('#message6')
    .should('not.be.visible');

    cy.get('#message7')
    .should('not.be.visible');

    cy.get('#message8')
    .should('not.be.visible');
  })

  it('The left menu contains correct links', () => {
    cy.get('.left > [href="#menu"]')
    .should('be.visible')
    .click();

    cy.get('.links > :nth-child(1) > a')
    .contains('Home')
    .should('have.attr', 'href', 'index.html');

    cy.get('.links > :nth-child(2) > a')
    .contains('Add Customer')
    .should('have.attr', 'href', 'addcustomer.php');

    cy.get('.links > :nth-child(3) > a')
    .contains('Add Tariff Plans')
    .should('have.attr', 'href', 'addtariffplans.php');

    cy.get('.links > :nth-child(4) > a')
    .contains('Add Tariff Plan to Customer')
    .should('have.attr', 'href', 'assigntariffplantocustomer.php');

    cy.get('.links > :nth-child(5) > a')
    .contains('Pay Billing')
    .should('have.attr', 'href', 'billing.php');

    cy.get('.close')
    .click();
  })
})