import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

import { isEmpty } from "@wpmudev/sui-utils"

import { Input as SuiInput, InputProps } from "@wpmudev/sui-input"

// Import required component.
import { PasswordField } from "@wpmudev/sui-password-field"
import { useValidation } from "@wpmudev/sui-hooks"

// Import documentation main page.
import docs from "./ReactInput.mdx"
import { Form, IconsName } from "@wpmudev/sui-icons"

// Configure default options.
export default {
	title: "SUI/Components/Forms/Input-Validate",
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

	/**
	 * Validate value passed on input field
	 */
	const validation = (value: string) => {
		// Remove blank spaces
		const val = value?.toString()?.trim() ?? ""

		// Required Rule
		// if (isEmpty(val)) {
		// 	return "This field is required"
		// }

		// Pattern rule
		if (typeof value === "string" && "" !== val) {
			if (!new RegExp("^(?:^(?:(?!<[^>]*>).)*$)$", "gm").test(val)) {
				return "Please enter a valid brand name."
			}
		}
	}

	const [status, validationProps] = useValidation(
		[
			{
				pattern: "^(?:^(?:(?!<[^>]*>).)*$)$",
				message: "Please enter a valid brand name.",
			},
			{
				required: true,
				message: "This field is required",
			},
		],
		{
			validateOnMount: true,
		},
	)

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<FormField
						error={status.error}
						id="passwordId"
						label="Label"
						helper="Help text"
					>
						<PasswordField
							placeholder="Enter your password"
							{...validationProps}
						/>
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
	iconPosition: "start",
	iconHint: "",
	iconTooltipWidth: "",
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
	customWidth: {
		name: "Custom Width",
		control: "number",
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
	icon: {
		name: "Icon",
		options: IconsName,
		control: {
			type: "select",
		},
	},
	iconPosition: {
		name: "Icon Position",
		options: ["start", "end"],
		control: {
			type: "select",
		},
		if: {
			arg: "icon",
			neq: "",
		},
	},
	iconHint: {
		name: "Icon Hint",
		control: "text",
		if: {
			arg: "iconPosition",
			eq: "end",
		},
	},
	iconTooltipWidth: {
		name: "Icon Tooltip Width",
		control: "number",
		if: {
			arg: "iconPosition",
			eq: "end",
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
