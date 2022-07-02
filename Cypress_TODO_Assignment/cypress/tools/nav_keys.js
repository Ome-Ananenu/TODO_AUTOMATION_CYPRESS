export class Nav_keys {
  all_todos_btn = ":nth-child(1) > a";
  active_todos_btn = ":nth-child(2) > a";
  completed_todos_btn = ":nth-child(3) > a";
  input_field = ".new-todo";

  navigate(url) {
    cy.visit(url);
  }

  viewAllTodos() {
    cy.get(this.all_todos_btn).click();
  }

  viewActiveTodos() {
    cy.get(this.active_todos_btn).click();
  }

  viewCompletedTodos() {
    cy.get(this.completed_todos_btn).click();
  }

  addNewTodo(text) {
    cy.get(this.input_field).type(text);
  }

 
}
