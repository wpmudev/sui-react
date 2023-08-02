import React from "react"

// Import required component.
import { DatePicker as SuiDatePicker } from "../src"

// Import documentation main page.
import docs from "./DatePicker.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Date Picker",
	component: SuiDatePicker,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const DatePicker = ({ language, copy, color }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiDatePicker language={language} copy={copy}>
						DISPLAY RANGE PICKER
					</SuiDatePicker>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
DatePicker.args = {
	language: "markup",
	copy: true,
}

// Set controls for story arguments.
DatePicker.argTypes = {
	language: {
		name: "Code Language",
		options: ["markup", "javascript", "css"],
		control: {
			type: "select",
			labels: {
				markup: "Language: HTML",
				javascript: "Language: Javascript",
				css: "Language: CSS",
			},
		},
	},
	copy: {
		name: "Copy Button",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { DatePicker }
