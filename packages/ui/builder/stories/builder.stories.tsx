import React from "react"

// Import required component
import { Builder as SuiBuilder, BuilderField, BuilderWrapper } from "../src"

import { Dropdown } from "@wpmudev/sui-dropdown"
import { Input } from "@wpmudev/sui-input"

// Import documentation main page.
import docs from "./builder.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Builder",
	component: SuiBuilder,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build footer story
const Builder = ({ ...props }) => {
	const actionButton = (
		<Dropdown
			buttonIcon="Settings"
			label="Connect features"
			placement="left"
			isSmall={true}
			iconOnly={true}
			menu={[]}
		>
			MENU ITEMS
		</Dropdown>
	)

	return (
		<div
			style={{
				marginTop: "30px",
				padding: "30px",
				backgroundColor: "white",
			}}
		>
			<div
				style={{
					backgroundColor: "white",
				}}
			>
				<SuiBuilder {...props}>
					<BuilderWrapper>
						<BuilderField
							columnSize={4}
							action={actionButton}
							title="Block 1"
							subTitle="Field text"
							icon="Desktop"
						/>
						<BuilderField
							columnSize={4}
							action={actionButton}
							allowDrag={false}
							title="No Drag"
							icon="Desktop"
						/>
						<BuilderField
							columnSize={4}
							action={actionButton}
							title="Image"
							imgUrl="https://placehold.co/40x40/EEE/31343C"
							icon="Desktop"
						/>
					</BuilderWrapper>
					<BuilderWrapper>
						<BuilderField
							action={
								<Dropdown
									buttonIcon="Settings"
									label="Connect features"
									placement="left"
									isSmall={true}
									iconOnly={true}
									menu={[]}
								/>
							}
							title="Error Block"
							hasError={true}
							icon="Bell"
						/>
					</BuilderWrapper>
					<BuilderWrapper>
						<BuilderField
							action={actionButton}
							title="Block 3"
							icon="Desktop"
							customContent={
								<Input
									id="field-input"
									isSmall={true}
									placeholder="Placeholder"
								/>
							}
						/>
					</BuilderWrapper>
					<BuilderWrapper>
						<BuilderField
							action={actionButton}
							title="Accordion"
							icon="Desktop"
						>
							Field body, it can contains any types of element
						</BuilderField>
					</BuilderWrapper>
				</SuiBuilder>
			</div>
		</div>
	)
}

// Set story arguments
Builder.args = {
	allowAddFields: true,
	isScrollable: false,
	hasNoFields: false,
}

// Set controls for story arguments
Builder.argTypes = {
	allowAddFields: {
		name: "Allow insert fields",
		control: {
			type: "boolean",
		},
	},
	isScrollable: {
		name: "Scrollable",
		control: {
			type: "boolean",
		},
	},
	hasNoFields: {
		name: "Empty builder",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories
export { Builder }
