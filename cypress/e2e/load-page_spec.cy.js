describe('Load page flows', () => {
  it('Should be able to display existing reservations', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      fixture: 'existing-resy.json',
    }).as('main-page');
    cy.visit('http://localhost:3000/');

    cy.get('.form').should('be.visible');
    cy.get('.resy-container').children().should('have.length', 3);
  });

  it('Should show error message if data cannot be retrieved', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      forceNetworkError: true,
    }).as('error-page');
    cy.visit('http://localhost:3000/');
    cy.get('.App > :nth-child(3)').contains('Failed to fetch');
  });
});
