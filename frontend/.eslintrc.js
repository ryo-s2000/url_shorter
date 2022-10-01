module.exports = {
    root: true,
    env: {
      es2020: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      tsconfigRootDir: __dirname,
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    },
    settings: {
        react: {
          version: "detect"
        }
    }
};
