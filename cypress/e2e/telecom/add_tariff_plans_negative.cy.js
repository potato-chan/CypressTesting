const data = require('../../fixtures/add_tariff_plans_data');


describe('Add Tariff Plans page', () => {
    beforeEach(() => {
        cy.visit("http://demo.guru99.com/telecom/addtariffplans.php")
        cy.iframeSkip();
    })

    it('KKP-4, The allowed length is exceeded for all text fields', () => {
        cy.addTariffPlansFieldsFilling(data.moreThanMax);
        cy.get('#rental1').should('not.have.value', data.moreThanMax.monthlyRental);
        cy.get('#local_minutes').should('not.have.value', data.moreThanMax.freeLocalMinutes);
        cy.get('#inter_minutes').should('not.have.value', data.moreThanMax.freeInternationalMinutes);
        cy.get('#sms_pack').should('not.have.value', data.moreThanMax.freeSMSPack);
        cy.get('#minutes_charges').should('not.have.value', data.moreThanMax.localPerMinutesCharges);
        cy.get('#inter_charges').should('not.have.value', data.moreThanMax.internationalPerMinutesCharges);
        cy.get('#sms_charges').should('not.have.value', data.moreThanMax.SMSPerCharges);
    })

    it('KKP-4, Entering special characters in the "Monthly Rental" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.monthlyRental, "#rental1", '#message2');
    });

    it('KKP-4, Entering characters in the "Monthly Rental" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.monthlyRental, "#rental1", '#message2');
    });

    it('KKP-4, Entering special characters in the "Monthly Rental" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#rental1', data.specialCharacters.monthlyRental);
    });

    it('KKP-4, Entering characters in the "Monthly Rental" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#rental1', data.characters.monthlyRental);
    });

    it('KKP-4, Entering special characters in the "Free Local Minutes" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.freeLocalMinutes, '#local_minutes', '#message3');
    });

    it('KKP-4, Entering characters in the "Free Local Minutes" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.freeLocalMinutes, '#local_minutes', '#message3');
    });

    it('KKP-4, Entering special characters in the "Free Local Minutes" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#local_minutes', data.specialCharacters.freeLocalMinutes);
    });

    it('KKP-4, Entering characters in the "Free Local Minutes" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#local_minutes', data.characters.freeLocalMinutes);
    });

    it('KKP-4, Entering special characters in the "Free International Minutes" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.freeInternationalMinutes, '#inter_minutes', '#message4');
    });

    it('KKP-4, Entering characters in the "Free International Minutes" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.freeInternationalMinutes, '#inter_minutes', '#message4');
    });

    it('KKP-4, Entering special characters in the "Free International Minutes" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#inter_minutes', data.specialCharacters.freeInternationalMinutes);
    });

    it('KKP-4, Entering characters in the "Free International Minutes" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#inter_minutes', data.characters.freeInternationalMinutes);
    });

    it('KKP-4, Entering special characters in the "Free SMS Pack" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.freeSMSPack, '#sms_pack', '#message5');
    });

    it('KKP-4, Entering characters in the "Free SMS Pack" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.freeSMSPack, '#sms_pack', '#message5');
    });

    it('KKP-4, Entering special characters in the "Free SMS Pack" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#sms_pack', data.specialCharacters.freeSMSPack);
    });

    it('KKP-4, Entering characters in the "Free SMS Pack" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#sms_pack', data.characters.freeSMSPack);
    });

    it('KKP-4, Entering special characters in the "Local Per Minutes Charges" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.localPerMinutesCharges, '#minutes_charges', '#message6');
    });

    it('KKP-4, Entering characters in the "Local Per Minutes Charges" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.localPerMinutesCharges, '#minutes_charges', '#message6');
    });

    it('KKP-4, Entering special characters in the "Local Per Minutes Charges" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#minutes_charges', data.specialCharacters.localPerMinutesCharges);
    });

    it('KKP-4, Entering characters in the "Local Per Minutes Charges" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#minutes_charges', data.characters.localPerMinutesCharges);
    });

    it('KKP-4, Entering special characters in the "International Per Minutes Charges" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.internationalPerMinutesCharges, '#inter_charges', '#message7');
    });

    it('KKP-4, Entering characters in the "International Per Minutes Charges" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.internationalPerMinutesCharges, '#inter_charges', '#message7');
    });

    it('KKP-4, Entering special characters in the "International Per Minutes Charges" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#inter_charges', data.specialCharacters.internationalPerMinutesCharges);
    });

    it('KKP-4, Entering characters in the "International Per Minutes Charges" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#inter_charges', data.characters.internationalPerMinutesCharges);
    });

    it('KKP-4, Entering special characters in the "SMS Per Charges" text field and checking error message', () => {
        cy.specCharsErrMessageChecking(data.specialCharacters.SMSPerCharges, '#sms_charges', '#message8');
    });

    it('KKP-4, Entering characters in the "SMS Per Charges" text field and checking error message', () => {
        cy.charsErrMessageCheking(data.characters.SMSPerCharges, '#sms_charges', '#message8');
    });

    it('KKP-4, Entering special characters in the "SMS Per Charges" text field and adding tariff plan with incorrect data', () => {
        cy.specCharsTariffPlanAdding(data.nominal, '#sms_charges', data.specialCharacters.SMSPerCharges);
    });

    it('KKP-4, Entering characters in the "SMS Per Charges" text field and adding tariff plan with incorrect data', () => {
        cy.charsTariffPlanAdding(data.nominal, '#sms_charges', data.characters.SMSPerCharges);
    });

    it('KKP-4, Adding tariff plan with empty text fields', () => {
        cy.get(':nth-child(1) > input').click()
        cy.get('#message2').should('be.visible').contains('Number must not be blank');
        cy.get('#message3').should('be.visible').contains('Number must not be blank');
        cy.get('#message4').should('be.visible').contains('Number must not be blank');
        cy.get('#message5').should('be.visible').contains('Number must not be blank');
        cy.get('#message6').should('be.visible').contains('Number must not be blank');
        cy.get('#message7').should('be.visible').contains('Number must not be blank');
        cy.get('#message8').should('be.visible').contains('Number must not be blank');
    })
})