export class WiFiAuthenticationMethodList {

    checkingWifiAuthMet(){
        cy.get('[class="mdc-select__selected-text"]').eq(2)//check the Autheneticatio Method drop-down list for 5.0GHz
        .click()
        .get('.mdc-menu-surface--open').find('ul > li')
        .should(($lis) => {
            expect($lis).to.have.length(4)
            expect($lis.eq(0)).to.contain('AUTO')
            expect($lis.eq(1)).to.contain('Force CCMP (AES)')
            expect($lis.eq(2)).to.contain('Force TKIP')
            expect($lis.eq(3)).to.contain('Force TKIP and CCMP (AES)')
    
        })
        .get('[class="mdc-select__selected-text"]').eq(4)//check the Autheneticatio Method drop-down list for 2.4GHz
        .click()
        .get('.mdc-menu-surface--open').find('ul > li')
        .should(($lis) => {
            expect($lis).to.have.length(4)
            expect($lis.eq(0)).to.contain('AUTO')
            expect($lis.eq(1)).to.contain('Force CCMP (AES)')
            expect($lis.eq(2)).to.contain('Force TKIP')
            expect($lis.eq(3)).to.contain('Force TKIP and CCMP (AES)')
    
        })
    }

}
export const wiFiAuthenticationMethodList = new WiFiAuthenticationMethodList()