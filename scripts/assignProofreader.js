module.exports = async ({github, context, core}) => {
  let issueComment = '';

  // Check that no one else is assigned yet before assigning the current user
  try {
    const issue = await github.rest.issues.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number
    });

    if (issue.data.assignees.length === 0) {
      const response = await github.rest.issues.addAssignees({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        assignees: [context.actor]
      });
      if (response.status.toString().startsWith('2')) {
        issueComment = `@${ context.actor } We have assigned this article to you.`;
      } else {
        console.error('addAssignees returned HTTP status:', response.status);
        issueComment = `@${ context.actor } Something went wrong while assigning the issue. (HTTP status: ${ response.status })
        Please contact your language lead if the problem persists.`;
        core.setFailed('addAssignees returned an unexpected HTTP status.');
      }
    } else if (issue.data.assignees.length === 1 && issue.data.assignees[0].login === context.actor) {
      issueComment = `@${ context.actor } The article is already assigned to you.`;
      core.setFailed('The article is already assigned to the commenter.');
    } else {
      issueComment = `@${ context.actor } The article is already assigned to someone else.
      Please choose a different article.`;
      core.setFailed('The article is already assigned to other contributor.');
    }
  } catch (error) {
    console.error('An error has occurred while assigning the issue:', error);
    issueComment = `@${ context.actor } An error has occurred while assigning the issue to you.
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
