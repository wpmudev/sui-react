import React from "react"

import { SearchProps } from "./search.types"

// Build "search" dropdown.
const SearchDropdownItem: React.FC<SearchProps> = ({ children, ...props }) => {
	return (
		<li className="sui-search__dropdown--item" {...props}>
			{children}
		</li>
	)
}

// Publish required component.
export { SearchDropdownItem }
