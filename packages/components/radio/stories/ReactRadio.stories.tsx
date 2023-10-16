import React from "react"

// Import required modules
import {
	Radio as SuiRadio,
	RadioGroup,
	RadioProps,
	RadioGroupProps,
} from "../src"

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
export const Radio = ({
	name,
	isInline,
	value,
	...args
}: RadioProps & RadioGroupProps) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<RadioGroup
						isInline={isInline}
						name={name}
						asBlock={args?.asBlock}
						isSmall={args?.isSmall}
					>
						<SuiRadio value="in" {...args} />
						<SuiRadio value="usa" {...args} />
					</RadioGroup>
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Radio.args = {
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
	},
	description: {
		name: "Description",
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
	isInline: {
		name: "Inline",
		type: "boolean",
	},
	asBlock: {
		name: "Display as a block",
		type: "boolean",
	},
}