// Please refer steps in generateTests.md file
// Step 1 : Step 1: Import Required Modules
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { TEST_FILES } from "./targetFiles";

dotenv.config();

// Step 2: Get the Project Directory Path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Step 3: Set Up OpenAI API Key
const openai = new OpenAI({ apiKey: process.env.VITE_OPENAI_KEY });

// Step 4: findFileInSrc(fileName)
function findFileInSrc(fileName) {
  const searchDir = path.join(__dirname, "src");
  let filePath: string | null = null;

  function searchRecursively(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        searchRecursively(fullPath);
      } else if (file.isFile() && file.name === fileName) {
        filePath = fullPath;
        return;
      }
    }
  }

  searchRecursively(searchDir);
  return filePath;
}

// Step 5: readTypeFile(typeFileName)
function readTypeFile(typeFileName) {
  if (!typeFileName) return "";

  const typeFilePath = findFileInSrc(typeFileName);
  if (!typeFilePath) {
    console.warn(`⚠️ Type file not found: ${typeFileName}`);
    return "";
  }

  return fs.readFileSync(typeFilePath, "utf-8");
}

// Step 6: generateTest(filePath, prompt, typesFile)
async function generateTest(filePath, prompt, typesFile) {
  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const relatedTypes = readTypeFile(typesFile);

    const fullPrompt = `${prompt}\n\n${relatedTypes}\n\n${fileContent}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: fullPrompt }],
      max_tokens: 1300,
    });

    return response.choices?.[0]?.message?.content?.trim() || "";
  } catch (error) {
    console.error(`❌ Error generating test for ${filePath}:`, error);
    return "";
  }
}

// Step 7: main()
async function main() {
  for (const { fileName, prompt, storePath, typesFile } of TEST_FILES) {
    const filePath = findFileInSrc(fileName);
    if (!filePath) {
      console.error(`⚠️ File not found: ${fileName}`);
      continue;
    }

    console.log(`⚡ Generating test for: ${filePath}`);
    const testContent = await generateTest(filePath, prompt, typesFile);

    if (testContent) {
      fs.mkdirSync(path.dirname(storePath), { recursive: true });
      await fs.promises.writeFile(storePath, testContent, "utf-8");
      console.log(`✅ Test created: ${storePath}`);
    }
  }
  console.log("🎉 Test files generated successfully!");
}

main().catch((error) => console.error("❌ Error:", error));
