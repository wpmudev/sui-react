import React, { Fragment } from "react"

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
const TemplateCard = (props: PopoverBaseProps & { src?: string }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
		display: "flex",
		"flex-direction": "column",
		gap: "16px",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTemplateCardGroup name="radio-group" defaultValue="radio 2">
						<SuiTemplateCardInput
							value="radio 1"
							title={"Return Merchandise Authorization Form"}
							description={
								"For processing returns, including fields for product information, reason for return, and customer details."
							}
							tag={{
								children: "Pro",
								colorScheme: "red",
							}}
							actions={[
								<Button
									key={"key-2"}
									colorScheme={"white"}
									type={"secondary"}
									isSmall={true}
								>
									Preview
								</Button>,
								<Button
									key={"key-1"}
									colorScheme={"blue"}
									type={"primary"}
									isSmall={true}
								>
									Create form
								</Button>,
							]}
							{...props}
							image={{}}
						/>
						<SuiTemplateCardInput
							value="radio 2"
							title={"Return Merchandise Form"}
							description={"For processing returns, including."}
							tag={{
								children: "Pro",
								colorScheme: "red",
							}}
							actions={[
								<Button
									key={"key-2"}
									colorScheme={"white"}
									type={"secondary"}
									isSmall={true}
								>
									Preview
								</Button>,
								<Button
									key={"key-1"}
									colorScheme={"blue"}
									type={"primary"}
									isSmall={true}
								>
									Create form
								</Button>,
							]}
							{...props}
						/>
					</SuiTemplateCardGroup>

					<SuiTemplateCard
						title={"Return Merchandise Form"}
						description={"For processing returns, including."}
						tag={{
							children: "Pro",
							colorScheme: "red",
						}}
						actions={[
							<Button
								key={"key-2"}
								colorScheme={"white"}
								type={"secondary"}
								isSmall={true}
							>
								Preview
							</Button>,
							<Button
								key={"key-1"}
								colorScheme={"blue"}
								type={"primary"}
								isSmall={true}
							>
								Create form
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
	image: {
		src: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/3061f01a175c457af10a05953daf0d47?_a=AQAEufR",
		alt: "Template Card",
	},
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
		control: {},
	},
	icon: {
		name: "Icon",
		options: IconsName,
		control: "select",
	},
}

// Publish required stories.
export { TemplateCard }
