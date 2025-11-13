/**
 * Sanitizes filenames to prevent path traversal and other security issues
 */

const path = require('path');

module.exports = async ({ github, context, core }) => {
  try {
    const filename = core.getInput('filename', { required: true });

    // Remove any path components, only keep the basename
    let sanitized = path.basename(filename);

    // Remove any potentially dangerous characters
    // Allow: alphanumeric, hyphens, underscores, dots
    sanitized = sanitized.replace(/[^a-zA-Z0-9\-_.]/g, '-');

    // Ensure the filename has a .md extension
    if (!sanitized.endsWith('.md')) {
      if (sanitized.includes('.')) {
        // Replace existing extension with .md
        sanitized = sanitized.substring(0, sanitized.lastIndexOf('.')) + '.md';
      } else {
        // Add .md extension
        sanitized = sanitized + '.md';
      }
    }

    // Prevent hidden files
    if (sanitized.startsWith('.')) {
      sanitized = sanitized.substring(1);
    }

    // Validate final filename
    if (sanitized === '' || sanitized === '.md') {
      core.setFailed('Sanitized filename is empty or invalid');
      return;
    }

    core.setOutput('sanitized_filename', sanitized);
    core.info(`Original filename: ${filename}`);
    core.info(`Sanitized filename: ${sanitized}`);

  } catch (error) {
    core.setFailed(`Filename sanitization failed: ${error.message}`);
  }
};
