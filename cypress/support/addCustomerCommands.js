Cypress.Commands.add('addCustomerFieldsFilling', (data) => {
    cy.get('#fname').type(data.firstName);
    cy.get('#lname').type(data.lastName);
    cy.get('#email').type(data.email);
    cy.get(':nth-child(7) > #message').type(data.address);
    cy.get('#telephoneno').type(data.mobileNumber);
})

Cypress.Commands.add('errorMessageNotVisibleChecking', () => {
    cy.get('#message').should('not.be.visible');
    cy.get('#message50').should('not.be.visible');
    cy.get('#message9').should('not.be.visible');
    cy.get('#message3').should('not.be.visible');
    cy.get('#message7').should('not.be.visible');
})

Cypress.Commands.add('customerAddedSuccessfullyChecking', (url) => {
    cy.get('h3').invoke('text')
    .then((text) => {
        cy.url().should("equal", `${url}/access.php?uid=${text}`);
    });
    cy.get('.navbar').should('be.visible');
    cy.get('.left > [href="#menu"]').should('be.visible');
    cy.get('.left > .logo').should('be.visible');
    cy.get('h1').should('be.visible').contains('Access Details to Guru99 Telecom');
    cy.get('tbody > :nth-child(1) > :nth-child(1) > b').should('be.visible').contains('Customer ID');
    cy.get(':nth-child(2) > td > b').should('be.visible').contains('Please Note Down Your CustomerID');
    cy.get('.button').should('be.visible').contains('Home').should('have.attr', 'href', 'index.html');
})

Cypress.Commands.add('errorMessageChekingForOneField', (field, data, errorField, errorMessage) => {
    cy.get(field).clear().type(data);
    cy.get(errorField).should('be.visible').contains(errorMessage);
})

Cypress.Commands.add('addCustomerWithIncorrectData', (data, field, incorrectValue) => {
    cy.window().then((win) => {
        const alertStub = cy.stub(win, 'alert');
        cy.get(':nth-child(1) > label').click();
        let fields = {
            "#fname": data.firstName,
            "#lname": data.lastName,
            "#email": data.email,
            ":nth-child(7) > #message": data.address,
            "#telephoneno": data.mobileNumber
        }
        fields[field] = incorrectValue;
        var entries = Object.entries(fields);
        for (var [fieldName, fieldValue] of entries) {
            cy.get(fieldName).clear().type(fieldValue);
        }
        cy.get('#main input[type=submit]').click().then(() => {
            expect(alertStub).to.be.calledOnce;
            const alertText = alertStub.getCall(0).args[0];
            expect(alertText).to.equal('please fill all fields');
        })
    });   
})