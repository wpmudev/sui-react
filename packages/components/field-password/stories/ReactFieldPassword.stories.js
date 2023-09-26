import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

// Import required modules
import { PasswordField as SuiPasswordField } from "../src"

// Import documentation
import docs from "./ReactFieldPassword.mdx"

// Default settings
export default {
	title: "SUI/Components/Forms/Password Field",
	component: SuiPasswordField,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const PasswordField = ({
	id,
	buttonType,
	label,
	helper,
	errorMessage,
	isError,
	isDisabled,
	...args
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	const button = {
		type: buttonType,
	}

	// Define field error state
	const error = Object.assign({
		state: isError,
		text: errorMessage,
	})

	// Field settings
	const fieldAttrs = {
		id,
		label,
		helper,
		error,
		isDisabled,
		isSmall: args.isSmall,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<FormField {...fieldAttrs}>
						<SuiPasswordField button={button} {...args} />
					</FormField>
				</div>
			</div>
		</div>
	)
}

// Story props defaults
PasswordField.args = {
	id: "myPasswordField",
	placeholder: "Enter your password",
	label: "Password",
	helper: "Create a password of minimum 8 characters",
	errorMessage: "The password you inserted is not valid",
	buttonType: "icon-button",
	isError: false,
	isDisabled: false,
	isSmall: false,
}

// Story props settings
PasswordField.argTypes = {
	id: {
		name: "ID",
	},
	placeholder: {
		name: "Placeholder",
	},
	label: {
		name: "Label",
	},
	helper: {
		name: "Helper",
	},
	errorMessage: {
		name: "Error Message",
	},
	buttonType: {
		name: "Button Style",
		options: ["icon-button", "standard"],
		control: {
			type: "select",
			labels: {
				"icon-button": "Icon Button (Default)",
				standard: "Button",
			},
		},
	},
	isError: {
		name: "Error",
		control: "boolean",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
}
