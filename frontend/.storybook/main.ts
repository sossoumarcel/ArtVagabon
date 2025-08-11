import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  // LIGNE CORRECTE
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
<<<<<<< HEAD
=======
    

>>>>>>> 24258d5ac3b788d20d9a083f204565eb022bc840
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
<<<<<<< HEAD
  staticDirs: ["..\\public"],
=======
  staticDirs: ["../public"],
>>>>>>> 24258d5ac3b788d20d9a083f204565eb022bc840
}
export default config
