module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["babel","jest","react"],
  "parserOptions": {
    "sourceType": "module",
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["warn", "windows"],
    "quotes": ["warn", "double"],
    "semi": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": "off",
    "one-var": "off",
    "no-undef": "off",
    "no-console": "warn",
    "react/prop-types": 0
  }
}