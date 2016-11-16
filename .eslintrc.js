module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    'es6': true,
    'browser': true,
    'node': true,
    'jquery': true,
    'mocha': true
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': ['**/*.test.js', '**/*.spec.js', 'webpack.config.*', '**/*.dev.js', 'tools/*']
    }],
    'no-bitwise': ['error', { 'allow': ['~'] }]
  },
};
