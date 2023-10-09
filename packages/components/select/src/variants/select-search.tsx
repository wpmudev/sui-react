import React from "react"

// Import required component(s).
import { Select as Base } from "./select-base"

// Build "Search Select" component.
const SearchSelect = ({ ...props }) => {
	return <Base id={props?.id} options={props?.options ?? []} {...props} />
}

// Publish required component(s).
export { SearchSelect }
