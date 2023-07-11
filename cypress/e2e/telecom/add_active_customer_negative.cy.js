const data = require('../../fixtures/add_customer_data');


describe('Add Customer page', () => {
  beforeEach(() => {
    cy.visit(`${data.baseURL}/addcustomer.php`)
    cy.iframeSkip();
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('v6 is not defined')) {
          return false
      }
    })
  })

  it('KKP-7, The allowed length is exceeded for all text fields', () => {
    cy.get(':nth-child(1) > label').click();
    cy.addCustomerFieldsFilling(data.moreThanMax);

    cy.get('#fname')
    .should('not.have.value', data.moreThanMax.firstName);

    cy.get('#lname')
    .should('not.have.value', data.moreThanMax.lastName);

    cy.get('#email')
    .should('not.have.value', data.moreThanMax.email);

    cy.get(':nth-child(7) > #message')
    .should('not.have.value', data.moreThanMax.address);

    cy.get('#telephoneno')
    .should('not.have.value', data.moreThanMax.mobileNumber);
  })

  it('KKP-7, Entering numbers, special characters and non-Latin letters in the "FirstName" text field and checking error message', () => {
    cy.log('Entering numbers in the "FirstName"');
    cy.errorMessageChekingForOneField('#fname', data.incorrect.lastName[0], '#message', data.errMessage.nums);

    cy.log('Entering special characters in the "FirstName"');
    cy.errorMessageChekingForOneField('#fname', data.incorrect.lastName[1], '#message', data.errMessage.specChars);

    cy.log('Entering non-Latin letters in the "FirstName"');
    cy.errorMessageChekingForOneField('#fname', data.incorrect.lastName[2], '#message', data.errMessage.nonLatin);
  })

  it('KKP-7, Entering numbers in the "FirstName" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#fname", data.incorrect.firstName[0])
  })

  it('KKP-7, Entering special characters in the "FirstName" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#fname", data.incorrect.firstName[1])
  })

  it('KKP-7, Entering non-Latin letters in the "FirstName" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#fname", data.incorrect.firstName[2])
  })

  it('KKP-7, Entering numbers, special characters and non-Latin letters in the "LastName" text field and checking error message', () => {
    cy.log('Entering numbers in the "LastName"');
    cy.errorMessageChekingForOneField('#lname', data.incorrect.firstName[0], '#message50', data.errMessage.nums);

    cy.log('Entering special characters in the "LastName"');
    cy.errorMessageChekingForOneField('#lname', data.incorrect.firstName[1], '#message50', data.errMessage.specChars);

    cy.log('Entering non-Latin letters in the "LastName"');
    cy.errorMessageChekingForOneField('#lname', data.incorrect.firstName[2], '#message50', data.errMessage.nonLatin);
  })

  it('KKP-7, Entering numbers in the "LastName" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#lname", data.incorrect.lastName[0])
  })

  it('KKP-7, Entering special characters in the "LastName" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#lname", data.incorrect.lastName[1])
  })

  it('KKP-7, Entering non-Latin letters in the "LastName" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#lname", data.incorrect.lastName[2])
  })

  it('KKP-7, Entering data without "@" and "." special characters in the "Email" text field and checking error message', () => {
    cy.log('Entering data without "@" special character in the "Email"');
    cy.errorMessageChekingForOneField('#email', data.incorrect.email[0], '#message9', data.errMessage.email);

    cy.log('Entering data without "." special character in the "Email"');
    cy.errorMessageChekingForOneField('#email', data.incorrect.email[1], '#message9', data.errMessage.email);
  })

  it('KKP-7, Entering data without "@" special character in the "Email" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#email", data.incorrect.email[0])
  })

  it('KKP-7, Entering data without "." special character in the "Email" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#email", data.incorrect.email[0])
  })

  it('KKP-7, Entering data with non-Latin characters in the "Address" text field and checking error message', () => {
    cy.errorMessageChekingForOneField(':nth-child(7) > #message', data.incorrect.address[0], '#message3', data.errMessage.nonLatin);
  })

  it('KKP-7, Entering data with non-Latin characters in the "Address" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, ":nth-child(7) > #message", data.incorrect.address[0])
  })

  it('KKP-7, Entering characters, special characters, number without "+" special character and number with length less than 12 characters in the "Mobile Number" text field and checking error message', () => {
    cy.log('Entering characters in the "Mobile Number"');
    cy.errorMessageChekingForOneField('#telephoneno', data.incorrect.mobileNumber[0], '#message7', data.errMessage.chars);

    cy.log('Entering special characters in the "Mobile Number"');
    cy.errorMessageChekingForOneField('#telephoneno', data.incorrect.mobileNumber[1], '#message7', data.errMessage.specChars);

    cy.log('Entering number without "+" special character in the "Mobile Number"');
    cy.errorMessageChekingForOneField('#telephoneno', data.incorrect.mobileNumber[2], '#message7', data.errMessage.mobile);

    cy.log('Entering number with length less than 12 characters in the "Mobile Number"');
    cy.errorMessageChekingForOneField('#telephoneno', data.incorrect.mobileNumber[3], '#message7', data.errMessage.mobile);
  })

  it('KKP-7, Entering characters in the "Mobile Number" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#telephoneno", data.incorrect.mobileNumber[0])
  })

  it('KKP-7, Entering special characters in the "Mobile Number" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#telephoneno", data.incorrect.mobileNumber[1])
  })

  it('KKP-7, Entering number without "+" special character in the "Mobile Number" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#telephoneno", data.incorrect.mobileNumber[2])
  })

  it('KKP-7, Entering number with length less than 12 characters in the "Mobile Number" text field and adding customer with incorrect data', () => {
    cy.addCustomerWithIncorrectData(data.nominal, "#telephoneno", data.incorrect.mobileNumber[3])
  })

  it('KKP-7, Adding an active customer with empty text fields', () => {
    cy.window()
    .then((win) => {
      const alertStub = cy.stub(win, 'alert');
      cy.get(':nth-child(1) > label')
      .click();

      cy.get('#main input[type=submit]')
      .click()
      .then(() => {
          expect(alertStub).to.be.calledOnce;
          const alertText = alertStub.getCall(0).args[0];
          expect(alertText).to.equal('please fill all fields');
      })
    });

    cy.get('#message')
    .should('be.visible')
    .contains(`FirstName ${data.blank}`);

    cy.get('#message50')
    .should('be.visible')
    .contains(`LastName ${data.blank}`);

    cy.get('#message9')
    .should('be.visible')
    .contains(`Email ${data.blank}`);

    cy.get('#message3')
    .should('be.visible')
    .contains(`Address ${data.blank}`);

    cy.get('#message7')
    .should('be.visible')
    .contains(`Mobile number ${data.blank}`);   
  })
})
