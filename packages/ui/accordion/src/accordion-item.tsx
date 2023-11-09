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
	icon,
	hasCheckbox,
	onCheck,
}) => {
	// Custom hook to generate a unique ID for the accordion item.
	const uniqueId = useId()

	// Get the "toggle" method and "isExpanded" state from the current AccordionItem
	const { toggle, isExpanded } = useAccordion({ uniqueId })

	// IDs for the accordion and its panel to manage accessibility.
	const accordionId = `sui-accordion-${uniqueId}`
	const accordionPanelId = `sui-accordion-panel-${uniqueId}`

	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({})

	// When checkbox clicked
	const onCheckBoxChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			e.stopPropagation()
			//e.preventDefault()

			if (onCheck) {
				onCheck(isExpanded)
			}
		},
		[isExpanded, onCheck],
	)

	// Icon component to display a chevron icon based on the accordion's expanded state.
	const Icon = isExpanded ? ChevronUp : ChevronDown

	// The element ref where we render the checkbox
	const checkboxPortalRef = useRef(null)

	// The DOM  element where we render the Accordion Checkbox
	const [checkboxDomContainer, setCheckBoxDomContainer] =
		useState<Element | null>(null)

	// Updating the DOM element state when its "ref" becomes available
	useEffect(() => {
		if (checkboxPortalRef.current) {
			setCheckBoxDomContainer(checkboxPortalRef.current)
		}
	}, [checkboxPortalRef])

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
			data-testid="accordion-item"
		>
			{/* 
				Rendering the Checkbox component outside the Accordion Header, to comply with
				the accessibility principle that "Interactive controls must not be nested." 
				This approach ensures that the Checkbox can be interacted with by all users, 
				including those relying on assistive technologies, without violating accessibility guidelines.
			 */}
			{hasCheckbox &&
				checkboxDomContainer &&
				createPortal(
					<Checkbox onChange={onCheckBoxChange} isDisabled={isDisabled} />,
					checkboxDomContainer,
				)}
			<div
				tabIndex={isDisabled ? -1 : 0}
				role="button"
				id={accordionId}
				aria-expanded={isExpanded}
				aria-controls={accordionPanelId}
				className="sui-accordion__header"
				onClick={toggle}
				data-testid="accordion-item-button"
				onKeyDown={(e) => {
					e.stopPropagation()
					handleOnKeyDown(e, toggle)
				}}
			>
				{/* Content of the accordion item's header */}
				<div className="sui-accordion__header-info">
					{(!!hasCheckbox || !!icon) && (
						<div className="sui-accordion__header-actions">
							{/* The container where the checkbox element will be displayed if the Accordion has a Checkbox */}
							{hasCheckbox && <div ref={checkboxPortalRef} />}
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
					open: isExpanded,
				})}
				data-testid="accordion-item-panel"
			>
				<div className="sui-accordion__panel--content">{children}</div>
			</div>
		</div>
	)
}

export { AccordionItem }
