import React from "react"
import { useValidation } from "@wpmudev/sui-hooks"

// Import required modules
import {
	Radio as SuiRadio,
	RadioGroup,
	RadioProps,
	RadioGroupProps,
} from "../src"
import { FormField } from "@wpmudev/sui-form-field"
// Import documentation
import docs from "./Radio.mdx"

type RadioStoryProps = {
	example: string
	name: string
	isInline: boolean
	isSmall: boolean
	asBlock: boolean
} & RadioProps

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
	example,
	name,
	isInline,
	isSmall,
	asBlock,
	...args
}: RadioStoryProps) => {
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
						id="radio-group"
						label="Radio Group"
						helper="This is a description"
						isSmall={isSmall}
					>
						<RadioGroup
							isInline={isInline}
							name={name}
							asBlock={asBlock}
							onChange={(data) => {}}
						>
							<SuiRadio value="in" {...args} />
							<SuiRadio value="usa" {...args} />
						</RadioGroup>
					</FormField>
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
		name: "Compound radio",
		type: "boolean",
	},
	value: { table: { disable: true } },
	_style: { table: { disable: true } },
	_htmlProps: { table: { disable: true } },
}