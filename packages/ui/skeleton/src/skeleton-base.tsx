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
	isGrayScale = false,
	size = {
		width: "",
		height: "",
	},
	_style = {},
	_htmlProps = {},
}) => {
	const classes = `sui-skeleton__${type} ${className}`
	const { width, height } = size
	const _calculateStyles = {
		...(width && {
			width: `${width}`,
		}),
		...(height && {
			height: `${height}`,
		}),
		..._style,
	}

	const { suiInlineClassname } = useStyles(_calculateStyles, classes)

	// Early escape if it's loaded.
	if (isLoaded) {
		return children
	}

	const classNames = generateCN(
		"sui-skeleton",
		{
			inline: isInline,
			grayscale: isGrayScale,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}></div>
	)
}

export { Skeleton }
