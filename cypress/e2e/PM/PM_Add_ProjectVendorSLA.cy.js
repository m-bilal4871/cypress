/// <reference types="cypress" />
describe('Project Management', () => {
    const VendorSLA = 'Vendor SLA'
    const VendorName = 'Reliance'
    it('Add Vendor SLA Title', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.viewport(2000, 1000)

      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
      cy.wait(4000)      
      cy.get('[role=presentation]').find('tr').eq(4).find('td').eq(28)
      cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="3"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
      cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
      cy.get('.update-name').should('be.visible').contains('Edit Project ');

      cy.get('#liVendor').click()
      cy.wait(5000)

      cy.get('#SLAGrid').within(() => {
        cy.get('[role=toolbar]').get('[aria-label=plus]').as('csla')
        cy.get('@csla').click({force:true})
      })
      cy.get('[data-target="AssociateSla"]').should('be.visible')

      cy.get('#Name').type(VendorSLA)
      cy.contains('Add New PO').click({force:true})
      cy.get('h4').should('be.visible').contains('New Purchase Order')
      cy.wait(7000)
      // cy.get('#VendorId').click()
      // cy.get('[role=listbox]').get('[role=option]')
      // cy.contains('[role=option]', 'Reliance').click();

      // cy.get('#ShipToId').click()
      // cy.wait(3000)
      // cy.get('[role=listbox]').get('[role=option]')
      // cy.contains('[role=option]', 'United').click();

      // cy.get('#BillToId').click()
      // cy.wait(3000)
      // cy.get('[role=listbox]').get('[role=option]')
      // cy.contains('[role=option]', 'New').click();

      // cy.get('#PaymentTermId').click()
      // cy.get('[role=listbox]').get('[role=option]')
      // cy.contains('[role=option]', 'NET15').click();

      cy.get('#gridContainerPurchaseOrder').within(() => {
        cy.get('[role=toolbar]').contains('Add a row').click({force:true})

        cy.get('[role=toolbar]').find('[title="Save changes"]').click({force:true})

        cy.get('[role=presentation]').find('[aria-rowindex="1"]').find('[aria-colindex="2"]').click().as('item')
        cy.get('@item').type('Mobile Service')
        cy.get('[role=listbox]').find('[role=option]')
        cy.contains('[role=option]', 'Mobile Service').click();

        cy.get('[role=presentation]')
        cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click().as('qty')
        cy.get('@qty').type('25')

        cy.get('[role=presentation]')
        cy.get('[role=row]').find('td').get('[role=gridcell]').eq(4).click()
        cy.get('[role=listbox]').get('[role=option]')
        cy.contains('[role=option]', 'a').click()

        cy.get('[role=presentation]')
        cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click()
        cy.get('[role=listbox]').get('[role=option]')
        cy.contains('[role=option]', 'United').click();

        cy.get('[role=presentation]')
        cy.get('[role=row]').find('td').get('[role=gridcell]').eq(6).click().as('price')
        cy.get('@price').type('25')

        cy.get('#gridContainerPurchaseOrder').within(() => {
          cy.get('[role=toolbar]').find('[title="Save changes"]').click({force:true})
        })

        cy.get('[src="/Theme/AirViewX/images/icons/Save.svg"]').click({multiple:true, force:true})
      })

      //cy.get('.modal-header').find('[type=button]').click()

      cy.get('#OwnerId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', VendorName).click();

      cy.get('#SlaPriorityId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'High').click();

      cy.get('#SeverityId').click()
      cy.get('[role=listbox]').get('[role=option]')
      cy.contains('[role=option]', 'Major').click();

      cy.get('#btnsavesla').click()

      cy.get('.title').then(function ($vendorsla) {
        const Success = $vendorsla.text();
        cy.log(Success);
        expect(Success).eq('Success');
      });    
    });
  });
  