# Cybersecurity Final Report

Generate a one-page incident report with proof, a fix, and a verification decision.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/cyber-final-report/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "id": "IR-010",
  "title": "Incident report",
  "finding": "Synthetic AWS CloudTrail logging interruption",
  "impact": "Potential visibility gap in the synthetic lab",
  "evidence": [
    "E-001 StopLogging at 10:01 UTC",
    "E-002 StartLogging at 10:09 UTC"
  ],
  "remediation": {
    "fix": "Restore logging and restrict StopLogging to break-glass access.",
    "owner": "Cloud Operations"
  },
  "verification": "passed",
  "status": "ready for closure review"
}
```

## Scope

Synthetic lab inputs and deterministic rules. Review results before applying them to a real incident.
