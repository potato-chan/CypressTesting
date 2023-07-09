const data = require('../../fixtures/login_data');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(data.baseURL);
    cy.iframeSkip();
  })

  it('KKP-1, The login functionality with with incorrect password', () => {
    cy.fieldsFillingIncorrect(data.nominal.login, data.incorrect.password[0]);
  })

  it('KKP-1, The login functionality with with lowercase password', () => {
    cy.fieldsFillingIncorrect(data.nominal.login, data.incorrect.password[1]);
  })

  it('KKP-1, The login functionality with with uppercase password', () => {
    cy.fieldsFillingIncorrect(data.nominal.login, data.incorrect.password[2]);
  })

  it('KKP-1, The login functionality with incorrect UserID', () => {
    cy.fieldsFillingIncorrect(data.incorrect.login, data.nominal.password);
  })

  it('KKP-1, The login functionality with empty values', () => {
    cy.get('[type="submit"]').click();
    cy.url().should('not.contain', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');
  })
})