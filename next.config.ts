import { codecovNextJSWebpackPlugin } from "@codecov/nextjs-webpack-plugin";
import type { NextConfig } from "next";

export default {
	output: "export",
	webpack(config, options) {
		config.plugins.push(
			codecovNextJSWebpackPlugin({
				enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
				bundleName: "nextjs-template",
				uploadToken: process.env.CODECOV_TOKEN ?? "",
				webpack: options.webpack,
			})
		);
		return config;
	},
} satisfies NextConfig;
