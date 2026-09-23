import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import globals from "globals";

import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginJson from "eslint-plugin-json";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginCssModules from "eslint-plugin-css-modules";

const project = "./tsconfig.json";
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const root = import.meta.dirname.replaceAll("\\", "/"); // absolute globs: IDE can run eslint from another cwd
const prodOnly = process.env.NODE_ENV === "production" ? "error" : "off";

export default defineConfig(
  globalIgnores([
    "logs",
    "*.log",
    "npm-debug.log*",
    "lib-cov",
    "coverage",
    ".grunt",
    "build/",
    "dist/",
    "node_modules",
    "src/assets/",
    "public/",
    "**/*.d.ts",
    "package-lock.json",
  ]),
  pluginJson.configs["recommended-with-comments"],
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"], // skip code rules for *.json
    extends: [
      // example of legacy config: https://eslint.org/blog/2024/05/eslint-compatibility-utilities/
      fixupConfigRules(compat.extends("eslint-config-airbnb")), // todo watchfix for support ESlint9+: https://github.com/airbnb/javascript/issues/2804
      eslintJs.configs.recommended,
      eslintTs.configs.recommended,
      pluginPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser, // enable browser global vars like 'window', 'document' etc.
        ...globals.node, // enable NodeJS global vars like 'require', 'process' etc.
      },
    },
    plugins: {
      "unused-imports": pluginUnusedImports, // despite on plugin above it auto-removes unused imports
      "css-modules": pluginCssModules, // it check for unused/missed classes // todo it doesn't work for => import * as styles from "./theHeader.m.scss": watchfix: https://github.com/atfzl/eslint-plugin-css-modules/issues/98
    },
    rules: {
      "css-modules/no-unused-class": "warn",
      "css-modules/no-undef-class": "error",
      // TS
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "always", // https://typescript-eslint.io/rules/no-empty-object-type/
        },
      ],
      "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
      // React
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/destructuring-assignment": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off", // it's wrong for TS like { initValue?: string; }
      "react/prefer-stateless-function": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-wrap-multilines": ["error", { arrow: true, return: true, declaration: true }],
      "react/function-component-definition": ["error", { namedComponents: "function-declaration" }],
      // Other
      "unused-imports/no-unused-imports": "error",
      "require-await": "error",
      "spaced-comment": ["error", "always"],
      "no-underscore-dangle": "off",
      "no-console": prodOnly,
      "no-debugger": prodOnly,
      "no-alert": prodOnly,
      "no-plusplus": "off",
      "class-methods-use-this": "off",
      "max-len": [
        "warn",
        {
          code: 140,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [`${root}/*.config.{js,ts,mjs}`, `${root}/webpack.*{js,ts,mjs}`], // this files will be ignored from checking
          optionalDependencies: [`${root}/eslint.config.*`, `${root}/webpack.devServer.{js,ts,mjs}`, "**/*.mock.{js,ts,mjs}"],
          peerDependencies: false,
        },
      ],
      "import/extensions": ["error", "ignorePackages", { js: "never", jsx: "never", ts: "never", tsx: "never" }],
    },
    settings: {
      "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          project,
        },
      },
    },
  },
);
