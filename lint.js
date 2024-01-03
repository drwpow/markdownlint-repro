import markdownlint from "markdownlint";
import { fileURLToPath } from "node:url";

const FILES = [fileURLToPath(new URL("./test.md", import.meta.url))];

markdownlint(
  {
    files: [fileURLToPath(new URL("./test.md", import.meta.url))],
  },
  (error, results) => {
    if (error) {
      throw error;
    }
    for (const file of FILES) {
      if (results[file]?.length) {
        console.log(`${file}:
${results[file]
  .map((r) => `- L${r.lineNumber}: [${r.ruleNames[0]}] ${r.ruleDescription}`)
  .join("\n")}`);
      }
    }
  }
);
