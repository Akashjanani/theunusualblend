module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
    '<rootDir>/config/setupTest.js',
  ], // setupFiles before the tests are ran
  notify: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/node_modules/**',
    '**/src/*.{js,jsx}',
    '!**/webpack.config.js',
    '!**/src/index.js',
  ],
  coverageDirectory: 'coverage/',
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov'],
}
