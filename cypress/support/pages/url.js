export class Url{

    urlToTheLoginPage(url){
        cy.visit('192.168.2.1')
    }
}
export const url = new Url()