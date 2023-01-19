/// <reference types="cypress" />
describe('Project Management', () => {  
    it('Edit_Project', () => {
      var rin;
      cy.viewport(1500, 1000)
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      //cy.get('[role=presentation]').find('tr').eq(2).find('td').eq(28)
      //cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      
      // cy.get('[role=presentation]').get('[aria-colindex="3"]').contains('Draft Project').parent('td').parent('tr').as('eproj')
      // cy.get('@eproj')
      // cy.get('#ProjectListGrid .dx-datagrid-rowsview > .dx-datagrid-content-fixed .dx-data-row').eq(4).find('[aria-colindex="29"]').within(() => {
      //   cy.get('.icon-btn-only').click({force:true})
      // })
      cy.get('.dropdown-menu.show').contains('Edit').click()
      //cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      // cy.get('.update-name').then(function ($EditProject) {
      //   const Success = $EditProject.text();
      //   cy.log(Success);
      //   expect(Success).eq('Edit Project  ');
      // });

      //cy.log("Test Case Pass");
    });
  });
  