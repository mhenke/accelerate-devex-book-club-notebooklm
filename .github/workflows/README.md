# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the Accelerate DevEx Book Club project.

## 🤖 Claude Code Integration Workflows

### [`claude.yml`](./claude.yml)
Main Claude Code integration workflow using the official `anthropics/claude-code-action@v1`:
- Responds to @claude mentions in issue comments and PR review comments
- Automatically detects when to activate based on workflow context
- Includes optional test validation after Claude's changes

**Features:**
- Automatic code changes and improvements
- Test execution after changes
- Simplified v1.0 configuration

### [`claude-advanced.yml`](./claude-advanced.yml)
Manual workflow triggers for specialized Claude tasks:

**Available Manual Tasks:**
- `code-review`: Complete code quality assessment
- `security-audit`: Security vulnerability analysis
- `performance-analysis`: Performance optimization review
- `documentation-update`: Documentation improvements

## 🚀 Setup Instructions

See [CLAUDE_SETUP.md](../CLAUDE_SETUP.md) for complete setup instructions including:
- GitHub App installation
- API key configuration
- Usage examples
- Troubleshooting guide

## 🔐 Required Secrets

| Secret | Description |
|--------|-------------|
| `ANTHROPIC_API_KEY` | API key from [Anthropic Console](https://console.anthropic.com/) |

## 📋 Permissions

These workflows require the following GitHub permissions:
- `contents: write` - For making code changes
- `pull-requests: write` - For PR comments and reviews
- `issues: write` - For creating and commenting on issues
- `security-events: write` - For security scanning results

## 💡 Usage Examples

```bash
# Ask Claude to review code in an issue:
@claude can you review the CSS consolidation and suggest improvements?

# Request PR feedback:
@claude please analyze this responsive design implementation

# Manual security audit:
# Go to Actions → "Claude Code Advanced Features" → Run workflow → security-audit
```

## 🛠️ Customization

### Modifying Triggers
Edit the `on:` section in workflow files to change when they run.

### Adding Custom Tasks
Add new task options in the `workflow_dispatch` inputs section of `claude-advanced.yml`.

### Adjusting Permissions
Modify the `permissions:` section based on your repository's needs.

### Security Configuration
Update the security scanning steps in the `security-check` job to use your preferred tools.