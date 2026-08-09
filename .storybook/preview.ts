import "../app/app.css";

import { type Preview } from "@storybook/nextjs-vite";
import { createPreviewAnnotations } from "msw-storybook-addon/preview";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const mswAnnotations = createPreviewAnnotations();

const preview: Preview = {
	...mswAnnotations,
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		html: {
			prettier: {
				tabWidth: 4,
				useTabs: true,
			},
		},
		layout: "centered",
		nextjs: { appDirectory: true },
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	tags: ["autodocs"],
};

export default preview;
