module.exports = async ({github, context, core, projectName}) => {
  let issueComment = '';

  // List of the language leads
  const languageLeads = {
    spanish: 'RafaelDavisH',
    portuguese: 'DanielRosa74',
    italian: 'Dario-DC',
    japanese: 'sidemt',
    ukrainian: 'anastasiiauk',
    chinese: 'miyaliu666',
    korean: 'AlisonYoon',
    'test project': 'sidemt' // for testing
  }

  try {
    // Expecting the project name to be in  "[NEWS I18N] - Spanish" format
    const language = projectName.split('-')[1].trim().toLowerCase();
    const languageLead = languageLeads[language];
    if (!languageLead) {
      throw new Error(`Language lead not found for language: ${language}`);
    }

    // Make sure that the current user is the translator for this article,
    // then assign it to the language lead for review
    const issue = await github.rest.issues.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number
    });

    if (issue.data.assignees.some(assignee => assignee.login === context.actor)) {
      const response = await github.rest.issues.addAssignees({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        assignees: [languageLead]
      });
      if (response.status.toString().startsWith('2')) {
        issueComment = `@${ languageLead } This article is ready for review.`;
      } else {
        console.error('addAssignees returned HTTP status:', response.status);
        issueComment = `@${ context.actor } Something went wrong while assigning the issue to the reviewer. (HTTP status: ${ response.status })
        Please contact your language lead if the problem persists.`;
        core.setFailed('addAssignees returned an unexpected HTTP status.');
      }
    } else {
      issueComment = `@${ context.actor } Could not assign this issue to the reviewer.
      Check if you have translated this article as an assignee.`;
      core.setFailed('The commenter was not the translator of this issue.');
    }
  } catch (error) {
    console.error('An error has occurred while assigning the issue:', error);
    issueComment = `@${ context.actor } An error has occurred while assigning the issue to the reviewer.
    Please contact your language lead if the problem persists.`;
    core.setFailed('An error has occurred while assigning the issue.');
  }
  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: issueComment
  });
}
