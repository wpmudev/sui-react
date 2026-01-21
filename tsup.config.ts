import { defineConfig } from "tsup"
import { sassPlugin } from "esbuild-sass-plugin"

const env = process.env.NODE_ENV
const isProd = env === "production"

export default defineConfig({
	entry: ["src/**/*.ts"],
	format: ["cjs", "esm"],
	target: "es2020",
	outDir: isProd ? "dist" : "lib",
	// Core Settings
	dts: true, // Generates .d.ts files
	clean: true, // Cleans output directory
	splitting: true, // Only works for ESM, recommended for treeshaking
	minify: isProd,
	bundle: isProd,
	watch: !isProd,
	// skipNodeModulesBundle is now true by default in modern tsup for libraries.
	// We can keep it or use external: [/node_modules/] for explicit control.
	skipNodeModulesBundle: true,
	// CSS/Sass Handling
	// esbuild-sass-plugin v3+ now supports 'embedded' sass for much faster builds.
	esbuildPlugins: [
		sassPlugin({
			type: "css", // Standard output. Use "local-css" for CSS Modules
		}) as any,
	],
	// avoid generating CJS shims that increase size
	shims: true,
})
