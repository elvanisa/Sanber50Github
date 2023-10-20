const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      orangeHRM: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      lockedUser: 'locked_out_user'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 5670,
    viewportHeight: 650
  },
});
