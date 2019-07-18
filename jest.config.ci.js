const base = require('./jest.config')
module.exports = Object.assign({},base,{
    reporters: ["jest-junit"],
    collectCoverage: true,
    // "lib/**/*.{ts,tsx}" lib里的文件都要测,除了__tests__里的，jest的默认规则是排除有__tests__目录的文件
    // "!**/node_modules/**" 任意包含node_modules的目录不测
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
    // 生成的报告放在那里
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
})