import React, { Fragment, useCallback, useState } from "react"
import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { Col } from "@wpmudev/sui-grid"
import { Button } from "@wpmudev/sui-button"
import { IconProps } from "@wpmudev/sui-icon"
import Icons from "@wpmudev/sui-icons"

// Import required element(s)
import { BuilderFieldProps } from "./builder.types"

const BuilderField: React.FC<BuilderFieldProps> = ({
	columnSize = 12,
	icon,
	title = "Field Title",
	subTitle,
	className,
	action,
	imgUrl,
	customContent,
	allowDrag = true,
	isDragging = false,
	hasError = false,
	children,
	_htmlProps,
	_style = {},
}) => {
	// State to manage the expanded/collapsed state of the field
	const [isExpanded, setIsExpanded] = useState<boolean>(false)

	// Hook for managing interaction state
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate class names based on interaction and disabled state
	const classNames = generateCN(
		"sui-builder__field",
		{
			hover: isHovered && !isDragging,
			focus: isDragging || isFocused,
			dragging: isDragging,
			error: hasError,
			expanded: isExpanded,
		},
		suiInlineClassname,
	)

	// Determine the IconTag based on the provided icon value
	let Icon: React.ComponentType<IconProps>

	if (icon) {
		Icon = Icons[icon]
	}

	// Check if the field has an accordion section
	const hasAccordion = !!children

	/**
	 * Render the preview section of the field
	 *
	 * @return {JSX.Element} Field icon and title
	 */
	const renderPreview = () => {
		let logo = null

		switch (true) {
			case !!customContent:
				return customContent
			case !isEmpty(imgUrl ?? ""):
				logo = (
					<span className="sui-builder__preview--image">
						<img src={imgUrl} alt="Field Preview" />
					</span>
				)
				break
			case !!Icon && null !== Icon:
				logo = <Icon size="sm" />
				break
		}

		return (
			<Fragment>
				<div className="sui-builder__field-info">
					<div className="sui-builder__preview">{logo}</div>
					{!isEmpty(title ?? "") && (
						<div className="sui-builder__field-info-name">{title}</div>
					)}
				</div>
				{!isEmpty(subTitle ?? "") && (
					<div className="sui-builder__field-code">{subTitle}</div>
				)}
			</Fragment>
		)
	}

	// Toggle the accordion section's visibility
	const toggleBody = useCallback(() => {
		setIsExpanded(!isExpanded)
	}, [isExpanded])

	const actionClass = generateCN("sui-builder__field-actions", {
		hover: isHovered,
	})

	// Render the action buttons
	const renderActions = () => (
		<div className={actionClass}>
			{hasAccordion && isHovered && action}
			{!hasAccordion && action}
			{hasAccordion && (
				<div className="sui-builder__field-actions-item sui-builder__field-actions-item--accordion">
					<Button
						type="tertiary"
						startIcon={isExpanded ? "ChevronUp" : "ChevronDown"}
						iconOnly={true}
						colorScheme="black"
						isSmall={true}
						className="sui-builder__field-toggle-btn"
						onClick={toggleBody}
						_htmlProps={{
							"aria-label": "builder-toggle",
							"data-testid": "builder-field-toggle",
						}}
					/>
				</div>
			)}
		</div>
	)

	return (
		<Col size={columnSize ?? 12} {...methods} _htmlProps={_htmlProps}>
			<div className={classNames} data-testid="builder-field">
				<div className="sui-builder__field-header">
					{allowDrag && (
						<div
							className="sui-builder__field-move"
							data-testid="builder-field-drag"
						>
							<Icons.Grip size="md" />
						</div>
					)}
					<div className="sui-builder__field-content">{renderPreview()}</div>
					{renderActions()}
				</div>
				{hasAccordion && (
					<div className="sui-builder__field-body">{children}</div>
				)}
			</div>
		</Col>
	)
}

// Publish component(s)
export { BuilderField }
