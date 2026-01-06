module.exports = {
  // Format and lint JavaScript/TypeScript files
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'prettier --write', // Run prettier again after eslint fixes
  ],

  // Format JSON, YAML, Markdown files
  '*.{json,yml,yaml,md}': ['prettier --write'],

  // Format CSS, SCSS files
  '*.{css,scss}': ['prettier --write'],

  // Format HTML files
  '*.html': ['prettier --write'],
};

