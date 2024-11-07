/**
 * @see https://nextjs.org/docs/app/building-your-application/configuring
 * @type {import('next').NextConfig}
 */
import bundleAnalyzer from "@next/bundle-analyzer";

const config = {
	// your existing config settings go here
};

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(config);
