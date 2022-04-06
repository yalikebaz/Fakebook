module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    camelcase: 0,
    'import/no-cycle': 0,
    'default-param-last': 0,
    'no-console': 0,
  },
};
