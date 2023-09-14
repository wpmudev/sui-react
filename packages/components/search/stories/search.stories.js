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
const Search = ({ ...props }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiSearch {...props}>
						<SearchDropdown>
							<SearchDropdownItem value="Item heading variable">
								<span>Item heading</span>
								<span>Variable</span>
							</SearchDropdownItem>
							<SearchDropdownItem>Item 2</SearchDropdownItem>
							<SearchDropdownItem value="Option 3">Option 3</SearchDropdownItem>
							<SearchDropdownItem value="Option 4">Option 4</SearchDropdownItem>
						</SearchDropdown>
					</SuiSearch>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Search.args = {
	example: "simple",
	items: {
		one: "Option 1",
		two: "Option 2",
	},
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
	items: {
		name: "Items",
		if: {
			arg: "example",
			eq: "smartsearch",
		},
	},
}

// Publish required stories.
export { Search }
