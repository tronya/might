module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
      },
    ],
    "no-console": [1, { allow: ["warn", "error"] }],
    "@typescript-eslint/no-unused-vars": 1,
    "no-debugger": 1,
    "no-empty-function": [
      1,
      {
        allow: [
          "arrowFunctions",
          "methods",
          "constructors",
          "asyncFunctions",
          "asyncMethods",
        ],
      },
    ],
  },
};
