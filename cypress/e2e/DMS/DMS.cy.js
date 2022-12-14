/// <reference types="cypress" />
//const { eq } = require("cypress/types/lodash");
describe('Document Management System', () => {
    it('DMS-View', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click(); //cy.get(".grid > :nth-child(1) > .buttons > .w-full").click();
      
  
      cy.visit("http://192.168.3.39:9009/DMS/document/Index"); //cy.url().should('include', '/DMS/document/Index')    
      //cy.get('.dx-button dx-button-normal dx-button-mode-contained dx-widget dx-button-has-icon').click({force: true})
      //cy.get('.dx-icon dx-icon-plus]').click({force:true})
      cy.get('[role=button]')// & '[title=Add New]').click()
     
      cy.get('[title=Add New]').click()
      cy.log("Test Case Pass");
    });
  });