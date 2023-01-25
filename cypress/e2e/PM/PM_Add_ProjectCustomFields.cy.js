/// <reference types="cypress" />
describe('Project Management', () => {
    it('Edit_Project', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(1500, 700)

      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#lnkProjectCustomParams').click()
      cy.wait(5000)

      cy.get('#gridContainer').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      })
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click()
      cy.get('[role=listbox]').should('be.visible');
      cy.get('[role=option]').should('be.visible');
      cy.contains('[role=option]', 'Text').click();

      cy.get('[role=presentation]').get('[role=row]').find('td').get('[role=gridcell]').eq(4).click()
      cy.get('[role=listbox]').should('be.visible');
      cy.get('[role=option]').should('be.visible');
      cy.contains('[role=option]', 'Text').click();

      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()

      cy.get('.dx-error-message').then(($msg)=> {
        const t = $msg.text();
        if(t.includes('already')){
        expect(t).to.contains('Custom Field is already associated.');
        cy.log('Test Pass')
        cy.get('[src="/Theme/AirViewX/images/general_icons/undo.svg"]').click()
        }
      });
    
    });
  });
  