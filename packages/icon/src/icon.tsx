import React, { forwardRef, Fragment } from "react"

/**
 * Interface representing the properties of an icon component.
 */
export interface IconProps {
	/**
	 * Custom element type to be used for rendering the icon.
	 */
	as?: string
	/**
	 * Additional CSS class name for the icon.
	 */
	className?: string
	/**
	 * Svg title
	 */
	title?: string
	/**
	 * View box attribute for the icon.
	 */
	viewBox?: string
	/**
	 * SVG icon height
	 */
	height?: number
	/**
	 * SVG icon width
	 */
	width?: number
	/**
	 * Children nodes of the icon.
	 */
	children?: React.ReactNode
}

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
			...props
		},
		ref,
	) => {
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
