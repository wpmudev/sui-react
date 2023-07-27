import React, { HTMLProps } from "react"

/**
 * This interface defines the props for the Score component.
 * It extends the HTMLProps<HTMLDivElement> type to inherit standard HTML div element props.
 */
interface AccordionProps extends HTMLProps<HTMLDivElement> {
	/** Additional CSS class name for styling the accordion component. */
	className?: string
	/** Different styles of the accordion. */
	state?: "neutral" | "informative" | "success" | "warning" | "critical"
}

// The main prop types for the accordion-item
type AccordionItemMainProps = {
	title: string
	description?: string
	children?: React.ReactNode
	icon?: React.ReactNode
	isExpanded?: boolean
	isDisabled?: boolean
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
	| (AccordionItemWithCheckbox & AccordionItemMainProps)
	| (AccordionItemWithoutCheckbox & AccordionItemMainProps)
	| (AccordionItemOptionalCheckbox & AccordionItemMainProps)

export type { AccordionItemProps, AccordionProps }
