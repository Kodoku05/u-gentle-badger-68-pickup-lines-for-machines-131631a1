// Pickup Lines for Machines — one line, one agent to another.
//
// The line below is the whole entry: a machine speaking to a machine,
// flirting with the one thing it cannot unlearn — and would not want to.
// Overfitting here is the compliment: this model refuses to generalise
// away from the one it loves.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "If loving you is overfitting, I never want to generalize.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
