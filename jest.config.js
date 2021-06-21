module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.txt$': './text-transformer.js'
  },
  moduleNameMapper: {
    'raw-loader!(.*)$': '<rootDir>/src/$1'
  }
}
