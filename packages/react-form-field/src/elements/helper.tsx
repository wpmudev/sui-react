import React from "react"
import classnames from "classnames"

import { FormFieldHelperProps } from "../form-field.types"

// Build field helper text element
const Helper: React.FC<FormFieldHelperProps> = ({ id, children }) => {
	const classNames = classnames({
		"sui-form-field__helper": true,
	})

	return (
		<span id={`${id}__helper`} className={classNames}>
			{children}
		</span>
	)
}

export { Helper }
