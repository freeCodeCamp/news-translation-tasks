/**
 * Validates slash commands and returns command information
 * @param {string} comment - The comment text to validate
 * @returns {Object} - Command validation result
 */
export function validateCommand(comment) {
  const commandMap = {
    "/postedit": { command: "postedit", targetStatus: "in Postediting" },
    "/post-edit": { command: "postedit", targetStatus: "in Postediting" },
    "/translate": { command: "translate", targetStatus: "in Translation" },
    "/review": { command: "review", targetStatus: "in Review" },
  };

  for (const [prefix, config] of Object.entries(commandMap)) {
    if (comment.startsWith(prefix)) {
      return { ...config, isValid: true };
    }
  }

  return { command: null, targetStatus: null, isValid: false };
}

/**
 * Main function to validate command and set outputs
 * @param {Object} params - Parameters from GitHub Actions
 */
export async function main({ github, context, core }) {
  const comment = context.payload.comment.body;
  const result = validateCommand(comment);

  core.setOutput("valid_command", result.isValid.toString());
  core.setOutput("command", result.command);
  core.setOutput("target_status", result.targetStatus);

  if (!result.isValid) {
    core.setFailed(
      "Invalid command. The comment must start with /postedit or /review."
    );
  }
}
