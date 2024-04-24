import { dirname, join } from "path"
const path = require("path")
module.exports = {
	stories: [
		"../packages/**/stories/*.stories.@(js|jsx|ts|tsx)",
		"../packages/**/*.stories.@(js|jsx|ts|tsx)",
		"../packages/**/stories/*.mdx",
	],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-a11y"),
		"@storybook/addon-webpack5-compiler-swc",
		"@chromatic-com/storybook",
	],
	// @ts-ignore
	webpackFinal: async (config) => {
		// Add SASS support.
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"],
			include: path.resolve(__dirname, "../"),
		})

		// load typescript files
		config.module.rules.push({
			test: /\.(ts|tsx)?$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			],
		})

		// add typescript extensions
		config.resolve.extensions.push(".ts", ".tsx")

		return config
	},
	framework: {
		name: getAbsolutePath("@storybook/react-webpack5"),
		options: {},
	},
	typescript: {
		reactDocgen: "react-docgen-typescript-plugin",
	},
	docs: {
		autodocs: true,
	},
}

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")))
}
