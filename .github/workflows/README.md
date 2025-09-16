# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the Accelerate DevEx Book Club project.

## 🤖 Claude Code Integration Workflows

### [`claude.yml`](./claude.yml)
Main Claude Code integration workflow that responds to @claude mentions in:
- Issues and issue comments
- Pull requests and PR comments
- Pull request reviews

**Features:**
- Automatic code changes and improvements
- Security scanning of Claude's modifications
- Test execution after changes
- Proper git attribution

### [`claude-advanced.yml`](./claude-advanced.yml)
Advanced Claude Code features including:
- Daily automated health checks (9 AM UTC)
- Manual workflow triggers for specialized tasks
- Automatic PR reviews
- Comprehensive code analysis

**Available Manual Tasks:**
- `code-review`: Complete code quality assessment
- `security-audit`: Security vulnerability analysis
- `performance-analysis`: Performance optimization review
- `documentation-update`: Documentation improvements
- `dependency-update`: Package dependency analysis

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