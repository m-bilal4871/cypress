/// <reference types="cypress" />
describe('Project Management', () => {
    context('Set Resolution', () => {
      beforeEach(() => {
        cy.viewport(2000,1000)
      })
    it('Project Dashboard', () => {
      cy.visit("http://192.168.3.39:9009/");
  
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(2).click()
      cy.get('#project_dashboard_tabs').find('[data-target="#EntityTab"]').click()
  
      cy.get('#projectSitesGridContainer').within(() => {
        cy.get('[role=presentation]')
        cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).as('sdate')
        cy.get('@sdate').click().as('ssdate')
        cy.get('@ssdate').within(() => {
            cy.get('[role=button]').click()
        })
        cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'Monday, January 2, 2023').click({force:true});
      })
      
    //   cy.get('.title').then(function ($timeline) {
    //     const Success = $timeline.text();
    //     cy.log(Success);
    //     expect(Success).eq('Success');
    //   }); 
    //   cy.log('Entities associate successfully')
    })
  
    })
  })
    