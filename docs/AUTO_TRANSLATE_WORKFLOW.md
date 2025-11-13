# Auto-Translate Workflow Documentation

## Overview

The Auto-Translate Workflow (`auto-translate-secure.yml`) automates the process of fetching, translating, and committing articles when maintainers add a language label to an issue.

## How It Works

### User Story

1. **Maintainer adds a language label** (e.g., `chinese`, `spanish`, `portuguese`) to an issue
2. **Workflow validates** the issue content and label
3. **Article is fetched** from freeCodeCamp News and converted to Markdown
4. **Original is committed** to `main` branch under:
   - `./articles/_raw/` (backup)
   - `./articles/{lang}/` (working copy)
5. **Workflow switches** to `auto-translate` branch
6. **Translation is performed** using OpenAI API via `articles-auto-translate-action`
7. **Translated file is committed** to `auto-translate` branch
8. **Contributors proofread** the AI translation on the `auto-translate` branch
9. **Pull request is created** from `auto-translate` to `main` to compare with English original

### Workflow Stages

```
Issue Created → Label Added → Validation → Fetch Article → Commit to main
                                 ↓
                            auto-translate branch → Translate → Commit → Ready for PR
```

## Supported Languages

The workflow triggers only on these language labels:
- `chinese` (zh)
- `spanish` (es)
- `portuguese` (pt)
- `italian` (it)
- `japanese` (ja)
- `korean` (ko)
- `ukrainian` (uk)

## Issue Format Requirements

### Issue Title
Must start with language code in brackets:
```
[zh] Article Title in Chinese
[es] Título del artículo en español
```

### Issue Body
Must contain article URL in Markdown link format:
```markdown
[Original Title](https://www.freecodecamp.org/news/article-slug/)
```

**Valid URL format:**
- Must be from `freecodecamp.org/news`
- Must follow pattern: `https://www.freecodecamp.org/news/article-slug/`

## Security Measures

This workflow was built from scratch with security as the top priority, addressing the vulnerabilities that caused the previous workflow to be disabled.

### 1. **Input Validation & Sanitization**

#### Label Whitelist
- Only allows predefined language labels
- Rejects any other labels to prevent abuse
- See: `validateAutoTranslateInput.js`

#### URL Validation
- Validates URLs against strict pattern
- Only allows freeCodeCamp News articles
- Prevents arbitrary URL fetching
- Pattern: `^https?://(www\.)?freecodecamp\.org\/news\/[a-z0-9\-]+\/?$`

#### Language Code Validation
- Validates against pattern: `^[a-z]{2,3}$`
- Prevents path traversal via malicious lang codes
- Ensures only lowercase 2-3 letter codes

#### Filename Sanitization
- Removes all path components (only basename allowed)
- Strips dangerous characters
- Ensures `.md` extension
- Prevents hidden files
- Pattern: `[^a-zA-Z0-9._-]` replaced with `-`

### 2. **No Code Injection**

#### Safe Variable Usage
- All user inputs are validated before use
- Environment variables are set from validated outputs only
- No direct interpolation of user-controlled data in shell commands
- Uses `${{ }}` syntax properly to prevent injection

#### No Eval or Dynamic Execution
- No `eval()` calls
- No dynamic script generation from user input
- All scripts are pre-defined in repository

### 3. **Path Traversal Prevention**

#### Safe File Operations
- Always use `basename` to strip path components
- Validate all paths before operations
- No user-controlled directory traversal
- All file operations within predefined directories

#### Defense in Depth
- Multiple validation layers
- Validation at both workflow and script level
- Re-validation before critical operations

### 4. **Secure Git Operations**

#### Push Retry with Exponential Backoff
- Retries: 4 attempts
- Wait times: 2s, 4s, 8s, 16s
- Prevents network-related failures
- Uses `-u` flag for proper branch tracking

#### Conflict Resolution
- Checks for unfinished merges
- Cleans up properly before operations
- Uses stash for safe rebasing
- Prefers `theirs` strategy for auto-merge

### 5. **Principle of Least Privilege**

#### Job-Level Permissions
- Validation job: `issues: read` only
- Translation job: `issues: write`, `contents: write`
- Notify job: `issues: write` only

#### Concurrency Control
- Prevents concurrent runs on same issue
- Uses `concurrency` with issue number grouping
- `cancel-in-progress: false` to prevent data loss

### 6. **Error Handling & Transparency**

#### Comprehensive Validation
- Validates at multiple stages
- Clear error messages for users
- Fails fast on invalid input

#### User Notifications
- Comments on issue with progress
- Success message with file links
- Failure message with workflow run link
- Skip notification only when needed

### 7. **External Dependencies**

