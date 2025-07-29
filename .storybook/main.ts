import { type StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-coverage",
		"@storybook/addon-links",
		"@chromatic-com/storybook",
	],
	docs: {
		defaultName: "Documentation",
	},
	features: {
		experimentalRSC: true,
	},
	framework: {
		name: "@storybook/nextjs",
		// https://storybook.js.org/docs/api/main-config/main-config-framework
		options: {},
	},
	staticDirs: ["../public"],
	stories: ["../src/**/*.mdx", "../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
};

export default config;
