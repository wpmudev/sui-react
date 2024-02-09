import React, {
	forwardRef,
	Fragment,
	Children,
	cloneElement,
	ReactNode,
	ReactSVGElement,
} from "react"

import { generateCN, handleOnKeyDown, isEmpty } from "@wpmudev/sui-utils"

import { IconProps } from "./icon.types"
import { useStyles } from "@wpmudev/sui-hooks"

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
			onClick,
			fill = "currentColor",
			...props
		},
		ref,
	) => {
		const { suiInlineClassname } = useStyles(props, className)

		// Add variations to the classnames
		className = generateCN(
			"sui-icon",
			{
				[color]: !isEmpty(color),
				[size]: !isEmpty(size),
			},
			suiInlineClassname,
		)

		// SVG props
		const svgProps: Record<string, any> = {
			ref,
			className,
			title,
			viewBox,
			height,
			width,
			onClick,
			fill,
		}

		// Make icon accessible if onClick prop exists
		if (!!onClick) {
			svgProps.tabIndex = 0
			svgProps.onKeyDown = (
				e: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
			) => handleOnKeyDown(e, onClick)
		}

		// Set the path for the icon (either from props or the default path)
		let path = (children ?? params.path) as ReactNode

		// Add svg props to all paths
		path = Children.map(path, (child) =>
			cloneElement(child as ReactSVGElement, { fill }),
		)

		return (
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				{...svgProps}
				data-testid="svg-icon"
			>
				{!!title && <title>{title}</title>}
				{path}
			</svg>
		)
	},
)

Icon.displayName = "Icon"

export { Icon }
