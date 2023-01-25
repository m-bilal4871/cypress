/// <reference types="cypress" />
describe('Project Management', () => {
    const CompanySLA = 'Company SLA'
    const VendorName = 'Reliance'
    it('Add Vendor SLA Title', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(2000, 1000)

      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#liDeliveries').click()
      cy.wait(5000)

      cy.get('#SLAGrid').within(() => {
        cy.get('[role=toolbar]').get('[aria-label=plus]').as('csla')
        cy.get('@csla').click({force:true})
      })
      cy.get('[data-target="AssociateSla"]').should('be.visible')

      cy.get('#Name').type(CompanySLA)

      cy.get('#SlaPriorityId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'High').click();

      cy.get('#SeverityId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'Major').click();

      cy.get('#btnsavesla').click()

      cy.get('.title').then(function ($comsla) {
        const Success = $comsla.text();
        cy.log(Success);
        expect(Success).eq('Success');
      });    
    });
  });
  