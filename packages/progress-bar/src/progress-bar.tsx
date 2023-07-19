import React from "react"
import { isUndefined, isEmpty, isFunction } from "@wpmudev/react-utils"
import { Button } from "@wpmudev/react-button"

// Import required components
import { Label } from "./elements/label"
import { Value } from "./elements/value"
import { Indicator } from "./elements/indicator"

import { ProgressBarProps } from "./progress-bar.types"

// Build "progress bar" component
const ProgressBar: React.FC<ProgressBarProps> = ({
	label,
	value,
	size,
	isInline = false,
	hasValue = false,
	hasAction = false,
	onClick,
}) => {
	const has = {}
	const set = {}

	// Props validation
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false
	has.float = !isInline && hasValue ? true : false

	// Define main class
	set.class = "sui-progress-bar"

	// Define element size
	switch (size) {
		case "sm":
		case "lg":
			set.class += ` sui-progress-bar--${size}`
			break

		default:
			// do nothing
			break
	}

	// Define element alignment
	if (isInline) {
		set.class += " sui-progress-bar--inline"
	}

	return (
		<div className={set.class}>
			{has.label && (
				<Label
					className={`sui-progress-bar${
						has.float ? "--float-left" : "__label"
					}`}
				>
					{label}
				</Label>
			)}
			{hasValue && (
				<Value
					value={value}
					className={`sui-progress-bar${
						has.float ? "--float-right" : "__value"
					}`}
				/>
			)}
			<Indicator value={value} />
			{hasAction && (
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
