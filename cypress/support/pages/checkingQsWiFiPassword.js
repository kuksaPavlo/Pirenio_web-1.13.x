export class CheckingQsFiFiPassword {
    checkingWiFiPassword(PASSWORD){
        cy.get('.key ').eq(2).find('div').find('i')//check the password and visibility for 5.0GHz
        .should('have.text', 'visibility')
        .click()
        .should('have.text', 'visibility_off')
        .get('.key ').eq(2).find('div').find('input')
        .should('have.value', PASSWORD)
    
        .get('.key ').eq(1).find('div').find('i')//check the password and visibility for 5.0GHz
        .should('have.text', 'visibility')
        .click()
        .should('have.text', 'visibility_off')
        .get('.key ').eq(1).find('div').find('input')
        .should('have.value', PASSWORD)  
    }
}
export const checkingQsFiFiPassword = new CheckingQsFiFiPassword()