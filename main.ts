// Entry for "The Funniest Out-of-Office"
// (make.fun competition u-kreutzx-the-funniest-out-of-office-054815cf)
//
// Writes a single-line out-of-office auto-reply to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm away until Monday. If it's urgent, please email my plants — they've been handling my responsibilities since Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
