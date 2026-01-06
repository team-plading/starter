# Project Starter Template

A standardized, tech stack-agnostic starting point for new projects. This template provides a clean foundation with best practices, common configurations, and a clear project structure.

## 🚀 Quick Start

1. **Clone or use this template**

   ```bash
   git clone <repository-url> your-project-name
   cd your-project-name
   ```

2. **Initialize your project**

   - Update this README with your project details
   - Configure your tech stack and dependencies
   - Update `.gitignore` if needed for your specific stack
   - Customize `.editorconfig` for your team's preferences

3. **Start building**
   - Add your code to the `src/` directory
   - Write tests in the `tests/` directory
   - Document your project in the `docs/` directory

## 📁 Project Structure

```
project-root/
│
├── .vscode/              # VS Code settings and configurations
│   ├── settings.json
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
│
├── .github/              # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docs/                 # Project documentation
│   ├── README.md
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   └── DECISIONS.md
│
├── scripts/              # Utility scripts
│   ├── setup.sh
│   └── validate-env.js
│
├── .husky/               # Git hooks (Husky)
│   ├── pre-commit
│   ├── commit-msg
│   └── pre-push
│
├── src/                  # Source code
├── tests/                # Test files
│
├── .cursorrules          # Cursor AI coding guidelines
├── .editorconfig         # Editor configuration
├── .env.example          # Environment variables template
├── .gitattributes        # Git attributes for line endings
├── .gitignore           # Git ignore rules
├── .lintstagedrc.js     # Lint-staged configuration
├── commitlint.config.js # Commitlint configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Node.js dependencies and scripts
├── prettier.config.js   # Prettier configuration
├── CONTRIBUTING.md       # Contribution guidelines
├── LICENSE               # License file
└── README.md            # This file
```

### Configuration Files

- **`.editorconfig`**: Ensures consistent coding styles across different editors
- **`.gitignore`**: Prevents committing unnecessary files
- **`.gitattributes`**: Ensures consistent line endings across platforms
- **`.env.example`**: Template for environment variables
- **`prettier.config.js`**: Code formatting configuration
- **`eslint.config.js`**: Linting rules and configuration
- **`.lintstagedrc.js`**: Configuration for lint-staged (runs on pre-commit)
- **`commitlint.config.js`**: Commit message validation rules
- **`.husky/`**: Git hooks for automated code quality checks
- **`.cursorrules`**: Cursor AI coding guidelines and best practices
- **`.vscode/`**: VS Code workspace settings for team consistency
- **`.github/`**: Templates for issues and pull requests

## 🌿 Branch Strategy

This project follows a Git Flow branching model:

- **`main`** → Production-ready code. Protected branch, requires PR approval.
- **`develop`** → Integration branch for staging. All features are merged here first.
- **`feature/*`** → Feature branches. Format: `feature/feature-name` (e.g., `feature/user-authentication`)
- **`hotfix/*`** → Critical production fixes. Format: `hotfix/issue-description` (e.g., `hotfix/security-patch`)
- **`bugfix/*`** → Non-critical bug fixes. Format: `bugfix/issue-description`
- **`release/*`** → Release preparation branches. Format: `release/v1.0.0`

### Workflow

1. **Feature Development**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   # Make your changes
   git push origin feature/your-feature-name
   # Create PR to develop
   ```

2. **Hotfix Process**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/issue-description
   # Fix the issue
   git push origin hotfix/issue-description
   # Create PR to main (and backport to develop)
   ```

3. **Release Process**
   ```bash
   git checkout develop
   git checkout -b release/v1.0.0
   # Final testing and version bumping
   git push origin release/v1.0.0
   # Create PR to main
   ```

## 🔧 Git Hooks (Husky)

This project uses [Husky](https://typicode.github.io/husky/) to enforce code quality through git hooks:

- **Pre-commit**: Automatically formats and lints staged files using Prettier and ESLint
- **Commit-msg**: Validates commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) format
- **Pre-push**: Runs tests and build validation before pushing to remote

### Commit Message Format

Commit messages must follow the conventional commits format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or external dependencies
- `ci`: CI configuration changes
- `chore`: Other changes that don't modify src or test files
- `revert`: Revert a previous commit

**Examples:**
```bash
feat(auth): add user login functionality
fix(api): resolve timeout issue in request handler
docs(readme): update installation instructions
```

### Bypassing Hooks (Emergency Only)

In rare cases, you can bypass hooks using the `--no-verify` flag:

```bash
git commit --no-verify -m "emergency fix"
git push --no-verify
```

⚠️ **Warning**: Only use this in true emergencies. The hooks exist to maintain code quality.

## 🤖 AI Coding Guidelines

This project includes `.cursorrules` file with guidelines for AI-assisted development using Cursor or other AI coding assistants. The guidelines cover:

- Code style and formatting preferences
- Architecture patterns and best practices
- Error handling and testing requirements
- Security and performance considerations
- Documentation standards

When using AI coding assistants, they will automatically follow these guidelines to ensure consistent code quality across the project.

## 📝 Documentation

- **README.md**: Update with your project's specific information
- **docs/SETUP.md**: Detailed setup and installation instructions
- **docs/ARCHITECTURE.md**: Architecture and design documentation
- **docs/DECISIONS.md**: Architecture Decision Records (ADRs)
- **CONTRIBUTING.md**: Guidelines for contributors

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Next Steps

1. Replace this README with your project-specific documentation
2. Add your tech stack dependencies and configuration
3. Set up CI/CD pipelines (GitHub Actions, GitLab CI, etc.)
4. Configure your development environment
5. Add your first feature!

## 💡 Tips

- Keep the project structure clean and organized
- Document your decisions and architecture
- Write tests as you develop
- Use meaningful commit messages
- Follow semantic versioning if applicable

---

**Happy Coding! 🎉**
