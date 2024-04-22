import React from "react"

// Import required component.
import { Textarea as SuiTextarea } from "../src"

// Import documentation main page.
import docs from "./ReactTextarea.mdx"
import { FormField } from "@wpmudev/sui-form-field"

// Build "Textarea" story.
const Textarea = ({
	id,
	isSmall,
	isDisabled,
	error,
	...args
}: {
	id: string
	isSmall: boolean
	isDisabled: boolean
	error: string
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
					<FormField
						id={id}
						label="Label"
						helper="Helper Text"
						isSmall={isSmall}
						isDisabled={isDisabled}
						error={error}
					>
						<SuiTextarea rows={4} {...args} />
					</FormField>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Textarea.args = {
	id: "textarea",
	placeholder: "Placeholder",
	error: "",
	isSmall: false,
	isDisabled: false,
}

// Set controls for story arguments.
Textarea.argTypes = {
	id: {
		name: "ID",
		type: "string",
	},
	placeholder: {
		name: "Placeholder",
		type: "string",
	},
	customWidth: {
		name: "Custom Width",
		type: "number",
	},
	error: {
		name: "Error",
		type: "string",
	},
	isSmall: {
		name: "Small",
		type: "boolean",
	},
	isDisabled: {
		name: "Disabled",
		type: "boolean",
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Forms/Textarea",
	component: Textarea,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { Textarea }
