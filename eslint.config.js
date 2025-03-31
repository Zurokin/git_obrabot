import eslintPluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.js"],
    plugins: { react: eslintPluginReact },
    rules: {
      "no-console": "warn",
      semi: ["error", "always"],
    },
  },
];
