import React from "react"

// Import required component(s)
import { UpsellNotice as SuiUpsellNotice } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./upsell-notice.mdx"

// Configure default options
export default {
	title: "SUI/Components/Collections/UpsellNotice",
	component: SuiUpsellNotice,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
// eslint-disable-next-line react/prop-types
export const UpsellNotice = ({ example, ...props }) => {
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
			// onClick={onApplyButton}
		>
			Primary
		</Button>,
		<a href="#">Learn more</a>,
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={box}>
					<SuiUpsellNotice
						{...props}
						actions={actions}
						features={[
							"Performance Test Reporting",
							"Uptime monitoring",
							"Enhanced file minification with CDN",
							"Database Cleanup notifications",
						]}
					/>
				</div>
			</div>
		</div>
	)
}

UpsellNotice.args = {
	description:
		"Get our full WordPress performance optimization suite with Hummingbird Pro and the additional benefits of WPMU DEV membership. Get yours today now Lorem ipsum Lorem Ipsum.",
}

UpsellNotice.argTypes = {
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		control: {
			type: "text",
		},
	},
	variation: {
		name: "Variation",
		options: [
			"hummingbird",
			"smush",
			"snapshot",
			"smartcrawl",
			"shipper",
			"ivt",
			"hustle",
			"forminator",
			"defender",
			"branda",
			"beehive",
		],
		control: {
			type: "select",
		},
	},
	size: {
		name: "Size",
		options: ["sm", "lg"],
		control: {
			type: "select",
		},
	},
}
