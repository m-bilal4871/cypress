/// <reference types="cypress" />
describe('Project Management', () => {  
    it('Edit_Project', () => {
      let rowIndex;
      cy.viewport(1500, 1000)
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)
      //cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="4"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      // cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      // cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      // cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      // cy.get('.update-name').should('be.visible').contains('Edit Project ');
      
      cy.get('#ProjectListGrid .dx-datagrid-rowsview .dx-scrollable-content .dx-data-row').each(($ele, index) => {
        cy.get($ele).within(() => {
          let element = cy.get('[role="gridcell"]')
          element.each(($e, i) => {
            if ($e.text().includes('PRJ-1022-00002')) {
            rowIndex = index; //logs the index
            cy.log(rowIndex)
            return false;
            }
        })
      })
    })
    cy.log(rowIndex)
    cy.get('#ProjectListGrid .dx-datagrid-rowsview > .dx-datagrid-content-fixed .dx-data-row').eq(4).find('[aria-colindex="29"]').within(() => {
    cy.get('.icon-btn-only').click({force:true})
      })

      
      //cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      //cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()

      //cy.get('.update-name').should('be.visible').contains('Edit Project ');

      // cy.get('.update-name').then(function ($EditProject) {
      //   const Success = $EditProject.text();
      //   cy.log(Success);
      //   expect(Success).eq('Edit Project  ');
      // });
      
      //cy.log("Test Case Pass");
    });
  });
  