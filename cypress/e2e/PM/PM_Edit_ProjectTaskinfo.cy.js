/// <reference types="cypress" />
describe('Project Management', () => {
  context('Set Resolution', () => {
    beforeEach(() => {
      cy.viewport(2000, 1000)
    })
  it('Edit Project Task Info', () => {
    cy.visit("http://192.168.3.39:9009/");
    cy.get('[type=text]').type("m.bilal");
    cy.get('[type=password]').type("Bilal@12345a");
    cy.get('[type=submit]').click();
    cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
    cy.wait(4000)      
    cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
    cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project ');
    cy.get('#lnkPTLClick').click()
    cy.wait(10000)
      
    cy.get('#workSpace').within(() => {
      cy.get('.teamworkIcon').contains('R').click({force:true})
    })
      
    cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
      cy.wait(3000)
      cy.get('.timelineTaskNameTemplate')
        .find('[title=Edit]').click()
    })

    cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
    
    cy.get('#ProjectTask_Priority').click()
    cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'High').click();

    cy.get('#SeverityId').click()
    cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'Major').click();

    cy.get('#btn_Task_Save').click()

    cy.get('.title').then(function ($ptaskinfo) {
      const Success = $ptaskinfo.text();
      cy.log(Success);
      expect(Success).eq('Success');
    });
    cy.log('Project Task updated successfully')
    // cy.reload(true)
    // cy.wait(10000)
  }); 

  // ----Edit Project Task Custom Fields
  it('Edit Project Task Custom Fields', () => {
    //cy.reload(true)
    cy.get('#lnkPTLClick').click()
    
    cy.get('#workSpace').within(() => {
      cy.get('.teamworkIcon').contains('R').click({force:true})
    })
      
    cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
      cy.wait(3000)
      cy.get('.timelineTaskNameTemplate')
        .find('[title=Edit]').click()
    })
    
    //cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
    // cy.get('#lnkprjtskcustomfield').click()
    // cy.get('#gridContainer').within(() => {
    //   cy.get('[role=toolbar]').contains('Add a row').click({force:true})
    // })
    // cy.wait(3000)
    // cy.get('[role=presentation]')
    // cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).as('fieldtype')
    // cy.get('@fieldtype').click()
    // cy.get('[role=listbox]').should('be.visible');
    // cy.get('[role=option]').should('be.visible');
    // cy.contains('[role=option]', 'Text').click();
  
    // cy.get('[role=presentation]').find('[role=row]').find('td').get('[role=gridcell]').eq(4).click()
    // cy.get('[role=listbox]').should('be.visible');
    // cy.get('[role=option]').should('be.visible');
    // cy.contains('[role=option]', 'Text').click();
    // cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()
      
    // cy.get('.title').then(function ($pcustomfield) {
    //   const Success = $pcustomfield.text();
    //   cy.log(Success);
    //   expect(Success).eq('Success');
    // }); 
    // cy.log('Project Task Custom Fields added successfully') 
  }); 
  })
});