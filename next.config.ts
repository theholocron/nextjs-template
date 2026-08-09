import { codecovNextJSWebpackPlugin } from "@codecov/nextjs-webpack-plugin";
import type { NextConfig } from "next";

export default {
	output: "export",
	webpack(config) {
		config.plugins.push(
			codecovNextJSWebpackPlugin({
				enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
				bundleName: "nextjs-template",
				uploadToken: process.env.CODECOV_TOKEN,
			}),
		);
		return config;
	},
} satisfies NextConfig;
