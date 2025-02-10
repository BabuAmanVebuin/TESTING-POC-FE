# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

<!-- //// -->

### Steps for OpenAI Automated Jest Test Cases

1. **Required Libraries for Jest OpenAI Automation:**  
   Install the following dependencies:

   - `openai`
   - `fs`
   - `path`
   - `url`
   - `ts-node`
   - `ts-jest`
   - `jest`
   - `@testing-library/react-hooks`

2. **Create a TypeScript File:**

   - Add a new `.ts` file in the root directory (you can choose any name).

3. **Update the `package.json` Test Command:**

   - Add the AI-generated test file (`generateTests.ts`) name in the `scripts` section.
   - Create a test command for AI-generated tests(`generateTests.ts`).

4. **Update the `generateTests.ts` File:**

   - Modify the `generateTests.ts` file as needed.

5. **Refer to `generateTests.md` readme file for More Details.**

<!-- //// -->

<!-- ////////// -->

# Run OpenChat AI Test Cases

Follow these steps to run test cases for OpenChat AI:

## 1. Install Required Packages

Run the following command to install the necessary dependencies:

```sh
yarn install
```

## 2. Modify `generateTest.ts`

In the `generateTest.ts` file, add the files you want to test into the `TARGET_FILES` array.

## 3. Run the Command

Use the following command to generate the tests and automatically start testing them:

```sh
yarn generate-and-test
```

## 4. Review the Generated Files

Once the test generation is complete, review the generated files. Most issues will likely be related to imports, which you may need to resolve.

Ensure all necessary adjustments are made before finalizing the test cases.

   <!-- ///////////// -->
