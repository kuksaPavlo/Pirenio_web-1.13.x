export class Url{

    urlToTheLoginPage(URL){
        cy.visit(URL)
    }
}
export const url = new Url()