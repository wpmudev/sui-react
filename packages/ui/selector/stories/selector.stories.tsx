import React, { useState } from "react"

// Import required modules
import { Selector as SuiSelector, SelectorProps } from "../src"

// Import documentation
import docs from "./selector.mdx"
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

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: "#fff",
	}

	const onChange = (_isChecked: boolean, value: number, _name: string) => {
		setVal(value)
	}

	const colSize = "icon-only" === variation ? 1 : 3

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<Row align={{ sm: "inline" }}>
						{options.map((option, index) => (
							<Col key={`col-${index}`} size={colSize}>
								<SuiSelector
									key={index}
									onChange={onChange}
									isChecked={val === option.value}
									variation={variation}
									value={option.value}
									{...args}
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
	isPro: true,
	tag: "Tag",
	tagColor: "default",
}

// Story props settings
Selector.argTypes = {
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
				"": "Default",
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
}
