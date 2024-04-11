import React from "react"

// Import required component
import { Search as SuiSearch } from "../src"
import { options } from "./options"

// Import documentation main page
import docs from "./ReactSearch.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Search",
	component: SuiSearch,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Search" story.
const Search = ({ ...props }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={{ padding: "20px", backgroundColor: "white" }}>
					<SuiSearch {...props} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Search.args = {
	variation: "basic",
	placeholder: "Search",
	options,
	allowClear: true,
	searchMinChars: 2,
	defaultValue: "",
	isDisabled: false,
	searchHint: "Please enter 2 or more characters",
}

// Set controls for story arguments.
Search.argTypes = {
	variation: {
		name: "Variation",
		options: ["basic", "smart"],
		control: {
			type: "select",
			labels: {
				basic: "Basic Search",
				smart: "Smart Search",
			},
		},
	},
	options: {
		name: "Options",
		if: {
			arg: "variation",
			eq: "smart",
		},
	},
	placeholder: {
		name: "Placeholder",
		control: {
			type: "text",
		},
	},
	defaultValue: {
		name: "Default Value",
		control: {
			type: "text",
		},
	},
	allowClear: {
		name: "Allow Clear",
		control: {
			type: "boolean",
		},
	},
	searchMinChars: {
		name: "Minimum characters",
		control: {
			type: "number",
		},
		if: {
			arg: "variation",
			eq: "smart",
		},
	},
	searchHint: {
		name: "Search hint",
		control: {
			type: "text",
		},
		if: {
			arg: "variation",
			eq: "smart",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
	customWidth: {
		name: "Custom width",
		control: {
			type: "number",
		},
	},
}

// Publish required stories.
export { Search }
