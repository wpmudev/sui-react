import React, { useEffect, useState } from "react"

// Import required component.
import { ColorPicker as SuiColorPicker } from "../src"
import { FormField } from "@wpmudev/sui-form-field"

// Import documentation main page.
import docs from "./ReactColorPicker.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Color Picker",
	component: SuiColorPicker,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const ColorPicker = ({ color, ...props }) => {
	const [currentColor, setCurrentColor] = useState<string>(color)

	useEffect(() => {
		setCurrentColor(color)
	}, [color])

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<FormField id="color-picker" label="Select colour" isSmall={true}>
						<SuiColorPicker
							color={currentColor}
							onChange={setCurrentColor}
							{...props}
						/>
					</FormField>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
ColorPicker.args = {
	color: "#FFFFFF",
	type: "hex",
}

// Set controls for story arguments.
ColorPicker.argTypes = {
	color: {
		name: "Color",
		control: {
			type: "text",
		},
	},
	type: {
		name: "Color Type",
		options: ["hex", "rgb"],
		control: {
			type: "select",
			labels: { hex: "Hex", rgb: "RGB" },
		},
	},
}

// Publish required stories.
export { ColorPicker }
