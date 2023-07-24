import React, { HTMLProps } from "react"

/**
 * This interface defines the props for the Score component.
 * It extends the HTMLProps<HTMLDivElement> type to inherit standard HTML div element props.
 */
interface AccordionProps extends HTMLProps<HTMLDivElement> {
	/** Additional CSS class name for styling the score component. */
	className?: string
}

type AccordionCheckboxProps =
	| {
			onCheck?: Function // Callback function to handle checkbox state changes.
			hasCheckbox?: true // Indicates whether the accordion item has a checkbox.
	  }
	| { onCheck: never; hasCheckBox: false } // If `hasCheckbox` is false, the `onCheck` prop should not be provided.

// The AccordionItemProps interface extends the AccordionCheckboxProps, adding additional props for the AccordionItem component.
interface AccordionItemProps extends AccordionCheckboxProps {
	title?: string // The title of the accordion item.
	description?: string // The description of the accordion item.
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
	icon?: React.ReactNode // An optional icon to be displayed in the accordion item.
	isExpanded?: boolean // Indicates whether the accordion item is initially expanded.
	isDisabled?: boolean // Indicates whether the accordion item is disabled and cannot be interacted with.
	state?: "" | "neutral" | "informative" | "success" | "warning" | "critical" // The semantic types for the accordion
}

export { AccordionItemProps, AccordionProps }
