/// <reference types="cypress" />
const login = (name) => {
  cy.session(name, () => {
    cy.visit('http://192.168.3.39:9009/')
    cy.get('[type=text]').type(name)
    cy.get('[type=password]').type('Bilal@12345a')
    cy.get('[type=submit]').click()
    cy.url().should('contain', 'http://192.168.3.39:9009/Project/Project/List')

  })
}
describe('Project Management', () => {
    // context('Set Resolution', () => {
    //     beforeEach(() => {
    //       cy.viewport(2000, 1000)
    //       cypress
    // //       cy.session('user', () => {
    // //         cy.visit("http://192.168.3.39:9009/");
    // //   cy.get('[type=text]').type("m.bilal");
    // //    cy.get('[type=password]').type("Bilal@12345a");
    // //    cy.get('[type=submit]').click();
    // //         cy.wait(4000);
    // //       });
    //     })
    
    // Cypress.Cookies.defaults({
    //     preserve: 'connect.__RequestVerificationToken',
    //     preserve: 'connect.ASP.NET_SessionId',
    //     preserve: 'connect.J8HUR'
        
    // })
    //  beforeEach(() =>{
    //      Cypress.Cookies.preserveOnce('connect.__RequestVerificationToken'),
    //      Cypress.Cookies.preserveOnce('connect.ASP.NET_SessionId')
    //  })


    // })
    // Cypress.config('experimentalSessionSupport', true)

    // Cypress.session.clearAllSavedSessions()   // to avoid caching across browser reload
    
    // beforeEach(() => {                   
      // cy.session('mySession', () => {     
      //   cy.visit('http://192.168.3.39:9009/', {
      //     onBeforeLoad: (window) => {
            
      //       cy.get('[type=text]').type("m.bilal");
      //      cy.get('[type=password]').type("Bilal@12345a");
      //       cy.get('[type=submit]').click();  // sets a cookie
      //     }
      //   })
    //   })
    // })
    // beforeEach(() => {
    //   cy.getCookies()
    //   });
      
    //   afterEach(() => {
    //     cy.saveLocalStorage();
    //   });



    before(() => {
      login('m.bilal')
      cy.visit('http://192.168.3.39:9009/Project/Project/Edit?Id=94&RequestType=Project')
    })

    it('User-Login', () => {
      cy.visit("http://192.168.3.39:9009/");
      cy.get('[type=text]').type("m.bilal");
      cy.get('[type=password]').type("Bilal@12345a");
      cy.get('[type=submit]').click();
      cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');  
      cy.log("Test Case Pass");
      cy.log("Success");
    });
    
    //--- Project Creation
    // it('Project_Creation', () => {
    //   const pname = 'QA Team'
    //   cy.visit("http://192.168.3.39:9009/");
    //   cy.get('[type=text]').type("m.bilal");
    //   cy.get('[type=password]').type("Bilal@12345a");
    //   cy.get('[type=submit]').click();
    //   cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
    //   cy.get('[title=New]').click();
    //   cy.wait(4000);
    //   cy.get('#Chk_IsVendorSupplierReq').click()
    //   cy.get('[id=ProjectName]').type(pname);
    //   cy.get('[id=ProjectCode]').type("Auto CP 1");
    //   cy.get('[id=project_company]').click();
    //   cy.get('[id=ProjectCompanyTree]').click();
    //   cy.contains('.dx-treeview-node-container[role="group"]', 'Dish Communication Inc.').click({force: true});
    //   cy.get('[id=EntityTypeId]').click();
    //   cy.get('.dx-treeview-search > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input[role="textbox"]').type('Site');
    //   cy.get('[role=group]').should('be.visible');
    //   cy.get('[role=treeitem]').should('be.visible');
    //   cy.contains('[role=treeitem]', 'Site').click();
    //   cy.get('input[id=ScheduleType]').type("Project");
    //   cy.get('[role=listbox]').should('be.visible').contains('[role=option]', 'Project Start Date').scrollIntoView().click();
    //   cy.get('#StartDate').click().type('Thursday, 24 November, 2022 04:16:00 PM');
    //   cy.wait(2000); 
    //   cy.get('#btnSaveContinue').click()
    //   cy.get('.title').then(function ($Welcome) {
    //     const Success = $Welcome.text();
    //     cy.log(Success);
    //     expect(Success).eq('Success');
    //   });
    //   cy.log("Project Created Successfully");
    // });
    
    // -----Edit Project-----
    it('Edit_Project', () => {
        var rin;
        // cy.viewport(1500, 1000)
        // cy.visit("http://192.168.3.39:9009/");
        // cy.get('[type=text]').type("m.bilal");
        // cy.get('[type=password]').type("Bilal@12345a");
        // cy.get('[type=submit]').click();
        // cy.url().should('eq', 'http://192.168.3.39:9009/Project/Project/List');
        cy.wait(4000)
        cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
        cy.get('.dropdown-menu.show').contains('Edit').click()
        cy.get('.update-name').should('be.visible').contains('Edit Project ');
        cy.reload(true)
        cy.wait(10000)
      });
    // --Add Vendor
    it('Add Vendor SLA Title', () => {
      const VendorSLA = 'Vendor SLA'
      const VendorName = 'Reliance'  
      cy.get('#liVendor').click()
      cy.wait(5000)

      cy.get('#SLAGrid').within(() => {
        cy.get('[role=toolbar]').get('[aria-label=plus]').as('csla')
        cy.get('@csla').click({force:true})
      })
      cy.get('[data-target="AssociateSla"]').should('be.visible')

      cy.get('#Name').type(VendorSLA)
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
    })
      // -- Add Project Resources
    it('Add project resources', () => {
      const qaresourcetype = 'QA Team'
      const resourcename = 'James Bond'
      cy.get('#lnkPTRClick').click()
      cy.wait(10000)
      cy.log('pdsdaskak')
        
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





    it('Add Custom Fields on Project', () => {
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









    })
    //});
//});
  