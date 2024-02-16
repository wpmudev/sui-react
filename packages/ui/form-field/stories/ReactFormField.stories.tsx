import React from "react"

import { Input } from "@wpmudev/sui-input"

import { Textarea } from "@wpmudev/sui-textarea"

// Import required component
import { FormField as SUIFormField, FormFieldProps } from "../src"

// Import documentation main page
import docs from "./ReactFormField.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Forms/Form Field",
	component: SUIFormField,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build component playground
export const FormField = ({
	example,
	type,
	placeholder,
	isError,
	...args
}: {
	example: string
	type: string
	placeholder: string
	isError: boolean
} & FormFieldProps) => {
	const boxStyle = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<SUIFormField {...args} label={args.label} id="form-field-1">
						{"input" === example && (
							<Input
								id="input-1"
								placeholder={placeholder}
								isError={isError}
								isSmall={args.isSmall}
								isDisabled={args.isDisabled}
							/>
						)}
						{"textarea" === example && (
							<Textarea
								rows={7}
								placeholder={placeholder}
								isError={isError}
								isSmall={args.isSmall}
								isDisabled={args.isDisabled}
							/>
						)}
					</SUIFormField>
				</div>
			</div>
		</div>
	)
}

// Define playground arguments
FormField.args = {
	example: "",
	type: "text",
	label: "Label",
	placeholder: "Placeholder",
	helper: "Helper text",
	isError: false,
	error: "Error message",
	className: "myCustomClass",
	isSmall: false,
	isDisabled: false,
	isLabelHidden: false,
}
FormField.argTypes = {
	example: {
		name: "Example",
		options: ["", "input", "textarea"],
		control: {
			type: "select",
			labels: {
				"": "Example: Empty Field",
				input: "Example: Field + Input",
				textarea: "Example: Field + Textarea",
			},
		},
	},
	type: {
		name: "Type",
		options: ["text", "email", "password", "number", "search", "tel", "url"],
		control: {
			type: "select",
		},
		if: {
			arg: "example",
			eq: "input",
		},
	},
	id: {
		name: "ID",
		type: "string",
	},
	label: {
		name: "Label",
		type: "string",
	},
	placeholder: {
		name: "Placeholder",
		type: "string",
	},
	helper: {
		name: "Helper Text",
		type: "string",
	},
	isError: {
		name: "Error",
		control: "boolean",
		if: {
			arg: "example",
			neq: "",
		},
	},
	error: {
		name: "Error Message",
		control: "text",
		if: {
			arg: "isError",
			neq: false,
		},
	},
	className: {},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
	},
	isLabelHidden: {
		name: "SR Label",
		control: "boolean",
	},
	customWidth: {
		name: "customWidth",
		control: "number",
	},
}
