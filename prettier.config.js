module.exports = {
  plugins: ["prettier-plugin-jsdoc"],
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: false,
  jsdocParser: true,
  tsdoc: true,
  overrides: [
    {
      files: "{*.json}",
      options: {
        parser: "json",
        trailingComma: "es5",
      },
    },
    {
      files: "{*.md}",
      options: {
        parser: "markdown",
        proseWrap: "preserve",
      },
    },
  ],
}
