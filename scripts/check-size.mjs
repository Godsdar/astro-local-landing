#!/usr/bin/env node
// Checks the built page budget: HTML + CSS + JS must stay under 150 KB.
// Images and source maps are excluded from the budget.
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const DIST = "dist";
const BUDGET = 150 * 1024;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

let files;
try {
  files = walk(DIST);
} catch {
  console.error(`check-size: ${DIST}/ not found, run the build first`);
  process.exit(1);
}

const counted = files.filter((f) => [".html", ".css", ".js"].includes(extname(f)));
let total = 0;
for (const f of counted) total += statSync(f).size;

const kb = (n) => (n / 1024).toFixed(1);
console.log(`check-size: ${counted.length} files, ${kb(total)} KB (budget ${kb(BUDGET)} KB)`);
if (total > BUDGET) {
  console.error("check-size: FAIL, over budget");
  process.exit(1);
}
console.log("check-size: OK");
