describe('Make Reservation flows', () => {
  it('Should add new reservation that will appear on the page', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      fixture: 'existing-resy.json',
    }).as('main-page');
    cy.visit('http://localhost:3000/');

    cy.get('[name="name"]').type('Noah');
    cy.get('[name="date"]').type('11/10');
    cy.get('[name="time"]').type('8:30');
    cy.get('[type="number"]').type(2);
    cy.get('.form > button').click();
    cy.get('.resy-container').children().should('have.length', 4);
  });
});
