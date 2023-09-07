import React from "react"

import { Tag } from "@wpmudev/sui-tag"

// Import required component
import { Builder as SuiBuilder, BuilderBlock } from "../src"

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
				<SuiBuilder>
					<BuilderBlock action={tag} title="Builder item" url="#" icon="Bell" />
					<BuilderBlock action={tag} title="Builder item" url="#" icon="Bell" />
					<BuilderBlock action={tag} title="Builder item" url="#" icon="Bell" />
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
