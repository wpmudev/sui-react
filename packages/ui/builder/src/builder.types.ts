import React, { HTMLProps } from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Interface defining the props that can be passed to a Builder component.
 */
interface BuilderProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the Builder.
	 */
	id?: string
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

interface BuilderButtonProps extends SuiStyleType {
	/**
	 * Unique identifier for the BuilderButton.
	 */
	id?: string
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
interface BuilderEmptyProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the BuilderEmpty.
	 */
	id?: string
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
interface BuilderFieldProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * Unique identifier for the BuilderField.
	 */
	id?: string
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
interface BuilderWrapperProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the BuilderWrapper.
	 */
	id?: string
	/**
	 * Optional CSS class name for styling the BuilderWrapper component.
	 */
	className?: string

	/**
	 * Required children content as a React node.
	 */
	children?: React.ReactNode
}

export type {
	BuilderProps,
	BuilderButtonProps,
	BuilderEmptyProps,
	BuilderFieldProps,
	BuilderWrapperProps,
}
