import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["status"], "ready for closure review");
console.log("Fixture passed");
const comparison = {
  "id": "IR-011",
  "finding": "Logging interrupted",
  "evidence": [
    "E-003"
  ],
  "fix": "Restore logging",
  "retest": "failed",
  "owner": "Cloud Operations"
};
assert.deepEqual(analyze(comparison)["status"], "open pending verification");
console.log("Comparison fixture passed");
