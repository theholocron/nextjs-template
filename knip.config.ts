import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// vitest.config.ts, next.config.ts auto-detected by Knip plugins
			// src/**/*.test.{ts,tsx} and app/**/*.test.{ts,tsx} removed — no matches
			entry: [
				"holocron.config.ts",
				// storybook decorator — template example, not imported by other files
				".storybook/decorators.tsx",
				// MSW server setup — used in server-side/test context
				"app/msw/node.ts",
				// template example exports — entry so unused-export checks are skipped
				"src/auth/use-auth.ts",
				"src/login/login.tsx",
			],
			project: ["src/**/*.{ts,tsx}", "app/**/*.{ts,tsx}", "*.config.ts", "*.config.cjs"],
			// standalone tool configs — not imported by project code
			// .mdx files are compiled extensions — imports not followed by Knip
			ignoreFiles: ["devmoji.config.cjs", "lighthouse.config.cjs", "**/*.mdx"],
			// astro.config.ts is the docs build config, not an Astro workspace — disable plugin
			astro: false,
		},
		docs: {
			entry: ["src/content.config.ts"],
		},
	},
	ignoreDependencies: [
		// commitlint "extends" uses string shorthand — both the scoped org shorthand and the full package
		"@theholocron",
		"@theholocron/commitlint-config",
		// used only as a pnpm override reference, not a direct import
		"@commitlint/config-conventional",
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		"@theholocron/holocron-plugin-vercel",
		// skills referenced as strings in holocron.config.ts
		"@theholocron/skills",
		// config packages loaded via config file resolution — not static imports
		"@theholocron/lighthouse-config",
		"@theholocron/storybook-config",
		// storybook packages referenced as strings or loaded at runtime
		"@storybook/builder-vite",
		"storybook-addon-pseudo-states",
		// binary tools — invoked via CLI, hooks, or CI scripts
		"alex",
		"sort-package-json",
		"tsc-files",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
