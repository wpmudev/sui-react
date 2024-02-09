// @ts-nocheck
import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"

// Import required components
// import { Indicator } from "./elements/indicator"

import { ProgressBarProps } from "./progress-bar.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Build "progress bar" component
const ProgressBar: React.FC<ProgressBarProps> = ({
	label,
	value,
	size = "md",
	isInline = false,
	allowCancel = false,
	isIndeterminate = false,
	showValue = true,
	onClick,
	className = "",
	...props
}) => {
	const { suiInlineClassname } = useStyles(props, className)

	// generate classnames
	const classNames = generateCN(
		"sui-progress-bar",
		{
			sm: "sm" === size,
			md: "md" === size,
			lg: "lg" === size,
			inline: isInline,
		},
		suiInlineClassname,
	)

	const attrs: Record<string, any> = {}

	// attributes to pass
	if (!isIndeterminate) {
		attrs.style = { width: `${value}%` }
	}

	return (
		<div className={classNames} data-testid="progress-bar">
			<div className="sui-progress-bar__main">
				{!!label && (
					<span className="sui-progress-bar__text" aria-live="polite">
						{label}
					</span>
				)}
				{!!value && showValue && (
					<span className="sui-progress-bar__value" aria-live="polite">
						{value}%
					</span>
				)}
				<div
					className={generateCN("sui-progress-bar__indicator", {
						indeterminate: isIndeterminate,
					})}
				>
					<span
						className={generateCN("sui-progress-bar__indicator-bar", {
							indeterminate: isIndeterminate,
						})}
						{...attrs}
					/>
				</div>
			</div>
			{allowCancel && (
				<div className="sui-progress-bar__action">
					<Button
						appearance="tertiary"
						color="blue"
						{...(onClick && {
							onClick: (e) => onClick(e),
						})}
					>
						Cancel
					</Button>
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { ProgressBar }
