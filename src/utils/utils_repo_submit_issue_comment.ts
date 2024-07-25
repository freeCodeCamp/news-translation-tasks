
import { debug } from '@actions/core';
import { context } from '@actions/github';
import { Octokit } from '@octokit/rest';
import { main_options } from '..';


export class utils_repo_submit_issue_comment_options extends main_options{
    str_comment: string;
}
/**
 * Submits a comment to a GitHub issue.
 * @param options - The options for submitting the comment.
 * @returns A promise that resolves when the comment is submitted.
 * @throws An error if the GitHub token is not provided.
 */
export async function utils_repo_submit_issue_comment(options: utils_repo_submit_issue_comment_options) {

    const { str_comment, with_github_token } = options;

    if (!with_github_token) throw new Error('GitHub token was not found');

    const octokit = new Octokit({ auth: with_github_token });
    const { issue, repository } = context.payload;

    if (issue && repository) {
        await octokit.issues.createComment({
            owner: repository.owner.login,
            repo: repository.name,
            body: str_comment,
            issue_number: issue.number
        });
    }

    debug(`issue: ${issue}`);
    debug(`repository: ${repository}`);
    debug(`comment: ${str_comment}`);
}