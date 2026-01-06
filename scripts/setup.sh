#!/bin/bash

set -e

echo "🚀 Setting up project..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update .env with your configuration"
else
    echo "✅ .env file already exists"
fi

# Install dependencies (if package.json exists)
if [ -f package.json ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Validate environment
if [ -f scripts/validate-env.js ]; then
    echo "🔍 Validating environment..."
    node scripts/validate-env.js
fi

echo "✅ Setup complete!"

