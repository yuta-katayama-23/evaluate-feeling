/// <reference types="cypress" />

describe('validation機能についてのテスト', () => {
    it('unable submit button when validate error and dispaly validation msg', () => {
        cy.visit('/');

        cy.get('.btn-primary')
            .click()
            .should('be.disabled');

        cy.get('.invalid-feedback')
            .should('be.visible')
            .and('have.text', 'Please input any and you can input only English of alphabet.');
    });

    it('display OK msg with inputed text and submit btn click', () => {
        cy.visit('/');

        cy.get('#txt')
            .type('i can do it.')

        cy.get('.btn-primary')
            .click()
            .should('not.be.disabled');

        cy.get('.valid-feedback')
            .should('be.visible')
            .and('have.text', 'OK');
    })
});