#### Trusted Actions Only
- `actions/checkout@v4` - Official GitHub action
- `actions/github-script@v7` - Official GitHub action
- `freecodecamp/article-webpage-to-markdown-action@dev` - freeCodeCamp official
- `freeCodeCamp/articles-auto-translate-action@main` - freeCodeCamp official

#### Pin to Specific Versions
- Major version pinning for official actions
- Branch pinning for freeCodeCamp actions
- Reduces supply chain attack risk

### 8. **Secure Backup Strategy**

#### Temporary File Handling
- Uses `/tmp/` for backup (outside git working directory)
- Prevents accidental commits of temporary files
- Cleans up properly after use

## Comparison with Old Workflow

### Old Workflow Issues (Disabled)
- ❌ Used slash commands with potential injection
- ❌ Triggered on all labels
- ❌ Limited input validation
- ❌ Unsafe variable interpolation
- ❌ Complex inline scripts

### New Workflow Improvements
- ✅ No slash commands (label-based trigger)
- ✅ Whitelist of allowed labels
- ✅ Comprehensive input validation
- ✅ Safe variable handling
- ✅ Modular validation scripts
- ✅ Defense in depth approach
- ✅ Clear security boundaries

## Usage

### For Maintainers

1. Review the issue to ensure:
   - Valid freeCodeCamp article URL
   - Proper title format with language code
   - Content is appropriate for translation

2. Add the appropriate language label:
   - `chinese` for Chinese translations
   - `spanish` for Spanish translations
   - `portuguese` for Portuguese translations
   - etc.

3. Workflow automatically:
   - Validates the issue
   - Fetches and commits the article
   - Translates using AI
   - Posts comment with next steps

### For Contributors

After the workflow completes:

1. Check the workflow comment on the issue
2. Click the "Open github.dev" link
3. Review and edit the translation on the `auto-translate` branch
4. Commit your changes
5. Create a PR from `auto-translate` to `main`

### For Reviewers

When a PR is created:

1. Review the translated content
2. Compare with the English original in `articles/_raw/`
3. Check for:
   - Accuracy of translation
   - Proper formatting
   - Code blocks preserved
   - Links working correctly
4. Request changes or approve

## Monitoring & Debugging

### Check Workflow Status
```bash
gh run list --workflow=auto-translate-secure.yml
```

### View Workflow Logs
```bash
gh run view <run-id> --log
```

### Common Issues

#### Issue: Workflow doesn't trigger
- **Check**: Is the label in the allowed list?
- **Check**: Is the issue (not PR) labeled?

#### Issue: Validation fails
- **Check**: Does issue body have proper URL format?
- **Check**: Does issue title start with `[lang]`?
- **Check**: Is the URL from freecodecamp.org/news?

#### Issue: Translation fails
- **Check**: Is OPENAI_API_KEY secret configured?
- **Check**: Are there API rate limits?
- **Check**: Check translation action logs

#### Issue: Push fails
- **Check**: Branch protection rules
- **Check**: Workflow permissions
- **Check**: Network connectivity

## Maintenance

### Adding New Languages

1. Update `validateAutoTranslateInput.js`:
   ```javascript
   const ALLOWED_LANGUAGES = [
     // ... existing languages
     'new-language',
   ];
   ```

2. Create issue template in `.github/ISSUE_TEMPLATE/`:
   ```markdown
   ---
   name: Translation Task (Auto)
   labels: ["new-language"]
   ---
   ```

3. Test with a sample issue

### Updating Validation Rules

Edit `scripts/validateAutoTranslateInput.js`:
- Modify URL validation pattern
- Update language code pattern
- Add new validation checks

### Security Updates

When updating:
1. Review all user input handling
2. Check for new injection vectors
3. Update this documentation
4. Test with malicious inputs
5. Get security review

## Testing

### Test Cases

1. **Valid Issue**: Standard format, valid URL, correct label
2. **Invalid URL**: Non-freeCodeCamp URL
3. **Invalid Title**: Missing language code
4. **Invalid Label**: Non-language label
5. **Empty Body**: No URL in body
6. **Malicious Filename**: Path traversal attempt
7. **Injection Attempt**: Special characters in inputs

### Manual Testing

```bash
# Create a test issue
gh issue create --title "[zh] Test Article" --body "[Test](https://www.freecodecamp.org/news/test-article/)" --label "chinese"

# Check workflow run
gh run watch

# Verify files created
ls -la articles/_raw/
ls -la articles/zh/

# Check auto-translate branch
git fetch origin auto-translate
git log origin/auto-translate
```

## Support

For issues or questions:
1. Check this documentation
2. Review workflow logs
3. Open an issue with the `workflow` label
4. Tag repository maintainers

## References

- [GitHub Actions Security Best Practices](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
