/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	webpack: (configuration) => {
		configuration.module.rules.push(
			{
				test: /\.md$/,
				use: 'frontmatter-markdown-loader',
			},
			{
				test: /\.ya?ml$/,
				use: 'yaml-loader',
			},
		);
		return configuration;
	},
	// eslint-disable-next-line @typescript-eslint/require-await
	async exportPathMap(defaultPathMap) {
		return {
			...defaultPathMap,
		};
	},
};

module.exports = nextConfig;
