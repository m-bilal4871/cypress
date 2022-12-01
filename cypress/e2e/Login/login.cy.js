/// <reference types="cypress" />
//const { eq } = require("cypress/types/lodash");
describe('AVX2-Login', () => {
    it('User-Login', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
  
      cy.log("Test Case Pass");
    });
  });