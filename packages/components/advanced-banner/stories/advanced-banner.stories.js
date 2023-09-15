import React, { Fragment } from "react"

// Import required component
import { AdvancedBanner as SuiAdvancedBanner } from "../src"

import { Button } from "@wpmudev/sui-button"
import { Input } from "@wpmudev/sui-input"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation main page
import docs from "./advanced-banner.mdx"

import TagIcon from "./assets/tag.svg"

// Configure default options.
export default {
	title: "SUI/Components/Collections/Advanced Banner",
	component: SuiAdvancedBanner,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "AdvancedBanner" story.
const AdvancedBanner = ({ ...props }) => {
	const set = {}

	let children = null

	switch (props?.example) {
		case "plugin":
			children = (
				<Fragment>
					<Button appearance="primary" color="blue">
						Primary
					</Button>

					<Button appearance="secondary" color="blue">
						Secondary
					</Button>

					<Button appearance="tertiary" color="blue">
						Tertiary
					</Button>
				</Fragment>
			)
			break
		case "hub":
			children = (
				<Fragment>
					<Button appearance="primary" color="white">
						Primary
					</Button>

					<Button appearance="secondary" color="white">
						Secondary
					</Button>

					<Button appearance="tertiary" color="white">
						Tertiary
					</Button>
				</Fragment>
			)
			break
		case "newsletter":
			children = (
				<Fragment>
					<Input
						id="newsletter-email"
						placeholder="Enter your email to win today"
					/>
					<Button appearance="primary" color="blue">
						Subscribe now
					</Button>
				</Fragment>
			)
			break
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiAdvancedBanner {...props} variation={props?.example}>
						{children}
					</SuiAdvancedBanner>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
AdvancedBanner.args = {
	title: "This is the example heading for the banner.",
	description: "This is the example description for the banner. ",
	helper: "*Only admin users can see this message",
	example: "plugin",
	variation: "plugin",
	discountPercentage: 10,
	ctaTitle: "",
	allowClose: true,
	imageUrl: TagIcon,
}

// Set controls for story arguments.
AdvancedBanner.argTypes = {
	variation: {
		name: "Variation [been overridden by Example]",
		options: ["plugin", "hub", "newsletter", "black-friday"],
		control: {
			type: "select",
		},
	},
	allowClose: {
		name: "Allow Close",
		control: {
			type: "boolean",
		},
	},
	discountPercentage: {
		name: "Discount Percentage",
		control: {
			type: "text",
		},
		if: {
			arg: "example",
			eq: "black-friday",
		},
	},
	ctaTitle: {
		name: "CTA Title",
		control: {
			type: "text",
		},
		if: {
			arg: "example",
			eq: "black-friday",
		},
	},
	example: {
		name: "Example",
		options: ["plugin", "hub", "newsletter", "black-friday"],
		control: {
			type: "select",
			labels: {
				plugin: "Example: General Plugins",
				hub: "Example: Hub",
				newsletter: "Example: News Letter",
				"black-friday": "Example: Black Friday",
			},
		},
	},
}

// Publish required stories.
export { AdvancedBanner }
