import React from "react"

// Import required component(s)
import { Link as SuiLink, LinkProps } from "../src"

// Import documentation main page
import docs from "./link.mdx"

export default {
	title: "SUI/Components/Core/Link",
	component: SuiLink,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Link = ({ ...props }: LinkProps) => {
	let backgroundColor = "#fff"

	if ("secondary" === props?.theme) {
		backgroundColor = "#0059FF"
	}

	const box = {
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: backgroundColor,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiLink {...props}>Test link</SuiLink>
				</div>
			</div>
		</div>
	)
}

Link.args = {
	theme: "primary",
	href: "https://wpmudev.com",
	as: "a",
	isInline: false,
	isDisabled: false,
	isExternal: false,
	hasExternalIcon: false,
}

Link.argTypes = {
	theme: {
		name: "Theme",
		options: ["primary", "secondary"],
		control: {
			type: "select",
			labels: {
				primary: "Theme: Primary",
				secondary: "Theme: Secondary",
			},
		},
	},
	as: {
		name: "As",
		control: {
			type: "text",
		},
	},
	isInline: {
		name: "Inline",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
	isExternal: {
		name: "External",
		control: {
			type: "boolean",
		},
	},
	hasExternalIcon: {
		name: "External Icon",
		control: {
			type: "boolean",
		},
	},
}
