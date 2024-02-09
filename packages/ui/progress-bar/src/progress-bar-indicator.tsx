// @ts-nocheck
import React from "react"
import { isFunction, generateCN } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"

// Import required components
import { Label } from "./elements/label"
import { Value } from "./elements/value"
import { Indicator } from "./elements/indicator"

import { ProgressBarProps } from "./progress-bar.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Build "progress bar" component
const ProgressBar: React.FC<ProgressBarProps> = ({
	label,
	value,
	size,
	isInline = false,
	hasValue = false,
	hasAction = false,
	onClick,
	className = "",
	...props
}) => {
	const has = {}
	const { cssCN } = useStyles(props, className)

	// Props validation
	// has.label = !isUndefined(label) && !isEmpty(label) ? true : false
	// has.float = !isInline && hasValue ? true : false

	const classNames = generateCN(
		"sui-progress-bar",
		{
			sm: "sm" === size,
			lg: "lg" === size,
			inline: isInline,
		},
		cssCN,
	)

	const labelClass = `sui-progress-bar${!!label ? "--float-left" : "__label"}`

	return (
		<div className={classNames}>
			{!!label && <Label className={labelClass}>{label}</Label>}
			{hasValue && (
				<Value
					value={value}
					className={`sui-progress-bar${!!label ? "--float-right" : "__value"}`}
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
