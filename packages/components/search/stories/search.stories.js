import React from "react"

// Import required component
import { Search as SuiSearch, SearchDropdown, SearchDropdownItem } from "../src"

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
const Search = ({ example, ...props }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{example === "smartsearch" ? (
						<SuiSearch {...props}>
							<SearchDropdown>
								<SearchDropdownItem value="Item heading variable">
									<span>Item heading</span>
									<span>Variable</span>
								</SearchDropdownItem>
								<SearchDropdownItem>Item 2</SearchDropdownItem>
								<SearchDropdownItem>Option 3</SearchDropdownItem>
								<SearchDropdownItem value="Option 4">
									Option 4
								</SearchDropdownItem>
							</SearchDropdown>
						</SuiSearch>
					) : (
						<SuiSearch {...props}></SuiSearch>
					)}
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Search.args = {
	example: "simple",
	isDisabled: false,
}

// Set controls for story arguments.
Search.argTypes = {
	example: {
		name: "Example",
		options: ["simple", "smartsearch"],
		control: {
			type: "select",
			labels: {
				simple: "Example: Simple",
				smartsearch: "Example: Smartsearch",
			},
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
export { Search }
