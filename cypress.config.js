const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bkw5oy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
