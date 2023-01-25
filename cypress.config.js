const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // setupNodeEvents(on, config) {
    //   config.specPattern = [
    //     'cypress/e2e/PM/PM_Project.cy.js',
    //     'cypress/e2e/PM/PM_ProjectTask.cy.js',
    //     'cypress/e2e/PM/PM_ProjectDashboard.cy.js',
    //   ]
    //   // IMPORTANT: need to return the changed config
    //   // so Cypress knows about your changes
    //   return config
    // },
  },
});