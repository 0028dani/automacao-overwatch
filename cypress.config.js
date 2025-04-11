const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').default;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: "cypress/support/e2e.js",

   async setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config, {
      stepDefinitions: "cypress/support/step_definitions",
      messagesOutputPath: 'cypress/cucumber-json/cucumber-report.json'
    });

    on("file:preprocessor", createBundler({
      plugins: [createEsbuildPlugin(config)],
    }));

    return config;
    },
  },
});
