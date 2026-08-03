import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "Next.js starter template for @theholocron repos.",
	homepage: "https://docs.theholocron.dev/nextjs-template/",
	repo: {
		name: "theholocron/nextjs-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nextjs", "react", "template", "typescript"],
		...repo,
		protection: "balanced",
		properties: {
			...repo.properties,
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "release", with: { "run-build": true } },
		{
			name: "deploy-docs",
			with: { name: "nextjs-template" },
			paths: ["docs/**"],
		},
	],
	providers: {
		...providers,
		deployment: "vercel",
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
