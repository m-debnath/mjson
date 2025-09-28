# Build stage
FROM node:20-alpine AS builder

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set user and workdir
USER nextjs
WORKDIR /app

# Copy package files (as nextjs user)
COPY --chown=nextjs:nodejs package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm install

# Copy source code (as nextjs user)
COPY --chown=nextjs:nodejs . .

# Build the application
RUN npm run build

# Audit for vulnerabilities
RUN npm audit --audit-level high

# Production stage
FROM nginx:1.25-alpine

# Install curl for health checks and security updates
RUN apk update && apk upgrade && apk add --no-cache curl && rm -rf /var/cache/apk/*

# Copy build files to nginx (using default nginx user)
COPY --from=builder --chown=101:101 /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx config that might conflict
RUN rm -f /etc/nginx/conf.d/default.conf.bak

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]