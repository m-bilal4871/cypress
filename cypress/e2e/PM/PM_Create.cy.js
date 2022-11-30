/// <reference types="cypress" />
describe('Project Management', () => {
    it('Project_Creation', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.get('[title=New]').click();
      cy.wait(4000);
      cy.get('[id=ProjectName]').type("Auto Cypress Project");
      cy.get('[id=ProjectCode]').type("Auto CP 1");
      cy.get('[id=project_company]').click();
      cy.get('[id=ProjectCompanyTree]').click();
      cy.contains('.dx-treeview-node-container[role="group"]', 'Dish Communication Inc.').click({
        force: true
      });
      cy.get('[id=EntityTypeId]').click();
      cy.get('.dx-treeview-search > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input[role="textbox"]').type('Site');
      cy.get('[role=group]').should('be.visible');
      cy.get('[role=treeitem]').should('be.visible');
      cy.contains('[role=treeitem]', 'Site').click();
      cy.get('input[id=ScheduleType]').type("Project");
      cy.get('[role=listbox]').should('be.visible').contains('[role=option]', 'Project Start Date').scrollIntoView().click();
      cy.get('#StartDate').click().type('Thursday, 24 November, 2022 04:16:00 PM');
      cy.get('#btnSavePM').click();
      cy.wait(2000); //cy.get('.title').should("Success")
  
      cy.get('.title').then(function ($Welcome) {
        const Success = $Welcome.text();
        cy.log(Success);
        expect(Success).eq('Success');
      });
      cy.log("Test Case Pass");
    });
    it('Draft_Project', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@123");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.get('[title=New]').click();
      cy.wait(4000);
      cy.get('[id=ProjectName]').type("Draft Auto Project");
      cy.get('[id=ProjectCode]').type("DAP");
      cy.get('[id=project_company]').click();
      cy.get('#btnSaveAsDraft').click();
      cy.get('[type=button]').contains('Confirm').click(); //cy.get('.title',)
  
      cy.log("Test Case Pass");
    });
  });
  