# Ricky V1 API - Project Information

## 📦 Project Details

- **Name**: ricky-v1-api
- **Version**: 1.0.0
- **Description**: Node.js API project with modern tooling
- **License**: ISC

## 🛠️ Technology Stack

### Core Technologies

| Technology | Version | Purpose                           |
| ---------- | ------- | --------------------------------- |
| Node.js    | 24.0.0  | Runtime environment               |
| pnpm       | 10.0.0  | Package manager                   |
| Express.js | 4.21.1  | Web framework                     |
| JavaScript | ES2021+ | Programming language (ES Modules) |

### Development Tools

| Tool                   | Version | Purpose                |
| ---------------------- | ------- | ---------------------- |
| ESLint                 | 9.15.0  | Code linting           |
| Prettier               | 3.3.3   | Code formatting        |
| Husky                  | 9.1.7   | Git hooks              |
| lint-staged            | 15.2.10 | Pre-commit linting     |
| eslint-plugin-prettier | 5.2.1   | Prettier integration   |
| eslint-config-prettier | 9.1.0   | ESLint-Prettier config |

## ✨ Key Features

### 1. **Fixed Versions**

All dependencies use exact versions (no `^` or `~`):

- Ensures consistent builds across environments
- Prevents unexpected breaking changes
- Explicit version updates required

### 2. **Modern JavaScript**

- ES Modules (`import`/`export`)
- Async/await syntax
- Modern ES2021+ features
- No CommonJS

### 3. **Code Quality Automation**

- **ESLint**: Catches errors and enforces style
- **Prettier**: Ensures consistent formatting
- **Husky**: Runs checks before commits
- **lint-staged**: Only checks changed files

### 4. **Development Experience**

- Auto-reload with Node.js `--watch` flag
- VSCode integration
- Cursor AI optimized (`.cursorrules`)
- Clear error messages

### 5. **Version Management**

- `.nvmrc` for nvm users
- `.node-version` for other tools
- `package.json` engines field
- `.npmrc` for strict engine checking

## 📋 Configuration Files

### Core Files

- **package.json**: Dependencies, scripts, and metadata
- **eslint.config.js**: ESLint configuration (flat config)
- **.prettierrc**: Prettier formatting rules
- **.cursorrules**: AI assistant coding guidelines

### Environment Files

- **.nvmrc**: Node version specification
- **.node-version**: Node version for other managers
- **.npmrc**: npm configuration
- **.env**: Environment variables (gitignored)
- **.env.example**: Environment template

### Git & Quality

- **.gitignore**: Files to ignore in git
- **.prettierignore**: Files to skip formatting
- **.husky/pre-commit**: Pre-commit hook script

### Editor

- **.vscode/settings.json**: VSCode settings
- **.vscode/extensions.json**: Recommended extensions

## 🎯 Code Style Guidelines

### JavaScript Standards

```javascript
// ✅ DO: Use ES Modules
import express from 'express';
export const app = express();

// ❌ DON'T: Use CommonJS
const express = require('express');
module.exports = app;

// ✅ DO: Use const/let
const port = 3000;
let counter = 0;

// ❌ DON'T: Use var
var port = 3000;

// ✅ DO: Use arrow functions
const handler = (req, res) => {
  res.json({ status: 'ok' });
};

// ✅ DO: Use template literals
const message = `Server running on port ${port}`;

// ✅ DO: Use async/await
const getData = async () => {
  const result = await fetchData();
  return result;
};
```

### Naming Conventions

- **Files**: kebab-case (`user-service.js`)
- **Variables/Functions**: camelCase (`getUserData`)
- **Constants**: UPPER_SNAKE_CASE (`API_KEY`)
- **Classes**: PascalCase (`UserService`)

### Import Order

1. Node.js built-ins
2. External packages
3. Internal modules
4. Relative imports

```javascript
import fs from 'fs';
import path from 'path';
import express from 'express';
import { userService } from './services/user-service.js';
import { config } from './config.js';
```

## 🔧 Scripts Explained

### Development Scripts

```bash
pnpm dev          # Start with auto-reload (Node --watch)
pnpm start        # Start without auto-reload
```

### Quality Scripts

```bash
pnpm lint         # Check for errors
pnpm lint:fix     # Fix errors automatically
pnpm format       # Format all files
pnpm format:check # Check if files are formatted
```

### Setup Scripts

```bash
pnpm install      # Install dependencies
pnpm prepare      # Setup Husky (runs automatically)
```

## 🚀 Getting Started

### Initial Setup

```bash
# 1. Ensure correct versions
node --version    # v24.0.0
pnpm --version    # 10.0.0

# 2. Install dependencies
pnpm install

# 3. Create environment file
cp .env.example .env

# 4. Start development server
pnpm dev
```

### Making Changes

```bash
# 1. Make your code changes
# 2. Check quality
pnpm lint:fix
pnpm format

# 3. Commit (Husky will run automatically)
git add .
git commit -m "feat: your changes"
```

## 📁 Recommended Project Structure

```
src/
├── index.js              # Application entry point
├── config/
│   ├── database.js       # Database configuration
│   └── environment.js    # Environment variables
├── routes/
│   ├── index.js          # Route aggregator
│   ├── user.routes.js    # User routes
│   └── auth.routes.js    # Auth routes
├── controllers/
│   ├── user.controller.js    # User logic
│   └── auth.controller.js    # Auth logic
├── services/
│   ├── user.service.js       # User business logic
│   └── email.service.js      # Email service
├── middlewares/
│   ├── auth.middleware.js    # Authentication
│   ├── error.middleware.js   # Error handling
│   └── validation.middleware.js  # Input validation
├── models/
│   └── user.model.js         # User model
└── utils/
    ├── logger.js             # Logging utility
    └── helpers.js            # Helper functions
```

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **Input Validation**: Validate all user inputs
3. **Error Handling**: Don't expose stack traces in production
4. **Dependencies**: Keep packages updated
5. **Rate Limiting**: Implement rate limiting
6. **Headers**: Use security headers

## 📝 Commit Message Convention

```
feat: Add user authentication
fix: Resolve login bug
docs: Update README
style: Format code
refactor: Restructure auth service
test: Add user service tests
chore: Update dependencies
```

## 🎓 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/latest-v24.x/api/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Husky Documentation](https://typicode.github.io/husky/)

## 📊 Project Status

✅ **Completed Setup**

- [x] Node.js 24.0.0 configured
- [x] pnpm 10.0.0 configured
- [x] ESLint configured with flat config
- [x] Prettier configured
- [x] Husky git hooks setup
- [x] lint-staged configured
- [x] Express.js basic server
- [x] Health check endpoint
- [x] Error handling
- [x] Development scripts
- [x] VSCode configuration
- [x] Cursor AI rules

🎯 **Ready for Development**

The project is fully set up and ready for feature development!

## 🤝 Contributing

1. Follow the coding standards in `.cursorrules`
2. Write meaningful commit messages
3. Test your changes locally
4. Run `pnpm lint:fix` and `pnpm format` before committing
5. Keep functions small and focused
6. Add comments for complex logic

## 📞 Troubleshooting

See [SETUP.md](./SETUP.md) for detailed troubleshooting steps.

---

**Project initialized on**: November 23, 2025
**Last updated**: November 23, 2025
