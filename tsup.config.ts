import type { Options } from "tsup"
import { sassPlugin } from 'esbuild-sass-plugin';

const env = process.env.NODE_ENV
const isProd = env === "production"

export const tsup: Options = {
    dts: true,
    clean: true,
    splitting: true,
    minify: isProd,
    bundle: isProd,
    watch: !isProd,
    target: "es2020",
    skipNodeModulesBundle: true,
    outDir: isProd ? "dist" : "lib",
    format: ["cjs", "esm"],
    entry: ["src/**/*.ts"],
    esbuildPlugins: [sassPlugin()],
}
