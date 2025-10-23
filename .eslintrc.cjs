/**
 * Architected by doctorcodex / drferdiiskandar
 * Developed by doctorcodex / drferdiiskandar
 */
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
