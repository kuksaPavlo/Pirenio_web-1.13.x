export class CheckingFooterUrls{
    urlsChecking(){
    cy.get('.app-link').eq(0).find('a')//cheking the href url on the footer
    .should('be.visible')
    .invoke('attr', 'href')
    .should('eq', 'https://apps.apple.com/ru/app/perenio-smart/id1373712777')
    .get('.app-link').eq(1).find('a')
    .should('be.visible')
    .invoke('attr', 'href')
    .should('eq', 'https://play.google.com/store/apps/details?id=com.perenio.smarthome')
    .get('.grid').find('div').find('a')
    .should('be.visible')
    .invoke('attr', 'href')
    .should('eq', 'http://perenio.com')
    }
}
export const chekingFooterUrls = new CheckingFooterUrls()