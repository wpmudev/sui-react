import React from "react"

// Import required component(s)
import { AlertBanner as SuiAlertBanner } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./alert-banner.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Alert Banner",
	component: SuiAlertBanner,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const AlertBanner = ({ example, variation, ...props }) => {
	const box = {
		display: "flex",
		flexDirection: "column",
		gap: "8px",
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: "#fff",
	}

	const theme =
		"plugin-upsell" === variation || "hub-upsell" === variation ? true : false

	const actions = [
		<Button
			key={0}
			appearance={theme ? "primary" : "secondary"}
			color={theme ? "white" : "black"}
			isSmall={true}
		>
			Primary
		</Button>,
		<Button
			key={1}
			appearance="tertiary"
			color={theme ? "white" : "black"}
			isSmall={true}
		>
			Secondary
		</Button>,
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiAlertBanner {...props} variation={variation} actions={actions}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						volutpat.
					</SuiAlertBanner>
				</div>
			</div>
		</div>
	)
}

AlertBanner.args = {
	variation: "informative",
	displayIcon: true,
	isDismissible: true,
}

AlertBanner.argTypes = {
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
			labels: {
				informative: "Informative",
				success: "Success",
				warning: "Warning",
				critical: "Critical",
				"plugin-upsell": "Plugin Upsell",
				"hub-upsell": "Plugin Hub",
			},
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
