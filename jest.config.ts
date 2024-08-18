import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^@/components/(.*)$": "<rootDir>/components/$1",
    },
};

export default createJestConfig(config);
