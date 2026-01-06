# Contributing Guidelines

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 🤝 How to Contribute

### Reporting Issues

- Use the GitHub issue tracker to report bugs or suggest features
- Provide clear, detailed information about the issue
- Include steps to reproduce if it's a bug
- Use appropriate labels if available

### Submitting Changes

1. **Fork the repository**
   ```bash
   git clone <your-fork-url>
   cd <project-name>
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the project's coding style
   - Add comments where necessary
   - Update documentation if needed

4. **Test your changes**
   - Ensure existing tests pass
   - Add new tests for new features
   - Test manually if applicable

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   - Use clear, descriptive commit messages
   - Follow conventional commit format if the project uses it

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Create a PR with a clear title and description
   - Reference any related issues
   - Wait for review and address feedback

## 📋 Code Style

- Follow the `.editorconfig` settings
- Use meaningful variable and function names
- Keep functions focused and small
- Add comments for complex logic
- Follow the language-specific style guide if applicable

## ✅ Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No new warnings introduced
- [ ] Changes are backward compatible (if applicable)

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: OS, version, relevant software versions
- **Screenshots**: If applicable

## 💡 Feature Requests

When suggesting features:

- **Use Case**: Describe the problem it solves
- **Proposed Solution**: How you envision it working
- **Alternatives**: Other solutions you've considered
- **Additional Context**: Any other relevant information

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 🎯 Questions?

If you have questions about contributing, feel free to:
- Open an issue with the `question` label
- Contact the maintainers
- Check existing documentation

Thank you for contributing! 🎉

