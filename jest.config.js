// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/_*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  passWithNoTests: true
};

module.exports = createJestConfig(customJestConfig);
