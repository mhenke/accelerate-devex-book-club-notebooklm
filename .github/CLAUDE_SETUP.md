# Claude Code GitHub Actions Setup Guide

This repository includes GitHub Actions workflows for integrating Claude Code into your development workflow.

## 🚀 Quick Setup

### 1. Install Required GitHub App

You need to install the **Claude Code GitHub App** to your repository:

1. Go to the [Claude Code GitHub App](https://github.com/apps/claude-code)
2. Click "Install" or "Configure"
3. Select your repository or organization
4. Grant the necessary permissions:
   - **Contents**: Read and write (for making code changes)
   - **Issues**: Read and write (for creating and commenting on issues)
   - **Pull requests**: Read and write (for reviewing and commenting on PRs)
   - **Metadata**: Read (for repository information)

### 2. Configure Repository Secrets

Add the following secret to your repository:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for Claude access | Get from [Anthropic Console](https://console.anthropic.com/) → API Keys |

**Note**: The `GITHUB_TOKEN` is automatically provided by GitHub Actions and doesn't need to be configured.

### 3. Get Your Anthropic API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign in or create an account
3. Navigate to "API Keys" section
4. Click "Create Key"
5. Copy the key and add it as `ANTHROPIC_API_KEY` secret in your repository

## 📝 How to Use

### Basic Usage - @claude Mentions

Simply mention `@claude` in:
- **Issue comments**: Ask Claude to help with bugs, features, or questions
- **Pull request comments**: Request code reviews or suggestions
- **Pull request descriptions**: Ask Claude to review the entire PR

Example:
```
@claude can you review this CSS consolidation and suggest any improvements?
```

### Advanced Usage - Manual Workflows

You can trigger advanced Claude tasks manually:

1. Go to Actions → "Claude Code Advanced Features"
2. Click "Run workflow"
3. Choose a task:
   - **code-review**: Comprehensive code quality review
   - **security-audit**: Security vulnerability analysis
   - **performance-analysis**: Performance optimization suggestions
   - **documentation-update**: Documentation improvements
   - **dependency-update**: Package dependency review

### Daily Health Checks

The workflow automatically runs daily at 9 AM UTC to:
- Check code quality metrics
- Review linting and build results
- Identify technical debt
- Suggest improvements
- Create issues for critical problems

## 🔧 Workflow Features

### Main Workflow (`claude.yml`)
- **Triggers**: Issues, PR comments, PR reviews
- **Permissions**: Contents, pull-requests, issues (write access)
- **Security**: Includes security scanning of Claude's changes
- **Testing**: Runs tests after Claude makes changes

### Advanced Workflow (`claude-advanced.yml`)
- **Scheduled runs**: Daily health checks
- **Manual triggers**: On-demand specialized tasks
- **PR reviews**: Automatic code review for new pull requests
- **Comprehensive analysis**: Deep dives into specific areas

## 🛡️ Security Features

### Automatic Security Scanning
- Checks for hardcoded secrets in Claude's changes
- Validates that changes don't introduce security vulnerabilities
- Fails the workflow if potential issues are detected

### Safe Permissions
- Uses minimal required permissions
- GitHub token has limited scope
- All changes are committed with clear attribution

### Change Attribution
All changes made by Claude include:
```
Co-authored-by: Claude <claude@anthropic.com>
```

## 🎯 Best Practices

### For Issues
- Be specific about what you want Claude to do
- Provide context about the problem
- Mention relevant files or areas of the codebase

### For Pull Requests
- Ask Claude to focus on specific aspects (security, performance, etc.)
- Request line-by-line feedback for complex changes
- Use `[skip claude]` in PR title to skip automatic review

### For Code Reviews
- Tag Claude early in the development process
- Ask for suggestions on architecture decisions
- Request refactoring recommendations

## 🔍 Example Commands

```bash
# In issue comments:
@claude can you help optimize the CSS consolidation we just completed?

@claude please review the key-question text wrapping fix and suggest any improvements

@claude can you audit this codebase for potential security vulnerabilities?

# In PR comments:
@claude please review this responsive design implementation

@claude can you check if this follows our CSS architecture patterns?

@claude please suggest performance optimizations for this code
```

## 🚨 Troubleshooting

### Common Issues

1. **Claude doesn't respond**
   - Check that `ANTHROPIC_API_KEY` secret is set correctly
   - Verify the GitHub App is installed with proper permissions
   - Ensure you're mentioning `@claude` (case-sensitive)

2. **Permission errors**
   - Verify repository permissions in GitHub App settings
   - Check that workflow has proper permissions in YAML

3. **API rate limits**
   - Anthropic API has rate limits
   - Large repositories may hit token limits
   - Consider breaking large requests into smaller chunks

### Getting Help

- Check the Actions tab for workflow run details
- Review the workflow logs for specific error messages
- Ensure all required secrets are configured
- Verify GitHub App installation and permissions

## 📚 Additional Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Anthropic API Documentation](https://docs.anthropic.com/claude/reference)