# Setup Guide

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

   This will automatically set up Husky git hooks via the `prepare` script.

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Validate environment**
   ```bash
   npm run validate-env
   # or
   node scripts/validate-env.js
   ```

5. **Run setup script** (if available)
   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

## Git Hooks Setup

This project uses Husky for git hooks. After installing dependencies, the hooks are automatically configured.

### What the hooks do:

- **Pre-commit**: Formats and lints your staged files before committing
- **Commit-msg**: Validates that commit messages follow conventional commits format
- **Pre-push**: Runs tests and build checks before pushing to remote

### Commit Message Format

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>
```

Example: `feat(auth): add user login functionality`

See the main [README.md](../README.md#-git-hooks-husky) for more details.

## AI Coding Guidelines

This project includes `.cursorrules` file that provides guidelines for AI coding assistants. When using Cursor or similar tools, they will automatically follow these guidelines to ensure consistent code quality.

## Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Troubleshooting

See [ARCHITECTURE.md](./ARCHITECTURE.md) for more details.

