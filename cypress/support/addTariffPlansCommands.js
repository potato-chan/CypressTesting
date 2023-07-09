Cypress.Commands.add('addTariffPlansFieldsFilling', (data) => {
        cy.get('#rental1').type(data.monthlyRental);
        cy.get('#local_minutes').type(data.freeLocalMinutes);
        cy.get('#inter_minutes').type(data.freeInternationalMinutes);
        cy.get('#sms_pack').type(data.freeSMSPack);
        cy.get('#minutes_charges').type(data.localPerMinutesCharges);
        cy.get('#inter_charges').type(data.internationalPerMinutesCharges);
        cy.get('#sms_charges').type(data.SMSPerCharges);
})

Cypress.Commands.add('tariffPlanIsAddedChecking', () => {
    cy.location("pathname").should("equal", "/telecom/addtariffplans.php");
    cy.get('.navbar').should('be.visible');
    cy.get('.left > [href="#menu"]').should('be.visible');
    cy.get('.left > .logo').should('be.visible');
    cy.get('h1').contains('Add Tariff Plans').should('be.visible');
    cy.get('h2').contains('Congratulation you add Tariff Plan').should('be.visible');
    cy.get('.button').contains('Home').should('be.visible');
})

Cypress.Commands.add('specCharsErrMessageChecking', (specChars, field, errMessageField) => {
    for (let i = 0; i < specChars.length; i++) {
        cy.log(`Special characters: ${specChars[i]}`);
        cy.get(field).clear().type(specChars[i]);
        cy.get(errMessageField).should('be.visible').contains('Special characters are not allowed');
    }
})

Cypress.Commands.add('charsErrMessageCheking', (chars, field, errMessageField) => {
    cy.get(field).type(chars);
    cy.get(errMessageField).should('be.visible').contains('Characters are not allowed');
})

Cypress.Commands.add('specCharsTariffPlanAdding', (data, field, specChars) => {
    cy.window().then((win) => {
        const alertStub = cy.stub(win, 'alert');
        for (let i = 0; i < specChars.length; i++) {
            let fields = {
                "#rental1": data.monthlyRental,
                "#local_minutes": data.freeLocalMinutes,
                "#inter_minutes": data.freeInternationalMinutes,
                "#sms_pack": data.freeSMSPack,
                "#minutes_charges": data.localPerMinutesCharges,
                "#inter_charges": data.internationalPerMinutesCharges,
                "#sms_charges": data.SMSPerCharges
            }
            fields[field] = specChars[i];
            var entries = Object.entries(fields);
            cy.log(`Special characters: ${specChars[i]}`);
            for (var [fieldName, fieldValue] of entries) {
                cy.get(fieldName).clear().type(fieldValue);
            }
            cy.get(':nth-child(1) > input').click().then(() => {
                expect(alertStub).to.be.calledOnce;
                const alertText = alertStub.getCall(0).args[0];
                expect(alertText).to.equal('please fill all fields Correct Value');
                alertStub.resetHistory();
            })
        }
    });
})

Cypress.Commands.add('charsTariffPlanAdding', (data, field, char) => {
    cy.window().then((win) => {
        const alertStub = cy.stub(win, 'alert');
        let fields = {
            "#rental1": data.monthlyRental,
            "#local_minutes": data.freeLocalMinutes,
            "#inter_minutes": data.freeInternationalMinutes,
            "#sms_pack": data.freeSMSPack,
            "#minutes_charges": data.localPerMinutesCharges,
            "#inter_charges": data.internationalPerMinutesCharges,
            "#sms_charges": data.SMSPerCharges
        }
        fields[field] = char;
        var entries = Object.entries(fields);
        for (var [fieldName, fieldValue] of entries) {
            cy.get(fieldName).clear().type(fieldValue);
        }
        cy.get(':nth-child(1) > input').click().then(() => {
            expect(alertStub).to.be.calledOnce;
            const alertText = alertStub.getCall(0).args[0];
            expect(alertText).to.equal('please fill all fields Correct Value');
        })
    });
})