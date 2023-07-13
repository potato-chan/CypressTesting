//The test 2 was skipped because of a popup that is not caught by Cypress.
const data = require('../../fixtures/login_data');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(data.baseURL)
    cy.iframeSkip();
  })

  it('KKP-1, The login functionality', () => {
    cy.fieldsFilling(data.nominal);
    
    cy.get('[type="submit"]')
    .click()

    cy.url()
    .should('equal', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');

    cy.get('.barone')
    .should('be.visible')
    .contains('Guru99 Bank');

    cy.get('.orange > a')
    .should('be.visible')
    .and('have.attr', 'href', 'Customerhomepage.php')
    .contains('Customer');

    cy.get('.menusubnav > :nth-child(2) > a')
    .should('be.visible')
    .and('have.attr', 'href', 'MiniStatementInput.php')
    .contains('Mini Statement');

    cy.get('.menusubnav > :nth-child(3) > a')
    .should('be.visible')
    .and('have.attr', 'href', 'Logout.php')
    .contains('Log out');

    cy.get('[src="/Agile_Project/Agi_V1/customer/images/1.gif"]')
    .should('be.visible')
    .and('have.attr', 'src', '/Agile_Project/Agi_V1/customer/images/1.gif');

    cy.get('[src="/Agile_Project/Agi_V1/customer/images/3.gif"]')
    .should('be.visible')
    .and('have.attr', 'src', '/Agile_Project/Agi_V1/customer/images/3.gif');

    cy.get('[src="/Agile_Project/Agi_V1/customer/images/2.gif"]')
    .should('be.visible')
    .and('have.attr', 'src', '/Agile_Project/Agi_V1/customer/images/2.gif');

    cy.get('.heading3')
    .should('be.visible')
    .contains('Welcome To Customer\'s Page of Guru99 Bank');
  })

  it.skip('KKP-1, The "RESET" button functionality', () => {
    cy.fieldsFilling(data.nominal);

    cy.get('[type="reset"]')
    .click();

    cy.get('[type="submit"]')
    .click();

    cy.url()
    .should('not.contain', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');
  })
})