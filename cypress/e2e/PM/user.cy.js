/// <reference types = "cypress" />

describe('Profile',()=>

{

    it('create user',() =>

    {

        cy.visit("http://192.168.3.39:9009/")

       

        cy.get("[id=UserName]").type('abdul.ghaffar@aircod.com')        

        cy.get("[id=Password]").type('Abdul@1234')


        cy.get("[id=btn-Login]").click()

        cy.url().should('eq','http://192.168.3.39:9009/Ticket/TicketDashboard/Index')

        cy.get("[class=lines]").click()

        cy.scrollTo('bottom')

        cy.get('table').find('tr:last-child').should('be.visible')

        cy.get("[href='/User/All']").click({force: true})

        cy.get("[class='dx-button dx-button-normal dx-button-mode-contained dx-widget dx-button-has-icon']").click({force: true})
        

        cy.wait(3000)

        //cy.get('[role="listbox"]').should('be.visible').contains('[role=option]', 'Abdul Ghafar Admin').click({force: true})

        //cy.get('.dx-texteditor-input-container > #GLCode').type('QA999')

        cy.get('#TimeZoneId').click().type('Karachi')

        cy.get('[role="listbox"]').should('be.visible').contains('[role=option]', 'Karachi').click()
        cy.get('#DateFormatId')
       



    }

    )

}

)