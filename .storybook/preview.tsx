import React, { useCallback, useEffect, useState } from "react"
import "@storybook/addon-console"

import "./assets/js/body-class"
import "./assets/js/html-class"

import "./assets/css/wordpress.css"

import "../packages/assets/css/src/scss/sui-css.scss"
import "../packages/assets/icons/src/scss/sui-icons.scss"

/**
 * Get devices samples from:
 * https://screensiz.es/
 */
const breakpoints = {
	xl: {
		name: 'Dell UltraSharp 24"',
		styles: {
			width: "1920px", // Min 1600px
			height: "1200px",
		},
		type: "extra-large",
	},
	lg: {
		name: 'MacBook Air 13"',
		styles: {
			width: "1440px", // Min 1200px - Max 1599px
			height: "900px",
		},
		type: "large",
	},
	md: {
		name: "iPad Pro 12.9-in",
		styles: {
			width: "1024px", // Min 1024px - Max 1199px
			height: "1366px",
		},
		type: "medium",
	},
	sm: {
		name: "iPad Pro 10.5-in",
		styles: {
			width: "834px", // Min 783px - Max 1023px
			height: "1112px",
		},
		type: "small",
	},
	xs: {
		name: "iPhone 12",
		styles: {
			width: "390px", // Min 0 - Max 782px
			height: "844px",
		},
		type: "extra-small",
	},
}

export const globalTypes = {
	theme: {
		name: "Theme",
		description: "Change global theme of stories.",
		toolbar: {
			icon: "switchalt",
			items: [
				{ title: "Light", left: "🌞", value: "light" },
				{ title: "Dark", left: "🌚", value: "dark" },
			],
		},
	},
	direction: {
		name: "Direction",
		description:
			"The direction property specifies the text direction/writing direction within a block-level element.",
		toolbar: {
			icon: "globe",
			items: [
				{ title: "Left to right", value: "" },
				{ title: "Right to left", value: "rtl" },
			],
		},
	},
}

export const parameters = {
	actions: {
		argTypesRegex: "^on[A-Z].*",
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: breakpoints,
	},
	backgrounds: {
		disable: true,
	},
	options: {
		storySort: {
			order: [
				"SUI",
				[
					"Home",
					"Getting Started",
					"What's New",
					["Changelog", "Roadmap"],
					"Components",
					[
						"Overview",
						"Core",
						["Grid", "*"],
						"Simple Elements",
						["Avatar", "Button", "Icon Button", "*"],
						"Forms",
						["Form Field", "Input", "Password Field", "Checkbox", "Radio", "*"],
						"Advanced",
						["*"],
						"Modules",
						["*"],
						"Collections",
						["*"],
						"*",
					],
					"CSS Framework",
					["Overview", "Colors", "Typography", "Layout", "Grid", "*"],
					"Icons Pack",
					"*",
				],
			],
		},
	},
}

const WordPress = ({ children }) => {
	const [folded, setFolded] = useState(false)

	const toggleSidebar = useCallback(() => {
		console.log("wpadmin", folded)
		setFolded(!folded)
	}, [folded])

	return (
		<div id="wpadmin" className={folded && "folded"}>
			<div id="adminmenumain" role="navigation" aria-label="Main Menu">
				<div id="adminmenuback"></div>

				<div id="adminmenuwrap">
					<ul id="adminmenu">
						<li
							className="wp-not-current-submenu wp-menu-separator"
							aria-hidden="true"
						>
							<div className="separator"></div>
						</li>

						<li id="collapse-menu" className="hide-if-no-js">
							<button
								type="button"
								id="collapse-button"
								aria-label="Collapse Main menu"
								aria-expanded="true"
								onClick={toggleSidebar}
							>
								<span
									className="collapse-button-icon"
									aria-hidden="true"
								></span>
								<span className="collapse-button-label">Collapse menu</span>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div id="wpcontent">
				<div id="wpadminbar" className="nojq">
					<div
						role="navigation"
						id="wp-toolbar"
						className="quicklinks"
						aria-label="Toolbar"
					>
						<ul id="wp-admin-bar-root-default" className="ab-top-menu">
							<li id="wp-admin-bar-menu-toggle">
								<a className="ab-item" href="#" aria-expanded="false">
									<span className="ab-icon"></span>
									<span className="screen-reader-text">Menu</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div id="wpbody" role="main">
					<div id="wpbody-content">{children}</div>

					<div className="clear"></div>
				</div>

				<div className="clear"></div>
			</div>
		</div>
	)
}

const SuiWrapper = ({ children, context }) => {
	// get theme from global context in storybook
	const { theme, direction } = context.globals

	// state to manage theme class
	const [suitheme, setSuiTheme] = useState(theme || "light")

	// When the theme global changes
	// Set the new theme
	useEffect(() => {
		setSuiTheme(theme || "light")
	}, [theme])

	// Set the direction rtl/ltr
	useEffect(() => {
		if (direction) {
			document.body.classList.add(direction)
			document.documentElement.dir = direction

			// cleanup function to remove class added.
			return () => {
				document.body.classList.remove(direction)
				document.documentElement.dir = ""
			}
		}
	}, [direction])

	return (
		<WordPress>
			<div className={`sui-wrap sui-theme--${suitheme}`}>{children}</div>
		</WordPress>
	)
}

export const decorators = [
	(Story, context) => (
		<SuiWrapper context={context}>
			<Story />
		</SuiWrapper>
	),
]
