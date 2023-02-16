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
    preset: "ts-jest",
    testMatch: ["<rootDir>/src/**/*.test.ts"],
};
