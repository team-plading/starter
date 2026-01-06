#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const requiredEnvVars = [
  'NODE_ENV',
  // Add your required environment variables here
];

function validateEnv() {
  const envPath = path.join(process.cwd(), '.env');
  const envExamplePath = path.join(process.cwd(), '.env.example');

  // Check if .env.example exists
  if (!fs.existsSync(envExamplePath)) {
    console.warn('⚠️  .env.example not found');
    return;
  }

  // Check if .env exists
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env file not found!');
    console.log('💡 Copy .env.example to .env and fill in the values');
    process.exit(1);
  }

  // Load .env file
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const envVars = envContent
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => line.split('=')[0].trim());

  // Check required variables
  const missing = requiredEnvVars.filter((varName) => !envVars.includes(varName));

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach((varName) => console.error(`   - ${varName}`));
    process.exit(1);
  }

  // Check for placeholder values
  const placeholderPattern = /your_|your-|example|placeholder|changeme/i;
  const hasPlaceholders = envContent.split('\n').some((line) => {
    if (line.startsWith('#') || !line.trim()) return false;
    return placeholderPattern.test(line);
  });

  if (hasPlaceholders) {
    console.warn('⚠️  Found potential placeholder values in .env');
    console.warn('   Please ensure all values are properly configured');
  }

  console.log('✅ Environment validation passed!');
}

validateEnv();

