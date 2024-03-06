import React from "react"

// Import required component(s).
import { Select as Base, SelectBaseProps } from "./select-base"

// Build "Multi Select" component.
const MultiSelect: React.FC<SelectBaseProps> = ({ ...props }) => {
	return <Base {...props} isMultiSelect={true} />
}

// Publish required component(s).
export { MultiSelect }
