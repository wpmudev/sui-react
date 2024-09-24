import React from "react"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

import type { SkeletonBaseProps } from "./skeleton.types"
const Skeleton: React.FC<SkeletonBaseProps> = ({
	type = "block",
	className = "",
	children,
	isLoaded = false,
	isInline = false,
	isFluid = true,
	isGrayScale = true,
	_style = {},
	_htmlProps = {},
}) => {
	const classes = `sui-skeleton__${type} ${className}`
	const { suiInlineClassname } = useStyles(_style, classes)

	// Early escape if it's loaded.
	if (isLoaded) {
		return children
	}

	const classNames = generateCN(
		"sui-skeleton",
		{
			inline: isInline,
			fluid: isFluid,
			grayscale: isGrayScale,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}></div>
	)
}

export { Skeleton }
