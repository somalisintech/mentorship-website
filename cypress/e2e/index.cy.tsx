describe('Navigation', { browser: 'chrome' }, () => {
  it('should display page text for each page', () => {
    cy.visit('/');
    cy.contains('landing page', { matchCase: false });

    cy.visit('/about');
    cy.contains('about page', { matchCase: false });

    cy.visit('/mentors');
    cy.contains('mentors page', { matchCase: false });

    cy.visit('/profile');
    cy.contains('user profile page', { matchCase: false });
  });
});
