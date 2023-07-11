const data = require('../../fixtures/payment_gateway_data');

describe('Payment Process page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/index.php`)
    cy.iframeSkip();
  })

  it('KKP-10, The allowed length is exceeded for all text fields', () => {
    cy.dropdown(data.baseURL);

    cy.get('#card_nmuber')
    .type(data.moreThanMax.cardNumber);

    cy.get('#card_nmuber')
    .should('not.have.value', data.moreThanMax.cardNumber);

    cy.get('#cvv_code')
    .type(data.moreThanMax.cvv);

    cy.get('#cvv_code')
    .should('not.have.value', data.moreThanMax.cvv);
  })

  it('KKP-10, Entering characters, special characters and too short card number in the "Card Number" text field and checking error message', () => {
    cy.dropdown(data.baseURL);

    cy.log('Entering characters in the "Card Number"');
    cy.errorMessageChekingForOneField('#card_nmuber', data.incorrect.cardNumber[0], '#message1', data.errMessage.chars);

    cy.log('Entering special characters in the "Card Number"');
    cy.errorMessageChekingForOneField('#card_nmuber', data.incorrect.cardNumber[1], '#message1', data.errMessage.specChars);

    cy.log('Entering too short card number in the "Card Number"');
    cy.errorMessageChekingForOneField('#card_nmuber', data.incorrect.cardNumber[2], '#message1', data.errMessage.card);
  })

  it('KKP-10, Entering characters in the "Card Number" text field and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#card_nmuber", data.incorrect.cardNumber[0], data.nominal.month, data.nominal.year)
  })

  it('KKP-10, Entering special characters in the "Card Number" text field and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#card_nmuber", data.incorrect.cardNumber[1], data.nominal.month, data.nominal.year)
  })

  it('KKP-10, Entering too short card number in the "Card Number" text field and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#card_nmuber", data.incorrect.cardNumber[2], data.nominal.month, data.nominal.year)
  })

  it('KKP-10, Entering characters, special characters and too short CVV code in the "CVV Code" text field and checking error message', () => {
    cy.dropdown(data.baseURL);

    cy.log('Entering characters in the "CVV Code"');
    cy.errorMessageChekingForOneField('#cvv_code', data.incorrect.cvv[0], '#message2', data.errMessage.chars);

    cy.log('Entering special characters in the "CVV Code"');
    cy.errorMessageChekingForOneField('#cvv_code', data.incorrect.cvv[1], '#message2', data.errMessage.specChars);

    cy.log('Entering too short CVV code in the "CVV Code"');
    cy.errorMessageChekingForOneField('#cvv_code', data.incorrect.cvv[2], '#message2', data.errMessage.cvv);
  })

  it('KKP-10, Entering characters in the "CVV Code" text field and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#cvv_code", data.incorrect.cvv[0], data.nominal.month, data.nominal.year)
  })

  it('KKP-10, Entering special characters in the "CVV Code" text field and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#cvv_code", data.incorrect.cvv[0], data.nominal.month, data.nominal.year)
  })

  it('KKP-10, Entering too short CVV code in the "CVV Code" text field and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#cvv_code", data.incorrect.cvv[0], data.nominal.month, data.nominal.year)
  })

  it('KKP-10, Select the expired month in the "Expiration Month" dropdown and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#card_nmuber", data.nominal.cardNumber, data.incorrect.month, data.min.year)
  })

  it('KKP-10, Select the expired year in the "Expiration Year" dropdown and make purchase', () => {
    cy.dropdown(data.baseURL);
    cy.makePurchaseWithIncorrectData(data.nominal, "#card_nmuber", data.nominal.cardNumber, data.nominal.month, data.incorrect.year)
  })

  it('KKP-10, Payment execution with empty text fields and drop-downs', () => {
    cy.dropdown(data.baseURL);
    cy.window()
    .then((win) => {
        const alertStub = cy.stub(win, 'alert');
        cy.get('.button')
        .click()
        .then(() => {
            expect(alertStub).to.be.calledOnce;
            const alertText = alertStub.getCall(0).args[0];
            expect(alertText).to.equal('Check card number is 16 digits!');
        })
    })   
  })
})