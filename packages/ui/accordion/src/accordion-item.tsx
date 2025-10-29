import React, { useCallback, useId, useState, useContext } from "react"
import {
	useInteraction,
	useDefaultChildren,
	useStyles,
} from "@wpmudev/sui-hooks"
import { AccordionContext, useAccordion } from "./accordion-context"
import {
	generateCN,
	isEmpty,
	handleOnKeyDown,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"
import { ChevronDown, ChevronUp } from "@wpmudev/sui-icons"
import { Checkbox } from "@wpmudev/sui-checkbox"
import { Toggle } from "@wpmudev/sui-toggle"
import { AccordionItemProps } from "./accordion.types"
import { Tooltip } from "@wpmudev/sui-tooltip"

// The AccordionItem component is defined as a functional component using React.FC.
const AccordionItem: React.FC<AccordionItemProps> = ({
	title = "{title}",
	description,
	children,
	isDisabled = false,
	icon,
	hasCheckbox,
	hasToggle = false,
	toggleProps,
	tooltipProps,
	isExpanded = false,
	onCheck,
	_htmlProps = {},
	contentShadow = true,
	_style = {},
}) => {
	// Checkbox is checked.
	const [isChecked, setIsChecked] = useState(false)

	// Default content when children is empty
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(_style)

	// Mouse is being pressed
	const [isPressed, setIsPressed] = useState(false)

	// Custom hook to generate a unique ID for the accordion item.
	const uniqueId = useId()

	// Get the "toggle" method and "isCurrentlyExpanded" state from the current AccordionItem
	const { toggle, isCurrentlyExpanded } = useAccordion({
		uniqueId,
		isExpanded: isExpanded as boolean,
	})
	const { spacing } = useContext(AccordionContext)

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

	let styles = {}

	// custom spacing
	if (spacing) {
		styles = {
			padding: spacing,
		}
	}

	// Panel content className
	const panelContentClassName = contentShadow
		? "sui-accordion__panel--content"
		: "sui-accordion__panel--content sui-accordion__panel--content-no-shadow"

	// Render the AccordionItem component with proper accessibility attributes.
	return (
		<div
			className={generateCN(
				"sui-accordion__item",
				{
					expanded: isCurrentlyExpanded,
					hover: isHovered,
					disabled: isDisabled,
				},
				suiInlineClassname,
			)}
			data-testid="accordion-item"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div
				id={accordionId}
				className={generateCN("sui-accordion__header", {
					focus: isFocused || isPressed,
				})}
				{...(Object.keys(styles).length > 0 && { style: styles })}
				{...(!hasCheckbox &&
					!hasToggle && {
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
				{(hasCheckbox || (hasToggle && isChecked)) && (
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
					{(!!hasCheckbox || !!hasToggle || !!icon) && (
						<div className="sui-accordion__header-actions">
							{hasToggle && (
								<div className="sui-accordion__header-toggle">
									<Toggle
										label={title}
										defaultValue={isChecked}
										isDisabled={isDisabled}
										aria-label={title}
										onClick={() => {
											if (
												(!isCurrentlyExpanded && !isChecked) ||
												(isCurrentlyExpanded && isChecked)
											) {
												toggle()
											}
											setIsChecked(!isChecked)
										}}
										{...toggleProps}
									/>
								</div>
							)}
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
					{!hasToggle && (
						<div className="sui-accordion__header-title">
							<h2>{title}</h2>
							{!isEmpty(description ?? "") && <p>{description}</p>}
						</div>
					)}
				</div>
				{/* Icon component to display a chevron icon */}
				<div className="sui-accordion__header-icon">
					{tooltipProps ? (
						<Tooltip icon="Info" {...tooltipProps}></Tooltip>
					) : (
						<Icon iconHeight={16} iconWidth={16} />
					)}
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
				{...(Object.keys(styles).length > 0 && {
					style: { ...styles, paddingTop: 0 },
				})}
				data-testid="accordion-item-panel"
			>
				<div className={panelContentClassName}>{children}</div>
			</div>
		</div>
	)
}

export { AccordionItem }
