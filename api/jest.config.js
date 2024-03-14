module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/Modules/**/Main/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/Config/*.ts',
    '!<rootDir>/src/Main/*.ts',
    '!<rootDir>/src/Modules/**/Main/*.ts',
  ],
};
