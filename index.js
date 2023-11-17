/* eslint-disable camelcase */
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

  reach /= 100;
  confidence /= 100;

  const multiplier_reach = core.getInput('multiplier_reach') || 1;
  reach *= multiplier_reach;

  const multiplier_impact = core.getInput('multiplier_impact') || 1;
  impact *= multiplier_impact;

  const multiplier_confidence = core.getInput('multiplier_confidence') || 1;
  confidence *= multiplier_confidence;

  const multiplier_effort = core.getInput('multiplier_effort') || 1;
  effort *= multiplier_effort;

  const score = (reach * impact * confidence) / effort;

  core.setOutput('score', score);
}

run();
