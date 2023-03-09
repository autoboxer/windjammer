module.exports = {
  "stories": [
    "../packages/core/*/stories/*.stories.@(ts|tsx)",
    "../packages/components/*/stories/*.stories.@(ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-measure',
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}