import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SpinnerProps } from "./spinner.types"
import { SpinnerLoader } from "./spinner-loader"
import { useStyles } from "@wpmudev/sui-hooks"

// Spinner component
const Spinner: React.FC<SpinnerProps> = ({
	loaderSize = "lg",
	colorScheme = "primary",
	isContained = false,
	isAbsolute = false,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Generate class names for the spinner container
	const classNames = generateCN(
		"sui-spinner",
		{
			absolute: isAbsolute,
			[loaderSize]: !isEmpty(loaderSize ?? ""),
			dark: !isEmpty(colorScheme) && "dark" === colorScheme,
			contained: isContained,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} data-testid="spinner">
			<SpinnerLoader
				colorScheme={colorScheme}
				loaderSize={loaderSize ?? "lg"}
			/>
		</div>
	)
}

export { Spinner }
