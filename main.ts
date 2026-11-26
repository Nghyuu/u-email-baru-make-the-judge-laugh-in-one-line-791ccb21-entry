// Make the Judge Laugh in One Line — entry program.
// Writes exactly one funny line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// No data files are read; the line is embedded below. Output goes only
// to $MAKEFUN_OUTPUT_DIR (never process.cwd() and never ./output).

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "You've heard every joke twice — so this is my second telling: I asked my boss for a raise, and he said yes.";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
