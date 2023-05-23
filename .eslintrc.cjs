module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2021,
    extraFileExtensions: ['.vue']
  },
  rules: {
    "import/no-default-export": false,
    'class-methods-use-this': ['off'],
    'lines-between-class-members': ['off'],
    'vue/max-len': ['error', {
      code: 150,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreHTMLTextContents: true,
      ignoreHTMLAttributeValues: true
    }],
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': 'off',
    'max-len': 'off',
    'radix': ['error', 'as-needed'],
    'template-curly-spacing': 'off',
    'indent': 'off',
    'no-plusplus': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? ['error'] : 'off',
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'import/no-unresolved': 'off',
    'space-before-function-paren': ['error', 'always'],
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { allow: ['state'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-bitwise': ['error', { int32Hint: true }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'state',
        'el',
        'Vue',
        'query',
        'config'
      ]
    }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
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
    '@typescript-eslint/explicit-function-return-type': ['error', { allowTypedFunctionExpressions: false }],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/no-type-alias': 'warn',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: true,
        variableDeclaration: true,
        parameter: true,
        objectDestructuring: true,
        memberVariableDeclaration: true,
        propertyDeclaration: true
      }
    ],
    '@typescript-eslint/no-unused-vars': ["warn", { "vars": "all", "varIgnorePattern": "props" }],
  },
  ignorePatterns: [
    'index.html',
    'vite.config.ts',
    'postcss.config.cjs',
    'tailwind.config.cjs'
  ]
}
