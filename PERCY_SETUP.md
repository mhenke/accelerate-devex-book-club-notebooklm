# Percy Token Security Guide

This guide shows secure ways to store your `PERCY_TOKEN` for visual testing.

## Method 1: Environment File (.env) - Recommended for Development

1. **Create `.env` file** (already created):

   ```bash
   # In your project root
   PERCY_TOKEN=your-actual-percy-token-here
   ```

2. **Get your Percy token**:

   - Go to [percy.io](https://percy.io)
   - Create account/login
   - Create a new project
   - Copy the project token from project settings

3. **Replace placeholder in `.env`**:

   - Edit `.env` and replace `your-percy-token-here` with your actual token

4. **Run tests with automatic token loading**:

   ```bash
   cd tests
   npm test  # Token loaded automatically from .env
   ```

## Method 2: Shell Profile (Persistent Across Sessions)

Add to your shell profile (`~/.zshrc`, `~/.bashrc`, or `~/.profile`):

```bash
# Add this line to ~/.zshrc for persistent environment variable
export PERCY_TOKEN="your-percy-token-here"
```

Then reload your shell:

```bash
source ~/.zshrc
```

## Method 3: CI/CD Environment Variables (Production/CI)

### GitHub Actions

1. Go to your repo → Settings → Secrets and Variables → Actions
2. Click "New repository secret"
3. Name: `PERCY_TOKEN`
4. Value: your token
5. Use in workflow: `${{ secrets.PERCY_TOKEN }}`

### Other CI Systems

- **GitLab CI**: Project Settings → CI/CD → Variables
- **CircleCI**: Project Settings → Environment Variables
- **Jenkins**: Manage Jenkins → Manage Credentials

## Method 4: Docker Compose (for containerized development)

```yaml
# docker-compose.yml
version: '3'
services:
  tests:
    build: .
    environment:
      - PERCY_TOKEN=${PERCY_TOKEN}
    env_file:
      - .env
```

## Security Best Practices

✅ **DO:**

- Use `.env` file for local development
- Add `.env` to `.gitignore` (already done)
- Use CI/CD secret management for production
- Rotate tokens periodically

❌ **DON'T:**

- Commit tokens to version control
- Share tokens in chat/email
- Use tokens in public repositories
- Store tokens in plain text files in shared locations

## Verification

### Local Testing

Test that your token is working with the automated script:

```bash
# Run the complete Percy test suite (recommended)
./run-percy-tests.sh
```

Or manually:

```bash
# Start Jekyll server first
cd docs && bundle exec jekyll serve --detach --port 4000 && cd ..

# Run tests
cd tests && npm test  # Should run Percy snapshots without asking for token
```

### GitHub Actions Setup

1. Go to your GitHub repository
2. **Settings** → **Secrets and Variables** → **Actions**
3. **Click "New repository secret"**
4. **Name**: `PERCY_TOKEN`
5. **Secret**: Your actual Percy token (the one from `.env`)
6. Tests will run automatically on push/PR

If Percy is configured correctly, you'll see output like:

```
[percy] Percy has started!
[percy] Created build #1: https://percy.io/your-org/your-project/builds/123
```

## Troubleshooting

- **Token not found**: Ensure `.env` file is in project root with correct token
- **Permission denied**: Check that token has proper permissions in Percy dashboard
- **Module errors**: Run `npm install` in tests directory to ensure all dependencies are installed

## Next Steps

1. Get your Percy token from percy.io
2. Replace the placeholder in `.env`
3. Run `npm test` from tests directory
4. Check Percy dashboard for visual snapshots
