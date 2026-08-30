import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { nextjs } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain } = nextjs();
export default defineConfig({
	description:
		"A modern NextJS template with pre-configured tools, best practices, and CI/CD setup for rapid application development.",
	homepage: "https://docs.theholocron.dev/nextjs-template/",
	org,
	domain,
	repo: {
		name: "theholocron/nextjs-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nextjs", "react", "template", "typescript"],
		...repo,
		requiredChecks: [
			...(repo.requiredChecks ?? []),
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
		...workflows.filter((w) => typeof w === "string" || (w as { name: string }).name !== "test"),
		{
			name: "test",
			with: {
				"run-unit": false,
				"run-storybook": true,
				"run-interaction": true,
				"run-user-flow": true,
				"wait-on-url": "http://localhost:3000",
				"run-chromatic": true,
			},
		},
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { docs: true, storybook: [{ name: "" }] } },
	],
	providers,
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
