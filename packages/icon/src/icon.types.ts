import React from "react"

/**
 * Interface representing the properties of an icon component.
 */
interface IconProps {
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
	 * SVG icon size
	 */
	size?: "sm" | "md" | "lg" | "xl"
	/**
	 * SVG icon state (color)
	 */
	color?: "" | "neutral" | "informative" | "success" | "warning" | "critical"
	/**
	 * When click on icon
	 *
	 * @return {{}}
	 */
	onClick?: () => void
	/**
	 * Children nodes of the icon.
	 */
	children?: React.ReactNode
}

interface IconBuildParams {
	/**
	 * The icon `svg` viewBox.
	 *
	 * @default "0 0 24 24"
	 */
	viewBox?: string
	/**
	 * SVG icon title
	 */
	title?: string
	/**
	 * Default props automatically passed to the component; overridable.
	 */
	defaultProps?: IconProps
}

export { IconProps, IconBuildParams }
