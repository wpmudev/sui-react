import { addons } from "@storybook/manager-api"
import { create } from "@storybook/theming/create"

import "./assets/js/page-title"
import suiLogo from "./assets/images/sui-logo.png"

const suiTheme = create({
	// this will inherit the base properties of Storybooks'light theme
	base: "light",
	// Base theme.
	colorPrimary: "hsl(213, 68%, 11%)",
	colorSecondary: "hsl(214, 84%, 56%)",

	// Typography
	fontBase: '"Roboto", sans-serif',
	fontCode: "monospace",

	// Branding.
	brandTitle: "Shared UI",
	brandImage: suiLogo,
	brandUrl: "https://github.com/wpmudev/shared-ui/",

	// Main UI.
	appBg: "hsl(213, 68%, 11%)",
	appBorderColor: "hsl(0, 0%, 90%)",

	// Toolbar UI.
	barTextColor: "hsl(0, 0%, 67%)",
	barSelectedColor: "hsl(214, 84%, 56%)",
	barBg: "hsl(0, 0%, 100%)",
})

addons.setConfig({
	theme: suiTheme,
})
