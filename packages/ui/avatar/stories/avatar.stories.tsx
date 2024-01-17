import React from "react"

// Import required component
import { Avatar as SuiAvatar } from "../src"

// Import documentation main page
import docs from "./avatar.mdx"

// Import required assets
import image from "./images/unreal-person.jpg"

// Configure default options.
export default {
	title: "SUI/Components/Core/Avatar",
	component: SuiAvatar,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Avatar" story.
const Avatar = ({ ...props }) => {
	const boxStyle = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
		fontSize: 0,
		lineHeight: 1,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<SuiAvatar {...props} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Avatar.args = {
	example: "icon",
	status: "",
	image: {
		alt: "Unreal Person avatar image",
		src: image,
	},
	isSmall: false,
}

// Set controls for story arguments.
Avatar.argTypes = {
	example: {
		name: "Example",
		options: ["icon", "image"],
		control: {
			type: "select",
			labels: {
				icon: "Example: Icon Avatar",
				image: "Example: Image Avatar",
			},
		},
	},
	image: {
		name: "Image",
		control: "object",
		if: {
			arg: "example",
			eq: "image",
		},
	},
	status: {
		name: "Status",
		options: ["none", "confirmed", "awaiting", "not-accepted", "not-connected"],
		control: {
			type: "select",
			labels: {
				none: "Status: None",
				confirmed: "Status: Confirmed",
				awaiting: "Status: Awaiting",
				"not-accepted": "Status: Not Accepted",
				"not-connected": "Status: Not Connected",
			},
		},
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
}

// Publish required stories.
export { Avatar }
