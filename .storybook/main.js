module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["./assets"],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
