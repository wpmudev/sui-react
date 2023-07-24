import React from "react"

// Import required component(s).
import { Select as Base } from "./select-base"

// Build "Standard Select" component.
const Select = ({ ...props }) => {
	return <Base {...props} />
}

// Publish required component(s).
export { Select }
