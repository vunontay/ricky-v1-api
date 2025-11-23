# Docker Guide

## 🐳 Docker Setup

This project includes Docker configuration for consistent deployment across environments.

## 📦 What's Included

- **Dockerfile**: Multi-stage build for optimized image
- **docker-compose.yml**: Easy orchestration
- **.dockerignore**: Optimize build context

## 🚀 Quick Start

### Build and Run

```bash
# Build and start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### Access the API

```bash
# Health check
curl http://localhost:3000/health

# Main endpoint
curl http://localhost:3000
```

### Stop

```bash
# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
PORT=3000
NODE_ENV=production
```

### Custom Port

```bash
# Use custom port
PORT=8080 docker-compose up -d
```

## 📊 Docker Image Details

- **Base Image**: `node:24.0.0-alpine`
- **Size**: ~150MB (optimized)
- **Multi-stage**: Yes (builder + production)
- **Health Check**: Built-in

## 🛠️ Docker Commands

### Development

```bash
# Rebuild image
docker-compose build

# Rebuild without cache
docker-compose build --no-cache

# Run specific service
docker-compose up app
```

### Production

```bash
# Run in background
docker-compose up -d

# Scale (if needed)
docker-compose up -d --scale app=3

# Update
docker-compose pull
docker-compose up -d
```

### Debugging

```bash
# View logs
docker-compose logs -f app

# Execute command in container
docker-compose exec app sh

# Inspect container
docker-compose exec app node --version
docker-compose exec app pnpm --version
```

### Cleanup

```bash
# Remove containers
docker-compose down

# Remove containers and images
docker-compose down --rmi all

# Remove everything including volumes
docker-compose down -v --rmi all
```

## 🔍 Health Check

Built-in health check at `/health` endpoint:

```bash
# Check from host
curl http://localhost:3000/health

# Check from inside container
docker-compose exec app wget -qO- http://localhost:3000/health
```

## 📝 Dockerfile Explanation

```dockerfile
# Multi-stage build for optimization
FROM node:24.0.0-alpine AS builder
# ... install dependencies

FROM node:24.0.0-alpine
# ... copy only what's needed
```

Benefits:

- ✅ Smaller final image
- ✅ Faster builds (cached layers)
- ✅ More secure (minimal dependencies)

## 🎯 Best Practices

1. **Use .dockerignore**: Exclude unnecessary files
2. **Multi-stage builds**: Smaller images
3. **Health checks**: Monitor container health
4. **Environment variables**: Configuration
5. **Alpine base**: Minimal image size

## 🔐 Security

- Run as non-root user (optional, add if needed)
- No secrets in image
- Regular base image updates
- Minimal dependencies

## 📈 Performance

- Multi-stage build reduces image size
- Alpine Linux for minimal footprint
- Layer caching for faster builds
- Health checks for reliability

## 🚢 Deployment

### Push to Registry

```bash
# Tag image
docker tag ricky-v1-api:latest your-registry/ricky-v1-api:latest

# Push
docker push your-registry/ricky-v1-api:latest
```

### Deploy to Server

```bash
# Pull and run
docker pull your-registry/ricky-v1-api:latest
docker-compose up -d
```

## 💡 Tips

- Use `docker-compose` for local development
- Use Kubernetes/Docker Swarm for production
- Monitor container health regularly
- Keep base images updated

## 🐛 Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose logs app

# Check if port is in use
lsof -i :3000
```

### Permission issues

```bash
# Rebuild without cache
docker-compose build --no-cache
```

### Network issues

```bash
# Recreate network
docker-compose down
docker-compose up -d
```

---

**Docker configuration ready for production!** 🐳
