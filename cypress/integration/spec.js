/// <reference types="cypress" />
describe('page', () => {
  it('does not fire an onChange event when there is no change in a select element', () => {
    cy.visit('https://yishaiberg.github.io/cypress-onchange-bug/');
    cy.get('.ice-cream').select('Chocolate');
    cy.get('.result').should('have.text', 'Number of times onChange event fired: 1')
    // Select the option that is already selected - onChange event should not fire.
    cy.get('.ice-cream').select('Chocolate');
    cy.get('.result').should('have.text', 'Number of times onChange event fired: 1')
  })
})
