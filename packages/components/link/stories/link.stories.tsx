import React from "react"

// Import required component(s)
import { Link as SuiLink } from "../src"

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
export const Link = ({ example, ...props }) => {
	const box = {
		display: "flex",
		flexDirection: "column",
		gap: "8px",
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		// background: "#fff",
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
	href: "#",
	as: "a",
	isInline: false,
	isDisabled: false,
	isExternal: false,
	hasExternalIcon: false,
}

Link.argTypes = {
	as: {
		name: "As",
		control: {
			type: "text",
		},
	},
	isInline: {
		name: "isInline",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "isDisabled",
		control: {
			type: "boolean",
		},
	},
	isExternal: {
		name: "isExternal",
		control: {
			type: "boolean",
		},
	},
	hasExternalIcon: {
		name: "hasExternalIcon",
		control: {
			type: "boolean",
		},
	},
	className: {
		name: "className",
		control: {
			type: "text",
		},
	},
}
