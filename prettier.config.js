module.exports = {
  plugins: ["prettier-plugin-jsdoc", require("./prettier-plugin-packagejson.js")],
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: false,
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
