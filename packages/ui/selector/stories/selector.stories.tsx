import React, { useState } from "react"

// Import required modules
import { Selector as SuiSelector, SelectorProps } from "../src"

// Import documentation
import docs from "./Selector.mdx"
import { Row, Col } from "@wpmudev/sui-grid"

// Default settings
export default {
	title: "SUI/Components/Core/Selector",
	component: SuiSelector,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const options = [
	{
		name: "sui-selector-button",
		value: 1,
	},
	{
		name: "sui-selector-button",
		value: 2,
	},
	{
		name: "sui-selector-button",
		value: 3,
	},
	{
		name: "sui-selector-button",
		value: 4,
	},
]

// Build story
export const Selector = ({
	variation,
	...args
}: Omit<SelectorProps, "value">) => {
	const [val, setVal] = useState<number>()

	const onChange = (_isChecked: boolean, value: number, _name: string) => {
		setVal(value)
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<Row>
						{options.map((option, index) => (
							<Col key={index} size={25}>
								<SuiSelector
									{...args}
									onChange={onChange}
									isChecked={val === option.value}
									variation={variation}
									value={option.value}
								/>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Selector.args = {
	name: "selector-demo",
	title: "Option Title",
	iconOrBrandUrl: "Info",
	variation: "default",
	alignment: "left",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	imageUrl: "https://placehold.co/200x100.png",
	allowRemove: false,
	isDisabled: false,
	isPro: false,
	tag: "Tag",
	tagColor: "default",
	isFluid: true,
}

// Story props settings
Selector.argTypes = {
	name: {
		name: "Name",
		control: {
			type: "text",
		},
	},
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	isPro: {
		name: "Pro",
		control: {
			type: "boolean",
		},
	},
	isFluid: {
		name: "Fluid",
		control: {
			type: "boolean",
		},
	},
	iconOrBrandUrl: {
		name: "Icon/Image url",
		control: {
			type: "text",
		},
	},
	imageUrl: {
		name: "Image url",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		control: {
			type: "text",
		},
	},
	allowRemove: {
		name: "Allow Remove",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
	variation: {
		name: "Variation",
		options: ["default", "icon-only", "compound", "image"],
		control: {
			type: "select",
			labels: {
				default: "Default",
				"icon-only": "Icon Only",
				compound: "Compound",
				image: "Image",
			},
		},
	},
	alignment: {
		name: "Alignment",
		options: ["left", "center"],
		control: {
			type: "select",
			labels: {
				left: "Left",
				center: "Center",
			},
		},
	},
	tag: {
		name: "Tag",
		control: "text",
	},
	tagColor: {
		name: "Tag Color",
		options: [
			"default",
			"blue",
			"navy",
			"yellow",
			"red",
			"green",
			"black",
			"white",
		],
		control: {
			type: "select",
			labels: {
				default: "Default",
				blue: "Blue (Information)",
				navy: "Navy Blue",
				yellow: "Yellow (Warning)",
				red: "Red (Error)",
				green: "Green (Success)",
				black: "Black",
				white: "White",
			},
		},
	},
	onChange: { table: { disable: true } },
	onRemove: { table: { disable: true } },
	value: { table: { disable: true } },
	isChecked: { table: { disable: true } },
	defaultValue: { table: { disable: true } },
	_style: { table: { disable: true } },
	_htmlProps: { table: { disable: true } },
}
