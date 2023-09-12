import React from "react"

import { Input } from "@wpmudev/sui-input"

import { Textarea } from "@wpmudev/sui-textarea"

// Import required component
import { FormField as SUIFormField } from "../src"

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
export const FormField = ({ example, ...args }) => {
	const set = {}

	set.box = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SUIFormField {...args}>
						{"input" === example && (
							<Input
								id={args.id}
								placeholder={args.placeholder}
								isError={args.error?.state}
								isSmall={args.isSmall}
								isDisabled={args.isDisabled}
								{...(!!args.label && {
									"aria-labelledby": `${args.id}__label`,
								})}
								{...(!!args.helper && {
									"aria-describedby": `${args.id}__helper`,
								})}
								{...(!!args.error?.state && {
									"aria-errormessage": `${args.id}__error-message`,
								})}
							/>
						)}
						{"textarea" === example && (
							<Textarea
								rows={7}
								id={args.id}
								placeholder={args.placeholder}
								isError={args.error?.state}
								isSmall={args.isSmall}
								isDisabled={args.isDisabled}
								{...(!!args.label && {
									"aria-labelledby": `${args.id}__label`,
								})}
								{...(!!args.helper && {
									"aria-describedby": `${args.id}__helper`,
								})}
								{...(!!args.error?.state && {
									"aria-errormessage": `${args.id}__error-message`,
								})}
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
	id: "myCustomElement",
	label: "Label",
	placeholder: "Placeholder",
	helper: "Helper text",
	error: {
		state: false,
		text: "Error message",
	},
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
	error: {
		name: "Error Settings",
		control: "object",
		if: {
			arg: "example",
			neq: "",
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
}
