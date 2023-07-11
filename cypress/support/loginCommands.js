Cypress.Commands.add('fieldsFilling', (data) => {
    cy.get(':nth-child(1) > :nth-child(2) > input')
    .type(data.login);

    cy.get(':nth-child(2) > :nth-child(2) > input')
    .type(data.password);
})

Cypress.Commands.add('fieldsFillingIncorrect', (login, password) => {
    cy.get(':nth-child(1) > :nth-child(2) > input')
    .type(login);

    cy.get(':nth-child(2) > :nth-child(2) > input')
    .type(password);

    cy.get('[type="submit"]')
    .click();

    cy.url()
    .should('not.contain', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');
})
