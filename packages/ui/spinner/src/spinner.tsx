import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SpinnerProps } from "./spinner.types"
import { SpinnerLoader } from "./spinner-loader"

// Spinner component
const Spinner: React.FC<SpinnerProps> = ({
	size = "lg",
	color = "primary",
	isContained = false,
	isAbsolute = false,
}) => {
	// Generate class names for the spinner container
	const classNames = generateCN("sui-spinner", {
		absolute: isAbsolute,
		[size]: !isEmpty(size ?? ""),
		dark: !isEmpty(color) && "dark" === color,
		contained: isContained,
	})

	return (
		<div className={classNames} data-testid="spinner">
			<SpinnerLoader color={color} size={size ?? "lg"} />
		</div>
	)
}

export { Spinner }
