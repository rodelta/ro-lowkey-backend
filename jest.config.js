module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.ts",
    "!**/*.test.ts",
    "!**/index.ts",
    "!**/node_modules/**",
  ],
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  transform: {
    "^.+\\.ts?$": "@swc/jest",
  },
};
