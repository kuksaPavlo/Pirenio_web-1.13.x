export class LoginToTheRouter {
    
    
    typeLoginCredentials(LOGIN, PASSWORD){
            cy.get('input[autocomplete="username"]')
                .click()
                .type(LOGIN)
                .get('input[autocomplete="current-password"]')
                .click()
                .type(PASSWORD)
                .get('button[data-translate="login"]')
                .click()
    }

}
export const loginToTheRouter = new LoginToTheRouter()