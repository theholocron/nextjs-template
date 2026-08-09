// eslint-disable-next-line @typescript-eslint/no-require-imports
const { defineConfig } = require("@theholocron/lighthouse-config");

module.exports = defineConfig({
	url: "http://localhost:3000/",
	startServerCommand: "pnpm preview",
});
