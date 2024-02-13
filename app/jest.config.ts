/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/__test__/**/*.{ts, tsx}',
    '!<rootDir>/__test__/**/theme.ts',
  ],
};
