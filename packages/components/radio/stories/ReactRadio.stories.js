import React from "react"

// Import required modules
import { Radio as SuiRadio, RadioGroup } from "../src"

// Import documentation
import docs from "./ReactRadio.mdx"

// Default settings
export default {
	title: "SUI/Components/Forms/Radio",
	component: SuiRadio,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Radio = ({ example, name, isInline, ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{"radiogroup" === example ? (
						<RadioGroup
							isInline={isInline}
							name={name}
							asBlock={args?.asBlock}
							isSmall={args?.isSmall}
							onChange={(data) => {
								console.log("test", data)
							}}
						>
							<SuiRadio value="in" {...args} />
							<SuiRadio value="usa" {...args} />
						</RadioGroup>
					) : (
						<SuiRadio {...args} />
					)}
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Radio.args = {
	example: "radiogroup",
	name: "countries",
	label: "Radio label",
	tag: "Recommended",
	description:
		"Lossy compression offers the best compression rate for all type of images and This is recommended for most sites.",
	isSmall: false,
	isDisabled: false,
	isInline: true,
	asBlock: true,
}

// Story props settings
Radio.argTypes = {
	example: {
		name: "Example",
		options: ["radio", "radiogroup"],
		control: {
			type: "select",
			labels: {
				radio: "Radio",
				radiogroup: "Radio Group",
			},
		},
	},
	name: {
		name: "Name",
		type: "string",
	},
	label: {
		name: "Label",
		type: "string",
	},
	tag: {
		name: "Tag",
		type: "string",
		if: {
			arg: "example",
			eq: "radiogroup",
		},
	},
	description: {
		name: "Description",
		type: "string",
		if: {
			arg: "example",
			eq: "radiogroup",
		},
	},
	isSmall: {
		name: "Small",
		type: "boolean",
	},
	isDisabled: {
		name: "Disabled",
		type: "boolean",
	},
	isInline: {
		name: "Inline",
		type: "boolean",
		if: {
			arg: "example",
			eq: "radiogroup",
		},
	},
	asBlock: {
		name: "Enable Background",
		type: "boolean",
		if: {
			arg: "example",
			eq: "radiogroup",
		},
	},
}
