/**
 * Architected by doctorcodex/ drferdiiskandar
 * Developed by doctorcodex/ drferdiiskandar
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-hex-length': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'value-keyword-case': null,
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(?:[-_][a-z0-9]+)*(?:--[a-z0-9]+|__[a-z0-9]+)?$',
      { message: 'Expected class selector to be kebab/BEM style' },
    ],
    'declaration-block-single-line-max-declarations': null,
    'rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen'] },
    ],
    'media-feature-range-notation': null,
    'import-notation': null,
    'no-invalid-position-at-import-rule': null,
  },
};
