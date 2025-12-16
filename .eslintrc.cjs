module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
