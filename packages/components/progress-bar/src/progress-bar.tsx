// @ts-nocheck
import React from "react"
import { isFunction, generateCN } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"

// Import required components
// import { Indicator } from "./elements/indicator"

import { ProgressBarProps } from "./progress-bar.types"

// Build "progress bar" component
const ProgressBar: React.FC<ProgressBarProps> = ({
	label,
	value,
	size,
	isInline = false,
	allowCancel = false,
	isIndeterminate = false,
	showValue = true,
	onClick,
	className = "",
}) => {
	// generate classnames
	const classNames = generateCN(
		"sui-progress-bar",
		{
			sm: "sm" === size,
			lg: "lg" === size,
			inline: isInline,
		},
		className,
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
