# Build stage
FROM node:24.6.0-alpine AS builder

# Install pnpm
RUN npm install -g pnpm@10.19.0

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Production stage
FROM node:24.6.0-alpine

# Install pnpm
RUN npm install -g pnpm@10.19.0

WORKDIR /app

# Copy dependencies and source from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/server.js ./
COPY --from=builder /app/src ./src

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Run app
CMD ["node", "server.js"]

