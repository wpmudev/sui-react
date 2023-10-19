import React from "react"

// Import required component(s).
import { Select as Base, SelectBaseProps } from "./select-base"

// Build "Search Select" component.
const SearchSelect: React.FC<SelectBaseProps> = ({ ...props }) => {
	return <Base {...props} isSearchable={true} />
}

// Publish required component(s).
export { SearchSelect }
