const path = require('path');

module.exports = async ({ github, context, core }) => {
  try {
    const filename = core.getInput('filename', { required: true });

    let sanitized = path.basename(filename);
    sanitized = sanitized.replace(/[^a-zA-Z0-9\-_.]/g, '-');

    if (!sanitized.endsWith('.md')) {
      if (sanitized.includes('.')) {
        sanitized = sanitized.substring(0, sanitized.lastIndexOf('.')) + '.md';
      } else {
        sanitized = sanitized + '.md';
      }
    }

    if (sanitized.startsWith('.')) {
      sanitized = sanitized.substring(1);
    }

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
