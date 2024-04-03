module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function",
        ],
      },
    ],
    "color-hex-length": "long",
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
  },
};
