import React from "react"

import { Tag } from "@wpmudev/sui-tag"

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
const Builder = ({}) => {
	const actionButton = (
		<Dropdown
			buttonIcon="settings"
			label="Connect features"
			appearance="tertiary"
			direction="left"
			isSmall={true}
			iconOnly={true}
			onMenuClick={(id, e) => {
				console.log("DEBUG: Menu Item Clicked", id, e)
			}}
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
				<SuiBuilder hasInsertButton={true}>
					<BuilderWrapper>
						<BuilderField
							action={actionButton}
							title="Block 1"
							icon="Desktop"
						/>
						<BuilderField
							action={actionButton}
							allowDrag={false}
							title="No Drag"
							icon="Desktop"
						/>
						<BuilderField
							action={actionButton}
							title="Image"
							imgUrl="https://placehold.co/600x400/EEE/31343C"
							icon="Desktop"
						/>
					</BuilderWrapper>
					<BuilderWrapper>
						<BuilderField
							action={
								<Dropdown
									buttonIcon="settings"
									label="Connect features"
									appearance="tertiary"
									direction="left"
									isSmall={true}
									iconOnly={true}
									isResponsive={true}
									onMenuClick={(id, e) => {
										console.log("DEBUG: Menu Item Clicked", id, e)
									}}
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
Builder.args = {}

// Set controls for story arguments
Builder.argTypes = {}

// Publish required stories
export { Builder }
