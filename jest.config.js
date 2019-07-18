// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  reporters: ["default"],

  collectCoverage: false,
  // // "lib/**/*.{ts,tsx}" lib里的文件都要测,除了__tests__里的，jest的默认规则是排除有__tests__目录的文件
  // // "!**/node_modules/**" 任意包含node_modules的目录不测
  // collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  // // 生成的报告放在那里
  // coverageDirectory: 'coverage',
  // coverageReporters: ['text', 'lcov'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}
