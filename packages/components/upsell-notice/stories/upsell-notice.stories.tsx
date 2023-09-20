import React from "react"

// Import required component(s)
import { UpsellNotice as SuiUpsellNotice } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./upsell-notice.mdx"

// Configure default options
export default {
	title: "SUI/Components/Collections/Upsell Notice",
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
	const actions = [
		<Button
			key={0}
			appearance="primary"
			color={"hub" === props?.variation ? "blue" : "black"}
			isSmall={true}
		>
			Primary
		</Button>,
		<Button key={1} appearance="tertiary" color="black" isSmall={true}>
			Learn more
		</Button>,
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
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
	title: "Upsell notice",
	tagTitle: "PRO",
	variation: "hummingbird",
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
	tagTitle: {
		name: "Tag Title",
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
			"hub",
		],
		control: {
			type: "select",
			labels: {
				hummingbird: "Hummingbird",
				smush: "Smush",
				snapshot: "Snapshot",
				smartcrawl: "Smartcrawl",
				shipper: "Shipper",
				ivt: "Ivt",
				hustle: "Hustle",
				forminator: "Forminator",
				defender: "Defender",
				branda: "Branda",
				beehive: "Beehive",
				hub: "Hub",
			},
		},
	},
}
