/// <reference types="cypress" />
describe('Project Management', () => {
    it('Edit_Project', () => {
      const ClientSLA = 'Client SLA'
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(1500, 700)

      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#liCient').click()
      cy.wait(5000)

      cy.get('#SLAGrid').within(() => {
        cy.get('[role=toolbar]').get('[aria-label=plus]').as('csla')
        cy.get('@csla').click({force:true})
      })
      cy.get('[data-target="AssociateSla"]').should('be.visible')

      cy.get('#Name').type(ClientSLA)
      cy.get('#SlaPriorityId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'High').click();
      cy.get('#SeverityId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'Major').click();

      cy.get('#btnsavesla').click()

      cy.get('.title').then(function ($clientsla) {
        const Success = $clientsla.text();
        cy.log(Success);
        expect(Success).eq('Success');
      });

      cy.get('[data-target="AssociateDeliverable"]').click()
      cy.get('#SlaDeliverableGrid').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })

      cy.get('#frmSlaDeliverableInfo').should('be.visible')
      
      cy.get('#Name').type('Client Deliverable')
      








      //cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()

    //   cy.get('.dx-error-message').then(($msg)=> {
    //     const t = $msg.text();
    //     if(t.includes('already')){
    //     expect(t).to.contains('Custom Field is already associated.');
    //     cy.log('Test Pass')
    //     cy.get('[src="/Theme/AirViewX/images/general_icons/undo.svg"]').click()
    //     }
    //   });
    
    });
  });
  