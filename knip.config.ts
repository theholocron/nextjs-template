import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["src/**/*.ts", "src/**/*.tsx", "app/**/*.ts", "app/**/*.tsx", "holocron.config.ts"],
	project: ["src/**/*.ts", "src/**/*.tsx", "app/**/*.ts", "app/**/*.tsx", "*.config.ts", "*.config.cjs"],
	ignoreDependencies: [
		"@theholocron/tsconfig",
		"@theholocron/commitlint-config",
		"@theholocron/lint-staged-config",
		"husky",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
