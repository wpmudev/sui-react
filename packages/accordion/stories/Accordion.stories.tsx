import React from "react"

import { InfoAlt } from "@wpmudev/sui-icons"

// Import required component.
import { Accordion as SuiAccordion, AccordionItem } from "../src"

// Import documentation main page.
import docs from "./Accordion.mdx"

// Build "Accordion" story.
const Accordion = ({ color }: any) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiAccordion>
						<AccordionItem title="Accordion Title 1 ">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</AccordionItem>
						<AccordionItem
							title="Accordion Title 2"
							description="Supportive description for the accordion item"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</AccordionItem>
						<AccordionItem
							title="Accordion Title 3"
							description="Supportive description for the accordion item"
							icon={<InfoAlt />}
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</AccordionItem>
						<AccordionItem
							title="Accordion Title 4"
							description="Supportive description for the accordion item"
							hasCheckbox={true}
							icon={<InfoAlt />}
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</AccordionItem>
					</SuiAccordion>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Accordion.args = {
	bar: 55,
	value: 55,
	content: "",
	isPercentage: false,
	state: "warning",
	isSmall: true,
}

// Set controls for story arguments.
Accordion.argTypes = {
	bar: {
		name: "Circle Bar",
		description: "The score circle.",
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
	},
	value: {
		name: "Score Value",
		description: "The score value to display.",
		control: "number",
	},
	content: {
		name: "Content",
		description: "The score content to display.",
		control: "text",
		if: {
			arg: "isSmall",
			eq: true,
		},
	},
	isPercentage: {
		name: "Show Percentage",
		description: "The percentage to display.",
	},
	state: {
		name: "Type",
		description: "The scores color variation according to type.",
		control: {
			type: "select",
			options: {
				"Type: Error": "error",
				"Type: Warning": "warning",
				"Type: Success": "success",
			},
		},
	},
	isSmall: {
		name: "Small",
		description: "The scores component size.",
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Accordion",
	component: Accordion,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { Accordion }
