import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes } from "@wpmudev/sui-utils"

/**
 * This interface defines the props for the Score component.
 * It extends the HTMLProps<HTMLDivElement> type to inherit standard HTML div element props.
 */
interface AccordionProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		useStylesTypes {
	/** Additional CSS class name for styling the accordion component. */
	className?: string
	/** Remove border-radius when true */
	noBorderRadius?: boolean
	/** Remove side borders */
	noSideBorders?: boolean
	/** Remove content wrapper and apply white bg */
	isFlushed?: boolean
	/** Accordion state */
	state?: "" | "neutral" | "informative" | "success" | "warning" | "critical" // The semantic types for the accordion,
	/** Whether to allow multiple accordion items to be expanded or not */
	allowMultipleExpand?: boolean // Whether to allow multiple expands at the same time or not
	children: React.ReactNode // The content of the Accordion
	/** Additional CSS class name for styling the accordion component. */
	spacing?: string
}

type AccordionCheckboxProps =
	| {
			onCheck?: Function // Callback function to handle checkbox state changes.
			hasCheckbox?: true // Indicates whether the accordion item has a checkbox.
	  }
	| { onCheck: never; hasCheckBox: false } // If `hasCheckbox` is false, the `onCheck` prop should not be provided.

// The AccordionItemProps interface extends the AccordionCheckboxProps, adding additional props for the AccordionItem component.
interface AccordionItemBaseProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		useStylesTypes {
	title?: string // The title of the accordion item.
	description?: string // The description of the accordion item.
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
	icon?: React.ReactNode // An optional icon to be displayed in the accordion item.
	isExpanded?: boolean // Indicates whether the accordion item is initially expanded.
	isDisabled?: boolean // Indicates whether the accordion item is disabled and cannot be interacted with.
}

// Accordion Context Props
interface AccordionContextProps {
	allowMultipleExpand: boolean
	expandState: Record<string, boolean>
	setExpandState: Function
	spacing: string
	isFlushed: boolean
}

// Type when hasCheckbox is true
type AccordionItemWithCheckbox = {
	hasCheckbox: true
	onCheck: (isExpanded: boolean) => unknown
}

// Type when hasCheckbox is false
type AccordionItemWithoutCheckbox = {
	hasCheckbox: false
	onCheck: never
}

// Type when hasCheckbox is optional
type AccordionItemOptionalCheckbox = {
	hasCheckbox?: boolean
	onCheck?: never
}

// Final accordion-item prop types
type AccordionItemProps =
	| (AccordionItemWithCheckbox & AccordionItemBaseProps)
	| (AccordionItemWithoutCheckbox & AccordionItemBaseProps)
	| (AccordionItemOptionalCheckbox & AccordionItemBaseProps)

export type { AccordionItemProps, AccordionProps, AccordionContextProps }
