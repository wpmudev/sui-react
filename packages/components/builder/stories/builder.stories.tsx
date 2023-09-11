import React from "react"

import { Tag } from "@wpmudev/sui-tag"

// Import required component
import { Builder as SuiBuilder, BuilderField, BuilderWrapper } from "../src"

import { Dropdown } from "@wpmudev/sui-dropdown"

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

const tag = (
	<Tag color="black" design="outlined" isSmall={true}>
		PRO
	</Tag>
)

// Build footer story
const Builder = ({}) => {
	const actionButton = (
		<Dropdown
			buttonIcon="settings"
			label="Connect features"
			direction="left"
			isSmall={true}
			iconOnly={true}
			isResponsive={true}
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
							url="#"
							icon="Desktop"
						/>
						<BuilderField
							action={actionButton}
							title="Block 2"
							url="#"
							icon="Desktop"
						/>
						<BuilderField
							action={actionButton}
							title="Block 3"
							url="#"
							icon="Desktop"
						/>
					</BuilderWrapper>
					<BuilderWrapper>
						<BuilderField
							action={
								<Dropdown
									buttonIcon="settings"
									label="Connect features"
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
							url="#"
							icon="Desktop"
						/>
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
