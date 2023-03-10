module.exports = {
    "testEnvironment": "jsdom",
    "moduleFileExtensions": ["js", "jsx"],
    "moduleNameMapper": {
        "\\.(svg|jpeg|jpg|png|ico)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
    "moduleDirectories": ["node_modules", "src"],
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "collectCoverageFrom": ["src/**/*.{js, jsx}"],
    "watchPathIgnorePatterns": ["node_modules"]
}