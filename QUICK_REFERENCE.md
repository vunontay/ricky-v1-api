# Quick Reference Card

## 🚀 Common Commands

```bash
# Development
pnpm dev                    # Start dev server with auto-reload
pnpm start                  # Start production server

# Code Quality
pnpm lint                   # Check for errors
pnpm lint:fix               # Fix errors automatically
pnpm format                 # Format all files

# Installation
pnpm install                # Install dependencies
```

## 📦 Package Manager

Always use **pnpm** (version 10.0.0):

```bash
pnpm install <package>      # Add dependency
pnpm add -D <package>       # Add dev dependency
pnpm remove <package>       # Remove dependency
pnpm update                 # Update all packages
```

## 🌐 Default Endpoints

```bash
http://localhost:3000/              # Welcome message
http://localhost:3000/health        # Health check
```

## 🔧 Environment Variables

Create `.env` file:

```env
PORT=3000
NODE_ENV=development
```

## 📝 Code Standards

### Import/Export (ES Modules)

```javascript
// Import
import express from 'express';
import { Router } from 'express';

// Export
export const router = Router();
export default app;
```

### Async/Await

```javascript
// ✅ Correct
const getData = async () => {
  try {
    const result = await fetchData();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
```

### Arrow Functions

```javascript
// ✅ Correct
const handler = (req, res) => {
  res.json({ status: 'ok' });
};

// For simple returns
const double = (x) => x * 2;
```

## 🎯 File Naming

- **kebab-case**: `user-service.js`, `auth-middleware.js`
- **camelCase**: `getUserById`, `validateInput`
- **PascalCase**: `UserService`, `AuthMiddleware`
- **UPPER_CASE**: `API_KEY`, `MAX_RETRIES`

## 🔀 Git Workflow

```bash
# 1. Create branch
git checkout -b feature/your-feature

# 2. Make changes and stage
git add .

# 3. Commit (Husky runs automatically)
git commit -m "feat: your feature"

# 4. Push
git push origin feature/your-feature
```

## ✅ Pre-commit Checklist

Husky automatically runs:

- ✅ ESLint on staged `.js` files
- ✅ Prettier on staged files
- ✅ Blocks commit if errors exist

Manual check:

```bash
pnpm lint:fix && pnpm format
```

## 🐛 Troubleshooting

| Issue                      | Solution                         |
| -------------------------- | -------------------------------- |
| Wrong Node version         | `nvm use` or install Node 24.0.0 |
| Wrong pnpm version         | `npm i -g pnpm@10.0.0`           |
| Port already in use        | Change PORT in `.env`            |
| Lint errors                | Run `pnpm lint:fix`              |
| Format issues              | Run `pnpm format`                |
| Dependencies not installed | Run `pnpm install`               |

## 📚 Documentation

- **README.md**: Main project documentation
- **SETUP.md**: Detailed setup instructions
- **PROJECT_INFO.md**: Complete project information
- **.cursorrules**: Coding standards for AI

## 🎨 VSCode Extensions

Install these for best experience:

1. ESLint (`dbaeumer.vscode-eslint`)
2. Prettier (`esbenp.prettier-vscode`)
3. npm Intellisense
4. Path Intellisense

## 🔐 Security Reminders

- ❌ Never commit `.env` files
- ✅ Use environment variables for secrets
- ✅ Validate all user inputs
- ✅ Handle errors properly
- ✅ Keep dependencies updated

## 📁 Project Structure

```
src/
├── index.js                 # Entry point
├── routes/                  # API routes
├── controllers/             # Request handlers
├── services/                # Business logic
├── middlewares/             # Express middlewares
├── models/                  # Data models
├── utils/                   # Utilities
└── config/                  # Configuration
```

## 🎓 Quick Tips

1. **Import must have .js extension**: `import { x } from './file.js'`
2. **Use const by default**: Only use `let` when reassigning
3. **Async functions**: Always use try-catch
4. **Comments**: Only for complex logic
5. **Functions**: Keep them small and focused

## 📊 Version Requirements

| Tool    | Version | Status       |
| ------- | ------- | ------------ |
| Node.js | 24.0.0  | ✅           |
| pnpm    | 10.0.0  | ✅           |
| npm     | Any     | ⚠️ Don't use |
| yarn    | Any     | ⚠️ Don't use |

---

**Keep this card handy for quick reference!** 📌
