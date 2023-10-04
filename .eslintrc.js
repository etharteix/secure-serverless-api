module.exports = {
  env: {
      commonjs: true,
      es6: true,
      node: true,
      jest: true
  },
  extends: 'eslint:recommended',
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      fetch: false,
      process: true
  },
  parserOptions: {
      ecmaVersion: 2018
  },
  ignorePatterns: [
      "**/*.test.js",
      "node_modules/"
  ],
  rules: {
      'eqeqeq': 'warn',
      'no-useless-catch': 'warn',
      'no-eq-null': 'warn',
      'no-undef-init': 'warn',
      'no-unreachable': 'warn',
      'no-const-assign': 'error',
      'array-callback-return': 'warn',
      'max-lines': ['warn', {
          "max": 1000
      }],
      'no-loop-func': 'warn',
      'max-params': ["warn", 4],
      'no-unmodified-loop-condition': 'error',
      "no-global-assign": "warn",
      'prefer-const': 'warn',
      'no-unused-expressions': 'warn',
      'no-extra-semi': 'warn',
      'no-var': 'warn',
      'max-nested-callbacks': ["error", { "max": 5 }],
      'max-depth': ["warn", 4],
      "max-lines-per-function": ["warn", 200],
  }
}