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
	id,
	title = "{title}",
	description,
	children,
	isDisabled = false,
	icon,
	hasCheckbox,
	isChecked: initialIsChecked = false,
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
	const [isChecked, setIsChecked] = useState(initialIsChecked)

	// Default content when children is empty
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(_style)

	// Mouse is being pressed
	const [isPressed, setIsPressed] = useState(false)

	// Custom hook to generate a unique ID for the accordion item.
	const generatedId = useId()
	const uniqueId = id || `sui-accordion-${generatedId}`

	// Get the "toggle" method and "isCurrentlyExpanded" state from the current AccordionItem
	const { toggle, isCurrentlyExpanded } = useAccordion({
		uniqueId,
		isExpanded: isExpanded as boolean,
	})
	const { spacing } = useContext(AccordionContext)

	// IDs for the accordion and its panel to manage accessibility.
	const accordionId = `${uniqueId}-header`
	const accordionPanelId = `${uniqueId}-panel`

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
			id={uniqueId}
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
						id={`${accordionId}-accessible-cta`}
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
				<div
					className="sui-accordion__header-info"
					id={`${accordionId}-header-info`}
				>
					{(!!hasCheckbox || !!hasToggle || !!icon) && (
						<div
							className="sui-accordion__header-actions"
							id={`${accordionId}-header-actions`}
						>
							{hasToggle && (
								<div
									id={`${accordionId}_header_toggle`}
									className="sui-accordion__header-toggle"
								>
									<Toggle
										id={`${accordionId}_toggle`}
										label={title}
										defaultValue={isChecked}
										isDisabled={isDisabled}
										aria-label={title}
										{...toggleProps}
										onClick={(event) => {
											if (
												(!isCurrentlyExpanded && !isChecked) ||
												(isCurrentlyExpanded && isChecked)
											) {
												toggle()
											}
											setIsChecked(!isChecked)

											if (toggleProps?.onClick) {
												toggleProps.onClick(event)
											}
										}}
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
						<div
							className="sui-accordion__header-title"
							id={`${accordionId}-header-title`}
						>
							<h2 className={`${accordionId}-title`}>{title}</h2>
							{!isEmpty(description ?? "") && (
								<p className={`${accordionId}-description`}>{description}</p>
							)}
						</div>
					)}
				</div>
				{/* Icon component to display a chevron icon */}
				<div
					className="sui-accordion__header-icon"
					id={`${accordionId}-header-icon`}
				>
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
				<div
					className={panelContentClassName}
					id={`${accordionId}-panel-content`}
				>
					{children}
				</div>
			</div>
		</div>
	)
}

export { AccordionItem }
