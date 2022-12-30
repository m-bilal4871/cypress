/// <reference types="cypress" />
describe('Project Management', () => {
    it('Edit_Project', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#liAttachment').click()
      cy.get('#uploadListPartialViewId-70').within(() => {
        cy.get('[role=toolbar]').get('[aria-label=plus]').as('csla')
        cy.get('@csla').click({force:true})
      })
      
      // cy.get('#uploadPartialViewId-70').within(() => {
      //   cy.get('[role=button]').contains('Browse').click()
      // })
      cy.get('.dx-fileuploader-input-wrapper > .dx-fileuploader-button > .dx-button-content').attachFile("doc.txt");

      cy.get('div.uploader-inner').attachFile("doc.txt")
      .attachFile('video.mp4')
      .attachFile('pdf.pdf');
      //cy.get('#myform-70').attachFile("pic.PNG");
      //cy.get('.fa fa-cloud-upload').attachFile("pic.PNG");
      cy.wait(5000)
      cy.log("Test Case Pass");
    });
  });
  