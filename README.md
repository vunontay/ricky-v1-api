# Ricky V1 API

A modern Node.js API project with best practices and development tools.

## 🚀 Tech Stack

- **Runtime**: Node.js 24.0.0
- **Package Manager**: pnpm 10.0.0
- **Framework**: Express.js 4.21.1
- **Code Quality**: ESLint 9.15.0 + Prettier 3.3.3
- **Git Hooks**: Husky 9.1.7 + lint-staged 15.2.10

## 📋 Prerequisites

- Node.js 24.0.0
- pnpm 10.0.0

> 💡 **Tip**: Project sẽ dùng Docker để đảm bảo môi trường đồng nhất

## 🔧 Installation

```bash
# Install dependencies
pnpm install

# Setup Husky git hooks
pnpm prepare
```

## 🏃 Running the Application

### Local Development

```bash
# Development mode (with auto-reload)
pnpm dev

# Production mode
pnpm start
```

### Using Docker (Recommended for Production)

```bash
# Build and run with docker-compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The server will start at `http://localhost:3000`

## 📝 Available Scripts

| Command                  | Description                              |
| ------------------------ | ---------------------------------------- |
| `pnpm start`             | Start production server                  |
| `pnpm dev`               | Start development server with watch mode |
| `pnpm lint`              | Check code for linting errors            |
| `pnpm lint:fix`          | Fix linting errors automatically         |
| `pnpm format`            | Format code with Prettier                |
| `pnpm format:check`      | Check if code is formatted               |
| `docker-compose up -d`   | Run with Docker                          |
| `docker-compose down`    | Stop Docker containers                   |
| `docker-compose logs -f` | View Docker logs                         |

## 🎯 Features

- ✅ ES Modules support
- ✅ Fixed dependency versions (no automatic updates)
- ✅ ESLint with modern flat config
- ✅ Prettier for consistent code formatting
- ✅ Husky pre-commit hooks
- ✅ lint-staged for optimized linting
- ✅ Express.js for API routing
- ✅ Development mode with auto-reload (Node.js --watch)
- ✅ Health check endpoint
- ✅ Error handling middleware
- ✅ Environment variables support

## 📁 Project Structure

```
ricky-v1-api/
├── src/
│   └── index.js          # Application entry point
├── .cursorrules          # Cursor AI rules for better suggestions
├── .env.example          # Example environment variables
├── .eslintrc.js          # ESLint configuration
├── .gitignore            # Git ignore patterns
├── .nvmrc                # Node version specification
├── .node-version         # Node version for other tools
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore patterns
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🔒 Code Quality

This project uses automated code quality tools:

- **ESLint**: Identifies and reports on patterns in JavaScript
- **Prettier**: Enforces consistent code formatting
- **Husky**: Runs quality checks before commits
- **lint-staged**: Only checks staged files for faster commits

### Pre-commit Hooks

When you commit, Husky automatically:

1. Lints staged JavaScript files
2. Formats staged files with Prettier
3. Prevents commit if there are errors

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=3000
NODE_ENV=development
```

## 📚 API Endpoints

### GET `/`

Welcome endpoint

**Response:**

```json
{
  "message": "Welcome to Ricky V1 API",
  "status": "success",
  "version": "1.0.0"
}
```

### GET `/health`

Health check endpoint

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2025-11-23T10:00:00.000Z"
}
```

## 🎨 Code Style

This project follows strict code style guidelines:

- ES Modules (import/export)
- Single quotes for strings
- Semicolons required
- 2 spaces for indentation
- Max line length: 80 characters
- Arrow functions for callbacks
- Async/await over promises

See `.cursorrules` for detailed coding standards.

## 🤝 Contributing

1. Make your changes
2. Run `pnpm lint:fix` and `pnpm format`
3. Commit your changes (hooks will run automatically)
4. Push to your branch

## 📄 License

ISC

## 👨‍💻 Development Notes

- All dependency versions are fixed (no `^` or `~` prefixes)
- Update dependencies consciously and test thoroughly
- Follow the coding standards in `.cursorrules`
- Cursor AI will provide better suggestions based on project rules
