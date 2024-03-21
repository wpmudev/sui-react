import React from "react"

// Import required component(s).
import { Select as Base, SelectBaseProps } from "./select-base"

// Build "Multi Select" component.
const SelectVariable: React.FC<SelectBaseProps> = ({
	_dropdownProps,
	...props
}) => {
	return (
		<Base
			{...props}
			_dropdownProps={{
				type: "select-variable",
				..._dropdownProps,
			}}
		/>
	)
}

// Publish required component(s).
export { SelectVariable }
