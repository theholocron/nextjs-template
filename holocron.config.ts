import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { compose, nextjsBundle as nextjs, node, typecheck, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(
	node(),
	typecheck(),
	...nextjs({
		test: {
			"wait-on-url": "http://localhost:3000",
			// Explicit now (holocron#394) -- the reusable workflow's own
			// chromatic-projects default is going away (an unused matrix
			// entry showed as a stray "skipping" check on repos that never
			// opt into Chromatic at all). Same single default project this
			// repo was already implicitly getting, just spelled out so
			// removing that default doesn't silently stop this repo's own
			// Chromatic run.
			"run-chromatic": { projects: [{ tokenName: "default", workingDir: ".", buildScript: "build:storybook" }] },
		},
	}),
	wiki()
);
export default defineConfig({
	...preset,
	description:
		"A modern NextJS template with pre-configured tools, best practices, and CI/CD setup for rapid application development.",
	homepage: "https://docs.theholocron.dev/nextjs-template/",
	repo: {
		...preset.repo,
		name: "theholocron/nextjs-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nextjs", "react", "template", "typescript"],
	},
	tasks: [
		...preset.tasks,
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { docs: true, storybook: [{ name: "" }] } },
	],
	extraRequiredChecks: [
		...(preset.extraRequiredChecks ?? []),
		"Test / Run Storybook interaction tests",
		"Test / Test Interactions and Accessibility",
		"Test / Test User Flow (1)",
		"Test / Test User Flow (2)",
		"Test / Test Visual and Composition (default)",
		"audit / Audit the bundle size",
		"audit / Audit the performance",
		"cypress: default-group (merge)",
	],
	providers: {
		...preset.providers,
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-copy" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
