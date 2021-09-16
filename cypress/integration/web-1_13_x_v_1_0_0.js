///<reference types="Cypress" />
import {loginToTheRouter} from "../support/pages/authenticatorProccess"
import {url} from "../support/pages/url"


it('Visit the login page', () => {
    url.urlToTheLoginPage('192.168.2.1');
    cy.wait(3000)
})

it('login', () => {
    loginToTheRouter.typeLoginCredentials('root', 'A25kxaEc')
})

it('WI-FI CLIENT MODE QS check the element', () => {
    cy.get('button[data-interface="wifi"]')
    .eq(0)
    .should('have.text', 'Wi-Fi Client Mode')
})
it('3G/4G CONNECTION QS check the element', () => {
    cy.get('button[data-interface="lte"]')
    .should('have.text', '3G/4G connection')
})
it('ACCESS POINT MODE QS check the element', () => {
    cy.get('button[data-interface="wifi"]')
    .eq(1)
    .should('have.text', 'Access Point Mode')
})
it('ROUTER MODE QS check the element', () => {
    cy.get('button[data-interface="wan"]')
    .should('have.text', 'Router Mode')
})
it('can modify the window prior to page load on all pages', () => {
    // create the stub here
    const ga = cy.stub().as('ga')
  
    // prevent google analytics from loading
    // and replace it with a stub before every
    // single page load including all new page
    // navigations
    cy.on('window:before:load', (win) => {
      Object.defineProperty(win, 'ga', {
        configurable: false,
        get: () => ga, // always return the stub
        set: () => {}, // don't allow actual google analytics to overwrite this property
      })
    })
  
    cy
      // window:before:load will be called here
      .visit('http://192.168.2.1/cgi-bin/luci/admin/quicksetup')
  
      .then((win) => {
        // and here
        win.location.href = 'http://192.168.2.1/cgi-bin/luci/admin/quicksetup/wan'
      })
  
      // and here
      .get('button[data-setting="dynamic-ip"]')
      .click()
  })
it('ROUTER MODE QS check the element', () => {
    cy.get('button[data-interface="wan"]')
    .should('be.visible')
    .click();
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