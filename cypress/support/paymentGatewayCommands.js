Cypress.Commands.add('dropdownFunctionality', (option) => {
    cy.log(`Pick option: ${option}`)
    cy.get('h3').invoke('text')
    .then((value) => {
        var price = parseInt(value.slice(8))
        cy.get('select').select(option);
        cy.get('.button').click();
        cy.get('[color="red"]').invoke('text')
        .then((value) => {
            var totalPrice = parseInt(value.slice(2))
            cy.wrap(price * parseInt(option)).should('equal', totalPrice);
        });
    });
})

Cypress.Commands.add('dropdown', (url) => {
    cy.get('select').select('1');
    cy.get('.button').click();
    cy.url().should("equal", `${url}/process_purchasetoy.php`);
})

Cypress.Commands.add('makePurchase', (data) => {
    cy.get('#card_nmuber').type(data.cardNumber);
    cy.get('#card_nmuber').should('have.value', data.cardNumber);
    cy.get('#month').select(data.month);
    cy.get('#year').select(data.year);
    cy.get('#cvv_code').type(data.cvv);
    cy.get('#cvv_code').should('have.value', data.cvv);
    cy.get('#message1').should('not.be.visible');
    cy.get('#message2').should('not.be.visible');
    cy.get('.button').click();
})

Cypress.Commands.add('paymentSuccessfully', (url) => {
    cy.get(':nth-child(2) > h3 > strong').should('be.visible').invoke('text')
    .then((text) => {
        cy.url().should("equal", `${url}/genearte_orderid.php?uid=${text}`);
    });
    cy.get('h2').should('be.visible').contains('Payment successfull!');
    cy.get(':nth-child(1) > h3 > strong').should('be.visible').contains('Order ID');
    cy.get('td > strong').should('be.visible').contains('Please Note Down Your OrderID');
    cy.get('.button').should('be.visible').contains('Home').should('have.attr', 'href', 'purchasetoy.php')
})

Cypress.Commands.add('errorMessageChekingForOneField', (field, data, errorField, errorMessage) => {
    cy.get(field).clear().type(data);
    cy.get(errorField).should('be.visible').contains(errorMessage);
})

Cypress.Commands.add('makePurchaseWithIncorrectData', (data, field, incorrectValue, month, year) => {
    cy.window().then((win) => {
        const alertStub = cy.stub(win, 'alert');
        let fields = {
            "#card_nmuber": data.cardNumber,
            "#cvv_code": data.cvv
        }
        fields[field] = incorrectValue;
        var entries = Object.entries(fields);
        for (var [fieldName, fieldValue] of entries) {
            cy.get(fieldName).clear().type(fieldValue);
        }
        cy.get('#month').select(month);
        cy.get('#year').select(year);

        cy.get('.button').click().then(() => {
            expect(alertStub).to.be.calledOnce;
            const alertText = alertStub.getCall(0).args[0];
            expect(alertText).to.equal('Check card number is 16 digits!');
        })
    })   
})