///<reference types="Cypress" />
import {loginToTheRouter} from "../support/pages/authenticatorProccess"
import {url} from "../support/pages/url"
import {chekingFooterUrls} from "../support/pages/footerUrls"
import {checkingQsFiFiPassword} from "../support/pages/checkingQsWiFiPassword"
import {wiFiAuthenticationMethodList} from "../support/pages/checkingWiFiAutheneticatioMethodDropDownList"

it('', () => {
    url.urlToTheLoginPage('192.168.2.1');
    cy.wait(3000)
    loginToTheRouter.typeLoginCredentials('root', 'A25kxaEc')
    cy.get('button[data-interface="wifi"]')
    .eq(0)
    .should('have.text', 'Wi-Fi Client Mode')
    .get('button[data-interface="lte"]')
    .should('have.text', '3G/4G connection')
    .get('button[data-interface="wifi"]')
    .eq(1)
    .should('have.text', 'Access Point Mode')
    .get('button[data-interface="wan"]')
    .should('have.text', 'Router Mode')
})

it('ROUTER MODE QS check the element', () => {
    url.urlToTheLoginPage('http://192.168.2.1/cgi-bin/luci/admin/quicksetup/wan');
    loginToTheRouter.typeLoginCredentials('root', 'A25kxaEc')
    cy.get('button[data-interface="wan"]')
    .should('be.visible')
    .click();
    cy.get('button[data-setting="dynamic-ip"]')
    .should('have.text', 'Dynamic IP')
    .get('button[data-setting="static-ip"]')
    .should('have.text', 'Static IP')
    cy.get('button[data-setting="ppoe"]')
    .should('have.text', ' PPPoE ')
    cy.get('button[data-setting="pptp"]')
    .should('have.text', ' PPTP ')
    cy.get('button[data-setting="l2tp"]')
    .should('have.text', ' L2TP ')

})
it.only('', () => {
    url.urlToTheLoginPage('http://192.168.2.1/cgi-bin/luci/admin/quicksetup/wan');
    loginToTheRouter.typeLoginCredentials('root', 'A25kxaEc')
    cy.get('button[data-interface="wan"]')
    .should('be.visible')
    .click();
    cy.get('button[data-setting="dynamic-ip"]')
    .should('be.visible')
    .click();
    cy.wait(17000)
    .get('#ipaddr')
    .should('contain.text', '192.168.')
    .get('#dns1')
    .should('contain.text', '192.168.')
    .get('#dns2')
    .should('contain.text', '')
    .get('#gateway')
    .should('contain.text', '192.168.')
    .get('#prev')
    .should('be.visible')
    .get('#next')
    .should('be.visible')
    .click()
//wi-fi section
    .wait(5000)
    cy.get('#mode-header')
    .should('have.text', 'Dual Band Wi-Fi Access Point\n')//check the text "Dual Band Wi-Fi Access Point"
    .get('#basic-switch')
    .should('have.value', 'Standart')//check the DB tougle value
    .get('[data-wifi-iface="default_radio0"]')//check visibility 2.4GHz section
    .should('be.visible')
    .get('[data-wifi-iface="default_radio1"]')//check visibility 5.0GHz section
    .should('be.visible')
    .get('#basic-switch')//switch-on the DB tougle 
    .check()
    .get('#basic-switch')//check the DB tougle value
    .should('have.value', 'Dual')
    .get('[data-wifi-iface="default_radio0"]')//check visibility 2.4GHz section
    .should('be.visible')
    .get('[data-wifi-iface="default_radio1"]')//check NOT visibility 5.0GHz section
    .should('not.be.visible')
    .get('#quick-setup').find('div').find('h3')
    .should('have.text', 'If enabled, both 2.4 GHz and 5.0 GHz bands will be united in a single Wi-Fi Access Point')//check the text
    .get('[class=wifi-mode]')
    .should('contain.text', 'Dual Band Access Point')//check the text
    .get('#prev') //prev button visibility
    .should('be.visible')
    .get('#next')//next button visibility
    .should('be.visible')
    .get('#basic-switch')//switch-off DB tougle 
    .click()

    .get('[class=wifi-mode]').eq(0)//check the 2.4 GHz band visibility
    .should('have.text', '2.4 GHz')
    .get('[class=wifi-mode]').eq(1)//check the 5.0 GHz band visibility
    .should('have.text', '5 GHz')

    .get('[data-wifi-field="ssid"]').eq(0)//check the SSID 2.4
    .should('contain.value', 'Perenio-2.4G-')
    .get('[data-wifi-field="ssid"]').eq(1)//check the SSID 2.4
    .should('contain.value', 'Perenio-5G-')

    // .get('[class="mdc-select__selected-text"]').eq(0)//LENGUAGE
    // .click({force: true})
    // .get('[aria-expanded]')
    // .should('have.value', 'true')

    .get('[class="mdc-select__selected-text"]').eq(1)//check the WPA Ecryption drop-down list for 2.4GHz
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
   
    wiFiAuthenticationMethodList.checkingWifiAuthMet()
    checkingQsFiFiPassword.checkingWiFiPassword('b8ehys4f')
    chekingFooterUrls.urlsChecking()
    

    cy.get('#next')//next button visibility
    .click()

})

    




// it('request', () => {

// const requestBody = {method: "getSimStatus"}


//     cy.request({
//         method: 'POST',
//         url: 'http://192.168.2.1/cgi-bin/luci/admin/api/v1/modem',
//         body: requestBody,
//         headers: '',
//     })
//         .then((response)=>{
//             console.log(response);
//         })
// })



















//******************QS ROUTER MODE*********************** */

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
// it('redirect to the ROURE MODE qs page', () => {
//     cy.visit('http://192.168.2.1/cgi-bin/luci/admin/quicksetup/wan');
       
// })
// it('Check the Router Mode element exists', () => {
//     cy.wait(4000)
//     .get('button[data-setting="dynamic-ip"]')
//     .get('button[data-setting="static-ip"]')
//     .get('button[data-setting="ppoe"]')
//     .get('button[data-setting="pptp"]')
//     .get('button[data-setting="l2tp"]')
//     .get('button[onclick="window.history.back();"]')
// })

//******************Dashboard**************** */