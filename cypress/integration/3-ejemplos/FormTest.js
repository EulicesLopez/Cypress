describe("Mi primer formulario test", () => {
  beforeEach(() => {
    //cy.visit('https://forms.gle/ykELGaL3n76XHfNWA')
    cy.log("Foredskdskdks");
  });

  it("completando el formulario", () => {
    cy.visit("https://formy-project.herokuapp.com/form");
    cy.get("#first-name").type("Eulices jo");
    cy.get("#last-name").type("Lopez");
    cy.get('[placeholder="Enter last name"]').type(" Pintado");
    cy.get("#job-title").type("QA Automation");
    cy.get("#radio-button-3").click();
  
    cy.get("#checkbox-1").click();
    cy.get("#select-menu").select("2-4");
    var f = new Date();
    let fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

    cy.get("#datepicker").type(fecha);

   // cy.pause()
   cy.debug()
    cy.log("click antes del login")
   
   // cy.get('.btn').debug()
    cy.get('.btn').click()
   
    //cy.screenshot()

    cy.get('.alert').should('have.text', '\n  The form was successfully submitted!\n')
    cy.get('.alert')
    .should('have.css','background-color','rgb(212, 237, 218)')
    .should('have.css','font-size','16px')



  });
});
