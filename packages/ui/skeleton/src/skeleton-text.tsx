import React from "react"
import { useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Skeleton } from "./skeleton-base"
import type { SkeletonTextProps } from "./skeleton.types"

const SkeletonText: React.FC<SkeletonTextProps> = ({
	lines = 1,
	gap = 8,
	isLoaded = false,
	className = "",
	children,
	_skeletonHtmlProps = {},
	_style = {},
	_htmlProps = {},
}) => {
	const _calculateStyles = {
		gap: `${gap}px`,
		..._style,
	}
	const { suiInlineClassname } = useStyles(_calculateStyles, className)

	// Render children when content is loaded
	if (isLoaded) {
		return children
	}

	const fakeRows = Array.from({ length: lines })

	// Generate text rows
	const rows = fakeRows.map((_, index) => (
		<Skeleton key={index} {..._skeletonHtmlProps} type="text" />
	))

	const classNames = generateCN(
		"sui-skeleton__wrapper",
		{
			text: true,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			{rows}
		</div>
	)
}

export { SkeletonText }
