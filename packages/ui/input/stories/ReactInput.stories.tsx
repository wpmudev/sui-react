import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

// Import required component.
import { Input as SuiInput, InputProps } from "../src"

// Import documentation main page.
import docs from "./ReactInput.mdx"
import { IconsName } from "@wpmudev/sui-icons"
import { background } from "@storybook/theming"

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
const Input = ({
	id,
	isSmall,
	isDisabled,
	...args
}: {
	id: string
	isSmall: boolean
	isDisabled: boolean
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
					>
						<SuiInput
							{...args}
							icon="Copy"
							iconPosition="end"
							iconHint="Copied"
							iconTooltipWidth={65}
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
	id: "my-custom-id",
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
			labels: {
				start: "Start",
				end: "End",
			},
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
	isError: { table: { disable: true } },
	isRequired: { table: { disable: true } },
	isMultiLine: { table: { disable: true } },
	disableInteractions: { table: { disable: true } },
	_style: { table: { disable: true } },
	_htmlProps: { table: { disable: true } },
}

// Publish required stories.
export { Input }
