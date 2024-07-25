// 导出一个异步函数，接收包含 github、context 和 core 的对象作为参数
module.exports = async ({ github, context, core }) => {
  // 初始化一个空字符串，用于存储将要添加到 issue 的评论内容
  let issueComment = '';

  // 检查当前 issue 是否已经被分配给其他人，如果没有则分配给当前用户
  try {
    // 获取当前 issue 的详细信息
    const issue = await github.rest.issues.get({
      owner: context.repo.owner, // 仓库所有者
      repo: context.repo.repo, // 仓库名称
      issue_number: context.issue.number // issue 编号
    });

    // 如果当前 issue 没有被分配给任何人
    if (issue.data.assignees.length === 0) {
      // 将当前用户分配给该 issue
      const response = await github.rest.issues.addAssignees({
        issue_number: context.issue.number, // issue 编号
        owner: context.repo.owner, // 仓库所有者
        repo: context.repo.repo, // 仓库名称
        assignees: [context.actor] // 分配的用户
      });
      // 如果分配成功（HTTP 状态码以 '2' 开头）
      if (response.status.toString().startsWith('2')) {
        // 设置评论内容，通知用户他们已被分配到该文章
        issueComment = `@${context.actor} We have assigned this article to you for proofreading.`;
      } else {
        // 如果分配失败，记录错误状态码
        console.error('addAssignees returned HTTP status:', response.status);
        // 设置评论内容，提示用户分配失败
        issueComment = `@${context.actor} Something went wrong while assigning the issue. (HTTP status: ${response.status})
          Please contact your language lead if the problem persists.`;
        // 标记工作流失败
        core.setFailed('addAssignees returned an unexpected HTTP status.');
      }
      // 如果当前 issue 已经被分配给一个用户，并且该用户就是当前用户
    } else if (
      issue.data.assignees.length === 1 &&
      issue.data.assignees[0].login === context.actor
    ) {
      // 设置评论内容，通知用户该文章已经分配给他们
      issueComment = `@${context.actor} The article is already assigned to you for proofreading.`;
      // 标记工作流失败
      core.setFailed('The article is already assigned to the commenter.');
      // 如果当前 issue 已经被分配给其他用户
    } else {
      // 设置评论内容，通知用户该文章已经分配给其他人，并建议他们选择其他文章进行校对
      issueComment = `@${context.actor} The article is already assigned to someone else.
        Please choose a different article to proofread.`;
      // 标记工作流失败
      core.setFailed('The article is already assigned to another contributor.');
    }
    // 捕获获取 issue 详情或分配任务过程中发生的错误
  } catch (error) {
    // 记录错误信息
    console.error('An error has occurred while assigning the issue:', error);
    // 设置评论内容，通知用户发生了错误，并建议他们联系语言负责人
    issueComment = `@${context.actor} An error has occurred while assigning the issue to you.
      Please contact your language lead if the problem persists.`;
    // 标记工作流失败
    core.setFailed('An error has occurred while assigning the issue.');
  }
  // 在当前 issue 中添加一条评论，内容为之前设置的 issueComment
  await github.rest.issues.createComment({
    issue_number: context.issue.number, // issue 编号
    owner: context.repo.owner, // 仓库所有者
    repo: context.repo.repo, // 仓库名称
    body: issueComment // 评论内容
  });
};
