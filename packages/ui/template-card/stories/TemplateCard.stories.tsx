import React from "react"

// Import required component.
import {
	TemplateCard as SuiTemplateCard,
	TemplateCardInput as SuiTemplateCardInput,
	TemplateCardGroup as SuiTemplateCardGroup,
} from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page.
import docs from "./TemplateCard.mdx"
import { IconsName } from "@wpmudev/sui-icons"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Template Card",
	component: SuiTemplateCard,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Popover" story.
const TemplateCard = ({
	example,
	name,
	...props
}: {
	example: string
	name: string
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{"group" === example && (
						<SuiTemplateCardGroup
							name={name}
							defaultValue="Card 1"
							onChange={(val) => {
								console.log(val)
							}}
						>
							<SuiTemplateCardInput value="Card 1" {...props} />
							<SuiTemplateCardInput
								{...props}
								value="Card 2"
								title={"Return Merchandise Form"}
								description={"For processing returns."}
							/>
						</SuiTemplateCardGroup>
					)}
					{"card" === example && <SuiTemplateCard {...props} />}
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
TemplateCard.args = {
	example: "group",
	name: "card-group",
	iconOnly: false,
	title: "Return Merchandise Authorization Form",
	description:
		"For processing returns, including fields for product information, reason for return, and customer details.",
	image: {
		src: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/3061f01a175c457af10a05953daf0d47?_a=AQAEufR",
		alt: "Template Card",
	},
	icon: "File",
	tag: {
		children: "Pro",
		colorScheme: "red",
	},
	actions: [
		<Button
			key={"key-2"}
			colorScheme={"white"}
			type={"secondary"}
			isSmall={true}
		>
			Preview
		</Button>,
		<Button key={"key-1"} colorScheme={"blue"} type={"primary"} isSmall={true}>
			Create form
		</Button>,
	],
}

// Set controls for story arguments.
TemplateCard.argTypes = {
	example: {
		name: "Example",
		options: ["group", "card"],
		control: {
			type: "select",
			labels: {
				group: "Example: Radio Group",
				card: "Example: Card Only",
			},
		},
	},
	name: {
		name: "Group Name",
		control: {
			type: "text",
		},
		if: {
			arg: "example",
			eq: "group",
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
	iconOnly: {
		name: "Icon Only",
		control: {
			type: "boolean",
		},
	},
	image: {
		name: "Image Src",
		if: {
			arg: "iconOnly",
			neq: true,
		},
	},
	tag: {
		name: "Tag",
	},
	actions: {
		name: "Actions",
	},
	icon: {
		name: "Icon",
		options: IconsName,
		control: "select",
		if: {
			arg: "iconOnly",
			neq: false,
		},
	},
}

// Publish required stories.
export { TemplateCard }
