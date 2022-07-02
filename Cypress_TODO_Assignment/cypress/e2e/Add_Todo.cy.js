import { Nav_keys } from "../tools/nav_keys";
const nav = new Nav_keys();

describe("Add TODO", () => {
  beforeEach("Visit the app", () => {
    nav.navigate("http://todomvc-app-for-testing.surge.sh/");
    nav.addNewTodo("My first TODO{enter}");
  });

  it("Adds a new todo to the list", () => {
    nav.addNewTodo("Go to the market{enter}");
    nav.addNewTodo("Practice some cypress{enter}");
    cy.contains("My first TODO").should("not.be.checked");
    cy.get(".toggle").should("not.be.checked");
  });

    it("Marks a todo as completed", () => {
      cy.get(".toggle").click();
      cy.get(".toggle").should("be.checked");
      //Assert that active is now empty
      nav.viewActiveTodos();
      cy.get("label").should("have.length", 0);
      //Assert that COMPLETED should have the market TODO
      nav.viewCompletedTodos();
      cy.get("label")
        .should("have.length.at.least", 1)
        .should("have.text", "My first TODO");
      //Add a new TODO and check that it is active
      cy.get(".new-todo").type("Buy some food{enter}");
      nav.viewActiveTodos();
      cy.get("label").should("not.have.text", "My first TODO");
      //Check that all todos has length of 2
      nav.viewAllTodos();
      cy.get(".view").should("have.length", 2);
    });
});
