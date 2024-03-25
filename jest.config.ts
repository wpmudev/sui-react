import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": ["ts-jest", {}],
		".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testMatch: ["<rootDir>/packages/**/?(*.)test.{ts,tsx}"],
	setupFilesAfterEnv: ["<rootDir>/scripts/setup-test.ts"],
	moduleNameMapper: {
		"^.+\\.svg$": "jest-svg-transformer",
	},
}

export default config
