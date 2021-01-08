// https://docs.cypress.io/api/introduction/api.html

describe("App test", () => {
  it("Tests the app", () => {
    cy.visit("/");
    cy.contains("h2", "This is a home page");
    cy.get(".contact-link").click();
    cy.url().should("include", "/contact");
    cy.get(".v-input input").type("test@gmail.com");
    cy.get(".v-input input").should("have.value", "test@gmail.com");
    cy.get(".v-input textarea").type(
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    );
    cy.get(".v-input textarea").should(
      "have.value",
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    );
    cy.get("form button").first().click();
    cy.get(".v-snack__wrapper").should("be.visible");
  });
});
