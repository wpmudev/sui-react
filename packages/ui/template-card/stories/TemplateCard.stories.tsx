import React, { Fragment } from "react"

// Import required component.
import { TemplateCard as SuiTemplateCard } from "../src"
import { Button } from "@wpmudev/sui-button"
import { Tag } from "@wpmudev/sui-tag"

// Import documentation main page.
import docs from "./TemplateCard.mdx"
import { IconsName } from "@wpmudev/sui-icons"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/TemplateCard",
	component: SuiTemplateCard,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Popover" story.
const TemplateCard = (props: PopoverBaseProps & { src?: string }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTemplateCard
						title={"This is a title."}
						description={"This is a description."}
						tag={
							<Tag isSmall={true} colorScheme={"red"}>
								Pro
							</Tag>
						}
						actions={[
							<Button
								key={"key-1"}
								colorScheme={"blue"}
								type={"primary"}
								isSmall={true}
							>
								Primary Button
							</Button>,
							<Button
								key={"key-2"}
								colorScheme={"white"}
								type={"tertiary"}
								isSmall={true}
							>
								Primary Button
							</Button>,
						]}
						{...props}
					/>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
TemplateCard.args = {
	example: "title",
	src: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/3061f01a175c457af10a05953daf0d47?_a=AQAEufR",
	icon: "File",
}

// Set controls for story arguments.
TemplateCard.argTypes = {
	example: {
		name: "Example",
		options: ["image", "title"],
		control: {
			type: "select",
			labels: {
				title: "Example: Title",
				image: "Example: Image",
			},
		},
	},
	src: {
		name: "Image Src",
		control: {
			type: "text",
		},
	},
	icon: {
		name: "Icon",
		options: IconsName,
		control: "select",
	},
}

// Publish required stories.
export { TemplateCard }
