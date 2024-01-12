import React, { useCallback, useId, useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useInteraction } from "@wpmudev/sui-hooks"
import { useAccordion } from "./accordion-context"
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
	isExpanded: propIsExpended,
	icon,
	hasCheckbox,
	isExpanded,
	onCheck,
}) => {
	// Checkbox is checked.
	const [isChecked, setIsChecked] = useState(false)

	// Mouse is being pressed
	const [isPressed, setIsPressed] = useState(false)

	// Custom hook to generate a unique ID for the accordion item.
	const uniqueId = useId()

	// Get the "toggle" method and "isCurrentlyExpanded" state from the current AccordionItem
	const { toggle, isCurrentlyExpanded } = useAccordion({
		uniqueId,
		isExpanded: isExpanded as boolean,
	})

	// IDs for the accordion and its panel to manage accessibility.
	const accordionId = `sui-accordion-${uniqueId}`
	const accordionPanelId = `sui-accordion-panel-${uniqueId}`

	const onMouseDownCapture = () => {
		setIsPressed(true)
	}

	const onMouseUpCapture = () => {
		setIsPressed(false)
	}

	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({
		onMouseDownCapture,
		onMouseUpCapture,
	})

	// When checkbox clicked
	const onCheckBoxChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			e.stopPropagation()
			//e.preventDefault()
			setIsChecked(e.target.checked)
			if (onCheck) {
				onCheck(isCurrentlyExpanded)
			}
		},
		[isCurrentlyExpanded, onCheck],
	)

	// Icon component to display a chevron icon based on the accordion's expanded state.
	const Icon = isCurrentlyExpanded ? ChevronUp : ChevronDown

	// Render the AccordionItem component with proper accessibility attributes.
	return (
		<div
			className={generateCN("sui-accordion__item", {
				expanded: isCurrentlyExpanded,
				hover: isHovered,
				disabled: isDisabled,
			})}
			data-testid="accordion-item"
		>
			<div
				id={accordionId}
				aria-expanded={isCurrentlyExpanded}
				aria-controls={accordionPanelId}
				className={generateCN("sui-accordion__header", {
					focus: isFocused || isPressed,
				})}
				{...(!hasCheckbox && {
					tabIndex: isDisabled ? -1 : 0,
					role: "button",
					"aria-expanded": isExpanded,
					"aria-controls": accordionPanelId,
					onClick: toggle,
					"data-testid": "accordion-item-button",
					onKeyDown: (e) => {
						e.stopPropagation()
						handleOnKeyDown(e, toggle)
					},
				})}
				{...(interactionMethods ?? {})}
			>
				{hasCheckbox && (
					<div
						className="sui-accessible-cta"
						tabIndex={isDisabled ? -1 : 0}
						role="button"
						aria-label="Accordion Item"
						aria-expanded={isExpanded}
						aria-controls={accordionPanelId}
						onClick={toggle}
						data-testid="accordion-item-button"
						onKeyDown={(e) => {
							e.stopPropagation()
							handleOnKeyDown(e, toggle)
						}}
					></div>
				)}

				{/* Content of the accordion item's header */}
				<div className="sui-accordion__header-info">
					{(!!hasCheckbox || !!icon) && (
						<div className="sui-accordion__header-actions">
							{hasCheckbox && (
								<Checkbox
									name={accordionId}
									id={`${accordionId}-checkbox`}
									onChange={onCheckBoxChange}
									isChecked={isChecked}
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
					<Icon height={16} width={16} />
				</div>
			</div>
			{/* Content of the accordion item's panel */}
			<div
				role="region"
				id={accordionPanelId}
				aria-labelledby={accordionId}
				className={generateCN("sui-accordion__panel", {
					open: isCurrentlyExpanded,
				})}
				data-testid="accordion-item-panel"
			>
				<div className="sui-accordion__panel--content">{children}</div>
			</div>
		</div>
	)
}

export { AccordionItem }
