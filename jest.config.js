module.exports = {
    testMatch: ["**/?(*.)(spec|test).ts?(x)"],
    setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
    testEnvironment: "jsdom",
    rootDir: "",
    transform: {
        ".(ts|tsx)": "ts-jest",
    },
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/web/components$1",
    },
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
    collectCoverage: true,
    coverageDirectory: "./docs/jest-coverage",
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
};
