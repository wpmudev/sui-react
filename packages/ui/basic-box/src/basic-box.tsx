import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import {
	useInteraction,
	useDefaultChildren,
	useStyles,
} from "@wpmudev/sui-hooks"

import { BasicBoxProps } from "./basic-box.types"

// Build "basic-box" component
const BasicBox: React.FC<BasicBoxProps> = ({
	id,
	title = "Box Title",
	description,
	headerActions,
	footerActions,
	centerFooterActions,
	className,
	isPro = false,
	hasBg = true,
	isFluid = false,
	children,
	hasLargeRadius,
	_htmlProps,
	_style,
}) => {
	const generatedId = useId()
	const basicBoxId = id || `sui_basic_box_${generatedId}`

	// Interaction methods
	const [isHovered, isFocused, methods] = useInteraction({})

	// Default children content
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(_style, className)

	// Define class name based on various conditions
	const classNames = generateCN(
		"sui-basic-box",
		{
			focus: isFocused,
			hover: isHovered && !isFocused,
			pro: isPro,
			"is-fluid": isFluid,
			"center-footer-actions": centerFooterActions,
			"large-radius": hasLargeRadius,
		},
		suiInlineClassname,
	)

	return (
		<div
			id={basicBoxId}
			className={classNames}
			{...methods}
			data-testid="basic-box"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-basic-box__header" id={`${basicBoxId}_header`}>
				<div
					className="sui-basic-box__header-info"
					id={`${basicBoxId}_header_info`}
				>
					{!!title && (
						<h3
							id={`${basicBoxId}_title`}
							className="sui-basic-box__header-title sui-heading--h3"
							data-testid="basic-box-title"
						>
							{title}
						</h3>
					)}
					<div className="sui-basic-box__actions" id={`${basicBoxId}_actions`}>
						{headerActions && headerActions}
					</div>
					{!!description && (
						<div
							id={`${basicBoxId}_description`}
							className="sui-basic-box__header-desc"
							data-testid="basic-box-description"
						>
							{description}
						</div>
					)}
				</div>
			</div>
			<div
				className="sui-basic-box__body"
				id={`${basicBoxId}_body`}
				data-testid="basic-box-body"
			>
				{children}
			</div>
			{!!footerActions && (
				<div className="sui-basic-box__footer" id={`${basicBoxId}_footer`}>
					{!!footerActions?.[0] && (
						<div
							className="sui-basic-box__footer-left"
							id={`${basicBoxId}_footer_left`}
						>
							{footerActions?.[0]}
						</div>
					)}
					{!!footerActions?.[1] && (
						<div
							className="sui-basic-box__footer-right"
							id={`${basicBoxId}_footer_right`}
						>
							{footerActions?.[1]}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

// Publish required component.
export { BasicBox }
