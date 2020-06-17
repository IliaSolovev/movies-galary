describe('should select movie', () => {
  it('should visit to home', () => {
    cy.visit('http://localhost:3000/');
  });
  it(' should select form and set form value', () => {
    cy.get('input[data-field="search-field"]').type('drama').should('have.value', 'drama');
    cy.get('button[data-button="search"]').click();
  });
  it('should select movie', () => {
    cy.get('a[href*="/movie"]').first().click();
    cy.url().should('include', '/movie');
  });
  it('should redirect from home', () => {
    cy.get('button[data-button="whiteSearch"]').contains('search').click();
  });
});

describe('should sort filter saved', () => {
  it('should visit to home', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should select filter button ', () => {
    cy.get('button[data-button="sortFilter"]').contains('release date').click().should('have.class', 'components-Button---2Gwqy'); // active class
  });
  it('should search movies', () => {
    cy.get('input[data-field="search-field"]').type('drama').should('have.value', 'drama');
    cy.get('button[data-button="search"]').contains('search').click();
  });
  it('should select movie', () => {
    cy.get('a[href*="/movie"]').first().click();
    cy.url().should('include', '/movie');
  });
  it('should redirect from home', () => {
    cy.get('button[data-button="whiteSearch"]').contains('search').click();
  });
  it('should filter saved', () => {
    cy.get('button[data-button="sortFilter"]').contains('release date').should('have.class', 'components-Button---2Gwqy'); // active class
  });
});
describe('should search filter saved', () => {
  it('should visit to home', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should select search type button', () => {
    cy.get('button[data-button="searchFilter"]').contains('title').click().should('have.class', 'components-Button---3lHdr'); // active class
  });
  it('should search movies', () => {
    cy.get('input[data-field="search-field"]').type('mad').should('have.value', 'mad');
    cy.get('button[data-button="search"]').contains('search').click();
  });
  it('should select movie and redirect from home', () => {
    cy.get('a[href*="/movie"]').first().click();
    cy.get('button[data-button="whiteSearch"]').contains('search').click();
  });
  it('should search type saved', () => {
    cy.get('button[data-button="searchFilter"]').contains('title').should('have.class', 'components-Button---3lHdr'); // active class
  });
});
