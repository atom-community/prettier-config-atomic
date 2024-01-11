import { parsers } from "prettier/plugins/babel.mjs"
import { sortPackageJson } from "sort-package-json"

/** Modified from https://github.com/matzkoh/prettier-plugin-packagejson to use the custom sort-package.json package */
export function pluginPackageJson() {
  const parser = parsers["json-stringify"]

  return {
    parsers: {
      "json-stringify": {
        ...parser,
        preprocess(text_given: string, options: any) {
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
