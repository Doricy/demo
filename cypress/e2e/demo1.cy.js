// cypress/integration/form_test.spec.js
describe('Form Testing', () => {
  it('should fill the form, submit, and assert that everything works', () => {
    // Visit the webpage
    cy.visit('https://demoqa.com/text-box');

    // Fill the text fields
    cy.get('#userName').type('doris addai gyebi');
    cy.get('#userEmail').type('doricyj@gmail.com');
    cy.get('#currentAddress').type('Fijai Hills');
    cy.get('#permanentAddress').type('Takoradi');


    
  });
});

