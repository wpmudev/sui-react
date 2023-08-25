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
	onClick,
	sm = "",
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
		<div className={classNames}>
			<div className="sui-progress-bar__main">
				{!!label && (
					<span className="sui-progress-bar__text" aria-hidden={true}>
						{label}
					</span>
				)}
				{!!value && (
					<span className="sui-progress-bar__value" aria-hidden={true}>
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
						{...(isFunction(onClick) && {
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
