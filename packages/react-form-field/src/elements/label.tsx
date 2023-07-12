import React from "react"
import classnames from "classnames"

import { isEmpty } from "@wpmudev/react-utils"

/**
 * Represents the properties for an error message component.
 */
interface LabelProps {
	/**
	 * The unique identifier of the error message.
	 */
	id: string
	/**
	 * Hide or show label
	 */
	hidden: boolean
	/**
	 * The content of the error message.
	 */
	children: React.ReactNode
}

// Build field label element
const Label: React.FC<LabelProps> = ({ id, hidden = false, children }) => {
	if (!isEmpty(children ?? "")) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n`,
		)
	}

	// Generate classnames
	const classNames = classnames({
		"sui-screen-reader-only": hidden,
		"sui-form-field__label": !hidden,
	})

	return (
		<label htmlFor={id} id={`${id}__label`} className={classNames}>
			{children}
		</label>
	)
}

export { Label, LabelProps }
