import { pluginPackageJson } from "./sort_package_json.js"
import * as pluginJsDoc from "prettier-plugin-jsdoc"

const prettierConfig = {
  plugins: [pluginJsDoc, pluginPackageJson()],
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
    {
      files: "{*.mdx}",
      options: {
        parser: "mdx",
        proseWrap: "preserve",
      },
    },
  ],
}
export default prettierConfig
