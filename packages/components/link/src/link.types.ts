import React, { ElementType } from "react"

/**
 * LinkProps is an interface that extends the HTMLAnchorElement interface
 * while allowing additional properties specific to the Link component.
 * It is used to define the set of properties that can be passed to the Link component.
 */
interface LinkProps extends Partial<Omit<HTMLAnchorElement, "className">> {
	/**
	 * Link theme
	 */
	theme?: string
	/**
	 * Render link tag with other tag than anchor
	 */
	as?: ElementType
	/**
	 * Additional CSS classes to apply to the link.
	 */
	className?: string
	/**
	 * Whether the link should be displayed inline.
	 * If true, the link will be displayed inline with surrounding text.
	 */
	isInline?: boolean
	/**
	 * Whether the link is disabled.
	 * If true, the link will be non-interactive and may have a different visual style.
	 */
	isDisabled?: boolean
	/**
	 * Indicates that the link points to an external resource.
	 * If true, the link is considered an external link and may have special handling.
	 */
	isExternal?: true
	/**
	 * Whether to display an external link icon next to the link.
	 * If true, an external link icon may be displayed alongside the link text.
	 */
	hasExternalIcon?: boolean
	children?: React.ReactNode
}

export { LinkProps }
