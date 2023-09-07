import React, { HTMLProps } from "react"

/**
 * Interface defining the props that can be passed to a Builder component.
 */
interface BuilderProps {
	/**
	 * An optional class name to be applied to the Builder component.
	 */
	className?: string

	/**
	 * Children components to be rendered within the Builder.
	 */
	children?: React.ReactNode
}

/**
 * Interface defining the props that can be passed to a BuilderBlock component.
 * Extends HTMLProps<HTMLAnchorElement> to include standard HTML anchor element props.
 */
interface BuilderBlockProps extends HTMLProps<HTMLAnchorElement> {
	/**
	 * The URL associated with the BuilderBlock.
	 */
	url: string

	/**
	 * An optional icon to be displayed within the BuilderBlock.
	 */
	icon?: string

	/**
	 * The title or text to be displayed for the BuilderBlock.
	 */
	title: string

	/**
	 * Make builder item active
	 */
	isActive?: boolean

	/**
	 * An optional class name to be applied to the BuilderBlock.
	 */
	className?: string

	/**
	 * An optional action component to be displayed alongside the title in the BuilderBlock.
	 */
	action?: React.ReactNode

	/**
	 * Specifies whether the BuilderBlock is disabled or not.
	 */
	isDisabled?: boolean
}

export { BuilderProps, BuilderBlockProps }
