import fs from "node:fs";
import path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "I renamed the error to 'expected behavior' and closed the ticket. Technically, it works now.";

fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, line, "utf8");
fs.chmodSync(outFile, 0o644);
