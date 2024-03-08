module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/pages/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}