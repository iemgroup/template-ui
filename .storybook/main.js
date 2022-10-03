module.exports = {
  "stories": [
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "storybook-addon-apollo-client",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": {
      "name": 'webpack5',
      "options": {
        "lazyCompilation": true,
      },
    },
  },
}
