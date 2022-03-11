// Modified from https://github.com/matzkoh/prettier-plugin-packagejson to use the custom sort-package.json package
function prettier_plugin_packagejson() {
  function requireSafe(path) {
    try {
      return require(path)
    } catch (error) {
      // no operations
    }
  }

  const { parsers } = requireSafe("prettier/parser-babel") || requireSafe("prettier/parser-babylon")
  const sortPackageJson = require("sort-package-json")
  const parser = parsers["json-stringify"]

  return {
    parsers: {
      "json-stringify": {
        ...parser,
        preprocess(text_given, options) {
          let text = text_given
          if (parser.preprocess) {
            text = parser.preprocess(text, options)
          }

          return options.filepath && /(^|\\|\/)package\.json$/.test(options.filepath) ? sortPackageJson(text) : text
        },
      },
    },
  }
}

module.exports = {
  plugins: [require("prettier-plugin-jsdoc"), prettier_plugin_packagejson()],
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
