module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['unused-imports', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error'],
    'unused-imports/no-unused-imports': ['error'],
    "@typescript-eslint/no-unused-vars": ["error"],
    '@typescript-eslint/consistent-type-imports': ['error'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-default-export': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          // ここに書いた順序で間に1行空行をあけつつ整頓される
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          { pattern: '@/hooks/**', group: 'internal', position: 'before' },
          { pattern: '@/libs/**', group: 'internal', position: 'before' },
          { pattern: '@/utils/**', group: 'internal', position: 'before' },
        ],
      },
    ],
    /* off */
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'arrow-body-style': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'react/require-default-props': ['off'],
  },
  overrides: [
    {
      // 実はいらない
      files: ['*.stories.tsx', 'pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
};
