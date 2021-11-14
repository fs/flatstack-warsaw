module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-rational-order',
    'stylelint-config-styled-components',
  ],
  rules: {
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'empty-line-between-groups': true,
      },
    ],
    // We decided to deny media queries.
    // Prefer flex layout with flex-wrap.
    // If designer give you mockup with potential media queries,
    // come and discuss it. Try to convince to change design
    // and get rid of media queries.
    'media-feature-name-disallowed-list': ['max-width', 'min-width'],
  },
};
