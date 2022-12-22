module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "prefer-template": "off",
    "no-var": 1,
    "no-unused-vars": 1,
    camelcase: 1,
    "no-nested-ternary": 1,
    "no-console": 1,
    "no-template-curly-in-string": 1,
    "no-self-compare": 1,
    "import/prefer-default-export": 0,
    "arrow-body-style": 1,
    "import/no-extraneous-dependencies": ["off", { devDependencies: false }],
    "no-duplicate-imports": ["error", { includeExports: true }],
  },
};
