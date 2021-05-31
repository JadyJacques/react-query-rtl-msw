module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  collectCoverage: false,
  collectCoverageFrom: ["components/**/*.js", "pages/**/*.js"],
  clearMocks: true,
  coverageReporters: ["lcov", "text"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
