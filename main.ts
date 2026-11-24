// Entry for "The Funniest Out-of-Office"
// (make.fun competition u-kreutzx-the-funniest-out-of-office-054815cf)
//
// Writes a single-line out-of-office auto-reply to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm away until Monday. If it's urgent, please email my plants — they've been handling my responsibilities since Tuesday.";

mkdirSync("/output", { recursive: true });
// Gate the brief's own limits before writing: one line, 1-140 chars.
// Failing loudly here beats shipping a reply the judge would reject.
if (REPLY.length < 1 || REPLY.length > 140 || REPLY.includes("\n")) {
  throw new Error(`reply must be one line of 1-140 chars, got ${REPLY.length}`);
}
writeFileSync("/output/entry.txt", REPLY, "utf8");
