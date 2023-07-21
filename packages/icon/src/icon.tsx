import React, { forwardRef, Fragment } from "react"

import { generateCN, isEmpty } from "@wpmudev/react-utils"

import { IconProps } from "./icon.types"

/**
 * Default icon configuration.
 */
const params = {
	path: <Fragment />, // Default path for the icon (empty fragment)
	viewBox: "0 0 24 24", // Default viewBox for the icon
	height: 24,
	width: 24,
}

/**
 * Icon component.
 */
const Icon = forwardRef<"svg", IconProps>(
	(
		{
			as,
			children,
			className,
			title, // use fallback values
			viewBox = params?.viewBox,
			height = params.height,
			width = params.width,
			color = "",
			size = "",
			...props
		},
		ref,
	) => {
		// Add variations to the classnames
		className = generateCN(
			"sui-icon",
			{
				[color]: !isEmpty(color),
				[size]: !isEmpty(size),
			},
			className,
		)

		// SVG props
		const svgProps = {
			ref,
			className,
			title,
			viewBox,
			height,
			width,
		}

		// Set the path for the icon (either from props or the default path)
		const path = (children ?? params.path) as React.ReactNode

		return (
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
				{!!title && <title>{title}</title>}
				{path}
			</svg>
		)
	},
)

Icon.displayName = "Icon"

export { Icon }
