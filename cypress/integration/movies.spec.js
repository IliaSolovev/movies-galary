describe('should select movie', () => {
  it('should visit to home', () => {
    cy.visit('http://localhost:3000/');
  });
  it(' should select form and set form value', () => {
    cy.get('input').type('drama').should('have.value', 'drama');
    cy.get('button').contains('search').click();
  });
  it('should select', () => {
    cy.get('a[href*="/movie"]').first().click();
    cy.url().should('include', '/movie');
  });
  it('should redirect from home', () => {
    cy.get('button').contains('search').click();
  });
});

describe('sort filter', () => {
  it('should filter saved', () => {
    it('should visit to home', () => {
      cy.visit('http://localhost:3000/');
    });
    it('should select filter button ', () => {
      cy.get('button').contains('release date').click().should('have.class', 'components-Button---2Gwqy');
    });
    it('should search movies', () => {
      cy.get('input').type('drama').should('have.value', 'drama');
      cy.get('button').contains('search').click();
    })
    it('should select movie', () => {
      cy.get('a[href*="/movie"]').first().click();
      cy.url().should('include', '/movie');
    });
    it('should redirect from home', () => {
      cy.get('button').contains('search').click();
    })
    it('should filter saved', () => {
      cy.get('button').contains('release date').should('have.class', 'components-Button---2Gwqy');
    });
  });
});
describe('search type', () => {
  it('filter should saved', () => {
    it('should visit to home', () => {
      cy.visit('http://localhost:3000/');
    });
    it('should select search type button', () => {
      cy.get('button').contains('title').click().should('have.class', 'components-Button---3lHdr'); // active class
    });
    it('should search movies', () => {
      cy.get('input').type('mad').should('have.value', 'mad');
      cy.get('button').contains('search').click();
    });
    it('should select movie and redirect from home', () => {
      cy.get('a[href*="/movie"]').first().click();
      cy.get('button').contains('search').click();
    });
    it('should search type saved', () => {
      cy.get('button').contains('title').should('have.class', 'components-Button---3lHdr'); // active class
    });
  });
});
