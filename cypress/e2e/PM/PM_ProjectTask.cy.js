/// <reference types="cypress" />
const login = (name) => {
    cy.session(name, () => {
    cy.visit('http://192.168.3.39:9009/')
    cy.get('[type=text]').type(name)
    cy.get('[type=password]').type('Bilal@12345a')
    cy.get('[type=submit]').click()
    cy.url().should('contain', 'http://192.168.3.39:9009/Project/Project/List')
    
      ///////////////////////////////////////////////////////////////////////////
    })
  }
  describe('Project Management', () => {
    context('Set Resolution', () => {
      beforeEach(() => {
        cy.viewport(2000, 1000)
        login('m.bilal')
        cy.visit('http://192.168.3.39:9009/Project/Project/List')
      });
    // ---- Update project Task Info
    it('Edit Project Task Info', () => {
      cy.wait(4000)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      cy.get('.dropdown-menu.show').contains('Edit').click()
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
    });
    // ---- Add Custom Fields on Project Task 
    it('Edit Project Task Custom Fields', () => {
      cy.wait(4000)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      cy.get('.dropdown-menu.show').contains('Edit').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');
  
      cy.get('#lnkPTLClick').click()
      
      cy.get('#workSpace').within(() => {
        cy.get('.teamworkIcon').contains('R').click({force:true})
      })
        
      cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
        cy.wait(5000)
        cy.get('.timelineTaskNameTemplate')
          .find('[title=Edit]').click()
      })
      
      cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')

      cy.get('#lnkprjtskcustomfield').click()
      cy.get('#gridContainer').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })
      cy.wait(5000)
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click()
      cy.get('[role=listbox]').find('[role=option]')
      cy.wait(2000)
      cy.contains('[role=option]', 'Text').click();
    
      cy.get('[role=presentation]').find('[role=row]').find('td').get('[role=gridcell]').eq(4).click()
      cy.get('[role=listbox]').find('[role=option]')
      cy.contains('[role=option]', 'Text').click();
      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()
        
      cy.get('.title').then(function ($pcustomfield) {
        const Success = $pcustomfield.text();
        cy.log(Success);
        expect(Success).eq('Success');
      }); 
      cy.log('Project Task Custom Fields added successfully')
    })
    // ---- Add Trackers on project task
    it('Add Project Task Trackers', () => {
      cy.wait(4000)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      cy.get('.dropdown-menu.show').contains('Edit').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');
  
      cy.get('#lnkPTLClick').click()
      cy.wait(10000)
        
      cy.get('#workSpace').within(() => {
        cy.get('.teamworkIcon').contains('R').click({force:true})
      })
        
      cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
        cy.wait(5000)
        cy.get('.timelineTaskNameTemplate')
          .find('[title=Edit]').click()
      })
  
      cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
      
      cy.get('#lnkTTracker').click()
      cy.wait(5000)
    
      cy.get('#gridProjectTaskTracker').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })
      cy.wait(5000)
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(2).as('ptcode').wait(1000)
      cy.get('@ptcode').type('PT1')      
    
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).as('ptname')
      cy.get('@ptname').type('Project Tracker 1')
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(4).click().wait(2000)
      cy.get('[role=listbox]').get('[role=option]').should('be.visible')
      cy.contains('[role=option]', 'Equipments').click();
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click().wait(2000)
      cy.get('[role=listbox]').get('[role=option]').should('be.visible')
      cy.contains('[role=option]', 'Antenna').click();
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(6).click().wait(2000)
      cy.get('[role=listbox]').get('[role=option]').should('be.visible')
      cy.contains('[role=option]', 'Repair').click();
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(7)
      cy.get('[role=checkbox]').get('[aria-checked="false"]').click({multiple:true, force:true})
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(7).get('[role=checkbox]').then(($KPIcheck) => {
        if ($KPIcheck.is('[aria-checked="true"]')) {
            cy.get('[role=presentation]')
            cy.get('[role=row]').find('td').get('[role=gridcell]').eq(8).click().wait(2000)
            cy.get('[role=listbox]').get('[role=option]')
            cy.contains('[role=option]', 'Manual').click()
        }
      });
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(9).click().wait(2000)
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', /^AlphaNumeric$/).click()
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(12).click().as('tracker')
      cy.get('@tracker').type('25')
  
      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
      cy.get('#btnPTTSubmit').click()

      cy.get('.title').then(function ($timeline) {
        const Success = $timeline.text();
        cy.log(Success);
        expect(Success).eq('Success');
      }); 
      cy.log('Project Task Tracker added successfully') 
    });
    // ----Add Resources on Project Task
    it('Add Resources on Project Task', () => {
      const qaresourcetype = 'QA Team'
      const qataskresourcename = 'Bilal'
      
      cy.wait(4000)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      cy.get('.dropdown-menu.show').contains('Edit').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');
  
      cy.get('#lnkPTLClick').click()
      cy.wait(10000)
        
      cy.get('#workSpace').within(() => {
        cy.get('.teamworkIcon').contains('R').click({force:true})
      })
        
      cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
        cy.wait(5000)
        cy.get('.timelineTaskNameTemplate')
          .find('[title=Edit]').click()
      })
  
      cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
      
      cy.get('#lnkTResource').click()
      cy.wait(5000)
      cy.get('#gridProjectTaskResource').within(() => {
          cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })
      cy.wait(5000)
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(0).click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'People').click();
        
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click()
      cy.get('[role=group]').get('[role=treeitem]')
      cy.contains('[role=treeitem]', qataskresourcename).click();
  
      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
      cy.log('Resource Add Successfull')
    });
    // --- Add Baseline Allocation on Project Task
    it('Add Baseline Allocation on Project Task', () => {
      cy.wait(4000)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
      cy.get('.dropdown-menu.show').contains('Edit').click()
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
      
      cy.get('#lnkProjectTaskTimelineAllocation').click()
      cy.wait(5000)
    
      cy.get('#gridProjectTaskTimelineAllocation').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })
      cy.wait(5000)
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click({force:true})
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'People').click();
      
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(2).click({force:true})
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'QA').click();
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click({force:true})
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'QA').click();
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(4).click({force:true})
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'Manager').click();
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click().as('nresource')
      cy.get('@nresource').type('5')
  
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click().as('allocation')
      cy.get('@allocation').type('25')
  
      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
      cy.get('.title').then(function ($timeline) {
        const Success = $timeline.text();
        cy.log(Success);
        expect(Success).eq('Success');
      }); 
      cy.log('Project Baseline Allocation added successfully') 
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    })
  });
    