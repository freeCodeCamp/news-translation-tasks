module.exports = async ({ github, context, core }) => {
  try {
    const ALLOWED_LANGUAGES = [
      'chinese',
      'spanish',
      'portuguese',
      'italian',
      'japanese',
      'korean',
      'ukrainian'
    ];

    const labelName = context.payload.label?.name;

    if (!labelName || !ALLOWED_LANGUAGES.includes(labelName.toLowerCase())) {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', `Label '${labelName}' is not an auto-translate language label`);
      core.info(`Skipping: Label '${labelName}' is not in the auto-translate language list`);
      return;
    }

    const issueBody = context.payload.issue?.body;
    if (!issueBody || issueBody.trim() === '') {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', 'Issue body is empty');
      core.setFailed('Issue body is required and must contain the article URL');
      return;
    }

    const urlPattern = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/;
    const match = issueBody.match(urlPattern);

    if (!match || !match[2]) {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', 'No valid URL found in issue body');
      core.setFailed('Issue body must contain a valid article URL in markdown link format: [Title](URL)');
      return;
    }

    const articleUrl = match[2];

    const validUrlPattern = /^https?:\/\/(www\.)?freecodecamp\.org\/news\/[a-z0-9\-]+\/?$/i;
    if (!validUrlPattern.test(articleUrl)) {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', 'URL is not a valid freeCodeCamp news article');
      core.setFailed('Article URL must be from freecodecamp.org/news and follow the expected format');
      return;
    }

    const issueTitle = context.payload.issue?.title;
    if (!issueTitle || issueTitle.trim() === '') {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', 'Issue title is empty');
      core.setFailed('Issue title is required');
      return;
    }

    const titleLangPattern = /^\[([a-zA-Z]{2,3})\]/;
    const titleMatch = issueTitle.match(titleLangPattern);

    if (!titleMatch || !titleMatch[1]) {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', 'Issue title does not contain language code in [lang] format');
      core.setFailed('Issue title must start with language code in brackets, e.g., [zh] or [es]');
      return;
    }

    const langCode = titleMatch[1].toLowerCase();

    const validLangPattern = /^[a-z]{2,3}$/;
    if (!validLangPattern.test(langCode)) {
      core.setOutput('is_valid', 'false');
      core.setOutput('skip_reason', `Invalid language code format: ${langCode}`);
      core.setFailed('Language code must be 2-3 lowercase letters');
      return;
    }

    core.setOutput('is_valid', 'true');
    core.setOutput('article_url', articleUrl);
    core.setOutput('lang_code', langCode);
    core.setOutput('label_name', labelName);

    core.info('All validations passed');
    core.info(`Language: ${langCode}`);
    core.info(`Article URL: ${articleUrl}`);
    core.info(`Label: ${labelName}`);

  } catch (error) {
    core.setOutput('is_valid', 'false');
    core.setOutput('skip_reason', `Validation error: ${error.message}`);
    core.setFailed(`Validation failed: ${error.message}`);
  }
};
