import { debug, getInput } from '@actions/core';
import { Octokit } from '@octokit/rest';
import { context } from '@actions/github';

export async function addComment(body: string) {
    // Get the GitHub token from the input
    const githubToken = getInput('githubToken');
    // Throw an error if the GitHub token is not found
    if (!githubToken) throw new Error('GitHub token was not found');   

    const octokit = new Octokit({ auth: githubToken });
    const { issue, repository } = context.payload;

    if (issue && repository)
        await octokit.issues.createComment({
            owner: repository.owner.login,
            repo: repository.name,
            body,
            issue_number: issue.number
        });

    debug(`issue: ${issue}`);
    debug(`repository: ${repository}`);
    debug(`comment: ${body}`);
}