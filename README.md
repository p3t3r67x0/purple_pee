# NetScanner - Advanced Internet Intelligence Platform

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82.svg)](https://nuxt.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38BDF8.svg)](https://tailwindcss.com)

**Comprehensive network intelligence and cybersecurity research platform**

[🌐 Live Demo](https://netscanner.io) • [📖 Documentation](https://netscanner.io/docs) • [🚀 API Reference](https://netscanner.io/docs/api) • [🔍 Live Scanner](https://netscanner.io/live/scan)

</div>

## 🎯 Overview

NetScanner is a powerful, open-source internet intelligence platform that provides comprehensive network analysis, domain research, and cybersecurity investigation capabilities. Built with modern web technologies, it offers both a user-friendly interface and a robust API for developers and security professionals.

### ✨ Key Features

- 🔍 **Real-time Network Scanning** - Live domain analysis with WebSocket streaming
- 🌐 **Comprehensive API** - 20+ endpoints for network intelligence
- 🛡️ **SSL Certificate Analysis** - Complete certificate chain inspection
- 📊 **ASN & CIDR Intelligence** - Autonomous system and network range analysis
- 🌍 **Geographic Intelligence** - IP geolocation and infrastructure mapping
- 📈 **Analytics & Trends** - API usage patterns and network statistics
- 🔒 **Security Research Tools** - OSINT capabilities for cybersecurity professionals
- 📱 **Modern UI/UX** - Responsive design with dark theme and interactive components

## 🚀 Quick Start

### Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/p3t3r67x0/purple_pee.git
cd purple_pee

# Install dependencies
npm install

# Copy environment configuration
cp .env .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🐳 Docker Setup

### Quick Start with Docker Compose

```bash
# Clone the repository
git clone https://github.com/p3t3r67x0/purple_pee.git
cd purple_pee

# Ensure .env file exists with required variables
cp .env.example .env  # If you have an example file
# or edit .env directly with your configuration

# Start the application with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f netscanner

# Stop the application
docker-compose down
```

### Available Docker Compose Profiles

#### Basic Setup (Default)
```bash
# Run only the Nuxt application
docker-compose up -d
```

#### With Nginx Reverse Proxy
```bash
# Include Nginx for production-like setup
docker-compose --profile nginx up -d
```

#### With Redis Caching
```bash
# Include Redis for caching capabilities
docker-compose --profile cache up -d
```

#### Full Stack
```bash
# Run all services (Nuxt + Nginx + Redis)
docker-compose --profile nginx --profile cache up -d
```

### Production Deployment

```bash
# Use production configuration
docker-compose -f docker-compose.prod.yml up -d

# Build and deploy with custom environment
docker-compose -f docker-compose.prod.yml up -d --build
```

### Required Environment Variables

Make sure your `.env` file contains all required variables before running Docker Compose:

```bash
# Required for Docker Compose
IMPRINT_NAME="Your Name"
IMPRINT_STREET="Your Street Address" 
IMPRINT_LOCATION="Your City and Postal Code"
IMPRINT_EMAIL="your.email@domain.com"

# Other required variables
BASE_URL=http://localhost:3000
API_URL=http://localhost:8000
```

Docker Compose will automatically read these values from your `.env` file.

### Docker Commands

```bash
# Build the image manually
docker build -t netscanner:latest .

# Run container manually
docker run -d \
  --name netscanner \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e BASE_URL=http://localhost:3000 \
  netscanner:latest

# View container logs
docker logs -f netscanner

# Access container shell
docker exec -it netscanner sh
```

### Environment Configuration

Create a `.env.local` file (ignored by git) with your configuration:

```bash
# Application URLs
BASE_URL=http://localhost:3000
API_URL=http://localhost:8000

# External Links
FAQ_URL=https://netscanner.io/docs/faq
HELP_URL=https://netscanner.io/docs
SUPPORT_URL=https://netscanner.io/support
DOCS_URL=https://netscanner.io/docs
ISSUES_URL=https://github.com/p3t3r67x0/purple_pee/issues

# Social Media
TWITTER_URL=https://twitter.com/netscanner_io
FACEBOOK_URL=https://facebook.com/netscanner
LINKEDIN_URL=https://linkedin.com/company/netscanner

# Legal Pages
TERMS_URL=https://netscanner.io/terms
PRIVACY_URL=https://netscanner.io/privacy
IMPRINT_URL=https://netscanner.io/imprint

# Legal Imprint Information (Required for German/EU compliance)
IMPRINT_NAME="Your Name"
IMPRINT_STREET="Your Street Address"
IMPRINT_LOCATION="Your City and Postal Code"
IMPRINT_EMAIL="your.email@domain.com"
```


## 🔍 Advanced Search Capabilities

NetScanner provides powerful conditional query syntax for precise network intelligence gathering. All search filters use the format `condition:value` without spaces.

### 🌐 Network Infrastructure

| Filter | Description | Examples |
|--------|-------------|----------|
| `asn:` | Autonomous System Number | `asn:13335` (Cloudflare), `asn:15169` (Google) |
| `cidr:` | Network CIDR ranges | `cidr:8.8.8.0/24`, `cidr:213.133.0.0/19` |
| `port:` | Open network ports | `port:443` (HTTPS), `port:22` (SSH), `port:80` (HTTP) |
| `registry:` | Regional internet registry | `registry:arin`, `registry:ripencc`, `registry:apnic` |

### 🌍 Geographic Intelligence

| Filter | Description | Examples |
|--------|-------------|----------|
| `country:` | ISO country codes | `country:US`, `country:DE`, `country:SG` |
| `state:` | State or province | `state:california`, `state:texas` |
| `city:` | City location | `city:london`, `city:tokyo` |

### 🔒 SSL & Security

| Filter | Description | Examples |
|--------|-------------|----------|
| `ssl:` | SSL certificate details | `ssl:cloudflare`, `ssl:letsencrypt` |
| `ca:` | Certificate Authority | `ca:digicert`, `ca:comodo` |
| `issuer:` | Certificate issuer | `issuer:letsencrypt`, `issuer:digicert` |
| `before:` | Valid before date | `before:2024-12-31` |
| `after:` | Valid after date | `after:2024-01-01` |

### ⚙️ Web Technology

| Filter | Description | Examples |
|--------|-------------|----------|
| `server:` | Web server software | `server:nginx`, `server:apache`, `server:cloudflare` |
| `status:` | HTTP response codes | `status:200`, `status:404`, `status:500` |
| `service:` | Detected technologies | `service:php`, `service:nodejs` |

### 🌐 DNS Intelligence

| Filter | Description | Examples |
|--------|-------------|----------|
| `mx:` | Mail exchange servers | `mx:aspmx.l.google.com`, `mx:mx.yandex.ru` |
| `ns:` | Name servers | `ns:cloudflare.com`, `ns:amazonaws.com` |
| `cname:` | CNAME targets | `cname:shopify.com`, `cname:wordpress.com` |

### 🏢 Organizational

| Filter | Description | Examples |
|--------|-------------|----------|
| `org:` | Organization name | `org:google`, `org:amazon`, `org:microsoft` |
| `site:` | Site identifier | `site:google.com`, `site:github.com` |

## 📊 API Documentation

NetScanner provides a comprehensive REST API with 20+ endpoints for programmatic access to network intelligence data.

### Core Endpoints

```bash
# Domain search and analysis
GET /query/{term}              # Full-text search
GET /dns                       # Latest DNS records  
GET /ip/{address}              # IP address details
GET /match/{condition}:{value} # Conditional filtering

# Network infrastructure
GET /asn                       # ASN listings
GET /cidr                      # CIDR ranges
GET /ipv4                      # IPv4 records
GET /subnet/{range}            # Subnet analysis

# Analytics and monitoring
GET /trends/requests           # API usage analytics
GET /graph/{domain}            # Relationship mapping
```

### Example API Usage

```bash
# Find domains on Cloudflare infrastructure
curl "https://api.netscanner.io/match/asn:13335"

# Get SSL certificates expiring soon
curl "https://api.netscanner.io/match/before:2024-12-31"

# Analyze specific IP address
curl "https://api.netscanner.io/ip/8.8.8.8"

# Search for WordPress sites
curl "https://api.netscanner.io/match/service:wordpress"
```

For complete API documentation, visit [netscanner.io/docs/api](https://netscanner.io/docs/api)

## 🛠️ Development

## 🛠️ Development

### Tech Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Styling**: Tailwind CSS, Custom Components
- **State Management**: Pinia
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run generate     # Generate static site

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
npm run test         # Run tests (if configured)

# Deployment
npm run start        # Start production server
```

### Project Structure

```
purple_pee/
├── assets/          # Static assets (images, styles)
├── components/      # Vue components
├── composables/     # Vue composables
├── layouts/         # Nuxt layouts
├── middleware/      # Route middleware
├── pages/           # File-based routing
├── plugins/         # Nuxt plugins
├── public/          # Public static files
├── stores/          # Pinia stores
├── utils/           # Utility functions
├── nuxt.config.ts   # Nuxt configuration
├── tailwind.config.js # Tailwind configuration
└── package.json     # Dependencies and scripts
```

### Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 🚀 Production Deployment

### Building for Production

```bash
# Install dependencies
npm ci

# Build the application
npm run build

# Start production server
NODE_ENV=production node .output/server/index.mjs
```

### Environment Variables

Required environment variables for production:

```bash
NODE_ENV=production
BASE_URL=https://netscanner.io
API_URL=https://api.netscanner.io
PORT=3000
```


### Systemd Service Configuration

Create a systemd service for automatic startup and process management:

```bash
# Create service file
sudo nano /etc/systemd/system/netscanner.service
```

```ini
[Unit]
Description=NetScanner - Internet Intelligence Platform
After=network.target
Documentation=https://github.com/p3t3r67x0/purple_pee

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/www/netscanner
Environment=NODE_ENV=production
Environment=PORT=3000
EnvironmentFile=/etc/netscanner.env
ExecStart=/usr/bin/node .output/server/index.mjs
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=netscanner

# Security settings
NoNewPrivileges=true
PrivateTmp=true
ProtectHome=true
ProtectSystem=strict
ReadWritePaths=/var/www/netscanner

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable netscanner
sudo systemctl start netscanner
sudo systemctl status netscanner
```

### Nginx Reverse Proxy with SSL

Install Nginx and Certbot:

```bash
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx
```

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/netscanner
```

```nginx
# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=web:10m rate=5r/s;

# Upstream backend
upstream netscanner_backend {
    server 127.0.0.1:3000;
    keepalive 32;
}

server {
    listen 80;
    listen [::]:80;
    server_name netscanner.io www.netscanner.io;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name netscanner.io www.netscanner.io;

    # SSL Configuration (managed by certbot)
    ssl_certificate /etc/letsencrypt/live/netscanner.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/netscanner.io/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # API rate limiting
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://netscanner_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Main application
    location / {
        limit_req zone=web burst=10 nodelay;
        proxy_pass http://netscanner_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and obtain SSL certificates:

```bash
sudo ln -s /etc/nginx/sites-available/netscanner /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d netscanner.io -d www.netscanner.io
```

## 🔧 Configuration

### Performance Optimization

- **Asset Optimization**: Images are automatically optimized and served in modern formats
- **Code Splitting**: Automatic route-based code splitting for optimal loading
- **Caching**: Intelligent caching strategies for static and dynamic content
- **CDN Ready**: Optimized for content delivery networks

### Security Features

- **CSP Headers**: Content Security Policy implementation
- **Rate Limiting**: API and web interface rate limiting
- **Input Validation**: Comprehensive input sanitization
- **HTTPS Enforcement**: Automatic HTTPS redirects
- **Security Headers**: Complete security header implementation

## 📈 Monitoring & Analytics

### Application Monitoring

```bash
# View application logs
sudo journalctl -u netscanner -f

# Monitor system resources
htop
iostat -x 1
```

### Performance Metrics

- **Response Times**: Built-in API response time tracking
- **Error Rates**: Comprehensive error monitoring
- **Usage Analytics**: API endpoint usage statistics
- **System Health**: Server performance monitoring

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Bug Reports**: Report issues and bugs
- ✨ **Feature Requests**: Suggest new features
- 📖 **Documentation**: Improve documentation
- 🧪 **Testing**: Add or improve tests
- 💻 **Code**: Submit pull requests

### Development Guidelines

1. **Code Style**: Follow the existing code style and linting rules
2. **Testing**: Add tests for new features and bug fixes
3. **Documentation**: Update documentation for API changes
4. **Commit Messages**: Use clear, descriptive commit messages

### Getting Help

- 📖 [Documentation](https://netscanner.io/docs)
- 🐛 [Issues](https://github.com/p3t3r67x0/purple_pee/issues)
- 💬 [Discussions](https://github.com/p3t3r67x0/purple_pee/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Nuxt.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vue.js Community** - For the reactive framework
- **Contributors** - For all the contributions and feedback
<div align="center">

**Made with ❤️ by the NetScanner Team**

[Website](https://netscanner.io) • [API](https://api.netscanner.io) • [Documentation](https://netscanner.io/docs) • [GitHub](https://github.com/p3t3r67x0/purple_pee)

</div>

##  Blog System (Nuxt Content)

The blog now uses **@nuxt/content**. Add new tutorials by creating markdown files under `content/blog/`:

```bash
content/blog/my-new-tutorial.md
```

Front‑matter example:

```markdown
---
slug: my-new-tutorial
title: My New Tutorial
description: Short summary.
date: 2025-09-24
author: NetScanner Team
tags:
    - dns
    - analysis
published: true
---

# Heading
Your content...
```

### Features
- Automatic routing: `/blog/{slug}`
- Auto indexing on `/blog`
- Tag + search filtering (client-side)
- Per‑post SEO injection (`useHead`)
- Markdown rendered via `<ContentRenderer />`

### Legacy Parser Removal
The former custom parser (`utils/markdown.ts`) and in‑memory post source (`data/posts.ts`) are deprecated. All tutorials must now be authored as markdown under `content/blog/`. You can delete those legacy files safely if they still exist.

### Enhancements (Future)
- Shiki-based code highlighting already enabled
- Generate RSS & JSON Feed dynamically
- Add tag pages (`/blog/tag/{tag}`)
- Add sitemap extension for blog posts
1. Create a server API route (e.g. `server/routes/rss.get.ts`)
2. Import `getSortedPosts()` and build XML with real publication dates
3. Set correct `Content-Type: application/rss+xml`
4. Optionally add caching headers

### Roadmap Ideas

- Add scrollspy highlighting for headings
- Add author profiles & avatars
- Tag landing pages (`/blog/tag/{tag}`)
- Full‑text search (client-side index or server endpoint)
- Incremental static regeneration / payload caching
- Dynamic RSS + JSON Feed

---

Feel free to open a PR if you want to enhance the blog system.
