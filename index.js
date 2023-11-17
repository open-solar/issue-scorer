/* eslint-disable no-console */
import * as core from '@actions/core';
// import * as github from '@actions/github';

async function run() {
  const values = core.getInput('values', { required: true });
  let [reach, impact, confidence, effort] = values.split(',');

  reach = parseFloat(reach);
  impact = parseFloat(impact);
  confidence = parseFloat(confidence);
  effort = parseFloat(effort);

  if (
    Number.isNaN(reach)
    || Number.isNaN(impact)
    || Number.isNaN(confidence)
    || Number.isNaN(effort)
  ) {
    console.log(
      "Couldn't resolve all RICE vars: ",
      reach,
      impact,
      confidence,
      effort,
      values,
    );
    return;
  }

  const score = (reach * impact * confidence) / effort;

  core.setOutput('score', score);
}

run();
