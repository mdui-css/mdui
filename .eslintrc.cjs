/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mdui"],
  ignorePatterns: ["**/**.cjs"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
