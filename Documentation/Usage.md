
# Usage

<br>

## Configuration

Add the following to your `package.json` :

<br>

```json
"prettier" : "prettier-config-atomic" ,
"scripts" : {
    "test.format" : "prettier . --check" ,
    "format" : "prettier --write ."
}
```

<br>
<br>

## Formatting

*To format your files, run:*

<br>

```sh
npm run format
```

<br>
<br>

## Testing

You can test the formatting by <br>
running the following in the CI:
    
<br>
    
```sh
npm run test.format
```

<br>
<br>

## Ignoring

You can use a `.prettierignore` file, to not <br>
formatting specific items, in the same way <br>
you do with a `.gitignore` file.

<br>

```gitignore
node_modules

package-lock.json
pnpm-lock.yaml

CHANGELOG.md

# Build Folder

dist
```

<br>
<br>

## Modifications

Create a `prettier.config.js` file in the <br>
root of your project instead of adding the <br>
`prettier` entry to the `package.json`.

<br>

```javascript
module.exports = {
    
    ... require('prettier-config-atomic') ,
    
    
    /*
     *  Add your modification here.
     */
    
    
    // Example
    semi : true
}
```

<br>
<br>

## GitHub Action

*Creating a linter job.*

<br>

```yaml
Lint:
    if : '! contains(github.event.head_commit.message,"[skip ci]")'
    runs-on : ubuntu-latest
    
    env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    
    steps:
    - 
        uses : actions/checkout@v2
        with:
            fetch-depth : 0
    - 
        name : Commit Lint ✨
        uses : wagoid/commitlint-github-action@v2
    - 
        name : Install Dependencies
        run : npm install
    - 
        name : Format ✨
        run : npm run test.format
    - 
        name : Lint ✨
        run : npm run test.lint
```

<br>
