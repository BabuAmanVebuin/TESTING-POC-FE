import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// THIS PROMPT WILL BE USED FOR UNIT TEST CASES

// let commonPropt = `YOU MUST GENERATE **complete and exhaustive Jest test cases** for the following TypeScript utility function in a React Vite (Yarn) project.

// MANDATORY REQUIREMENTS (DO NOT IGNORE ANY):
// - The test **MUST** be written using **Jest** as the testing framework.
// - The **test file name MUST** follow Jest conventions (e.g., '<filename>.test.ts').
// - The **test cases MUST** cover all possible scenarios, including **valid, edge, and invalid input cases**, and **both success and failure cases**.
// - **Only test the provided function keys (parameters)** and do not test any unrelated functionality.
// - **Mock dependencies only if necessary**, ensuring the focus is on testing the utility function provided.
// - **Use Jest’s 'describe', 'it', or 'test' blocks** to structure the tests appropriately.
// - **Include valid TypeScript imports and assertions** in the test file.
// - **The test code MUST be complete**, covering both **success** and **failure** paths.
// - **DO NOT skip any edge cases**, and **DO NOT ignore failure scenarios**. Make sure every potential input and output is covered in your test cases.
// - **DO NOT wrap the output inside code blocks like \`\`\`typescript\`**.
// - **Return ONLY valid TypeScript Jest test code**—**NO COMMENTS**, **NO EXPLANATIONS**, **NO EXTRA TEXT**.
// - **FAILURE TO FOLLOW THESE INSTRUCTIONS WILL BE CONSIDERED AN ERROR**.

//  **ADDITIONAL MANDATORY FIXES TO AVOID COMMON ERRORS:**
  
//   1. **Fix 'Cannot find module' errors by enforcing correct relative imports:**  
//      - The test file **MUST** use '../...' instead of '@src/'.
//      - Example:  
//        ✅ **Correct:**  
//        \`import { useTaskFilters } from "../features/crud/hooks/useTaskFilters";';\`  
//   2. **Ensure Jest resolves paths properly:**  
//      - The test **MUST** import modules using '../..' to match the actual project structure.
//      - The test **MUST NOT** use Jest's 'moduleNameMapper'.

//   3. **Fix 'right' does not exist error in fp-ts/Either:**  
//      - The test **MUST NOT** use 'result.right'. Instead, it **MUST** use 'E.getOrElse()' to extract values:
//        - ✅ **Correct:**  
//          \'const paymentRecord = E.getOrElse<ApplicationError, PaymentRecordDto>(
//             () => { throw new Error("Expected Right but got Left"); }
//          )(result);\'
//        - ❌ **Incorrect:**  
//          \'const paymentRecord = result.right;\'

//   **Final Note:**  
//   - The generated test file **MUST** run successfully in a TypeScript project using Jest.  
//   - **STRICTLY FOLLOW THESE INSTRUCTIONS OR THE OUTPUT WILL BE CONSIDERED INCORRECT.**

//   NOW, GENERATE THE TEST.

// ### Type Definitions:
// Provide only the necessary type definitions relevant to the function.`;

// THIS PROMPT WILL BE USED FOR E2E TEST CASES
let E2EPrompt = `Generate complete Cypress E2E test cases for the CRUDComponent to test adding, editing, deleting, searching, and filtering tasks. 

The test file should follow these guidelines:
- The tests **must** be written using **Cypress**.
- **Only test CRUD operations** (add, edit, delete, search, and filter tasks). Do not include other functionality.
- Test only the visible elements and actions as defined in the provided code.
- Use **data-testid** selectors for targeting elements (e.g., data-testid="task-title-{task.id}", data-testid="add-task").
- The **test file name** must follow Cypress conventions (e.g., 'cypress.cy.ts').
- **Do not include setup steps, explanations, or extra text**. Only include valid test cases and necessary imports.
- Ensure the test covers edge cases like empty inputs and invalid status as per the provided code.
- The test file **must include necessary imports** like the "Task" interface and other types used in the tests.
- Do not generate test cases for any functionality that is not visible or defined in the provided code.
- Return only valid Cypress test code without any extra comments, explanations, or text.

Type Definitions:
Provide only the necessary type definitions relevant to the CRUDComponent.`;


// THIS TEST_FILES WILL BE USED FOR E2E TEST CASES
export const TEST_FILES = [
  {
    fileName: "main.tsx",
    prompt: E2EPrompt,
    storePath: path.join(__dirname, "cypress", "e2e", "cypress.cy.ts"),
    typesFile: "taskTypes.ts",
  },
];



// THIS TEST_FILES WILL BE USED FOR UNIT TEST CASES
// export const TEST_FILES = [
//   {
//     fileName: "useTaskState.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "hooks",
//       "useTaskState.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
//   {
//     fileName: "useTaskManagement.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "hooks",
//       "useTaskManagement.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
//   {
//     fileName: "useTaskFilters.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "hooks",
//       "useTaskFilters.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
//   {
//     fileName: "useTaskSearch.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "hooks",
//       "useTaskSearch.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
  
//   {
//     fileName: "taskUtils.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "utils",
//       "taskUtils.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
//   {
//     fileName: "idUtils.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "utils",
//       "idUtils.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
//   {
//     fileName: "localStorageUtils.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "utils",
//       "localStorageUtils.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
//   {
//     fileName: "taskUtils.ts",
//     prompt: commonPropt,
//     storePath: path.join(
//       __dirname,
//       "src",
//       "__tests__",
//       "utils",
//       "taskUtils.test.ts"
//     ),
//     typesFile: "taskTypes.ts",
//   },
// ];
