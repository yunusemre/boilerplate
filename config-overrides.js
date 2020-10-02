const {
  override,
  watchAll,
  useEslintRc,
  useBabelRc,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  useEslintRc('.eslintrc.json'),
  watchAll(),
);
