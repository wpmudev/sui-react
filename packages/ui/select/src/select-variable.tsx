import React from "react"

// Import required component(s).
import { Select as Base, SelectBaseProps } from "./select-base"

// Build "Multi Select" component.
const SelectVariable: React.FC<SelectBaseProps> = ({ ...props }) => {
	return <Base {...props} isCustomVar={true} />
}

// Publish required component(s).
export { SelectVariable }
