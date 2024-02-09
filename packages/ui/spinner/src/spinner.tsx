import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SpinnerProps } from "./spinner.types"
import { SpinnerLoader } from "./spinner-loader"
import { useStyles } from "@wpmudev/sui-hooks"

// Spinner component
const Spinner: React.FC<SpinnerProps> = ({
	size = "lg",
	color = "primary",
	isContained = false,
	isAbsolute = false,
	...props
}) => {
	const { suiInlineClassname } = useStyles(props)

	// Generate class names for the spinner container
	const classNames = generateCN(
		"sui-spinner",
		{
			absolute: isAbsolute,
			[size]: !isEmpty(size ?? ""),
			dark: !isEmpty(color) && "dark" === color,
			contained: isContained,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} data-testid="spinner">
			<SpinnerLoader color={color} size={size ?? "lg"} />
		</div>
	)
}

export { Spinner }
