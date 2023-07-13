import React from "react"

// Import modules
import { TextField as SuiTextField } from "../src"

// Import documentation
import docs from "./ReactFieldText.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Form Elements/Text Field",
	component: SuiTextField,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Text Field" story.
const TextField = ({ example, ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTextField {...args} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
TextField.args = {
	type: "text",
	id: "myCustomId",
	label: "Label text",
	helper: "Supporting text goes here",
	errorMessage: "Something went wrong",
	isMultiLine: false,
	isLabelHidden: false,
	isSmall: false,
	isError: false,
	isReadOnly: false,
	isDisabled: false,
}

// Set controls for story arguments.
TextField.argTypes = {
	type: {
		name: "Type",
		control: {
			type: "select",
			options: ["text", "email", "password", "number", "search", "tel", "url"],
		},
		if: {
			arg: "isMultiLine",
			eq: false,
		},
	},
	id: {
		name: "ID",
		control: "text",
	},
	label: {
		name: "Label",
		control: "text",
	},
	helper: {
		name: "Helper",
		control: "text",
	},
	errorMessage: {
		name: "Error Message",
		control: "text",
	},
	isMultiLine: {
		name: "Multi Line",
		control: "boolean",
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
	isLabelHidden: {
		name: "SR Label",
		control: "boolean",
	},
	isError: {
		name: "Error",
		control: "boolean",
		if: {
			arg: "isReadOnly",
			eq: false,
		},
	},
	isReadOnly: {
		name: "Read Only",
		control: "boolean",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
		if: {
			arg: "isReadOnly",
			eq: false,
		},
	},
}

// Publish required stories.
export { TextField }
