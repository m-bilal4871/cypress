/// <reference types="cypress" />
const login = (name) => {
  cy.session(name, () => {
    cy.visit('http://192.168.3.39:9009/')
    cy.get('[type=text]').type(name)
    cy.get('[type=password]').type('Bilal@12345a')
    cy.get('[type=submit]').click()
    cy.url().should('contain', 'http://192.168.3.39:9009/Project/Project/List')
    //cy.visit('http://192.168.3.39:9009/Project/Project/List')
  })
}
describe('Project Management', () => {
  context('Set Resolution', () => {
    beforeEach(() => {
      cy.viewport(2000, 1000)
      login('m.bilal')
      cy.visit('http://192.168.3.39:9009/Project/Project/List')
    });
  const CompanySLA = 'Company SLA'
  const VendorName = 'Reliance'
  const qaresourcetype = 'QA Team'
  const resourcename = 'Bilal'
  const qataskresourcename = 'Bilal'
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
  it('Edit Project', () => {
    var rin;
    cy.wait(4000)
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
    cy.get('.dropdown-menu.show').contains('Edit').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project ');
    cy.wait(10000)
  });
  // -----Add Company Delivery-----
  it('Add Company Delivery', () => {
    cy.wait(4000)
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
    cy.get('.dropdown-menu.show').contains('Edit').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project ');  

    cy.get('#liDeliveries').click()
    cy.wait(5000)

    cy.get('#SLAGrid').within(() => {
      cy.get('[role=toolbar]').get('[aria-label=plus]').as('csla')
      cy.get('@csla').click({force:true})
    })
    cy.get('[data-target="AssociateSla"]').should('be.visible')

    cy.get('#Name').type(CompanySLA)

    cy.get('#SlaPriorityId').click()
    cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'High').click();

    cy.get('#SeverityId').click()
    cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'Major').click();

    cy.get('#btnsavesla').click()

    cy.get('.title').then(function ($comsla) {
      const Success = $comsla.text();
      cy.log(Success);
      expect(Success).eq('Success');
    });    
  });
  // ---- Update Settings on Project
  it('Edit Project Settings', () => {
    cy.wait(4000)      
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
    cy.get('.dropdown-menu.show').contains('Edit').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project '); 
    cy.get('#lnkSettings').click()
    cy.wait(4000)
    //Time Zine Selection//
    cy.get('#TimeZoneId').then(($TimeZone) => {
      if ($TimeZone.is(':disabled')) {
        cy.log('Time Zone is disabled')
      }
      else {
        cy.get('#TimeZoneId').clear().type('Karachi')
        cy.get('[role="listbox"]').should('be.visible').contains('[role=option]', 'Karachi').click()
        cy.log('TimeZone is Enabled')
      }
    });
    ////////////////////////////
    cy.get('#Color').click()
    cy.get('#TicketName').click()
    //cy.get('h4').contains('General').click()
    cy.get('h4').contains('Calendar').click()
    cy.get('h4').contains('Currency').click()      
    ///////////////////////////////////////
    //cy.get('#Sunday').log('Sunday')
    cy.get('#Sunday').then(($sun) => {
      if ($sun.is(':unchecked')) {
        cy.wait(3000)
        cy.get('#Sunday').click(['Sunday'])
        cy.log('Sunday is unchecked')
      }
      else  {          
        //cy.get('#Sunday').click(['Sunday'])
        cy.wait(5000)
        cy.log('Sunday is check')
      }
    });
    ////////////////////////////////////////
    cy.get('#txtShiftStartTime').click()
    //cy.get('#btnSubmit_Configuration').click()
    cy.log('Test Case Pass')

  });
  // ----- Add Project Resources
  it('Add Project Resources', () => {
    // const qaresourcetype = 'QA Team'
    // const resourcename = 'Bilal'
    cy.wait(4000)
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
    cy.get('.dropdown-menu.show').contains('Edit').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project '); 

    cy.get('#lnkPTRClick').click()
    cy.wait(10000)
    ///////Resource Group////////////////    
    cy.get('#gridProjectResource').within(() => {
      cy.get('[role=toolbar]').get('[title=Teams]').click({force:true})
    })   
    cy.wait(5000)   
    cy.get('#wGroupGrid').within(() => {
      cy.get('[role=toolbar]').contains('Add a row').click({force:true})
      cy.wait(5000)
      cy.get('[role=presentation]')
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(0).as('type1')
      cy.get('@type1').should('be.visible').type(qaresourcetype)
      cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click().as('rtype')
      cy.get('@rtype').type('People')   
    })
    cy.get('[role=listbox]').find('[role=option]')
    cy.contains('[role=option]', 'People').click({force:true});

    cy.get('#wGroupGrid').within(() => {
      cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()
    })
    cy.get('.modal-header').find('.close').click({multiple:true, force:true})
    /////////////////////////////////
    cy.get('#lnkPTRClick').click()
    cy.wait(5000)
    cy.get('#gridProjectResource').within(() => {
      cy.get('[role=toolbar]').contains('Add a row').click({force:true})
    })
    cy.wait(5000)
    cy.get('[role=presentation]')
    cy.get('[role=row]').find('td').get('[role=gridcell]').eq(0).click()
    cy.wait(2000)
    
    cy.get('[role=listbox]').find('[role=option]')
    cy.contains('[role=option]', 'People').click({force:true});
    
    cy.get('[role=presentation]')
    cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click()
    cy.get('[role=group]').find('[role=treeitem]')
    cy.contains('[role=treeitem]', qaresourcetype).click();

    cy.get('[role=presentation]')
    cy.get('[role=row]').find('td').get('[role=gridcell]').eq(2).click()
    cy.get('[role=listbox]').find('[role=option]')
    cy.contains('[role=option]', resourcename).click({force:true});

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
    cy.get('#btnTRSubmit').click()
    cy.get('.title').then(function ($timeline) {
      const Success = $timeline.text();
      cy.log(Success);
      expect(Success).eq('Success');
    }); 
    cy.log('Resource Add Successfully')
    cy.wait(5000)
  });
  //---- Custom fields on Project
  it('Add Custom Fields on Project', () => {
    cy.wait(4000)
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
    cy.get('.dropdown-menu.show').contains('Edit').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project '); 

    cy.get('#lnkProjectCustomParams').click()
    cy.wait(5000)

    cy.get('#gridContainer').within(() => {
      cy.get('[role=toolbar]').contains('Add a row').click({force:true})
    })
    
    cy.wait(3000)
    cy.get('[role=presentation]')
    cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click()
    cy.wait(2000)
    //cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click()
    cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'Text').click();
  
    cy.get('[role=presentation]').find('td').get('[role=gridcell]').eq(4).click()
    cy.get('[role=listbox]').get('[role=option]')
    cy.contains('[role=option]', 'Text').click();
  
    cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()
    
    cy.get('.title').then(function ($timeline) {
      const Success = $timeline.text();
      cy.log(Success);
      expect(Success).eq('Success');
    }); 
  });
  // -- Project Trackers
  it('Add Trackers on Project', () => {
    cy.wait(4000)    
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click({force:true})
    cy.get('.dropdown-menu.show > ul > :nth-child(1) > a').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project ');

    cy.get('#lnkPTracker').click()
    cy.wait(5000)
      
    cy.get('#gridProjectTracker').within(() => {
      cy.get('[role=toolbar]').contains('Add a row').click({force:true})
    })
    cy.wait(3000)

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
    cy.get('#btnPTSubmit').click()
    cy.get('.title').then(function ($vendorsla) {
      const Success = $vendorsla.text();
      cy.log(Success);
      expect(Success).eq('Success');
    }); 
    cy.log('Trackers added successfully')
  });
  // ---- Add Tasks on project timeline
  it('Add Global and Local Task on Timeline', () => {
    cy.wait(4000)
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
    cy.get('.dropdown-menu.show').contains('Edit').click()
    cy.get('.update-name').should('be.visible').contains('Edit Project ');

    cy.get('#lnkPTLClick').click()
    cy.wait(5000)
    
    cy.get('#workSpace').within(() => {
      cy.get('.teamworkIcon').contains('R').click({force:true})
    })
    cy.wait(3000)
    cy.get('#TWGanttArea')
      .find('.taskEditRow')
      .eq(1)
      .find('td.taskTitle').as('task')
    cy.get('@task').type('Issue');

    cy.get('.ui-widget-content').find('.ui-menu-item').contains('Issue Material').click()

    cy.get('#TWGanttArea')
        .find('.taskEditRow')
        .eq(1)
        .find('td.timeline_required_time').as('rtime')
      cy.get('@rtime').type('8');
    cy.get('#btnSaveGantChart').click()

    cy.get('.title').then(function ($vendorsla) {
      const Success = $vendorsla.text();
      cy.log(Success);
      expect(Success).eq('Success');
    }); 
    cy.log('Global Task added successfully')
  
    cy.wait(2000)
    cy.get('#TWGanttArea')
      .find('.taskEditRow')
      .eq(2)
      .find('td.taskTitle').as('task')
    cy.get('@task').type('Local Task');

    cy.get('#TWGanttArea')
        .find('.taskEditRow')
        .eq(2)
        .find('td.timeline_required_time').as('rtime')
      cy.get('@rtime').type('8');
    cy.get('#btnSaveGantChart').click()  
      
    cy.get('.title').then(function ($timeline) {
      const Success = $timeline.text();
      cy.log(Success);
      expect(Success).eq('Success');
    }); 
    cy.log('Local Task added successfully')      
  });
  // ---- Update project Task Info
  // it('Edit Project Task Info', () => {
  //   cy.wait(4000)
  //   cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
  //   cy.get('.dropdown-menu.show').contains('Edit').click()
  //   cy.get('.update-name').should('be.visible').contains('Edit Project ');

  //   cy.get('#lnkPTLClick').click()
  //   cy.wait(10000)
      
  //   cy.get('#workSpace').within(() => {
  //     cy.get('.teamworkIcon').contains('R').click({force:true})
  //   })
      
  //   cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
  //     cy.wait(3000)
  //     cy.get('.timelineTaskNameTemplate')
  //       .find('[title=Edit]').click()
  //   })

  //   cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
    
  //   cy.get('#ProjectTask_Priority').click()
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'High').click();

  //   cy.get('#SeverityId').click()
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'Major').click();

  //   cy.get('#btn_Task_Save').click()

  //   cy.get('.title').then(function ($ptaskinfo) {
  //     const Success = $ptaskinfo.text();
  //     cy.log(Success);
  //     expect(Success).eq('Success');
  //   });
  //   cy.log('Project Task updated successfully')
  // });
  // // ---- Add Custom Fields on Project Task 
  // it('Edit Project Task Custom Fields', () => {
  //   cy.wait(4000)
  //   cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
  //   cy.get('.dropdown-menu.show').contains('Edit').click()
  //   cy.get('.update-name').should('be.visible').contains('Edit Project ');

  //   cy.get('#lnkPTLClick').click()
    
  //   cy.get('#workSpace').within(() => {
  //     cy.get('.teamworkIcon').contains('R').click({force:true})
  //   })
      
  //   cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
  //     cy.wait(3000)
  //     cy.get('.timelineTaskNameTemplate')
  //       .find('[title=Edit]').click()
  //   })
    
  //   cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
  //   cy.get('#lnkprjtskcustomfield').click()
  //   cy.get('#gridContainer').within(() => {
  //     cy.get('[role=toolbar]').contains('Add a row').click({force:true})
  //   })
  //   cy.wait(3000)
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).as('fieldtype')
  //   cy.get('@fieldtype').click()
  //   cy.get('[role=listbox]').should('be.visible');
  //   cy.get('[role=option]').should('be.visible');
  //   cy.contains('[role=option]', 'Text').click();
  
  //   cy.get('[role=presentation]').find('[role=row]').find('td').get('[role=gridcell]').eq(4).click()
  //   cy.get('[role=listbox]').should('be.visible');
  //   cy.get('[role=option]').should('be.visible');
  //   cy.contains('[role=option]', 'Text').click();
  //   cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click()
      
  //   cy.get('.title').then(function ($pcustomfield) {
  //     const Success = $pcustomfield.text();
  //     cy.log(Success);
  //     expect(Success).eq('Success');
  //   }); 
  //   cy.log('Project Task Custom Fields added successfully')
  // })
  // // ---- Add Trackers on project task
  // it('Add Project Task Trackers', () => {
  //   cy.wait(4000)
  //   cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
  //   cy.get('.dropdown-menu.show').contains('Edit').click()
  //   cy.get('.update-name').should('be.visible').contains('Edit Project ');

  //   cy.get('#lnkPTLClick').click()
  //   cy.wait(10000)
      
  //   cy.get('#workSpace').within(() => {
  //     cy.get('.teamworkIcon').contains('R').click({force:true})
  //   })
      
  //   cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
  //     cy.wait(3000)
  //     cy.get('.timelineTaskNameTemplate')
  //       .find('[title=Edit]').click()
  //   })

  //   cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
    
  //   cy.get('#lnkTTracker').click()
  //   cy.wait(5000)
  
  //   cy.get('#gridProjectTaskTracker').within(() => {
  //     cy.get('[role=toolbar]').contains('Add a row').click({force:true})
  //   })
  //   cy.wait(4000)
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(2).as('ptcode').wait(1000)
  //   cy.get('@ptcode').type('PT1')      
  
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).as('ptname')
  //   cy.get('@ptname').type('Project Tracker 1')

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(4).click().wait(2000)
  //   cy.get('[role=listbox]').get('[role=option]').should('be.visible')
  //   cy.contains('[role=option]', 'Equipments').click();

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click().wait(2000)
  //   cy.get('[role=listbox]').get('[role=option]').should('be.visible')
  //   cy.contains('[role=option]', 'Antenna').click();

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(6).click().wait(2000)
  //   cy.get('[role=listbox]').get('[role=option]').should('be.visible')
  //   cy.contains('[role=option]', 'Repair').click();

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(7)
  //   cy.get('[role=checkbox]').get('[aria-checked="false"]').click({multiple:true, force:true})

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(7).get('[role=checkbox]').then(($KPIcheck) => {
  //     if ($KPIcheck.is('[aria-checked="true"]')) {
  //         cy.get('[role=presentation]')
  //         cy.get('[role=row]').find('td').get('[role=gridcell]').eq(8).click().wait(2000)
  //         cy.get('[role=listbox]').get('[role=option]')
  //         cy.contains('[role=option]', 'Manual').click()
  //     }
  //   });

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(9).click().wait(2000)
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', /^AlphaNumeric$/).click()

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(12).click().as('tracker')
  //   cy.get('@tracker').type('25')

  //   cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
  //   cy.get('.title').then(function ($timeline) {
  //     const Success = $timeline.text();
  //     cy.log(Success);
  //     expect(Success).eq('Success');
  //   }); 
  //   cy.log('Project Task Tracker added successfully') 
  // });
  // // ----Add Resources on Project Task
  // it('Add Resources on Project Task', () => {
  //   const qaresourcetype = 'QA Team'
  //   const qataskresourcename = 'James Bond'
    
  //   cy.wait(4000)
  //   cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
  //   cy.get('.dropdown-menu.show').contains('Edit').click()
  //   cy.get('.update-name').should('be.visible').contains('Edit Project ');

  //   cy.get('#lnkPTLClick').click()
  //   cy.wait(10000)
      
  //   cy.get('#workSpace').within(() => {
  //     cy.get('.teamworkIcon').contains('R').click({force:true})
  //   })
      
  //   cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
  //     cy.wait(3000)
  //     cy.get('.timelineTaskNameTemplate')
  //       .find('[title=Edit]').click()
  //   })

  //   cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
    
  //   cy.get('#lnkTResource').click()
  //   cy.wait(5000)
  //   cy.get('#gridProjectTaskResource').within(() => {
  //       cy.get('[role=toolbar]').contains('Add a row').click({force:true})
  //   })
  //   cy.wait(4000)
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click()
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'People').click();
      
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click()
  //   cy.get('[role=group]').get('[role=treeitem]')
  //   cy.contains('[role=treeitem]', qataskresourcename).click();

  //   cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
  //   cy.log('Resource Add Successfull')
  // });
  // // --- Add Baseline Allocation on Project Task
  // it('Add Baseline Allocation on Project Task', () => {
  //   cy.wait(4000)
  //   cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > [aria-describedby="dx-col-146"] > .icon-btn-only').click()
  //   cy.get('.dropdown-menu.show').contains('Edit').click()
  //   cy.get('.update-name').should('be.visible').contains('Edit Project ');

  //   cy.get('#lnkPTLClick').click()
  //   cy.wait(10000)
      
  //   cy.get('#workSpace').within(() => {
  //     cy.get('.teamworkIcon').contains('R').click({force:true})
  //   })
      
  //   cy.get('#TWGanttArea').find('.taskEditRow').eq(1).within(() => {
  //     cy.wait(3000)
  //     cy.get('.timelineTaskNameTemplate')
  //       .find('[title=Edit]').click()
  //   })

  //   cy.get('#ProjectTimelinePopup').find('#tasktitle').should('be.visible').contains('Edit Task')
    
  //   cy.get('#lnkProjectTaskTimelineAllocation').click()
  //   cy.wait(5000)
  
  //   cy.get('#gridProjectTaskTimelineAllocation').within(() => {
  //     cy.get('[role=toolbar]').contains('Add a row').click({force:true})
  //   })
  //   cy.wait(4000)
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(1).click({force:true})
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'People').click();
    
  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(2).click({force:true})
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'QA').click();

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(3).click({force:true})
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'QA').click();

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(4).click({force:true})
  //   cy.get('[role=listbox]').get('[role=option]')
  //   cy.contains('[role=option]', 'Manager').click();

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click().as('nresource')
  //   cy.get('@nresource').type('5')

  //   cy.get('[role=presentation]')
  //   cy.get('[role=row]').find('td').get('[role=gridcell]').eq(5).click().as('allocation')
  //   cy.get('@allocation').type('25')

  //   cy.get('[src="/Theme/AirViewX/images/general_icons/save-round.svg"]').click({multiple:true, force:true})
  //   cy.get('.title').then(function ($timeline) {
  //     const Success = $timeline.text();
  //     cy.log(Success);
  //     expect(Success).eq('Success');
  //   }); 
  //   cy.log('Project Baseline Allocation added successfully') 
  // });















  })
});
  