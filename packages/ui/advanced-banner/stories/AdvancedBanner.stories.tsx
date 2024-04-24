import React, { Fragment } from "react"

// Import required component
import {
	AdvancedBanner as SuiAdvancedBanner,
	AdvancedBannerProps,
} from "../src"

import { Button } from "@wpmudev/sui-button"
import { Input } from "@wpmudev/sui-input"

// Import documentation main page
import docs from "./AdvancedBanner.mdx"

import TagIcon from "./images/tag.svg"

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
const AdvancedBanner = (props: AdvancedBannerProps) => {
	let children = null

	switch (props?.variation) {
		case "plugin":
			children = (
				<Fragment>
					<Button type="primary" colorScheme="blue">
						Primary
					</Button>

					<Button type="secondary" colorScheme="blue">
						Secondary
					</Button>

					<Button type="tertiary" colorScheme="blue">
						Tertiary
					</Button>
				</Fragment>
			)
			break
		case "hub":
			children = (
				<Fragment>
					<Button type="primary" colorScheme="white">
						Primary
					</Button>

					<Button type="secondary" colorScheme="white">
						Secondary
					</Button>

					<Button type="tertiary" colorScheme="white">
						Tertiary
					</Button>
				</Fragment>
			)
			break
		case "newsletter":
			children = (
				<Fragment>
					<div>
						<Input
							id="newsletter-email"
							placeholder="Enter your email to win today"
						/>
					</div>
					<Button type="primary" colorScheme="blue">
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
					<SuiAdvancedBanner {...props}>{children}</SuiAdvancedBanner>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
AdvancedBanner.args = {
	variation: "plugin",
	title: "This is the example heading for the banner.",
	description: "This is the example description for the banner. ",
	helper: "*Only admin users can see this message",
	discountPercentage: 50,
	ctaTitle: "",
	allowClose: true,
	imageUrl: TagIcon,
}

// Set controls for story arguments.
AdvancedBanner.argTypes = {
	variation: {
		name: "Examples",
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
	imageUrl: {
		name: "Image Url",
		control: {
			type: "text",
		},
		if: {
			arg: "variation",
			neq: "black-friday",
		},
	},
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
	helper: {
		name: "Helper",
		control: {
			type: "text",
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
			arg: "variation",
			eq: "black-friday",
		},
	},
	ctaTitle: {
		name: "CTA Title",
		control: {
			type: "text",
		},
		if: {
			arg: "variation",
			eq: "black-friday",
		},
	},
}

// Publish required stories.
export { AdvancedBanner }
