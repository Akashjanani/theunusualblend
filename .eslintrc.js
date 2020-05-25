module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'better-styled-components',
    'jsx-a11y',
    'prettier',
    'jest',
    'react'
  ],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 2,
    'react/jsx-fragments': 0,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true
    }]
  },
  overrides: [
    {
      'files': [
        '*.test.js'
      ]
    }
  ]
}