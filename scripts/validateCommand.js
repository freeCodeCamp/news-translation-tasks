/**
 * Validates slash commands and returns command information
 * @param {string} comment - The comment text to validate
 * @returns {Object} - Command validation result
 */
function validateCommand(comment) {
  // For ease of use, accept both /postedit and /post-edit.
  if (comment.startsWith('/postedit') || comment.startsWith('/post-edit')) {
    return {
      command: 'postedit',
      targetStatus: 'in Postediting',
      isValid: true
    };
  }
  
  // We can remove this condition for /translate when we move to /postedit command completely.
  // Keeping this for now to make the old command work during the transition period.
  if (comment.startsWith('/translate')) {
    return {
      command: 'translate',
      targetStatus: 'in Translation',
      isValid: true
    };
  }
  
  if (comment.startsWith('/review')) {
    return {
      command: 'review',
      targetStatus: 'in Review',
      isValid: true
    };
  }
  
  return {
    command: null,
    targetStatus: null,
    isValid: false
  };
}

/**
 * Main function to validate command and set outputs
 * @param {Object} params - Parameters from GitHub Actions
 */
async function main({ github, context, core }) {
  const comment = context.payload.comment.body;
  const result = validateCommand(comment);
  
  core.setOutput('valid_command', result.isValid.toString());
  core.setOutput('command', result.command);
  core.setOutput('target_status', result.targetStatus);
  
  if (!result.isValid) {
    core.setFailed('Invalid command. The comment must start with /postedit or /review.');
  }
}

module.exports = { validateCommand, main };