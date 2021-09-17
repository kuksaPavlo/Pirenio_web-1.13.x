export class CheckTheFiFiWPAEncryption{
    
    checkingWPAEncryption(){
    cy.get('[class="mdc-select__selected-text"]').eq(1)//check the WPA Ecryption drop-down list for 2.4GHz
    .click()
    .get('.mdc-menu-surface--open').find('ul > li')
    .should(($lis) => {
        expect($lis).to.have.length(4)
        expect($lis.eq(0)).to.contain('NONE')
        expect($lis.eq(1)).to.contain('WPA-PSK')
        expect($lis.eq(2)).to.contain('WPA-PSK 2')
        expect($lis.eq(3)).to.contain('WPA-PSK/WPA-PSK 2 MIXED MODE')

    })
    .get('[class="mdc-select__selected-text"]').eq(3)//check the WPA Ecryption drop-down list for 5.0GHz
    .click()
    .get('.mdc-menu-surface--open').find('ul > li')
    .should(($lis) => {
        expect($lis).to.have.length(4)
        expect($lis.eq(0)).to.contain('NONE')
        expect($lis.eq(1)).to.contain('WPA-PSK')
        expect($lis.eq(2)).to.contain('WPA-PSK 2')
        expect($lis.eq(3)).to.contain('WPA-PSK/WPA-PSK 2 MIXED MODE')

    })
    }

}
export const checkTheFiFiWPAEncryption = new CheckTheFiFiWPAEncryption()