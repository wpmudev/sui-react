import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SpinnerProps } from "./spinner.types"
import { SpinnerLoader } from "./spinner-loader"

// Spinner component
const Spinner: React.FC<SpinnerProps> = ({
	size = "lg",
	color,
	isAbsolute = false,
}) => {
	// Generate class names for the spinner container
	const classNames = generateCN("sui-spinner", {
		absolute: isAbsolute,
		[size]: !isEmpty(size ?? ""),
	})

	return (
		<div className={classNames}>
			<SpinnerLoader color={color ?? "primary"} size={size ?? "lg"} />
		</div>
	)
}

export { Spinner }
