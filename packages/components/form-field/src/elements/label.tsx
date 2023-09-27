import React from "react"
import classnames from "classnames"

import { isEmpty } from "@wpmudev/sui-utils"
import { FormFieldLabelProps } from "../form-field.types"

// Build field label element
const Label: React.FC<FormFieldLabelProps> = ({
	id,
	hidden = false,
	children,
}) => {
	if (isEmpty(children ?? "")) {
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
		<label htmlFor={id} id={`${id}-label`} className={classNames}>
			{children}
		</label>
	)
}

export { Label }
