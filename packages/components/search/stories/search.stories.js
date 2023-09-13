import React from "react"

// Import required component
import { Search as SuiSearch } from "../src"

// Import documentation main page
import docs from "./search.mdx"

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
	const set = {}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiSearch {...props} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Search.args = {
	example: "icon",
	status: "",
	image: {
		alt: "Unreal Person search image",
	},
	isSmall: false,
}

// Set controls for story arguments.
Search.argTypes = {
	example: {
		name: "Example",
		options: ["icon", "image"],
		control: {
			type: "select",
			labels: {
				icon: "Example: Icon Search",
				image: "Example: Image Search",
			},
		},
	},
	image: {
		name: "Image",
		control: "object",
		if: {
			arg: "example",
			eq: "image",
		},
	},
	status: {
		name: "Status",
		options: ["none", "confirmed", "awaiting", "not-accepted", "not-connected"],
		control: {
			type: "select",
			labels: {
				none: "Status: None",
				confirmed: "Status: Confirmed",
				awaiting: "Status: Awaiting",
				"not-accepted": "Status: Not Accepted",
				"not-connected": "Status: Not Connected",
			},
		},
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
}

// Publish required stories.
export { Search }
