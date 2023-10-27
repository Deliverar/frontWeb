describe('template spec', () => {
    /* ==== Test Created with Cypress Studio ==== */
  it('test_1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/home');
    cy.get('[href="/deepracerdashboard"] > img').click();
    cy.get('span').click({force: true});
    cy.get('.header_logo__HqFVt > img').click();
    /* ==== End Cypress Studio ==== */
  });
  it('test_2', () => {
    cy.visit('http://localhost:3000')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/home');
    cy.visit('http://localhost:3000/deepracerdashboard');
    cy.visit('http://localhost:3000/');
    /* ==== End Cypress Studio ==== */
  })
})