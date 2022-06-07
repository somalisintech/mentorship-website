describe('Navigation', { browser: 'chrome' }, () => {
  it('should navigate to the home page', () => {
    cy.visit('/');

    cy.get('h1').contains(/hello world/i);
  });
});

export {};
