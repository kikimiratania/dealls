const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "my-custom-screenshots",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});

