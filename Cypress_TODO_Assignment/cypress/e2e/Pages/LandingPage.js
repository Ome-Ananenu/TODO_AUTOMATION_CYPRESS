export class LandingPage{
    navigate() {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.get("#feedback").click();
    }
    // feedbackForm() {
       
    //     cy.get("#subject");
    // }
    name(name) {
         cy.get("#name").type(name);
        
    }
    email(email) {
         cy.get("#email").type(email);
    }
    subject(subject) {
         cy.get("#subject").type(subject);
        
    }
    comment(comment) {
        cy.get("#comment").type(comment);
        
    }

    submit() {
        cy.get(".btn-signin");
    }
    clear(clear) {
        cy.get(".btn");
    }
}