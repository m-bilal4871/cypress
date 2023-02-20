/// <reference types="cypress" />
describe('Project Management', () => {
    it('Add Global and Local Task on Timeline', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(2000, 1000)

      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#lnkPTLClick').click()
      cy.wait(5000)
      
      cy.get('#workSpace').within(() => {
        cy.get('.teamworkIcon').contains('R').click({force:true})
      })

      cy.wait(3000)
      cy.get('#TWGanttArea').scrollTo('right')

      cy.get('#TWGanttArea')
        .find('.taskEditRow')
        .eq(1)
        .find('td.timeline_status ').as('task')
      cy.get('@task').drag('.droppableBadges', 'In Review')

    //   cy.get('.title').then(function ($vendorsla) {
    //     const Success = $vendorsla.text();
    //     cy.log(Success);
    //     expect(Success).eq('Success');
    //   }); 
    //   cy.log('Global Task added successfully')
 
    });       
  });