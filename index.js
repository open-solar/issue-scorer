import * as core from '@actions/core';
// import * as github from '@actions/github';

async function run() {
  const priority = core.getInput('priority', { required: true });

  core.setOutput('score', priority);
}

run();
