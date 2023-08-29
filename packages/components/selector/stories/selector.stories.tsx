import React, { useState } from "react"

// Import required modules
import { Selector as SuiSelector } from "../src"

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
export const Selector = ({ ...args }) => {
	const [val, setVal] = useState("")

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: "#fff",
	}

	const onChange = (isChecked, value, name) => {
		setVal(value)
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<Row align={{ sm: "inline" }}>
						{options.map((option, index) => (
							<Col key={`col-${index}`} size="3">
								<SuiSelector
									key={index}
									name={option.name}
									value={option.value}
									onChange={onChange}
									isChecked={val === option.value}
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
	title: "Option Title",
	iconOrBrandUrl: "d",
	variation: "default",
	alignment: "left",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	imageUrl: "https://placehold.co/200x100.png",
	allowRemove: false,
	isDisabled: false,
}

// Story props settings
Selector.argTypes = {
	title: {
		name: "Title",
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
				image: "image",
			},
		},
	},
	alignment: {
		name: "Alignment",
		options: ["left", "center"],
		control: {
			type: "select",
			labels: {
				left: "left",
				center: "center",
			},
		},
	},
}
