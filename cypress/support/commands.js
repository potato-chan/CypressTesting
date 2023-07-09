// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "./addCustomerCommands";
import "./addTariffPlansCommands";
import "./paymentGatewayCommands";
import "./loginCommands";

Cypress.Commands.add('iframeSkip', () => {
    cy.wait(2000)
    cy.get("body").then($body => {
    if ($body.find("#gdpr-consent-notice").length > 0) {   
        cy.wait(1000)
        cy.get('#gdpr-consent-notice')
        .then(function($iframe){
            let iframeBody = $iframe.contents().find('body');
            cy.wrap(iframeBody).find('#save').click()
        })
    }
    })
})