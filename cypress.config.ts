// cypress.config.ts
module.exports = {
  e2e: {
    baseUrl: "http://localhost:5173/", // Your local development URL
    setupNodeEvents(on, config) {
      // Implement event listeners here (optional)
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
};
