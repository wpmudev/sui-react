// @ts-nocheck
import React from "react"
import classnames from "classnames"

import { FormFieldHelperProps } from "../form-field.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Build field helper text element
const Helper: React.FC<FormFieldHelperProps> = ({ id, children, ...props }) => {
	const { cssCN } = useStyles(props)

	const classNames = classnames(
		{
			"sui-form-field__helper": true,
		},
		cssCN,
	)

	return (
		<span id={`${id}-helper`} className={classNames}>
			{children}
		</span>
	)
}

export { Helper }
