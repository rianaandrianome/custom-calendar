module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 0,
    'import/export': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'max-len': 0,
    'react/destructuring-assignment': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign' :0,
    'no-console' :0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type' : 0,
    '@typescript-eslint/explicit-member-accessibility' :0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};