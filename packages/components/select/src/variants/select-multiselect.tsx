import React from "react"

// Import required component(s).
import { Select as Base } from "./select-base"

// Build "Multi Select" component.
const MultiSelect = ({ ...props }) => {
	return <Base isMultiselect={true} {...props} />
}

// Publish required component(s).
export { MultiSelect }
