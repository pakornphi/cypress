// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import dropdowntab1 from "../Pageobject/dropdowntab1";
import login from "../Pageobject/loginpage";
import penciltab1 from "../Pageobject/penciltab1";


/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // การส่งค่าเป็นเท็จที่นี่จะป้องกัน Cypress ไม่ให้ทดสอบล้มเหลว
    return false;
  });

// cypress/support/command.js

Cypress.Commands.add('logintoidp', (username, password) => {
  
  const loginPagee = new login();
  loginPagee.visit();
  loginPagee.setUsername(username);
  loginPagee.setPassword(password);
  loginPagee.clicksubmit();
  // loginPagee.verifylogin();
});

Cypress.Commands.add('pencilfunction',(pencilpaths) => {
  const pencil = new penciltab1();
  pencil.pencilloop(pencilpaths); 
})

Cypress.Commands.add('logout', () => {
  
  cy.xpath('//*[@id="app"]/div/div/header/div/div[5]/div/div').click();
  cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)').click();
});

Cypress.Commands.add('dropdowntab1',(dropdownpaths) => {
  const dropdown = new dropdowntab1();
  dropdown.dropdown(dropdownpaths);
  
})

Cypress.Commands.add('authorization',(role) => {
  cy.fixture('role').then((roles) => {
    const user = roles[role];
    cy.logintoidp(user.username,user.password);
  })
  
})