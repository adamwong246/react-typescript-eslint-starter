module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
      'babel',
      'import',
      'react',
      'compat',
      'promise',
      'prettier',
      '@typescript-eslint'
    ],
    env: {
      node: false,
      browser: true
    },
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      jsx: true
    },
    settings: {
      react: {
        pragma: 'React',
        version: '16.8'
      },
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.ts', '.tsx']
        }
      }
    },
    rules: {
      curly: [2, 'all'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1
        }
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': 0,
      'no-underscore-dangle': 0,
      'comma-dangle': ['error', 'never'],
      'no-use-before-define': 'error',
      'no-plusplus': 0,
      'no-minusminus': 0,
      'no-unused-expressions': 0,
      'object-curly-newline': 0,
      'function-paren-newline': 0,
      'no-return-await': 0,
      'max-params': ['error', 5],
      'max-depth': ['error', 3],
      'promise/always-return': 'error',
      'promise/catch-or-return': 'error',
      'promise/param-names': 'error',
      'promise/no-return-wrap': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-explicit-any': 0,
      'react/prop-types': 'off',
      'react/jsx-filename-extension': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'FunctionDeclaration are not allowed in logic-less files.'
        },
        {
          selector: 'FunctionExpression',
          message: 'FunctionExpression are not allowed in logic-less files.'
        },
        {
          selector: 'ArrowFunctionExpression',
          message: 'ArrowFunctionExpression are not allowed in logic-less files.'
        },
        {
          selector: 'ImportDeclaration',
          message: 'ImportDeclaration are not allowed in logic-less files.'
        },
        {
          selector: 'LogicalExpression',
          message: 'LogicalExpression are not allowed in logic-less files.'
        }
      ]
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        excludedFiles: '*.logic-less.ts',
        rules: {
          'no-restricted-syntax': 'off'
        }
      }
    ]
  };
  