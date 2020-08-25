module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ["docs/"],
  extends: [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "never"],
    indent: ["error", 2, { SwitchCase: 1 }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
