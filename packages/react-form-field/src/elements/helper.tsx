import React from "react"
import classnames from "classnames"

/**
 * Represents the properties for a helper component.
 */
interface HelperProps {
	/**
	 * The unique identifier of the helper.
	 */
	id: string
	/**
	 * The content of the helper.
	 */
	children?: React.ReactNode
}

// Build field helper text element
const Helper: React.FC<HelperProps> = ({ id, children }) => {
	const classNames = classnames({
		"sui-form-field__helper": true,
	})

	return (
		<span id={`${id}__helper`} className={classNames}>
			{children}
		</span>
	)
}

export { Helper, HelperProps }
