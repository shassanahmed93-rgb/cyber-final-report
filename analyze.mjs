export function analyze(input) {
  if (!input.evidence.length || !input.fix || !input.owner) throw new Error("Evidence, remediation and an owner are required.");
  return {id:input.id, title:"Incident report", finding:input.finding, impact:"Potential visibility gap in the synthetic lab", evidence:input.evidence, remediation:{fix:input.fix,owner:input.owner}, verification:input.retest, status:input.retest === "passed" ? "ready for closure review" : "open pending verification"};
}
