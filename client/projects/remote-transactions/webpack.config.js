const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "remote-transactions",

  exposes: {
    "./TransactionsRoutes": "./src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "my-lib":  {
      singleton: true,
      strictVersion: true,
      requiredVersion: "0.0.1",
    }
  },
});
