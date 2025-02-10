import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let commonPropt = `Generate Jest test cases for the following TypeScript utility function in a React Vite (Yarn) project. Ensure:
- The test file name follows Jest conventions (e.g., '<filename>.test.ts').
- Jest can properly read and execute the test (no unnecessary imports or code).
- Only test the provided function keys (parameters), avoiding unrelated cases.
- Mock dependencies only if necessary.
- Use 'describe', 'it' or 'test' blocks for structuring.
- Include valid TypeScript imports and assertions.
- Cover valid, edge, and invalid input cases.
- Ensure all the possible cases for both success and failure cases are covered.
 **Do NOT wrap the output inside code blocks like \\\typescript**.
 **Only return pure TypeScript test code, without comments or explanations**.

Return a clean and optimized '.test.ts' file.
### Type Definitions:`;

export const TEST_FILES = [
  {
    fileName: "useTaskForm.ts",
    prompt: commonPropt,
    storePath: path.join(
      __dirname,
      "src",
      "__tests__",
      "hooks",
      "useTaskForm.test.ts"
    ),
    typesFile: "taskTypes.ts",
  },
  {
    fileName: "taskUtils.ts",
    prompt: commonPropt,
    storePath: path.join(
      __dirname,
      "src",
      "__tests__",
      "utils",
      "taskUtils.test.ts"
    ),
    typesFile: "taskTypes.ts",
  },
];
