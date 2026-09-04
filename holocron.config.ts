import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { compose, nextjsBundle as nextjs, node, typecheck, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(
	node(),
	typecheck(),
	...nextjs({ test: { "wait-on-url": "http://localhost:3000", "run-chromatic": true } }),
	wiki()
);
export default defineConfig({
	...preset,
	description:
		"A modern NextJS template with pre-configured tools, best practices, and CI/CD setup for rapid application development.",
	homepage: "https://docs.theholocron.dev/nextjs-template/",
	repo: {
		name: "theholocron/nextjs-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nextjs", "react", "template", "typescript"],
		...preset.repo,
		requiredChecks: [
			...(preset.repo.requiredChecks ?? []),
			"Test / Run Storybook interaction tests",
			"Test / Test Interactions and Accessibility",
			"Test / Test User Flow (1)",
			"Test / Test User Flow (2)",
			"Test / Test Visual and Composition (default)",
			"audit / Audit the bundle size",
			"audit / Audit the performance",
			"cypress: default-group (merge)",
		],
	},
	workflows: [
		...preset.workflows,
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { docs: true, storybook: [{ name: "" }] } },
	],
	providers: {
		...preset.providers,
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-copy" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
