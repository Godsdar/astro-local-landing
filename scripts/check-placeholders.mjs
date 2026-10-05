#!/usr/bin/env node
// Fails if the built HTML still contains leftover placeholder tokens.
// "Demo" and "example.com" are allowed because the demo uses them on purpose.
import { readdirSync, statSync, readFileSync } from "node:fs";
import { join, extname } from "node:path";

const DIST = "dist";
const BAD = /todo|lorem ipsum|placeholder|\bxxx\b/gi;

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
  files = walk(DIST).filter((f) => extname(f) === ".html");
} catch {
  console.error(`check-placeholders: ${DIST}/ not found, run the build first`);
  process.exit(1);
}

const hits = [];
for (const file of files) {
  const cleaned = readFileSync(file, "utf8").replace(/example\.com/gi, "").replace(/demo/gi, "");
  const found = cleaned.match(BAD);
  if (found) hits.push(`${file}: ${[...new Set(found)].join(", ")}`);
}

if (hits.length) {
  console.error("check-placeholders: FAIL");
  for (const h of hits) console.error(" - " + h);
  process.exit(1);
}
console.log(`check-placeholders: OK (${files.length} html files)`);
