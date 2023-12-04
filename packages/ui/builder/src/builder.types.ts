import React, { HTMLProps } from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"

/**
 * Interface defining the props that can be passed to a Builder component.
 */
interface BuilderProps {
	/**
	 * An optional class name to be applied to the Builder component.
	 */
	className?: string
	/**
	 * Allow add new fields
	 */
	allowAddFields?: boolean
	/**
	 * Mark as true when there is no fields available to render.
	 */
	hasNoFields?: boolean
	/**
	 * Allow fields to scroll.
	 */
	isScrollable?: boolean
	/**
	 * Children components to be rendered within the Builder.
	 */
	children?: React.ReactNode
}

interface BuilderButtonProps extends HTMLProps<HTMLAnchorElement> {
	/**
	 * An optional icon to be displayed within in button.
	 */
	icon?: IconsNamesType
	/**
	 * The title or text to be displayed.
	 */
	title?: string
	/**
	 * An optional class name to be applied.
	 */
	className?: string
	/**
	 * Specifies whether the Button is disabled or not.
	 */
	isDisabled?: boolean
	/**
	 * Make builder item active
	 */
	onClick?(): void
}
/**
 * Interface for props that can be passed to the BuilderEmpty component.
 */
interface BuilderEmptyProps {
	/**
	 * Optional title for the BuilderEmpty component.
	 */
	title?: string

	/**
	 * Optional CSS class name for styling the BuilderEmpty component.
	 */
	className?: string
}

/**
 * Interface for props that can be passed to the BuilderField component.
 */
interface BuilderFieldProps {
	/**
	 * Optional number specifying the column size.
	 */
	columnSize?: number

	/**
	 * Optional string for specifying an icon.
	 */
	icon?: IconsNamesType

	/**
	 * Optional title for the BuilderField component.
	 */
	title?: string

	/**
	 * Optional subtitle for the BuilderField component.
	 */
	subTitle?: string

	/**
	 * Optional CSS class name for styling the BuilderField component.
	 */
	className?: string

	/**
	 * Optional React node for custom actions.
	 */
	action?: React.ReactNode

	/**
	 * Optional URL for an image associated with the field.
	 */
	imgUrl?: string

	/**
	 * Optional custom content as a React node.
	 */
	customContent?: React.ReactNode

	/**
	 * Optional boolean flag to allow dragging of the field.
	 */
	allowDrag?: boolean

	/**
	 * Optional boolean flag indicating if the field is currently being dragged.
	 */
	isDragging?: boolean

	/**
	 * Optional boolean flag indicating if the field has an error state.
	 */
	hasError?: boolean

	/**
	 * Optional children content as a React node.
	 */
	children?: React.ReactNode

	/**
	 * Optional function to handle click events.
	 */
	onClick?: () => void
}

/**
 * Interface for props that can be passed to the BuilderWrapper component.
 */
interface BuilderWrapperProps {
	/**
	 * Optional CSS class name for styling the BuilderWrapper component.
	 */
	className?: string

	/**
	 * Required children content as a React node.
	 */
	children: React.ReactNode
}

export type {
	BuilderProps,
	BuilderButtonProps,
	BuilderEmptyProps,
	BuilderFieldProps,
	BuilderWrapperProps,
}
