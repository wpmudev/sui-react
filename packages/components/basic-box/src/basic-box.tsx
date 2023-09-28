import React from "react"

import { Tag } from "@wpmudev/sui-tag"

import { generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

import { BasicBoxProps } from "./basic-box.types"

// Build "basic-box" component
const BasicBox: React.FC<BasicBoxProps> = ({
	title,
	description,
	headerActions = null,
	footerActions = false,
	className,
	isPro = false,
	children,
}) => {
	// Interaction methods
	const [isHovered, isFocused, methods] = useInteraction({})

	// Define class name based on various conditions
	const classNames = generateCN(
		"sui-basic-box",
		{
			focus: isFocused,
			hover: isHovered && !isFocused,
			pro: isPro,
		},
		className,
	)

	return (
		<div className={classNames} {...methods}>
			<div className="sui-basic-box__header">
				<div className="sui-basic-box__header-info">
					<h3 className="sui-basic-box__header-title sui-heading--h3">
						{title}
					</h3>
					<div className="sui-basic-box__actions">
						{headerActions && headerActions}
					</div>
					{description && (
						<div className="sui-basic-box__header-desc">{description}</div>
					)}
				</div>
			</div>
			<div className="sui-basic-box__body">{children}</div>
			{!!footerActions && (
				<div className="sui-basic-box__footer">
					{footerActions?.[0] && (
						<div className="sui-basic-box__footer-left">
							{footerActions?.[0]}
						</div>
					)}
					{footerActions?.[1] && (
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
