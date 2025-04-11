const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports", // de onde vem o json gerado no cucumber.config.js
  reportPath: "cypress/reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "auto",
    },
    device: "Local Machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Feature: Implementacao de reports",
    data: [
      { label: "QA", value: "Daniela Arcanjo" },
      { label: "Data", value: new Date().toLocaleString() },
    ],
  },
});
