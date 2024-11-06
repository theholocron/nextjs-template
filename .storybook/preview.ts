import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { type Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import "../app/app.css";

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
	layout: "centered",
	loaders: [mswLoader],
	nextjs: { appDirectory: true },
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
		viewport: {
			viewports: INITIAL_VIEWPORTS,
			// defaultViewport: 'ipad',
		},
	},
	tags: ["autodocs"],
	test: {
		// This is needed until Next will update to the React 19 beta: https://github.com/vercel/next.js/pull/65058
		// In the React 19 beta ErrorBoundary errors (such as redirect) are only logged, and not thrown.
		dangerouslyIgnoreUnhandledErrors: true,
	},
};

export default preview;
