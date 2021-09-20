///<reference types="Cypress" />

import {loginToTheRouter} from "../support/pages/authenticatorProccess"
import {url} from "../support/pages/url"
import {chekingFooterUrls} from "../support/pages/footerUrls"
import {checkingQsFiFiPassword} from "../support/pages/checkingQsWiFiPassword"
import {wiFiAuthenticationMethodList} from "../support/pages/checkingWiFiAutheneticatioMethodDropDownList"
import {checkTheFiFiWPAEncryption} from "../support/pages/checkTheWiFiWPAEncryption"


const WIFIPASSWORD = 'b8ehys4f'
const LOGINPASSWORD = 'A25kxaEc'
const USERNAME = 'root'
const ROUTERURL = '192.168.2.1'

it('CHECK THE QS ELEMENT', () => {
    url.urlToTheLoginPage(ROUTERURL); //transfer to the router GUI
    cy.wait(3000)
    loginToTheRouter.typeLoginCredentials(USERNAME, LOGINPASSWORD) //Login proccess
    //checcking the QS elements
    cy.get('button[data-interface="wifi"]', {wait:10000})
    .eq(0)
    .should('have.text', 'Wi-Fi Client Mode')
    .should('be.visible')
    .get('button[data-interface="lte"]')
    .should('have.text', '3G/4G connection')
    .should('be.visible')
    .get('button[data-interface="wifi"]')
    .eq(1)
    .should('have.text', 'Access Point Mode')
    .should('be.visible')
    .get('button[data-interface="wan"]')
    .should('have.text', 'Router Mode')
    .should('be.visible')
    .get('#skip-qs-wrapper')
    .should('have.text', '\n   \n      Skip the quick setup\n   \n')
    .should('be.visible')
    chekingFooterUrls.urlsChecking() //footer url checking (AppStore, GooglePlay, Perenio.com)
});

it('ROUTER MODE QS check the element', () => {
    url.urlToTheLoginPage('http://192.168.2.1/cgi-bin/luci/admin/quicksetup/wifi/client');
    loginToTheRouter.typeLoginCredentials(USERNAME, LOGINPASSWORD)    
    chekingFooterUrls.urlsChecking()//footer url checking (AppStore, GooglePlay, Perenio.com)
});

