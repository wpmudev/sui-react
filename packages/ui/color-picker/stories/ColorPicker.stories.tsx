import React, { useEffect, useState } from "react"

// Import required component.
import { ColorPicker as SuiColorPicker } from "../src"
import { FormField } from "@wpmudev/sui-form-field"

// Import documentation main page.
import docs from "./ColorPicker.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Color Picker",
	component: SuiColorPicker,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const ColorPicker = ({
	color,
	id,
	isDisabled,
	error,
	...props
}: {
	color: string
	id: string
	isDisabled: boolean
	error: string
}) => {
	const [currentColor, setCurrentColor] = useState<string>(color)
	const [savedColor, setSavedColor] = useState("#ffffff")

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
					<FormField
						id={id}
						label="Select colour"
						isSmall={false}
						isDisabled={isDisabled}
						error={error}
					>
						<SuiColorPicker
							color={currentColor}
							onApply={setSavedColor}
							onColorChange={setCurrentColor}
							onReset={() => setCurrentColor("#ffffff")}
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
	id: "color-picker",
	color: "#ffffff",
	type: "hex",
	isDisabled: false,
	isFluid: false,
	error: "",
	placeholder: "Select color",
}

// Set controls for story arguments.
ColorPicker.argTypes = {
	id: {
		name: "ID",
		control: {
			type: "text",
		},
	},
	color: {
		name: "Color",
		control: {
			type: "text",
		},
	},
	placeholder: {
		name: "Placeholder",
		control: {
			type: "text",
		},
	},
	isFluid: {
		name: "Full width",
		control: "boolean",
	},
	error: {
		name: "Error",
		control: "text",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
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
