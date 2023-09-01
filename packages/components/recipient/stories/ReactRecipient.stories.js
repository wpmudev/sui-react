import React from "react"

// Import required component
import { Recipient as SuiRecipient } from "../src"

// Import documentation main page
import docs from "./ReactRecipient.mdx"

// Import required assets
import image from "./images/unreal-person.jpg"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Recipient",
	component: SuiRecipient,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Recipient" story.
const Recipient = ({ userAvatar, ...props }) => {
	const set = {}

	set.box = {
		margin: 0,
		padding: "10px",
		border: "white" === props.color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === props.color ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiRecipient {...props} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Recipient.args = {
	appearance: "primary",
	userName: "Recipient Name",
	userEmail: "example@email.com",
	userAvatar: "icon",
	status: "",
	userImage: {
		alt: "Unreal Person avatar image",
		src: image,
	},
	isInvited: false,
}

// Set controls for story arguments.
Recipient.argTypes = {
	userName: {
		name: "Recipient name",
	},
	userEmail: {
		name: "Recipient email",
	},
	userAvatar: {
		name: "Recipient avatar",
		options: ["icon", "image"],
		control: {
			type: "inline-radio",
			labels: {
				icon: "Icon",
				image: "Image",
			},
		},
	},
	userImage: {
		name: "Recipient image",
		control: {
			type: "object",
		},
		if: {
			arg: "userAvatar",
			eq: "image",
		},
	},
	status: {
		name: "Recipient confirmed",
		options: ["", "confirmed", "not-accepted", "not-connected"],
		control: {
			type: "select",
			labels: {
				"": "None",
				confirmed: "Success",
				"not-accepted": "Warning",
				"not-connected": "Error",
			},
		},
	},
	isInvited: {
		name: "Recipient invited",
		control: {
			type: "boolean",
		},
	},
	appearance: {
		name: "Appearance",
		options: ["primary", "secondary"],
		control: {
			type: "select",
			labels: {
				primary: "Primary",
				secondary: "Secondary",
			},
		},
	},
}

// Publish required stories.
export { Recipient }