it('statick IP test', () => {
    url.urlToTheLoginPage('http://192.168.2.1/cgi-bin/luci/admin/quicksetup/wifi/client');
    loginToTheRouter.typeLoginCredentials(USERNAME, LOGINPASSWORD)
    cy.get('#wifi-client-link')
    .click()
    cy.wait(30000)
    // cy.get("#repeat-scan")
    // .click()
    // cy.wait(30000)
    .get('[data-name="OpenWrt"]')
    .click()
    .type('73737373')

    chekingFooterUrls.urlsChecking()//footer url checking (AppStore, GooglePlay, Perenio.com)
    cy.get('#prev')
    .should('be.visible')
    .get('#next')
    .should('be.visible')
    .click()


    .get('.mdc-dialog__content')
    .should('have.text', '\n                    Wireless configuration not found. Please perform a factory reset if the\n                    problem persists - reinstall the firmware.\n                \n\n                    Describe the problem:\n\n                    \n\n                        0 / 3000\n\n                        \n                        \n                        \n                            \n                            \n                        \n\n                    \n\n                    Please specify the approximate time when the issue happened\n\n                    \n\n                        \n\n                            \n\n                            \n\n                                \n\n                                \n                                    Date\n                                \n\n                                \n\n                            \n                        \n\n                        \n\n                            \n\n                            \n\n                                \n\n                                \n                                    Time\n                                \n\n                                \n\n                            \n\n                        \n\n                    \n\n\n                Attention! You are currently connected to "Perenio-2.4G-ACKv" Access Point of the IoT Router. It will be disabled after setting up the Wi-Fi Client Mode. Please connect your device to another Access Point of the IoT Router in order to have access to the admin panel and the Internet from your device.')
    .get('#confirm-dialog')
    .click()

    
//wi-fi section
    // .wait(5000)
    // cy.get('#mode-header')
    // .should('have.text', 'Dual Band Wi-Fi Access Point\n')//check the text "Dual Band Wi-Fi Access Point"
    // .get('#basic-switch')
    // .should('have.value', 'Standart')//check the DB tougle value
    // .get('[data-wifi-iface="default_radio0"]')//check visibility 2.4GHz section
    // .should('be.visible')
    // .get('[data-wifi-iface="default_radio1"]')//check visibility 5.0GHz section
    // .should('be.visible')
    // .get('#basic-switch')//switch-on the DB tougle 
    // .check()
    // .get('#basic-switch')//check the DB tougle value
    // .should('have.value', 'Dual')
    // .get('[data-wifi-iface="default_radio0"]')//check visibility 2.4GHz section
    // .should('be.visible')
    // .get('[data-wifi-iface="default_radio1"]')//check NOT visibility 5.0GHz section
    // .should('not.be.visible')
    // .get('#quick-setup').find('div').find('h3')
    // .should('have.text', 'If enabled, both 2.4 GHz and 5.0 GHz bands will be united in a single Wi-Fi Access Point')//check the text
    // .get('[class=wifi-mode]')
    // .should('contain.text', 'Dual Band Access Point')//check the text
    // .get('#prev') //prev button visibility
    // .should('be.visible')
    // .get('#next')//next button visibility
    // .should('be.visible')
    // .get('#basic-switch')//switch-off DB tougle 
    // .click()

    // .get('[class=wifi-mode]').eq(0)//check the 2.4 GHz band visibility
    // .should('have.text', '2.4 GHz')
    // .get('[class=wifi-mode]').eq(1)//check the 5.0 GHz band visibility
    // .should('have.text', '5 GHz')

    // .get('[data-wifi-field="ssid"]').eq(0)//check the SSID 2.4
    // .should('contain.value', 'Perenio-2.4G-')
    // .get('[data-wifi-field="ssid"]').eq(1)//check the SSID 2.4
    // .should('contain.value', 'Perenio-5G-')

    // checkTheFiFiWPAEncryption.checkingWPAEncryption()
    // wiFiAuthenticationMethodList.checkingWifiAuthMet()
    // cy.get('.mdc-menu-surface--open').find('ul > li').eq(3)
    // .should('contain.text', 'Force TKIP and CCMP (AES)')
    // .click()
    // checkingQsFiFiPassword.checkingWiFiPassword(WIFIPASSWORD)
    // chekingFooterUrls.urlsChecking()
    
    // cy.get('#next')//next button visibility
    // .click()

    // chekingFooterUrls.urlsChecking()
    // cy.get('[data-perenio-field="email"]')
    // .click()
    // .type(USERNAME, {wait:2000})
    // .get('[data-perenio-field="password"]')
    // .click()
    // .type(LOGINPASSWORD)
    // .wait(4000)
    // .get('#login')
    // .should('be.visible')
    // .click()
    // .wait(4000)
    // .get('[tabindex="2"]')
    // .should('contain.text', 'Sign Up')
    // .should('be.visible')
    // .get('#skip-iot')
    // .should('be.visible')
    // .click()

    // cy.get('[data-translate="Wi_Fi_settings_could_be_changed"]')
    // .should('have.text', 'If you have changed your Wi-Fi settings, you might need to connect to the Wi-Fi network again using your new credentials.')
    // .should('be.visible')
    // .get('#send-disconnect')
    // .should('be.visible')
    // .get('#cancel-disconnect')
    // .should('be.visible')
    // .click()
    // .wait(4000)
    // .get('#skip-iot')
    // .should('be.visible')
    // .click()

    // cy.get('[data-translate="Wi_Fi_settings_could_be_changed"]')
    // .should('have.text', 'If you have changed your Wi-Fi settings, you might need to connect to the Wi-Fi network again using your new credentials.')
    // .should('be.visible')
    // .get('#cancel-disconnect')
    // .should('be.visible')
    // .get('#send-disconnect')
    // .should('be.visible')
    // .click()
    
    // cy.location('pathname', { timeout: 40000 }).should('eq', '/cgi-bin/luci/');

});
