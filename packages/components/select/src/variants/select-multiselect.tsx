import React from "react"

// Import required component(s).
import { Select as Base } from "./select-base"

// Build "Multi Select" component.
const MultiSelect = ({ ...props }) => {
	return (
		<Base
			isMultiSelect={true}
			id={props?.id}
			options={props?.options ?? []}
			{...props}
		/>
	)
}

// Publish required component(s).
export { MultiSelect }
