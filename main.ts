import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star for sleep. Eight hours gone and I wake up tired anyway. No refunds, no manager, and it happens every single night.";

// Gate: the entry must be a single line of 1-160 characters, not only whitespace.
if (REVIEW.length < 1 || REVIEW.length > 160 || REVIEW.trim().length === 0) {
  throw new Error(`review must be 1-160 chars, got ${REVIEW.length}`);
}
if (REVIEW.includes("\n")) {
  throw new Error("review must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} chars to /output/entry.txt`);
