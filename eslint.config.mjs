import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-console': 'error', // Disallow console logs
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // No unused variables, except those prefixed with "_"
      'eqeqeq': 'error', // Enforce strict equality (=== and !==)
      'curly': 'error', // Require curly braces for all control statements
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      'indent': ['error', 2], // Enforce 2-space indentation
      'no-var': 'error', // Disallow `var`, use `let` or `const`
      'prefer-const': 'error', // Enforce `const` when variables are not reassigned
      'no-debugger': 'error', // Disallow `debugger` statements
      '@typescript-eslint/no-explicit-any': 'error', // Disallow `any` type in TypeScript
      '@typescript-eslint/no-non-null-assertion': 'error' // Disallow `!` non-null assertions
    },
  },
];

export default eslintConfig;
