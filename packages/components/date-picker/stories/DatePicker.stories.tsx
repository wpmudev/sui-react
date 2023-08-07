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
const DatePicker = ({ color, ...props }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiDatePicker
						onChange={(date) => {
							console.log("changed", date)
						}}
						{...props}
					>
						DISPLAY RANGE PICKER
					</SuiDatePicker>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
DatePicker.args = {
	type: "markup",
	startDate: "15/07/2023",
	endDate: "15/09/2023",
	minDate: "01/05/2023",
	maxDate: "30/10/2023",
	isDisabled: false,
}

// Set controls for story arguments.
DatePicker.argTypes = {
	type: {
		name: "Type",
		options: ["single", "range"],
		description:
			"Specifies the type of DatePicker (e.g., single date, date range)",
		control: {
			type: "select",
			labels: {
				single: "Single DatePicker",
				range: "Range DatePicker",
			},
		},
	},
	startDate: {
		name: "Start Date",
		control: {
			type: "text",
		},
	},
	endDate: {
		name: "End Date",
		control: {
			type: "text",
		},
	},
	minDate: {
		name: "Min Date",
		control: {
			type: "text",
			description: "dd/MM/yyyy Eg. 01/01/2000",
		},
	},
	maxDate: {
		name: "Max Date",
		control: {
			type: "text",
			description: "dd/MM/yyyy Eg. 01/01/2000",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { DatePicker }
