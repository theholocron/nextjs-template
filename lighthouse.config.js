/**
 * @see https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
 * @type {LHCI.LighthouseCiConfig}
 */
const config = {
	ci: {
		upload: {
			target: "temporary-public-storage",
		},
	},
};

export default config;
