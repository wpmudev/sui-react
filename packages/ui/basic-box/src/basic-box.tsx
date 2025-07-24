import React from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import {
	useInteraction,
	useDefaultChildren,
	useStyles,
} from "@wpmudev/sui-hooks"

import { BasicBoxProps } from "./basic-box.types"

// Build "basic-box" component
const BasicBox: React.FC<BasicBoxProps> = ({
	title = "Box Title",
	description,
	headerActions,
	footerActions,
	centerFooterActions,
	className,
	isPro = false,
	hasBg = false,
	isFluid = false,
	children,
	_htmlProps,
	_style,
}) => {
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
			bg: hasBg,
			"is-fluid": isFluid,
			"center-footer-actions": centerFooterActions,
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classNames}
			{...methods}
			data-testid="basic-box"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-basic-box__header">
				<div className="sui-basic-box__header-info">
					{!!title && (
						<h4
							className="sui-basic-box__header-title sui-heading--h4"
							data-testid="basic-box-title"
						>
							{title}
						</h4>
					)}
					<div className="sui-basic-box__actions">
						{headerActions && headerActions}
					</div>
					{!!description && (
						<div
							className="sui-basic-box__header-desc"
							data-testid="basic-box-description"
						>
							{description}
						</div>
					)}
				</div>
			</div>
			<div className="sui-basic-box__body" data-testid="basic-box-body">
				{children}
			</div>
			{!!footerActions && (
				<div className="sui-basic-box__footer">
					{!!footerActions?.[0] && (
						<div className="sui-basic-box__footer-left">
							{footerActions?.[0]}
						</div>
					)}
					{!!footerActions?.[1] && (
						<div className="sui-basic-box__footer-right">
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
