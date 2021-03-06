describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(3000);
  });

  it("should confirm that true is equal to true ", () => {
    expect(true).to.equal(true);
  });

  it("As a user, on page load I should be able to see all movies.", () => {
    cy.get(".MoviesContainer").find(".Card").should("have.length", 40);
  });

  it("As a user, I should be able to select a specific movie. (first)", () => {
    cy.get(".MoviesContainer").find(".Card").first().click();
    cy.get(".MovieDetails").find(".title").contains("Money Plane");
  });

  it("As a user, I should be able to select a specific movie. (last)", () => {
    cy.get(".MoviesContainer").find(".Card").last().click();
    cy.get(".MovieDetails").find(".title").contains("I Still Believe");
  });

  it("As a user, I should be able to return to the main page.", () => {
    cy.get(".MoviesContainer").find(".Card").first().click();
    cy.go("back")
      .get(".MoviesContainer")
      .find(".Card")
      .should("have.length", 40);
  });

  it("As a user, I will receive an error message if the server returns a 404.", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { statusCode: 404, body: "Cypress forced 404" }
    );
    cy.visit("http://localhost:3000")
      .wait(3000)
      .get(".errorMessage")
      .should("contain", "404: Client error");
  });

  it("As a user, I will receive an error message if the server returns a 500.", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { statusCode: 500, body: "Cypress forced 500" }
    );
    cy.visit("http://localhost:3000")
      .wait(3000)
      .get(".errorMessage")
      .should("contain", "500: Server error");
  });
});
