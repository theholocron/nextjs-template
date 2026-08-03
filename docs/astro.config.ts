import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://theholocron.github.io",
	base: "/nextjs-template",
	integrations: [
		starlight({
			title: "Next.js Template",
			plugins: [docsTheme()],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/theholocron/nextjs-template",
				},
			],
			sidebar: [{ label: "Overview", slug: "" }],
		}),
	],
});
