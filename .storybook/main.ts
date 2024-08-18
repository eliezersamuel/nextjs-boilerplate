import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    ],
    addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        defaultName: "Documentação",
    },
    staticDirs: ["../public"],
};
export default config;
