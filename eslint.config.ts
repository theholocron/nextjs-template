import { nextApp } from "@theholocron/eslint-config/bundles/next-app";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...nextApp(),
	{
		settings: {
			react: { version: "19" },
		},
	},
	{ ignores: ["docs/**", "public/mockServiceWorker.js"] },
];

export default config;
