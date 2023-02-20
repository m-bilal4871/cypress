const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    charts: true,
    reportPageTitle: 'Report',
    reportFilename: "[name]-report-[datetime]-[status]",
    timestamp: "longDate",
    overwrite: false,
    html: true,
    json: true,
  },
  
  
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // setupNodeEvents(on, config) {
    //   config.specPattern = [
    //     'cypress/e2e/Login/login.cy.js',
    //     'cypress/e2e/PM/PM_Project.cy.js',
    //     'cypress/e2e/PM/PM_ProjectTask.cy.js',
    //     'cypress/e2e/PM/PM_Project_Dashboard.cy.js',
    //   ]
    //   return config
    // },
  },
});