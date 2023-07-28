import React, { useCallback, useId, useState } from "react"
import { useInteraction } from "@wpmudev/sui-hooks"

import { generateCN, isEmpty, handleOnKeyDown } from "@wpmudev/sui-utils"
import { ChevronDown, ChevronUp } from "@wpmudev/sui-icons"
import { Checkbox } from "@wpmudev/sui-checkbox"

import { AccordionItemProps } from "./accordion.types"

// The AccordionItem component is defined as a functional component using React.FC.
const AccordionItem: React.FC<AccordionItemProps> = ({
	title,
	description,
	children,
	isDisabled,
	icon,
	hasCheckbox,
	onCheck,
	...props
}) => {
	// State to manage the expanded state of the accordion item.
	const [isExpanded, setIsExpanded] = useState<boolean>(
		props?.isExpanded ?? false,
	)

	// Custom hook to generate a unique ID for the accordion item.
	const uniqueId = useId()

	// IDs for the accordion and its panel to manage accessibility.
	const accordionId = `sui-accordion-${uniqueId}`
	const accordionPanelId = `sui-accordion-panel-${uniqueId}`

	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({})

	// When checkbox clicked
	const onCheckClick = useCallback(
		(e) => {
			e.stopPropagation()
			e.preventDefault()

			if (onCheck) {
				onCheck(isExpanded)
			}
		},
		[isExpanded, onCheck],
	)

	// Callback to toggle the expanded state of the accordion item.
	const toggle = useCallback(() => {
		setIsExpanded(!isExpanded)
	}, [isExpanded])

	// Icon component to display a chevron icon based on the accordion's expanded state.
	const Icon = isExpanded ? ChevronUp : ChevronDown

	// Render the AccordionItem component with proper accessibility attributes.
	return (
		<div
			className={generateCN("sui-accordion__item", {
				expanded: isExpanded,
				hover: isHovered,
				focus: isFocused,
				disabled: isDisabled,
			})}
			{...(interactionMethods ?? {})}
		>
			<div
				tabIndex={0}
				role="button"
				id={accordionId}
				aria-expanded={isExpanded}
				aria-controls={accordionPanelId}
				className="sui-accordion__header"
				onClick={toggle}
				onKeyDown={(e) => {
					e.stopPropagation()
					handleOnKeyDown(e, toggle)
				}}
			>
				{/* Content of the accordion item's header */}
				<div className="sui-accordion__header-info">
					{(!!hasCheckbox || !!icon) && (
						<div className="sui-accordion__header-actions">
							{/* Checkbox component to display if the accordion item has a checkbox */}
							{hasCheckbox && (
								<Checkbox
									onClick={onCheckClick}
									isDisabled={isDisabled ?? false}
								/>
							)}
							{!!icon && icon}
						</div>
					)}
					<div className="sui-accordion__header-title">
						<h2>{title}</h2>
						{!isEmpty(description ?? "") && <p>{description}</p>}
					</div>
				</div>
				{/* Icon component to display a chevron icon */}
				<div className="sui-accordion__header-icon">
					<Icon height="16px" width="16px" />
				</div>
			</div>
			{/* Content of the accordion item's panel */}
			<div
				role="region"
				id={accordionPanelId}
				aria-labelledby={accordionId}
				className="sui-accordion__panel"
			>
				<div className="sui-accordion__panel--content">{children}</div>
			</div>
		</div>
	)
}

export { AccordionItem }
