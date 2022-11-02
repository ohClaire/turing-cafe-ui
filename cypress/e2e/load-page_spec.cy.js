describe('Load page flows', () => {
  it('Should be able to display existing reservations', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      fixture: 'existing-resy.json',
    }).as('main-page');
    cy.visit('http://localhost:3000/');

    cy.get('.form').should('be.visible');
    cy.get('.resy-container').children().should('have.length', 3);
    cy.contains('.name', 'Hannah');
    cy.contains('.date', '12/29');
    cy.contains('.time', '7:00');
    cy.contains('.number', 10);
    cy.contains('.name', 'Courtney');
    cy.contains('.date', '4/5');
    cy.contains('.time', '7:00');
    cy.contains('.number', 5);
    cy.contains('.name', 'Pam');
    cy.contains('.date', '1/21');
    cy.contains('.time', '6:00');
    cy.contains('.number', 6);
  });

  it('Should show error message if data cannot be retrieved', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      forceNetworkError: true,
    }).as('error-page');
    cy.visit('http://localhost:3000/');
    cy.get('.App > :nth-child(3)').contains('Failed to fetch');
  });
});
