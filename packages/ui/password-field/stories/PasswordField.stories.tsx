import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

// Import required modules
import { PasswordField as SuiPasswordField } from "../src"

// Import documentation
import docs from "./PasswordField.mdx"

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
	error,
	isSmall,
	isDisabled,
	...args
}: {
	id: string
	buttonType: "icon" | "text"
	label: string
	helper: string
	error: string
	isSmall: boolean
	isDisabled: boolean
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	// Field settings
	const fieldAttrs = {
		id,
		label,
		helper,
		error,
		isSmall,
		isDisabled,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<FormField {...fieldAttrs}>
						<SuiPasswordField
							{...args}
							isDisabled={isDisabled}
							isSmall={isSmall}
							buttonType={buttonType}
							id={id}
						/>
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
	error: "",
	buttonType: "icon-button",
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
	error: {
		name: "Error",
	},
	buttonType: {
		name: "Button Style",
		options: ["icon-button", "text"],
		control: {
			type: "select",
			labels: {
				"icon-button": "Icon Button (Default)",
				standard: "text",
			},
		},
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
	customWidth: {
		name: "customWidth",
		control: "number",
	},
}
