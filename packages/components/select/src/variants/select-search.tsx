import React from "react"

// Import required component(s).
import { Select as Base } from "./select-base"

// Build "Search Select" component.
const SearchSelect = ({ ...props }) => {
	return <Base isSearchable={true} {...props} />
}

// Publish required component(s).
export { SearchSelect }
