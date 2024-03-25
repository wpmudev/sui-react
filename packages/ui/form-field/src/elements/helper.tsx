// @ts-nocheck
import React from "react"
import classnames from "classnames"

import { FormFieldHelperProps } from "../form-field.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Build field helper text element
const Helper: React.FC<FormFieldHelperProps> = ({ id, children, ...props }) => {
	const { suiInlineClassname } = useStyles(props)

	const classNames = classnames(
		{
			"sui-form-field__helper": true,
		},
		suiInlineClassname,
	)

	return (
		<span id={`${id}-helper`} className={classNames}>
			{children}
		</span>
	)
}

export { Helper }
