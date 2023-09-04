import React from "react"

// Import required component.
import { RichTextEditor as SuiRichTextEditor } from "../src"

// Import documentation main page.
import docs from "./RichTextEditor.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Rich Text Editor",
	component: SuiRichTextEditor,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const RichTextEditor = ({ color, ...props }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiRichTextEditor {...props}></SuiRichTextEditor>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
RichTextEditor.args = {}

// Set controls for story arguments.
RichTextEditor.argTypes = {}

// Publish required stories.
export { RichTextEditor }
