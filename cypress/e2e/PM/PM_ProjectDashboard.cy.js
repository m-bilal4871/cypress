/// <reference types="cypress" />
describe('Project Management', () => {
    it('Project Dashboard', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(2000, 1000)

      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(2).within(() => {
        cy.get('.link').click()
      })
      cy.get('#project_dashboard_tabs').find('[data-target="#EntityTab"]').click()

    }); 
    
    it('Add Region and Market on Entity', () => {
      cy.get('[role=presentation]').find('[aria-rowindex="1"]').find('[aria-colindex="14"]').within(() => {
        cy.get('[src="/Theme/AirViewX/images/general_icons/iconset/final/edit.svg"]').click({force:true, multiple:true})
      })
      cy.wait(5000)
      cy.get('h4').should('be.visible').contains('Edit Entity -')
      cy.get('#tabs').find('#modal_locationTab_li').click()
      cy.get('#entityLocationTabPartialView').find('[src="/Theme/AirViewX/images/ems/edit_icon.svg"]').click()
        
      cy.get('#EntityCountryId').type('United')
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', /^United States$/).click({force:true});
  
      cy.get('#EntityRegionId').type('West').wait(5000)
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'West').click({force:true});
  
      cy.get('#EntityMarketId').click().type('cal').wait(5000)
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'California').click({force:true});
        
      cy.get('#entityLocationTabPartialView').find('[src="/Theme/AirViewX/images/ems/save.svg"]').click()
  
      cy.get('#btnEntityUpdate').click({force:true})
        cy.log('Region and Markets are added on Entity  successfully')
    })
        
    it('Assign Manager', () => {
      cy.get('[role=presentation]').find('[aria-rowindex="1"]').find('[aria-colindex="12"]').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'Bilal').click({force:true});
    })


  });
  