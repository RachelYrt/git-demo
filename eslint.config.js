// eslint.config.js
import js from '@eslint/js'

export default [
  { ignores: ['node_modules/**', 'dist/**', 'coverage/**'] },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module', // import/export
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
