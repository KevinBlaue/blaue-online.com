import js from '@eslint/js';
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
  // Your other configurations...
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
    // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
