# Setup Guide

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Validate environment**
   ```bash
   npm run validate-env
   # or
   node scripts/validate-env.js
   ```

5. **Run setup script** (if available)
   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

## Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Troubleshooting

See [ARCHITECTURE.md](./ARCHITECTURE.md) for more details.

