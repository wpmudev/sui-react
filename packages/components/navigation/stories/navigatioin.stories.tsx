import React from "react"

// Import required component(s)
import { Navigation as SuiNavigation } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./navigation.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Navigation",
	component: SuiNavigation,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Navigation = ({ example, ...props }) => {
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

	const actions = [
		<Button
			key={0}
			appearance="secondary"
			color="black"
			isSmall={true}
			isFullWidth={true}
			// onClick={onApplyButton}
		>
			Primary
		</Button>,
		<Button
			key={1}
			appearance="secondary"
			color="black"
			isSmall={true}
			isFullWidth={true}
			// onClick={onApplyButton}
		>
			Secondary
		</Button>,
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiNavigation {...props} actions={actions}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						volutpat.
					</SuiNavigation>
				</div>
			</div>
		</div>
	)
}

Navigation.args = {
	variation: "",
	displayIcon: true,
	isDismissible: true,
}

Navigation.argTypes = {
	variation: {
		name: "Variation",
		options: [
			"informative",
			"success",
			"warning",
			"critical",
			"plugin-upsell",
			"hub-upsell",
		],
		control: {
			type: "inline-radio",
		},
	},
	displayIcon: {
		name: "Display Icon",
		control: {
			type: "boolean",
		},
	},
	isDismissible: {
		name: "Is Dismissible",
		control: {
			type: "boolean",
		},
	},
}
