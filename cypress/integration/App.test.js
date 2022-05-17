
describe('App', () => {

    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })

    it("should confirm that true is equal to true ", () => {
      expect(true).to.equal(true);
    }) 

    it("As a user, on page load I should be able to see all movies.", () => {
      cy.get(".MoviesContainer").find(".Card").should("have.length", 40)
    }) 

    it("As a user, I should be able to select a specific movie.", () => {
      cy.get(".MoviesContainer").find(".Card").first().click()
      cy.get(".MovieDetails").find(".title").contains("Money Plane")
    }) 

    it("As a user, I should be able to select a specific movie.", () => {
      cy.get(".MoviesContainer").find(".Card").last().click()
      cy.get(".MovieDetails").find(".title").contains("I Still Believe")
    }) 

    it("As a user, I should be able to return to the main page.", () => {
      cy.get(".MoviesContainer").find(".Card").first().click()
      cy.wait(3000) //Why do we need  this to make this work?
      cy.get(".siteHeader").click()
      .get(".MoviesContainer").find(".Card").should("have.length", 40)
    }) 

    it("As a user, I will recieve an error message if the server returns a error message.", () => {
      cy.intercept('Get', "http://localhost:3000", 
      {
        statusCode: 404,
        body: {
          message: "404: Client error",
        }
      })
      .request("http://localhost:3000", {failOnStatusCode: false} )
      .wait(3000)
      .get(".errorMessage").should("contain", "404: Client error")
      
    })

})