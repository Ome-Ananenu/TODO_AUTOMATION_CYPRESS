import { Nav_keys } from "../tools/nav_keys";

const nav = new Nav_keys();

describe("Delete TODO", () => {
  beforeEach("Visit the app", () => {
    nav.navigate("http://todomvc-app-for-testing.surge.sh/");
    nav.addNewTodo("My first TODO{enter}");
    nav.addNewTodo("My second TODO{enter}");
  });

  it("Deletes a todo", () => {
    cy.get(".todo-list").find("li").should("have.length", 2);
    cy.get(".destroy").invoke("show").first().click();
    cy.get(".todo-list").find("li").should("have.length", 1);
  });
});
