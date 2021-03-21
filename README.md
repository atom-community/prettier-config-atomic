# prettier-config-atomic

The Prettier configuration used in atom-community.

This configuration supports all the formats including `typescript`, `javascript`, `json`, `yaml`, and `markdown`.

## Installation

```
npm install --save-dev prettier-config-atomic
```

<details>
<summary>This package also needs `prettier`.</summary>

Either add the following to your `.npmrc` if using `pnpm` to hoist the prettier bundled with the config

```
public-hoist-pattern[]=*
```

Or install `prettier` yourself in your `devDependencies`.

If using `npm`, the prettier dependency is hosted automatically.

</details>

## Usage

Add the following to your `package.json`

```json
"prettier": "prettier-config-atomic",
"scripts": {
  "format": "prettier --write .",
  "test.format": "prettier . --check"
}
```

and run `npm run format` to format the files. You can also use `npm run test.format` in the CI to test formatting of the project.

To ignore some files from formatting, create a `.prettierignore` file and add the files to the list. This is usually the same as `gitignore`.

```
node_modules
pnpm-lock.yaml
package-lock.json
dist
```

Notice that the built folders like `dist` are in the above list.

### Modifying the config

Create a `prettier.config.js` file at the root of the project with the following content:

```js
module.exports = {
  ...require("prettier-config-atomic"),

  // add the modifications here:

  // an example:
  // semi: true,
}
```
