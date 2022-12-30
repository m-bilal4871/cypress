/// <reference types="cypress" />
describe('Project Management', () => {
    it('Edit_Project', () => {
      //var qatype = 'QATY'
      const qaresourcetype = 'QA Team'
      const resourcename = 'James Bond'
      ////////////////////
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(2000, 1000)

      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#lnkPTRClick').click()
      cy.wait(10000)
      cy.log('pdsdaskak')
      // cy.get('#gridProjectResource').within(() => {
      //   cy.get('[role=toolbar]').get('[title=Teams]').click({force:true})
      // })      
      // cy.get('#wGroupGrid').within(() => {
      //   cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      //   cy.get('[role=presentation]')
      //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(0).as('type1')
      //   cy.get('@type1').should('be.visible').type(qaresourcetype)
      //   ///////Resource Group////////////////
        // cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click()
        // cy.get('[role=grid]')
        // cy.get('[role=listbox]').should('be.visible')
        // cy.get('[role=option]').should('be.visible')
        // cy.contains('[role=option]', 'People').click()        
      // })
      cy.get('#gridProjectResource').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })

      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(0).click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'People').click();
      
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click()
      cy.get('[role=group]').get('[role=treeitem]')
      cy.contains('[role=treeitem]', qaresourcetype).click();

      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(2).click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', resourcename).click();

      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(4).click()
      cy.get('[role=group]').contains('[role=group]', 'Saudi').click()
      cy.get('[role=group]').should('exist')

      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(8).click().within(() => {
        cy.get('[role=button]').click()
      })
      cy.get('[role=listbox]').get('[role=option]').contains('[role=option]', '09:00').click();

      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(9).click().type('18:00')

      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(11).click().as('rhr')
      cy.get('@rhr').type('25')      
      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
      cy.log('Resource Add Successfull')
    });    
  });
  