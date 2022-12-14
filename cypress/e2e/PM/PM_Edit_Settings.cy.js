/// <reference types="cypress" />
describe('Project Management', () => {
    it('Edit_Project', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');
      cy.get('#lnkSettings').click()
      //Time Zine Selection//
      cy.get('#TimeZoneId').then(($TimeZone) => {
        if ($TimeZone.is(':disabled')) {
          cy.log('Time Zone is disabled')
        }
        else {
          cy.get('#TimeZoneId').clear().type('Karachi')
          cy.get('[role="listbox"]').should('be.visible').contains('[role=option]', 'Karachi').click()
          cy.log('TimeZone is Enabled')
        }
      });

      cy.get('#Color').click()
      cy.get('#TicketName').click()
      //cy.title('eq', 'Calendar').click()
      cy.get('h4').contains('General').click()
      cy.get('h4').contains('Calendar').click()
      ///////////////////////////////////////
      cy.get('#Sunday').then(($sun) => {
        if ($sun.is(':check')) {
          cy.get('#Sunday').uncheck(['Sunday'])
          cy.log('pass')
        }
        else {          
          cy.get('#Sunday').check(['Sunday'])
        }
      });
      /////////////////////////////////////////
      cy.log('Pass')

    });
  });
  