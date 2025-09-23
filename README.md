# JSON Formatter & Validator

A self-hosted JSON formatter and validator built with React, designed for deployment with Docker and Traefik reverse proxy.

## Features

- **JSON Formatting**: Pretty-print JSON with proper indentation
- **JSON Minification**: Compress JSON by removing whitespace
- **Real-time Validation**: Live validation as you type
- **Syntax Highlighting**: Monaco Editor with JSON syntax highlighting
- **Error Detection**: Line-by-line error reporting
- **Sample Data**: Load sample JSON for testing
- **Copy to Clipboard**: Easy copying of formatted output
- **Responsive Design**: Works on desktop and mobile devices

## Quick Start

### Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

### Docker Deployment

#### Option 1: Standalone with included Traefik

```bash
# Start the application with Traefik
docker-compose up -d

# Access the application
open http://json-formatter.localhost
```

#### Option 2: Production with external Traefik

1. **Update domain in docker-compose.prod.yml:**
   ```yaml
   - "traefik.http.routers.json-formatter.rule=Host(`your-domain.com`)"
   - "traefik.http.routers.json-formatter-secure.rule=Host(`your-domain.com`)"
   ```

2. **Deploy:**
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

## Configuration

### Traefik Labels

The application includes comprehensive Traefik labels for:

- **HTTP to HTTPS redirect**
- **Automatic SSL certificate generation** (Let's Encrypt)
- **Health checks**
- **Load balancing**

### Docker Configuration

- **Port**: 80 (internal)
- **Health Check**: `/health` endpoint
- **Security**: Includes security headers and CSP
- **Compression**: Gzip enabled for static assets
- **Caching**: 1-year cache for static assets

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Editor**: Monaco Editor (VS Code editor)
- **Styling**: Styled Components
- **Build Tool**: Vite
- **Web Server**: Nginx (Alpine)
- **Reverse Proxy**: Traefik v3
- **Containerization**: Docker

## Security

The application includes several security measures:

- **Content Security Policy (CSP)**
- **X-Frame-Options header**
- **X-Content-Type-Options header**  
- **XSS Protection**
- **Referrer Policy**
- **No data persistence** - JSON is processed client-side only

## Health Check

The application includes a health endpoint at `/health` that returns a 200 status code when the application is running properly.

```bash
curl http://localhost/health
# Returns: healthy
```
