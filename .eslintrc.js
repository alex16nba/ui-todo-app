module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    camelcase: 2,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'import/prefer-default-export': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
