import React from "react"

import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

import { SpinnerProps } from "./spinner.types"
import { SpinnerLoader } from "./spinner-loader"
import { useStyles } from "@wpmudev/sui-hooks"

// Spinner component
const Spinner: React.FC<SpinnerProps> = ({
	loaderSize = "lg",
	colorScheme = "primary",
	isContained = false,
	isAbsolute = false,
	isSpinning = true,
	_htmlProps = {},
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
			inactive: !isSpinning,
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classNames}
			data-testid="spinner"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<SpinnerLoader
				colorScheme={colorScheme}
				loaderSize={loaderSize ?? "lg"}
				isSpinning={isSpinning}
			/>
		</div>
	)
}

export { Spinner }
