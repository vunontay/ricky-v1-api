# Setup Guide - Ricky V1 API

## Quick Start

### 1. Prerequisites

Make sure you have Node.js 24 and pnpm 10 installed.

```bash
# Check versions
node --version  # Should be v24.x.x
pnpm --version  # Should be 10.x.x
```

> 💡 **For Production**: Use Docker (see Dockerfile)

### 2. Install Dependencies

```bash
pnpm install
```

This will:

- Install all dependencies
- Set up Husky git hooks automatically

### 3. Run the Project

**Development mode** (with auto-reload):

```bash
pnpm dev
```

**Production mode**:

```bash
pnpm start
```

Server will be available at: `http://localhost:3000`

### 4. Verify Setup

Test the API endpoints:

```bash
# Welcome endpoint
curl http://localhost:3000/

# Health check
curl http://localhost:3000/health
```

## Available Commands

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `pnpm install`      | Install dependencies                      |
| `pnpm start`        | Start production server                   |
| `pnpm dev`          | Start development server with auto-reload |
| `pnpm lint`         | Check code for linting errors             |
| `pnpm lint:fix`     | Fix linting errors automatically          |
| `pnpm format`       | Format code with Prettier                 |
| `pnpm format:check` | Check if code is formatted correctly      |

## Code Quality Tools

### Pre-commit Hooks

Husky is configured to run **lint-staged** before every commit:

- ✅ Automatically lints JavaScript files
- ✅ Automatically formats files with Prettier
- ✅ Prevents commits if there are errors

### Manual Quality Checks

Before committing, you can manually run:

```bash
pnpm lint:fix    # Fix linting issues
pnpm format      # Format all files
```

## Project Structure

```
ricky-v1-api/
├── src/
│   └── index.js              # Application entry point
├── .husky/
│   └── pre-commit            # Git pre-commit hook
├── .vscode/
│   ├── settings.json         # VSCode settings
│   └── extensions.json       # Recommended extensions
├── .cursorrules              # Cursor AI coding rules
├── .eslintrc.js              # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .gitignore                # Git ignore patterns
├── .nvmrc                    # Node version for nvm
├── .node-version             # Node version for other tools
├── .npmrc                    # npm configuration
├── package.json              # Dependencies and scripts
├── pnpm-lock.yaml            # Lock file
├── pnpm-workspace.yaml       # pnpm workspace config
├── README.md                 # Main documentation
└── SETUP.md                  # This file
```

## Environment Variables

Create a `.env` file in the root:

```bash
PORT=3000
NODE_ENV=development
```

See `.env.example` for all available options.

## Troubleshooting

### "command not found: pnpm"

Install pnpm globally:

```bash
npm install -g pnpm@10.0.0
```

### Wrong Node.js version

Install Node.js 24:

```bash
# Check current version
node --version

# Install Node 24 or use Docker
```

### Linting errors on commit

The pre-commit hook will automatically try to fix issues. If it fails:

```bash
pnpm lint:fix
pnpm format
git add .
git commit -m "your message"
```

### Port already in use

Change the port in `.env`:

```env
PORT=3001
```

## Development Workflow

1. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make your changes**

   Follow the coding standards in `.cursorrules`

3. **Check your code**

   ```bash
   pnpm lint:fix
   pnpm format
   ```

4. **Commit**

   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

   Husky will automatically run quality checks

5. **Push**
   ```bash
   git push origin feature/your-feature
   ```

## VSCode Setup

Install recommended extensions:

- ESLint
- Prettier - Code formatter
- npm Intellisense
- Path Intellisense

VSCode will automatically:

- Format on save
- Fix ESLint issues on save
- Use correct line endings (LF)

## Next Steps

1. ✅ Project is set up
2. 📝 Start building your API routes in `src/routes/`
3. 🎯 Add controllers in `src/controllers/`
4. 🔧 Add services in `src/services/`
5. 🧪 Add tests (recommended)

## Support

For more information, see:

- [README.md](./README.md) - Main documentation
- [.cursorrules](./.cursorrules) - Coding standards

---

Happy coding! 🚀
