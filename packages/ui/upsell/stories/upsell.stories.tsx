import React from "react"

// Import required component(s)
import { Upsell as SuiUpsell } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./upsell.mdx"

// Configure default options
export default {
	title: "SUI/Components/Collections/Upsell",
	component: SuiUpsell,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
// eslint-disable-next-line react/prop-types
export const Upsell = ({ ...props }) => {
	const actions = [
		<div key={0}>
			<Button appearance="primary" color="black" isSmall={true}>
				Upgrade now
			</Button>
		</div>,
		<div key={1}>
			<Button appearance="tertiary" color="black" isSmall={true}>
				Learn more
			</Button>
		</div>,
	]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiUpsell
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

Upsell.args = {
	description: (
		<p>
			Get our full WordPress performance optimization suite with Hummingbird Pro
			and the additional benefits of WPMU DEV membership. Get yours today now
			Lorem ipsum Lorem Ipsum.
		</p>
	),
	variation: "hummingbird",
	size: "sm",
}

Upsell.argTypes = {
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
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
			},
		},
	},
	size: {
		name: "Size",
		options: ["sm", "lg"],
		control: {
			type: "select",
			labels: {
				sm: "Small",
				lg: "Large",
			},
		},
	},
}