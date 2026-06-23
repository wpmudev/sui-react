import React from "react"
import { Button } from "@wpmudev/sui-button"
import { InfoAlt } from "@wpmudev/sui-icons"

// Import required component.
import {
	Accordion as SuiAccordion,
	AccordionItem,
	AccordionItemBody,
	AccordionItemFooter,
	AccordionProps,
} from "../src"

// Import documentation main page.
import docs from "./Accordion.mdx"

// Build "Tab" story.
const Accordion = ({
	color,
	state,
	allowMultipleExpand,
	noBorderRadius,
	noSideBorders,
	isFlushed,
}: { color: string } & AccordionProps) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiAccordion
						state={state}
						allowMultipleExpand={allowMultipleExpand}
						noBorderRadius={noBorderRadius}
						noSideBorders={noSideBorders}
						isFlushed={isFlushed}
					>
						<AccordionItem
							title="Tab Title 1"
							hasToggle={true}
							contentShadow={false}
						>
							<AccordionItemBody>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</AccordionItemBody>
							<AccordionItemFooter>
								<Button colorScheme="black" type="secondary">
									Secondary
								</Button>
								<Button colorScheme="blue" type="primary">
									Primary
								</Button>
							</AccordionItemFooter>
						</AccordionItem>
						<AccordionItem
							title="Tab Title 2"
							description="Supportive description for the accordion item"
						>
							<AccordionItemBody>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</AccordionItemBody>
						</AccordionItem>
						<AccordionItem
							title="Tab Title 3"
							description="Supportive description for the accordion item"
							icon={<InfoAlt />}
						>
							<AccordionItemBody>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</AccordionItemBody>
						</AccordionItem>
						<AccordionItem
							title="Tab Title 4"
							description="Supportive description for the accordion item"
							hasCheckbox={true}
							icon={<InfoAlt />}
						>
							<AccordionItemBody>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</AccordionItemBody>
						</AccordionItem>
						<AccordionItem
							title="Disabled Tab"
							description="Supportive description for the accordion item"
							hasCheckbox={true}
							icon={<InfoAlt />}
							isDisabled={true}
						>
							<AccordionItemBody>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</AccordionItemBody>
						</AccordionItem>
					</SuiAccordion>
				</div>
			</div>
		</div>
	)
}

Accordion.args = {
	state: "default",
	allowMultipleExpand: false,
	noBorderRadius: false,
	noSideBorders: false,
	isFlushed: false,
}

// Set controls for story arguments.
Accordion.argTypes = {
	state: {
		name: "State",
		options: [
			"default",
			"neutral",
			"informative",
			"success",
			"warning",
			"critical",
		],
		control: {
			type: "select",
			labels: {
				default: "Default",
				neutral: "Neutral",
				informative: "Informative",
				success: "Success",
				warning: "Warning",
				critical: "Critical",
			},
		},
	},
	allowMultipleExpand: {
		name: "Multiple Expands",
		control: {
			type: "boolean",
		},
	},
	noBorderRadius: {
		name: "No Border Radius",
		control: {
			type: "boolean",
		},
	},
	noSideBorders: {
		name: "No Side Borders",
		control: {
			type: "boolean",
		},
	},
	isFlushed: {
		name: "Content wrapper",
		control: {
			type: "boolean",
		},
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Accordion",
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
