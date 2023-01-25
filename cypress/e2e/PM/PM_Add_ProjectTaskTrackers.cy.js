/// <reference types="cypress" />
describe('Project Management', () => {
    context('Set Resolution', () => {
      beforeEach(() => {
        cy.viewport(2000, 1000)
      })
    it('Add Project Task Trackers', () => {
        const qaresourcetype = 'QA Team'
        const qataskresourcename = 'James Bond'
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
        
        cy.get('#lnkTTracker').click()
        cy.wait(5000)
      
        cy.get('#gridProjectTaskTracker').within(() => {
          cy.get('[role=toolbar]').contains('Add a row').click({force:true})
        })

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
      cy.get('.title').then(function ($timeline) {
        const Success = $timeline.text();
        cy.log(Success);
        expect(Success).eq('Success');
      }); 
      cy.log('Project Task Tracker added successfully') 
    });
   
    })
  });