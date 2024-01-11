import type { ParserOptions, Plugin } from "prettier"
import { parsers } from "prettier/plugins/babel.mjs"
import { sortPackageJson } from "sort-package-json"

/** Modified from https://github.com/matzkoh/prettier-plugin-packagejson to use the custom sort-package.json package */
export function pluginPackageJson(): Plugin {
  const jsonStringifyParser = parsers["json-stringify"]

  return {
    parsers: {
      "json-stringify": {
        ...jsonStringifyParser,
        preprocess(text_given: string, options: ParserOptions) {
          let text = text_given
          if (jsonStringifyParser.preprocess) {
            text = jsonStringifyParser.preprocess(text, options)
          }

          return options.filepath && /(^|\\|\/)package\.json$/.test(options.filepath) ? sortPackageJson(text) : text
        },
      },
    },
  }
}
