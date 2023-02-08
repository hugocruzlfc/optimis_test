describe("Frontend app", function () {
  beforeEach(function () {
    cy.request("GET", "'http://localhost:33692'");
    cy.visit("https://localhost:44409/");
  });

  describe("Landing page", () => {
    it("Header is show", function () {
      cy.contains("Welcome to the Optimism test!");
      cy.contains("We have some stains and we can create new groups associating them with the stains you want.");
    });
  });

  
  describe("Go to groups container", () => {
    it("Groups container", function () {
      cy.get("#goToGroups").click();
      cy.contains("Groups available");
    });
  });

});
