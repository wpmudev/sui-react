import React from "react"
import classnames from "classnames"

interface HelperPropsTypes {
	id: string
	children?: React.ReactNode
}

// Build field helper text element
export const Helper = ({ id, children }: HelperPropsTypes) => {
	const classNames = classnames({
		"sui-form-field__helper": true,
	})

	return (
		<span id={`${id}__helper`} className={classNames}>
			{children}
		</span>
	)
}
