import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

// Import required component.
import { Input as SuiInput, InputProps } from "../src"

// Import documentation main page.
import docs from "./ReactInput.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Forms/Input",
	component: SuiInput,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Input" story.
const Input = (args: InputProps) => {
	const { isSmall, isDisabled } = args
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}
	return <SuiInput />
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<FormField id="input-1" isSmall={isSmall} isDisabled={isDisabled}>
						<SuiInput {...args} />
					</FormField>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Input.args = {
	type: "text",
	id: "myCustomId",
	defaultValue: "Hello World",
	icon: "",
	iconPosition: "",
	isSmall: false,
	isReadOnly: false,
	isDisabled: false,
	allowClear: false,
}

// Set controls for story arguments.
Input.argTypes = {
	type: {
		name: "Type",
		options: ["text", "email", "password", "number", "search", "tel", "url"],
		control: {
			type: "select",
		},
	},
	id: {
		name: "ID",
		control: "text",
	},
	defaultValue: {
		name: "Value",
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
	iconPosition: {
		name: "Icon Position",
		options: ["start", "end"],
		control: {
			type: "select",
		},
	},
	isReadOnly: {
		name: "Read Only",
		control: "boolean",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
		if: {
			arg: "example",
			eq: "standard",
		},
	},
	allowClear: {
		name: "Allow Clear",
		control: "boolean",
	},
}

// Publish required stories.
export { Input }
