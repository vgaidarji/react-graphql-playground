describe("Web application", () => {
  it("should load all pages and content successfully", () => {
    // visit root page
    cy.visit("http://localhost:3000/");

    // find load button and navigate to countries page
    cy.get('*[class^="App"]').contains("load countries", { matchCase: false }).click();

    // confirm countries data is populated successfully
    cy.url().should("include", "/countries");
    // verify Moldova row is present and click on the row
    cy.get("table").contains("tr", "Moldova").should("be.visible").click();

    // confirm Moldova country page loaded and data is populated successfully
    cy.url().should("include", "/countries/MD");
    // verify country name is shown
    cy.contains("Moldova");
    cy.contains("🇲🇩");
  });
});
