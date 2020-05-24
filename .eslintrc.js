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
    'prettier',
    'prettier/react',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jsx-a11y',
    'prettier',
    'jest'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'prettier/prettier': [
      'error', {
        'semi': false
      }
    ],
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