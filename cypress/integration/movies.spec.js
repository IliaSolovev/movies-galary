describe("select movie", () => {
	it("visit to localhost",() => {
		cy.visit("http://localhost:3000/");
	});
	it("select form and write text",() => {
		cy.get("input").type("drama").should("have.value","drama");
		cy.get("button").contains("search").click();
	});
	it("select",() => {
		cy.get("a[href*=\"/movie\"]").first().click();
		cy.url().should("include", "/movie");
	});
	it("go home", () => {
		cy.get("button").contains("search").click();
	});
});

describe("filter ",() => {
	it("filter should saved",() => {
		cy.visit("http://localhost:3000/");
		cy.get("button").contains("release date").click().should("have.class","components-MovieSortFilter-FilterButton-filterButton-module__button_active--zrPCE");
		cy.get("input").type("drama").should("have.value","drama");
		cy.get("button").contains("search").click();
		cy.get("a[href*=\"/movie\"]").first().click();
		cy.get("button").contains("search").click();
		cy.get("button").contains("release date").should("have.class","components-MovieSortFilter-FilterButton-filterButton-module__button_active--zrPCE");
	});
});
describe("search type",() => {
	it("filter should saved",() => {
		cy.visit("http://localhost:3000/");
		cy.get("button").contains("title").click().should("have.class","components-SearchMovieForm-SearchMovieFilters-SearchMovieFiltersButton-searchMovieFiltersButton-module__button_active--wAITI");
		cy.get("input").type("mad").should("have.value","mad");
		cy.get("button").contains("search").click();
		cy.get("a[href*=\"/movie\"]").first().click();
		cy.get("button").contains("search").click();
		cy.get("button").contains("title").should("have.class","components-SearchMovieForm-SearchMovieFilters-SearchMovieFiltersButton-searchMovieFiltersButton-module__button_active--wAITI");
	});
});
