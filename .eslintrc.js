module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'always'],
    'generator-star-spacing': 'off',
    'semi': [2, 'always'],
    'no-useless-escape': 'off',
    'no-tabs': 'off',
    'comma-dangle': [2, 'never'],
    "requireForBlockBody": false
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
