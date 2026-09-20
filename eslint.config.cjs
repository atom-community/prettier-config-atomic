// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require("eslint-config-atomic")

module.exports = [{ ignores: ["dist/**", "node_modules/**"] }, ...config]
