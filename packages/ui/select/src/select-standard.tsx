import React from "react"

// Import required component(s).
import { Select as Base, SelectBaseProps } from "./select-base"

// Build "Standard Select" component.
const Select: React.FC<SelectBaseProps> = ({ ...props }) => {
	return <Base {...props} />
}

// Publish required component(s).
export { Select }
