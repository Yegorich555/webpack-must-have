import path from "path";
import { fileURLToPath } from "url";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import globals from "globals";

import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginJson from "eslint-plugin-json";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginCssModules from "eslint-plugin-css-modules";
import pluginImport from "eslint-plugin-import";

const project = "./tsconfig.json";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
});

export default eslintTs.config(
  {
    ignores: [
      "logs",
      "*.log",
      "npm-debug.log*",
      "lib-cov",
      "coverage",
      ".grunt",
      "build/",
      "dist/",
      "node_modules",
      "assets/",
      "public/",
      "**/*.d.ts",
    ],
  },
  // example of legacy config: https://eslint.org/blog/2024/05/eslint-compatibility-utilities/
  ...fixupConfigRules(compat.extends("eslint-config-airbnb")), // todo watchfix for support ESlint9+: https://github.com/airbnb/javascript/issues/2804
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  pluginPrettierRecommended,
  pluginImport.flatConfigs.typescript,
  {
    files: ["**/*.json"],
    plugins: { json: pluginJson },
    processor: "json/json",
    rules: {
      "json/*": ["error", { allowComments: true }],
    },
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        // project,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // enable browser global vars like 'window', 'document' etc.
        ...globals.node, // enable NodeJS global vars like 'require', 'process' etc.
        // ...globals.es2021, // uncomment if required
        DEV: true, // enable custom global variable - switched from webpack part
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
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          fixToUnknown: true,
          ignoreRestArgs: false,
        },
      ],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      // React
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/destructuring-assignment": "off",
      // "react/jsx-max-props-per-line": [1, { maximum: 1 }], //it doesn't work with prettier, you can remove prettier from rules: 'prettier/prettier'...
      // "react/jsx-first-prop-new-line": [1, "multiline"], //it doesn't work with prettier, you can remove prettier from rules: 'prettier/prettier'...
      "react/prop-types": "off",
      "react/require-default-props": "off", // it's wrong for TS like { initValue?: string; }
      "react/prefer-stateless-function": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-curly-newline": "off", // it conflicts with prettier
      "react/jsx-wrap-multilines": ["error", { arrow: true, return: true, declaration: true }],
      "react/function-component-definition": [2, { namedComponents: "function-declaration" }],
      // Other
      "prettier/prettier": ["error"],
      "unused-imports/no-unused-imports": "error",
      "no-shadow": "off",
      "no-use-before-define": "off",
      "require-await": "error",
      "spaced-comment": ["error", "always"],
      "no-underscore-dangle": "off",
      "no-unused-expressions": ["error", { allowShortCircuit: true }],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-plusplus": "off",
      "class-methods-use-this": "off",
      "max-len": [
        "warn",
        {
          code: 140,
          tabWidth: 2,
          comments: 1000,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["./*.config.{js,ts,mjs}", "./webpack.*{js,ts,mjs}"], // this files will be ignored from checking
          optionalDependencies: ["./eslint.config.*", "./webpack.devServer.{js,ts,mjs}", "**/*.mock.{js,ts,mjs}"],
          peerDependencies: false,
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          project,
        },
      },
    },
  },
);
