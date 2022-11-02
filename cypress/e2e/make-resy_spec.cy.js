describe('Make Reservation flows', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      fixture: 'existing-resy.json',
    }).as('main-page');
    cy.visit('http://localhost:3000/');

    cy.get('[name="name"]').type('Noah');
    cy.get('[name="date"]').type('11/10');
    cy.get('[name="time"]').type('8:30');
    cy.get('[type="number"]').type(2);
  });

  it('Should display what user inputs in the form', () => {
    cy.get('[name="name"]').should('have.value', 'Noah');
    cy.get('[name="date"]').should('have.value', '11/10');
    cy.get('[name="time"]').should('have.value', '8:30');
    cy.get('[type="number"]').should('have.value', 2);
  });

  it('Should add a card with the user inputs to the end of the reservation list', () => {
    cy.get('.form > button').click();
    cy.contains('.name', 'Noah');
    cy.contains('.date', '11/10');
    cy.contains('.time', '8:30');
    cy.contains('.number', 2);
  });
});
