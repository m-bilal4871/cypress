/// <reference types="cypress" />
const login = (name) => {
    cy.session(name, () => {
      cy.visit('http://192.168.3.39:9009/')
      cy.get('[type=text]').type(name)
      cy.get('[type=password]').type('Bilal@12345a')
      cy.get('[type=submit]').click()
      cy.url().should('contain', 'http://192.168.3.39:9009/Project/Project/List')
    })
}
describe('Project Management', () => {
    context('Set Resolution', () => {
        beforeEach(() => {
          cy.viewport(2000, 1000)
          login('m.bilal')
          cy.visit('http://192.168.3.39:9009/Project/Project/List')
        });
    it('Project Execution', () => {
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(1).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show').contains('Status').click()
    
      cy.get('#ddProjectStatus').click()
      cy.get('[role=listbox]').find('[role=option]').within(() => {
      cy.get('.statusIcon').find('[title="Executed"]').click()
      })
      cy.get('#changeProjectStatusButton').click()

      cy.get('.title').then(function ($pstatus) {
        const Success = $pstatus.text();
        cy.log(Success);
        expect(Success).eq('Success');
      });
    })
    it('Project Status Approval', () => {
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(1).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show').contains('Status').click()

      cy.get('#ddProjectStatus').click()
      cy.get('[role=listbox]').find('[role=option]').within(() => {
        cy.get('.statusIcon').find('[title="Trigger Approval"]').click()
      })
      cy.get('#changeProjectStatusButton').click()
      cy.get('.title').then(function ($pstatus) {
        const Success = $pstatus.text();
        cy.log(Success);
        expect(Success).eq('Success');
      });
    })
    it.only('Project Approval', () => {
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(1).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show').contains('Approval').click()
  
      cy.get('#ddProjectApproval').click()
      cy.get('[role=listbox]').find('[role=option]')
      cy.contains('[role=option]', 'Approved').click()
      cy.get('#devextreme8').click()
      cy.get('.title').then(function ($pstatus) {
        const Success = $pstatus.text();
        cy.log(Success);
        expect(Success).eq('Success');
      }); 

    })
    });
  });
  